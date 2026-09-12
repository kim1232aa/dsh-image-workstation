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
  CTA_RPC_CHANNEL: () => CTA_RPC_CHANNEL2,
  CTA_RPC_ENHANCE_PROMPT: () => CTA_RPC_ENHANCE_PROMPT,
  CTA_RPC_GALLERY_ADD: () => CTA_RPC_GALLERY_ADD,
  CTA_RPC_GENERATE: () => CTA_RPC_GENERATE,
  CTA_RPC_REVERSE_PROMPT: () => CTA_RPC_REVERSE_PROMPT,
  CTA_RPC_STORAGE_PATHS: () => CTA_RPC_STORAGE_PATHS2,
  CTA_RPC_VIDEO_GENERATE: () => CTA_RPC_VIDEO_GENERATE,
  SKILL_ENTRIES: () => SKILL_ENTRIES,
  SKILL_RPC_CHANNEL: () => SKILL_RPC_CHANNEL,
  SKILL_RPC_PLAN: () => SKILL_RPC_PLAN,
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
  "\u62FF\u53BB\u505A\u89C6\u9891",
  "\u518D\u7F16\u8F91"
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
var VIDEO_CTA = "\u5F00\u59CB\u751F\u6210";
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
var GIF_TITLE = "GIF";
var GIF_PARAMS = Object.freeze({
  frames: "\u5E27\u6570",
  fps: "\u5E27\u7387",
  loops: "\u5FAA\u73AF\u6B21\u6570",
  size: "\u5C3A\u5BF8"
});
var GIF_FRAME_ACTIONS = Object.freeze([
  "\u5355\u5E27\u91CD\u65B0\u751F\u6210",
  "\u5220\u5E27",
  "\u8C03\u987A\u5E8F"
]);
var GIF_ACTIONS = Object.freeze({
  exportGif: "\u5BFC\u51FA GIF",
  addGallery: "\u52A0\u753B\u5ECA"
});
var GIF_CTA = "\u5F00\u59CB\u751F\u6210";
var UI_DESIGN_TITLE = "UI \u8BBE\u8BA1";
var UI_DESIGN_STEPS = Object.freeze([
  "\u4E0A\u4F20\u8BBE\u8BA1\u7A3F",
  "AI \u5207\u56FE",
  "\u5207\u56FE\u7F16\u8F91",
  "\u7D20\u6750\u5904\u7406",
  "\u80CC\u666F\u586B\u5145",
  "\u7F51\u9875\u590D\u523B",
  "\u5BFC\u51FA"
]);
var UI_DESIGN_LABELS = Object.freeze({
  upload: "\u4E0A\u4F20\u8BBE\u8BA1\u7A3F",
  aiSlice: "AI \u5207\u56FE",
  confirm: "\u786E\u8BA4",
  original: "\u539F\u56FE",
  cutout: "\u62A0\u56FE\u7ED3\u679C",
  slicesOnly: "\u53EA\u770B\u5207\u7247",
  algoCutout: "\u7B97\u6CD5\u62A0\u900F\u660E",
  aiCutout: "AI \u62A0\u900F\u660E",
  algoSvg: "\u7B97\u6CD5\u8F6C SVG",
  aiSvg: "AI \u91CD\u7ED8 SVG",
  localComposite: "\u672C\u5730\u5408\u6210\u7248",
  aiOriginal: "AI \u539F\u56FE\u7248",
  export: "\u5BFC\u51FA"
});
var TEMPLATE_TITLE = "\u6A21\u677F\u5E93";
var TEMPLATE_LABELS = Object.freeze({
  square: "\u63D0\u793A\u8BCD\u5E7F\u573A",
  inspire: "\u7075\u611F\u6848\u4F8B",
  shuffle: "\u968F\u673A",
  favorite: "\u6536\u85CF",
  fill: "\u4E00\u952E\u56DE\u586B"
});
var TOOL_MORE = "\u66F4\u591A";
var TOOL_ENTRIES = Object.freeze(["\u53CD\u63A8\u63D0\u793A\u8BCD", "GIF", "UI \u8BBE\u8BA1"]);

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

