#!/usr/bin/env python3
"""Check that user-facing Markdown keeps English and Chinese in sync."""

from pathlib import Path
import json
import re
import sys


ROOT = Path(__file__).resolve().parents[1]
CJK_RE = re.compile(r"[\u4e00-\u9fff]")

USER_FACING_FILES = [
    Path("README.md"),
    Path("CONTRIBUTING.md"),
    Path("ARCHIVE.md"),
    Path("docs/index.html"),
    Path("docs/projects.json"),
    Path(".github/pull_request_template.md"),
    Path(".github/ISSUE_TEMPLATE/add-project.md"),
    Path(".github/ISSUE_TEMPLATE/broken-link.md"),
    Path(".github/ISSUE_TEMPLATE/removal.md"),
]


def has_cjk(text: str) -> bool:
    return CJK_RE.search(text) is not None


def check_file_has_chinese(path: Path, errors: list[str]) -> None:
    text = (ROOT / path).read_text(encoding="utf-8")
    if not has_cjk(text):
        errors.append(f"{path}: user-facing Markdown must include Chinese text.")


def check_readme_entries(errors: list[str]) -> None:
    path = ROOT / "README.md"
    for lineno, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
        stripped = line.strip()
        if not stripped.startswith("- ["):
            continue
        if "](http" not in stripped:
            continue
        if has_cjk(stripped):
            continue
        errors.append(
            f"README.md:{lineno}: project/list entry must include Chinese in the same bullet."
        )


def check_pr_template(errors: list[str]) -> None:
    path = Path(".github/pull_request_template.md")
    text = (ROOT / path).read_text(encoding="utf-8")
    required_phrases = [
        "Bilingual update",
        "中英文同步",
    ]
    for phrase in required_phrases:
        if phrase not in text:
            errors.append(f"{path}: missing required PR checklist phrase: {phrase}")


def check_projects_json(errors: list[str]) -> None:
    path = Path("docs/projects.json")
    projects = json.loads((ROOT / path).read_text(encoding="utf-8"))
    for index, project in enumerate(projects, 1):
        name = project.get("name", f"entry #{index}")
        if not has_cjk(project.get("descriptionZh", "")):
            errors.append(f"{path}: {name}: missing Chinese descriptionZh.")
        if not project.get("description"):
            errors.append(f"{path}: {name}: missing English description.")
        stars = project.get("stars")
        repo = project.get("repo")
        if repo and isinstance(stars, int) and stars < 10:
            errors.append(f"{path}: {name}: GitHub repositories need at least 10 stars.")


def main() -> int:
    errors: list[str] = []

    for path in USER_FACING_FILES:
        check_file_has_chinese(path, errors)

    check_readme_entries(errors)
    check_pr_template(errors)
    check_projects_json(errors)

    if errors:
        print("Bilingual check failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    print("Bilingual check passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
