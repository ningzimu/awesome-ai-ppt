const categories = [
  "All",
  "HTML-First Presentation Workflows",
  "Image-First Presentation Workflows",
  "PPTX-Native Generation Workflows",
  "PPTX Libraries and Automation Infrastructure"
];

const categoryZh = {
  All: "全部分类",
  "HTML-First Presentation Workflows": "HTML 风格 PPT 方案",
  "Image-First Presentation Workflows": "图片生成式 PPT 方案",
  "PPTX-Native Generation Workflows": "PPTX 库生成式 PPT 方案",
  "PPTX Libraries and Automation Infrastructure": "PPTX 库与自动化基础设施"
};

const state = {
  projects: [],
  category: "All",
  tags: [],
  query: "",
  sort: "stars-desc",
  lang: "zh"
};

const translations = {
  zh: {
    agentAccess: "Agent 接入",
    contribute: "贡献",
    heroTitle: "按技术路线、可编辑性和工作流查找 AI PPT 项目。",
    heroCopy: "搜索 HTML 风格、图片生成式、PPTX 原生生成，以及 PPTX 自动化和可编辑重建工具。",
    tagGeneration: "HTML-first",
    tagAutomation: "Image-first",
    tagRebuild: "PPTX-native",
    summaryLabel: "目录概览",
    browseLabel: "浏览项目",
    projectsLabel: "项目",
    categoriesLabel: "分类",
    thresholdLabel: "入选门槛",
    searchLabel: "搜索",
    searchPlaceholder: "搜索名称、分类、标签、输出类型、英文描述...",
    sortLabel: "排序",
    sortStarsDesc: "星标降序",
    sortStarsAsc: "星标升序",
    sortNameAsc: "名称 A-Z",
    tagsLabel: "标签",
    clearTags: "清除",
    allCategories: "全部分类",
    projectCount: (count) => `${count} 个项目`,
    activeTags: (tags) => `标签：${tags.join("、")}`,
    starsLabel: "星标",
    noResults: "没有找到匹配的项目。",
    loadFailed: "项目数据加载失败。",
    footerCopy: "数据由本仓库维护。",
    suggestProject: "推荐项目"
  },
  en: {
    agentAccess: "Agent",
    contribute: "Contribute",
    heroTitle: "Find AI PPT projects by technical route, editability, and workflow.",
    heroCopy: "Search HTML-first, image-first, PPTX-native generation, PPTX automation, and editable reconstruction tools.",
    tagGeneration: "HTML-first",
    tagAutomation: "Image-first",
    tagRebuild: "PPTX-native",
    summaryLabel: "Directory overview",
    browseLabel: "Browse projects",
    projectsLabel: "Projects",
    categoriesLabel: "Categories",
    thresholdLabel: "Stars threshold",
    searchLabel: "Search",
    searchPlaceholder: "Search name, category, tags, output, Chinese description...",
    sortLabel: "Sort",
    sortStarsDesc: "Stars high to low",
    sortStarsAsc: "Stars low to high",
    sortNameAsc: "Name A-Z",
    tagsLabel: "Tags",
    clearTags: "Clear",
    allCategories: "All categories",
    projectCount: (count) => `${count} projects`,
    activeTags: (tags) => `Tags: ${tags.join(", ")}`,
    starsLabel: "stars",
    noResults: "No projects match this search.",
    loadFailed: "Could not load project data.",
    footerCopy: "Data is maintained in this repository.",
    suggestProject: "Suggest a project"
  }
};

const nodes = {
  categoryNav: document.querySelector("#categoryNav"),
  tagNav: document.querySelector("#tagNav"),
  clearTagsButton: document.querySelector("#clearTagsButton"),
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
    project.editable,
    project.skill,
    ...(project.tags || []),
    project.description,
    project.descriptionZh
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function metaChips(project) {
  const values = [
    ...(project.tags || []),
    project.type,
    project.output,
    project.editable,
    project.skill,
    project.repo
  ].filter((value) => value && value !== "No");
  return [...new Set(values)];
}

function allTags() {
  const counts = new Map();
  state.projects.forEach((project) => {
    (project.tags || []).forEach((tag) => {
      counts.set(tag, (counts.get(tag) || 0) + 1);
    });
  });
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
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
      const tagMatch = state.tags.every((tag) => (project.tags || []).includes(tag));
      const queryMatch = !query || searchable(project).includes(query);
      return categoryMatch && tagMatch && queryMatch;
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

function renderTags() {
  nodes.tagNav.innerHTML = allTags()
    .map(([tag, count]) => {
      const active = state.tags.includes(tag) ? " active" : "";
      return `
        <button class="${active}" type="button" data-tag="${tag}">
          <span>${tag}</span>
          <strong>${count}</strong>
        </button>
      `;
    })
    .join("");
  nodes.clearTagsButton.disabled = state.tags.length === 0;
}

function renderProjects() {
  const t = translations[state.lang];
  const projects = filteredProjects();
  nodes.resultCount.textContent = t.projectCount(projects.length);
  const activeCategory =
    state.category === "All"
      ? t.allCategories
      : state.lang === "zh"
        ? categoryZh[state.category]
        : state.category;
  nodes.activeCategory.textContent = state.tags.length
    ? `${activeCategory} · ${t.activeTags(state.tags)}`
    : activeCategory;

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
              ${metaChips(project).map((chip) => `<span class="chip">${chip}</span>`).join("")}
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
  renderTags();
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

nodes.tagNav.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-tag]");
  if (!button) return;
  const tag = button.dataset.tag;
  state.tags = state.tags.includes(tag)
    ? state.tags.filter((activeTag) => activeTag !== tag)
    : [...state.tags, tag];
  render();
});

nodes.clearTagsButton.addEventListener("click", () => {
  state.tags = [];
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
