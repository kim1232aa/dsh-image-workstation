window.__ModuleLoader__.load({
	id: "dsh-image-workstation",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/client.js
var client_exports = {};
__export(client_exports, {
  COLUMNS: () => COLUMNS,
  CTA: () => CTA,
  CTA_RPC_CHANNEL: () => CTA_RPC_CHANNEL,
  CTA_RPC_GENERATE: () => CTA_RPC_GENERATE,
  SKILL_ENTRIES: () => SKILL_ENTRIES,
  TOP_TABS: () => TOP_TABS,
  apply: () => apply,
  defaultStudioState: () => defaultStudioState,
  inject: () => inject,
  name: () => name,
  studioTree: () => studioTree
});
module.exports = __toCommonJS(client_exports);

// src/ui/labels.js
var TOP_TABS = Object.freeze([
  "\u666E\u901A\u751F\u56FE",
  "\u89C6\u9891\u751F\u6210",
  "\u65E0\u9650\u753B\u5E03",
  "\u753B\u5ECA",
  "\u7535\u5546\u6A21\u5F0F"
]);
var COLUMNS = Object.freeze({
  history: "\u5386\u53F2\u8BB0\u5F55",
  studio: "\u751F\u56FE\u533A",
  chat: "AI \u5BF9\u8BDD"
});
var MODE_TABS = Object.freeze(["\u6587\u751F\u56FE", "\u56FE\u751F\u56FE"]);
var RATIOS = Object.freeze([
  "\u81EA\u52A8",
  "1:1",
  "3:4",
  "4:3",
  "9:16",
  "16:9",
  "2:3",
  "3:2",
  "21:9"
]);
var CLARITY = Object.freeze(["\u81EA\u52A8", "1K", "2K", "4K"]);
var COUNTS = Object.freeze([1, 2, 3, 4]);
var PARAM_LABELS = Object.freeze({
  ratio: "\u6BD4\u4F8B",
  clarity: "\u6E05\u6670\u5EA6",
  count: "\u5F20\u6570",
  detail: "\u7EC6\u8282",
  model: "\u6A21\u578B",
  compare: "\u591A\u6A21\u578B\u5BF9\u6BD4"
});
var PROMPT_FIELDS = Object.freeze({
  prompt: "\u63D0\u793A\u8BCD",
  negative: "\u8D1F\u9762\u8BCD",
  clearNegative: "\u6E05\u9664\u8D1F\u9762\u8BCD"
});
var PROMPT_ACTIONS = Object.freeze({
  enhance: "\u63D0\u793A\u8BCD\u589E\u5F3A",
  templates: "\u6A21\u677F\u5E93",
  skill: "\u521B\u4F5C Skill",
  plan: "\u60F3\u65B9\u6848",
  generate: "\u51FA\u56FE",
  replan: "\u91CD\u65B0\u60F3\u4E00\u7248",
  acceptPlan: "\u5C31\u8FD9\u6837\u51FA\u56FE"
});
var CTA = "\u5F00\u59CB\u751F\u6210";
var COMPARE = "\u591A\u6A21\u578B\u5BF9\u6BD4";
var SKILL_ENTRIES = Object.freeze([
  "\u7535\u5F71\u4E09\u8054",
  "\u4E09\u8054\u5C01\u9762",
  "\u7535\u5F71\u6D77\u62A5",
  "\u4EBA\u50CF",
  "\u6444\u5F71",
  "\u89D2\u8272"
]);
var PORTRAIT_SUB = Object.freeze(["\u5347\u7EA7\u5DF2\u6709\u7167\u7247", "\u539F\u521B\u4EBA\u50CF"]);
var HISTORY_ACTIONS = Object.freeze({
  clear: "\u6E05\u7A7A",
  restore: "\u6062\u590D",
  remove: "\u5220\u9664"
});
var RESULT_ACTIONS = Object.freeze([
  "\u53D6\u6D88",
  "\u91CD\u8BD5",
  "\u4E0B\u8F7D",
  "\u52A0\u753B\u5ECA",
  "\u52A0\u5BF9\u8BDD",
  "\u5F53\u53C2\u8003\u56FE",
  "\u91CD\u65B0\u751F\u6210",
  "\u590D\u5236\u63D0\u793A\u8BCD",
  "\u62FF\u53BB\u505A\u89C6\u9891"
]);
var EMPTY = Object.freeze({
  inspiration: "\u7075\u611F\u6848\u4F8B",
  shuffle: "\u968F\u673A"
});
var CHROME = Object.freeze({
  settings: "\u8BBE\u7F6E",
  expandChat: "AI \u5BF9\u8BDD",
  connected: "\u5DF2\u8FDE\u63A5",
  disconnected: "\u672A\u8FDE\u63A5"
});
var VIDEO_MODE_TABS = Object.freeze(["\u6587\u751F\u89C6\u9891", "\u56FE\u751F\u89C6\u9891"]);
var VIDEO_FRAMES = Object.freeze({
  first: "\u9996\u5E27\u56FE",
  last: "\u5C3E\u5E27\u56FE"
});
var VIDEO_REFS = Object.freeze({
  image: "\u53C2\u8003\u56FE",
  video: "\u53C2\u8003\u89C6\u9891",
  audio: "\u53C2\u8003\u97F3\u9891"
});
var VIDEO_PARAMS = Object.freeze({
  duration: "\u65F6\u957F",
  clarity: "\u6E05\u6670\u5EA6",
  ratio: "\u6BD4\u4F8B",
  model: "\u6A21\u578B",
  compare: "\u591A\u6A21\u578B\u5BF9\u6BD4"
});
var VIDEO_CLARITY_TIERS = Object.freeze(["\u6807\u51C6", "\u9AD8\u6E05", "\u8D85\u6E05"]);
var VIDEO_RESULT_ACTIONS = Object.freeze([
  "\u64AD\u653E",
  "\u4E0B\u8F7D",
  "\u52A0\u753B\u5ECA",
  "\u62BD\u5E27",
  "\u91CD\u65B0\u751F\u6210",
  "\u53D6\u6D88",
  "\u91CD\u8BD5"
]);
var VIDEO_CROSS = Object.freeze({
  takeToVideo: "\u62FF\u53BB\u505A\u89C6\u9891"
});
var CANVAS_NODES = Object.freeze({
  image: "\u56FE\u7247\u8282\u70B9",
  text: "\u6587\u672C\u8282\u70B9",
  genConfig: "\u751F\u6210\u914D\u7F6E\u8282\u70B9",
  video: "\u89C6\u9891\u8282\u70B9"
});
var CANVAS_NODE_TOOLS = Object.freeze({
  annotate: "\u6807\u6CE8",
  removeBg: "\u79FB\u9664\u80CC\u666F",
  setModel: "\u6307\u5B9A\u6A21\u578B"
});
var CANVAS_CHROME = Object.freeze({
  fitAll: "\u9002\u5E94\u5168\u90E8\u5185\u5BB9",
  send: "\u53D1\u9001",
  addToCanvas: "\u52A0\u5165\u753B\u5E03",
  newProject: "\u65B0\u5EFA",
  rename: "\u91CD\u547D\u540D"
});
var GALLERY_VIEWS = Object.freeze({
  waterfall: "\u7011\u5E03\u6D41",
  grid: "\u89C4\u6574\u7F51\u683C"
});
var GALLERY_SORT = Object.freeze({
  newest: "\u6700\u65B0",
  oldest: "\u6700\u65E9"
});
var GALLERY_FILTERS = Object.freeze({
  mode: "\u6A21\u5F0F",
  model: "\u6A21\u578B",
  ratio: "\u6BD4\u4F8B",
  tag: "\u6807\u7B7E"
});
var GALLERY_TAG_ACTIONS = Object.freeze({
  create: "\u65B0\u5EFA",
  edit: "\u6539",
  remove: "\u5220",
  batchTag: "\u6253\u6807\u7B7E",
  batchDownload: "\u6279\u91CF\u4E0B\u8F7D"
});
var GALLERY_ACTIONS = Object.freeze([
  "\u52A0\u753B\u5ECA",
  "\u5F53\u53C2\u8003\u56FE",
  "\u52A0\u5BF9\u8BDD",
  "\u62FF\u53BB\u505A\u89C6\u9891",
  "\u52A0\u5165\u753B\u5E03",
  "\u4E0B\u8F7D"
]);
var ECOM_UPLOAD = Object.freeze({
  product: "\u5546\u54C1\u4E3B\u56FE",
  subject: "\u4E3B\u4F53",
  packaging: "\u5305\u88C5",
  detail: "\u7EC6\u8282",
  styleRef: "\u98CE\u683C\u53C2\u8003\u56FE"
});
var ECOM_FORM = Object.freeze({
  name: "\u5546\u54C1\u540D\u79F0",
  params: "\u53C2\u6570\u4FE1\u606F",
  aiWrite: "AI \u5E2E\u5199",
  locale: "\u6587\u6848\u8BED\u8A00"
});
var ECOM_PURPOSES = Object.freeze([
  "\u4E3B\u56FE",
  "\u5356\u70B9\u56FE",
  "\u573A\u666F\u56FE",
  "\u7EC6\u8282\u56FE",
  "\u89C4\u683C\u56FE",
  "\u4F7F\u7528\u56FE"
]);
var ECOM_FLOW = Object.freeze({
  planPreview: "\u5957\u56FE\u9884\u89C8",
  confirmBatch: "\u786E\u8BA4\u6279\u91CF\u751F\u6210",
  exportList: "\u5BFC\u51FA\u6E05\u5355"
});
var ECOM_RESULT_ACTIONS = Object.freeze([
  "\u91CD\u65B0\u751F\u6210",
  "\u4E0B\u8F7D",
  "\u52A0\u753B\u5ECA",
  "\u52A0\u5BF9\u8BDD"
]);

// src/ui/studio-stub.js
var defaultStudioState = () => ({
  topTab: TOP_TABS[0],
  chatCollapsed: true,
  paneWidths: { history: 240, studio: null, chat: 320 },
  mode: MODE_TABS[0],
  prompt: "",
  negativePrompt: "",
  // skill 预填可见可删；空也可出图
  ratio: RATIOS[0],
  clarity: CLARITY[0],
  count: COUNTS[0],
  detail: "\u81EA\u52A8",
  modelId: "",
  refImages: [],
  // 图生图参考
  skillId: null,
  // null = 普通生图，不挡 CTA
  skillPlan: null,
  selfCheck: null,
  // scores display-only — never disable CTA
  task: null
});
var studioTree = Object.freeze({
  page: "\u666E\u901A\u751F\u56FE",
  columns: [
    {
      id: "history",
      label: COLUMNS.history,
      children: ["FilterBar", "HistoryList", "HistoryActions"]
    },
    {
      id: "studio",
      label: COLUMNS.studio,
      children: [
        { id: "modeTabs", labels: MODE_TABS },
        {
          id: "promptBlock",
          fields: [
            { key: "prompt", label: PROMPT_FIELDS.prompt, required: false },
            {
              key: "negativePrompt",
              label: PROMPT_FIELDS.negative,
              clearLabel: PROMPT_FIELDS.clearNegative,
              visible: true,
              deletable: true
            }
          ],
          actions: [
            PROMPT_ACTIONS.enhance,
            PROMPT_ACTIONS.templates,
            PROMPT_ACTIONS.skill
          ]
        },
        { id: "skillEntries", labels: SKILL_ENTRIES, optional: true },
        {
          id: "paramRow",
          fields: [
            { key: "ratio", label: PARAM_LABELS.ratio, options: RATIOS, userOverridable: true },
            { key: "clarity", label: PARAM_LABELS.clarity, options: CLARITY },
            { key: "count", label: PARAM_LABELS.count, options: COUNTS },
            { key: "detail", label: PARAM_LABELS.detail },
            { key: "model", label: PARAM_LABELS.model }
          ]
        },
        {
          id: "cta",
          label: CTA,
          requiresSkill: false,
          disabledByScore: false
        },
        { id: "resultActions", labels: RESULT_ACTIONS },
        {
          id: "empty",
          labels: [EMPTY.inspiration, EMPTY.shuffle]
        }
      ]
    },
    {
      id: "chat",
      label: COLUMNS.chat,
      defaultCollapsed: true
    }
  ]
});

// src/client/sidebar-entry.js
var ENTRY_ROOT = "[data-dsh-ws-sidebar-root]";
var ENTRY_TABS = "[data-dsh-ws-session-tabs]";
var TAB_NEW = "new-session";
var TAB_STUDIO = "studio";
var NEW_ICON = '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" aria-hidden="true"><path d="M8 3v10M3 8h10"/></svg>';
var STUDIO_ICON = '<svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="2" y="2.5" width="12" height="11" rx="1.5"/><circle cx="5.6" cy="5.8" r="1"/><path d="M2.5 12.5l3.6-3.4 2.4 2.2 3-3 2 2.4"/></svg>';
function sidebarColumn() {
  return document.querySelector('[data-pane="sidebar"]') || document.querySelector('[class*="sidebarCol"]') || void 0;
}
function sidebarRoot() {
  const column = sidebarColumn();
  if (!column) return void 0;
  const logoOwner = column.querySelector('[class*="logoRow"]')?.parentElement;
  return logoOwner || column.firstElementChild || void 0;
}
function newSessionButton(root) {
  return root.querySelector('button[data-dsh-part="new-session"]') || root.querySelector('button[class*="newSession"]') || Array.from(root.children).find((c) => c instanceof HTMLButtonElement);
}
function makeTab(id, label, tooltip, icon, onClick) {
  const tab = document.createElement("button");
  tab.type = "button";
  tab.dataset.dshWsTab = id;
  tab.setAttribute("role", "tab");
  tab.setAttribute("aria-label", label);
  tab.setAttribute("title", tooltip);
  tab.style.cssText = "display:inline-flex;align-items:center;gap:6px;padding:6px 10px;border:0;background:transparent;cursor:pointer;font:inherit;color:inherit;";
  tab.innerHTML = `<span aria-hidden="true">${icon}</span><span>${label}</span>`;
  tab.addEventListener("click", onClick);
  return tab;
}
function mountSidebarEntry(opts) {
  const labels = {
    newSession: opts.labels?.newSession || "\u65B0\u4F1A\u8BDD",
    studio: opts.labels?.studio || "\u751F\u56FE"
  };
  let disposed = false;
  let observer;
  let hiddenButton;
  let tabsEl;
  const place = () => {
    if (disposed) return;
    const root = sidebarRoot();
    if (!root) return;
    root.dataset.dshWsSidebarRoot = "";
    const button = newSessionButton(root);
    if (!button) return;
    const existing = root.querySelector(ENTRY_TABS);
    if (existing && existing.parentElement === button.parentElement) {
      tabsEl = existing;
      hiddenButton = button;
      button.style.display = "none";
      button.setAttribute("aria-hidden", "true");
      button.tabIndex = -1;
      return;
    }
    existing?.remove();
    const tabs = document.createElement("div");
    tabs.dataset.dshWsSessionTabs = "";
    tabs.setAttribute("role", "tablist");
    tabs.setAttribute("aria-label", labels.studio);
    tabs.style.cssText = "display:flex;gap:2px;width:100%;";
    const setSelected = (id) => {
      for (const el of tabs.querySelectorAll("[data-dsh-ws-tab]")) {
        const on = el.dataset.dshWsTab === id;
        el.setAttribute("aria-selected", on ? "true" : "false");
        el.style.fontWeight = on ? "600" : "400";
      }
    };
    const newTab = makeTab(TAB_NEW, labels.newSession, labels.newSession, NEW_ICON, () => {
      opts.onNewSession();
      setSelected(TAB_NEW);
    });
    const studioTab = makeTab(TAB_STUDIO, labels.studio, labels.studio, STUDIO_ICON, () => {
      opts.onStudio();
      setSelected(TAB_STUDIO);
    });
    tabs.append(newTab, studioTab);
    button.parentElement?.insertBefore(tabs, button);
    button.style.display = "none";
    button.setAttribute("aria-hidden", "true");
    button.tabIndex = -1;
    hiddenButton = button;
    tabsEl = tabs;
    setSelected(TAB_NEW);
  };
  place();
  observer = new MutationObserver(() => place());
  observer.observe(document.documentElement, { childList: true, subtree: true });
  return () => {
    disposed = true;
    observer?.disconnect();
    tabsEl?.remove();
    if (hiddenButton) {
      hiddenButton.style.removeProperty("display");
      hiddenButton.removeAttribute("aria-hidden");
      hiddenButton.removeAttribute("tabindex");
    }
    const root = document.querySelector(ENTRY_ROOT);
    if (root) delete root.dataset.dshWsSidebarRoot;
  };
}

// src/client/studio-host.js
function inspireFallbackSvg(seedIdx = 0) {
  const palettes = [
    ["#141820", "#1a222e", "#2a3340"],
    ["#161a1c", "#1e2428", "#3a4048"],
    ["#121618", "#1a1e22", "#282c32"],
    ["#18141a", "#221c24", "#322830"],
    ["#141816", "#1a201c", "#2a322c"],
    ["#16141c", "#1c1824", "#2a2434"],
    ["#1a1612", "#242018", "#342c20"],
    ["#12161c", "#182028", "#243040"]
  ];
  const [c1, c2, c3] = palettes[seedIdx % palettes.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${c1}"/><stop offset="55%" stop-color="${c2}"/><stop offset="100%" stop-color="${c3}"/></linearGradient><filter id="n"><feTurbulence type="fractalNoise" baseFrequency=".65" numOctaves="3" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="table" tableValues="0 .12"/></feComponentTransfer></filter></defs><rect width="300" height="300" fill="url(#g)"/><rect width="300" height="300" filter="url(#n)"/><rect x="0" y="180" width="300" height="120" fill="${c1}" opacity=".35"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
var DETAIL_OPTS = Object.freeze(["\u81EA\u52A8", "\u6807\u51C6", "\u9AD8\u6E05"]);
var HIST_THUMB = 88;
var STAGE_LABEL = "\u751F\u6210\u7ED3\u679C";
var STAGE_EMPTY_HINT = "\u751F\u6210\u540E\u663E\u793A\u5728\u8FD9\u91CC";
var INSPIRE_EMPTY_HINT = "\u6682\u65E0\u7075\u611F";
var HISTORY_EMPTY_HINT = "\u6682\u65E0\u8BB0\u5F55";
var DEFAULT_MODEL = "gpt-image-2";
var ACCENT = "#5b8def";
var PANE_WIDTHS_KEY = "dsh-ws-pane-widths";
var MODE_TXT = MODE_TABS[0];
var MODE_IMG = MODE_TABS[1];
var DEFAULT_PANE_WIDTHS = Object.freeze({ history: 264, studio: null, chat: 318 });
var css = {
  mode: (on) => `padding:4px 12px;border:1px solid ${on ? "#3a4558" : "#2a3140"};border-radius:999px;background:${on ? "#1c2333" : "transparent"};color:${on ? "#fff" : "#9aa3b2"};cursor:pointer;font:inherit;font-size:12px;`,
  field: "padding:5px 8px;border-radius:7px;border:1px solid #2a3140;background:#10141c;color:inherit;font:inherit;",
  select: "padding:4px 8px;border-radius:6px;border:1px solid #2a3140;background:#10141c;color:#c5cad3;font:inherit;font-size:12px;min-height:28px;",
  chip: (on) => `padding:4px 10px;border:1px solid ${on ? "#3a4558" : "#2a3140"};border-radius:999px;background:${on ? "#1c2333" : "transparent"};color:${on ? "#fff" : "#9aa3b2"};cursor:pointer;font:inherit;font-size:12px;line-height:1.2;`,
  histAction: "padding:2px 8px;border:1px solid #2a3140;border-radius:6px;background:transparent;color:#c5cad3;cursor:pointer;font:inherit;font-size:11px;",
  /** 出图台 dock 内区块 — 借鉴形态，自写组件 */
  dockBlock: "display:flex;flex-direction:column;gap:6px;padding:8px 10px;background:#12161f;border:1px solid #1f2430;border-radius:10px;flex:none;",
  paramLabel: "font-size:11px;font-weight:600;color:#9aa3b2;white-space:nowrap;",
  /** 实心白主 CTA — 始终可点 */
  cta: `width:100%;min-height:40px;padding:9px 14px;border:0;border-radius:9px;background:#ffffff;color:#0b0d10;cursor:pointer;font:inherit;font-weight:700;font-size:14px;letter-spacing:.02em;display:inline-flex;align-items:center;justify-content:center;box-shadow:0 1px 0 rgba(255,255,255,.2), 0 4px 14px rgba(0,0,0,.35);`
};
var HOST_STYLES = `
[data-dsh-ws-studio-host] *,
[data-dsh-ws-studio-host] *::before,
[data-dsh-ws-studio-host] *::after { box-sizing: border-box; }
[data-dsh-ws-studio-host] [data-ws-history-item] {
  display:flex; gap:8px; align-items:flex-start;
  padding:5px; border:1px solid #1a1f2a; border-radius:9px;
  background:#12161f; flex:none; font:inherit; color:inherit; text-align:left;
  transition: border-color .12s ease;
}
[data-dsh-ws-studio-host] [data-ws-history-item]:hover { border-color:#2a3140; }
[data-dsh-ws-studio-host] [data-ws-history-item][data-active] { border-color:${ACCENT}; }
[data-dsh-ws-studio-host] [data-ws-history-ghost] {
  display:flex; gap:8px; align-items:center;
  padding:5px; border:1px solid #1a1f2a; border-radius:9px;
  background:#12161f; opacity:.92; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-history-ghost] img,
[data-dsh-ws-studio-host] [data-ws-history-item] img {
  width:${HIST_THUMB}px; height:${HIST_THUMB}px; border-radius:7px; object-fit:cover; flex:none; background:#0b0d10;
}
[data-dsh-ws-studio-host] [data-ws-history-item] .ws-hist-meta {
  flex:1; min-width:0; display:flex; flex-direction:column; gap:3px;
}
[data-dsh-ws-studio-host] [data-ws-history-ghost] .ws-hist-line,
[data-dsh-ws-studio-host] [data-ws-history-item] .ws-hist-line {
  min-width:0; font-size:11px; line-height:1.35; color:#c5cad3;
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}
[data-dsh-ws-studio-host] [data-ws-history-item] .ws-hist-model {
  font-size:10.5px; color:#6b7280; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}
[data-dsh-ws-studio-host] [data-ws-history-item] .ws-hist-actions {
  display:flex; gap:4px; flex-wrap:wrap; margin-top:2px;
}
[data-dsh-ws-studio-host] [data-ws-inspire-card] {
  position:relative; display:flex; flex-direction:column; justify-content:flex-end;
  aspect-ratio:1/1; min-height:0; padding:0; overflow:hidden;
  border:1px solid #1f2430; border-radius:10px; background:#12161f;
  color:#c5cad3; cursor:pointer; font:inherit; text-align:left;
  transition: transform .15s ease, border-color .15s ease, box-shadow .15s ease;
}
[data-dsh-ws-studio-host] [data-ws-inspire-card]:hover {
  border-color:${ACCENT}; transform:translateY(-2px);
  box-shadow:0 6px 18px rgba(0,0,0,.28);
}
[data-dsh-ws-studio-host] [data-ws-inspire-card] img {
  position:absolute; inset:0; width:100%; height:100%; object-fit:cover; background:#12161f;
}
[data-dsh-ws-studio-host] [data-ws-param-row] {
  display:flex; flex-direction:column; gap:8px;
}
[data-dsh-ws-studio-host] [data-ws-param-group] {
  display:flex; flex-direction:column; gap:4px; min-width:0;
}
[data-dsh-ws-studio-host] [data-ws-chips] {
  display:flex; flex-wrap:wrap; gap:5px; align-items:center;
}
[data-dsh-ws-studio-host] [data-ws-chips] [data-ws-param][data-value] {
  padding:4px 10px; border:1px solid #2a3140; border-radius:999px;
  background:transparent; color:#9aa3b2; cursor:pointer; font:inherit; font-size:12px; line-height:1.2;
}
[data-dsh-ws-studio-host] [data-ws-chips] [data-ws-param][data-value][aria-current="true"] {
  background:#1c2333; color:#fff; border-color:#3a4558;
}
[data-dsh-ws-studio-host] [data-ws-model-row] {
  display:flex; align-items:center; gap:8px; flex-wrap:wrap; min-width:0;
}
[data-dsh-ws-studio-host] [data-ws-model-row] [data-ws-param="model"] {
  flex:0 1 10rem; min-width:5rem; width:10rem;
}
[data-dsh-ws-studio-host] [data-ws-conn-status] {
  padding:0 10px; height:26px; border:1px solid #2a3140; border-radius:999px;
  background:#12161f; color:#9aa3b2; font:inherit; font-size:12px;
  display:inline-flex; align-items:center; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-stage] {
  flex:1 1 auto; min-height:0; display:flex; flex-direction:column; gap:8px;
  margin:0; padding:10px 12px; overflow:hidden;
  background:#0b0d10; border-bottom:1px solid #1a1f2a;
}
[data-dsh-ws-studio-host] [data-ws-stage-head] {
  display:flex; align-items:baseline; gap:10px; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-stage-head] strong {
  font-size:13px; font-weight:650; color:#e8eaed;
}
[data-dsh-ws-studio-host] [data-ws-stage-empty-hint] {
  font-size:12px; color:#6b7280; font-weight:400;
}
[data-dsh-ws-studio-host] [data-ws-stage-empty-hint][hidden] { display:none !important; }
[data-dsh-ws-studio-host] [data-ws-stage-samples] {
  display:grid; grid-template-columns:1fr 1fr 1fr; grid-template-rows:minmax(0,1.7fr) minmax(0,1fr);
  gap:8px; flex:1; min-height:0; align-content:stretch;
}
[data-dsh-ws-studio-host] [data-ws-stage-samples] [data-ws-stage-tile]:first-child {
  grid-column:1 / -1;
}
[data-dsh-ws-studio-host] [data-ws-stage-samples][hidden],
[data-dsh-ws-studio-host] [data-ws-results][hidden] { display:none !important; }
[data-dsh-ws-studio-host] [data-ws-results] {
  display:flex; flex-wrap:wrap; gap:10px; align-content:start; flex:1; min-height:0; overflow:auto;
}
[data-dsh-ws-studio-host] [data-ws-stage-tile] {
  position:relative; min-height:0; height:100%; border-radius:10px; overflow:hidden;
  border:1px solid #1f2430; background:#12161f; cursor:pointer; padding:0; font:inherit; color:inherit;
}
[data-dsh-ws-studio-host] [data-ws-stage-tile] img {
  position:absolute; inset:0; width:100%; height:100%; object-fit:cover;
}
[data-dsh-ws-studio-host] [data-ws-stage-tile] .ws-stage-cap {
  position:absolute; inset:auto 0 0 0; z-index:1; padding:14px 8px 7px;
  background:linear-gradient(transparent, rgba(0,0,0,.72));
  color:#fff; font-size:11px; line-height:1.3; text-align:left;
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}
[data-dsh-ws-studio-host] [data-ws-neg-details] { margin:0; }
[data-dsh-ws-studio-host] [data-ws-neg-details] > summary {
  cursor:pointer; list-style:none; display:flex; align-items:center; gap:6px;
  color:#9aa3b2; font-size:11px; font-weight:600; user-select:none; line-height:1.4;
  width:fit-content; border-bottom:1px solid transparent;
}
[data-dsh-ws-studio-host] [data-ws-neg-details] > summary:hover {
  color:#c5cad3; border-bottom-color:#3a4558;
}
[data-dsh-ws-studio-host] [data-ws-neg-details] > summary::-webkit-details-marker { display:none; }
[data-dsh-ws-studio-host] [data-ws-neg-chev] {
  display:inline-block; font-size:10px; opacity:.75; transition:transform .12s ease; line-height:1;
}
[data-dsh-ws-studio-host] [data-ws-neg-details][open] > summary [data-ws-neg-chev] { transform:rotate(90deg); }
[data-dsh-ws-studio-host] [data-ws-neg-details]:not([open]) { margin:0; }
[data-dsh-ws-studio-host] [data-ws-neg-details]:not([open]) [data-ws-clear-negative] { display:none !important; }
[data-dsh-ws-studio-host] [data-ws-neg-details][open] > summary { margin-bottom:6px; width:100%; border-bottom-color:transparent; }
[data-dsh-ws-studio-host] [data-ws-cta]:hover { filter:brightness(1.06); }
[data-dsh-ws-studio-host] [data-ws-cta]:active { filter:brightness(.96); }
[data-dsh-ws-studio-host] [data-ws-status]:empty { display:none; }
[data-dsh-ws-studio-host] [data-ws-param="model"]::placeholder { color:#6b7280; opacity:1; }
[data-dsh-ws-studio-host] [data-ws-param="model"] { color:#c5cad3; }
[data-dsh-ws-studio-host] [data-ws-dock] {
  flex:0 0 auto; display:flex; flex-direction:column; gap:6px;
  padding:8px 12px 0; background:#0b0d10; border-top:1px solid #1a1f2a;
  max-height:none; overflow:visible;
}
[data-dsh-ws-studio-host] [data-ws-skill-model-row] {
  display:flex; align-items:center; gap:6px; flex-wrap:wrap; min-width:0; min-height:28px;
}
[data-dsh-ws-studio-host] [data-ws-skill-model-row] > label {
  display:inline-flex; align-items:center; gap:5px; min-width:0; flex:none; margin:0;
}
[data-dsh-ws-studio-host] [data-ws-skill-model-row] [data-ws-param="skill"] {
  flex:1 1 8rem; min-width:0; max-width:14rem;
}
[data-dsh-ws-studio-host] [data-ws-cta-footer] {
  flex:none; position:sticky; bottom:0; z-index:2;
  padding:6px 12px 10px; background:#0b0d10;
  display:flex; flex-direction:column; gap:4px;
  border-top:1px solid #1a1f2a;
}
[data-dsh-ws-studio-host] [data-ws-advanced] { margin:0; }
[data-dsh-ws-studio-host] [data-ws-advanced] > summary {
  cursor:pointer; list-style:none; display:flex; align-items:center; gap:6px;
  color:#9aa3b2; font-size:11px; font-weight:600; user-select:none; line-height:1.4;
  width:fit-content; border-bottom:1px solid transparent;
}
[data-dsh-ws-studio-host] [data-ws-advanced] > summary:hover {
  color:#c5cad3; border-bottom-color:#3a4558;
}
[data-dsh-ws-studio-host] [data-ws-advanced] > summary::-webkit-details-marker { display:none; }
[data-dsh-ws-studio-host] [data-ws-adv-chev] {
  display:inline-block; font-size:10px; opacity:.75; transition:transform .12s ease; line-height:1;
}
[data-dsh-ws-studio-host] [data-ws-advanced][open] > summary [data-ws-adv-chev] { transform:rotate(90deg); }
[data-dsh-ws-studio-host] [data-ws-advanced][open] > summary { margin-bottom:6px; width:100%; border-bottom-color:transparent; }
[data-dsh-ws-studio-host] [data-ws-advanced]:not([open]) { margin:0; }

[data-dsh-ws-studio-host] [data-ws-ref-slot] {
  display:none; flex-direction:column; gap:6px; padding:8px 10px;
  background:#12161f; border:1px dashed #2a3140; border-radius:10px;
}
[data-dsh-ws-studio-host] [data-ws-ref-slot][data-visible] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-ref-drop] {
  min-height:72px; border-radius:8px; border:1px dashed #3a4558;
  background:#0e1218; display:flex; align-items:center; justify-content:center;
  gap:8px; flex-wrap:wrap; padding:8px; color:#9aa3b2; font-size:12px; cursor:pointer;
}
[data-dsh-ws-studio-host] [data-ws-ref-drop][data-dragover] { border-color:#5b8def; color:#c5cad3; }
[data-dsh-ws-studio-host] [data-ws-ref-thumbs] { display:flex; flex-wrap:wrap; gap:6px; }
[data-dsh-ws-studio-host] [data-ws-ref-thumb] {
  position:relative; width:64px; height:64px; border-radius:8px; overflow:hidden;
  border:1px solid #2a3140; background:#0b0d10;
}
[data-dsh-ws-studio-host] [data-ws-ref-thumb] img { width:100%; height:100%; object-fit:cover; display:block; }
[data-dsh-ws-studio-host] [data-ws-ref-thumb] button {
  position:absolute; top:2px; right:2px; width:18px; height:18px; border:0; border-radius:999px;
  background:rgba(0,0,0,.7); color:#fff; cursor:pointer; font-size:11px; line-height:1; padding:0;
}
[data-dsh-ws-studio-host] [data-ws-progress] {
  display:none; flex-direction:column; gap:6px; padding:8px 10px; border:1px solid #1f2430;
  border-radius:10px; background:#12161f; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-progress][data-visible] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-progress-bar] {
  height:6px; border-radius:999px; background:#1a1f2a; overflow:hidden;
}
[data-dsh-ws-studio-host] [data-ws-progress-bar] > i {
  display:block; height:100%; width:0%; background:#5b8def; border-radius:999px; transition:width .2s ease;
}
[data-dsh-ws-studio-host] [data-ws-progress-bar][data-indeterminate] > i {
  width:36% !important; transition:none;
  animation: dsh-ws-progress-indeterminate 1.2s ease-in-out infinite;
}
@keyframes dsh-ws-progress-indeterminate {
  0% { transform: translateX(-120%); }
  100% { transform: translateX(280%); }
}
[data-dsh-ws-studio-host] [data-ws-progress-meta] {
  display:flex; align-items:center; gap:10px; font-size:12px; color:#c5cad3; flex-wrap:wrap;
}
[data-dsh-ws-studio-host] [data-ws-fail] {
  display:none; flex-direction:column; gap:6px; padding:8px 10px; border:1px solid #3a2a2a;
  border-radius:10px; background:#1a1214; flex:none; color:#e8b4b4; font-size:12px;
}
[data-dsh-ws-studio-host] [data-ws-fail][data-visible] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-result-actions] {
  display:none; flex-wrap:wrap; gap:6px; padding:4px 0 2px; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-result-actions][data-visible] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-result-actions] button {
  padding:4px 10px; border:1px solid #2a3140; border-radius:999px; background:#12161f;
  color:#c5cad3; cursor:pointer; font:inherit; font-size:11.5px;
}
[data-dsh-ws-studio-host] [data-ws-plan-panel] {
  display:none; flex-direction:column; gap:6px; padding:8px 10px; background:#12161f;
  border:1px solid #1f2430; border-radius:10px;
}
[data-dsh-ws-studio-host] [data-ws-plan-panel][data-visible] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-plan-actions] { display:flex; flex-wrap:wrap; gap:6px; }
[data-dsh-ws-studio-host] [data-ws-plan-actions] button {
  padding:4px 10px; border:1px solid #2a3140; border-radius:999px; background:#12161f;
  color:#c5cad3; cursor:pointer; font:inherit; font-size:11.5px;
}
[data-dsh-ws-studio-host] [data-ws-plan-actions] button[data-primary] {
  border-color:#3a4558; background:#1c2333; color:#fff; font-weight:600;
}
[data-dsh-ws-studio-host] [data-ws-pane-drag] {
  flex:0 0 5px; width:5px; cursor:col-resize; background:transparent; position:relative; z-index:2;
  align-self:stretch;
}
[data-dsh-ws-studio-host] [data-ws-pane-drag]:hover,
[data-dsh-ws-studio-host] [data-ws-pane-drag][data-active] { background:rgba(91,141,239,.35); }
[data-dsh-ws-studio-host] [data-ws-cols] { display:flex; flex:1; min-height:0; }
`;
function resolveSidebarColumn() {
  const el = document.querySelector('[data-pane="sidebar"]') || document.querySelector('[class*="sidebarCol"]');
  return el instanceof HTMLElement ? el : void 0;
}
function resolveMainContentPane() {
  const preferred = [
    document.querySelector('[data-pane="conversation"]'),
    document.querySelector('[class*="centerCol"]'),
    document.querySelector('[data-dsh-ws-content-mount]:not([data-dsh-ws-content-mount="measured"])'),
    document.querySelector('[data-pane="main"]'),
    document.querySelector('[data-pane="content"]'),
    document.querySelector('[class*="mainCol"]'),
    document.querySelector('[class*="contentCol"]'),
    document.querySelector('[class*="mainPane"]'),
    document.querySelector('[class*="contentPane"]'),
    document.querySelector('[class*="workspaceMain"]'),
    document.querySelector("main")
  ];
  for (const el of preferred) {
    if (el instanceof HTMLElement && !el.closest('[data-pane="sidebar"],[class*="sidebarCol"]')) {
      return el;
    }
  }
  const sidebar = resolveSidebarColumn();
  if (!(sidebar instanceof HTMLElement) || !sidebar.parentElement) return void 0;
  const siblings = Array.from(sidebar.parentElement.children).filter((el) => el !== sidebar);
  const named = siblings.find(
    (el) => el instanceof HTMLElement && (el.getAttribute("data-pane") === "conversation" || el.getAttribute("data-pane") === "main" || el.getAttribute("data-pane") === "content" || /centerCol|main|content|workspace|session|conversation/i.test(String(el.className || "")))
  );
  if (named instanceof HTMLElement) return named;
  let best;
  let bestArea = 0;
  for (const el of siblings) {
    if (!(el instanceof HTMLElement)) continue;
    const r = el.getBoundingClientRect();
    const area = Math.max(0, r.width) * Math.max(0, r.height);
    if (area >= bestArea) {
      bestArea = area;
      best = el;
    }
  }
  return best;
}
function ensureContentMount() {
  const pane = resolveMainContentPane();
  if (pane) {
    try {
      const cs = window.getComputedStyle(pane);
      if (cs.position === "static") pane.style.position = "relative";
    } catch (_) {
      pane.style.position = "relative";
    }
    return pane;
  }
  const sidebar = resolveSidebarColumn();
  if (sidebar instanceof HTMLElement && sidebar.parentElement) {
    let wrap = sidebar.parentElement.querySelector("[data-dsh-ws-content-mount]");
    if (!(wrap instanceof HTMLElement)) {
      wrap = document.createElement("div");
      wrap.dataset.dshWsContentMount = "";
      wrap.style.cssText = "position:relative;flex:1 1 auto;min-width:0;min-height:0;align-self:stretch;overflow:hidden;";
      if (sidebar.nextSibling) sidebar.parentElement.insertBefore(wrap, sidebar.nextSibling);
      else sidebar.parentElement.appendChild(wrap);
    }
    return wrap;
  }
  let shell = document.querySelector('[data-dsh-ws-content-mount="measured"]');
  if (!(shell instanceof HTMLElement)) {
    shell = document.createElement("div");
    shell.dataset.dshWsContentMount = "measured";
    document.body.appendChild(shell);
  }
  const sb = resolveSidebarColumn();
  let left = 0;
  if (sb) {
    try {
      left = Math.round(sb.getBoundingClientRect().right);
    } catch (_) {
      left = Math.round(sb.offsetWidth || 0);
    }
  }
  shell.style.cssText = `position:fixed;left:${left}px;top:0;right:0;bottom:0;z-index:39;pointer-events:none;`;
  return shell;
}
function mountStudioHostEl(hostEl) {
  const mount = ensureContentMount();
  if (hostEl.parentElement !== mount) mount.appendChild(hostEl);
  hostEl.style.pointerEvents = "auto";
  hostEl.style.position = "absolute";
  hostEl.style.inset = "0";
  hostEl.style.left = "0";
  hostEl.style.right = "0";
  hostEl.style.top = "0";
  hostEl.style.bottom = "0";
  hostEl.style.width = "auto";
  hostEl.style.height = "auto";
}
function createStudioHost() {
  let host;
  let open = false;
  let state = defaultStudioState();
  let activeHistoryId = null;
  const historyStore = /* @__PURE__ */ new Map();
  let progressTimer = null;
  let progressStartedAt = 0;
  const paintChat = () => {
    const chat = host?.querySelector('[data-ws-col="chat"]');
    const wall = host?.querySelector("[data-ws-inspire-wall]");
    const toggle = host?.querySelector("[data-ws-chat-toggle]");
    if (!toggle) return;
    if (state.chatCollapsed) {
      if (chat) chat.style.display = "none";
      if (wall) wall.style.display = "flex";
      toggle.textContent = CHROME.expandChat;
    } else {
      if (chat) chat.style.display = "flex";
      if (wall) wall.style.display = "none";
      toggle.textContent = "\u6536\u8D77\u5BF9\u8BDD";
    }
  };
  const loadPaneWidths = () => {
    try {
      const raw = localStorage.getItem(PANE_WIDTHS_KEY);
      if (!raw) return { ...DEFAULT_PANE_WIDTHS };
      const parsed = JSON.parse(raw);
      return {
        history: Math.max(180, Math.min(480, Number(parsed.history) || DEFAULT_PANE_WIDTHS.history)),
        studio: null,
        chat: Math.max(220, Math.min(520, Number(parsed.chat) || DEFAULT_PANE_WIDTHS.chat))
      };
    } catch (_) {
      return { ...DEFAULT_PANE_WIDTHS };
    }
  };
  const savePaneWidths = () => {
    try {
      localStorage.setItem(
        PANE_WIDTHS_KEY,
        JSON.stringify({
          history: state.paneWidths.history,
          chat: state.paneWidths.chat
        })
      );
    } catch (_) {
    }
  };
  const formatElapsed = (ms) => {
    const s = Math.max(0, Math.floor((ms || 0) / 1e3));
    const m = Math.floor(s / 60);
    const r = s % 60;
    return m > 0 ? `${m}:${String(r).padStart(2, "0")}` : `${r}s`;
  };
  const stopProgressClock = () => {
    if (progressTimer != null) {
      clearInterval(progressTimer);
      progressTimer = null;
    }
  };
  const paintConnStatus = (connected) => {
    const el = host?.querySelector("[data-ws-conn-status]");
    if (!(el instanceof HTMLElement)) return;
    const on = connected !== false;
    el.textContent = on ? CHROME.connected : CHROME.disconnected;
    el.title = el.textContent;
    el.style.color = on ? "#9aa3b2" : "#e8b4b4";
    el.dataset.connected = on ? "1" : "0";
  };
  const paintRefSlot = () => {
    const slot = host?.querySelector("[data-ws-ref-slot]");
    if (!(slot instanceof HTMLElement)) return;
    const show = state.mode === MODE_IMG;
    if (show) slot.setAttribute("data-visible", "");
    else slot.removeAttribute("data-visible");
    const thumbs = slot.querySelector("[data-ws-ref-thumbs]");
    if (!(thumbs instanceof HTMLElement)) return;
    thumbs.innerHTML = "";
    const refs = Array.isArray(state.refImages) ? state.refImages : [];
    for (const ref of refs) {
      const wrap = document.createElement("div");
      wrap.dataset.wsRefThumb = "";
      wrap.dataset.refId = ref.id;
      const img = document.createElement("img");
      img.src = ref.url;
      img.alt = ref.name || "\u53C2\u8003\u56FE";
      const rm = document.createElement("button");
      rm.type = "button";
      rm.setAttribute("aria-label", "\u79FB\u9664\u53C2\u8003\u56FE");
      rm.textContent = "\xD7";
      rm.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        state.refImages = (state.refImages || []).filter((r) => r.id !== ref.id);
        paintRefSlot();
      });
      wrap.append(img, rm);
      thumbs.appendChild(wrap);
    }
    const hint = slot.querySelector("[data-ws-ref-hint]");
    if (hint) hint.textContent = refs.length ? `\u5DF2\u9009 ${refs.length} \u5F20\u53C2\u8003\u56FE` : "\u4E0A\u4F20 / \u62D6\u62FD / \u7C98\u8D34\u53C2\u8003\u56FE";
  };
  const paintSkillPlan = () => {
    const panel = host?.querySelector("[data-ws-plan-panel]");
    if (!(panel instanceof HTMLElement)) return;
    if (state.skillId) panel.setAttribute("data-visible", "");
    else panel.removeAttribute("data-visible");
    const ta = panel.querySelector("[data-ws-plan-text]");
    if (ta instanceof HTMLTextAreaElement) {
      const planText = typeof state.skillPlan === "string" ? state.skillPlan : state.skillPlan?.text != null ? String(state.skillPlan.text) : state.skillPlan ? JSON.stringify(state.skillPlan, null, 2) : "";
      if (ta.value !== planText && document.activeElement !== ta) ta.value = planText;
    }
  };
  const paintProgressUi = () => {
    const prog = host?.querySelector("[data-ws-progress]");
    const fail = host?.querySelector("[data-ws-fail]");
    const task = state.task;
    if (prog instanceof HTMLElement) {
      const running = task && (task.status === "running" || task.status === "queued" || task.status === "submitted" || task.status === "polling" || task.status === "downloading");
      if (running) prog.setAttribute("data-visible", "");
      else prog.removeAttribute("data-visible");
      const hasPct = task?.progress != null && Number.isFinite(Number(task.progress));
      const pct = hasPct ? Math.max(0, Math.min(100, Number(task.progress))) : null;
      const barWrap = prog.querySelector("[data-ws-progress-bar]");
      const bar = prog.querySelector("[data-ws-progress-bar] > i");
      if (barWrap instanceof HTMLElement) {
        if (hasPct) barWrap.removeAttribute("data-indeterminate");
        else barWrap.setAttribute("data-indeterminate", "");
      }
      if (bar instanceof HTMLElement) bar.style.width = hasPct ? `${pct}%` : "36%";
      const label = prog.querySelector("[data-ws-progress-label]");
      if (label) label.textContent = hasPct ? `\u8FDB\u5EA6 ${pct}%` : "\u7B49\u5F85\u5BBF\u4E3B\u8FDB\u5EA6";
      const elapsed = prog.querySelector("[data-ws-progress-elapsed]");
      if (elapsed) elapsed.textContent = `\u8017\u65F6 ${formatElapsed(task?.elapsedMs || 0)}`;
      const phase = prog.querySelector("[data-ws-progress-phase]");
      if (phase) phase.textContent = task?.phase || task?.status || "";
    }
    if (fail instanceof HTMLElement) {
      if (task?.status === "failed") {
        fail.setAttribute("data-visible", "");
        const reason = fail.querySelector("[data-ws-fail-reason]");
        if (reason) reason.textContent = task.error ? `\u539F\u56E0\uFF1A${task.error}` : "\u539F\u56E0\uFF1A\u51FA\u56FE\u5931\u8D25";
      } else {
        fail.removeAttribute("data-visible");
      }
    }
  };
  const paintResultActions = (show) => {
    const bar = host?.querySelector("[data-ws-result-actions]");
    if (!(bar instanceof HTMLElement)) return;
    if (show) bar.setAttribute("data-visible", "");
    else bar.removeAttribute("data-visible");
  };
  const paintChips = () => {
    if (!host) return;
    const syncChipGroup = (param, value) => {
      const want = value == null ? "" : String(value);
      host.querySelectorAll(`[data-ws-param="${param}"][data-value]`).forEach((btn) => {
        const on = btn.getAttribute("data-value") === want;
        btn.setAttribute("aria-current", on ? "true" : "false");
        if (btn instanceof HTMLElement) btn.style.cssText = css.chip(on);
      });
    };
    syncChipGroup("ratio", state.ratio);
    syncChipGroup("clarity", state.clarity);
    syncChipGroup("count", state.count);
    syncChipGroup("detail", state.detail);
    const skillSel = host.querySelector('[data-ws-param="skill"]');
    if (skillSel instanceof HTMLSelectElement) {
      skillSel.value = state.skillId == null ? "" : String(state.skillId);
      if (state.skillId) skillSel.setAttribute("data-ws-skill", state.skillId);
      else skillSel.removeAttribute("data-ws-skill");
    }
    host.querySelectorAll("[data-ws-mode]").forEach((btn) => {
      const on = btn.getAttribute("data-ws-mode") === state.mode;
      btn.style.cssText = css.mode(on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
    const cmp = host.querySelector("[data-ws-compare]");
    if (cmp instanceof HTMLInputElement) cmp.checked = !!state.compareModels;
    paintRefSlot();
    paintSkillPlan();
  };
  const captureParamSnapshot = () => ({
    prompt: state.prompt,
    negativePrompt: state.negativePrompt,
    mode: state.mode,
    skillId: state.skillId,
    skillPlan: state.skillPlan,
    ratio: state.ratio,
    clarity: state.clarity,
    count: state.count,
    detail: state.detail,
    modelId: state.modelId,
    compareModels: !!state.compareModels,
    refImages: Array.isArray(state.refImages) ? state.refImages.map((r) => ({ ...r })) : []
  });
  const applyParamSnapshot = (snap) => {
    if (!snap || typeof snap !== "object") return;
    state.prompt = snap.prompt != null ? String(snap.prompt) : "";
    state.negativePrompt = snap.negativePrompt != null ? String(snap.negativePrompt) : "";
    state.mode = snap.mode || MODE_TABS[0];
    state.skillId = snap.skillId || null;
    state.skillPlan = snap.skillPlan ?? null;
    state.ratio = snap.ratio || RATIOS[0];
    state.clarity = snap.clarity || CLARITY[0];
    state.count = Number(snap.count) || COUNTS[0];
    state.detail = snap.detail || DETAIL_OPTS[0];
    state.modelId = snap.modelId != null ? String(snap.modelId) : "";
    state.compareModels = !!snap.compareModels;
    state.refImages = Array.isArray(snap.refImages) ? snap.refImages.map((r) => ({ ...r })) : [];
    syncFields();
  };
  const chipButtonsHtml = (param, values, selected) => values.map((v) => {
    const val = String(v);
    const on = val === String(selected);
    return `<button type="button" data-ws-param="${param}" data-value="${escapeHtml(val)}" aria-current="${on ? "true" : "false"}" style="${css.chip(on)}">${escapeHtml(val)}</button>`;
  }).join("");
  const syncNegClearBtn = () => {
    const details = host?.querySelector("[data-ws-neg-details]");
    const btn = host?.querySelector("[data-ws-clear-negative]");
    if (!(btn instanceof HTMLElement)) return;
    const open2 = details instanceof HTMLDetailsElement && details.open;
    const hasText = !!(state.negativePrompt && String(state.negativePrompt).trim());
    btn.style.display = open2 && hasText ? "" : "none";
  };
  const syncFields = () => {
    const promptEl = host?.querySelector("[data-ws-prompt]");
    const negEl = host?.querySelector("[data-ws-negative]");
    if (promptEl instanceof HTMLTextAreaElement) promptEl.value = state.prompt;
    if (negEl instanceof HTMLTextAreaElement) negEl.value = state.negativePrompt;
    const model = host?.querySelector('[data-ws-param="model"]');
    if (model instanceof HTMLInputElement || model instanceof HTMLSelectElement) {
      model.value = state.modelId || "";
    }
    syncNegClearBtn();
    paintChips();
  };
  const setStatus = (text) => {
    const status = host?.querySelector("[data-ws-status]");
    if (status) status.textContent = text;
  };
  const paintStageIdle = () => {
    const samples = host?.querySelector("[data-ws-stage-samples]");
    const resultsEl = host?.querySelector("[data-ws-results]");
    const hint = host?.querySelector("[data-ws-stage-empty-hint]");
    if (resultsEl) {
      resultsEl.innerHTML = "";
      resultsEl.hidden = true;
    }
    if (samples) {
      samples.innerHTML = "";
      samples.hidden = true;
    }
    if (hint) {
      hint.hidden = false;
      hint.textContent = STAGE_EMPTY_HINT;
    }
    paintResultActions(false);
    if (state.task?.status !== "failed" && state.task?.status !== "running") {
      state.task = null;
      paintProgressUi();
    }
  };
  const showResultStage = () => {
    const samples = host?.querySelector("[data-ws-stage-samples]");
    const resultsEl = host?.querySelector("[data-ws-results]");
    const hint = host?.querySelector("[data-ws-stage-empty-hint]");
    if (samples) {
      samples.innerHTML = "";
      samples.hidden = true;
    }
    if (resultsEl) resultsEl.hidden = false;
    if (hint) {
      hint.hidden = true;
      hint.textContent = STAGE_EMPTY_HINT;
    }
  };
  const paintInspiration = () => {
    const grid = host?.querySelector("[data-ws-inspire-grid]");
    if (!grid) return;
    grid.innerHTML = "";
    const empty = document.createElement("div");
    empty.dataset.wsInspireEmpty = "";
    empty.style.cssText = "grid-column:1/-1;padding:28px 10px;text-align:center;font-size:12px;color:#6b7280;line-height:1.5;";
    empty.textContent = INSPIRE_EMPTY_HINT;
    grid.appendChild(empty);
  };
  const paintHistoryEmpty = () => {
    const histEl = host?.querySelector("[data-ws-history-list]");
    if (!histEl) return;
    if (histEl.querySelector("[data-ws-history-item]")) {
      histEl.querySelector("[data-ws-history-empty]")?.remove();
      return;
    }
    if (histEl.querySelector("[data-ws-history-empty]")) return;
    const empty = document.createElement("div");
    empty.dataset.wsHistoryEmpty = "";
    empty.style.cssText = "padding:8px 4px;font-size:12px;color:#6b7280;";
    empty.textContent = HISTORY_EMPTY_HINT;
    histEl.appendChild(empty);
  };
  const applyProgress = (value) => {
    const v = value && typeof value === "object" ? value : {};
    const status = v.status || v.phase || "running";
    const normalized = status === "done" || status === "completed" ? "done" : status === "failed" || status === "error" ? "failed" : status === "cancelled" || status === "canceled" ? "cancelled" : status === "queued" || status === "submitted" || status === "polling" || status === "downloading" || status === "running" ? status === "running" ? "running" : status : "running";
    state.task = {
      id: v.id || state.task?.id || `task-${Date.now()}`,
      status: normalized === "done" ? "done" : normalized,
      progress: v.progress != null ? Number(v.progress) : state.task?.progress ?? null,
      elapsedMs: v.elapsedMs != null ? Number(v.elapsedMs) : progressStartedAt ? Date.now() - progressStartedAt : state.task?.elapsedMs || 0,
      phase: v.phase || normalized,
      error: v.error != null ? String(v.error) : state.task?.error
    };
    paintProgressUi();
    if (normalized === "running" || normalized === "queued" || normalized === "submitted" || normalized === "polling" || normalized === "downloading") {
      paintResultActions(false);
      const hint = host?.querySelector("[data-ws-stage-empty-hint]");
      if (hint) hint.hidden = true;
    }
    if (normalized === "cancelled") {
      stopProgressClock();
      setStatus("\u5BA2\u6237\u7AEF\u5DF2\u53D6\u6D88\uFF1B\u5BBF\u4E3B\u53D6\u6D88\u672A\u6302");
    }
  };
  const beginLocalProgress = () => {
    stopProgressClock();
    progressStartedAt = Date.now();
    state.task = {
      id: `local-${progressStartedAt}`,
      status: "running",
      progress: null,
      elapsedMs: 0,
      phase: "waiting"
    };
    paintProgressUi();
    paintResultActions(false);
    const fail = host?.querySelector("[data-ws-fail]");
    if (fail) fail.removeAttribute("data-visible");
    const hint = host?.querySelector("[data-ws-stage-empty-hint]");
    if (hint) hint.hidden = true;
    setStatus("\u7B49\u5F85\u5BBF\u4E3B\u8FDB\u5EA6\u2026");
    progressTimer = window.setInterval(() => {
      if (!state.task || state.task.status === "done" || state.task.status === "failed" || state.task.status === "cancelled") {
        stopProgressClock();
        return;
      }
      const elapsed = Date.now() - progressStartedAt;
      state.task = { ...state.task, elapsedMs: elapsed };
      paintProgressUi();
    }, 500);
  };
  const applyGenerateResult = (value) => {
    const phase = value?.phase || value?.status || "";
    const results = Array.isArray(value?.results) ? value.results : [];
    const failed = phase === "failed" || phase === "error" || !!value?.error && !results.length && phase !== "done" && phase !== "completed" && phase !== "cancelled";
    const cancelled = phase === "cancelled" || phase === "canceled";
    const inProgress = !results.length && !failed && !cancelled && (phase === "queued" || phase === "submitted" || phase === "polling" || phase === "downloading" || phase === "running");
    if (inProgress) {
      applyProgress({
        id: value?.jobId,
        progress: value?.progress,
        elapsedMs: value?.elapsedMs,
        phase,
        status: phase || "running"
      });
      setStatus(`\u51FA\u56FE\u4E2D\u2026 ${phase || ""}`.trim());
      return;
    }
    if (cancelled) {
      stopProgressClock();
      state.task = {
        id: value?.jobId || state.task?.id,
        status: "cancelled",
        progress: state.task?.progress || 0,
        elapsedMs: value?.elapsedMs ?? state.task?.elapsedMs ?? 0,
        phase: "cancelled"
      };
      paintProgressUi();
      setStatus("\u5BA2\u6237\u7AEF\u5DF2\u53D6\u6D88\uFF1B\u5BBF\u4E3B\u53D6\u6D88\u672A\u6302");
      return;
    }
    if (failed) {
      stopProgressClock();
      const errText = value?.error != null ? String(value.error) : "\u51FA\u56FE\u5931\u8D25";
      state.task = {
        id: value?.jobId || state.task?.id,
        status: "failed",
        progress: state.task?.progress || 0,
        elapsedMs: value?.elapsedMs ?? state.task?.elapsedMs ?? 0,
        phase: "failed",
        error: errText
      };
      paintProgressUi();
      paintResultActions(false);
      setStatus(errText);
      return;
    }
    stopProgressClock();
    state.task = {
      id: value?.jobId || state.task?.id,
      status: "done",
      progress: 100,
      elapsedMs: value?.elapsedMs ?? (progressStartedAt ? Date.now() - progressStartedAt : 0),
      phase: "done"
    };
    paintProgressUi();
    const resultsEl = host?.querySelector("[data-ws-results]");
    const histEl = host?.querySelector("[data-ws-history-list]");
    if (resultsEl) {
      resultsEl.innerHTML = "";
      if (!results.length) {
        paintStageIdle();
      } else {
        showResultStage();
        for (const r of results) {
          const src = pickDisplayUrl(r);
          const card = document.createElement("div");
          card.dataset.wsResultCard = "";
          card.style.cssText = "border:1px solid #2a3140;border-radius:10px;padding:4px;background:#10141c;max-width:min(48%,280px);overflow:hidden;";
          if (src) {
            const img = document.createElement("img");
            img.src = src;
            img.alt = "\u751F\u6210\u7ED3\u679C";
            img.dataset.wsResult = "";
            img.style.cssText = "display:block;width:100%;max-height:320px;border-radius:6px;object-fit:cover;";
            img.addEventListener("error", () => {
              if (img.dataset.failed) return;
              img.dataset.failed = "1";
              img.src = inspireFallbackSvg(0);
            });
            card.appendChild(img);
          } else {
            const note = document.createElement("div");
            note.style.cssText = "font-size:11px;opacity:.8;word-break:break-all;padding:4px;";
            note.textContent = r?.url || r?.localPath || "\u65E0\u53EF\u7528\u9884\u89C8";
            card.appendChild(note);
          }
          resultsEl.appendChild(card);
        }
        paintResultActions(true);
      }
    }
    if (histEl && results.length) {
      histEl.querySelector("[data-ws-history-empty]")?.remove();
      const jobId = value?.jobId || `local-${Date.now()}`;
      const existing = Array.from(histEl.querySelectorAll("[data-ws-history-item]")).find(
        (el) => el.getAttribute("data-ws-history-item") === jobId
      );
      if (existing) {
        const prev = historyStore.get(jobId);
        historyStore.set(jobId, {
          snapshot: prev?.snapshot || captureParamSnapshot(),
          value
        });
        markHistoryActive(jobId);
      } else {
        historyStore.set(jobId, { snapshot: captureParamSnapshot(), value });
        const item = document.createElement("div");
        item.dataset.wsHistoryItem = jobId;
        const thumb = pickDisplayUrl(results[0]);
        const snippet = (state.prompt || "").trim().slice(0, 18) || "\u751F\u6210\u7ED3\u679C";
        const line = `${snippet} \xB7 ${state.ratio || "1:1"}`;
        const modelLine = state.modelId || DEFAULT_MODEL;
        item.innerHTML = (thumb ? `<img src="${escapeHtml(thumb)}" alt="" width="${HIST_THUMB}" height="${HIST_THUMB}" />` : `<span style="width:${HIST_THUMB}px;height:${HIST_THUMB}px;border-radius:7px;background:#1a2030;flex:none;"></span>`) + `<div class="ws-hist-meta"><div class="ws-hist-line" title="${escapeHtml(state.prompt || "\u751F\u6210\u7ED3\u679C")}">${escapeHtml(line)}</div><div class="ws-hist-model">${escapeHtml(modelLine)}</div><div class="ws-hist-actions"><button type="button" data-ws-history-restore style="${css.histAction}">${HISTORY_ACTIONS.restore}</button><button type="button" data-ws-history-delete style="${css.histAction}">${HISTORY_ACTIONS.remove}</button></div></div>`;
        const himg = item.querySelector("img");
        if (himg) {
          himg.addEventListener("error", () => {
            if (himg.dataset.failed) return;
            himg.dataset.failed = "1";
            himg.src = inspireFallbackSvg(1);
          });
        }
        item.querySelector("[data-ws-history-restore]")?.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          const stored = historyStore.get(jobId);
          if (stored?.snapshot) applyParamSnapshot(stored.snapshot);
          markHistoryActive(jobId);
          if (stored?.value) applyGenerateResult(stored.value);
          setStatus("\u5DF2\u6062\u590D\u53C2\u6570");
        });
        item.querySelector("[data-ws-history-delete]")?.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          historyStore.delete(jobId);
          item.remove();
          if (activeHistoryId === jobId) activeHistoryId = null;
          paintHistoryEmpty();
          setStatus("\u5DF2\u5220\u9664\u8BB0\u5F55");
        });
        item.addEventListener("click", (e) => {
          if (e.target instanceof Element && e.target.closest("[data-ws-history-restore],[data-ws-history-delete]"))
            return;
          markHistoryActive(jobId);
          const stored = historyStore.get(jobId);
          if (stored?.value) applyGenerateResult(stored.value);
          else applyGenerateResult(value);
          setStatus("\u5DF2\u4ECE\u5386\u53F2\u8F7D\u5165\u7ED3\u679C");
        });
        histEl.insertBefore(item, histEl.firstChild);
        markHistoryActive(jobId);
      }
    }
    setStatus(
      results.length ? `\u751F\u6210\u5B8C\u6210 \xD7${results.length}${value?.jobId ? ` \xB7 job ${String(value.jobId).slice(0, 8)}` : ""}` : `\u751F\u6210\u5B8C\u6210\u4F46\u65E0\u56FE${value?.phase ? ` (${value.phase})` : ""}`
    );
  };
  const markHistoryActive = (id) => {
    activeHistoryId = id;
    host?.querySelectorAll("[data-ws-history-item]").forEach((el) => {
      if (el.getAttribute("data-ws-history-item") === id) el.setAttribute("data-active", "");
      else el.removeAttribute("data-active");
    });
  };
  const ensure = () => {
    if (host) return host;
    state = defaultStudioState();
    state.compareModels = false;
    state.refImages = Array.isArray(state.refImages) ? state.refImages : [];
    state.skillPlan = state.skillPlan ?? null;
    state.task = null;
    state.paneWidths = { ...DEFAULT_PANE_WIDTHS, ...loadPaneWidths() };
    host = document.createElement("div");
    host.dataset.dshWsStudioHost = "";
    host.setAttribute("role", "main");
    host.setAttribute("aria-label", "\u751F\u56FE");
    host.style.cssText = "display:none;position:absolute;inset:0;z-index:40;width:auto;height:auto;background:#0b0d10;color:#e8eaed;flex-direction:column;font:13px/1.4 system-ui,sans-serif;overflow:hidden;";
    const styleEl = document.createElement("style");
    styleEl.textContent = HOST_STYLES;
    host.appendChild(styleEl);
    const frame = document.createElement("div");
    frame.style.cssText = "display:flex;flex-direction:column;flex:1;min-height:0;width:100%;";
    frame.innerHTML = `
      <header data-ws-top-bar style="display:flex;gap:4px;padding:7px 12px;border-bottom:1px solid #1a1f2a;align-items:center;background:#0b0d10;flex-shrink:0;">
        ${TOP_TABS.map(
      (t, i) => `<button type="button" data-ws-top="${t}" style="padding:6px 11px;border:0;background:${i === 0 ? "#1c2333" : "transparent"};color:${i === 0 ? "#fff" : "#9aa3b2"};cursor:pointer;border-radius:7px;font:inherit;font-size:12.5px;">${t}</button>`
    ).join("")}
        <span style="flex:1"></span>
        <span data-ws-conn-status title="${CHROME.connected}">${CHROME.connected}</span>
        <button type="button" data-ws-chat-toggle style="padding:0 10px;height:26px;border:1px solid #2a3140;border-radius:999px;background:#12161f;color:#c5cad3;cursor:pointer;font:inherit;font-size:12px;">${CHROME.expandChat}</button>
        <button type="button" data-ws-close style="padding:6px 10px;border:0;background:transparent;color:#9aa3b2;cursor:pointer;font:inherit;">\u5173\u95ED</button>
      </header>
      <div data-ws-cols>
        <!-- LEFT: \u5386\u53F2\u8BB0\u5F55 -->
        <aside data-ws-col="history" style="width:${state.paneWidths.history}px;flex-shrink:0;border-right:1px solid #1a1f2a;padding:8px;overflow:auto;background:#0b0d10;display:flex;flex-direction:column;gap:6px;">
          <div style="font-size:13px;font-weight:600;color:#e8eaed;">${COLUMNS.history}</div>
          <input type="search" placeholder="\u641C\u7D22\u5386\u53F2" aria-label="\u641C\u7D22\u5386\u53F2" style="width:100%;${css.field};font-size:12px;" />
          <div style="display:flex;gap:6px;">
            <select aria-label="\u5168\u90E8\u6A21\u578B" style="flex:1;${css.select}">
              <option>\u5168\u90E8\u6A21\u578B</option>
            </select>
            <select aria-label="\u5168\u90E8\u6BD4\u4F8B" style="flex:1;${css.select}">
              <option>\u5168\u90E8\u6BD4\u4F8B</option>
            </select>
          </div>
          <div data-ws-history-list style="display:flex;flex-direction:column;gap:6px;flex:1;min-height:0;"></div>
          <button type="button" data-ws-history-clear style="align-self:flex-start;padding:2px 8px;border:1px solid #2a3140;border-radius:999px;background:transparent;color:#6b7280;cursor:pointer;font:inherit;font-size:11.5px;">${HISTORY_ACTIONS.clear}</button>
        </aside>
        <div data-ws-pane-drag="history" title="\u62D6\u62FD\u8C03\u6574\u5386\u53F2\u680F\u5BBD\u5EA6"></div>

        <!-- CENTER: \u51FA\u56FE\u53F0 \u2014 stage (samples/results) + compact dock + sticky CTA -->
        <section data-ws-col="studio" style="flex:1;padding:0;overflow:hidden;display:flex;flex-direction:column;min-width:0;background:#0b0d10;border-left:0;border-right:0;">
          <div data-ws-stage aria-label="\u51FA\u56FE\u53F0">
            <div data-ws-stage-head>
              <strong>${STAGE_LABEL}</strong>
              <span data-ws-stage-empty-hint>${STAGE_EMPTY_HINT}</span>
            </div>
            <div data-ws-progress>
              <div data-ws-progress-meta>
                <span data-ws-progress-label>\u8FDB\u5EA6 0%</span>
                <span data-ws-progress-elapsed>\u8017\u65F6 0s</span>
                <span data-ws-progress-phase style="color:#6b7280;"></span>
                <span style="flex:1"></span>
                <button type="button" data-ws-cancel style="padding:2px 10px;border:1px solid #2a3140;border-radius:999px;background:transparent;color:#c5cad3;cursor:pointer;font:inherit;font-size:11.5px;">${RESULT_ACTIONS[0]}</button>
              </div>
              <div data-ws-progress-bar><i></i></div>
            </div>
            <div data-ws-fail>
              <div data-ws-fail-reason>\u539F\u56E0\uFF1A\u51FA\u56FE\u5931\u8D25</div>
              <button type="button" data-ws-retry style="align-self:flex-start;padding:4px 12px;border:1px solid #3a4558;border-radius:999px;background:#1c2333;color:#fff;cursor:pointer;font:inherit;font-size:12px;">${RESULT_ACTIONS[1]}</button>
            </div>
            <div data-ws-stage-samples></div>
            <div data-ws-results hidden></div>
            <div data-ws-result-actions>
              ${RESULT_ACTIONS.filter((a) => a !== "\u53D6\u6D88" && a !== "\u91CD\u8BD5").map(
      (a) => `<button type="button" data-ws-result-action="${a}">${a}</button>`
    ).join("")}
            </div>
          </div>

          <div data-ws-dock>
            <div style="display:flex;gap:6px;align-items:center;" role="tablist">
              ${MODE_TABS.map(
      (m, i) => `<button type="button" data-ws-mode="${m}" aria-pressed="${i === 0 ? "true" : "false"}" style="${css.mode(i === 0)}">${m}</button>`
    ).join("")}
            </div>

            <div data-ws-ref-slot aria-label="\u53C2\u8003\u56FE">
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="${css.paramLabel}">\u53C2\u8003\u56FE</span>
                <span data-ws-ref-hint style="font-size:11px;color:#6b7280;">\u4E0A\u4F20 / \u62D6\u62FD / \u7C98\u8D34\u53C2\u8003\u56FE</span>
                <span style="flex:1"></span>
                <button type="button" data-ws-ref-upload style="padding:2px 10px;border:1px solid #2a3140;border-radius:999px;background:#12161f;color:#c5cad3;cursor:pointer;font:inherit;font-size:11px;">\u4E0A\u4F20</button>
                <input type="file" data-ws-ref-file accept="image/*" multiple hidden />
              </div>
              <div data-ws-ref-drop tabindex="0">\u70B9\u51FB\u3001\u62D6\u5165\u6216 Ctrl+V \u7C98\u8D34</div>
              <div data-ws-ref-thumbs></div>
            </div>

            <div style="${css.dockBlock}">
              <div style="display:flex;flex-direction:column;gap:4px;">
                <div style="display:flex;align-items:center;gap:6px;">
                  <span style="${css.paramLabel}">${PROMPT_FIELDS.prompt}</span>
                  <span style="flex:1"></span>
                  <button type="button" data-ws-action="templates" style="padding:0 10px;height:24px;border:1px solid ${ACCENT};border-radius:999px;background:rgba(91,141,239,.12);color:${ACCENT};cursor:pointer;font:inherit;font-size:11px;font-weight:600;">${PROMPT_ACTIONS.templates}</button>
                  <button type="button" data-ws-action="enhance" style="padding:0 9px;height:24px;border:1px solid #2a3140;border-radius:999px;background:#12161f;color:#9aa3b2;cursor:pointer;font:inherit;font-size:11px;">${PROMPT_ACTIONS.enhance}</button>
                </div>
                <textarea data-ws-prompt rows="3" placeholder="\u5199\u4E00\u53E5\u60F3\u6CD5\u5373\u53EF\u51FA\u56FE\uFF0C\u4E0D\u5FC5\u9009 Skill" style="resize:vertical;min-height:92px;padding:8px 10px;border-radius:8px;border:1px solid #2a3140;background:#0e1218;color:inherit;font:inherit;line-height:1.5;font-size:12.5px;"></textarea>
              </div>
              <details data-ws-neg-details>
                <summary>
                  <span data-ws-neg-chev aria-hidden="true">\u25B8</span>
                  <span>${PROMPT_FIELDS.negative}</span>
                  <button type="button" data-ws-clear-negative style="margin-left:auto;padding:1px 7px;border:0;border-radius:4px;background:#1c2333;color:#c5cad3;cursor:pointer;font:inherit;font-size:10.5px;">${PROMPT_FIELDS.clearNegative}</button>
                </summary>
                <textarea data-ws-negative rows="1" placeholder="Skill \u9884\u586B\u8D1F\u9762\u8BCD\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC\uFF0C\u53EF\u6539\u53EF\u6E05" style="width:100%;resize:vertical;padding:5px 8px;border-radius:7px;border:1px solid #2a3140;background:#0e1218;color:inherit;font:inherit;font-size:12px;"></textarea>
              </details>
            </div>

            <div data-ws-param-row>
              <div data-ws-param-group>
                <span style="${css.paramLabel}">${PARAM_LABELS.ratio}</span>
                <div data-ws-chips role="group" aria-label="${PARAM_LABELS.ratio}">
                  ${chipButtonsHtml("ratio", RATIOS, state.ratio)}
                </div>
              </div>
              <div data-ws-param-group>
                <span style="${css.paramLabel}">${PARAM_LABELS.clarity}</span>
                <div data-ws-chips role="group" aria-label="${PARAM_LABELS.clarity}">
                  ${chipButtonsHtml("clarity", CLARITY, state.clarity)}
                </div>
              </div>
              <div data-ws-param-group>
                <span style="${css.paramLabel}">${PARAM_LABELS.count}</span>
                <div data-ws-chips role="group" aria-label="${PARAM_LABELS.count}">
                  ${chipButtonsHtml("count", COUNTS, state.count)}
                </div>
              </div>
              <div data-ws-param-group>
                <span style="${css.paramLabel}">${PARAM_LABELS.detail}</span>
                <div data-ws-chips role="group" aria-label="${PARAM_LABELS.detail}">
                  ${chipButtonsHtml("detail", DETAIL_OPTS, state.detail)}
                </div>
              </div>
            </div>

            <div data-ws-model-row>
              <span style="${css.paramLabel}">${PARAM_LABELS.model}</span>
              <input data-ws-param="model" placeholder="\u9009\u62E9\u6A21\u578B" style="padding:0 10px;height:28px;border-radius:14px;border:1px solid #2a3140;background:#12161f;color:#c5cad3;font:inherit;font-size:12px;" />
              <label style="display:inline-flex;align-items:center;gap:6px;font-size:11.5px;color:#9aa3b2;cursor:pointer;user-select:none;margin:0;">
                <input type="checkbox" data-ws-compare style="accent-color:${ACCENT};" />
                ${COMPARE}
              </label>
            </div>

            <details data-ws-advanced>
              <summary>
                <span data-ws-adv-chev aria-hidden="true">\u25B8</span>
                <span>\u9AD8\u7EA7</span>
              </summary>
              <div data-ws-skill-model-row>
                <label>
                  <span style="${css.paramLabel}">${PROMPT_ACTIONS.skill}</span>
                  <select data-ws-param="skill" aria-label="${PROMPT_ACTIONS.skill}" style="${css.select}">
                    <option value="">\uFF08\u4E0D\u4F7F\u7528 Skill\uFF09</option>
                    ${SKILL_ENTRIES.map((s) => `<option value="${s}">${s}</option>`).join("")}
                  </select>
                </label>
              </div>
            </details>

            <div data-ws-plan-panel>
              <div style="${css.paramLabel}">\u521B\u4F5C\u65B9\u6848\uFF08\u53EF\u7F16\u8F91\uFF1B\u8BC4\u5206\u53EA\u63D0\u793A\uFF0C\u6C38\u4E0D\u9501\u51FA\u56FE\uFF09</div>
              <textarea data-ws-plan-text rows="3" placeholder="LLM \u672A\u63A5 \u2014 \u53EF\u624B\u5199\u65B9\u6848\u540E\u70B9\u300C\u5C31\u8FD9\u6837\u51FA\u56FE\u300D" style="width:100%;resize:vertical;min-height:72px;padding:8px 10px;border-radius:8px;border:1px solid #2a3140;background:#0e1218;color:inherit;font:inherit;font-size:12.5px;line-height:1.45;"></textarea>
              <div data-ws-plan-actions>
                <button type="button" data-ws-plan-action="plan">${PROMPT_ACTIONS.plan}</button>
                <button type="button" data-ws-plan-action="replan">${PROMPT_ACTIONS.replan}</button>
                <button type="button" data-ws-plan-action="accept" data-primary>${PROMPT_ACTIONS.acceptPlan}</button>
              </div>
            </div>
          </div>

          <div data-ws-cta-footer>
            <button type="button" data-ws-cta style="${css.cta}">${CTA}</button>
            <p data-ws-status style="opacity:.65;font-size:11.5px;min-height:0;margin:0;"></p>
          </div>
        </section>

        <div data-ws-pane-drag="chat" title="\u62D6\u62FD\u8C03\u6574\u7075\u611F/\u5BF9\u8BDD\u680F\u5BBD\u5EA6"></div>
        <!-- RIGHT: \u7075\u611F\u5899 -->
        <aside data-ws-inspire-wall style="width:${state.paneWidths.chat}px;flex-shrink:0;border-left:1px solid #1a1f2a;padding:8px;display:flex;flex-direction:column;gap:8px;background:#0b0d10;overflow:auto;min-height:0;">
          <div style="display:flex;align-items:center;gap:8px;">
            <strong style="font-size:13px;font-weight:650;">${EMPTY.inspiration}</strong>
            <span style="flex:1"></span>
            <button type="button" data-ws-empty="shuffle" style="padding:3px 9px;border:1px solid #2a3140;border-radius:6px;background:transparent;color:#c5cad3;cursor:pointer;font:inherit;font-size:12px;">${EMPTY.shuffle}</button>
          </div>
          <div data-ws-inspire-grid style="display:grid;grid-template-columns:1fr 1fr;gap:10px;align-content:start;flex:1;"></div>
        </aside>
        <aside data-ws-col="chat" style="width:${state.paneWidths.chat}px;flex-shrink:0;border-left:1px solid #1a1f2a;padding:8px;display:none;flex-direction:column;background:#0b0d10;">
          <strong style="font-size:13px;">${COLUMNS.chat}</strong>
          <p style="margin:8px 0 0;font-size:12px;color:#6b7280;">\u5BF9\u8BDD\u7EBF\u7A0B\uFF08\u53EF\u5185\u8054\u51FA\u56FE\uFF09</p>
        </aside>
      </div>
    `;
    host.appendChild(frame);
    host.querySelector("[data-ws-close]")?.addEventListener("click", () => api.close());
    host.querySelector("[data-ws-chat-toggle]")?.addEventListener("click", () => {
      state.chatCollapsed = !state.chatCollapsed;
      paintChat();
    });
    host.querySelectorAll("[data-ws-top]").forEach((btn) => {
      btn.addEventListener("click", () => {
        host.querySelectorAll("[data-ws-top]").forEach((b) => {
          const on = b === btn;
          b.style.background = on ? "#1c2333" : "transparent";
          b.style.color = on ? "#fff" : "#9aa3b2";
        });
      });
    });
    host.querySelector("[data-ws-prompt]")?.addEventListener("input", (e) => {
      const t = (
        /** @type {HTMLTextAreaElement} */
        e.target
      );
      state.prompt = t.value;
    });
    host.querySelector("[data-ws-negative]")?.addEventListener("input", (e) => {
      const t = (
        /** @type {HTMLTextAreaElement} */
        e.target
      );
      state.negativePrompt = t.value;
      syncNegClearBtn();
    });
    host.querySelector("[data-ws-neg-details]")?.addEventListener("toggle", () => {
      syncNegClearBtn();
    });
    host.querySelector("[data-ws-clear-negative]")?.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      state.negativePrompt = "";
      syncFields();
      setStatus("\u5DF2\u6E05\u9664\u8D1F\u9762\u8BCD");
    });
    host.querySelectorAll("[data-ws-mode]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.mode = btn.getAttribute("data-ws-mode") || MODE_TABS[0];
        paintChips();
        setStatus(state.mode === MODE_IMG ? "\u5DF2\u5207\u6362\u5230\u56FE\u751F\u56FE" : "\u5DF2\u5207\u6362\u5230\u6587\u751F\u56FE");
      });
    });
    const applySkillSideEffects = (id) => {
      if (id === "\u4E09\u8054\u5C01\u9762") state.ratio = "3:4";
      if (id === "\u7535\u5F71\u6D77\u62A5") state.ratio = "9:16";
      if (id === "\u7535\u5F71\u4E09\u8054") state.ratio = "21:9";
    };
    host.querySelector('[data-ws-param="skill"]')?.addEventListener("change", (e) => {
      const t = (
        /** @type {HTMLSelectElement} */
        e.target
      );
      const id = t.value || null;
      state.skillId = id;
      if (id) applySkillSideEffects(id);
      else state.skillPlan = null;
      syncFields();
      paintSkillPlan();
      const adv = host.querySelector("[data-ws-advanced]");
      if (adv instanceof HTMLDetailsElement && id) adv.open = true;
      setStatus(id ? `\u5DF2\u9009\u300C${id}\u300D\uFF08\u53EF\u9009\uFF1B\u51FA\u56FE\u4ECD\u4E0D\u5F3A\u5236\uFF09` : "\u5DF2\u53D6\u6D88 Skill");
    });
    host.querySelector("[data-ws-param-row]")?.addEventListener("click", (e) => {
      const t = (
        /** @type {HTMLElement | null} */
        e.target instanceof Element ? e.target.closest("[data-ws-param][data-value]") : null
      );
      if (!t) return;
      const param = t.getAttribute("data-ws-param");
      const value = t.getAttribute("data-value");
      if (!param || value == null) return;
      if (param === "ratio") state.ratio = value || RATIOS[0];
      else if (param === "clarity") state.clarity = value || CLARITY[0];
      else if (param === "count") state.count = Number(value) || 1;
      else if (param === "detail") state.detail = value || DETAIL_OPTS[0];
      paintChips();
    });
    host.querySelector("[data-ws-history-clear]")?.addEventListener("click", () => {
      const histEl = host.querySelector("[data-ws-history-list]");
      if (histEl) histEl.innerHTML = "";
      historyStore.clear();
      activeHistoryId = null;
      paintHistoryEmpty();
      paintStageIdle();
      setStatus("\u5DF2\u6E05\u7A7A\u5386\u53F2");
    });
    host.querySelector('[data-ws-param="model"]')?.addEventListener("input", (e) => {
      const t = (
        /** @type {HTMLInputElement} */
        e.target
      );
      state.modelId = t.value;
    });
    host.querySelector("[data-ws-compare]")?.addEventListener("change", (e) => {
      const t = (
        /** @type {HTMLInputElement} */
        e.target
      );
      state.compareModels = !!t.checked;
    });
    host.querySelector('[data-ws-action="enhance"]')?.addEventListener("click", () => {
      setStatus(`\u5DF2\u8BF7\u6C42\u300C${PROMPT_ACTIONS.enhance}\u300D`);
    });
    host.querySelector('[data-ws-action="templates"]')?.addEventListener("click", () => {
      setStatus(`\u300C${PROMPT_ACTIONS.templates}\u300D`);
    });
    host.querySelector('[data-ws-empty="shuffle"]')?.addEventListener("click", () => {
      paintInspiration();
      setStatus(`\u5DF2${EMPTY.shuffle}`);
    });
    const cta = host.querySelector("[data-ws-cta]");
    if (cta instanceof HTMLButtonElement) {
      cta.disabled = false;
      cta.removeAttribute("disabled");
    }
    const dispatchGenerate = (extra = {}) => {
      beginLocalProgress();
      setStatus("\u51FA\u56FE\u4E2D\u2026");
      host.dispatchEvent(
        new CustomEvent("dsh-ws-generate", {
          bubbles: true,
          detail: {
            prompt: state.prompt,
            negativePrompt: state.negativePrompt,
            mode: state.mode,
            skillId: state.skillId,
            skillPlan: state.skillPlan,
            ratio: state.ratio,
            clarity: state.clarity,
            count: state.count,
            detail: state.detail,
            modelId: state.modelId,
            compareModels: !!state.compareModels,
            refImages: Array.isArray(state.refImages) ? state.refImages : [],
            // selfCheck never gates — score never disables CTA
            selfCheck: state.selfCheck,
            ...extra
          }
        })
      );
    };
    cta?.addEventListener("click", () => dispatchGenerate());
    const addRefFromFile = (file) => {
      if (!(file instanceof File) || !file.type.startsWith("image/")) return;
      const id = `ref-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
      const url = URL.createObjectURL(file);
      const reader = new FileReader();
      reader.onload = () => {
        const dataUrl = typeof reader.result === "string" ? reader.result : url;
        state.refImages = [...state.refImages || [], { id, url: dataUrl, name: file.name }];
        try {
          URL.revokeObjectURL(url);
        } catch (_) {
        }
        paintRefSlot();
        setStatus(`\u5DF2\u6DFB\u52A0\u53C2\u8003\u56FE\u300C${file.name || "image"}\u300D`);
      };
      reader.onerror = () => {
        state.refImages = [...state.refImages || [], { id, url, name: file.name }];
        paintRefSlot();
      };
      reader.readAsDataURL(file);
    };
    const refFile = host.querySelector("[data-ws-ref-file]");
    const refUpload = host.querySelector("[data-ws-ref-upload]");
    const refDrop = host.querySelector("[data-ws-ref-drop]");
    refUpload?.addEventListener("click", () => {
      if (refFile instanceof HTMLInputElement) refFile.click();
    });
    refFile?.addEventListener("change", (e) => {
      const input = (
        /** @type {HTMLInputElement} */
        e.target
      );
      for (const f of Array.from(input.files || [])) addRefFromFile(f);
      input.value = "";
    });
    refDrop?.addEventListener("click", () => {
      if (refFile instanceof HTMLInputElement) refFile.click();
    });
    ["dragenter", "dragover"].forEach((evName) => {
      refDrop?.addEventListener(evName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (refDrop instanceof HTMLElement) refDrop.setAttribute("data-dragover", "");
      });
    });
    ["dragleave", "drop"].forEach((evName) => {
      refDrop?.addEventListener(evName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (refDrop instanceof HTMLElement) refDrop.removeAttribute("data-dragover");
      });
    });
    refDrop?.addEventListener("drop", (e) => {
      const dt = (
        /** @type {DragEvent} */
        e.dataTransfer
      );
      for (const f of Array.from(dt?.files || [])) addRefFromFile(f);
    });
    host.addEventListener("paste", (e) => {
      if (state.mode !== MODE_IMG) return;
      const items = Array.from(e.clipboardData?.items || []);
      let found = false;
      for (const it of items) {
        if (it.type.startsWith("image/")) {
          const f = it.getAsFile();
          if (f) {
            addRefFromFile(f);
            found = true;
          }
        }
      }
      if (found) e.preventDefault();
    });
    host.querySelector("[data-ws-plan-text]")?.addEventListener("input", (e) => {
      const t = (
        /** @type {HTMLTextAreaElement} */
        e.target
      );
      state.skillPlan = t.value;
    });
    host.querySelectorAll("[data-ws-plan-action]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const action = btn.getAttribute("data-ws-plan-action");
        if (action === "plan" || action === "replan") {
          const ta = host.querySelector("[data-ws-plan-text]");
          if (ta instanceof HTMLTextAreaElement) {
            ta.placeholder = "LLM \u672A\u63A5 \u2014 \u53EF\u624B\u5199\u65B9\u6848\u540E\u70B9\u300C\u5C31\u8FD9\u6837\u51FA\u56FE\u300D";
          }
          paintSkillPlan();
          host.dispatchEvent(
            new CustomEvent("dsh-ws-plan", {
              bubbles: true,
              detail: { action, skillId: state.skillId, prompt: state.prompt, skillPlan: state.skillPlan }
            })
          );
          setStatus("LLM \u672A\u63A5 / \u60F3\u65B9\u6848\u672A\u63A5\u5BBF\u4E3B\uFF08\u53EF\u624B\u5199\u65B9\u6848\u540E\u51FA\u56FE\uFF09");
        } else if (action === "accept") {
          dispatchGenerate({ fromPlan: true });
        }
      });
    });
    host.querySelector("[data-ws-cancel]")?.addEventListener("click", () => {
      stopProgressClock();
      state.task = {
        ...state.task || {},
        status: "cancelled",
        phase: "cancelled",
        elapsedMs: progressStartedAt ? Date.now() - progressStartedAt : state.task?.elapsedMs || 0
      };
      paintProgressUi();
      setStatus("\u5BA2\u6237\u7AEF\u5DF2\u53D6\u6D88\uFF1B\u5BBF\u4E3B\u53D6\u6D88\u672A\u6302");
      host.dispatchEvent(
        new CustomEvent("dsh-ws-cancel", {
          bubbles: true,
          detail: { jobId: state.task?.id, reason: "user" }
        })
      );
    });
    host.querySelector("[data-ws-retry]")?.addEventListener("click", () => {
      dispatchGenerate({ retry: true });
    });
    host.querySelector("[data-ws-result-actions]")?.addEventListener("click", (e) => {
      const btn = e.target instanceof Element ? e.target.closest("[data-ws-result-action]") : null;
      if (!btn) return;
      const action = btn.getAttribute("data-ws-result-action") || "";
      const firstImg = host.querySelector("[data-ws-results] img[data-ws-result]");
      const src = firstImg instanceof HTMLImageElement ? firstImg.src : "";
      const UNWIRED = /* @__PURE__ */ new Set(["\u52A0\u753B\u5ECA", "\u52A0\u5BF9\u8BDD", "\u62FF\u53BB\u505A\u89C6\u9891"]);
      if (action === "\u4E0B\u8F7D") {
        if (src) {
          const a = document.createElement("a");
          a.href = src;
          a.download = `dsh-ws-${Date.now()}.png`;
          a.rel = "noopener";
          a.click();
          setStatus("\u5DF2\u4E0B\u8F7D");
        } else {
          setStatus("\u65E0\u56FE\u53EF\u4E0B\u8F7D");
        }
        return;
      }
      if (action === "\u590D\u5236\u63D0\u793A\u8BCD") {
        const textPrompt = state.prompt || "";
        if (navigator.clipboard?.writeText) navigator.clipboard.writeText(textPrompt).catch(() => {
        });
        setStatus(textPrompt ? "\u5DF2\u590D\u5236\u63D0\u793A\u8BCD" : "\u65E0\u63D0\u793A\u8BCD\u53EF\u590D\u5236");
        return;
      }
      if (action === "\u5F53\u53C2\u8003\u56FE") {
        if (src) {
          state.mode = MODE_IMG;
          state.refImages = [
            ...state.refImages || [],
            { id: `ref-result-${Date.now()}`, url: src, name: "\u7ED3\u679C\u53C2\u8003" }
          ];
          paintChips();
          setStatus("\u5DF2\u8BBE\u4E3A\u53C2\u8003\u56FE");
        } else {
          setStatus("\u65E0\u56FE\u53EF\u4F5C\u53C2\u8003");
        }
        return;
      }
      if (action === "\u91CD\u65B0\u751F\u6210") {
        dispatchGenerate({ regenerate: true });
        return;
      }
      if (UNWIRED.has(action)) {
        setStatus(`\u300C${action}\u300D\u672A\u63A5\u7EBF`);
        return;
      }
      host.dispatchEvent(
        new CustomEvent("dsh-ws-result-action", {
          bubbles: true,
          detail: { action, src, prompt: state.prompt }
        })
      );
      setStatus(`\u300C${action}\u300D\u672A\u63A5\u7EBF`);
    });
    const applyColWidths = () => {
      const hist = host.querySelector('[data-ws-col="history"]');
      const chat = host.querySelector('[data-ws-col="chat"]');
      const wall = host.querySelector("[data-ws-inspire-wall]");
      if (hist instanceof HTMLElement) hist.style.width = `${state.paneWidths.history}px`;
      if (chat instanceof HTMLElement) chat.style.width = `${state.paneWidths.chat}px`;
      if (wall instanceof HTMLElement) wall.style.width = `${state.paneWidths.chat}px`;
    };
    applyColWidths();
    host.querySelectorAll("[data-ws-pane-drag]").forEach((handle) => {
      handle.addEventListener("mousedown", (ev) => {
        ev.preventDefault();
        const which = handle.getAttribute("data-ws-pane-drag");
        handle.setAttribute("data-active", "");
        const startX = (
          /** @type {MouseEvent} */
          ev.clientX
        );
        const startHist = state.paneWidths.history;
        const startChat = state.paneWidths.chat;
        const onMove = (e) => {
          const dx = e.clientX - startX;
          if (which === "history") {
            state.paneWidths.history = Math.max(180, Math.min(480, startHist + dx));
          } else if (which === "chat") {
            state.paneWidths.chat = Math.max(220, Math.min(520, startChat - dx));
          }
          applyColWidths();
        };
        const onUp = () => {
          handle.removeAttribute("data-active");
          document.removeEventListener("mousemove", onMove);
          document.removeEventListener("mouseup", onUp);
          savePaneWidths();
        };
        document.addEventListener("mousemove", onMove);
        document.addEventListener("mouseup", onUp);
      });
    });
    mountStudioHostEl(host);
    paintChat();
    syncFields();
    paintInspiration();
    paintStageIdle();
    paintHistoryEmpty();
    paintRefSlot();
    paintSkillPlan();
    paintConnStatus(true);
    return host;
  };
  const api = {
    open() {
      const el = ensure();
      mountStudioHostEl(el);
      el.style.display = "flex";
      open = true;
    },
    close() {
      if (host) host.style.display = "none";
      open = false;
    },
    isOpen() {
      return open;
    },
    /** @param {string} text skill 预填负面词 */
    setNegativePrompt(text) {
      ensure();
      state.negativePrompt = text || "";
      syncFields();
      const details = host?.querySelector("[data-ws-neg-details]");
      if (details instanceof HTMLDetailsElement && state.negativePrompt) details.open = true;
    },
    /** @param {string} text */
    setStatus(text) {
      ensure();
      setStatus(text);
    },
    /** @param {boolean} on */
    setConnected(on) {
      ensure();
      paintConnStatus(!!on);
    },
    getHostEl() {
      return host;
    },
    /**
     * Progress UI: 进度 · 耗时 · 取消
     * @param {{ progress?: number, elapsedMs?: number, phase?: string, status?: string, error?: string, id?: string }} value
     */
    setProgress(value) {
      ensure();
      applyProgress(value);
    },
    /**
     * Paint generate RPC result into stage + history thumbs.
     * Accepts phase progress / failed / done payloads.
     * @param {{ jobId?: string, phase?: string, status?: string, progress?: number, elapsedMs?: number, error?: string, results?: Array<{ url?: string, localPath?: string, kind?: string }> }} value
     */
    paintGenerateResult(value) {
      ensure();
      applyGenerateResult(value);
    },
    dispose() {
      stopProgressClock();
      host?.remove();
      host = void 0;
      open = false;
      historyStore.clear();
      activeHistoryId = null;
    }
  };
  return api;
}
function pickDisplayUrl(r) {
  const url = r?.url ? String(r.url) : "";
  if (!url) return "";
  if (/^https?:\/\//i.test(url)) return url;
  if (url.startsWith("data:")) return url;
  if (url.startsWith("blob:")) return url;
  if (/^file:/i.test(url)) return "";
  return url;
}
function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// src/shared/ns.js
var SETTINGS_NAMESPACE = "dsh-image-workstation";
var PLUGIN_ENTRY_ID = "imagegen";

// src/client/settings-card.js
var NS = SETTINGS_NAMESPACE;
var ENTRY = PLUGIN_ENTRY_ID;
function WorkstationSettingsCard(props) {
  const React = props.react || require("react");
  const h = React.createElement;
  const { useState, useEffect, useCallback } = React;
  const scope = props.settingsScope;
  const connection = props.connection;
  const [baseUrl, setBaseUrl] = useState("");
  const [apiKeyDraft, setApiKeyDraft] = useState("");
  const [provider, setProvider] = useState("openai-images");
  const [allowAgent, setAllowAgent] = useState(true);
  const [keyConfigured, setKeyConfigured] = useState(false);
  const [revision, setRevision] = useState(void 0);
  const [status, setStatus] = useState("");
  const [models, setModels] = useState([]);
  const [busy, setBusy] = useState(false);
  const [open, setOpen] = useState(false);
  const pull = useCallback(() => {
    if (!scope?.getSnapshot) return;
    const snap = scope.getSnapshot();
    if (snap?.status === "ready" && snap.value) {
      const v = snap.value;
      setBaseUrl(String(v.mediaBaseUrl || ""));
      setProvider(v.mediaProvider === "anthropic-compat" ? "anthropic-compat" : "openai-images");
      setAllowAgent(v.allowAgentImageGeneration !== false);
      const secrets = snap.secrets || {};
      const secretMeta = secrets.mediaApiKey;
      const keySet = secretMeta === true || secretMeta?.set === true || typeof secretMeta === "object" && secretMeta != null && "set" in secretMeta && secretMeta.set;
      setKeyConfigured(Boolean(keySet));
      setRevision(snap.revision);
    }
  }, [scope]);
  useEffect(() => {
    pull();
    const off = scope?.subscribe?.(pull);
    scope?.ensure?.();
    return typeof off === "function" ? off : void 0;
  }, [scope, pull]);
  const onSave = async () => {
    if (!scope?.mutate && !scope?.set) {
      setStatus("settingsScope unavailable");
      return;
    }
    setBusy(true);
    setStatus("Saving\u2026");
    try {
      const ops = [
        { op: "set", path: ["mediaBaseUrl"], value: baseUrl.trim() },
        { op: "set", path: ["mediaProvider"], value: provider },
        { op: "set", path: ["allowAgentImageGeneration"], value: allowAgent }
      ];
      if (apiKeyDraft.trim()) {
        ops.push({ op: "set", path: ["mediaApiKey"], value: apiKeyDraft.trim() });
      }
      if (typeof scope.mutate === "function") {
        await scope.mutate(ops, revision);
      } else {
        for (const op of ops) await scope.set(op.path[0], op.value);
      }
      setApiKeyDraft("");
      if (apiKeyDraft.trim()) setKeyConfigured(true);
      setStatus("Saved (key stored on host only)");
      pull();
    } catch (e) {
      setStatus(`Save failed: ${e?.message || e}`);
    } finally {
      setBusy(false);
    }
  };
  const onProbe = async () => {
    const rpc = connection?.rpc;
    if (!rpc?.call) {
      setStatus("connection.rpc unavailable");
      return;
    }
    setBusy(true);
    setStatus("Detecting\u2026");
    setModels([]);
    try {
      const result = await rpc.call("/dsh-ws", "probe", {});
      if (result?.ok) {
        const list = result.value?.models || [];
        setModels(list.slice(0, 40));
        setStatus(`Detected ${result.value?.count ?? list.length} models`);
      } else {
        setStatus(
          `Detect failed: ${result?.error?.message || "unknown"}${result?.error?.code ? ` (${result.error.code})` : ""}`
        );
      }
    } catch (e) {
      setStatus(`Detect failed: ${e?.message || e}`);
    } finally {
      setBusy(false);
    }
  };
  const canDetect = Boolean(baseUrl.trim() && (keyConfigured || apiKeyDraft.trim()));
  const detectDisabled = busy || !canDetect;
  const fg = "var(--dsw-alias-label-primary, #1a1d24)";
  const fgMuted = "var(--dsw-alias-label-tertiary, #6b7280)";
  const fgSecondary = "var(--dsw-alias-label-secondary, #4b5563)";
  const border = "0.5px solid var(--dsw-alias-border-l4, #d8dbe2)";
  const borderStrong = "0.5px solid var(--dsw-alias-border-l3, #c9cdd6)";
  const inputBg = "var(--dsw-alias-bg-layer-1, #fff)";
  const layer3 = "var(--dsw-alias-bg-layer-3, #fff)";
  const fieldStyle = { display: "flex", flexDirection: "column", gap: 6, marginBottom: 12, fontSize: 13 };
  const inputStyle = {
    padding: "8px 10px",
    borderRadius: 8,
    border,
    background: inputBg,
    color: fg,
    font: "inherit"
  };
  const btnBase = {
    padding: "0 14px",
    height: 36,
    borderRadius: 18,
    font: "inherit",
    fontSize: 14,
    lineHeight: "22px"
  };
  const primaryStyle = {
    ...btnBase,
    border: 0,
    background: "var(--dsw-alias-button-primary-fill, #1a1d24)",
    color: "var(--dsw-alias-label-primary-foreground, #fff)",
    fontWeight: 650,
    cursor: busy ? "wait" : "pointer"
  };
  const detectStyle = detectDisabled ? {
    ...btnBase,
    border: borderStrong,
    background: "transparent",
    color: fgMuted,
    cursor: "not-allowed",
    opacity: 0.35,
    pointerEvents: "none"
  } : {
    ...btnBase,
    border: borderStrong,
    background: "transparent",
    color: fg,
    cursor: busy ? "wait" : "pointer",
    opacity: 1,
    pointerEvents: "auto"
  };
  return h(
    "div",
    {
      "data-dsh-ws-settings-card": "",
      style: {
        border,
        borderRadius: 12,
        background: "transparent",
        color: fg,
        marginBottom: 12,
        overflow: "hidden",
        font: "13px/1.45 system-ui,sans-serif"
      }
    },
    h(
      "button",
      {
        type: "button",
        onClick: () => setOpen((v) => !v),
        style: {
          width: "100%",
          textAlign: "left",
          padding: "12px 14px",
          border: 0,
          background: "transparent",
          color: "inherit",
          cursor: "pointer",
          font: "inherit"
        }
      },
      h("div", { style: { fontWeight: 650, fontSize: 14 } }, "Image workstation"),
      h(
        "div",
        {
          style: {
            fontSize: 12,
            color: fgMuted,
            marginTop: 3
          }
        },
        "\u751F\u56FE\u5DE5\u4F5C\u53F0"
      ),
      h(
        "div",
        {
          style: {
            fontSize: 11,
            color: fgMuted,
            marginTop: 3,
            fontFamily: "var(--ds-font-family-code, ui-monospace, SFMono-Regular, Menlo, monospace)"
          }
        },
        `${NS} \xB7 ${ENTRY}`
      )
    ),
    open ? h(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          maxHeight: "min(60vh, 480px)"
        }
      },
      h(
        "div",
        {
          style: {
            padding: "0 14px",
            overflow: "auto",
            flex: "1 1 auto"
          }
        },
        h(
          "label",
          { style: fieldStyle },
          h("span", { style: { color: fgSecondary, fontWeight: 500 } }, "API base URL"),
          h("input", {
            style: inputStyle,
            value: baseUrl,
            placeholder: "Base URL (OpenAI-compatible)",
            onChange: (e) => setBaseUrl(e.target.value),
            disabled: busy
          })
        ),
        h(
          "label",
          { style: fieldStyle },
          h(
            "span",
            { style: { display: "flex", justifyContent: "space-between" } },
            h("span", { style: { color: fgSecondary, fontWeight: 500 } }, "API key"),
            h(
              "span",
              { style: { color: fgMuted, fontSize: 12 } },
              keyConfigured ? "Configured" : "Not configured"
            )
          ),
          h("input", {
            style: inputStyle,
            type: "password",
            autoComplete: "new-password",
            value: apiKeyDraft,
            placeholder: keyConfigured ? "Leave blank to keep stored key" : "Paste key, then Save",
            onChange: (e) => setApiKeyDraft(e.target.value),
            disabled: busy
          })
        ),
        h(
          "label",
          { style: fieldStyle },
          h("span", { style: { color: fgSecondary, fontWeight: 500 } }, "Provider"),
          h(
            "select",
            {
              style: inputStyle,
              value: provider,
              onChange: (e) => setProvider(e.target.value),
              disabled: busy
            },
            h("option", { value: "openai-images" }, "openai-images"),
            h("option", { value: "anthropic-compat" }, "anthropic-compat")
          )
        ),
        h(
          "label",
          { style: { ...fieldStyle, flexDirection: "row", alignItems: "center", gap: 8 } },
          h("input", {
            type: "checkbox",
            checked: allowAgent,
            onChange: (e) => setAllowAgent(e.target.checked),
            disabled: busy
          }),
          h("span", { style: { color: fg } }, "Allow agent image gen")
        ),
        status ? h("p", { style: { margin: "0 0 10px", fontSize: 12, color: fgMuted } }, status) : null,
        models.length ? h(
          "ul",
          {
            style: {
              margin: "0 0 10px",
              paddingLeft: 18,
              fontSize: 12,
              color: fgSecondary,
              maxHeight: 120,
              overflow: "auto"
            }
          },
          models.map((m) => h("li", { key: m }, m))
        ) : null
      ),
      h(
        "div",
        {
          style: {
            position: "sticky",
            bottom: 0,
            background: layer3,
            padding: "10px 14px 14px",
            borderTop: border,
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            flexShrink: 0
          }
        },
        h("button", { type: "button", style: primaryStyle, disabled: busy, onClick: onSave }, "Save"),
        h(
          "button",
          {
            type: "button",
            style: detectStyle,
            disabled: detectDisabled,
            "aria-disabled": detectDisabled ? "true" : "false",
            onClick: detectDisabled ? void 0 : onProbe,
            title: canDetect ? "Detect available models" : "Set API base URL and configure a key first"
          },
          "Detect models"
        )
      )
    ) : null
  );
}
function mountSettingsCard(ctx) {
  if (!ctx?.slots?.inject || !ctx?.slots?.register) {
    ctx?.logger?.warn?.("[dsh-image-workstation] slots unavailable \u2014 settings card skipped");
    return;
  }
  if (!ctx.settingsScope?.bind) {
    ctx?.logger?.warn?.("[dsh-image-workstation] settingsScope unavailable \u2014 settings card skipped");
    return;
  }
  const scope = ctx.settingsScope.bind({ namespace: NS });
  const react = require("react");
  ctx.slots.inject("settings.plugin.item", function* () {
    yield ctx.slots.register(
      {
        name: "settings.plugin.item",
        key: NS,
        inject: () => ({
          settingsScope: scope,
          connection: ctx.connection,
          react
        })
      },
      WorkstationSettingsCard
    );
  });
  ctx.logger?.info?.(`[dsh-image-workstation] settings card registered key=${NS} entry=${ENTRY}`);
}

