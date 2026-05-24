# Contribution Workflow

Use this workflow only when the user explicitly asks to contribute, modify the list, report a problem, prepare an issue, or submit a PR.

## Verify Before Editing

1. Check `docs/projects.json` for an existing entry by `repo`, `url`, project name, and upstream identity.
2. Open the original repository and verify README, docs, examples, install instructions, license, stars, and recent maintenance.
3. Decide category from the real primary workflow.
4. Decide tags, editability, and skill status from evidence in the original repository.
5. Keep English and Chinese descriptions aligned.

## Local Repository Changes

When working inside the local `awesome-ai-ppt` repository:

1. Edit `docs/projects.json`.
2. Run:
   ```bash
   python3 scripts/render_readme.py
   ```
3. Keep user-facing bilingual files synchronized when they are touched:
   - `README.md`
   - `README_EN.md`
   - `CONTRIBUTING.md`
   - `docs/index.html`
   - `docs/projects.json`
   - `.github/ISSUE_TEMPLATE/*.md`
   - `.github/pull_request_template.md`
4. Run validation:
   ```bash
   git diff --check
   python3 scripts/check_bilingual.py
   python3 -m json.tool docs/projects.json
   ```
5. If Node is available, also run:
   ```bash
   npx awesome-lint
   ```
   If it fails for pre-existing awesome-list rules or local toolchain issues, report the exact reason.

## Issue Or PR Suggestions

When not inside the local repository, or when the user asks only for a suggestion:

- Do not claim files were changed.
- Provide concise issue or PR text with evidence links.
- Include the proposed category, tags, editability, skill status, and short bilingual descriptions when relevant.
- Ask for confirmation before any real GitHub submission unless the user has already explicitly requested submission.
