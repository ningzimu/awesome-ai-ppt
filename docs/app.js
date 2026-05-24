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
  sort: "stars-desc"
};

const nodes = {
  categoryNav: document.querySelector("#categoryNav"),
  projectList: document.querySelector("#projectList"),
  searchInput: document.querySelector("#searchInput"),
  sortSelect: document.querySelector("#sortSelect"),
  resultCount: document.querySelector("#resultCount"),
  activeCategory: document.querySelector("#activeCategory"),
  statProjects: document.querySelector("#statProjects"),
  statCategories: document.querySelector("#statCategories")
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
          <span>${category}<br><small>${categoryZh[category]}</small></span>
          <strong>${count}</strong>
        </button>
      `;
    })
    .join("");
}

function renderProjects() {
  const projects = filteredProjects();
  nodes.resultCount.textContent = `${projects.length} projects / ${projects.length} 个项目`;
  nodes.activeCategory.textContent = `${state.category} / ${categoryZh[state.category]}`;

  if (!projects.length) {
    nodes.projectList.innerHTML = `
      <div class="empty">
        No projects match this search. 没有找到匹配的项目。
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
            <p>${project.description}</p>
            <p class="zh">${project.descriptionZh}</p>
            <div class="meta">
              <span class="chip">${project.categoryZh}</span>
              <span class="chip">${project.type}</span>
              <span class="chip">${project.output}</span>
              ${project.repo ? `<span class="chip">${project.repo}</span>` : ""}
            </div>
          </div>
          <div class="stars" aria-label="Stars">
            <strong>${formatStars(project.stars)}</strong>
            <span>stars / 星标</span>
          </div>
        </article>
      `
    )
    .join("");
}

function render() {
  renderCategories();
  renderProjects();
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
        Could not load project data. 项目数据加载失败。
      </div>
    `;
  });
