# Awesome AI PPT

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![CC0](https://img.shields.io/badge/license-CC0-4cc61e.svg)](LICENSE)
[![Docs](https://img.shields.io/badge/docs-English-blue)](README_EN.md)
[![Website](https://img.shields.io/badge/GitHub%20Pages-awesome--ai--ppt-0f9f8f)](https://ningzimu.github.io/awesome-ai-ppt/)
[![Stars](https://img.shields.io/github/stars/ningzimu/awesome-ai-ppt?style=social)](https://github.com/ningzimu/awesome-ai-ppt/stargazers)

一个关于 AI PPT、PowerPoint 自动化、PPTX 编辑和幻灯片工作流工具的开源项目精选清单。

这是一个精选列表，不是“所有相关链接大全”。本仓库重点收集能帮助 agent 或开发者创建、编辑、转换或检查演示文稿的 GitHub 仓库与技术项目。

网站：https://ningzimu.github.io/awesome-ai-ppt/

## Agent / Skill 接入

本仓库提供 `awesome-ai-ppt` skill。告诉 AI 你的场景、材料和偏好，它会结合这个清单帮你个性化推荐合适的 AI PPT 工具；也可以在你需要时辅助提交问题、准备 PR，一起贡献这个项目。

你可以对 AI 说：帮我安装 awesome-ai-ppt skill：https://github.com/ningzimu/awesome-ai-ppt/tree/main/skills/awesome-ai-ppt

手动安装：

```bash
npx -y skills@latest add ningzimu/awesome-ai-ppt \
  --skill awesome-ai-ppt \
  --agent codex \
  --global
```

示例：

```text
我想把一篇技术文章做成可编辑 PPT，重视后续修改和自动化，请使用 awesome-ai-ppt skill 帮我推荐最合适的 AI PPT 项目。
请使用 awesome-ai-ppt skill，检查这个 GitHub 项目是否适合加入清单。
```

更多说明见 [Agent 接入页面](https://ningzimu.github.io/awesome-ai-ppt/agent/)。

## 目录


- [HTML 风格 PPT 方案](#html-风格-ppt-方案)
- [图片生成式 PPT 方案](#图片生成式-ppt-方案)
- [PPTX 库生成式 PPT 方案](#pptx-库生成式-ppt-方案)
- [PPTX 库与自动化基础设施](#pptx-库与自动化基础设施)
- [收录范围](#收录范围)
- [贡献](#贡献)

## HTML 风格 PPT 方案

先生成 HTML、Web slides 或页面式演示，再导出、截图或转换为 PPT 的方案。

| 仓库 | 简介 | 标签 | 可编辑性 | Skill | Star |
| --- | --- | --- | --- | --- | --- |
| [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) | 用于创建动画 HTML 演示、并将 PowerPoint 转为网页幻灯片的 skill。 | HTML-first, 转换, PDF | 源码可编辑 | Skill | 22,344 |
| [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design) | Claude Code 的 HTML 原生设计 skill，覆盖高保真原型、幻灯片、动画、评审体系和 MP4 导出。 | HTML-first, PDF, 视频 | 部分可编辑 | Skill | 19,298 |
| [op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill) | 用于生成精致 HTML 幻灯片的 AI-agent skill，内置杂志风、瑞士风布局、图片提示词、社媒封面和演示运行时。 | HTML-first, 模板, 图片式 | 源码可编辑 | Skill | 18,170 |
| [presenton/presenton](https://github.com/presenton/presenton) | 开源 AI 演示生成器和 API，支持 PPTX/PDF 导出。 | HTML-first, 应用, 后端, MCP, 模板 | 可编辑 | MCP | 8,434 |
| [lewislulu/html-ppt-skill](https://github.com/lewislulu/html-ppt-skill) | HTML PPT Studio agent skill，提供 24 套主题、31 种布局和 20+ 动画，用于制作专业网页演示。 | HTML-first, 模板 | 源码可编辑 | Skill | 6,320 |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | 为 agent 设计的 slide framework，每页可作为 React 组件，并支持由 agent 根据反馈迭代修改。 | HTML-first, 应用, PDF | 源码可编辑 | Skill | 5,454 |
| [sligter/LandPPT](https://github.com/sligter/LandPPT) | 基于 LLM 的演示生成平台，可把文档转换为专业 PPT，并支持模板、样式和多模型选择。 | HTML-first, 应用, 图片式, PDF, 视频 | 部分可编辑 | 否 | 3,427 |
| [allweonedev/presentation-ai](https://github.com/allweonedev/presentation-ai) | 开源 Gamma 风格 AI 演示生成器，支持主题、编辑和 PowerPoint 导出。 | HTML-first, 应用, 模板 | 部分可编辑 | 否 | 2,867 |
| [sunbigfly/ppt-agent-skills](https://github.com/sunbigfly/ppt-agent-skills) | 代码驱动的演示文稿生成框架，强调像构建软件工程一样生成演示文稿。 | HTML-first, 图片式, 自动化 | 部分可编辑 | Skill | 805 |
| [code-on-sunday/slide-deck-generator](https://github.com/code-on-sunday/slide-deck-generator) | 用 React、Vite 和 Framer Motion 生成可交互浏览器幻灯片应用的 AI skill。 | HTML-first, React, Interactive, 模板 | 源码可编辑 | Skill | 118 |
| [Kuneosu/make-slide](https://github.com/Kuneosu/make-slide) | 用于生成独立 HTML 幻灯片 deck 的通用 AI skill。 | HTML-first, PDF, 模板 | 部分可编辑 | Skill | 90 |
| [kdnsna/ultimate-ppt-master-skill](https://github.com/kdnsna/ultimate-ppt-master-skill) | 本地优先的 AI 演示生产中枢，可把多类资料打包给 agent，并生成可编辑 PowerPoint 或杂志风 Web Deck。 | HTML-first, PPTX-native, 转换, 模板, 自动化 | 可编辑 | Skill | 55 |
| [codesstar/next-slide](https://github.com/codesstar/next-slide) | 面向 Claude Code、Hermes Agent 和 OpenClaw 的 HTML 演示生成 skill，提供多风格、双语和 PPT 内容转换能力。 | HTML-first, 转换, Bilingual | 源码可编辑 | Skill | 34 |
| [marp-team/marp-cli](https://github.com/marp-team/marp-cli) | Marp 命令行工具，可将 Markdown 幻灯片转换为 HTML、PDF、图片和 PowerPoint 文件。 | HTML-first, Markdown, 转换 | 部分可编辑 | 否 | 3,647 |
| [archlizheng/frontend-slides-editable](https://github.com/archlizheng/frontend-slides-editable) | 面向 Codex 和 Claude Code 的可编辑 HTML 演示 skill，支持拖拽缩放、页面排序、本地保存/导出和 PPTX 转网页。 | HTML-first, Editor, 转换, Skill | 源码可编辑 | Skill | 353 |
| [mucsbr/ppt-agent-workflow-san](https://github.com/mucsbr/ppt-agent-workflow-san) | Agent 工作流，可生成 HTML/PNG 幻灯片预览，并将 HTML slides 转换为原生可编辑 PowerPoint。 | HTML-first, 转换, 图片式, 自动化 | 可编辑 | Skill | 588 |
| [MYZY-AI/dokie-ai-ppt](https://github.com/MYZY-AI/dokie-ai-ppt) | 用于生成交互式 HTML slides 的 agent skill，可在 Dokie 中继续编辑并导出为 PDF、PPTX 或图片。 | HTML-first, Editor, 转换, Skill | 部分可编辑 | Skill | 64 |
| [LangChat/langchat-slides](https://github.com/LangChat/langchat-slides) | 基于 Vue 的 AI 幻灯片生成器，支持多页编辑，并可导出 PPT、PDF、PNG、SVG、JPG 和 WebP。 | HTML-first, 应用, Editor, 转换 | 部分可编辑 | 否 | 212 |

## 图片生成式 PPT 方案

以图像模型或整页图片为核心生成幻灯片，再打包为 PPTX、PDF、视频或网页演示的方案。

| 仓库 | 简介 | 标签 | 可编辑性 | Skill | Star |
| --- | --- | --- | --- | --- | --- |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 基于 Nano Banana Pro 的原生 AI PPT 应用，支持从想法、大纲、素材或页面描述生成演示，并导出可编辑 PPT。 | Image-first, 图片式, 应用, PDF, 视频 | 部分可编辑 | 否 | 14,988 |
| [op7418/NanoBanana-PPT-Skills](https://github.com/op7418/NanoBanana-PPT-Skills) | NanoBanana PPT Skills，用于自动生成高质量 PPT 图片和视频，支持智能转场和交互式播放。 | Image-first, 图片式, 视频 | 图片式 | Skill | 3,005 |
| [NyxTides/ppt-image-first](https://github.com/NyxTides/ppt-image-first) | 面向 Codex、Claude Code 和 Opencode CLI 的 image-first PPT skill。 | Image-first, 图片式 | 图片式 | Skill | 1,083 |
| [JuneYaooo/gpt-image2-ppt-skills](https://github.com/JuneYaooo/gpt-image2-ppt-skills) | 使用 gpt-image-2 仿制 PPTX 版式并替换内容的 skill，附带多套精选风格。 | Image-first, 图片式, 模板 | 图片式 | Skill | 955 |
| [ningzimu/codex-ppt-skill](https://github.com/ningzimu/codex-ppt-skill) | 使用 gpt-image-2 生成图片式 PowerPoint deck 的 Codex skill。 | Image-first, 图片式 | 图片式 | Skill | 2,169 |
| [grapeot/nbp_slides](https://github.com/grapeot/nbp_slides) | 基于叙事方法论和模板的 AI 幻灯片生成器，支持生成演示 deck。 | Image-first, 图片式, HTML-first, PPTX | 图片式 | 否 | 87 |
| [stevenjinlong/awesome-ppt-skills](https://github.com/stevenjinlong/awesome-ppt-skills) | Codex PPT skills，使用 gpt-image-2 生成图片式 PPT，并支持可编辑化交接。 | Image-first, 图片式 | 部分可编辑 | Skill | 53 |
| [snowmanzhuang/yixueAIganhuo-PPT](https://github.com/snowmanzhuang/yixueAIganhuo-PPT) | 基于 gpt-image-2 和 PaddleOCR 的医学学术 PPT 工作流，可从论文、PDF、图表、截图和整理材料生成幻灯片，并重建为可编辑 PPTX。 | Image-first, 图片式, Academic, 转换, PDF | 部分可编辑 | Skill | 167 |

## PPTX 库生成式 PPT 方案

直接通过 PptxGenJS、python-pptx、Office XML 或 PowerPoint API 生成原生可编辑 PPTX 的方案。

| 仓库 | 简介 | 标签 | 可编辑性 | Skill | Star |
| --- | --- | --- | --- | --- | --- |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 从文档、URL 和 Markdown 生成原生可编辑 PowerPoint 的 AI 工作流。 | PPTX-native, 模板 | 可编辑 | Skill | 29,619 |
| [veasion/AiPPT](https://github.com/veasion/AiPPT) | 可通过主题、文件或网址生成 PPT 的 AI 工具，支持自定义模板、图表、动画和 3D 特效解析渲染。 | 自动化, 转换, 应用, PPTX-native | 可编辑 | 否 | 1,890 |
| [SmartSchoolAI/ai-to-pptx](https://github.com/SmartSchoolAI/ai-to-pptx) | 前后端开源的 AI PPTX 助手，支持生成大纲、选择模板、在线编辑并导出 PPTX。 | PPTX-native, 应用, 模板 | 可编辑 | 否 | 1,453 |
| [Gabberflast/academic-pptx-skill](https://github.com/Gabberflast/academic-pptx-skill) | 面向学术演示的 Claude skill，强调行动标题、论证结构、图表纪律、引用规范和表达优先设计。 | PPTX-native, 模板 | 可编辑 | Skill | 577 |
| [barun-saha/slide-deck-ai](https://github.com/barun-saha/slide-deck-ai) | AI 辅助 PowerPoint 幻灯片生成。 | PPTX-native, 应用, 后端, PDF | 可编辑 | 否 | 360 |
| [HuiMi24/chatppt](https://github.com/HuiMi24/chatppt) | 由 ChatGPT/Ollama 驱动的 PPT/slide 生成工具，支持中英文输出。 | PPTX-native, 应用, 后端 | 可编辑 | 否 | 306 |
| [CyberTimon/Powerpointer](https://github.com/CyberTimon/Powerpointer) | 基于 GPT、Python 和 python-pptx 的 PowerPoint 生成器。 | PPTX-native, 应用, 后端 | 可编辑 | 否 | 176 |
| [likaku/Mck-ppt-design-skill](https://github.com/likaku/Mck-ppt-design-skill) | 面向 AI agents 的咨询风 PowerPoint 设计系统，提供大量布局模式并基于 python-pptx 输出。 | PPTX-native, 模板, 自动化 | 可编辑 | Skill | 194 |
| [Noi1r/powerpoint-skill](https://github.com/Noi1r/powerpoint-skill) | 面向学术幻灯片、公式和图表的 PowerPoint skill。 | PPTX-native, PDF, 自动化 | 可编辑 | Skill | 90 |
| [tristan-mcinnis/pptx-from-layouts-skill](https://github.com/tristan-mcinnis/pptx-from-layouts-skill) | 使用模板 slide master layouts 从 Markdown 生成 PowerPoint deck 的 Claude Code skill。 | PPTX-native, 模板, 自动化 | 可编辑 | Skill | 79 |
| [PHY041/claude-skill-academic-ppt](https://github.com/PHY041/claude-skill-academic-ppt) | 从 LaTeX 或 PDF 生成学术答辩 PPT 的 Claude Code skill，支持图表、备注和 Q&A 预测。 | PPTX-native, PDF, 模板 | 部分可编辑 | Skill | 17 |
| [icip-cas/PPTAgent](https://github.com/icip-cas/PPTAgent) | 用于反思式 PowerPoint 生成的 agentic framework，支持 PPTX 导出、离线模式、WebUI、CLI 和 MCP。 | PPTX-native, Agent, MCP, Research | 可编辑 | MCP | 4,688 |
| [YOOTeam/OpenPPT](https://github.com/YOOTeam/OpenPPT) | 开源 AI PPT 编辑器，覆盖生成、导入、在线编辑、演示播放和 Office 兼容 PPTX 导出。 | PPTX-native, 应用, Editor, 模板 | 可编辑 | 否 | 1,085 |
| [OpenDCAI/Paper2Any](https://github.com/OpenDCAI/Paper2Any) | 面向论文的多模态工作流，可生成可编辑科研图、图解、海报和幻灯片，包含 Paper2PPT、PDF2PPT 和 Image2PPT。 | PPTX-native, Academic, 转换, 图片式 | 可编辑 | 否 | 2,635 |
| [seulee26/mckinsey-pptx](https://github.com/seulee26/mckinsey-pptx) | 用于生成咨询风 PPTX 的 Claude Code plugin，内置咨询幻灯片模板和模板选择 subagent。 | PPTX-native, 模板, Consulting, Plugin | 可编辑 | Skill | 491 |
| [zouchenzhen/thesis-defense-pptx-skill](https://github.com/zouchenzhen/thesis-defense-pptx-skill) | 从 LaTeX 或 PDF 论文和 PPTX 模板生成可编辑论文答辩 PowerPoint 的 Claude Code skill。 | PPTX-native, Academic, 模板, PDF | 可编辑 | Skill | 180 |
| [Sven-LI-sankyuu/presentation-skills](https://github.com/Sven-LI-sankyuu/presentation-skills) | 围绕精修、可编辑、可验证 PowerPoint deck 生成工作流的演示 skill 集合。 | PPTX-native, 模板, 自动化, QA | 可编辑 | Skill | 152 |
| [jitOffice/aippt](https://github.com/jitOffice/aippt) | Vue AI 演示编辑器，支持多模型生成、Canvas 编辑，并通过 PptxGenJS 导出 PPTX。 | PPTX-native, 应用, Editor, 模板 | 可编辑 | 否 | 71 |
| [MartinPacker/md2pptx](https://github.com/MartinPacker/md2pptx) | 基于 python-pptx 的 Markdown 转 PowerPoint 工具，支持模板。 | PPTX-native, Markdown, 模板, CLI | 可编辑 | 否 | 503 |
| [bowenliang123/markdown-exporter](https://github.com/bowenliang123/markdown-exporter) | Agent skill、Dify plugin 和 CLI，可将 Markdown 导出为 PPTX、DOCX、HTML、PDF 等格式，并支持模板。 | PPTX-native, Markdown, 转换, 模板 | 可编辑 | Skill | 236 |

## PPTX 库与自动化基础设施

底层 PPTX 库、MCP、Office 自动化、后端服务，以及可编辑重建与转换基础设施。

| 仓库 | 简介 | 标签 | 可编辑性 | Skill | Star |
| --- | --- | --- | --- | --- | --- |
| [gitbrent/PptxGenJS](https://github.com/gitbrent/PptxGenJS) | 用于创建 PowerPoint 的 JavaScript 库。 | 库, PPTX-native, 自动化 | 可编辑 | 否 | 5,656 |
| [scanny/python-pptx](https://github.com/scanny/python-pptx) | 用于创建和更新 PowerPoint 文件的 Python 库。 | 库, PPTX-native, 自动化 | 可编辑 | 否 | 3,423 |
| [singerla/pptx-automizer](https://github.com/singerla/pptx-automizer) | 用于修改、合并和模板化 PowerPoint 文件的 Node.js 库。 | 库, 自动化, PPTX-native, 模板 | 可编辑 | 否 | 214 |
| [atharva9167j/dom-to-pptx](https://github.com/atharva9167j/dom-to-pptx) | 客户端 DOM/CSS 转可编辑 PowerPoint 工具，并提供 agent skill 安装器。 | HTML-first, 转换, 库, PPTX-native | 可编辑 | Skill | 250 |
| [JuniverseCoder/MinerU2PPT](https://github.com/JuniverseCoder/MinerU2PPT) | 使用结构提取把 PDF 和图片转换为可编辑 PowerPoint。 | 转换, PPTX-native, PDF, 图片式 | 可编辑 | 否 | 186 |
| [SlideSpeak/slidespeak-backend](https://github.com/SlideSpeak/slidespeak-backend) | SlideSpeak 后端，支持 AI 总结、问答和 PowerPoint 创建流程。 | 后端, 自动化, 转换, PPTX-native, PDF | 未确认 | 否 | 94 |
| [trsdn/mcp-server-ppt](https://github.com/trsdn/mcp-server-ppt) | 通过 Windows PowerPoint COM API 自动化创建、编辑和导出 PowerPoint 的 MCP server 与 CLI。 | MCP, 自动化, PowerPoint, COM | 可编辑 | MCP | 33 |
| [ningzimu/image-to-editable-ppt-skill](https://github.com/ningzimu/image-to-editable-ppt-skill) | 把幻灯片图片、PDF 和图片版 PPTX 转换为可编辑 PowerPoint deck 的 Codex skill。 | 转换, 图片式, PDF | 可编辑 | Skill | 713 |
| [ykuwai/ppt-mcp](https://github.com/ykuwai/ppt-mcp) | 通过 COM 自动化实时控制 PowerPoint 的 MCP server。 | MCP, 自动化, PowerPoint | 可编辑 | MCP | 39 |
| [iOfficeAI/OfficeCLI](https://github.com/iOfficeAI/OfficeCLI) | 面向 AI agent 的本地优先 Office CLI，可在无需 Microsoft Office 的情况下创建、检查、编辑、渲染和自动化 PowerPoint。 | CLI, 自动化, PPTX-native, Preview | 可编辑 | Skill | 7,491 |
| [laihenyi/NBLM2PPTX](https://github.com/laihenyi/NBLM2PPTX) | 将 NotebookLM 导出的 PDF 幻灯片转换为带背景图和可编辑文字层的 PPTX。 | 转换, PDF, 图片式, PPTX-native | 部分可编辑 | 否 | 324 |
| [soulmujoco/EditableImage2PPTSkill](https://github.com/soulmujoco/EditableImage2PPTSkill) | 用于将幻灯片截图或导出的幻灯片图片重建为可编辑 PowerPoint 的 Codex skill，支持可编辑文本、原生形状、素材提取和 QA 辅助。 | 转换, 图片式, PPTX-native, 自动化 | 可编辑 | Skill | 47 |
| [Morgensonne/EditDeck](https://github.com/Morgensonne/EditDeck) | 端到端演示工作流，可生成幻灯片图片、标准 PPTX 和完全可编辑 PPTX，并支持从既有幻灯片图片重建可编辑 deck。 | 转换, 图片式, PPTX-native, 自动化 | 可编辑 | 否 | 1,184 |
| [Tansuo2021/OCRPDF-TO-PPT](https://github.com/Tansuo2021/OCRPDF-TO-PPT) | 将图片和 PDF 页面转换为可编辑 PowerPoint，通过在幻灯片背景上叠加 OCR 文本框实现文本编辑。 | 转换, PDF, OCR, PPTX-native | 部分可编辑 | 否 | 471 |
| [Daniel-Siae/image2pptx](https://github.com/Daniel-Siae/image2pptx) | 使用 PaddleOCR-VL 将文档图片解析为结构化 OCR 数据，并重建包含文本框、表格和图片块的可编辑 PPTX。 | 转换, 图片式, OCR, PPTX-native | 可编辑 | 否 | 28 |
| [JadeLiu-tech/px-image2pptx](https://github.com/JadeLiu-tech/px-image2pptx) | 通过 OCR、文字遮罩、图像修复和 python-pptx 重建，将静态幻灯片图片转换为带可编辑文本层的 PPTX。 | 转换, 图片式, OCR, PPTX-native | 部分可编辑 | 否 | 31 |
| [yingkitw/ppt-rs](https://github.com/yingkitw/ppt-rs) | Rust PPTX 库和 CLI，支持 Markdown 转 PPTX、HTML 转 PPTX、PPTX 转 HTML、图片导出和 MCP 工作流。 | 库, PPTX-native, 转换, MCP | 可编辑 | MCP | 44 |
| [abdelkrimkr/html2pptx](https://github.com/abdelkrimkr/html2pptx) | Node.js CLI 和库，可将 HTML 文件转换为 PowerPoint，把文本、图片、SVG 和 CSS 布局映射为 PPTX 对象。 | HTML-first, 转换, PPTX-native, 库 | 可编辑 | 否 | 16 |
| [Emily27-alt/html-to-pptx](https://github.com/Emily27-alt/html-to-pptx) | 用于将既有 HTML slide deck 转换为可编辑 PPTX 的 Claude Code skill，支持原生文本、形状、图片和版式重建。 | HTML-first, 转换, PPTX-native, Skill | 可编辑 | Skill | 17 |
| [supercurses/powerpoint](https://github.com/supercurses/powerpoint) | 专注 PowerPoint 的 MCP server，基于 python-pptx 创建演示文稿，是 PPT MCP 生态中的早期基线项目。 | MCP, 自动化, PPTX-native, PowerPoint | 可编辑 | MCP | 143 |
| [Ayushmaniar/powerpoint-mcp](https://github.com/Ayushmaniar/powerpoint-mcp) | 基于 pywin32 和 COM 自动化的 Windows PowerPoint MCP server，用于控制本机 PowerPoint。 | MCP, 自动化, PowerPoint, COM | 可编辑 | MCP | 95 |
| [daekeun-ml/ppt-translator](https://github.com/daekeun-ml/ppt-translator) | PowerPoint 翻译 CLI 和 MCP server，可在使用 Amazon Bedrock 翻译 PPTX 内容时保留版式和结构。 | MCP, Translation, 自动化, PPTX-native | 可编辑 | MCP | 65 |
| [theWDY/office-editor-mcp](https://github.com/theWDY/office-editor-mcp) | Office 文档 MCP server，在 Word 和 Excel 工作流之外明确支持 PowerPoint 创建与编辑。 | MCP, 自动化, PowerPoint, Office | 可编辑 | MCP | 89 |

## 收录范围

入选项目应与 AI 辅助演示工作直接相关，例如生成幻灯片、编辑 PPTX、把内容转换为演示文稿、重建可编辑 deck、渲染或验证幻灯片。

分类按主工作流的源表示决定，而不是按最终导出格式决定。能导出 PPTX 不等于属于 PPTX 库生成式；`Skill`、`可编辑 PPTX` 和 `PPTX export` 都只是标签，不能单独决定分类。

GitHub 仓库通常需要至少 10 stars 才能进入主列表。

如果项目只是大仓库、合集仓库或通用 agent 仓库里的一个子目录 / skill，且父级仓库的 stars 不能代表这个 PPT 工作流本身，则不进入主列表。

不收录：

- 没有演示文稿工作流的泛 AI 写作工具。
- 没有幻灯片或 deck 输出的泛图片生成工具。
- 没有 AI、agent 或 PowerPoint 自动化属性的通用幻灯片框架。
- 没有开源仓库或技术工作流的模板市场。
- 已归档、废弃或空仓库。

## 贡献

欢迎提交 PR。推荐项目前请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。如果发现分类、描述或链接有问题，可以通过 [Issue](https://github.com/ningzimu/awesome-ai-ppt/issues) 反馈。

## 贡献者

感谢所有参与维护和改进这个项目的人。

<a href="https://github.com/ningzimu/awesome-ai-ppt/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ningzimu/awesome-ai-ppt" alt="Contributors">
</a>
