#!/usr/bin/env python3
"""Render Chinese and English READMEs from docs/projects.json."""

from __future__ import annotations

from pathlib import Path
import json


ROOT = Path(__file__).resolve().parents[1]
PROJECTS_PATH = ROOT / "docs/projects.json"

CATEGORIES = [
    ("HTML-First Presentation Workflows", "HTML 风格 PPT 方案"),
    ("Image-First Presentation Workflows", "图片生成式 PPT 方案"),
    ("PPTX-Native Generation Workflows", "PPTX 库生成式 PPT 方案"),
    ("PPTX Libraries and Automation Infrastructure", "PPTX 库与自动化基础设施"),
]

CONTRIBUTORS = [
    {
        "login": "ningzimu",
        "url": "https://github.com/ningzimu",
        "avatar": "https://github.com/ningzimu.png?size=96",
    }
]


def render_contributors() -> str:
    return "\n".join(
        f'<a href="{contributor["url"]}"><img src="{contributor["avatar"]}" width="64" height="64" alt="{contributor["login"]}"></a>'
        for contributor in CONTRIBUTORS
    )

ZH_SECTION_COPY = {
    "HTML-First Presentation Workflows": "先生成 HTML、Web slides 或页面式演示，再导出、截图或转换为 PPT 的方案。",
    "Image-First Presentation Workflows": "以图像模型或整页图片为核心生成幻灯片，再打包为 PPTX、PDF、视频或网页演示的方案。",
    "PPTX-Native Generation Workflows": "直接通过 PptxGenJS、python-pptx、Office XML 或 PowerPoint API 生成原生可编辑 PPTX 的方案。",
    "PPTX Libraries and Automation Infrastructure": "底层 PPTX 库、MCP、Office 自动化、后端服务，以及可编辑重建与转换基础设施。",
}

EN_SECTION_COPY = {
    "HTML-First Presentation Workflows": "Workflows that create HTML, web slides, or page-style presentations first, then export, screenshot, or convert them into PPT outputs.",
    "Image-First Presentation Workflows": "Workflows centered on image models or whole-slide images, then packaging those slides as PPTX, PDF, video, or web presentations.",
    "PPTX-Native Generation Workflows": "Workflows that directly generate native editable PPTX files through PptxGenJS, python-pptx, Office XML, or PowerPoint APIs.",
    "PPTX Libraries and Automation Infrastructure": "Underlying PPTX libraries, MCP servers, Office automation, backend services, and editable reconstruction or conversion infrastructure.",
}

ZH_SLUGS = {
    "HTML 风格 PPT 方案": "html-风格-ppt-方案",
    "图片生成式 PPT 方案": "图片生成式-ppt-方案",
    "PPTX 库生成式 PPT 方案": "pptx-库生成式-ppt-方案",
    "PPTX 库与自动化基础设施": "pptx-库与自动化基础设施",
}

ZH_TAGS = {
    "HTML-first": "HTML-first",
    "Image-first": "Image-first",
    "PPTX-native": "PPTX-native",
    "Automation": "自动化",
    "Conversion": "转换",
    "Editable": "可编辑",
    "Partially editable": "部分可编辑",
    "Image-based": "图片式",
    "Source editable": "源码可编辑",
    "Skill": "Skill",
    "Workflow": "工作流",
    "App": "应用",
    "Library": "库",
    "MCP": "MCP",
    "Backend": "后端",
    "PDF": "PDF",
    "Video": "视频",
    "Template": "模板",
    "PowerPoint": "PowerPoint",
    "PPTX": "PPTX",
    "Unknown": "未确认",
    "No": "否",
}

ZH_HEADER = """# Awesome AI PPT

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![CC0](https://img.shields.io/badge/license-CC0-4cc61e.svg)](LICENSE)
[![Docs](https://img.shields.io/badge/docs-English-blue)](README_EN.md)
[![Website](https://img.shields.io/badge/GitHub%20Pages-awesome--ai--ppt-0f9f8f)](https://ningzimu.github.io/awesome-ai-ppt/)

一个关于 AI PPT、PowerPoint 自动化、PPTX 编辑和幻灯片工作流工具的开源项目精选清单。

这是一个精选列表，不是“所有相关链接大全”。本仓库重点收集能帮助 agent 或开发者创建、编辑、转换或检查演示文稿的 GitHub 仓库与技术项目。

网站：https://ningzimu.github.io/awesome-ai-ppt/

## Agent / Skill 接入

本仓库提供 `awesome-ai-ppt` skill，帮助 AI 先用清单粗筛 AI PPT 工具，再去原始仓库做详细对比；也可以在你明确要求时，引导 AI 按规则反馈问题、贡献项目或准备 PR。

你可以对 AI 说：帮我安装 awesome-ai-ppt skill：https://github.com/ningzimu/awesome-ai-ppt/tree/main/skills/awesome-ai-ppt

手动安装：

```bash
npx -y skills@latest add ningzimu/awesome-ai-ppt \\
  --skill awesome-ai-ppt \\
  --agent codex \\
  --global
```

示例：

```text
请使用 awesome-ai-ppt skill，先用清单粗筛，再去原仓库详细对比适合生成可编辑 PPTX 的方案。
请使用 awesome-ai-ppt skill，检查这个 GitHub 项目是否适合加入清单。
```

更多说明见 [Agent 接入页面](https://ningzimu.github.io/awesome-ai-ppt/agent/)。

## 目录

"""

