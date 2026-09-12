window.__ModuleLoader__.load({
	id: "dsh-image-workstation",
	factory: (require) => {
		var module = { exports: {} };
		var exports = module.exports;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
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

// src/ui/labels.js
var TOP_TABS, COLUMNS, MODE_TABS, RATIOS, CLARITY, COUNTS, PARAM_LABELS, PROMPT_FIELDS, PROMPT_ACTIONS, CTA, COMPARE, SKILL_ENTRIES, PORTRAIT_SUB, HISTORY_EMPTY, HISTORY_ACTIONS, RESULT_ACTIONS, RESULT_PRIMARY_ACTIONS, RESULT_MORE_ACTIONS, EMPTY, GO_CONFIGURE, CHROME, VIDEO_MODE_TABS, VIDEO_FRAMES, VIDEO_REFS, VIDEO_PARAMS, VIDEO_CLARITY_TIERS, VIDEO_CTA, VIDEO_RESULT_ACTIONS, VIDEO_CROSS, CANVAS_NODES, CANVAS_NODE_TOOLS, CANVAS_CHROME, GALLERY_VIEWS, GALLERY_SORT, GALLERY_FILTERS, GALLERY_TAG_ACTIONS, GALLERY_ACTIONS, ECOM_UPLOAD, ECOM_FORM, ECOM_PURPOSES, ECOM_FLOW, ECOM_RESULT_ACTIONS, GIF_TITLE, GIF_PARAMS, GIF_FRAME_ACTIONS, GIF_ACTIONS, GIF_CTA, UI_DESIGN_TITLE, UI_DESIGN_STEPS, UI_DESIGN_LABELS, TEMPLATE_TITLE, TEMPLATE_LABELS, TOOL_MENU, TOOL_ENTRIES;
var init_labels = __esm({
  "src/ui/labels.js"() {
    TOP_TABS = Object.freeze([
      "\u666E\u901A\u751F\u56FE",
      "\u89C6\u9891\u751F\u6210",
      "\u65E0\u9650\u753B\u5E03",
      "\u753B\u5ECA",
      "\u7535\u5546\u6A21\u5F0F"
    ]);
    COLUMNS = Object.freeze({
      history: "\u5386\u53F2\u8BB0\u5F55",
      studio: "\u751F\u56FE\u533A",
      chat: "AI \u5BF9\u8BDD"
    });
    MODE_TABS = Object.freeze(["\u6587\u751F\u56FE", "\u56FE\u751F\u56FE"]);
    RATIOS = Object.freeze([
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
    CLARITY = Object.freeze(["\u81EA\u52A8", "1K", "2K", "4K"]);
    COUNTS = Object.freeze([1, 2, 3, 4]);
    PARAM_LABELS = Object.freeze({
      ratio: "\u6BD4\u4F8B",
      clarity: "\u6E05\u6670\u5EA6",
      count: "\u5F20\u6570",
      detail: "\u7EC6\u8282",
      model: "\u6A21\u578B",
      compare: "\u591A\u6A21\u578B\u5BF9\u6BD4"
    });
    PROMPT_FIELDS = Object.freeze({
      prompt: "\u63D0\u793A\u8BCD",
      negative: "\u8D1F\u9762\u8BCD",
      clearNegative: "\u6E05\u9664\u8D1F\u9762\u8BCD"
    });
    PROMPT_ACTIONS = Object.freeze({
      enhance: "\u63D0\u793A\u8BCD\u589E\u5F3A",
      templates: "\u6A21\u677F\u5E93",
      skill: "\u521B\u4F5C Skill",
      plan: "\u60F3\u65B9\u6848",
      generate: "\u51FA\u56FE",
      replan: "\u91CD\u65B0\u60F3\u4E00\u7248",
      acceptPlan: "\u5C31\u8FD9\u6837\u51FA\u56FE"
    });
    CTA = "\u5F00\u59CB\u751F\u6210";
    COMPARE = "\u591A\u6A21\u578B\u5BF9\u6BD4";
    SKILL_ENTRIES = Object.freeze([
      "\u7535\u5F71\u4E09\u8054",
      "\u4E09\u8054\u5C01\u9762",
      "\u7535\u5F71\u6D77\u62A5",
      "\u4EBA\u50CF",
      "\u6444\u5F71",
      "\u89D2\u8272"
    ]);
    PORTRAIT_SUB = Object.freeze(["\u5347\u7EA7\u5DF2\u6709\u7167\u7247", "\u539F\u521B\u4EBA\u50CF"]);
    HISTORY_EMPTY = "\u751F\u6210\u540E\u4F1A\u51FA\u73B0\u5728\u8FD9\u91CC";
    HISTORY_ACTIONS = Object.freeze({
      clear: "\u6E05\u7A7A",
      restore: "\u6062\u590D",
      remove: "\u5220\u9664"
    });
    RESULT_ACTIONS = Object.freeze([
      "\u53D6\u6D88",
      "\u91CD\u8BD5",
      "\u4E0B\u8F7D",
      "\u52A0\u5165\u753B\u5E03",
      "\u5F53\u53C2\u8003\u56FE",
      "\u91CD\u65B0\u751F\u6210",
      "\u590D\u5236\u63D0\u793A\u8BCD",
      "\u52A0\u753B\u5ECA",
      "\u52A0\u5BF9\u8BDD",
      "\u62FF\u53BB\u505A\u89C6\u9891",
      "\u518D\u7F16\u8F91"
    ]);
    RESULT_PRIMARY_ACTIONS = Object.freeze(["\u4E0B\u8F7D", "\u52A0\u5165\u753B\u5E03", "\u5F53\u53C2\u8003\u56FE"]);
    RESULT_MORE_ACTIONS = Object.freeze([
      "\u91CD\u65B0\u751F\u6210",
      "\u590D\u5236\u63D0\u793A\u8BCD",
      "\u52A0\u753B\u5ECA",
      "\u52A0\u5BF9\u8BDD",
      "\u62FF\u53BB\u505A\u89C6\u9891",
      "\u518D\u7F16\u8F91"
    ]);
    EMPTY = Object.freeze({
      inspiration: "\u7075\u611F\u6848\u4F8B",
      shuffle: "\u968F\u673A"
    });
    GO_CONFIGURE = "\u53BB\u914D\u7F6E";
    CHROME = Object.freeze({
      settings: "\u8BBE\u7F6E",
      expandChat: "AI \u5BF9\u8BDD",
      connected: "\u5DF2\u8FDE\u63A5",
      disconnected: "\u672A\u8FDE\u63A5"
    });
    VIDEO_MODE_TABS = Object.freeze(["\u6587\u751F\u89C6\u9891", "\u56FE\u751F\u89C6\u9891"]);
    VIDEO_FRAMES = Object.freeze({
      first: "\u9996\u5E27\u56FE",
      last: "\u5C3E\u5E27\u56FE"
    });
    VIDEO_REFS = Object.freeze({
      image: "\u53C2\u8003\u56FE",
      video: "\u53C2\u8003\u89C6\u9891",
      audio: "\u53C2\u8003\u97F3\u9891"
    });
    VIDEO_PARAMS = Object.freeze({
      duration: "\u65F6\u957F",
      clarity: "\u6E05\u6670\u5EA6",
      ratio: "\u6BD4\u4F8B",
      model: "\u6A21\u578B",
      compare: "\u591A\u6A21\u578B\u5BF9\u6BD4"
    });
    VIDEO_CLARITY_TIERS = Object.freeze(["\u6807\u51C6", "\u9AD8\u6E05", "\u8D85\u6E05"]);
    VIDEO_CTA = "\u5F00\u59CB\u751F\u6210";
    VIDEO_RESULT_ACTIONS = Object.freeze([
      "\u64AD\u653E",
      "\u4E0B\u8F7D",
      "\u52A0\u753B\u5ECA",
      "\u62BD\u5E27",
      "\u91CD\u65B0\u751F\u6210",
      "\u53D6\u6D88",
      "\u91CD\u8BD5"
    ]);
    VIDEO_CROSS = Object.freeze({
      takeToVideo: "\u62FF\u53BB\u505A\u89C6\u9891"
    });
    CANVAS_NODES = Object.freeze({
      image: "\u56FE\u7247\u8282\u70B9",
      text: "\u6587\u672C\u8282\u70B9",
      genConfig: "\u751F\u6210\u914D\u7F6E\u8282\u70B9",
      video: "\u89C6\u9891\u8282\u70B9"
    });
    CANVAS_NODE_TOOLS = Object.freeze({
      annotate: "\u6807\u6CE8",
      removeBg: "\u79FB\u9664\u80CC\u666F",
      setModel: "\u6307\u5B9A\u6A21\u578B"
    });
    CANVAS_CHROME = Object.freeze({
      fitAll: "\u9002\u5E94\u5168\u90E8\u5185\u5BB9",
      send: "\u53D1\u9001",
      addToCanvas: "\u52A0\u5165\u753B\u5E03",
      newProject: "\u65B0\u5EFA",
      rename: "\u91CD\u547D\u540D"
    });
    GALLERY_VIEWS = Object.freeze({
      waterfall: "\u7011\u5E03\u6D41",
      grid: "\u89C4\u6574\u7F51\u683C"
    });
    GALLERY_SORT = Object.freeze({
      newest: "\u6700\u65B0",
      oldest: "\u6700\u65E9"
    });
    GALLERY_FILTERS = Object.freeze({
      mode: "\u6A21\u5F0F",
      model: "\u6A21\u578B",
      ratio: "\u6BD4\u4F8B",
      tag: "\u6807\u7B7E"
    });
    GALLERY_TAG_ACTIONS = Object.freeze({
      create: "\u65B0\u5EFA",
      edit: "\u6539",
      remove: "\u5220",
      batchTag: "\u6253\u6807\u7B7E",
      batchDownload: "\u6279\u91CF\u4E0B\u8F7D"
    });
    GALLERY_ACTIONS = Object.freeze([
      "\u52A0\u753B\u5ECA",
      "\u5F53\u53C2\u8003\u56FE",
      "\u52A0\u5BF9\u8BDD",
      "\u62FF\u53BB\u505A\u89C6\u9891",
      "\u52A0\u5165\u753B\u5E03",
      "\u4E0B\u8F7D"
    ]);
    ECOM_UPLOAD = Object.freeze({
      product: "\u5546\u54C1\u4E3B\u56FE",
      subject: "\u4E3B\u4F53",
      packaging: "\u5305\u88C5",
      detail: "\u7EC6\u8282",
      styleRef: "\u98CE\u683C\u53C2\u8003\u56FE"
    });
    ECOM_FORM = Object.freeze({
      name: "\u5546\u54C1\u540D\u79F0",
      params: "\u53C2\u6570\u4FE1\u606F",
      aiWrite: "AI \u5E2E\u5199",
      locale: "\u6587\u6848\u8BED\u8A00"
    });
    ECOM_PURPOSES = Object.freeze([
      "\u4E3B\u56FE",
      "\u5356\u70B9\u56FE",
      "\u573A\u666F\u56FE",
      "\u7EC6\u8282\u56FE",
      "\u89C4\u683C\u56FE",
      "\u4F7F\u7528\u56FE"
    ]);
    ECOM_FLOW = Object.freeze({
      planPreview: "\u5957\u56FE\u9884\u89C8",
      confirmBatch: "\u786E\u8BA4\u6279\u91CF\u751F\u6210",
      exportList: "\u5BFC\u51FA\u6E05\u5355"
    });
    ECOM_RESULT_ACTIONS = Object.freeze([
      "\u91CD\u65B0\u751F\u6210",
      "\u4E0B\u8F7D",
      "\u52A0\u753B\u5ECA",
      "\u52A0\u5BF9\u8BDD"
    ]);
    GIF_TITLE = "GIF";
    GIF_PARAMS = Object.freeze({
      frames: "\u5E27\u6570",
      fps: "\u5E27\u7387",
      loops: "\u5FAA\u73AF\u6B21\u6570",
      size: "\u5C3A\u5BF8"
    });
    GIF_FRAME_ACTIONS = Object.freeze([
      "\u5355\u5E27\u91CD\u65B0\u751F\u6210",
      "\u5220\u5E27",
      "\u8C03\u987A\u5E8F"
    ]);
    GIF_ACTIONS = Object.freeze({
      exportGif: "\u5BFC\u51FA GIF",
      addGallery: "\u52A0\u753B\u5ECA"
    });
    GIF_CTA = "\u5F00\u59CB\u751F\u6210";
    UI_DESIGN_TITLE = "UI \u8BBE\u8BA1";
    UI_DESIGN_STEPS = Object.freeze([
      "\u4E0A\u4F20\u8BBE\u8BA1\u7A3F",
      "AI \u5207\u56FE",
      "\u5207\u56FE\u7F16\u8F91",
      "\u7D20\u6750\u5904\u7406",
      "\u80CC\u666F\u586B\u5145",
      "\u7F51\u9875\u590D\u523B",
      "\u5BFC\u51FA"
    ]);
    UI_DESIGN_LABELS = Object.freeze({
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
    TEMPLATE_TITLE = "\u6A21\u677F\u5E93";
    TEMPLATE_LABELS = Object.freeze({
      square: "\u63D0\u793A\u8BCD\u5E7F\u573A",
      inspire: "\u7075\u611F\u6848\u4F8B",
      shuffle: "\u968F\u673A",
      favorite: "\u6536\u85CF",
      fill: "\u4E00\u952E\u56DE\u586B"
    });
    TOOL_MENU = "\u5DE5\u5177";
    TOOL_ENTRIES = Object.freeze(["\u53CD\u63A8\u63D0\u793A\u8BCD", "GIF", "UI \u8BBE\u8BA1"]);
  }
});

// src/client/gallery-host.js
var gallery_host_exports = {};
__export(gallery_host_exports, {
  CANVAS_PAGE: () => CANVAS_PAGE2,
  GALLERY_PAGE: () => GALLERY_PAGE,
  IMAGE_PAGE: () => IMAGE_PAGE3,
  VIDEO_PAGE: () => VIDEO_PAGE2,
  addLocalGalleryItem: () => addLocalGalleryItem,
  buildGalleryPageHtml: () => buildGalleryPageHtml,
  collectLocalMediaItems: () => collectLocalMediaItems,
  defaultGalleryState: () => defaultGalleryState,
  defaultStoragePaths: () => defaultStoragePaths,
  fetchStorageMedia: () => fetchStorageMedia,
  fingerprintSrc: () => fingerprintSrc,
  galleryHostStyles: () => galleryHostStyles,
  itemHasDisplayableThumb: () => itemHasDisplayableThumb,
  itemNeedsHydration: () => itemNeedsHydration,
  mountGalleryPage: () => mountGalleryPage,
  readGalleryLayout: () => readGalleryLayout,
  readLocalGalleryItems: () => readLocalGalleryItems,
  readLocalHistoryItems: () => readLocalHistoryItems,
  readLocalTags: () => readLocalTags,
  removeLocalGalleryItem: () => removeLocalGalleryItem,
  sanitizeTags: () => sanitizeTags,
  tagLocalGalleryItem: () => tagLocalGalleryItem,
  usableDisplaySrc: () => usableDisplaySrc,
  writeGalleryLayout: () => writeGalleryLayout,
  writeLocalGalleryItems: () => writeLocalGalleryItems,
  writeLocalTags: () => writeLocalTags
});
function escapeHtml5(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function sanitizeTags(tags) {
  if (!Array.isArray(tags)) return [];
  const unique = /* @__PURE__ */ new Set();
  for (const raw of tags) {
    const tag = String(raw ?? "").trim();
    if (tag) unique.add(tag);
  }
  return [...unique].slice(0, 20);
}
function makeId(prefix = "gal") {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return `${prefix}-${crypto.randomUUID()}`;
  }
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}
function fingerprintSrc(src) {
  const s = String(src || "");
  if (!s) return "";
  let h = 2166136261;
  const n = Math.min(s.length, 4096);
  for (let i = 0; i < n; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  return `fnv-${s.length}-${h.toString(16)}`;
}
function usableDisplaySrc(src) {
  const s = String(src || "").trim();
  if (!s) return "";
  if (/^https?:\/\//i.test(s)) return s;
  if (s.startsWith("data:")) return s;
  if (s.startsWith("blob:")) return s;
  return "";
}
function itemHasDisplayableThumb(it) {
  if (!it || typeof it !== "object") return false;
  return Boolean(usableDisplaySrc(it.displayUrl || it.url));
}
function itemNeedsHydration(it) {
  if (!it || typeof it !== "object") return false;
  if (itemHasDisplayableThumb(it)) return false;
  if (it.relativePath && String(it.relativePath).startsWith("media/")) return true;
  if (it.localPath) return true;
  if (String(it.url || "").startsWith("file://")) return true;
  return false;
}
function readLocalGalleryItems() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (it) => it && typeof it === "object" && typeof it.id === "string" && (typeof it.url === "string" || it.localPath)
    );
  } catch (_) {
    return [];
  }
}
function writeLocalGalleryItems(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (_) {
  }
}
function readLocalTags() {
  try {
    const raw = localStorage.getItem(TAGS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((t) => t && typeof t.id === "string" && typeof t.name === "string");
  } catch (_) {
    return [];
  }
}
function writeLocalTags(tags) {
  try {
    localStorage.setItem(TAGS_KEY, JSON.stringify(tags));
  } catch (_) {
  }
}
function readGalleryLayout() {
  try {
    const raw = localStorage.getItem(LAYOUT_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (_) {
    return {};
  }
}
function writeGalleryLayout(layout) {
  try {
    localStorage.setItem(
      LAYOUT_KEY,
      JSON.stringify({ view: layout.view, sort: layout.sort, filters: layout.filters })
    );
  } catch (_) {
  }
}
function addLocalGalleryItem(input) {
  const url = String(input?.url || "").trim();
  if (!url) {
    return { added: false, item: null, items: readLocalGalleryItems() };
  }
  const hash = input.hash || fingerprintSrc(url);
  const items = readLocalGalleryItems();
  const dup = items.find((it) => it.hash === hash || it.url === url);
  if (dup) {
    const merged = {
      ...dup,
      tagIds: sanitizeTags([...dup.tagIds || [], ...input.tagIds || []]),
      tags: sanitizeTags([...dup.tags || [], ...input.tags || []]),
      updatedAt: Date.now()
    };
    const next2 = items.map((it) => it.id === dup.id ? merged : it);
    writeLocalGalleryItems(next2);
    return { added: false, item: merged, items: next2 };
  }
  const item = {
    id: input.id || makeId(),
    url,
    kind: input.kind === "video" ? "video" : "image",
    mode: input.mode ? String(input.mode) : void 0,
    model: input.model ? String(input.model) : void 0,
    ratio: input.ratio ? String(input.ratio) : void 0,
    prompt: input.prompt ? String(input.prompt) : void 0,
    name: input.name ? String(input.name) : input.prompt ? String(input.prompt).slice(0, 40) : "\u753B\u5ECA",
    tagIds: sanitizeTags(input.tagIds),
    tags: sanitizeTags(input.tags),
    hash,
    createdAt: Number(input.createdAt) || Date.now(),
    seat: "gallery",
    localPath: input.localPath,
    relativePath: input.relativePath
  };
  const next = [item, ...items];
  writeLocalGalleryItems(next);
  return { added: true, item, items: next };
}
function removeLocalGalleryItem(id) {
  const next = readLocalGalleryItems().filter((it) => it.id !== id);
  writeLocalGalleryItems(next);
  return next;
}
function tagLocalGalleryItem(id, tagIds) {
  const normalized = sanitizeTags(tagIds);
  const next = readLocalGalleryItems().map(
    (it) => it.id === id ? { ...it, tagIds: normalized, tags: normalized } : it
  );
  writeLocalGalleryItems(next);
  return next;
}
function defaultStoragePaths() {
  return { ...DEFAULT_PATHS };
}
function readLocalHistoryItems() {
  const out = [];
  try {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k === HISTORY_KEY_BASE || k && k.startsWith(`${HISTORY_KEY_BASE}::`)) keys.push(k);
    }
    for (const key of keys) {
      let parsed;
      try {
        parsed = JSON.parse(localStorage.getItem(key) || "[]");
      } catch {
        continue;
      }
      if (!Array.isArray(parsed)) continue;
      for (const entry of parsed) {
        const id = entry?.id != null ? String(entry.id) : "";
        const value = entry?.value && typeof entry.value === "object" ? entry.value : {};
        const results = Array.isArray(value.results) ? value.results : [];
        const snap = entry?.snapshot && typeof entry.snapshot === "object" ? entry.snapshot : {};
        results.forEach((r, i) => {
          const url = r?.url ? String(r.url) : "";
          const localPath = r?.localPath ? String(r.localPath) : "";
          if (!url && !localPath) return;
          const relativePath = r?.relativePath ? String(r.relativePath) : "";
          out.push({
            id: `${id || "hist"}-${i}`,
            url: url || "",
            localPath: localPath || void 0,
            relativePath: relativePath || void 0,
            kind: r?.kind === "video" ? "video" : "image",
            mode: snap.mode ? String(snap.mode) : void 0,
            model: snap.modelId ? String(snap.modelId) : void 0,
            ratio: snap.ratio ? String(snap.ratio) : void 0,
            prompt: snap.prompt ? String(snap.prompt) : void 0,
            createdAt: Number(entry.savedAt) || Date.now(),
            name: snap.prompt ? String(snap.prompt).slice(0, 40) : "\u5386\u53F2",
            seat: "history"
          });
        });
      }
    }
  } catch (_) {
  }
  return out;
}
async function fetchStorageMedia(opts) {
  const paths = defaultStoragePaths();
  let diskItems = [];
  const rpc = typeof opts?.getRpc === "function" ? opts.getRpc() : null;
  if (!rpc || typeof rpc.call !== "function") return { paths, diskItems };
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
    const listRes = await rpc.call(CTA_RPC_CHANNEL, CTA_RPC_GALLERY_LIST, { dataDir: paths.dataDir });
    if (listRes?.ok && listRes.value) {
      const rows = Array.isArray(listRes.value.entries) ? listRes.value.entries : Array.isArray(listRes.value.items) ? listRes.value.items : [];
      for (const it of rows) {
        if (!it || typeof it !== "object") continue;
        diskItems.push({
          id: String(it.id || makeId("disk")),
          url: it.url ? String(it.url) : it.images?.[0]?.url ? String(it.images[0].url) : "",
          localPath: it.localPath || it.images?.[0]?.localPath,
          relativePath: it.relativePath || it.images?.[0]?.relativePath,
          kind: it.kind === "video" ? "video" : "image",
          name: it.name ? String(it.name) : it.prompt ? String(it.prompt).slice(0, 40) : "\u753B\u5ECA",
          prompt: it.prompt ? String(it.prompt) : void 0,
          mode: it.mode ? String(it.mode) : void 0,
          model: it.model ? String(it.model) : void 0,
          ratio: it.ratio ? String(it.ratio) : void 0,
          tagIds: sanitizeTags(it.tagIds || it.tags),
          tags: sanitizeTags(it.tags || it.tagIds),
          hash: it.hash ? String(it.hash) : void 0,
          createdAt: Number(it.createdAt) || Date.now(),
          seat: "gallery"
        });
      }
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
      const rows = Array.isArray(v.items) ? v.items : [
        ...Array.isArray(v.galleryItems) ? v.galleryItems : [],
        ...Array.isArray(v.historyItems) ? v.historyItems : []
      ];
      for (const it of rows) {
        if (!it || typeof it !== "object") continue;
        const id = String(it.id || it.relativePath || it.name || makeId("seat"));
        if (diskItems.some((d) => d.id === id || d.hash && d.hash === it.hash)) continue;
        diskItems.push({
          id,
          url: it.url ? String(it.url) : "",
          localPath: it.localPath ? String(it.localPath) : void 0,
          kind: it.kind === "video" ? "video" : "image",
          name: it.name ? String(it.name) : it.relativePath ? String(it.relativePath) : "\u7D20\u6750",
          mode: it.mode ? String(it.mode) : void 0,
          model: it.model ? String(it.model) : void 0,
          ratio: it.ratio ? String(it.ratio) : void 0,
          tagIds: sanitizeTags(it.tagIds || it.tags),
          createdAt: Number(it.createdAt) || Date.now(),
          seat: it.seat ? String(it.seat) : void 0,
          relativePath: it.relativePath ? String(it.relativePath) : void 0,
          hash: it.hash ? String(it.hash) : void 0
        });
      }
    }
  } catch (_) {
  }
  return { paths, diskItems };
}
function collectLocalMediaItems(diskItems = []) {
  const gallery = readLocalGalleryItems();
  const history = readLocalHistoryItems();
  const merged = [...gallery, ...diskItems, ...history];
  const seen = /* @__PURE__ */ new Set();
  const out = [];
  for (const it of merged) {
    const key = it.hash || it.id || it.url || it.localPath || it.relativePath || "";
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(it);
  }
  return out;
}
function defaultGalleryState() {
  const layout = readGalleryLayout();
  return {
    filters: {
      mode: layout.filters?.mode || FILTER_ALL,
      model: layout.filters?.model || FILTER_ALL,
      ratio: layout.filters?.ratio || FILTER_ALL,
      tagIds: Array.isArray(layout.filters?.tagIds) ? layout.filters.tagIds : []
    },
    view: layout.view === "waterfall" ? "waterfall" : "grid",
    sort: layout.sort === "oldest" ? "oldest" : "newest",
    tags: readLocalTags(),
    selection: [],
    items: collectLocalMediaItems([]),
    paths: defaultStoragePaths(),
    lightboxId: void 0
  };
}
function galleryHostStyles() {
  return `
[data-dsh-ws-studio-host] [data-ws-page="gallery"] {
  display:none; pointer-events:none; flex:1; min-height:0; width:100%;
}
[data-dsh-ws-studio-host][data-ws-top-page="\u753B\u5ECA"] [data-ws-page="gallery"] {
  display:flex; pointer-events:auto;
}
[data-dsh-ws-studio-host][data-ws-top-page="\u753B\u5ECA"] [data-ws-page="image"],
[data-dsh-ws-studio-host][data-ws-top-page="\u753B\u5ECA"] [data-ws-page="video"],
[data-dsh-ws-studio-host][data-ws-top-page="\u753B\u5ECA"] [data-ws-page="ecom"],
[data-dsh-ws-studio-host][data-ws-top-page="\u753B\u5ECA"] [data-ws-page="canvas"] {
  display:none !important; pointer-events:none;
}
[data-dsh-ws-studio-host] [data-ws-gallery-cols] {
  flex:1; min-height:0; width:100%;
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
  const persistLayout = () => {
    writeGalleryLayout({ view: state.view, sort: state.sort, filters: state.filters });
  };
  const filteredItems = () => {
    let list = state.items.filter(itemHasDisplayableThumb);
    const { mode, model, ratio, tagIds } = state.filters;
    if (mode && mode !== FILTER_ALL) list = list.filter((it) => it.mode === mode);
    if (model && model !== FILTER_ALL) list = list.filter((it) => it.model === model);
    if (ratio && ratio !== FILTER_ALL) list = list.filter((it) => it.ratio === ratio);
    if (tagIds?.length) {
      list = list.filter((it) => {
        const ids = it.tagIds || it.tags || [];
        return ids.some((id) => tagIds.includes(id));
      });
    }
    list.sort((a, b) => {
      const ta = Number(a.createdAt) || 0;
      const tb = Number(b.createdAt) || 0;
      return state.sort === "oldest" ? ta - tb : tb - ta;
    });
    return list;
  };
  const paintModelFilter = () => {
    const sel = page.querySelector('[data-ws-gallery-filter="model"]');
    if (!(sel instanceof HTMLSelectElement)) return;
    const models = [...new Set(state.items.map((it) => it.model).filter(Boolean))].sort();
    const cur = state.filters.model;
    sel.innerHTML = [FILTER_ALL, ...models].map(
      (o) => `<option value="${escapeHtml5(String(o))}" ${String(o) === String(cur) ? "selected" : ""}>${escapeHtml5(String(o))}</option>`
    ).join("");
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
      return `<button type="button" data-ws-gallery-tag="${escapeHtml5(tag.id)}" aria-pressed="${on}" style="${css2.chip(on)}" title="\u53F3\u952E\u5220\u9664">${escapeHtml5(tag.name)}</button>`;
    }).join("");
  };
  const thumbInflight = /* @__PURE__ */ new Map();
  const hydrateDisplayUrls = async (items) => {
    const rpc = typeof getRpc === "function" ? getRpc() : null;
    const need = items.filter(itemNeedsHydration);
    if (!need.length) return;
    if (!rpc || typeof rpc.call !== "function") return;
    const concurrency = 6;
    let i = 0;
    const worker = async () => {
      while (i < need.length) {
        const it = need[i++];
        const rel = it.relativePath ? String(it.relativePath) : "";
        let localPath = it.localPath ? String(it.localPath) : "";
        if (!localPath && String(it.url || "").startsWith("file://")) {
          localPath = String(it.url).slice(7);
        }
        const key = it.id || rel || localPath;
        if (!key) continue;
        try {
          let job = thumbInflight.get(key);
          if (!job) {
            job = (async () => {
              const result = await rpc.call(CTA_RPC_CHANNEL, CTA_RPC_STORAGE_READ, {
                relativePath: rel || void 0,
                localPath: localPath || void 0,
                dataDir: state.paths?.dataDir
              });
              if (result?.ok && result.value?.dataUrl) return String(result.value.dataUrl);
              return "";
            })().finally(() => {
              thumbInflight.delete(key);
            });
            thumbInflight.set(key, job);
          }
          const dataUrl = await job;
          if (dataUrl) it.displayUrl = dataUrl;
        } catch (_) {
        }
      }
    };
    await Promise.all(Array.from({ length: Math.min(concurrency, need.length) }, () => worker()));
  };
  const syncCountLabel = () => {
    const countEl = page.querySelector("[data-ws-gallery-count]");
    const grid = page.querySelector("[data-ws-gallery-grid]");
    const n = grid instanceof HTMLElement ? grid.querySelectorAll("[data-ws-gallery-card]").length : filteredItems().length;
    if (countEl) countEl.textContent = `\u5171 ${n} \u9879`;
  };
  const paintGrid = () => {
    const grid = page.querySelector("[data-ws-gallery-grid]");
    if (!(grid instanceof HTMLElement)) return;
    grid.setAttribute("data-view", state.view);
    const items = filteredItems().filter((it) => usableDisplaySrc(it.displayUrl || it.url));
    if (!items.length) {
      const seats = state.paths ? `\u672C\u5730\u5EA7\u4F4D\uFF1A${escapeHtml5(state.paths.gallery)} \xB7 ${escapeHtml5(state.paths.history)}` : "";
      grid.innerHTML = `<div data-ws-gallery-empty role="status">${EMPTY_HINT}${seats ? `<div style="margin-top:8px;font-size:11px;opacity:.85;">${seats}</div>` : ""}</div>`;
      syncCountLabel();
      return;
    }
    grid.innerHTML = items.map((it) => {
      const selected = state.selection.includes(it.id);
      const src = usableDisplaySrc(it.displayUrl || it.url);
      const isVideo = it.kind === "video" || /\.(mp4|webm|mov)(\?|$)/i.test(src || it.relativePath || "");
      const media = isVideo ? `<video src="${escapeHtml5(src)}" muted playsinline preload="metadata"></video>` : `<img src="${escapeHtml5(src)}" alt="" loading="lazy" />`;
      const meta = escapeHtml5(it.name || it.mode || it.model || it.ratio || it.relativePath || "\u7D20\u6750");
      return `<article data-ws-gallery-card data-id="${escapeHtml5(it.id)}" role="listitem" ${selected ? "data-selected" : ""}>
          ${media}
          <div data-ws-gallery-card-meta>${meta}</div>
        </article>`;
    }).join("");
    grid.querySelectorAll("[data-ws-gallery-card] img, [data-ws-gallery-card] video").forEach((el) => {
      el.addEventListener(
        "error",
        () => {
          const card = el.closest("[data-ws-gallery-card]");
          const id = card?.getAttribute("data-id");
          card?.remove();
          if (id) {
            const hit = state.items.find((x) => x.id === id);
            if (hit) {
              hit.displayUrl = "";
              if (usableDisplaySrc(hit.url) === el.getAttribute("src")) hit.url = "";
            }
          }
          if (!grid.querySelector("[data-ws-gallery-card]")) {
            const seats = state.paths ? `\u672C\u5730\u5EA7\u4F4D\uFF1A${escapeHtml5(state.paths.gallery)} \xB7 ${escapeHtml5(state.paths.history)}` : "";
            grid.innerHTML = `<div data-ws-gallery-empty role="status">${EMPTY_HINT}${seats ? `<div style="margin-top:8px;font-size:11px;opacity:.85;">${seats}</div>` : ""}</div>`;
          }
          syncCountLabel();
        },
        { once: true }
      );
    });
    syncCountLabel();
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
    const src = usableDisplaySrc(item.displayUrl || item.url);
    const isVideo = item.kind === "video" || /\.(mp4|webm|mov)(\?|$)/i.test(src || item.relativePath || "");
    if (!src) {
      body.innerHTML = `<div style="padding:24px;text-align:center;color:${T2.fg3};font-size:13px;">\u65E0\u9884\u89C8</div>`;
    } else {
      body.innerHTML = isVideo ? `<video data-ws-gallery-lightbox-media controls src="${escapeHtml5(src)}" style="width:100%;max-height:70vh;border-radius:8px;background:${T2.layer1};"></video>` : `<img data-ws-gallery-lightbox-media src="${escapeHtml5(src)}" alt="" style="width:100%;max-height:70vh;object-fit:contain;border-radius:8px;background:${T2.layer1};" />`;
    }
    box.setAttribute("data-open", "");
    box.setAttribute("aria-hidden", "false");
  };
  const downloadUrl = (url, name2) => {
    if (!url) return false;
    const a = document.createElement("a");
    a.href = url;
    a.download = name2 || `dsh-gallery-${Date.now()}.png`;
    a.rel = "noopener";
    a.target = "_blank";
    a.click();
    return true;
  };
  const reload = async () => {
    const { paths, diskItems } = await fetchStorageMedia({ getRpc });
    state.paths = paths;
    state.tags = readLocalTags();
    state.items = collectLocalMediaItems(diskItems);
    await hydrateDisplayUrls(state.items);
    paintModelFilter();
    paintTags();
    paintGrid();
    paintViewSort();
    const seatHint = `${paths.gallery} \xB7 ${paths.history}`;
    const visible = state.items.filter(itemHasDisplayableThumb).length;
    if (!visible) setStatus(`\u672C\u5730\u5EA7\u4F4D ${seatHint}\uFF08\u6682\u65E0\u5A92\u4F53\uFF09`);
    else setStatus(`\u5DF2\u8BFB ${visible} \u9879 \xB7 ${seatHint}`);
  };
  const addFromDetail = async (detail) => {
    const src = String(detail?.src || detail?.url || "").trim();
    if (!src) {
      setStatus("\u65E0\u56FE\u53EF\u52A0\u753B\u5ECA");
      return { ok: false };
    }
    const snap = detail?.snapshot && typeof detail.snapshot === "object" ? detail.snapshot : {};
    const local = addLocalGalleryItem({
      url: src,
      prompt: detail.prompt || snap.prompt,
      mode: detail.mode || snap.mode,
      model: detail.model || snap.modelId,
      ratio: detail.ratio || snap.ratio,
      kind: detail.kind,
      name: detail.prompt || snap.prompt ? String(detail.prompt || snap.prompt).slice(0, 40) : void 0
    });
    state.items = collectLocalMediaItems([]);
    paintGrid();
    paintModelFilter();
    const rpc = typeof getRpc === "function" ? getRpc() : null;
    if (rpc && typeof rpc.call === "function") {
      try {
        const result = await rpc.call(CTA_RPC_CHANNEL, CTA_RPC_GALLERY_ADD, {
          src,
          prompt: detail.prompt || snap.prompt || "",
          snapshot: snap,
          mode: detail.mode || snap.mode,
          model: detail.model || snap.modelId,
          ratio: detail.ratio || snap.ratio,
          dataDir: state.paths?.dataDir,
          galleryRel: state.paths?.gallery
        });
        if (result?.ok) {
          setStatus(result.value?.added !== false ? "\u5DF2\u52A0\u5165\u753B\u5ECA" : "\u753B\u5ECA\u5DF2\u6709\u76F8\u540C\u5185\u5BB9");
          await reload();
          return { ok: true, added: result.value?.added !== false };
        }
      } catch (_) {
      }
    }
    setStatus(local.added ? "\u5DF2\u52A0\u5165\u753B\u5ECA\uFF08\u672C\u5730\uFF09" : "\u753B\u5ECA\u5DF2\u6709\u76F8\u540C\u5185\u5BB9\uFF08\u672C\u5730\uFF09");
    return { ok: true, added: local.added };
  };
  page.querySelectorAll("[data-ws-gallery-filter]").forEach((sel) => {
    sel.addEventListener("change", (e) => {
      const el = e.target;
      const key = el.getAttribute("data-ws-gallery-filter");
      if (key === "mode") state.filters.mode = el.value;
      else if (key === "model") state.filters.model = el.value;
      else if (key === "ratio") state.filters.ratio = el.value;
      persistLayout();
      paintGrid();
    });
  });
  page.querySelectorAll("[data-ws-gallery-view]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.view = btn.getAttribute("data-ws-gallery-view") === "waterfall" ? "waterfall" : "grid";
      persistLayout();
      paintViewSort();
      paintGrid();
    });
  });
  page.querySelectorAll("[data-ws-gallery-sort]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.sort = btn.getAttribute("data-ws-gallery-sort") === "oldest" ? "oldest" : "newest";
      persistLayout();
      paintViewSort();
      paintGrid();
    });
  });
  page.querySelector('[data-ws-gallery-tag-action="create"]')?.addEventListener("click", () => {
    const name2 = window.prompt("\u65B0\u6807\u7B7E\u540D\u79F0", "");
    if (name2 == null) return;
    const trimmed = String(name2).trim();
    if (!trimmed) {
      setStatus("\u6807\u7B7E\u540D\u4E0D\u80FD\u4E3A\u7A7A");
      return;
    }
    if (state.tags.some((t) => t.name === trimmed)) {
      setStatus("\u6807\u7B7E\u5DF2\u5B58\u5728");
      return;
    }
    const tag = { id: makeId("tag"), name: trimmed };
    state.tags = [...state.tags, tag];
    writeLocalTags(state.tags);
    paintTags();
    setStatus(`\u5DF2\u65B0\u5EFA\u6807\u7B7E\u300C${trimmed}\u300D`);
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
    persistLayout();
    paintTags();
    paintGrid();
  });
  page.querySelector("[data-ws-gallery-tag-list]")?.addEventListener("contextmenu", (e) => {
    const btn = e.target instanceof Element ? e.target.closest("[data-ws-gallery-tag]") : null;
    if (!btn) return;
    e.preventDefault();
    const id = btn.getAttribute("data-ws-gallery-tag") || "";
    const tag = state.tags.find((t) => t.id === id);
    if (!tag) return;
    if (!window.confirm(`\u5220\u9664\u6807\u7B7E\u300C${tag.name}\u300D\uFF1F`)) return;
    state.tags = state.tags.filter((t) => t.id !== id);
    state.filters.tagIds = state.filters.tagIds.filter((x) => x !== id);
    writeLocalTags(state.tags);
    for (const it of readLocalGalleryItems()) {
      if ((it.tagIds || []).includes(id)) {
        tagLocalGalleryItem(it.id, (it.tagIds || []).filter((x) => x !== id));
      }
    }
    state.items = collectLocalMediaItems([]);
    persistLayout();
    paintTags();
    paintGrid();
    setStatus(`\u5DF2\u5220\u9664\u6807\u7B7E\u300C${tag.name}\u300D`);
  });
  page.querySelector("[data-ws-gallery-grid]")?.addEventListener("click", (e) => {
    const card = e.target instanceof Element ? e.target.closest("[data-ws-gallery-card]") : null;
    if (!card) return;
    const id = card.getAttribute("data-id") || "";
    if (!id) return;
    if (e.metaKey || e.ctrlKey) {
      if (state.selection.includes(id)) state.selection = state.selection.filter((x) => x !== id);
      else state.selection = [...state.selection, id];
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
    const item = state.items.find((it) => it.id === state.lightboxId);
    if (!item) {
      setStatus("\u65E0\u9009\u4E2D\u7D20\u6750");
      return;
    }
    const src = usableDisplaySrc(item.displayUrl || item.url);
    if (action === "\u4E0B\u8F7D") {
      setStatus(downloadUrl(src, `${item.name || "gallery"}.png`) ? "\u5DF2\u4E0B\u8F7D" : "\u65E0\u56FE\u53EF\u4E0B\u8F7D");
      return;
    }
    if (action === "\u5F53\u53C2\u8003\u56FE") {
      host.dispatchEvent(new CustomEvent("dsh-ws-use-as-ref", { bubbles: true, detail: { src, item, from: "gallery" } }));
      host.dispatchEvent(new CustomEvent("dsh-ws-top-page", { bubbles: true, detail: { page: IMAGE_PAGE3 } }));
      setStatus(src ? "\u5DF2\u8BBE\u4E3A\u53C2\u8003\u56FE" : "\u65E0\u56FE\u53EF\u4F5C\u53C2\u8003");
      return;
    }
    if (action === "\u62FF\u53BB\u505A\u89C6\u9891") {
      host.dispatchEvent(new CustomEvent("dsh-ws-top-page", { bubbles: true, detail: { page: VIDEO_PAGE2, frameUrl: src } }));
      setStatus("\u5DF2\u5207\u6362\u5230\u89C6\u9891\u751F\u6210");
      return;
    }
    if (action === "\u52A0\u5165\u753B\u5E03") {
      host.dispatchEvent(new CustomEvent("dsh-ws-top-page", { bubbles: true, detail: { page: CANVAS_PAGE2, imageUrl: src } }));
      setStatus("\u5DF2\u5207\u6362\u5230\u65E0\u9650\u753B\u5E03");
      return;
    }
    if (action === "\u52A0\u5BF9\u8BDD") {
      host.dispatchEvent(new CustomEvent("dsh-ws-add-to-chat", { bubbles: true, detail: { src, prompt: item.prompt || item.name || "" } }));
      setStatus("\u5DF2\u53D1\u9001\u5230\u5BF9\u8BDD");
      return;
    }
    setStatus(`\u300C${action}\u300D`);
  });
  page.querySelectorAll("[data-ws-gallery-batch]").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const kind = btn.getAttribute("data-ws-gallery-batch");
      if (!state.selection.length) {
        setStatus("\u5148\u591A\u9009\u7D20\u6750\uFF08Ctrl/\u2318+\u70B9\u51FB\uFF09");
        return;
      }
      if (kind === "tag") {
        if (!state.tags.length) {
          setStatus("\u8BF7\u5148\u65B0\u5EFA\u6807\u7B7E");
          return;
        }
        const names = state.tags.map((t) => t.name).join(" / ");
        const picked = window.prompt(`\u6279\u91CF\u6253\u6807\u7B7E\uFF08\u73B0\u6709\uFF1A${names}\uFF09`, state.tags[0]?.name || "");
        if (picked == null) return;
        const tag = state.tags.find((t) => t.name === String(picked).trim());
        if (!tag) {
          setStatus("\u6807\u7B7E\u4E0D\u5B58\u5728\uFF0C\u8BF7\u5148\u65B0\u5EFA");
          return;
        }
        for (const id of state.selection) {
          const it = state.items.find((x) => x.id === id);
          if (!it) continue;
          const nextIds = sanitizeTags([...it.tagIds || it.tags || [], tag.id]);
          tagLocalGalleryItem(id, nextIds);
          const rpc = typeof getRpc === "function" ? getRpc() : null;
          if (rpc && typeof rpc.call === "function" && it.seat === "gallery") {
            try {
              await rpc.call(CTA_RPC_CHANNEL, CTA_RPC_GALLERY_TAGS, {
                id,
                tags: nextIds,
                dataDir: state.paths?.dataDir
              });
            } catch (_) {
            }
          }
        }
        state.items = collectLocalMediaItems([]);
        paintGrid();
        setStatus(`\u5DF2\u4E3A ${state.selection.length} \u9879\u6253\u4E0A\u300C${tag.name}\u300D`);
        return;
      }
      if (kind === "download") {
        let n = 0;
        for (const id of state.selection) {
          const it = state.items.find((x) => x.id === id);
          if (it?.url && downloadUrl(it.url, `${it.name || id}.png`)) n++;
        }
        setStatus(n ? `\u5DF2\u89E6\u53D1 ${n} \u9879\u4E0B\u8F7D` : "\u9009\u4E2D\u9879\u65E0\u53EF\u4E0B\u8F7D URL");
      }
    });
  });
  const onGalleryAddEvent = (ev) => {
    const detail = ev?.detail && typeof ev.detail === "object" ? ev.detail : {};
    void addFromDetail(detail);
  };
  document.addEventListener("dsh-ws-gallery-add", onGalleryAddEvent);
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
    addFromDetail,
    dispose() {
      document.removeEventListener("dsh-ws-gallery-add", onGalleryAddEvent);
      closeLightbox();
      page.remove();
      styleEl?.remove();
    }
  };
}
var GALLERY_PAGE, IMAGE_PAGE3, VIDEO_PAGE2, CANVAS_PAGE2, STORAGE_KEY, TAGS_KEY, LAYOUT_KEY, HISTORY_KEY_BASE, CTA_RPC_CHANNEL, CTA_RPC_STORAGE_PATHS, CTA_RPC_STORAGE_LIST, CTA_RPC_STORAGE_READ, CTA_RPC_GALLERY_ADD, CTA_RPC_GALLERY_LIST, CTA_RPC_GALLERY_TAGS, DEFAULT_PATHS, EMPTY_HINT, FILTER_ALL;
var init_gallery_host = __esm({
  "src/client/gallery-host.js"() {
    init_labels();
    GALLERY_PAGE = "\u753B\u5ECA";
    IMAGE_PAGE3 = "\u666E\u901A\u751F\u56FE";
    VIDEO_PAGE2 = "\u89C6\u9891\u751F\u6210";
    CANVAS_PAGE2 = "\u65E0\u9650\u753B\u5E03";
    STORAGE_KEY = "dsh-ws-gallery-items";
    TAGS_KEY = "dsh-ws-gallery-tags-v1";
    LAYOUT_KEY = "dsh-ws-gallery-layout-v1";
    HISTORY_KEY_BASE = "dsh-ws-history-v1";
    CTA_RPC_CHANNEL = "/dsh-ws";
    CTA_RPC_STORAGE_PATHS = "storage.paths";
    CTA_RPC_STORAGE_LIST = "storage.list";
    CTA_RPC_STORAGE_READ = "storage.read";
    CTA_RPC_GALLERY_ADD = "gallery.add";
    CTA_RPC_GALLERY_LIST = "gallery.list";
    CTA_RPC_GALLERY_TAGS = "gallery.tags";
    DEFAULT_PATHS = Object.freeze({
      dataDir: "",
      generated: "media/generated",
      gallery: "media/gallery",
      history: "media/history"
    });
    EMPTY_HINT = "\u753B\u5ECA\u8FD8\u662F\u7A7A\u7684\u3002\u5728\u666E\u901A\u751F\u56FE\u6216\u89C6\u9891\u7ED3\u679C\u91CC\u70B9\u300C\u52A0\u753B\u5ECA\u300D\uFF0C\u6EE1\u610F\u4F5C\u54C1\u4F1A\u6C89\u6DC0\u5230\u8FD9\u91CC\u3002";
    FILTER_ALL = "\u5168\u90E8";
  }
});

// src/client.js
var client_exports = {};
__export(client_exports, {
  COLUMNS: () => COLUMNS,
  CTA: () => CTA,
  CTA_RPC_CHANNEL: () => CTA_RPC_CHANNEL2,
  CTA_RPC_ECOM_GENERATE: () => CTA_RPC_ECOM_GENERATE,
  CTA_RPC_ENHANCE_PROMPT: () => CTA_RPC_ENHANCE_PROMPT,
  CTA_RPC_GALLERY_ADD: () => CTA_RPC_GALLERY_ADD2,
  CTA_RPC_GENERATE: () => CTA_RPC_GENERATE,
  CTA_RPC_GIF_GENERATE: () => CTA_RPC_GIF_GENERATE,
  CTA_RPC_REVERSE_PROMPT: () => CTA_RPC_REVERSE_PROMPT,
  CTA_RPC_STORAGE_PATHS: () => CTA_RPC_STORAGE_PATHS2,
  CTA_RPC_VIDEO_GENERATE: () => CTA_RPC_VIDEO_GENERATE,
  SKILL_ENTRIES: () => SKILL_ENTRIES,
  SKILL_RPC_CHANNEL: () => SKILL_RPC_CHANNEL,
  SKILL_RPC_PLAN: () => SKILL_RPC_PLAN,
  SKILL_RPC_SUGGEST: () => SKILL_RPC_SUGGEST,
  TOP_TABS: () => TOP_TABS,
  apply: () => apply,
  defaultStudioState: () => defaultStudioState,
  inject: () => inject,
  name: () => name,
  studioTree: () => studioTree
});
module.exports = __toCommonJS(client_exports);
init_labels();

// src/skills/suggest-core.js
var SUGGEST_LABEL_TO_ID = Object.freeze({
  \u7535\u5F71\u4E09\u8054: "cinema-triptych",
  \u4E09\u8054\u5C01\u9762: "triptych-cover",
  \u7535\u5F71\u6D77\u62A5: "movie-poster",
  \u4EBA\u50CF: "portrait",
  \u6444\u5F71: "photography",
  \u89D2\u8272: "casting"
});
var SUGGEST_RULES = [
  { label: "\u4E09\u8054\u5C01\u9762", keywords: ["\u4E09\u8054\u5C01\u9762", "\u9879\u76EE\u5C01\u9762", "3:4\u5C01\u9762", "3:4 \u5C01\u9762"], boost: 2 },
  { label: "\u7535\u5F71\u4E09\u8054", keywords: ["\u7535\u5F71\u4E09\u8054", "\u4E09\u8054", "21:9", "\u4E09\u955C", "\u5BBD\u94F6\u5E55", "triptych"] },
  { label: "\u7535\u5F71\u6D77\u62A5", keywords: ["\u7535\u5F71\u6D77\u62A5", "\u6D77\u62A5", "poster", "\u7247\u540D", "9:16"] },
  {
    label: "\u4EBA\u50CF",
    keywords: [
      "\u751F\u547D\u611F\u4EBA\u50CF",
      "\u751F\u547D\u611F",
      "\u4EBA\u50CF",
      "\u8096\u50CF",
      "portrait",
      "\u5199\u771F",
      "\u9762\u90E8",
      "\u8138\u5E9E",
      "\u534A\u8EAB\u50CF",
      "\u5934\u50CF"
    ]
  },
  { label: "\u6444\u5F71", keywords: ["\u6444\u5F71\u6A21\u62DF", "\u6444\u5F71", "\u7126\u6BB5", "\u80F6\u7247", "\u5149\u6BD4", "photography"] },
  { label: "\u89D2\u8272", keywords: ["\u89D2\u8272", "casting", "\u4E09\u89C6\u56FE", "\u4EBA\u7269\u8BBE\u5B9A", "\u89D2\u8272\u5F62\u8C61"] }
];
function suggestSkillsFromTheme(theme) {
  const raw = String(theme || "").trim();
  const lower = raw.toLowerCase();
  const hits = /* @__PURE__ */ new Map();
  for (const rule of SUGGEST_RULES) {
    const matched = [];
    let score = 0;
    for (const kw of rule.keywords) {
      const k = kw.toLowerCase();
      if (!k) continue;
      if (raw.includes(kw) || lower.includes(k)) {
        matched.push(kw);
        score += Math.max(2, Math.min(6, kw.length));
      }
    }
    if (!matched.length) continue;
    score += rule.boost || 0;
    const skillId = SUGGEST_LABEL_TO_ID[rule.label] || rule.label;
    const prev = hits.get(rule.label);
    if (!prev || score > prev.score) {
      hits.set(rule.label, { label: rule.label, skillId, score, matched });
    }
  }
  const suggestions = [...hits.values()].sort(
    (a, b) => b.score - a.score || a.label.localeCompare(b.label, "zh")
  );
  return {
    suggestions,
    top: suggestions[0] || null,
    disabledByScore: false,
    requiredForGenerate: false,
    note: "\u5EFA\u8BAE\u4EC5\u4F9B\u53C2\u8003\uFF1B\u4E0D\u9009 skill \u4E5F\u53EF\u51FA\u56FE"
  };
}

// src/ui/studio-stub.js
init_labels();
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
  modelId: "grok-imagine-image",
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
var TAB_STYLES = `
[data-dsh-ws-session-tabs] {
  display:flex; gap:2px; width:100%;
  font-family: var(--dsw-font, var(--dsw-font-family, inherit));
  font-size: inherit;
}
[data-dsh-ws-session-tabs] [data-dsh-ws-tab] {
  display:inline-flex; align-items:center; gap:6px;
  padding:6px 10px; border:1px solid transparent; border-radius:8px;
  background:transparent; cursor:pointer;
  font:inherit; font-weight:400; color:inherit;
}
/* Studio open: quiet outline \u2014 not a second top-nav primary */
[data-dsh-ws-session-tabs] [data-dsh-ws-tab="studio"][data-dsh-ws-tab-current] {
  font-weight:500;
  background: transparent;
  border-color: var(--dsw-alias-border-l2, rgba(0,0,0,.12));
  color: var(--dsw-alias-label-secondary, inherit);
}
[data-dsh-ws-session-tabs] [data-dsh-ws-tab="new-session"][data-dsh-ws-tab-current] {
  font-weight:600; background: var(--dsw-alias-interactive-bg-hover, transparent);
}
/* When studio module open, never leave host New Session / session rows looking selected.
   Flag lives on html/body so host remounts cannot drop the chrome clear. */
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="sessionItem"][aria-current="true"],
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="sessionItem"][data-active],
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="SessionItem"][aria-current="true"],
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="session"][aria-current="true"],
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="session"][aria-current="page"],
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="Session"][aria-current="true"],
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="Session"][data-active],
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="sessionList"] [aria-current="true"],
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="sessionList"] [data-active],
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="workspace"] [aria-current="true"],
html[data-dsh-ws-studio-open] [class*="sidebarCol"] [class*="session"][aria-current="true"],
html[data-dsh-ws-studio-open] [class*="sidebarCol"] [class*="session"][data-active],
html[data-dsh-ws-studio-open] [class*="sidebarCol"] [class*="Session"][aria-current="true"],
body[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="session"][aria-current="true"],
body[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="session"][data-active],
[data-dsh-ws-sidebar-root][data-dsh-ws-studio-open] [class*="sessionItem"][aria-current="true"],
[data-dsh-ws-sidebar-root][data-dsh-ws-studio-open] [class*="sessionItem"][data-active],
[data-pane="sidebar"][data-dsh-ws-studio-open] [class*="session"][aria-current="true"],
[class*="sidebarCol"][data-dsh-ws-studio-open] [class*="session"][aria-current="true"] {
  background: transparent !important;
  background-color: transparent !important;
  font-weight: inherit !important;
  box-shadow: none !important;
  outline: none !important;
}
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="sessionItem"][aria-current="true"]::before,
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="session"][aria-current="true"]::before,
html[data-dsh-ws-studio-open] [data-pane="sidebar"] [class*="session"][data-active]::before {
  opacity: 0 !important;
  background: transparent !important;
}
`;
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
  let styleEl;
  let current = opts.initialSelected || TAB_NEW;
  const paintSelected = (tabs) => {
    if (!(tabs instanceof HTMLElement)) return;
    for (const el of tabs.querySelectorAll("[data-dsh-ws-tab]")) {
      const on = !!current && el.dataset.dshWsTab === current;
      el.setAttribute("aria-selected", on ? "true" : "false");
      if (on) el.setAttribute("data-dsh-ws-tab-current", "");
      else el.removeAttribute("data-dsh-ws-tab-current");
    }
  };
  const clearHostSessionChrome = (scope) => {
    const root = scope instanceof HTMLElement ? scope : sidebarColumn() || document;
    const nodes = root.querySelectorAll(
      '[aria-current="true"],[aria-current="page"],[aria-selected="true"],[data-active],[data-selected]'
    );
    for (const el of nodes) {
      if (!(el instanceof HTMLElement)) continue;
      if (el.closest(ENTRY_TABS) || el.closest("[data-dsh-ws-session-tabs]")) continue;
      if (el.getAttribute("data-dsh-ws-tab")) continue;
      if (el.closest("[data-dsh-ws-studio-host]")) continue;
      const cls = String(el.className || "");
      const looksSession = /session|Session|workspace|Workspace|conversation|Conversation/i.test(cls) || /session|Session|workspace|New Session|新会话/i.test(el.textContent || "");
      if (!looksSession && !el.hasAttribute("aria-current") && !el.hasAttribute("aria-selected")) continue;
      if (!looksSession && el.hasAttribute("data-active") && !/session|Session/i.test(cls)) continue;
      try {
        if (el.hasAttribute("aria-current")) el.setAttribute("aria-current", "false");
        if (el.hasAttribute("aria-selected")) el.setAttribute("aria-selected", "false");
        if (/session|Session|workspace|Workspace/i.test(cls)) {
          el.removeAttribute("data-active");
          el.removeAttribute("data-selected");
        }
        if (/selected|active|current|session/i.test(cls)) {
          el.style.setProperty("background", "transparent", "important");
          el.style.setProperty("background-color", "transparent", "important");
          el.style.setProperty("box-shadow", "none", "important");
        }
      } catch (_) {
      }
    }
  };
  const stampStudioOpen = (on) => {
    const root = sidebarRoot();
    const col = sidebarColumn();
    const targets = [document.documentElement, document.body, root, col];
    for (const el of targets) {
      if (!(el instanceof HTMLElement)) continue;
      if (on) el.setAttribute("data-dsh-ws-studio-open", "");
      else el.removeAttribute("data-dsh-ws-studio-open");
    }
    if (on) clearHostSessionChrome(col || document);
  };
  const setSelected = (id) => {
    if (id === TAB_STUDIO) current = TAB_STUDIO;
    else if (id === TAB_NEW) current = TAB_NEW;
    else current = "";
    stampStudioOpen(current === TAB_STUDIO);
    if (tabsEl) paintSelected(tabsEl);
  };
  const place = () => {
    if (disposed) return;
    const root = sidebarRoot();
    if (!root) return;
    root.dataset.dshWsSidebarRoot = "";
    const button = newSessionButton(root);
    if (!button) return;
    if (!styleEl) {
      styleEl = document.createElement("style");
      styleEl.dataset.dshWsSidebarTabs = "";
      styleEl.textContent = TAB_STYLES;
      document.head.appendChild(styleEl);
    }
    const existing = root.querySelector(ENTRY_TABS);
    if (existing && existing.parentElement === button.parentElement) {
      tabsEl = existing;
      hiddenButton = button;
      button.style.display = "none";
      button.setAttribute("aria-hidden", "true");
      button.tabIndex = -1;
      paintSelected(existing);
      return;
    }
    existing?.remove();
    const tabs = document.createElement("div");
    tabs.dataset.dshWsSessionTabs = "";
    tabs.setAttribute("role", "tablist");
    tabs.setAttribute("aria-label", labels.studio);
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
    paintSelected(tabs);
  };
  let chromeObserver;
  let chromeQuiet = false;
  const watchHostChrome = () => {
    chromeObserver?.disconnect();
    const col = sidebarColumn();
    if (!(col instanceof HTMLElement)) return;
    chromeObserver = new MutationObserver(() => {
      if (disposed || current !== TAB_STUDIO || chromeQuiet) return;
      chromeQuiet = true;
      try {
        stampStudioOpen(true);
      } finally {
        setTimeout(() => {
          chromeQuiet = false;
        }, 0);
      }
    });
    chromeObserver.observe(col, {
      subtree: true,
      attributes: true,
      attributeFilter: ["aria-current", "aria-selected", "data-active", "data-selected", "class"]
    });
  };
  const placeAndWatch = () => {
    place();
    if (!disposed && current === TAB_STUDIO) {
      stampStudioOpen(true);
      watchHostChrome();
    }
  };
  placeAndWatch();
  observer = new MutationObserver(() => placeAndWatch());
  observer.observe(document.documentElement, { childList: true, subtree: true });
  const dispose = () => {
    disposed = true;
    observer?.disconnect();
    chromeObserver?.disconnect();
    tabsEl?.remove();
    styleEl?.remove();
    styleEl = void 0;
    stampStudioOpen(false);
    if (hiddenButton) {
      hiddenButton.style.removeProperty("display");
      hiddenButton.removeAttribute("aria-hidden");
      hiddenButton.removeAttribute("tabindex");
    }
    const root = document.querySelector(ENTRY_ROOT);
    if (root) {
      delete root.dataset.dshWsSidebarRoot;
      root.removeAttribute("data-dsh-ws-studio-open");
    }
    document.documentElement.removeAttribute("data-dsh-ws-studio-open");
    document.body?.removeAttribute("data-dsh-ws-studio-open");
  };
  return { dispose, setSelected };
}

// src/client/studio-host.js
init_labels();

// src/client/video-host.js
init_labels();
var VIDEO_PAGE = "\u89C6\u9891\u751F\u6210";
var IMAGE_PAGE = "\u666E\u901A\u751F\u56FE";
var VIDEO_DURATIONS = Object.freeze(["5\u79D2", "10\u79D2"]);
var MODE_TXT = VIDEO_MODE_TABS[0];
var MODE_IMG = VIDEO_MODE_TABS[1];
var STAGE_LABEL = "\u751F\u6210\u7ED3\u679C";
var STAGE_EMPTY_HINT = "\u751F\u6210\u540E\u663E\u793A\u5728\u8FD9\u91CC";
var HISTORY_EMPTY_HINT = HISTORY_EMPTY;
var FRAME_HINT = "\u4E0A\u4F20 / \u62D6\u62FD / \u7C98\u8D34";
var VIDEO_MODEL_EMPTY = "\u672A\u914D\u7F6E\u89C6\u9891\u6A21\u578B";
var VIDEO_CFG_HINT = "\u89C6\u9891\u6E20\u9053\u672A\u914D\u7F6E";
function humanizeVideoError(raw) {
  const s = String(raw || "").trim();
  if (!s || s === "VIDEO_NOT_CONFIGURED" || s === "HOST_PROXY_NOT_WIRED") {
    return VIDEO_CFG_HINT;
  }
  if (s === "VIDEO_STUB_NOT_WIRED") return "\u89C6\u9891\u901A\u9053\u5C1A\u672A\u63A5\u7EBF";
  if (s === "VIDEO_GENERATE_FAILED") return "\u89C6\u9891\u751F\u6210\u5931\u8D25";
  if (s === "VIDEO_GENERATE_TIMEOUT") return "\u89C6\u9891\u751F\u6210\u8D85\u65F6";
  if (s.startsWith("VIDEO_NOT_CONFIGURED")) return VIDEO_CFG_HINT;
  return s;
}
function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function videoHostStyles() {
  return `
