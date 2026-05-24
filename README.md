# Awesome AI PPT

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![CC0](https://img.shields.io/badge/license-CC0-4cc61e.svg)](LICENSE)
[![Docs](https://img.shields.io/badge/docs-English-blue)](README_EN.md)
[![Website](https://img.shields.io/badge/GitHub%20Pages-%E4%B8%AD%E6%96%87%E9%BB%98%E8%AE%A4-0f9f8f)](https://ningzimu.github.io/awesome-ai-ppt/)

一个关于 AI PPT、PowerPoint 自动化、PPTX 编辑和幻灯片工作流工具的开源项目精选清单。

这是一个精选列表，不是“所有相关链接大全”。本仓库重点收集能帮助 agent 或开发者创建、编辑、转换或检查演示文稿的 GitHub 仓库与技术项目。

网站：https://ningzimu.github.io/awesome-ai-ppt/

## 快速选择

| 需求 | 推荐入口 | 所在分类 |
| --- | --- | --- |
| 原生 AI PPT 应用 | `Anionex/banana-slides` | [端到端 AI 演示工具](#端到端-ai-演示工具) |
| 精致 HTML 演示 skill | `op7418/guizang-ppt-skill` | [Agent 技能与工作流](#agent-技能与工作流) |
| 通用可编辑 PPTX 生成 | `openai/skills - slides` | [Agent 技能与工作流](#agent-技能与工作流) |
| 完整 agentic PPT 生成 | `hugohe3/ppt-master` | [可编辑重建](#可编辑重建) |
| 图片式 PPT 生成 | `ningzimu/codex-ppt-skill` | [Agent 技能与工作流](#agent-技能与工作流) |
| 图片/PDF 转可编辑 PPT | `ningzimu/image-to-editable-ppt-skill` | [可编辑重建](#可编辑重建) |

## 目录


- [端到端 AI 演示工具](#端到端-ai-演示工具)
- [Agent 技能与工作流](#agent-技能与工作流)
- [PowerPoint 与 PPTX 库](#powerpoint-与-pptx-库)
- [可编辑重建](#可编辑重建)
- [Markdown、HTML 与文档转幻灯片](#markdownhtml-与文档转幻灯片)
- [收录范围](#收录范围)
- [贡献](#贡献)

## 端到端 AI 演示工具

可从提示词、文档或结构化输入生成完整演示文稿的项目。

| 仓库 | 简介 | Star |
| --- | --- | --- |
| [Anionex/banana-slides](https://github.com/Anionex/banana-slides) | 基于 Nano Banana Pro 的原生 AI PPT 应用，支持从想法、大纲、素材或页面描述生成演示，并导出可编辑 PPT。 | 14,676 |
| [presenton/presenton](https://github.com/presenton/presenton) | 开源 AI 演示生成器和 API，支持 PPTX/PDF 导出。 | 6,449 |
| [sligter/LandPPT](https://github.com/sligter/LandPPT) | 基于 LLM 的演示生成平台，可把文档转换为专业 PPT，并支持模板、样式和多模型选择。 | 3,265 |
| [allweonedev/presentation-ai](https://github.com/allweonedev/presentation-ai) | 开源 Gamma 风格 AI 演示生成器，支持主题、编辑和 PowerPoint 导出。 | 2,818 |
| [veasion/AiPPT](https://github.com/veasion/AiPPT) | 可通过主题、文件或网址生成 PPT 的 AI 工具，支持自定义模板、图表、动画和 3D 特效解析渲染。 | 1,882 |
| [SmartSchoolAI/ai-to-pptx](https://github.com/SmartSchoolAI/ai-to-pptx) | 前后端开源的 AI PPTX 助手，支持生成大纲、选择模板、在线编辑并导出 PPTX。 | 1,433 |
| [barun-saha/slide-deck-ai](https://github.com/barun-saha/slide-deck-ai) | AI 辅助 PowerPoint 幻灯片生成。 | 358 |
| [HuiMi24/chatppt](https://github.com/HuiMi24/chatppt) | 由 ChatGPT/Ollama 驱动的 PPT/slide 生成工具，支持中英文输出。 | 306 |
| [CyberTimon/Powerpointer](https://github.com/CyberTimon/Powerpointer) | 基于 GPT、Python 和 python-pptx 的 PowerPoint 生成器。 | 176 |
| [SlideSpeak/slidespeak-backend](https://github.com/SlideSpeak/slidespeak-backend) | SlideSpeak 后端，支持 AI 总结、问答和 PowerPoint 创建流程。 | 93 |
| [grapeot/nbp_slides](https://github.com/grapeot/nbp_slides) | 基于叙事方法论和模板的 AI 幻灯片生成器，支持生成演示 deck。 | 83 |

## Agent 技能与工作流

面向 agent 的可安装技能或工作流，用于创建、编辑或转换演示文稿。

| 仓库 | 简介 | Star |
| --- | --- | --- |
| [anthropics/skills - pptx](https://github.com/anthropics/skills/tree/main/skills/pptx) | Anthropic 官方 PPTX skill，用于读取、创建、编辑和分析 PowerPoint。 | 139,790 |
| [bytedance/deer-flow - ppt-generation](https://github.com/bytedance/deer-flow/tree/main/skills/public/ppt-generation) | DeerFlow 中基于图片生成的 PPT 工作流。 | 69,332 |
| [openai/skills - slides](https://github.com/openai/skills) | OpenAI curated slides skill，基于 PptxGenJS 并带验证工具。 | 20,080 |
| [alchaincyf/huashu-design](https://github.com/alchaincyf/huashu-design) | Claude Code 的 HTML 原生设计 skill，覆盖高保真原型、幻灯片、动画、评审体系和 MP4 导出。 | 14,765 |
| [MiniMax-AI/skills - pptx-generator](https://github.com/MiniMax-AI/skills) | MiniMax Office skill，支持生成、编辑和读取 PowerPoint。 | 12,053 |
| [op7418/guizang-ppt-skill](https://github.com/op7418/guizang-ppt-skill) | 用于生成精致 HTML 幻灯片的 AI-agent skill，内置杂志风、瑞士风布局、图片提示词、社媒封面和演示运行时。 | 11,561 |
| [op7418/NanoBanana-PPT-Skills](https://github.com/op7418/NanoBanana-PPT-Skills) | NanoBanana PPT Skills，用于自动生成高质量 PPT 图片和视频，支持智能转场和交互式播放。 | 2,756 |
| [NyxTides/ppt-image-first](https://github.com/NyxTides/ppt-image-first) | 面向 Codex、Claude Code 和 Opencode CLI 的 image-first PPT skill。 | 873 |
| [sunbigfly/ppt-agent-skills](https://github.com/sunbigfly/ppt-agent-skills) | 代码驱动的演示文稿生成框架，强调像构建软件工程一样生成演示文稿。 | 748 |
| [JuneYaooo/gpt-image2-ppt-skills](https://github.com/JuneYaooo/gpt-image2-ppt-skills) | 使用 gpt-image-2 仿制 PPTX 版式并替换内容的 skill，附带多套精选风格。 | 700 |
| [Gabberflast/academic-pptx-skill](https://github.com/Gabberflast/academic-pptx-skill) | 面向学术演示的 Claude skill，强调行动标题、论证结构、图表纪律、引用规范和表达优先设计。 | 448 |
| [ningzimu/codex-ppt-skill](https://github.com/ningzimu/codex-ppt-skill) | 使用 gpt-image-2 生成图片式 PowerPoint deck 的 Codex skill。 | 274 |
| [SkyworkAI/Skywork-Skills - skywork-ppt](https://github.com/SkyworkAI/Skywork-Skills) | Skywork PPT skill，支持生成、仿制和编辑 PowerPoint。 | 156 |
| [likaku/Mck-ppt-design-skill](https://github.com/likaku/Mck-ppt-design-skill) | 面向 AI agents 的咨询风 PowerPoint 设计系统，提供大量布局模式并基于 python-pptx 输出。 | 150 |
| [Noi1r/powerpoint-skill](https://github.com/Noi1r/powerpoint-skill) | 面向学术幻灯片、公式和图表的 PowerPoint skill。 | 85 |
| [tristan-mcinnis/pptx-from-layouts-skill](https://github.com/tristan-mcinnis/pptx-from-layouts-skill) | 使用模板 slide master layouts 从 Markdown 生成 PowerPoint deck 的 Claude Code skill。 | 50 |
| [stevenjinlong/awesome-ppt-skills](https://github.com/stevenjinlong/awesome-ppt-skills) | Codex PPT skills，使用 gpt-image-2 生成图片式 PPT，并支持可编辑化交接。 | 43 |
| [ykuwai/ppt-mcp](https://github.com/ykuwai/ppt-mcp) | 通过 COM 自动化实时控制 PowerPoint 的 MCP server。 | 19 |
| [PHY041/claude-skill-academic-ppt](https://github.com/PHY041/claude-skill-academic-ppt) | 从 LaTeX 或 PDF 生成学术答辩 PPT 的 Claude Code skill，支持图表、备注和 Q&A 预测。 | 11 |

## PowerPoint 与 PPTX 库

用于创建、修改、合并或检查 PPTX 文件的开发者库。

| 仓库 | 简介 | Star |
| --- | --- | --- |
| [gitbrent/PptxGenJS](https://github.com/gitbrent/PptxGenJS) | 用于创建 PowerPoint 的 JavaScript 库。 | 5,434 |
| [scanny/python-pptx](https://github.com/scanny/python-pptx) | 用于创建和更新 PowerPoint 文件的 Python 库。 | 3,377 |
| [singerla/pptx-automizer](https://github.com/singerla/pptx-automizer) | 用于修改、合并和模板化 PowerPoint 文件的 Node.js 库。 | 202 |

## 可编辑重建

专注于把文档、图片、HTML 或已有幻灯片重建为可编辑演示对象的项目。

| 仓库 | 简介 | Star |
| --- | --- | --- |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | 从文档、URL 和 Markdown 生成原生可编辑 PowerPoint 的 AI 工作流。 | 20,248 |
| [atharva9167j/dom-to-pptx](https://github.com/atharva9167j/dom-to-pptx) | 客户端 DOM/CSS 转可编辑 PowerPoint 工具，并提供 agent skill 安装器。 | 188 |
| [JuniverseCoder/MinerU2PPT](https://github.com/JuniverseCoder/MinerU2PPT) | 使用结构提取把 PDF 和图片转换为可编辑 PowerPoint。 | 162 |
| [ningzimu/image-to-editable-ppt-skill](https://github.com/ningzimu/image-to-editable-ppt-skill) | 把幻灯片图片、PDF 和图片版 PPTX 转换为可编辑 PowerPoint deck 的 Codex skill。 | 15 |

## Markdown、HTML 与文档转幻灯片

将结构化内容转换为幻灯片或网页演示的工具。

| 仓库 | 简介 | Star |
| --- | --- | --- |
| [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) | 用于创建动画 HTML 演示、并将 PowerPoint 转为网页幻灯片的 skill。 | 18,681 |
| [lewislulu/html-ppt-skill](https://github.com/lewislulu/html-ppt-skill) | HTML PPT Studio agent skill，提供 24 套主题、31 种布局和 20+ 动画，用于制作专业网页演示。 | 4,537 |
| [1weiho/open-slide](https://github.com/1weiho/open-slide) | 为 agent 设计的 slide framework，每页可作为 React 组件，并支持由 agent 根据反馈迭代修改。 | 3,599 |
| [Noi1r/beamer-skill](https://github.com/Noi1r/beamer-skill) | 用于创建、编译、审阅和润色学术 Beamer LaTeX 演示的 Claude Code skill。 | 236 |
| [Kuneosu/make-slide](https://github.com/Kuneosu/make-slide) | 用于生成独立 HTML 幻灯片 deck 的通用 AI skill。 | 69 |

## 收录范围

入选项目应与 AI 辅助演示工作直接相关，例如生成幻灯片、编辑 PPTX、把内容转换为演示文稿、重建可编辑 deck、渲染或验证幻灯片。

GitHub 仓库通常需要至少 10 stars 才能进入主列表。

不收录：

- 没有演示文稿工作流的泛 AI 写作工具。
- 没有幻灯片或 deck 输出的泛图片生成工具。
- 没有开源仓库或技术工作流的模板市场。
- 已归档、废弃或空仓库。

## 贡献

欢迎提交 PR。推荐项目前请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。
