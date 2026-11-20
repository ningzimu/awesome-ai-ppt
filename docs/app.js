const categories = [
  "All",
  "HTML-First Presentation Workflows",
  "Image-First Presentation Workflows",
  "PPTX-Native Generation Workflows",
  "PPTX Libraries and Automation Infrastructure"
];

const REPO = "ningzimu/awesome-ai-ppt";
const STAR_CACHE_URL = window.AWESOME_AI_PPT_STAR_CACHE_URL || "stars.json";
const STORAGE_LANG_KEY = "awesome-ai-ppt-lang";
const STORAGE_THEME_KEY = "awesome-ai-ppt-theme";
const STORAGE_VIEW_KEY = "awesome-ai-ppt-view";

const routeSvgs = {
  "HTML-First Presentation Workflows": `
    <svg width="112" height="36" viewBox="0 0 112 36" fill="none" aria-hidden="true">
      <rect x="2" y="3" width="60" height="30" rx="5" stroke="currentColor" stroke-width="1.5" opacity="0.85"/>
      <circle cx="9" cy="9" r="1.5" fill="currentColor" opacity="0.6"/>
      <circle cx="14" cy="9" r="1.5" fill="currentColor" opacity="0.6"/>
      <path d="M9 17h20M9 22h32M9 27h16" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity="0.55"/>
      <path d="M68 18h12m0 0-3.5-3.5M80 18l-3.5 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/>
      <rect x="85" y="7" width="25" height="22" rx="4" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.5"/>
      <path d="M91 15h13M91 20h9" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>
    </svg>
  `,
  "Image-First Presentation Workflows": `
    <svg width="112" height="36" viewBox="0 0 112 36" fill="none" aria-hidden="true">
      <rect x="4" y="4" width="48" height="28" rx="5" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.5"/>
      <circle cx="16" cy="13" r="3" fill="currentColor" opacity="0.75"/>
      <path d="M9 27l10-9 8 7 7-5 13 7" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M58 18h14m0 0-3.5-3.5M72 18l-3.5 3.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/>
      <rect x="78" y="6" width="30" height="24" rx="4" stroke="currentColor" stroke-width="1.5"/>
      <rect x="82" y="10" width="22" height="16" rx="2" fill="currentColor" fill-opacity="0.18"/>
    </svg>
  `,
  "PPTX-Native Generation Workflows": `
    <svg width="112" height="36" viewBox="0 0 112 36" fill="none" aria-hidden="true">
      <rect x="6" y="4" width="100" height="28" rx="5" stroke="currentColor" stroke-width="1.5" opacity="0.9"/>
      <rect x="13" y="10" width="38" height="6" rx="2" fill="currentColor" fill-opacity="0.22"/>
      <path d="M13 22h28M13 26h20" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" opacity="0.6"/>
      <rect x="60" y="10" width="38" height="16" rx="3" fill="currentColor" fill-opacity="0.12" stroke="currentColor" stroke-width="1.3"/>
      <path d="M67 22v-5M74 22v-8M81 22v-4M88 22v-9" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  `,
  "PPTX Libraries and Automation Infrastructure": `
    <svg width="112" height="36" viewBox="0 0 112 36" fill="none" aria-hidden="true">
      <rect x="6" y="9" width="24" height="18" rx="4" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.5"/>
      <rect x="44" y="6" width="24" height="24" rx="5" fill="currentColor" fill-opacity="0.2" stroke="currentColor" stroke-width="1.6"/>
      <rect x="82" y="9" width="24" height="18" rx="4" fill="currentColor" fill-opacity="0.14" stroke="currentColor" stroke-width="1.5"/>
      <path d="M30 18h14M68 18h14" stroke="currentColor" stroke-width="1.6" stroke-dasharray="3 2.5"/>
      <circle cx="56" cy="18" r="3.5" fill="currentColor"/>
    </svg>
  `
};