// src/client/video-host.js
var VIDEO_PAGE = "\u89C6\u9891\u751F\u6210";
var IMAGE_PAGE = "\u666E\u901A\u751F\u56FE";
var VIDEO_DURATIONS = Object.freeze(["5\u79D2", "10\u79D2"]);
var MODE_TXT = VIDEO_MODE_TABS[0];
var MODE_IMG = VIDEO_MODE_TABS[1];
var STAGE_LABEL = "\u751F\u6210\u7ED3\u679C";
var STAGE_EMPTY_HINT = "\u751F\u6210\u540E\u663E\u793A\u5728\u8FD9\u91CC";
var HISTORY_EMPTY_HINT = "\u6682\u65E0\u8BB0\u5F55";
var FRAME_HINT = "\u4E0A\u4F20 / \u62D6\u62FD / \u7C98\u8D34";
function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function videoHostStyles() {
  return `
[data-dsh-ws-studio-host] [data-ws-page="video"] {
  display:none; flex:1; min-height:0; width:100%;
}
[data-dsh-ws-studio-host][data-ws-top-page="\u89C6\u9891\u751F\u6210"] [data-ws-page="video"] {
  display:flex;
}
[data-dsh-ws-studio-host][data-ws-top-page="\u89C6\u9891\u751F\u6210"] [data-ws-page="image"] {
  display:none !important;
}
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-video-cols] {
  display:flex; flex:1; min-height:0; width:100%;
}
[data-dsh-ws-studio-host] [data-ws-frame-slots] {
  display:none; flex-direction:column; gap:6px;
}
[data-dsh-ws-studio-host] [data-ws-frame-slots][data-visible] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-frame-row] {
  display:grid; grid-template-columns:1fr 1fr; gap:8px;
}
[data-dsh-ws-studio-host] [data-ws-frame-slot] {
  display:flex; flex-direction:column; gap:6px; padding:8px 10px;
  background: var(--dsw-alias-bg-module-platform);
  border:1px dashed var(--dsw-alias-border-l3); border-radius:10px;
}
[data-dsh-ws-studio-host] [data-ws-frame-drop] {
  min-height:72px; border-radius:8px; border:1px dashed var(--dsw-alias-border-l3);
  background: var(--dsw-specific-input-major);
  display:flex; align-items:center; justify-content:center; gap:8px; flex-wrap:wrap;
  padding:8px; color: var(--dsw-alias-label-secondary); font-size:12px; cursor:pointer;
}
[data-dsh-ws-studio-host] [data-ws-frame-drop][data-dragover] {
  border-color: var(--dsw-alias-state-business-primary); color: var(--dsw-alias-label-primary);
}
[data-dsh-ws-studio-host] [data-ws-frame-preview] {
  display:none; position:relative; width:100%; aspect-ratio:16/9; max-height:120px;
  border-radius:8px; overflow:hidden; border:1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-layer-1);
}
[data-dsh-ws-studio-host] [data-ws-frame-preview][data-filled] { display:block; }
[data-dsh-ws-studio-host] [data-ws-frame-preview] img {
  width:100%; height:100%; object-fit:cover; display:block;
}
[data-dsh-ws-studio-host] [data-ws-frame-preview] button {
  position:absolute; top:4px; right:4px; width:20px; height:20px; border:0; border-radius:999px;
  background: var(--dsw-alias-bg-mask-3); color: var(--dsw-alias-label-primary-foreground);
  cursor:pointer; font-size:12px; line-height:1; padding:0;
}
[data-dsh-ws-studio-host] [data-ws-video-cta]:hover {
  background: var(--dsw-alias-button-primary-hover);
}
[data-dsh-ws-studio-host] [data-ws-video-cta]:active { filter:brightness(.96); }
[data-dsh-ws-studio-host] [data-ws-video-cta]:focus-visible {
  outline:2px solid var(--dsw-alias-state-business-primary); outline-offset:2px;
}
/* Idle: stage absorbs leftover (quiet muted fill). Dock+CTA pack as one bottom
   block \u2014 never margin-top:auto on CTA (that IS the white void between params
   and \u300C\u5F00\u59CB\u751F\u6210\u300D). Override studio-host [data-ws-cta-footer] margin-top:auto. */
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-video-stage] {
  flex:1 1 auto; min-height:0; display:flex; flex-direction:column; gap:4px;
  margin:0; padding:8px 12px; overflow:hidden;
  background: var(--dsw-alias-bg-module-platform);
  border-bottom:1px solid var(--dsw-alias-border-l2);
}
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-video-stage][data-busy] {
  flex:1.2 1 0; min-height:96px; padding:8px 12px; gap:6px;
  background: var(--dsw-alias-bg-base);
}
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-video-stage][data-has-results] {
  flex:2.6 1 0; min-height:160px; padding:8px 12px; gap:8px;
  background: var(--dsw-alias-bg-base);
}
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-dock],
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-video-dock] {
  flex:0 0 auto; display:flex; flex-direction:column; gap:4px;
  padding:8px 12px 0; background: var(--dsw-alias-bg-base);
  border-top:0; max-height:none; overflow:auto; min-height:0;
}
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-col="studio"]:has([data-ws-video-stage][data-has-results]) [data-ws-dock],
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-col="studio"]:has([data-ws-video-stage][data-busy]) [data-ws-dock] {
  flex:0 0 auto; max-height:40%;
  border-top:1px solid var(--dsw-alias-border-l2);
}
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-cta-footer],
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-video-cta-footer] {
  flex:none; margin-top:0; position:sticky; bottom:0; z-index:2;
  padding:6px 12px 10px; background: var(--dsw-alias-bg-base);
  display:flex; flex-direction:column; gap:4px;
  border-top:1px solid var(--dsw-alias-border-l2);
}
`;
}
function defaultVideoState() {
  return {
    mode: MODE_TXT,
    prompt: "",
    duration: VIDEO_DURATIONS[0],
    clarity: CLARITY[0],
    ratio: RATIOS[5] || RATIOS[0],
    // prefer 16:9 when present
    modelId: "",
    firstFrame: null,
    lastFrame: null,
    task: null
  };
}
function buildVideoPageHtml(T2, css2, paneWidths, state) {
  const histW = paneWidths?.history || 264;
  const chipButtonsHtml = (param, values, selected) => values.map((v) => {
    const val = String(v);
    const on = val === String(selected);
    return `<button type="button" data-ws-video-param="${param}" data-value="${escapeHtml(val)}" aria-current="${on ? "true" : "false"}" style="${css2.chip(on)}">${escapeHtml(val)}</button>`;
  }).join("");
  const resultActionBtns = VIDEO_RESULT_ACTIONS.filter((a) => a !== "\u53D6\u6D88" && a !== "\u91CD\u8BD5").map((a) => `<button type="button" data-ws-video-result-action="${a}">${a}</button>`).join("");
  return `
<div data-ws-page="video" data-ws-video-cols role="region" aria-label="${VIDEO_PAGE}">
  <aside data-ws-col="history" data-ws-video-history style="width:${histW}px;flex-shrink:0;border-right:1px solid ${T2.border2};padding:8px;overflow:auto;background:${T2.sidebar};display:flex;flex-direction:column;gap:6px;">
    <div style="font-size:13px;font-weight:600;color:${T2.fg};">${COLUMNS.history}</div>
    <input type="search" placeholder="\u641C\u7D22\u5386\u53F2" aria-label="\u641C\u7D22\u5386\u53F2" style="width:100%;${css2.field};font-size:12px;" />
    <div style="display:flex;gap:6px;">
      <select aria-label="\u5168\u90E8\u6A21\u578B" style="flex:1;${css2.select}"><option>\u5168\u90E8\u6A21\u578B</option></select>
      <select aria-label="\u5168\u90E8\u6BD4\u4F8B" style="flex:1;${css2.select}"><option>\u5168\u90E8\u6BD4\u4F8B</option></select>
    </div>
    <div data-ws-video-history-list style="display:flex;flex-direction:column;gap:6px;flex:1;min-height:0;">
      <div data-ws-history-empty style="padding:8px 4px;font-size:12px;color:${T2.fg3};">${HISTORY_EMPTY_HINT}</div>
    </div>
    <button type="button" data-ws-video-history-clear style="align-self:flex-start;${css2.pill({ color: T2.fg3 })}">${HISTORY_ACTIONS.clear}</button>
  </aside>
  <div data-ws-pane-drag="video-history" title="\u62D6\u62FD\u8C03\u6574\u5386\u53F2\u680F\u5BBD\u5EA6"></div>

  <section data-ws-col="studio" data-ws-video-studio style="flex:1;padding:0;overflow:hidden;display:flex;flex-direction:column;min-width:0;background:${T2.bg};">
    <div data-ws-video-stage aria-label="\u89C6\u9891\u751F\u6210\u53F0">
      <div data-ws-stage-head>
        <strong>${STAGE_LABEL}</strong>
        <span data-ws-video-stage-empty-hint>${STAGE_EMPTY_HINT}</span>
      </div>
      <div data-ws-progress data-ws-video-progress>
        <div data-ws-progress-meta>
          <span data-ws-progress-label>\u7B49\u5F85\u5BBF\u4E3B\u8FDB\u5EA6</span>
          <span data-ws-progress-elapsed>\u8017\u65F6 0s</span>
          <span data-ws-progress-phase style="color:${T2.fg3};"></span>
          <span style="flex:1"></span>
          <button type="button" data-ws-video-cancel style="${css2.pill()}">${VIDEO_RESULT_ACTIONS.includes("\u53D6\u6D88") ? "\u53D6\u6D88" : "\u53D6\u6D88"}</button>
        </div>
        <div data-ws-progress-bar><i></i></div>
      </div>
      <div data-ws-fail data-ws-video-fail>
        <div data-ws-fail-reason>\u539F\u56E0\uFF1A\u89C6\u9891\u901A\u9053\u672A\u63A5</div>
        <button type="button" data-ws-video-retry style="align-self:flex-start;${css2.pill({ pad: "4px 12px", size: "12px", fill: T2.active, color: T2.fg })}">\u91CD\u8BD5</button>
      </div>
      <div data-ws-video-results hidden style="display:none;"></div>
      <div data-ws-result-actions data-ws-video-result-actions>
        ${resultActionBtns}
      </div>
    </div>

    <div data-ws-dock data-ws-video-dock>
      <div style="display:flex;gap:6px;align-items:center;" role="tablist" aria-label="\u89C6\u9891\u6A21\u5F0F">
        ${VIDEO_MODE_TABS.map(
    (m, i) => `<button type="button" data-ws-video-mode="${m}" aria-pressed="${i === 0 ? "true" : "false"}" style="${css2.mode(i === 0)}">${m}</button>`
  ).join("")}
      </div>

      <div data-ws-frame-slots aria-label="\u5E27\u56FE">
        <div data-ws-frame-row>
          <div data-ws-frame-slot data-frame="first">
            <div style="display:flex;align-items:center;gap:8px;">
              <span style="${css2.paramLabel}">${VIDEO_FRAMES.first}</span>
              <span data-ws-frame-hint style="font-size:11px;color:${T2.fg3};">${FRAME_HINT}</span>
              <span style="flex:1"></span>
              <button type="button" data-ws-frame-upload="first" style="${css2.pill({ size: "11px", fill: T2.module })}">\u4E0A\u4F20</button>
              <input type="file" data-ws-frame-file="first" accept="image/*" hidden />
            </div>
            <div data-ws-frame-drop="first" tabindex="0">\u70B9\u51FB\u3001\u62D6\u5165\u6216 Ctrl+V \u7C98\u8D34</div>
            <div data-ws-frame-preview data-frame="first"><img alt="${VIDEO_FRAMES.first}" /><button type="button" data-ws-frame-clear="first" aria-label="\u79FB\u9664">\xD7</button></div>
          </div>
          <div data-ws-frame-slot data-frame="last">
            <div style="display:flex;align-items:center;gap:8px;">
              <span style="${css2.paramLabel}">${VIDEO_FRAMES.last}</span>
              <span data-ws-frame-hint style="font-size:11px;color:${T2.fg3};">\u53EF\u9009</span>
              <span style="flex:1"></span>
              <button type="button" data-ws-frame-upload="last" style="${css2.pill({ size: "11px", fill: T2.module })}">\u4E0A\u4F20</button>
              <input type="file" data-ws-frame-file="last" accept="image/*" hidden />
            </div>
            <div data-ws-frame-drop="last" tabindex="0">\u70B9\u51FB\u3001\u62D6\u5165\u6216 Ctrl+V \u7C98\u8D34</div>
            <div data-ws-frame-preview data-frame="last"><img alt="${VIDEO_FRAMES.last}" /><button type="button" data-ws-frame-clear="last" aria-label="\u79FB\u9664">\xD7</button></div>
          </div>
        </div>
      </div>

      <div style="${css2.dockBlock}">
        <div style="display:flex;flex-direction:column;gap:4px;">
          <div style="display:flex;align-items:center;gap:6px;">
            <span style="${css2.paramLabel}">${PROMPT_FIELDS.prompt}</span>
          </div>
          <textarea data-ws-video-prompt rows="2" placeholder="\u63CF\u8FF0\u4F60\u60F3\u751F\u6210\u7684\u89C6\u9891" style="resize:vertical;min-height:56px;padding:6px 8px;border-radius:8px;border:1px solid ${T2.border2};background:${T2.input};color:inherit;font:inherit;line-height:1.45;font-size:12.5px;"></textarea>
        </div>
      </div>

      <div data-ws-param-row data-ws-video-params>
        <div data-ws-param-group>
          <span style="${css2.paramLabel}">${VIDEO_PARAMS.duration}</span>
          <div data-ws-chips role="group" aria-label="${VIDEO_PARAMS.duration}">
            ${chipButtonsHtml("duration", VIDEO_DURATIONS, state.duration)}
          </div>
        </div>
        <div data-ws-param-group>
          <span style="${css2.paramLabel}">${VIDEO_PARAMS.clarity}</span>
          <div data-ws-chips role="group" aria-label="${VIDEO_PARAMS.clarity}">
            ${chipButtonsHtml("clarity", CLARITY, state.clarity)}
          </div>
        </div>
        <div data-ws-param-group>
          <span style="${css2.paramLabel}">${VIDEO_PARAMS.ratio}</span>
          <div data-ws-chips role="group" aria-label="${VIDEO_PARAMS.ratio}">
            ${chipButtonsHtml("ratio", RATIOS, state.ratio)}
          </div>
        </div>
      </div>

      <div data-ws-model-row>
        <span style="${css2.paramLabel}">${VIDEO_PARAMS.model}</span>
        <input data-ws-video-param="model" placeholder="\u9009\u62E9\u6A21\u578B" style="padding:0 10px;height:28px;border-radius:14px;border:1px solid ${T2.border2};background:${T2.input};color:${T2.fg};font:inherit;font-size:12px;flex:0 1 10rem;min-width:5rem;width:10rem;" />
      </div>
    </div>

    <div data-ws-cta-footer data-ws-video-cta-footer>
      <button type="button" data-ws-video-cta style="${css2.cta}">${VIDEO_CTA}</button>
      <p data-ws-video-status style="opacity:.65;font-size:11.5px;min-height:0;margin:0;"></p>
    </div>
  </section>
</div>
`;
}
function mountVideoPage(host, opts) {
  const { T: T2, css: css2, paneWidths } = opts;
  const state = defaultVideoState();
  const imageCols = host.querySelector("[data-ws-cols]");
  if (imageCols instanceof HTMLElement && !imageCols.hasAttribute("data-ws-page")) {
    imageCols.setAttribute("data-ws-page", "image");
  }
  let styleEl = host.querySelector("style[data-ws-video-styles]");
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.setAttribute("data-ws-video-styles", "");
    styleEl.textContent = videoHostStyles();
    host.appendChild(styleEl);
  }
  host.querySelector('[data-ws-page="video"]')?.remove();
  const wrap = document.createElement("div");
  wrap.innerHTML = buildVideoPageHtml(T2, css2, paneWidths, state).trim();
  const page = wrap.firstElementChild;
  if (!(page instanceof HTMLElement)) {
    return { state, setPage: () => {
    }, dispose: () => {
    } };
  }
  if (imageCols?.parentElement) {
    imageCols.parentElement.appendChild(page);
  } else {
    host.appendChild(page);
  }
  const setStatus = (text) => {
    const el = page.querySelector("[data-ws-video-status]");
    if (el) el.textContent = text;
  };
  const paintMode = () => {
    page.querySelectorAll("[data-ws-video-mode]").forEach((btn) => {
      const on = btn.getAttribute("data-ws-video-mode") === state.mode;
      if (btn instanceof HTMLElement) {
        btn.style.cssText = css2.mode(on);
        btn.setAttribute("aria-pressed", on ? "true" : "false");
      }
    });
    const slots = page.querySelector("[data-ws-frame-slots]");
    if (slots instanceof HTMLElement) {
      if (state.mode === MODE_IMG) slots.setAttribute("data-visible", "");
      else slots.removeAttribute("data-visible");
    }
  };
  const paintChips = () => {
    const sync = (param, value) => {
      page.querySelectorAll(`[data-ws-video-param="${param}"][data-value]`).forEach((btn) => {
        const on = btn.getAttribute("data-value") === String(value);
        btn.setAttribute("aria-current", on ? "true" : "false");
        if (btn instanceof HTMLElement) btn.style.cssText = css2.chip(on);
      });
    };
    sync("duration", state.duration);
    sync("clarity", state.clarity);
    sync("ratio", state.ratio);
    const model = page.querySelector('[data-ws-video-param="model"]');
    if (model instanceof HTMLInputElement) model.value = state.modelId || "";
    paintMode();
  };
  const paintFrame = (which) => {
    const ref = which === "first" ? state.firstFrame : state.lastFrame;
    const preview = page.querySelector(`[data-ws-frame-preview][data-frame="${which}"]`);
    const drop = page.querySelector(`[data-ws-frame-drop="${which}"]`);
    if (!(preview instanceof HTMLElement)) return;
    const img = preview.querySelector("img");
    if (ref?.url && img instanceof HTMLImageElement) {
      img.src = ref.url;
      preview.setAttribute("data-filled", "");
      if (drop instanceof HTMLElement) drop.style.display = "none";
    } else {
      preview.removeAttribute("data-filled");
      if (img instanceof HTMLImageElement) img.removeAttribute("src");
      if (drop instanceof HTMLElement) drop.style.display = "";
    }
  };
  const setFrameFromFile = (which, file) => {
    if (!(file instanceof File) || !file.type.startsWith("image/")) return;
    const url = URL.createObjectURL(file);
    const prev = which === "first" ? state.firstFrame : state.lastFrame;
    if (prev?.url?.startsWith("blob:")) {
      try {
        URL.revokeObjectURL(prev.url);
      } catch (_) {
      }
    }
    const entry = { id: `${which}-${Date.now()}`, url, name: file.name };
    if (which === "first") state.firstFrame = entry;
    else state.lastFrame = entry;
    paintFrame(which);
    setStatus(`\u5DF2\u6DFB\u52A0${which === "first" ? VIDEO_FRAMES.first : VIDEO_FRAMES.last}`);
  };
  page.querySelectorAll("[data-ws-video-mode]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.mode = btn.getAttribute("data-ws-video-mode") || MODE_TXT;
      paintMode();
      setStatus(state.mode === MODE_IMG ? "\u5DF2\u5207\u6362\u5230\u56FE\u751F\u89C6\u9891" : "\u5DF2\u5207\u6362\u5230\u6587\u751F\u89C6\u9891");
    });
  });
  page.querySelector("[data-ws-video-prompt]")?.addEventListener("input", (e) => {
    const t = (
      /** @type {HTMLTextAreaElement} */
      e.target
    );
    state.prompt = t.value;
  });
  page.querySelector("[data-ws-video-params]")?.addEventListener("click", (e) => {
    const t = e.target instanceof Element ? e.target.closest("[data-ws-video-param][data-value]") : null;
    if (!t) return;
    const param = t.getAttribute("data-ws-video-param");
    const value = t.getAttribute("data-value");
    if (!param || value == null) return;
    if (param === "duration") state.duration = value;
    else if (param === "clarity") state.clarity = value;
    else if (param === "ratio") state.ratio = value;
    paintChips();
  });
  page.querySelector('[data-ws-video-param="model"]')?.addEventListener("input", (e) => {
    const t = (
      /** @type {HTMLInputElement} */
      e.target
    );
    state.modelId = t.value;
  });
  ["first", "last"].forEach((which) => {
    const fileInput = page.querySelector(`[data-ws-frame-file="${which}"]`);
    const uploadBtn = page.querySelector(`[data-ws-frame-upload="${which}"]`);
    const drop = page.querySelector(`[data-ws-frame-drop="${which}"]`);
    uploadBtn?.addEventListener("click", () => {
      if (fileInput instanceof HTMLInputElement) fileInput.click();
    });
    fileInput?.addEventListener("change", (e) => {
      const input = (
        /** @type {HTMLInputElement} */
        e.target
      );
      const f = input.files?.[0];
      if (f) setFrameFromFile(which, f);
      input.value = "";
    });
    drop?.addEventListener("click", () => {
      if (fileInput instanceof HTMLInputElement) fileInput.click();
    });
    ["dragenter", "dragover"].forEach((evName) => {
      drop?.addEventListener(evName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (drop instanceof HTMLElement) drop.setAttribute("data-dragover", "");
      });
    });
    ["dragleave", "drop"].forEach((evName) => {
      drop?.addEventListener(evName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (drop instanceof HTMLElement) drop.removeAttribute("data-dragover");
      });
    });
    drop?.addEventListener("drop", (e) => {
      const f = (
        /** @type {DragEvent} */
        e.dataTransfer?.files?.[0]
      );
      if (f) setFrameFromFile(which, f);
    });
    page.querySelector(`[data-ws-frame-clear="${which}"]`)?.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      const prev = which === "first" ? state.firstFrame : state.lastFrame;
      if (prev?.url?.startsWith("blob:")) {
        try {
          URL.revokeObjectURL(prev.url);
        } catch (_) {
        }
      }
      if (which === "first") state.firstFrame = null;
      else state.lastFrame = null;
      paintFrame(which);
      setStatus("\u5DF2\u79FB\u9664\u5E27\u56FE");
    });
  });
  page.addEventListener("paste", (e) => {
    if (state.mode !== MODE_IMG) return;
    const items = Array.from(e.clipboardData?.items || []);
    for (const it of items) {
      if (it.type.startsWith("image/")) {
        const f = it.getAsFile();
        if (f) {
          setFrameFromFile("first", f);
          e.preventDefault();
          break;
        }
      }
    }
  });
  page.querySelector("[data-ws-video-history-clear]")?.addEventListener("click", () => {
    const list = page.querySelector("[data-ws-video-history-list]");
    if (list) {
      list.innerHTML = `<div data-ws-history-empty style="padding:8px 4px;font-size:12px;color:${T2.fg3};">${HISTORY_EMPTY_HINT}</div>`;
    }
    setStatus("\u5DF2\u6E05\u7A7A\u5386\u53F2");
  });
  const cta = page.querySelector("[data-ws-video-cta]");
  if (cta instanceof HTMLButtonElement) {
    cta.disabled = false;
    cta.removeAttribute("disabled");
  }
  const clearFail = () => {
    const fail = page.querySelector("[data-ws-video-fail]");
    if (fail) fail.removeAttribute("data-visible");
  };
  const showBusy = () => {
    const stage = page.querySelector("[data-ws-video-stage]");
    const prog = page.querySelector("[data-ws-video-progress]");
    const hint = page.querySelector("[data-ws-video-stage-empty-hint]");
    const results = page.querySelector("[data-ws-video-results]");
    const actions = page.querySelector("[data-ws-video-result-actions]");
    clearFail();
    if (results instanceof HTMLElement) {
      results.innerHTML = "";
      results.hidden = true;
      results.style.display = "none";
    }
    if (actions) actions.removeAttribute("data-visible");
    if (hint instanceof HTMLElement) hint.hidden = true;
    if (stage instanceof HTMLElement) {
      stage.setAttribute("data-busy", "");
      stage.removeAttribute("data-has-results");
    }
    if (prog) {
      prog.setAttribute("data-visible", "");
      const label = prog.querySelector("[data-ws-progress-label]");
      if (label) label.textContent = "\u7B49\u5F85\u5BBF\u4E3B\u8FDB\u5EA6";
      const elapsed = prog.querySelector("[data-ws-progress-elapsed]");
      if (elapsed) elapsed.textContent = "\u8017\u65F6 0s";
      const phase = prog.querySelector("[data-ws-progress-phase]");
      if (phase) phase.textContent = "";
      const barWrap = prog.querySelector("[data-ws-progress-bar]");
      if (barWrap) barWrap.setAttribute("data-indeterminate", "");
    }
    setStatus("\u7B49\u5F85\u5BBF\u4E3B\u8FDB\u5EA6\u2026");
  };
  const showStubFailure = (message) => {
    const msg = message || "VIDEO_NOT_CONFIGURED";
    const stage = page.querySelector("[data-ws-video-stage]");
    const prog = page.querySelector("[data-ws-video-progress]");
    const fail = page.querySelector("[data-ws-video-fail]");
    const hint = page.querySelector("[data-ws-video-stage-empty-hint]");
    const results = page.querySelector("[data-ws-video-results]");
    const actions = page.querySelector("[data-ws-video-result-actions]");
    if (prog) prog.removeAttribute("data-visible");
    if (stage instanceof HTMLElement) {
      stage.removeAttribute("data-busy");
      stage.removeAttribute("data-has-results");
    }
    if (results instanceof HTMLElement) {
      results.innerHTML = "";
      results.hidden = true;
      results.style.display = "none";
    }
    if (actions) actions.removeAttribute("data-visible");
    if (hint instanceof HTMLElement) hint.hidden = true;
    if (fail instanceof HTMLElement) {
      fail.setAttribute("data-visible", "");
      const reason = fail.querySelector("[data-ws-fail-reason]");
      if (reason) reason.textContent = `\u539F\u56E0\uFF1A${msg}`;
    }
    setStatus(msg);
  };
  const paintVideoResult = (value) => {
    const phase = String(value?.phase || "");
    const err = value?.error != null ? String(value.error) : "";
    if (phase === "failed" || phase === "error") {
      showStubFailure(err || "VIDEO_GENERATE_FAILED");
      return;
    }
    if (phase === "cancelled") {
      const prog2 = page.querySelector("[data-ws-video-progress]");
      const stage2 = page.querySelector("[data-ws-video-stage]");
      if (prog2) prog2.removeAttribute("data-visible");
      if (stage2) stage2.removeAttribute("data-busy");
      clearFail();
      setStatus("\u5DF2\u53D6\u6D88");
      return;
    }
    const list = Array.isArray(value?.results) ? value.results : [];
    const urls = list.map((r) => r?.url).filter((u) => typeof u === "string" && u);
    if (!urls.length) {
      showStubFailure(err || "VIDEO_GENERATE_FAILED");
      return;
    }
    const stage = page.querySelector("[data-ws-video-stage]");
    const prog = page.querySelector("[data-ws-video-progress]");
    const fail = page.querySelector("[data-ws-video-fail]");
    const hint = page.querySelector("[data-ws-video-stage-empty-hint]");
    const results = page.querySelector("[data-ws-video-results]");
    const actions = page.querySelector("[data-ws-video-result-actions]");
    if (prog) prog.removeAttribute("data-visible");
    if (fail) fail.removeAttribute("data-visible");
    if (hint instanceof HTMLElement) hint.hidden = true;
    if (stage instanceof HTMLElement) {
      stage.removeAttribute("data-busy");
      stage.setAttribute("data-has-results", "");
    }
    if (results instanceof HTMLElement) {
      results.hidden = false;
      results.style.display = "grid";
      results.style.gridTemplateColumns = "repeat(auto-fill, minmax(160px, 1fr))";
      results.style.gap = "8px";
      results.innerHTML = urls.map(
        (url) => `<div data-ws-video-result-card style="border-radius:8px;overflow:hidden;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-1);"><video src="${escapeHtml(url)}" controls playsinline style="width:100%;display:block;max-height:220px;background:#000;"></video></div>`
      ).join("");
    }
    if (actions) actions.setAttribute("data-visible", "");
    const elapsed = value?.elapsedMs != null ? Math.round(Number(value.elapsedMs) / 1e3) : null;
    setStatus(elapsed != null ? `\u89C6\u9891\u751F\u6210\u5B8C\u6210 \xB7 ${elapsed}s` : "\u89C6\u9891\u751F\u6210\u5B8C\u6210");
  };
  const setVideoProgress = (value) => {
    const prog = page.querySelector("[data-ws-video-progress]");
    const stage = page.querySelector("[data-ws-video-stage]");
    if (!(prog instanceof HTMLElement)) return;
    prog.setAttribute("data-visible", "");
    if (stage instanceof HTMLElement) stage.setAttribute("data-busy", "");
    clearFail();
    const label = prog.querySelector("[data-ws-progress-label]");
    if (label) label.textContent = value?.status === "running" ? "\u751F\u6210\u4E2D\u2026" : "\u7B49\u5F85\u5BBF\u4E3B\u8FDB\u5EA6";
    const elapsed = prog.querySelector("[data-ws-progress-elapsed]");
    if (elapsed && value?.elapsedMs != null) {
      elapsed.textContent = `\u8017\u65F6 ${Math.max(0, Math.round(Number(value.elapsedMs) / 1e3))}s`;
    }
    const phase = prog.querySelector("[data-ws-progress-phase]");
    if (phase && value?.phase) phase.textContent = String(value.phase);
  };
  cta?.addEventListener("click", () => {
    if (!String(state.prompt || "").trim()) {
      showStubFailure("\u8BF7\u5148\u8F93\u5165\u63D0\u793A\u8BCD");
      return;
    }
    if (state.mode === MODE_IMG && !state.firstFrame?.url) {
      showStubFailure("\u56FE\u751F\u89C6\u9891\u9700\u8981\u9996\u5E27\u56FE");
      return;
    }
    showBusy();
    host.dispatchEvent(
      new CustomEvent("dsh-ws-video-generate", {
        bubbles: true,
        detail: {
          mode: state.mode,
          prompt: state.prompt,
          duration: state.duration,
          clarity: state.clarity,
          ratio: state.ratio,
          modelId: state.modelId,
          firstFrame: state.firstFrame,
          lastFrame: state.lastFrame
        }
      })
    );
  });
  page.querySelector("[data-ws-video-cancel]")?.addEventListener("click", () => {
    const prog = page.querySelector("[data-ws-video-progress]");
    const stage = page.querySelector("[data-ws-video-stage]");
    if (prog) prog.removeAttribute("data-visible");
    if (stage) stage.removeAttribute("data-busy");
    setStatus("\u5DF2\u53D6\u6D88");
    host.dispatchEvent(
      new CustomEvent("dsh-ws-video-cancel", { bubbles: true, detail: { reason: "user" } })
    );
  });
  page.querySelector("[data-ws-video-retry]")?.addEventListener("click", () => {
    cta?.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  page.querySelector("[data-ws-video-result-actions]")?.addEventListener("click", (e) => {
    const btn = e.target instanceof Element ? e.target.closest("[data-ws-video-result-action]") : null;
    if (!btn) return;
    const action = btn.getAttribute("data-ws-video-result-action") || "";
    setStatus(`\u300C${action}\u300D\u672A\u63A5\u7EBF`);
  });
  page.querySelector('[data-ws-pane-drag="video-history"]')?.addEventListener("mousedown", (ev) => {
    ev.preventDefault();
    const handle = (
      /** @type {HTMLElement} */
      ev.currentTarget
    );
    handle.setAttribute("data-active", "");
    const hist = page.querySelector("[data-ws-video-history]");
    const startX = (
      /** @type {MouseEvent} */
      ev.clientX
    );
    const startW = hist instanceof HTMLElement ? hist.getBoundingClientRect().width : 264;
    const onMove = (e) => {
      const dx = e.clientX - startX;
      const w = Math.max(180, Math.min(480, startW + dx));
      if (hist instanceof HTMLElement) hist.style.width = `${w}px`;
    };
    const onUp = () => {
      handle.removeAttribute("data-active");
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  });
  paintChips();
  paintFrame("first");
  paintFrame("last");
  const setPage = (tab) => {
    const name2 = String(tab || IMAGE_PAGE);
    host.setAttribute("data-ws-top-page", name2);
  };
  setPage(IMAGE_PAGE);
  return {
    state,
    setPage,
    showStubFailure,
    showBusy,
    paintVideoResult,
    setVideoProgress,
    setStatus,
    dispose() {
      ;
      ["first", "last"].forEach((which) => {
        const ref = which === "first" ? state.firstFrame : state.lastFrame;
        if (ref?.url?.startsWith("blob:")) {
          try {
            URL.revokeObjectURL(ref.url);
          } catch (_) {
          }
        }
      });
      page.remove();
      styleEl?.remove();
    }
  };
}

// src/client/canvas-host.js
var CANVAS_PAGE = "\u65E0\u9650\u753B\u5E03";
var IMAGE_PAGE2 = "\u666E\u901A\u751F\u56FE";
var DEFAULT_PROJECT_NAME = "\u672A\u547D\u540D\u9879\u76EE";
var EDGE_HINT = "\u6587\u672C\u2192\u914D\u7F6E\uFF1D\u63D0\u793A\u8BCD\uFF1B\u56FE\u7247\u2192\u914D\u7F6E\uFF1D\u53C2\u8003\u56FE\uFF08\u7B2C\u4E00\u5F20\uFF1D\u56FE\u751F\u56FE\u5E95\u56FE\uFF09";
var ADD_NODE_HINT = "\u53CC\u51FB\u7A7A\u767D\u6216\u70B9\u300C\u6DFB\u52A0\u300D\u5EFA\u8282\u70B9\uFF08\u58F3\uFF09";
var STUB_SEND = "\u753B\u5E03\u751F\u6210\u901A\u9053\u672A\u63A5";
var STUB_ACTION = (name2) => `\u300C${name2}\u300D\u672A\u63A5\u7EBF`;
function escapeHtml2(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function uid(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}
function canvasHostStyles() {
  return `
[data-dsh-ws-studio-host] [data-ws-page="canvas"] {
  display:none; flex:1; min-height:0; width:100%; flex-direction:column;
}
[data-dsh-ws-studio-host][data-ws-top-page="\u65E0\u9650\u753B\u5E03"] [data-ws-page="canvas"] {
  display:flex;
}
[data-dsh-ws-studio-host][data-ws-top-page="\u65E0\u9650\u753B\u5E03"] [data-ws-page="image"] {
  display:none !important;
}
[data-dsh-ws-studio-host][data-ws-top-page="\u65E0\u9650\u753B\u5E03"] [data-ws-page="video"],
[data-dsh-ws-studio-host][data-ws-top-page="\u65E0\u9650\u753B\u5E03"] [data-ws-page="gallery"],
[data-dsh-ws-studio-host][data-ws-top-page="\u65E0\u9650\u753B\u5E03"] [data-ws-page="ecom"] {
  display:none !important;
}
[data-dsh-ws-studio-host] [data-ws-canvas-project-bar] {
  display:flex; align-items:center; gap:8px; flex-shrink:0;
  padding:6px 12px; border-bottom:1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-base);
}
[data-dsh-ws-studio-host] [data-ws-canvas-project-name] {
  font-size:13px; font-weight:600; color: var(--dsw-alias-label-primary);
  border:0; background:transparent; padding:2px 4px; border-radius:6px;
  min-width:6rem; max-width:16rem;
}
[data-dsh-ws-studio-host] [data-ws-canvas-project-name]:focus {
  outline:2px solid var(--dsw-alias-state-business-primary); outline-offset:1px;
  background: var(--dsw-specific-input-major);
}
[data-dsh-ws-studio-host] [data-ws-canvas-viewport-wrap] {
  position:relative; flex:1; min-height:0; overflow:hidden;
  background: var(--dsw-alias-bg-module-platform);
}
[data-dsh-ws-studio-host] [data-ws-canvas-viewport] {
  position:absolute; inset:0; overflow:hidden; cursor:default;
  touch-action:none;
}
[data-dsh-ws-studio-host] [data-ws-canvas-viewport][data-panning] {
  cursor:grabbing;
}
[data-dsh-ws-studio-host] [data-ws-canvas-world] {
  position:absolute; left:0; top:0; transform-origin:0 0; will-change:transform;
}
[data-dsh-ws-studio-host] [data-ws-canvas-edges] {
  position:absolute; left:0; top:0; width:4000px; height:4000px;
  pointer-events:none; overflow:visible;
}
[data-dsh-ws-studio-host] [data-ws-canvas-node] {
  position:absolute; min-width:160px; max-width:240px;
  background: var(--dsw-alias-bg-base);
  border:1px solid var(--dsw-alias-border-l2);
  border-radius:10px; box-shadow: var(--dsw-elevation-panel, 0 1px 4px rgba(0,0,0,.06));
  display:flex; flex-direction:column; gap:0; user-select:none;
  color: var(--dsw-alias-label-primary);
}
[data-dsh-ws-studio-host] [data-ws-canvas-node][data-selected] {
  border-color: var(--dsw-alias-state-business-primary);
  box-shadow: 0 0 0 1px var(--dsw-alias-state-business-primary);
}
[data-dsh-ws-studio-host] [data-ws-canvas-node-head] {
  display:flex; align-items:center; gap:6px; padding:6px 8px;
  border-bottom:1px solid var(--dsw-alias-border-l1);
  font-size:11px; font-weight:600; color: var(--dsw-alias-label-secondary);
  cursor:grab;
}
[data-dsh-ws-studio-host] [data-ws-canvas-node][data-dragging] [data-ws-canvas-node-head] {
  cursor:grabbing;
}
[data-dsh-ws-studio-host] [data-ws-canvas-node-body] {
  padding:8px; font-size:12px; color: var(--dsw-alias-label-primary);
  display:flex; flex-direction:column; gap:6px;
}
[data-dsh-ws-studio-host] [data-ws-canvas-node-body] textarea {
  width:100%; min-height:56px; resize:vertical; padding:6px 8px;
  border:1px solid var(--dsw-alias-border-l2); border-radius:8px;
  background: var(--dsw-specific-input-major); color: var(--dsw-alias-label-primary);
  font:inherit; font-size:12px;
}
[data-dsh-ws-studio-host] [data-ws-canvas-img-stub] {
  aspect-ratio:1; border-radius:8px; border:1px dashed var(--dsw-alias-border-l3);
  background: var(--dsw-alias-bg-module-platform);
  display:flex; align-items:center; justify-content:center;
  color: var(--dsw-alias-label-tertiary); font-size:11px; text-align:center; padding:8px;
}
[data-dsh-ws-studio-host] [data-ws-canvas-node-tools] {
  display:flex; flex-wrap:wrap; gap:4px; padding:0 8px 8px;
}
[data-dsh-ws-studio-host] [data-ws-canvas-port] {
  position:absolute; width:10px; height:10px; border-radius:999px;
  background: var(--dsw-alias-bg-base);
  border:2px solid var(--dsw-alias-state-business-primary);
  top:50%; margin-top:-5px; cursor:crosshair; z-index:2;
}
[data-dsh-ws-studio-host] [data-ws-canvas-port="in"] { left:-6px; }
[data-dsh-ws-studio-host] [data-ws-canvas-port="out"] { right:-6px; }
[data-dsh-ws-studio-host] [data-ws-canvas-minimap] {
  position:absolute; left:10px; bottom:10px; z-index:3;
  width:120px; height:80px; border-radius:8px;
  border:1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-base); opacity:.92;
  pointer-events:none; overflow:hidden;
}
[data-dsh-ws-studio-host] [data-ws-canvas-minimap] [data-ws-mm-dot] {
  position:absolute; width:8px; height:6px; border-radius:2px;
  background: var(--dsw-alias-label-tertiary);
}
[data-dsh-ws-studio-host] [data-ws-canvas-fit] {
  position:absolute; right:10px; bottom:10px; z-index:3;
}
[data-dsh-ws-studio-host] [data-ws-canvas-add-bar] {
  position:absolute; left:50%; top:10px; transform:translateX(-50%); z-index:3;
  display:flex; gap:6px; padding:4px; border-radius:10px;
  background: var(--dsw-alias-bg-base);
  border:1px solid var(--dsw-alias-border-l2);
}
[data-dsh-ws-studio-host] [data-ws-canvas-generator] {
  display:none; flex-shrink:0; flex-direction:column; gap:6px;
  padding:8px 12px 10px;
  border-top:1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-base);
}
[data-dsh-ws-studio-host] [data-ws-canvas-generator][data-open] {
  display:flex;
}
[data-dsh-ws-studio-host] [data-ws-canvas-send]:hover {
  background: var(--dsw-alias-button-primary-hover);
}
[data-dsh-ws-studio-host] [data-ws-canvas-send]:active { filter:brightness(.96); }
[data-dsh-ws-studio-host] [data-ws-canvas-send]:focus-visible {
  outline:2px solid var(--dsw-alias-state-business-primary); outline-offset:2px;
}
[data-dsh-ws-studio-host] [data-ws-canvas-status] {
  margin:0; font-size:11px; color: var(--dsw-alias-label-tertiary);
}
[data-dsh-ws-studio-host] [data-ws-canvas-chips] {
  display:flex; flex-wrap:wrap; gap:4px;
}
[data-dsh-ws-studio-host] [data-ws-canvas-chips] button {
  padding:2px 8px; border:1px solid var(--dsw-alias-border-l2); border-radius:999px;
  background:transparent; color: var(--dsw-alias-label-secondary);
  font:inherit; font-size:11.5px; cursor:pointer;
}
[data-dsh-ws-studio-host] [data-ws-canvas-chips] button[aria-current="true"] {
  background: var(--dsw-alias-interactive-bg-active);
  color: var(--dsw-alias-label-primary);
  border-color: var(--dsw-alias-border-l4);
}
`;
}
function defaultCanvasState() {
  const textId = "n-text-seed";
  const cfgId = "n-cfg-seed";
  return {
    projectId: "proj-default",
    projects: [{ id: "proj-default", name: DEFAULT_PROJECT_NAME }],
    viewport: { x: 40, y: 40, zoom: 1 },
    nodes: [
      {
        type: "text",
        id: textId,
        x: 80,
        y: 120,
        text: ""
      },
      {
        type: "genConfig",
        id: cfgId,
        x: 360,
        y: 100,
        prompt: "",
        modelId: "",
        ratio: RATIOS[0],
        count: COUNTS[0],
        clarity: CLARITY[0]
      }
    ],
    edges: [{ id: "e-seed", from: textId, to: cfgId }],
    selection: [cfgId],
    generatorOpen: true,
    connectFrom: null
  };
}
function buildCanvasPageHtml(T2, css2, state) {
  const project = state.projects.find((p) => p.id === state.projectId) || state.projects[0];
  const projectOptions = state.projects.map(
    (p) => `<option value="${escapeHtml2(p.id)}" ${p.id === state.projectId ? "selected" : ""}>${escapeHtml2(p.name)}</option>`
  ).join("");
  const chip = (param, values, selected) => values.map((v) => {
    const val = String(v);
    const on = val === String(selected);
    return `<button type="button" data-ws-canvas-param="${param}" data-value="${escapeHtml2(val)}" aria-current="${on ? "true" : "false"}">${escapeHtml2(val)}</button>`;
  }).join("");
  const nodeTools = Object.values(CANVAS_NODE_TOOLS).map((label) => `<button type="button" data-ws-canvas-tool="${escapeHtml2(label)}" style="${css2.pill({ size: "11px", fill: T2.module })}">${escapeHtml2(label)}</button>`).join("");
  return `
<div data-ws-page="canvas" role="region" aria-label="${CANVAS_PAGE}">
  <div data-ws-canvas-project-bar>
    <input type="text" data-ws-canvas-project-name value="${escapeHtml2(project?.name || DEFAULT_PROJECT_NAME)}" aria-label="\u9879\u76EE\u540D" />
    <button type="button" data-ws-canvas-new style="${css2.pill({ size: "11px", fill: T2.module })}">${CANVAS_CHROME.newProject}</button>
    <button type="button" data-ws-canvas-rename style="${css2.pill({ size: "11px", fill: T2.module })}">${CANVAS_CHROME.rename}</button>
    <label style="display:inline-flex;align-items:center;gap:4px;font-size:11px;color:${T2.fg2};">
      <span>\u9879\u76EE</span>
      <select data-ws-canvas-project-list aria-label="\u9879\u76EE\u5217\u8868\u5207\u6362" style="${css2.select}">${projectOptions}</select>
    </label>
    <span style="flex:1"></span>
    <span style="font-size:11px;color:${T2.fg3};">${EDGE_HINT}</span>
  </div>

  <div data-ws-canvas-viewport-wrap>
    <div data-ws-canvas-add-bar role="toolbar" aria-label="\u6DFB\u52A0\u8282\u70B9">
      <button type="button" data-ws-canvas-add="text" style="${css2.pill({ size: "11px", fill: T2.module })}">+ ${CANVAS_NODES.text}</button>
      <button type="button" data-ws-canvas-add="image" style="${css2.pill({ size: "11px", fill: T2.module })}">+ ${CANVAS_NODES.image}</button>
      <button type="button" data-ws-canvas-add="genConfig" style="${css2.pill({ size: "11px", fill: T2.module })}">+ ${CANVAS_NODES.genConfig}</button>
      <button type="button" data-ws-canvas-add="video" style="${css2.pill({ size: "11px", fill: T2.module })}">+ ${CANVAS_NODES.video}</button>
    </div>

    <div data-ws-canvas-viewport tabindex="0" aria-label="\u65E0\u9650\u753B\u5E03\u89C6\u53E3">
      <div data-ws-canvas-world>
        <svg data-ws-canvas-edges xmlns="http://www.w3.org/2000/svg"></svg>
        <div data-ws-canvas-nodes></div>
      </div>
    </div>

    <div data-ws-canvas-minimap aria-hidden="true" title="\u5C0F\u5730\u56FE">
      <div data-ws-mm-dots></div>
    </div>
    <button type="button" data-ws-canvas-fit style="${css2.pill({ size: "11px", fill: T2.bg })}">${CANVAS_CHROME.fitAll}</button>
  </div>

  <div data-ws-canvas-generator ${state.generatorOpen ? "data-open" : ""} aria-label="\u5E95\u90E8\u751F\u6210\u5668">
    <div style="display:flex;align-items:baseline;gap:8px;">
      <strong style="font-size:12px;color:${T2.fg2};">${CANVAS_NODES.genConfig}</strong>
      <span style="font-size:11px;color:${T2.fg3};">${ADD_NODE_HINT}</span>
    </div>
    <div>
      <div style="${css2.paramLabel};margin-bottom:4px;">${PROMPT_FIELDS.prompt}</div>
      <textarea data-ws-canvas-gen-prompt rows="2" placeholder="\u5199\u63D0\u793A\u8BCD\u540E\u70B9\u53D1\u9001\uFF08\u58F3\uFF09" style="width:100%;min-height:52px;padding:6px 8px;border:1px solid ${T2.border2};border-radius:8px;background:${T2.input};color:${T2.fg};font:inherit;font-size:12px;"></textarea>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:8px 12px;align-items:center;">
      <div style="display:flex;align-items:center;gap:6px;">
        <span style="${css2.paramLabel}">${PARAM_LABELS.model}</span>
        <input data-ws-canvas-param-model placeholder="\u9009\u62E9\u6A21\u578B" style="padding:0 10px;height:28px;border-radius:14px;width:10rem;border:1px solid ${T2.border2};background:${T2.input};color:${T2.fg};font:inherit;font-size:12px;" />
      </div>
      <div style="display:flex;align-items:center;gap:6px;">
        <span style="${css2.paramLabel}">${PARAM_LABELS.ratio}</span>
        <div data-ws-canvas-chips data-param="ratio">${chip("ratio", RATIOS, state.nodes.find((n) => n.type === "genConfig")?.ratio || RATIOS[0])}</div>
      </div>
      <div style="display:flex;align-items:center;gap:6px;">
        <span style="${css2.paramLabel}">${PARAM_LABELS.clarity}</span>
        <div data-ws-canvas-chips data-param="clarity">${chip("clarity", CLARITY, CLARITY[0])}</div>
      </div>
      <div style="display:flex;align-items:center;gap:6px;">
        <span style="${css2.paramLabel}">${PARAM_LABELS.count}</span>
        <div data-ws-canvas-chips data-param="count">${chip("count", COUNTS, COUNTS[0])}</div>
      </div>
    </div>
    <div data-ws-canvas-node-tools-slot style="display:flex;flex-wrap:wrap;gap:4px;">
      ${nodeTools}
    </div>
    <button type="button" data-ws-canvas-send style="${css2.cta}">${CANVAS_CHROME.send}</button>
    <p data-ws-canvas-status class="note">\u58F3\uFF1A\u62D6\u8282\u70B9 \xB7 \u7AEF\u53E3\u8FDE\u7EBF stub \xB7 ${CANVAS_CHROME.send} \u2192 \u300C${STUB_SEND}\u300D\uFF08\u65E0\u5047\u6210\u529F\uFF09</p>
  </div>
</div>
`;
}
function mountCanvasPage(host, opts) {
  const { T: T2, css: css2 } = opts;
  const state = defaultCanvasState();
  let styleEl = host.querySelector("style[data-ws-canvas-styles]");
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.setAttribute("data-ws-canvas-styles", "");
    styleEl.textContent = canvasHostStyles();
    host.appendChild(styleEl);
  }
  host.querySelector('[data-ws-page="canvas"]')?.remove();
  const wrap = document.createElement("div");
  wrap.innerHTML = buildCanvasPageHtml(T2, css2, state).trim();
  const page = wrap.firstElementChild;
  if (!(page instanceof HTMLElement)) {
    return { state, setPage: () => {
    }, dispose: () => {
    } };
  }
  const imageCols = host.querySelector("[data-ws-cols]");
  const videoPage = host.querySelector('[data-ws-page="video"]');
  if (videoPage?.parentElement) {
    videoPage.parentElement.insertBefore(page, videoPage.nextSibling);
  } else if (imageCols?.parentElement) {
    imageCols.parentElement.appendChild(page);
  } else {
    host.appendChild(page);
  }
  const viewport = page.querySelector("[data-ws-canvas-viewport]");
  const world = page.querySelector("[data-ws-canvas-world]");
  const nodesEl = page.querySelector("[data-ws-canvas-nodes]");
  const edgesSvg = page.querySelector("[data-ws-canvas-edges]");
  const minimapDots = page.querySelector("[data-ws-mm-dots]");
  const generator = page.querySelector("[data-ws-canvas-generator]");
  const statusEl = page.querySelector("[data-ws-canvas-status]");
  const setStatus = (text) => {
    if (statusEl) statusEl.textContent = text;
  };
  const applyTransform = () => {
    if (!(world instanceof HTMLElement)) return;
    const { x, y, zoom } = state.viewport;
    world.style.transform = `translate(${x}px, ${y}px) scale(${zoom})`;
  };
  const nodeLabel = (type) => {
    if (type === "text") return CANVAS_NODES.text;
    if (type === "image") return CANVAS_NODES.image;
    if (type === "video") return CANVAS_NODES.video;
    return CANVAS_NODES.genConfig;
  };
  const paintEdges = () => {
    if (!(edgesSvg instanceof SVGElement) || !(nodesEl instanceof HTMLElement)) return;
    const lines = [];
    for (const edge of state.edges) {
      const fromEl = nodesEl.querySelector(`[data-ws-canvas-node="${edge.from}"]`);
      const toEl = nodesEl.querySelector(`[data-ws-canvas-node="${edge.to}"]`);
      if (!(fromEl instanceof HTMLElement) || !(toEl instanceof HTMLElement)) continue;
      const fx = fromEl.offsetLeft + fromEl.offsetWidth;
      const fy = fromEl.offsetTop + fromEl.offsetHeight / 2;
      const tx = toEl.offsetLeft;
      const ty = toEl.offsetTop + toEl.offsetHeight / 2;
      const mx = (fx + tx) / 2;
      lines.push(
        `<path d="M ${fx} ${fy} C ${mx} ${fy}, ${mx} ${ty}, ${tx} ${ty}" fill="none" stroke="var(--dsw-alias-border-l4)" stroke-width="2" />`
      );
    }
    if (state.connectFrom) {
      const fromEl = nodesEl.querySelector(`[data-ws-canvas-node="${state.connectFrom}"]`);
      if (fromEl instanceof HTMLElement) {
        const fx = fromEl.offsetLeft + fromEl.offsetWidth;
        const fy = fromEl.offsetTop + fromEl.offsetHeight / 2;
        lines.push(
          `<circle cx="${fx}" cy="${fy}" r="4" fill="var(--dsw-alias-state-business-primary)" />`
        );
      }
    }
    edgesSvg.innerHTML = lines.join("");
  };
  const paintMinimap = () => {
    if (!(minimapDots instanceof HTMLElement)) return;
    minimapDots.innerHTML = state.nodes.map((n) => {
      const left = Math.max(4, Math.min(108, 8 + (n.x || 0) * 0.08));
      const top = Math.max(4, Math.min(68, 8 + (n.y || 0) * 0.08));
      return `<div data-ws-mm-dot style="left:${left}px;top:${top}px;"></div>`;
    }).join("");
  };
  const syncGenerator = () => {
    const selected = state.nodes.find((n) => state.selection.includes(n.id) && n.type === "genConfig");
    state.generatorOpen = !!selected;
    if (generator instanceof HTMLElement) {
      if (state.generatorOpen) generator.setAttribute("data-open", "");
      else generator.removeAttribute("data-open");
    }
    if (selected) {
      const ta = page.querySelector("[data-ws-canvas-gen-prompt]");
      if (ta instanceof HTMLTextAreaElement && ta.value !== (selected.prompt || "")) {
        ta.value = selected.prompt || "";
      }
      const model = page.querySelector("[data-ws-canvas-param-model]");
      if (model instanceof HTMLInputElement) model.value = selected.modelId || "";
      page.querySelectorAll("[data-ws-canvas-param][data-value]").forEach((btn) => {
        const param = btn.getAttribute("data-ws-canvas-param");
        const val = btn.getAttribute("data-value");
        let cur = "";
        if (param === "ratio") cur = String(selected.ratio ?? RATIOS[0]);
        else if (param === "clarity") cur = String(selected.clarity ?? CLARITY[0]);
        else if (param === "count") cur = String(selected.count ?? COUNTS[0]);
        btn.setAttribute("aria-current", val === cur ? "true" : "false");
      });
    }
  };
  const paintNodes = () => {
    if (!(nodesEl instanceof HTMLElement)) return;
    nodesEl.innerHTML = state.nodes.map((n) => {
      const selected = state.selection.includes(n.id);
      let body = "";
      if (n.type === "text") {
        body = `<textarea data-ws-node-text="${escapeHtml2(n.id)}" placeholder="\u6587\u672C \u2192 \u8FDE\u914D\u7F6E\uFF1D\u63D0\u793A\u8BCD" rows="3">${escapeHtml2(n.text || "")}</textarea>`;
      } else if (n.type === "image") {
        body = `<div data-ws-canvas-img-stub>\u56FE stub<br/>\u62D6\u5165 / \u7C98\u8D34\u672A\u63A5\u7EBF</div>
            <div data-ws-canvas-node-tools>
              ${Object.values(CANVAS_NODE_TOOLS).map(
          (label) => `<button type="button" data-ws-canvas-tool="${escapeHtml2(label)}" data-node="${escapeHtml2(n.id)}" style="${css2.pill({ size: "10px", fill: T2.module })}">${escapeHtml2(label)}</button>`
        ).join("")}
            </div>`;
      } else if (n.type === "video") {
        body = `<div data-ws-canvas-img-stub>${CANVAS_NODES.video}<br/>\u53EF\u64AD\u653E / \u62BD\u5E27 stub</div>`;
      } else {
        body = `<div style="font-size:11px;color:${T2.fg3};">\u9009\u4E2D\u540E\u5E95\u90E8\u6D6E\u51FA\u751F\u6210\u5668</div>
            <div style="font-size:11px;color:${T2.fg2};">${PARAM_LABELS.ratio} ${escapeHtml2(String(n.ratio || RATIOS[0]))} \xB7 ${PARAM_LABELS.count} ${escapeHtml2(String(n.count || 1))}</div>`;
      }
      return `<div data-ws-canvas-node="${escapeHtml2(n.id)}" data-type="${escapeHtml2(n.type)}" ${selected ? "data-selected" : ""} style="left:${n.x || 0}px;top:${n.y || 0}px;">
          <div data-ws-canvas-node-head>
            <span>${escapeHtml2(nodeLabel(n.type))}</span>
            <span style="flex:1"></span>
            <button type="button" data-ws-canvas-node-remove="${escapeHtml2(n.id)}" title="\u79FB\u9664" style="border:0;background:transparent;color:${T2.fg3};cursor:pointer;font-size:12px;line-height:1;padding:0 2px;">\xD7</button>
          </div>
          <div data-ws-canvas-node-body>${body}</div>
          <span data-ws-canvas-port="in" data-node="${escapeHtml2(n.id)}" title="\u8FDE\u5165"></span>
          <span data-ws-canvas-port="out" data-node="${escapeHtml2(n.id)}" title="\u8FDE\u51FA"></span>
        </div>`;
    }).join("");
    nodesEl.querySelectorAll("[data-ws-node-text]").forEach((ta) => {
      ta.addEventListener("input", (e) => {
        const id = ta.getAttribute("data-ws-node-text");
        const node = state.nodes.find((x) => x.id === id);
        if (node && node.type === "text") {
          node.text = /** @type {HTMLTextAreaElement} */
          e.target.value;
        }
      });
      ta.addEventListener("mousedown", (e) => e.stopPropagation());
      ta.addEventListener("pointerdown", (e) => e.stopPropagation());
    });
    nodesEl.querySelectorAll("[data-ws-canvas-node]").forEach((el) => {
      const id = el.getAttribute("data-ws-canvas-node");
      const head = el.querySelector("[data-ws-canvas-node-head]");
      head?.addEventListener("pointerdown", (ev) => {
        if (!(ev instanceof PointerEvent)) return;
        if (ev.target instanceof Element && ev.target.closest("[data-ws-canvas-node-remove]")) return;
        ev.preventDefault();
        ev.stopPropagation();
        const node = state.nodes.find((x) => x.id === id);
        if (!node) return;
        state.selection = [id];
        paintNodes();
        syncGenerator();
        const startX = ev.clientX;
        const startY = ev.clientY;
        const origX = node.x || 0;
        const origY = node.y || 0;
        const zoom = state.viewport.zoom || 1;
        el.setAttribute("data-dragging", "");
        const onMove = (e) => {
          node.x = origX + (e.clientX - startX) / zoom;
          node.y = origY + (e.clientY - startY) / zoom;
          if (el instanceof HTMLElement) {
            el.style.left = `${node.x}px`;
            el.style.top = `${node.y}px`;
          }
          paintEdges();
          paintMinimap();
        };
        const onUp = () => {
          el.removeAttribute("data-dragging");
          document.removeEventListener("pointermove", onMove);
          document.removeEventListener("pointerup", onUp);
        };
        document.addEventListener("pointermove", onMove);
        document.addEventListener("pointerup", onUp);
      });
      el.addEventListener("click", (e) => {
        if (e.target instanceof Element && e.target.closest("[data-ws-canvas-port]")) return;
        if (e.target instanceof Element && e.target.closest("[data-ws-canvas-node-remove]")) return;
        state.selection = [id];
        paintNodes();
        syncGenerator();
      });
    });
    nodesEl.querySelectorAll("[data-ws-canvas-node-remove]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const id = btn.getAttribute("data-ws-canvas-node-remove");
        state.nodes = state.nodes.filter((n) => n.id !== id);
        state.edges = state.edges.filter((ed) => ed.from !== id && ed.to !== id);
        state.selection = state.selection.filter((s) => s !== id);
        paintNodes();
        paintEdges();
        paintMinimap();
        syncGenerator();
        setStatus("\u5DF2\u79FB\u9664\u8282\u70B9\uFF08\u672C\u5730\u58F3\uFF09");
      });
    });
    nodesEl.querySelectorAll("[data-ws-canvas-port]").forEach((port) => {
      port.addEventListener("pointerdown", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const nodeId = port.getAttribute("data-node");
        const side = port.getAttribute("data-ws-canvas-port");
        if (!nodeId) return;
        if (side === "out") {
          state.connectFrom = nodeId;
          setStatus("\u8FDE\u7EBF stub\uFF1A\u518D\u70B9\u76EE\u6807\u5165\u7AEF\u53E3\u5B8C\u6210\uFF08\u58F3\uFF09");
          paintEdges();
        } else if (side === "in" && state.connectFrom && state.connectFrom !== nodeId) {
          const exists = state.edges.some((ed) => ed.from === state.connectFrom && ed.to === nodeId);
          if (!exists) {
            state.edges.push({ id: uid("e"), from: state.connectFrom, to: nodeId });
          }
          state.connectFrom = null;
          setStatus("\u5DF2\u6DFB\u52A0\u8FDE\u7EBF\uFF08\u672C\u5730\u58F3\uFF0C\u65E0\u534F\u8BAE\uFF09");
          paintEdges();
        }
      });
    });
    paintEdges();
    paintMinimap();
    syncGenerator();
  };
  const addNode = (type) => {
    const baseX = 120 + state.nodes.length * 24;
    const baseY = 140 + state.nodes.length * 16;
    let node;
    if (type === "text") {
      node = { type: "text", id: uid("n-text"), x: baseX, y: baseY, text: "" };
    } else if (type === "image") {
      node = { type: "image", id: uid("n-img"), x: baseX, y: baseY, src: "" };
    } else if (type === "video") {
      node = { type: "video", id: uid("n-vid"), x: baseX, y: baseY, srcUrl: "" };
    } else {
      node = {
        type: "genConfig",
        id: uid("n-cfg"),
        x: baseX,
        y: baseY,
        prompt: "",
        modelId: "",
        ratio: RATIOS[0],
        count: COUNTS[0],
        clarity: CLARITY[0]
      };
    }
    state.nodes.push(node);
    state.selection = [node.id];
    paintNodes();
    setStatus(`\u5DF2\u6DFB\u52A0${nodeLabel(type)}\uFF08\u672C\u5730\u58F3\uFF09`);
  };
  page.querySelector("[data-ws-canvas-project-name]")?.addEventListener("change", (e) => {
    const t = (
      /** @type {HTMLInputElement} */
      e.target
    );
    const p = state.projects.find((x) => x.id === state.projectId);
    if (p) p.name = t.value || DEFAULT_PROJECT_NAME;
    const sel = page.querySelector("[data-ws-canvas-project-list]");
    if (sel instanceof HTMLSelectElement) {
      const opt = sel.querySelector(`option[value="${state.projectId}"]`);
      if (opt) opt.textContent = p?.name || DEFAULT_PROJECT_NAME;
    }
  });
  page.querySelector("[data-ws-canvas-new]")?.addEventListener("click", () => {
    const id = uid("proj");
    const name2 = `\u9879\u76EE ${state.projects.length + 1}`;
    state.projects.push({ id, name: name2 });
    state.projectId = id;
    const sel = page.querySelector("[data-ws-canvas-project-list]");
    if (sel instanceof HTMLSelectElement) {
      const opt = document.createElement("option");
      opt.value = id;
      opt.textContent = name2;
      opt.selected = true;
      sel.appendChild(opt);
    }
    const nameInput = page.querySelector("[data-ws-canvas-project-name]");
    if (nameInput instanceof HTMLInputElement) nameInput.value = name2;
    setStatus(`\u5DF2${CANVAS_CHROME.newProject}\uFF08\u672C\u5730\u58F3\uFF0C\u672A\u6301\u4E45\u5316\uFF09`);
  });
  page.querySelector("[data-ws-canvas-rename]")?.addEventListener("click", () => {
    const nameInput = page.querySelector("[data-ws-canvas-project-name]");
    if (nameInput instanceof HTMLInputElement) {
      nameInput.focus();
      nameInput.select();
    }
    setStatus(`${CANVAS_CHROME.rename}\uFF1A\u7F16\u8F91\u9879\u76EE\u540D\u540E\u56DE\u8F66\uFF08\u672C\u5730\u58F3\uFF09`);
  });
  page.querySelector("[data-ws-canvas-project-list]")?.addEventListener("change", (e) => {
    const t = (
      /** @type {HTMLSelectElement} */
      e.target
    );
    state.projectId = t.value;
    const p = state.projects.find((x) => x.id === state.projectId);
    const nameInput = page.querySelector("[data-ws-canvas-project-name]");
    if (nameInput instanceof HTMLInputElement) nameInput.value = p?.name || DEFAULT_PROJECT_NAME;
    setStatus("\u5DF2\u5207\u6362\u9879\u76EE\uFF08\u672C\u5730\u58F3\uFF0C\u753B\u5E03\u5185\u5BB9\u672A\u5206\u9879\u76EE\u6301\u4E45\u5316\uFF09");
  });
  page.querySelectorAll("[data-ws-canvas-add]").forEach((btn) => {
    btn.addEventListener("click", () => {
      addNode(btn.getAttribute("data-ws-canvas-add") || "text");
    });
  });
  viewport?.addEventListener("dblclick", (e) => {
    if (!(e instanceof MouseEvent) || !(viewport instanceof HTMLElement)) return;
    if (e.target !== viewport && e.target !== world) return;
    const rect = viewport.getBoundingClientRect();
    const zoom = state.viewport.zoom || 1;
    const x = (e.clientX - rect.left - state.viewport.x) / zoom;
    const y = (e.clientY - rect.top - state.viewport.y) / zoom;
    const node = { type: "text", id: uid("n-text"), x, y, text: "" };
    state.nodes.push(node);
    state.selection = [node.id];
    paintNodes();
    setStatus(`\u53CC\u51FB\u7A7A\u767D\uFF1A\u5DF2\u5EFA${CANVAS_NODES.text}`);
  });
  let spaceDown = false;
  let panning = false;
  const onKeyDown = (e) => {
    if (e.code === "Space" && !e.repeat) {
      spaceDown = true;
      if (viewport instanceof HTMLElement) viewport.setAttribute("data-panning", "");
    }
  };
  const onKeyUp = (e) => {
    if (e.code === "Space") {
      spaceDown = false;
      if (!panning && viewport instanceof HTMLElement) viewport.removeAttribute("data-panning");
    }
  };
  document.addEventListener("keydown", onKeyDown);
  document.addEventListener("keyup", onKeyUp);
  viewport?.addEventListener("pointerdown", (ev) => {
    if (!(ev instanceof PointerEvent) || !(viewport instanceof HTMLElement)) return;
    const onBlank = ev.target === viewport || ev.target === world || ev.target === edgesSvg;
    if (!onBlank) return;
    if (!(spaceDown || ev.ctrlKey || ev.metaKey || ev.button === 1)) {
      if (ev.button === 0) {
        state.selection = [];
        state.connectFrom = null;
        paintNodes();
      }
      return;
    }
    ev.preventDefault();
    panning = true;
    viewport.setAttribute("data-panning", "");
    const startX = ev.clientX;
    const startY = ev.clientY;
    const origX = state.viewport.x;
    const origY = state.viewport.y;
    const onMove = (e) => {
      state.viewport.x = origX + (e.clientX - startX);
      state.viewport.y = origY + (e.clientY - startY);
      applyTransform();
    };
    const onUp = () => {
      panning = false;
      if (!spaceDown) viewport.removeAttribute("data-panning");
      document.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerup", onUp);
    };
    document.addEventListener("pointermove", onMove);
    document.addEventListener("pointerup", onUp);
  });
  viewport?.addEventListener(
    "wheel",
    (e) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? 0.92 : 1.08;
      state.viewport.zoom = Math.max(0.35, Math.min(2.5, state.viewport.zoom * delta));
      applyTransform();
    },
    { passive: false }
  );
  page.querySelector("[data-ws-canvas-fit]")?.addEventListener("click", () => {
    if (!state.nodes.length) {
      state.viewport = { x: 40, y: 40, zoom: 1 };
    } else {
      const minX = Math.min(...state.nodes.map((n) => n.x || 0));
      const minY = Math.min(...state.nodes.map((n) => n.y || 0));
      state.viewport = { x: 40 - minX, y: 40 - minY, zoom: 1 };
    }
    applyTransform();
    setStatus(CANVAS_CHROME.fitAll);
  });
  page.querySelector("[data-ws-canvas-gen-prompt]")?.addEventListener("input", (e) => {
    const t = (
      /** @type {HTMLTextAreaElement} */
      e.target
    );
    const cfg = state.nodes.find((n) => state.selection.includes(n.id) && n.type === "genConfig");
    if (cfg) cfg.prompt = t.value;
  });
  page.querySelector("[data-ws-canvas-param-model]")?.addEventListener("input", (e) => {
    const t = (
      /** @type {HTMLInputElement} */
      e.target
    );
    const cfg = state.nodes.find((n) => state.selection.includes(n.id) && n.type === "genConfig");
    if (cfg) cfg.modelId = t.value;
  });
  page.querySelectorAll("[data-ws-canvas-chips]").forEach((group) => {
    group.addEventListener("click", (e) => {
      const btn = e.target instanceof Element ? e.target.closest("[data-ws-canvas-param][data-value]") : null;
      if (!btn) return;
      const param = btn.getAttribute("data-ws-canvas-param");
      const value = btn.getAttribute("data-value");
      const cfg = state.nodes.find((n) => state.selection.includes(n.id) && n.type === "genConfig");
      if (!cfg || !param || value == null) return;
      if (param === "ratio") cfg.ratio = value;
      else if (param === "clarity") cfg.clarity = value;
      else if (param === "count") cfg.count = Number(value) || 1;
      syncGenerator();
      paintNodes();
    });
  });
  page.addEventListener("click", (e) => {
    const tool = e.target instanceof Element ? e.target.closest("[data-ws-canvas-tool]") : null;
    if (!tool) return;
    const label = tool.getAttribute("data-ws-canvas-tool") || "";
    setStatus(STUB_ACTION(label));
    host.dispatchEvent(
      new CustomEvent("dsh-ws-canvas-tool", {
        bubbles: true,
        detail: { tool: label }
      })
    );
  });
  const sendBtn = page.querySelector("[data-ws-canvas-send]");
  if (sendBtn instanceof HTMLButtonElement) {
    sendBtn.disabled = false;
    sendBtn.removeAttribute("disabled");
  }
  sendBtn?.addEventListener("click", () => {
    const cfg = state.nodes.find((n) => state.selection.includes(n.id) && n.type === "genConfig");
    setStatus(STUB_SEND);
    host.dispatchEvent(
      new CustomEvent("dsh-ws-canvas-generate", {
        bubbles: true,
        detail: {
          projectId: state.projectId,
          nodeId: cfg?.id || null,
          prompt: cfg?.prompt || "",
          modelId: cfg?.modelId || "",
          ratio: cfg?.ratio || RATIOS[0],
          count: cfg?.count || 1,
          clarity: cfg?.clarity || CLARITY[0],
          edges: state.edges.slice()
        }
      })
    );
  });
  applyTransform();
  paintNodes();
  const setPage = (tab) => {
    const name2 = String(tab || IMAGE_PAGE2);
    host.setAttribute("data-ws-top-page", name2);
  };
  return {
    state,
    setPage,
    setStatus,
    dispose() {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
      page.remove();
      styleEl?.remove();
    }
  };
}

