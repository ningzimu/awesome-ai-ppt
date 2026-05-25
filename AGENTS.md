# AGENTS.md

Please reply in Chinese when working in this repository.

## Project Intent

This repository is an awesome list for AI-assisted presentation generation, PowerPoint automation, PPTX editing, and slide workflow tooling.

It is a curated list, not a complete directory. Keep changes focused, conservative, and easy to review.

## Bilingual Maintenance

User-facing content must stay available in both Chinese and English, but README files are split by language.

When updating the main README, update both files in the same change:

- `README.md` is Chinese and is the default GitHub landing README.
- `README_EN.md` is English and is linked from the Docs badge in `README.md`.

When updating any of these files, keep the Chinese and English versions synchronized in the same change:

- `README.md`
- `README_EN.md`
- `CONTRIBUTING.md`
- `docs/index.html`
- `docs/projects.json`
- `.github/ISSUE_TEMPLATE/*.md`
- `.github/pull_request_template.md`

Do not add English-only or Chinese-only user-facing changes unless there is a clear reason and the paired translation is intentionally not needed.

Pull requests must keep English and Chinese user-facing text in sync. PRs that do not update both languages should not pass review.

When changing the main list in `README.md`, update the GitHub Pages data in `docs/projects.json` in the same change.

GitHub Pages should default to Chinese and provide an English switch.

## Inclusion Rules

Main-list GitHub repositories should usually have at least 10 stars.

Projects below the threshold should not stay in the main README.

Do not add broad directory links, unverified catalog entries, or PDF/LaTeX-only projects to the main list unless they clearly fit the classification rules below.

## Classification Rules

Classify projects by the source representation of their primary workflow, not by their final export format. `Skill`, `editable PPTX`, and `PPTX export` are tags, not category decisions.

Current categories:

- `HTML-First Presentation Workflows` / `HTML 风格 PPT 方案`: projects that create HTML, web slides, or page-style presentations first, then export, screenshot, or convert them into PPT outputs.
- `Image-First Presentation Workflows` / `图片生成式 PPT 方案`: projects centered on image models or whole-slide images, even if they later package those pages into PPTX, PDF, video, or HTML.
- `PPTX-Native Generation Workflows` / `PPTX 库生成式 PPT 方案`: projects that directly generate native editable PPTX through PptxGenJS, python-pptx, Office XML, PowerPoint APIs, or a skill wrapping those routes.
- `PPTX Libraries and Automation Infrastructure` / `PPTX 库与自动化基础设施`: underlying libraries, MCP servers, Office automation, backend services, DOM/image/PDF-to-PPTX conversion, and editable reconstruction tools.

When a project fits multiple categories, choose the primary workflow route readers need to understand first, then preserve secondary signals in `tags`, `editable`, and `skill`.

## Editing Rules

- Keep entries short, factual, and non-marketing.
- Keep entries within a category sorted by stars where practical.
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
