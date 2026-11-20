const categories = [
  "All",
  "HTML-First Presentation Workflows",
  "Image-First Presentation Workflows",
  "PPTX-Native Generation Workflows",
  "PPTX Libraries and Automation Infrastructure"
];

const REPO = "ningzimu/awesome-ai-ppt";
const STAR_CACHE_URL = window.AWESOME_AI_PPT_STAR_CACHE_URL || "stars.json";
const STORAGE_LANG_KEY = "awesome-ai-ppt-lang";
const STORAGE_THEME_KEY = "awesome-ai-ppt-theme";
const STORAGE_VIEW_KEY = "awesome-ai-ppt-view";

const tagLabelsZh = {
  Automation: "自动化",
  Conversion: "转换",
  Editable: "可编辑",
  "Partially editable": "部分可编辑",
  "Image-based": "图片式",
  "Source editable": "源码可编辑",
  Workflow: "工作流",
  App: "应用",
  Library: "库",
  Backend: "后端",
  Video: "视频",
  Template: "模板",
  Editor: "编辑器",
  Academic: "学术",
  Research: "研究",
  Translation: "翻译",
  Animation: "动画",
  Interactive: "交互",
  Bilingual: "双语",
  Preview: "预览",
  Parser: "解析器",
  Plugin: "插件",
  "Speaker notes": "演讲者备注",
  Noncommercial: "非商用"
};

const categoryMeta = {
  All: {
    zh: "全部路线",
    en: "All Routes",
    shortZh: "全部路线",
    shortEn: "All Routes",
    briefZh: "横向对比四类开源 PPT 工作流",
    briefEn: "Compare all four open-source routes",
    color: "var(--accent)",
    bg: "var(--accent-soft)",
    border: "var(--accent)"
  },
  "HTML-First Presentation Workflows": {
    zh: "HTML 风格 PPT 方案",
    en: "HTML-First Workflows",
    shortZh: "HTML 风格",
    shortEn: "HTML-First",
    briefZh: "网页 / React 先行，再导出转换",
    briefEn: "Web & React slides first, then export",
    color: "var(--route-html)",
    bg: "var(--route-html-bg)",
    border: "var(--route-html-border)"
  },
  "Image-First Presentation Workflows": {
    zh: "图片生成式 PPT 方案",
    en: "Image-First Workflows",
    shortZh: "图片生成式",
    shortEn: "Image-First",
    briefZh: "图像模型直出整页高视觉幻灯片",
    briefEn: "Image models for full-slide visuals",
    color: "var(--route-image)",
    bg: "var(--route-image-bg)",
    border: "var(--route-image-border)"
  },
  "PPTX-Native Generation Workflows": {
    zh: "PPTX 库生成式 PPT 方案",
    en: "PPTX-Native Workflows",
    shortZh: "PPTX 原生",
    shortEn: "PPTX-Native",
    briefZh: "直接生成原生可编辑 PPTX 元素",
    briefEn: "Native editable PowerPoint elements",
    color: "var(--route-pptx)",
    bg: "var(--route-pptx-bg)",
    border: "var(--route-pptx-border)"
  },
  "PPTX Libraries and Automation Infrastructure": {
    zh: "PPTX 库与自动化基础设施",
    en: "Libraries & Infrastructure",
    shortZh: "库与基础设施",
    shortEn: "Infrastructure",
    briefZh: "底层库、MCP、COM 与可编辑重建",
    briefEn: "Core libraries, MCP, COM & rebuild",
    color: "var(--route-infra)",
    bg: "var(--route-infra-bg)",
    border: "var(--route-infra-border)"
  }
};

const editableLevels = ["All", "Editable", "Source editable", "Partially editable", "Image-based"];

const editableMeta = {
  All: { zh: "不限", en: "Any", cls: "pill-neutral" },
  Editable: { zh: "原生可编辑", en: "Editable", cls: "pill-editable" },
  "Source editable": { zh: "源码可编辑", en: "Source editable", cls: "pill-source" },
  "Partially editable": { zh: "部分可编辑", en: "Partially editable", cls: "pill-partial" },
  "Image-based": { zh: "图片式", en: "Image-based", cls: "pill-image" },
  Unknown: { zh: "未确认", en: "Unknown", cls: "pill-neutral" }
};

const quickLevels = ["all", "skill", "mcp", "app", "library"];

const quickMeta = {
  all: { zh: "全部形态", en: "All types" },
  skill: { zh: "Agent Skill", en: "Agent Skill" },
  mcp: { zh: "MCP Server", en: "MCP Server" },
  app: { zh: "独立应用", en: "App" },
  library: { zh: "开发库 / CLI", en: "Library / CLI" }
};

