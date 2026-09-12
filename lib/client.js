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
  const showStubFailure = (message) => {
    const msg = message || "\u89C6\u9891\u901A\u9053\u672A\u63A5";
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
  cta?.addEventListener("click", () => {
    showStubFailure("\u89C6\u9891\u901A\u9053\u672A\u63A5");
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
    setStatus("\u5DF2\u53D6\u6D88\uFF08\u5BA2\u6237\u7AEF stub\uFF09");
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

// src/client/fixtures/real-gen-01.jpg
var real_gen_01_default = "data:image/jpeg;base64,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";

// src/client/fixtures/real-gen-02.jpg
var real_gen_02_default = "data:image/jpeg;base64,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";

// src/client/demo-local-results.js
var DEMO_LOCAL_RESULT_URLS = Object.freeze([real_gen_01_default, real_gen_02_default]);
var DEMO_LOCAL_STATUS = "\u672C\u5730\u51FA\u56FE\u9884\u89C8\uFF08\u65E2\u6709\u751F\u6210\u6587\u4EF6 \xB7 \u975E\u672C\u6B21 CTA\uFF09";
var DEMO_LOCAL_JOB_ID = "local-demo-prior-gen";

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
  display:flex; gap:8px; align-items:flex-start;
  padding:5px; border:1px solid var(--dsw-alias-border-l2); border-radius:9px;
  background: var(--dsw-alias-bg-module-platform); flex:none; font:inherit; color:inherit; text-align:left;
  transition: border-color .12s ease, background .12s ease;
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
  flex:1; min-width:0; display:flex; flex-direction:column; gap:3px;
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
  display:flex; gap:4px; flex-wrap:wrap; margin-top:2px;
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
  display:grid; grid-template-columns:repeat(auto-fill, minmax(140px, 1fr));
  gap:10px; align-content:start; flex:0 1 auto; min-height:0; max-height:100%;
  overflow:auto; padding:2px 0 4px;
}
[data-dsh-ws-studio-host] [data-ws-results] [data-ws-result-card] {
  border:1px solid var(--dsw-alias-border-l2); border-radius:10px; padding:4px;
  background: var(--dsw-alias-bg-module-platform); overflow:hidden; min-width:0;
  cursor:pointer;
}
[data-dsh-ws-studio-host] [data-ws-results] [data-ws-result-card][data-selected] {
  border-color: var(--dsw-alias-state-business-primary);
  box-shadow: 0 0 0 1px var(--dsw-alias-state-business-primary);
}
[data-dsh-ws-studio-host] [data-ws-results] [data-ws-result-card] img {
  display:block; width:100%; max-height:280px; border-radius:6px; object-fit:cover;
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
  /* Directly under result grid \u2014 never margin-top:auto / column-bottom flex sea */
  display:none; flex-wrap:wrap; gap:6px; padding:4px 0 2px; flex:0 0 auto; margin-top:0;
}
[data-dsh-ws-studio-host] [data-ws-result-actions][data-visible] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-result-actions] button {
  padding:4px 10px; border:1px solid var(--dsw-alias-border-l2); border-radius:999px;
  background: var(--dsw-alias-bg-module-platform); color: var(--dsw-alias-label-secondary);
  cursor:pointer; font:inherit; font-size:11.5px;
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
  let videoApi = null;
  let state = defaultStudioState();
  let activeHistoryId = null;
  const historyStore = /* @__PURE__ */ new Map();
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
    if (name2 === VIDEO_PAGE || name2 === IMAGE_PAGE) {
      videoApi?.setPage(name2);
      setStatus(name2 === VIDEO_PAGE ? "\u89C6\u9891\u751F\u6210" : "\u666E\u901A\u751F\u56FE");
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
    return `<button type="button" data-ws-param="${param}" data-value="${escapeHtml2(val)}" aria-current="${on ? "true" : "false"}" style="${css.chip(on)}">${escapeHtml2(val)}</button>`;
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
  const paintDemoLocalResults = () => {
    ensure();
    const want = Math.max(1, Math.min(Number(state.count) || 1, DEMO_LOCAL_RESULT_URLS.length || 1));
    const urls = DEMO_LOCAL_RESULT_URLS.filter(Boolean).slice(0, want);
    if (!urls.length) {
      try {
        console.info("[dsh-ws] demo local results: no fixtures");
      } catch (_) {
      }
      return;
    }
    applyGenerateResult({
      jobId: DEMO_LOCAL_JOB_ID,
      phase: "done",
      results: urls.map((url) => ({ kind: "image", url }))
    });
    try {
      console.info("[dsh-ws]", DEMO_LOCAL_STATUS);
    } catch (_) {
    }
  };
  const maybePaintDemoFromQuery = () => {
    try {
      if (typeof location === "undefined") return;
      if (/(?:\?|&)wsDemoResults=1(?:&|$)/.test(String(location.search || ""))) {
        paintDemoLocalResults();
      }
    } catch (_) {
    }
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
        item.innerHTML = (thumb ? `<img src="${escapeHtml2(thumb)}" alt="" width="${HIST_THUMB}" height="${HIST_THUMB}" />` : `<span style="width:${HIST_THUMB}px;height:${HIST_THUMB}px;border-radius:7px;background:${T.module};flex:none;"></span>`) + `<div class="ws-hist-meta"><div class="ws-hist-line" title="${escapeHtml2(state.prompt || "\u751F\u6210\u7ED3\u679C")}">${escapeHtml2(line)}</div><div class="ws-hist-model">${escapeHtml2(modelLine)}</div><div class="ws-hist-actions"><button type="button" data-ws-history-restore style="${css.histAction}">${HISTORY_ACTIONS.restore}</button><button type="button" data-ws-history-delete style="${css.histAction}">${HISTORY_ACTIONS.remove}</button></div></div>`;
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
        syncHistoryChrome();
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
          <div data-ws-history-list style="display:flex;flex-direction:column;gap:6px;flex:1;min-height:0;"></div>
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
              <textarea data-ws-plan-text rows="2" placeholder="LLM \u672A\u63A5 \u2014 \u53EF\u624B\u5199\u65B9\u6848\u540E\u70B9\u300C\u5C31\u8FD9\u6837\u51FA\u56FE\u300D" style="width:100%;resize:vertical;min-height:48px;padding:6px 8px;border-radius:8px;border:1px solid ${T.border2};background:${T.input};color:inherit;font:inherit;font-size:12.5px;line-height:1.45;"></textarea>
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
                <span data-ws-progress-label>\u8FDB\u5EA6 0%</span>
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
              ${RESULT_ACTIONS.filter((a) => a !== "\u53D6\u6D88" && a !== "\u91CD\u8BD5").map(
      (a) => `<button type="button" data-ws-result-action="${a}">${a}</button>`
    ).join("")}
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
      setStatus(id ? `\u5DF2\u9009\u300C${id}\u300D` : "\u5DF2\u53D6\u6D88 Skill");
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
    videoApi?.dispose?.();
    videoApi = mountVideoPage(host, { T, css, paneWidths: state.paneWidths });
    videoApi.setPage(state.topTab === VIDEO_PAGE ? VIDEO_PAGE : IMAGE_PAGE);
    paintChat();
    syncFields();
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
      maybePaintDemoFromQuery();
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
    /** Honest video stub failure — never invent success */
    paintVideoStubFailure(message) {
      ensure();
      videoApi?.showStubFailure?.(message || "\u89C6\u9891\u901A\u9053\u672A\u63A5");
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
     * Dev/screenshot: paint prior local gens into right results (not CTA success).
     * Also: ?wsDemoResults=1 or window.__dshWsPaintDemoResults(). No user-visible demo status.
     */
    paintDemoLocalResults() {
      paintDemoLocalResults();
    },
    dispose() {
      stopProgressClock();
      videoApi?.dispose?.();
      videoApi = null;
      host?.remove();
      host = void 0;
      open = false;
      historyStore.clear();
      activeHistoryId = null;
    }
  };
  try {
    if (typeof window !== "undefined") {
      window.__dshWsPaintDemoResults = () => api.paintDemoLocalResults();
    }
  } catch (_) {
  }
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
function escapeHtml2(s) {
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
      setProvider(["anthropic-compat", "gptimg", "openai-images"].includes(v.mediaProvider) ? v.mediaProvider : "anthropic-compat");
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
          maxHeight: "min(44vh, 340px)"
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
    const onVideoGenerate = async (ev) => {
      const detail = ev?.detail && typeof ev.detail === "object" ? ev.detail : {};
      const FAIL = "\u89C6\u9891\u901A\u9053\u672A\u63A5";
      const paintFail = (msg) => {
        studio.paintVideoStubFailure?.(msg || FAIL);
        studio.setStatus?.(msg || FAIL);
      };
      const rpc = ctx.connection?.rpc;
      if (!rpc || typeof rpc.call !== "function") {
        paintFail(FAIL);
        return;
      }
      try {
        const result = await rpc.call(CTA_RPC_CHANNEL, "videoGenerate", {
          prompt: detail.prompt,
          mode: detail.mode,
          duration: detail.duration,
          clarity: detail.clarity,
          ratio: detail.ratio,
          modelId: detail.modelId,
          firstFrame: detail.firstFrame,
          lastFrame: detail.lastFrame
        });
        if (result?.ok && Array.isArray(result?.value?.results) && result.value.results.length) {
          studio.setStatus?.("\u89C6\u9891\u7ED3\u679C\u672A\u63A5 UI");
          return;
        }
        const code = result?.error?.code || "";
        const msg = code === "VIDEO_STUB_NOT_WIRED" || code === "UNKNOWN_ENDPOINT" || !result?.ok ? FAIL : scrubErrorMessage(result?.error?.message || FAIL);
        paintFail(msg);
      } catch (e) {
        const code = e?.code || "";
        paintFail(code === "VIDEO_STUB_NOT_WIRED" ? FAIL : FAIL);
      }
    };
    document.addEventListener("dsh-ws-generate", onGenerate);
    document.addEventListener("dsh-ws-cancel", onCancel);
    document.addEventListener("dsh-ws-video-generate", onVideoGenerate);
    disposers.push(() => document.removeEventListener("dsh-ws-generate", onGenerate));
    disposers.push(() => document.removeEventListener("dsh-ws-cancel", onCancel));
    disposers.push(() => document.removeEventListener("dsh-ws-video-generate", onVideoGenerate));
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