EN_HEADER = """# Awesome AI PPT

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)
[![CC0](https://img.shields.io/badge/license-CC0-4cc61e.svg)](LICENSE)
[![Docs](https://img.shields.io/badge/docs-%E4%B8%AD%E6%96%87-blue)](README.md)
[![Website](https://img.shields.io/badge/GitHub%20Pages-awesome--ai--ppt-0f9f8f)](https://ningzimu.github.io/awesome-ai-ppt/)

A curated list of open-source projects for AI-assisted presentation generation, PowerPoint automation, PPTX editing, and slide workflow tooling.

This is a curated list, not a dump of every slide-related link. It focuses on GitHub repositories and technical projects that help agents or developers create, edit, convert, or inspect presentations.

Website: https://ningzimu.github.io/awesome-ai-ppt/

## Agent / Skill Access

This repository provides the `awesome-ai-ppt` skill. It helps AI agents use the list as a rough discovery index, inspect original repositories for detailed comparisons, and, when explicitly requested, follow the repository rules to report issues, contribute projects, or prepare PRs.

Tell your AI agent: Install the awesome-ai-ppt skill from https://github.com/ningzimu/awesome-ai-ppt/tree/main/skills/awesome-ai-ppt

Manual install:

```bash
npx -y skills@latest add ningzimu/awesome-ai-ppt \\
  --skill awesome-ai-ppt \\
  --agent codex \\
  --global
```

Examples:

```text
Use the awesome-ai-ppt skill to first shortlist tools from the list, then inspect original repositories to compare options for editable PPTX generation.
Use the awesome-ai-ppt skill to check whether this GitHub project belongs in the list.
```

See the [Agent access page](https://ningzimu.github.io/awesome-ai-ppt/agent/) for details.

## Contents

"""

ZH_TAIL = f"""## 收录范围

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

{render_contributors()}
"""

EN_TAIL = f"""## Scope

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

{render_contributors()}
"""


def sort_projects(projects: list[dict]) -> list[dict]:
    return sorted(projects, key=lambda item: (item.get("stars") is None, -(item.get("stars") or -1), item["name"].lower()))


def slug_en(title: str) -> str:
    return title.lower().replace(",", "").replace(" and ", "-and-").replace(" ", "-")


def star_text(project: dict) -> str:
    stars = project.get("stars")
    if not isinstance(stars, int):
        return "-"
    return f"{stars:,}"


def tag_text(project: dict, lang: str) -> str:
    tags = list(project.get("tags") or [])
    if lang == "zh":
        tags = [ZH_TAGS.get(tag, tag) for tag in tags]
    return ", ".join(tags)


def status_text(project: dict, key: str, lang: str) -> str:
    value = project.get(key) or "Unknown"
    return ZH_TAGS.get(value, value) if lang == "zh" else value


def table_row(project: dict, lang: str) -> str:
    description = project["descriptionZh"] if lang == "zh" else project["description"]
    return (
        f"| [{project['name']}]({project['url']}) | {description} | "
        f"{tag_text(project, lang)} | {status_text(project, 'editable', lang)} | "
        f"{status_text(project, 'skill', lang)} | {star_text(project)} |"
    )


def render_readme(projects: list[dict], lang: str) -> str:
    if lang == "zh":
        lines = [ZH_HEADER]
        for category, category_zh in CATEGORIES:
            lines.append(f"- [{category_zh}](#{ZH_SLUGS[category_zh]})")
        lines.extend(["- [收录范围](#收录范围)", "- [贡献](#贡献)\n"])
        for category, category_zh in CATEGORIES:
            lines.extend([f"## {category_zh}\n", f"{ZH_SECTION_COPY[category]}\n"])
            lines.extend(["| 仓库 | 简介 | 标签 | 可编辑性 | Skill | Star |", "| --- | --- | --- | --- | --- | --- |"])
            lines.extend(table_row(project, "zh") for project in projects if project["category"] == category)
            lines.append("")
        lines.append(ZH_TAIL.rstrip())
        return "\n".join(lines) + "\n"

    lines = [EN_HEADER]
    for category, _ in CATEGORIES:
        lines.append(f"- [{category}](#{slug_en(category)})")
    lines.extend(["- [Scope](#scope)", "- [Contributing](#contributing)\n"])
    for category, _ in CATEGORIES:
        lines.extend([f"## {category}\n", f"{EN_SECTION_COPY[category]}\n"])
        lines.extend(["| Repository | Description | Tags | Editability | Skill | Stars |", "| --- | --- | --- | --- | --- | --- |"])
        lines.extend(table_row(project, "en") for project in projects if project["category"] == category)
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