function readStorage(key, fallback) {
  try {
    return localStorage.getItem(key) || fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch {}
}

const state = {
  projects: [],
  category: "All",
  editable: "All",
  tag: "",
  quick: "all",
  query: "",
  sort: "stars-desc",
  view: readStorage(STORAGE_VIEW_KEY, "grid") === "list" ? "list" : "grid",
  lang: readStorage(STORAGE_LANG_KEY, "zh") === "en" ? "en" : "zh",
  showAllTags: false,
  updatedAt: null
};

const translations = {
  zh: {
    pageTitle: "Awesome AI PPT — AI 演示与 PPTX 工作流开源目录",
    brandSub: "Slide Workflows",
    navDirectory: "项目目录",
    navAgent: "Agent Skill",
    navContribute: "贡献指南",
    themeToggleLabel: "切换深浅色主题",
    clearSearchLabel: "清空搜索",
    gridViewLabel: "卡片视图",
    listViewLabel: "表格列表视图",
    sortAriaLabel: "排序方式",
    heroBadgeShort: "每日同步 Star",
    heroTitlePre: "发现最合适的",
    heroTitleAccent: "AI PPT 开源工作流",
    heroCopy: "按主工作流源表示分类，而非仅看导出格式。系统对比 HTML 风格、图片生成式、PPTX 原生生成与自动化重建基础设施。",
    searchLabel: "搜索项目",
    searchPlaceholder: "搜索仓库名、技术路线、输出格式或关键词...",
    trendingLabel: "快捷检索：",
    projectsLabel: "精选项目",
    skillsLabel: "Skill / MCP",
    editableLabel: "原生可编辑",
    filterTitle: "精细筛选",
    resetFilters: "清空",
    facetEditability: "可编辑性",
    facetIntegration: "接入形态",
    facetTags: "热门标签",
    showAllTags: "展开全部",
    collapseTags: "收起",
    sortLabel: "排序",
    sortStarsDesc: "按 Star 降序",
    sortStarsAsc: "按 Star 升序",
    sortNameAsc: "按名称 A-Z",
    projectCount: (count) => `共 ${count} 个`,
    updatedPrefix: (date) => `同步于 ${date}`,
    noResults: "没有找到符合当前筛选条件的项目。",
    resetBtnFull: "重置全部筛选条件",
    loadFailed: "项目数据加载失败。",
    copiedRepo: (name) => `已复制 ${name}`,
    copyFailed: "复制失败，请手动复制",
    copyRepoTitle: "复制仓库名",
    removeFilterLabel: (label) => `移除筛选：${label}`,
    footerRepo: "GitHub 仓库",
    footerContribute: "贡献指南",
    footerIssues: "Issues",
    footerAgent: "Agent Skill"
  },
  en: {
    pageTitle: "Awesome AI PPT — Open-Source AI Presentation & PPTX Directory",
    brandSub: "Slide Workflows",
    navDirectory: "Directory",
    navAgent: "Agent Skill",
    navContribute: "Contributing",
    themeToggleLabel: "Toggle light or dark theme",
    clearSearchLabel: "Clear search",
    gridViewLabel: "Card grid view",
    listViewLabel: "Compact list view",
    sortAriaLabel: "Sort projects",
    heroBadgeShort: "Stars Synced Daily",
    heroTitlePre: "Find the right",
    heroTitleAccent: "AI PPT Workflow",
    heroCopy: "Classified by primary source representation rather than export format. Compare HTML-first, image-first, PPTX-native, and automation infrastructure.",
    searchLabel: "Search projects",
    searchPlaceholder: "Search repo, route, output format, or keywords...",
    trendingLabel: "Quick try:",
    projectsLabel: "Projects",
    skillsLabel: "Skill / MCP",
    editableLabel: "Native Editable",
    filterTitle: "Filters",
    resetFilters: "Reset",
    facetEditability: "Editability",
    facetIntegration: "Integration",
    facetTags: "Popular Tags",
    showAllTags: "Show all",
    collapseTags: "Collapse",
    sortLabel: "Sort",
    sortStarsDesc: "Stars: High to Low",
    sortStarsAsc: "Stars: Low to High",
    sortNameAsc: "Name: A-Z",
    projectCount: (count) => `${count} ${count === 1 ? "item" : "items"}`,
    updatedPrefix: (date) => `Synced ${date}`,
    noResults: "No projects match your current filters.",
    resetBtnFull: "Reset all filters",
    loadFailed: "Could not load project data.",
    copiedRepo: (name) => `Copied ${name}`,
    copyFailed: "Copy failed, please copy manually",
    copyRepoTitle: "Copy repository name",
    removeFilterLabel: (label) => `Remove filter: ${label}`,
    footerRepo: "GitHub",
    footerContribute: "Contributing",
    footerIssues: "Issues",
    footerAgent: "Agent Skill"
  }
};

const nodes = {
  routeCards: document.querySelector("#routeCards"),
  editableNav: document.querySelector("#editableNav"),
  quickFilters: document.querySelector("#quickFilters"),
  tagCloud: document.querySelector("#tagCloud"),
  toggleAllTags: document.querySelector("#toggleAllTags"),
  projectList: document.querySelector("#projectList"),
  searchInput: document.querySelector("#searchInput"),
  clearSearchBtn: document.querySelector("#clearSearchBtn"),
  searchHints: document.querySelector("#searchHints"),
  activeFiltersWrap: document.querySelector("#activeFiltersWrap"),
  activeFilters: document.querySelector("#activeFilters"),
  toolbarReset: document.querySelector("#toolbarReset"),
  sortSelect: document.querySelector("#sortSelect"),
  resultCount: document.querySelector("#resultCount"),
  sidebarReset: document.querySelector("#sidebarReset"),
  statProjects: document.querySelector("#statProjects"),
  statSkills: document.querySelector("#statSkills"),
  statEditable: document.querySelector("#statEditable"),
  starsUpdated: document.querySelector("#starsUpdated"),
  repoStars: document.querySelector("#repoStars"),
  themeToggle: document.querySelector("#themeToggle"),
  toast: document.querySelector("#toast"),
  hintButtons: document.querySelectorAll("[data-hint]"),
  viewButtons: document.querySelectorAll("[data-view]"),
  languageButtons: document.querySelectorAll("[data-lang]"),
  i18nNodes: document.querySelectorAll("[data-i18n]")
};

let toastTimer = null;

function showToast(message) {
  if (!nodes.toast) return;
  nodes.toast.textContent = message;
  nodes.toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => nodes.toast.classList.remove("show"), 1800);
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function safeHref(url) {
  try {
    const parsed = new URL(String(url || ""));
    if (parsed.protocol === "https:" || parsed.protocol === "http:") {
      return parsed.href;
    }
  } catch {}
  return "#";
}

function tagDisplay(tag) {
  return state.lang === "zh" ? tagLabelsZh[tag] || tag : tag;
}

function formatStars(stars) {
  if (typeof stars !== "number") return "—";
  return new Intl.NumberFormat("en-US").format(stars);
}

function renderRepoStars(stars) {
  if (!nodes.repoStars || typeof stars !== "number") return;
  nodes.repoStars.textContent = formatStars(stars);
}

function projectStars(project) {
  return typeof project.stars === "number" ? project.stars : null;
}

function searchable(project) {
  if (project._searchText) return project._searchText;
  const catMeta = categoryMeta[project.category] || {};
  const editInfo = editableMeta[project.editable] || {};
  const tags = project.tags || [];
  const translatedTags = tags.map((tag) => tagLabelsZh[tag]).filter(Boolean);

  const text = [
    project.name,
    project.repo,
    project.category,
    project.categoryZh,
    catMeta.shortZh,
    catMeta.shortEn,
    catMeta.en,
    project.type,
    project.output,
    project.editable,
    editInfo.zh,
    editInfo.en,
    project.skill,
    ...tags,
    ...translatedTags,
    project.description,
    project.descriptionZh
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  project._searchText = text;
  return text;
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

    const aStars = projectStars(a);
    const bStars = projectStars(b);

    if (aStars === null && bStars === null) return a.name.localeCompare(b.name);
    if (aStars === null) return 1;
    if (bStars === null) return -1;

    if (state.sort === "stars-asc") {
      return aStars - bStars || a.name.localeCompare(b.name);
    }
    return bStars - aStars || a.name.localeCompare(b.name);
  });
}

