# AGENTS.md

Please reply in Chinese when working in this repository.

## Project Intent

This repository is an awesome list for AI-assisted presentation generation, PowerPoint automation, PPTX editing, and slide workflow tooling.

It is a curated list, not a complete directory. Keep changes focused, conservative, and easy to review.

## Bilingual Maintenance

User-facing content must stay bilingual.

When updating any of these files, update both English and Chinese text in the same change:

- `README.md`
- `CONTRIBUTING.md`
- `ARCHIVE.md`
- `.github/ISSUE_TEMPLATE/*.md`
- `.github/pull_request_template.md`

Do not add English-only or Chinese-only user-facing sections unless there is a clear reason and the paired translation is intentionally not needed.

For project list entries in `README.md`, keep the English description first, followed by the Chinese description in the same bullet.

Pull requests must keep English and Chinese user-facing text in sync. PRs that do not update both languages should not pass review.

## Inclusion Rules

Main-list GitHub repositories should usually have at least 10 stars.

Research papers, official directories, or foundational resources may be included below 10 stars only when they are clearly relevant and useful.

Projects below the threshold should be moved to `ARCHIVE.md` instead of staying in the main README.

## Editing Rules

- Keep entries short, factual, and non-marketing.
- Keep categories alphabetized where practical.
- Do not add broad new categories for one project.
- Do not move unrelated entries while adding or editing a project.
- Prefer canonical GitHub repository URLs.
- Preserve the existing Markdown style.

## Verification

Before finishing changes, run:

```sh
git diff --check
python3 scripts/check_bilingual.py
```

If Node works in the local environment, also run:

```sh
npx awesome-lint
```

If `npx awesome-lint` cannot run because of local toolchain issues, mention the exact reason in the final response.
