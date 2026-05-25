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
| [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) | Skill for creating animation-rich HTML presentations and converting PowerPoint files to web slides. | HTML-first, Conversion, PDF | Source editable | Skill | <a href="https://github.com/zarazhangrui/frontend-slides/stargazers"><img src="https://img.shields.io/github/stars/zarazhangrui/frontend-slides?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design) | HTML-native design skill for Claude Code covering high-fidelity prototypes, slides, animation, review systems, and MP4 export. | HTML-first, PDF, Video | Partially editable | Skill | <a href="https://github.com/alchaincyf/huashu-design/stargazers"><img src="https://img.shields.io/github/stars/alchaincyf/huashu-design?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill) | AI-agent skill for polished HTML slide decks with editorial magazine and Swiss layouts, image prompts, social covers, and a presentation runtime. | HTML-first, Template, Image-based | Source editable | Skill | <a href="https://github.com/op7418/guizang-ppt-skill/stargazers"><img src="https://img.shields.io/github/stars/op7418/guizang-ppt-skill?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [presenton/presenton](https://github.com/presenton/presenton) | Open-source AI presentation generator and API with PPTX and PDF export. | HTML-first, App, Backend, MCP, Template | Editable | MCP | <a href="https://github.com/presenton/presenton/stargazers"><img src="https://img.shields.io/github/stars/presenton/presenton?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [lewislulu/html-ppt-skill](https://github.com/lewislulu/html-ppt-skill) | HTML PPT Studio agent skill with 24 themes, 31 layouts, and 20+ animations for professional web presentations. | HTML-first, Template | Source editable | Skill | <a href="https://github.com/lewislulu/html-ppt-skill/stargazers"><img src="https://img.shields.io/github/stars/lewislulu/html-ppt-skill?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | Slide framework built for agents, where each page can be represented as a React component and updated by agent feedback. | HTML-first, App, PDF | Source editable | Skill | <a href="https://github.com/1weiho/open-slide/stargazers"><img src="https://img.shields.io/github/stars/1weiho/open-slide?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [sligter/LandPPT](https://github.com/sligter/LandPPT) | LLM-based presentation generation platform that turns documents into professional decks with templates, styling, and multiple model options. | HTML-first, App, Image-based, PDF, Video | Partially editable | No | <a href="https://github.com/sligter/LandPPT/stargazers"><img src="https://img.shields.io/github/stars/sligter/LandPPT?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [allweonedev/presentation-ai](https://github.com/allweonedev/presentation-ai) | Open-source Gamma-style AI presentation generator with themes, editing, and PowerPoint export. | HTML-first, App, Template | Partially editable | No | <a href="https://github.com/allweonedev/presentation-ai/stargazers"><img src="https://img.shields.io/github/stars/allweonedev/presentation-ai?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [sunbigfly/ppt-agent-skills](https://github.com/sunbigfly/ppt-agent-skills) | Code-driven presentation generation framework that treats deck creation like building software. | HTML-first, Image-based, Automation | Partially editable | Skill | <a href="https://github.com/sunbigfly/ppt-agent-skills/stargazers"><img src="https://img.shields.io/github/stars/sunbigfly/ppt-agent-skills?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [zai-org/GLM-skills - glmv-pdf-to-ppt](https://github.com/zai-org/GLM-skills/tree/main/skills/glmv-pdf-to-ppt) | GLM-V skill for converting PDFs into structured multi-slide HTML presentations with cropped visuals and summary notes. | HTML-first, PDF, Image-based, Conversion | Source editable | Skill | <a href="https://github.com/zai-org/GLM-skills/stargazers"><img src="https://img.shields.io/github/stars/zai-org/GLM-skills?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [claude-office-skills/skills - html-slides](https://github.com/claude-office-skills/skills/tree/main/html-slides) | HTML slides skill for creating reveal.js presentations with animation, code highlighting, and speaker notes. | HTML-first, Reveal.js, Conversion | Source editable | Skill | <a href="https://github.com/claude-office-skills/skills/stargazers"><img src="https://img.shields.io/github/stars/claude-office-skills/skills?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [code-on-sunday/slide-deck-generator](https://github.com/code-on-sunday/slide-deck-generator) | AI skill for generating interactive browser-based slide decks as React and Vite applications. | HTML-first, React, Interactive, Template | Source editable | Skill | <a href="https://github.com/code-on-sunday/slide-deck-generator/stargazers"><img src="https://img.shields.io/github/stars/code-on-sunday/slide-deck-generator?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [Kuneosu/make-slide](https://github.com/Kuneosu/make-slide) | Universal AI skill for generating standalone HTML slide decks. | HTML-first, PDF, Template | Partially editable | Skill | <a href="https://github.com/Kuneosu/make-slide/stargazers"><img src="https://img.shields.io/github/stars/Kuneosu/make-slide?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [zocomputer/skills - revealjs-presentation](https://github.com/zocomputer/skills/tree/main/Community/revealjs-presentation) | Reveal.js presentation skill that creates single-file HTML slide decks with Chart.js charts and optional zo.space publishing. | HTML-first, Reveal.js, Charts | Source editable | Skill | <a href="https://github.com/zocomputer/skills/stargazers"><img src="https://img.shields.io/github/stars/zocomputer/skills?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [kdnsna/ultimate-ppt-master-skill](https://github.com/kdnsna/ultimate-ppt-master-skill) | Local-first AI presentation hub that packages source files for agents and produces editable PowerPoint decks or magazine-style web decks. | HTML-first, PPTX-native, Conversion, Template, Automation | Editable | Skill | <a href="https://github.com/kdnsna/ultimate-ppt-master-skill/stargazers"><img src="https://img.shields.io/github/stars/kdnsna/ultimate-ppt-master-skill?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [codesstar/next-slide](https://github.com/codesstar/next-slide) | Skill for generating zero-dependency HTML presentations with curated styles, bilingual support, and PPT content conversion. | HTML-first, Conversion, Bilingual | Source editable | Skill | <a href="https://github.com/codesstar/next-slide/stargazers"><img src="https://img.shields.io/github/stars/codesstar/next-slide?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |

