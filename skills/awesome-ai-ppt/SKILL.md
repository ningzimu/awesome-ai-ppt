---
name: awesome-ai-ppt
description: Find, compare, and contribute AI presentation generation, PowerPoint automation, PPTX editing, and slide workflow tools using the awesome-ai-ppt repository. Use this skill when the user asks to choose AI PPT tools, compare HTML-first/image-first/PPTX-native/infrastructure approaches, evaluate whether a GitHub project belongs in awesome-ai-ppt, update the awesome-ai-ppt list, prepare contribution suggestions, report list issues, or help submit an issue or PR for the awesome-ai-ppt repository.
---

# Awesome AI PPT

Use this skill to work with the `awesome-ai-ppt` curated list. Treat the list as a discovery index for AI-assisted presentation tools, not as a substitute for reading original projects.

## First Step

Determine whether the current workspace is the `awesome-ai-ppt` repository:

- If `docs/projects.json`, `scripts/render_readme.py`, and `CONTRIBUTING.md` exist, prefer local files.
- Otherwise, read the public repository files from `https://github.com/ningzimu/awesome-ai-ppt`.
- For tool comparison, use `docs/projects.json` only to find candidates. Before making a detailed recommendation, open each candidate's original repository and inspect its README, docs, examples, install path, license, maintenance activity, and relevant source files.

## Tool Selection Workflow

Use this workflow when the user wants recommendations, comparisons, or help choosing a PPT tool.

1. Clarify the user's target workflow only when necessary: HTML/web slides, image-based slides, editable PPTX, conversion/reconstruction, MCP/agent integration, or automation infrastructure.
2. Search `docs/projects.json` for a rough shortlist of 3-6 matching candidates.
3. Visit the original repository for each serious candidate. Do not rely only on the awesome-list description, tags, or star count.
4. Compare the candidates on concrete evidence:
   - Primary workflow and output format
   - Editability of the resulting deck
   - Agent skill, MCP, API, CLI, or library integration path
   - Install/setup complexity
   - Examples, docs, and active maintenance signals
   - Known limitations or mismatches with the user's need
5. In the answer, separate rough list metadata from original-repository findings. If the user explicitly asks for a quick coarse filter, say that the result has not been deeply verified.

## Contribution Workflow

Enter contribution mode only when the user explicitly asks to report an issue, submit an issue, contribute a project, update the list, fix metadata, prepare a PR, or submit a PR.

Do not proactively open issues or PRs just because you notice a broken link, missing project, weak description, or possible misclassification. If the user is only choosing tools, at most mention that list problems can be reported through GitHub Issues.

For contribution work:

1. Read `references/curation-rules.md`.
2. Read `references/contribution-workflow.md`.
3. Check for duplicates in `docs/projects.json`.
4. Verify facts from the original repository, not only from search snippets or the current list.
5. If working inside the local repository, edit the source data and regenerate derived files as described in the contribution workflow.
6. If not working inside the local repository, prepare concise issue/PR suggestion text instead of pretending to modify files.

## Output Style

- Keep recommendations short, evidence-based, and practical.
- Prefer canonical GitHub links.
- Say when a conclusion is based on original-repository inspection.
- Do not market projects; describe what they actually do.
- Preserve the repository's bilingual maintenance expectations when proposing or making user-facing changes.

## Updating This Skill

When the user asks to update this skill, edit the source files under `skills/awesome-ai-ppt/` in the `awesome-ai-ppt` repository. Keep `SKILL.md` concise and move detailed rules into `references/` when they are not needed for every invocation.

After changing the skill:

1. Run the Skill Creator validator:
   ```bash
   python3 /Users/ningzimu/.codex/skills/.system/skill-creator/scripts/quick_validate.py skills/awesome-ai-ppt
   ```
2. If user-facing install or usage text changed, update `scripts/render_readme.py`, run `python3 scripts/render_readme.py`, and keep `README.md`, `README_EN.md`, and Pages text synchronized.
3. Run the repository checks listed in `references/contribution-workflow.md`.
4. Do not publish, submit a PR, or open an issue for the skill update unless the user explicitly requests that action.