function matchesQuickValue(project, quick) {
  const tags = project.tags || [];
  const type = String(project.type || "").toLowerCase();
  if (quick === "skill") return project.skill === "Skill";
  if (quick === "mcp") return project.skill === "MCP" || tags.includes("MCP");
  if (quick === "app") return type === "app" || tags.includes("App");
  if (quick === "library") {
    return type === "library" || type === "cli" || tags.includes("Library") || tags.includes("CLI");
  }
  return true;
}

function matchesProject(project, omit = {}) {
  const query = state.query.trim().toLowerCase();
  const categoryMatch = omit.category || state.category === "All" || project.category === state.category;
  const editableMatch = omit.editable || state.editable === "All" || project.editable === state.editable;
  const tagMatch = omit.tag || !state.tag || (project.tags || []).includes(state.tag);
  const quickMatch = omit.quick || matchesQuickValue(project, state.quick);
  const queryMatch = omit.query || !query || searchable(project).includes(query);
  return categoryMatch && editableMatch && tagMatch && quickMatch && queryMatch;
}

function filteredProjects() {
  return sorted(state.projects.filter((project) => matchesProject(project)));
}

function computeFacetCounts() {
  const routeCounts = new Map(categories.map((cat) => [cat, 0]));
  const editableCounts = new Map(editableLevels.map((lvl) => [lvl, 0]));
  const quickCounts = new Map(quickLevels.map((q) => [q, 0]));
  const tagCounts = new Map();

  for (const project of state.projects) {
    if (matchesProject(project, { category: true })) {
      routeCounts.set("All", (routeCounts.get("All") || 0) + 1);
      if (routeCounts.has(project.category)) {
        routeCounts.set(project.category, (routeCounts.get(project.category) || 0) + 1);
      }
    }

    if (matchesProject(project, { editable: true })) {
      editableCounts.set("All", (editableCounts.get("All") || 0) + 1);
      if (editableCounts.has(project.editable)) {
        editableCounts.set(project.editable, (editableCounts.get(project.editable) || 0) + 1);
      }
    }

    if (matchesProject(project, { quick: true })) {
      quickCounts.set("all", (quickCounts.get("all") || 0) + 1);
      for (const q of quickLevels) {
        if (q !== "all" && matchesQuickValue(project, q)) {
          quickCounts.set(q, (quickCounts.get(q) || 0) + 1);
        }
      }
    }

    if (matchesProject(project, { tag: true })) {
      for (const tag of project.tags || []) {
        tagCounts.set(tag, (tagCounts.get(tag) || 0) + 1);
      }
    }
  }

  return { routeCounts, editableCounts, quickCounts, tagCounts };
}

