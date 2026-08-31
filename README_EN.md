# Awesome AI PPT

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![CC0](https://img.shields.io/badge/license-CC0-4cc61e.svg)](LICENSE)
[![Docs](https://img.shields.io/badge/docs-%E4%B8%AD%E6%96%87-blue)](README.md)
[![Website](https://img.shields.io/badge/GitHub%20Pages-awesome--ai--ppt-0f9f8f)](https://ningzimu.github.io/awesome-ai-ppt/)
[![Stars](https://img.shields.io/github/stars/ningzimu/awesome-ai-ppt?style=social)](https://github.com/ningzimu/awesome-ai-ppt)

A curated list of open-source projects for AI-assisted presentation generation, PowerPoint automation, PPTX editing, and slide workflow tooling.

This is a curated list, not a dump of every slide-related link. It focuses on GitHub repositories and technical projects that help agents or developers create, edit, convert, or inspect presentations.

Website: https://ningzimu.github.io/awesome-ai-ppt/

## Agent / Skill Access

This repository provides the `awesome-ai-ppt` skill. Tell your AI agent your scenario, source material, and preferences, and it can use this list to recommend the best-fit AI PPT tools. It can also help submit issues, prepare PRs, and contribute to this project with you when you ask.

Tell your AI agent: Install the awesome-ai-ppt skill from https://github.com/ningzimu/awesome-ai-ppt/tree/main/skills/awesome-ai-ppt

Manual install:

```bash
npx -y skills@latest add ningzimu/awesome-ai-ppt \
  --skill awesome-ai-ppt \
  --agent codex \
  --global
```

Examples:

```text
I want to turn a technical article into an editable PPT and care about later editing and automation. Use the awesome-ai-ppt skill to recommend the best-fit AI PPT projects.
Use the awesome-ai-ppt skill to check whether this GitHub project belongs in the list.
```

See the [Agent access page](https://ningzimu.github.io/awesome-ai-ppt/agent/) for details.

## Contents


- [HTML-First Presentation Workflows](#html-first-presentation-workflows)
- [Image-First Presentation Workflows](#image-first-presentation-workflows)
- [PPTX-Native Generation Workflows](#pptx-native-generation-workflows)
- [PPTX Libraries and Automation Infrastructure](#pptx-libraries-and-automation-infrastructure)
- [Scope](#scope)
- [Contributing](#contributing)

## HTML-First Presentation Workflows

Workflows that create HTML, web slides, or page-style presentations first, then export, screenshot, or convert them into PPT outputs.

| Repository | Description | Tags | Editability | Skill | Stars |
| --- | --- | --- | --- | --- | --- |
| [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) | Skill for creating animation-rich HTML presentations and converting PowerPoint files to web slides. | HTML-first, Conversion, PDF | Source editable | Skill | 28,457 |
| [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design) | HTML-native design skill for Claude Code covering high-fidelity prototypes, slides, animation, review systems, and MP4 export. | HTML-first, PDF, Video | Partially editable | Skill | 23,749 |
| [op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill) | AI-agent skill for polished HTML slide decks with editorial magazine and Swiss layouts, image prompts, social covers, and a presentation runtime. | HTML-first, Template, Image-based | Source editable | Skill | 25,354 |
| [presenton/presenton](https://github.com/presenton/presenton) | Open-source AI presentation generator and API with PPTX and PDF export. | HTML-first, App, Backend, MCP, Template | Editable | MCP | 9,941 |
| [lewislulu/html-ppt-skill](https://github.com/lewislulu/html-ppt-skill) | HTML PPT Studio agent skill with 24 themes, 31 layouts, and 20+ animations for professional web presentations. | HTML-first, Template | Source editable | Skill | 8,146 |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | Slide framework built for agents, where each page can be represented as a React component and updated by agent feedback. | HTML-first, App, PDF | Source editable | Skill | 7,333 |
| [chuspeeism/dashi-ppt-skill](https://github.com/chuspeeism/dashi-ppt-skill) | Agent skill for browser-editable presentations with multiple visual themes and HTML, PDF, and editable PPTX export. | HTML-first, Editor, Conversion, Template | Editable | Skill | 7,089 |
| [zarazhangrui/beautiful-html-templates](https://github.com/zarazhangrui/beautiful-html-templates) | Agent-oriented library of reusable HTML slide templates with an index and operating guide for selecting and adapting decks. | HTML-first, Template, Agent | Source editable | No | 4,426 |
| [sligter/LandPPT](https://github.com/sligter/LandPPT) | LLM-based presentation generation platform that turns documents into professional decks with templates, styling, and multiple model options. | HTML-first, App, Image-based, PDF, Video | Partially editable | No | 3,579 |
| [allweonedev/presentation-ai](https://github.com/allweonedev/presentation-ai) | Open-source Gamma-style AI presentation generator with themes, editing, and PowerPoint export. | HTML-first, App, Template | Partially editable | No | 3,009 |
| [sunbigfly/ppt-agent-skills](https://github.com/sunbigfly/ppt-agent-skills) | Code-driven presentation generation framework that treats deck creation like building software. | HTML-first, Image-based, Automation | Partially editable | Skill | 889 |
| [stackblitz/bolt-slides](https://github.com/stackblitz/bolt-slides) | React presentation framework with a bundled agent skill for producing interactive, responsive web decks. | HTML-first, React, Interactive | Source editable | Skill | 909 |
| [code-on-sunday/slide-deck-generator](https://github.com/code-on-sunday/slide-deck-generator) | AI skill for generating interactive browser-based slide decks as React and Vite applications. | HTML-first, React, Interactive, Template | Source editable | Skill | 143 |
| [Akxan/ppt-agent-skill](https://github.com/Akxan/ppt-agent-skill) | Claude Code skill that designs slides as HTML, converts them to SVG, and packages the result as editable PPTX. | HTML-first, Conversion, Template, PPTX-native | Editable | Skill | 140 |
| [M1n-n9/academic-ppt-master](https://github.com/M1n-n9/academic-ppt-master) | Academic presentation skill that turns papers and documents into SVG-designed slide pages and editable PPTX decks. | HTML-first, PPTX-native, Academic, Conversion, Template | Editable | Skill | 161 |
| [Kuneosu/make-slide](https://github.com/Kuneosu/make-slide) | Universal AI skill for generating standalone HTML slide decks. | HTML-first, PDF, Template | Partially editable | Skill | 122 |
| [kdnsna/ultimate-ppt-master-skill](https://github.com/kdnsna/ultimate-ppt-master-skill) | Local-first AI presentation hub that packages source files for agents and produces editable PowerPoint decks or magazine-style web decks. | HTML-first, PPTX-native, Conversion, Template, Automation | Editable | Skill | 2 |
| [codesstar/next-slide](https://github.com/codesstar/next-slide) | Skill for generating zero-dependency HTML presentations with curated styles, bilingual support, and PPT content conversion. | HTML-first, Conversion, Bilingual | Source editable | Skill | 50 |
| [marp-team/marp-cli](https://github.com/marp-team/marp-cli) | Marp CLI for converting Markdown slide decks into HTML, PDF, images, and PowerPoint files. | HTML-first, Markdown, Conversion | Partially editable | No | 3,789 |
| [archlizheng/frontend-slides-editable](https://github.com/archlizheng/frontend-slides-editable) | Editable HTML presentation skill for Codex and Claude Code with drag-resize editing, slide reordering, local save/export, and PPTX-to-web conversion. | HTML-first, Editor, Conversion, Skill | Source editable | Skill | 478 |
| [mucsbr/ppt-agent-workflow-san](https://github.com/mucsbr/ppt-agent-workflow-san) | Agent workflow that creates HTML/PNG slide previews and converts HTML slides into natively editable PowerPoint decks. | HTML-first, Conversion, Image-based, Automation | Editable | Skill | 634 |
| [MYZY-AI/dokie-ai-ppt](https://github.com/MYZY-AI/dokie-ai-ppt) | Agent skill for creating interactive HTML slides that can be edited in Dokie and exported as PDF, PPTX, or images. | HTML-first, Editor, Conversion, Skill | Partially editable | Skill | 70 |
| [LangChat/langchat-slides](https://github.com/LangChat/langchat-slides) | Vue-based AI slide generator with multi-page editing and export to PPT, PDF, PNG, SVG, JPG, and WebP. | HTML-first, App, Editor, Conversion | Partially editable | No | 218 |
| [LearnPrompt/humanize-ppt](https://github.com/LearnPrompt/humanize-ppt) | Agent skill for audience-state-driven presentation planning, downstream renderer coordination, speaker notes, and delivery-focused QA. | HTML-first, Automation, QA, PPTX-native | Partially editable | Skill | 914 |
| [NomaDamas/slides-grab](https://github.com/NomaDamas/slides-grab) | Agent-oriented HTML slide authoring harness with a browser editor, validation and design gates, image-native mode, and experimental PPTX export. | HTML-first, Editor, QA, Conversion, Image-based | Source editable | Skill | 1,196 |
| [arcsin1/oh-my-ppt](https://github.com/arcsin1/oh-my-ppt) | Local-first AI HTML presentation app with document and PPTX import, visual editing, templates, animation, and multi-format export. | HTML-first, App, Editor, Conversion, Video | Editable | No | 1,913 |
| [gainubi/note-slides](https://github.com/gainubi/note-slides) | Agent skill for turning long-form source material into source-anchored HTML note decks with planning and delivery checks. | HTML-first, Conversion, QA | Source editable | Skill | 243 |
| [ryanbbrown/revealjs-skill](https://github.com/ryanbbrown/revealjs-skill) | Coding-agent skill for Reveal.js presentations with browser text editing, overflow validation, screenshot review, and PDF export. | HTML-first, Reveal.js, Editor, QA, PDF | Source editable | Skill | 403 |
| [wengzige/html-deck-editor](https://github.com/wengzige/html-deck-editor) | HTML deck conversion and editing workspace with local browser processing, AI-assisted adaptation, and an MCP workflow for agent edits. | HTML-first, Editor, Conversion, MCP | Source editable | MCP | 154 |
| [daniel-style/magic-slide](https://github.com/daniel-style/magic-slide) | Agent skill for self-contained HTML presentations with Magic Move transitions, speaker notes, modular source files, and optional research and image generation. | HTML-first, Animation, Speaker notes, Research | Source editable | Skill | 170 |
| [sandeco/mira-animator](https://github.com/sandeco/mira-animator) | Multi-agent workflow for animated HTML decks and presentation videos; PolyForm Noncommercial permits monetized content but prohibits resale or embedding Mira in commercial software. | HTML-first, Animation, Video, Noncommercial | Source editable | Skill | 188 |
| [pipipi-pikachu/PPTist](https://github.com/pipipi-pikachu/PPTist) | Web slide editor with template-based AIPPT, an AI-oriented data schema, rich canvas editing, and PPTX import and export; licensed under AGPL-3.0 with separate commercial licensing available. | HTML-first, App, Editor, Conversion, PPTX-native | Editable | No | 9,288 |

## Image-First Presentation Workflows

Workflows centered on image models or whole-slide images, then packaging those slides as PPTX, PDF, video, or web presentations.

| Repository | Description | Tags | Editability | Skill | Stars |
| --- | --- | --- | --- | --- | --- |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | AI-native Nano Banana Pro presentation app for generating slides from ideas, outlines, assets, or page descriptions, with editable PPT export. | Image-first, Image-based, App, PDF, Video | Partially editable | No | 15,528 |
| [op7418/NanoBanana-PPT-Skills](https://github.com/op7418/NanoBanana-PPT-Skills) | NanoBanana PPT skills for generating high-quality presentation images and videos with smart transitions and interactive playback. | Image-first, Image-based, Video | Image-based | Skill | 3,225 |
| [helloianneo/ian-handdrawn-ppt](https://github.com/helloianneo/ian-handdrawn-ppt) | Codex skill for generating full-page Chinese hand-drawn technical presentation visuals as PNG images. | Image-first, Image-based | Image-based | Skill | 1,376 |
| [NyxTides/ppt-image-first](https://github.com/NyxTides/ppt-image-first) | Image-first PPT skill for Codex, Claude Code, and Opencode CLI workflows. | Image-first, Image-based | Image-based | Skill | 1,198 |
| [JuneYaooo/gpt-image2-ppt-skills](https://github.com/JuneYaooo/gpt-image2-ppt-skills) | Skill for cloning PPTX visual layouts with gpt-image-2 while replacing the content, including bundled styles. | Image-first, Image-based, Template | Image-based | Skill | 1,222 |
| [ningzimu/codex-ppt-skill](https://github.com/ningzimu/codex-ppt-skill) | Codex skill for generating image-based PowerPoint decks with gpt-image-2. | Image-first, Image-based | Image-based | Skill | 5,417 |
| [HKUDS/Paper2Slides](https://github.com/HKUDS/Paper2Slides) | Document-to-slide pipeline that uses RAG, planning, and image generation to render slide images and PDF decks. | Image-first, Image-based, Academic, PDF | Image-based | No | 3,822 |
| [grapeot/nbp_slides](https://github.com/grapeot/nbp_slides) | AI-generated slide deck generator with narrative-based methodology and templates. | Image-first, Image-based, HTML-first, PPTX | Image-based | No | 87 |
| [stevenjinlong/awesome-ppt-skills](https://github.com/stevenjinlong/awesome-ppt-skills) | Codex skills for image-first PPT generation with gpt-image-2 and editable reconstruction handoff. | Image-first, Image-based | Partially editable | Skill | 62 |
| [snowmanzhuang/yixueAIganhuo-PPT](https://github.com/snowmanzhuang/yixueAIganhuo-PPT) | Medical academic PPT workflow based on gpt-image-2 and PaddleOCR for generating slide decks from papers, PDFs, figures, screenshots, and prepared materials, then rebuilding editable PPTX files. | Image-first, Image-based, Academic, Conversion, PDF | Partially editable | Skill | 191 |
| [nexu-io/codex-slides](https://github.com/nexu-io/codex-slides) | Image-native Codex slide studio with persistent projects, research, parallel rendering, editing, and export; bundled community previews retain upstream attribution terms. | Image-first, Image-based, App, Codex, MCP | Image-based | MCP | 856 |

## PPTX-Native Generation Workflows

Workflows that directly generate native editable PPTX files through PptxGenJS, python-pptx, Office XML, or PowerPoint APIs.

| Repository | Description | Tags | Editability | Skill | Stars |
| --- | --- | --- | --- | --- | --- |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | AI-driven workflow for producing natively editable PowerPoint decks from documents, URLs, and Markdown. | PPTX-native, Template | Editable | Skill | 50,686 |
| [veasion/AiPPT](https://github.com/veasion/AiPPT) | AI PPT generator from topics, files, or URLs, with template customization and support for charts, animations, and 3D effects. | Automation, Conversion, App, PPTX-native | Editable | No | 1,904 |
| [SmartSchoolAI/ai-to-pptx](https://github.com/SmartSchoolAI/ai-to-pptx) | Open-source AI assistant for generating PPTX outlines and decks with template selection, online editing, and export. | PPTX-native, App, Template | Editable | No | 1,459 |
| [Gabberflast/academic-pptx-skill](https://github.com/Gabberflast/academic-pptx-skill) | Claude skill for academic presentations, enforcing action titles, argument structure, exhibit discipline, citations, and communication-first design. | PPTX-native, Template | Editable | Skill | 829 |
| [barun-saha/slide-deck-ai](https://github.com/barun-saha/slide-deck-ai) | AI-assisted PowerPoint deck generation. | PPTX-native, App, Backend, PDF | Editable | No | 373 |
| [addsumtech/slides_maker](https://github.com/addsumtech/slides_maker) | Agent skill that turns papers, repositories, and documents into native editable PPTX with notes, charts, and automated review. | PPTX-native, Template, Automation, QA | Editable | Skill | 490 |
| [HuiMi24/chatppt](https://github.com/HuiMi24/chatppt) | ChatGPT/Ollama-powered tool for generating PPT or slides, with English and Chinese output support. | PPTX-native, App, Backend | Editable | No | 307 |
| [CyberTimon/Powerpointer](https://github.com/CyberTimon/Powerpointer) | GPT-powered PowerPoint generator using Python and python-pptx. | PPTX-native, App, Backend | Editable | No | 177 |
| [likaku/Mck-ppt-design-skill](https://github.com/likaku/Mck-ppt-design-skill) | Consulting-style PowerPoint design system for AI agents, with many layout patterns and python-pptx output. | PPTX-native, Template, Automation | Editable | Skill | 262 |
| [Noi1r/powerpoint-skill](https://github.com/Noi1r/powerpoint-skill) | PowerPoint skill for academic slides, formulas, and diagrams using PptxGenJS. | PPTX-native, PDF, Automation | Editable | Skill | 115 |
| [tristan-mcinnis/pptx-from-layouts-skill](https://github.com/tristan-mcinnis/pptx-from-layouts-skill) | Claude Code skill for generating PowerPoint decks from Markdown using template slide master layouts. | PPTX-native, Template, Automation | Editable | Skill | 25 |
| [PHY041/claude-skill-academic-ppt](https://github.com/PHY041/claude-skill-academic-ppt) | Claude Code skill for academic defense presentations from LaTeX or PDF, with figures, notes, and Q&A prediction. | PPTX-native, PDF, Template | Partially editable | Skill | 28 |
| [icip-cas/PPTAgent](https://github.com/icip-cas/PPTAgent) | Agentic framework for reflective PowerPoint generation with PPTX export, offline mode, WebUI, CLI, and MCP support. | PPTX-native, Agent, MCP, Research | Editable | MCP | 4,971 |
| [GordenSun/GordenPPTSkill](https://github.com/GordenSun/GordenPPTSkill) | Python-pptx skill for building editable PowerPoint decks by applying structured text edits to bundled templates; the templates are limited to personal, research, and non-commercial educational use. | PPTX-native, Template, Automation | Editable | Skill | 3,008 |
| [YOOTeam/OpenPPT](https://github.com/YOOTeam/OpenPPT) | Open-source AI PPT editor covering generation, import, online editing, presentation playback, and Office-compatible PPTX export. | PPTX-native, App, Editor, Template | Editable | No | 1,096 |
| [OpenDCAI/Paper2Any](https://github.com/OpenDCAI/Paper2Any) | Research-paper multimodal workflow for editable figures, diagrams, posters, and slide decks, including Paper2PPT, PDF2PPT, and Image2PPT. | PPTX-native, Academic, Conversion, Image-based | Editable | No | 2,779 |
| [seulee26/mckinsey-pptx](https://github.com/seulee26/mckinsey-pptx) | Claude Code plugin for McKinsey-style PPTX generation with consulting slide templates and a template-selection subagent. | PPTX-native, Template, Consulting, Plugin | Editable | Skill | 568 |
| [zouchenzhen/thesis-defense-pptx-skill](https://github.com/zouchenzhen/thesis-defense-pptx-skill) | Claude Code skill for generating editable thesis-defense PowerPoint decks from LaTeX or PDF papers and PPTX templates. | PPTX-native, Academic, Template, PDF | Editable | Skill | 253 |
| [Sven-LI-sankyuu/presentation-skills](https://github.com/Sven-LI-sankyuu/presentation-skills) | Presentation skill collection centered on polished, editable, and validated PowerPoint deck generation workflows. | PPTX-native, Template, Automation, QA | Editable | Skill | 167 |
| [jitOffice/aippt](https://github.com/jitOffice/aippt) | Vue AI presentation editor with multi-model generation, canvas editing, and PPTX export through PptxGenJS. | PPTX-native, App, Editor, Template | Editable | No | 71 |
| [MartinPacker/md2pptx](https://github.com/MartinPacker/md2pptx) | Markdown-to-PowerPoint converter built on python-pptx with template support. | PPTX-native, Markdown, Template, CLI | Editable | No | 512 |
| [bowenliang123/markdown-exporter](https://github.com/bowenliang123/markdown-exporter) | Agent skill, Dify plugin, and CLI for exporting Markdown to PPTX, DOCX, HTML, PDF, and other formats with template support. | PPTX-native, Markdown, Conversion, Template | Editable | Skill | 266 |

## PPTX Libraries and Automation Infrastructure

Underlying PPTX libraries, MCP servers, Office automation, backend services, and editable reconstruction or conversion infrastructure.

| Repository | Description | Tags | Editability | Skill | Stars |
| --- | --- | --- | --- | --- | --- |
| [gitbrent/PptxGenJS](https://github.com/gitbrent/PptxGenJS) | JavaScript library for creating PowerPoint presentations. | Library, PPTX-native, Automation | Editable | No | 6,085 |
| [open-xml-templating/docxtemplater](https://github.com/open-xml-templating/docxtemplater) | Template engine for generating DOCX and PPTX with placeholders, loops, and conditions; advanced PowerPoint modules are commercial. | Library, Template, Automation, PPTX-native | Editable | No | 3,613 |
| [scanny/python-pptx](https://github.com/scanny/python-pptx) | Python library for creating and updating PowerPoint files. | Library, PPTX-native, Automation | Editable | No | 3,504 |
| [singerla/pptx-automizer](https://github.com/singerla/pptx-automizer) | Node.js library for modifying, merging, and templating PowerPoint files. | Library, Automation, PPTX-native, Template | Editable | No | 238 |
| [wyozi/react-pptx](https://github.com/wyozi/react-pptx) | React wrapper for PptxGenJS that creates PowerPoint presentations from declarative JSX components in Node.js or the browser. | Library, React, PPTX-native | Editable | No | 216 |
| [EveryInc/hands-on-deck](https://github.com/EveryInc/hands-on-deck) | Agent-oriented CLI and skill for inspecting, patching, creating, rendering, linting, and verifying PowerPoint files. | CLI, Automation, PPTX-native, QA | Editable | Skill | 208 |
| [atharva9167j/dom-to-pptx](https://github.com/atharva9167j/dom-to-pptx) | Client-side DOM/CSS to editable PowerPoint converter with an agent skill installer. | HTML-first, Conversion, Library, PPTX-native | Editable | Skill | 338 |
| [JuniverseCoder/MinerU2PPT](https://github.com/JuniverseCoder/MinerU2PPT) | Converts PDFs and images into editable PowerPoint presentations using structure extraction. | Conversion, PPTX-native, PDF, Image-based | Editable | No | 192 |
| [xiao24bei/xiaobei-skill-image-to-vba](https://github.com/xiao24bei/xiaobei-skill-image-to-vba) | Agent skill for reconstructing academic figures and slide screenshots as editable Office shapes and VBA code. | Conversion, Image-based, VBA, PowerPoint, Automation | Editable | Skill | 245 |
| [SlideSpeak/slidespeak-backend](https://github.com/SlideSpeak/slidespeak-backend) | Backend for SlideSpeak, supporting AI summaries, Q&A, and PowerPoint creation workflows. | Backend, Automation, Conversion, PPTX-native, PDF | Unknown | No | 96 |
| [trsdn/mcp-server-ppt](https://github.com/trsdn/mcp-server-ppt) | MCP server and CLI for creating, editing, and exporting PowerPoint through the Windows PowerPoint COM API. | MCP, Automation, PowerPoint, COM | Editable | MCP | 36 |
| [ningzimu/image-to-editable-ppt-skill](https://github.com/ningzimu/image-to-editable-ppt-skill) | Codex skill for converting slide images, PDFs, and image-based PPTX files into editable PowerPoint decks. | Conversion, Image-based, PDF | Editable | Skill | 2,263 |
| [PHPOffice/PHPPresentation](https://github.com/PHPOffice/PHPPresentation) | LGPL-3.0 PHP library for creating and writing PowerPoint and OpenDocument presentation files. | Library, PPTX-native, Automation | Editable | No | 1,373 |
| [ykuwai/ppt-mcp](https://github.com/ykuwai/ppt-mcp) | PowerPoint MCP server for real-time PowerPoint control through COM automation. | MCP, Automation, PowerPoint | Editable | MCP | 57 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | Local-first Office CLI for AI agents to create, inspect, edit, render, and automate PowerPoint files without Microsoft Office. | CLI, Automation, PPTX-native, Preview | Editable | Skill | 29,590 |
| [laihenyi/NBLM2PPTX](https://github.com/laihenyi/NBLM2PPTX) | Converts NotebookLM PDF slide exports into PPTX with slide backgrounds and editable text layers. | Conversion, PDF, Image-based, PPTX-native | Partially editable | No | 340 |
| [soulmujoco/EditableImage2PPTSkill](https://github.com/soulmujoco/EditableImage2PPTSkill) | Codex skill for reconstructing slide screenshots or exported slide images into editable PowerPoint decks with editable text, native shapes, extracted assets, and QA helpers. | Conversion, Image-based, PPTX-native, Automation | Editable | Skill | 64 |
| [Morgensonne/EditDeck](https://github.com/Morgensonne/EditDeck) | End-to-end deck workflow that creates slide images, standard PPTX files, and fully editable PPTX decks, including reconstruction from existing slide images. | Conversion, Image-based, PPTX-native, Automation | Editable | No | 1,198 |
| [Tansuo2021/OCRPDF-TO-PPT](https://github.com/Tansuo2021/OCRPDF-TO-PPT) | Converts images and PDF pages into editable PowerPoint decks by placing OCR text boxes over slide backgrounds. | Conversion, PDF, OCR, PPTX-native | Partially editable | No | 475 |
| [ShapeCrawler/ShapeCrawler](https://github.com/ShapeCrawler/ShapeCrawler) | .NET library for reading, creating, and modifying PowerPoint files through an API built on Open XML SDK. | Library, PPTX-native, Automation, .NET | Editable | No | 441 |
| [Daniel-Siae/image2pptx](https://github.com/Daniel-Siae/image2pptx) | Uses PaddleOCR-VL to parse document images into structured OCR data and rebuild editable PPTX slides with text boxes, tables, and image blocks. | Conversion, Image-based, OCR, PPTX-native | Editable | No | 25 |
| [JadeLiu-tech/px-image2pptx](https://github.com/JadeLiu-tech/px-image2pptx) | Converts static slide images into editable PPTX text layers using OCR, text masking, inpainting, and python-pptx reconstruction. | Conversion, Image-based, OCR, PPTX-native | Partially editable | No | 36 |
| [yingkitw/ppt-rs](https://github.com/yingkitw/ppt-rs) | Rust PPTX library and CLI for Markdown-to-PPTX, HTML-to-PPTX, PPTX-to-HTML, image export, and MCP workflows. | Library, PPTX-native, Conversion, MCP | Editable | MCP | 49 |
| [abdelkrimkr/html2pptx](https://github.com/abdelkrimkr/html2pptx) | Node.js CLI and library for converting HTML files into PowerPoint by mapping text, images, SVG, and CSS layout into PPTX objects. | HTML-first, Conversion, PPTX-native, Library | Editable | No | 23 |
| [Emily27-alt/html-to-pptx](https://github.com/Emily27-alt/html-to-pptx) | Claude Code skill for converting existing HTML slide decks into editable PPTX with native text, shapes, images, and layout reconstruction. | HTML-first, Conversion, PPTX-native, Skill | Editable | Skill | 20 |
| [supercurses/powerpoint](https://github.com/supercurses/powerpoint) | PowerPoint-focused MCP server for creating presentations with python-pptx, serving as an early baseline in the PPT MCP ecosystem. | MCP, Automation, PPTX-native, PowerPoint | Editable | MCP | 144 |
| [Ayushmaniar/powerpoint-mcp](https://github.com/Ayushmaniar/powerpoint-mcp) | Windows PowerPoint MCP server using pywin32 and COM automation for local PowerPoint control. | MCP, Automation, PowerPoint, COM | Editable | MCP | 112 |
| [daekeun-ml/ppt-translator](https://github.com/daekeun-ml/ppt-translator) | PowerPoint translation CLI and MCP server that preserves layout and structure while translating PPTX content with Amazon Bedrock. | MCP, Translation, Automation, PPTX-native | Editable | MCP | 70 |
| [theWDY/office-editor-mcp](https://github.com/theWDY/office-editor-mcp) | Office document MCP server with explicit PowerPoint creation and editing support alongside Word and Excel workflows. | MCP, Automation, PowerPoint, Office | Editable | MCP | 92 |
| [ferdinandobons/brand-docs](https://github.com/ferdinandobons/brand-docs) | Office template automation skills that extract reusable brand profiles and generate same-format PowerPoint, Word, and Excel files with deterministic and visual QA. | Template, Automation, PPTX-native, QA, Office | Editable | Skill | 254 |
| [ZhiweiWei-NAMI/PPT-Visual-Replica](https://github.com/ZhiweiWei-NAMI/PPT-Visual-Replica) | Image-to-editable-PowerPoint reconstruction skill with semantic asset decomposition, native text and connectors, residual tracking, and fail-closed delivery validation. | Conversion, Image-based, PPTX-native, QA | Editable | Skill | 131 |
| [solider-shuwen/shuttleslide](https://github.com/solider-shuwen/shuttleslide) | Python library and CLI for bidirectional PowerPoint-to-HTML conversion with round-trip metadata, editable DrawingML output, and optional AI generation and review. | Library, Conversion, HTML-first, PPTX-native, Automation | Editable | Skill | 176 |
| [icebird1998/scientific-illustrator](https://github.com/icebird1998/scientific-illustrator) | Codex plugin for reconstructing scientific reference images as editable PowerPoint, WPS, or draw.io objects with staged drawing, inspection, and correction. | Plugin, MCP, Automation, PowerPoint, Conversion, QA | Editable | MCP | 725 |
| [m3dev/pptx-template](https://github.com/m3dev/pptx-template) | Python template engine and CLI for filling PowerPoint templates from JSON, CSV, Excel, or Python model data. | Library, Template, Automation, PPTX-native, CLI | Editable | No | 119 |
| [pipipi-pikachu/pptxtojson](https://github.com/pipipi-pikachu/pptxtojson) | Browser-first PPTX parser that converts slides, elements, assets, themes, and speaker notes into structured JSON for editing and AI document workflows. | Library, Conversion, PPTX, Parser | Unknown | No | 454 |
| [ssine/pptx2md](https://github.com/ssine/pptx2md) | PowerPoint-to-Markdown converter that preserves hierarchy, lists, formatting, images, tables, and speaker notes for content and agent workflows. | Conversion, Markdown, PPTX, Parser | Unknown | No | 1,269 |

## Scope

Included projects should have a direct relationship to AI-assisted presentation work: generating slides, editing PPTX files, converting content into presentations, reconstructing editable decks, or rendering and validating slides.

Categories are based on the source representation of the main workflow, not the final export format. PPTX export does not automatically make a project PPTX-native; `Skill`, `editable PPTX`, and `PPTX export` are tags, not category decisions.

GitHub repositories should have at least 10 stars before being included.

If a project is only a subdirectory or skill inside a broad collection, general agent framework, or multi-skill repository, and the parent repository's stars do not represent that PPT workflow itself, it should not be included in the main list.

Out of scope:

- Generic AI writing tools without a presentation workflow.
- Generic image generators without slide or deck output.
- Generic slide frameworks without AI, agent, or PowerPoint automation behavior.
- Template marketplaces with no open repository or technical workflow.
- Archived, deprecated, or empty repositories.

## Contributing

Pull requests are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before suggesting a project. If you find an issue with a category, description, or link, please [open an issue](https://github.com/ningzimu/awesome-ai-ppt/issues).

## Contributors

Thanks to everyone who has helped maintain and improve this project.

<a href="https://github.com/ningzimu/awesome-ai-ppt/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ningzimu/awesome-ai-ppt" alt="Contributors">
</a>
