#!/usr/bin/env python3
"""Render GitHub Pages JavaScript data snapshots."""

from __future__ import annotations

from pathlib import Path
import json


ROOT = Path(__file__).resolve().parents[1]
PROJECTS_PATH = ROOT / "docs/projects.json"
PROJECTS_DATA_PATH = ROOT / "docs/projects-data.js"


def render_projects_data(projects: list[dict]) -> None:
    PROJECTS_DATA_PATH.write_text(
        f"window.AWESOME_AI_PPT_PROJECTS = {json.dumps(projects, ensure_ascii=False, indent=2)};\n",
        encoding="utf-8",
    )


def render_pages_data(projects: list[dict] | None = None) -> None:
    if projects is None:
        projects = json.loads(PROJECTS_PATH.read_text(encoding="utf-8"))

    render_projects_data(projects)


def main() -> int:
    render_pages_data()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