[data-dsh-ws-studio-host] [data-ws-page="video"] {
  display:none; pointer-events:none; flex:1; min-height:0; width:100%;
}
[data-dsh-ws-studio-host][data-ws-top-page="\u89C6\u9891\u751F\u6210"] [data-ws-page="video"] {
  display:flex; pointer-events:auto;
}
[data-dsh-ws-studio-host][data-ws-top-page="\u89C6\u9891\u751F\u6210"] [data-ws-page="image"] {
  display:none !important; pointer-events:none;
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
[data-dsh-ws-studio-host] [data-ws-video-cta]:active:not([disabled]) { filter:brightness(.96); }
[data-dsh-ws-studio-host] [data-ws-video-cta]:focus-visible {
  outline:2px solid var(--dsw-alias-state-business-primary); outline-offset:2px;
}
/* Form (dock+CTA) on TOP; results stage BELOW \u2014 Critiquito B. */
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-col="studio"] {
  display:flex; flex-direction:column; justify-content:flex-start;
  align-self:flex-start; height:auto; max-height:100%; flex:1 1 auto;
}
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-dock],
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-video-dock] {
  flex:0 0 auto; display:flex; flex-direction:column; gap:4px; order:1;
  padding:8px 12px 0; background: var(--dsw-alias-bg-base, var(--dsw-alias-bg-layer-2, transparent));
  border-top:0; max-height:none; overflow:auto; min-height:0;
}
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-cta-footer],
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-video-cta-footer] {
  flex:none; margin-top:0; order:2; position:relative; z-index:2;
  padding:6px 12px 10px; background: var(--dsw-alias-bg-base, var(--dsw-alias-bg-layer-2, transparent));
  display:flex; flex-direction:column; gap:4px;
  border-bottom:1px solid var(--dsw-alias-border-l2);
}
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-video-stage] {
  /* Idle empty: hide entirely \u2014 no tall white stage with only \u300C\u751F\u6210\u540E\u663E\u793A\u5728\u8FD9\u91CC\u300D */
  display:none; flex:0 0 auto; min-height:0; flex-direction:column; gap:4px; order:3;
  margin:0; padding:0; overflow:hidden; background:transparent;
}
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-video-stage][data-busy],
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-video-stage][data-has-results],
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-video-stage]:has([data-ws-video-fail][data-visible]) {
  display:flex; flex:1.4 1 0; min-height:120px; padding:8px 12px; gap:6px;
  background: var(--dsw-alias-bg-module-platform, var(--dsw-alias-bg-layer-2, transparent));
}
/* No ::after white/muted sea under CTA */
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-col="studio"]::after {
  content: none; display: none;
}
/* E: hide image-style history rail on video tab (empty \u751F\u56FE history looks wrong) */
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-video-history],
[data-dsh-ws-studio-host] [data-ws-page="video"] [data-ws-pane-drag="video-history"] {
  display: none !important;
}
[data-dsh-ws-studio-host] [data-ws-video-cta][disabled],
[data-dsh-ws-studio-host] [data-ws-video-cta]:disabled {
  opacity:.4; cursor:not-allowed; filter:grayscale(.4); pointer-events:none; box-shadow:none;
}
[data-dsh-ws-studio-host] [data-ws-video-cta]:hover:not([disabled]):not([data-ws-cta-outline]) {
  background: var(--dsw-alias-button-primary-hover);
}
/* Unconfigured: outline secondary \u300C\u53BB\u914D\u7F6E\u300D \u2014 beat inline css.cta */
[data-dsh-ws-studio-host] [data-ws-video-cta][data-ws-cta-outline] {
  background: transparent !important;
  color: var(--dsw-alias-label-secondary) !important;
  border: 1px solid var(--dsw-alias-border-l2) !important;
  box-shadow: none !important;
  font-weight: 500;
  opacity: 1;
  filter: none;
  pointer-events: auto;
  cursor: pointer;
}
[data-dsh-ws-studio-host] [data-ws-video-cta][data-ws-cta-outline]:hover {
  background: var(--dsw-alias-interactive-bg-hover) !important;
  color: var(--dsw-alias-label-primary) !important;
}
/* Don't stack fail + empty hint */
[data-dsh-ws-studio-host] [data-ws-video-stage]:has([data-ws-video-fail][data-visible]) [data-ws-video-stage-empty-hint] {
  display: none !important;
}
[data-dsh-ws-studio-host] [data-ws-video-clarity-chip][disabled],
[data-dsh-ws-studio-host] [data-ws-video-clarity-chip]:disabled {
  opacity: .45; cursor: not-allowed; pointer-events: none;
}
`;
}
function defaultVideoState() {
  return {
    mode: MODE_TXT,
    prompt: "",
    duration: VIDEO_DURATIONS[0],
    clarity: VIDEO_CLARITY_TIERS[0],
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
      <div data-ws-history-empty style="padding:4px 2px;font-size:11px;color:${T2.fg3};opacity:.65;line-height:1.4;">${HISTORY_EMPTY_HINT}</div>
    </div>
    <button type="button" data-ws-video-history-clear style="align-self:flex-start;${css2.pill({ color: T2.fg3 })}">${HISTORY_ACTIONS.clear}</button>
  </aside>
  <div data-ws-pane-drag="video-history" title="\u62D6\u62FD\u8C03\u6574\u5386\u53F2\u680F\u5BBD\u5EA6"></div>

  <section data-ws-col="studio" data-ws-video-studio style="flex:1 1 auto;align-self:flex-start;height:auto;max-height:100%;padding:0;overflow:hidden;display:flex;flex-direction:column;min-width:0;background:${T2.layer2};">
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
            ${chipButtonsHtml("clarity", VIDEO_CLARITY_TIERS, state.clarity)}
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
        <input data-ws-video-param="model" placeholder="${VIDEO_MODEL_EMPTY}" style="padding:0 10px;height:28px;border-radius:14px;border:1px solid ${T2.border2};background:${T2.input};color:${T2.fg};font:inherit;font-size:12px;flex:0 1 10rem;min-width:5rem;width:10rem;" />
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
    syncVideoCta();
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
      list.innerHTML = `<div data-ws-history-empty style="padding:4px 2px;font-size:11px;color:${T2.fg3};opacity:.65;line-height:1.4;">${HISTORY_EMPTY_HINT}</div>`;
    }
    setStatus("\u5DF2\u6E05\u7A7A\u5386\u53F2");
  });
  let videoConfigured = false;
  const cta = page.querySelector("[data-ws-video-cta]");
  const modelInput = page.querySelector('[data-ws-video-param="model"]');
  const openVideoConfig = () => {
    setStatus(VIDEO_CFG_HINT);
    try {
      document.dispatchEvent(
        new CustomEvent("dsh-ws-open-settings", { bubbles: true, detail: { focus: "video" } })
      );
    } catch (_) {
    }
    try {
      host.dispatchEvent(
        new CustomEvent("dsh-ws-go-config", { bubbles: true, detail: { focus: "video" } })
      );
    } catch (_) {
    }
  };
  const syncVideoCta = () => {
    if (!(cta instanceof HTMLButtonElement)) return;
    const hasPrompt = String(state.prompt || "").trim().length > 0;
    if (!videoConfigured) {
      cta.disabled = false;
      cta.removeAttribute("disabled");
      cta.textContent = GO_CONFIGURE;
      cta.setAttribute("data-ws-cta-outline", "");
      cta.title = VIDEO_CFG_HINT;
      if (modelInput instanceof HTMLInputElement && !String(modelInput.value || "").trim()) {
        modelInput.placeholder = VIDEO_MODEL_EMPTY;
      }
      return;
    }
    cta.removeAttribute("data-ws-cta-outline");
    cta.textContent = VIDEO_CTA;
    const disable = !hasPrompt;
    cta.disabled = disable;
    if (disable) cta.setAttribute("disabled", "");
    else cta.removeAttribute("disabled");
    cta.title = hasPrompt ? "" : "\u8BF7\u5148\u8F93\u5165\u63D0\u793A\u8BCD";
  };
  syncVideoCta();
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
    const raw = String(message || "VIDEO_NOT_CONFIGURED");
    const notCfg = raw === "VIDEO_NOT_CONFIGURED" || raw === "HOST_PROXY_NOT_WIRED" || raw.startsWith("VIDEO_NOT_CONFIGURED") || !videoConfigured;
    const human = humanizeVideoError(raw);
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
      if (notCfg) {
        fail.removeAttribute("data-visible");
      } else {
        fail.setAttribute("data-visible", "");
        const reason = fail.querySelector("[data-ws-fail-reason]");
        if (reason) reason.textContent = `\u539F\u56E0\uFF1A${human}`;
        const retry = fail.querySelector("[data-ws-video-retry]");
        if (retry instanceof HTMLButtonElement) {
          retry.textContent = "\u91CD\u8BD5";
          retry.dataset.wsVideoRetryMode = "retry";
          retry.hidden = false;
        }
      }
    }
    setStatus(human);
    if (notCfg) {
      videoConfigured = false;
      syncVideoCta();
      if (hint instanceof HTMLElement) hint.hidden = false;
    }
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
    if (!videoConfigured) {
      openVideoConfig();
      return;
    }
    if (!String(state.prompt || "").trim()) {
      setStatus("\u8BF7\u5148\u8F93\u5165\u63D0\u793A\u8BCD");
      syncVideoCta();
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
    const retry = page.querySelector("[data-ws-video-retry]");
    const mode = retry instanceof HTMLElement ? retry.dataset.wsVideoRetryMode : "retry";
    if (mode === "configure") {
      openVideoConfig();
      return;
    }
    if (!videoConfigured) {
      showStubFailure("VIDEO_NOT_CONFIGURED");
      return;
    }
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
  const setVideoConfigured = (on) => {
    videoConfigured = !!on;
    if (videoConfigured && modelInput instanceof HTMLInputElement) {
      if (modelInput.placeholder === VIDEO_MODEL_EMPTY) {
        modelInput.placeholder = "\u6A21\u578B id\uFF08\u53EF\u9009\uFF09";
      }
    }
    syncVideoCta();
    const fail = page.querySelector("[data-ws-video-fail]");
    const hint = page.querySelector("[data-ws-video-stage-empty-hint]");
    const stage = page.querySelector("[data-ws-video-stage]");
    if (!videoConfigured) {
      if (fail instanceof HTMLElement) fail.removeAttribute("data-visible");
      if (hint instanceof HTMLElement) hint.hidden = false;
      if (stage instanceof HTMLElement) {
        stage.removeAttribute("data-busy");
        stage.removeAttribute("data-has-results");
      }
      setStatus(VIDEO_CFG_HINT);
    } else if (fail instanceof HTMLElement) {
      fail.removeAttribute("data-visible");
      if (hint instanceof HTMLElement) hint.hidden = false;
    }
  };
  return {
    state,
    setPage,
    showStubFailure,
    showBusy,
    paintVideoResult,
    setVideoProgress,
    setStatus,
    setVideoConfigured,
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
init_labels();
var CANVAS_PAGE = "\u65E0\u9650\u753B\u5E03";
var IMAGE_PAGE2 = "\u666E\u901A\u751F\u56FE";
var DEFAULT_PROJECT_NAME = "\u672A\u547D\u540D\u9879\u76EE";
var EDGE_HINT = "\u6587\u672C\u2192\u914D\u7F6E\uFF1D\u63D0\u793A\u8BCD";
var ADD_NODE_HINT = "\u9009\u914D\u7F6E\u540E\u5199\u63D0\u793A\u8BCD\u751F\u6210";
var PROMPT_FROM_LINKED = "\u63D0\u793A\u8BCD\u6765\u81EA\u5DF2\u8FDE\u6587\u672C\u8282\u70B9";
var PROMPT_WRITE_IN_TEXT = "\u5728\u5DF2\u8FDE\u6587\u672C\u8282\u70B9\u4E2D\u5199\u63D0\u793A\u8BCD";
var MODE_TXT2 = MODE_TABS[0];
var MODE_IMG2 = MODE_TABS[1];
var DEFAULT_CANVAS_MODEL = "grok-imagine-image";
var STUB_ACTION = (name2) => `\u300C${name2}\u300D\u672A\u63A5\u7EBF`;
function escapeHtml2(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function uid(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}
function upstreamResourceNodes(state, cfgId) {
  const byId = new Map(state.nodes.map((n) => [n.id, n]));
  const incoming = /* @__PURE__ */ new Map();
  for (const edge of state.edges) {
    const list = incoming.get(edge.to) || [];
    list.push(edge);
    incoming.set(edge.to, list);
  }
  const out = [];
  const visited = /* @__PURE__ */ new Set([cfgId]);
  const walk = (targetId) => {
    for (const edge of incoming.get(targetId) || []) {
      if (visited.has(edge.from)) continue;
      visited.add(edge.from);
      const src = byId.get(edge.from);
      if (!src || src.type === "genConfig") continue;
      walk(src.id);
      if (src.type === "text" || src.type === "image") out.push(src);
    }
  };
  walk(cfgId);
  return out;
}
function buildCanvasGenerateDetail(state, cfg) {
  const inputs = upstreamResourceNodes(state, cfg.id);
  const textParts = inputs.filter((n) => n.type === "text").map((n) => String(n.text || "").trim()).filter(Boolean);
  const upstreamText = textParts.join("\n\n");
  const basePrompt = String(cfg.prompt || "").trim();
  const prompt = upstreamText ? basePrompt ? `${basePrompt}

