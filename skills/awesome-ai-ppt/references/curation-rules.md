# Curation Rules

Use these rules when evaluating projects for `awesome-ai-ppt`.

## Categories

Assign the category by the source representation and primary workflow, not by the final export format.

- `HTML-First Presentation Workflows`: starts from HTML, web slides, DOM/CSS, Reveal.js, or page-style web presentations, then exports, screenshots, or converts to PPT/PDF/images.
- `Image-First Presentation Workflows`: centers on image generation or whole-slide images, then packages slides as PPTX, PDF, video, or web presentations.
- `PPTX-Native Generation Workflows`: directly creates editable native PPTX using PptxGenJS, python-pptx, Office XML, PowerPoint APIs, or similar.
- `PPTX Libraries and Automation Infrastructure`: foundational libraries, MCP servers, Office automation, backend services, conversion tooling, and editable reconstruction infrastructure.

Do not create a new top-level category for one project.

## Tags And Status

Treat these as attributes, not categories:

- `Skill`
- `MCP`
- `Agent`
- `Editable`
- `Partially editable`
- `Image-based`
- `Source editable`
- `PPTX export`
- `Conversion`
- `Automation`

A project that exports PPTX is not automatically PPTX-native. A project with a skill is not automatically a generation workflow. Decide by reading the original repository's real workflow.

## Inclusion

- Main-list GitHub repositories should usually have at least 10 stars.
- Research papers, official directories, or foundational resources may be included below 10 stars only when clearly useful.
- Prefer canonical GitHub repository URLs.
- Avoid duplicate entries. Check by `repo`, `url`, project name, and upstream project identity.
- Do not include generic AI writing tools without a presentation workflow.
- Do not include generic image generators without slide or deck output.
- Do not include template marketplaces without an open repository or technical workflow.
- Do not include archived, deprecated, empty, or unclear projects.

## Description Style

- Keep descriptions short, factual, and non-marketing.
- Describe the project's actual workflow and output.
- Mention editability or skill/MCP support only when verified.
- Avoid claims that are not supported by the original repository.