const categoryMeta = {
  All: {
    index: "ALL",
    zh: "全部分类",
    en: "All routes",
    shortZh: "全部",
    shortEn: "All",
    color: "var(--text)",
    bg: "var(--bg-muted)",
    border: "var(--border-strong)"
  },
  "HTML-First Presentation Workflows": {
    index: "01 · HTML-FIRST",
    zh: "HTML 风格 PPT 方案",
    en: "HTML-First Workflows",
    shortZh: "HTML 风格",
    shortEn: "HTML-First",
    descZh: "先生成网页幻灯片或 React 演示，再导出或转换为 PPTX / PDF",
    descEn: "Create web slides or React decks first, then export or convert to PPTX",
    color: "var(--route-html)",
    bg: "var(--route-html-bg)",
    border: "var(--route-html-border)"
  },
  "Image-First Presentation Workflows": {
    index: "02 · IMAGE-FIRST",
    zh: "图片生成式 PPT 方案",
    en: "Image-First Workflows",
    shortZh: "图片生成式",
    shortEn: "Image-First",
    descZh: "由图像模型生成整页高视觉幻灯片，再封装为 PPTX、PDF 或视频",
    descEn: "Generate full visual slides with image models, packaged as PPTX or video",
    color: "var(--route-image)",
    bg: "var(--route-image-bg)",
    border: "var(--route-image-border)"
  },
  "PPTX-Native Generation Workflows": {
    index: "03 · PPTX-NATIVE",
    zh: "PPTX 库生成式 PPT 方案",
    en: "PPTX-Native Workflows",
    shortZh: "PPTX 原生",
    shortEn: "PPTX-Native",
    descZh: "通过 python-pptx、PptxGenJS 或 Office XML 直接生成原生可编辑对象",
    descEn: "Generate native editable PowerPoint elements via libraries or Office XML",
    color: "var(--route-pptx)",
    bg: "var(--route-pptx-bg)",
    border: "var(--route-pptx-border)"
  },
  "PPTX Libraries and Automation Infrastructure": {
    index: "04 · INFRA & REBUILD",
    zh: "PPTX 库与自动化基础设施",
    en: "Libraries & Infrastructure",
    shortZh: "库与基础设施",
    shortEn: "Infrastructure",
    descZh: "底层库、MCP Server、Office COM 自动化及 OCR / DOM 可编辑重建",
    descEn: "Core libraries, MCP servers, COM automation, and editable reconstruction",
    color: "var(--route-infra)",
    bg: "var(--route-infra-bg)",
    border: "var(--route-infra-border)"
  }
};

const editableLevels = ["All", "Editable", "Source editable", "Partially editable", "Image-based"];

const editableMeta = {
  All: { zh: "不限", en: "Any", cls: "pill-neutral" },
  Editable: { zh: "原生可编辑", en: "Editable", cls: "pill-editable" },
  "Source editable": { zh: "源码可编辑", en: "Source editable", cls: "pill-source" },
  "Partially editable": { zh: "部分可编辑", en: "Partially editable", cls: "pill-partial" },
  "Image-based": { zh: "图片式", en: "Image-based", cls: "pill-image" },
  Unknown: { zh: "未确认", en: "Unknown", cls: "pill-neutral" }
};

function readStorage(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {}
}

const state = {
  projects: [],
  category: "All",
  editable: "All",
  tag: "",
  quick: "all",
  query: "",
  sort: "stars-desc",
  view: readStorage(STORAGE_VIEW_KEY, "grid"),
  lang: readStorage(STORAGE_LANG_KEY, "zh") === "en" ? "en" : "zh",
  showAllTags: false,
  updatedAt: null
};

