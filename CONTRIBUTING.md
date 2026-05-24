# Contributing

Thanks for helping improve Awesome AI PPT.

This is a curated list, not a directory of every presentation product. Prefer fewer high-quality entries over broad coverage.

## Inclusion Criteria

Good candidates should meet most of these:

- Directly related to AI-assisted presentation generation, PPTX editing, slide conversion, deck reconstruction, rendering, QA, or evaluation.
- Public GitHub repository or open technical resource.
- GitHub repositories should have at least 10 stars.
- Clear README, documentation, example, or demo.
- Visible license when source code is included.
- Active maintenance in the last 12 months, or stable enough to justify keeping.
- Clear input and output formats, such as prompt to PPTX, PDF to slides, HTML to PPTX, or Markdown to deck.

Avoid:

- Generic AI writing tools with no presentation workflow.
- Generic image generators with no slide or deck output.
- Pure template marketplaces.
- Empty repositories, dead links, or projects with no README.
- Archived, deprecated, or abandoned projects.
- Marketing descriptions such as "best", "revolutionary", "powerful", "magic", or "game-changing".

## Entry Format

Entries are generated from `docs/projects.json`. Add or edit project metadata there, then run:

```sh
python3 scripts/render_readme.py
```

Rules:

- Link to the canonical GitHub repository when possible.
- Use the project name or `owner/repo` as the link text.
- Start the description with a capital letter.
- End the description with a period.
- Keep descriptions objective and useful.
- Put the entry in the category that matches the primary workflow route, not merely the final export format.
- Add useful tags such as `HTML-first`, `Image-first`, `PPTX-native`, `Editable`, `Partially editable`, `Image-based`, `Skill`, `App`, `Library`, `MCP`, `Backend`, `Conversion`, or `Automation`.
- Use `editable` to describe editability status and `skill` to describe whether the project is a skill, MCP server, or neither.
- Keep the `stars` field current enough for sorting. The scheduled workflow refreshes it automatically.

## Pull Requests

- One pull request should add, remove, or update one project.
- Explain why the project belongs on the list.
- Mention the expected input and output formats when relevant.
- Do not add a new category in the same pull request as a project entry.
- Do not move unrelated entries.
- Keep `README.md`, `README_EN.md`, and `docs/projects.json` synchronized by running the README generator.
- Keep Chinese and English project descriptions synchronized in `docs/projects.json`.

## Categories

Current categories:

- HTML-First Presentation Workflows
- Image-First Presentation Workflows
- PPTX-Native Generation Workflows
- PPTX Libraries and Automation Infrastructure

Classification rules:

- Classify by the source representation of the main workflow, not by the final export format.
- Use HTML-First Presentation Workflows when the project creates HTML, web slides, or page-style presentations first, then exports, screenshots, or converts them into PPT outputs.
- Use Image-First Presentation Workflows when the project centers on image models or whole-slide images, even if it later packages those pages into PPTX, PDF, video, or HTML.
- Use PPTX-Native Generation Workflows when the project directly generates native editable PPTX through PptxGenJS, python-pptx, Office XML, PowerPoint APIs, or a skill that wraps those routes.
- Use PPTX Libraries and Automation Infrastructure for underlying libraries, MCP servers, Office automation, backend services, DOM/image/PDF-to-PPTX conversion, and editable reconstruction tools.
- `Skill`, `editable PPTX`, and `PPTX export` are tags, not category decisions.
- Do not add broad directory links, unverified catalog entries, or PDF/LaTeX-only projects to the main list unless they clearly fit one of the four routes.
