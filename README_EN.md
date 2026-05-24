# Awesome AI PPT

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![CC0](https://img.shields.io/badge/license-CC0-4cc61e.svg)](LICENSE)
[![Docs](https://img.shields.io/badge/docs-%E4%B8%AD%E6%96%87-blue)](README.md)
[![Website](https://img.shields.io/badge/GitHub%20Pages-default%20Chinese-0f9f8f)](https://ningzimu.github.io/awesome-ai-ppt/)

A curated list of open-source projects for AI-assisted presentation generation, PowerPoint automation, PPTX editing, and slide workflow tooling.

This is a curated list, not a dump of every slide-related link. It focuses on GitHub repositories and research projects that help agents or developers create, edit, convert, inspect, or evaluate presentations.

Website: https://ningzimu.github.io/awesome-ai-ppt/

## Quick Picks

| Need | Start Here | Section |
| --- | --- | --- |
| General editable PPTX authoring | `openai/skills - slides` | [Agent Skills and Workflows](#agent-skills-and-workflows) |
| Full agentic PPT generation | `hugohe3/ppt-master` | [Editable Reconstruction](#editable-reconstruction) |
| Research-heavy deck generation | `icip-cas/PPTAgent` | [Research and Benchmarks](#research-and-benchmarks) |
| Local AI presentation app | `presenton/presenton` | [End-to-End AI Presentation Tools](#end-to-end-ai-presentation-tools) |
| DOM/CSS to editable PPTX | `atharva9167j/dom-to-pptx` | [Editable Reconstruction](#editable-reconstruction) |

## Contents

- [End-to-End AI Presentation Tools](#end-to-end-ai-presentation-tools)
- [Agent Skills and Workflows](#agent-skills-and-workflows)
- [PowerPoint and PPTX Libraries](#powerpoint-and-pptx-libraries)
- [Editable Reconstruction](#editable-reconstruction)
- [Markdown, HTML, and Document to Slides](#markdown-html-and-document-to-slides)
- [Research and Benchmarks](#research-and-benchmarks)
- [Directories and Related Lists](#directories-and-related-lists)
- [Scope](#scope)
- [Contributing](#contributing)

## End-to-End AI Presentation Tools

Projects that can generate complete presentations from prompts, documents, or structured inputs.

- [allweonedev/presentation-ai](https://github.com/allweonedev/presentation-ai) - Open-source Gamma-style AI presentation generator with themes, editing, and PowerPoint export.
- [barun-saha/slide-deck-ai](https://github.com/barun-saha/slide-deck-ai) - AI-assisted PowerPoint deck generation.
- [CyberTimon/Powerpointer](https://github.com/CyberTimon/Powerpointer) - GPT-powered PowerPoint generator using Python and `python-pptx`.
- [presenton/presenton](https://github.com/presenton/presenton) - Open-source AI presentation generator and API with PPTX and PDF export.

## Agent Skills and Workflows

Installable or agent-oriented workflows for creating, editing, or transforming presentations.

- [anthropics/skills - pptx](https://github.com/anthropics/skills/tree/main/skills/pptx) - Anthropic skill for reading, creating, editing, and analyzing PowerPoint presentations.
- [bytedance/deer-flow - ppt-generation](https://github.com/bytedance/deer-flow/tree/main/skills/public/ppt-generation) - Image-generation based PPT workflow inside DeerFlow.
- [MiniMax-AI/skills - pptx-generator](https://github.com/MiniMax-AI/skills) - MiniMax office skill for generating, editing, and reading PowerPoint presentations.
- [Noi1r/powerpoint-skill](https://github.com/Noi1r/powerpoint-skill) - PowerPoint skill for academic slides, formulas, and diagrams using PptxGenJS.
- [openai/skills - slides](https://github.com/openai/skills) - OpenAI curated skill for creating and editing `.pptx` decks with PptxGenJS and validation utilities.
- [SkyworkAI/Skywork-Skills - skywork-ppt](https://github.com/SkyworkAI/Skywork-Skills) - Skill for generating, imitating, and editing PowerPoint presentations.
- [stevenjinlong/awesome-ppt-skills](https://github.com/stevenjinlong/awesome-ppt-skills) - Codex skills for image-first PPT generation with `gpt-image-2` and editable reconstruction handoff.

## PowerPoint and PPTX Libraries

Developer libraries for creating, modifying, merging, or inspecting PPTX files.

- [gitbrent/PptxGenJS](https://github.com/gitbrent/PptxGenJS) - JavaScript library for creating PowerPoint presentations.
- [scanny/python-pptx](https://github.com/scanny/python-pptx) - Python library for creating and updating PowerPoint files.
- [singerla/pptx-automizer](https://github.com/singerla/pptx-automizer) - Node.js library for modifying, merging, and templating PowerPoint files.

## Editable Reconstruction

Projects focused on rebuilding documents, images, HTML, or existing slides into editable presentation objects.

- [atharva9167j/dom-to-pptx](https://github.com/atharva9167j/dom-to-pptx) - Client-side DOM/CSS to editable PowerPoint converter with an agent skill installer.
- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) - AI-driven workflow for producing natively editable PowerPoint decks from documents, URLs, and Markdown.
- [JuniverseCoder/MinerU2PPT](https://github.com/JuniverseCoder/MinerU2PPT) - Converts PDFs and images into editable PowerPoint presentations using structure extraction.

## Markdown, HTML, and Document to Slides

Tools that convert structured content into slide decks or web presentations.

- [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) - Skill for creating animation-rich HTML presentations and converting PowerPoint files to web slides.

## Research and Benchmarks

Research projects and papers about presentation generation, editing, or multimodal slide agents.

- [AIGeeksGroup/PresentAgent-2](https://github.com/AIGeeksGroup/PresentAgent-2) - Multimodal presentation agent research project.
- [icip-cas/PPTAgent](https://github.com/icip-cas/PPTAgent) - Research-backed agentic framework for presentation generation and evaluation.
- [PPTArena](https://arxiv.org/abs/2512.03042) - Benchmark for reliable PowerPoint editing across real decks.

## Directories and Related Lists

Directories, indexes, and related resource collections.

- [openagentskills.dev - pptx](https://openagentskills.dev/skills/pptx) - Open Agent Skills directory entry for PPTX.
- [powerpoint.md](https://powerpoint.md/) - Community-maintained directory comparing AI agent PowerPoint and Excel skills.

## Scope

Included projects should have a direct relationship to AI-assisted presentation work: generating slides, editing PPTX files, converting content into presentations, reconstructing editable decks, rendering or validating slides, or evaluating presentation agents.

GitHub repositories should have at least 10 stars before being included. Research papers, official directories, or foundational resources may be included when they are clearly relevant.

Out of scope:

- Generic AI writing tools without a presentation workflow.
- Generic image generators without slide or deck output.
- Template marketplaces with no open repository or technical workflow.
- Archived, deprecated, or empty repositories. Historical references belong in [ARCHIVE.md](ARCHIVE.md).

## Contributing

Pull requests are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before suggesting a project.