const translations = {
  zh: {
    brandSub: "Slide Workflows",
    navRoutes: "技术路线",
    navDirectory: "项目目录",
    navAgent: "Agent Skill",
    heroBadge: "开源精选 · 每日自动同步 GitHub Star",
    heroTitlePre: "发现最合适的",
    heroTitleAccent: "AI PPT 开源工作流",
    heroCopy: "按主工作流源表示分类，而非仅看导出格式。系统对比 HTML 风格、图片生成式、PPTX 原生生成与自动化重建基础设施。",
    searchLabel: "搜索项目",
    searchPlaceholder: "搜索仓库名、技术路线、输出格式、中英文关键词...",
    trendingLabel: "热门检索：",
    projectsLabel: "精选项目",
    skillsLabel: "支持 Skill / MCP",
    editableLabel: "原生可编辑 PPTX",
    thresholdLabel: "Star 收录门槛",
    routesKicker: "FOUR WORKFLOW ROUTES",
    routesHeading: "四大技术路线画廊",
    routesSub: "点击任意路线画布，即刻筛选对应开源方案",
    filterTitle: "筛选条件",
    resetFilters: "清空",
    facetRoute: "技术路线",
    facetEditability: "可编辑性",
    facetIntegration: "接入形态",
    facetTags: "热门标签",
    showAllTags: "展开全部",
    collapseTags: "收起",
    quickAll: "全部",
    quickSkill: "Agent Skill",
    quickMcp: "MCP Server",
    quickApp: "独立应用",
    quickLib: "开发库 / CLI",
    promoTitle: "让 AI 帮你做 PPT 工具选型",
    promoCopy: "安装 awesome-ai-ppt skill，告诉 AI 你的材料与编辑要求，自动对比原仓库推荐方案。",
    promoCta: "查看接入指南",
    sortLabel: "排序",
    sortStarsDesc: "按 Star 降序",
    sortStarsAsc: "按 Star 升序",
    sortNameAsc: "按名称 A-Z",
    projectCount: (count) => `共 ${count} 个项目`,
    updatedPrefix: (date) => `同步于 ${date}`,
    noResults: "没有找到符合当前筛选条件的项目。",
    resetBtnFull: "重置全部筛选条件",
    loadFailed: "项目数据加载失败。",
    copiedRepo: (name) => `已复制 ${name}`,
    copyRepoTitle: "复制仓库名",
    footerRepo: "GitHub 仓库",
    footerContribute: "贡献指南",
    footerIssues: "Issues",
    footerAgent: "Agent Skill"
  },
  en: {
    brandSub: "Slide Workflows",
    navRoutes: "Routes",
    navDirectory: "Directory",
    navAgent: "Agent Skill",
    heroBadge: "Curated Open-Source · Stars Synced Daily",
    heroTitlePre: "Find the right",
    heroTitleAccent: "AI PPT Workflow",
    heroCopy: "Classified by primary source representation rather than export format. Compare HTML-first, image-first, PPTX-native, and automation infrastructure.",
    searchLabel: "Search projects",
    searchPlaceholder: "Search repo, route, output format, or keywords...",
    trendingLabel: "Try:",
    projectsLabel: "Projects",
    skillsLabel: "Skill / MCP",
    editableLabel: "Native Editable",
    thresholdLabel: "Stars Min",
    routesKicker: "FOUR WORKFLOW ROUTES",
    routesHeading: "Four Technical Routes",
    routesSub: "Click any slide route card to filter matching projects",
    filterTitle: "Filters",
    resetFilters: "Reset",
    facetRoute: "Workflow Route",
    facetEditability: "Editability",
    facetIntegration: "Integration",
    facetTags: "Popular Tags",
    showAllTags: "Show all",
    collapseTags: "Collapse",
    quickAll: "All",
    quickSkill: "Agent Skill",
    quickMcp: "MCP Server",
    quickApp: "App",
    quickLib: "Library / CLI",
    promoTitle: "Let your AI agent pick the tool",
    promoCopy: "Install the awesome-ai-ppt skill to match projects against your materials, editability, and setup constraints.",
    promoCta: "Agent setup guide",
    sortLabel: "Sort",
    sortStarsDesc: "Stars: High to Low",
    sortStarsAsc: "Stars: Low to High",
    sortNameAsc: "Name: A-Z",
    projectCount: (count) => `${count} ${count === 1 ? "project" : "projects"}`,
    updatedPrefix: (date) => `Synced ${date}`,
    noResults: "No projects match your current filters.",
    resetBtnFull: "Reset all filters",
    loadFailed: "Could not load project data.",
    copiedRepo: (name) => `Copied ${name}`,
    copyRepoTitle: "Copy repository name",
    footerRepo: "GitHub",
    footerContribute: "Contributing",
    footerIssues: "Issues",
    footerAgent: "Agent Skill"
  }
};