function hasActiveFilters() {
  return (
    state.category !== "All" ||
    state.editable !== "All" ||
    state.tag !== "" ||
    state.quick !== "all" ||
    state.query.trim() !== ""
  );
}

function captureFocusTarget() {
  const active = document.activeElement;
  if (!active || active === document.body) return null;
  if (active.dataset.route) return { scope: nodes.routeCards, attr: "data-route", value: active.dataset.route };
  if (active.dataset.editable) return { scope: nodes.editableNav, attr: "data-editable", value: active.dataset.editable };
  if (active.dataset.quick) return { scope: nodes.quickFilters, attr: "data-quick", value: active.dataset.quick };
  if (active.dataset.tagClick) {
    const scope = nodes.tagCloud && nodes.tagCloud.contains(active) ? nodes.tagCloud : nodes.projectList;
    return { scope, attr: "data-tag-click", value: active.dataset.tagClick };
  }
  if (active.dataset.clearFilter) {
    const chips = [...(nodes.activeFilters ? nodes.activeFilters.querySelectorAll("[data-clear-filter]") : [])];
    return { kind: "clear-filter", index: chips.indexOf(active) };
  }
  return null;
}

function restoreFocusTarget(token) {
  if (!token) return;
  if (token.kind === "clear-filter") {
    const chips = [...(nodes.activeFilters ? nodes.activeFilters.querySelectorAll("[data-clear-filter]") : [])];
    const next = chips[token.index] || chips[token.index - 1] || nodes.resultCount;
    if (next && typeof next.focus === "function") next.focus({ preventScroll: true });
    return;
  }
  if (!token.scope) return;
  const escaped = typeof CSS !== "undefined" && CSS.escape ? CSS.escape(token.value) : token.value.replace(/"/g, '\\"');
  const replacement = token.scope.querySelector(`[${token.attr}="${escaped}"]`);
  if (replacement && typeof replacement.focus === "function") {
    replacement.focus({ preventScroll: true });
  }
}

function renderRouteTabs() {
  if (!nodes.routeCards) return;
  nodes.routeCards.innerHTML = categories
    .map((category) => {
      const meta = categoryMeta[category];
      const isSelected = state.category === category;
      const title = state.lang === "zh" ? meta.shortZh : meta.shortEn;
      const brief = state.lang === "zh" ? meta.briefZh : meta.briefEn;
      const isAll = category === "All";
      return `
        <button
          class="route-tab-card${isSelected ? " active" : ""}${isAll ? " is-all" : ""}"
          type="button"
          data-route="${escapeHtml(category)}"
          aria-pressed="${isSelected ? "true" : "false"}"
          style="--r-color:${meta.color};--r-bg:${meta.bg};--r-border:${meta.border}"
        >
          <div class="route-tab-top">
            <span class="route-tab-title">
              ${isAll ? "" : `<span class="route-tab-dot" aria-hidden="true"></span>`}
              <span>${escapeHtml(title)}</span>
            </span>
            <span class="route-tab-count" data-count-for="route">0</span>
          </div>
          <p class="route-tab-brief">${escapeHtml(brief)}</p>
        </button>
      `;
    })
    .join("");
}

function renderEditableSidebar() {
  if (!nodes.editableNav) return;
  nodes.editableNav.innerHTML = editableLevels
    .map((level) => {
      const info = editableMeta[level];
      const label = state.lang === "zh" ? info.zh : info.en;
      const isSelected = state.editable === level;
      return `
        <button
          class="facet-row${isSelected ? " active" : ""}"
          type="button"
          data-editable="${escapeHtml(level)}"
          aria-pressed="${isSelected ? "true" : "false"}"
        >
          <span class="facet-row-left">
            <span>${escapeHtml(label)}</span>
          </span>
          <span class="facet-count" data-count-for="editable">0</span>
        </button>
      `;
    })
    .join("");
}

function renderQuickSidebar() {
  if (!nodes.quickFilters) return;
  nodes.quickFilters.innerHTML = quickLevels
    .map((level) => {
      const info = quickMeta[level];
      const label = state.lang === "zh" ? info.zh : info.en;
      const isSelected = state.quick === level;
      return `
        <button
          class="facet-row${isSelected ? " active" : ""}"
          type="button"
          data-quick="${escapeHtml(level)}"
          aria-pressed="${isSelected ? "true" : "false"}"
        >
          <span class="facet-row-left">
            <span>${escapeHtml(label)}</span>
          </span>
          <span class="facet-count" data-count-for="quick">0</span>
        </button>
      `;
    })
    .join("");
}

function renderTagCloud() {
  if (!nodes.tagCloud) return;
  const previousScrollTop = nodes.tagCloud.scrollTop;
  const tags = allTags();
  const visible = state.showAllTags ? tags : tags.slice(0, 14);
  nodes.tagCloud.innerHTML = visible
    .map(([tag, count]) => {
      const isSelected = state.tag === tag;
      return `
        <button
          class="cloud-tag${isSelected ? " active" : ""}"
          type="button"
          data-tag-click="${escapeHtml(tag)}"
          aria-pressed="${isSelected ? "true" : "false"}"
        >
          <span>${escapeHtml(tagDisplay(tag))}</span>
          <em data-count-for="tag">${count}</em>
        </button>
      `;
    })
    .join("");
  nodes.tagCloud.scrollTop = previousScrollTop;

  if (nodes.toggleAllTags) {
    const t = translations[state.lang];
    nodes.toggleAllTags.hidden = tags.length <= 14;
    nodes.toggleAllTags.textContent = state.showAllTags ? t.collapseTags : t.showAllTags;
    nodes.toggleAllTags.setAttribute("aria-expanded", state.showAllTags ? "true" : "false");
  }
}

function syncFilterStates() {
  const { routeCounts, editableCounts, quickCounts, tagCounts } = computeFacetCounts();

  if (nodes.routeCards) {
    nodes.routeCards.querySelectorAll("button[data-route]").forEach((btn) => {
      const route = btn.dataset.route;
      const isActive = state.category === route;
      const count = routeCounts.get(route) || 0;
      btn.classList.toggle("active", isActive);
      btn.classList.toggle("is-empty", !isActive && count === 0 && route !== "All");
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
      const countEl = btn.querySelector("[data-count-for='route']");
      if (countEl) countEl.textContent = count;
    });
  }

  if (nodes.editableNav) {
    nodes.editableNav.querySelectorAll("button[data-editable]").forEach((btn) => {
      const level = btn.dataset.editable;
      const isActive = state.editable === level;
      const count = editableCounts.get(level) || 0;
      btn.classList.toggle("active", isActive);
      btn.classList.toggle("is-empty", !isActive && count === 0 && level !== "All");
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
      const countEl = btn.querySelector("[data-count-for='editable']");
      if (countEl) countEl.textContent = count;
    });
  }

  if (nodes.quickFilters) {
    nodes.quickFilters.querySelectorAll("button[data-quick]").forEach((btn) => {
      const level = btn.dataset.quick;
      const isActive = state.quick === level;
      const count = quickCounts.get(level) || 0;
      btn.classList.toggle("active", isActive);
      btn.classList.toggle("is-empty", !isActive && count === 0 && level !== "all");
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
      const countEl = btn.querySelector("[data-count-for='quick']");
      if (countEl) countEl.textContent = count;
    });
  }

  if (nodes.tagCloud) {
    nodes.tagCloud.querySelectorAll("button[data-tag-click]").forEach((btn) => {
      const tag = btn.dataset.tagClick;
      const isActive = state.tag === tag;
      const count = tagCounts.get(tag) || 0;
      btn.classList.toggle("active", isActive);
      btn.classList.toggle("is-empty", !isActive && count === 0);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
      const countEl = btn.querySelector("[data-count-for='tag']");
      if (countEl) countEl.textContent = count;
    });
  }

  const normalizedQuery = state.query.trim().toLowerCase();
  nodes.hintButtons.forEach((btn) => {
    const isActive = normalizedQuery !== "" && normalizedQuery === String(btn.dataset.hint || "").toLowerCase();
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function renderActiveFilters() {
  if (!nodes.activeFilters) return;
  const t = translations[state.lang];
  const chips = [];
  if (state.category !== "All") {
    const meta = categoryMeta[state.category];
    chips.push({
      key: "category",
      label: state.lang === "zh" ? meta.shortZh : meta.shortEn
    });
  }
  if (state.editable !== "All") {
    const info = editableMeta[state.editable];
    chips.push({
      key: "editable",
      label: state.lang === "zh" ? info.zh : info.en
    });
  }
  if (state.quick !== "all") {
    const info = quickMeta[state.quick];
    chips.push({
      key: "quick",
      label: info ? (state.lang === "zh" ? info.zh : info.en) : state.quick
    });
  }
  if (state.tag) {
    chips.push({ key: "tag", label: `#${tagDisplay(state.tag)}` });
  }
  if (state.query.trim()) {
    chips.push({ key: "query", label: `"${state.query.trim()}"` });
  }

  const hasChips = chips.length > 0;
  if (nodes.searchHints) nodes.searchHints.hidden = hasChips;
  if (nodes.activeFiltersWrap) nodes.activeFiltersWrap.hidden = !hasChips;

  nodes.activeFilters.innerHTML = chips
    .map(
      (chip) => `
        <button
          class="active-chip"
          type="button"
          data-clear-filter="${chip.key}"
          aria-label="${escapeHtml(t.removeFilterLabel(chip.label))}"
          title="${escapeHtml(chip.label)}"
        >
          <span>${escapeHtml(chip.label)}</span>
          <span aria-hidden="true">×</span>
        </button>
      `
    )
    .join("");
}

function splitRepo(name) {
  const parts = String(name || "").split("/");
  if (parts.length === 2) return { owner: parts[0], repo: parts[1] };
  return { owner: "", repo: String(name || "") };
}

function monogram(repo) {
  const clean = String(repo || "").replace(/[^a-zA-Z0-9\u4e00-\u9fff]/g, "");
  return (clean.slice(0, 2) || "AI").toUpperCase();
}

function renderProjectCard(project) {
  const t = translations[state.lang];
  const meta = categoryMeta[project.category] || categoryMeta.All;
  const routeLabel = state.lang === "zh" ? meta.shortZh : meta.shortEn;
  const editInfo = editableMeta[project.editable] || editableMeta.Unknown;
  const editLabel = state.lang === "zh" ? editInfo.zh : editInfo.en;
  const description = state.lang === "zh" ? project.descriptionZh : project.description;
  const { owner, repo } = splitRepo(project.name);
  const isHot = typeof project.stars === "number" && project.stars >= 5000;
  const url = safeHref(project.url);

  const skillBadge =
    project.skill && project.skill !== "No"
      ? `<span class="pill-badge pill-skill">${escapeHtml(project.skill)}</span>`
      : "";
  const outputBadge = project.output
    ? `<span class="pill-badge pill-neutral">${escapeHtml(project.output)}</span>`
    : "";

  const displayTags = (project.tags || []).slice(0, 4);
  const tagHtml = displayTags
    .map((tag) => {
      const isSelected = state.tag === tag;
      const active = isSelected ? " active" : "";
      return `<button class="card-tag-btn${active}" type="button" data-tag-click="${escapeHtml(tag)}" aria-pressed="${isSelected ? "true" : "false"}">${escapeHtml(tagDisplay(tag))}</button>`;
    })
    .join("");

  return `
    <article class="project-card" style="--card-accent:${meta.color};--card-accent-bg:${meta.bg}">
      <div>
        <div class="card-top">
          <div class="card-identity">
            <span class="card-avatar" aria-hidden="true">${escapeHtml(monogram(repo))}</span>
            <div class="card-titles">
              ${owner ? `<span class="card-owner">${escapeHtml(owner)}</span>` : ""}
              <h3 class="card-repo">
                <a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">
                  <span>${escapeHtml(repo)}</span>
                  <svg class="ext-icon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M7 17 17 7M7 7h10v10"/>
                  </svg>
                </a>
              </h3>
            </div>
          </div>

          <div class="card-right">
            <span class="star-badge${isHot ? " is-hot" : ""}" aria-label="GitHub stars">
              <span class="star-icon" aria-hidden="true">★</span>
              <span>${formatStars(project.stars)}</span>
            </span>
            <button class="copy-repo-btn" type="button" data-copy-repo="${escapeHtml(project.name)}" title="${escapeHtml(t.copyRepoTitle)}" aria-label="${escapeHtml(t.copyRepoTitle)}">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect x="9" y="9" width="13" height="13" rx="2"/>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
              </svg>
            </button>
          </div>
        </div>

        <p class="card-desc">${escapeHtml(description)}</p>
      </div>

      <div class="card-footer">
        <div class="card-badges">
          <span class="pill-badge pill-route">
            <span class="pill-route-dot" aria-hidden="true"></span>
            ${escapeHtml(routeLabel)}
          </span>
          <span class="pill-badge ${editInfo.cls}">${escapeHtml(editLabel)}</span>
          ${skillBadge}
          ${outputBadge}
        </div>
        ${tagHtml ? `<div class="card-tags">${tagHtml}</div>` : ""}
      </div>
    </article>
  `;
}

function renderListRow(project) {
  const meta = categoryMeta[project.category] || categoryMeta.All;
  const routeLabel = state.lang === "zh" ? meta.shortZh : meta.shortEn;
  const editInfo = editableMeta[project.editable] || editableMeta.Unknown;
  const editLabel = state.lang === "zh" ? editInfo.zh : editInfo.en;
  const description = state.lang === "zh" ? project.descriptionZh : project.description;
  const { owner, repo } = splitRepo(project.name);
  const isHot = typeof project.stars === "number" && project.stars >= 5000;
  const url = safeHref(project.url);
  const skillBadge =
    project.skill && project.skill !== "No"
      ? `<span class="pill-badge pill-skill">${escapeHtml(project.skill)}</span>`
      : "";

  return `
    <article class="list-row" style="--card-accent:${meta.color};--card-accent-bg:${meta.bg}">
      <div class="list-main">
        <div class="list-title-line">
          <a class="list-repo-link" href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer">
            ${owner ? `<span class="list-repo-owner">${escapeHtml(owner)} / </span>` : ""}${escapeHtml(repo)}
          </a>
          ${skillBadge}
        </div>
        <p class="list-desc">${escapeHtml(description)}</p>
      </div>
      <div class="list-meta">
        <span class="pill-badge pill-route">
          <span class="pill-route-dot" aria-hidden="true"></span>
          ${escapeHtml(routeLabel)}
        </span>
      </div>
      <div class="list-meta">
        <span class="pill-badge ${editInfo.cls}">${escapeHtml(editLabel)}</span>
      </div>
      <div class="list-stars">
        <span class="star-badge${isHot ? " is-hot" : ""}">
          <span class="star-icon" aria-hidden="true">★</span>
          <span>${formatStars(project.stars)}</span>
        </span>
      </div>
    </article>
  `;
}

function renderProjects() {
  const t = translations[state.lang];
  const projects = filteredProjects();
  nodes.resultCount.textContent = t.projectCount(projects.length);

  const filtering = hasActiveFilters();
  if (nodes.sidebarReset) nodes.sidebarReset.hidden = !filtering;
  if (nodes.clearSearchBtn) nodes.clearSearchBtn.hidden = !state.query;
  renderActiveFilters();

  nodes.projectList.classList.toggle("is-list", state.view === "list");

  if (!projects.length) {
    nodes.projectList.innerHTML = `
      <div class="empty-state">
        <p>${escapeHtml(t.noResults)}</p>
        <button class="primary-btn" type="button" data-reset-empty>${escapeHtml(t.resetBtnFull)}</button>
      </div>
    `;
    return;
  }

  nodes.projectList.innerHTML =
    state.view === "list"
      ? projects.map(renderListRow).join("")
      : projects.map(renderProjectCard).join("");
}

function renderUpdatedAt() {
  if (!nodes.starsUpdated) return;
  const t = translations[state.lang];
  if (state.updatedAt) {
    nodes.starsUpdated.textContent = t.updatedPrefix(String(state.updatedAt).slice(0, 10));
  } else {
    nodes.starsUpdated.textContent = t.heroBadgeShort;
  }
}

function renderStaticText() {
  const t = translations[state.lang];
  document.documentElement.lang = state.lang === "zh" ? "zh-CN" : "en";
  document.title = t.pageTitle;
  nodes.i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    const value = t[key];
    if (typeof value === "string") node.textContent = value;
  });
  nodes.searchInput.placeholder = t.searchPlaceholder;
  if (nodes.themeToggle) {
    nodes.themeToggle.setAttribute("aria-label", t.themeToggleLabel);
    nodes.themeToggle.title = t.themeToggleLabel;
  }
  if (nodes.clearSearchBtn) {
    nodes.clearSearchBtn.setAttribute("aria-label", t.clearSearchLabel);
  }
  if (nodes.sortSelect) {
    nodes.sortSelect.setAttribute("aria-label", t.sortAriaLabel);
  }
  nodes.languageButtons.forEach((btn) => {
    const isActive = btn.dataset.lang === state.lang;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
  nodes.viewButtons.forEach((btn) => {
    const isActive = btn.dataset.view === state.view;
    const label = btn.dataset.view === "list" ? t.listViewLabel : t.gridViewLabel;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    btn.setAttribute("aria-label", label);
    btn.title = label;
  });
  renderUpdatedAt();
}

function updateDirectory() {
  syncFilterStates();
  renderProjects();
}

function render() {
  const focusToken = captureFocusTarget();
  renderStaticText();
  renderRouteTabs();
  renderEditableSidebar();
  renderQuickSidebar();
  renderTagCloud();
  syncFilterStates();
  renderProjects();
  restoreFocusTarget(focusToken);
}

function resetAllFilters() {
  state.category = "All";
  state.editable = "All";
  state.tag = "";
  state.quick = "all";
  state.query = "";
  nodes.searchInput.value = "";
  updateDirectory();
}

function applyStarCache(cache) {
  const stars = cache && cache.stars && typeof cache.stars === "object" ? cache.stars : {};
  state.updatedAt = cache && cache.updatedAt ? cache.updatedAt : null;
  state.projects = state.projects.map((project) => ({
    ...project,
    stars: Number.isFinite(stars[project.repo]) ? stars[project.repo] : null
  }));
  renderRepoStars(stars[REPO]);
  renderUpdatedAt();
  renderProjects();
}

function loadStarCache() {
  fetch(STAR_CACHE_URL, { cache: "no-store" })
    .then((response) => {
      if (!response.ok) throw new Error("Could not load star cache");
      return response.json();
    })
    .then(applyStarCache)
    .catch(() => renderProjects());
}

// Event Listeners
if (nodes.routeCards) {
  nodes.routeCards.addEventListener("click", (event) => {
    const card = event.target.closest("button[data-route]");
    if (!card) return;
    const route = card.dataset.route;
    state.category = route === "All" || state.category === route ? "All" : route;
    updateDirectory();
  });
}

if (nodes.editableNav) {
  nodes.editableNav.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-editable]");
    if (!btn) return;
    const value = btn.dataset.editable;
    state.editable = state.editable === value && value !== "All" ? "All" : value;
    updateDirectory();
  });
}

if (nodes.quickFilters) {
  nodes.quickFilters.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-quick]");
    if (!btn) return;
    const value = btn.dataset.quick;
    state.quick = state.quick === value && value !== "all" ? "all" : value;
    updateDirectory();
  });
}

