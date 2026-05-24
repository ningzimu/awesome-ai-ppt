#!/usr/bin/env python3
"""Check that user-facing Markdown keeps English and Chinese in sync."""

from pathlib import Path
import re
import sys


ROOT = Path(__file__).resolve().parents[1]
CJK_RE = re.compile(r"[\u4e00-\u9fff]")

USER_FACING_FILES = [
    Path("README.md"),
    Path("CONTRIBUTING.md"),
    Path("ARCHIVE.md"),
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


def main() -> int:
    errors: list[str] = []

    for path in USER_FACING_FILES:
        check_file_has_chinese(path, errors)

    check_readme_entries(errors)
    check_pr_template(errors)

    if errors:
        print("Bilingual check failed:")
        for error in errors:
            print(f"- {error}")
        return 1

    print("Bilingual check passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