// src/client/gif-host.js
var GIF_PAGE = GIF_TITLE;
var FRAME_COUNTS = Object.freeze([4, 8, 12, 16]);
var FPS_OPTS = Object.freeze(["8", "12", "16", "24"]);
var LOOP_OPTS = Object.freeze(["0", "1", "3", "\u65E0\u9650"]);
var SIZE_OPTS = Object.freeze(["512", "768", "1024"]);
function escapeHtml3(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function gifHostStyles(T2) {
  return `
[data-dsh-ws-studio-host] [data-ws-gif-overlay] {
  display:none; position:absolute; inset:0; z-index:60;
  background: var(--dsw-alias-bg-mask-3, rgba(0,0,0,.45));
  align-items:stretch; justify-content:center; padding:16px;
}
[data-dsh-ws-studio-host] [data-ws-gif-overlay][data-open] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-gif-panel] {
  display:flex; flex-direction:column; gap:10px; width:min(720px, 100%);
  max-height:100%; margin:auto; overflow:auto;
  background: var(--dsw-alias-bg-base);
  border:1px solid var(--dsw-alias-border-l2);
  border-radius:12px; box-shadow: var(--dsw-elevation-panel);
  padding:12px 14px 14px; color: var(--dsw-alias-label-primary);
}
[data-dsh-ws-studio-host] [data-ws-gif-head] {
  display:flex; align-items:center; gap:8px; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-gif-frames] {
  display:flex; gap:8px; flex-wrap:wrap; min-height:72px;
}
[data-dsh-ws-studio-host] [data-ws-gif-frame] {
  width:72px; height:72px; border-radius:8px;
  border:1px dashed var(--dsw-alias-border-l3);
  background: var(--dsw-alias-bg-module-platform);
  display:flex; align-items:center; justify-content:center;
  font-size:11px; color: var(--dsw-alias-label-tertiary);
  position:relative; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-gif-frame][data-active] {
  border-color: var(--dsw-alias-state-business-primary);
  color: var(--dsw-alias-label-primary);
}
[data-dsh-ws-studio-host] [data-ws-gif-cta]:hover {
  background: var(--dsw-alias-button-primary-hover);
}
[data-dsh-ws-studio-host] [data-ws-gif-cta]:active { filter:brightness(.96); }
[data-dsh-ws-studio-host] [data-ws-gif-cta]:focus-visible {
  outline:2px solid var(--dsw-alias-state-business-primary); outline-offset:2px;
}
`;
}
function defaultGifState() {
  return {
    prompt: "",
    frameCount: FRAME_COUNTS[1],
    fps: FPS_OPTS[1],
    loops: LOOP_OPTS[0],
    size: SIZE_OPTS[0],
    activeFrame: 0
  };
}
function mountGifHost(host, opts) {
  const { T: T2, css: css2 } = opts;
  const state = defaultGifState();
  const setHostStatus = typeof opts.setStatus === "function" ? opts.setStatus : () => {
  };
  let styleEl = host.querySelector("style[data-ws-gif-styles]");
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.setAttribute("data-ws-gif-styles", "");
    styleEl.textContent = gifHostStyles(T2);
    host.appendChild(styleEl);
  }
  host.querySelector("[data-ws-gif-overlay]")?.remove();
  const chipHtml = (param, values, selected) => values.map((v) => {
    const val = String(v);
    const on = val === String(selected);
    return `<button type="button" data-ws-gif-param="${param}" data-value="${escapeHtml3(val)}" aria-current="${on ? "true" : "false"}" style="${css2.chip(on)}">${escapeHtml3(val)}</button>`;
  }).join("");
  const overlay = document.createElement("div");
  overlay.setAttribute("data-ws-gif-overlay", "");
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-label", GIF_TITLE);
  overlay.innerHTML = `
    <div data-ws-gif-panel>
      <div data-ws-gif-head>
        <strong style="font-size:14px;">${GIF_TITLE}</strong>
        <span style="font-size:11px;color:${T2.fg3};">\u591A\u5E27 \xB7 \u672C\u5730\u7F16\u7801\u672A\u63A5\u7EBF</span>
        <span style="flex:1"></span>
        <button type="button" data-ws-gif-close style="${css2.pill()}">\u5173\u95ED</button>
      </div>

      <div style="${css2.dockBlock}">
        <div style="display:flex;align-items:center;gap:6px;">
          <span style="${css2.paramLabel}">${PROMPT_FIELDS.prompt}</span>
          <span style="font-size:11px;color:${T2.fg3};">\u52A8\u4F5C\u6216\u53D8\u5316\u8FC7\u7A0B</span>
        </div>
        <textarea data-ws-gif-prompt rows="2" placeholder="\u63CF\u8FF0\u5E27\u95F4\u52A8\u4F5C\u6216\u53D8\u5316" style="resize:vertical;min-height:56px;padding:6px 8px;border-radius:8px;border:1px solid ${T2.border2};background:${T2.input};color:inherit;font:inherit;line-height:1.45;font-size:12.5px;"></textarea>
      </div>

      <div data-ws-param-row>
        <div data-ws-param-group>
          <span style="${css2.paramLabel}">${GIF_PARAMS.frames}</span>
          <div data-ws-chips role="group" aria-label="${GIF_PARAMS.frames}">
            ${chipHtml("frames", FRAME_COUNTS, state.frameCount)}
          </div>
        </div>
        <div data-ws-param-group>
          <span style="${css2.paramLabel}">${GIF_PARAMS.fps}</span>
          <div data-ws-chips role="group" aria-label="${GIF_PARAMS.fps}">
            ${chipHtml("fps", FPS_OPTS, state.fps)}
          </div>
        </div>
        <div data-ws-param-group>
          <span style="${css2.paramLabel}">${GIF_PARAMS.loops}</span>
          <div data-ws-chips role="group" aria-label="${GIF_PARAMS.loops}">
            ${chipHtml("loops", LOOP_OPTS, state.loops)}
          </div>
        </div>
        <div data-ws-param-group>
          <span style="${css2.paramLabel}">${GIF_PARAMS.size}</span>
          <div data-ws-chips role="group" aria-label="${GIF_PARAMS.size}">
            ${chipHtml("size", SIZE_OPTS, state.size)}
          </div>
        </div>
      </div>

      <div style="display:flex;flex-direction:column;gap:6px;">
        <div style="display:flex;align-items:center;gap:6px;">
          <span style="${css2.paramLabel}">\u5E27\u5E8F\u5217\u9884\u89C8</span>
          <span style="flex:1"></span>
          ${GIF_FRAME_ACTIONS.map(
    (a) => `<button type="button" data-ws-gif-frame-action="${a}" style="${css2.pill({ size: "11px" })}">${a}</button>`
  ).join("")}
        </div>
        <div data-ws-gif-frames></div>
      </div>

      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button type="button" data-ws-gif-cta style="${css2.cta};width:auto;min-width:8rem;flex:1;">${GIF_CTA}</button>
        <button type="button" data-ws-gif-export style="${css2.pill({ pad: "8px 14px", size: "12px", fill: T2.module })}">${GIF_ACTIONS.exportGif}</button>
        <button type="button" data-ws-gif-gallery style="${css2.pill({ pad: "8px 14px", size: "12px", fill: T2.module })}">${GIF_ACTIONS.addGallery}</button>
      </div>
      <p data-ws-gif-status style="opacity:.65;font-size:11.5px;min-height:1em;margin:0;"></p>
    </div>
  `;
  host.appendChild(overlay);
  const setStatus = (text) => {
    const el = overlay.querySelector("[data-ws-gif-status]");
    if (el) el.textContent = text;
  };
  const paintFrames = () => {
    const box = overlay.querySelector("[data-ws-gif-frames]");
    if (!(box instanceof HTMLElement)) return;
    const n = Number(state.frameCount) || 4;
    const parts = [];
    for (let i = 0; i < n; i++) {
      const on = i === state.activeFrame;
      parts.push(
        `<button type="button" data-ws-gif-frame data-index="${i}" ${on ? "data-active" : ""} aria-label="\u5E27 ${i + 1}">\u5E27 ${i + 1}</button>`
      );
    }
    box.innerHTML = parts.join("");
    box.querySelectorAll("[data-ws-gif-frame]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.activeFrame = Number(btn.getAttribute("data-index")) || 0;
        paintFrames();
      });
    });
  };
  const paintChips = () => {
    const sync = (param, value) => {
      overlay.querySelectorAll(`[data-ws-gif-param="${param}"][data-value]`).forEach((btn) => {
        const on = btn.getAttribute("data-value") === String(value);
        btn.setAttribute("aria-current", on ? "true" : "false");
        if (btn instanceof HTMLElement) btn.style.cssText = css2.chip(on);
      });
    };
    sync("frames", state.frameCount);
    sync("fps", state.fps);
    sync("loops", state.loops);
    sync("size", state.size);
  };
  overlay.querySelector("[data-ws-gif-prompt]")?.addEventListener("input", (e) => {
    const t = (
      /** @type {HTMLTextAreaElement} */
      e.target
    );
    state.prompt = t.value;
  });
  overlay.querySelector("[data-ws-gif-panel]")?.addEventListener("click", (e) => {
    const t = e.target instanceof Element ? e.target.closest("[data-ws-gif-param][data-value]") : null;
    if (!t) return;
    const param = t.getAttribute("data-ws-gif-param");
    const value = t.getAttribute("data-value");
    if (!param || value == null) return;
    if (param === "frames") {
      state.frameCount = Number(value) || FRAME_COUNTS[0];
      if (state.activeFrame >= state.frameCount) state.activeFrame = 0;
      paintFrames();
    } else if (param === "fps") state.fps = value;
    else if (param === "loops") state.loops = value;
    else if (param === "size") state.size = value;
    paintChips();
  });
  overlay.querySelectorAll("[data-ws-gif-frame-action]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const a = btn.getAttribute("data-ws-gif-frame-action") || "";
      setStatus(`\u300C${a}\u300D\u672A\u63A5\u7EBF`);
      setHostStatus(`GIF \xB7 \u300C${a}\u300D\u672A\u63A5\u7EBF`);
    });
  });
  const cta = overlay.querySelector("[data-ws-gif-cta]");
  if (cta instanceof HTMLButtonElement) {
    cta.disabled = false;
    cta.removeAttribute("disabled");
  }
  cta?.addEventListener("click", () => {
    setStatus("GIF \u901A\u9053\u672A\u63A5\uFF08\u672C\u5730\u7F16\u7801 stub\uFF09");
    setHostStatus("GIF \u901A\u9053\u672A\u63A5");
    host.dispatchEvent(
      new CustomEvent("dsh-ws-gif-generate", {
        bubbles: true,
        detail: {
          prompt: state.prompt,
          frameCount: state.frameCount,
          fps: state.fps,
          loops: state.loops,
          size: state.size,
          stub: true
        }
      })
    );
  });
  overlay.querySelector("[data-ws-gif-export]")?.addEventListener("click", () => {
    setStatus(`\u300C${GIF_ACTIONS.exportGif}\u300D\u672A\u63A5\u7EBF`);
  });
  overlay.querySelector("[data-ws-gif-gallery]")?.addEventListener("click", () => {
    setStatus(`\u300C${GIF_ACTIONS.addGallery}\u300D\u672A\u63A5\u7EBF`);
  });
  const close = () => {
    overlay.removeAttribute("data-open");
  };
  const open = () => {
    overlay.setAttribute("data-open", "");
    paintChips();
    paintFrames();
    setStatus("GIF \u58F3 \xB7 \u53C2\u6570\u53EF\u8C03\uFF0C\u7F16\u7801\u672A\u63A5\u7EBF");
    setHostStatus("GIF");
  };
  overlay.querySelector("[data-ws-gif-close]")?.addEventListener("click", close);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });
  paintFrames();
  paintChips();
  return {
    state,
    open,
    close,
    isOpen: () => overlay.hasAttribute("data-open"),
    dispose: () => {
      overlay.remove();
      styleEl?.remove();
    }
  };
}

// src/client/ui-design-host.js
var UI_DESIGN_PAGE = UI_DESIGN_TITLE;
function uiDesignHostStyles(T2) {
  return `
[data-dsh-ws-studio-host] [data-ws-ui-overlay] {
  display:none; position:absolute; inset:0; z-index:60;
  background: var(--dsw-alias-bg-mask-3, rgba(0,0,0,.45));
  align-items:stretch; justify-content:center; padding:16px;
}
[data-dsh-ws-studio-host] [data-ws-ui-overlay][data-open] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-ui-panel] {
  display:flex; flex-direction:column; gap:10px; width:min(960px, 100%);
  max-height:100%; margin:auto; overflow:auto;
  background: var(--dsw-alias-bg-base);
  border:1px solid var(--dsw-alias-border-l2);
  border-radius:12px; box-shadow: var(--dsw-elevation-panel);
  padding:12px 14px 14px; color: var(--dsw-alias-label-primary);
}
[data-dsh-ws-studio-host] [data-ws-ui-head] {
  display:flex; align-items:center; gap:8px; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-ui-steps] {
  display:flex; flex-wrap:wrap; gap:4px; padding:6px; flex:none;
  background: var(--dsw-alias-bg-module-platform);
  border:1px solid var(--dsw-alias-border-l2); border-radius:10px;
}
[data-dsh-ws-studio-host] [data-ws-ui-step] {
  padding:4px 10px; border:1px solid var(--dsw-alias-border-l2);
  border-radius:999px; background:transparent;
  color: var(--dsw-alias-label-secondary); cursor:pointer;
  font:inherit; font-size:11.5px; line-height:1.3;
}
[data-dsh-ws-studio-host] [data-ws-ui-step]:hover {
  background: var(--dsw-alias-interactive-bg-hover);
}
[data-dsh-ws-studio-host] [data-ws-ui-step][aria-current="true"],
[data-dsh-ws-studio-host] [data-ws-ui-step][data-active] {
  background: var(--dsw-alias-interactive-bg-active);
  border-color: var(--dsw-alias-border-l4);
  color: var(--dsw-alias-label-primary); font-weight:600;
}
[data-dsh-ws-studio-host] [data-ws-ui-drop] {
  min-height:160px; border-radius:10px;
  border:1px dashed var(--dsw-alias-border-l3);
  background: var(--dsw-specific-input-major);
  display:flex; flex-direction:column; align-items:center; justify-content:center;
  gap:8px; padding:16px; color: var(--dsw-alias-label-secondary);
  font-size:12.5px; cursor:pointer;
}
[data-dsh-ws-studio-host] [data-ws-ui-drop][data-dragover] {
  border-color: var(--dsw-alias-state-business-primary);
  color: var(--dsw-alias-label-primary);
}
[data-dsh-ws-studio-host] [data-ws-ui-preview] {
  display:none; position:relative; max-height:280px; border-radius:10px;
  overflow:hidden; border:1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-layer-1);
}
[data-dsh-ws-studio-host] [data-ws-ui-preview][data-filled] { display:block; }
[data-dsh-ws-studio-host] [data-ws-ui-preview] img {
  width:100%; max-height:280px; object-fit:contain; display:block;
}
[data-dsh-ws-studio-host] [data-ws-ui-body] {
  display:flex; flex-direction:column; gap:10px; flex:1; min-height:0;
}
`;
}
function defaultUiDesignState() {
  return {
    step: UI_DESIGN_STEPS[0],
    designFile: (
      /** @type {{ id: string, url: string, name?: string } | null} */
      null
    )
  };
}
function mountUiDesignHost(host, opts) {
  const { T: T2, css: css2 } = opts;
  const state = defaultUiDesignState();
  const setHostStatus = typeof opts.setStatus === "function" ? opts.setStatus : () => {
  };
  let styleEl = host.querySelector("style[data-ws-ui-styles]");
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.setAttribute("data-ws-ui-styles", "");
    styleEl.textContent = uiDesignHostStyles(T2);
    host.appendChild(styleEl);
  }
  host.querySelector("[data-ws-ui-overlay]")?.remove();
  const overlay = document.createElement("div");
  overlay.setAttribute("data-ws-ui-overlay", "");
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-label", UI_DESIGN_TITLE);
  overlay.innerHTML = `
    <div data-ws-ui-panel>
      <div data-ws-ui-head>
        <strong style="font-size:14px;">${UI_DESIGN_TITLE}</strong>
        <span style="font-size:11px;color:${T2.fg3};">\u5BBD\u5C4F\u5DE5\u5177 \xB7 \u5207\u56FE\u672A\u63A5\u7EBF</span>
        <span style="flex:1"></span>
        <button type="button" data-ws-ui-close style="${css2.pill()}">\u5173\u95ED</button>
      </div>

      <div data-ws-ui-steps role="tablist" aria-label="UI \u8BBE\u8BA1\u6B65\u9AA4">
        ${UI_DESIGN_STEPS.map(
    (s, i) => `<button type="button" data-ws-ui-step="${s}" role="tab" aria-current="${i === 0 ? "true" : "false"}" ${i === 0 ? "data-active" : ""}>${s}</button>`
  ).join("")}
      </div>

      <div data-ws-ui-body>
        <div data-ws-ui-step-panel data-step="${UI_DESIGN_STEPS[0]}">
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="${css2.paramLabel}">${UI_DESIGN_LABELS.upload}</span>
            <span style="font-size:11px;color:${T2.fg3};">\u672C\u5730 \xB7 \u62D6\u62FD</span>
            <span style="flex:1"></span>
            <button type="button" data-ws-ui-upload style="${css2.pill({ size: "11px", fill: T2.module })}">\u4E0A\u4F20</button>
            <input type="file" data-ws-ui-file accept="image/*" hidden />
          </div>
          <div data-ws-ui-drop tabindex="0">\u70B9\u51FB\u3001\u62D6\u5165\u8BBE\u8BA1\u7A3F</div>
          <div data-ws-ui-preview><img alt="\u8BBE\u8BA1\u7A3F" /></div>
        </div>
        <div data-ws-ui-step-panel data-step="${UI_DESIGN_STEPS[1]}" hidden>
          <p style="margin:0;font-size:12.5px;color:${T2.fg2};">
            ${UI_DESIGN_LABELS.aiSlice} \u63D0\u8BAE\u540E\u987B\u52FE\u9009\u300C${UI_DESIGN_LABELS.confirm}\u300D\u624D\u5207\uFF08\u672A\u63A5\u7EBF\uFF09\u3002
          </p>
          <label style="display:inline-flex;align-items:center;gap:6px;font-size:12px;color:${T2.fg2};">
            <input type="checkbox" data-ws-ui-confirm /> ${UI_DESIGN_LABELS.confirm}
          </label>
          <button type="button" data-ws-ui-run-slice style="${css2.pill({ pad: "6px 12px", fill: T2.module })}" disabled>${UI_DESIGN_LABELS.aiSlice}</button>
        </div>
        <div data-ws-ui-step-panel data-step="${UI_DESIGN_STEPS[2]}" hidden>
          <p style="margin:0;font-size:12.5px;color:${T2.fg2};">\u5207\u56FE\u7F16\u8F91\u5668\u58F3 \xB7 \u7F29\u653E / \u5E73\u79FB / \u5207\u7247\uFF08\u672A\u63A5\u7EBF\uFF09</p>
          <div style="display:flex;gap:6px;flex-wrap:wrap;">
            <button type="button" data-ws-ui-view="${UI_DESIGN_LABELS.original}" style="${css2.pill()}">${UI_DESIGN_LABELS.original}</button>
            <button type="button" data-ws-ui-view="${UI_DESIGN_LABELS.cutout}" style="${css2.pill()}">${UI_DESIGN_LABELS.cutout}</button>
            <button type="button" data-ws-ui-view="${UI_DESIGN_LABELS.slicesOnly}" style="${css2.pill()}">${UI_DESIGN_LABELS.slicesOnly}</button>
          </div>
        </div>
        <div data-ws-ui-step-panel data-step="${UI_DESIGN_STEPS[3]}" hidden>
          <div style="display:flex;gap:6px;flex-wrap:wrap;">
            <button type="button" data-ws-ui-mat style="${css2.pill()}">${UI_DESIGN_LABELS.algoCutout}</button>
            <button type="button" data-ws-ui-mat style="${css2.pill()}">${UI_DESIGN_LABELS.aiCutout}</button>
            <button type="button" data-ws-ui-mat style="${css2.pill()}">${UI_DESIGN_LABELS.algoSvg}</button>
            <button type="button" data-ws-ui-mat style="${css2.pill()}">${UI_DESIGN_LABELS.aiSvg}</button>
          </div>
        </div>
        <div data-ws-ui-step-panel data-step="${UI_DESIGN_STEPS[4]}" hidden>
          <div style="display:flex;gap:6px;flex-wrap:wrap;">
            <button type="button" data-ws-ui-bg style="${css2.pill()}">${UI_DESIGN_LABELS.localComposite}</button>
            <button type="button" data-ws-ui-bg style="${css2.pill()}">${UI_DESIGN_LABELS.aiOriginal}</button>
          </div>
        </div>
        <div data-ws-ui-step-panel data-step="${UI_DESIGN_STEPS[5]}" hidden>
          <p style="margin:0;font-size:12.5px;color:${T2.fg2};">\u7F51\u9875\u590D\u523B \xB7 iframe \u9884\u89C8\u672A\u63A5\u7EBF</p>
        </div>
        <div data-ws-ui-step-panel data-step="${UI_DESIGN_STEPS[6]}" hidden>
          <button type="button" data-ws-ui-export style="${css2.pill({ pad: "8px 14px", fill: T2.module })}">${UI_DESIGN_LABELS.export}</button>
        </div>
      </div>
      <p data-ws-ui-status style="opacity:.65;font-size:11.5px;min-height:1em;margin:0;"></p>
    </div>
  `;
  host.appendChild(overlay);
  const setStatus = (text) => {
    const el = overlay.querySelector("[data-ws-ui-status]");
    if (el) el.textContent = text;
  };
  const paintSteps = () => {
    overlay.querySelectorAll("[data-ws-ui-step]").forEach((btn) => {
      const on = btn.getAttribute("data-ws-ui-step") === state.step;
      btn.setAttribute("aria-current", on ? "true" : "false");
      if (on) btn.setAttribute("data-active", "");
      else btn.removeAttribute("data-active");
    });
    overlay.querySelectorAll("[data-ws-ui-step-panel]").forEach((panel) => {
      if (!(panel instanceof HTMLElement)) return;
      panel.hidden = panel.getAttribute("data-step") !== state.step;
    });
  };
  const paintPreview = () => {
    const preview = overlay.querySelector("[data-ws-ui-preview]");
    const drop2 = overlay.querySelector("[data-ws-ui-drop]");
    const img = preview?.querySelector("img");
    if (!(preview instanceof HTMLElement)) return;
    if (state.designFile?.url && img instanceof HTMLImageElement) {
      img.src = state.designFile.url;
      preview.setAttribute("data-filled", "");
      if (drop2 instanceof HTMLElement) drop2.style.display = "none";
    } else {
      preview.removeAttribute("data-filled");
      if (img instanceof HTMLImageElement) img.removeAttribute("src");
      if (drop2 instanceof HTMLElement) drop2.style.display = "";
    }
  };
  const setFile = (file) => {
    if (!(file instanceof File) || !file.type.startsWith("image/")) return;
    if (state.designFile?.url?.startsWith("blob:")) {
      try {
        URL.revokeObjectURL(state.designFile.url);
      } catch (_) {
      }
    }
    state.designFile = { id: `ui-${Date.now()}`, url: URL.createObjectURL(file), name: file.name };
    paintPreview();
    setStatus(`\u5DF2\u8F7D\u5165\u8BBE\u8BA1\u7A3F\u300C${file.name || "image"}\u300D`);
    setHostStatus("UI \u8BBE\u8BA1 \xB7 \u5DF2\u4E0A\u4F20");
  };
  overlay.querySelectorAll("[data-ws-ui-step]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.step = btn.getAttribute("data-ws-ui-step") || UI_DESIGN_STEPS[0];
      paintSteps();
      setStatus(`\u6B65\u9AA4\uFF1A${state.step}`);
    });
  });
  const fileInput = overlay.querySelector("[data-ws-ui-file]");
  const uploadBtn = overlay.querySelector("[data-ws-ui-upload]");
  const drop = overlay.querySelector("[data-ws-ui-drop]");
  uploadBtn?.addEventListener("click", () => {
    if (fileInput instanceof HTMLInputElement) fileInput.click();
  });
  fileInput?.addEventListener("change", (e) => {
    const input = (
      /** @type {HTMLInputElement} */
      e.target
    );
    const f = input.files?.[0];
    if (f) setFile(f);
    input.value = "";
  });
  drop?.addEventListener("click", () => {
    if (fileInput instanceof HTMLInputElement) fileInput.click();
  });
  ["dragenter", "dragover"].forEach((evName) => {
    drop?.addEventListener(evName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (drop instanceof HTMLElement) drop.setAttribute("data-dragover", "");
    });
  });
  ["dragleave", "drop"].forEach((evName) => {
    drop?.addEventListener(evName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (drop instanceof HTMLElement) drop.removeAttribute("data-dragover");
    });
  });
  drop?.addEventListener("drop", (e) => {
    const f = (
      /** @type {DragEvent} */
      e.dataTransfer?.files?.[0]
    );
    if (f) setFile(f);
  });
  const confirm = overlay.querySelector("[data-ws-ui-confirm]");
  const runSlice = overlay.querySelector("[data-ws-ui-run-slice]");
  confirm?.addEventListener("change", () => {
    if (runSlice instanceof HTMLButtonElement) {
      runSlice.disabled = !(confirm instanceof HTMLInputElement && confirm.checked);
    }
  });
  runSlice?.addEventListener("click", () => {
    setStatus(`${UI_DESIGN_LABELS.aiSlice} \u672A\u63A5\u7EBF`);
  });
  overlay.querySelectorAll("[data-ws-ui-view], [data-ws-ui-mat], [data-ws-ui-bg]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const label = btn.getAttribute("data-ws-ui-view") || btn.textContent || "";
      setStatus(`\u300C${label.trim()}\u300D\u672A\u63A5\u7EBF`);
    });
  });
  overlay.querySelector("[data-ws-ui-export]")?.addEventListener("click", () => {
    setStatus(`\u300C${UI_DESIGN_LABELS.export}\u300D\u672A\u63A5\u7EBF`);
  });
  const close = () => {
    overlay.removeAttribute("data-open");
  };
  const open = () => {
    overlay.setAttribute("data-open", "");
    paintSteps();
    paintPreview();
    setStatus("UI \u8BBE\u8BA1\u58F3 \xB7 \u4E0A\u4F20\u8BBE\u8BA1\u7A3F\u540E\u6309\u6B65\u9AA4\u63A8\u8FDB");
    setHostStatus("UI \u8BBE\u8BA1");
  };
  overlay.querySelector("[data-ws-ui-close]")?.addEventListener("click", close);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });
  paintSteps();
  return {
    state,
    open,
    close,
    isOpen: () => overlay.hasAttribute("data-open"),
    dispose: () => {
      if (state.designFile?.url?.startsWith("blob:")) {
        try {
          URL.revokeObjectURL(state.designFile.url);
        } catch (_) {
        }
      }
      overlay.remove();
      styleEl?.remove();
    }
  };
}

