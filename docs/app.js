const categories = [
  "All",
  "End-to-End AI Presentation Tools",
  "Agent Skills and Workflows",
  "PowerPoint and PPTX Libraries",
  "Editable Reconstruction",
  "Markdown, HTML, and Document to Slides",
  "Research and Benchmarks",
  "Directories and Related Lists"
];

const categoryZh = {
  All: "全部分类",
  "End-to-End AI Presentation Tools": "端到端 AI 演示工具",
  "Agent Skills and Workflows": "Agent 技能与工作流",
  "PowerPoint and PPTX Libraries": "PowerPoint 与 PPTX 库",
  "Editable Reconstruction": "可编辑重建",
  "Markdown, HTML, and Document to Slides": "Markdown、HTML 与文档转幻灯片",
  "Research and Benchmarks": "研究与基准",
  "Directories and Related Lists": "目录与相关清单"
};

const state = {
  projects: [],
  category: "All",
  query: "",
  sort: "stars-desc",
  lang: "zh"
};

const translations = {
  zh: {
    contribute: "贡献",
    kicker: "双语精选目录",
    heroTitle: "按分类、星标和工作流查找 AI PPT 项目。",
    heroCopy: "搜索 AI 演示生成、PowerPoint 自动化、PPTX 编辑、可编辑重建和幻灯片 agent 工作流开源工具。",
    projectsLabel: "项目",
    categoriesLabel: "分类",
    thresholdLabel: "入选门槛",
    searchLabel: "搜索",
    searchPlaceholder: "搜索名称、分类、输出类型、英文描述...",
    sortLabel: "排序",
    sortStarsDesc: "星标降序",
    sortStarsAsc: "星标升序",
    sortNameAsc: "名称 A-Z",
    allCategories: "全部分类",
    projectCount: (count) => `${count} 个项目`,
    starsLabel: "星标",
    noResults: "没有找到匹配的项目。",
    loadFailed: "项目数据加载失败。",
    footerCopy: "数据由本仓库维护。",
    suggestProject: "推荐项目"
  },
  en: {
    contribute: "Contribute",
    kicker: "Curated bilingual directory",
    heroTitle: "Find AI PPT projects by category, stars, and workflow.",
    heroCopy: "Search open-source tools for AI-assisted presentation generation, PowerPoint automation, PPTX editing, editable reconstruction, and slide agent workflows.",
    projectsLabel: "Projects",
    categoriesLabel: "Categories",
    thresholdLabel: "Stars threshold",
    searchLabel: "Search",
    searchPlaceholder: "Search name, category, output, Chinese description...",
    sortLabel: "Sort",
    sortStarsDesc: "Stars high to low",
    sortStarsAsc: "Stars low to high",
    sortNameAsc: "Name A-Z",
    allCategories: "All categories",
    projectCount: (count) => `${count} projects`,
    starsLabel: "stars",
    noResults: "No projects match this search.",
    loadFailed: "Could not load project data.",
    footerCopy: "Data is maintained in this repository.",
    suggestProject: "Suggest a project"
  }
};

const nodes = {
  categoryNav: document.querySelector("#categoryNav"),
  projectList: document.querySelector("#projectList"),
  searchInput: document.querySelector("#searchInput"),
  sortSelect: document.querySelector("#sortSelect"),
  resultCount: document.querySelector("#resultCount"),
  activeCategory: document.querySelector("#activeCategory"),
  statProjects: document.querySelector("#statProjects"),
  statCategories: document.querySelector("#statCategories"),
  languageButtons: document.querySelectorAll("[data-lang]"),
  i18nNodes: document.querySelectorAll("[data-i18n]")
};

function formatStars(stars) {
  if (typeof stars !== "number") return "N/A";
  return new Intl.NumberFormat("en-US").format(stars);
}

function searchable(project) {
  return [
    project.name,
    project.repo,
    project.category,
    project.categoryZh,
    project.type,
    project.output,
    project.description,
    project.descriptionZh
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function sorted(projects) {
  return [...projects].sort((a, b) => {
    if (state.sort === "name-asc") {
      return a.name.localeCompare(b.name);
    }

    const aStars = typeof a.stars === "number" ? a.stars : -1;
    const bStars = typeof b.stars === "number" ? b.stars : -1;

    if (state.sort === "stars-asc") {
      return aStars - bStars || a.name.localeCompare(b.name);
    }

    return bStars - aStars || a.name.localeCompare(b.name);
  });
}

function filteredProjects() {
  const query = state.query.trim().toLowerCase();
  return sorted(
    state.projects.filter((project) => {
      const categoryMatch = state.category === "All" || project.category === state.category;
      const queryMatch = !query || searchable(project).includes(query);
      return categoryMatch && queryMatch;
    })
  );
}

function renderCategories() {
  nodes.categoryNav.innerHTML = categories
    .map((category) => {
      const count =
        category === "All"
          ? state.projects.length
          : state.projects.filter((project) => project.category === category).length;
      const active = category === state.category ? " active" : "";
      return `
        <button class="${active}" type="button" data-category="${category}">
          <span>${state.lang === "zh" ? categoryZh[category] : category}<br><small>${state.lang === "zh" ? category : categoryZh[category]}</small></span>
          <strong>${count}</strong>
        </button>
      `;
    })
    .join("");
}

function renderProjects() {
  const t = translations[state.lang];
  const projects = filteredProjects();
  nodes.resultCount.textContent = t.projectCount(projects.length);
  nodes.activeCategory.textContent =
    state.category === "All"
      ? t.allCategories
      : state.lang === "zh"
        ? categoryZh[state.category]
        : state.category;

  if (!projects.length) {
    nodes.projectList.innerHTML = `
      <div class="empty">
        ${t.noResults}
      </div>
    `;
    return;
  }

  nodes.projectList.innerHTML = projects
    .map(
      (project) => `
        <article class="project">
          <div>
            <h2><a href="${project.url}" target="_blank" rel="noopener noreferrer">${project.name}</a></h2>
            <p>${state.lang === "zh" ? project.descriptionZh : project.description}</p>
            <p class="secondary">${state.lang === "zh" ? project.description : project.descriptionZh}</p>
            <div class="meta">
              <span class="chip">${state.lang === "zh" ? project.categoryZh : project.category}</span>
              <span class="chip">${project.type}</span>
              <span class="chip">${project.output}</span>
              ${project.repo ? `<span class="chip">${project.repo}</span>` : ""}
            </div>
          </div>
          <div class="stars" aria-label="Stars">
            <strong>${formatStars(project.stars)}</strong>
            <span>${t.starsLabel}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function render() {
  renderStaticText();
  renderCategories();
  renderProjects();
}

function renderStaticText() {
  const t = translations[state.lang];
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  nodes.i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    const value = t[key];
    if (typeof value === "string") {
      node.textContent = value;
    }
  });
  nodes.searchInput.placeholder = t.searchPlaceholder;
  nodes.languageButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });
}

nodes.categoryNav.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  render();
});

nodes.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  renderProjects();
});

nodes.sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderProjects();
});

nodes.languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    state.lang = button.dataset.lang;
    render();
  });
});

fetch("projects.json")
  .then((response) => response.json())
  .then((projects) => {
    state.projects = projects;
    nodes.statProjects.textContent = projects.length;
    nodes.statCategories.textContent = categories.length - 1;
    render();
  })
  .catch(() => {
    nodes.projectList.innerHTML = `
      <div class="empty">
        ${translations[state.lang].loadFailed}
      </div>
    `;
  });
