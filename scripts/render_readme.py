#!/usr/bin/env python3
"""Render Chinese and English READMEs from docs/projects.json."""

from __future__ import annotations

from pathlib import Path
import json


ROOT = Path(__file__).resolve().parents[1]
PROJECTS_PATH = ROOT / "docs/projects.json"

CATEGORIES = [
    ("End-to-End AI Presentation Tools", "端到端 AI 演示工具"),
    ("Agent Skills and Workflows", "Agent 技能与工作流"),
    ("PowerPoint and PPTX Libraries", "PowerPoint 与 PPTX 库"),
    ("Editable Reconstruction", "可编辑重建"),
    ("Markdown, HTML, and Document to Slides", "Markdown、HTML 与文档转幻灯片"),
    ("Research and Benchmarks", "研究与基准"),
    ("Directories and Related Lists", "目录与相关清单"),
]

ZH_SECTION_COPY = {
    "End-to-End AI Presentation Tools": "可从提示词、文档或结构化输入生成完整演示文稿的项目。",
    "Agent Skills and Workflows": "面向 agent 的可安装技能或工作流，用于创建、编辑或转换演示文稿。",
    "PowerPoint and PPTX Libraries": "用于创建、修改、合并或检查 PPTX 文件的开发者库。",
    "Editable Reconstruction": "专注于把文档、图片、HTML 或已有幻灯片重建为可编辑演示对象的项目。",
    "Markdown, HTML, and Document to Slides": "将结构化内容转换为幻灯片或网页演示的工具。",
    "Research and Benchmarks": "关于演示生成、编辑或多模态幻灯片 agent 的研究项目与论文。",
    "Directories and Related Lists": "目录、索引和相关资源集合。",
}

EN_SECTION_COPY = {
    "End-to-End AI Presentation Tools": "Projects that can generate complete presentations from prompts, documents, or structured inputs.",
    "Agent Skills and Workflows": "Installable or agent-oriented workflows for creating, editing, or transforming presentations.",
    "PowerPoint and PPTX Libraries": "Developer libraries for creating, modifying, merging, or inspecting PPTX files.",
    "Editable Reconstruction": "Projects focused on rebuilding documents, images, HTML, or existing slides into editable presentation objects.",
    "Markdown, HTML, and Document to Slides": "Tools that convert structured content into slide decks or web presentations.",
    "Research and Benchmarks": "Research projects and papers about presentation generation, editing, or multimodal slide agents.",
    "Directories and Related Lists": "Directories, indexes, and related resource collections.",
}

ZH_SLUGS = {
    "端到端 AI 演示工具": "端到端-ai-演示工具",
    "Agent 技能与工作流": "agent-技能与工作流",
    "PowerPoint 与 PPTX 库": "powerpoint-与-pptx-库",
    "可编辑重建": "可编辑重建",
    "Markdown、HTML 与文档转幻灯片": "markdownhtml-与文档转幻灯片",
    "研究与基准": "研究与基准",
    "目录与相关清单": "目录与相关清单",
}

ZH_HEADER = """# Awesome AI PPT

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
| 原生 AI PPT 应用 | `Anionex/banana-slides` | [端到端 AI 演示工具](#端到端-ai-演示工具) |
| 精致 HTML 演示 skill | `op7418/guizang-ppt-skill` | [Agent 技能与工作流](#agent-技能与工作流) |
| 通用可编辑 PPTX 生成 | `openai/skills - slides` | [Agent 技能与工作流](#agent-技能与工作流) |
| 完整 agentic PPT 生成 | `hugohe3/ppt-master` | [可编辑重建](#可编辑重建) |
| 图片式 PPT 生成 | `ningzimu/codex-ppt-skill` | [Agent 技能与工作流](#agent-技能与工作流) |
| 图片/PDF 转可编辑 PPT | `ningzimu/image-to-editable-ppt-skill` | [可编辑重建](#可编辑重建) |

## 目录

"""

EN_HEADER = """# Awesome AI PPT

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

"""

