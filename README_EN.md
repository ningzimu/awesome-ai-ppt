# Awesome AI PPT

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![CC0](https://img.shields.io/badge/license-CC0-4cc61e.svg)](LICENSE)
[![Docs](https://img.shields.io/badge/docs-%E4%B8%AD%E6%96%87-blue)](README.md)
[![Website](https://img.shields.io/badge/GitHub%20Pages-awesome--ai--ppt-0f9f8f)](https://ningzimu.github.io/awesome-ai-ppt/)
[![Stars](https://img.shields.io/github/stars/ningzimu/awesome-ai-ppt?style=social)](https://github.com/ningzimu/awesome-ai-ppt/stargazers)

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
| [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) | Skill for creating animation-rich HTML presentations and converting PowerPoint files to web slides. | HTML-first, Conversion, PDF | Source editable | Skill | 24,094 |
| [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design) | HTML-native design skill for Claude Code covering high-fidelity prototypes, slides, animation, review systems, and MP4 export. | HTML-first, PDF, Video | Partially editable | Skill | 20,416 |
| [op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill) | AI-agent skill for polished HTML slide decks with editorial magazine and Swiss layouts, image prompts, social covers, and a presentation runtime. | HTML-first, Template, Image-based | Source editable | Skill | 19,524 |
| [presenton/presenton](https://github.com/presenton/presenton) | Open-source AI presentation generator and API with PPTX and PDF export. | HTML-first, App, Backend, MCP, Template | Editable | MCP | 8,604 |
| [lewislulu/html-ppt-skill](https://github.com/lewislulu/html-ppt-skill) | HTML PPT Studio agent skill with 24 themes, 31 layouts, and 20+ animations for professional web presentations. | HTML-first, Template | Source editable | Skill | 6,700 |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | Slide framework built for agents, where each page can be represented as a React component and updated by agent feedback. | HTML-first, App, PDF | Source editable | Skill | 5,595 |
| [sligter/LandPPT](https://github.com/sligter/LandPPT) | LLM-based presentation generation platform that turns documents into professional decks with templates, styling, and multiple model options. | HTML-first, App, Image-based, PDF, Video | Partially editable | No | 3,454 |
| [allweonedev/presentation-ai](https://github.com/allweonedev/presentation-ai) | Open-source Gamma-style AI presentation generator with themes, editing, and PowerPoint export. | HTML-first, App, Template | Partially editable | No | 2,875 |
| [sunbigfly/ppt-agent-skills](https://github.com/sunbigfly/ppt-agent-skills) | Code-driven presentation generation framework that treats deck creation like building software. | HTML-first, Image-based, Automation | Partially editable | Skill | 835 |
| [code-on-sunday/slide-deck-generator](https://github.com/code-on-sunday/slide-deck-generator) | AI skill for generating interactive browser-based slide decks as React and Vite applications. | HTML-first, React, Interactive, Template | Source editable | Skill | 121 |
| [Kuneosu/make-slide](https://github.com/Kuneosu/make-slide) | Universal AI skill for generating standalone HTML slide decks. | HTML-first, PDF, Template | Partially editable | Skill | 93 |
| [kdnsna/ultimate-ppt-master-skill](https://github.com/kdnsna/ultimate-ppt-master-skill) | Local-first AI presentation hub that packages source files for agents and produces editable PowerPoint decks or magazine-style web decks. | HTML-first, PPTX-native, Conversion, Template, Automation | Editable | Skill | 99 |
| [codesstar/next-slide](https://github.com/codesstar/next-slide) | Skill for generating zero-dependency HTML presentations with curated styles, bilingual support, and PPT content conversion. | HTML-first, Conversion, Bilingual | Source editable | Skill | 36 |
| [marp-team/marp-cli](https://github.com/marp-team/marp-cli) | Marp CLI for converting Markdown slide decks into HTML, PDF, images, and PowerPoint files. | HTML-first, Markdown, Conversion | Partially editable | No | 3,671 |
| [archlizheng/frontend-slides-editable](https://github.com/archlizheng/frontend-slides-editable) | Editable HTML presentation skill for Codex and Claude Code with drag-resize editing, slide reordering, local save/export, and PPTX-to-web conversion. | HTML-first, Editor, Conversion, Skill | Source editable | Skill | 383 |
| [mucsbr/ppt-agent-workflow-san](https://github.com/mucsbr/ppt-agent-workflow-san) | Agent workflow that creates HTML/PNG slide previews and converts HTML slides into natively editable PowerPoint decks. | HTML-first, Conversion, Image-based, Automation | Editable | Skill | 604 |
| [MYZY-AI/dokie-ai-ppt](https://github.com/MYZY-AI/dokie-ai-ppt) | Agent skill for creating interactive HTML slides that can be edited in Dokie and exported as PDF, PPTX, or images. | HTML-first, Editor, Conversion, Skill | Partially editable | Skill | 65 |
| [LangChat/langchat-slides](https://github.com/LangChat/langchat-slides) | Vue-based AI slide generator with multi-page editing and export to PPT, PDF, PNG, SVG, JPG, and WebP. | HTML-first, App, Editor, Conversion | Partially editable | No | 212 |

## Image-First Presentation Workflows

Workflows centered on image models or whole-slide images, then packaging those slides as PPTX, PDF, video, or web presentations.

| Repository | Description | Tags | Editability | Skill | Stars |
| --- | --- | --- | --- | --- | --- |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | AI-native Nano Banana Pro presentation app for generating slides from ideas, outlines, assets, or page descriptions, with editable PPT export. | Image-first, Image-based, App, PDF, Video | Partially editable | No | 15,092 |
| [op7418/NanoBanana-PPT-Skills](https://github.com/op7418/NanoBanana-PPT-Skills) | NanoBanana PPT skills for generating high-quality presentation images and videos with smart transitions and interactive playback. | Image-first, Image-based, Video | Image-based | Skill | 3,066 |
| [NyxTides/ppt-image-first](https://github.com/NyxTides/ppt-image-first) | Image-first PPT skill for Codex, Claude Code, and Opencode CLI workflows. | Image-first, Image-based | Image-based | Skill | 1,114 |
| [JuneYaooo/gpt-image2-ppt-skills](https://github.com/JuneYaooo/gpt-image2-ppt-skills) | Skill for cloning PPTX visual layouts with gpt-image-2 while replacing the content, including bundled styles. | Image-first, Image-based, Template | Image-based | Skill | 998 |
| [ningzimu/codex-ppt-skill](https://github.com/ningzimu/codex-ppt-skill) | Codex skill for generating image-based PowerPoint decks with gpt-image-2. | Image-first, Image-based | Image-based | Skill | 2,802 |
| [grapeot/nbp_slides](https://github.com/grapeot/nbp_slides) | AI-generated slide deck generator with narrative-based methodology and templates. | Image-first, Image-based, HTML-first, PPTX | Image-based | No | 87 |
| [stevenjinlong/awesome-ppt-skills](https://github.com/stevenjinlong/awesome-ppt-skills) | Codex skills for image-first PPT generation with gpt-image-2 and editable reconstruction handoff. | Image-first, Image-based | Partially editable | Skill | 55 |
| [snowmanzhuang/yixueAIganhuo-PPT](https://github.com/snowmanzhuang/yixueAIganhuo-PPT) | Medical academic PPT workflow based on gpt-image-2 and PaddleOCR for generating slide decks from papers, PDFs, figures, screenshots, and prepared materials, then rebuilding editable PPTX files. | Image-first, Image-based, Academic, Conversion, PDF | Partially editable | Skill | 168 |

## PPTX-Native Generation Workflows

Workflows that directly generate native editable PPTX files through PptxGenJS, python-pptx, Office XML, or PowerPoint APIs.

| Repository | Description | Tags | Editability | Skill | Stars |
| --- | --- | --- | --- | --- | --- |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | AI-driven workflow for producing natively editable PowerPoint decks from documents, URLs, and Markdown. | PPTX-native, Template | Editable | Skill | 35,157 |
| [veasion/AiPPT](https://github.com/veasion/AiPPT) | AI PPT generator from topics, files, or URLs, with template customization and support for charts, animations, and 3D effects. | Automation, Conversion, App, PPTX-native | Editable | No | 1,895 |
| [SmartSchoolAI/ai-to-pptx](https://github.com/SmartSchoolAI/ai-to-pptx) | Open-source AI assistant for generating PPTX outlines and decks with template selection, online editing, and export. | PPTX-native, App, Template | Editable | No | 1,453 |
| [Gabberflast/academic-pptx-skill](https://github.com/Gabberflast/academic-pptx-skill) | Claude skill for academic presentations, enforcing action titles, argument structure, exhibit discipline, citations, and communication-first design. | PPTX-native, Template | Editable | Skill | 616 |
| [barun-saha/slide-deck-ai](https://github.com/barun-saha/slide-deck-ai) | AI-assisted PowerPoint deck generation. | PPTX-native, App, Backend, PDF | Editable | No | 360 |
| [HuiMi24/chatppt](https://github.com/HuiMi24/chatppt) | ChatGPT/Ollama-powered tool for generating PPT or slides, with English and Chinese output support. | PPTX-native, App, Backend | Editable | No | 306 |
| [CyberTimon/Powerpointer](https://github.com/CyberTimon/Powerpointer) | GPT-powered PowerPoint generator using Python and python-pptx. | PPTX-native, App, Backend | Editable | No | 175 |
| [likaku/Mck-ppt-design-skill](https://github.com/likaku/Mck-ppt-design-skill) | Consulting-style PowerPoint design system for AI agents, with many layout patterns and python-pptx output. | PPTX-native, Template, Automation | Editable | Skill | 205 |
| [Noi1r/powerpoint-skill](https://github.com/Noi1r/powerpoint-skill) | PowerPoint skill for academic slides, formulas, and diagrams using PptxGenJS. | PPTX-native, PDF, Automation | Editable | Skill | 96 |
| [tristan-mcinnis/pptx-from-layouts-skill](https://github.com/tristan-mcinnis/pptx-from-layouts-skill) | Claude Code skill for generating PowerPoint decks from Markdown using template slide master layouts. | PPTX-native, Template, Automation | Editable | Skill | 82 |
| [PHY041/claude-skill-academic-ppt](https://github.com/PHY041/claude-skill-academic-ppt) | Claude Code skill for academic defense presentations from LaTeX or PDF, with figures, notes, and Q&A prediction. | PPTX-native, PDF, Template | Partially editable | Skill | 18 |
| [icip-cas/PPTAgent](https://github.com/icip-cas/PPTAgent) | Agentic framework for reflective PowerPoint generation with PPTX export, offline mode, WebUI, CLI, and MCP support. | PPTX-native, Agent, MCP, Research | Editable | MCP | 4,756 |
| [YOOTeam/OpenPPT](https://github.com/YOOTeam/OpenPPT) | Open-source AI PPT editor covering generation, import, online editing, presentation playback, and Office-compatible PPTX export. | PPTX-native, App, Editor, Template | Editable | No | 1,088 |
| [OpenDCAI/Paper2Any](https://github.com/OpenDCAI/Paper2Any) | Research-paper multimodal workflow for editable figures, diagrams, posters, and slide decks, including Paper2PPT, PDF2PPT, and Image2PPT. | PPTX-native, Academic, Conversion, Image-based | Editable | No | 2,669 |
| [seulee26/mckinsey-pptx](https://github.com/seulee26/mckinsey-pptx) | Claude Code plugin for McKinsey-style PPTX generation with consulting slide templates and a template-selection subagent. | PPTX-native, Template, Consulting, Plugin | Editable | Skill | 500 |
| [zouchenzhen/thesis-defense-pptx-skill](https://github.com/zouchenzhen/thesis-defense-pptx-skill) | Claude Code skill for generating editable thesis-defense PowerPoint decks from LaTeX or PDF papers and PPTX templates. | PPTX-native, Academic, Template, PDF | Editable | Skill | 189 |
| [Sven-LI-sankyuu/presentation-skills](https://github.com/Sven-LI-sankyuu/presentation-skills) | Presentation skill collection centered on polished, editable, and validated PowerPoint deck generation workflows. | PPTX-native, Template, Automation, QA | Editable | Skill | 157 |
| [jitOffice/aippt](https://github.com/jitOffice/aippt) | Vue AI presentation editor with multi-model generation, canvas editing, and PPTX export through PptxGenJS. | PPTX-native, App, Editor, Template | Editable | No | 72 |
| [MartinPacker/md2pptx](https://github.com/MartinPacker/md2pptx) | Markdown-to-PowerPoint converter built on python-pptx with template support. | PPTX-native, Markdown, Template, CLI | Editable | No | 508 |
| [bowenliang123/markdown-exporter](https://github.com/bowenliang123/markdown-exporter) | Agent skill, Dify plugin, and CLI for exporting Markdown to PPTX, DOCX, HTML, PDF, and other formats with template support. | PPTX-native, Markdown, Conversion, Template | Editable | Skill | 243 |

## PPTX Libraries and Automation Infrastructure

Underlying PPTX libraries, MCP servers, Office automation, backend services, and editable reconstruction or conversion infrastructure.

| Repository | Description | Tags | Editability | Skill | Stars |
| --- | --- | --- | --- | --- | --- |
| [gitbrent/PptxGenJS](https://github.com/gitbrent/PptxGenJS) | JavaScript library for creating PowerPoint presentations. | Library, PPTX-native, Automation | Editable | No | 5,779 |
| [scanny/python-pptx](https://github.com/scanny/python-pptx) | Python library for creating and updating PowerPoint files. | Library, PPTX-native, Automation | Editable | No | 3,434 |
| [singerla/pptx-automizer](https://github.com/singerla/pptx-automizer) | Node.js library for modifying, merging, and templating PowerPoint files. | Library, Automation, PPTX-native, Template | Editable | No | 220 |
| [atharva9167j/dom-to-pptx](https://github.com/atharva9167j/dom-to-pptx) | Client-side DOM/CSS to editable PowerPoint converter with an agent skill installer. | HTML-first, Conversion, Library, PPTX-native | Editable | Skill | 264 |
| [JuniverseCoder/MinerU2PPT](https://github.com/JuniverseCoder/MinerU2PPT) | Converts PDFs and images into editable PowerPoint presentations using structure extraction. | Conversion, PPTX-native, PDF, Image-based | Editable | No | 190 |
| [SlideSpeak/slidespeak-backend](https://github.com/SlideSpeak/slidespeak-backend) | Backend for SlideSpeak, supporting AI summaries, Q&A, and PowerPoint creation workflows. | Backend, Automation, Conversion, PPTX-native, PDF | Unknown | No | 95 |
| [trsdn/mcp-server-ppt](https://github.com/trsdn/mcp-server-ppt) | MCP server and CLI for creating, editing, and exporting PowerPoint through the Windows PowerPoint COM API. | MCP, Automation, PowerPoint, COM | Editable | MCP | 34 |
| [ningzimu/image-to-editable-ppt-skill](https://github.com/ningzimu/image-to-editable-ppt-skill) | Codex skill for converting slide images, PDFs, and image-based PPTX files into editable PowerPoint decks. | Conversion, Image-based, PDF | Editable | Skill | 995 |
| [ykuwai/ppt-mcp](https://github.com/ykuwai/ppt-mcp) | PowerPoint MCP server for real-time PowerPoint control through COM automation. | MCP, Automation, PowerPoint | Editable | MCP | 42 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | Local-first Office CLI for AI agents to create, inspect, edit, render, and automate PowerPoint files without Microsoft Office. | CLI, Automation, PPTX-native, Preview | Editable | Skill | 8,239 |
| [laihenyi/NBLM2PPTX](https://github.com/laihenyi/NBLM2PPTX) | Converts NotebookLM PDF slide exports into PPTX with slide backgrounds and editable text layers. | Conversion, PDF, Image-based, PPTX-native | Partially editable | No | 327 |
| [soulmujoco/EditableImage2PPTSkill](https://github.com/soulmujoco/EditableImage2PPTSkill) | Codex skill for reconstructing slide screenshots or exported slide images into editable PowerPoint decks with editable text, native shapes, extracted assets, and QA helpers. | Conversion, Image-based, PPTX-native, Automation | Editable | Skill | 49 |
| [Morgensonne/EditDeck](https://github.com/Morgensonne/EditDeck) | End-to-end deck workflow that creates slide images, standard PPTX files, and fully editable PPTX decks, including reconstruction from existing slide images. | Conversion, Image-based, PPTX-native, Automation | Editable | No | 1,194 |
| [Tansuo2021/OCRPDF-TO-PPT](https://github.com/Tansuo2021/OCRPDF-TO-PPT) | Converts images and PDF pages into editable PowerPoint decks by placing OCR text boxes over slide backgrounds. | Conversion, PDF, OCR, PPTX-native | Partially editable | No | 473 |
| [Daniel-Siae/image2pptx](https://github.com/Daniel-Siae/image2pptx) | Uses PaddleOCR-VL to parse document images into structured OCR data and rebuild editable PPTX slides with text boxes, tables, and image blocks. | Conversion, Image-based, OCR, PPTX-native | Editable | No | 27 |
| [JadeLiu-tech/px-image2pptx](https://github.com/JadeLiu-tech/px-image2pptx) | Converts static slide images into editable PPTX text layers using OCR, text masking, inpainting, and python-pptx reconstruction. | Conversion, Image-based, OCR, PPTX-native | Partially editable | No | 32 |
| [yingkitw/ppt-rs](https://github.com/yingkitw/ppt-rs) | Rust PPTX library and CLI for Markdown-to-PPTX, HTML-to-PPTX, PPTX-to-HTML, image export, and MCP workflows. | Library, PPTX-native, Conversion, MCP | Editable | MCP | 45 |
| [abdelkrimkr/html2pptx](https://github.com/abdelkrimkr/html2pptx) | Node.js CLI and library for converting HTML files into PowerPoint by mapping text, images, SVG, and CSS layout into PPTX objects. | HTML-first, Conversion, PPTX-native, Library | Editable | No | 18 |
| [Emily27-alt/html-to-pptx](https://github.com/Emily27-alt/html-to-pptx) | Claude Code skill for converting existing HTML slide decks into editable PPTX with native text, shapes, images, and layout reconstruction. | HTML-first, Conversion, PPTX-native, Skill | Editable | Skill | 17 |
| [supercurses/powerpoint](https://github.com/supercurses/powerpoint) | PowerPoint-focused MCP server for creating presentations with python-pptx, serving as an early baseline in the PPT MCP ecosystem. | MCP, Automation, PPTX-native, PowerPoint | Editable | MCP | 142 |
| [Ayushmaniar/powerpoint-mcp](https://github.com/Ayushmaniar/powerpoint-mcp) | Windows PowerPoint MCP server using pywin32 and COM automation for local PowerPoint control. | MCP, Automation, PowerPoint, COM | Editable | MCP | 98 |
| [daekeun-ml/ppt-translator](https://github.com/daekeun-ml/ppt-translator) | PowerPoint translation CLI and MCP server that preserves layout and structure while translating PPTX content with Amazon Bedrock. | MCP, Translation, Automation, PPTX-native | Editable | MCP | 65 |
| [theWDY/office-editor-mcp](https://github.com/theWDY/office-editor-mcp) | Office document MCP server with explicit PowerPoint creation and editing support alongside Word and Excel workflows. | MCP, Automation, PowerPoint, Office | Editable | MCP | 91 |

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