const nodes = {
  routeCards: document.querySelector("#routeCards"),
  categoryNav: document.querySelector("#categoryNav"),
  editableNav: document.querySelector("#editableNav"),
  tagCloud: document.querySelector("#tagCloud"),
  toggleAllTags: document.querySelector("#toggleAllTags"),
  projectList: document.querySelector("#projectList"),
  searchInput: document.querySelector("#searchInput"),
  clearSearchBtn: document.querySelector("#clearSearchBtn"),
  sortSelect: document.querySelector("#sortSelect"),
  resultCount: document.querySelector("#resultCount"),
  activeFilters: document.querySelector("#activeFilters"),
  sidebarReset: document.querySelector("#sidebarReset"),
  statProjects: document.querySelector("#statProjects"),
  statSkills: document.querySelector("#statSkills"),
  statEditable: document.querySelector("#statEditable"),
  starsUpdated: document.querySelector("#starsUpdated"),
  repoStars: document.querySelector("#repoStars"),
  themeToggle: document.querySelector("#themeToggle"),
  toast: document.querySelector("#toast"),
  quickFilterButtons: document.querySelectorAll("[data-quick]"),
  hintButtons: document.querySelectorAll("[data-hint]"),
  viewButtons: document.querySelectorAll("[data-view]"),
  languageButtons: document.querySelectorAll("[data-lang]"),
  i18nNodes: document.querySelectorAll("[data-i18n]")
};

let toastTimer = null;

function showToast(message) {
  if (!nodes.toast) return;
  nodes.toast.textContent = message;
  nodes.toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => nodes.toast.classList.remove("show"), 1800);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatStars(stars) {
  if (typeof stars !== "number") return "—";
  return new Intl.NumberFormat("en-US").format(stars);
}

function renderRepoStars(stars) {
  if (!nodes.repoStars || typeof stars !== "number") return;
  nodes.repoStars.textContent = formatStars(stars);
}

function projectStars(project) {
  return typeof project.stars === "number" ? project.stars : null;
}