if (nodes.tagCloud) {
  nodes.tagCloud.addEventListener("click", (event) => {
    const btn = event.target.closest("button[data-tag-click]");
    if (!btn) return;
    const tag = btn.dataset.tagClick;
    state.tag = state.tag === tag ? "" : tag;
    updateDirectory();
  });
}

if (nodes.toggleAllTags) {
  nodes.toggleAllTags.addEventListener("click", () => {
    state.showAllTags = !state.showAllTags;
    renderTagCloud();
    syncFilterStates();
  });
}

nodes.hintButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const hint = btn.dataset.hint;
    state.query = state.query.trim().toLowerCase() === String(hint || "").toLowerCase() ? "" : hint;
    nodes.searchInput.value = state.query;
    updateDirectory();
  });
});

nodes.searchInput.addEventListener("input", (event) => {
  state.query = event.target.value;
  updateDirectory();
});

if (nodes.clearSearchBtn) {
  nodes.clearSearchBtn.addEventListener("click", () => {
    state.query = "";
    nodes.searchInput.value = "";
    nodes.searchInput.focus({ preventScroll: true });
    updateDirectory();
  });
}

nodes.sortSelect.addEventListener("change", (event) => {
  state.sort = event.target.value;
  renderProjects();
});

nodes.viewButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    state.view = btn.dataset.view === "list" ? "list" : "grid";
    writeStorage(STORAGE_VIEW_KEY, state.view);
    renderStaticText();
    renderProjects();
  });
});

