# Awesome AI PPT

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![CC0](https://img.shields.io/badge/license-CC0-4cc61e.svg)](LICENSE)

A curated list of open-source projects for AI-assisted presentation generation, PowerPoint automation, PPTX editing, and slide workflow tooling.

This is a curated list, not a dump of every slide-related link. It focuses on GitHub repositories and research projects that help agents or developers create, edit, convert, inspect, or evaluate presentations.

一个关于 AI PPT、PowerPoint 自动化、PPTX 编辑和幻灯片工作流工具的开源项目精选清单。

这是一个精选列表，不是“所有相关链接大全”。本仓库重点收集能帮助 agent 或开发者创建、编辑、转换、检查或评估演示文稿的 GitHub 仓库与研究项目。

Website: https://ningzimu.github.io/awesome-ai-ppt/

网站：https://ningzimu.github.io/awesome-ai-ppt/

## Quick Picks

快速选择。

| Need / 需求 | Start Here / 推荐入口 | Section / 所在分类 |
| --- | --- | --- |
| General editable PPTX authoring / 通用可编辑 PPTX 生成 | `openai/skills - slides` | [Agent Skills and Workflows](#agent-skills-and-workflows) |
| Full agentic PPT generation / 完整 agentic PPT 生成 | `hugohe3/ppt-master` | [Editable Reconstruction](#editable-reconstruction) |
| Research-heavy deck generation / 研究型内容生成 | `icip-cas/PPTAgent` | [Research and Benchmarks](#research-and-benchmarks) |
| Local AI presentation app / 本地 AI 演示应用 | `presenton/presenton` | [End-to-End AI Presentation Tools](#end-to-end-ai-presentation-tools) |
| DOM/CSS to editable PPTX / DOM/CSS 转可编辑 PPTX | `atharva9167j/dom-to-pptx` | [Editable Reconstruction](#editable-reconstruction) |

## Contents

- [End-to-End AI Presentation Tools / 端到端 AI 演示工具](#end-to-end-ai-presentation-tools)
- [Agent Skills and Workflows / Agent 技能与工作流](#agent-skills-and-workflows)
- [PowerPoint and PPTX Libraries / PowerPoint 与 PPTX 库](#powerpoint-and-pptx-libraries)
- [Editable Reconstruction / 可编辑重建](#editable-reconstruction)
- [Markdown, HTML, and Document to Slides / Markdown、HTML 与文档转幻灯片](#markdown-html-and-document-to-slides)
- [Research and Benchmarks / 研究与基准](#research-and-benchmarks)
- [Directories and Related Lists / 目录与相关清单](#directories-and-related-lists)

## End-to-End AI Presentation Tools

Projects that can generate complete presentations from prompts, documents, or structured inputs.

可从提示词、文档或结构化输入生成完整演示文稿的项目。

- [allweonedev/presentation-ai](https://github.com/allweonedev/presentation-ai) - Open-source Gamma-style AI presentation generator with themes, editing, and PowerPoint export. 开源 Gamma 风格 AI 演示生成器，支持主题、编辑和 PowerPoint 导出。
- [barun-saha/slide-deck-ai](https://github.com/barun-saha/slide-deck-ai) - AI-assisted PowerPoint deck generation. AI 辅助 PowerPoint 幻灯片生成。
- [CyberTimon/Powerpointer](https://github.com/CyberTimon/Powerpointer) - GPT-powered PowerPoint generator using Python and `python-pptx`. 基于 GPT、Python 和 `python-pptx` 的 PowerPoint 生成器。
- [presenton/presenton](https://github.com/presenton/presenton) - Open-source AI presentation generator and API with PPTX and PDF export. 开源 AI 演示生成器和 API，支持 PPTX/PDF 导出。

## Agent Skills and Workflows

Installable or agent-oriented workflows for creating, editing, or transforming presentations.

面向 agent 的可安装技能或工作流，用于创建、编辑或转换演示文稿。

- [anthropics/skills - pptx](https://github.com/anthropics/skills/tree/main/skills/pptx) - Anthropic skill for reading, creating, editing, and analyzing PowerPoint presentations. Anthropic 官方 PPTX skill，用于读取、创建、编辑和分析 PowerPoint。
- [bytedance/deer-flow - ppt-generation](https://github.com/bytedance/deer-flow/tree/main/skills/public/ppt-generation) - Image-generation based PPT workflow inside DeerFlow. DeerFlow 中基于图片生成的 PPT 工作流。
- [MiniMax-AI/skills - pptx-generator](https://github.com/MiniMax-AI/skills) - MiniMax office skill for generating, editing, and reading PowerPoint presentations. MiniMax Office skill，支持生成、编辑和读取 PowerPoint。
- [Noi1r/powerpoint-skill](https://github.com/Noi1r/powerpoint-skill) - PowerPoint skill for academic slides, formulas, and diagrams using PptxGenJS. 面向学术幻灯片、公式和图表的 PowerPoint skill。
- [openai/skills - slides](https://github.com/openai/skills/tree/main/skills/.curated/slides) - OpenAI curated skill for creating and editing `.pptx` decks with PptxGenJS and validation utilities. OpenAI curated slides skill，基于 PptxGenJS 并带验证工具。
- [SkyworkAI/Skywork-Skills - skywork-ppt](https://github.com/SkyworkAI/Skywork-Skills) - Skill for generating, imitating, and editing PowerPoint presentations. Skywork PPT skill，支持生成、仿制和编辑 PowerPoint。
- [stevenjinlong/awesome-ppt-skills](https://github.com/stevenjinlong/awesome-ppt-skills) - Codex skills for image-first PPT generation with `gpt-image-2` and editable reconstruction handoff. Codex PPT skills，使用 `gpt-image-2` 生成图片式 PPT，并支持可编辑化交接。

## PowerPoint and PPTX Libraries

Developer libraries for creating, modifying, merging, or inspecting PPTX files.

用于创建、修改、合并或检查 PPTX 文件的开发者库。

- [gitbrent/PptxGenJS](https://github.com/gitbrent/PptxGenJS) - JavaScript library for creating PowerPoint presentations. 用于创建 PowerPoint 的 JavaScript 库。
- [scanny/python-pptx](https://github.com/scanny/python-pptx) - Python library for creating and updating PowerPoint files. 用于创建和更新 PowerPoint 文件的 Python 库。
- [singerla/pptx-automizer](https://github.com/singerla/pptx-automizer) - Node.js library for modifying, merging, and templating PowerPoint files. 用于修改、合并和模板化 PowerPoint 文件的 Node.js 库。

## Editable Reconstruction

Projects focused on rebuilding documents, images, HTML, or existing slides into editable presentation objects.

专注于把文档、图片、HTML 或已有幻灯片重建为可编辑演示对象的项目。

- [atharva9167j/dom-to-pptx](https://github.com/atharva9167j/dom-to-pptx) - Client-side DOM/CSS to editable PowerPoint converter with an agent skill installer. 客户端 DOM/CSS 转可编辑 PowerPoint 工具，并提供 agent skill 安装器。
- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) - AI-driven workflow for producing natively editable PowerPoint decks from documents, URLs, and Markdown. 从文档、URL 和 Markdown 生成原生可编辑 PowerPoint 的 AI 工作流。
- [JuniverseCoder/MinerU2PPT](https://github.com/JuniverseCoder/MinerU2PPT) - Converts PDFs and images into editable PowerPoint presentations using structure extraction. 使用结构提取把 PDF 和图片转换为可编辑 PowerPoint。

## Markdown, HTML, and Document to Slides

Tools that convert structured content into slide decks or web presentations.

将结构化内容转换为幻灯片或网页演示的工具。

- [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) - Skill for creating animation-rich HTML presentations and converting PowerPoint files to web slides. 用于创建动画 HTML 演示、并将 PowerPoint 转为网页幻灯片的 skill。

## Research and Benchmarks

Research projects and papers about presentation generation, editing, or multimodal slide agents.

关于演示生成、编辑或多模态幻灯片 agent 的研究项目与论文。

- [AIGeeksGroup/PresentAgent-2](https://github.com/AIGeeksGroup/PresentAgent-2) - Multimodal presentation agent research project. 多模态演示 agent 研究项目。
- [icip-cas/PPTAgent](https://github.com/icip-cas/PPTAgent) - Research-backed agentic framework for presentation generation and evaluation. 有研究支撑的演示生成与评估 agentic 框架。
- [PPTArena](https://arxiv.org/abs/2512.03042) - Benchmark for reliable PowerPoint editing across real decks. 面向真实幻灯片的可靠 PowerPoint 编辑基准。

## Directories and Related Lists

Directories, indexes, and related resource collections.

目录、索引和相关资源集合。

- [awesome-skills.app - pptx](https://awesome-skills.app/skills/pptx) - Skill directory entry for PPTX-related document processing skills. PPTX 文档处理 skill 的目录条目。
- [openagentskills.dev - pptx](https://openagentskills.dev/skills/pptx) - Open Agent Skills directory entry for PPTX. Open Agent Skills 的 PPTX 目录条目。
- [powerpoint.md](https://powerpoint.md/) - Community-maintained directory comparing AI agent PowerPoint and Excel skills. 社区维护的 AI agent PowerPoint 与 Excel skills 对比目录。

## Scope

收录范围。

Included projects should have a direct relationship to AI-assisted presentation work: generating slides, editing PPTX files, converting content into presentations, reconstructing editable decks, rendering or validating slides, or evaluating presentation agents.

GitHub repositories should have at least 10 stars before being included. Research papers, official directories, or foundational resources may be included when they are clearly relevant.

入选项目应与 AI 辅助演示工作直接相关，例如生成幻灯片、编辑 PPTX、把内容转换为演示文稿、重建可编辑 deck、渲染或验证幻灯片，或评估演示 agent。

GitHub 仓库通常需要至少 10 stars 才能进入主列表。论文、官方目录或基础资源如果高度相关，可以作为例外收录。

Out of scope / 不收录：

- Generic AI writing tools without a presentation workflow.
- Generic image generators without slide or deck output.
- Template marketplaces with no open repository or technical workflow.
- Archived, deprecated, or empty repositories. Historical references belong in [ARCHIVE.md](ARCHIVE.md).
- 没有演示文稿工作流的泛 AI 写作工具。
- 没有幻灯片或 deck 输出的泛图片生成工具。
- 没有开源仓库或技术工作流的模板市场。
- 已归档、废弃或空仓库。历史参考项目应放在 [ARCHIVE.md](ARCHIVE.md)。

## Contributing

贡献。

Pull requests are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before suggesting a project.

欢迎提交 PR。推荐项目前请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。