// src/client/template-host.js
var FILL_PROMPT_EVENT = "dsh-ws-fill-prompt";
var TEMPLATE_CASES = Object.freeze([
  {
    id: "case-rain-street",
    title: "\u96E8\u591C\u5DF7\u53E3",
    category: "\u573A\u666F",
    prompt: "\u96E8\u591C\u7A84\u5DF7\uFF0C\u9713\u8679\u5012\u6620\u79EF\u6C34\uFF0C\u4E00\u540D\u6491\u4F1E\u884C\u4EBA\u4FA7\u5F71\uFF0C\u6D45\u666F\u6DF1\uFF0C\u7535\u5F71\u611F\u706F\u5149\uFF0C\u5199\u5B9E\u6444\u5F71"
  },
  {
    id: "case-tea-still",
    title: "\u8336\u5E2D\u9759\u7269",
    category: "\u9759\u7269",
    prompt: "\u6728\u8D28\u8336\u5E2D\uFF0C\u9752\u74F7\u76D6\u7897\u4E0E\u5E72\u82B1\uFF0C\u67D4\u548C\u4FA7\u5149\uFF0C\u6D45\u666F\u6DF1\uFF0C\u65E5\u7CFB\u9759\u7269\u6444\u5F71"
  },
  {
    id: "case-mountain-dawn",
    title: "\u5C71\u810A\u6668\u96FE",
    category: "\u98CE\u666F",
    prompt: "\u8FDC\u5C71\u6668\u96FE\uFF0C\u91D1\u8272\u5929\u5149\u7A7F\u900F\u4E91\u5C42\uFF0C\u5C42\u5CE6\u53E0\u5D82\uFF0C\u5E7F\u89D2\u98CE\u5149\uFF0C\u6E05\u900F\u5927\u6C14"
  },
  {
    id: "case-studio-portrait",
    title: "\u68DA\u62CD\u4EBA\u50CF",
    category: "\u4EBA\u50CF",
    prompt: "\u68DA\u62CD\u534A\u8EAB\u4EBA\u50CF\uFF0C\u67D4\u5149\u7BB1\u4E3B\u5149\uFF0C\u5E72\u51C0\u7070\u80CC\u666F\uFF0C\u81EA\u7136\u8868\u60C5\uFF0C\u9AD8\u6E05\u7EC6\u8282"
  },
  {
    id: "case-product-soft",
    title: "\u67D4\u5149\u4EA7\u54C1",
    category: "\u7535\u5546",
    prompt: "\u684C\u9762\u4EA7\u54C1\u9759\u7269\uFF0C\u67D4\u548C\u6563\u5C04\u5149\uFF0C\u5E72\u51C0\u80CC\u666F\uFF0C\u8F7B\u5FAE\u5012\u5F71\uFF0C\u5546\u4E1A\u6444\u5F71\u6784\u56FE"
  },
  {
    id: "case-ink-city",
    title: "\u6C34\u58A8\u57CE\u90ED",
    category: "\u98CE\u683C",
    prompt: "\u6C34\u58A8\u610F\u57CE\u5E02\u5929\u9645\u7EBF\uFF0C\u7559\u767D\u4E0E\u6D53\u6DE1\u5BF9\u6BD4\uFF0C\u4F20\u7EDF\u7B14\u89E6\u4E0E\u73B0\u4EE3\u5EFA\u7B51\u878D\u5408"
  }
]);
function templateHostStyles(T2) {
  return `
[data-dsh-ws-studio-host] [data-ws-tpl-overlay] {
  display:none; position:absolute; inset:0; z-index:60;
  background: var(--dsw-alias-bg-mask-3, rgba(0,0,0,.45));
  align-items:stretch; justify-content:center; padding:16px;
}
[data-dsh-ws-studio-host] [data-ws-tpl-overlay][data-open] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-tpl-panel] {
  display:flex; flex-direction:column; gap:10px; width:min(860px, 100%);
  max-height:100%; margin:auto; overflow:auto;
  background: var(--dsw-alias-bg-base);
  border:1px solid var(--dsw-alias-border-l2);
  border-radius:12px; box-shadow: var(--dsw-elevation-panel);
  padding:12px 14px 14px; color: var(--dsw-alias-label-primary);
}
[data-dsh-ws-studio-host] [data-ws-tpl-head] {
  display:flex; align-items:center; gap:8px; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-tpl-toolbar] {
  display:flex; gap:8px; align-items:center; flex-wrap:wrap;
}
[data-dsh-ws-studio-host] [data-ws-tpl-grid] {
  display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr));
  gap:10px;
}
[data-dsh-ws-studio-host] [data-ws-tpl-card] {
  display:flex; flex-direction:column; gap:6px; padding:10px;
  border:1px solid var(--dsw-alias-border-l2); border-radius:10px;
  background: var(--dsw-alias-bg-module-platform); text-align:left;
  cursor:default; font:inherit; color:inherit;
}
[data-dsh-ws-studio-host] [data-ws-tpl-card]:hover {
  border-color: var(--dsw-alias-border-l4);
  background: var(--dsw-alias-interactive-bg-hover);
}
[data-dsh-ws-studio-host] [data-ws-tpl-card] strong {
  font-size:13px; color: var(--dsw-alias-label-primary);
}
[data-dsh-ws-studio-host] [data-ws-tpl-card] [data-ws-tpl-cat] {
  font-size:11px; color: var(--dsw-alias-label-tertiary);
}
[data-dsh-ws-studio-host] [data-ws-tpl-card] [data-ws-tpl-excerpt] {
  font-size:12px; color: var(--dsw-alias-label-secondary);
  line-height:1.4; display:-webkit-box; -webkit-line-clamp:3;
  -webkit-box-orient:vertical; overflow:hidden; min-height:3.6em;
}
[data-dsh-ws-studio-host] [data-ws-tpl-card] [data-ws-tpl-fill] {
  align-self:flex-start; margin-top:2px;
}
`;
}
function escapeHtml4(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function fillStudioPrompt(host, prompt, hooks = {}) {
  const text = String(prompt || "");
  if (!text.trim()) {
    return { ok: false, via: "none", message: "\u65E0\u63D0\u793A\u8BCD\u53EF\u56DE\u586B" };
  }
  if (typeof hooks.onFillPrompt === "function") {
    try {
      const r = hooks.onFillPrompt(text);
      if (r !== false) {
        return { ok: true, via: "hook", message: `\u5DF2${TEMPLATE_LABELS.fill}` };
      }
    } catch (_) {
    }
  }
  const promptEl = host?.querySelector?.("[data-ws-prompt]");
  if (promptEl instanceof HTMLTextAreaElement) {
    promptEl.value = text;
    promptEl.dispatchEvent(new Event("input", { bubbles: true }));
    host.dispatchEvent(
      new CustomEvent(FILL_PROMPT_EVENT, {
        bubbles: true,
        detail: { prompt: text, via: "dom" }
      })
    );
    return { ok: true, via: "event", message: `\u5DF2${TEMPLATE_LABELS.fill}` };
  }
  if (host instanceof HTMLElement) {
    host.dispatchEvent(
      new CustomEvent(FILL_PROMPT_EVENT, {
        bubbles: true,
        detail: { prompt: text, via: "orphan", studioMounted: false }
      })
    );
  }
  return {
    ok: false,
    via: "none",
    message: "\u666E\u901A\u751F\u56FE\u672A\u6302\u8F7D\uFF0C\u65E0\u6CD5\u56DE\u586B\u63D0\u793A\u8BCD"
  };
}
function mountTemplateHost(host, opts) {
  const { T: T2, css: css2 } = opts;
  const setHostStatus = typeof opts.setStatus === "function" ? opts.setStatus : () => {
  };
  const state = {
    query: "",
    favoritesOnly: false,
    favoriteIds: /* @__PURE__ */ new Set(),
    order: [...TEMPLATE_CASES]
  };
  let styleEl = host.querySelector("style[data-ws-tpl-styles]");
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.setAttribute("data-ws-tpl-styles", "");
    styleEl.textContent = templateHostStyles(T2);
    host.appendChild(styleEl);
  }
  host.querySelector("[data-ws-tpl-overlay]")?.remove();
  const overlay = document.createElement("div");
  overlay.setAttribute("data-ws-tpl-overlay", "");
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-label", TEMPLATE_TITLE);
  overlay.innerHTML = `
    <div data-ws-tpl-panel>
      <div data-ws-tpl-head>
        <strong style="font-size:14px;">${TEMPLATE_TITLE}</strong>
        <span style="font-size:11px;color:${T2.fg3};">${TEMPLATE_LABELS.square}</span>
        <span style="flex:1"></span>
        <button type="button" data-ws-tpl-close style="${css2.pill()}">\u5173\u95ED</button>
      </div>
      <div data-ws-tpl-toolbar>
        <input type="search" data-ws-tpl-search placeholder="\u5173\u952E\u8BCD\u641C\u7D22" aria-label="\u5173\u952E\u8BCD\u641C\u7D22"
          style="flex:1;min-width:8rem;${css2.field};font-size:12px;" />
        <button type="button" data-ws-tpl-fav-filter aria-pressed="false" style="${css2.pill()}">${TEMPLATE_LABELS.favorite}</button>
        <button type="button" data-ws-tpl-shuffle style="${css2.pill({ fill: T2.module })}">${EMPTY.shuffle || TEMPLATE_LABELS.shuffle}</button>
      </div>
      <div data-ws-tpl-grid role="list" aria-label="${EMPTY.inspiration || TEMPLATE_LABELS.inspire}"></div>
      <p data-ws-tpl-status style="opacity:.65;font-size:11.5px;min-height:1em;margin:0;"></p>
    </div>
  `;
  host.appendChild(overlay);
  const setStatus = (text) => {
    const el = overlay.querySelector("[data-ws-tpl-status]");
    if (el) el.textContent = text;
  };
  const visibleCases = () => {
    const q = state.query.trim().toLowerCase();
    return state.order.filter((c) => {
      if (state.favoritesOnly && !state.favoriteIds.has(c.id)) return false;
      if (!q) return true;
      return c.title.toLowerCase().includes(q) || c.category.toLowerCase().includes(q) || c.prompt.toLowerCase().includes(q);
    });
  };
  const paintCards = () => {
    const grid = overlay.querySelector("[data-ws-tpl-grid]");
    if (!(grid instanceof HTMLElement)) return;
    const list = visibleCases();
    if (!list.length) {
      grid.innerHTML = `<p style="margin:8px 0;font-size:12px;color:${T2.fg3};grid-column:1/-1;">\u65E0\u5339\u914D\u6848\u4F8B</p>`;
      return;
    }
    grid.innerHTML = list.map((c) => {
      const fav = state.favoriteIds.has(c.id);
      return `
        <article data-ws-tpl-card data-id="${escapeHtml4(c.id)}" role="listitem">
          <strong>${escapeHtml4(c.title)}</strong>
          <span data-ws-tpl-cat>${escapeHtml4(c.category)}</span>
          <span data-ws-tpl-excerpt>${escapeHtml4(c.prompt)}</span>
          <div style="display:flex;gap:6px;flex-wrap:wrap;">
            <button type="button" data-ws-tpl-fill style="${css2.pill({ size: "11px", fill: T2.hover, color: T2.focus })}">${TEMPLATE_LABELS.fill}</button>
            <button type="button" data-ws-tpl-fav aria-pressed="${fav ? "true" : "false"}" style="${css2.pill({ size: "11px" })}">${fav ? "\u5DF2\u6536\u85CF" : TEMPLATE_LABELS.favorite}</button>
          </div>
        </article>`;
    }).join("");
    grid.querySelectorAll("[data-ws-tpl-card]").forEach((card) => {
      const id = card.getAttribute("data-id") || "";
      const found = TEMPLATE_CASES.find((c) => c.id === id);
      card.querySelector("[data-ws-tpl-fill]")?.addEventListener("click", () => {
        if (!found) return;
        const result = fillStudioPrompt(host, found.prompt, {
          onFillPrompt: opts.onFillPrompt,
          setStatus: setHostStatus
        });
        setStatus(result.message);
        setHostStatus(result.message);
        if (result.ok) close();
      });
      card.querySelector("[data-ws-tpl-fav]")?.addEventListener("click", () => {
        if (state.favoriteIds.has(id)) state.favoriteIds.delete(id);
        else state.favoriteIds.add(id);
        paintCards();
      });
    });
  };
  overlay.querySelector("[data-ws-tpl-search]")?.addEventListener("input", (e) => {
    const t = (
      /** @type {HTMLInputElement} */
      e.target
    );
    state.query = t.value || "";
    paintCards();
  });
  overlay.querySelector("[data-ws-tpl-fav-filter]")?.addEventListener("click", () => {
    state.favoritesOnly = !state.favoritesOnly;
    const btn = overlay.querySelector("[data-ws-tpl-fav-filter]");
    if (btn instanceof HTMLElement) {
      btn.setAttribute("aria-pressed", state.favoritesOnly ? "true" : "false");
    }
    paintCards();
  });
  overlay.querySelector("[data-ws-tpl-shuffle]")?.addEventListener("click", () => {
    const next = [...state.order];
    for (let i = next.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [next[i], next[j]] = [next[j], next[i]];
    }
    state.order = next;
    paintCards();
    setStatus(`\u5DF2${TEMPLATE_LABELS.shuffle}`);
  });
  const close = () => {
    overlay.removeAttribute("data-open");
  };
  const open = () => {
    overlay.setAttribute("data-open", "");
    paintCards();
    setStatus(`${TEMPLATE_TITLE} \xB7 ${TEMPLATE_LABELS.inspire}`);
    setHostStatus(TEMPLATE_TITLE);
  };
  overlay.querySelector("[data-ws-tpl-close]")?.addEventListener("click", close);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });
  paintCards();
  return {
    state,
    open,
    close,
    isOpen: () => overlay.hasAttribute("data-open"),
    fillStudioPrompt: (prompt) => fillStudioPrompt(host, prompt, opts),
    dispose: () => {
      overlay.remove();
      styleEl?.remove();
    }
  };
}

// src/client/gallery-host.js
var GALLERY_PAGE = "\u753B\u5ECA";
var IMAGE_PAGE3 = "\u666E\u901A\u751F\u56FE";
var STORAGE_KEY = "dsh-ws-gallery-items";
var HISTORY_KEY = "dsh-ws-history-v1";
var CTA_RPC_CHANNEL = "/dsh-ws";
var CTA_RPC_STORAGE_PATHS = "storage.paths";
var CTA_RPC_STORAGE_LIST = "storage.list";
var DEFAULT_PATHS = Object.freeze({
  dataDir: "",
  generated: "media/generated",
  gallery: "media/gallery",
  history: "media/history"
});
var EMPTY_HINT = "\u753B\u5ECA\u8FD8\u662F\u7A7A\u7684\u3002\u5728\u666E\u901A\u751F\u56FE\u6216\u89C6\u9891\u7ED3\u679C\u91CC\u70B9\u300C\u52A0\u753B\u5ECA\u300D\uFF0C\u6EE1\u610F\u4F5C\u54C1\u4F1A\u6C89\u6DC0\u5230\u8FD9\u91CC\u3002";
var FILTER_ALL = "\u5168\u90E8";
function escapeHtml5(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function readLocalGalleryItems() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (it) => it && typeof it === "object" && typeof it.id === "string" && typeof it.url === "string"
    );
  } catch (_) {
    return [];
  }
}
function defaultStoragePaths() {
  return { ...DEFAULT_PATHS };
}
function readLocalHistoryItems() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const out = [];
    for (const entry of parsed) {
      const id = entry?.id != null ? String(entry.id) : "";
      const value = entry?.value && typeof entry.value === "object" ? entry.value : {};
      const results = Array.isArray(value.results) ? value.results : [];
      const snap = entry?.snapshot && typeof entry.snapshot === "object" ? entry.snapshot : {};
      results.forEach((r, i) => {
        const url = r?.url ? String(r.url) : "";
        const localPath = r?.localPath ? String(r.localPath) : "";
        if (!url && !localPath) return;
        out.push({
          id: `${id || "hist"}-${i}`,
          url: url || "",
          localPath: localPath || void 0,
          kind: r?.kind === "video" ? "video" : "image",
          mode: snap.mode ? String(snap.mode) : void 0,
          model: snap.modelId ? String(snap.modelId) : void 0,
          ratio: snap.ratio ? String(snap.ratio) : void 0,
          createdAt: Number(entry.savedAt) || Date.now(),
          name: snap.prompt ? String(snap.prompt).slice(0, 40) : "\u5386\u53F2",
          seat: "history"
        });
      });
    }
    return out;
  } catch (_) {
    return [];
  }
}
async function fetchStorageMedia(opts) {
  const paths = defaultStoragePaths();
  let diskItems = [];
  const rpc = typeof opts?.getRpc === "function" ? opts.getRpc() : null;
  if (!rpc || typeof rpc.call !== "function") {
    return { paths, diskItems };
  }
  try {
    const pathRes = await rpc.call(CTA_RPC_CHANNEL, CTA_RPC_STORAGE_PATHS, {});
    if (pathRes?.ok && pathRes.value && typeof pathRes.value === "object") {
      const v = pathRes.value;
      if (v.dataDir != null) paths.dataDir = String(v.dataDir);
      if (v.generated) paths.generated = String(v.generated);
      if (v.gallery) paths.gallery = String(v.gallery);
      if (v.history) paths.history = String(v.history);
    }
  } catch (_) {
  }
  try {
    const listRes = await rpc.call(CTA_RPC_CHANNEL, CTA_RPC_STORAGE_LIST, {});
    if (listRes?.ok && listRes.value && typeof listRes.value === "object") {
      const v = listRes.value;
      if (v.gallery) paths.gallery = String(v.gallery || paths.gallery);
      if (v.history) paths.history = String(v.history || paths.history);
      if (v.dataDir != null) paths.dataDir = String(v.dataDir);
      const rows = Array.isArray(v.items) ? v.items : [...Array.isArray(v.galleryItems) ? v.galleryItems : [], ...Array.isArray(v.historyItems) ? v.historyItems : []];
      diskItems = rows.filter((it) => it && typeof it === "object").map((it) => ({
        id: String(it.id || it.relativePath || it.name || Math.random()),
        url: it.url ? String(it.url) : "",
        localPath: it.localPath ? String(it.localPath) : void 0,
        kind: it.kind === "video" ? "video" : "image",
        name: it.name ? String(it.name) : it.relativePath ? String(it.relativePath) : "\u7D20\u6750",
        createdAt: Number(it.createdAt) || Date.now(),
        seat: it.seat ? String(it.seat) : void 0,
        relativePath: it.relativePath ? String(it.relativePath) : void 0
      }));
    }
  } catch (_) {
  }
  return { paths, diskItems };
}
function collectLocalMediaItems(diskItems = []) {
  const gallery = readLocalGalleryItems();
  const history = readLocalHistoryItems();
  const merged = [...diskItems, ...gallery, ...history];
  const seen = /* @__PURE__ */ new Set();
  const out = [];
  for (const it of merged) {
    const key = it.id || it.url || it.localPath || it.relativePath || "";
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(it);
  }
  return out;
}
function defaultGalleryState() {
  return {
    filters: { mode: FILTER_ALL, model: FILTER_ALL, ratio: FILTER_ALL, tagIds: [] },
    view: "grid",
    sort: "newest",
    tags: [],
    selection: [],
    items: collectLocalMediaItems([]),
    paths: defaultStoragePaths(),
    lightboxId: void 0
  };
}
function galleryHostStyles() {
  return `
[data-dsh-ws-studio-host] [data-ws-page="gallery"] {
  display:none; flex:1; min-height:0; width:100%;
}
[data-dsh-ws-studio-host][data-ws-top-page="\u753B\u5ECA"] [data-ws-page="gallery"] {
  display:flex;
}
[data-dsh-ws-studio-host][data-ws-top-page="\u753B\u5ECA"] [data-ws-page="image"],
[data-dsh-ws-studio-host][data-ws-top-page="\u753B\u5ECA"] [data-ws-page="video"],
[data-dsh-ws-studio-host][data-ws-top-page="\u753B\u5ECA"] [data-ws-page="ecom"],
[data-dsh-ws-studio-host][data-ws-top-page="\u753B\u5ECA"] [data-ws-page="canvas"] {
  display:none !important;
}
[data-dsh-ws-studio-host] [data-ws-gallery-cols] {
  display:flex; flex:1; min-height:0; width:100%;
}
[data-dsh-ws-studio-host] [data-ws-gallery-rail] {
  width:220px; flex-shrink:0; border-right:1px solid var(--dsw-alias-border-l2);
  padding:10px 12px; overflow:auto; background: var(--dsw-specific-sidebar-fill);
  display:flex; flex-direction:column; gap:10px;
}
[data-dsh-ws-studio-host] [data-ws-gallery-main] {
  flex:1; min-width:0; display:flex; flex-direction:column; gap:8px;
  padding:10px 12px; background: var(--dsw-alias-bg-base); overflow:hidden;
}
[data-dsh-ws-studio-host] [data-ws-gallery-toolbar] {
  display:flex; flex-wrap:wrap; align-items:center; gap:8px; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-gallery-grid] {
  flex:1; min-height:0; overflow:auto;
  display:grid; gap:10px; align-content:start;
}
[data-dsh-ws-studio-host] [data-ws-gallery-grid][data-view="grid"] {
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
}
[data-dsh-ws-studio-host] [data-ws-gallery-grid][data-view="waterfall"] {
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
}
[data-dsh-ws-studio-host] [data-ws-gallery-card] {
  border:1px solid var(--dsw-alias-border-l2); border-radius:10px; overflow:hidden;
  background: var(--dsw-alias-bg-module-platform); cursor:pointer;
  display:flex; flex-direction:column; min-width:0;
}
[data-dsh-ws-studio-host] [data-ws-gallery-card][data-selected] {
  outline:2px solid var(--dsw-alias-state-business-primary); outline-offset:1px;
}
[data-dsh-ws-studio-host] [data-ws-gallery-card] img,
[data-dsh-ws-studio-host] [data-ws-gallery-card] video {
  width:100%; aspect-ratio:1; object-fit:cover; display:block; background: var(--dsw-alias-bg-layer-1);
}
[data-dsh-ws-studio-host] [data-ws-gallery-card] [data-ws-gallery-card-meta] {
  padding:6px 8px; font-size:11px; color: var(--dsw-alias-label-secondary);
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}
[data-dsh-ws-studio-host] [data-ws-gallery-empty] {
  grid-column:1 / -1; padding:28px 16px; text-align:center;
  color: var(--dsw-alias-label-tertiary); font-size:13px; line-height:1.55;
  border:1px dashed var(--dsw-alias-border-l3); border-radius:12px;
  background: var(--dsw-alias-bg-module-platform);
}
[data-dsh-ws-studio-host] [data-ws-gallery-lightbox] {
  display:none; position:absolute; inset:0; z-index:50;
  background: var(--dsw-alias-bg-mask-3, rgba(0,0,0,.55));
  align-items:center; justify-content:center; padding:24px;
}
[data-dsh-ws-studio-host] [data-ws-gallery-lightbox][data-open] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-gallery-lightbox-panel] {
  max-width:min(880px, 96vw); max-height:92vh; width:100%;
  background: var(--dsw-alias-bg-base); border:1px solid var(--dsw-alias-border-l2);
  border-radius:12px; overflow:auto; display:flex; flex-direction:column; gap:10px; padding:12px;
}
[data-dsh-ws-studio-host] [data-ws-gallery-lightbox-media] {
  width:100%; max-height:70vh; object-fit:contain; border-radius:8px;
  background: var(--dsw-alias-bg-layer-1);
}
[data-dsh-ws-studio-host] [data-ws-gallery-count] {
  font-size:11px; color: var(--dsw-alias-label-tertiary);
}
`;
}
function buildGalleryPageHtml(T2, css2, state) {
  const modeOpts = [FILTER_ALL, ...MODE_TABS, ...VIDEO_MODE_TABS];
  const ratioOpts = [FILTER_ALL, ...RATIOS];
  const viewWaterfallOn = state.view === "waterfall";
  const viewGridOn = state.view === "grid";
  const sortNewestOn = state.sort === "newest";
  const sortOldestOn = state.sort === "oldest";
  const filterSelect = (key, label, opts, selected) => `<label style="display:flex;flex-direction:column;gap:4px;font-size:11px;color:${T2.fg2};">
      <span>${escapeHtml5(label)}</span>
      <select data-ws-gallery-filter="${key}" aria-label="${escapeHtml5(label)}" style="${css2.select}">
        ${opts.map(
    (o) => `<option value="${escapeHtml5(String(o))}" ${String(o) === String(selected) ? "selected" : ""}>${escapeHtml5(String(o))}</option>`
  ).join("")}
      </select>
    </label>`;
  return `
<div data-ws-page="gallery" data-ws-gallery-cols role="region" aria-label="${GALLERY_PAGE}" style="position:relative;">
  <aside data-ws-gallery-rail>
    <div style="font-size:13px;font-weight:600;color:${T2.fg};">${GALLERY_PAGE}</div>
    ${filterSelect("mode", GALLERY_FILTERS.mode, modeOpts, state.filters.mode)}
    ${filterSelect("model", GALLERY_FILTERS.model, [FILTER_ALL], state.filters.model)}
    ${filterSelect("ratio", GALLERY_FILTERS.ratio, ratioOpts, state.filters.ratio)}
    <div style="display:flex;flex-direction:column;gap:6px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;">
        <span style="font-size:11px;font-weight:600;color:${T2.fg2};">${GALLERY_FILTERS.tag}</span>
        <button type="button" data-ws-gallery-tag-action="create" style="${css2.pill({ size: "11px" })}">${GALLERY_TAG_ACTIONS.create}</button>
      </div>
      <div data-ws-gallery-tag-list style="display:flex;flex-wrap:wrap;gap:4px;min-height:20px;">
        <span data-ws-gallery-tag-empty style="font-size:11px;color:${T2.fg3};">\u6682\u65E0\u6807\u7B7E</span>
      </div>
    </div>
    <div data-ws-gallery-count aria-live="polite">\u5171 0 \u9879</div>
  </aside>

  <section data-ws-gallery-main>
    <div data-ws-gallery-toolbar>
      <div role="group" aria-label="\u89C6\u56FE" style="display:flex;gap:4px;">
        <button type="button" data-ws-gallery-view="waterfall" aria-pressed="${viewWaterfallOn}" style="${css2.chip(viewWaterfallOn)}">${GALLERY_VIEWS.waterfall}</button>
        <button type="button" data-ws-gallery-view="grid" aria-pressed="${viewGridOn}" style="${css2.chip(viewGridOn)}">${GALLERY_VIEWS.grid}</button>
      </div>
      <div role="group" aria-label="\u6392\u5E8F" style="display:flex;gap:4px;">
        <button type="button" data-ws-gallery-sort="newest" aria-pressed="${sortNewestOn}" style="${css2.chip(sortNewestOn)}">${GALLERY_SORT.newest}</button>
        <button type="button" data-ws-gallery-sort="oldest" aria-pressed="${sortOldestOn}" style="${css2.chip(sortOldestOn)}">${GALLERY_SORT.oldest}</button>
      </div>
      <span style="flex:1"></span>
      <button type="button" data-ws-gallery-batch="tag" style="${css2.pill()}">${GALLERY_TAG_ACTIONS.batchTag}</button>
      <button type="button" data-ws-gallery-batch="download" style="${css2.pill()}">${GALLERY_TAG_ACTIONS.batchDownload}</button>
    </div>
    <div data-ws-gallery-grid data-view="${escapeHtml5(state.view)}" role="list"></div>
    <p data-ws-gallery-status style="opacity:.65;font-size:11.5px;min-height:0;margin:0;"></p>
  </section>

  <div data-ws-gallery-lightbox aria-hidden="true">
    <div data-ws-gallery-lightbox-panel role="dialog" aria-label="\u9884\u89C8">
      <div style="display:flex;justify-content:flex-end;">
        <button type="button" data-ws-gallery-lightbox-close style="${css2.pill()}">\u5173\u95ED</button>
      </div>
      <div data-ws-gallery-lightbox-body></div>
      <div data-ws-gallery-lightbox-actions style="display:flex;flex-wrap:wrap;gap:6px;">
        ${GALLERY_ACTIONS.filter((a) => a !== "\u52A0\u753B\u5ECA").map((a) => `<button type="button" data-ws-gallery-action="${a}" style="${css2.pill()}">${a}</button>`).join("")}
      </div>
    </div>
  </div>
</div>
`;
}
function mountGalleryPage(host, opts) {
  const { T: T2, css: css2, getRpc } = opts;
  const state = defaultGalleryState();
  const imageCols = host.querySelector("[data-ws-cols]");
  if (imageCols instanceof HTMLElement && !imageCols.hasAttribute("data-ws-page")) {
    imageCols.setAttribute("data-ws-page", "image");
  }
  let styleEl = host.querySelector("style[data-ws-gallery-styles]");
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.setAttribute("data-ws-gallery-styles", "");
    styleEl.textContent = galleryHostStyles();
    host.appendChild(styleEl);
  }
  host.querySelector('[data-ws-page="gallery"]')?.remove();
  const wrap = document.createElement("div");
  wrap.innerHTML = buildGalleryPageHtml(T2, css2, state).trim();
  const page = wrap.firstElementChild;
  if (!(page instanceof HTMLElement)) {
    return { state, setPage: () => {
    }, reload: () => {
    }, dispose: () => {
    } };
  }
  if (imageCols?.parentElement) imageCols.parentElement.appendChild(page);
  else host.appendChild(page);
  const setStatus = (text) => {
    const el = page.querySelector("[data-ws-gallery-status]");
    if (el) el.textContent = text || "";
  };
  const filteredItems = () => {
    let list = [...state.items];
    const { mode, model, ratio, tagIds } = state.filters;
    if (mode && mode !== FILTER_ALL) list = list.filter((it) => it.mode === mode);
    if (model && model !== FILTER_ALL) list = list.filter((it) => it.model === model);
    if (ratio && ratio !== FILTER_ALL) list = list.filter((it) => it.ratio === ratio);
    if (tagIds?.length) {
      list = list.filter((it) => (it.tagIds || []).some((id) => tagIds.includes(id)));
    }
    list.sort((a, b) => {
      const ta = Number(a.createdAt) || 0;
      const tb = Number(b.createdAt) || 0;
      return state.sort === "oldest" ? ta - tb : tb - ta;
    });
    return list;
  };
  const paintTags = () => {
    const list = page.querySelector("[data-ws-gallery-tag-list]");
    if (!(list instanceof HTMLElement)) return;
    if (!state.tags.length) {
      list.innerHTML = `<span data-ws-gallery-tag-empty style="font-size:11px;color:${T2.fg3};">\u6682\u65E0\u6807\u7B7E</span>`;
      return;
    }
    list.innerHTML = state.tags.map((tag) => {
      const on = state.filters.tagIds.includes(tag.id);
      return `<button type="button" data-ws-gallery-tag="${escapeHtml5(tag.id)}" aria-pressed="${on}" style="${css2.chip(on)}">${escapeHtml5(tag.name)}</button>`;
    }).join("");
  };
  const paintGrid = () => {
    const grid = page.querySelector("[data-ws-gallery-grid]");
    const countEl = page.querySelector("[data-ws-gallery-count]");
    if (!(grid instanceof HTMLElement)) return;
    grid.setAttribute("data-view", state.view);
    const items = filteredItems();
    if (countEl) countEl.textContent = `\u5171 ${items.length} \u9879`;
    if (!items.length) {
      const rawEmpty = !state.items.length;
      const seats = state.paths ? `\u672C\u5730\u5EA7\u4F4D\uFF1A${escapeHtml5(state.paths.gallery)} \xB7 ${escapeHtml5(state.paths.history)}` : "";
      grid.innerHTML = `<div data-ws-gallery-empty role="status">${rawEmpty ? `${EMPTY_HINT}${seats ? `<div style="margin-top:8px;font-size:11px;opacity:.85;">${seats}</div>` : ""}` : "\u5F53\u524D\u7B5B\u9009\u4E0B\u6CA1\u6709\u7D20\u6750\u3002\u8BD5\u8BD5\u6539\u6A21\u5F0F / \u6A21\u578B / \u6BD4\u4F8B / \u6807\u7B7E\u3002"}</div>`;
      return;
    }
    grid.innerHTML = items.map((it) => {
      const selected = state.selection.includes(it.id);
      const src = it.url || "";
      const isVideo = it.kind === "video" || /\.(mp4|webm|mov)(\?|$)/i.test(src || it.relativePath || "");
      let media;
      if (src) {
        media = isVideo ? `<video src="${escapeHtml5(src)}" muted playsinline preload="metadata"></video>` : `<img src="${escapeHtml5(src)}" alt="" loading="lazy" />`;
      } else {
        const label = escapeHtml5(it.name || it.relativePath || "\u672C\u5730\u6587\u4EF6");
        media = `<div style="aspect-ratio:1;display:flex;align-items:center;justify-content:center;padding:8px;font-size:11px;color:var(--dsw-alias-label-tertiary);text-align:center;background:var(--dsw-alias-bg-layer-1);">${label}</div>`;
      }
      const meta = escapeHtml5(it.name || it.mode || it.model || it.ratio || it.relativePath || "\u7D20\u6750");
      return `<article data-ws-gallery-card data-id="${escapeHtml5(it.id)}" role="listitem" ${selected ? "data-selected" : ""}>
          ${media}
          <div data-ws-gallery-card-meta>${meta}</div>
        </article>`;
    }).join("");
  };
  const paintViewSort = () => {
    page.querySelectorAll("[data-ws-gallery-view]").forEach((btn) => {
      const on = btn.getAttribute("data-ws-gallery-view") === state.view;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      if (btn instanceof HTMLElement) btn.style.cssText = css2.chip(on);
    });
    page.querySelectorAll("[data-ws-gallery-sort]").forEach((btn) => {
      const on = btn.getAttribute("data-ws-gallery-sort") === state.sort;
      btn.setAttribute("aria-pressed", on ? "true" : "false");
      if (btn instanceof HTMLElement) btn.style.cssText = css2.chip(on);
    });
  };
  const closeLightbox = () => {
    state.lightboxId = void 0;
    const box = page.querySelector("[data-ws-gallery-lightbox]");
    if (box instanceof HTMLElement) {
      box.removeAttribute("data-open");
      box.setAttribute("aria-hidden", "true");
    }
    const body = page.querySelector("[data-ws-gallery-lightbox-body]");
    if (body) body.innerHTML = "";
  };
  const openLightbox = (id) => {
    const item = state.items.find((it) => it.id === id);
    if (!item) return;
    state.lightboxId = id;
    const box = page.querySelector("[data-ws-gallery-lightbox]");
    const body = page.querySelector("[data-ws-gallery-lightbox-body]");
    if (!(box instanceof HTMLElement) || !(body instanceof HTMLElement)) return;
    const isVideo = item.kind === "video" || /\.(mp4|webm|mov)(\?|$)/i.test(item.url);
    body.innerHTML = isVideo ? `<video class="data-ws-gallery-lightbox-media" data-ws-gallery-lightbox-media controls src="${escapeHtml5(item.url)}" style="width:100%;max-height:70vh;border-radius:8px;background:${T2.layer1};"></video>` : `<img data-ws-gallery-lightbox-media class="data-ws-gallery-lightbox-media" src="${escapeHtml5(item.url)}" alt="" style="width:100%;max-height:70vh;object-fit:contain;border-radius:8px;background:${T2.layer1};" />`;
    box.setAttribute("data-open", "");
    box.setAttribute("aria-hidden", "false");
  };
  const reload = async () => {
    const { paths, diskItems } = await fetchStorageMedia({ getRpc });
    state.paths = paths;
    state.items = collectLocalMediaItems(diskItems);
    paintTags();
    paintGrid();
    paintViewSort();
    const seatHint = `${paths.gallery} \xB7 ${paths.history}`;
    if (!state.items.length) {
      setStatus(`\u672C\u5730\u5EA7\u4F4D ${seatHint}\uFF08\u6682\u65E0\u5A92\u4F53\uFF09`);
    } else {
      setStatus(`\u5DF2\u8BFB\u672C\u5730\u5A92\u4F53 \xB7 ${seatHint}`);
    }
  };
  page.querySelectorAll("[data-ws-gallery-filter]").forEach((sel) => {
    sel.addEventListener("change", (e) => {
      const el = (
        /** @type {HTMLSelectElement} */
        e.target
      );
      const key = el.getAttribute("data-ws-gallery-filter");
      if (key === "mode") state.filters.mode = el.value;
      else if (key === "model") state.filters.model = el.value;
      else if (key === "ratio") state.filters.ratio = el.value;
      paintGrid();
    });
  });
  page.querySelectorAll("[data-ws-gallery-view]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const v = btn.getAttribute("data-ws-gallery-view");
      state.view = v === "waterfall" ? "waterfall" : "grid";
      paintViewSort();
      paintGrid();
    });
  });
  page.querySelectorAll("[data-ws-gallery-sort]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const v = btn.getAttribute("data-ws-gallery-sort");
      state.sort = v === "oldest" ? "oldest" : "newest";
      paintViewSort();
      paintGrid();
    });
  });
  page.querySelector('[data-ws-gallery-tag-action="create"]')?.addEventListener("click", () => {
    setStatus("\u300C\u65B0\u5EFA\u300D\u6807\u7B7E\u672A\u63A5\u7EBF");
  });
  page.querySelector("[data-ws-gallery-tag-list]")?.addEventListener("click", (e) => {
    const btn = e.target instanceof Element ? e.target.closest("[data-ws-gallery-tag]") : null;
    if (!btn) return;
    const id = btn.getAttribute("data-ws-gallery-tag") || "";
    if (!id) return;
    if (state.filters.tagIds.includes(id)) {
      state.filters.tagIds = state.filters.tagIds.filter((x) => x !== id);
    } else {
      state.filters.tagIds = [...state.filters.tagIds, id];
    }
    paintTags();
    paintGrid();
  });
  page.querySelector("[data-ws-gallery-grid]")?.addEventListener("click", (e) => {
    const card = e.target instanceof Element ? e.target.closest("[data-ws-gallery-card]") : null;
    if (!card) return;
    const id = card.getAttribute("data-id") || "";
    if (!id) return;
    if (
      /** @type {MouseEvent} */
      e.metaKey || /** @type {MouseEvent} */
      e.ctrlKey
    ) {
      if (state.selection.includes(id)) {
        state.selection = state.selection.filter((x) => x !== id);
      } else {
        state.selection = [...state.selection, id];
      }
      paintGrid();
      return;
    }
    openLightbox(id);
  });
  page.querySelector("[data-ws-gallery-lightbox-close]")?.addEventListener("click", closeLightbox);
  page.querySelector("[data-ws-gallery-lightbox]")?.addEventListener("click", (e) => {
    if (e.target === e.currentTarget) closeLightbox();
  });
  page.querySelector("[data-ws-gallery-lightbox-actions]")?.addEventListener("click", (e) => {
    const btn = e.target instanceof Element ? e.target.closest("[data-ws-gallery-action]") : null;
    if (!btn) return;
    const action = btn.getAttribute("data-ws-gallery-action") || "";
    setStatus(`\u300C${action}\u300D\u672A\u63A5\u7EBF`);
  });
  page.querySelectorAll("[data-ws-gallery-batch]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const kind = btn.getAttribute("data-ws-gallery-batch");
      if (!state.selection.length) {
        setStatus("\u5148\u591A\u9009\u7D20\u6750\uFF08Ctrl/\u2318+\u70B9\u51FB\uFF09");
        return;
      }
      if (kind === "tag") setStatus("\u300C\u6253\u6807\u7B7E\u300D\u672A\u63A5\u7EBF");
      else if (kind === "download") setStatus("\u300C\u6279\u91CF\u4E0B\u8F7D\u300D\u672A\u63A5\u7EBF");
    });
  });
  const setPage = (tab) => {
    const name2 = String(tab || IMAGE_PAGE3);
    host.setAttribute("data-ws-top-page", name2);
    if (name2 === GALLERY_PAGE) reload();
  };
  reload();
  return {
    state,
    setPage,
    reload,
    setStatus,
    dispose() {
      closeLightbox();
      page.remove();
      styleEl?.remove();
    }
  };
}