nodes.languageButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    state.lang = btn.dataset.lang === "en" ? "en" : "zh";
    writeStorage(STORAGE_LANG_KEY, state.lang);
    render();
  });
});

if (nodes.sidebarReset) {
  nodes.sidebarReset.addEventListener("click", () => {
    resetAllFilters();
    if (nodes.resultCount) nodes.resultCount.focus({ preventScroll: true });
  });
}

if (nodes.toolbarReset) {
  nodes.toolbarReset.addEventListener("click", () => {
    resetAllFilters();
    if (nodes.resultCount) nodes.resultCount.focus({ preventScroll: true });
  });
}

if (nodes.activeFilters) {
  nodes.activeFilters.addEventListener("click", (event) => {
    const chip = event.target.closest("button[data-clear-filter]");
    if (!chip) return;
    const focusToken = captureFocusTarget();
    const key = chip.dataset.clearFilter;
    if (key === "category") state.category = "All";
    if (key === "editable") state.editable = "All";
    if (key === "quick") state.quick = "all";
    if (key === "tag") state.tag = "";
    if (key === "query") {
      state.query = "";
      nodes.searchInput.value = "";
    }
    updateDirectory();
    restoreFocusTarget(focusToken);
  });
}

nodes.projectList.addEventListener("click", async (event) => {
  const tagBtn = event.target.closest("button[data-tag-click]");
  if (tagBtn) {
    const tag = tagBtn.dataset.tagClick;
    state.tag = state.tag === tag ? "" : tag;
    updateDirectory();
    return;
  }

  const copyBtn = event.target.closest("button[data-copy-repo]");
  if (copyBtn) {
    const repoName = copyBtn.dataset.copyRepo;
    try {
      if (!navigator.clipboard || !navigator.clipboard.writeText) {
        throw new Error("Clipboard unavailable");
      }
      await navigator.clipboard.writeText(repoName);
      showToast(translations[state.lang].copiedRepo(repoName));
    } catch {
      showToast(translations[state.lang].copyFailed);
    }
    return;
  }

  const resetEmptyBtn = event.target.closest("button[data-reset-empty]");
  if (resetEmptyBtn) {
    resetAllFilters();
    if (nodes.resultCount) nodes.resultCount.focus({ preventScroll: true });
  }
});

