#!/usr/bin/env python3
"""Update GitHub star cache for the GitHub Pages app."""

from __future__ import annotations

import json
import os
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime, timezone
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
PROJECTS_PATH = ROOT / "docs" / "projects.json"
STARS_PATH = ROOT / "docs" / "stars.json"
SELF_REPO = "ningzimu/awesome-ai-ppt"
MAX_RETRIES = 2


def load_json(path: Path, default):
    if not path.exists():
        return default
    with path.open("r", encoding="utf-8") as file:
        return json.load(file)


def project_repos() -> list[str]:
    projects = load_json(PROJECTS_PATH, [])
    repos = {SELF_REPO}
    for project in projects:
        repo = project.get("repo") if isinstance(project, dict) else None
        if isinstance(repo, str) and "/" in repo:
            repos.add(repo)
    return sorted(repos)


def github_request(repo: str) -> int:
    request = urllib.request.Request(
        f"https://api.github.com/repos/{repo}",
        headers={
            "Accept": "application/vnd.github+json",
            "User-Agent": "awesome-ai-ppt-star-cache",
        },
    )
    token = os.getenv("GITHUB_TOKEN")
    if token:
        request.add_header("Authorization", f"Bearer {token}")

    with urllib.request.urlopen(request, timeout=20) as response:
        payload = json.load(response)
    stars = payload.get("stargazers_count")
    if not isinstance(stars, int):
        raise ValueError(f"{repo}: stargazers_count missing")
    return stars


def fetch_stars(repo: str) -> int:
    last_error: Exception | None = None
    for attempt in range(MAX_RETRIES + 1):
        try:
            return github_request(repo)
        except (urllib.error.URLError, urllib.error.HTTPError, TimeoutError, ValueError) as error:
            last_error = error
            if attempt < MAX_RETRIES:
                time.sleep(2 * (attempt + 1))
    raise RuntimeError(f"{repo}: {last_error}")


def main() -> int:
    repos = project_repos()
    previous = load_json(STARS_PATH, {})
    previous_stars = previous.get("stars", {}) if isinstance(previous, dict) else {}
    stars: dict[str, int] = {}
    failures: dict[str, str] = {}

    for repo in repos:
        try:
            stars[repo] = fetch_stars(repo)
        except RuntimeError as error:
            old_value = previous_stars.get(repo)
            if isinstance(old_value, int):
                stars[repo] = old_value
            failures[repo] = str(error)

    now = datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")
    payload = {
        "updatedAt": now,
        "source": "github-api",
        "repoCount": len(repos),
        "stars": dict(sorted(stars.items())),
        "missing": [repo for repo in repos if repo not in stars],
        "failures": failures,
    }
    STARS_PATH.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    if failures:
        print(f"Updated {len(stars)}/{len(repos)} repos; kept old values where possible.")
        for repo, error in failures.items():
            print(f"- {repo}: {error}", file=sys.stderr)
    else:
        print(f"Updated {len(stars)}/{len(repos)} repos.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
