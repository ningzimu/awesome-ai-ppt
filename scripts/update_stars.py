#!/usr/bin/env python3
"""Refresh GitHub star counts in docs/projects.json."""

from __future__ import annotations

from pathlib import Path
import json
import os
import time
from urllib.error import HTTPError
from urllib.request import Request, urlopen


ROOT = Path(__file__).resolve().parents[1]
PROJECTS_PATH = ROOT / "docs/projects.json"
GITHUB_API = "https://api.github.com/repos/"


def fetch_repo_stars(repo: str, token: str | None) -> int:
    headers = {
        "Accept": "application/vnd.github+json",
        "User-Agent": "awesome-ai-ppt-star-updater",
        "X-GitHub-Api-Version": "2022-11-28",
    }
    if token:
        headers["Authorization"] = f"Bearer {token}"

    request = Request(f"{GITHUB_API}{repo}", headers=headers)
    try:
        with urlopen(request, timeout=20) as response:
            payload = json.loads(response.read().decode("utf-8"))
    except HTTPError as error:
        raise RuntimeError(f"{repo}: GitHub API returned HTTP {error.code}") from error

    stars = payload.get("stargazers_count")
    if not isinstance(stars, int):
        raise RuntimeError(f"{repo}: missing stargazers_count in GitHub API response")
    return stars


def main() -> int:
    projects = json.loads(PROJECTS_PATH.read_text(encoding="utf-8"))
    token = os.environ.get("GITHUB_TOKEN")
    changed = False

    for project in projects:
        repo = project.get("repo")
        if not repo:
            continue
        stars = fetch_repo_stars(repo, token)
        if project.get("stars") != stars:
            print(f"{repo}: {project.get('stars')} -> {stars}")
            project["stars"] = stars
            changed = True
        time.sleep(0.1)

    projects.sort(key=lambda item: (item.get("stars") is None, -(item.get("stars") or -1), item["name"].lower()))

    if changed:
        PROJECTS_PATH.write_text(json.dumps(projects, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    else:
        print("Star counts already up to date.")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