// src/protocol/rpc-errors.js
var HOST_GENERATE_TIMEOUT_MS = 12e4;
var CLIENT_GENERATE_TIMEOUT_MS = 13e4;
function scrubErrorMessage(msg) {
  return String(msg || "generate failed").replace(/Bearer\s+\S+/gi, "Bearer [redacted]").replace(/sk-[A-Za-z0-9._-]{8,}/g, "[redacted]").replace(/[A-Za-z0-9_-]{24,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}/g, "[redacted-jwt]").slice(0, 500);
}
function formatClientRpcFailure(err) {
  const name2 = err && typeof err === "object" && "name" in err ? String(err.name) : "";
  const raw = scrubErrorMessage(err?.message || err);
  if (name2 === "AbortError" || /aborted|AbortError|The operation was aborted/i.test(raw)) {
    return `\u51FA\u56FE\u5931\u8D25\uFF1A\u8BF7\u6C42\u8D85\u65F6\u6216\u5DF2\u53D6\u6D88\uFF08\u8D85\u8FC7 ${Math.round(CLIENT_GENERATE_TIMEOUT_MS / 1e3)}s \u672A\u4ECE\u5BBF\u4E3B\u8FD4\u56DE\uFF09\u3002\u8BF7\u91CD\u8BD5\uFF1B\u82E5\u6301\u7EED\u8D85\u65F6\uFF0C\u68C0\u67E5\u4E0A\u6E38\u662F\u5426\u6302\u8D77/503\u3002`;
  }
  if (/Failed to fetch|NetworkError|Load failed|network error/i.test(raw)) {
    return "\u51FA\u56FE\u5931\u8D25\uFF1A\u65E0\u6CD5\u5B8C\u6210 host RPC\uFF08\u6D4F\u89C8\u5668\u62A5 Failed to fetch / \u7F51\u7EDC\u4E2D\u65AD\uFF0C\u6216\u8BF7\u6C42\u5728\u5BBF\u4E3B\u8FD4\u56DE\u524D\u88AB\u65AD\u5F00\uFF09\u3002\u8FD9\u4E0D\u662F\u7B3C\u7EDF\u201C\u5931\u8D25\u201D\u2014\u2014\u8BF7\u770B\u5BBF\u4E3B\u65E5\u5FD7\u91CC\u7684\u4E0A\u6E38\u72B6\u6001\uFF1B\u6B63\u5E38\u4E0A\u6E38\u9519\u8BEF\u5E94\u7ECF /dsh-ws \u4EE5 scrubbed message \u8FD4\u56DE\u3002";
  }
  if (/transport failure/i.test(raw)) {
    return `\u51FA\u56FE\u5931\u8D25\uFF1A${raw}\uFF08\u5BBF\u4E3B\u672A\u8FD4\u56DE\u5408\u6CD5 RPC \u4FE1\u5C01\u65F6\u4F1A\u51FA\u73B0\uFF1B\u8BF7\u67E5 host \u65E5\u5FD7\uFF09`;
  }
  return `\u51FA\u56FE\u5931\u8D25\uFF1A${raw}`;
}
function formatHostGenerateError(error) {
  const code = error?.code ? String(error.code) : "";
  const message = scrubErrorMessage(error?.message || "unknown");
  if (code === "GENERATE_TIMEOUT") {
    return `\u51FA\u56FE\u5931\u8D25\uFF1A\u5BBF\u4E3B\u7B49\u5F85\u4E0A\u6E38\u8D85\u65F6\uFF08${Math.round(HOST_GENERATE_TIMEOUT_MS / 1e3)}s\uFF09\u3002${message}${code ? `\uFF08${code}\uFF09` : ""}`;
  }
  if (code === "UPSTREAM_HTTP" || /HTTP\s*503/i.test(message)) {
    return `\u51FA\u56FE\u5931\u8D25\uFF1A${message}${code ? `\uFF08${code}\uFF09` : ""}`;
  }
  return `\u51FA\u56FE\u5931\u8D25\uFF1A${message}${code ? `\uFF08${code}\uFF09` : ""}`;
}