function searchable(project) {
  return [
    project.name,
    project.repo,
    project.category,
    project.categoryZh,
    project.type,
    project.output,
    project.editable,
    project.skill,
    ...(project.tags || []),
    project.description,
    project.descriptionZh
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function allTags() {
  const counts = new Map();
  state.projects.forEach((project) => {
    (project.tags || []).forEach((tag) => {
      counts.set(tag, (counts.get(tag) || 0) + 1);
    });
  });
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
}

function sorted(projects) {
  return [...projects].sort((a, b) => {
    if (state.sort === "name-asc") {
      return a.name.localeCompare(b.name);
    }

    const aStars = projectStars(a);
    const bStars = projectStars(b);

    if (aStars === null && bStars === null) return a.name.localeCompare(b.name);
    if (aStars === null) return 1;
    if (bStars === null) return -1;

    if (state.sort === "stars-asc") {
      return aStars - bStars || a.name.localeCompare(b.name);
    }
    return bStars - aStars || a.name.localeCompare(b.name);
  });
}

function matchesQuickFilter(project) {
  const tags = project.tags || [];
  const type = String(project.type || "").toLowerCase();
  if (state.quick === "skill") return project.skill === "Skill";
  if (state.quick === "mcp") return project.skill === "MCP" || tags.includes("MCP");
  if (state.quick === "app") return type === "app" || tags.includes("App");
  if (state.quick === "library") {
    return type === "library" || type === "cli" || tags.includes("Library") || tags.includes("CLI");
  }
  return true;
}

function filteredProjects() {
  const query = state.query.trim().toLowerCase();
  return sorted(
    state.projects.filter((project) => {
      const categoryMatch = state.category === "All" || project.category === state.category;
      const editableMatch = state.editable === "All" || project.editable === state.editable;
      const tagMatch = !state.tag || (project.tags || []).includes(state.tag);
      const quickMatch = matchesQuickFilter(project);
      const queryMatch = !query || searchable(project).includes(query);
      return categoryMatch && editableMatch && tagMatch && quickMatch && queryMatch;
    })
  );
}

function hasActiveFilters() {
  return (
    state.category !== "All" ||
    state.editable !== "All" ||
    state.tag !== "" ||
    state.quick !== "all" ||
    state.query.trim() !== ""
  );
}

function renderRouteDeck() {
  if (!nodes.routeCards) return;
  const routes = categories.slice(1);
  nodes.routeCards.innerHTML = routes
    .map((category) => {
      const meta = categoryMeta[category];
      const count = state.projects.filter((p) => p.category === category).length;
      const active = state.category === category ? " active" : "";
      const title = state.lang === "zh" ? meta.zh : meta.en;
      const desc = state.lang === "zh" ? meta.descZh : meta.descEn;
      return `
        <button
          class="route-slide-card${active}"
          type="button"
          data-route="${escapeHtml(category)}"
          style="--r-color:${meta.color};--r-bg:${meta.bg};--r-border:${meta.border}"
        >
          <div class="slide-card-top">
            <span class="slide-index">${escapeHtml(meta.index)}</span>
            <span class="slide-count">${count}</span>
          </div>
          <div class="slide-preview-canvas">
            ${routeSvgs[category] || ""}
          </div>
          <div class="slide-card-body">
            <h3>${escapeHtml(title)}</h3>
            <p>${escapeHtml(desc)}</p>
          </div>
        </button>
      `;
    })
    .join("");
}

function renderCategorySidebar() {
  nodes.categoryNav.innerHTML = categories
    .map((category) => {
      const meta = categoryMeta[category];
      const count =
        category === "All"
          ? state.projects.length
          : state.projects.filter((p) => p.category === category).length;
      const active = category === state.category ? " active" : "";
      const label = state.lang === "zh" ? meta.shortZh : meta.shortEn;
      const dot =
        category === "All"
          ? ""
          : `<span class="facet-dot" style="background:${meta.color}"></span>`;
      return `
        <button class="facet-row${active}" type="button" data-category="${escapeHtml(category)}">
          <span class="facet-row-left">
            ${dot}
            <span>${escapeHtml(label)}</span>
          </span>
          <span class="facet-count">${count}</span>
        </button>
      `;
    })
    .join("");
}

function renderEditableSidebar() {
  if (!nodes.editableNav) return;
  nodes.editableNav.innerHTML = editableLevels
    .map((level) => {
      const info = editableMeta[level];
      const label = state.lang === "zh" ? info.zh : info.en;
      const active = state.editable === level ? " active" : "";
      return `
        <button class="facet-pill${active}" type="button" data-editable="${escapeHtml(level)}">
          ${escapeHtml(label)}
        </button>
      `;
    })
    .join("");
}

function renderTagCloud() {
  if (!nodes.tagCloud) return;
  const tags = allTags();
  const visible = state.showAllTags ? tags : tags.slice(0, 14);
  nodes.tagCloud.innerHTML = visible
    .map(([tag, count]) => {
      const active = state.tag === tag ? " active" : "";
      return `
        <button class="cloud-tag${active}" type="button" data-tag-click="${escapeHtml(tag)}">
          <span>${escapeHtml(tag)}</span>
          <em>${count}</em>
        </button>
      `;
    })
    .join("");

  if (nodes.toggleAllTags) {
    const t = translations[state.lang];
    nodes.toggleAllTags.hidden = tags.length <= 14;
    nodes.toggleAllTags.textContent = state.showAllTags ? t.collapseTags : t.showAllTags;
  }
}

function renderActiveFilters() {
  if (!nodes.activeFilters) return;
  const chips = [];
  if (state.category !== "All") {
    const meta = categoryMeta[state.category];
    chips.push({
      key: "category",
      label: state.lang === "zh" ? meta.shortZh : meta.shortEn
    });
  }
  if (state.editable !== "All") {
    const info = editableMeta[state.editable];
    chips.push({
      key: "editable",
      label: state.lang === "zh" ? info.zh : info.en
    });
  }
  if (state.quick !== "all") {
    const t = translations[state.lang];
    const quickMap = {
      skill: t.quickSkill,
      mcp: t.quickMcp,
      app: t.quickApp,
      library: t.quickLib
    };
    chips.push({ key: "quick", label: quickMap[state.quick] || state.quick });
  }
  if (state.tag) {
    chips.push({ key: "tag", label: `#${state.tag}` });
  }
  if (state.query.trim()) {
    chips.push({ key: "query", label: `"${state.query.trim()}"` });
  }

  nodes.activeFilters.innerHTML = chips
    .map(
      (chip) => `
        <button class="active-chip" type="button" data-clear-filter="${chip.key}">
          <span>${escapeHtml(chip.label)}</span>
          <span aria-hidden="true">×</span>
        </button>
      `
    )
    .join("");
}

function splitRepo(name) {
  const parts = String(name || "").split("/");
  if (parts.length === 2) return { owner: parts[0], repo: parts[1] };
  return { owner: "", repo: String(name || "") };
}

function monogram(repo) {
  const clean = String(repo || "").replace(/[^a-zA-Z0-9\u4e00-\u9fff]/g, "");
  return (clean.slice(0, 2) || "AI").toUpperCase();
}

function renderProjectCard(project) {
  const t = translations[state.lang];
  const meta = categoryMeta[project.category] || categoryMeta.All;
  const routeLabel = state.lang === "zh" ? meta.shortZh : meta.shortEn;
  const editInfo = editableMeta[project.editable] || editableMeta.Unknown;
  const editLabel = state.lang === "zh" ? editInfo.zh : editInfo.en;
  const description = state.lang === "zh" ? project.descriptionZh : project.description;
  const { owner, repo } = splitRepo(project.name);
  const isHot = typeof project.stars === "number" && project.stars >= 5000;

  const skillBadge =
    project.skill && project.skill !== "No"
      ? `<span class="pill-badge pill-skill">${escapeHtml(project.skill)}</span>`
      : "";
  const outputBadge = project.output
    ? `<span class="pill-badge pill-neutral">${escapeHtml(project.output)}</span>`
    : "";

  const displayTags = (project.tags || []).slice(0, 4);
  const tagHtml = displayTags
    .map((tag) => {
      const active = state.tag === tag ? " active" : "";
      return `<button class="card-tag-btn${active}" type="button" data-tag-click="${escapeHtml(tag)}">${escapeHtml(tag)}</button>`;
    })
    .join("");

  return `
    <article class="project-card" style="--card-accent:${meta.color};--card-accent-bg:${meta.bg}">
      <div>
        <div class="card-top">
          <div class="card-identity">
            <span class="card-avatar" aria-hidden="true">${escapeHtml(monogram(repo))}</span>
            <div class="card-titles">
              ${owner ? `<span class="card-owner">${escapeHtml(owner)}</span>` : ""}
              <h3 class="card-repo">
                <a href="${escapeHtml(project.url)}" target="_blank" rel="noopener noreferrer">
                  <span>${escapeHtml(repo)}</span>
                  <svg class="ext-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M7 17 17 7M7 7h10v10"/>
                  </svg>
                </a>
              </h3>
            </div>
          </div>

          <div class="card-right">
            <span class="star-badge${isHot ? " is-hot" : ""}" aria-label="GitHub stars">
              <span class="star-icon" aria-hidden="true">★</span>
              <span>${formatStars(project.stars)}</span>
            </span>
            <button class="copy-repo-btn" type="button" data-copy-repo="${escapeHtml(project.name)}" title="${escapeHtml(t.copyRepoTitle)}" aria-label="${escapeHtml(t.copyRepoTitle)}">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="9" y="9" width="13" height="13" rx="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
            </button>
          </div>
        </div>

        <p class="card-desc">${escapeHtml(description)}</p>
      </div>

      <div class="card-footer">
        <div class="card-badges">
          <span class="pill-badge pill-route">
            <span class="pill-route-dot" aria-hidden="true"></span>
            ${escapeHtml(routeLabel)}
          </span>
          <span class="pill-badge ${editInfo.cls}">${escapeHtml(editLabel)}</span>
          ${skillBadge}
          ${outputBadge}
        </div>
        ${tagHtml ? `<div class="card-tags">${tagHtml}</div>` : ""}
      </div>
    </article>
  `;
}

function renderListRow(project) {
  const meta = categoryMeta[project.category] || categoryMeta.All;
  const routeLabel = state.lang === "zh" ? meta.shortZh : meta.shortEn;
  const editInfo = editableMeta[project.editable] || editableMeta.Unknown;
  const editLabel = state.lang === "zh" ? editInfo.zh : editInfo.en;
  const description = state.lang === "zh" ? project.descriptionZh : project.description;
  const { owner, repo } = splitRepo(project.name);
  const isHot = typeof project.stars === "number" && project.stars >= 5000;
  const skillBadge =
    project.skill && project.skill !== "No"
      ? `<span class="pill-badge pill-skill">${escapeHtml(project.skill)}</span>`
      : "";

  return `
    <article class="list-row" style="--card-accent:${meta.color};--card-accent-bg:${meta.bg}">
      <div class="list-main">
        <div class="list-title-line">
          <a class="list-repo-link" href="${escapeHtml(project.url)}" target="_blank" rel="noopener noreferrer">
            ${owner ? `<span class="list-repo-owner">${escapeHtml(owner)} / </span>` : ""}${escapeHtml(repo)}
          </a>
          ${skillBadge}
        </div>
        <p class="list-desc">${escapeHtml(description)}</p>
      </div>
      <div class="list-meta">
        <span class="pill-badge pill-route">
          <span class="pill-route-dot" aria-hidden="true"></span>
          ${escapeHtml(routeLabel)}
        </span>
      </div>
      <div class="list-meta">
        <span class="pill-badge ${editInfo.cls}">${escapeHtml(editLabel)}</span>
      </div>
      <div class="list-stars">
        <span class="star-badge${isHot ? " is-hot" : ""}">
          <span class="star-icon" aria-hidden="true">★</span>
          <span>${formatStars(project.stars)}</span>
        </span>
      </div>
    </article>
  `;
}

function renderProjects() {
  const t = translations[state.lang];
  const projects = filteredProjects();
  nodes.resultCount.textContent = t.projectCount(projects.length);

  const filtering = hasActiveFilters();
  if (nodes.sidebarReset) nodes.sidebarReset.hidden = !filtering;
  if (nodes.clearSearchBtn) nodes.clearSearchBtn.hidden = !state.query;
  renderActiveFilters();

  nodes.projectList.classList.toggle("is-list", state.view === "list");

  if (!projects.length) {
    nodes.projectList.innerHTML = `
      <div class="empty-state">
        <p>${escapeHtml(t.noResults)}</p>
        <button class="primary-btn" type="button" data-reset-empty>${escapeHtml(t.resetBtnFull)}</button>
      </div>
    `;
    return;
  }

  nodes.projectList.innerHTML =
    state.view === "list"
      ? projects.map(renderListRow).join("")
      : projects.map(renderProjectCard).join("");
}

function renderUpdatedAt() {
  if (!nodes.starsUpdated || !state.updatedAt) return;
  const t = translations[state.lang];
  nodes.starsUpdated.textContent = t.updatedPrefix(String(state.updatedAt).slice(0, 10));
}

function renderStaticText() {
  const t = translations[state.lang];
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  nodes.i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    const value = t[key];
    if (typeof value === "string") node.textContent = value;
  });
  nodes.searchInput.placeholder = t.searchPlaceholder;
  nodes.languageButtons.forEach((btn) => btn.classList.toggle("active", btn.dataset.lang === state.lang));
  nodes.quickFilterButtons.forEach((btn) => btn.classList.toggle("active", btn.dataset.quick === state.quick));
  nodes.viewButtons.forEach((btn) => btn.classList.toggle("active", btn.dataset.view === state.view));
  renderUpdatedAt();
}

