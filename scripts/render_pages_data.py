#!/usr/bin/env python3
"""Render GitHub Pages JavaScript data snapshots."""

from __future__ import annotations

import argparse
from pathlib import Path
import json
import os
import re
from urllib.error import HTTPError
from urllib.request import Request, urlopen


ROOT = Path(__file__).resolve().parents[1]
PROJECTS_PATH = ROOT / "docs/projects.json"
PROJECTS_DATA_PATH = ROOT / "docs/projects-data.js"
STARS_DATA_PATH = ROOT / "docs/stars-data.js"
REPO = "ningzimu/awesome-ai-ppt"
GITHUB_API = "https://api.github.com/repos/"


def fetch_repo_stars(repo: str, token: str | None) -> int:
    headers = {
        "Accept": "application/vnd.github+json",
        "User-Agent": "awesome-ai-ppt-pages-data-renderer",
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


def render_projects_data(projects: list[dict]) -> None:
    PROJECTS_DATA_PATH.write_text(
        f"window.AWESOME_AI_PPT_PROJECTS = {json.dumps(projects, ensure_ascii=False, indent=2)};\n",
        encoding="utf-8",
    )


def render_stars_data(stars: int) -> None:
    STARS_DATA_PATH.write_text(f"window.AWESOME_AI_PPT_STARS = {stars};\n", encoding="utf-8")


def read_existing_stars() -> int | None:
    if not STARS_DATA_PATH.exists():
        return None
    match = re.search(r"AWESOME_AI_PPT_STARS\s*=\s*(\d+)", STARS_DATA_PATH.read_text(encoding="utf-8"))
    if not match:
        return None
    return int(match.group(1))


def render_pages_data(projects: list[dict] | None = None, stars: int | None = None) -> None:
    if projects is None:
        projects = json.loads(PROJECTS_PATH.read_text(encoding="utf-8"))
    if stars is None:
        stars = fetch_repo_stars(REPO, os.environ.get("GITHUB_TOKEN"))

    render_projects_data(projects)
    render_stars_data(stars)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--keep-stars", action="store_true", help="Reuse the current docs/stars-data.js value.")
    args = parser.parse_args()

    stars = read_existing_stars() if args.keep_stars else None
    render_pages_data(stars=stars)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
