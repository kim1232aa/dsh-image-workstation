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
          <label style="display:flex;flex-direction:column;gap:4px;font-size:12px;">
            <span style="display:flex;align-items:center;gap:8px;">
              ${PROMPT_FIELDS.negative}
              <button type="button" data-ws-clear-negative style="margin-left:auto;padding:2px 8px;border:0;border-radius:4px;background:#333;color:inherit;cursor:pointer;font:inherit;">${PROMPT_FIELDS.clearNegative}</button>
            </span>
            <textarea data-ws-negative rows="2" placeholder="Skill \u9884\u586B\u8D1F\u9762\u8BCD\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC\uFF0C\u53EF\u6539\u53EF\u6E05" style="resize:vertical;padding:8px;border-radius:8px;border:1px solid #444;background:#1a1a1a;color:inherit;font:inherit;"></textarea>
          </label>
          <button type="button" data-ws-cta style="align-self:flex-start;padding:8px 16px;border:0;border-radius:8px;background:#3b82f6;color:#fff;cursor:pointer;font:inherit;">${CTA}</button>
          <p data-ws-status style="opacity:.7;font-size:12px;min-height:1.2em;"></p>
          <p style="opacity:.5;font-size:11px;">stub \u2014 \u534F\u8BAE\u672A\u63A5\u7EBF\uFF1B\u4E0D\u9009 Skill \u4E5F\u53EF\u70B9\u300C${CTA}\u300D\uFF1B\u8BC4\u5206\u4E0D\u9501\u51FA\u56FE</p>
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
      const status = host.querySelector("[data-ws-status]");
      if (status) status.textContent = "\u5DF2\u6E05\u9664\u8D1F\u9762\u8BCD";
    });
    host.querySelectorAll("[data-ws-mode]").forEach((btn) => {
      btn.addEventListener("click", () => {
        state.mode = btn.getAttribute("data-ws-mode") || MODE_TABS[0];
        host.querySelectorAll("[data-ws-mode]").forEach((b) => {
          b.style.background = b === btn ? "#333" : "transparent";
        });
      });
    });
    host.querySelector("[data-ws-cta]")?.addEventListener("click", () => {
      const status = host.querySelector("[data-ws-status]");
      const skillNote = state.skillId ? `skill=${state.skillId}` : "\u65E0 Skill";
      if (status) {
        status.textContent = `\u5DF2\u89E6\u53D1\u300C${CTA}\u300D\uFF08${skillNote}\uFF1B\u63D0\u793A\u8BCD ${state.prompt.length} \u5B57\uFF1B\u8D1F\u9762\u8BCD ${state.negativePrompt.length} \u5B57\uFF09\u2014 \u534F\u8BAE\u672A\u63A5\u7EBF`;
      }
      host.dispatchEvent(
        new CustomEvent("dsh-ws-generate", {
          bubbles: true,
          detail: {
            prompt: state.prompt,
            negativePrompt: state.negativePrompt,
            mode: state.mode,
            skillId: state.skillId,
            ratio: state.ratio
          }
        })
      );
    });
    document.body.appendChild(host);
    paintChat();
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
    dispose() {
      host?.remove();
      host = void 0;
      open = false;
    }
  };
  return api;
}

// src/client.js
var name = "dsh-image-workstation/client";
var inject = ["slots", "locale", "connection", "sessions", "conversation"];
function apply(ctx, _config) {
  ctx.logger?.info?.(
    `[dsh-image-workstation] client \u2014 sidebar\u300C\u751F\u56FE\u300D+ \u4E09\u680F\u300C${COLUMNS.history} | ${COLUMNS.studio} | ${COLUMNS.chat}\u300D`
  );
  const studio = createStudioHost();
  const disposers = [];
  try {
    disposers.push(
      mountSidebarEntry({
        labels: { newSession: "\u65B0\u4F1A\u8BDD", studio: "\u751F\u56FE" },
        onNewSession: () => studio.close(),
        onStudio: () => studio.open()
      })
    );
    disposers.push(() => studio.dispose());
  } catch (error) {
    console.warn("[dsh-image-workstation] sidebar mount failed:", error);
  }
  ctx.effect?.(() => () => {
    for (const d of disposers.splice(0)) d();
  }, "dsh-image-workstation: sidebar+studio");
}

		return module.exports;
	}
});
