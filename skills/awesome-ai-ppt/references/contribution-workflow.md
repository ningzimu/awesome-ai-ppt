# Contribution Workflow

Use this workflow only when the user explicitly asks to contribute, modify the list, report a problem, prepare an issue, or submit a PR. Write guidance from the perspective of a third-party contributor.

## Before Contributing

Help the contributor answer these questions first:

- What project or list problem are they contributing?
- Does it directly relate to AI-assisted presentation generation, PPTX editing, slide conversion, deck reconstruction, rendering, QA, or evaluation?
- Is there an existing entry in `docs/projects.json` with the same `repo`, `url`, name, or upstream project identity?
- Does the original repository provide enough evidence: README, docs, examples, install instructions, license, stars, and recent maintenance?

If the project does not clearly fit, explain why and suggest opening an issue for discussion instead of preparing a PR.

## What A PR Should Change

For a project addition or metadata fix, tell the contributor to:

1. Fork the repository and create a focused branch.
2. Edit `docs/projects.json`.
3. Keep English and Chinese descriptions aligned.
4. Put the entry in the category that matches the primary workflow route, not merely the final export format.
5. Use tags and status fields for attributes such as `Skill`, `MCP`, editability, conversion, automation, or image-based output.
6. Run:
   ```bash
   python3 scripts/render_readme.py
   ```
7. Include the generated `README.md` and `README_EN.md` changes in the PR.

One PR should add, remove, or update one project. Do not add a new category or move unrelated entries in the same PR.

## Checks To Run

Ask contributors to run:

```bash
git diff --check
python3 scripts/check_bilingual.py
python3 -m json.tool docs/projects.json
```

If Node is available, also run:

```bash
npx awesome-lint
```

If `awesome-lint` fails because of pre-existing awesome-list formatting rules or local toolchain issues, mention the exact reason in the PR.

## PR Description

Help the contributor include:

- The project link and canonical GitHub repository.
- Why it belongs in this curated list.
- Expected input and output formats.
- Proposed category and tags.
- Evidence for editability, skill/MCP support, and maintenance.
- Any checks run locally.

## Issue Suggestions

For an issue instead of a PR:

- Keep the issue concise.
- Include evidence links from the original repository.
- State the requested change: add, update, remove, fix category, fix description, or fix link.
- Include proposed category, tags, editability, and skill status when relevant.
- Ask for confirmation before any real GitHub submission unless the user has already explicitly requested submission.