function render() {
  renderStaticText();
  renderRouteDeck();
  renderCategorySidebar();
  renderEditableSidebar();
  renderTagCloud();
  renderProjects();
}

function resetAllFilters() {
  state.category = "All";
  state.editable = "All";
  state.tag = "";
  state.quick = "all";
  state.query = "";
  nodes.searchInput.value = "";
  render();
}

function applyStarCache(cache) {
  const stars = cache && cache.stars && typeof cache.stars === "object" ? cache.stars : {};
  state.updatedAt = cache && cache.updatedAt ? cache.updatedAt : null;
  state.projects = state.projects.map((project) => ({
    ...project,
    stars: Number.isFinite(stars[project.repo]) ? stars[project.repo] : null
  }));
  renderRepoStars(stars[REPO]);
  renderUpdatedAt();
  renderProjects();
}

function loadStarCache() {
  fetch(STAR_CACHE_URL, { cache: "no-store" })
    .then((response) => {
      if (!response.ok) throw new Error("Could not load star cache");
      return response.json();
    })
    .then(applyStarCache)
    .catch(() => renderProjects());
}

// Event Listeners
if (nodes.routeCards) {
  nodes.routeCards.addEventListener("click", (event) => {
    const card = event.target.closest("button[data-route]");
    if (!card) return;
    const route = card.dataset.route;
    state.category = state.category === route ? "All" : route;
    render();
    const dir = document.querySelector("#directory");
    if (dir) dir.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

nodes.categoryNav.addEventListener("click", (event) => {
  const btn = event.target.closest("button[data-category]");
  if (!btn) return;
  state.category = btn.dataset.category;
  render();
});

if (nodes.editableNav) {
  nodes.editableNav.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-editable]");
    if (!btn) return;
    const value = btn.dataset.editable;
    state.editable = state.editable === value && value !== "All" ? "All" : value;
    render();
  });
}

