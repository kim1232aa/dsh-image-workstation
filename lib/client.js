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
var HISTORY_ACTIONS = Object.freeze({ clear: "\u6E05\u7A7A" });
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
  expandChat: "AI \u5BF9\u8BDD"
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
  skillId: null,
  // null = 普通生图，不挡 CTA
  skillPlan: null,
  selfCheck: null
  // scores display-only — never disable CTA
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
var INSPIRATION_SAMPLES = Object.freeze([
  "\u96E8\u591C\u9713\u8679\u8857\u9053",
  "\u5C71\u95F4\u4E91\u6D77\u65E5\u51FA",
  "21:9 \u8D70\u5ECA\u5BF9\u5CD9\u955C\u5934",
  "\u81EA\u7136\u5149\u7A97\u8FB9\u4EBA\u50CF",
  "\u96FE\u4E2D\u53E4\u5BFA\u77F3\u9636",
  "\u8D5B\u535A\u591C\u5E02\u5C0F\u5403\u644A",
  "\u6C99\u6F20\u516C\u8DEF\u9EC4\u660F",
  "\u6C34\u9762\u5012\u5F71\u57CE\u5E02\u5929\u9645\u7EBF"
]);
var DETAIL_OPTS = Object.freeze(["\u81EA\u52A8", "\u6807\u51C6", "\u9AD8\u6E05"]);
var RESULT_EMPTY_ZH = "\u751F\u6210\u7ED3\u679C\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC";
function svgThumb(c1, c2, c3, motif = "city") {
  const shapes = motif === "sun" ? `<circle cx="48" cy="22" r="12" fill="${c3}" opacity=".65"/><path d="M0 54 Q18 38 36 52 T72 48 V72 H0Z" fill="${c3}" opacity=".38"/>` : motif === "fog" ? `<path d="M0 38 Q24 24 48 40 T72 36 V72 H0Z" fill="${c3}" opacity=".42"/><rect x="24" y="12" width="14" height="40" rx="3" fill="${c3}" opacity=".5"/>` : motif === "market" ? `<rect x="8" y="30" width="18" height="30" fill="${c3}" opacity=".42"/><rect x="32" y="20" width="16" height="40" fill="${c3}" opacity=".55"/><rect x="54" y="36" width="14" height="24" fill="${c3}" opacity=".38"/>` : motif === "desert" ? `<path d="M0 46 Q22 30 44 46 T72 42 V72 H0Z" fill="${c3}" opacity=".48"/><circle cx="56" cy="18" r="10" fill="${c3}" opacity=".58"/>` : motif === "water" ? `<path d="M0 32 Q14 24 28 32 T56 30 T72 36 V72 H0Z" fill="${c3}" opacity=".42"/><path d="M0 48 Q20 40 40 48 T72 46 V72 H0Z" fill="${c3}" opacity=".28"/>` : motif === "portrait" ? `<circle cx="36" cy="24" r="13" fill="${c3}" opacity=".55"/><ellipse cx="36" cy="54" rx="20" ry="16" fill="${c3}" opacity=".4"/>` : `<rect x="6" y="24" width="14" height="40" fill="${c3}" opacity=".4"/><rect x="24" y="12" width="16" height="52" fill="${c3}" opacity=".52"/><rect x="46" y="30" width="20" height="34" fill="${c3}" opacity=".42"/>`;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${c1}"/><stop offset="100%" stop-color="${c2}"/></linearGradient><filter id="n"><feTurbulence type="fractalNoise" baseFrequency=".55" numOctaves="2" stitchTiles="stitch"/><feColorMatrix type="saturate" values="0"/><feComponentTransfer><feFuncA type="table" tableValues="0 .06"/></feComponentTransfer></filter></defs><rect width="72" height="72" fill="url(#g)"/>${shapes}<rect width="72" height="72" filter="url(#n)" opacity=".7"/></svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
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
var HISTORY_GHOSTS = Object.freeze([
  {
    prompt: "\u96E8\u591C\u9713\u8679\u8857\u9053\uFF0C\u6F6E\u6E7F\u67CF\u6CB9\u5012\u5F71",
    meta: "\u6587\u751F\u56FE \xB7 1:1",
    seed: "hist-night",
    src: svgThumb("#141820", "#1a222e", "#4a5568", "city")
  },
  {
    prompt: "\u5C71\u95F4\u4E91\u6D77\u65E5\u51FA\uFF0C\u91D1\u8272\u8F6E\u5ED3\u5149",
    meta: "\u6587\u751F\u56FE \xB7 16:9",
    seed: "hist-mountain",
    src: svgThumb("#1a2228", "#2a3438", "#8a8070", "sun")
  },
  {
    prompt: "\u96FE\u4E2D\u53E4\u5BFA\u77F3\u9636\uFF0C\u9752\u82D4\u4E0E\u706F\u7B3C",
    meta: "\u56FE\u751F\u56FE \xB7 3:4",
    seed: "hist-fogtemple",
    src: svgThumb("#161a18", "#222824", "#5a6858", "fog")
  },
  {
    prompt: "\u8D5B\u535A\u591C\u5E02\u5C0F\u5403\u644A\uFF0C\u84B8\u6C7D\u5347\u817E",
    meta: "\u6587\u751F\u56FE \xB7 21:9",
    seed: "hist-nightmarket",
    src: svgThumb("#18141c", "#221c28", "#6a5a48", "market")
  }
]);
var INSPIRE_SEEDS = Object.freeze([
  "night",
  "mountain",
  "corridor",
  "portrait",
  "fogtemple",
  "nightmarket",
  "desert",
  "skyline"
]);
var BRAND = "#5b8def";
var css = {
  mode: (on) => `padding:5px 14px;border:1px solid ${on ? "#3a4558" : "#2a3140"};border-radius:999px;background:${on ? "#1c2333" : "transparent"};color:${on ? "#fff" : "#9aa3b2"};cursor:pointer;font:inherit;`,
  field: "padding:6px 8px;border-radius:8px;border:1px solid #2a3140;background:#10141c;color:inherit;font:inherit;",
  select: "padding:5px 8px;border-radius:6px;border:1px solid #2a3140;background:#10141c;color:#c5cad3;font:inherit;font-size:12px;min-height:30px;",
  /** VisioWork .card — layered section chrome */
  card: "display:flex;flex-direction:column;gap:10px;padding:12px;background:#12161f;border:1px solid #1f2430;border-radius:12px;flex:none;",
  paramLabel: "font-size:12px;font-weight:600;color:#9aa3b2;white-space:nowrap;",
  /** VisioWork .generateButton primary — solid white on dark, clearly enabled */
  cta: `width:100%;min-height:42px;padding:10px 14px;border:0;border-radius:10px;background:#ffffff;color:#0b0d10;cursor:pointer;font:inherit;font-weight:700;font-size:14px;letter-spacing:.02em;display:inline-flex;align-items:center;justify-content:center;box-shadow:0 1px 0 rgba(255,255,255,.2), 0 4px 16px rgba(0,0,0,.35);`
};
var HOST_STYLES = `
[data-dsh-ws-studio-host] *,
[data-dsh-ws-studio-host] *::before,
[data-dsh-ws-studio-host] *::after { box-sizing: border-box; }
[data-dsh-ws-studio-host] [data-ws-history-item] {
  display:flex; gap:10px; align-items:stretch;
  padding:8px; border:1px solid #1f2430; border-radius:10px;
  background:#12161f; flex:none; cursor:pointer; font:inherit; color:inherit; text-align:left;
  transition: border-color .12s ease;
}
[data-dsh-ws-studio-host] [data-ws-history-item]:hover { border-color:#2a3140; }
[data-dsh-ws-studio-host] [data-ws-history-item][data-active] { border-color:${BRAND}; }
[data-dsh-ws-studio-host] [data-ws-history-ghost] {
  display:flex; gap:10px; align-items:stretch;
  padding:8px; border:1px solid #1f2430; border-radius:10px;
  background:#12161f; opacity:.92; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-history-ghost] img,
[data-dsh-ws-studio-host] [data-ws-history-item] img {
  width:72px; height:72px; border-radius:8px; object-fit:cover; flex:none; background:#0b0d10;
  image-rendering:auto;
}
[data-dsh-ws-studio-host] [data-ws-inspire-card] {
  position:relative; display:flex; flex-direction:column; justify-content:flex-end;
  aspect-ratio:1/1; min-height:0; padding:0; overflow:hidden;
  border:1px solid #1f2430; border-radius:12px; background:#12161f;
  color:#c5cad3; cursor:pointer; font:inherit; text-align:left;
  transition: transform .15s ease, border-color .15s ease, box-shadow .15s ease;
}
[data-dsh-ws-studio-host] [data-ws-inspire-card]:hover {
  border-color:${BRAND}; transform:translateY(-2px);
  box-shadow:0 6px 18px rgba(0,0,0,.28);
}
[data-dsh-ws-studio-host] [data-ws-param-row] {
  display:flex; flex-wrap:wrap; align-items:center; gap:10px 14px;
}
[data-dsh-ws-studio-host] [data-ws-param-row] label {
  display:inline-flex; align-items:center; gap:6px; min-width:0;
}
[data-dsh-ws-studio-host] [data-ws-param-row] select {
  min-width:4.5rem; max-width:9rem;
}
[data-dsh-ws-studio-host] [data-ws-neg-details] > summary {
  cursor:pointer; list-style:none; display:flex; align-items:center; gap:8px;
  color:#9aa3b2; font-size:12px; font-weight:600; user-select:none;
}
[data-dsh-ws-studio-host] [data-ws-neg-details] > summary::-webkit-details-marker { display:none; }
[data-dsh-ws-studio-host] [data-ws-neg-details][open] > summary { margin-bottom:6px; }
[data-dsh-ws-studio-host] [data-ws-cta]:hover { filter:brightness(1.06); }
[data-dsh-ws-studio-host] [data-ws-cta]:active { filter:brightness(.96); }
[data-dsh-ws-studio-host] [data-ws-status]:empty { display:none; }
[data-dsh-ws-studio-host] [data-ws-param="model"]::placeholder { color:#6b7280; opacity:1; }
[data-dsh-ws-studio-host] [data-ws-param="model"] { color:#c5cad3; }
[data-dsh-ws-studio-host] [data-ws-cta-footer] {
  flex:none; position:sticky; bottom:0; z-index:2;
  padding:10px 16px 14px; background:#0f1218; border-top:1px solid #1f2430;
  display:flex; flex-direction:column; gap:8px;
}
[data-dsh-ws-studio-host] [data-ws-studio-scroll] {
  flex:1; min-height:0; overflow:auto; padding:14px 16px 16px;
  display:flex; flex-direction:column; gap:12px;
}
[data-dsh-ws-studio-host] [data-ws-inspire-card] img {
  position:absolute; inset:0; width:100%; height:100%; object-fit:cover;
  background:#12161f;
}
`;
function createStudioHost() {
  let host;
  let open = false;
  let state = defaultStudioState();
  let inspirationShown = [...INSPIRATION_SAMPLES];
  let activeHistoryId = null;
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
  const paintChips = () => {
    if (!host) return;
    host.querySelectorAll('[data-ws-param="ratio"]').forEach((el) => {
      if (!(el instanceof HTMLButtonElement)) return;
      const v = el.getAttribute("data-ws-value") || "";
      el.style.cssText = css.chip(v === state.ratio);
      el.setAttribute("aria-pressed", v === state.ratio ? "true" : "false");
    });
    host.querySelectorAll('[data-ws-param="clarity"]').forEach((el) => {
      if (!(el instanceof HTMLButtonElement)) return;
      const v = el.getAttribute("data-ws-value") || "";
      el.style.cssText = css.chip(v === state.clarity);
      el.setAttribute("aria-pressed", v === state.clarity ? "true" : "false");
    });
    host.querySelectorAll('[data-ws-param="count"]').forEach((el) => {
      if (!(el instanceof HTMLButtonElement)) return;
      const v = el.getAttribute("data-ws-value") || "";
      el.style.cssText = css.chip(v === String(state.count));
      el.setAttribute("aria-pressed", v === String(state.count) ? "true" : "false");
    });
    host.querySelectorAll('[data-ws-param="detail"]').forEach((el) => {
      if (!(el instanceof HTMLButtonElement)) return;
      const v = el.getAttribute("data-ws-value") || "";
      el.style.cssText = css.chip(v === state.detail);
      el.setAttribute("aria-pressed", v === state.detail ? "true" : "false");
    });
    host.querySelectorAll("[data-ws-skill]").forEach((btn) => {
      const on = btn.getAttribute("data-ws-skill") === state.skillId;
      btn.style.cssText = css.skill(on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
    host.querySelectorAll("[data-ws-mode]").forEach((btn) => {
      const on = btn.getAttribute("data-ws-mode") === state.mode;
      btn.style.cssText = css.mode(on);
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
    const cmp = host.querySelector("[data-ws-compare]");
    if (cmp instanceof HTMLInputElement) cmp.checked = !!state.compareModels;
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
    paintChips();
  };
  const setStatus = (text) => {
    const status = host?.querySelector("[data-ws-status]");
    if (status) status.textContent = text;
  };
  const paintResultEmpty = () => {
    const resultsEl = host?.querySelector("[data-ws-results]");
    if (!resultsEl) return;
    resultsEl.innerHTML = "";
    resultsEl.style.cssText = "display:flex;align-items:center;justify-content:center;width:100%;min-height:48px;color:#6b7280;font-size:12px;";
    resultsEl.textContent = RESULT_EMPTY_ZH;
  };
  const paintInspiration = () => {
    const grid = host?.querySelector("[data-ws-inspire-grid]");
    if (!grid) return;
    grid.innerHTML = "";
    inspirationShown.forEach((sample, idx) => {
      const card = document.createElement("button");
      card.type = "button";
      card.dataset.wsEmpty = "inspiration";
      card.dataset.wsInspire = sample;
      card.dataset.wsInspireCard = "";
      const seed = INSPIRE_SEEDS[idx % INSPIRE_SEEDS.length];
      const fallback = inspireFallbackSvg(idx);
      const picsum = `https://picsum.photos/seed/${encodeURIComponent(seed)}/300/300`;
      card.innerHTML = `<img src="${picsum}" alt="" loading="lazy" /><span style="position:absolute;inset:0;z-index:1;pointer-events:none;background:linear-gradient(transparent 40%,rgba(0,0,0,.72));" aria-hidden="true"></span><span style="position:relative;z-index:2;margin-top:auto;padding:18px 8px 8px;color:#fff;font-size:11px;line-height:1.35;display:block;font-weight:550;">${escapeHtml(sample)}</span>`;
      const img = card.querySelector("img");
      if (img) {
        img.addEventListener("error", () => {
          if (img.dataset.failed) return;
          img.dataset.failed = "1";
          img.src = fallback;
        });
      }
      card.addEventListener("click", () => {
        state.prompt = sample;
        syncFields();
        setStatus(`\u5DF2\u586B\u5165\u300C${sample}\u300D`);
      });
      grid.appendChild(card);
    });
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
    empty.style.cssText = "display:flex;flex-direction:column;gap:8px;";
    for (const g of HISTORY_GHOSTS) {
      const ghost = document.createElement("div");
      ghost.dataset.wsHistoryGhost = "";
      ghost.innerHTML = `<img src="${g.src}" alt="" width="52" height="52" /><div style="flex:1;min-width:0;display:flex;flex-direction:column;gap:4px;padding-top:2px;"><div style="font-size:12px;line-height:1.4;color:#e8eaed;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${escapeHtml(g.prompt)}</div><div style="font-size:11px;color:#6b7280;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-top:auto;">${escapeHtml(g.meta)}</div></div>`;
      empty.appendChild(ghost);
    }
    const tip = document.createElement("div");
    tip.style.cssText = "padding:4px 2px;color:#6b7280;font-size:11px;text-align:center;";
    tip.textContent = "\u6682\u65E0\u8BB0\u5F55";
    empty.appendChild(tip);
    histEl.appendChild(empty);
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
    state.paneWidths = { ...state.paneWidths, history: 260, chat: 320 };
    inspirationShown = [...INSPIRATION_SAMPLES];
    host = document.createElement("div");
    host.dataset.dshWsStudioHost = "";
    host.setAttribute("role", "main");
    host.setAttribute("aria-label", "\u751F\u56FE");
    host.style.cssText = "display:none;position:fixed;inset:0 0 0 56px;z-index:40;background:#0b0d10;color:#e8eaed;flex-direction:column;font:13px/1.45 system-ui,sans-serif;";
    const styleEl = document.createElement("style");
    styleEl.textContent = HOST_STYLES;
    host.appendChild(styleEl);
    const frame = document.createElement("div");
    frame.style.cssText = "display:flex;flex-direction:column;flex:1;min-height:0;width:100%;";
    frame.innerHTML = `
      <header data-ws-top-bar style="display:flex;gap:4px;padding:8px 14px;border-bottom:1px solid #1f2430;align-items:center;background:#0f1218;flex-shrink:0;">
        ${TOP_TABS.map(
      (t, i) => `<button type="button" data-ws-top="${t}" style="padding:7px 12px;border:0;background:${i === 0 ? "#1c2333" : "transparent"};color:${i === 0 ? "#fff" : "#9aa3b2"};cursor:pointer;border-radius:8px;font:inherit;">${t}</button>`
    ).join("")}
        <span style="flex:1"></span>
        <button type="button" data-ws-chat-toggle style="padding:0 10px;height:26px;border:1px solid #2a3140;border-radius:999px;background:#12161f;color:#c5cad3;cursor:pointer;font:inherit;font-size:12px;">${CHROME.expandChat}</button>
        <button type="button" data-ws-close style="padding:6px 10px;border:0;background:transparent;color:#9aa3b2;cursor:pointer;font:inherit;">\u5173\u95ED</button>
      </header>
      <div style="display:flex;flex:1;min-height:0;">
        <!-- LEFT: \u5386\u53F2\u8BB0\u5F55 \u2014 VisioWork historyItem shape -->
        <aside data-ws-col="history" style="width:${state.paneWidths.history}px;flex-shrink:0;border-right:1px solid #1f2430;padding:12px;overflow:auto;background:#0c0f14;display:flex;flex-direction:column;gap:8px;">
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
          <div data-ws-history-list style="display:flex;flex-direction:column;gap:8px;flex:1;min-height:0;"></div>
          <button type="button" style="align-self:flex-start;padding:2px 8px;border:1px solid #2a3140;border-radius:999px;background:transparent;color:#6b7280;cursor:pointer;font:inherit;font-size:11.5px;">${HISTORY_ACTIONS.clear}</button>
        </aside>

        <!-- CENTER: \u751F\u56FE\u533A \u2014 mode \u2192 prompt \u2192 skill \u2192 params \u2192 model \u2192 sticky CTA -->
        <section data-ws-col="studio" style="flex:1;padding:0;overflow:hidden;display:flex;flex-direction:column;min-width:0;background:#0b0d10;">
          <div data-ws-studio-scroll>
            <div style="display:flex;align-items:center;gap:8px;">
              <strong style="font-size:13px;">${COLUMNS.studio}</strong>
            </div>

            <!-- card: mode -->
            <div style="${css.card}">
              <div style="display:flex;gap:8px;align-items:center;" role="tablist">
                ${MODE_TABS.map(
      (m, i) => `<button type="button" data-ws-mode="${m}" aria-pressed="${i === 0 ? "true" : "false"}" style="${css.mode(i === 0)}">${m}</button>`
    ).join("")}
              </div>
            </div>

            <!-- card: prompt + negative -->
            <div style="${css.card}">
              <div style="display:flex;flex-direction:column;gap:6px;">
                <div style="display:flex;align-items:center;gap:8px;">
                  <span style="${css.paramLabel}">${PROMPT_FIELDS.prompt}</span>
                  <span style="flex:1"></span>
                  <button type="button" data-ws-action="templates" style="padding:0 12px;height:26px;border:1px solid ${BRAND};border-radius:999px;background:rgba(91,141,239,.12);color:${BRAND};cursor:pointer;font:inherit;font-size:12px;font-weight:600;">${PROMPT_ACTIONS.templates}</button>
                  <button type="button" data-ws-action="enhance" style="padding:0 11px;height:26px;border:1px solid #2a3140;border-radius:999px;background:#12161f;color:#9aa3b2;cursor:pointer;font:inherit;font-size:12px;">${PROMPT_ACTIONS.enhance}</button>
                </div>
                <textarea data-ws-prompt rows="3" placeholder="\u5199\u4E00\u53E5\u60F3\u6CD5\u5373\u53EF\u51FA\u56FE\uFF0C\u4E0D\u5FC5\u9009 Skill" style="resize:vertical;min-height:72px;padding:10px 12px;border-radius:10px;border:1px solid #2a3140;background:#0e1218;color:inherit;font:inherit;line-height:1.6;"></textarea>
              </div>
              <div style="display:flex;flex-direction:column;gap:4px;">
                <div style="display:flex;align-items:center;gap:8px;">
                  <span style="${css.paramLabel}">${PROMPT_FIELDS.negative}</span>
                  <button type="button" data-ws-clear-negative style="margin-left:auto;padding:2px 8px;border:0;border-radius:4px;background:#1c2333;color:#c5cad3;cursor:pointer;font:inherit;font-size:11px;">${PROMPT_FIELDS.clearNegative}</button>
                </div>
                <textarea data-ws-negative rows="1" placeholder="Skill \u9884\u586B\u8D1F\u9762\u8BCD\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC\uFF0C\u53EF\u6539\u53EF\u6E05" style="resize:vertical;padding:6px 10px;border-radius:8px;border:1px solid #2a3140;background:#0e1218;color:inherit;font:inherit;"></textarea>
              </div>
            </div>

            <!-- Skill compact scroll row -->
            <div style="${css.card}">
              <div style="display:flex;align-items:center;gap:6px;min-width:0;">
                <button type="button" data-ws-action="skill" style="padding:3px 8px;border:1px solid #2a3140;border-radius:6px;background:transparent;color:#9aa3b2;cursor:pointer;font:inherit;font-size:11px;flex:none;">${PROMPT_ACTIONS.skill}</button>
                <div data-ws-skill-row>
                  ${SKILL_ENTRIES.map(
      (s) => `<button type="button" data-ws-skill="${s}" aria-pressed="false" style="${css.skill(false)}">${s}</button>`
    ).join("")}
                </div>
              </div>
            </div>

            <!-- ratio (scroll) / clarity / count / detail -->
            <div data-ws-param-row style="${css.card}">
              <div style="display:flex;flex-direction:column;gap:6px;">
                <span style="${css.paramLabel}">${PARAM_LABELS.ratio}</span>
                <div data-ws-chip-scroll>
                  ${RATIOS.map(
      (r) => `<button type="button" data-ws-param="ratio" data-ws-value="${r}" aria-pressed="false" style="${css.chip(false)}">${r}</button>`
    ).join("")}
                </div>
              </div>
              <div style="display:flex;flex-direction:column;gap:6px;">
                <span style="${css.paramLabel}">${PARAM_LABELS.clarity}</span>
                <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
                  ${CLARITY.map(
      (c) => `<button type="button" data-ws-param="clarity" data-ws-value="${c}" aria-pressed="false" style="${css.chip(false)}">${c}</button>`
    ).join("")}
                </div>
              </div>
              <div style="display:flex;flex-direction:column;gap:6px;">
                <span style="${css.paramLabel}">${PARAM_LABELS.count} \xB7 ${PARAM_LABELS.detail}</span>
                <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
                  ${COUNTS.map(
      (n) => `<button type="button" data-ws-param="count" data-ws-value="${n}" aria-pressed="false" style="${css.chip(false)}">${n}</button>`
    ).join("")}
                  <span style="width:8px;"></span>
                  ${DETAIL_OPTS.map(
      (d) => `<button type="button" data-ws-param="detail" data-ws-value="${d}" aria-pressed="false" style="${css.chip(false)}">${d}</button>`
    ).join("")}
                </div>
              </div>
            </div>

            <!-- model row quiet (after params, before CTA) -->
            <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;opacity:.92;">
              <span style="${css.paramLabel}">${PARAM_LABELS.model}</span>
              <input data-ws-param="model" placeholder="\u9009\u62E9\u6A21\u578B" style="padding:0 12px;height:32px;border-radius:16px;border:1px solid #2a3140;background:#12161f;color:#c5cad3;font:inherit;width:11rem;font-size:12px;" />
              <label style="display:inline-flex;align-items:center;gap:6px;font-size:12px;color:#9aa3b2;cursor:pointer;user-select:none;">
                <input type="checkbox" data-ws-compare style="accent-color:${BRAND};" />
                ${COMPARE}
              </label>
            </div>

            <!-- Compact result strip -->
            <div data-ws-stage style="max-height:180px;min-height:56px;border:1px solid #1f2430;border-radius:12px;background:#0f1218;padding:8px 10px;overflow:auto;flex-shrink:0;">
              <div data-ws-results></div>
            </div>
          </div>

          <!-- sticky CTA footer \u2014 always in view, after params in reading order -->
          <div data-ws-cta-footer>
            <button type="button" data-ws-cta style="${css.cta}">${CTA}</button>
            <p data-ws-status style="opacity:.65;font-size:12px;min-height:0;margin:0;"></p>
          </div>
        </section>

        <!-- RIGHT: \u7075\u611F\u5899 denser 2\xD74 grid -->
        <aside data-ws-inspire-wall style="width:320px;flex-shrink:0;border-left:1px solid #1f2430;padding:12px;display:flex;flex-direction:column;gap:10px;background:#0c0f14;overflow:auto;">
          <div style="display:flex;align-items:center;gap:8px;">
            <strong style="font-size:13px;font-weight:650;">${EMPTY.inspiration}</strong>
            <span style="flex:1"></span>
            <button type="button" data-ws-empty="shuffle" style="padding:4px 10px;border:1px solid #2a3140;border-radius:6px;background:transparent;color:#c5cad3;cursor:pointer;font:inherit;font-size:12px;">${EMPTY.shuffle}</button>
          </div>
          <div data-ws-inspire-grid style="display:grid;grid-template-columns:1fr 1fr;gap:10px;align-content:start;flex:1;"></div>
        </aside>
        <aside data-ws-col="chat" style="width:${state.paneWidths.chat}px;flex-shrink:0;border-left:1px solid #1f2430;padding:12px;display:none;flex-direction:column;background:#0c0f14;">
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
    });
    host.querySelector("[data-ws-clear-negative]")?.addEventListener("click", () => {
      state.negativePrompt = "";
      syncFields();
      setStatus("\u5DF2\u6E05\u9664\u8D1F\u9762\u8BCD");
    });
    host.querySelectorAll("[data-ws-mode]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.mode = btn.getAttribute("data-ws-mode") || MODE_TABS[0];
        paintChips();
      });
    });
    host.querySelectorAll("[data-ws-skill]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-ws-skill");
        state.skillId = state.skillId === id ? null : id;
        if (state.skillId === "\u4E09\u8054\u5C01\u9762") state.ratio = "3:4";
        if (state.skillId === "\u7535\u5F71\u6D77\u62A5") state.ratio = "9:16";
        if (state.skillId === "\u7535\u5F71\u4E09\u8054") state.ratio = "21:9";
        syncFields();
        setStatus(state.skillId ? `\u5DF2\u9009\u300C${state.skillId}\u300D\uFF08\u53EF\u9009\uFF1B\u51FA\u56FE\u4ECD\u4E0D\u5F3A\u5236\uFF09` : "\u5DF2\u53D6\u6D88 Skill");
      });
    });
    host.querySelectorAll('[data-ws-param="ratio"]').forEach((btn) => {
      btn.addEventListener("click", () => {
        state.ratio = btn.getAttribute("data-ws-value") || RATIOS[0];
        paintChips();
      });
    });
    host.querySelectorAll('[data-ws-param="clarity"]').forEach((btn) => {
      btn.addEventListener("click", () => {
        state.clarity = btn.getAttribute("data-ws-value") || CLARITY[0];
        paintChips();
      });
    });
    host.querySelectorAll('[data-ws-param="count"]').forEach((btn) => {
      btn.addEventListener("click", () => {
        state.count = Number(btn.getAttribute("data-ws-value")) || 1;
        paintChips();
      });
    });
    host.querySelectorAll('[data-ws-param="detail"]').forEach((btn) => {
      btn.addEventListener("click", () => {
        state.detail = btn.getAttribute("data-ws-value") || DETAIL_OPTS[0];
        paintChips();
      });
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
    host.querySelector('[data-ws-action="skill"]')?.addEventListener("click", () => {
      setStatus(`\u300C${PROMPT_ACTIONS.skill}\u300D\u53EF\u9009\uFF1B\u4E09\u8054\u5C01\u9762\u2260\u7535\u5F71\u6D77\u62A5`);
    });
    host.querySelector('[data-ws-empty="shuffle"]')?.addEventListener("click", () => {
      const shuffled = [...INSPIRATION_SAMPLES].sort(() => Math.random() - 0.5);
      inspirationShown = shuffled;
      paintInspiration();
      state.prompt = shuffled[Math.floor(Math.random() * shuffled.length)];
      syncFields();
      setStatus(`\u5DF2${EMPTY.shuffle}`);
    });
    const cta = host.querySelector("[data-ws-cta]");
    if (cta instanceof HTMLButtonElement) {
      cta.disabled = false;
      cta.removeAttribute("disabled");
    }
    cta?.addEventListener("click", () => {
      setStatus("\u51FA\u56FE\u4E2D\u2026");
      host.dispatchEvent(
        new CustomEvent("dsh-ws-generate", {
          bubbles: true,
          detail: {
            prompt: state.prompt,
            negativePrompt: state.negativePrompt,
            mode: state.mode,
            skillId: state.skillId,
            ratio: state.ratio,
            clarity: state.clarity,
            count: state.count,
            detail: state.detail,
            modelId: state.modelId,
            compareModels: !!state.compareModels,
            // selfCheck never gates
            selfCheck: state.selfCheck
          }
        })
      );
    });
    document.body.appendChild(host);
    paintChat();
    syncFields();
    paintInspiration();
    paintHistoryEmpty();
    paintResultEmpty();
    return host;
  };
  const api = {
    open() {
      ensure().style.display = "flex";
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
    },
    /** @param {string} text */
    setStatus(text) {
      ensure();
      setStatus(text);
    },
    getHostEl() {
      return host;
    },
    /**
     * Paint generate RPC result into compact result strip + history thumbs.
     * @param {{ jobId?: string, phase?: string, results?: Array<{ url?: string, localPath?: string, kind?: string }> }} value
     */
    paintGenerateResult(value) {
      ensure();
      const results = Array.isArray(value?.results) ? value.results : [];
      const resultsEl = host?.querySelector("[data-ws-results]");
      const histEl = host?.querySelector("[data-ws-history-list]");
      if (resultsEl) {
        resultsEl.innerHTML = "";
        if (!results.length) {
          paintResultEmpty();
        } else {
          resultsEl.style.cssText = "display:flex;flex-wrap:wrap;gap:8px;width:100%;justify-content:flex-start;align-content:start;";
          for (const r of results) {
            const src = pickDisplayUrl(r);
            const card = document.createElement("div");
            card.dataset.wsResultCard = "";
            card.style.cssText = "border:1px solid #2a3140;border-radius:8px;padding:4px;background:#10141c;max-width:140px;max-height:160px;overflow:hidden;";
            if (src) {
              const img = document.createElement("img");
              img.src = src;
              img.alt = "\u751F\u6210\u7ED3\u679C";
              img.dataset.wsResult = "";
              img.style.cssText = "display:block;max-width:100%;max-height:148px;border-radius:4px;object-fit:cover;";
              card.appendChild(img);
            } else {
              const note = document.createElement("div");
              note.style.cssText = "font-size:11px;opacity:.8;word-break:break-all;padding:4px;";
              note.textContent = r?.url || r?.localPath || "\u65E0\u53EF\u7528\u9884\u89C8";
              card.appendChild(note);
            }
            resultsEl.appendChild(card);
          }
        }
      }
      if (histEl && results.length) {
        histEl.querySelector("[data-ws-history-empty]")?.remove();
        const jobId = value?.jobId || `local-${Date.now()}`;
        const item = document.createElement("button");
        item.type = "button";
        item.dataset.wsHistoryItem = jobId;
        const thumb = pickDisplayUrl(results[0]);
        const promptSnippet = (state.prompt || "").slice(0, 48) || "(\u65E0\u63D0\u793A\u8BCD)";
        const meta = `${state.mode || "\u6587\u751F\u56FE"} \xB7 ${state.modelId || "\u6A21\u578B"} \xB7 ${state.ratio} \xB7 \xD7${results.length}`;
        item.innerHTML = (thumb ? `<img src="${escapeHtml(thumb)}" alt="" width="52" height="52" />` : `<span style="width:52px;height:52px;border-radius:8px;background:#1a2030;flex:none;"></span>`) + `<span style="flex:1;min-width:0;display:flex;flex-direction:column;gap:4px;"><span style="font-size:12px;line-height:1.4;color:#e8eaed;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;">${escapeHtml(promptSnippet)}</span><span style="font-size:11px;color:#6b7280;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${escapeHtml(meta)}</span></span>`;
        item.addEventListener("click", () => {
          markHistoryActive(jobId);
          api.paintGenerateResult(value);
          setStatus("\u5DF2\u4ECE\u5386\u53F2\u8F7D\u5165\u7ED3\u679C");
        });
        histEl.insertBefore(item, histEl.firstChild);
        markHistoryActive(jobId);
      }
      setStatus(
        results.length ? `\u751F\u6210\u5B8C\u6210 \xD7${results.length}${value?.jobId ? ` \xB7 job ${String(value.jobId).slice(0, 8)}` : ""}` : `\u751F\u6210\u5B8C\u6210\u4F46\u65E0\u56FE${value?.phase ? ` (${value.phase})` : ""}`
      );
    },
    dispose() {
      host?.remove();
      host = void 0;
      open = false;
    }
  };
  return api;
}
function pickDisplayUrl(r) {
  const url = r?.url ? String(r.url) : "";
  if (/^https?:\/\//i.test(url)) return url;
  if (url.startsWith("data:")) return url;
  return "";
}
function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
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
var inject = ["slots", "locale", "connection", "sessions", "conversation"];
var CTA_RPC_CHANNEL = "/dsh-ws";
var CTA_RPC_GENERATE = "generate";
function apply(ctx, _config) {
  ctx.logger?.info?.(
    `[dsh-image-workstation] client \u2014 sidebar\u300C\u751F\u56FE\u300D+ CTA\u2192${CTA_RPC_CHANNEL}/${CTA_RPC_GENERATE}`
  );
  const studio = createStudioHost();
  const disposers = [];
  let inflight = false;
  const onGenerate = async (ev) => {
    const detail = ev?.detail && typeof ev.detail === "object" ? ev.detail : {};
    if (inflight) {
      studio.setStatus("\u5DF2\u6709\u51FA\u56FE\u4EFB\u52A1\u8FDB\u884C\u4E2D\u2026");
      return;
    }
    if (!String(detail.prompt || "").trim()) {
      studio.setStatus("\u8BF7\u5148\u8F93\u5165\u63D0\u793A\u8BCD\uFF08\u4E0D\u9009 Skill \u4E5F\u53EF\u51FA\u56FE\uFF09");
      return;
    }
    const rpc = ctx.connection?.rpc;
    if (!rpc || typeof rpc.call !== "function") {
      studio.setStatus("\u8FDE\u63A5\u4E0D\u53EF\u7528\uFF0C\u65E0\u6CD5\u51FA\u56FE");
      return;
    }
    inflight = true;
    studio.setStatus("\u51FA\u56FE\u4E2D\u2026");
    const ac = new AbortController();
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
          ratio: detail.ratio,
          clarity: detail.clarity,
          count: detail.count,
          detail: detail.detail,
          modelId: detail.modelId
        },
        ac.signal
      );
      if (result?.ok) {
        studio.paintGenerateResult(result.value || {});
      } else {
        studio.setStatus(formatHostGenerateError(result?.error || {}));
      }
    } catch (e) {
      studio.setStatus(formatClientRpcFailure(e));
      console.warn("[dsh-image-workstation] CTA RPC failed:", scrubErrorMessage(e?.message || e));
    } finally {
      clearTimeout(timer);
      inflight = false;
    }
  };
  try {
    disposers.push(
      mountSidebarEntry({
        labels: { newSession: "\u65B0\u4F1A\u8BDD", studio: "\u751F\u56FE" },
        onNewSession: () => studio.close(),
        onStudio: () => studio.open()
      })
    );
    document.addEventListener("dsh-ws-generate", onGenerate);
    disposers.push(() => document.removeEventListener("dsh-ws-generate", onGenerate));
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