// src/client/ecom-host.js
var ECOM_PAGE = "\u7535\u5546\u6A21\u5F0F";
var IMAGE_PAGE4 = "\u666E\u901A\u751F\u56FE";
var CHANNEL_STUB = "\u901A\u9053\u672A\u63A5";
var UPLOAD_HINT = "\u4E0A\u4F20 / \u62D6\u62FD / \u7C98\u8D34";
var EMPTY_HINT2 = "\u5148\u4E0A\u4F20\u5546\u54C1\u4E3B\u56FE\uFF08\u4E3B\u4F53 / \u5305\u88C5 / \u7EC6\u8282\uFF0C\u6700\u591A 4 \u5F20\uFF09\uFF0C\u53EF\u9009\u518D\u52A0\u4E00\u5F20\u98CE\u683C\u53C2\u8003\u56FE\u3002";
var LOCALES = Object.freeze(["\u4E2D\u6587", "English", "\u65E5\u672C\u8A9E", "\uD55C\uAD6D\uC5B4", "\u81EA\u5B9A\u4E49"]);
var PURPOSE_IDS = Object.freeze([
  "hero",
  "selling",
  "scene",
  "detail",
  "spec",
  "usage"
]);
function escapeHtml6(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function defaultEcomState() {
  return {
    productImages: (
      /** @type {ImageRef[]} */
      []
    ),
    styleRef: (
      /** @type {ImageRef | null} */
      null
    ),
    name: "",
    paramsText: "",
    locale: LOCALES[0],
    purposes: PURPOSE_IDS.map((id, i) => ({
      id,
      label: ECOM_PURPOSES[i],
      enabled: i === 0 || i === 1,
      count: i === 0 ? 1 : 2,
      refImageId: void 0
    })),
    plan: null,
    confirmed: false,
    taskBatch: null,
    results: [],
    historyGroupId: void 0
  };
}
function ecomHostStyles() {
  return `
[data-dsh-ws-studio-host] [data-ws-page="ecom"] {
  display:none; flex:1; min-height:0; width:100%;
}
[data-dsh-ws-studio-host][data-ws-top-page="\u7535\u5546\u6A21\u5F0F"] [data-ws-page="ecom"] {
  display:flex;
}
[data-dsh-ws-studio-host][data-ws-top-page="\u7535\u5546\u6A21\u5F0F"] [data-ws-page="image"],
[data-dsh-ws-studio-host][data-ws-top-page="\u7535\u5546\u6A21\u5F0F"] [data-ws-page="video"],
[data-dsh-ws-studio-host][data-ws-top-page="\u7535\u5546\u6A21\u5F0F"] [data-ws-page="gallery"],
[data-dsh-ws-studio-host][data-ws-top-page="\u7535\u5546\u6A21\u5F0F"] [data-ws-page="canvas"] {
  display:none !important;
}
[data-dsh-ws-studio-host] [data-ws-ecom-cols] {
  display:flex; flex:1; min-height:0; width:100%;
}
[data-dsh-ws-studio-host] [data-ws-ecom-config] {
  width:min(420px, 42%); flex-shrink:0; border-right:1px solid var(--dsw-alias-border-l2);
  padding:10px 12px; overflow:auto; background: var(--dsw-alias-bg-base);
  display:flex; flex-direction:column; gap:10px;
}
[data-dsh-ws-studio-host] [data-ws-ecom-preview] {
  flex:1; min-width:0; display:flex; flex-direction:column; gap:8px;
  padding:10px 12px; background: var(--dsw-alias-bg-module-platform); overflow:auto;
}
[data-dsh-ws-studio-host] [data-ws-ecom-upload-grid] {
  display:grid; grid-template-columns:1fr 1fr; gap:8px;
}
[data-dsh-ws-studio-host] [data-ws-ecom-slot] {
  display:flex; flex-direction:column; gap:6px; padding:8px 10px;
  background: var(--dsw-alias-bg-module-platform);
  border:1px dashed var(--dsw-alias-border-l3); border-radius:10px;
}
[data-dsh-ws-studio-host] [data-ws-ecom-drop] {
  min-height:72px; border-radius:8px; border:1px dashed var(--dsw-alias-border-l3);
  background: var(--dsw-specific-input-major);
  display:flex; align-items:center; justify-content:center; gap:8px; flex-wrap:wrap;
  padding:8px; color: var(--dsw-alias-label-secondary); font-size:12px; cursor:pointer;
}
[data-dsh-ws-studio-host] [data-ws-ecom-drop][data-dragover] {
  border-color: var(--dsw-alias-state-business-primary); color: var(--dsw-alias-label-primary);
}
[data-dsh-ws-studio-host] [data-ws-ecom-thumb] {
  display:none; position:relative; width:100%; aspect-ratio:1; max-height:120px;
  border-radius:8px; overflow:hidden; border:1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-layer-1);
}
[data-dsh-ws-studio-host] [data-ws-ecom-thumb][data-filled] { display:block; }
[data-dsh-ws-studio-host] [data-ws-ecom-thumb] img {
  width:100%; height:100%; object-fit:cover; display:block;
}
[data-dsh-ws-studio-host] [data-ws-ecom-thumb] button {
  position:absolute; top:4px; right:4px; width:20px; height:20px; border:0; border-radius:999px;
  background: var(--dsw-alias-bg-mask-3); color: var(--dsw-alias-label-primary-foreground);
  cursor:pointer; font-size:12px; line-height:1; padding:0;
}
[data-dsh-ws-studio-host] [data-ws-ecom-purpose-row] {
  display:flex; align-items:center; gap:8px; flex-wrap:wrap;
  padding:6px 8px; border:1px solid var(--dsw-alias-border-l2); border-radius:8px;
  background: var(--dsw-alias-bg-module-platform);
}
[data-dsh-ws-studio-host] [data-ws-ecom-cta]:hover {
  background: var(--dsw-alias-button-primary-hover);
}
[data-dsh-ws-studio-host] [data-ws-ecom-cta]:active { filter:brightness(.96); }
[data-dsh-ws-studio-host] [data-ws-ecom-cta]:focus-visible {
  outline:2px solid var(--dsw-alias-state-business-primary); outline-offset:2px;
}
[data-dsh-ws-studio-host] [data-ws-ecom-fail] {
  display:none; padding:10px 12px; border-radius:10px;
  border:1px solid var(--dsw-alias-state-error-primary);
  background: var(--dsw-alias-bg-base); color: var(--dsw-alias-label-primary);
  font-size:13px; line-height:1.5;
}
[data-dsh-ws-studio-host] [data-ws-ecom-fail][data-visible] { display:block; }
[data-dsh-ws-studio-host] [data-ws-ecom-plan] {
  display:none; padding:10px 12px; border-radius:10px;
  border:1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-base); font-size:12.5px; line-height:1.5;
}
[data-dsh-ws-studio-host] [data-ws-ecom-plan][data-visible] { display:block; }
[data-dsh-ws-studio-host] [data-ws-ecom-result-layout] {
  display:none; flex:1; min-height:0; gap:12px;
}
[data-dsh-ws-studio-host] [data-ws-ecom-result-layout][data-visible] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-ecom-empty] {
  padding:24px 16px; text-align:center; color: var(--dsw-alias-label-tertiary);
  font-size:13px; line-height:1.55; border:1px dashed var(--dsw-alias-border-l3);
  border-radius:12px; background: var(--dsw-alias-bg-base);
}
`;
}
function buildEcomPageHtml(T2, css2, state) {
  const slots = [
    { key: "subject", label: ECOM_UPLOAD.subject },
    { key: "packaging", label: ECOM_UPLOAD.packaging },
    { key: "detail", label: ECOM_UPLOAD.detail },
    { key: "extra", label: "\u5546\u54C1\u56FE 4" }
  ];
  const slotHtml = slots.map(
    (s) => `
      <div data-ws-ecom-slot data-slot="${s.key}">
        <div style="font-size:11px;font-weight:600;color:${T2.fg2};">${escapeHtml6(s.label)}</div>
        <div data-ws-ecom-thumb data-slot="${s.key}">
          <img alt="" />
          <button type="button" data-ws-ecom-clear="${s.key}" aria-label="\u79FB\u9664">\xD7</button>
        </div>
        <div data-ws-ecom-drop="${s.key}" data-slot="${s.key}">
          <span>${UPLOAD_HINT}</span>
          <button type="button" data-ws-ecom-upload="${s.key}" style="${css2.pill({ size: "11px", fill: T2.module })}">\u4E0A\u4F20</button>
        </div>
        <input type="file" accept="image/*" data-ws-ecom-file="${s.key}" hidden />
      </div>`
  ).join("");
  const purposeHtml = state.purposes.map(
    (p) => `
      <div data-ws-ecom-purpose-row data-purpose="${p.id}">
        <label style="display:flex;align-items:center;gap:6px;font-size:12px;color:${T2.fg};">
          <input type="checkbox" data-ws-ecom-purpose-enabled="${p.id}" ${p.enabled ? "checked" : ""} />
          ${escapeHtml6(p.label)}
        </label>
        <label style="display:flex;align-items:center;gap:4px;font-size:11px;color:${T2.fg2};">
          \u5F20\u6570
          <input type="number" min="1" max="8" data-ws-ecom-purpose-count="${p.id}" value="${p.count}" style="width:48px;${css2.field};font-size:12px;" />
        </label>
      </div>`
  ).join("");
  const localeOpts = LOCALES.map(
    (l) => `<option value="${escapeHtml6(l)}" ${l === state.locale ? "selected" : ""}>${escapeHtml6(l)}</option>`
  ).join("");
  return `
<div data-ws-page="ecom" data-ws-ecom-cols role="region" aria-label="${ECOM_PAGE}">
  <aside data-ws-ecom-config>
    <div style="font-size:13px;font-weight:600;color:${T2.fg};">${ECOM_PAGE}</div>

    <div style="${css2.dockBlock}">
      <div style="font-size:12px;font-weight:600;color:${T2.fg};">${ECOM_UPLOAD.product}</div>
      <div data-ws-ecom-upload-grid>${slotHtml}</div>
    </div>

    <div style="${css2.dockBlock}">
      <div style="font-size:12px;font-weight:600;color:${T2.fg};">${ECOM_UPLOAD.styleRef}</div>
      <div data-ws-ecom-slot data-slot="style">
        <div data-ws-ecom-thumb data-slot="style">
          <img alt="" />
          <button type="button" data-ws-ecom-clear="style" aria-label="\u79FB\u9664">\xD7</button>
        </div>
        <div data-ws-ecom-drop="style" data-slot="style">
          <span>${UPLOAD_HINT}</span>
          <button type="button" data-ws-ecom-upload="style" style="${css2.pill({ size: "11px", fill: T2.module })}">\u4E0A\u4F20</button>
        </div>
        <input type="file" accept="image/*" data-ws-ecom-file="style" hidden />
      </div>
    </div>

    <div style="${css2.dockBlock}">
      <label style="display:flex;flex-direction:column;gap:4px;font-size:11px;color:${T2.fg2};">
        <span>${ECOM_FORM.name}</span>
        <input type="text" data-ws-ecom-name placeholder="\u5546\u54C1\u540D\u79F0" style="${css2.field}" />
      </label>
      <label style="display:flex;flex-direction:column;gap:4px;font-size:11px;color:${T2.fg2};margin-top:6px;">
        <span style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
          ${ECOM_FORM.params}
          <button type="button" data-ws-ecom-ai-write style="${css2.pill({ size: "11px" })}">${ECOM_FORM.aiWrite}</button>
        </span>
        <textarea data-ws-ecom-params rows="3" placeholder="\u89C4\u683C / \u5356\u70B9 / \u6750\u8D28\u7B49" style="resize:vertical;min-height:64px;${css2.field};font-size:12.5px;"></textarea>
      </label>
      <label style="display:flex;flex-direction:column;gap:4px;font-size:11px;color:${T2.fg2};margin-top:6px;">
        <span>${ECOM_FORM.locale}</span>
        <select data-ws-ecom-locale aria-label="${ECOM_FORM.locale}" style="${css2.select}">${localeOpts}</select>
      </label>
    </div>

    <div style="${css2.dockBlock}">
      <div style="font-size:12px;font-weight:600;color:${T2.fg};">\u7528\u9014</div>
      <div data-ws-ecom-purposes style="display:flex;flex-direction:column;gap:6px;">${purposeHtml}</div>
    </div>

    <div data-ws-ecom-cta-footer style="display:flex;flex-direction:column;gap:6px;position:sticky;bottom:0;padding-top:6px;background:${T2.bg};border-top:1px solid ${T2.border2};">
      <button type="button" data-ws-ecom-plan-btn style="${css2.pill({ size: "12px" })}">${ECOM_FLOW.planPreview}</button>
      <button type="button" data-ws-ecom-cta style="${css2.cta}">${ECOM_FLOW.confirmBatch}</button>
      <button type="button" data-ws-ecom-export style="${css2.pill()}">${ECOM_FLOW.exportList}</button>
      <p data-ws-ecom-status style="opacity:.65;font-size:11.5px;min-height:0;margin:0;"></p>
    </div>
  </aside>

  <section data-ws-ecom-preview>
    <div style="font-size:13px;font-weight:600;color:${T2.fg};">\u5957\u56FE\u9884\u89C8 / \u7ED3\u679C</div>
    <div data-ws-ecom-empty role="status">${EMPTY_HINT2}</div>
    <div data-ws-ecom-plan>
      <div style="font-weight:600;margin-bottom:6px;">${ECOM_FLOW.planPreview}</div>
      <div data-ws-ecom-plan-body></div>
      <div style="margin-top:8px;font-size:12px;color:${T2.fg2};">\u786E\u8BA4\u540E\u518D\u6279\u91CF\u751F\u6210\uFF1B\u5F53\u524D\u4E0D\u4F1A\u70E7\u989D\u5EA6\u3002</div>
    </div>
    <div data-ws-ecom-fail>
      <div style="font-weight:600;margin-bottom:4px;">\u672A\u80FD\u751F\u6210</div>
      <div data-ws-ecom-fail-reason>\u539F\u56E0\uFF1A${CHANNEL_STUB}</div>
    </div>
    <div data-ws-ecom-result-layout>
      <div data-ws-ecom-hero style="flex:1.2;min-width:0;"></div>
      <div data-ws-ecom-rest style="flex:1;min-width:0;display:flex;flex-direction:column;gap:8px;"></div>
    </div>
    <div data-ws-ecom-result-actions style="display:none;flex-wrap:wrap;gap:6px;">
      ${ECOM_RESULT_ACTIONS.map(
    (a) => `<button type="button" data-ws-ecom-result-action="${a}" style="${css2.pill()}">${a}</button>`
  ).join("")}
    </div>
  </section>
</div>
`;
}
function mountEcomPage(host, opts) {
  const { T: T2, css: css2 } = opts;
  const state = defaultEcomState();
  const imageCols = host.querySelector("[data-ws-cols]");
  if (imageCols instanceof HTMLElement && !imageCols.hasAttribute("data-ws-page")) {
    imageCols.setAttribute("data-ws-page", "image");
  }
  let styleEl = host.querySelector("style[data-ws-ecom-styles]");
  if (!styleEl) {
    styleEl = document.createElement("style");
    styleEl.setAttribute("data-ws-ecom-styles", "");
    styleEl.textContent = ecomHostStyles();
    host.appendChild(styleEl);
  }
  host.querySelector('[data-ws-page="ecom"]')?.remove();
  const wrap = document.createElement("div");
  wrap.innerHTML = buildEcomPageHtml(T2, css2, state).trim();
  const page = wrap.firstElementChild;
  if (!(page instanceof HTMLElement)) {
    return { state, setPage: () => {
    }, showStubFailure: () => {
    }, dispose: () => {
    } };
  }
  if (imageCols?.parentElement) imageCols.parentElement.appendChild(page);
  else host.appendChild(page);
  const setStatus = (text) => {
    const el = page.querySelector("[data-ws-ecom-status]");
    if (el) el.textContent = text || "";
  };
  const plannedTotal = () => state.purposes.filter((p) => p.enabled).reduce((n, p) => n + (Number(p.count) || 0), 0);
  const paintSlot = (slot) => {
    const thumb = page.querySelector(`[data-ws-ecom-thumb][data-slot="${slot}"]`);
    const drop = page.querySelector(`[data-ws-ecom-drop="${slot}"]`);
    if (!(thumb instanceof HTMLElement)) return;
    const img = thumb.querySelector("img");
    let ref = null;
    if (slot === "style") ref = state.styleRef;
    else ref = state.productImages.find((x) => x.slot === slot) || null;
    if (ref?.url && img instanceof HTMLImageElement) {
      img.src = ref.url;
      thumb.setAttribute("data-filled", "");
      if (drop instanceof HTMLElement) drop.style.display = "none";
    } else {
      thumb.removeAttribute("data-filled");
      if (img instanceof HTMLImageElement) img.removeAttribute("src");
      if (drop instanceof HTMLElement) drop.style.display = "";
    }
    const empty = page.querySelector("[data-ws-ecom-empty]");
    if (empty instanceof HTMLElement) {
      empty.style.display = state.productImages.length ? "none" : "";
    }
  };
  const revokeIfBlob = (url) => {
    if (url?.startsWith("blob:")) {
      try {
        URL.revokeObjectURL(url);
      } catch (_) {
      }
    }
  };
  const setImageFromFile = (slot, file) => {
    if (!(file instanceof File) || !file.type.startsWith("image/")) return;
    const url = URL.createObjectURL(file);
    if (slot === "style") {
      revokeIfBlob(state.styleRef?.url);
      state.styleRef = { id: `style-${Date.now()}`, url, name: file.name, slot: "style" };
      paintSlot("style");
      setStatus(`\u5DF2\u6DFB\u52A0${ECOM_UPLOAD.styleRef}`);
      return;
    }
    const existing = state.productImages.find((x) => x.slot === slot);
    if (existing) {
      revokeIfBlob(existing.url);
      existing.url = url;
      existing.name = file.name;
    } else {
      if (state.productImages.length >= 4) {
        revokeIfBlob(url);
        setStatus("\u5546\u54C1\u4E3B\u56FE\u6700\u591A 4 \u5F20");
        return;
      }
      state.productImages.push({
        id: `${slot}-${Date.now()}`,
        url,
        name: file.name,
        slot
      });
    }
    paintSlot(slot);
    setStatus(`\u5DF2\u6DFB\u52A0${ECOM_UPLOAD.product}`);
  };
  const clearSlot = (slot) => {
    if (slot === "style") {
      revokeIfBlob(state.styleRef?.url);
      state.styleRef = null;
      paintSlot("style");
      setStatus("\u5DF2\u79FB\u9664\u98CE\u683C\u53C2\u8003\u56FE");
      return;
    }
    const idx = state.productImages.findIndex((x) => x.slot === slot);
    if (idx >= 0) {
      revokeIfBlob(state.productImages[idx].url);
      state.productImages.splice(idx, 1);
    }
    paintSlot(slot);
    setStatus("\u5DF2\u79FB\u9664\u5546\u54C1\u56FE");
  };
  ["subject", "packaging", "detail", "extra", "style"].forEach((slot) => {
    const fileInput = page.querySelector(`[data-ws-ecom-file="${slot}"]`);
    const uploadBtn = page.querySelector(`[data-ws-ecom-upload="${slot}"]`);
    const drop = page.querySelector(`[data-ws-ecom-drop="${slot}"]`);
    uploadBtn?.addEventListener("click", () => {
      if (fileInput instanceof HTMLInputElement) fileInput.click();
    });
    fileInput?.addEventListener("change", (e) => {
      const input = (
        /** @type {HTMLInputElement} */
        e.target
      );
      const f = input.files?.[0];
      if (f) setImageFromFile(slot, f);
      input.value = "";
    });
    drop?.addEventListener("click", (e) => {
      if (e.target instanceof Element && e.target.closest("[data-ws-ecom-upload]")) return;
      if (fileInput instanceof HTMLInputElement) fileInput.click();
    });
    ["dragenter", "dragover"].forEach((evName) => {
      drop?.addEventListener(evName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (drop instanceof HTMLElement) drop.setAttribute("data-dragover", "");
      });
    });
    ["dragleave", "drop"].forEach((evName) => {
      drop?.addEventListener(evName, (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (drop instanceof HTMLElement) drop.removeAttribute("data-dragover");
      });
    });
    drop?.addEventListener("drop", (e) => {
      const f = (
        /** @type {DragEvent} */
        e.dataTransfer?.files?.[0]
      );
      if (f) setImageFromFile(slot, f);
    });
    page.querySelector(`[data-ws-ecom-clear="${slot}"]`)?.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      clearSlot(slot);
    });
  });
  page.addEventListener("paste", (e) => {
    const items = Array.from(e.clipboardData?.items || []);
    for (const it of items) {
      if (it.type.startsWith("image/")) {
        const f = it.getAsFile();
        if (f) {
          const used = new Set(state.productImages.map((x) => x.slot));
          const next = ["subject", "packaging", "detail", "extra"].find((s) => !used.has(s)) || "subject";
          setImageFromFile(next, f);
          e.preventDefault();
          break;
        }
      }
    }
  });
  page.querySelector("[data-ws-ecom-name]")?.addEventListener("input", (e) => {
    state.name = /** @type {HTMLInputElement} */
    e.target.value;
  });
  page.querySelector("[data-ws-ecom-params]")?.addEventListener("input", (e) => {
    state.paramsText = /** @type {HTMLTextAreaElement} */
    e.target.value;
  });
  page.querySelector("[data-ws-ecom-locale]")?.addEventListener("change", (e) => {
    state.locale = /** @type {HTMLSelectElement} */
    e.target.value;
  });
  page.querySelector("[data-ws-ecom-ai-write]")?.addEventListener("click", () => {
    setStatus("\u300CAI \u5E2E\u5199\u300D\u672A\u63A5\u7EBF");
  });
  page.querySelectorAll("[data-ws-ecom-purpose-enabled]").forEach((el) => {
    el.addEventListener("change", (e) => {
      const id = el.getAttribute("data-ws-ecom-purpose-enabled");
      const p = state.purposes.find((x) => x.id === id);
      if (p) p.enabled = /** @type {HTMLInputElement} */
      e.target.checked;
      state.plan = null;
      const planEl = page.querySelector("[data-ws-ecom-plan]");
      if (planEl) planEl.removeAttribute("data-visible");
    });
  });
  page.querySelectorAll("[data-ws-ecom-purpose-count]").forEach((el) => {
    el.addEventListener("change", (e) => {
      const id = el.getAttribute("data-ws-ecom-purpose-count");
      const p = state.purposes.find((x) => x.id === id);
      if (p) {
        const n = Math.max(1, Math.min(8, Number(
          /** @type {HTMLInputElement} */
          e.target.value
        ) || 1));
        p.count = n(e.target).value = String(n);
      }
      state.plan = null;
      const planEl = page.querySelector("[data-ws-ecom-plan]");
      if (planEl) planEl.removeAttribute("data-visible");
    });
  });
  const showPlan = () => {
    const n = plannedTotal();
    const lines = state.purposes.filter((p) => p.enabled).map((p) => `\xB7 ${p.label} \xD7 ${p.count}`);
    const body = page.querySelector("[data-ws-ecom-plan-body]");
    const planEl = page.querySelector("[data-ws-ecom-plan]");
    const fail = page.querySelector("[data-ws-ecom-fail]");
    if (body) {
      body.innerHTML = [
        `\u5546\u54C1\uFF1A${escapeHtml6(state.name || "\uFF08\u672A\u586B\u540D\u79F0\uFF09")}`,
        `\u8BED\u8A00\uFF1A${escapeHtml6(state.locale)}`,
        `\u4E3B\u56FE\uFF1A${state.productImages.length} \u5F20` + (state.styleRef ? " \xB7 \u542B\u98CE\u683C\u53C2\u8003" : ""),
        ...lines,
        `\u9884\u8BA1\u5F20\u6570\uFF1A${n}`
      ].join("<br/>");
    }
    state.plan = { total: n, purposes: state.purposes.filter((p) => p.enabled).map((p) => ({ ...p })) };
    if (planEl) planEl.setAttribute("data-visible", "");
    if (fail) fail.removeAttribute("data-visible");
    setStatus(`\u5957\u56FE\u9884\u89C8 \xB7 \u9884\u8BA1 ${n} \u5F20\uFF08\u672A\u751F\u6210\uFF09`);
  };
  page.querySelector("[data-ws-ecom-plan-btn]")?.addEventListener("click", () => {
    if (!state.productImages.length) {
      setStatus("\u8BF7\u5148\u4E0A\u4F20\u5546\u54C1\u4E3B\u56FE");
      return;
    }
    if (!plannedTotal()) {
      setStatus("\u8BF7\u81F3\u5C11\u52FE\u9009\u4E00\u79CD\u7528\u9014");
      return;
    }
    showPlan();
  });
  const showStubFailure = (message) => {
    const msg = message || CHANNEL_STUB;
    const fail = page.querySelector("[data-ws-ecom-fail]");
    const reason = page.querySelector("[data-ws-ecom-fail-reason]");
    const planEl = page.querySelector("[data-ws-ecom-plan]");
    const results = page.querySelector("[data-ws-ecom-result-layout]");
    const actions = page.querySelector("[data-ws-ecom-result-actions]");
    if (planEl) planEl.removeAttribute("data-visible");
    if (results) results.removeAttribute("data-visible");
    if (actions instanceof HTMLElement) actions.style.display = "none";
    if (reason) reason.textContent = `\u539F\u56E0\uFF1A${msg}`;
    if (fail) fail.setAttribute("data-visible", "");
    state.confirmed = false;
    setStatus(msg);
  };
  const cta = page.querySelector("[data-ws-ecom-cta]");
  if (cta instanceof HTMLButtonElement) {
    cta.disabled = false;
    cta.removeAttribute("disabled");
  }
  cta?.addEventListener("click", () => {
    showStubFailure(CHANNEL_STUB);
    host.dispatchEvent(
      new CustomEvent("dsh-ws-ecom-generate", {
        bubbles: true,
        detail: {
          productImages: state.productImages,
          styleRef: state.styleRef,
          name: state.name,
          paramsText: state.paramsText,
          locale: state.locale,
          purposes: state.purposes,
          plan: state.plan,
          total: plannedTotal()
        }
      })
    );
  });
  page.querySelector("[data-ws-ecom-export]")?.addEventListener("click", () => {
    setStatus("\u300C\u5BFC\u51FA\u6E05\u5355\u300D\u672A\u63A5\u7EBF");
  });
  page.querySelector("[data-ws-ecom-result-actions]")?.addEventListener("click", (e) => {
    const btn = e.target instanceof Element ? e.target.closest("[data-ws-ecom-result-action]") : null;
    if (!btn) return;
    setStatus(`\u300C${btn.getAttribute("data-ws-ecom-result-action") || ""}\u300D\u672A\u63A5\u7EBF`);
  });
  const setPage = (tab) => {
    const name2 = String(tab || IMAGE_PAGE4);
    host.setAttribute("data-ws-top-page", name2);
  };
  ["subject", "packaging", "detail", "extra", "style"].forEach((s) => paintSlot(s));
  return {
    state,
    setPage,
    showStubFailure,
    setStatus,
    dispose() {
      state.productImages.forEach((img) => revokeIfBlob(img.url));
      revokeIfBlob(state.styleRef?.url);
      page.remove();
      styleEl?.remove();
    }
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
var HISTORY_KEY_BASE = "dsh-ws-history-v1";
var HISTORY_MAX = 40;
var UNWIRED_RESULT_ACTIONS = /* @__PURE__ */ new Set(["\u52A0\u5BF9\u8BDD", "\u62FF\u53BB\u505A\u89C6\u9891", "\u518D\u7F16\u8F91"]);
var STAGE_LABEL2 = "\u751F\u6210\u7ED3\u679C";
var STAGE_EMPTY_TITLE = "\u751F\u6210\u540E\u663E\u793A\u5728\u8FD9\u91CC";
var STAGE_EMPTY_HINT2 = "\u51FA\u56FE\u7ED3\u679C\u4F1A\u51FA\u73B0\u5728\u672C\u680F";
var HISTORY_EMPTY_HINT2 = "\u6682\u65E0\u8BB0\u5F55";
var DEFAULT_MODEL = "grok-imagine-image";
var T = Object.freeze({
  bg: "var(--dsw-alias-bg-base)",
  layer1: "var(--dsw-alias-bg-layer-1)",
  layer2: "var(--dsw-alias-bg-layer-2)",
  layer3: "var(--dsw-alias-bg-layer-3)",
  module: "var(--dsw-alias-bg-module-platform)",
  sidebar: "var(--dsw-specific-sidebar-fill)",
  input: "var(--dsw-specific-input-major)",
  fg: "var(--dsw-alias-label-primary)",
  fg2: "var(--dsw-alias-label-secondary)",
  fg3: "var(--dsw-alias-label-tertiary)",
  fgDim: "var(--dsw-alias-label-dimmed)",
  fgOnPrimary: "var(--dsw-alias-label-primary-foreground)",
  border1: "var(--dsw-alias-border-l1)",
  border2: "var(--dsw-alias-border-l2)",
  border3: "var(--dsw-alias-border-l3)",
  border4: "var(--dsw-alias-border-l4)",
  hover: "var(--dsw-alias-interactive-bg-hover)",
  active: "var(--dsw-alias-interactive-bg-active)",
  elevStroke: "var(--dsw-elevation-stroke)",
  elevPanel: "var(--dsw-elevation-panel)",
  cta: "var(--dsw-alias-button-primary-fill)",
  ctaHover: "var(--dsw-alias-button-primary-hover)",
  focus: "var(--dsw-alias-state-business-primary)",
  error: "var(--dsw-alias-state-error-primary)",
  brand: "var(--dsw-alias-brand-primary)",
  font: "var(--dsw-font, var(--dsw-font-family, inherit))",
  fontSize: "var(--dsh-content-font-size, 13px)"
});
var ACCENT = T.focus;
var PANE_WIDTHS_KEY = "dsh-ws-pane-widths";
var MODE_TXT2 = MODE_TABS[0];
var MODE_IMG2 = MODE_TABS[1];
var DEFAULT_PANE_WIDTHS = Object.freeze({ history: 264, studio: null, chat: 318 });
var css = {
  mode: (on) => `padding:4px 12px;border:1px solid ${on ? T.border4 : T.border2};border-radius:999px;background:${on ? T.active : "transparent"};color:${on ? T.fg : T.fg2};cursor:pointer;font:inherit;font-size:12px;`,
  field: `padding:5px 8px;border-radius:7px;border:1px solid ${T.border2};background:${T.input};color:inherit;font:inherit;`,
  select: `padding:4px 8px;border-radius:6px;border:1px solid ${T.border2};background:${T.input};color:${T.fg};font:inherit;font-size:12px;min-height:28px;`,
  chip: (on) => `padding:1px 6px;border:1px solid ${on ? T.border4 : T.border2};border-radius:999px;background:${on ? T.active : "transparent"};color:${on ? T.fg : T.fg2};cursor:pointer;font:inherit;font-size:11px;line-height:1.25;white-space:nowrap;`,
  histAction: `padding:2px 8px;border:1px solid ${T.border2};border-radius:6px;background:transparent;color:${T.fg2};cursor:pointer;font:inherit;font-size:11px;`,
  /** 出图台 dock 内区块 — 借鉴形态，自写组件 */
  dockBlock: `display:flex;flex-direction:column;gap:4px;padding:6px 8px;background:${T.module};border:1px solid ${T.border2};border-radius:8px;flex:none;`,
  paramLabel: `font-size:11px;font-weight:600;color:${T.fg2};white-space:nowrap;`,
  /** Host primary CTA — theme-aware */
  cta: `width:100%;min-height:40px;padding:9px 14px;border:0;border-radius:9px;background:${T.cta};color:${T.fgOnPrimary};cursor:pointer;font:inherit;font-weight:700;font-size:14px;letter-spacing:.02em;display:inline-flex;align-items:center;justify-content:center;box-shadow:${T.elevPanel};`,
  pill: (opts = {}) => `padding:${opts.pad || "2px 10px"};border:1px solid ${T.border2};border-radius:999px;background:${opts.fill || "transparent"};color:${opts.color || T.fg2};cursor:pointer;font:inherit;font-size:${opts.size || "11.5px"};`,
  topTab: (on) => `padding:2px 5px 3px;border:0;border-bottom:1px solid ${on ? T.fg2 : "transparent"};background:transparent;color:${on ? T.fg2 : T.fg3};cursor:pointer;border-radius:0;font:inherit;font-size:11px;font-weight:${on ? 500 : 400};line-height:1.25;`
};
var HOST_STYLES = `
[data-dsh-ws-studio-host] {
  background: var(--dsw-alias-bg-base);
  color: var(--dsw-alias-label-primary);
  border-color: var(--dsw-alias-border-l2);
  font-family: var(--dsw-font-family, inherit);
  font-size: var(--dsh-content-font-size, 13px);
  color-scheme: inherit;
}
[data-dsh-ws-studio-host] *,
[data-dsh-ws-studio-host] *::before,
[data-dsh-ws-studio-host] *::after { box-sizing: border-box; }
[data-dsh-ws-studio-host] [data-ws-history-item] {
  display:flex; gap:7px; align-items:flex-start;
  padding:4px; border:1px solid var(--dsw-alias-border-l2); border-radius:8px;
  background: var(--dsw-alias-bg-module-platform); flex:none; font:inherit; color:inherit; text-align:left;
  transition: border-color .12s ease, background .12s ease; cursor:pointer;
}
[data-dsh-ws-studio-host] [data-ws-history-item]:hover {
  border-color: var(--dsw-alias-border-l3);
  background: var(--dsw-alias-interactive-bg-hover);
}
[data-dsh-ws-studio-host] [data-ws-history-item][data-active] {
  border-color: var(--dsw-alias-state-business-primary);
}
[data-dsh-ws-studio-host] [data-ws-history-ghost] {
  display:flex; gap:8px; align-items:center;
  padding:5px; border:1px solid var(--dsw-alias-border-l2); border-radius:9px;
  background: var(--dsw-alias-bg-module-platform); opacity:.92; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-history-ghost] img,
[data-dsh-ws-studio-host] [data-ws-history-item] img {
  width:${HIST_THUMB}px; height:${HIST_THUMB}px; border-radius:7px; object-fit:cover; flex:none;
  background: var(--dsw-alias-bg-layer-1);
}
[data-dsh-ws-studio-host] [data-ws-history-item] .ws-hist-meta {
  flex:1; min-width:0; display:flex; flex-direction:column; gap:2px;
}
[data-dsh-ws-studio-host] [data-ws-history-ghost] .ws-hist-line,
[data-dsh-ws-studio-host] [data-ws-history-item] .ws-hist-line {
  min-width:0; font-size:11px; line-height:1.35; color: var(--dsw-alias-label-secondary);
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}
[data-dsh-ws-studio-host] [data-ws-history-item] .ws-hist-model {
  font-size:10.5px; color: var(--dsw-alias-label-tertiary); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}
[data-dsh-ws-studio-host] [data-ws-history-item] .ws-hist-actions {
  display:flex; gap:3px; flex-wrap:wrap; margin-top:1px;
}
[data-dsh-ws-studio-host] [data-ws-inspire-card] {
  position:relative; display:flex; flex-direction:column; justify-content:flex-end;
  aspect-ratio:1/1; min-height:0; padding:0; overflow:hidden;
  border:1px solid var(--dsw-alias-border-l2); border-radius:10px;
  background: var(--dsw-alias-bg-module-platform);
  color: var(--dsw-alias-label-secondary); cursor:pointer; font:inherit; text-align:left;
  transition: transform .15s ease, border-color .15s ease, box-shadow .15s ease;
}
[data-dsh-ws-studio-host] [data-ws-inspire-card]:hover {
  border-color: var(--dsw-alias-state-business-primary); transform:translateY(-2px);
  box-shadow: var(--dsw-elevation-panel);
}
[data-dsh-ws-studio-host] [data-ws-inspire-card] img {
  position:absolute; inset:0; width:100%; height:100%; object-fit:cover;
  background: var(--dsw-alias-bg-layer-1);
}
[data-dsh-ws-studio-host] [data-ws-param-row] {
  display:flex; flex-direction:column; gap:4px;
}
[data-dsh-ws-studio-host] [data-ws-param-group] {
  display:flex; flex-direction:row; flex-wrap:wrap; align-items:center; gap:6px 8px; min-width:0;
}
[data-dsh-ws-studio-host] [data-ws-param-group] > span {
  flex:none; min-width:2.2em;
}
[data-dsh-ws-studio-host] [data-ws-chips] {
  display:flex; flex-wrap:wrap; gap:3px 4px; align-items:center; flex:1; min-width:0;
}
[data-dsh-ws-studio-host] [data-ws-chips] [data-ws-param][data-value] {
  padding:1px 6px; border:1px solid var(--dsw-alias-border-l2); border-radius:999px;
  background:transparent; color: var(--dsw-alias-label-secondary); cursor:pointer; font:inherit; font-size:11px; line-height:1.25;
  white-space:nowrap; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-chips] [data-ws-param][data-value][aria-current="true"] {
  background: var(--dsw-alias-interactive-bg-active); color: var(--dsw-alias-label-primary);
  border-color: var(--dsw-alias-border-l4);
}
[data-dsh-ws-studio-host] [data-ws-model-row] {
  display:flex; align-items:center; gap:8px; flex-wrap:wrap; min-width:0;
}
[data-dsh-ws-studio-host] [data-ws-model-row] [data-ws-param="model"] {
  flex:0 1 10rem; min-width:5rem; width:10rem;
}
[data-dsh-ws-studio-host] [data-ws-conn-status] {
  padding:0; height:auto; border:0; border-radius:0;
  background:transparent; color: var(--dsw-alias-label-dimmed);
  font:inherit; font-size:10px; display:inline-flex; align-items:center; flex:none;
  opacity:.7;
}
[data-dsh-ws-studio-host] [data-ws-inspire-wall] [data-ws-stage] {
  /* Right column = result landing. Pack head+grid+actions at TOP (same lesson as CTA). */
  flex:1 1 auto; min-height:0; max-height:none; display:flex; flex-direction:column;
  justify-content:flex-start; gap:8px;
  margin:0; padding:0; overflow:hidden; background:transparent; border:0;
}
[data-dsh-ws-studio-host] [data-ws-stage-head] {
  display:flex; align-items:baseline; gap:8px; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-stage-head] strong {
  font-size:13px; font-weight:650; color: var(--dsw-alias-label-primary);
}
[data-dsh-ws-studio-host] [data-ws-stage-empty] {
  flex:0 0 auto; min-height:0;
  display:flex; flex-direction:column; align-items:flex-start; justify-content:flex-start;
  gap:4px; padding:12px 14px; text-align:left;
  border:0; border-radius:10px;
  background: var(--dsw-alias-bg-module-platform);
}
[data-dsh-ws-studio-host] [data-ws-stage-empty][hidden],
[data-dsh-ws-studio-host] [data-ws-stage][data-has-results] [data-ws-stage-empty],
[data-dsh-ws-studio-host] [data-ws-stage][data-busy] [data-ws-stage-empty],
[data-dsh-ws-studio-host] [data-ws-stage][data-has-results] [data-ws-stage-empty-title],
[data-dsh-ws-studio-host] [data-ws-stage][data-has-results] [data-ws-stage-empty-hint],
[data-dsh-ws-studio-host] [data-ws-stage][data-busy] [data-ws-stage-empty-title],
[data-dsh-ws-studio-host] [data-ws-stage][data-busy] [data-ws-stage-empty-hint] {
  display:none !important;
}
[data-dsh-ws-studio-host] [data-ws-stage-empty-title] {
  font-size:13px; font-weight:650; color: var(--dsw-alias-label-primary); line-height:1.35;
}
[data-dsh-ws-studio-host] [data-ws-stage-empty-hint] {
  font-size:12px; color: var(--dsw-alias-label-secondary); font-weight:400; line-height:1.4;
}
[data-dsh-ws-studio-host] [data-ws-stage-empty-title][hidden],
[data-dsh-ws-studio-host] [data-ws-stage-empty-hint][hidden] { display:none !important; }
[data-dsh-ws-studio-host] [data-ws-stage-samples] {
  /* Idle path never paints sample tiles \u2014 keep out of flex flow */
  display:none; flex:none; min-height:0;
}
[data-dsh-ws-studio-host] [data-ws-stage-samples][hidden],
[data-dsh-ws-studio-host] [data-ws-results][hidden] { display:none !important; }
[data-dsh-ws-studio-host] [data-ws-results] {
  /* Pack to natural height \u2014 NEVER flex:1 sea that sinks RESULT_ACTIONS */
  display:grid; grid-template-columns:repeat(auto-fill, minmax(220px, 1fr));
  gap:12px; align-content:start; flex:0 1 auto; min-height:0; max-height:100%;
  overflow:auto; padding:0;
}
[data-dsh-ws-studio-host] [data-ws-results] [data-ws-result-card] {
  border:1px solid var(--dsw-alias-border-l2); border-radius:10px; padding:2px;
  background: var(--dsw-alias-bg-module-platform); overflow:hidden; min-width:0;
  cursor:pointer;
}
[data-dsh-ws-studio-host] [data-ws-results] [data-ws-result-card][data-selected] {
  border-color: var(--dsw-alias-state-business-primary);
  box-shadow: 0 0 0 1px var(--dsw-alias-state-business-primary);
}
[data-dsh-ws-studio-host] [data-ws-results] [data-ws-result-card] img {
  display:block; width:100%; max-height:420px; border-radius:8px; object-fit:cover;
  background: var(--dsw-alias-bg-layer-1);
}
[data-dsh-ws-studio-host] [data-ws-stage-tile] {
  position:relative; min-height:0; height:100%; border-radius:10px; overflow:hidden;
  border:1px solid var(--dsw-alias-border-l2); background: var(--dsw-alias-bg-module-platform);
  cursor:pointer; padding:0; font:inherit; color:inherit;
}
[data-dsh-ws-studio-host] [data-ws-stage-tile] img {
  position:absolute; inset:0; width:100%; height:100%; object-fit:cover;
}
[data-dsh-ws-studio-host] [data-ws-stage-tile] .ws-stage-cap {
  position:absolute; inset:auto 0 0 0; z-index:1; padding:14px 8px 7px;
  background: var(--dsw-alias-bg-mask-2);
  color: var(--dsw-alias-label-primary-foreground); font-size:11px; line-height:1.3; text-align:left;
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
}
[data-dsh-ws-studio-host] [data-ws-neg-details] { margin:0; }
[data-dsh-ws-studio-host] [data-ws-neg-details] > summary {
  cursor:pointer; list-style:none; display:flex; align-items:center; gap:6px;
  color: var(--dsw-alias-label-secondary); font-size:11px; font-weight:600; user-select:none; line-height:1.4;
  width:fit-content; border-bottom:1px solid transparent;
}
[data-dsh-ws-studio-host] [data-ws-neg-details] > summary:hover {
  color: var(--dsw-alias-label-primary); border-bottom-color: var(--dsw-alias-border-l3);
}
[data-dsh-ws-studio-host] [data-ws-neg-details] > summary::-webkit-details-marker { display:none; }
[data-dsh-ws-studio-host] [data-ws-neg-chev] {
  display:inline-block; font-size:10px; opacity:.75; transition:transform .12s ease; line-height:1;
}
[data-dsh-ws-studio-host] [data-ws-neg-details][open] > summary [data-ws-neg-chev] { transform:rotate(90deg); }
[data-dsh-ws-studio-host] [data-ws-neg-details]:not([open]) { margin:0; }
[data-dsh-ws-studio-host] [data-ws-neg-details]:not([open]) [data-ws-clear-negative] { display:none !important; }
[data-dsh-ws-studio-host] [data-ws-neg-details][open] > summary { margin-bottom:6px; width:100%; border-bottom-color:transparent; }
[data-dsh-ws-studio-host] [data-ws-cta]:hover { background: var(--dsw-alias-button-primary-hover); }
[data-dsh-ws-studio-host] [data-ws-cta]:active { filter:brightness(.96); }
[data-dsh-ws-studio-host] [data-ws-cta]:focus-visible {
  outline:2px solid var(--dsw-alias-state-business-primary); outline-offset:2px;
}
[data-dsh-ws-studio-host] [data-ws-status]:empty { display:none; }
[data-dsh-ws-studio-host] [data-ws-param="model"]::placeholder { color: var(--dsw-alias-label-tertiary); opacity:1; }
[data-dsh-ws-studio-host] [data-ws-param="model"] { color: var(--dsw-alias-label-primary); }
[data-dsh-ws-studio-host] [data-ws-dock] {
  /* Pack to natural height \u2014 continuous with [data-ws-cta-footer] (gap 0 / small).
     NEVER margin-top:auto / flex-grow between dock params and CTA. */
  flex:0 0 auto; display:flex; flex-direction:column; gap:4px;
  padding:8px 12px 0; background: var(--dsw-alias-bg-base);
  border-top:0;
  max-height:none; overflow:auto; min-height:0;
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
  /* Pack directly under dock at TOP of mid \u2014 write+CTA only; results on right. */
  flex:0 0 auto; margin-top:0; position:relative; z-index:2;
  padding:6px 12px 10px; background: var(--dsw-alias-bg-base);
  display:flex; flex-direction:column; gap:4px;
  border-top:1px solid var(--dsw-alias-border-l2);
}
[data-dsh-ws-studio-host] [data-ws-advanced] { margin:0; }
[data-dsh-ws-studio-host] [data-ws-advanced] > summary {
  cursor:pointer; list-style:none; display:flex; align-items:center; gap:6px;
  color: var(--dsw-alias-label-secondary); font-size:11px; font-weight:600; user-select:none; line-height:1.4;
  width:fit-content; border-bottom:1px solid transparent;
}
[data-dsh-ws-studio-host] [data-ws-advanced] > summary:hover {
  color: var(--dsw-alias-label-primary); border-bottom-color: var(--dsw-alias-border-l3);
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
  background: var(--dsw-alias-bg-module-platform); border:1px dashed var(--dsw-alias-border-l3); border-radius:10px;
}
[data-dsh-ws-studio-host] [data-ws-ref-slot][data-visible] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-ref-drop] {
  min-height:72px; border-radius:8px; border:1px dashed var(--dsw-alias-border-l3);
  background: var(--dsw-specific-input-major); display:flex; align-items:center; justify-content:center;
  gap:8px; flex-wrap:wrap; padding:8px; color: var(--dsw-alias-label-secondary); font-size:12px; cursor:pointer;
}
[data-dsh-ws-studio-host] [data-ws-ref-drop][data-dragover] {
  border-color: var(--dsw-alias-state-business-primary); color: var(--dsw-alias-label-primary);
}
[data-dsh-ws-studio-host] [data-ws-ref-thumbs] { display:flex; flex-wrap:wrap; gap:6px; }
[data-dsh-ws-studio-host] [data-ws-ref-thumb] {
  position:relative; width:64px; height:64px; border-radius:8px; overflow:hidden;
  border:1px solid var(--dsw-alias-border-l2); background: var(--dsw-alias-bg-layer-1);
}
[data-dsh-ws-studio-host] [data-ws-ref-thumb] img { width:100%; height:100%; object-fit:cover; display:block; }
[data-dsh-ws-studio-host] [data-ws-ref-thumb] button {
  position:absolute; top:2px; right:2px; width:18px; height:18px; border:0; border-radius:999px;
  background: var(--dsw-alias-bg-mask-3); color: var(--dsw-alias-label-primary-foreground);
  cursor:pointer; font-size:11px; line-height:1; padding:0;
}
[data-dsh-ws-studio-host] [data-ws-progress] {
  display:none; flex-direction:column; gap:6px; padding:8px 10px;
  border:1px solid var(--dsw-alias-border-l2); border-radius:10px;
  background: var(--dsw-alias-bg-module-platform); flex:none;
}
[data-dsh-ws-studio-host] [data-ws-progress][data-visible] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-progress-bar] {
  height:6px; border-radius:999px; background: var(--dsw-alias-border-l2); overflow:hidden;
}
[data-dsh-ws-studio-host] [data-ws-progress-bar] > i {
  display:block; height:100%; width:0%; background: var(--dsw-alias-state-business-primary);
  border-radius:999px; transition:width .2s ease;
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
  display:flex; align-items:center; gap:10px; font-size:12px;
  color: var(--dsw-alias-label-secondary); flex-wrap:wrap;
}
[data-dsh-ws-studio-host] [data-ws-fail] {
  display:none; flex-direction:column; gap:6px; padding:8px 10px;
  border:1px solid var(--dsw-alias-state-error-primary); border-radius:10px;
  background: var(--dsw-alias-bg-module-platform); flex:none;
  color: var(--dsw-alias-state-error-primary); font-size:12px;
}
[data-dsh-ws-studio-host] [data-ws-fail][data-visible] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-result-actions] {
  /* Directly under result grid \u2014 never margin-top:auto / column-bottom flex sea.
     2-row wrap OK \u2014 roomy gap so seven chips aren't cramped. */
  display:none; flex-wrap:wrap; gap:8px 10px; padding:8px 0 4px; flex:0 0 auto; margin-top:0;
  align-content:flex-start;
}
[data-dsh-ws-studio-host] [data-ws-result-actions][data-visible] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-result-actions] button {
  padding:7px 14px; border:1px solid var(--dsw-alias-border-l2); border-radius:999px;
  background: var(--dsw-alias-bg-module-platform); color: var(--dsw-alias-label-secondary);
  cursor:pointer; font:inherit; font-size:12.5px; line-height:1.25; min-height:32px;
}
[data-dsh-ws-studio-host] [data-ws-result-actions] button[data-ws-unwired] {
  opacity:.7; border-style:dashed; color: var(--dsw-alias-label-tertiary);
}
[data-dsh-ws-studio-host] [data-ws-plan-panel] {
  display:none; flex-direction:column; gap:4px; padding:6px 8px;
  background: var(--dsw-alias-bg-module-platform);
  border:1px solid var(--dsw-alias-border-l2); border-radius:8px; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-plan-panel][data-visible] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-plan-actions] { display:flex; flex-wrap:wrap; gap:6px; }
[data-dsh-ws-studio-host] [data-ws-plan-actions] button {
  padding:4px 10px; border:1px solid var(--dsw-alias-border-l2); border-radius:999px;
  background: var(--dsw-alias-bg-layer-1); color: var(--dsw-alias-label-secondary);
  cursor:pointer; font:inherit; font-size:11.5px;
}
[data-dsh-ws-studio-host] [data-ws-plan-actions] button[data-primary] {
  border-color: var(--dsw-alias-border-l4); background: var(--dsw-alias-interactive-bg-active);
  color: var(--dsw-alias-label-primary); font-weight:600;
}
[data-dsh-ws-studio-host] [data-ws-pane-drag] {
  flex:0 0 5px; width:5px; cursor:col-resize; background:transparent; position:relative; z-index:2;
  align-self:stretch;
}
[data-dsh-ws-studio-host] [data-ws-pane-drag]:hover,
[data-dsh-ws-studio-host] [data-ws-pane-drag][data-active] {
  background: var(--dsw-alias-interactive-bg-hover);
}
[data-dsh-ws-studio-host] [data-ws-col="studio"] {
  /* Write+generate only: dock+CTA pack at top; no result stage / no white sea */
  display:flex; flex-direction:column; justify-content:flex-start; flex:1; min-width:0; min-height:0;
  overflow:auto; background: var(--dsw-alias-bg-base);
}
[data-dsh-ws-studio-host] [data-ws-cols] { display:flex; flex:1; min-height:0; }
[data-dsh-ws-studio-host] [data-ws-top-bar] {
  display:flex; gap:8px; padding:0 10px; align-items:center; flex-shrink:0;
  min-height:20px; height:20px;
  background:transparent; border-bottom:0;
}
[data-dsh-ws-studio-host] [data-ws-mode-switch] {
  position:relative; display:inline-flex; align-items:center; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-mode-toggle] {
  padding:0 2px; border:0; border-radius:0; background:transparent;
  color: var(--dsw-alias-label-tertiary); cursor:pointer;
  font:inherit; font-size:10.5px; line-height:1.25; font-weight:400;
}
[data-dsh-ws-studio-host] [data-ws-mode-toggle]:hover {
  color: var(--dsw-alias-label-secondary);
}
[data-dsh-ws-studio-host] [data-ws-mode-current] {
  color: inherit;
}
[data-dsh-ws-studio-host] [data-ws-mode-caret] {
  color: var(--dsw-alias-label-dimmed);
  font-size: 9px;
}
[data-dsh-ws-studio-host] [data-ws-mode-menu] {
  position:absolute; top:100%; left:0; z-index:50; margin-top:2px;
  min-width:7.5rem; padding:4px; display:flex; flex-direction:column; gap:2px;
  background: var(--dsw-alias-bg-module-platform);
  border:1px solid var(--dsw-alias-border-l2);
  border-radius:8px; box-shadow: var(--dsw-elevation-panel);
}
[data-dsh-ws-studio-host] [data-ws-mode-menu][hidden] { display:none !important; }
[data-dsh-ws-studio-host] [data-ws-mode-menu] [data-ws-top] {
  padding:4px 8px; border:0; border-radius:6px; text-align:left;
  background:transparent; color: var(--dsw-alias-label-secondary);
  cursor:pointer; font:inherit; font-size:11.5px; line-height:1.3;
}
[data-dsh-ws-studio-host] [data-ws-mode-menu] [data-ws-top]:hover {
  background: var(--dsw-alias-interactive-bg-hover);
}
[data-dsh-ws-studio-host] [data-ws-mode-menu] [data-ws-top][aria-current="true"],
[data-dsh-ws-studio-host] [data-ws-mode-menu] [data-ws-top][data-active] {
  background: var(--dsw-alias-interactive-bg-active);
  color: var(--dsw-alias-label-primary); font-weight:500;
}
[data-dsh-ws-studio-host] [data-ws-history-filters][hidden] { display:none !important; }
[data-dsh-ws-studio-host] [data-ws-history-clear][hidden] { display:none !important; }
[data-dsh-ws-studio-host] textarea,
[data-dsh-ws-studio-host] input:not([type="checkbox"]):not([type="file"]),
[data-dsh-ws-studio-host] select {
  background: var(--dsw-specific-input-major);
  color: var(--dsw-alias-label-primary);
  border-color: var(--dsw-alias-border-l2);
}
[data-dsh-ws-studio-host] [data-ws-tool-more] {
  position:relative; display:inline-flex; align-items:center; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-tool-more-toggle] {
  padding:0 6px; height:18px; border:0; border-radius:4px; background:transparent;
  color: var(--dsw-alias-label-tertiary); cursor:pointer;
  font:inherit; font-size:10.5px; line-height:1.25;
}
[data-dsh-ws-studio-host] [data-ws-tool-more-toggle]:hover {
  color: var(--dsw-alias-label-secondary);
  background: var(--dsw-alias-interactive-bg-hover);
}
[data-dsh-ws-studio-host] [data-ws-tool-more-menu] {
  position:absolute; top:100%; right:0; z-index:50; margin-top:2px;
  min-width:7rem; padding:4px; display:flex; flex-direction:column; gap:2px;
  background: var(--dsw-alias-bg-module-platform);
  border:1px solid var(--dsw-alias-border-l2);
  border-radius:8px; box-shadow: var(--dsw-elevation-panel);
}
[data-dsh-ws-studio-host] [data-ws-tool-more-menu][hidden] { display:none !important; }
[data-dsh-ws-studio-host] [data-ws-tool-more-menu] [data-ws-tool] {
  padding:4px 8px; border:0; border-radius:6px; text-align:left;
  background:transparent; color: var(--dsw-alias-label-secondary);
  cursor:pointer; font:inherit; font-size:11.5px; line-height:1.3;
}
[data-dsh-ws-studio-host] [data-ws-tool-more-menu] [data-ws-tool]:hover {
  background: var(--dsw-alias-interactive-bg-hover);
}
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
function createStudioHost(opts = {}) {
  const getRpc = typeof opts.getRpc === "function" ? opts.getRpc : null;
  let host;
  let open = false;
  let videoApi = null;
  let canvasApi = null;
  let gifApi = null;
  let uiDesignApi = null;
  let templateApi = null;
  let galleryApi = null;
  let ecomApi = null;
  let state = defaultStudioState();
  let activeHistoryId = null;
  const historyStore = /* @__PURE__ */ new Map();
  let storagePaths = null;
  const historyStorageKey = () => {
    const dir = storagePaths?.dataDir ? String(storagePaths.dataDir) : "";
    return dir ? `${HISTORY_KEY_BASE}::${dir}` : HISTORY_KEY_BASE;
  };
  let progressTimer = null;
  let progressStartedAt = 0;
  const paintChat = () => {
    state.chatCollapsed = true;
    const chat = host?.querySelector('[data-ws-col="chat"]');
    const wall = host?.querySelector("[data-ws-inspire-wall]");
    if (chat) chat.style.display = "none";
    if (wall) wall.style.display = "flex";
  };
  const syncHistoryChrome = () => {
    const histEl = host?.querySelector("[data-ws-history-list]");
    const filters = host?.querySelector("[data-ws-history-filters]");
    const clearBtn = host?.querySelector("[data-ws-history-clear]");
    const hasItems = !!(histEl && histEl.querySelector("[data-ws-history-item]"));
    if (filters instanceof HTMLElement) filters.hidden = !hasItems;
    if (clearBtn instanceof HTMLElement) {
      clearBtn.hidden = !hasItems;
      clearBtn.disabled = !hasItems;
    }
  };
  const setTopTab = (tab) => {
    const name2 = tab || IMAGE_PAGE;
    state.topTab = name2;
    const cur = host?.querySelector("[data-ws-mode-current]");
    if (cur) cur.textContent = name2;
    host?.querySelectorAll("[data-ws-mode-menu] [data-ws-top]").forEach((b) => {
      const on = b.getAttribute("data-ws-top") === name2;
      if (b instanceof HTMLElement) {
        b.setAttribute("aria-current", on ? "true" : "false");
        if (on) b.setAttribute("data-active", "");
        else b.removeAttribute("data-active");
      }
    });
    const menu = host?.querySelector("[data-ws-mode-menu]");
    const toggle = host?.querySelector("[data-ws-mode-toggle]");
    if (menu instanceof HTMLElement) menu.hidden = true;
    if (toggle instanceof HTMLElement) toggle.setAttribute("aria-expanded", "false");
    host?.setAttribute("data-ws-top-page", name2);
    const topWired = name2 === VIDEO_PAGE || name2 === IMAGE_PAGE || name2 === CANVAS_PAGE || name2 === GALLERY_PAGE || name2 === ECOM_PAGE;
    if (topWired) {
      videoApi?.setPage(name2);
      canvasApi?.setPage(name2);
      galleryApi?.setPage(name2);
      ecomApi?.setPage(name2);
      if (name2 === VIDEO_PAGE) setStatus("\u89C6\u9891\u751F\u6210");
      else if (name2 === CANVAS_PAGE) setStatus("\u65E0\u9650\u753B\u5E03");
      else if (name2 === GALLERY_PAGE) setStatus("\u753B\u5ECA");
      else if (name2 === ECOM_PAGE) setStatus("\u7535\u5546\u6A21\u5F0F");
      else setStatus("\u666E\u901A\u751F\u56FE");
    } else {
      setStatus(`\u300C${name2}\u300D\u672A\u63A5\u7EBF`);
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
  const slimResultRow = (r) => {
    if (!r || typeof r !== "object") return null;
    const url = r.url != null ? String(r.url) : "";
    const localPath = r.localPath != null ? String(r.localPath) : "";
    const kind = r.kind != null ? String(r.kind) : void 0;
    if (url.startsWith("data:") && url.length > 12e4) {
      return localPath ? { localPath, kind } : null;
    }
    const out = {};
    if (url) out.url = url;
    if (localPath) out.localPath = localPath;
    if (kind) out.kind = kind;
    return out.url || out.localPath ? out : null;
  };
  const slimGenerateValue = (value) => {
    if (!value || typeof value !== "object") return value;
    const results = Array.isArray(value.results) ? value.results.map(slimResultRow).filter(Boolean) : [];
    return {
      jobId: value.jobId,
      phase: value.phase || value.status || "done",
      status: value.status || value.phase || "done",
      progress: value.progress,
      elapsedMs: value.elapsedMs,
      error: value.error,
      results
    };
  };
  const persistHistory = () => {
    try {
      const histEl = host?.querySelector("[data-ws-history-list]");
      const orderedIds = histEl ? Array.from(histEl.querySelectorAll("[data-ws-history-item]")).map(
        (el) => el.getAttribute("data-ws-history-item")
      ) : Array.from(historyStore.keys());
      const final = [];
      const seen = /* @__PURE__ */ new Set();
      for (const id of orderedIds) {
        if (!id || seen.has(id) || !historyStore.has(id)) continue;
        seen.add(id);
        const entry = historyStore.get(id);
        final.push({
          id,
          snapshot: entry?.snapshot || {},
          value: slimGenerateValue(entry?.value),
          savedAt: entry?.savedAt || Date.now()
        });
        if (final.length >= HISTORY_MAX) break;
      }
      localStorage.setItem(historyStorageKey(), JSON.stringify(final));
    } catch (_) {
    }
  };
  const loadHistoryEntries = () => {
    try {
      const raw = localStorage.getItem(historyStorageKey());
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      return parsed.filter((e) => e && typeof e === "object" && e.id).slice(0, HISTORY_MAX);
    } catch (_) {
      return [];
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
    el.style.color = on ? T.fg2 : T.error;
    el.dataset.connected = on ? "1" : "0";
  };
  const paintRefSlot = () => {
    const slot = host?.querySelector("[data-ws-ref-slot]");
    if (!(slot instanceof HTMLElement)) return;
    const show = state.mode === MODE_IMG2;
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
  const formatPlanCard = (plan) => {
    if (!plan || typeof plan === "string") return String(plan || "");
    const lines = [];
    if (plan.label || plan.skillId) lines.push(`\u3010${plan.label || plan.skillId}\u3011`);
    if (plan.rationale) lines.push(String(plan.rationale));
    if (Array.isArray(plan.prompts)) {
      for (const pr of plan.prompts) {
        lines.push(`\u2014 ${pr.label || "\u955C\u5934"}\uFF08${pr.aspect || ""}\uFF09`);
        lines.push(String(pr.prompt || ""));
      }
    }
    if (plan.score) {
      lines.push(`\u81EA\u68C0 ${plan.score.total ?? ""}\uFF08\u4EC5\u5C55\u793A\uFF0C\u4E0D\u9501\u51FA\u56FE\uFF09`);
      if (Array.isArray(plan.score.notes)) lines.push(...plan.score.notes.map((n) => `\xB7 ${n}`));
    }
    lines.push("disabledByScore: false");
    return lines.filter(Boolean).join("\n");
  };
  const applySkillPlanToFields = (plan) => {
    if (!plan) return;
    const fillPrompt = typeof plan === "object" && plan.fillPrompt != null ? String(plan.fillPrompt) : typeof plan === "object" && Array.isArray(plan.prompts) ? plan.prompts.map((p) => p.prompt).filter(Boolean).join("\n\n") : typeof plan === "string" ? plan : "";
    if (fillPrompt) {
      state.prompt = fillPrompt;
      const promptEl = host?.querySelector("[data-ws-prompt]");
      if (promptEl instanceof HTMLTextAreaElement) promptEl.value = fillPrompt;
    }
    const neg = typeof plan === "object" && plan.fillNegative != null ? String(plan.fillNegative) : typeof plan === "object" && plan.negativePrompt != null ? String(plan.negativePrompt) : null;
    if (neg != null) {
      state.negativePrompt = neg;
      const negEl = host?.querySelector("[data-ws-negative]");
      if (negEl instanceof HTMLTextAreaElement) negEl.value = neg;
      const details = host?.querySelector("[data-ws-neg-details]");
      if (details instanceof HTMLDetailsElement && neg) details.open = true;
    }
    const aspect = typeof plan === "object" ? plan.fillAspect || plan.prompts?.[0]?.aspect : null;
    if (aspect && aspect !== "\u81EA\u52A8") {
      state.ratio = aspect;
      const ratioEl = host?.querySelector('[data-ws-param="ratio"]');
      if (ratioEl instanceof HTMLSelectElement) {
        const opt = Array.from(ratioEl.options).find((o) => o.value === aspect);
        if (opt) ratioEl.value = aspect;
      }
    }
    syncFields?.();
  };
  const readSkillId = () => {
    if (state.skillId) return state.skillId;
    const sel = host?.querySelector('[data-ws-param="skill"]');
    if (sel instanceof HTMLSelectElement && sel.value) {
      state.skillId = sel.value;
      return state.skillId;
    }
    return null;
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
    const prog = host?.querySelector("[data-ws-inspire-wall] [data-ws-progress]") || host?.querySelector("[data-ws-progress]");
    const fail = host?.querySelector("[data-ws-inspire-wall] [data-ws-fail]") || host?.querySelector("[data-ws-fail]");
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
    try {
      syncStageWeight();
    } catch (_) {
    }
  };
  const paintResultActions = (show) => {
    const bar = host?.querySelector("[data-ws-inspire-wall] [data-ws-result-actions]") || host?.querySelector("[data-ws-result-actions]");
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
    return `<button type="button" data-ws-param="${param}" data-value="${escapeHtml7(val)}" aria-current="${on ? "true" : "false"}" style="${css.chip(on)}">${escapeHtml7(val)}</button>`;
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
  const syncStageWeight = () => {
    const stage = host?.querySelector("[data-ws-inspire-wall] [data-ws-stage]") || host?.querySelector('[data-ws-page="image"] [data-ws-stage]');
    if (!(stage instanceof HTMLElement)) return;
    const resultsEl = stage.querySelector("[data-ws-results]");
    const hasResults = !!(resultsEl && !resultsEl.hidden && resultsEl.childElementCount);
    const busy = !!state.task && (state.task.status === "running" || state.task.status === "queued" || state.task.status === "submitted" || state.task.status === "polling" || state.task.status === "downloading");
    const failed = state.task?.status === "failed";
    if (hasResults) stage.setAttribute("data-has-results", "");
    else stage.removeAttribute("data-has-results");
    if (busy) stage.setAttribute("data-busy", "");
    else stage.removeAttribute("data-busy");
    const empty = stage.querySelector("[data-ws-stage-empty]");
    if (empty instanceof HTMLElement) empty.hidden = !!(hasResults || busy || failed);
    const title = stage.querySelector("[data-ws-stage-empty-title]");
    if (title instanceof HTMLElement) {
      title.hidden = !!(hasResults || busy || failed);
      if (!title.hidden) title.textContent = STAGE_EMPTY_TITLE;
    }
    const hint = stage.querySelector("[data-ws-stage-empty-hint]");
    if (hint instanceof HTMLElement) {
      hint.hidden = !!(hasResults || busy || failed);
      if (!hint.hidden) hint.textContent = STAGE_EMPTY_HINT2;
    }
  };
  const paintStageIdle = () => {
    const stage = host?.querySelector("[data-ws-inspire-wall] [data-ws-stage]") || host?.querySelector('[data-ws-page="image"] [data-ws-stage]');
    const samples = stage?.querySelector("[data-ws-stage-samples]") || host?.querySelector("[data-ws-stage-samples]");
    const resultsEl = stage?.querySelector("[data-ws-results]") || host?.querySelector("[data-ws-results]");
    const hint = stage?.querySelector("[data-ws-stage-empty-hint]") || host?.querySelector("[data-ws-stage-empty-hint]");
    const empty = stage?.querySelector("[data-ws-stage-empty]");
    if (resultsEl) {
      resultsEl.innerHTML = "";
      resultsEl.hidden = true;
    }
    if (samples) {
      samples.innerHTML = "";
      samples.hidden = true;
    }
    if (empty instanceof HTMLElement) empty.hidden = false;
    const title = stage?.querySelector("[data-ws-stage-empty-title]");
    if (title) {
      title.hidden = false;
      title.textContent = STAGE_EMPTY_TITLE;
    }
    if (hint) {
      hint.hidden = false;
      hint.textContent = STAGE_EMPTY_HINT2;
    }
    paintResultActions(false);
    if (state.task?.status !== "failed" && state.task?.status !== "running") {
      state.task = null;
      paintProgressUi();
    }
    syncStageWeight();
  };
  const showResultStage = () => {
    const stage = host?.querySelector("[data-ws-inspire-wall] [data-ws-stage]") || host?.querySelector('[data-ws-page="image"] [data-ws-stage]');
    const samples = stage?.querySelector("[data-ws-stage-samples]") || host?.querySelector("[data-ws-stage-samples]");
    const resultsEl = stage?.querySelector("[data-ws-results]") || host?.querySelector("[data-ws-results]");
    const hint = stage?.querySelector("[data-ws-stage-empty-hint]") || host?.querySelector("[data-ws-stage-empty-hint]");
    const empty = stage?.querySelector("[data-ws-stage-empty]");
    if (samples) {
      samples.innerHTML = "";
      samples.hidden = true;
    }
    if (resultsEl) resultsEl.hidden = false;
    if (empty instanceof HTMLElement) empty.hidden = true;
    const title = stage?.querySelector("[data-ws-stage-empty-title]");
    if (title) {
      title.hidden = true;
      title.textContent = STAGE_EMPTY_TITLE;
    }
    if (hint) {
      hint.hidden = true;
      hint.textContent = STAGE_EMPTY_HINT2;
    }
    if (stage instanceof HTMLElement) stage.setAttribute("data-has-results", "");
  };
  const mountHistoryItem = (jobId, entry, opts2 = {}) => {
    const histEl = host?.querySelector("[data-ws-history-list]");
    if (!histEl || !jobId) return;
    const persist = opts2.persist !== false;
    const snapshot = entry?.snapshot || captureParamSnapshot();
    const value = entry?.value;
    const savedAt = entry?.savedAt || Date.now();
    historyStore.set(jobId, { snapshot, value, savedAt });
    const existing = Array.from(histEl.querySelectorAll("[data-ws-history-item]")).find(
      (el) => el.getAttribute("data-ws-history-item") === jobId
    );
    if (existing) {
      const results2 = Array.isArray(value?.results) ? value.results : [];
      const thumb2 = results2.length ? pickDisplayUrl(results2[0]) : "";
      const img = existing.querySelector("img");
      if (thumb2 && img instanceof HTMLImageElement) img.src = thumb2;
      if (persist) persistHistory();
      markHistoryActive(jobId);
      return;
    }
    histEl.querySelector("[data-ws-history-empty]")?.remove();
    const promptText = (snapshot?.prompt != null ? String(snapshot.prompt) : state.prompt || "").trim();
    const snippet = promptText.slice(0, 28) || "\u751F\u6210\u7ED3\u679C";
    const ratio = snapshot?.ratio != null ? String(snapshot.ratio) : state.ratio || "1:1";
    const mode = snapshot?.mode != null ? String(snapshot.mode) : state.mode || MODE_TXT2;
    const modelId = snapshot?.modelId != null && String(snapshot.modelId) ? String(snapshot.modelId) : state.modelId || DEFAULT_MODEL;
    const line = `${snippet} \xB7 ${ratio}`;
    const modelLine = `${modelId} \xB7 ${mode}`;
    const results = Array.isArray(value?.results) ? value.results : [];
    const thumb = results.length ? pickDisplayUrl(results[0]) : "";
    const item = document.createElement("div");
    item.dataset.wsHistoryItem = jobId;
    item.innerHTML = (thumb ? `<img src="${escapeHtml7(thumb)}" alt="" width="${HIST_THUMB}" height="${HIST_THUMB}" />` : `<span style="width:${HIST_THUMB}px;height:${HIST_THUMB}px;border-radius:7px;background:${T.module};flex:none;"></span>`) + `<div class="ws-hist-meta"><div class="ws-hist-line" title="${escapeHtml7(promptText || "\u751F\u6210\u7ED3\u679C")}">${escapeHtml7(line)}</div><div class="ws-hist-model">${escapeHtml7(modelLine)}</div><div class="ws-hist-actions"><button type="button" data-ws-history-restore style="${css.histAction}">${HISTORY_ACTIONS.restore}</button><button type="button" data-ws-history-delete style="${css.histAction}">${HISTORY_ACTIONS.remove}</button></div></div>`;
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
      persistHistory();
      paintHistoryEmpty();
      setStatus("\u5DF2\u5220\u9664\u8BB0\u5F55");
    });
    item.addEventListener("click", (e) => {
      if (e.target instanceof Element && e.target.closest("[data-ws-history-restore],[data-ws-history-delete]"))
        return;
      markHistoryActive(jobId);
      const stored = historyStore.get(jobId);
      if (stored?.value) applyGenerateResult(stored.value);
      setStatus("\u5DF2\u4ECE\u5386\u53F2\u8F7D\u5165\u7ED3\u679C");
    });
    histEl.insertBefore(item, histEl.firstChild);
    markHistoryActive(jobId);
    syncHistoryChrome();
    if (persist) persistHistory();
  };
  const hydrateHistoryFromStorage = () => {
    const entries = loadHistoryEntries();
    if (!entries.length) {
      paintHistoryEmpty();
      return;
    }
    for (const e of [...entries].reverse()) {
      mountHistoryItem(String(e.id), e, { persist: false });
    }
    syncHistoryChrome();
  };
  const paintHistoryEmpty = () => {
    const histEl = host?.querySelector("[data-ws-history-list]");
    if (!histEl) return;
    if (histEl.querySelector("[data-ws-history-item]")) {
      histEl.querySelector("[data-ws-history-empty]")?.remove();
      syncHistoryChrome();
      return;
    }
    if (!histEl.querySelector("[data-ws-history-empty]")) {
      const empty = document.createElement("div");
      empty.dataset.wsHistoryEmpty = "";
      empty.style.cssText = `padding:8px 4px;font-size:12px;color:${T.fg3};`;
      empty.textContent = HISTORY_EMPTY_HINT2;
      histEl.appendChild(empty);
    }
    syncHistoryChrome();
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
      syncStageWeight();
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
    const fail = host?.querySelector("[data-ws-inspire-wall] [data-ws-fail]") || host?.querySelector("[data-ws-fail]");
    if (fail) fail.removeAttribute("data-visible");
    syncStageWeight();
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
    const resultsEl = host?.querySelector("[data-ws-inspire-wall] [data-ws-results]") || host?.querySelector("[data-ws-results]");
    const histEl = host?.querySelector("[data-ws-history-list]");
    if (resultsEl) {
      resultsEl.innerHTML = "";
      if (!results.length) {
        paintStageIdle();
      } else {
        showResultStage();
        let painted = 0;
        const selectFirst = () => {
          const cards = resultsEl.querySelectorAll("[data-ws-result-card]");
          cards.forEach((c) => c.removeAttribute("data-selected"));
          const first = cards[0];
          if (first instanceof HTMLElement) first.setAttribute("data-selected", "");
        };
        for (const r of results) {
          const src = pickDisplayUrl(r);
          if (!src) continue;
          const card = document.createElement("div");
          card.dataset.wsResultCard = "";
          const img = document.createElement("img");
          img.src = src;
          img.alt = "\u751F\u6210\u7ED3\u679C";
          img.dataset.wsResult = "";
          img.addEventListener("error", () => {
            card.remove();
            selectFirst();
            if (!resultsEl.querySelector("[data-ws-result-card]")) {
              paintResultActions(false);
              paintStageIdle();
            } else {
              syncStageWeight();
            }
          });
          card.addEventListener("click", () => {
            resultsEl.querySelectorAll("[data-ws-result-card]").forEach((c) => c.removeAttribute("data-selected"));
            card.setAttribute("data-selected", "");
          });
          card.appendChild(img);
          resultsEl.appendChild(card);
          painted += 1;
        }
        if (!painted) {
          paintStageIdle();
        } else {
          selectFirst();
          paintResultActions(true);
          syncStageWeight();
        }
      }
    }
    if (histEl && results.length) {
      const jobId = value?.jobId || `local-${Date.now()}`;
      const prev = historyStore.get(jobId);
      mountHistoryItem(jobId, {
        snapshot: prev?.snapshot || captureParamSnapshot(),
        value,
        savedAt: Date.now()
      });
    }
    setStatus(
      results.length ? `\u751F\u6210\u5B8C\u6210 \xD7${results.length}` : `\u751F\u6210\u5B8C\u6210\u4F46\u65E0\u56FE${value?.phase ? ` (${value.phase})` : ""}`
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
    host.style.cssText = `display:none;position:absolute;inset:0;z-index:40;width:auto;height:auto;background:${T.bg};color:${T.fg};flex-direction:column;font-family:${T.font};font-size:${T.fontSize};line-height:1.4;overflow:hidden;color-scheme:inherit;`;
    const styleEl = document.createElement("style");
    styleEl.textContent = HOST_STYLES;
    host.appendChild(styleEl);
    const frame = document.createElement("div");
    frame.style.cssText = "display:flex;flex-direction:column;flex:1;min-height:0;width:100%;";
    frame.innerHTML = `
      <header data-ws-top-bar>
        <div data-ws-mode-switch>
          <button type="button" data-ws-mode-toggle aria-expanded="false" aria-haspopup="listbox" aria-label="\u5207\u6362\u5DE5\u4F5C\u53F0\u6A21\u5757">
            <span data-ws-mode-current>${TOP_TABS[0]}</span><span data-ws-mode-caret aria-hidden="true"> \u25BE</span>
          </button>
          <div data-ws-mode-menu role="listbox" aria-label="\u5DE5\u4F5C\u53F0\u6A21\u5757" hidden>
            ${TOP_TABS.map(
      (t, i) => `<button type="button" data-ws-top="${t}" role="option" aria-current="${i === 0 ? "true" : "false"}" ${i === 0 ? "data-active" : ""}>${t}</button>`
    ).join("")}
          </div>
        </div>
        <span style="flex:1"></span>
        <div data-ws-tool-more>
          <button type="button" data-ws-tool-more-toggle aria-expanded="false" aria-haspopup="listbox" aria-label="${TOOL_MORE}">${TOOL_MORE} \u25BE</button>
          <div data-ws-tool-more-menu role="listbox" aria-label="${TOOL_MORE}" hidden>
            ${TOOL_ENTRIES.map((t) => `<button type="button" data-ws-tool="${t}" role="option">${t}</button>`).join("")}
          </div>
        </div>
        <span data-ws-conn-status title="${CHROME.connected}">${CHROME.connected}</span>
      </header>
      <div data-ws-cols>
        <!-- LEFT: \u5386\u53F2\u8BB0\u5F55 -->
        <aside data-ws-col="history" style="width:${state.paneWidths.history}px;flex-shrink:0;border-right:1px solid ${T.border2};padding:8px;overflow:auto;background:${T.sidebar};display:flex;flex-direction:column;gap:6px;">
          <div style="font-size:13px;font-weight:600;color:${T.fg};">${COLUMNS.history}</div>
          <div data-ws-history-filters hidden>
            <input type="search" placeholder="\u641C\u7D22\u5386\u53F2" aria-label="\u641C\u7D22\u5386\u53F2" style="width:100%;${css.field};font-size:12px;" />
            <div style="display:flex;gap:6px;margin-top:6px;">
              <select aria-label="\u5168\u90E8\u6A21\u578B" style="flex:1;${css.select}">
                <option>\u5168\u90E8\u6A21\u578B</option>
              </select>
              <select aria-label="\u5168\u90E8\u6BD4\u4F8B" style="flex:1;${css.select}">
                <option>\u5168\u90E8\u6BD4\u4F8B</option>
              </select>
            </div>
          </div>
          <div data-ws-history-list style="display:flex;flex-direction:column;gap:5px;flex:1;min-height:0;"></div>
          <button type="button" data-ws-history-clear hidden disabled style="align-self:flex-start;${css.pill({ color: T.fg3 })}">${HISTORY_ACTIONS.clear}</button>
        </aside>
        <div data-ws-pane-drag="history" title="\u62D6\u62FD\u8C03\u6574\u5386\u53F2\u680F\u5BBD\u5EA6"></div>

        <!-- CENTER: write + generate ONLY (no result stage / no white sea) -->
        <section data-ws-col="studio" style="flex:1;padding:0;overflow:auto;display:flex;flex-direction:column;justify-content:flex-start;min-width:0;background:${T.bg};border-left:0;border-right:0;">

          <div data-ws-dock>
            <div style="display:flex;gap:6px;align-items:center;" role="tablist">
              ${MODE_TABS.map(
      (m, i) => `<button type="button" data-ws-mode="${m}" aria-pressed="${i === 0 ? "true" : "false"}" style="${css.mode(i === 0)}">${m}</button>`
    ).join("")}
            </div>

            <div data-ws-ref-slot aria-label="\u53C2\u8003\u56FE">
              <div style="display:flex;align-items:center;gap:8px;">
                <span style="${css.paramLabel}">\u53C2\u8003\u56FE</span>
                <span data-ws-ref-hint style="font-size:11px;color:${T.fg3};">\u4E0A\u4F20 / \u62D6\u62FD / \u7C98\u8D34\u53C2\u8003\u56FE</span>
                <span style="flex:1"></span>
                <button type="button" data-ws-ref-upload style="${css.pill({ size: "11px", fill: T.module })}">\u4E0A\u4F20</button>
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
                  <button type="button" data-ws-action="templates" style="padding:0 10px;height:24px;border:1px solid ${T.focus};border-radius:999px;background:${T.hover};color:${T.focus};cursor:pointer;font:inherit;font-size:11px;font-weight:600;">${PROMPT_ACTIONS.templates}</button>
                  <button type="button" data-ws-action="enhance" style="padding:0 9px;height:24px;border:1px solid ${T.border2};border-radius:999px;background:${T.module};color:${T.fg2};cursor:pointer;font:inherit;font-size:11px;">${PROMPT_ACTIONS.enhance}</button>
                </div>
                <textarea data-ws-prompt rows="2" placeholder="\u63CF\u8FF0\u4F60\u60F3\u751F\u6210\u7684\u753B\u9762" style="resize:vertical;min-height:56px;padding:6px 8px;border-radius:8px;border:1px solid ${T.border2};background:${T.input};color:inherit;font:inherit;line-height:1.45;font-size:12.5px;"></textarea>
              </div>
              <details data-ws-neg-details>
                <summary>
                  <span data-ws-neg-chev aria-hidden="true">\u25B8</span>
                  <span>${PROMPT_FIELDS.negative}</span>
                  <button type="button" data-ws-clear-negative style="margin-left:auto;padding:1px 7px;border:0;border-radius:4px;background:${T.active};color:${T.fg2};cursor:pointer;font:inherit;font-size:10.5px;">${PROMPT_FIELDS.clearNegative}</button>
                </summary>
                <textarea data-ws-negative rows="1" placeholder="\u4E0D\u60F3\u51FA\u73B0\u7684\u5143\u7D20\uFF08\u53EF\u9009\uFF09" style="width:100%;resize:vertical;padding:5px 8px;border-radius:7px;border:1px solid ${T.border2};background:${T.input};color:inherit;font:inherit;font-size:12px;"></textarea>
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
              <input data-ws-param="model" placeholder="\u9009\u62E9\u6A21\u578B" style="padding:0 10px;height:28px;border-radius:14px;border:1px solid ${T.border2};background:${T.input};color:${T.fg};font:inherit;font-size:12px;" />
              <label style="display:inline-flex;align-items:center;gap:6px;font-size:11.5px;color:${T.fg2};cursor:pointer;user-select:none;margin:0;">
                <input type="checkbox" data-ws-compare style="accent-color:${T.focus};" />
                ${COMPARE}
              </label>
            </div>

            <div data-ws-skill-model-row>
              <label>
                <span style="${css.paramLabel}">${PROMPT_ACTIONS.skill}</span>
                <select data-ws-param="skill" aria-label="${PROMPT_ACTIONS.skill}" style="${css.select}">
                  <option value="">\uFF08\u4E0D\u4F7F\u7528\uFF09</option>
                  ${SKILL_ENTRIES.map((s) => `<option value="${s}">${s}</option>`).join("")}
                </select>
              </label>
            </div>

            <div data-ws-plan-panel>
              <div style="${css.paramLabel}">\u521B\u4F5C\u65B9\u6848</div>
              <textarea data-ws-plan-text rows="2" placeholder="\u9009 Skill \u540E\u70B9\u300C\u60F3\u65B9\u6848\u300D\uFF1B\u4E5F\u53EF\u624B\u5199" style="width:100%;resize:vertical;min-height:48px;padding:6px 8px;border-radius:8px;border:1px solid ${T.border2};background:${T.input};color:inherit;font:inherit;font-size:12.5px;line-height:1.45;"></textarea>
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

        <div data-ws-pane-drag="chat" title="\u62D6\u62FD\u8C03\u6574\u7ED3\u679C/\u5BF9\u8BDD\u680F\u5BBD\u5EA6"></div>
        <!-- RIGHT: \u751F\u6210\u7ED3\u679C landing (replaces empty \u7075\u611F as primary) -->
        <aside data-ws-inspire-wall style="width:${state.paneWidths.chat}px;flex-shrink:0;border-left:1px solid ${T.border2};padding:8px;display:flex;flex-direction:column;gap:8px;background:${T.bg};overflow:hidden;min-height:0;">
          <div data-ws-stage aria-label="${STAGE_LABEL2}">
            <div data-ws-stage-head>
              <strong>${STAGE_LABEL2}</strong>
            </div>
            <div data-ws-stage-empty>
              <strong data-ws-stage-empty-title>${STAGE_EMPTY_TITLE}</strong>
              <span data-ws-stage-empty-hint>${STAGE_EMPTY_HINT2}</span>
            </div>
            <div data-ws-progress>
              <div data-ws-progress-meta>
                <span data-ws-progress-label>\u7B49\u5F85\u5BBF\u4E3B\u8FDB\u5EA6</span>
                <span data-ws-progress-elapsed>\u8017\u65F6 0s</span>
                <span data-ws-progress-phase style="color:${T.fg3};"></span>
                <span style="flex:1"></span>
                <button type="button" data-ws-cancel style="${css.pill()}">${RESULT_ACTIONS[0]}</button>
              </div>
              <div data-ws-progress-bar><i></i></div>
            </div>
            <div data-ws-fail>
              <div data-ws-fail-reason>\u539F\u56E0\uFF1A\u51FA\u56FE\u5931\u8D25</div>
              <button type="button" data-ws-retry style="align-self:flex-start;${css.pill({ pad: "4px 12px", size: "12px", fill: T.active, color: T.fg })}">${RESULT_ACTIONS[1]}</button>
            </div>
            <div data-ws-stage-samples hidden></div>
            <div data-ws-results hidden></div>
            <div data-ws-result-actions>
              ${RESULT_ACTIONS.filter((a) => a !== "\u53D6\u6D88" && a !== "\u91CD\u8BD5").map((a) => {
      const unwired = a === "\u52A0\u753B\u5ECA" || UNWIRED_RESULT_ACTIONS.has(a);
      return `<button type="button" data-ws-result-action="${a}"${unwired ? ' data-ws-unwired title="\u672A\u63A5\u7EBF"' : ""}>${a}</button>`;
    }).join("")}
            </div>
          </div>
        </aside>
        <aside data-ws-col="chat" style="width:${state.paneWidths.chat}px;flex-shrink:0;border-left:1px solid ${T.border2};padding:8px;display:none;flex-direction:column;background:${T.bg};">
          <strong style="font-size:13px;color:${T.fg};">${COLUMNS.chat}</strong>
          <p style="margin:8px 0 0;font-size:12px;color:${T.fg3};">\u5BF9\u8BDD\u7EBF\u7A0B\uFF08\u53EF\u5185\u8054\u51FA\u56FE\uFF09</p>
        </aside>
      </div>
    `;
    host.appendChild(frame);
    host.querySelector("[data-ws-mode-toggle]")?.addEventListener("click", (e) => {
      e.stopPropagation();
      const menu = host.querySelector("[data-ws-mode-menu]");
      const toggle = host.querySelector("[data-ws-mode-toggle]");
      if (!(menu instanceof HTMLElement) || !(toggle instanceof HTMLElement)) return;
      const open2 = menu.hidden;
      menu.hidden = !open2;
      toggle.setAttribute("aria-expanded", open2 ? "true" : "false");
    });
    host.querySelectorAll("[data-ws-mode-menu] [data-ws-top]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        setTopTab(btn.getAttribute("data-ws-top") || IMAGE_PAGE);
      });
    });
    const closeModeMenu = (e) => {
      const sw = host?.querySelector("[data-ws-mode-switch]");
      if (!(sw instanceof HTMLElement)) return;
      if (e.target instanceof Node && sw.contains(e.target)) return;
      const menu = host.querySelector("[data-ws-mode-menu]");
      const toggle = host.querySelector("[data-ws-mode-toggle]");
      if (menu instanceof HTMLElement) menu.hidden = true;
      if (toggle instanceof HTMLElement) toggle.setAttribute("aria-expanded", "false");
    };
    document.addEventListener("click", closeModeMenu);
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
        setStatus(state.mode === MODE_IMG2 ? "\u5DF2\u5207\u6362\u5230\u56FE\u751F\u56FE" : "\u5DF2\u5207\u6362\u5230\u6587\u751F\u56FE");
      });
    });
    const applySkillSideEffects = (id) => {
      if (id === "\u4E09\u8054\u5C01\u9762") state.ratio = "3:4";
      if (id === "\u7535\u5F71\u6D77\u62A5") state.ratio = "9:16";
      if (id === "\u7535\u5F71\u4E09\u8054") state.ratio = "21:9";
    };
    const onSkillSelect = (e) => {
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
      setStatus(id ? `\u5DF2\u9009\u300C${id}\u300D` : "\u5DF2\u53D6\u6D88 Skill");
    };
    const skillSelEl = host.querySelector('[data-ws-param="skill"]');
    skillSelEl?.addEventListener("change", onSkillSelect);
    skillSelEl?.addEventListener("input", onSkillSelect);
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
      persistHistory();
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
    host.querySelector('[data-ws-action="enhance"]')?.addEventListener("click", async () => {
      const prompt = String(state.prompt || "").trim();
      if (!prompt) {
        setStatus("\u8BF7\u5148\u8F93\u5165\u63D0\u793A\u8BCD\u518D\u589E\u5F3A");
        return;
      }
      const rpc = getRpc?.();
      if (!rpc || typeof rpc.call !== "function") {
        setStatus("ENHANCE_NOT_CONFIGURED");
        return;
      }
      setStatus(`${PROMPT_ACTIONS.enhance}\u4E2D\u2026`);
      try {
        const result = await rpc.call("/dsh-ws", "enhancePrompt", {
          prompt,
          ratio: state.ratio,
          clarity: state.clarity,
          modelId: state.modelId
        });
        if (result?.ok && result.value?.prompt) {
          state.prompt = String(result.value.prompt);
          syncFields();
          setStatus(`${PROMPT_ACTIONS.enhance}\u5B8C\u6210`);
        } else {
          const code = result?.error?.code ? String(result.error.code) : "";
          const msg = result?.error?.message ? String(result.error.message) : "\u589E\u5F3A\u5931\u8D25";
          if (code === "ENHANCE_NOT_CONFIGURED") {
            setStatus("ENHANCE_NOT_CONFIGURED");
          } else if (code === "UNKNOWN_ENDPOINT" || code === "HOST_PROXY_NOT_WIRED") {
            setStatus(`\u300C${PROMPT_ACTIONS.enhance}\u300D\u672A\u63A5\u7EBF`);
          } else {
            setStatus(
              code ? `${PROMPT_ACTIONS.enhance}\u5931\u8D25\uFF1A${msg}\uFF08${code}\uFF09` : `${PROMPT_ACTIONS.enhance}\u5931\u8D25\uFF1A${msg}`
            );
          }
        }
      } catch (e) {
        const code = e?.code ? String(e.code) : "";
        if (code === "ENHANCE_NOT_CONFIGURED") setStatus("ENHANCE_NOT_CONFIGURED");
        else setStatus(`${PROMPT_ACTIONS.enhance}\u5931\u8D25\uFF1A${e?.message || e}`);
      }
    });
    host.querySelector('[data-ws-action="templates"]')?.addEventListener("click", () => {
      gifApi?.close?.();
      uiDesignApi?.close?.();
      templateApi?.open?.();
      setStatus(PROMPT_ACTIONS.templates);
    });
    host.querySelector("[data-ws-tool-more-toggle]")?.addEventListener("click", (e) => {
      e.stopPropagation();
      const menu = host.querySelector("[data-ws-tool-more-menu]");
      const toggle = host.querySelector("[data-ws-tool-more-toggle]");
      if (!(menu instanceof HTMLElement) || !(toggle instanceof HTMLElement)) return;
      const openMenu = menu.hidden;
      menu.hidden = !openMenu;
      toggle.setAttribute("aria-expanded", openMenu ? "true" : "false");
    });
    host.querySelectorAll("[data-ws-tool-more-menu] [data-ws-tool]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const name2 = btn.getAttribute("data-ws-tool") || "";
        const menu = host.querySelector("[data-ws-tool-more-menu]");
        const toggle = host.querySelector("[data-ws-tool-more-toggle]");
        if (menu instanceof HTMLElement) menu.hidden = true;
        if (toggle instanceof HTMLElement) toggle.setAttribute("aria-expanded", "false");
        templateApi?.close?.();
        if (name2 === GIF_PAGE || name2 === "GIF") {
          uiDesignApi?.close?.();
          gifApi?.open?.();
        } else if (name2 === UI_DESIGN_PAGE || name2 === "UI \u8BBE\u8BA1") {
          gifApi?.close?.();
          uiDesignApi?.open?.();
        } else if (name2 === "\u53CD\u63A8\u63D0\u793A\u8BCD") {
          host.dispatchEvent(
            new CustomEvent("dsh-ws-reverse-prompt", {
              bubbles: true,
              detail: {
                refImages: Array.isArray(state.refImages) ? state.refImages : [],
                instruction: void 0
              }
            })
          );
        } else {
          setStatus(`\u300C${name2}\u300D\u672A\u63A5\u7EBF`);
        }
      });
    });
    const closeToolMore = (e) => {
      const wrap = host?.querySelector("[data-ws-tool-more]");
      if (!(wrap instanceof HTMLElement)) return;
      if (e.target instanceof Node && wrap.contains(e.target)) return;
      const menu = host.querySelector("[data-ws-tool-more-menu]");
      const toggle = host.querySelector("[data-ws-tool-more-toggle]");
      if (menu instanceof HTMLElement) menu.hidden = true;
      if (toggle instanceof HTMLElement) toggle.setAttribute("aria-expanded", "false");
    };
    document.addEventListener("click", closeToolMore);
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
      if (state.mode !== MODE_IMG2) return;
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
          const skillId = readSkillId();
          if (!skillId) {
            setStatus("\u8BF7\u5148\u9009\u62E9\u521B\u4F5C Skill");
            return;
          }
          applySkillSideEffects?.(skillId);
          paintSkillPlan();
          const ta = host.querySelector("[data-ws-plan-text]");
          if (ta instanceof HTMLTextAreaElement) {
            ta.placeholder = "\u6B63\u5728\u60F3\u65B9\u6848\u2026";
          }
          setStatus("\u60F3\u65B9\u6848\u4E2D\u2026");
          host.dispatchEvent(
            new CustomEvent("dsh-ws-plan", {
              bubbles: true,
              detail: { action, skillId, prompt: state.prompt, skillPlan: state.skillPlan }
            })
          );
        } else if (action === "accept") {
          applySkillPlanToFields(state.skillPlan);
          dispatchGenerate({ fromPlan: true });
        }
      });
    });
    host.querySelector("[data-ws-inspire-wall] [data-ws-cancel]")?.addEventListener("click", () => {
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
    host.querySelector("[data-ws-inspire-wall] [data-ws-retry]")?.addEventListener("click", () => {
      dispatchGenerate({ retry: true });
    });
    host.querySelector("[data-ws-inspire-wall] [data-ws-result-actions]")?.addEventListener("click", (e) => {
      const btn = e.target instanceof Element ? e.target.closest("[data-ws-result-action]") : null;
      if (!btn) return;
      const action = btn.getAttribute("data-ws-result-action") || "";
      const selectedImg = host.querySelector("[data-ws-inspire-wall] [data-ws-results] [data-ws-result-card][data-selected] img[data-ws-result]") || host.querySelector("[data-ws-inspire-wall] [data-ws-results] img[data-ws-result]") || host.querySelector("[data-ws-results] img[data-ws-result]");
      const src = selectedImg instanceof HTMLImageElement ? selectedImg.src : "";
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
          state.mode = MODE_IMG2;
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
      if (action === "\u52A0\u753B\u5ECA") {
        host.dispatchEvent(
          new CustomEvent("dsh-ws-gallery-add", {
            bubbles: true,
            detail: {
              src,
              prompt: state.prompt,
              snapshot: captureParamSnapshot(),
              storagePaths
            }
          })
        );
        return;
      }
      if (UNWIRED_RESULT_ACTIONS.has(action)) {
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
    videoApi?.dispose?.();
    canvasApi?.dispose?.();
    galleryApi?.dispose?.();
    ecomApi?.dispose?.();
    gifApi?.dispose?.();
    uiDesignApi?.dispose?.();
    templateApi?.dispose?.();
    videoApi = mountVideoPage(host, { T, css, paneWidths: state.paneWidths });
    canvasApi = mountCanvasPage(host, { T, css });
    galleryApi = mountGalleryPage(host, { T, css, getRpc });
    ecomApi = mountEcomPage(host, { T, css });
    gifApi = mountGifHost(host, { T, css, setStatus });
    uiDesignApi = mountUiDesignHost(host, { T, css, setStatus });
    templateApi = mountTemplateHost(host, {
      T,
      css,
      setStatus,
      onFillPrompt: (text) => {
        state.prompt = text || "";
        syncFields();
        setStatus("\u5DF2\u4E00\u952E\u56DE\u586B");
        return true;
      }
    });
    const initialTop = state.topTab === VIDEO_PAGE ? VIDEO_PAGE : state.topTab === CANVAS_PAGE ? CANVAS_PAGE : state.topTab === GALLERY_PAGE ? GALLERY_PAGE : state.topTab === ECOM_PAGE ? ECOM_PAGE : IMAGE_PAGE;
    host.setAttribute("data-ws-top-page", initialTop);
    videoApi.setPage(initialTop);
    canvasApi.setPage(initialTop);
    galleryApi.setPage(initialTop);
    ecomApi.setPage(initialTop);
    paintChat();
    syncFields();
    paintStageIdle();
    paintHistoryEmpty();
    hydrateHistoryFromStorage();
    host.dispatchEvent(
      new CustomEvent("dsh-ws-storage-paths-request", { bubbles: true, detail: {} })
    );
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
    /**
     * Host storage.paths seat (dataDir + media/gallery|history|generated).
     * Re-keys local history persist when dataDir becomes known.
     * @param {{ dataDir?: string, generated?: string, gallery?: string, history?: string } | null} paths
     */
    setStoragePaths(paths) {
      ensure();
      const prevKey = historyStorageKey();
      storagePaths = paths && typeof paths === "object" ? { ...paths } : null;
      const nextKey = historyStorageKey();
      if (prevKey !== nextKey) {
        const histEl = host?.querySelector("[data-ws-history-list]");
        if (histEl) histEl.innerHTML = "";
        historyStore.clear();
        activeHistoryId = null;
        hydrateHistoryFromStorage();
      }
    },
    /** @param {boolean} on */
    setConnected(on) {
      ensure();
      paintConnStatus(!!on);
    },
    getHostEl() {
      return host;
    },
    /** Honest video failure — never invent success; status text verbatim (e.g. VIDEO_NOT_CONFIGURED) */
    paintVideoStubFailure(message) {
      ensure();
      videoApi?.showStubFailure?.(message || "VIDEO_NOT_CONFIGURED");
    },
    /** Live video.async results */
    paintVideoResult(value) {
      ensure();
      videoApi?.paintVideoResult?.(value);
    },
    setVideoProgress(value) {
      ensure();
      videoApi?.setVideoProgress?.(value);
    },
    /** Fill 普通生图 prompt from reversePrompt RPC */
    applyReversedPrompt(text) {
      ensure();
      state.prompt = String(text || "");
      syncFields();
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
     * Paint generate RPC result into right-column stage + history thumbs.
     * Accepts phase progress / failed / done payloads.
     * @param {{ jobId?: string, phase?: string, status?: string, progress?: number, elapsedMs?: number, error?: string, results?: Array<{ url?: string, localPath?: string, kind?: string }> }} value
     */
    paintGenerateResult(value) {
      ensure();
      applyGenerateResult(value);
    },
    /**
     * Apply host planSkill result to 方案卡 (display only; never locks CTA).
     * @param {any} plan
     */
    paintSkillPlanResult(plan) {
      ensure();
      state.skillPlan = plan;
      const ta = host?.querySelector("[data-ws-plan-text]");
      if (ta instanceof HTMLTextAreaElement) {
        ta.value = formatPlanCard(plan);
        ta.placeholder = "\u65B9\u6848\u53EF\u6539\uFF1B\u70B9\u300C\u5C31\u8FD9\u6837\u51FA\u56FE\u300D\u586B\u5165\u63D0\u793A\u8BCD";
      }
      paintSkillPlan();
      const scoreNote = plan && typeof plan === "object" && plan.score ? `\u81EA\u68C0 ${plan.score.total ?? ""}\uFF08\u4E0D\u9501\u51FA\u56FE\uFF09` : "\u65B9\u6848\u5DF2\u5C31\u7EEA";
      setStatus(scoreNote);
    },
    /** Fill prompt/negative/ratio from current skillPlan without generating. */
    applySkillPlanToPrompt() {
      ensure();
      applySkillPlanToFields(state.skillPlan);
      setStatus("\u5DF2\u5C06\u65B9\u6848\u586B\u5165\u63D0\u793A\u8BCD\uFF08\u53EF\u518D\u6539\uFF09");
    },
    dispose() {
      stopProgressClock();
      videoApi?.dispose?.();
      videoApi = null;
      canvasApi?.dispose?.();
      canvasApi = null;
      galleryApi?.dispose?.();
      galleryApi = null;
      ecomApi?.dispose?.();
      ecomApi = null;
      gifApi?.dispose?.();
      gifApi = null;
      uiDesignApi?.dispose?.();
      uiDesignApi = null;
      templateApi?.dispose?.();
      templateApi = null;
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
function escapeHtml7(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

// src/shared/ns.js
var SETTINGS_NAMESPACE = "dsh-image-workstation";
var PLUGIN_ENTRY_ID = "imagegen-\u751F\u56FE\u5DE5\u4F5C\u53F0";

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
  const [videoBaseUrl, setVideoBaseUrl] = useState("");
  const [videoApiKeyDraft, setVideoApiKeyDraft] = useState("");
  const [videoProvider, setVideoProvider] = useState("video.async");
  const [videoDefaultModel, setVideoDefaultModel] = useState("");
  const [videoKeyConfigured, setVideoKeyConfigured] = useState(false);
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
      setProvider(["anthropic-compat", "gptimg", "openai-images"].includes(v.mediaProvider) ? v.mediaProvider : "anthropic-compat");
      setAllowAgent(v.allowAgentImageGeneration !== false);
      setVideoBaseUrl(String(v.videoBaseUrl || ""));
      setVideoProvider(String(v.videoProvider || "").trim() || "video.async");
      setVideoDefaultModel(String(v.videoDefaultModel || ""));
      const secrets = snap.secrets || {};
      const secretMeta = secrets.mediaApiKey;
      const keySet = secretMeta === true || secretMeta?.set === true || typeof secretMeta === "object" && secretMeta != null && "set" in secretMeta && secretMeta.set;
      setKeyConfigured(Boolean(keySet));
      const videoSecretMeta = secrets.videoApiKey;
      const videoKeySet = videoSecretMeta === true || videoSecretMeta?.set === true || typeof videoSecretMeta === "object" && videoSecretMeta != null && "set" in videoSecretMeta && videoSecretMeta.set;
      setVideoKeyConfigured(Boolean(videoKeySet));
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
        { op: "set", path: ["allowAgentImageGeneration"], value: allowAgent },
        { op: "set", path: ["videoBaseUrl"], value: videoBaseUrl.trim() },
        { op: "set", path: ["videoProvider"], value: videoProvider.trim() || "video.async" },
        { op: "set", path: ["videoDefaultModel"], value: videoDefaultModel.trim() }
      ];
      if (apiKeyDraft.trim()) {
        ops.push({ op: "set", path: ["mediaApiKey"], value: apiKeyDraft.trim() });
      }
      if (videoApiKeyDraft.trim()) {
        ops.push({ op: "set", path: ["videoApiKey"], value: videoApiKeyDraft.trim() });
      }
      if (typeof scope.mutate === "function") {
        await scope.mutate(ops, revision);
      } else {
        for (const op of ops) await scope.set(op.path[0], op.value);
      }
      setApiKeyDraft("");
      setVideoApiKeyDraft("");
      if (apiKeyDraft.trim()) setKeyConfigured(true);
      if (videoApiKeyDraft.trim()) setVideoKeyConfigured(true);
      setStatus("Saved (keys stored on host only)");
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
  const layer2 = "var(--dsw-alias-bg-layer-2, #f3f4f6)";
  const layer3 = "var(--dsw-alias-bg-layer-3, #fff)";
  const fieldStyle = { display: "flex", flexDirection: "column", gap: 4, marginBottom: 8, fontSize: 12 };
  const inputStyle = {
    padding: "6px 8px",
    borderRadius: 6,
    border,
    background: inputBg,
    color: fg,
    font: "inherit",
    fontSize: 12
  };
  const btnBase = {
    padding: "0 12px",
    height: 36,
    borderRadius: 16,
    font: "inherit",
    fontSize: 13,
    lineHeight: "20px"
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
    border: "0.5px solid var(--dsw-alias-border-l3)",
    background: "var(--dsw-alias-bg-layer-2)",
    color: "var(--dsw-alias-label-dimmed)",
    cursor: "not-allowed",
    opacity: 0.4,
    pointerEvents: "none",
    filter: "grayscale(1)"
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
        borderRadius: 10,
        background: "transparent",
        color: fg,
        marginBottom: 8,
        overflow: "hidden",
        font: "12px/1.4 system-ui,sans-serif"
      }
    },
    h(
      "button",
      {
        type: "button",
        onClick: () => setOpen((v) => !v),
        title: `${NS} \xB7 ${ENTRY}`,
        style: {
          width: "100%",
          textAlign: "left",
          padding: "8px 10px",
          border: 0,
          background: "transparent",
          color: "inherit",
          cursor: "pointer",
          font: "inherit"
        }
      },
      h(
        "span",
        { style: { fontWeight: 650, fontSize: 13, lineHeight: "18px" } },
        "Image workstation"
      )
    ),
    open ? h(
      "div",
      {
        style: {
          display: "flex",
          flexDirection: "column",
          maxHeight: "min(52vh, 420px)"
        }
      },
      h(
        "div",
        {
          style: {
            padding: "0 10px",
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
              { style: { color: fgMuted, fontSize: 11 } },
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
            h("option", { value: "anthropic-compat" }, "Primary \u2014 grok-imagine (alibb)"),
            h("option", { value: "gptimg" }, "GPTIMG \u2014 gpt-image-2 (birdsun)"),
            h("option", { value: "openai-images" }, "openai-images (custom URL)")
          )
        ),
        h(
          "label",
          {
            style: {
              display: "flex",
              alignItems: "center",
              gap: 6,
              marginBottom: 8,
              fontSize: 12
            }
          },
          h("input", {
            type: "checkbox",
            checked: allowAgent,
            onChange: (e) => setAllowAgent(e.target.checked),
            disabled: busy
          }),
          h("span", { style: { color: fg } }, "Allow agent")
        ),
        h(
          "div",
          {
            style: {
              margin: "4px 0 8px",
              paddingTop: 8,
              borderTop: border,
              color: fgSecondary,
              fontWeight: 650,
              fontSize: 12
            }
          },
          "Video"
        ),
        h(
          "label",
          { style: fieldStyle },
          h("span", { style: { color: fgSecondary, fontWeight: 500 } }, "Video API base URL"),
          h("input", {
            style: inputStyle,
            value: videoBaseUrl,
            placeholder: "Video base URL (video.async)",
            onChange: (e) => setVideoBaseUrl(e.target.value),
            disabled: busy
          })
        ),
        h(
          "label",
          { style: fieldStyle },
          h(
            "span",
            { style: { display: "flex", justifyContent: "space-between" } },
            h("span", { style: { color: fgSecondary, fontWeight: 500 } }, "Video API key"),
            h(
              "span",
              { style: { color: fgMuted, fontSize: 11 } },
              videoKeyConfigured ? "Configured" : "Not configured"
            )
          ),
          h("input", {
            style: inputStyle,
            type: "password",
            autoComplete: "new-password",
            value: videoApiKeyDraft,
            placeholder: videoKeyConfigured ? "Leave blank to keep stored key" : "Paste key, then Save",
            onChange: (e) => setVideoApiKeyDraft(e.target.value),
            disabled: busy
          })
        ),
        h(
          "label",
          { style: fieldStyle },
          h("span", { style: { color: fgSecondary, fontWeight: 500 } }, "Video provider"),
          h("input", {
            style: inputStyle,
            value: videoProvider,
            placeholder: "video.async",
            onChange: (e) => setVideoProvider(e.target.value),
            disabled: busy
          })
        ),
        h(
          "label",
          { style: fieldStyle },
          h("span", { style: { color: fgSecondary, fontWeight: 500 } }, "Video model"),
          h("input", {
            style: inputStyle,
            value: videoDefaultModel,
            placeholder: "e.g. grok-imagine-video",
            onChange: (e) => setVideoDefaultModel(e.target.value),
            disabled: busy
          })
        ),
        status ? h("p", { style: { margin: "0 0 6px", fontSize: 11, color: fgMuted } }, status) : null,
        models.length ? h(
          "ul",
          {
            style: {
              margin: "0 0 6px",
              paddingLeft: 16,
              fontSize: 11,
              color: fgSecondary,
              maxHeight: 72,
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
            padding: "8px 10px",
            borderTop: border,
            flexShrink: 0
          }
        },
        h(
          "div",
          {
            style: {
              display: "flex",
              flexWrap: "wrap",
              gap: 6
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
        ),
        !canDetect ? h(
          "p",
          {
            style: {
              margin: "6px 0 0",
              fontSize: 10,
              color: fgMuted
            }
          },
          "Needs URL + key."
        ) : null
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
var HOST_GENERATE_TIMEOUT_MS = 3e5;
var CLIENT_GENERATE_TIMEOUT_MS = 31e4;
var CLIENT_VIDEO_TIMEOUT_MS = 63e4;
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
var CTA_RPC_CHANNEL2 = "/dsh-ws";
var CTA_RPC_GENERATE = "generate";
var CTA_RPC_VIDEO_GENERATE = "videoGenerate";
var CTA_RPC_REVERSE_PROMPT = "reversePrompt";
var CTA_RPC_ENHANCE_PROMPT = "enhancePrompt";
var CTA_RPC_STORAGE_PATHS2 = "storage.paths";
var CTA_RPC_GALLERY_ADD = "gallery.add";
var SKILL_RPC_CHANNEL = "/dsh-ws-skill";
var SKILL_RPC_PLAN = "plan";
function apply(ctx, _config) {
  ctx.logger?.info?.(
    `[dsh-image-workstation] client \u2014 sidebar\u300C\u751F\u56FE\u300D+ CTA\u2192${CTA_RPC_CHANNEL2}/${CTA_RPC_GENERATE}`
  );
  const studio = createStudioHost({
    getRpc: () => ctx.connection?.rpc
  });
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
        CTA_RPC_CHANNEL2,
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
    let videoInflight = false;
    let videoAbort = null;
    const onVideoGenerate = async (ev) => {
      const detail = ev?.detail && typeof ev.detail === "object" ? ev.detail : {};
      const paintFail = (msg) => {
        const status = String(msg || "VIDEO_NOT_CONFIGURED");
        studio.paintVideoStubFailure?.(status);
        studio.setStatus?.(status);
      };
      const statusFromError = (error) => {
        const code = error?.code ? String(error.code) : "";
        if (code === "VIDEO_NOT_CONFIGURED") return "VIDEO_NOT_CONFIGURED";
        if (code === "VIDEO_STUB_NOT_WIRED") return "VIDEO_STUB_NOT_WIRED";
        if (code === "UNKNOWN_ENDPOINT" || code === "HOST_PROXY_NOT_WIRED") {
          return "VIDEO_NOT_CONFIGURED";
        }
        if (code) {
          const msg = scrubErrorMessage(error?.message || code);
          return msg.includes(code) ? msg : `${code}: ${msg}`;
        }
        return scrubErrorMessage(error?.message || "VIDEO_GENERATE_FAILED");
      };
      if (videoInflight) {
        studio.setStatus?.("\u5DF2\u6709\u89C6\u9891\u4EFB\u52A1\u8FDB\u884C\u4E2D\u2026");
        return;
      }
      if (!String(detail.prompt || "").trim()) {
        paintFail("\u8BF7\u5148\u8F93\u5165\u63D0\u793A\u8BCD");
        return;
      }
      const rpc = ctx.connection?.rpc;
      if (!rpc || typeof rpc.call !== "function") {
        paintFail("VIDEO_NOT_CONFIGURED");
        return;
      }
      videoInflight = true;
      const ac = new AbortController();
      videoAbort = ac;
      const started = Date.now();
      studio.setVideoProgress?.({ status: "running", phase: "submitted", elapsedMs: 0 });
      studio.setStatus?.("\u7B49\u5F85\u5BBF\u4E3B\u8FDB\u5EA6\u2026");
      const timer = setTimeout(() => ac.abort(), CLIENT_VIDEO_TIMEOUT_MS);
      try {
        const result = await rpc.call(
          CTA_RPC_CHANNEL2,
          CTA_RPC_VIDEO_GENERATE,
          {
            prompt: detail.prompt,
            mode: detail.mode,
            duration: detail.duration,
            clarity: detail.clarity,
            ratio: detail.ratio,
            modelId: detail.modelId,
            firstFrame: detail.firstFrame,
            lastFrame: detail.lastFrame
          },
          ac.signal
        );
        if (result?.ok) {
          studio.paintVideoResult?.({
            ...result.value || {},
            phase: result.value?.phase || "done",
            elapsedMs: Date.now() - started
          });
        } else {
          paintFail(statusFromError(result?.error || {}));
        }
      } catch (e) {
        if (ac.signal.aborted) {
          studio.paintVideoResult?.({ phase: "cancelled", elapsedMs: Date.now() - started });
          studio.setStatus?.("\u5DF2\u53D6\u6D88");
        } else {
          const code = e?.code ? String(e.code) : "";
          paintFail(
            code === "VIDEO_NOT_CONFIGURED" || code === "VIDEO_STUB_NOT_WIRED" ? code : statusFromError({ code, message: e?.message || e })
          );
        }
      } finally {
        clearTimeout(timer);
        videoInflight = false;
        videoAbort = null;
      }
    };
    const onVideoCancel = () => {
      if (videoAbort) {
        try {
          videoAbort.abort();
        } catch (_) {
        }
        studio.setStatus?.("\u5DF2\u53D6\u6D88");
      }
    };
    const onReversePrompt = async (ev) => {
      const detail = ev?.detail && typeof ev.detail === "object" ? ev.detail : {};
      const rpc = ctx.connection?.rpc;
      if (!rpc || typeof rpc.call !== "function") {
        studio.setStatus?.("VISION_NOT_CONFIGURED");
        return;
      }
      const imageUrl = detail.imageUrl || detail.dataUrl || Array.isArray(detail.refImages) && detail.refImages[0] && (detail.refImages[0].url || detail.refImages[0].dataUrl) || "";
      if (!imageUrl) {
        studio.setStatus?.("\u8BF7\u5148\u4E0A\u4F20\u53C2\u8003\u56FE\u518D\u53CD\u63A8");
        return;
      }
      studio.setStatus?.("\u53CD\u63A8\u4E2D\u2026");
      try {
        const result = await rpc.call(CTA_RPC_CHANNEL2, CTA_RPC_REVERSE_PROMPT, {
          imageUrl,
          dataUrl: detail.dataUrl,
          refImages: detail.refImages,
          instruction: detail.instruction
        });
        if (result?.ok && result.value?.prompt) {
          studio.applyReversedPrompt?.(String(result.value.prompt));
          studio.setStatus?.("\u53CD\u63A8\u5B8C\u6210");
        } else {
          const code = result?.error?.code ? String(result.error.code) : "";
          if (code === "VISION_NOT_CONFIGURED") {
            studio.setStatus?.("VISION_NOT_CONFIGURED");
          } else if (code === "UNKNOWN_ENDPOINT" || code === "HOST_PROXY_NOT_WIRED") {
            studio.setStatus?.("\u300C\u53CD\u63A8\u63D0\u793A\u8BCD\u300D\u672A\u63A5\u7EBF");
          } else {
            const msg = scrubErrorMessage(result?.error?.message || "\u53CD\u63A8\u5931\u8D25");
            studio.setStatus?.(code ? `${code}: ${msg}` : msg);
          }
        }
      } catch (e) {
        const code = e?.code ? String(e.code) : "";
        if (code === "VISION_NOT_CONFIGURED") studio.setStatus?.("VISION_NOT_CONFIGURED");
        else studio.setStatus?.(formatClientRpcFailure(e));
      }
    };
    document.addEventListener("dsh-ws-generate", onGenerate);
    document.addEventListener("dsh-ws-cancel", onCancel);
    document.addEventListener("dsh-ws-video-generate", onVideoGenerate);
    document.addEventListener("dsh-ws-video-cancel", onVideoCancel);
    document.addEventListener("dsh-ws-reverse-prompt", onReversePrompt);
    disposers.push(() => document.removeEventListener("dsh-ws-generate", onGenerate));
    const onStoragePathsRequest = async () => {
      const rpc = ctx.connection?.rpc;
      if (!rpc || typeof rpc.call !== "function") return;
      try {
        const result = await rpc.call(CTA_RPC_CHANNEL2, CTA_RPC_STORAGE_PATHS2, {});
        if (result?.ok && result.value && typeof result.value === "object") {
          studio.setStoragePaths?.(result.value);
        }
      } catch (_) {
      }
    };
    document.addEventListener("dsh-ws-storage-paths-request", onStoragePathsRequest);
    disposers.push(() => document.removeEventListener("dsh-ws-storage-paths-request", onStoragePathsRequest));
    try {
      onStoragePathsRequest();
    } catch (_) {
    }
    const onGalleryAdd = async (ev) => {
      const detail = ev?.detail && typeof ev.detail === "object" ? ev.detail : {};
      const src = detail.src || "";
      if (!src) {
        studio.setStatus?.("\u65E0\u56FE\u53EF\u52A0\u753B\u5ECA");
        return;
      }
      const rpc = ctx.connection?.rpc;
      if (!rpc || typeof rpc.call !== "function") {
        studio.setStatus?.("\u300C\u52A0\u753B\u5ECA\u300D\u672A\u63A5\u7EBF");
        return;
      }
      try {
        const paths = await rpc.call(CTA_RPC_CHANNEL2, CTA_RPC_STORAGE_PATHS2, {});
        if (!paths?.ok || !paths?.value?.gallery) {
          studio.setStatus?.("\u300C\u52A0\u753B\u5ECA\u300D\u672A\u63A5\u7EBF");
          return;
        }
        const result = await rpc.call(CTA_RPC_CHANNEL2, CTA_RPC_GALLERY_ADD, {
          src,
          prompt: detail.prompt || "",
          snapshot: detail.snapshot || null,
          galleryRel: paths.value.gallery,
          dataDir: paths.value.dataDir
        });
        if (result?.ok) {
          studio.setStatus?.("\u5DF2\u52A0\u5165\u753B\u5ECA");
          return;
        }
        const code = result?.error?.code || "";
        studio.setStatus?.(
          code === "UNKNOWN_ENDPOINT" || code === "HOST_PROXY_NOT_WIRED" ? "\u300C\u52A0\u753B\u5ECA\u300D\u672A\u63A5\u7EBF" : scrubErrorMessage(result?.error?.message || "\u300C\u52A0\u753B\u5ECA\u300D\u672A\u63A5\u7EBF")
        );
      } catch (e) {
        const code = e?.code || "";
        const msg = formatClientRpcFailure(e);
        studio.setStatus?.(
          code === "UNKNOWN_ENDPOINT" || /unknown/i.test(String(msg)) ? "\u300C\u52A0\u753B\u5ECA\u300D\u672A\u63A5\u7EBF" : msg || "\u300C\u52A0\u753B\u5ECA\u300D\u672A\u63A5\u7EBF"
        );
      }
    };
    document.addEventListener("dsh-ws-gallery-add", onGalleryAdd);
    disposers.push(() => document.removeEventListener("dsh-ws-gallery-add", onGalleryAdd));
    const onPlan = async (ev) => {
      const detail = ev?.detail && typeof ev.detail === "object" ? ev.detail : {};
      const skillId = detail.skillId;
      if (!skillId) {
        studio.setStatus?.("\u8BF7\u5148\u9009\u62E9\u521B\u4F5C Skill");
        return;
      }
      const rpc = ctx.connection?.rpc;
      if (!rpc || typeof rpc.call !== "function") {
        studio.setStatus?.("\u8FDE\u63A5\u4E0D\u53EF\u7528\uFF0C\u65E0\u6CD5\u60F3\u65B9\u6848");
        return;
      }
      studio.setStatus?.("\u60F3\u65B9\u6848\u4E2D\u2026");
      try {
        const result = await rpc.call(SKILL_RPC_CHANNEL, SKILL_RPC_PLAN, {
          skillId,
          brief: detail.prompt || "",
          prompt: detail.prompt || ""
        });
        if (result?.ok) {
          studio.paintSkillPlanResult?.(result.value);
        } else {
          const msg = scrubErrorMessage(result?.error?.message || "\u60F3\u65B9\u6848\u5931\u8D25");
          studio.setStatus?.(msg);
        }
      } catch (e) {
        studio.setStatus?.(formatClientRpcFailure(e));
      }
    };
    document.addEventListener("dsh-ws-plan", onPlan);
    disposers.push(() => document.removeEventListener("dsh-ws-plan", onPlan));
    disposers.push(() => document.removeEventListener("dsh-ws-cancel", onCancel));
    disposers.push(() => document.removeEventListener("dsh-ws-video-generate", onVideoGenerate));
    disposers.push(() => document.removeEventListener("dsh-ws-video-cancel", onVideoCancel));
    disposers.push(() => document.removeEventListener("dsh-ws-reverse-prompt", onReversePrompt));
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