if (nodes.tagCloud) {
  nodes.tagCloud.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-tag-click]");
    if (!btn) return;
    const tag = btn.dataset.tagClick;
    state.tag = state.tag === tag ? "" : tag;
    render();
  });
}

if (nodes.toggleAllTags) {
  nodes.toggleAllTags.addEventListener("click", () => {
    state.showAllTags = !state.showAllTags;
    renderTagCloud();
  });
}

nodes.quickFilterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    state.quick = btn.dataset.quick;
    render();
  });
});

nodes.hintButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const hint = btn.dataset.hint;
    state.query = state.query === hint ? "" : hint;
    nodes.searchInput.value = state.query;
    renderProjects();
    const dir = document.querySelector("#directory");
    if (dir && state.query) dir.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

nodes.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderProjects();
});

if (nodes.clearSearchBtn) {
  nodes.clearSearchBtn.addEventListener("click", () => {
    state.query = "";
    nodes.searchInput.value = "";
    nodes.searchInput.focus();
    renderProjects();
  });
}

nodes.sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderProjects();
});

nodes.viewButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    state.view = btn.dataset.view;
    writeStorage(STORAGE_VIEW_KEY, state.view);
    renderStaticText();
    renderProjects();
  });
});

nodes.languageButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    state.lang = btn.dataset.lang === "en" ? "en" : "zh";
    writeStorage(STORAGE_LANG_KEY, state.lang);
    render();
  });
});

