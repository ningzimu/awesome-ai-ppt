---
name: awesome-ai-ppt
description: Find, compare, and contribute AI presentation generation, PowerPoint automation, PPTX editing, and slide workflow tools using the awesome-ai-ppt repository. Use this skill when the user asks to choose AI PPT tools, compare HTML-first/image-first/PPTX-native/infrastructure approaches, evaluate whether a GitHub project belongs in awesome-ai-ppt, update the awesome-ai-ppt list, prepare contribution suggestions, report list issues, or help submit an issue or PR for the awesome-ai-ppt repository.
---

# Awesome AI PPT

Use this skill to work with the `awesome-ai-ppt` curated list. Treat the list as a discovery index for AI-assisted presentation tools, not as a substitute for reading original projects.

## First Step

Start from the remote `awesome-ai-ppt` list.

- Read the public `docs/projects.json` from `https://github.com/ningzimu/awesome-ai-ppt` or the raw GitHub URL.
- Before asking the user questions, read the already listed PPT tool entries and descriptions enough to understand the candidate space at a high level.
- Do not open every candidate's original repository before asking the user about their needs. Detailed original-repository inspection is only needed after the user's requirements narrow the shortlist.

## Tool Selection Workflow

Use this workflow when the user wants recommendations, comparisons, or help choosing a PPT tool.

1. Read the existing tool entries and descriptions in the remote `docs/projects.json` first to understand the available candidate space.
2. Ask detailed questions about the user's real need before choosing: target audience, desired output format, editability, visual quality, automation depth, agent integration, input materials, local/cloud constraints, budget/time constraints, and tolerance for setup complexity.
3. Search `docs/projects.json` for a rough shortlist of 3-6 matching candidates based on the user's answers.
4. Visit the original repository for each serious candidate. Do not rely only on the awesome-list description, tags, or star count.
5. Compare the candidates on concrete evidence:
   - Primary workflow and output format
   - Editability of the resulting deck
   - Agent skill, MCP, API, CLI, or library integration path
   - Install/setup complexity
   - Examples, docs, and active maintenance signals
   - Known limitations or mismatches with the user's need
6. Recommend based on the user's specific constraints, not on popularity alone. In the answer, separate rough list metadata from original-repository findings. If the user explicitly asks for a quick coarse filter, say that the result has not been deeply verified.

## Contribution Workflow

Enter contribution mode only when the user explicitly asks to report an issue, submit an issue, contribute a project, update the list, fix metadata, prepare a PR, or submit a PR.

Do not proactively open issues or PRs just because you notice a broken link, missing project, weak description, or possible misclassification. If the user is only choosing tools, at most mention that list problems can be reported through GitHub Issues.

When helping a third-party contributor:

1. Read `references/curation-rules.md`.
2. Read `references/contribution-workflow.md`.
3. Explain whether the project or issue appears to fit the list before editing.
4. Guide the contributor to collect evidence from the original repository: workflow, input/output formats, editability, skill/MCP support, license, stars, and maintenance.
5. If preparing a PR, describe the exact files to update and the checks to run.
6. If preparing an issue, keep it concise and include evidence links, expected category, and the requested change.
7. Do not imply that the contributor can skip the repository's bilingual and generated README requirements.

## Output Style

- Keep recommendations short, evidence-based, and practical.
- Prefer canonical GitHub links.
- Say when a conclusion is based on original-repository inspection.
- Do not market projects; describe what they actually do.
- Preserve the repository's bilingual maintenance expectations when proposing or making user-facing changes.