if (nodes.themeToggle) {
  nodes.themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    writeStorage(STORAGE_THEME_KEY, next);
  });
}

document.addEventListener("keydown", (event) => {
  if (event.metaKey || event.ctrlKey || event.altKey || event.isComposing) return;
  const active = document.activeElement;
  if (
    event.key === "/" &&
    active !== nodes.searchInput &&
    !["INPUT", "TEXTAREA", "SELECT"].includes(active?.tagName) &&
    !active?.isContentEditable
  ) {
    event.preventDefault();
    nodes.searchInput.focus();
  }
});

function applyProjects(projects) {
  state.projects = projects.map((project) => ({ ...project, stars: null }));
  nodes.statProjects.textContent = projects.length;
  if (nodes.statSkills) {
    nodes.statSkills.textContent = projects.filter((p) => p.skill && p.skill !== "No").length;
  }
  if (nodes.statEditable) {
    nodes.statEditable.textContent = projects.filter((p) => p.editable === "Editable").length;
  }
  render();
  loadStarCache();
}

function showLoadError() {
  nodes.projectList.innerHTML = `
    <div class="empty-state">
      <p>${escapeHtml(translations[state.lang].loadFailed)}</p>
    </div>
  `;
}

if (window.AWESOME_AI_PPT_PROJECTS) {
  applyProjects(window.AWESOME_AI_PPT_PROJECTS);
} else {
  fetch("projects.json")
    .then((response) => response.json())
    .then(applyProjects)
    .catch(showLoadError);
}