${upstreamText}` : upstreamText : basePrompt;
  const refImages = inputs.filter((n) => n.type === "image" && String(n.src || "").trim()).map((n) => ({
    id: n.id,
    url: String(n.src),
    name: n.name || `${n.id}.png`
  }));
  const mode = refImages.length ? MODE_IMG2 : MODE_TXT2;
  return {
    projectId: state.projectId,
    nodeId: cfg.id,
    prompt,
    modelId: String(cfg.modelId || "").trim() || DEFAULT_CANVAS_MODEL,
    ratio: cfg.ratio || RATIOS[0],
    count: Math.min(Math.max(Number(cfg.count) || 1, 1), 4),
    clarity: cfg.clarity || CLARITY[0],
    mode,
    refImages,
    textCount: textParts.length,
    imageCount: refImages.length
  };
}
function pickCanvasResultUrl(r) {
  if (typeof r === "string") {
    const url2 = r.trim();
    if (!url2 || /^file:/i.test(url2)) return "";
    return url2;
  }
  const url = r?.url != null ? String(r.url) : r?.dataUrl != null ? String(r.dataUrl) : r?.src != null ? String(r.src) : r?.image != null ? String(r.image) : "";
  if (!url) return "";
  if (/^file:/i.test(url)) return "";
  return url;
}
function canvasHostStyles() {
  return `
