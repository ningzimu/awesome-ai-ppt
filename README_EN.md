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
| Native AI presentation app | `Anionex/banana-slides` | [End-to-End AI Presentation Tools](#end-to-end-ai-presentation-tools) |
| Polished HTML slide skill | `op7418/guizang-ppt-skill` | [Agent Skills and Workflows](#agent-skills-and-workflows) |
| General editable PPTX authoring | `openai/skills - slides` | [Agent Skills and Workflows](#agent-skills-and-workflows) |
| Full agentic PPT generation | `hugohe3/ppt-master` | [Editable Reconstruction](#editable-reconstruction) |
| Image-based PPT generation | `ningzimu/codex-ppt-skill` | [Agent Skills and Workflows](#agent-skills-and-workflows) |
| Images/PDF to editable PPT | `ningzimu/image-to-editable-ppt-skill` | [Editable Reconstruction](#editable-reconstruction) |

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

| Repository | Description | Stars |
| --- | --- | --- |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | AI-native Nano Banana Pro presentation app for generating slides from ideas, outlines, assets, or page descriptions, with editable PPT export. | [![GitHub stars](https://img.shields.io/github/stars/Anionex/banana-slides?style=social)](https://github.com/Anionex/banana-slides) |
| [presenton/presenton](https://github.com/presenton/presenton) | Open-source AI presentation generator and API with PPTX and PDF export. | [![GitHub stars](https://img.shields.io/github/stars/presenton/presenton?style=social)](https://github.com/presenton/presenton) |
| [sligter/LandPPT](https://github.com/sligter/LandPPT) | LLM-based presentation generation platform that turns documents into professional decks with templates, styling, and multiple model options. | [![GitHub stars](https://img.shields.io/github/stars/sligter/LandPPT?style=social)](https://github.com/sligter/LandPPT) |
| [allweonedev/presentation-ai](https://github.com/allweonedev/presentation-ai) | Open-source Gamma-style AI presentation generator with themes, editing, and PowerPoint export. | [![GitHub stars](https://img.shields.io/github/stars/allweonedev/presentation-ai?style=social)](https://github.com/allweonedev/presentation-ai) |
| [veasion/AiPPT](https://github.com/veasion/AiPPT) | AI PPT generator from topics, files, or URLs, with template customization and support for charts, animations, and 3D effects. | [![GitHub stars](https://img.shields.io/github/stars/veasion/AiPPT?style=social)](https://github.com/veasion/AiPPT) |
| [SmartSchoolAI/ai-to-pptx](https://github.com/SmartSchoolAI/ai-to-pptx) | Open-source AI assistant for generating PPTX outlines and decks with template selection, online editing, and export. | [![GitHub stars](https://img.shields.io/github/stars/SmartSchoolAI/ai-to-pptx?style=social)](https://github.com/SmartSchoolAI/ai-to-pptx) |
| [barun-saha/slide-deck-ai](https://github.com/barun-saha/slide-deck-ai) | AI-assisted PowerPoint deck generation. | [![GitHub stars](https://img.shields.io/github/stars/barun-saha/slide-deck-ai?style=social)](https://github.com/barun-saha/slide-deck-ai) |
| [HuiMi24/chatppt](https://github.com/HuiMi24/chatppt) | ChatGPT/Ollama-powered tool for generating PPT or slides, with English and Chinese output support. | [![GitHub stars](https://img.shields.io/github/stars/HuiMi24/chatppt?style=social)](https://github.com/HuiMi24/chatppt) |
| [CyberTimon/Powerpointer](https://github.com/CyberTimon/Powerpointer) | GPT-powered PowerPoint generator using Python and python-pptx. | [![GitHub stars](https://img.shields.io/github/stars/CyberTimon/Powerpointer?style=social)](https://github.com/CyberTimon/Powerpointer) |
| [SlideSpeak/slidespeak-backend](https://github.com/SlideSpeak/slidespeak-backend) | Backend for SlideSpeak, supporting AI summaries, Q&A, and PowerPoint creation workflows. | [![GitHub stars](https://img.shields.io/github/stars/SlideSpeak/slidespeak-backend?style=social)](https://github.com/SlideSpeak/slidespeak-backend) |
| [grapeot/nbp_slides](https://github.com/grapeot/nbp_slides) | AI-generated slide deck generator with narrative-based methodology and templates. | [![GitHub stars](https://img.shields.io/github/stars/grapeot/nbp_slides?style=social)](https://github.com/grapeot/nbp_slides) |

## Agent Skills and Workflows

Installable or agent-oriented workflows for creating, editing, or transforming presentations.

| Repository | Description | Stars |
| --- | --- | --- |
| [anthropics/skills - pptx](https://github.com/anthropics/skills/tree/main/skills/pptx) | Anthropic skill for reading, creating, editing, and analyzing PowerPoint presentations. | [![GitHub stars](https://img.shields.io/github/stars/anthropics/skills?style=social)](https://github.com/anthropics/skills) |
| [bytedance/deer-flow - ppt-generation](https://github.com/bytedance/deer-flow/tree/main/skills/public/ppt-generation) | Image-generation based PPT workflow inside DeerFlow. | [![GitHub stars](https://img.shields.io/github/stars/bytedance/deer-flow?style=social)](https://github.com/bytedance/deer-flow) |
| [openai/skills - slides](https://github.com/openai/skills) | OpenAI curated skill for creating and editing .pptx decks with PptxGenJS and validation utilities. | [![GitHub stars](https://img.shields.io/github/stars/openai/skills?style=social)](https://github.com/openai/skills) |
| [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design) | HTML-native design skill for Claude Code covering high-fidelity prototypes, slides, animation, review systems, and MP4 export. | [![GitHub stars](https://img.shields.io/github/stars/alchaincyf/huashu-design?style=social)](https://github.com/alchaincyf/huashu-design) |
| [MiniMax-AI/skills - pptx-generator](https://github.com/MiniMax-AI/skills) | MiniMax office skill for generating, editing, and reading PowerPoint presentations. | [![GitHub stars](https://img.shields.io/github/stars/MiniMax-AI/skills?style=social)](https://github.com/MiniMax-AI/skills) |
| [op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill) | AI-agent skill for polished HTML slide decks with editorial magazine and Swiss layouts, image prompts, social covers, and a presentation runtime. | [![GitHub stars](https://img.shields.io/github/stars/op7418/guizang-ppt-skill?style=social)](https://github.com/op7418/guizang-ppt-skill) |
| [op7418/NanoBanana-PPT-Skills](https://github.com/op7418/NanoBanana-PPT-Skills) | NanoBanana PPT skills for generating high-quality presentation images and videos with smart transitions and interactive playback. | [![GitHub stars](https://img.shields.io/github/stars/op7418/NanoBanana-PPT-Skills?style=social)](https://github.com/op7418/NanoBanana-PPT-Skills) |
| [NyxTides/ppt-image-first](https://github.com/NyxTides/ppt-image-first) | Image-first PPT skill for Codex, Claude Code, and Opencode CLI workflows. | [![GitHub stars](https://img.shields.io/github/stars/NyxTides/ppt-image-first?style=social)](https://github.com/NyxTides/ppt-image-first) |
| [sunbigfly/ppt-agent-skills](https://github.com/sunbigfly/ppt-agent-skills) | Code-driven presentation generation framework that treats deck creation like building software. | [![GitHub stars](https://img.shields.io/github/stars/sunbigfly/ppt-agent-skills?style=social)](https://github.com/sunbigfly/ppt-agent-skills) |
| [JuneYaooo/gpt-image2-ppt-skills](https://github.com/JuneYaooo/gpt-image2-ppt-skills) | Skill for cloning PPTX visual layouts with gpt-image-2 while replacing the content, including bundled styles. | [![GitHub stars](https://img.shields.io/github/stars/JuneYaooo/gpt-image2-ppt-skills?style=social)](https://github.com/JuneYaooo/gpt-image2-ppt-skills) |
| [Gabberflast/academic-pptx-skill](https://github.com/Gabberflast/academic-pptx-skill) | Claude skill for academic presentations, enforcing action titles, argument structure, exhibit discipline, citations, and communication-first design. | [![GitHub stars](https://img.shields.io/github/stars/Gabberflast/academic-pptx-skill?style=social)](https://github.com/Gabberflast/academic-pptx-skill) |
| [ningzimu/codex-ppt-skill](https://github.com/ningzimu/codex-ppt-skill) | Codex skill for generating image-based PowerPoint decks with gpt-image-2. | [![GitHub stars](https://img.shields.io/github/stars/ningzimu/codex-ppt-skill?style=social)](https://github.com/ningzimu/codex-ppt-skill) |
| [SkyworkAI/Skywork-Skills - skywork-ppt](https://github.com/SkyworkAI/Skywork-Skills) | Skill for generating, imitating, and editing PowerPoint presentations. | [![GitHub stars](https://img.shields.io/github/stars/SkyworkAI/Skywork-Skills?style=social)](https://github.com/SkyworkAI/Skywork-Skills) |
| [likaku/Mck-ppt-design-skill](https://github.com/likaku/Mck-ppt-design-skill) | Consulting-style PowerPoint design system for AI agents, with many layout patterns and python-pptx output. | [![GitHub stars](https://img.shields.io/github/stars/likaku/Mck-ppt-design-skill?style=social)](https://github.com/likaku/Mck-ppt-design-skill) |
| [Noi1r/powerpoint-skill](https://github.com/Noi1r/powerpoint-skill) | PowerPoint skill for academic slides, formulas, and diagrams using PptxGenJS. | [![GitHub stars](https://img.shields.io/github/stars/Noi1r/powerpoint-skill?style=social)](https://github.com/Noi1r/powerpoint-skill) |
| [tristan-mcinnis/pptx-from-layouts-skill](https://github.com/tristan-mcinnis/pptx-from-layouts-skill) | Claude Code skill for generating PowerPoint decks from Markdown using template slide master layouts. | [![GitHub stars](https://img.shields.io/github/stars/tristan-mcinnis/pptx-from-layouts-skill?style=social)](https://github.com/tristan-mcinnis/pptx-from-layouts-skill) |
| [stevenjinlong/awesome-ppt-skills](https://github.com/stevenjinlong/awesome-ppt-skills) | Codex skills for image-first PPT generation with gpt-image-2 and editable reconstruction handoff. | [![GitHub stars](https://img.shields.io/github/stars/stevenjinlong/awesome-ppt-skills?style=social)](https://github.com/stevenjinlong/awesome-ppt-skills) |
| [ykuwai/ppt-mcp](https://github.com/ykuwai/ppt-mcp) | PowerPoint MCP server for real-time PowerPoint control through COM automation. | [![GitHub stars](https://img.shields.io/github/stars/ykuwai/ppt-mcp?style=social)](https://github.com/ykuwai/ppt-mcp) |
| [PHY041/claude-skill-academic-ppt](https://github.com/PHY041/claude-skill-academic-ppt) | Claude Code skill for academic defense presentations from LaTeX or PDF, with figures, notes, and Q&A prediction. | [![GitHub stars](https://img.shields.io/github/stars/PHY041/claude-skill-academic-ppt?style=social)](https://github.com/PHY041/claude-skill-academic-ppt) |

## PowerPoint and PPTX Libraries

Developer libraries for creating, modifying, merging, or inspecting PPTX files.

| Repository | Description | Stars |
| --- | --- | --- |
| [gitbrent/PptxGenJS](https://github.com/gitbrent/PptxGenJS) | JavaScript library for creating PowerPoint presentations. | [![GitHub stars](https://img.shields.io/github/stars/gitbrent/PptxGenJS?style=social)](https://github.com/gitbrent/PptxGenJS) |
| [scanny/python-pptx](https://github.com/scanny/python-pptx) | Python library for creating and updating PowerPoint files. | [![GitHub stars](https://img.shields.io/github/stars/scanny/python-pptx?style=social)](https://github.com/scanny/python-pptx) |
| [singerla/pptx-automizer](https://github.com/singerla/pptx-automizer) | Node.js library for modifying, merging, and templating PowerPoint files. | [![GitHub stars](https://img.shields.io/github/stars/singerla/pptx-automizer?style=social)](https://github.com/singerla/pptx-automizer) |

## Editable Reconstruction

Projects focused on rebuilding documents, images, HTML, or existing slides into editable presentation objects.

| Repository | Description | Stars |
| --- | --- | --- |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | AI-driven workflow for producing natively editable PowerPoint decks from documents, URLs, and Markdown. | [![GitHub stars](https://img.shields.io/github/stars/hugohe3/ppt-master?style=social)](https://github.com/hugohe3/ppt-master) |
| [atharva9167j/dom-to-pptx](https://github.com/atharva9167j/dom-to-pptx) | Client-side DOM/CSS to editable PowerPoint converter with an agent skill installer. | [![GitHub stars](https://img.shields.io/github/stars/atharva9167j/dom-to-pptx?style=social)](https://github.com/atharva9167j/dom-to-pptx) |
| [JuniverseCoder/MinerU2PPT](https://github.com/JuniverseCoder/MinerU2PPT) | Converts PDFs and images into editable PowerPoint presentations using structure extraction. | [![GitHub stars](https://img.shields.io/github/stars/JuniverseCoder/MinerU2PPT?style=social)](https://github.com/JuniverseCoder/MinerU2PPT) |
| [ningzimu/image-to-editable-ppt-skill](https://github.com/ningzimu/image-to-editable-ppt-skill) | Codex skill for converting slide images, PDFs, and image-based PPTX files into editable PowerPoint decks. | [![GitHub stars](https://img.shields.io/github/stars/ningzimu/image-to-editable-ppt-skill?style=social)](https://github.com/ningzimu/image-to-editable-ppt-skill) |

## Markdown, HTML, and Document to Slides

Tools that convert structured content into slide decks or web presentations.

| Repository | Description | Stars |
| --- | --- | --- |
| [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) | Skill for creating animation-rich HTML presentations and converting PowerPoint files to web slides. | [![GitHub stars](https://img.shields.io/github/stars/zarazhangrui/frontend-slides?style=social)](https://github.com/zarazhangrui/frontend-slides) |
| [lewislulu/html-ppt-skill](https://github.com/lewislulu/html-ppt-skill) | HTML PPT Studio agent skill with 24 themes, 31 layouts, and 20+ animations for professional web presentations. | [![GitHub stars](https://img.shields.io/github/stars/lewislulu/html-ppt-skill?style=social)](https://github.com/lewislulu/html-ppt-skill) |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | Slide framework built for agents, where each page can be represented as a React component and updated by agent feedback. | [![GitHub stars](https://img.shields.io/github/stars/1weiho/open-slide?style=social)](https://github.com/1weiho/open-slide) |
| [Noi1r/beamer-skill](https://github.com/Noi1r/beamer-skill) | Claude Code skill for creating, compiling, reviewing, and polishing academic Beamer LaTeX presentations. | [![GitHub stars](https://img.shields.io/github/stars/Noi1r/beamer-skill?style=social)](https://github.com/Noi1r/beamer-skill) |
| [Kuneosu/make-slide](https://github.com/Kuneosu/make-slide) | Universal AI skill for generating standalone HTML slide decks. | [![GitHub stars](https://img.shields.io/github/stars/Kuneosu/make-slide?style=social)](https://github.com/Kuneosu/make-slide) |

## Research and Benchmarks

Research projects and papers about presentation generation, editing, or multimodal slide agents.

| Repository | Description | Stars |
| --- | --- | --- |
| [icip-cas/PPTAgent](https://github.com/icip-cas/PPTAgent) | Research-backed agentic framework for presentation generation and evaluation. | [![GitHub stars](https://img.shields.io/github/stars/icip-cas/PPTAgent?style=social)](https://github.com/icip-cas/PPTAgent) |
| [AIGeeksGroup/PresentAgent-2](https://github.com/AIGeeksGroup/PresentAgent-2) | Multimodal presentation agent research project. | [![GitHub stars](https://img.shields.io/github/stars/AIGeeksGroup/PresentAgent-2?style=social)](https://github.com/AIGeeksGroup/PresentAgent-2) |
| [PPTArena](https://arxiv.org/abs/2512.03042) | Benchmark for reliable PowerPoint editing across real decks. | - |

## Directories and Related Lists

Directories, indexes, and related resource collections.

| Repository | Description | Stars |
| --- | --- | --- |
| [openagentskills.dev - pptx](https://openagentskills.dev/skills/pptx) | Open Agent Skills directory entry for PPTX. | - |
| [powerpoint.md](https://powerpoint.md/) | Community-maintained directory comparing AI agent PowerPoint and Excel skills. | - |

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