## Image-First Presentation Workflows

Workflows centered on image models or whole-slide images, then packaging those slides as PPTX, PDF, video, or web presentations.

| Repository | Description | Tags | Editability | Skill | Stars |
| --- | --- | --- | --- | --- | --- |
| [bytedance/deer-flow - ppt-generation](https://github.com/bytedance/deer-flow/tree/main/skills/public/ppt-generation) | Image-generation based PPT workflow inside DeerFlow. | Image-first, Image-based, Workflow | Image-based | Skill | <a href="https://github.com/bytedance/deer-flow/stargazers"><img src="https://img.shields.io/github/stars/bytedance/deer-flow?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | AI-native Nano Banana Pro presentation app for generating slides from ideas, outlines, assets, or page descriptions, with editable PPT export. | Image-first, Image-based, App, PDF, Video | Partially editable | No | <a href="https://github.com/Anionex/banana-slides/stargazers"><img src="https://img.shields.io/github/stars/Anionex/banana-slides?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [op7418/NanoBanana-PPT-Skills](https://github.com/op7418/NanoBanana-PPT-Skills) | NanoBanana PPT skills for generating high-quality presentation images and videos with smart transitions and interactive playback. | Image-first, Image-based, Video | Image-based | Skill | <a href="https://github.com/op7418/NanoBanana-PPT-Skills/stargazers"><img src="https://img.shields.io/github/stars/op7418/NanoBanana-PPT-Skills?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [NyxTides/ppt-image-first](https://github.com/NyxTides/ppt-image-first) | Image-first PPT skill for Codex, Claude Code, and Opencode CLI workflows. | Image-first, Image-based | Image-based | Skill | <a href="https://github.com/NyxTides/ppt-image-first/stargazers"><img src="https://img.shields.io/github/stars/NyxTides/ppt-image-first?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [JuneYaooo/gpt-image2-ppt-skills](https://github.com/JuneYaooo/gpt-image2-ppt-skills) | Skill for cloning PPTX visual layouts with gpt-image-2 while replacing the content, including bundled styles. | Image-first, Image-based, Template | Image-based | Skill | <a href="https://github.com/JuneYaooo/gpt-image2-ppt-skills/stargazers"><img src="https://img.shields.io/github/stars/JuneYaooo/gpt-image2-ppt-skills?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [ningzimu/codex-ppt-skill](https://github.com/ningzimu/codex-ppt-skill) | Codex skill for generating image-based PowerPoint decks with gpt-image-2. | Image-first, Image-based | Image-based | Skill | <a href="https://github.com/ningzimu/codex-ppt-skill/stargazers"><img src="https://img.shields.io/github/stars/ningzimu/codex-ppt-skill?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [grapeot/nbp_slides](https://github.com/grapeot/nbp_slides) | AI-generated slide deck generator with narrative-based methodology and templates. | Image-first, Image-based, HTML-first, PPTX | Image-based | No | <a href="https://github.com/grapeot/nbp_slides/stargazers"><img src="https://img.shields.io/github/stars/grapeot/nbp_slides?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [stevenjinlong/awesome-ppt-skills](https://github.com/stevenjinlong/awesome-ppt-skills) | Codex skills for image-first PPT generation with gpt-image-2 and editable reconstruction handoff. | Image-first, Image-based | Partially editable | Skill | <a href="https://github.com/stevenjinlong/awesome-ppt-skills/stargazers"><img src="https://img.shields.io/github/stars/stevenjinlong/awesome-ppt-skills?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |

## PPTX-Native Generation Workflows

Workflows that directly generate native editable PPTX files through PptxGenJS, python-pptx, Office XML, or PowerPoint APIs.

| Repository | Description | Tags | Editability | Skill | Stars |
| --- | --- | --- | --- | --- | --- |
| [anthropics/skills - pptx](https://github.com/anthropics/skills/tree/main/skills/pptx) | Anthropic skill for reading, creating, editing, and analyzing PowerPoint presentations. | PPTX-native, Automation | Editable | Skill | <a href="https://github.com/anthropics/skills/stargazers"><img src="https://img.shields.io/github/stars/anthropics/skills?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | AI-driven workflow for producing natively editable PowerPoint decks from documents, URLs, and Markdown. | PPTX-native, Template | Editable | Skill | <a href="https://github.com/hugohe3/ppt-master/stargazers"><img src="https://img.shields.io/github/stars/hugohe3/ppt-master?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [MiniMax-AI/skills - pptx-generator](https://github.com/MiniMax-AI/skills) | MiniMax office skill for generating, editing, and reading PowerPoint presentations. | PPTX-native, Automation | Editable | Skill | <a href="https://github.com/MiniMax-AI/skills/stargazers"><img src="https://img.shields.io/github/stars/MiniMax-AI/skills?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [wanshuiyin/Auto-claude-code-research-in-sleep - paper-slides](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/tree/main/skills/paper-slides) | ARIS skill for turning papers into Beamer/PDF slides and editable PPTX decks with notes and a talk script. | PPTX-native, Academic, LaTeX, PDF, Notes | Editable | Skill | <a href="https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/stargazers"><img src="https://img.shields.io/github/stars/wanshuiyin/Auto-claude-code-research-in-sleep?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [veasion/AiPPT](https://github.com/veasion/AiPPT) | AI PPT generator from topics, files, or URLs, with template customization and support for charts, animations, and 3D effects. | Automation, Conversion, App, PPTX-native | Editable | No | <a href="https://github.com/veasion/AiPPT/stargazers"><img src="https://img.shields.io/github/stars/veasion/AiPPT?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [SmartSchoolAI/ai-to-pptx](https://github.com/SmartSchoolAI/ai-to-pptx) | Open-source AI assistant for generating PPTX outlines and decks with template selection, online editing, and export. | PPTX-native, App, Template | Editable | No | <a href="https://github.com/SmartSchoolAI/ai-to-pptx/stargazers"><img src="https://img.shields.io/github/stars/SmartSchoolAI/ai-to-pptx?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [Gabberflast/academic-pptx-skill](https://github.com/Gabberflast/academic-pptx-skill) | Claude skill for academic presentations, enforcing action titles, argument structure, exhibit discipline, citations, and communication-first design. | PPTX-native, Template | Editable | Skill | <a href="https://github.com/Gabberflast/academic-pptx-skill/stargazers"><img src="https://img.shields.io/github/stars/Gabberflast/academic-pptx-skill?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [barun-saha/slide-deck-ai](https://github.com/barun-saha/slide-deck-ai) | AI-assisted PowerPoint deck generation. | PPTX-native, App, Backend, PDF | Editable | No | <a href="https://github.com/barun-saha/slide-deck-ai/stargazers"><img src="https://img.shields.io/github/stars/barun-saha/slide-deck-ai?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [HuiMi24/chatppt](https://github.com/HuiMi24/chatppt) | ChatGPT/Ollama-powered tool for generating PPT or slides, with English and Chinese output support. | PPTX-native, App, Backend | Editable | No | <a href="https://github.com/HuiMi24/chatppt/stargazers"><img src="https://img.shields.io/github/stars/HuiMi24/chatppt?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [CyberTimon/Powerpointer](https://github.com/CyberTimon/Powerpointer) | GPT-powered PowerPoint generator using Python and python-pptx. | PPTX-native, App, Backend | Editable | No | <a href="https://github.com/CyberTimon/Powerpointer/stargazers"><img src="https://img.shields.io/github/stars/CyberTimon/Powerpointer?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [SkyworkAI/Skywork-Skills - skywork-ppt](https://github.com/SkyworkAI/Skywork-Skills) | Skill for generating, imitating, and editing PowerPoint presentations. | PPTX-native, Template, Automation | Editable | Skill | <a href="https://github.com/SkyworkAI/Skywork-Skills/stargazers"><img src="https://img.shields.io/github/stars/SkyworkAI/Skywork-Skills?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [likaku/Mck-ppt-design-skill](https://github.com/likaku/Mck-ppt-design-skill) | Consulting-style PowerPoint design system for AI agents, with many layout patterns and python-pptx output. | PPTX-native, Template, Automation | Editable | Skill | <a href="https://github.com/likaku/Mck-ppt-design-skill/stargazers"><img src="https://img.shields.io/github/stars/likaku/Mck-ppt-design-skill?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [Noi1r/powerpoint-skill](https://github.com/Noi1r/powerpoint-skill) | PowerPoint skill for academic slides, formulas, and diagrams using PptxGenJS. | PPTX-native, PDF, Automation | Editable | Skill | <a href="https://github.com/Noi1r/powerpoint-skill/stargazers"><img src="https://img.shields.io/github/stars/Noi1r/powerpoint-skill?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [tristan-mcinnis/pptx-from-layouts-skill](https://github.com/tristan-mcinnis/pptx-from-layouts-skill) | Claude Code skill for generating PowerPoint decks from Markdown using template slide master layouts. | PPTX-native, Template, Automation | Editable | Skill | <a href="https://github.com/tristan-mcinnis/pptx-from-layouts-skill/stargazers"><img src="https://img.shields.io/github/stars/tristan-mcinnis/pptx-from-layouts-skill?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [PHY041/claude-skill-academic-ppt](https://github.com/PHY041/claude-skill-academic-ppt) | Claude Code skill for academic defense presentations from LaTeX or PDF, with figures, notes, and Q&A prediction. | PPTX-native, PDF, Template | Partially editable | Skill | <a href="https://github.com/PHY041/claude-skill-academic-ppt/stargazers"><img src="https://img.shields.io/github/stars/PHY041/claude-skill-academic-ppt?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |

## PPTX Libraries and Automation Infrastructure

Underlying PPTX libraries, MCP servers, Office automation, backend services, and editable reconstruction or conversion infrastructure.

| Repository | Description | Tags | Editability | Skill | Stars |
| --- | --- | --- | --- | --- | --- |
| [gitbrent/PptxGenJS](https://github.com/gitbrent/PptxGenJS) | JavaScript library for creating PowerPoint presentations. | Library, PPTX-native, Automation | Editable | No | <a href="https://github.com/gitbrent/PptxGenJS/stargazers"><img src="https://img.shields.io/github/stars/gitbrent/PptxGenJS?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [scanny/python-pptx](https://github.com/scanny/python-pptx) | Python library for creating and updating PowerPoint files. | Library, PPTX-native, Automation | Editable | No | <a href="https://github.com/scanny/python-pptx/stargazers"><img src="https://img.shields.io/github/stars/scanny/python-pptx?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [singerla/pptx-automizer](https://github.com/singerla/pptx-automizer) | Node.js library for modifying, merging, and templating PowerPoint files. | Library, Automation, PPTX-native, Template | Editable | No | <a href="https://github.com/singerla/pptx-automizer/stargazers"><img src="https://img.shields.io/github/stars/singerla/pptx-automizer?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [atharva9167j/dom-to-pptx](https://github.com/atharva9167j/dom-to-pptx) | Client-side DOM/CSS to editable PowerPoint converter with an agent skill installer. | HTML-first, Conversion, Library, PPTX-native | Editable | Skill | <a href="https://github.com/atharva9167j/dom-to-pptx/stargazers"><img src="https://img.shields.io/github/stars/atharva9167j/dom-to-pptx?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [JuniverseCoder/MinerU2PPT](https://github.com/JuniverseCoder/MinerU2PPT) | Converts PDFs and images into editable PowerPoint presentations using structure extraction. | Conversion, PPTX-native, PDF, Image-based | Editable | No | <a href="https://github.com/JuniverseCoder/MinerU2PPT/stargazers"><img src="https://img.shields.io/github/stars/JuniverseCoder/MinerU2PPT?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [SlideSpeak/slidespeak-backend](https://github.com/SlideSpeak/slidespeak-backend) | Backend for SlideSpeak, supporting AI summaries, Q&A, and PowerPoint creation workflows. | Backend, Automation, Conversion, PPTX-native, PDF | Unknown | No | <a href="https://github.com/SlideSpeak/slidespeak-backend/stargazers"><img src="https://img.shields.io/github/stars/SlideSpeak/slidespeak-backend?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [trsdn/mcp-server-ppt](https://github.com/trsdn/mcp-server-ppt) | MCP server and CLI for creating, editing, and exporting PowerPoint through the Windows PowerPoint COM API. | MCP, Automation, PowerPoint, COM | Editable | MCP | <a href="https://github.com/trsdn/mcp-server-ppt/stargazers"><img src="https://img.shields.io/github/stars/trsdn/mcp-server-ppt?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [ningzimu/image-to-editable-ppt-skill](https://github.com/ningzimu/image-to-editable-ppt-skill) | Codex skill for converting slide images, PDFs, and image-based PPTX files into editable PowerPoint decks. | Conversion, Image-based, PDF | Editable | Skill | <a href="https://github.com/ningzimu/image-to-editable-ppt-skill/stargazers"><img src="https://img.shields.io/github/stars/ningzimu/image-to-editable-ppt-skill?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |
| [ykuwai/ppt-mcp](https://github.com/ykuwai/ppt-mcp) | PowerPoint MCP server for real-time PowerPoint control through COM automation. | MCP, Automation, PowerPoint | Editable | MCP | <a href="https://github.com/ykuwai/ppt-mcp/stargazers"><img src="https://img.shields.io/github/stars/ykuwai/ppt-mcp?style=flat&label=%E2%98%85&color=f6f8fa&labelColor=f6f8fa&cacheSeconds=1800" alt="Stars" height="26"></a> |

## Scope

Included projects should have a direct relationship to AI-assisted presentation work: generating slides, editing PPTX files, converting content into presentations, reconstructing editable decks, or rendering and validating slides.

Categories are based on the source representation of the main workflow, not the final export format. PPTX export does not automatically make a project PPTX-native; `Skill`, `editable PPTX`, and `PPTX export` are tags, not category decisions.

GitHub repositories should have at least 10 stars before being included.

Out of scope:

- Generic AI writing tools without a presentation workflow.
- Generic image generators without slide or deck output.
- Template marketplaces with no open repository or technical workflow.
- Archived, deprecated, or empty repositories.

## Contributing

Pull requests are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before suggesting a project. If you find an issue with a category, description, or link, please [open an issue](https://github.com/ningzimu/awesome-ai-ppt/issues).

## Contributors

Thanks to everyone who has helped maintain and improve this project.

<a href="https://github.com/ningzimu/awesome-ai-ppt/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ningzimu/awesome-ai-ppt" alt="Contributors">
</a>
