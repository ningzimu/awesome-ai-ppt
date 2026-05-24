# Awesome AI PPT

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![CC0](https://img.shields.io/badge/license-CC0-4cc61e.svg)](LICENSE)
[![Docs](https://img.shields.io/badge/docs-English-blue)](README_EN.md)
[![Website](https://img.shields.io/badge/GitHub%20Pages-%E4%B8%AD%E6%96%87%E9%BB%98%E8%AE%A4-0f9f8f)](https://ningzimu.github.io/awesome-ai-ppt/)

一个关于 AI PPT、PowerPoint 自动化、PPTX 编辑和幻灯片工作流工具的开源项目精选清单。

这是一个精选列表，不是“所有相关链接大全”。本仓库重点收集能帮助 agent 或开发者创建、编辑、转换、检查或评估演示文稿的 GitHub 仓库与研究项目。

网站：https://ningzimu.github.io/awesome-ai-ppt/

## 快速选择

| 需求 | 推荐入口 | 所在分类 |
| --- | --- | --- |
| 通用可编辑 PPTX 生成 | `openai/skills - slides` | [Agent 技能与工作流](#agent-技能与工作流) |
| 完整 agentic PPT 生成 | `hugohe3/ppt-master` | [可编辑重建](#可编辑重建) |
| 研究型内容生成 | `icip-cas/PPTAgent` | [研究与基准](#研究与基准) |
| 本地 AI 演示应用 | `presenton/presenton` | [端到端 AI 演示工具](#端到端-ai-演示工具) |
| DOM/CSS 转可编辑 PPTX | `atharva9167j/dom-to-pptx` | [可编辑重建](#可编辑重建) |

## 目录

- [端到端 AI 演示工具](#端到端-ai-演示工具)
- [Agent 技能与工作流](#agent-技能与工作流)
- [PowerPoint 与 PPTX 库](#powerpoint-与-pptx-库)
- [可编辑重建](#可编辑重建)
- [Markdown、HTML 与文档转幻灯片](#markdownhtml-与文档转幻灯片)
- [研究与基准](#研究与基准)
- [目录与相关清单](#目录与相关清单)
- [收录范围](#收录范围)
- [贡献](#贡献)

## 端到端 AI 演示工具

可从提示词、文档或结构化输入生成完整演示文稿的项目。

- [allweonedev/presentation-ai](https://github.com/allweonedev/presentation-ai) - 开源 Gamma 风格 AI 演示生成器，支持主题、编辑和 PowerPoint 导出。
- [barun-saha/slide-deck-ai](https://github.com/barun-saha/slide-deck-ai) - AI 辅助 PowerPoint 幻灯片生成。
- [CyberTimon/Powerpointer](https://github.com/CyberTimon/Powerpointer) - 基于 GPT、Python 和 `python-pptx` 的 PowerPoint 生成器。
- [presenton/presenton](https://github.com/presenton/presenton) - 开源 AI 演示生成器和 API，支持 PPTX/PDF 导出。

## Agent 技能与工作流

面向 agent 的可安装技能或工作流，用于创建、编辑或转换演示文稿。

- [anthropics/skills - pptx](https://github.com/anthropics/skills/tree/main/skills/pptx) - Anthropic 官方 PPTX skill，用于读取、创建、编辑和分析 PowerPoint。
- [bytedance/deer-flow - ppt-generation](https://github.com/bytedance/deer-flow/tree/main/skills/public/ppt-generation) - DeerFlow 中基于图片生成的 PPT 工作流。
- [MiniMax-AI/skills - pptx-generator](https://github.com/MiniMax-AI/skills) - MiniMax Office skill，支持生成、编辑和读取 PowerPoint。
- [Noi1r/powerpoint-skill](https://github.com/Noi1r/powerpoint-skill) - 面向学术幻灯片、公式和图表的 PowerPoint skill。
- [openai/skills - slides](https://github.com/openai/skills) - OpenAI curated slides skill，基于 PptxGenJS 并带验证工具。
- [SkyworkAI/Skywork-Skills - skywork-ppt](https://github.com/SkyworkAI/Skywork-Skills) - Skywork PPT skill，支持生成、仿制和编辑 PowerPoint。
- [stevenjinlong/awesome-ppt-skills](https://github.com/stevenjinlong/awesome-ppt-skills) - Codex PPT skills，使用 `gpt-image-2` 生成图片式 PPT，并支持可编辑化交接。

## PowerPoint 与 PPTX 库

用于创建、修改、合并或检查 PPTX 文件的开发者库。

- [gitbrent/PptxGenJS](https://github.com/gitbrent/PptxGenJS) - 用于创建 PowerPoint 的 JavaScript 库。
- [scanny/python-pptx](https://github.com/scanny/python-pptx) - 用于创建和更新 PowerPoint 文件的 Python 库。
- [singerla/pptx-automizer](https://github.com/singerla/pptx-automizer) - 用于修改、合并和模板化 PowerPoint 文件的 Node.js 库。

## 可编辑重建

专注于把文档、图片、HTML 或已有幻灯片重建为可编辑演示对象的项目。

- [atharva9167j/dom-to-pptx](https://github.com/atharva9167j/dom-to-pptx) - 客户端 DOM/CSS 转可编辑 PowerPoint 工具，并提供 agent skill 安装器。
- [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) - 从文档、URL 和 Markdown 生成原生可编辑 PowerPoint 的 AI 工作流。
- [JuniverseCoder/MinerU2PPT](https://github.com/JuniverseCoder/MinerU2PPT) - 使用结构提取把 PDF 和图片转换为可编辑 PowerPoint。

## Markdown、HTML 与文档转幻灯片

将结构化内容转换为幻灯片或网页演示的工具。

- [zarazhangrui/frontend-slides](https://github.com/zarazhangrui/frontend-slides) - 用于创建动画 HTML 演示、并将 PowerPoint 转为网页幻灯片的 skill。

## 研究与基准

关于演示生成、编辑或多模态幻灯片 agent 的研究项目与论文。

- [AIGeeksGroup/PresentAgent-2](https://github.com/AIGeeksGroup/PresentAgent-2) - 多模态演示 agent 研究项目。
- [icip-cas/PPTAgent](https://github.com/icip-cas/PPTAgent) - 有研究支撑的演示生成与评估 agentic 框架。
- [PPTArena](https://arxiv.org/abs/2512.03042) - 面向真实幻灯片的可靠 PowerPoint 编辑基准。

## 目录与相关清单

目录、索引和相关资源集合。

- [openagentskills.dev - pptx](https://openagentskills.dev/skills/pptx) - Open Agent Skills 的 PPTX 目录条目。
- [powerpoint.md](https://powerpoint.md/) - 社区维护的 AI agent PowerPoint 与 Excel skills 对比目录。

## 收录范围

入选项目应与 AI 辅助演示工作直接相关，例如生成幻灯片、编辑 PPTX、把内容转换为演示文稿、重建可编辑 deck、渲染或验证幻灯片，或评估演示 agent。

GitHub 仓库通常需要至少 10 stars 才能进入主列表。论文、官方目录或基础资源如果高度相关，可以作为例外收录。

不收录：

- 没有演示文稿工作流的泛 AI 写作工具。
- 没有幻灯片或 deck 输出的泛图片生成工具。
- 没有开源仓库或技术工作流的模板市场。
- 已归档、废弃或空仓库。历史参考项目应放在 [ARCHIVE.md](ARCHIVE.md)。

## 贡献

欢迎提交 PR。推荐项目前请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。
