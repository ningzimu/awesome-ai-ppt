const REPO = "ningzimu/awesome-ai-ppt";
const PROJECTS_URL = "https://raw.githubusercontent.com/ningzimu/awesome-ai-ppt/main/docs/projects.json";
const CACHE_URL = "https://awesome-ai-ppt-stars.internal/stars";
const CACHE_TTL_SECONDS = 1800;
const CONCURRENCY = 8;
const REFRESH_BATCH_SIZE = 20;

function jsonResponse(payload, init = {}) {
  const headers = new Headers(init.headers || {});
  headers.set("content-type", "application/json; charset=utf-8");
  headers.set("access-control-allow-origin", "*");
  headers.set("cache-control", `public, max-age=300, s-maxage=${CACHE_TTL_SECONDS}`);
  return new Response(JSON.stringify(payload), { ...init, headers });
}

function errorResponse(message, status = 500) {
  return jsonResponse({ error: message }, { status });
}

function uniqueRepos(projects) {
  const repos = new Set([REPO]);
  for (const project of projects) {
    if (project && typeof project.repo === "string" && project.repo.includes("/")) {
      repos.add(project.repo);
    }
  }
  return [...repos].sort();
}

async function fetchProjects() {
  const response = await fetch(PROJECTS_URL, {
    headers: { accept: "application/json" },
    cf: { cacheTtl: 0 }
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch projects: ${response.status}`);
  }
  return response.json();
}

async function fetchRepoStars(repo, env) {
  if (!env.GITHUB_TOKEN) {
    return fetchRepoStarsFromShields(repo);
  }

  const headers = {
    accept: "application/vnd.github+json",
    "user-agent": "awesome-ai-ppt-star-cache"
  };
  headers.authorization = `Bearer ${env.GITHUB_TOKEN}`;

  const response = await fetch(`https://api.github.com/repos/${repo}`, { headers });
  if (!response.ok) {
    throw new Error(`GitHub API returned ${response.status}`);
  }
  const payload = await response.json();
  if (!Number.isFinite(payload.stargazers_count)) {
    throw new Error("GitHub API response missed stargazers_count");
  }
  return payload.stargazers_count;
}

function parseCompactNumber(value) {
  if (typeof value === "number" && Number.isFinite(value)) return value;
  if (typeof value !== "string") return null;

  const match = value.trim().match(/^([\d,.]+)\s*([kKmM])?$/);
  if (!match) return null;

  const number = Number.parseFloat(match[1].replace(/,/g, ""));
  if (!Number.isFinite(number)) return null;

  const suffix = (match[2] || "").toLowerCase();
  if (suffix === "m") return Math.round(number * 1_000_000);
  if (suffix === "k") return Math.round(number * 1_000);
  return Math.round(number);
}

async function fetchRepoStarsFromShields(repo) {
  const response = await fetch(`https://img.shields.io/github/stars/${repo}.json`, {
    headers: { accept: "application/json" },
    cf: { cacheTtl: CACHE_TTL_SECONDS }
  });
  if (!response.ok) {
    throw new Error(`Shields returned ${response.status}`);
  }
  const payload = await response.json();
  const stars = parseCompactNumber(payload.value);
  if (!Number.isFinite(stars)) {
    throw new Error("Shields response missed stars");
  }
  return stars;
}

async function mapWithConcurrency(items, mapper) {
  const results = new Array(items.length);
  let cursor = 0;
  const workers = Array.from({ length: Math.min(CONCURRENCY, items.length) }, async () => {
    while (cursor < items.length) {
      const index = cursor;
      cursor += 1;
      results[index] = await mapper(items[index]);
    }
  });
  await Promise.all(workers);
  return results;
}

async function readCachedPayload() {
  const cached = await caches.default.match(new Request(CACHE_URL));
  if (!cached) return null;

  try {
    return await cached.json();
  } catch {
    return null;
  }
}

function nextBatch(repos, cursor) {
  const start = Number.isInteger(cursor) && cursor >= 0 && cursor < repos.length ? cursor : 0;
  const batch = repos.includes(REPO) ? [REPO] : [];
  for (let offset = 0; offset < Math.min(REFRESH_BATCH_SIZE, repos.length); offset += 1) {
    const repo = repos[(start + offset) % repos.length];
    if (!batch.includes(repo)) {
      batch.push(repo);
    }
  }
  return {
    batch,
    cursor: repos.length ? (start + batch.length) % repos.length : 0
  };
}

async function buildStarPayload(env, previous = null) {
  const projects = await fetchProjects();
  const repos = uniqueRepos(projects);
  const currentRepos = new Set(repos);
  const stars = {};
  const previousStars = previous && previous.stars && typeof previous.stars === "object" ? previous.stars : {};
  for (const [repo, value] of Object.entries(previousStars)) {
    if (currentRepos.has(repo) && Number.isFinite(value)) {
      stars[repo] = value;
    }
  }
  const missing = [];
  const { batch, cursor } = nextBatch(repos, previous && previous.cursor);

  await mapWithConcurrency(batch, async (repo) => {
    try {
      stars[repo] = await fetchRepoStars(repo, env);
    } catch {
      missing.push(repo);
    }
  });

  const updatedAt = new Date();
  const expiresAt = new Date(updatedAt.getTime() + CACHE_TTL_SECONDS * 1000);
  return {
    updatedAt: updatedAt.toISOString(),
    expiresAt: expiresAt.toISOString(),
    ttl: CACHE_TTL_SECONDS,
    source: env.GITHUB_TOKEN ? "github" : "shields",
    repoCount: repos.length,
    refreshed: batch,
    cursor,
    stars,
    missing: missing.sort()
  };
}

async function refreshCache(env) {
  const previous = await readCachedPayload();
  const payload = await buildStarPayload(env, previous);
  const response = jsonResponse(payload);
  await caches.default.put(new Request(CACHE_URL), response.clone());
  return response;
}

async function handleStars(env) {
  const cached = await caches.default.match(new Request(CACHE_URL));
  if (cached) return cached;
  return refreshCache(env);
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "access-control-allow-origin": "*",
          "access-control-allow-methods": "GET, OPTIONS",
          "access-control-allow-headers": "content-type"
        }
      });
    }

    if (request.method !== "GET") {
      return errorResponse("Method not allowed", 405);
    }

    if (url.pathname === "/health") {
      return jsonResponse({ ok: true });
    }

    if (url.pathname === "/" || url.pathname === "/stars") {
      try {
        if (url.searchParams.get("refresh") === "1") {
          return await refreshCache(env);
        }
        return await handleStars(env);
      } catch (error) {
        return errorResponse(error.message || "Could not load stars");
      }
    }

    return errorResponse("Not found", 404);
  },

  async scheduled(event, env, ctx) {
    ctx.waitUntil(refreshCache(env));
  }
};