ZH_TAIL = """## 收录范围

入选项目应与 AI 辅助演示工作直接相关，例如生成幻灯片、编辑 PPTX、把内容转换为演示文稿、重建可编辑 deck、渲染或验证幻灯片，或评估演示 agent。

GitHub 仓库通常需要至少 10 stars 才能进入主列表。论文、官方目录或基础资源如果高度相关，可以作为例外收录。

不收录：

- 没有演示文稿工作流的泛 AI 写作工具。
- 没有幻灯片或 deck 输出的泛图片生成工具。
- 没有开源仓库或技术工作流的模板市场。
- 已归档、废弃或空仓库。历史参考项目应放在 [ARCHIVE.md](ARCHIVE.md)。

## 贡献

欢迎提交 PR。推荐项目前请先阅读 [CONTRIBUTING.md](CONTRIBUTING.md)。
"""

EN_TAIL = """## Scope

Included projects should have a direct relationship to AI-assisted presentation work: generating slides, editing PPTX files, converting content into presentations, reconstructing editable decks, rendering or validating slides, or evaluating presentation agents.

GitHub repositories should have at least 10 stars before being included. Research papers, official directories, or foundational resources may be included when they are clearly relevant.

Out of scope:

- Generic AI writing tools without a presentation workflow.
- Generic image generators without slide or deck output.
- Template marketplaces with no open repository or technical workflow.
- Archived, deprecated, or empty repositories. Historical references belong in [ARCHIVE.md](ARCHIVE.md).

## Contributing

Pull requests are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before suggesting a project.
"""


def sort_projects(projects: list[dict]) -> list[dict]:
    return sorted(projects, key=lambda item: (item.get("stars") is None, -(item.get("stars") or -1), item["name"].lower()))


def slug_en(title: str) -> str:
    return title.lower().replace(",", "").replace(" and ", "-and-").replace(" ", "-")


def star_badge(project: dict) -> str:
    repo = project.get("repo")
    if not repo:
        return ""
    return f" [![GitHub stars](https://img.shields.io/github/stars/{repo}?style=social)](https://github.com/{repo})"


def render_readme(projects: list[dict], lang: str) -> str:
    if lang == "zh":
        lines = [ZH_HEADER]
        for category, category_zh in CATEGORIES:
            lines.append(f"- [{category_zh}](#{ZH_SLUGS[category_zh]})")
        lines.extend(["- [收录范围](#收录范围)", "- [贡献](#贡献)\n"])
        for category, category_zh in CATEGORIES:
            lines.extend([f"## {category_zh}\n", f"{ZH_SECTION_COPY[category]}\n"])
            lines.extend(
                f"- [{project['name']}]({project['url']}){star_badge(project)} - {project['descriptionZh']}"
                for project in projects
                if project["category"] == category
            )
            lines.append("")
        lines.append(ZH_TAIL.rstrip())
        return "\n".join(lines) + "\n"

    lines = [EN_HEADER]
    for category, _ in CATEGORIES:
        lines.append(f"- [{category}](#{slug_en(category)})")
    lines.extend(["- [Scope](#scope)", "- [Contributing](#contributing)\n"])
    for category, _ in CATEGORIES:
        lines.extend([f"## {category}\n", f"{EN_SECTION_COPY[category]}\n"])
        lines.extend(
            f"- [{project['name']}]({project['url']}){star_badge(project)} - {project['description']}"
            for project in projects
            if project["category"] == category
        )
        lines.append("")
    lines.append(EN_TAIL.rstrip())
    return "\n".join(lines) + "\n"


def render_readmes(projects: list[dict] | None = None) -> list[dict]:
    if projects is None:
        projects = json.loads(PROJECTS_PATH.read_text(encoding="utf-8"))
    projects = sort_projects(projects)
    (ROOT / "README.md").write_text(render_readme(projects, "zh"), encoding="utf-8")
    (ROOT / "README_EN.md").write_text(render_readme(projects, "en"), encoding="utf-8")
    return projects


def main() -> int:
    render_readmes()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