// src/client.js
var name = "dsh-image-workstation/client";
var inject = ["slots", "locale", "connection", "sessions", "conversation", "settingsScope"];
var CTA_RPC_CHANNEL = "/dsh-ws";
var CTA_RPC_GENERATE = "generate";
function apply(ctx, _config) {
  ctx.logger?.info?.(
    `[dsh-image-workstation] client \u2014 sidebar\u300C\u751F\u56FE\u300D+ CTA\u2192${CTA_RPC_CHANNEL}/${CTA_RPC_GENERATE}`
  );
  const studio = createStudioHost();
  const disposers = [];
  let inflight = false;
  let inflightAbort = null;
  const syncConnected = () => {
    const c = ctx.connection;
    const on = !!(c && (c.state === "connected" || c.connected === true || c.rpc));
    studio.setConnected?.(on);
  };
  try {
    syncConnected();
  } catch (_) {
  }
  const onGenerate = async (ev) => {
    const detail = ev?.detail && typeof ev.detail === "object" ? ev.detail : {};
    if (inflight) {
      studio.setStatus("\u5DF2\u6709\u51FA\u56FE\u4EFB\u52A1\u8FDB\u884C\u4E2D\u2026");
      return;
    }
    if (!String(detail.prompt || "").trim()) {
      studio.setStatus("\u8BF7\u5148\u8F93\u5165\u63D0\u793A\u8BCD\uFF08\u4E0D\u9009 Skill \u4E5F\u53EF\u51FA\u56FE\uFF09");
      studio.paintGenerateResult?.({ phase: "failed", error: "\u8BF7\u5148\u8F93\u5165\u63D0\u793A\u8BCD\uFF08\u4E0D\u9009 Skill \u4E5F\u53EF\u51FA\u56FE\uFF09" });
      return;
    }
    const rpc = ctx.connection?.rpc;
    if (!rpc || typeof rpc.call !== "function") {
      const msg = "\u8FDE\u63A5\u4E0D\u53EF\u7528\uFF0C\u65E0\u6CD5\u51FA\u56FE";
      studio.setStatus(msg);
      studio.setConnected?.(false);
      studio.paintGenerateResult?.({ phase: "failed", error: msg });
      return;
    }
    inflight = true;
    studio.setConnected?.(true);
    studio.setStatus("\u7B49\u5F85\u5BBF\u4E3B\u8FDB\u5EA6\u2026");
    studio.setProgress?.({ status: "running", phase: "submitted", elapsedMs: 0 });
    const ac = new AbortController();
    inflightAbort = ac;
    const started = Date.now();
    const timer = setTimeout(() => ac.abort(), CLIENT_GENERATE_TIMEOUT_MS);
    try {
      const result = await rpc.call(
        CTA_RPC_CHANNEL,
        CTA_RPC_GENERATE,
        {
          prompt: detail.prompt,
          negativePrompt: detail.negativePrompt,
          mode: detail.mode,
          skillId: detail.skillId,
          skillPlan: detail.skillPlan,
          ratio: detail.ratio,
          clarity: detail.clarity,
          count: detail.count,
          detail: detail.detail,
          modelId: detail.modelId,
          compareModels: detail.compareModels,
          refImages: detail.refImages
        },
        ac.signal
      );
      if (result?.ok) {
        studio.paintGenerateResult({
          ...result.value || {},
          phase: result.value?.phase || "done",
          elapsedMs: Date.now() - started
        });
      } else {
        const msg = formatHostGenerateError(result?.error || {});
        studio.setStatus(msg);
        studio.paintGenerateResult({ phase: "failed", error: msg, elapsedMs: Date.now() - started });
      }
    } catch (e) {
      if (ac.signal.aborted) {
        studio.paintGenerateResult({ phase: "cancelled", elapsedMs: Date.now() - started });
        studio.setStatus("\u5BA2\u6237\u7AEF\u5DF2\u53D6\u6D88\uFF1B\u5BBF\u4E3B\u53D6\u6D88\u672A\u6302");
      } else {
        const msg = formatClientRpcFailure(e);
        studio.setStatus(msg);
        studio.paintGenerateResult({ phase: "failed", error: msg, elapsedMs: Date.now() - started });
        console.warn("[dsh-image-workstation] CTA RPC failed:", scrubErrorMessage(e?.message || e));
      }
    } finally {
      clearTimeout(timer);
      inflight = false;
      inflightAbort = null;
    }
  };
  const onCancel = () => {
    if (inflightAbort) {
      try {
        inflightAbort.abort();
      } catch (_) {
      }
      studio.setStatus("\u5BA2\u6237\u7AEF\u5DF2\u53D6\u6D88\uFF1B\u5BBF\u4E3B\u53D6\u6D88\u672A\u6302");
    }
  };
  try {
    mountSettingsCard(ctx);
  } catch (error) {
    console.warn("[dsh-image-workstation] settings card mount failed:", error);
  }
  try {
    disposers.push(
      mountSidebarEntry({
        labels: { newSession: "\u65B0\u4F1A\u8BDD", studio: "\u751F\u56FE" },
        onNewSession: () => studio.close(),
        onStudio: () => studio.open()
      })
    );
    document.addEventListener("dsh-ws-generate", onGenerate);
    document.addEventListener("dsh-ws-cancel", onCancel);
    disposers.push(() => document.removeEventListener("dsh-ws-generate", onGenerate));
    disposers.push(() => document.removeEventListener("dsh-ws-cancel", onCancel));
    disposers.push(() => studio.dispose());
  } catch (error) {
    console.warn("[dsh-image-workstation] sidebar/CTA mount failed:", error);
  }
  ctx.effect?.(() => () => {
    for (const d of disposers.splice(0)) d();
  }, "dsh-image-workstation: sidebar+studio+cta-rpc");
}

		return module.exports;
	}
});
