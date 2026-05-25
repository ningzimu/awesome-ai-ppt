# Awesome AI PPT

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![CC0](https://img.shields.io/badge/license-CC0-4cc61e.svg)](LICENSE)
[![Docs](https://img.shields.io/badge/docs-English-blue)](README_EN.md)
[![Website](https://img.shields.io/badge/GitHub%20Pages-awesome--ai--ppt-0f9f8f)](https://ningzimu.github.io/awesome-ai-ppt/)

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
| [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) | 用于创建动画 HTML 演示、并将 PowerPoint 转为网页幻灯片的 skill。 | HTML-first, 转换, PDF | 源码可编辑 | Skill | 18,815 |
| [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design) | Claude Code 的 HTML 原生设计 skill，覆盖高保真原型、幻灯片、动画、评审体系和 MP4 导出。 | HTML-first, PDF, 视频 | 部分可编辑 | Skill | 14,901 |
| [op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill) | 用于生成精致 HTML 幻灯片的 AI-agent skill，内置杂志风、瑞士风布局、图片提示词、社媒封面和演示运行时。 | HTML-first, 模板, 图片式 | 源码可编辑 | Skill | 11,791 |
| [presenton/presenton](https://github.com/presenton/presenton) | 开源 AI 演示生成器和 API，支持 PPTX/PDF 导出。 | HTML-first, 应用, 后端, MCP, 模板 | 可编辑 | MCP | 6,739 |
| [lewislulu/html-ppt-skill](https://github.com/lewislulu/html-ppt-skill) | HTML PPT Studio agent skill，提供 24 套主题、31 种布局和 20+ 动画，用于制作专业网页演示。 | HTML-first, 模板 | 源码可编辑 | Skill | 4,638 |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | 为 agent 设计的 slide framework，每页可作为 React 组件，并支持由 agent 根据反馈迭代修改。 | HTML-first, 应用, PDF | 源码可编辑 | Skill | 3,658 |
| [sligter/LandPPT](https://github.com/sligter/LandPPT) | 基于 LLM 的演示生成平台，可把文档转换为专业 PPT，并支持模板、样式和多模型选择。 | HTML-first, 应用, 图片式, PDF, 视频 | 部分可编辑 | 否 | 3,271 |
| [allweonedev/presentation-ai](https://github.com/allweonedev/presentation-ai) | 开源 Gamma 风格 AI 演示生成器，支持主题、编辑和 PowerPoint 导出。 | HTML-first, 应用, 模板 | 部分可编辑 | 否 | 2,820 |
| [sunbigfly/ppt-agent-skills](https://github.com/sunbigfly/ppt-agent-skills) | 代码驱动的演示文稿生成框架，强调像构建软件工程一样生成演示文稿。 | HTML-first, 图片式, 自动化 | 部分可编辑 | Skill | 747 |
| [zai-org/GLM-skills - glmv-pdf-to-ppt](https://github.com/zai-org/GLM-skills/tree/main/skills/glmv-pdf-to-ppt) | GLM-V skill，可将 PDF 转为带结构化页纲、裁图素材和摘要说明的多页 HTML 演示。 | HTML-first, PDF, 图片式, 转换 | 源码可编辑 | Skill | 392 |
| [claude-office-skills/skills - html-slides](https://github.com/claude-office-skills/skills/tree/main/html-slides) | Claude Office Skills 中的 HTML 幻灯片 skill，用于创建带动画、代码高亮和演讲者备注的 reveal.js 演示。 | HTML-first, Reveal.js, 转换 | 源码可编辑 | Skill | 151 |
| [code-on-sunday/slide-deck-generator](https://github.com/code-on-sunday/slide-deck-generator) | 用 React、Vite 和 Framer Motion 生成可交互浏览器幻灯片应用的 AI skill。 | HTML-first, React, Interactive, 模板 | 源码可编辑 | Skill | 115 |
| [Kuneosu/make-slide](https://github.com/Kuneosu/make-slide) | 用于生成独立 HTML 幻灯片 deck 的通用 AI skill。 | HTML-first, PDF, 模板 | 部分可编辑 | Skill | 69 |
| [zocomputer/skills - revealjs-presentation](https://github.com/zocomputer/skills/tree/main/Community/revealjs-presentation) | Zo Computer skills 中的 Reveal.js 演示 skill，可生成带 Chart.js 图表的单文件 HTML slide deck，并可选发布到 zo.space。 | HTML-first, Reveal.js, Charts | 源码可编辑 | Skill | 40 |
| [kdnsna/ultimate-ppt-master-skill](https://github.com/kdnsna/ultimate-ppt-master-skill) | 本地优先的 AI 演示生产中枢，可把多类资料打包给 agent，并生成可编辑 PowerPoint 或杂志风 Web Deck。 | HTML-first, PPTX-native, 转换, 模板, 自动化 | 可编辑 | Skill | 32 |
| [codesstar/next-slide](https://github.com/codesstar/next-slide) | 面向 Claude Code、Hermes Agent 和 OpenClaw 的 HTML 演示生成 skill，提供多风格、双语和 PPT 内容转换能力。 | HTML-first, 转换, Bilingual | 源码可编辑 | Skill | 24 |

## 图片生成式 PPT 方案

以图像模型或整页图片为核心生成幻灯片，再打包为 PPTX、PDF、视频或网页演示的方案。

| 仓库 | 简介 | 标签 | 可编辑性 | Skill | Star |
| --- | --- | --- | --- | --- | --- |
| [bytedance/deer-flow - ppt-generation](https://github.com/bytedance/deer-flow/tree/main/skills/public/ppt-generation) | DeerFlow 中基于图片生成的 PPT 工作流。 | Image-first, 图片式, 工作流 | 图片式 | Skill | 69,432 |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 基于 Nano Banana Pro 的原生 AI PPT 应用，支持从想法、大纲、素材或页面描述生成演示，并导出可编辑 PPT。 | Image-first, 图片式, 应用, PDF, 视频 | 部分可编辑 | 否 | 14,686 |
| [op7418/NanoBanana-PPT-Skills](https://github.com/op7418/NanoBanana-PPT-Skills) | NanoBanana PPT Skills，用于自动生成高质量 PPT 图片和视频，支持智能转场和交互式播放。 | Image-first, 图片式, 视频 | 图片式 | Skill | 2,761 |
| [NyxTides/ppt-image-first](https://github.com/NyxTides/ppt-image-first) | 面向 Codex、Claude Code 和 Opencode CLI 的 image-first PPT skill。 | Image-first, 图片式 | 图片式 | Skill | 892 |
| [JuneYaooo/gpt-image2-ppt-skills](https://github.com/JuneYaooo/gpt-image2-ppt-skills) | 使用 gpt-image-2 仿制 PPTX 版式并替换内容的 skill，附带多套精选风格。 | Image-first, 图片式, 模板 | 图片式 | Skill | 707 |
| [ningzimu/codex-ppt-skill](https://github.com/ningzimu/codex-ppt-skill) | 使用 gpt-image-2 生成图片式 PowerPoint deck 的 Codex skill。 | Image-first, 图片式 | 图片式 | Skill | 303 |
| [grapeot/nbp_slides](https://github.com/grapeot/nbp_slides) | 基于叙事方法论和模板的 AI 幻灯片生成器，支持生成演示 deck。 | Image-first, 图片式, HTML-first, PPTX | 图片式 | 否 | 83 |
| [stevenjinlong/awesome-ppt-skills](https://github.com/stevenjinlong/awesome-ppt-skills) | Codex PPT skills，使用 gpt-image-2 生成图片式 PPT，并支持可编辑化交接。 | Image-first, 图片式 | 部分可编辑 | Skill | 44 |

## PPTX 库生成式 PPT 方案

直接通过 PptxGenJS、python-pptx、Office XML 或 PowerPoint API 生成原生可编辑 PPTX 的方案。

| 仓库 | 简介 | 标签 | 可编辑性 | Skill | Star |
| --- | --- | --- | --- | --- | --- |
| [anthropics/skills - pptx](https://github.com/anthropics/skills/tree/main/skills/pptx) | Anthropic 官方 PPTX skill，用于读取、创建、编辑和分析 PowerPoint。 | PPTX-native, 自动化 | 可编辑 | Skill | 140,256 |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 从文档、URL 和 Markdown 生成原生可编辑 PowerPoint 的 AI 工作流。 | PPTX-native, 模板 | 可编辑 | Skill | 20,646 |
| [MiniMax-AI/skills - pptx-generator](https://github.com/MiniMax-AI/skills) | MiniMax Office skill，支持生成、编辑和读取 PowerPoint。 | PPTX-native, 自动化 | 可编辑 | Skill | 12,077 |
| [wanshuiyin/Auto-claude-code-research-in-sleep - paper-slides](https://github.com/wanshuiyin/Auto-claude-code-research-in-sleep/tree/main/skills/paper-slides) | ARIS 论文演示 skill，可从论文生成 Beamer/PDF 幻灯片和带备注、讲稿的可编辑 PPTX。 | PPTX-native, Academic, LaTeX, PDF, Notes | 可编辑 | Skill | 10,528 |
| [veasion/AiPPT](https://github.com/veasion/AiPPT) | 可通过主题、文件或网址生成 PPT 的 AI 工具，支持自定义模板、图表、动画和 3D 特效解析渲染。 | 自动化, 转换, 应用, PPTX-native | 可编辑 | 否 | 1,882 |
| [SmartSchoolAI/ai-to-pptx](https://github.com/SmartSchoolAI/ai-to-pptx) | 前后端开源的 AI PPTX 助手，支持生成大纲、选择模板、在线编辑并导出 PPTX。 | PPTX-native, 应用, 模板 | 可编辑 | 否 | 1,434 |
| [Gabberflast/academic-pptx-skill](https://github.com/Gabberflast/academic-pptx-skill) | 面向学术演示的 Claude skill，强调行动标题、论证结构、图表纪律、引用规范和表达优先设计。 | PPTX-native, 模板 | 可编辑 | Skill | 451 |
| [barun-saha/slide-deck-ai](https://github.com/barun-saha/slide-deck-ai) | AI 辅助 PowerPoint 幻灯片生成。 | PPTX-native, 应用, 后端, PDF | 可编辑 | 否 | 358 |
| [HuiMi24/chatppt](https://github.com/HuiMi24/chatppt) | 由 ChatGPT/Ollama 驱动的 PPT/slide 生成工具，支持中英文输出。 | PPTX-native, 应用, 后端 | 可编辑 | 否 | 306 |
| [CyberTimon/Powerpointer](https://github.com/CyberTimon/Powerpointer) | 基于 GPT、Python 和 python-pptx 的 PowerPoint 生成器。 | PPTX-native, 应用, 后端 | 可编辑 | 否 | 176 |
| [SkyworkAI/Skywork-Skills - skywork-ppt](https://github.com/SkyworkAI/Skywork-Skills) | Skywork PPT skill，支持生成、仿制和编辑 PowerPoint。 | PPTX-native, 模板, 自动化 | 可编辑 | Skill | 157 |
| [likaku/Mck-ppt-design-skill](https://github.com/likaku/Mck-ppt-design-skill) | 面向 AI agents 的咨询风 PowerPoint 设计系统，提供大量布局模式并基于 python-pptx 输出。 | PPTX-native, 模板, 自动化 | 可编辑 | Skill | 153 |
| [Noi1r/powerpoint-skill](https://github.com/Noi1r/powerpoint-skill) | 面向学术幻灯片、公式和图表的 PowerPoint skill。 | PPTX-native, PDF, 自动化 | 可编辑 | Skill | 88 |
| [tristan-mcinnis/pptx-from-layouts-skill](https://github.com/tristan-mcinnis/pptx-from-layouts-skill) | 使用模板 slide master layouts 从 Markdown 生成 PowerPoint deck 的 Claude Code skill。 | PPTX-native, 模板, 自动化 | 可编辑 | Skill | 51 |
| [PHY041/claude-skill-academic-ppt](https://github.com/PHY041/claude-skill-academic-ppt) | 从 LaTeX 或 PDF 生成学术答辩 PPT 的 Claude Code skill，支持图表、备注和 Q&A 预测。 | PPTX-native, PDF, 模板 | 部分可编辑 | Skill | 11 |

## PPTX 库与自动化基础设施

底层 PPTX 库、MCP、Office 自动化、后端服务，以及可编辑重建与转换基础设施。

| 仓库 | 简介 | 标签 | 可编辑性 | Skill | Star |
| --- | --- | --- | --- | --- | --- |
| [gitbrent/PptxGenJS](https://github.com/gitbrent/PptxGenJS) | 用于创建 PowerPoint 的 JavaScript 库。 | 库, PPTX-native, 自动化 | 可编辑 | 否 | 5,439 |
| [scanny/python-pptx](https://github.com/scanny/python-pptx) | 用于创建和更新 PowerPoint 文件的 Python 库。 | 库, PPTX-native, 自动化 | 可编辑 | 否 | 3,379 |
| [singerla/pptx-automizer](https://github.com/singerla/pptx-automizer) | 用于修改、合并和模板化 PowerPoint 文件的 Node.js 库。 | 库, 自动化, PPTX-native, 模板 | 可编辑 | 否 | 202 |
| [atharva9167j/dom-to-pptx](https://github.com/atharva9167j/dom-to-pptx) | 客户端 DOM/CSS 转可编辑 PowerPoint 工具，并提供 agent skill 安装器。 | HTML-first, 转换, 库, PPTX-native | 可编辑 | Skill | 190 |
| [JuniverseCoder/MinerU2PPT](https://github.com/JuniverseCoder/MinerU2PPT) | 使用结构提取把 PDF 和图片转换为可编辑 PowerPoint。 | 转换, PPTX-native, PDF, 图片式 | 可编辑 | 否 | 176 |
| [SlideSpeak/slidespeak-backend](https://github.com/SlideSpeak/slidespeak-backend) | SlideSpeak 后端，支持 AI 总结、问答和 PowerPoint 创建流程。 | 后端, 自动化, 转换, PPTX-native, PDF | 未确认 | 否 | 93 |
| [trsdn/mcp-server-ppt](https://github.com/trsdn/mcp-server-ppt) | 通过 Windows PowerPoint COM API 自动化创建、编辑和导出 PowerPoint 的 MCP server 与 CLI。 | MCP, 自动化, PowerPoint, COM | 可编辑 | MCP | 30 |
| [ningzimu/image-to-editable-ppt-skill](https://github.com/ningzimu/image-to-editable-ppt-skill) | 把幻灯片图片、PDF 和图片版 PPTX 转换为可编辑 PowerPoint deck 的 Codex skill。 | 转换, 图片式, PDF | 可编辑 | Skill | 22 |
| [ykuwai/ppt-mcp](https://github.com/ykuwai/ppt-mcp) | 通过 COM 自动化实时控制 PowerPoint 的 MCP server。 | MCP, 自动化, PowerPoint | 可编辑 | MCP | 19 |

## 收录范围

入选项目应与 AI 辅助演示工作直接相关，例如生成幻灯片、编辑 PPTX、把内容转换为演示文稿、重建可编辑 deck、渲染或验证幻灯片。

分类按主工作流的源表示决定，而不是按最终导出格式决定。能导出 PPTX 不等于属于 PPTX 库生成式；`Skill`、`可编辑 PPTX` 和 `PPTX export` 都只是标签，不能单独决定分类。

GitHub 仓库通常需要至少 10 stars 才能进入主列表。

不收录：

- 没有演示文稿工作流的泛 AI 写作工具。
- 没有幻灯片或 deck 输出的泛图片生成工具。
- 没有开源仓库或技术工作流的模板市场。
- 已归档、废弃或空仓库。

## 贡献

欢迎提交 PR。推荐项目前请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。如果发现分类、描述或链接有问题，可以通过 [Issue](https://github.com/ningzimu/awesome-ai-ppt/issues) 反馈。

## 贡献者

感谢所有参与维护和改进这个项目的人。

<a href="https://github.com/ningzimu/awesome-ai-ppt/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=ningzimu/awesome-ai-ppt" alt="Contributors">
</a>