[data-dsh-ws-studio-host] [data-ws-page="canvas"] {
  display:none; pointer-events:none; flex:1; min-height:0; width:100%; flex-direction:column;
  position:relative;
}
[data-dsh-ws-studio-host][data-ws-top-page="\u65E0\u9650\u753B\u5E03"] [data-ws-page="canvas"] {
  display:flex; pointer-events:auto;
}
[data-dsh-ws-studio-host][data-ws-top-page="\u65E0\u9650\u753B\u5E03"] [data-ws-page="image"] {
  display:none !important; pointer-events:none;
}
[data-dsh-ws-studio-host][data-ws-top-page="\u65E0\u9650\u753B\u5E03"] [data-ws-page="video"],
[data-dsh-ws-studio-host][data-ws-top-page="\u65E0\u9650\u753B\u5E03"] [data-ws-page="gallery"],
[data-dsh-ws-studio-host][data-ws-top-page="\u65E0\u9650\u753B\u5E03"] [data-ws-page="ecom"] {
  display:none !important; pointer-events:none;
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
  background: var(--dsw-alias-bg-module-platform, var(--dsw-alias-bg-layer-2, transparent));
  display:flex; align-items:center; justify-content:center;
  color: var(--dsw-alias-label-tertiary); font-size:11px; text-align:center; padding:8px;
}
[data-dsh-ws-studio-host] [data-ws-canvas-img-stub][data-empty] {
  background: var(--dsw-alias-bg-module-platform, var(--dsw-alias-bg-layer-2, transparent));
  color: var(--dsw-alias-label-tertiary);
}
[data-dsh-ws-studio-host] [data-ws-canvas-img] {
  width:100%; aspect-ratio:1; object-fit:cover; border-radius:8px;
  background: var(--dsw-alias-bg-module-platform); display:block;
}
[data-dsh-ws-studio-host] [data-ws-canvas-img-stub][data-generating] {
  border-style:solid; color: var(--dsw-alias-label-secondary);
}
/* node-tools footer styled with floating composer block */
[data-dsh-ws-studio-host] [data-ws-canvas-port] {
  position:absolute; width:10px; height:10px; border-radius:999px;
  background: var(--dsw-alias-bg-base);
  border:2px solid var(--dsw-alias-state-business-primary);
  top:50%; margin-top:-5px; cursor:crosshair; z-index:2;
}
[data-dsh-ws-studio-host] [data-ws-canvas-port="in"] { left:-6px; }
[data-dsh-ws-studio-host] [data-ws-canvas-port="out"] { right:-6px; }
[data-dsh-ws-studio-host] [data-ws-canvas-minimap] {
  /* Hide stubby bottom-left white block \u2014 real minimap deferred */
  display:none !important;
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
/* Floating composer (VisioWork density cue \u2014 original CSS, --dsw-* tokens) */
[data-dsh-ws-studio-host] [data-ws-canvas-generator] {
  display:none;
  position:absolute; left:50%; bottom:14px; transform:translateX(-50%);
  z-index:6; width:min(560px, calc(100% - 24px));
  flex-direction:column; gap:8px;
  padding:10px;
  border-radius:14px;
  border:1px solid var(--dsw-alias-border-l1, var(--dsw-alias-border-l2));
  background: color-mix(in srgb, var(--dsw-alias-bg-layer-1, var(--dsw-alias-bg-base)) 96%, transparent);
  box-shadow: 0 16px 44px rgb(15 23 42 / 18%);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
[data-dsh-ws-studio-host] [data-ws-canvas-generator][data-open] {
  display:flex;
}
[data-dsh-ws-studio-host] [data-ws-canvas-gen-prompt] {
  width:100%; min-height:38px; max-height:120px; resize:none;
  border:none; outline:none; background:transparent;
  color: var(--dsw-alias-label-primary);
  font:inherit; font-size:13px; line-height:1.5; padding:2px 4px;
}
[data-dsh-ws-studio-host] [data-ws-canvas-gen-prompt]::placeholder {
  color: var(--dsw-alias-label-tertiary);
}
[data-dsh-ws-studio-host] [data-ws-canvas-gen-prompt][hidden],
[data-dsh-ws-studio-host] [data-ws-canvas-prompt-linked][hidden] {
  display:none !important;
}
[data-dsh-ws-studio-host] [data-ws-canvas-prompt-linked] {
  display:flex; align-items:center; gap:8px; min-height:28px;
  padding:2px 4px; font-size:12.5px; line-height:1.4;
  color: var(--dsw-alias-label-secondary);
}
[data-dsh-ws-studio-host] [data-ws-canvas-prompt-linked] button {
  margin-left:auto; padding:2px 8px; border:0; border-radius:6px;
  background: transparent; color: var(--dsw-alias-label-tertiary);
  cursor:pointer; font:inherit; font-size:11px;
}
[data-dsh-ws-studio-host] [data-ws-canvas-prompt-linked] button:hover {
  color: var(--dsw-alias-label-secondary);
  background: var(--dsw-alias-interactive-bg-hover);
}
[data-dsh-ws-studio-host] [data-ws-canvas-composer-row] {
  display:flex; align-items:center; gap:6px; flex-wrap:wrap; min-width:0;
}
[data-dsh-ws-studio-host] [data-ws-canvas-send] {
  flex:none; min-width:5.5rem; min-height:32px; width:auto;
  padding:0 14px; border:0; border-radius:999px;
  background: var(--dsw-alias-button-primary-fill);
  color: var(--dsw-alias-label-primary-foreground);
  cursor:pointer; font:inherit; font-weight:600; font-size:13px;
  display:inline-flex; align-items:center; justify-content:center;
}
[data-dsh-ws-studio-host] [data-ws-canvas-send]:hover:not([disabled]) {
  background: var(--dsw-alias-button-primary-hover);
}
[data-dsh-ws-studio-host] [data-ws-canvas-send][disabled],
[data-dsh-ws-studio-host] [data-ws-canvas-send]:disabled,
[data-dsh-ws-studio-host] [data-ws-canvas-send][aria-disabled="true"] {
  opacity:.38; cursor:not-allowed; filter:grayscale(.45); pointer-events:none; box-shadow:none;
  background: var(--dsw-alias-bg-layer-3, var(--dsw-alias-interactive-bg-disabled, var(--dsw-alias-bg-layer-2, #c8c8c8))) !important;
  color: var(--dsw-alias-label-tertiary, rgba(0,0,0,.45)) !important;
}
[data-dsh-ws-studio-host] [data-ws-canvas-send]:active:not([disabled]) { filter:brightness(.96); }
[data-dsh-ws-studio-host] [data-ws-canvas-send]:focus-visible {
  outline:2px solid var(--dsw-alias-state-business-primary); outline-offset:2px;
}
[data-dsh-ws-studio-host] [data-ws-canvas-status] {
  margin:0; font-size:11px; color: var(--dsw-alias-label-tertiary); line-height:1.3;
}
[data-dsh-ws-studio-host] [data-ws-canvas-chips] {
  display:flex; flex-wrap:wrap; gap:3px 4px;
}
[data-dsh-ws-studio-host] [data-ws-canvas-chips] button {
  padding:1px 7px; border:1px solid var(--dsw-alias-border-l2); border-radius:999px;
  background:transparent; color: var(--dsw-alias-label-secondary);
  font:inherit; font-size:11px; cursor:pointer; line-height:1.25;
}
[data-dsh-ws-studio-host] [data-ws-canvas-chips] button[aria-current="true"] {
  background: var(--dsw-alias-interactive-bg-active);
  color: var(--dsw-alias-label-primary);
  border-color: var(--dsw-alias-border-l4);
}
/* Image node footer actions under image \u2014 not white empty shell */
[data-dsh-ws-studio-host] [data-ws-canvas-node-tools] {
  display:flex; flex-wrap:wrap; gap:4px;
  padding:6px 8px 8px; margin:0;
  background: var(--dsw-alias-bg-module-platform, transparent);
  border-top:1px solid var(--dsw-alias-border-l2);
}
[data-dsh-ws-studio-host] [data-ws-canvas-node][data-type="image"] [data-ws-canvas-node-body] {
  padding:0; gap:0;
}
[data-dsh-ws-studio-host] [data-ws-canvas-node][data-type="image"] [data-ws-canvas-img] {
  border-radius:0; aspect-ratio:auto; max-height:220px;
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
        modelId: DEFAULT_CANVAS_MODEL,
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
    <div data-ws-canvas-prompt-linked hidden>
      <span data-ws-canvas-prompt-linked-text>${PROMPT_FROM_LINKED}</span>
      <button type="button" data-ws-canvas-prompt-expand>\u5C55\u5F00\u7F16\u8F91</button>
    </div>
    <textarea data-ws-canvas-gen-prompt rows="2" placeholder="\u5199\u63D0\u793A\u8BCD\uFF0C\u6216\u8FDE\u6587\u672C\u8282\u70B9\u540E\u751F\u6210" ></textarea>
    <div data-ws-canvas-composer-row>
      <input data-ws-canvas-param-model value="${escapeHtml2(state.nodes.find((n) => n.type === "genConfig")?.modelId || DEFAULT_CANVAS_MODEL)}" placeholder="${escapeHtml2(DEFAULT_CANVAS_MODEL)}" aria-label="${PARAM_LABELS.model}" style="padding:0 10px;height:28px;border-radius:14px;width:7.5rem;border:1px solid ${T2.border2};background:transparent;color:${T2.fg};font:inherit;font-size:11.5px;" />
      <div data-ws-canvas-chips data-param="ratio" aria-label="${PARAM_LABELS.ratio}">${chip("ratio", RATIOS, state.nodes.find((n) => n.type === "genConfig")?.ratio || RATIOS[0])}</div>
      <div data-ws-canvas-chips data-param="clarity" aria-label="${PARAM_LABELS.clarity}">${chip("clarity", CLARITY, CLARITY[0])}</div>
      <div data-ws-canvas-chips data-param="count" aria-label="${PARAM_LABELS.count}">${chip("count", COUNTS, COUNTS[0])}</div>
      <span style="flex:1"></span>
      <button type="button" data-ws-canvas-send disabled>${CTA}</button>
    </div>
    <div data-ws-canvas-node-tools-slot style="display:flex;flex-wrap:wrap;gap:4px;">
      ${nodeTools}
    </div>
    <p data-ws-canvas-status class="note">${ADD_NODE_HINT}</p>
  </div>
</div>
`;
}
function mountCanvasPage(host, opts) {
  const { T: T2, css: css2 } = opts;
  const state = defaultCanvasState();
  let activeConfigId = state.selection.find(
    (id) => state.nodes.some((n) => n.id === id && n.type === "genConfig")
  ) || null;
  let syncCanvasCtaEnabled = () => {
  };
  let generateBusy = false;
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
  const resolveActiveConfig = () => {
    const selected = state.nodes.find((n) => state.selection.includes(n.id) && n.type === "genConfig");
    if (selected) {
      activeConfigId = selected.id;
      return selected;
    }
    if (activeConfigId) {
      const kept = state.nodes.find((n) => n.id === activeConfigId && n.type === "genConfig");
      if (kept) return kept;
      activeConfigId = null;
    }
    return null;
  };
  let promptExpanded = false;
  const syncGenerator = () => {
    const selected = state.nodes.find((n) => state.selection.includes(n.id) && n.type === "genConfig");
    state.generatorOpen = !!selected;
    if (generator instanceof HTMLElement) {
      if (state.generatorOpen) generator.setAttribute("data-open", "");
      else generator.removeAttribute("data-open");
    }
    if (selected) {
      activeConfigId = selected.id;
      const ta = page.querySelector("[data-ws-canvas-gen-prompt]");
      const linkedRow = page.querySelector("[data-ws-canvas-prompt-linked]");
      const linkedLabel = page.querySelector("[data-ws-canvas-prompt-linked-text]");
      const linkedTextNodes = upstreamResourceNodes(state, selected.id).filter((n) => n.type === "text");
      const hasTextLink = linkedTextNodes.length > 0;
      const linkedFilled = linkedTextNodes.map((n) => String(n.text || "").trim()).filter(Boolean);
      if (ta instanceof HTMLTextAreaElement) {
        const composerVal = String(ta.value || "");
        if (composerVal.trim() && !String(selected.prompt || "").trim() && !hasTextLink) {
          selected.prompt = composerVal;
        }
      }
      if (hasTextLink && linkedFilled.length) {
        selected.prompt = linkedFilled.join("\n\n");
      } else if (hasTextLink && !linkedFilled.length) {
        selected.prompt = "";
      } else if (!hasTextLink && !String(selected.prompt || "").trim()) {
      }
      if (hasTextLink && !promptExpanded) {
        if (linkedRow instanceof HTMLElement) {
          linkedRow.hidden = false;
          if (linkedLabel) {
            linkedLabel.textContent = linkedFilled.length ? PROMPT_FROM_LINKED : PROMPT_WRITE_IN_TEXT;
          }
        }
        if (ta instanceof HTMLTextAreaElement) {
          ta.hidden = true;
          ta.value = selected.prompt || "";
        }
      } else {
        if (linkedRow instanceof HTMLElement) linkedRow.hidden = true;
        if (ta instanceof HTMLTextAreaElement) {
          ta.hidden = false;
          if (!promptExpanded || !String(ta.value || "").trim()) {
            ta.value = selected.prompt || "";
          }
        }
      }
      const model = page.querySelector("[data-ws-canvas-param-model]");
      if (model instanceof HTMLInputElement) {
        if (!String(selected.modelId || "").trim()) selected.modelId = DEFAULT_CANVAS_MODEL;
        model.value = selected.modelId || DEFAULT_CANVAS_MODEL;
      }
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
    try {
      syncCanvasCtaEnabled();
    } catch (_) {
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
        const src = String(n.src || "").trim();
        const generating = n.status === "generating" || n.status === "submitting";
        const err = n.error ? String(n.error) : "";
        if (src) {
          body = `<img data-ws-canvas-img src="${escapeHtml2(src)}" alt="" />`;
        } else if (generating) {
          body = `<div data-ws-canvas-img-stub data-generating>\u51FA\u56FE\u4E2D\u2026</div>`;
        } else if (err) {
          body = `<div data-ws-canvas-img-stub data-empty>${escapeHtml2(err.slice(0, 120)) || "\u51FA\u56FE\u5931\u8D25"}</div>`;
        } else {
          body = `<div data-ws-canvas-img-stub data-empty>\u62D6\u5165 / \u7C98\u8D34\u56FE\u7247</div>`;
        }
        body += `<div data-ws-canvas-node-tools>
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
          for (const edge of state.edges) {
            if (edge.from !== id) continue;
            const cfg = state.nodes.find((n) => n.id === edge.to && n.type === "genConfig");
            if (!cfg) continue;
            cfg.prompt = node.text;
          }
          if (state.selection.some((sid) => state.nodes.find((n) => n.id === sid && n.type === "genConfig"))) {
            syncGenerator();
          } else {
            try {
              syncCanvasCtaEnabled();
            } catch (_) {
            }
          }
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
          setStatus("\u5DF2\u6DFB\u52A0\u8FDE\u7EBF\uFF08\u672C\u5730\u58F3\uFF09");
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
        modelId: DEFAULT_CANVAS_MODEL,
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
      const PAD = 80;
      const FALLBACK_W = 200;
      const FALLBACK_H = 160;
      let minX = Infinity;
      let minY = Infinity;
      let maxX = -Infinity;
      let maxY = -Infinity;
      for (const n of state.nodes) {
        const el = nodesEl instanceof HTMLElement ? nodesEl.querySelector(`[data-ws-canvas-node="${n.id}"]`) : null;
        const w = el instanceof HTMLElement && el.offsetWidth ? el.offsetWidth : Number(n.width) > 0 ? Number(n.width) : FALLBACK_W;
        const h = el instanceof HTMLElement && el.offsetHeight ? el.offsetHeight : Number(n.height) > 0 ? Number(n.height) : FALLBACK_H;
        const x2 = n.x || 0;
        const y2 = n.y || 0;
        minX = Math.min(minX, x2);
        minY = Math.min(minY, y2);
        maxX = Math.max(maxX, x2 + w);
        maxY = Math.max(maxY, y2 + h);
      }
      const vpW = viewport instanceof HTMLElement && viewport.clientWidth ? viewport.clientWidth : 1280;
      const vpH = viewport instanceof HTMLElement && viewport.clientHeight ? viewport.clientHeight : 720;
      const contentW = Math.max(1, maxX - minX + PAD * 2);
      const contentH = Math.max(1, maxY - minY + PAD * 2);
      const zoom = Math.min(vpW / contentW, vpH / contentH, 1);
      const x = (vpW - (maxX + minX) * zoom) / 2;
      const y = (vpH - (maxY + minY) * zoom) / 2;
      state.viewport = { x, y, zoom };
    }
    applyTransform();
    setStatus(CANVAS_CHROME.fitAll);
  });
  page.querySelector("[data-ws-canvas-gen-prompt]")?.addEventListener("input", (e) => {
    const t = (
      /** @type {HTMLTextAreaElement} */
      e.target
    );
    const cfg = resolveActiveConfig();
    if (cfg) cfg.prompt = t.value;
  });
  page.querySelector("[data-ws-canvas-param-model]")?.addEventListener("input", (e) => {
    const t = (
      /** @type {HTMLInputElement} */
      e.target
    );
    const cfg = resolveActiveConfig();
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
  syncCanvasCtaEnabled = () => {
    if (!(sendBtn instanceof HTMLButtonElement)) return;
    const ta = page.querySelector("[data-ws-canvas-gen-prompt]");
    const composerVisible = ta instanceof HTMLTextAreaElement && !ta.hidden;
    const composer = composerVisible ? String(ta.value || "").trim() : "";
    const cfg = resolveActiveConfig() || state.nodes.find((n) => n.type === "genConfig");
    const linkedNodes = cfg ? upstreamResourceNodes(state, cfg.id).filter((n) => n.type === "text") : [];
    const hasTextLink = linkedNodes.length > 0;
    const linked = linkedNodes.map((n) => String(n.text || "").trim()).filter(Boolean);
    const cfgPrompt = hasTextLink ? linked.join("\n\n") : String(cfg?.prompt || "").trim();
    if (hasTextLink && cfg) cfg.prompt = cfgPrompt;
    const hasPrompt = !!(composer || cfgPrompt);
    const disable = generateBusy || !hasPrompt;
    sendBtn.disabled = disable;
    if (disable) {
      sendBtn.setAttribute("disabled", "");
      sendBtn.setAttribute("aria-disabled", "true");
    } else {
      sendBtn.removeAttribute("disabled");
      sendBtn.setAttribute("aria-disabled", "false");
    }
  };
  syncCanvasCtaEnabled();
  page.querySelector("[data-ws-canvas-gen-prompt]")?.addEventListener("input", () => syncCanvasCtaEnabled());
  const placeResultNodes = (cfg, count) => {
    const ids = [];
    const originX = (cfg.x || 0) + 280;
    const originY = cfg.y || 0;
    for (let i = 0; i < count; i += 1) {
      const id = uid("n-img");
      state.nodes.push({
        type: "image",
        id,
        x: originX,
        y: originY + i * 200,
        src: "",
        status: "generating",
        sourceNodeId: cfg.id
      });
      state.edges.push({ id: uid("e"), from: cfg.id, to: id });
      ids.push(id);
    }
    return ids;
  };
  const markPlaceholderError = (resultNodeIds, msg) => {
    for (const id of resultNodeIds) {
      const node = state.nodes.find((n) => n.id === id);
      if (node && node.type === "image" && !node.src) {
        node.status = "error";
        node.error = msg;
      }
    }
  };
  const applyGenerateResult = (detail) => {
    const d = detail && typeof detail === "object" ? detail : {};
    const phase = String(d.phase || "");
    const resultNodeIds = Array.isArray(d.resultNodeIds) ? d.resultNodeIds : [];
    const failPhase = phase === "failed" || phase === "error" || phase === "cancelled";
    if (d.ok && !failPhase) {
      const rawResults = Array.isArray(d.value?.results) ? d.value.results : Array.isArray(d.results) ? d.results : Array.isArray(d.value?.images) ? d.value.images : [];
      const urls = rawResults.map(pickCanvasResultUrl).filter(Boolean);
      if (!urls.length) {
        generateBusy = false;
        syncCanvasCtaEnabled();
        markPlaceholderError(resultNodeIds, "\u751F\u6210\u5B8C\u6210\u4F46\u65E0\u53EF\u7528\u56FE\u7247 URL");
        setStatus("\u751F\u6210\u5B8C\u6210\u4F46\u65E0\u53EF\u7528\u56FE\u7247 URL");
        paintNodes();
        return;
      }
      let landed = 0;
      urls.forEach((url, i) => {
        let node = resultNodeIds[i] ? state.nodes.find((n) => n.id === resultNodeIds[i]) : null;
        if (!node) {
          const cfg = state.nodes.find((n) => n.id === d.nodeId && n.type === "genConfig");
          const id = uid("n-img");
          node = {
            type: "image",
            id,
            x: (cfg?.x || 0) + 280 + i * 40,
            y: (cfg?.y || 0) + i * 200,
            src: "",
            sourceNodeId: cfg?.id
          };
          state.nodes.push(node);
          if (cfg) state.edges.push({ id: uid("e"), from: cfg.id, to: id });
        }
        if (url) {
          node.src = url;
          node.status = "success";
          node.error = void 0;
          landed += 1;
        } else if (node && node.type === "image" && !node.src) {
          node.status = "error";
          node.error = "\u672A\u8FD4\u56DE\u5BF9\u5E94\u56FE\u7247";
        }
      });
      for (let i = urls.length; i < resultNodeIds.length; i += 1) {
        const node = state.nodes.find((n) => n.id === resultNodeIds[i]);
        if (node && node.type === "image" && !node.src) {
          node.status = "error";
          node.error = "\u672A\u8FD4\u56DE\u5BF9\u5E94\u56FE\u7247";
        }
      }
      generateBusy = false;
      syncCanvasCtaEnabled();
      if (landed > 0) {
        setStatus(`\u5DF2\u51FA\u56FE ${landed} \u5F20`);
        const firstUrl = urls.find(Boolean) || "";
        host.dispatchEvent(
          new CustomEvent("dsh-ws-history-add", {
            bubbles: true,
            composed: true,
            detail: {
              source: "canvas",
              prompt: String(d.value?.prompt || d.prompt || ""),
              modelId: String(d.value?.modelId || d.modelId || DEFAULT_CANVAS_MODEL),
              results: urls.filter(Boolean).map((url) => ({ url, kind: "image" })),
              jobId: d.value?.jobId || d.jobId,
              phase: "done"
            }
          })
        );
        if (firstUrl) {
          host.dispatchEvent(
            new CustomEvent("dsh-ws-gallery-add", {
              bubbles: true,
              composed: true,
              detail: { src: firstUrl, prompt: String(d.value?.prompt || ""), source: "canvas" }
            })
          );
        }
      } else {
        setStatus("\u751F\u6210\u5B8C\u6210\u4F46\u65E0\u53EF\u7528\u56FE\u7247 URL");
      }
      paintNodes();
      return;
    }
    if (phase === "cancelled") {
      markPlaceholderError(resultNodeIds, "\u5DF2\u53D6\u6D88");
      generateBusy = false;
      syncCanvasCtaEnabled();
      setStatus("\u5BA2\u6237\u7AEF\u5DF2\u53D6\u6D88\uFF1B\u5BBF\u4E3B\u53D6\u6D88\u672A\u6302");
      paintNodes();
      return;
    }
    const msg = String(d.error || "\u753B\u5E03\u51FA\u56FE\u5931\u8D25");
    markPlaceholderError(resultNodeIds, msg);
    generateBusy = false;
    syncCanvasCtaEnabled();
    setStatus(msg);
    paintNodes();
  };
  const onCanvasGenerateResult = (ev) => {
    applyGenerateResult(ev?.detail && typeof ev.detail === "object" ? ev.detail : {});
  };
  document.addEventListener("dsh-ws-canvas-generate-result", onCanvasGenerateResult);
  host.addEventListener("dsh-ws-canvas-generate-result", onCanvasGenerateResult);
  sendBtn?.addEventListener("click", () => {
    let cfg = resolveActiveConfig();
    if (!cfg) {
      const configs = state.nodes.filter((n) => n.type === "genConfig");
      if (configs.length === 1) cfg = configs[0];
    }
    if (!cfg) {
      setStatus("\u8BF7\u5148\u9009\u4E2D\u751F\u6210\u914D\u7F6E\u8282\u70B9");
      return;
    }
    if (generateBusy) {
      setStatus("\u5DF2\u6709\u753B\u5E03\u51FA\u56FE\u4EFB\u52A1\u8FDB\u884C\u4E2D\u2026");
      return;
    }
    const ta = page.querySelector("[data-ws-canvas-gen-prompt]");
    const composer = ta instanceof HTMLTextAreaElement ? String(ta.value || "") : "";
    if (composer.trim()) cfg.prompt = composer;
    else if (ta instanceof HTMLTextAreaElement && String(cfg.prompt || "").trim()) {
    } else if (ta instanceof HTMLTextAreaElement) {
      cfg.prompt = composer;
    }
    const detail = buildCanvasGenerateDetail(state, cfg);
    if (!String(detail.prompt || "").trim()) {
      setStatus("\u8BF7\u5148\u8F93\u5165\u63D0\u793A\u8BCD\uFF08\u6587\u672C\u8282\u70B9\u6216\u5E95\u90E8\u8F93\u5165\u6846\uFF09");
      return;
    }
    if (!String(detail.modelId || "").trim()) detail.modelId = DEFAULT_CANVAS_MODEL;
    cfg.modelId = detail.modelId;
    const modelInput = page.querySelector("[data-ws-canvas-param-model]");
    if (modelInput instanceof HTMLInputElement) modelInput.value = detail.modelId;
    const resultNodeIds = placeResultNodes(cfg, detail.count);
    detail.resultNodeIds = resultNodeIds;
    generateBusy = true;
    syncCanvasCtaEnabled();
    setStatus(
      detail.mode === MODE_IMG2 ? `\u56FE\u751F\u56FE\u63D0\u4EA4\u4E2D\u2026\uFF08\u53C2\u8003\u56FE ${detail.imageCount}\uFF09` : "\u6587\u751F\u56FE\u63D0\u4EA4\u4E2D\u2026"
    );
    paintNodes();
    host.dispatchEvent(
      new CustomEvent("dsh-ws-canvas-generate", {
        bubbles: true,
        composed: true,
        detail
      })
    );
  });
  const addImageFromDataUrl = (dataUrl, name2, at) => {
    const node = {
      type: "image",
      id: uid("n-img"),
      x: at?.x ?? 120 + state.nodes.length * 24,
      y: at?.y ?? 140 + state.nodes.length * 16,
      src: dataUrl,
      name: name2 || "paste.png",
      status: "success"
    };
    state.nodes.push(node);
    state.selection = [node.id];
    paintNodes();
    setStatus(`\u5DF2\u6DFB\u52A0${CANVAS_NODES.image}`);
    return node;
  };
  const readFileAsDataUrl = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(typeof reader.result === "string" ? reader.result : "");
    reader.onerror = () => reject(reader.error || new Error("read failed"));
    reader.readAsDataURL(file);
  });
  viewport?.addEventListener("dragover", (e) => {
    e.preventDefault();
  });
  viewport?.addEventListener("drop", async (e) => {
    e.preventDefault();
    if (!(e instanceof DragEvent) || !(viewport instanceof HTMLElement)) return;
    const files = [...e.dataTransfer?.files || []].filter((f) => /^image\//.test(f.type));
    if (!files.length) return;
    const rect = viewport.getBoundingClientRect();
    const zoom = state.viewport.zoom || 1;
    const x = (e.clientX - rect.left - state.viewport.x) / zoom;
    const y = (e.clientY - rect.top - state.viewport.y) / zoom;
    for (let i = 0; i < files.length; i += 1) {
      try {
        const dataUrl = await readFileAsDataUrl(files[i]);
        if (dataUrl) addImageFromDataUrl(dataUrl, files[i].name, { x: x + i * 24, y: y + i * 16 });
      } catch (_) {
        setStatus("\u56FE\u7247\u8BFB\u53D6\u5931\u8D25");
      }
    }
  });
  page.addEventListener("paste", async (e) => {
    if (!(e instanceof ClipboardEvent)) return;
    const items = [...e.clipboardData?.items || []];
    const imgItem = items.find((it) => it.type && /^image\//.test(it.type));
    if (!imgItem) return;
    const file = imgItem.getAsFile();
    if (!file) return;
    e.preventDefault();
    try {
      const dataUrl = await readFileAsDataUrl(file);
      if (dataUrl) addImageFromDataUrl(dataUrl, file.name || "paste.png");
    } catch (_) {
      setStatus("\u7C98\u8D34\u56FE\u7247\u5931\u8D25");
    }
  });
  page.querySelector("[data-ws-canvas-prompt-expand]")?.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    promptExpanded = true;
    syncGenerator();
    const ta = page.querySelector("[data-ws-canvas-gen-prompt]");
    if (ta instanceof HTMLTextAreaElement) {
      ta.hidden = false;
      ta.focus();
    }
  });
  const onCanvasIngest = (ev) => {
    const detail = ev?.detail && typeof ev.detail === "object" ? ev.detail : {};
    const src = typeof detail.src === "string" ? detail.src : "";
    if (!src) return;
    const node = {
      type: "image",
      id: uid("n-img"),
      x: 120 + state.nodes.length * 24,
      y: 140 + state.nodes.length * 16,
      src,
      name: "studio.png",
      status: "success",
      prompt: typeof detail.prompt === "string" ? detail.prompt : ""
    };
    state.nodes.push(node);
    state.selection = [node.id];
    paintNodes();
    paintEdges();
    paintMinimap();
    setStatus(`\u5DF2\u6DFB\u52A0${CANVAS_NODES.image}`);
  };
  document.addEventListener("dsh-ws-canvas-ingest", onCanvasIngest);
  host.addEventListener("dsh-ws-canvas-ingest", onCanvasIngest);
  applyTransform();
  paintNodes();
  syncGenerator();
  const setPage = (tab) => {
    const name2 = String(tab || IMAGE_PAGE2);
    host.setAttribute("data-ws-top-page", name2);
  };
  return {
    state,
    setPage,
    setStatus,
    applyGenerateResult,
    dispose() {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("keyup", onKeyUp);
      document.removeEventListener("dsh-ws-canvas-generate-result", onCanvasGenerateResult);
      host.removeEventListener("dsh-ws-canvas-generate-result", onCanvasGenerateResult);
      document.removeEventListener("dsh-ws-canvas-ingest", onCanvasIngest);
      host.removeEventListener("dsh-ws-canvas-ingest", onCanvasIngest);
      page.remove();
      styleEl?.remove();
    }
  };
}

// src/client/gif-host.js
init_labels();
var GIF_STUB_NOT_WIRED = "GIF_STUB_NOT_WIRED";
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
        <span style="font-size:11px;color:${T2.fg3};">\u591A\u5E27 / \u7CBE\u7075\u8868</span>
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

      <div data-ws-gif-results hidden style="display:none;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:8px;"></div>

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
  const showStubFailure = (message) => {
    const msg = String(message || GIF_STUB_NOT_WIRED);
    setStatus(msg);
    setHostStatus(msg);
  };
  const cta = overlay.querySelector("[data-ws-gif-cta]");
  if (cta instanceof HTMLButtonElement) {
    cta.disabled = false;
    cta.removeAttribute("disabled");
  }
  cta?.addEventListener("click", () => {
    setStatus("\u7B49\u5F85\u5BBF\u4E3B\u8FDB\u5EA6\u2026");
    setHostStatus("\u7B49\u5F85\u5BBF\u4E3B\u8FDB\u5EA6\u2026");
    host.dispatchEvent(
      new CustomEvent("dsh-ws-gif-generate", {
        bubbles: true,
        detail: {
          prompt: state.prompt,
          frameCount: state.frameCount,
          fps: state.fps,
          loops: state.loops,
          size: state.size
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
    setStatus("GIF \xB7 \u591A\u5E27\u53C2\u6570\u53EF\u8C03");
    setHostStatus("GIF");
  };
  overlay.querySelector("[data-ws-gif-close]")?.addEventListener("click", close);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });
  paintFrames();
  paintChips();
  const paintGifResult = (value) => {
    const phase = String(value?.phase || "");
    const err = value?.error != null ? String(value.error) : "";
    if (phase === "failed" || phase === "error") {
      showStubFailure(err || "GIF_NOT_CONFIGURED");
      return;
    }
    const list = Array.isArray(value?.results) ? value.results : [];
    const urls = list.map((r) => r?.url).filter((u) => typeof u === "string" && u);
    if (!urls.length) {
      showStubFailure(err || "GIF_NOT_CONFIGURED");
      return;
    }
    const box = overlay.querySelector("[data-ws-gif-results]");
    if (box instanceof HTMLElement) {
      box.hidden = false;
      box.style.display = "grid";
      box.innerHTML = urls.map(
        (url) => `<div data-ws-gif-result-card style="border-radius:8px;overflow:hidden;border:1px solid var(--dsw-alias-border-l2);background:var(--dsw-alias-bg-layer-1);"><img src="${escapeHtml3(url)}" alt="GIF \u7CBE\u7075\u8868" style="width:100%;display:block;max-height:280px;object-fit:contain;background:#111;" /></div>`
      ).join("");
    }
    const elapsed = value?.elapsedMs != null ? Math.round(Number(value.elapsedMs) / 1e3) : null;
    const status = elapsed != null ? `GIF \u5B8C\u6210 \xB7 ${elapsed}s \xB7 ${urls.length} \u56FE` : `GIF \u5B8C\u6210 \xB7 ${urls.length} \u56FE`;
    setStatus(status);
    setHostStatus(status);
  };
  return {
    state,
    open,
    close,
    isOpen: () => overlay.hasAttribute("data-open"),
    showStubFailure,
    paintGifResult,
    setStatus,
    dispose: () => {
      overlay.remove();
      styleEl?.remove();
    }
  };
}

// src/client/ui-design-host.js
init_labels();
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
[data-dsh-ws-studio-host] [data-ws-ui-step][data-done] {
  border-color: var(--dsw-alias-state-business-primary);
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
  display:none; position:relative; max-height:320px; border-radius:10px;
  overflow:hidden; border:1px solid var(--dsw-alias-border-l2);
  background: var(--dsw-alias-bg-layer-1); user-select:none;
}
[data-dsh-ws-studio-host] [data-ws-ui-preview][data-filled] { display:block; }
[data-dsh-ws-studio-host] [data-ws-ui-preview] img {
  width:100%; max-height:320px; object-fit:contain; display:block; pointer-events:none;
}
[data-dsh-ws-studio-host] [data-ws-ui-box-layer] {
  position:absolute; inset:0; cursor:crosshair;
}
[data-dsh-ws-studio-host] [data-ws-ui-box] {
  position:absolute; border:1.5px solid var(--dsw-alias-state-business-primary);
  background: color-mix(in srgb, var(--dsw-alias-state-business-primary) 18%, transparent);
  box-sizing:border-box; pointer-events:none;
}
[data-dsh-ws-studio-host] [data-ws-ui-box][data-draft] {
  border-style:dashed; opacity:.85;
}
[data-dsh-ws-studio-host] [data-ws-ui-body] {
  display:flex; flex-direction:column; gap:10px; flex:1; min-height:0;
}
[data-dsh-ws-studio-host] [data-ws-ui-box-list] {
  display:flex; flex-wrap:wrap; gap:6px; font-size:11.5px;
  color: var(--dsw-alias-label-secondary);
}
`;
}
function defaultUiDesignState() {
  return {
    step: UI_DESIGN_STEPS[0],
    designFile: (
      /** @type {{ id: string, url: string, name?: string, width?: number, height?: number } | null} */
      null
    ),
    /** @type {Array<{ id: string, x: number, y: number, w: number, h: number }>} normalized 0–1 */
    boxes: [],
    reverseNote: ""
  };
}
async function blobUrlToDataUrl(blobUrl) {
  const res = await fetch(blobUrl);
  const blob = await res.blob();
  return await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(reader.error || new Error("read failed"));
    reader.readAsDataURL(blob);
  });
}
function mountUiDesignHost(host, opts) {
  const { T: T2, css: css2 } = opts;
  const state = defaultUiDesignState();
  const setHostStatus = typeof opts.setStatus === "function" ? opts.setStatus : () => {
  };
  const getRpc = typeof opts.getRpc === "function" ? opts.getRpc : null;
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
        <span style="font-size:11px;color:${T2.fg3};">\u672C\u5730\u9884\u89C8 \xB7 \u6807\u6CE8\u53EF\u8D70</span>
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
            <span style="font-size:11px;color:${T2.fg3};">\u672C\u5730 \xB7 \u62D6\u62FD \u2192 \u81EA\u52A8\u8FDB\u9884\u89C8</span>
            <span style="flex:1"></span>
            <button type="button" data-ws-ui-upload style="${css2.pill({ size: "11px", fill: T2.module })}">\u4E0A\u4F20</button>
            <input type="file" data-ws-ui-file accept="image/*" hidden />
          </div>
          <div data-ws-ui-drop tabindex="0">\u70B9\u51FB\u3001\u62D6\u5165\u8BBE\u8BA1\u7A3F</div>
          <div data-ws-ui-preview data-ws-ui-preview-upload><img alt="\u8BBE\u8BA1\u7A3F" /></div>
        </div>

        <div data-ws-ui-step-panel data-step="${UI_DESIGN_STEPS[1]}" hidden>
          <p style="margin:0;font-size:12.5px;color:${T2.fg2};">
            ${UI_DESIGN_LABELS.aiSlice}\uFF1ANova \u6D41\u7A0B\u8981\u6C42\u52FE\u9009\u300C${UI_DESIGN_LABELS.confirm}\u300D\u540E\u624D\u771F\u5207\u3002
            \u6B64\u5904\u4E0D\u5047\u88C5\u300C\u5DF2\u5B8C\u6210\u5207\u56FE\u300D\u2014\u2014\u82E5\u5DF2\u63A5 reversePrompt \u53EF\u8BD5\u4E00\u6B21\u8BC6\u56FE\u5907\u6CE8\uFF1B\u5426\u5219\u5982\u5B9E\u62A5\u672A\u63A5\u7EBF\u3002
          </p>
          <label style="display:inline-flex;align-items:center;gap:6px;font-size:12px;color:${T2.fg2};">
            <input type="checkbox" data-ws-ui-confirm /> ${UI_DESIGN_LABELS.confirm}
          </label>
          <div style="display:flex;gap:6px;flex-wrap:wrap;">
            <button type="button" data-ws-ui-run-slice style="${css2.pill({ pad: "6px 12px", fill: T2.module })}" disabled>${UI_DESIGN_LABELS.aiSlice}</button>
            <button type="button" data-ws-ui-try-reverse style="${css2.pill({ pad: "6px 12px" })}" disabled>\u8BD5\u8BC6\u56FE\u5907\u6CE8</button>
          </div>
          <pre data-ws-ui-reverse-out style="margin:0;font-size:11.5px;white-space:pre-wrap;color:${T2.fg2};max-height:8em;overflow:auto;"></pre>
        </div>

        <div data-ws-ui-step-panel data-step="${UI_DESIGN_STEPS[2]}" hidden>
          <p style="margin:0;font-size:12.5px;color:${T2.fg2};">
            \u9884\u89C8\u4E0E\u53EF\u9009\u6807\u6CE8\uFF1A\u5728\u56FE\u4E0A\u62D6\u62FD\u753B\u6846\uFF08\u672C\u5730\u5750\u6807\uFF0C\u975E AI \u5207\u56FE\u7ED3\u679C\uFF09\u3002
          </p>
          <div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;">
            <button type="button" data-ws-ui-view="${UI_DESIGN_LABELS.original}" style="${css2.pill()}" data-active>${UI_DESIGN_LABELS.original}</button>
            <button type="button" data-ws-ui-clear-boxes style="${css2.pill()}">\u6E05\u7A7A\u6807\u6CE8</button>
            <span style="font-size:11px;color:${T2.fg3};">\u62D6\u62FD\u65B0\u5EFA\u6846 \xB7 \u7F29\u653E/\u5438\u9644\u7B49\u7F16\u8F91\u5668\u80FD\u529B\u672A\u63A5\u7EBF</span>
          </div>
          <div data-ws-ui-preview data-ws-ui-preview-edit>
            <img alt="\u8BBE\u8BA1\u7A3F\u9884\u89C8" />
            <div data-ws-ui-box-layer></div>
          </div>
          <div data-ws-ui-box-list></div>
        </div>

        <div data-ws-ui-step-panel data-step="${UI_DESIGN_STEPS[3]}" hidden>
          <p style="margin:0;font-size:12.5px;color:${T2.fg2};">\u7D20\u6750\u5904\u7406\uFF08\u7B97\u6CD5\u62A0\u900F\u660E / AI \u62A0\u900F\u660E / SVG\uFF09\u672A\u63A5\u7EBF\uFF0C\u4E0D\u5047\u88C5\u5DF2\u4EA7\u51FA\u900F\u660E\u56FE\u3002</p>
          <div style="display:flex;gap:6px;flex-wrap:wrap;">
            <button type="button" data-ws-ui-mat style="${css2.pill()}">${UI_DESIGN_LABELS.algoCutout}</button>
            <button type="button" data-ws-ui-mat style="${css2.pill()}">${UI_DESIGN_LABELS.aiCutout}</button>
            <button type="button" data-ws-ui-mat style="${css2.pill()}">${UI_DESIGN_LABELS.algoSvg}</button>
            <button type="button" data-ws-ui-mat style="${css2.pill()}">${UI_DESIGN_LABELS.aiSvg}</button>
          </div>
        </div>

        <div data-ws-ui-step-panel data-step="${UI_DESIGN_STEPS[4]}" hidden>
          <p style="margin:0;font-size:12.5px;color:${T2.fg2};">\u80CC\u666F\u586B\u5145\uFF08\u672C\u5730\u5408\u6210 / AI \u539F\u56FE\uFF09\u672A\u63A5\u7EBF\u3002</p>
          <div style="display:flex;gap:6px;flex-wrap:wrap;">
            <button type="button" data-ws-ui-bg style="${css2.pill()}">${UI_DESIGN_LABELS.localComposite}</button>
            <button type="button" data-ws-ui-bg style="${css2.pill()}">${UI_DESIGN_LABELS.aiOriginal}</button>
          </div>
        </div>

        <div data-ws-ui-step-panel data-step="${UI_DESIGN_STEPS[5]}" hidden>
          <p style="margin:0;font-size:12.5px;color:${T2.fg2};">\u7F51\u9875\u590D\u523B \xB7 iframe \u9884\u89C8\u672A\u63A5\u7EBF\uFF08\u9700\u5148\u6709\u771F\u5B9E\u5207\u56FE\u8D44\u4EA7\uFF09\u3002</p>
        </div>

        <div data-ws-ui-step-panel data-step="${UI_DESIGN_STEPS[6]}" hidden>
          <p style="margin:0;font-size:12.5px;color:${T2.fg2};" data-ws-ui-export-tip>
            \u53EF\u5BFC\u51FA\u672C\u5730\u6807\u6CE8 JSON\uFF08\u6587\u4EF6\u540D + \u6846\u5750\u6807\uFF09\u3002\u5207\u7247\u5305 ZIP / \u5B8C\u6574\u8BBE\u8BA1\u5305\u672A\u63A5\u7EBF \u2014 \u4E0D\u4F1A\u5199\u6210\u300C\u5DF2\u5B8C\u6210\u5207\u56FE\u300D\u3002
          </p>
          <button type="button" data-ws-ui-export style="${css2.pill({ pad: "8px 14px", fill: T2.module })}">${UI_DESIGN_LABELS.export}\u6807\u6CE8 JSON</button>
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
  const stepIndex = (name2) => UI_DESIGN_STEPS.indexOf(name2);
  const paintSteps = () => {
    const curIdx = stepIndex(state.step);
    overlay.querySelectorAll("[data-ws-ui-step]").forEach((btn) => {
      const name2 = btn.getAttribute("data-ws-ui-step") || "";
      const on = name2 === state.step;
      const idx = stepIndex(name2);
      btn.setAttribute("aria-current", on ? "true" : "false");
      if (on) btn.setAttribute("data-active", "");
      else btn.removeAttribute("data-active");
      if (idx >= 0 && idx < curIdx && (state.designFile || idx === 0)) btn.setAttribute("data-done", "");
      else btn.removeAttribute("data-done");
    });
    overlay.querySelectorAll("[data-ws-ui-step-panel]").forEach((panel) => {
      if (!(panel instanceof HTMLElement)) return;
      panel.hidden = panel.getAttribute("data-step") !== state.step;
    });
  };
  const paintBoxes = () => {
    overlay.querySelectorAll("[data-ws-ui-box-layer]").forEach((layer) => {
      if (!(layer instanceof HTMLElement)) return;
      layer.innerHTML = state.boxes.map(
        (b) => `<div data-ws-ui-box style="left:${b.x * 100}%;top:${b.y * 100}%;width:${b.w * 100}%;height:${b.h * 100}%;"></div>`
      ).join("");
    });
    const list = overlay.querySelector("[data-ws-ui-box-list]");
    if (list instanceof HTMLElement) {
      if (!state.boxes.length) {
        list.textContent = "\u5C1A\u65E0\u6807\u6CE8\u6846";
      } else {
        list.innerHTML = state.boxes.map(
          (b, i) => `<span style="border:1px solid ${T2.border2};border-radius:999px;padding:2px 8px;">#${i + 1} ${(b.w * 100).toFixed(0)}%\xD7${(b.h * 100).toFixed(0)}%</span>`
        ).join("");
      }
    }
  };
  const paintPreview = () => {
    overlay.querySelectorAll("[data-ws-ui-preview]").forEach((preview) => {
      if (!(preview instanceof HTMLElement)) return;
      const img = preview.querySelector("img");
      if (state.designFile?.url && img instanceof HTMLImageElement) {
        img.src = state.designFile.url;
        preview.setAttribute("data-filled", "");
      } else {
        preview.removeAttribute("data-filled");
        if (img instanceof HTMLImageElement) img.removeAttribute("src");
      }
    });
    const drop2 = overlay.querySelector("[data-ws-ui-drop]");
    if (drop2 instanceof HTMLElement) {
      drop2.style.display = state.designFile ? "none" : "";
    }
    paintBoxes();
    const hasFile = !!state.designFile;
    overlay.querySelectorAll("[data-ws-ui-run-slice], [data-ws-ui-try-reverse]").forEach((btn) => {
      if (!(btn instanceof HTMLButtonElement)) return;
      if (btn.hasAttribute("data-ws-ui-run-slice")) {
        const confirm2 = overlay.querySelector("[data-ws-ui-confirm]");
        btn.disabled = !(hasFile && confirm2 instanceof HTMLInputElement && confirm2.checked);
      } else {
        btn.disabled = !hasFile;
      }
    });
  };
  const goStep = (stepName, statusText) => {
    state.step = stepName;
    paintSteps();
    paintPreview();
    if (statusText) setStatus(statusText);
  };
  const setFile = (file) => {
    if (!(file instanceof File) || !file.type.startsWith("image/")) {
      setStatus("\u8BF7\u9009\u62E9\u56FE\u7247\u6587\u4EF6");
      return;
    }
    if (state.designFile?.url?.startsWith("blob:")) {
      try {
        URL.revokeObjectURL(state.designFile.url);
      } catch (_) {
      }
    }
    const url = URL.createObjectURL(file);
    state.designFile = { id: `ui-${Date.now()}`, url, name: file.name };
    state.boxes = [];
    state.reverseNote = "";
    const out = overlay.querySelector("[data-ws-ui-reverse-out]");
    if (out) out.textContent = "";
    paintPreview();
    goStep(UI_DESIGN_STEPS[2], `\u5DF2\u8F7D\u5165\u300C${file.name || "image"}\u300D\xB7 \u53EF\u5728\u9884\u89C8\u4E0A\u62D6\u62FD\u6807\u6CE8`);
    setHostStatus("UI \u8BBE\u8BA1 \xB7 \u5DF2\u4E0A\u4F20 \xB7 \u9884\u89C8");
  };
  overlay.querySelectorAll("[data-ws-ui-step]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = btn.getAttribute("data-ws-ui-step") || UI_DESIGN_STEPS[0];
      if (next !== UI_DESIGN_STEPS[0] && !state.designFile) {
        setStatus("\u8BF7\u5148\u4E0A\u4F20\u8BBE\u8BA1\u7A3F");
        return;
      }
      goStep(next, `\u6B65\u9AA4\uFF1A${next}`);
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
  const editLayer = overlay.querySelector("[data-ws-ui-preview-edit] [data-ws-ui-box-layer]");
  let dragStart = null;
  let draftEl = null;
  const normPoint = (layer, clientX, clientY) => {
    const rect = layer.getBoundingClientRect();
    if (!rect.width || !rect.height) return { x: 0, y: 0 };
    return {
      x: Math.min(1, Math.max(0, (clientX - rect.left) / rect.width)),
      y: Math.min(1, Math.max(0, (clientY - rect.top) / rect.height))
    };
  };
  editLayer?.addEventListener("mousedown", (e) => {
    if (!(editLayer instanceof HTMLElement) || !state.designFile) return;
    if (e.button !== 0) return;
    e.preventDefault();
    dragStart = normPoint(editLayer, e.clientX, e.clientY);
    draftEl = document.createElement("div");
    draftEl.setAttribute("data-ws-ui-box", "");
    draftEl.setAttribute("data-draft", "");
    editLayer.appendChild(draftEl);
  });
  const onMove = (e) => {
    if (!dragStart || !(draftEl instanceof HTMLElement) || !(editLayer instanceof HTMLElement)) return;
    const cur = normPoint(editLayer, e.clientX, e.clientY);
    const x = Math.min(dragStart.x, cur.x);
    const y = Math.min(dragStart.y, cur.y);
    const w = Math.abs(cur.x - dragStart.x);
    const h = Math.abs(cur.y - dragStart.y);
    draftEl.style.left = `${x * 100}%`;
    draftEl.style.top = `${y * 100}%`;
    draftEl.style.width = `${w * 100}%`;
    draftEl.style.height = `${h * 100}%`;
  };
  const onUp = (e) => {
    if (!dragStart || !(editLayer instanceof HTMLElement)) {
      dragStart = null;
      draftEl = null;
      return;
    }
    const cur = normPoint(editLayer, e.clientX, e.clientY);
    const x = Math.min(dragStart.x, cur.x);
    const y = Math.min(dragStart.y, cur.y);
    const w = Math.abs(cur.x - dragStart.x);
    const h = Math.abs(cur.y - dragStart.y);
    draftEl?.remove();
    draftEl = null;
    dragStart = null;
    if (w < 0.02 || h < 0.02) return;
    state.boxes.push({ id: `box-${Date.now()}-${state.boxes.length}`, x, y, w, h });
    paintBoxes();
    setStatus(`\u5DF2\u6DFB\u52A0\u6807\u6CE8\u6846\uFF08\u5171 ${state.boxes.length}\uFF09`);
  };
  document.addEventListener("mousemove", onMove);
  document.addEventListener("mouseup", onUp);
  overlay.querySelector("[data-ws-ui-clear-boxes]")?.addEventListener("click", () => {
    state.boxes = [];
    paintBoxes();
    setStatus("\u5DF2\u6E05\u7A7A\u6807\u6CE8");
  });
  const confirm = overlay.querySelector("[data-ws-ui-confirm]");
  const runSlice = overlay.querySelector("[data-ws-ui-run-slice]");
  confirm?.addEventListener("change", () => {
    paintPreview();
  });
  runSlice?.addEventListener("click", () => {
    if (!state.designFile) {
      setStatus("\u8BF7\u5148\u4E0A\u4F20\u8BBE\u8BA1\u7A3F");
      return;
    }
    if (!(confirm instanceof HTMLInputElement) || !confirm.checked) {
      setStatus(`\u8BF7\u5148\u52FE\u9009\u300C${UI_DESIGN_LABELS.confirm}\u300D`);
      return;
    }
    setStatus(`${UI_DESIGN_LABELS.aiSlice} \u672A\u63A5\u7EBF\uFF08\u4E0D\u4F1A\u5199\u5165\u5207\u56FE\u8D44\u4EA7\uFF09`);
    setHostStatus(`${UI_DESIGN_LABELS.aiSlice} \u672A\u63A5\u7EBF`);
  });
  overlay.querySelector("[data-ws-ui-try-reverse]")?.addEventListener("click", async () => {
    if (!state.designFile?.url) {
      setStatus("\u8BF7\u5148\u4E0A\u4F20\u8BBE\u8BA1\u7A3F");
      return;
    }
    const out = overlay.querySelector("[data-ws-ui-reverse-out]");
    const rpc = getRpc?.();
    if (!rpc || typeof rpc.call !== "function") {
      state.reverseNote = "";
      if (out) out.textContent = "VISION_NOT_CONFIGURED / reversePrompt \u672A\u63A5\u7EBF";
      setStatus("VISION_NOT_CONFIGURED");
      return;
    }
    setStatus("\u8BC6\u56FE\u5907\u6CE8\u4E2D\u2026");
    try {
      const dataUrl = await blobUrlToDataUrl(state.designFile.url);
      const result = await rpc.call("/dsh-ws", "reversePrompt", {
        dataUrl,
        imageUrl: dataUrl,
        instruction: "\u7528\u4E00\u4E24\u53E5\u4E2D\u6587\u63CF\u8FF0\u8FD9\u5F20 UI \u8BBE\u8BA1\u7A3F\u7684\u4E3B\u8981\u5E03\u5C40\u4E0E\u7EC4\u4EF6\uFF0C\u4E0D\u8981\u7F16\u9020\u5207\u56FE\u7ED3\u679C\u3002"
      });
      if (result?.ok && result.value?.prompt) {
        state.reverseNote = String(result.value.prompt);
        if (out) out.textContent = state.reverseNote;
        setStatus("\u8BC6\u56FE\u5907\u6CE8\u5B8C\u6210\uFF08\u975E\u5207\u56FE\uFF09");
      } else {
        const code = result?.error?.code ? String(result.error.code) : "";
        const msg = result?.error?.message ? String(result.error.message) : "\u8BC6\u56FE\u5931\u8D25";
        if (code === "VISION_NOT_CONFIGURED") {
          if (out) out.textContent = "VISION_NOT_CONFIGURED";
          setStatus("VISION_NOT_CONFIGURED");
        } else if (code === "UNKNOWN_ENDPOINT" || code === "HOST_PROXY_NOT_WIRED") {
          if (out) out.textContent = "\u300C\u53CD\u63A8\u63D0\u793A\u8BCD\u300D\u672A\u63A5\u7EBF";
          setStatus("\u300C\u53CD\u63A8\u63D0\u793A\u8BCD\u300D\u672A\u63A5\u7EBF");
        } else {
          if (out) out.textContent = code ? `${code}: ${msg}` : msg;
          setStatus(code ? `\u8BC6\u56FE\u5931\u8D25\uFF1A${code}` : `\u8BC6\u56FE\u5931\u8D25\uFF1A${msg}`);
        }
      }
    } catch (e) {
      const code = e?.code ? String(e.code) : "";
      if (code === "VISION_NOT_CONFIGURED") {
        if (out) out.textContent = "VISION_NOT_CONFIGURED";
        setStatus("VISION_NOT_CONFIGURED");
      } else {
        if (out) out.textContent = String(e?.message || e);
        setStatus(`\u8BC6\u56FE\u5931\u8D25\uFF1A${e?.message || e}`);
      }
    }
  });
  overlay.querySelectorAll("[data-ws-ui-view], [data-ws-ui-mat], [data-ws-ui-bg]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const label = btn.getAttribute("data-ws-ui-view") || btn.textContent || "";
      const name2 = label.trim();
      if (name2 === UI_DESIGN_LABELS.original) {
        setStatus("\u89C6\u56FE\uFF1A\u539F\u56FE\uFF08\u5E26\u6807\u6CE8\u6846\uFF09");
        return;
      }
      if (name2 === UI_DESIGN_LABELS.cutout || name2 === UI_DESIGN_LABELS.slicesOnly) {
        setStatus(`\u300C${name2}\u300D\u672A\u63A5\u7EBF\uFF08\u65E0\u5207\u56FE\u8D44\u4EA7\uFF09`);
        return;
      }
      setStatus(`\u300C${name2}\u300D\u672A\u63A5\u7EBF`);
    });
  });
  overlay.querySelector("[data-ws-ui-export]")?.addEventListener("click", () => {
    if (!state.designFile) {
      setStatus("\u8BF7\u5148\u4E0A\u4F20\u8BBE\u8BA1\u7A3F");
      return;
    }
    const payload = {
      kind: "dsh-ws-ui-design-annotations",
      exportedAt: (/* @__PURE__ */ new Date()).toISOString(),
      sourceName: state.designFile.name || "design",
      boxCount: state.boxes.length,
      boxes: state.boxes,
      reverseNote: state.reverseNote || null,
      note: "\u672C\u5730\u6807\u6CE8\u5BFC\u51FA\u3002\u5207\u7247\u5305 ZIP / \u5B8C\u6574\u8BBE\u8BA1\u5305 / AI \u5207\u56FE\u8D44\u4EA7\u672A\u63A5\u7EBF \u2014 \u672C\u6587\u4EF6\u4E0D\u662F\u300C\u5DF2\u5B8C\u6210\u5207\u56FE\u300D\u3002"
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `ui-design-annotations-${Date.now()}.json`;
    a.click();
    setTimeout(() => {
      try {
        URL.revokeObjectURL(a.href);
      } catch (_) {
      }
    }, 2e3);
    goStep(UI_DESIGN_STEPS[6], `\u5DF2\u5BFC\u51FA\u6807\u6CE8 JSON\uFF08${state.boxes.length} \u6846\uFF09\xB7 \u5207\u7247\u5305\u672A\u63A5\u7EBF`);
    setHostStatus("UI \u8BBE\u8BA1 \xB7 \u5DF2\u5BFC\u51FA\u6807\u6CE8");
  });
  const close = () => {
    overlay.removeAttribute("data-open");
  };
  const open = () => {
    overlay.setAttribute("data-open", "");
    paintSteps();
    paintPreview();
    setStatus("\u4E0A\u4F20\u8BBE\u8BA1\u7A3F \u2192 \u9884\u89C8\u6807\u6CE8 \u2192 \u5BFC\u51FA\u63D0\u793A\uFF1BAI \u5207\u56FE\u4E0D\u5047\u88C5\u5B8C\u6210");
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
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
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
init_labels();
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
  },
  {
    id: "case-constructivist-poster",
    title: "\u6784\u6210\u4E3B\u4E49\u6D77\u62A5",
    category: "\u6D77\u62A5",
    prompt: "\u751F\u6210\u4E00\u5F20\u4E3B\u9898\u5BA3\u4F20\u6D77\u62A5\uFF1A\u4FC4\u56FD\u6784\u6210\u4E3B\u4E49\uFF0C\u5E73\u9762\u77E2\u91CF\uFF0C\u9510\u5229\u4E09\u89D2\u4E0E\u7C97\u5BF9\u89D2\u7EBF\u5207\u5272\uFF0C\u9650\u5B9A\u9AD8\u9971\u548C\u4E3B\u8272\u3001\u6DF1\u9ED1\u4E0E\u7C73\u767D\u505A\u65E7\u7EB8\u611F\uFF0C\u4E1D\u7F51\u9897\u7C92\u4E0E\u78E8\u635F\u7EB9\u7406\uFF0C\u4E0D\u5BF9\u79F0\u5F20\u529B\u6784\u56FE"
  },
  {
    id: "case-knowledge-map",
    title: "\u6982\u5FF5\u77E5\u8BC6\u5730\u56FE",
    category: "\u4FE1\u606F\u56FE",
    prompt: "\u521B\u5EFA\u4E00\u5F20\u89E3\u91CA\u300C\u4E3B\u9898\u300D\u7684\u6559\u80B2\u4FE1\u606F\u56FE\uFF1A\u6241\u5E73\u77E2\u91CF\uFF0C\u5173\u952E\u7EC4\u6210\u90E8\u5206\u7528\u7BAD\u5934\u8FDE\u63A5\uFF0C\u7B80\u4F53\u4E2D\u6587\u6807\u7B7E\u6E05\u6670\uFF0C\u9002\u5408\u6559\u79D1\u4E66\u98CE\u683C\uFF0C\u7559\u767D\u5E72\u51C0"
  },
  {
    id: "case-candid-phone",
    title: "\u968F\u624B\u6293\u62CD\u611F",
    category: "\u6444\u5F71",
    prompt: "\u770B\u8D77\u6765\u4E0D\u50CF AI \u751F\u6210\u7684\u65E5\u5E38\u7167\u7247\uFF1A\u8F7B\u5FAE\u624B\u6296\u3001\u81EA\u7136\u66DD\u5149\u3001\u4E0D\u5B8C\u7F8E\u6784\u56FE\uFF0C\u624B\u673A\u6293\u62CD\u8D28\u611F\uFF0C\u771F\u5B9E\u566A\u70B9\uFF0C\u65E0\u6446\u62CD\u611F"
  },
  {
    id: "case-ui-home-mock",
    title: "\u5E94\u7528\u9996\u9875 UI \u7A3F",
    category: "UI",
    prompt: "\u9AD8\u4FDD\u771F\u79FB\u52A8\u5E94\u7528\u9996\u9875 UI \u8BBE\u8BA1\u7A3F\uFF0C\u6E05\u6670\u5BFC\u822A\u680F\u4E0E\u5361\u7247\u5217\u8868\uFF0C\u4E00\u81F4\u95F4\u8DDD\u4E0E\u5B57\u53F7\u5C42\u7EA7\uFF0C\u6D45\u8272\u754C\u9762\uFF0C\u65E0\u771F\u5B9E\u54C1\u724C\u5FBD\u6807"
  },
  {
    id: "case-cyber-rect-poster",
    title: "\u70AB\u5F69\u77E9\u5F62\u6D77\u62A5",
    category: "\u6D77\u62A5",
    prompt: "\u4EBA\u7269\u4E3B\u9898\u6D77\u62A5\uFF0C\u6545\u969C\u827A\u672F\u4E0E\u8D5B\u535A\u670B\u514B\u7F8E\u5B66\uFF0C\u9519\u4F4D\u77E9\u5F62\u7A97\u53E3\u4E0E\u51E0\u4F55\u5207\u7247\u53E0\u52A0\uFF0C\u6570\u636E\u635F\u574F\u6EA2\u51FA\u611F\uFF0C\u9AD8\u5BF9\u6BD4\u9713\u8679\u8272\uFF0C\u6570\u5B57\u788E\u7247\u6784\u56FE"
  },
  {
    id: "case-arch-landmark",
    title: "\u5EFA\u7B51\u5730\u6807\u6781\u7B80",
    category: "\u5EFA\u7B51",
    prompt: "\u5962\u534E\u6781\u7B80\u6D77\u62A5\uFF0C\u4E2D\u5FC3\u4E3A\u5730\u6807\u5EFA\u7B51\u7EBF\u7A3F\u6216\u6DE1\u5F69\u6E32\u67D3\uFF0C\u80CC\u540E\u5DE8\u5927\u8272\u5757\u4E0E\u7559\u767D\uFF0C\u6742\u5FD7\u7EA7\u6392\u7248\uFF0C\u514B\u5236\u914D\u8272\uFF0C\u9AD8\u7EA7\u5370\u5237\u611F"
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

// src/client/studio-host.js
init_gallery_host();

// src/client/ecom-host.js
init_labels();
var ECOM_STUB_NOT_WIRED = "ECOM_STUB_NOT_WIRED";
var ECOM_PAGE = "\u7535\u5546\u6A21\u5F0F";
var IMAGE_PAGE4 = "\u666E\u901A\u751F\u56FE";
var CHANNEL_STUB = ECOM_STUB_NOT_WIRED;
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
  display:none; pointer-events:none; flex:1; min-height:0; width:100%;
}
[data-dsh-ws-studio-host][data-ws-top-page="\u7535\u5546\u6A21\u5F0F"] [data-ws-page="ecom"] {
  display:flex; pointer-events:auto;
}
[data-dsh-ws-studio-host][data-ws-top-page="\u7535\u5546\u6A21\u5F0F"] [data-ws-page="image"],
[data-dsh-ws-studio-host][data-ws-top-page="\u7535\u5546\u6A21\u5F0F"] [data-ws-page="video"],
[data-dsh-ws-studio-host][data-ws-top-page="\u7535\u5546\u6A21\u5F0F"] [data-ws-page="gallery"],
[data-dsh-ws-studio-host][data-ws-top-page="\u7535\u5546\u6A21\u5F0F"] [data-ws-page="canvas"] {
  display:none !important; pointer-events:none;
}
[data-dsh-ws-studio-host] [data-ws-ecom-cols] {
  /* display owned by [data-ws-page="ecom"] \u2014 same node must not force flex */
  flex:1; min-height:0; width:100%;
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
    const msg = String(message || ECOM_STUB_NOT_WIRED);
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
    showStubFailure(ECOM_STUB_NOT_WIRED);
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
init_labels();

// src/skills/proposal.js
var STORAGE_KEY2 = "dsh-ws-skill-pending-proposal";
function savePendingProposal(proposal) {
  try {
    if (typeof localStorage === "undefined") return;
    if (!proposal) {
      localStorage.removeItem(STORAGE_KEY2);
      return;
    }
    localStorage.setItem(
      STORAGE_KEY2,
      JSON.stringify({ savedAt: Date.now(), proposal: { ...proposal, disabledByScore: false } })
    );
  } catch {
  }
}
function loadPendingProposal() {
  try {
    if (typeof localStorage === "undefined") return null;
    const raw = localStorage.getItem(STORAGE_KEY2);
    if (!raw) return null;
    const data = JSON.parse(raw);
    const p = data?.proposal;
    if (!p || typeof p !== "object") return null;
    return { ...p, disabledByScore: false, phase: "proposal" };
  } catch {
    return null;
  }
}
function clearPendingProposal() {
  savePendingProposal(null);
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
var HISTORY_KEY_BASE2 = "dsh-ws-history-v1";
var HISTORY_MAX = 40;
var UNWIRED_RESULT_ACTIONS = /* @__PURE__ */ new Set(["\u518D\u7F16\u8F91"]);
var STAGE_LABEL2 = "\u751F\u6210\u7ED3\u679C";
var STAGE_EMPTY_TITLE = "\u751F\u6210\u540E\u663E\u793A\u5728\u8FD9\u91CC";
var STAGE_EMPTY_HINT2 = "\u51FA\u56FE\u7ED3\u679C\u4F1A\u51FA\u73B0\u5728\u672C\u680F";
var HISTORY_EMPTY_HINT2 = HISTORY_EMPTY;
var DEFAULT_MODEL = "grok-imagine-image";
var resolveModelId = (raw) => {
  const s = raw != null ? String(raw).trim() : "";
  return s || DEFAULT_MODEL;
};
var T = Object.freeze({
  bg: "var(--dsw-alias-bg-base, var(--dsw-alias-bg-layer-2, var(--dsw-specific-sidebar-fill, transparent)))",
  layer1: "var(--dsw-alias-bg-layer-1, var(--dsw-alias-bg-module-platform, transparent))",
  layer2: "var(--dsw-alias-bg-layer-2, var(--dsw-alias-bg-module-platform, var(--dsw-specific-sidebar-fill, transparent)))",
  layer3: "var(--dsw-alias-bg-layer-3, var(--dsw-alias-bg-layer-2, transparent))",
  module: "var(--dsw-alias-bg-module-platform, var(--dsw-alias-bg-layer-2, transparent))",
  sidebar: "var(--dsw-specific-sidebar-fill, var(--dsw-alias-bg-layer-2, transparent))",
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
var MODE_TXT3 = MODE_TABS[0];
var MODE_IMG3 = MODE_TABS[1];
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
  cta: `width:100%;min-height:40px;padding:9px 14px;border:0;border-radius:9px;background:${T.cta};color:${T.fgOnPrimary};cursor:pointer;font:inherit;font-weight:600;font-size:14px;letter-spacing:.02em;display:inline-flex;align-items:center;justify-content:center;box-shadow:${T.elevPanel};`,
  pill: (opts = {}) => `padding:${opts.pad || "2px 10px"};border:1px solid ${T.border2};border-radius:999px;background:${opts.fill || "transparent"};color:${opts.color || T.fg2};cursor:pointer;font:inherit;font-size:${opts.size || "11.5px"};`,
  topTab: (on) => `padding:2px 5px 3px;border:0;border-bottom:1px solid ${on ? T.fg2 : "transparent"};background:transparent;color:${on ? T.fg2 : T.fg3};cursor:pointer;border-radius:0;font:inherit;font-size:11px;font-weight:${on ? 500 : 400};line-height:1.25;`
};
var HOST_STYLES = `
[data-dsh-ws-studio-host] {
  background: var(--dsw-alias-bg-base, var(--dsw-alias-bg-layer-2, var(--dsw-specific-sidebar-fill, transparent)));
  color: var(--dsw-alias-label-primary);
  border-color: var(--dsw-alias-border-l2);
  font-family: var(--dsw-font, var(--dsw-font-family, inherit));
  font-size: var(--dsh-content-font-size, 13px);
  font-weight: 400;
  color-scheme: inherit;
}
body[data-ds-dark-theme] [data-dsh-ws-studio-host] { color-scheme: dark; }
[data-dsh-ws-studio-host] *,
[data-dsh-ws-studio-host] *::before,
[data-dsh-ws-studio-host] *::after { box-sizing: border-box; }
[data-dsh-ws-studio-host] button,
[data-dsh-ws-studio-host] input,
[data-dsh-ws-studio-host] select,
[data-dsh-ws-studio-host] textarea {
  font-family: inherit;
}
/* Inactive page shells must not steal clicks (gallery/ecom cols flex vs display:none). */
[data-dsh-ws-studio-host][data-ws-top-page="\u666E\u901A\u751F\u56FE"] [data-ws-page]:not([data-ws-page="image"]),
[data-dsh-ws-studio-host][data-ws-top-page="image"] [data-ws-page]:not([data-ws-page="image"]),
[data-dsh-ws-studio-host][data-ws-top-page="\u89C6\u9891\u751F\u6210"] [data-ws-page]:not([data-ws-page="video"]),
[data-dsh-ws-studio-host][data-ws-top-page="\u65E0\u9650\u753B\u5E03"] [data-ws-page]:not([data-ws-page="canvas"]),
[data-dsh-ws-studio-host][data-ws-top-page="\u753B\u5ECA"] [data-ws-page]:not([data-ws-page="gallery"]),
[data-dsh-ws-studio-host][data-ws-top-page="\u7535\u5546\u6A21\u5F0F"] [data-ws-page]:not([data-ws-page="ecom"]) {
  display: none !important;
  pointer-events: none !important;
}
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
  /* Right column = result landing. Idle: pack short; with results: grow. */
  flex:0 0 auto; min-height:0; max-height:none; display:flex; flex-direction:column;
  justify-content:flex-start; gap:6px;
  margin:0; padding:0; overflow:hidden; background:transparent; border:0;
}
[data-dsh-ws-studio-host] [data-ws-inspire-wall] [data-ws-stage][data-has-results],
[data-dsh-ws-studio-host] [data-ws-inspire-wall] [data-ws-stage][data-busy] {
  /* Pack to image + actions \u2014 leftover column uses muted wall bg, not a white sea under the result */
  flex:0 1 auto; min-height:0;
}
[data-dsh-ws-studio-host] [data-ws-inspire-wall] {
  /* Idle + with-results: pack content to top; leftover column = muted layer, not white sea */
  justify-content:flex-start;
  align-content:flex-start;
}
[data-dsh-ws-studio-host] [data-ws-stage-head] {
  display:flex; align-items:baseline; gap:8px; flex:none;
}
[data-dsh-ws-studio-host] [data-ws-stage-head] strong {
  font-size:13px; font-weight:600; color: var(--dsw-alias-label-primary);
}
[data-dsh-ws-studio-host] [data-ws-stage-empty] {
  flex:0 0 auto; min-height:0;
  display:flex; flex-direction:column; align-items:flex-start; justify-content:flex-start;
  gap:2px; padding:8px 10px; text-align:left;
  border:0; border-radius:8px;
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
  font-size:13px; font-weight:600; color: var(--dsw-alias-label-primary); line-height:1.35;
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
[data-dsh-ws-studio-host] [data-ws-cta]:hover:not([disabled]) { background: var(--dsw-alias-button-primary-hover); }
[data-dsh-ws-studio-host] [data-ws-cta]:active:not([disabled]) { filter:brightness(.96); }
[data-dsh-ws-studio-host] [data-ws-cta][disabled],
[data-dsh-ws-studio-host] [data-ws-cta]:disabled {
  opacity:.45; cursor:not-allowed; filter:grayscale(.35); pointer-events:none; box-shadow:none;
}
[data-dsh-ws-studio-host] [data-ws-cta]:focus-visible {
  outline:2px solid var(--dsw-alias-state-business-primary); outline-offset:2px;
}
[data-dsh-ws-studio-host] [data-ws-status]:empty { display:none; }
[data-dsh-ws-studio-host] [data-ws-param="model"]::placeholder { color: var(--dsw-alias-label-tertiary); opacity:1; }
[data-dsh-ws-studio-host] [data-ws-param="model"] { color: var(--dsw-alias-label-primary); }
[data-dsh-ws-studio-host] [data-ws-dock] {
  /* Pack to natural height \u2014 continuous with [data-ws-cta-footer] (gap 0 / small).
     NEVER margin-top:auto / flex-grow between dock params and CTA. */
  flex:0 0 auto; display:flex; flex-direction:column; gap:3px;
  padding:6px 10px 0; background: var(--dsw-alias-bg-base, var(--dsw-alias-bg-layer-2, transparent));
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
  padding:4px 10px 8px; background: var(--dsw-alias-bg-base, var(--dsw-alias-bg-layer-2, transparent));
  display:flex; flex-direction:column; gap:3px;
  border-top:1px solid var(--dsw-alias-border-l2);
  border-bottom:1px solid var(--dsw-alias-border-l2);
}
/* Mid leftover under CTA: form column hugs content height \u2014 no tall empty slab under \u300C\u5F00\u59CB\u751F\u6210\u300D.
   Results column (inspire-wall) keeps stretch; form does not flex-grow vertically. */
[data-dsh-ws-studio-host] [data-ws-page="image"] [data-ws-col="studio"] {
  justify-content: flex-start;
  align-self: flex-start;
  height: auto;
  max-height: 100%;
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
}
[data-dsh-ws-studio-host] [data-ws-page="image"] [data-ws-col="studio"]::after {
  content: none; display: none;
}
[data-dsh-ws-studio-host] [data-ws-page="image"] [data-ws-inspire-wall] {
  align-self: stretch;
  min-height: 0;
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
  /* Primary trio \u4E0B\u8F7D/\u52A0\u5165\u753B\u5E03/\u5F53\u53C2\u8003\u56FE \u2014 never margin-top:auto / column-bottom flex sea. */
  display:none; flex-wrap:nowrap; gap:8px 10px; padding:8px 0 4px; flex:0 0 auto; margin-top:0;
  align-items:center; align-content:flex-start;
}
[data-dsh-ws-studio-host] [data-ws-result-actions][data-visible] { display:flex; }
[data-dsh-ws-studio-host] [data-ws-result-actions] > button {
  padding:7px 14px; border:1px solid var(--dsw-alias-border-l2); border-radius:999px;
  background: transparent; color: var(--dsw-alias-label-secondary);
  cursor:pointer; font:inherit; font-size:12.5px; line-height:1.25; min-height:32px;
  font-weight:400; box-shadow:none;
}
[data-dsh-ws-studio-host] [data-ws-result-actions] > button[data-ws-result-secondary] {
  background: transparent; border:1px solid var(--dsw-alias-border-l2);
  color: var(--dsw-alias-label-secondary);
  font-weight:400; box-shadow:none;
}
[data-dsh-ws-studio-host] [data-ws-result-actions] > button:hover,
[data-dsh-ws-studio-host] [data-ws-result-actions] > button[data-ws-result-secondary]:hover {
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-primary);
}
[data-dsh-ws-studio-host] [data-ws-result-actions] button[data-ws-unwired] {
  opacity:.7; border-style:dashed; color: var(--dsw-alias-label-tertiary);
}
[data-dsh-ws-studio-host] [data-ws-result-more] {
  position:relative; display:inline-flex; align-items:center; flex:none;
}
/* Quiet \xB7\xB7\xB7 overflow \u2014 never a loud \u300C\u66F4\u591A\u300D chip competing with CTA */
[data-dsh-ws-studio-host] [data-ws-result-more-toggle] {
  padding:4px 8px; border:0; border-radius:6px;
  background: transparent; color: var(--dsw-alias-label-tertiary);
  cursor:pointer; font:inherit; font-size:14px; line-height:1; min-height:28px;
  letter-spacing:.08em; opacity:.75;
}
[data-dsh-ws-studio-host] [data-ws-result-more-toggle]:hover {
  background: var(--dsw-alias-interactive-bg-hover);
  color: var(--dsw-alias-label-secondary);
  opacity:1;
}
[data-dsh-ws-studio-host] [data-ws-result-more-menu] {
  position:absolute; bottom:100%; left:0; z-index:50; margin-bottom:4px;
  min-width:8.5rem; padding:4px; display:flex; flex-direction:column; gap:2px;
  background: var(--dsw-alias-bg-module-platform);
  border:1px solid var(--dsw-alias-border-l2);
  border-radius:10px; box-shadow: var(--dsw-elevation-panel);
}
[data-dsh-ws-studio-host] [data-ws-result-more-menu][hidden] { display:none !important; }
[data-dsh-ws-studio-host] [data-ws-result-more-menu] [data-ws-result-action] {
  padding:6px 10px; border:0; border-radius:6px; text-align:left;
  background:transparent; color: var(--dsw-alias-label-secondary);
  cursor:pointer; font:inherit; font-size:12px; line-height:1.3; min-height:0;
}
[data-dsh-ws-studio-host] [data-ws-result-more-menu] [data-ws-result-action]:hover {
  background: var(--dsw-alias-interactive-bg-hover);
}
[data-dsh-ws-studio-host] [data-ws-result-more-menu] [data-ws-result-action][data-ws-unwired] {
  opacity:.75; color: var(--dsw-alias-label-tertiary); border-style:none;
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
  background: transparent; color: var(--dsw-alias-label-secondary);
  cursor:pointer; font:inherit; font-size:11.5px; font-weight:400;
}
[data-dsh-ws-studio-host] [data-ws-plan-actions] button[data-primary] {
  border-color: var(--dsw-alias-border-l3); background: transparent;
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
  /* Write+generate pack at top; height hugs content (image page sets align-self). */
  display:flex; flex-direction:column; justify-content:flex-start; flex:1 1 auto; min-width:0; min-height:0;
  height:auto; align-self:flex-start; max-height:100%;
  overflow:auto; background: var(--dsw-alias-bg-layer-2, var(--dsw-alias-bg-module-platform, var(--dsw-specific-sidebar-fill, transparent)));
}
[data-dsh-ws-studio-host] [data-ws-cols] { display:flex; flex:1; min-height:0; }
[data-dsh-ws-studio-host] [data-ws-inspire-wall],
[data-dsh-ws-studio-host] [data-ws-col="chat"] {
  background: var(--dsw-alias-bg-layer-2, var(--dsw-alias-bg-module-platform, var(--dsw-specific-sidebar-fill, transparent)));
}
[data-dsh-ws-studio-host] [data-ws-top-bar] {
  display:flex; gap:8px; padding:0 10px; align-items:center; flex-shrink:0;
  min-height:20px; height:20px;
  background:transparent; border-bottom:0;
}
[data-dsh-ws-studio-host] [data-ws-top-seg] {
  display:inline-flex; align-items:center; gap:2px; flex:none;
  padding:0; border-radius:0;
  background:transparent; border:0;
}
[data-dsh-ws-studio-host] [data-ws-top-seg] [data-ws-top] {
  padding:2px 5px 3px; border:0; border-bottom:1px solid transparent;
  border-radius:0; font:inherit; font-size:11px; line-height:1.25; font-weight:400;
  cursor:pointer; background:transparent; color: var(--dsw-alias-label-tertiary);
}
[data-dsh-ws-studio-host] [data-ws-top-seg] [data-ws-top][aria-current="true"],
[data-dsh-ws-studio-host] [data-ws-top-seg] [data-ws-top][data-active] {
  background:transparent; color: var(--dsw-alias-label-secondary); font-weight:500;
  border-bottom-color: var(--dsw-alias-label-secondary);
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
  state.modelId = resolveModelId(state.modelId);
  let activeHistoryId = null;
  const historyStore = /* @__PURE__ */ new Map();
  let storagePaths = null;
  const historyStorageKey = () => {
    const dir = storagePaths?.dataDir ? String(storagePaths.dataDir) : "";
    return dir ? `${HISTORY_KEY_BASE2}::${dir}` : HISTORY_KEY_BASE2;
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
    host?.querySelectorAll("[data-ws-top-seg] [data-ws-top]").forEach((b) => {
      const on = b.getAttribute("data-ws-top") === name2;
      if (b instanceof HTMLElement) {
        b.setAttribute("aria-current", on ? "true" : "false");
        if (on) b.setAttribute("data-active", "");
        else b.removeAttribute("data-active");
        b.style.cssText = css.topTab(on);
      }
    });
    host?.setAttribute("data-ws-top-page", name2);
    try {
      document.dispatchEvent(
        new CustomEvent("dsh-ws-top-tab", {
          bubbles: true,
          detail: { tab: name2, studioPage: true }
        })
      );
    } catch (_) {
    }
    const topWired = name2 === VIDEO_PAGE || name2 === IMAGE_PAGE || name2 === CANVAS_PAGE || name2 === GALLERY_PAGE || name2 === ECOM_PAGE;
    if (topWired) {
      videoApi?.setPage(name2);
      canvasApi?.setPage(name2);
      galleryApi?.setPage(name2);
      ecomApi?.setPage(name2);
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
    const show = state.mode === MODE_IMG3;
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
    else if (plan.reason) lines.push(String(plan.reason));
    if (plan.action) lines.push(`\u52A8\u4F5C: ${plan.action}`);
    if (plan.suggestedAspectRatio) lines.push(`\u5EFA\u8BAE\u6BD4\u4F8B: ${plan.suggestedAspectRatio}`);
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
    if (plan.scriptPaths && typeof plan.scriptPaths === "object") {
      const sp = Object.entries(plan.scriptPaths).filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`);
      if (sp.length) {
        lines.push("\u811A\u672C\u8DEF\u5F84");
        lines.push(...sp.map((s) => `\xB7 ${s}`));
      }
    }
    lines.push("disabledByScore: false");
    return lines.filter(Boolean).join("\n");
  };
  const applySkillPlanToFields = (plan) => {
    if (!plan) return;
    const fillPrompt = typeof plan === "object" && plan.fillPrompt != null && String(plan.fillPrompt).trim() ? String(plan.fillPrompt) : typeof plan === "object" && plan.prompt != null && String(plan.prompt).trim() ? String(plan.prompt) : typeof plan === "object" && Array.isArray(plan.prompts) ? plan.prompts.map((p) => p.prompt).filter(Boolean).join("\n\n") : typeof plan === "string" ? plan : "";
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
    const aspect = typeof plan === "object" ? plan.fillAspect || plan.suggestedAspectRatio || plan.prompts?.[0]?.aspect : null;
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
  const readLivePrompt = () => {
    const el = host?.querySelector("[data-ws-prompt]");
    if (el instanceof HTMLTextAreaElement || el instanceof HTMLInputElement) {
      const v = String(el.value || "").trim();
      if (v) {
        state.prompt = el.value;
        return v;
      }
    }
    return String(state.prompt || "").trim();
  };
  const readSkillId = () => {
    const sel = host?.querySelector('[data-ws-param="skill"]');
    if (sel instanceof HTMLSelectElement) {
      const fromDom = sel.value && String(sel.value).trim() || sel.selectedOptions?.[0]?.value && String(sel.selectedOptions[0].value).trim() || "";
      if (fromDom) {
        if (state.skillId !== fromDom) state.skillId = fromDom;
        return fromDom;
      }
    }
    if (state.skillId) return state.skillId;
    return null;
  };
  const applyMatchedSkill = (label) => {
    if (!label) return null;
    const id = String(label).trim();
    if (!id) return null;
    state.skillId = id;
    const sel = host?.querySelector('[data-ws-param="skill"]');
    if (sel instanceof HTMLSelectElement) {
      const opt = Array.from(sel.options).find((o) => o.value === id);
      if (opt) sel.value = id;
      sel.setAttribute("data-ws-skill", id);
    }
    if (id === "\u4E09\u8054\u5C01\u9762") state.ratio = "3:4";
    if (id === "\u7535\u5F71\u6D77\u62A5") state.ratio = "9:16";
    if (id === "\u7535\u5F71\u4E09\u8054") state.ratio = "21:9";
    paintSkillPlan();
    syncFields?.();
    return id;
  };
  const paintSkillPlan = () => {
    const panel = host?.querySelector("[data-ws-plan-panel]");
    if (!(panel instanceof HTMLElement)) return;
    const hasPlan = !!(state.skillPlan || state.planPhase === "proposal" || panel.hasAttribute("data-force-open"));
    if (hasPlan) panel.setAttribute("data-visible", "");
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
    try {
      const ctaEl = host?.querySelector("[data-ws-cta]");
      if (ctaEl instanceof HTMLButtonElement) {
        const busy = !!state.task && (state.task.status === "running" || state.task.status === "queued" || state.task.status === "submitted" || state.task.status === "polling" || state.task.status === "downloading");
        const hasPrompt = String(state.prompt || "").trim().length > 0;
        const disable = busy || !hasPrompt;
        ctaEl.disabled = disable;
        if (disable) ctaEl.setAttribute("disabled", "");
        else ctaEl.removeAttribute("disabled");
      }
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
    modelId: resolveModelId(state.modelId),
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
    state.modelId = resolveModelId(snap.modelId);
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
    const mode = snapshot?.mode != null ? String(snapshot.mode) : state.mode || MODE_TXT3;
    const modelId = resolveModelId(snapshot?.modelId ?? state.modelId);
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
      empty.style.cssText = `padding:4px 2px;font-size:11px;color:${T.fg3};opacity:.65;line-height:1.4;`;
      empty.textContent = HISTORY_EMPTY_HINT2;
      empty.removeAttribute("title");
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
    state.modelId = resolveModelId(value?.modelId ?? value?.model ?? state.modelId);
    syncFields();
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
          if (r?.localPath) img.dataset.wsLocalPath = String(r.localPath);
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
    state.modelId = resolveModelId(state.modelId);
    state.compareModels = false;
    state.refImages = Array.isArray(state.refImages) ? state.refImages : [];
    state.skillPlan = state.skillPlan ?? null;
    state.task = null;
    state.paneWidths = { ...DEFAULT_PANE_WIDTHS, ...loadPaneWidths() };
    host = document.createElement("div");
    host.dataset.dshWsStudioHost = "";
    host.setAttribute("role", "main");
    host.setAttribute("aria-label", "\u751F\u56FE");
    host.style.cssText = `display:none;position:absolute;inset:0;z-index:40;width:auto;height:auto;background:${T.layer2};color:${T.fg};flex-direction:column;font-family:${T.font};font-size:${T.fontSize};line-height:1.4;overflow:hidden;color-scheme:inherit;`;
    const styleEl = document.createElement("style");
    styleEl.textContent = HOST_STYLES;
    host.appendChild(styleEl);
    const frame = document.createElement("div");
    frame.style.cssText = "display:flex;flex-direction:column;flex:1;min-height:0;width:100%;";
    frame.innerHTML = `
      <header data-ws-top-bar>
        <div data-ws-top-seg role="tablist" aria-label="\u5DE5\u4F5C\u53F0\u6A21\u5F0F">
          ${TOP_TABS.map(
      (t, i) => `<button type="button" data-ws-top="${t}" role="tab" aria-current="${i === 0 ? "true" : "false"}" ${i === 0 ? "data-active" : ""} style="${css.topTab(i === 0)}">${t}</button>`
    ).join("")}
        </div>
        <span style="flex:1"></span>
        <div data-ws-tool-more>
          <button type="button" data-ws-tool-more-toggle aria-expanded="false" aria-haspopup="listbox" aria-label="${TOOL_MENU}">${TOOL_MENU} \u25BE</button>
          <div data-ws-tool-more-menu role="listbox" aria-label="${TOOL_MENU}" hidden>
            ${TOOL_ENTRIES.map((t) => `<button type="button" data-ws-tool="${t}" role="option">${t}</button>`).join("")}
          </div>
        </div>
        <span data-ws-conn-status title="${CHROME.connected}">${CHROME.connected}</span>
      </header>
      <div data-ws-cols data-ws-page="image">
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

        <!-- CENTER: write + generate ONLY (muted leftover, no #fff sea) -->
        <section data-ws-col="studio" style="flex:1 1 auto;align-self:flex-start;height:auto;max-height:100%;padding:0;overflow:auto;display:flex;flex-direction:column;justify-content:flex-start;min-width:0;background:${T.layer2};border-left:0;border-right:0;">

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
                  <button type="button" data-ws-action="templates" style="padding:0 9px;height:24px;border:1px solid ${T.border2};border-radius:999px;background:transparent;color:${T.fg2};cursor:pointer;font:inherit;font-size:11px;">${PROMPT_ACTIONS.templates}</button>
                  <button type="button" data-ws-action="enhance" style="padding:0 9px;height:24px;border:1px solid ${T.border2};border-radius:999px;background:transparent;color:${T.fg2};cursor:pointer;font:inherit;font-size:11px;">${PROMPT_ACTIONS.enhance}</button>
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

            <div data-ws-plan-launch style="display:flex;align-items:center;gap:8px;flex:none;">
              <button type="button" data-ws-plan-action="plan" style="${css.pill({ size: "11.5px", fill: T.module })}">${PROMPT_ACTIONS.plan}</button>
              <span style="font-size:11px;color:${T.fg3};">\u53EF\u9009 \xB7 \u9ED8\u8BA4\u6536\u8D77\u65B9\u6848\u5361</span>
            </div>
            <div data-ws-plan-panel>
              <div style="${css.paramLabel}">\u521B\u4F5C\u65B9\u6848</div>
              <textarea data-ws-plan-text rows="2" placeholder="\u70B9\u300C\u60F3\u65B9\u6848\u300D\u751F\u6210\u63D0\u6848\uFF1B\u786E\u8BA4\u540E\u56DE\u586B\u63D0\u793A\u8BCD\u518D\u70B9\u300C\u5F00\u59CB\u751F\u6210\u300D" style="width:100%;resize:vertical;min-height:48px;padding:6px 8px;border-radius:8px;border:1px solid ${T.border2};background:${T.input};color:inherit;font:inherit;font-size:12.5px;line-height:1.45;"></textarea>
              <div data-ws-plan-actions>
                <button type="button" data-ws-plan-action="replan">${PROMPT_ACTIONS.replan}</button>
                <button type="button" data-ws-plan-action="accept">${PROMPT_ACTIONS.acceptPlan}</button>
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
        <aside data-ws-inspire-wall style="width:${state.paneWidths.chat}px;flex-shrink:0;border-left:1px solid ${T.border2};padding:8px;display:flex;flex-direction:column;gap:8px;background:${T.layer2};overflow:hidden;min-height:0;">
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
              ${RESULT_PRIMARY_ACTIONS.map((a) => {
      return `<button type="button" data-ws-result-action="${a}" data-ws-result-secondary>${a}</button>`;
    }).join("")}
              <div data-ws-result-more>
                <button type="button" data-ws-result-more-toggle aria-expanded="false" aria-haspopup="menu" aria-label="\u66F4\u591A\u64CD\u4F5C">\xB7\xB7\xB7</button>
                <div data-ws-result-more-menu role="menu" aria-label="\u66F4\u591A\u64CD\u4F5C" hidden>
                  ${RESULT_MORE_ACTIONS.map((a) => {
      const unwired = UNWIRED_RESULT_ACTIONS.has(a);
      return `<button type="button" role="menuitem" data-ws-result-action="${a}"${unwired ? ' data-ws-unwired title="\u672A\u63A5\u7EBF"' : ""}>${a}</button>`;
    }).join("")}
                </div>
              </div>
            </div>
          </div>
        </aside>
        <aside data-ws-col="chat" style="width:${state.paneWidths.chat}px;flex-shrink:0;border-left:1px solid ${T.border2};padding:8px;display:none;flex-direction:column;background:${T.layer2};">
          <strong style="font-size:13px;color:${T.fg};">${COLUMNS.chat}</strong>
          <p style="margin:8px 0 0;font-size:12px;color:${T.fg3};">\u5BF9\u8BDD\u7EBF\u7A0B\uFF08\u53EF\u5185\u8054\u51FA\u56FE\uFF09</p>
        </aside>
      </div>
    `;
    host.appendChild(frame);
    host.querySelectorAll("[data-ws-top-seg] [data-ws-top]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        setTopTab(btn.getAttribute("data-ws-top") || IMAGE_PAGE);
      });
    });
    host.querySelector("[data-ws-prompt]")?.addEventListener("input", (e) => {
      const t = (
        /** @type {HTMLTextAreaElement} */
        e.target
      );
      state.prompt = t.value;
      try {
        syncCtaEnabled();
      } catch (_) {
      }
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
        setStatus(state.mode === MODE_IMG3 ? "\u5DF2\u5207\u6362\u5230\u56FE\u751F\u56FE" : "\u5DF2\u5207\u6362\u5230\u6587\u751F\u56FE");
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
    host.addEventListener("dsh-ws-use-as-ref", (ev) => {
      const d = ev?.detail && typeof ev.detail === "object" ? ev.detail : {};
      const refSrc = d.src || d.url || "";
      if (!refSrc) return;
      state.mode = MODE_IMG3;
      state.refImages = [
        ...state.refImages || [],
        { id: `ref-gal-${Date.now()}`, url: refSrc, name: d.item?.name || "\u753B\u5ECA\u53C2\u8003" }
      ];
      paintChips();
      paintRefSlot();
      setTopTab(IMAGE_PAGE);
      setStatus("\u5DF2\u8BBE\u4E3A\u53C2\u8003\u56FE");
    });
    host.addEventListener("dsh-ws-top-page", (ev) => {
      const d = ev?.detail && typeof ev.detail === "object" ? ev.detail : {};
      const pageName = d.page || IMAGE_PAGE;
      setTopTab(pageName);
      if (pageName === VIDEO_PAGE && d.frameUrl) {
        host.dispatchEvent(
          new CustomEvent("dsh-ws-video-frame", { bubbles: true, detail: { url: d.frameUrl } })
        );
      }
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
          modelId: state.modelId,
          mode: state.mode
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
    const syncCtaEnabled = () => {
      if (!(cta instanceof HTMLButtonElement)) return;
      const busy = !!state.task && (state.task.status === "running" || state.task.status === "queued" || state.task.status === "submitted" || state.task.status === "polling" || state.task.status === "downloading");
      const hasPrompt = String(state.prompt || "").trim().length > 0;
      const disable = busy || !hasPrompt;
      cta.disabled = disable;
      if (disable) cta.setAttribute("disabled", "");
      else cta.removeAttribute("disabled");
      cta.title = !hasPrompt ? "\u8BF7\u5148\u8F93\u5165\u63D0\u793A\u8BCD" : busy ? "\u51FA\u56FE\u4E2D\u2026" : "";
    };
    syncCtaEnabled();
    const dispatchGenerate = (extra = {}) => {
      if (!String(state.prompt || "").trim()) {
        setStatus("\u8BF7\u5148\u8F93\u5165\u63D0\u793A\u8BCD");
        syncCtaEnabled();
        return;
      }
      state.modelId = resolveModelId(state.modelId);
      syncFields();
      beginLocalProgress();
      setStatus("\u51FA\u56FE\u4E2D\u2026");
      host.dispatchEvent(
        new CustomEvent("dsh-ws-generate", {
          bubbles: true,
          composed: true,
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
    const onHistoryAdd = (ev) => {
      const d = ev?.detail && typeof ev.detail === "object" ? ev.detail : {};
      try {
        const results = Array.isArray(d.results) ? d.results : d.src ? [{ url: d.src }] : [];
        if (!results.length) return;
        const jobId = String(d.jobId || `${d.source || "ext"}-${Date.now()}`);
        mountHistoryItem(jobId, {
          snapshot: d.snapshot || {
            prompt: d.prompt || "",
            modelId: resolveModelId(d.modelId),
            mode: d.mode || MODE_TABS[0],
            ratio: d.ratio || RATIOS[0],
            count: results.length
          },
          value: { jobId, phase: "done", results, modelId: resolveModelId(d.modelId) },
          savedAt: Date.now()
        });
      } catch (_) {
      }
    };
    host.addEventListener("dsh-ws-history-add", onHistoryAdd);
    document.addEventListener("dsh-ws-history-add", onHistoryAdd);
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
      if (state.mode !== MODE_IMG3) return;
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
      if (typeof state.skillPlan === "object" && state.skillPlan) {
        state.skillPlan = { ...state.skillPlan, cardText: t.value };
      } else {
        state.skillPlan = t.value;
      }
    });
    host.querySelectorAll("[data-ws-plan-action]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const action = btn.getAttribute("data-ws-plan-action");
        if (action === "plan" || action === "replan") {
          let skillId = readSkillId();
          applySkillSideEffects?.(skillId);
          const panel = host.querySelector("[data-ws-plan-panel]");
          if (panel instanceof HTMLElement) panel.setAttribute("data-force-open", "");
          state.planPhase = "proposal";
          paintSkillPlan();
          const ta = host.querySelector("[data-ws-plan-text]");
          if (ta instanceof HTMLTextAreaElement) {
            ta.placeholder = "\u6B63\u5728\u60F3\u65B9\u6848\u2026";
          }
          setStatus(skillId ? "\u60F3\u65B9\u6848\u4E2D\u2026" : "\u672A\u9009\u624B\u9009 \u2014 \u6309\u63D0\u793A\u8BCD\u667A\u80FD\u5339\u914D Skill\u2026");
          host.dispatchEvent(
            new CustomEvent("dsh-ws-plan", {
              bubbles: true,
              detail: {
                action,
                skillId: skillId || "",
                autoMatch: !skillId,
                prompt: readLivePrompt(),
                planText: ta instanceof HTMLTextAreaElement ? String(ta.value || "") : "",
                skillPlan: state.skillPlan,
                mode: state.mode,
                refImageIds: (state.refImages || []).map((r) => r.id).filter(Boolean)
              }
            })
          );
        } else if (action === "accept") {
          const ta = host.querySelector("[data-ws-plan-text]");
          if (ta instanceof HTMLTextAreaElement && ta.value.trim()) {
            if (typeof state.skillPlan !== "object" || state.skillPlan == null) {
              state.skillPlan = ta.value;
            } else if (!state.skillPlan.fillPrompt) {
              state.skillPlan = { ...state.skillPlan, fillPrompt: ta.value };
            }
          }
          applySkillPlanToFields(state.skillPlan);
          syncFields();
          if (!String(state.prompt || "").trim()) {
            setStatus("\u65B9\u6848\u672A\u586B\u5165\u63D0\u793A\u8BCD \u2014 \u53EF\u624B\u5199\u63D0\u793A\u8BCD\u540E\u70B9\u300C\u5F00\u59CB\u751F\u6210\u300D");
            return;
          }
          setStatus("\u5DF2\u586B\u5165\u65B9\u6848\uFF0C\u51FA\u56FE\u4E2D\u2026");
          try {
            clearPendingProposal();
          } catch (_) {
          }
          state.planPhase = "generating";
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
    host.querySelector("[data-ws-inspire-wall] [data-ws-result-more-toggle]")?.addEventListener("click", (e) => {
      e.stopPropagation();
      const menu = host.querySelector("[data-ws-inspire-wall] [data-ws-result-more-menu]");
      const toggle = host.querySelector("[data-ws-inspire-wall] [data-ws-result-more-toggle]");
      if (!(menu instanceof HTMLElement) || !(toggle instanceof HTMLElement)) return;
      const openMenu = menu.hidden;
      menu.hidden = !openMenu;
      toggle.setAttribute("aria-expanded", openMenu ? "true" : "false");
    });
    const closeResultMore = (e) => {
      const wrap = host?.querySelector("[data-ws-inspire-wall] [data-ws-result-more]");
      if (!(wrap instanceof HTMLElement)) return;
      if (e.target instanceof Node && wrap.contains(e.target)) return;
      const menu = host.querySelector("[data-ws-inspire-wall] [data-ws-result-more-menu]");
      const toggle = host.querySelector("[data-ws-inspire-wall] [data-ws-result-more-toggle]");
      if (menu instanceof HTMLElement) menu.hidden = true;
      if (toggle instanceof HTMLElement) toggle.setAttribute("aria-expanded", "false");
    };
    document.addEventListener("click", closeResultMore);
    host.querySelector("[data-ws-inspire-wall] [data-ws-result-actions]")?.addEventListener("click", (e) => {
      const btn = e.target instanceof Element ? e.target.closest("[data-ws-result-action]") : null;
      if (!btn) return;
      const moreMenu = host.querySelector("[data-ws-inspire-wall] [data-ws-result-more-menu]");
      const moreToggle = host.querySelector("[data-ws-inspire-wall] [data-ws-result-more-toggle]");
      if (moreMenu instanceof HTMLElement) moreMenu.hidden = true;
      if (moreToggle instanceof HTMLElement) moreToggle.setAttribute("aria-expanded", "false");
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
          state.mode = MODE_IMG3;
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
      if (action === "\u52A0\u5165\u753B\u5E03") {
        if (!src) {
          setStatus("\u65E0\u56FE\u53EF\u52A0\u5165\u753B\u5E03");
          return;
        }
        setTopTab(CANVAS_PAGE);
        host.dispatchEvent(
          new CustomEvent("dsh-ws-canvas-ingest", {
            bubbles: true,
            detail: { src, prompt: state.prompt, kind: "image" }
          })
        );
        setStatus("\u5DF2\u52A0\u5165\u753B\u5E03");
        return;
      }
      if (action === "\u91CD\u65B0\u751F\u6210") {
        dispatchGenerate({ regenerate: true });
        return;
      }
      if (action === "\u52A0\u753B\u5ECA") {
        const selectedCard = host.querySelector("[data-ws-inspire-wall] [data-ws-results] [data-ws-result-card][data-selected] img[data-ws-result]") || selectedImg;
        const localPath = selectedCard instanceof HTMLElement ? selectedCard.getAttribute("data-ws-local-path") || "" : "";
        host.dispatchEvent(
          new CustomEvent("dsh-ws-gallery-add", {
            bubbles: true,
            detail: {
              src,
              localPath,
              prompt: state.prompt,
              snapshot: captureParamSnapshot(),
              storagePaths
            }
          })
        );
        return;
      }
      if (action === "\u62FF\u53BB\u505A\u89C6\u9891") {
        setTopTab(VIDEO_PAGE);
        if (src) {
          host.dispatchEvent(
            new CustomEvent("dsh-ws-video-frame", {
              bubbles: true,
              detail: { url: src }
            })
          );
        }
        setStatus("\u5DF2\u5207\u6362\u5230\u89C6\u9891\u751F\u6210");
        return;
      }
      if (action === "\u52A0\u5BF9\u8BDD") {
        host.dispatchEvent(
          new CustomEvent("dsh-ws-add-to-chat", {
            bubbles: true,
            detail: { src, prompt: state.prompt }
          })
        );
        setStatus("\u5DF2\u53D1\u9001\u5230\u5BF9\u8BDD");
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
    uiDesignApi = mountUiDesignHost(host, { T, css, setStatus, getRpc });
    templateApi = mountTemplateHost(host, {
      T,
      css,
      setStatus,
      // Nova-style: write into 普通生图 prompt + switch tab; overlay closes in template-host
      onFillPrompt: (text) => {
        const next = String(text || "");
        if (!next.trim()) return false;
        gifApi?.close?.();
        uiDesignApi?.close?.();
        setTopTab(IMAGE_PAGE);
        state.prompt = next;
        syncFields();
        const promptEl = host?.querySelector("[data-ws-prompt]");
        if (!(promptEl instanceof HTMLTextAreaElement)) return false;
        if (promptEl.value !== next) promptEl.value = next;
        try {
          promptEl.focus({ preventScroll: true });
        } catch (_) {
          try {
            promptEl.focus();
          } catch (_2) {
          }
        }
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
      try {
        document.documentElement.setAttribute("data-dsh-ws-studio-open", "");
        document.body?.setAttribute("data-dsh-ws-studio-open", "");
      } catch (_) {
      }
      try {
        const pending = loadPendingProposal();
        if (pending && (pending.prompt || pending.fillPrompt || pending.reason || pending.rationale)) {
          state.skillPlan = pending;
          if (pending.label || pending.skillId) state.skillId = pending.label || pending.skillId;
          state.planPhase = "proposal";
          paintSkillPlan();
          const ta = host?.querySelector("[data-ws-plan-text]");
          if (ta instanceof HTMLTextAreaElement) ta.value = formatPlanCard(pending);
          setStatus("\u5DF2\u6062\u590D\u672A\u786E\u8BA4\u65B9\u6848\uFF08\u4E0D\u9501\u51FA\u56FE\uFF09");
        }
      } catch (_) {
      }
    },
    close() {
      if (host) host.style.display = "none";
      open = false;
      try {
        document.documentElement.removeAttribute("data-dsh-ws-studio-open");
        document.body?.removeAttribute("data-dsh-ws-studio-open");
      } catch (_) {
      }
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
    getGalleryApi() {
      return galleryApi;
    },
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
      if (storagePaths && "videoConfigured" in storagePaths) {
        videoApi?.setVideoConfigured?.(!!storagePaths.videoConfigured);
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
    /** GIF failure — exact protocol code (GIF_NOT_CONFIGURED / GIF_STUB_NOT_WIRED); no fake success */
    paintGifStubFailure(message) {
      ensure();
      gifApi?.showStubFailure?.(message || "GIF_NOT_CONFIGURED");
    },
    /** Ecommerce stub failure — exact ECOM_STUB_NOT_WIRED */
    paintEcomStubFailure(message) {
      ensure();
      ecomApi?.showStubFailure?.(message || "ECOM_STUB_NOT_WIRED");
    },
    /** Live video.async results */
    paintVideoResult(value) {
      ensure();
      videoApi?.paintVideoResult?.(value);
    },
    /** Live gifGenerate results (grid / sprite-sheet image URLs) */
    paintGifResult(value) {
      ensure();
      gifApi?.paintGifResult?.(value);
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
    /**
     * Shared history entry path — canvas/chat completions can land here.
     * @param {{ jobId?: string, prompt?: string, modelId?: string, results?: any[], phase?: string, source?: string, snapshot?: object }} detail
     */
    ingestHistoryResult(detail) {
      ensure();
      const d = detail && typeof detail === "object" ? detail : {};
      const results = Array.isArray(d.results) ? d.results : [];
      if (!results.length) return;
      const jobId = String(d.jobId || `${d.source || "ext"}-${Date.now()}`);
      const snapshot = d.snapshot || {
        prompt: d.prompt || "",
        modelId: resolveModelId(d.modelId),
        mode: d.mode || MODE_TABS[0],
        ratio: d.ratio || RATIOS[0],
        count: results.length
      };
      mountHistoryItem(jobId, {
        snapshot,
        value: { jobId, phase: d.phase || "done", results, modelId: snapshot.modelId },
        savedAt: Date.now()
      });
    },
    paintGenerateResult(value) {
      ensure();
      applyGenerateResult(value);
    },
    /**
     * Apply host planSkill result to 方案卡 (display only; never locks CTA).
     * @param {any} plan
     */
    /** Smart-match: set skill select from suggested label (optional). */
    applyMatchedSkill(label) {
      ensure();
      return applyMatchedSkill(label);
    },
    paintSkillPlanResult(plan) {
      ensure();
      const card = plan && typeof plan === "object" && plan.proposal && typeof plan.proposal === "object" ? { ...plan, ...plan.proposal, proposal: plan.proposal } : plan;
      state.skillPlan = card;
      state.planPhase = "proposal";
      const panel = host?.querySelector("[data-ws-plan-panel]");
      if (panel instanceof HTMLElement) panel.setAttribute("data-force-open", "");
      const ta = host?.querySelector("[data-ws-plan-text]");
      if (ta instanceof HTMLTextAreaElement) {
        ta.value = formatPlanCard(card);
        ta.placeholder = "\u65B9\u6848\u53EF\u6539\uFF1B\u70B9\u300C\u5C31\u8FD9\u6837\u51FA\u56FE\u300D\u56DE\u586B\u63D0\u793A\u8BCD\uFF0C\u518D\u70B9\u300C\u5F00\u59CB\u751F\u6210\u300D";
      }
      paintSkillPlan();
      try {
        savePendingProposal(
          typeof card === "object" ? card : {
            prompt: String(card || ""),
            reason: "",
            action: "generate",
            referencedImageIds: [],
            disabledByScore: false,
            phase: "proposal"
          }
        );
      } catch (_) {
      }
      const scoreNote = card && typeof card === "object" && card.score ? `\u81EA\u68C0 ${card.score.total ?? ""}\uFF08\u4E0D\u9501\u51FA\u56FE\uFF09` : card && typeof card === "object" && (card.reason || card.rationale) ? "\u63D0\u6848\u5DF2\u5C31\u7EEA\uFF08\u53EF\u6539\u540E\u786E\u8BA4\uFF09" : "\u65B9\u6848\u5DF2\u5C31\u7EEA";
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
  const [visionBaseUrl, setVisionBaseUrl] = useState("");
  const [visionApiKeyDraft, setVisionApiKeyDraft] = useState("");
  const [visionModel, setVisionModel] = useState("");
  const [visionKeyConfigured, setVisionKeyConfigured] = useState(false);
  const [revision, setRevision] = useState(void 0);
  const [status, setStatus] = useState("");
  const [models, setModels] = useState([]);
  const [busy, setBusy] = useState(false);
  const [open, setOpen] = useState(false);
  const pull = useCallback(() => {
    if (!scope?.getSnapshot) return;
    const snap = scope.getSnapshot();
    let snapBase = "";
    let snapProvider = "anthropic-compat";
    let snapKey = false;
    let snapVideoBase = "";
    let snapVideoProvider = "video.async";
    let snapVideoModel = "";
    let snapVideoKey = false;
    let snapVisionBase = "";
    let snapVisionModel = "";
    let snapVisionKey = false;
    if (snap?.status === "ready" && snap.value) {
      const v = snap.value;
      snapBase = String(v.mediaBaseUrl || "");
      snapProvider = ["anthropic-compat", "gptimg", "openai-images"].includes(v.mediaProvider) ? v.mediaProvider : "anthropic-compat";
      setAllowAgent(v.allowAgentImageGeneration !== false);
      snapVideoBase = String(v.videoBaseUrl || "");
      snapVideoProvider = String(v.videoProvider || "").trim() || "video.async";
      snapVideoModel = String(v.videoDefaultModel || "");
      const secrets = snap.secrets || {};
      const secretMeta = secrets.mediaApiKey;
      snapKey = secretMeta === true || secretMeta?.set === true || typeof secretMeta === "object" && secretMeta != null && "set" in secretMeta && secretMeta.set;
      const videoSecretMeta = secrets.videoApiKey;
      snapVideoKey = videoSecretMeta === true || videoSecretMeta?.set === true || typeof videoSecretMeta === "object" && videoSecretMeta != null && "set" in videoSecretMeta && videoSecretMeta.set;
      snapVisionBase = String(v.visionBaseUrl || "");
      snapVisionModel = String(v.visionModel || "");
      const visionSecretMeta = secrets.visionApiKey;
      snapVisionKey = visionSecretMeta === true || visionSecretMeta?.set === true || typeof visionSecretMeta === "object" && visionSecretMeta != null && "set" in visionSecretMeta && visionSecretMeta.set;
      setRevision(snap.revision);
    }
    setBaseUrl(snapBase);
    setProvider(snapProvider);
    setKeyConfigured(Boolean(snapKey));
    setVideoBaseUrl(snapVideoBase);
    setVideoProvider(snapVideoProvider);
    setVideoDefaultModel(snapVideoModel);
    setVideoKeyConfigured(Boolean(snapVideoKey));
    setVisionBaseUrl(snapVisionBase);
    setVisionModel(snapVisionModel);
    setVisionKeyConfigured(Boolean(snapVisionKey));
    const rpc = connection?.rpc;
    if (!rpc?.call) return;
    void (async () => {
      try {
        const result = await rpc.call("/dsh-ws", "settings.effective", {});
        if (!result?.ok || !result.value) return;
        const e = result.value;
        if (!snapBase && e.mediaBaseUrl) {
          setBaseUrl(String(e.mediaBaseUrl || ""));
          if (["anthropic-compat", "gptimg", "openai-images"].includes(e.mediaProvider)) {
            setProvider(e.mediaProvider);
          }
        }
        if (!snapKey && e.mediaKeyConfigured) setKeyConfigured(true);
        if (!snapVideoBase && e.videoBaseUrl) {
          setVideoBaseUrl(String(e.videoBaseUrl || ""));
          if (e.videoProvider) setVideoProvider(String(e.videoProvider));
          if (e.videoDefaultModel) setVideoDefaultModel(String(e.videoDefaultModel));
        }
        if (!snapVideoKey && e.videoKeyConfigured) setVideoKeyConfigured(true);
        if (!snapVisionBase && e.visionBaseUrl) {
          setVisionBaseUrl(String(e.visionBaseUrl || ""));
          if (e.visionModel) setVisionModel(String(e.visionModel));
        }
        if (!snapVisionKey && e.visionKeyConfigured) setVisionKeyConfigured(true);
        const fromEnv = !snapBase && e.mediaSource && e.mediaSource !== "settings" || !snapKey && e.mediaKeyConfigured && e.mediaSource && e.mediaSource !== "settings";
        if (fromEnv) {
          setStatus((s) => s || "Backfilled from host media.env (key stays on host)");
        }
      } catch {
      }
    })();
  }, [scope, connection]);
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
        { op: "set", path: ["videoDefaultModel"], value: videoDefaultModel.trim() },
        { op: "set", path: ["visionBaseUrl"], value: visionBaseUrl.trim() },
        { op: "set", path: ["visionModel"], value: visionModel.trim() }
      ];
      if (apiKeyDraft.trim()) {
        ops.push({ op: "set", path: ["mediaApiKey"], value: apiKeyDraft.trim() });
      }
      if (videoApiKeyDraft.trim()) {
        ops.push({ op: "set", path: ["videoApiKey"], value: videoApiKeyDraft.trim() });
      }
      if (visionApiKeyDraft.trim()) {
        ops.push({ op: "set", path: ["visionApiKey"], value: visionApiKeyDraft.trim() });
      }
      if (typeof scope.mutate === "function") {
        await scope.mutate(ops, revision);
      } else {
        for (const op of ops) await scope.set(op.path[0], op.value);
      }
      setApiKeyDraft("");
      setVideoApiKeyDraft("");
      setVisionApiKeyDraft("");
      if (apiKeyDraft.trim()) setKeyConfigured(true);
      if (videoApiKeyDraft.trim()) setVideoKeyConfigured(true);
      if (visionApiKeyDraft.trim()) setVisionKeyConfigured(true);
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
  const inputBg = "var(--dsw-alias-bg-layer-1, var(--dsw-alias-bg-module-platform, transparent))";
  const layer2 = "var(--dsw-alias-bg-layer-2, #f3f4f6)";
  const layer3 = "var(--dsw-alias-bg-layer-3, var(--dsw-alias-bg-layer-2, transparent))";
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
    color: "var(--dsw-alias-label-primary-foreground)",
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
        font: "inherit"
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
          "Vision"
        ),
        h(
          "label",
          { style: fieldStyle },
          h("span", { style: { color: fgSecondary, fontWeight: 500 } }, "Vision API base URL"),
          h("input", {
            style: inputStyle,
            value: visionBaseUrl,
            placeholder: "Vision base URL (chat/completions)",
            onChange: (e) => setVisionBaseUrl(e.target.value),
            disabled: busy
          })
        ),
        h(
          "label",
          { style: fieldStyle },
          h(
            "span",
            { style: { display: "flex", justifyContent: "space-between" } },
            h("span", { style: { color: fgSecondary, fontWeight: 500 } }, "Vision API key"),
            h(
              "span",
              { style: { color: fgMuted, fontSize: 11 } },
              visionKeyConfigured ? "Configured" : "Not configured"
            )
          ),
          h("input", {
            style: inputStyle,
            type: "password",
            autoComplete: "new-password",
            value: visionApiKeyDraft,
            placeholder: visionKeyConfigured ? "Leave blank to keep stored key" : "Paste key, then Save",
            onChange: (e) => setVisionApiKeyDraft(e.target.value),
            disabled: busy
          })
        ),
        h(
          "label",
          { style: fieldStyle },
          h("span", { style: { color: fgSecondary, fontWeight: 500 } }, "Vision model"),
          h("input", {
            style: inputStyle,
            value: visionModel,
            placeholder: "e.g. gpt-4o-mini",
            onChange: (e) => setVisionModel(e.target.value),
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
var CTA_RPC_GIF_GENERATE = "gifGenerate";
var CTA_RPC_ECOM_GENERATE = "ecommerceGenerate";
var CTA_RPC_REVERSE_PROMPT = "reversePrompt";
var CTA_RPC_ENHANCE_PROMPT = "enhancePrompt";
var CTA_RPC_STORAGE_PATHS2 = "storage.paths";
var CTA_RPC_GALLERY_ADD2 = "gallery.add";
var SKILL_RPC_CHANNEL = "/dsh-ws-skill";
var SKILL_RPC_PLAN = "plan";
var SKILL_RPC_SUGGEST = "suggest";
function resolveCtaBase() {
  const loc = globalThis.location;
  if (loc?.origin && loc.origin !== "null") return loc.origin;
  if (typeof loc?.href === "string" && /^https?:/i.test(loc.href)) {
    try {
      return new URL(loc.href).origin;
    } catch (_) {
    }
  }
  return "";
}
function newRpcId() {
  try {
    if (globalThis.crypto?.randomUUID) return globalThis.crypto.randomUUID();
  } catch (_) {
  }
  return `dsh-ws-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}
async function postDshWs(endpoint, payload, signal) {
  const base = resolveCtaBase();
  const url = `${base}${CTA_RPC_CHANNEL2}/${endpoint}`;
  const rpcId = newRpcId();
  const res = await globalThis.fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    credentials: "include",
    body: JSON.stringify({
      type: "client-request",
      rpcId,
      method: endpoint,
      payload
    }),
    ...signal ? { signal } : {}
  });
  if (!res.ok) {
    throw new Error(`transport failure for ${CTA_RPC_CHANNEL2}/${endpoint}: HTTP ${res.status}`);
  }
  const full = await res.json();
  if (!full || full.type !== "server-response" || typeof full.rpcId !== "string") {
    throw new TypeError("connection: invalid server-response envelope");
  }
  return full.result;
}
async function callCtaRpc(rpc, endpoint, payload, signal) {
  if (typeof globalThis.fetch === "function") {
    return postDshWs(endpoint, payload, signal);
  }
  if (rpc && typeof rpc.call === "function") {
    return rpc.call(CTA_RPC_CHANNEL2, endpoint, payload, signal);
  }
  throw new Error("fetch and connection.rpc.call unavailable");
}
async function postSkillRpc(endpoint, payload, signal) {
  const base = resolveCtaBase();
  const url = `${base}${SKILL_RPC_CHANNEL}/${endpoint}`;
  const rpcId = newRpcId();
  const res = await globalThis.fetch(url, {
    method: "POST",
    headers: { "content-type": "application/json" },
    credentials: "include",
    body: JSON.stringify({
      type: "client-request",
      rpcId,
      method: endpoint,
      payload
    }),
    ...signal ? { signal } : {}
  });
  if (!res.ok) {
    throw new Error(`transport failure for ${SKILL_RPC_CHANNEL}/${endpoint}: HTTP ${res.status}`);
  }
  const full = await res.json();
  if (!full || full.type !== "server-response" || typeof full.rpcId !== "string") {
    throw new TypeError("connection: invalid server-response envelope");
  }
  return full.result;
}
async function callSkillRpc(rpc, endpoint, payload, signal) {
  if (typeof globalThis.fetch === "function") {
    return postSkillRpc(endpoint, payload, signal);
  }
  if (rpc && typeof rpc.call === "function") {
    return rpc.call(SKILL_RPC_CHANNEL, endpoint, payload, signal);
  }
  throw new Error("fetch and connection.rpc.call unavailable");
}
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
    const canCall = typeof globalThis.fetch === "function" || rpc && typeof rpc.call === "function";
    if (!canCall) {
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
      const result = await callCtaRpc(
        rpc,
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
  document.addEventListener("dsh-ws-generate", onGenerate);
  document.addEventListener("dsh-ws-cancel", onCancel);
  disposers.push(() => document.removeEventListener("dsh-ws-generate", onGenerate));
  disposers.push(() => document.removeEventListener("dsh-ws-cancel", onCancel));
  let canvasInflight = false;
  let canvasAbort = null;
  const emitCanvasResult = (detail) => {
    const payload = {
      bubbles: true,
      composed: true,
      detail: detail && typeof detail === "object" ? detail : {}
    };
    document.dispatchEvent(new CustomEvent("dsh-ws-canvas-generate-result", payload));
    const hostEl = studio.getHostEl?.();
    if (hostEl instanceof HTMLElement) {
      hostEl.dispatchEvent(new CustomEvent("dsh-ws-canvas-generate-result", payload));
    }
  };
  const onCanvasGenerate = async (ev) => {
    const detail = ev?.detail && typeof ev.detail === "object" ? ev.detail : {};
    const resultNodeIds = Array.isArray(detail.resultNodeIds) ? detail.resultNodeIds : [];
    const nodeId = detail.nodeId || null;
    if (canvasInflight || inflight) {
      emitCanvasResult({
        ok: false,
        phase: "failed",
        error: "\u5DF2\u6709\u51FA\u56FE\u4EFB\u52A1\u8FDB\u884C\u4E2D\u2026",
        resultNodeIds,
        nodeId
      });
      return;
    }
    if (!String(detail.prompt || "").trim()) {
      emitCanvasResult({
        ok: false,
        phase: "failed",
        error: "\u8BF7\u5148\u8F93\u5165\u63D0\u793A\u8BCD\uFF08\u6587\u672C\u8282\u70B9\u6216\u5E95\u90E8\u8F93\u5165\u6846\uFF09",
        resultNodeIds,
        nodeId
      });
      return;
    }
    const rpc = ctx.connection?.rpc;
    const canCall = typeof globalThis.fetch === "function" || rpc && typeof rpc.call === "function";
    if (!canCall) {
      emitCanvasResult({
        ok: false,
        phase: "failed",
        error: "\u8FDE\u63A5\u4E0D\u53EF\u7528\uFF0C\u65E0\u6CD5\u51FA\u56FE",
        resultNodeIds,
        nodeId
      });
      return;
    }
    canvasInflight = true;
    const ac = new AbortController();
    canvasAbort = ac;
    const started = Date.now();
    const timer = setTimeout(() => ac.abort(), CLIENT_GENERATE_TIMEOUT_MS);
    try {
      const result = await callCtaRpc(
        rpc,
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
          modelId: String(detail.modelId || "").trim() || "grok-imagine-image",
          compareModels: detail.compareModels,
          refImages: detail.refImages
        },
        ac.signal
      );
      if (result?.ok) {
        const value = {
          ...result.value || {},
          phase: result.value?.phase || "done",
          elapsedMs: Date.now() - started,
          prompt: detail.prompt,
          modelId: String(detail.modelId || "").trim() || "grok-imagine-image"
        };
        emitCanvasResult({
          ok: true,
          phase: value.phase,
          value,
          resultNodeIds,
          nodeId
        });
        try {
          studio.ingestHistoryResult?.({
            source: "canvas",
            jobId: value.jobId,
            prompt: detail.prompt,
            modelId: value.modelId,
            results: Array.isArray(value.results) ? value.results : [],
            phase: "done"
          });
        } catch (_) {
        }
      } else {
        const msg = formatHostGenerateError(result?.error || {});
        emitCanvasResult({
          ok: false,
          phase: "failed",
          error: msg,
          resultNodeIds,
          nodeId
        });
      }
    } catch (e) {
      if (ac.signal.aborted) {
        emitCanvasResult({
          ok: false,
          phase: "cancelled",
          error: "\u5BA2\u6237\u7AEF\u5DF2\u53D6\u6D88\uFF1B\u5BBF\u4E3B\u53D6\u6D88\u672A\u6302",
          resultNodeIds,
          nodeId
        });
      } else {
        const msg = formatClientRpcFailure(e);
        console.warn("[dsh-image-workstation] canvas CTA RPC failed:", scrubErrorMessage(e?.message || e));
        emitCanvasResult({
          ok: false,
          phase: "failed",
          error: msg,
          resultNodeIds,
          nodeId
        });
      }
    } finally {
      clearTimeout(timer);
      canvasInflight = false;
      canvasAbort = null;
    }
  };
  document.addEventListener("dsh-ws-canvas-generate", onCanvasGenerate);
  disposers.push(() => document.removeEventListener("dsh-ws-canvas-generate", onCanvasGenerate));
  let gifInflight = false;
  let gifAbort = null;
  const onGifGenerate = async (ev) => {
    const detail = ev?.detail && typeof ev.detail === "object" ? ev.detail : {};
    const paintFail = (msg) => {
      const status = String(msg || "GIF_NOT_CONFIGURED");
      studio.paintGifStubFailure?.(status);
      studio.setStatus?.(status);
    };
    const statusFromError = (error) => {
      const code = error?.code ? String(error.code) : "";
      if (code === "GIF_STUB_NOT_WIRED") return "GIF_STUB_NOT_WIRED";
      if (code === "GIF_NOT_CONFIGURED") return "GIF_NOT_CONFIGURED";
      if (code === "UNKNOWN_ENDPOINT" || code === "HOST_PROXY_NOT_WIRED") {
        return "GIF_NOT_CONFIGURED";
      }
      if (code) {
        const msg = scrubErrorMessage(error?.message || code);
        return msg.includes(code) ? msg : `${code}: ${msg}`;
      }
      return "GIF_NOT_CONFIGURED";
    };
    if (gifInflight) {
      studio.setStatus?.("\u5DF2\u6709 GIF \u4EFB\u52A1\u8FDB\u884C\u4E2D\u2026");
      return;
    }
    const rpc = ctx.connection?.rpc;
    const canCall = typeof globalThis.fetch === "function" || rpc && typeof rpc.call === "function";
    if (!canCall) {
      paintFail("GIF_NOT_CONFIGURED");
      return;
    }
    gifInflight = true;
    const ac = new AbortController();
    gifAbort = ac;
    const started = Date.now();
    studio.setStatus?.("\u7B49\u5F85\u5BBF\u4E3B\u8FDB\u5EA6\u2026");
    const timer = setTimeout(() => ac.abort(), CLIENT_GENERATE_TIMEOUT_MS);
    try {
      const result = await callCtaRpc(
        rpc,
        CTA_RPC_GIF_GENERATE,
        {
          prompt: detail.prompt,
          frameCount: detail.frameCount,
          fps: detail.fps,
          loops: detail.loops,
          size: detail.size,
          modelId: detail.modelId
        },
        ac.signal
      );
      if (result?.ok) {
        const value = result.value || {};
        const list = Array.isArray(value.results) ? value.results : [];
        const urls = list.map((r) => r?.url).filter((u) => typeof u === "string" && u);
        if (!urls.length) {
          paintFail(statusFromError(value.error || { code: "GIF_NOT_CONFIGURED" }));
        } else {
          studio.paintGifResult?.({
            ...value,
            phase: value.phase || "done",
            elapsedMs: Date.now() - started
          });
        }
      } else {
        paintFail(statusFromError(result?.error || {}));
      }
    } catch (e) {
      if (ac.signal.aborted) {
        studio.setStatus?.("\u5DF2\u53D6\u6D88");
      } else {
        const code = e?.code ? String(e.code) : "";
        paintFail(
          code === "GIF_STUB_NOT_WIRED" || code === "GIF_NOT_CONFIGURED" ? code : statusFromError({ code, message: e?.message || e })
        );
      }
    } finally {
      clearTimeout(timer);
      gifInflight = false;
      gifAbort = null;
    }
  };
  let ecomInflight = false;
  let ecomAbort = null;
  const onEcomGenerate = async (ev) => {
    const detail = ev?.detail && typeof ev.detail === "object" ? ev.detail : {};
    const paintFail = (msg) => {
      const status = String(msg || "ECOM_STUB_NOT_WIRED");
      studio.paintEcomStubFailure?.(status);
      studio.setStatus?.(status);
    };
    const statusFromError = (error) => {
      const code = error?.code ? String(error.code) : "";
      if (code === "ECOM_STUB_NOT_WIRED") return "ECOM_STUB_NOT_WIRED";
      if (code === "UNKNOWN_ENDPOINT" || code === "HOST_PROXY_NOT_WIRED") return "ECOM_STUB_NOT_WIRED";
      if (code) {
        const msg = scrubErrorMessage(error?.message || code);
        return msg.includes(code) ? msg : `${code}: ${msg}`;
      }
      return "ECOM_STUB_NOT_WIRED";
    };
    if (ecomInflight) {
      studio.setStatus?.("\u5DF2\u6709\u7535\u5546\u5957\u56FE\u4EFB\u52A1\u8FDB\u884C\u4E2D\u2026");
      return;
    }
    const rpc = ctx.connection?.rpc;
    const canCall = typeof globalThis.fetch === "function" || rpc && typeof rpc.call === "function";
    if (!canCall) {
      paintFail("ECOM_STUB_NOT_WIRED");
      return;
    }
    ecomInflight = true;
    const ac = new AbortController();
    ecomAbort = ac;
    studio.setStatus?.("\u7B49\u5F85\u5BBF\u4E3B\u8FDB\u5EA6\u2026");
    const timer = setTimeout(() => ac.abort(), CLIENT_GENERATE_TIMEOUT_MS);
    try {
      const result = await callCtaRpc(
        rpc,
        CTA_RPC_ECOM_GENERATE,
        {
          productImages: detail.productImages,
          styleRef: detail.styleRef,
          name: detail.name,
          paramsText: detail.paramsText,
          locale: detail.locale,
          purposes: detail.purposes,
          plan: detail.plan,
          total: detail.total,
          confirmed: detail.confirmed
        },
        ac.signal
      );
      if (result?.ok) {
        studio.setStatus?.(result.value?.phase || "done");
      } else {
        paintFail(statusFromError(result?.error || {}));
      }
    } catch (e) {
      if (ac.signal.aborted) {
        studio.setStatus?.("\u5DF2\u53D6\u6D88");
      } else {
        const code = e?.code ? String(e.code) : "";
        paintFail(code === "ECOM_STUB_NOT_WIRED" ? code : statusFromError({ code, message: e?.message || e }));
      }
    } finally {
      clearTimeout(timer);
      ecomInflight = false;
      ecomAbort = null;
    }
  };
  document.addEventListener("dsh-ws-gif-generate", onGifGenerate);
  document.addEventListener("dsh-ws-ecom-generate", onEcomGenerate);
  disposers.push(() => document.removeEventListener("dsh-ws-gif-generate", onGifGenerate));
  disposers.push(() => document.removeEventListener("dsh-ws-ecom-generate", onEcomGenerate));
  try {
    mountSettingsCard(ctx);
  } catch (error) {
    console.warn("[dsh-image-workstation] settings card mount failed:", error);
  }
  try {
    const sidebarEntry = mountSidebarEntry({
      labels: { newSession: "\u65B0\u4F1A\u8BDD", studio: "\u751F\u56FE" },
      onNewSession: () => studio.close(),
      onStudio: () => studio.open(),
      initialSelected: "new-session"
    });
    const openStudio = studio.open.bind(studio);
    const closeStudio = studio.close.bind(studio);
    studio.open = () => {
      openStudio();
      sidebarEntry.setSelected("studio");
    };
    studio.close = () => {
      closeStudio();
      sidebarEntry.setSelected("none");
    };
    const onTopTab = (ev) => {
      if (!studio.isOpen?.()) {
        sidebarEntry.setSelected("none");
        return;
      }
      sidebarEntry.setSelected("studio");
    };
    document.addEventListener("dsh-ws-top-tab", onTopTab);
    disposers.push(() => document.removeEventListener("dsh-ws-top-tab", onTopTab));
    if (studio.isOpen?.()) sidebarEntry.setSelected("studio");
    else sidebarEntry.setSelected("none");
    disposers.push(() => sidebarEntry.dispose());
    let videoInflight = false;
    let videoAbort = null;
    const onVideoGenerate = async (ev) => {
      const detail = ev?.detail && typeof ev.detail === "object" ? ev.detail : {};
      const paintFail = (msg) => {
        const status = String(msg || "VIDEO_NOT_CONFIGURED");
        studio.paintVideoStubFailure?.(status);
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
    document.addEventListener("dsh-ws-video-generate", onVideoGenerate);
    document.addEventListener("dsh-ws-video-cancel", onVideoCancel);
    document.addEventListener("dsh-ws-reverse-prompt", onReversePrompt);
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
      const src = detail.src || detail.url || "";
      const localPath = detail.localPath || "";
      if (!src && !localPath) {
        studio.setStatus?.("\u65E0\u56FE\u53EF\u52A0\u753B\u5ECA");
        return;
      }
      const galleryApi = studio.getGalleryApi?.();
      if (galleryApi?.addFromDetail) {
        await galleryApi.addFromDetail({ ...detail, src, localPath });
        return;
      }
      try {
        const { addLocalGalleryItem: addLocalGalleryItem2 } = await Promise.resolve().then(() => (init_gallery_host(), gallery_host_exports));
        if (src) {
          const local = addLocalGalleryItem2({
            url: src,
            prompt: detail.prompt,
            mode: detail.snapshot?.mode,
            model: detail.snapshot?.modelId,
            ratio: detail.snapshot?.ratio
          });
          studio.setStatus?.(local.added ? "\u5DF2\u52A0\u5165\u753B\u5ECA\uFF08\u672C\u5730\uFF09" : "\u753B\u5ECA\u5DF2\u6709\u76F8\u540C\u5185\u5BB9\uFF08\u672C\u5730\uFF09");
        }
      } catch (_) {
        studio.setStatus?.("\u5DF2\u8BB0\u5F55\u52A0\u753B\u5ECA\u8BF7\u6C42");
      }
      const rpc = ctx.connection?.rpc;
      if (!rpc || typeof rpc.call !== "function") return;
      try {
        const paths = await rpc.call(CTA_RPC_CHANNEL2, CTA_RPC_STORAGE_PATHS2, {});
        const result = await rpc.call(CTA_RPC_CHANNEL2, CTA_RPC_GALLERY_ADD2, {
          src,
          localPath,
          prompt: detail.prompt || "",
          snapshot: detail.snapshot || null,
          galleryRel: paths?.value?.gallery,
          dataDir: paths?.value?.dataDir
        });
        if (result?.ok) {
          studio.setStatus?.(result.value?.added === false ? "\u753B\u5ECA\u5DF2\u6709\u76F8\u540C\u5185\u5BB9" : "\u5DF2\u52A0\u5165\u753B\u5ECA");
        }
      } catch (_) {
      }
    };
    document.addEventListener("dsh-ws-gallery-add", onGalleryAdd);
    disposers.push(() => document.removeEventListener("dsh-ws-gallery-add", onGalleryAdd));
    const onPlan = async (ev) => {
      const detail = ev?.detail && typeof ev.detail === "object" ? ev.detail : {};
      let skillId = String(detail.skillId || "").trim();
      const rpc = ctx.connection?.rpc;
      const canCall = typeof globalThis.fetch === "function" || rpc && typeof rpc.call === "function";
      if (!canCall) {
        studio.setStatus?.("\u8FDE\u63A5\u4E0D\u53EF\u7528\uFF0C\u65E0\u6CD5\u60F3\u65B9\u6848");
        return;
      }
      const brief = String(detail.prompt || detail.planText || "").trim();
      let matchedLabel = "";
      try {
        if (!skillId) {
          studio.setStatus?.("\u6309\u63D0\u793A\u8BCD\u667A\u80FD\u5339\u914D Skill\u2026");
          const theme = [brief, detail.prompt, detail.planText].filter(Boolean).join("\n");
          let topLabel = suggestSkillsFromTheme(theme).top?.label || "";
          if (!topLabel) {
            try {
              const sug = await callSkillRpc(rpc, SKILL_RPC_SUGGEST, {
                theme,
                prompt: theme,
                brief: theme
              });
              topLabel = sug?.ok && sug.value?.top?.label ? String(sug.value.top.label) : "";
            } catch (_) {
            }
          }
          if (topLabel) {
            studio.applyMatchedSkill?.(topLabel);
            skillId = topLabel;
            matchedLabel = topLabel;
            studio.setStatus?.(`\u5DF2\u667A\u80FD\u5339\u914D\u300C${topLabel}\u300D\uFF0C\u60F3\u65B9\u6848\u4E2D\u2026`);
          } else {
            studio.setStatus?.(
              theme ? "\u672A\u5339\u914D\u5230 Skill \u2014 \u53EF\u4E0D\u9009\u76F4\u63A5\u51FA\u56FE\uFF0C\u6216\u624B\u9009\u540E\u518D\u60F3\u65B9\u6848" : "\u8BF7\u5148\u5728\u63D0\u793A\u8BCD\u91CC\u5199\u753B\u9762\uFF08\u5982\u300C\u751F\u547D\u611F\u4EBA\u50CF\u300D\uFF09\uFF0C\u518D\u70B9\u60F3\u65B9\u6848\uFF1B\u4E5F\u53EF\u624B\u9009 Skill"
            );
            return;
          }
        } else {
          studio.setStatus?.("\u60F3\u65B9\u6848\u4E2D\u2026");
        }
        const result = await callSkillRpc(rpc, SKILL_RPC_PLAN, {
          skillId,
          label: skillId,
          brief: brief || detail.prompt || "",
          prompt: brief || detail.prompt || "",
          mode: detail.mode,
          refImageIds: Array.isArray(detail.refImageIds) ? detail.refImageIds : void 0
        });
        if (result?.ok) {
          studio.paintSkillPlanResult?.(result.value);
          const lab = result.value?.label || result.value?.skillId;
          if (lab) studio.applyMatchedSkill?.(lab);
        } else {
          const code = result?.error?.code ? String(result.error.code) : "";
          if (code === "SKILL_REQUIRED" && matchedLabel) {
            studio.setStatus?.(`\u5DF2\u667A\u80FD\u5339\u914D\u300C${matchedLabel}\u300D\u2026`);
          } else if (code === "SKILL_REQUIRED") {
            const raw = result?.error?.message || "\u8BF7\u5148\u5199\u63D0\u793A\u8BCD\u6216\u9009\u62E9\u521B\u4F5C Skill";
            studio.setStatus?.(scrubErrorMessage(raw));
          } else {
            studio.setStatus?.(scrubErrorMessage(result?.error?.message || "\u60F3\u65B9\u6848\u5931\u8D25"));
          }
        }
      } catch (e) {
        if (matchedLabel) {
          studio.setStatus?.(`\u5DF2\u667A\u80FD\u5339\u914D\u300C${matchedLabel}\u300D\u2026`);
        } else {
          studio.setStatus?.(formatClientRpcFailure(e));
        }
      }
    };
    document.addEventListener("dsh-ws-plan", onPlan);
    disposers.push(() => document.removeEventListener("dsh-ws-plan", onPlan));
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