if (nodes.sidebarReset) {
  nodes.sidebarReset.addEventListener("click", resetAllFilters);
}

if (nodes.activeFilters) {
  nodes.activeFilters.addEventListener("click", (event) => {
    const chip = event.target.closest("button[data-clear-filter]");
    if (!chip) return;
    const key = chip.dataset.clearFilter;
    if (key === "category") state.category = "All";
    if (key === "editable") state.editable = "All";
    if (key === "quick") state.quick = "all";
    if (key === "tag") state.tag = "";
    if (key === "query") {
      state.query = "";
      nodes.searchInput.value = "";
    }
    render();
  });
}

nodes.projectList.addEventListener("click", async (event) => {
  const tagBtn = event.target.closest("button[data-tag-click]");
  if (tagBtn) {
    const tag = tagBtn.dataset.tagClick;
    state.tag = state.tag === tag ? "" : tag;
    render();
    return;
  }

  const copyBtn = event.target.closest("button[data-copy-repo]");
  if (copyBtn) {
    const repoName = copyBtn.dataset.copyRepo;
    try {
      await navigator.clipboard.writeText(repoName);
      showToast(translations[state.lang].copiedRepo(repoName));
    } catch {}
    return;
  }

  const resetEmptyBtn = event.target.closest("button[data-reset-empty]");
  if (resetEmptyBtn) resetAllFilters();
});

if (nodes.themeToggle) {
  nodes.themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    writeStorage(STORAGE_THEME_KEY, next);
  });
}

document.addEventListener("keydown", (event) => {
  if (
    event.key === "/" &&
    document.activeElement !== nodes.searchInput &&
    !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)
  ) {
    event.preventDefault();
    nodes.searchInput.focus();
  }
});

function applyProjects(projects) {
  state.projects = projects.map((project) => ({ ...project, stars: null }));
  nodes.statProjects.textContent = projects.length;
  if (nodes.statSkills) {
    nodes.statSkills.textContent = projects.filter((p) => p.skill && p.skill !== "No").length;
  }
  if (nodes.statEditable) {
    nodes.statEditable.textContent = projects.filter((p) => p.editable === "Editable").length;
  }
  render();
  loadStarCache();
}

function showLoadError() {
  nodes.projectList.innerHTML = `
    <div class="empty-state">
      <p>${escapeHtml(translations[state.lang].loadFailed)}</p>
    </div>
  `;
}

if (window.AWESOME_AI_PPT_PROJECTS) {
  applyProjects(window.AWESOME_AI_PPT_PROJECTS);
} else {
  fetch("projects.json")
    .then((response) => response.json())
    .then(applyProjects)
    .catch(showLoadError);
}
