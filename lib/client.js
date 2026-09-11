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
  model: "\u6A21\u578B"
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
  model: "\u6A21\u578B"
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
function createStudioHost() {
  let host;
  let open = false;
  let state = defaultStudioState();
  const paintChat = () => {
    const chat = host?.querySelector('[data-ws-col="chat"]');
    const toggle = host?.querySelector("[data-ws-chat-toggle]");
    if (!chat || !toggle) return;
    chat.style.display = state.chatCollapsed ? "none" : "block";
    toggle.textContent = state.chatCollapsed ? CHROME.expandChat : "\u6536\u8D77\u5BF9\u8BDD";
  };
  const syncFields = () => {
    const promptEl = host?.querySelector("[data-ws-prompt]");
    const negEl = host?.querySelector("[data-ws-negative]");
    if (promptEl instanceof HTMLTextAreaElement) promptEl.value = state.prompt;
    if (negEl instanceof HTMLTextAreaElement) negEl.value = state.negativePrompt;
    const ratio = host?.querySelector('[data-ws-param="ratio"]');
    const clarity = host?.querySelector('[data-ws-param="clarity"]');
    const count = host?.querySelector('[data-ws-param="count"]');
    if (ratio instanceof HTMLSelectElement) ratio.value = state.ratio;
    if (clarity instanceof HTMLSelectElement) clarity.value = state.clarity;
    if (count instanceof HTMLSelectElement) count.value = String(state.count);
    host?.querySelectorAll("[data-ws-skill]").forEach((btn) => {
      const on = btn.getAttribute("data-ws-skill") === state.skillId;
      btn.style.background = on ? "#333" : "transparent";
      btn.setAttribute("aria-pressed", on ? "true" : "false");
    });
  };
  const setStatus = (text) => {
    const status = host?.querySelector("[data-ws-status]");
    if (status) status.textContent = text;
  };
  const ensure = () => {
    if (host) return host;
    state = defaultStudioState();
    host = document.createElement("div");
    host.dataset.dshWsStudioHost = "";
    host.setAttribute("role", "main");
    host.setAttribute("aria-label", "\u751F\u56FE");
    host.style.cssText = "display:none;position:fixed;inset:0 0 0 56px;z-index:40;background:var(--dsh-bg, #111);color:var(--dsh-fg, #eee);flex-direction:column;";
    host.innerHTML = `
      <header style="display:flex;gap:8px;padding:10px 16px;border-bottom:1px solid #333;align-items:center;">
        ${TOP_TABS.map((t, i) => `<button type="button" data-ws-top="${t}" style="padding:6px 10px;border:0;background:${i === 0 ? "#333" : "transparent"};color:inherit;cursor:pointer;border-radius:6px;">${t}</button>`).join("")}
        <span style="flex:1"></span>
        <button type="button" data-ws-chat-toggle style="padding:6px 10px;border:0;background:transparent;color:inherit;cursor:pointer;">${CHROME.expandChat}</button>
        <button type="button" data-ws-close style="padding:6px 10px;border:0;background:transparent;color:inherit;cursor:pointer;">\u5173\u95ED</button>
      </header>
      <div style="display:flex;flex:1;min-height:0;">
        <aside data-ws-col="history" style="width:${state.paneWidths.history}px;border-right:1px solid #333;padding:12px;overflow:auto;">
          <strong>${COLUMNS.history}</strong>
          <div data-ws-history-list style="display:flex;flex-direction:column;gap:8px;margin-top:8px;"></div>
        </aside>
        <section data-ws-col="studio" style="flex:1;padding:12px;overflow:auto;display:flex;flex-direction:column;gap:12px;">
          <strong>${COLUMNS.studio}</strong>
          <div style="display:flex;gap:8px;">
            ${MODE_TABS.map((m, i) => `<button type="button" data-ws-mode="${m}" style="padding:4px 10px;border:1px solid #444;border-radius:6px;background:${i === 0 ? "#333" : "transparent"};color:inherit;cursor:pointer;">${m}</button>`).join("")}
          </div>
          <label style="display:flex;flex-direction:column;gap:4px;font-size:12px;">
            <span>${PROMPT_FIELDS.prompt}</span>
            <textarea data-ws-prompt rows="4" placeholder="\u5199\u4E00\u53E5\u60F3\u6CD5\u5373\u53EF\u51FA\u56FE\uFF0C\u4E0D\u5FC5\u9009 Skill" style="resize:vertical;padding:8px;border-radius:8px;border:1px solid #444;background:#1a1a1a;color:inherit;font:inherit;"></textarea>
          </label>
          <div style="display:flex;flex-wrap:wrap;gap:8px;">
            <button type="button" data-ws-action="enhance" style="padding:4px 10px;border:1px solid #444;border-radius:6px;background:transparent;color:inherit;cursor:pointer;font:inherit;">${PROMPT_ACTIONS.enhance}</button>
            <button type="button" data-ws-action="templates" style="padding:4px 10px;border:1px solid #444;border-radius:6px;background:transparent;color:inherit;cursor:pointer;font:inherit;">${PROMPT_ACTIONS.templates}</button>
            <button type="button" data-ws-action="skill" style="padding:4px 10px;border:1px solid #444;border-radius:6px;background:transparent;color:inherit;cursor:pointer;font:inherit;">${PROMPT_ACTIONS.skill}</button>
          </div>
          <label style="display:flex;flex-direction:column;gap:4px;font-size:12px;">
            <span style="display:flex;align-items:center;gap:8px;">
              ${PROMPT_FIELDS.negative}
              <button type="button" data-ws-clear-negative style="margin-left:auto;padding:2px 8px;border:0;border-radius:4px;background:#333;color:inherit;cursor:pointer;font:inherit;">${PROMPT_FIELDS.clearNegative}</button>
            </span>
            <textarea data-ws-negative rows="2" placeholder="Skill \u9884\u586B\u8D1F\u9762\u8BCD\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC\uFF0C\u53EF\u6539\u53EF\u6E05" style="resize:vertical;padding:8px;border-radius:8px;border:1px solid #444;background:#1a1a1a;color:inherit;font:inherit;"></textarea>
          </label>
          <div data-ws-skill-row style="display:flex;flex-wrap:wrap;gap:6px;">
            ${SKILL_ENTRIES.map((s) => `<button type="button" data-ws-skill="${s}" aria-pressed="false" style="padding:4px 8px;border:1px solid #444;border-radius:6px;background:transparent;color:inherit;cursor:pointer;font:inherit;font-size:12px;">${s}</button>`).join("")}
          </div>
          <div data-ws-param-row style="display:flex;flex-wrap:wrap;gap:12px;align-items:end;">
            <label style="display:flex;flex-direction:column;gap:4px;font-size:12px;">
              <span>${PARAM_LABELS.ratio}</span>
              <select data-ws-param="ratio" style="padding:4px 8px;border-radius:6px;border:1px solid #444;background:#1a1a1a;color:inherit;font:inherit;">
                ${RATIOS.map((r) => `<option value="${r}">${r}</option>`).join("")}
              </select>
            </label>
            <label style="display:flex;flex-direction:column;gap:4px;font-size:12px;">
              <span>${PARAM_LABELS.clarity}</span>
              <select data-ws-param="clarity" style="padding:4px 8px;border-radius:6px;border:1px solid #444;background:#1a1a1a;color:inherit;font:inherit;">
                ${CLARITY.map((c) => `<option value="${c}">${c}</option>`).join("")}
              </select>
            </label>
            <label style="display:flex;flex-direction:column;gap:4px;font-size:12px;">
              <span>${PARAM_LABELS.count}</span>
              <select data-ws-param="count" style="padding:4px 8px;border-radius:6px;border:1px solid #444;background:#1a1a1a;color:inherit;font:inherit;">
                ${COUNTS.map((n) => `<option value="${n}">${n}</option>`).join("")}
              </select>
            </label>
            <label style="display:flex;flex-direction:column;gap:4px;font-size:12px;">
              <span>${PARAM_LABELS.detail}</span>
              <input data-ws-param="detail" value="\u81EA\u52A8" style="padding:4px 8px;border-radius:6px;border:1px solid #444;background:#1a1a1a;color:inherit;font:inherit;width:6rem;" />
            </label>
            <label style="display:flex;flex-direction:column;gap:4px;font-size:12px;">
              <span>${PARAM_LABELS.model}</span>
              <input data-ws-param="model" placeholder="\u672A\u914D\u7F6E\u6E20\u9053" style="padding:4px 8px;border-radius:6px;border:1px solid #444;background:#1a1a1a;color:inherit;font:inherit;width:10rem;" />
            </label>
          </div>
          <div style="display:flex;gap:8px;align-items:center;">
            <button type="button" data-ws-cta style="align-self:flex-start;padding:8px 16px;border:0;border-radius:8px;background:#3b82f6;color:#fff;cursor:pointer;font:inherit;">${CTA}</button>
            <button type="button" data-ws-empty="inspiration" style="padding:6px 10px;border:1px solid #444;border-radius:6px;background:transparent;color:inherit;cursor:pointer;font:inherit;font-size:12px;">${EMPTY.inspiration}</button>
            <button type="button" data-ws-empty="shuffle" style="padding:6px 10px;border:1px solid #444;border-radius:6px;background:transparent;color:inherit;cursor:pointer;font:inherit;font-size:12px;">${EMPTY.shuffle}</button>
          </div>
          <p data-ws-status style="opacity:.7;font-size:12px;min-height:1.2em;"></p>
          <div data-ws-results style="display:flex;flex-wrap:wrap;gap:8px;min-height:4rem;"></div>
          <p style="opacity:.5;font-size:11px;">CTA\u2192RPC\u2192mediaProxy\uFF1B\u4E0D\u9009 Skill \u4E5F\u53EF\u70B9\u300C${CTA}\u300D\uFF1B\u8BC4\u5206\u4E0D\u9501\u51FA\u56FE\uFF1B\u4E09\u8054\u5C01\u9762\u2260\u7535\u5F71\u6D77\u62A5</p>
        </section>
        <aside data-ws-col="chat" style="width:${state.paneWidths.chat}px;border-left:1px solid #333;padding:12px;display:none;">
          <strong>${COLUMNS.chat}</strong>
        </aside>
      </div>
    `;
    host.querySelector("[data-ws-close]")?.addEventListener("click", () => api.close());
    host.querySelector("[data-ws-chat-toggle]")?.addEventListener("click", () => {
      state.chatCollapsed = !state.chatCollapsed;
      paintChat();
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
        host.querySelectorAll("[data-ws-mode]").forEach((b) => {
          b.style.background = b === btn ? "#333" : "transparent";
        });
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
    host.querySelector('[data-ws-param="ratio"]')?.addEventListener("change", (e) => {
      const t = (
        /** @type {HTMLSelectElement} */
        e.target
      );
      state.ratio = t.value;
    });
    host.querySelector('[data-ws-param="clarity"]')?.addEventListener("change", (e) => {
      const t = (
        /** @type {HTMLSelectElement} */
        e.target
      );
      state.clarity = t.value;
    });
    host.querySelector('[data-ws-param="count"]')?.addEventListener("change", (e) => {
      const t = (
        /** @type {HTMLSelectElement} */
        e.target
      );
      state.count = Number(t.value) || 1;
    });
    host.querySelector('[data-ws-param="detail"]')?.addEventListener("input", (e) => {
      const t = (
        /** @type {HTMLInputElement} */
        e.target
      );
      state.detail = t.value;
    });
    host.querySelector('[data-ws-param="model"]')?.addEventListener("input", (e) => {
      const t = (
        /** @type {HTMLInputElement} */
        e.target
      );
      state.modelId = t.value;
    });
    host.querySelector('[data-ws-action="enhance"]')?.addEventListener("click", () => {
      setStatus(`\u5DF2\u8BF7\u6C42\u300C${PROMPT_ACTIONS.enhance}\u300D\uFF08stub\uFF1B\u672A\u6539\u5199\u539F\u6587\uFF09`);
    });
    host.querySelector('[data-ws-action="templates"]')?.addEventListener("click", () => {
      setStatus(`\u300C${PROMPT_ACTIONS.templates}\u300D\u672A\u63A5\u7EBF`);
    });
    host.querySelector('[data-ws-action="skill"]')?.addEventListener("click", () => {
      setStatus(`\u300C${PROMPT_ACTIONS.skill}\u300D\u2014 \u4E0B\u65B9\u516D\u5165\u53E3\u53EF\u9009\uFF1B\u4E09\u8054\u5C01\u9762\u2260\u7535\u5F71\u6D77\u62A5`);
    });
    host.querySelector('[data-ws-empty="inspiration"]')?.addEventListener("click", () => {
      state.prompt = "\u4E00\u53EA\u5728\u7A97\u53F0\u6652\u592A\u9633\u7684\u732B";
      syncFields();
      setStatus(`\u5DF2\u586B\u5165${EMPTY.inspiration}`);
    });
    host.querySelector('[data-ws-empty="shuffle"]')?.addEventListener("click", () => {
      const samples = ["\u96E8\u591C\u9713\u8679\u8857\u9053", "\u5C71\u95F4\u4E91\u6D77\u65E5\u51FA", "21:9 \u8D70\u5ECA\u5BF9\u5CD9\u955C\u5934", "\u81EA\u7136\u5149\u7A97\u8FB9\u4EBA\u50CF"];
      state.prompt = samples[Math.floor(Math.random() * samples.length)];
      syncFields();
      setStatus(`\u5DF2${EMPTY.shuffle}`);
    });
    const cta = host.querySelector("[data-ws-cta]");
    if (cta instanceof HTMLButtonElement) {
      cta.disabled = false;
      cta.removeAttribute("disabled");
    }
    cta?.addEventListener("click", () => {
      const skillNote = state.skillId ? `skill=${state.skillId}` : "\u65E0 Skill";
      setStatus(
        `\u5DF2\u89E6\u53D1\u300C${CTA}\u300D\uFF08${skillNote}\uFF1B\u63D0\u793A\u8BCD ${state.prompt.length} \u5B57\uFF1B\u8D1F\u9762\u8BCD ${state.negativePrompt.length} \u5B57\uFF1B${state.ratio}/${state.clarity}/\xD7${state.count}\uFF09\u2014 \u5DF2\u53D1 dsh-ws-generate \u2192 /dsh-ws/generate`
      );
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
            // selfCheck never gates
            selfCheck: state.selfCheck
          }
        })
      );
    });
    document.body.appendChild(host);
    paintChat();
    syncFields();
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
     * Paint generate RPC result into studio result area + history.
     * @param {{ jobId?: string, phase?: string, results?: Array<{ url?: string, localPath?: string, kind?: string }> }} value
     */
    paintGenerateResult(value) {
      ensure();
      const results = Array.isArray(value?.results) ? value.results : [];
      const resultsEl = host?.querySelector("[data-ws-results]");
      const histEl = host?.querySelector("[data-ws-history-list]");
      if (resultsEl) {
        resultsEl.innerHTML = "";
        for (const r of results) {
          const src = pickDisplayUrl(r);
          const card = document.createElement("div");
          card.dataset.wsResultCard = "";
          card.style.cssText = "border:1px solid #444;border-radius:8px;padding:6px;background:#1a1a1a;max-width:280px;";
          if (src) {
            const img = document.createElement("img");
            img.src = src;
            img.alt = "\u751F\u6210\u7ED3\u679C";
            img.dataset.wsResult = "";
            img.style.cssText = "display:block;max-width:100%;border-radius:6px;";
            card.appendChild(img);
          } else {
            const note = document.createElement("div");
            note.style.cssText = "font-size:11px;opacity:.8;word-break:break-all;";
            note.textContent = r?.url || r?.localPath || "\u65E0\u53EF\u7528\u9884\u89C8 URL";
            card.appendChild(note);
          }
          resultsEl.appendChild(card);
        }
        if (!results.length) resultsEl.textContent = "\u65E0\u7ED3\u679C";
      }
      if (histEl && results.length) {
        const item = document.createElement("button");
        item.type = "button";
        item.dataset.wsHistoryItem = value?.jobId || "";
        item.style.cssText = "text-align:left;padding:6px;border:1px solid #444;border-radius:6px;background:#1a1a1a;color:inherit;cursor:pointer;font:inherit;font-size:11px;";
        const thumb = pickDisplayUrl(results[0]);
        if (thumb) {
          const img = document.createElement("img");
          img.src = thumb;
          img.alt = "";
          img.style.cssText = "width:100%;border-radius:4px;display:block;margin-bottom:4px;";
          item.appendChild(img);
        }
        const span = document.createElement("span");
        span.textContent = (state.prompt || "").slice(0, 40) || "(\u65E0\u63D0\u793A\u8BCD)";
        item.appendChild(span);
        item.addEventListener("click", () => {
          api.paintGenerateResult(value);
          setStatus("\u5DF2\u4ECE\u5386\u53F2\u8F7D\u5165\u7ED3\u679C");
        });
        histEl.insertBefore(item, histEl.firstChild);
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
      studio.setStatus("connection.rpc \u4E0D\u53EF\u7528 \u2014 \u65E0\u6CD5\u5230\u8FBE host mediaProxy");
      return;
    }
    inflight = true;
    studio.setStatus("\u51FA\u56FE\u4E2D\u2026\uFF08RPC \u2192 host mediaProxy.generate\uFF09");
    try {
      const result = await rpc.call(CTA_RPC_CHANNEL, CTA_RPC_GENERATE, {
        prompt: detail.prompt,
        negativePrompt: detail.negativePrompt,
        mode: detail.mode,
        skillId: detail.skillId,
        ratio: detail.ratio,
        clarity: detail.clarity,
        count: detail.count,
        detail: detail.detail,
        modelId: detail.modelId
      });
      if (result?.ok) {
        studio.paintGenerateResult(result.value || {});
      } else {
        const err = result?.error || {};
        studio.setStatus(
          `\u51FA\u56FE\u5931\u8D25\uFF1A${err.message || "unknown"}${err.code ? `\uFF08${err.code}\uFF09` : ""}`
        );
      }
    } catch (e) {
      studio.setStatus(`\u51FA\u56FE RPC \u5931\u8D25\uFF1A${e?.message || e}`);
    } finally {
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
