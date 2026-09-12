/**
 * 画廊 — Nova asset-store semantics (list/add/tag/dedupe/layout persist)
 * + storage/gallery RPC seats. VisioWork-shaped density only; original CSS tokens.
 * Labels from ../ui/labels.js. No fake demos / no content-moderation lock.
 */
import {
  GALLERY_VIEWS,
  GALLERY_SORT,
  GALLERY_FILTERS,
  GALLERY_TAG_ACTIONS,
  GALLERY_ACTIONS,
  RATIOS,
  MODE_TABS,
  VIDEO_MODE_TABS,
} from '../ui/labels.js'

export const GALLERY_PAGE = '画廊'
export const IMAGE_PAGE = '普通生图'
export const VIDEO_PAGE = '视频生成'
export const CANVAS_PAGE = '无限画布'

const STORAGE_KEY = 'dsh-ws-gallery-items'
const TAGS_KEY = 'dsh-ws-gallery-tags-v1'
const LAYOUT_KEY = 'dsh-ws-gallery-layout-v1'
const HISTORY_KEY_BASE = 'dsh-ws-history-v1'
const CTA_RPC_CHANNEL = '/dsh-ws'
const CTA_RPC_STORAGE_PATHS = 'storage.paths'
const CTA_RPC_STORAGE_LIST = 'storage.list'
const CTA_RPC_GALLERY_ADD = 'gallery.add'
const CTA_RPC_GALLERY_LIST = 'gallery.list'
const CTA_RPC_GALLERY_TAGS = 'gallery.tags'
const DEFAULT_PATHS = Object.freeze({
  dataDir: '',
  generated: 'media/generated',
  gallery: 'media/gallery',
  history: 'media/history',
})
const EMPTY_HINT =
  '画廊还是空的。在普通生图或视频结果里点「加画廊」，满意作品会沉淀到这里。'
const FILTER_ALL = '全部'

/** @param {string} s */
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

/** Nova sanitizeTags */
export function sanitizeTags(tags) {
  if (!Array.isArray(tags)) return []
  const unique = new Set()
  for (const raw of tags) {
    const tag = String(raw ?? '').trim()
    if (tag) unique.add(tag)
  }
  return [...unique].slice(0, 20)
}

function makeId(prefix = 'gal') {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return `${prefix}-${crypto.randomUUID()}`
  }
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

/** Cheap fingerprint for dedupe (Nova hashBlob lite). */
export function fingerprintSrc(src) {
  const s = String(src || '')
  if (!s) return ''
  let h = 0x811c9dc5
  const n = Math.min(s.length, 4096)
  for (let i = 0; i < n; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
  }
  return `fnv-${s.length}-${h.toString(16)}`
}

export function readLocalGalleryItems() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (it) => it && typeof it === 'object' && typeof it.id === 'string' && (typeof it.url === 'string' || it.localPath),
    )
  } catch (_) {
    return []
  }
}

export function writeLocalGalleryItems(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch (_) {}
}

export function readLocalTags() {
  try {
    const raw = localStorage.getItem(TAGS_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter((t) => t && typeof t.id === 'string' && typeof t.name === 'string')
  } catch (_) {
    return []
  }
}

export function writeLocalTags(tags) {
  try {
    localStorage.setItem(TAGS_KEY, JSON.stringify(tags))
  } catch (_) {}
}

export function readGalleryLayout() {
  try {
    const raw = localStorage.getItem(LAYOUT_KEY)
    if (!raw) return {}
    const parsed = JSON.parse(raw)
    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch (_) {
    return {}
  }
}

export function writeGalleryLayout(layout) {
  try {
    localStorage.setItem(
      LAYOUT_KEY,
      JSON.stringify({ view: layout.view, sort: layout.sort, filters: layout.filters }),
    )
  } catch (_) {}
}

/**
 * Append with content fingerprint dedupe (Nova asset-store).
 */
export function addLocalGalleryItem(input) {
  const url = String(input?.url || '').trim()
  if (!url) {
    return { added: false, item: null, items: readLocalGalleryItems() }
  }
  const hash = input.hash || fingerprintSrc(url)
  const items = readLocalGalleryItems()
  const dup = items.find((it) => it.hash === hash || it.url === url)
  if (dup) {
    const merged = {
      ...dup,
      tagIds: sanitizeTags([...(dup.tagIds || []), ...(input.tagIds || [])]),
      tags: sanitizeTags([...(dup.tags || []), ...(input.tags || [])]),
      updatedAt: Date.now(),
    }
    const next = items.map((it) => (it.id === dup.id ? merged : it))
    writeLocalGalleryItems(next)
    return { added: false, item: merged, items: next }
  }
  const item = {
    id: input.id || makeId(),
    url,
    kind: input.kind === 'video' ? 'video' : 'image',
    mode: input.mode ? String(input.mode) : undefined,
    model: input.model ? String(input.model) : undefined,
    ratio: input.ratio ? String(input.ratio) : undefined,
    prompt: input.prompt ? String(input.prompt) : undefined,
    name: input.name
      ? String(input.name)
      : input.prompt
        ? String(input.prompt).slice(0, 40)
        : '画廊',
    tagIds: sanitizeTags(input.tagIds),
    tags: sanitizeTags(input.tags),
    hash,
    createdAt: Number(input.createdAt) || Date.now(),
    seat: 'gallery',
    localPath: input.localPath,
    relativePath: input.relativePath,
  }
  const next = [item, ...items]
  writeLocalGalleryItems(next)
  return { added: true, item, items: next }
}

export function removeLocalGalleryItem(id) {
  const next = readLocalGalleryItems().filter((it) => it.id !== id)
  writeLocalGalleryItems(next)
  return next
}

export function tagLocalGalleryItem(id, tagIds) {
  const normalized = sanitizeTags(tagIds)
  const next = readLocalGalleryItems().map((it) =>
    it.id === id ? { ...it, tagIds: normalized, tags: normalized } : it,
  )
  writeLocalGalleryItems(next)
  return next
}

export function defaultStoragePaths() {
  return { ...DEFAULT_PATHS }
}

/** Studio history (namespaced keys) → gallery-shaped items. Nova job-store shape. */
export function readLocalHistoryItems() {
  const out = []
  try {
    const keys = []
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i)
      if (k === HISTORY_KEY_BASE || (k && k.startsWith(`${HISTORY_KEY_BASE}::`))) keys.push(k)
    }
    for (const key of keys) {
      let parsed
      try {
        parsed = JSON.parse(localStorage.getItem(key) || '[]')
      } catch {
        continue
      }
      if (!Array.isArray(parsed)) continue
      for (const entry of parsed) {
        const id = entry?.id != null ? String(entry.id) : ''
        const value = entry?.value && typeof entry.value === 'object' ? entry.value : {}
        const results = Array.isArray(value.results) ? value.results : []
        const snap = entry?.snapshot && typeof entry.snapshot === 'object' ? entry.snapshot : {}
        results.forEach((r, i) => {
          const url = r?.url ? String(r.url) : ''
          const localPath = r?.localPath ? String(r.localPath) : ''
          if (!url && !localPath) return
          out.push({
            id: `${id || 'hist'}-${i}`,
            url: url || '',
            localPath: localPath || undefined,
            kind: r?.kind === 'video' ? 'video' : 'image',
            mode: snap.mode ? String(snap.mode) : undefined,
            model: snap.modelId ? String(snap.modelId) : undefined,
            ratio: snap.ratio ? String(snap.ratio) : undefined,
            prompt: snap.prompt ? String(snap.prompt) : undefined,
            createdAt: Number(entry.savedAt) || Date.now(),
            name: snap.prompt ? String(snap.prompt).slice(0, 40) : '历史',
            seat: 'history',
          })
        })
      }
    }
  } catch (_) {}
  return out
}

export async function fetchStorageMedia(opts) {
  const paths = defaultStoragePaths()
  let diskItems = []
  const rpc = typeof opts?.getRpc === 'function' ? opts.getRpc() : null
  if (!rpc || typeof rpc.call !== 'function') return { paths, diskItems }
  try {
    const pathRes = await rpc.call(CTA_RPC_CHANNEL, CTA_RPC_STORAGE_PATHS, {})
    if (pathRes?.ok && pathRes.value && typeof pathRes.value === 'object') {
      const v = pathRes.value
      if (v.dataDir != null) paths.dataDir = String(v.dataDir)
      if (v.generated) paths.generated = String(v.generated)
      if (v.gallery) paths.gallery = String(v.gallery)
      if (v.history) paths.history = String(v.history)
    }
  } catch (_) {}
  try {
    const listRes = await rpc.call(CTA_RPC_CHANNEL, CTA_RPC_GALLERY_LIST, { dataDir: paths.dataDir })
    if (listRes?.ok && listRes.value) {
      const rows = Array.isArray(listRes.value.entries)
        ? listRes.value.entries
        : Array.isArray(listRes.value.items)
          ? listRes.value.items
          : []
      for (const it of rows) {
        if (!it || typeof it !== 'object') continue
        diskItems.push({
          id: String(it.id || makeId('disk')),
          url: it.url ? String(it.url) : it.images?.[0]?.url ? String(it.images[0].url) : '',
          localPath: it.localPath || it.images?.[0]?.localPath,
          relativePath: it.relativePath || it.images?.[0]?.relativePath,
          kind: it.kind === 'video' ? 'video' : 'image',
          name: it.name ? String(it.name) : it.prompt ? String(it.prompt).slice(0, 40) : '画廊',
          prompt: it.prompt ? String(it.prompt) : undefined,
          mode: it.mode ? String(it.mode) : undefined,
          model: it.model ? String(it.model) : undefined,
          ratio: it.ratio ? String(it.ratio) : undefined,
          tagIds: sanitizeTags(it.tagIds || it.tags),
          tags: sanitizeTags(it.tags || it.tagIds),
          hash: it.hash ? String(it.hash) : undefined,
          createdAt: Number(it.createdAt) || Date.now(),
          seat: 'gallery',
        })
      }
    }
  } catch (_) {}
  try {
    const listRes = await rpc.call(CTA_RPC_CHANNEL, CTA_RPC_STORAGE_LIST, {})
    if (listRes?.ok && listRes.value && typeof listRes.value === 'object') {
      const v = listRes.value
      if (v.gallery) paths.gallery = String(v.gallery || paths.gallery)
      if (v.history) paths.history = String(v.history || paths.history)
      if (v.dataDir != null) paths.dataDir = String(v.dataDir)
      const rows = Array.isArray(v.items)
        ? v.items
        : [
            ...(Array.isArray(v.galleryItems) ? v.galleryItems : []),
            ...(Array.isArray(v.historyItems) ? v.historyItems : []),
          ]
      for (const it of rows) {
        if (!it || typeof it !== 'object') continue
        const id = String(it.id || it.relativePath || it.name || makeId('seat'))
        if (diskItems.some((d) => d.id === id || (d.hash && d.hash === it.hash))) continue
        diskItems.push({
          id,
          url: it.url ? String(it.url) : '',
          localPath: it.localPath ? String(it.localPath) : undefined,
          kind: it.kind === 'video' ? 'video' : 'image',
          name: it.name ? String(it.name) : it.relativePath ? String(it.relativePath) : '素材',
          mode: it.mode ? String(it.mode) : undefined,
          model: it.model ? String(it.model) : undefined,
          ratio: it.ratio ? String(it.ratio) : undefined,
          tagIds: sanitizeTags(it.tagIds || it.tags),
          createdAt: Number(it.createdAt) || Date.now(),
          seat: it.seat ? String(it.seat) : undefined,
          relativePath: it.relativePath ? String(it.relativePath) : undefined,
          hash: it.hash ? String(it.hash) : undefined,
        })
      }
    }
  } catch (_) {}
  return { paths, diskItems }
}

export function collectLocalMediaItems(diskItems = []) {
  const gallery = readLocalGalleryItems()
  const history = readLocalHistoryItems()
  const merged = [...gallery, ...diskItems, ...history]
  const seen = new Set()
  const out = []
  for (const it of merged) {
    const key = it.hash || it.id || it.url || it.localPath || it.relativePath || ''
    if (!key || seen.has(key)) continue
    seen.add(key)
    out.push(it)
  }
  return out
}

export function defaultGalleryState() {
  const layout = readGalleryLayout()
  return {
    filters: {
      mode: layout.filters?.mode || FILTER_ALL,
      model: layout.filters?.model || FILTER_ALL,
      ratio: layout.filters?.ratio || FILTER_ALL,
      tagIds: Array.isArray(layout.filters?.tagIds) ? layout.filters.tagIds : [],
    },
    view: layout.view === 'waterfall' ? 'waterfall' : 'grid',
    sort: layout.sort === 'oldest' ? 'oldest' : 'newest',
    tags: readLocalTags(),
    selection: [],
    items: collectLocalMediaItems([]),
    paths: defaultStoragePaths(),
    lightboxId: undefined,
  }
}

export function galleryHostStyles() {
  return `
[data-dsh-ws-studio-host] [data-ws-page="gallery"] {
  display:none; pointer-events:none; flex:1; min-height:0; width:100%;
}
[data-dsh-ws-studio-host][data-ws-top-page="画廊"] [data-ws-page="gallery"] {
  display:flex; pointer-events:auto;
}
[data-dsh-ws-studio-host][data-ws-top-page="画廊"] [data-ws-page="image"],
[data-dsh-ws-studio-host][data-ws-top-page="画廊"] [data-ws-page="video"],
[data-dsh-ws-studio-host][data-ws-top-page="画廊"] [data-ws-page="ecom"],
[data-dsh-ws-studio-host][data-ws-top-page="画廊"] [data-ws-page="canvas"] {
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
`
}

export function buildGalleryPageHtml(T, css, state) {
  const modeOpts = [FILTER_ALL, ...MODE_TABS, ...VIDEO_MODE_TABS]
  const ratioOpts = [FILTER_ALL, ...RATIOS]
  const viewWaterfallOn = state.view === 'waterfall'
  const viewGridOn = state.view === 'grid'
  const sortNewestOn = state.sort === 'newest'
  const sortOldestOn = state.sort === 'oldest'

  const filterSelect = (key, label, opts, selected) =>
    `<label style="display:flex;flex-direction:column;gap:4px;font-size:11px;color:${T.fg2};">
      <span>${escapeHtml(label)}</span>
      <select data-ws-gallery-filter="${key}" aria-label="${escapeHtml(label)}" style="${css.select}">
        ${opts
          .map(
            (o) =>
              `<option value="${escapeHtml(String(o))}" ${String(o) === String(selected) ? 'selected' : ''}>${escapeHtml(String(o))}</option>`,
          )
          .join('')}
      </select>
    </label>`

  return `
<div data-ws-page="gallery" data-ws-gallery-cols role="region" aria-label="${GALLERY_PAGE}" style="position:relative;">
  <aside data-ws-gallery-rail>
    <div style="font-size:13px;font-weight:600;color:${T.fg};">${GALLERY_PAGE}</div>
    ${filterSelect('mode', GALLERY_FILTERS.mode, modeOpts, state.filters.mode)}
    ${filterSelect('model', GALLERY_FILTERS.model, [FILTER_ALL], state.filters.model)}
    ${filterSelect('ratio', GALLERY_FILTERS.ratio, ratioOpts, state.filters.ratio)}
    <div style="display:flex;flex-direction:column;gap:6px;">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;">
        <span style="font-size:11px;font-weight:600;color:${T.fg2};">${GALLERY_FILTERS.tag}</span>
        <button type="button" data-ws-gallery-tag-action="create" style="${css.pill({ size: '11px' })}">${GALLERY_TAG_ACTIONS.create}</button>
      </div>
      <div data-ws-gallery-tag-list style="display:flex;flex-wrap:wrap;gap:4px;min-height:20px;">
        <span data-ws-gallery-tag-empty style="font-size:11px;color:${T.fg3};">暂无标签</span>
      </div>
    </div>
    <div data-ws-gallery-count aria-live="polite">共 0 项</div>
  </aside>

  <section data-ws-gallery-main>
    <div data-ws-gallery-toolbar>
      <div role="group" aria-label="视图" style="display:flex;gap:4px;">
        <button type="button" data-ws-gallery-view="waterfall" aria-pressed="${viewWaterfallOn}" style="${css.chip(viewWaterfallOn)}">${GALLERY_VIEWS.waterfall}</button>
        <button type="button" data-ws-gallery-view="grid" aria-pressed="${viewGridOn}" style="${css.chip(viewGridOn)}">${GALLERY_VIEWS.grid}</button>
      </div>
      <div role="group" aria-label="排序" style="display:flex;gap:4px;">
        <button type="button" data-ws-gallery-sort="newest" aria-pressed="${sortNewestOn}" style="${css.chip(sortNewestOn)}">${GALLERY_SORT.newest}</button>
        <button type="button" data-ws-gallery-sort="oldest" aria-pressed="${sortOldestOn}" style="${css.chip(sortOldestOn)}">${GALLERY_SORT.oldest}</button>
      </div>
      <span style="flex:1"></span>
      <button type="button" data-ws-gallery-batch="tag" style="${css.pill()}">${GALLERY_TAG_ACTIONS.batchTag}</button>
      <button type="button" data-ws-gallery-batch="download" style="${css.pill()}">${GALLERY_TAG_ACTIONS.batchDownload}</button>
    </div>
    <div data-ws-gallery-grid data-view="${escapeHtml(state.view)}" role="list"></div>
    <p data-ws-gallery-status style="opacity:.65;font-size:11.5px;min-height:0;margin:0;"></p>
  </section>

  <div data-ws-gallery-lightbox aria-hidden="true">
    <div data-ws-gallery-lightbox-panel role="dialog" aria-label="预览">
      <div style="display:flex;justify-content:flex-end;">
        <button type="button" data-ws-gallery-lightbox-close style="${css.pill()}">关闭</button>
      </div>
      <div data-ws-gallery-lightbox-body></div>
      <div data-ws-gallery-lightbox-actions style="display:flex;flex-wrap:wrap;gap:6px;">
        ${GALLERY_ACTIONS.filter((a) => a !== '加画廊')
          .map((a) => `<button type="button" data-ws-gallery-action="${a}" style="${css.pill()}">${a}</button>`)
          .join('')}
      </div>
    </div>
  </div>
</div>
`
}

export function mountGalleryPage(host, opts) {
  const { T, css, getRpc } = opts
  const state = defaultGalleryState()

  const imageCols = host.querySelector('[data-ws-cols]')
  if (imageCols instanceof HTMLElement && !imageCols.hasAttribute('data-ws-page')) {
    imageCols.setAttribute('data-ws-page', 'image')
  }

  let styleEl = host.querySelector('style[data-ws-gallery-styles]')
  if (!styleEl) {
    styleEl = document.createElement('style')
    styleEl.setAttribute('data-ws-gallery-styles', '')
    styleEl.textContent = galleryHostStyles()
    host.appendChild(styleEl)
  }

  host.querySelector('[data-ws-page="gallery"]')?.remove()

  const wrap = document.createElement('div')
  wrap.innerHTML = buildGalleryPageHtml(T, css, state).trim()
  const page = wrap.firstElementChild
  if (!(page instanceof HTMLElement)) {
    return { state, setPage: () => {}, reload: () => {}, dispose: () => {} }
  }

  if (imageCols?.parentElement) imageCols.parentElement.appendChild(page)
  else host.appendChild(page)

  const setStatus = (text) => {
    const el = page.querySelector('[data-ws-gallery-status]')
    if (el) el.textContent = text || ''
  }

  const persistLayout = () => {
    writeGalleryLayout({ view: state.view, sort: state.sort, filters: state.filters })
  }

  const filteredItems = () => {
    let list = [...state.items]
    const { mode, model, ratio, tagIds } = state.filters
    if (mode && mode !== FILTER_ALL) list = list.filter((it) => it.mode === mode)
    if (model && model !== FILTER_ALL) list = list.filter((it) => it.model === model)
    if (ratio && ratio !== FILTER_ALL) list = list.filter((it) => it.ratio === ratio)
    if (tagIds?.length) {
      list = list.filter((it) => {
        const ids = it.tagIds || it.tags || []
        return ids.some((id) => tagIds.includes(id))
      })
    }
    list.sort((a, b) => {
      const ta = Number(a.createdAt) || 0
      const tb = Number(b.createdAt) || 0
      return state.sort === 'oldest' ? ta - tb : tb - ta
    })
    return list
  }

  const paintModelFilter = () => {
    const sel = page.querySelector('[data-ws-gallery-filter="model"]')
    if (!(sel instanceof HTMLSelectElement)) return
    const models = [...new Set(state.items.map((it) => it.model).filter(Boolean))].sort()
    const cur = state.filters.model
    sel.innerHTML = [FILTER_ALL, ...models]
      .map(
        (o) =>
          `<option value="${escapeHtml(String(o))}" ${String(o) === String(cur) ? 'selected' : ''}>${escapeHtml(String(o))}</option>`,
      )
      .join('')
  }

  const paintTags = () => {
    const list = page.querySelector('[data-ws-gallery-tag-list]')
    if (!(list instanceof HTMLElement)) return
    if (!state.tags.length) {
      list.innerHTML = `<span data-ws-gallery-tag-empty style="font-size:11px;color:${T.fg3};">暂无标签</span>`
      return
    }
    list.innerHTML = state.tags
      .map((tag) => {
        const on = state.filters.tagIds.includes(tag.id)
        return `<button type="button" data-ws-gallery-tag="${escapeHtml(tag.id)}" aria-pressed="${on}" style="${css.chip(on)}" title="右键删除">${escapeHtml(tag.name)}</button>`
      })
      .join('')
  }

  const paintGrid = () => {
    const grid = page.querySelector('[data-ws-gallery-grid]')
    const countEl = page.querySelector('[data-ws-gallery-count]')
    if (!(grid instanceof HTMLElement)) return
    grid.setAttribute('data-view', state.view)
    const items = filteredItems()
    if (countEl) countEl.textContent = `共 ${items.length} 项`

    if (!items.length) {
      const rawEmpty = !state.items.length
      const seats = state.paths
        ? `本地座位：${escapeHtml(state.paths.gallery)} · ${escapeHtml(state.paths.history)}`
        : ''
      grid.innerHTML = `<div data-ws-gallery-empty role="status">${
        rawEmpty
          ? `${EMPTY_HINT}${seats ? `<div style="margin-top:8px;font-size:11px;opacity:.85;">${seats}</div>` : ''}`
          : '当前筛选下没有素材。试试改模式 / 模型 / 比例 / 标签。'
      }</div>`
      return
    }

    grid.innerHTML = items
      .map((it) => {
        const selected = state.selection.includes(it.id)
        const src = it.url || ''
        const isVideo = it.kind === 'video' || /\.(mp4|webm|mov)(\?|$)/i.test(src || it.relativePath || '')
        let media
        if (src) {
          media = isVideo
            ? `<video src="${escapeHtml(src)}" muted playsinline preload="metadata"></video>`
            : `<img src="${escapeHtml(src)}" alt="" loading="lazy" />`
        } else {
          const label = escapeHtml(it.name || it.relativePath || '本地文件')
          media = `<div style="aspect-ratio:1;display:flex;align-items:center;justify-content:center;padding:8px;font-size:11px;color:var(--dsw-alias-label-tertiary);text-align:center;background:var(--dsw-alias-bg-layer-1);">${label}</div>`
        }
        const meta = escapeHtml(it.name || it.mode || it.model || it.ratio || it.relativePath || '素材')
        return `<article data-ws-gallery-card data-id="${escapeHtml(it.id)}" role="listitem" ${selected ? 'data-selected' : ''}>
          ${media}
          <div data-ws-gallery-card-meta>${meta}</div>
        </article>`
      })
      .join('')
  }

  const paintViewSort = () => {
    page.querySelectorAll('[data-ws-gallery-view]').forEach((btn) => {
      const on = btn.getAttribute('data-ws-gallery-view') === state.view
      btn.setAttribute('aria-pressed', on ? 'true' : 'false')
      if (btn instanceof HTMLElement) btn.style.cssText = css.chip(on)
    })
    page.querySelectorAll('[data-ws-gallery-sort]').forEach((btn) => {
      const on = btn.getAttribute('data-ws-gallery-sort') === state.sort
      btn.setAttribute('aria-pressed', on ? 'true' : 'false')
      if (btn instanceof HTMLElement) btn.style.cssText = css.chip(on)
    })
  }

  const closeLightbox = () => {
    state.lightboxId = undefined
    const box = page.querySelector('[data-ws-gallery-lightbox]')
    if (box instanceof HTMLElement) {
      box.removeAttribute('data-open')
      box.setAttribute('aria-hidden', 'true')
    }
    const body = page.querySelector('[data-ws-gallery-lightbox-body]')
    if (body) body.innerHTML = ''
  }

  const openLightbox = (id) => {
    const item = state.items.find((it) => it.id === id)
    if (!item) return
    state.lightboxId = id
    const box = page.querySelector('[data-ws-gallery-lightbox]')
    const body = page.querySelector('[data-ws-gallery-lightbox-body]')
    if (!(box instanceof HTMLElement) || !(body instanceof HTMLElement)) return
    const isVideo = item.kind === 'video' || /\.(mp4|webm|mov)(\?|$)/i.test(item.url || '')
    body.innerHTML = isVideo
      ? `<video data-ws-gallery-lightbox-media controls src="${escapeHtml(item.url || '')}" style="width:100%;max-height:70vh;border-radius:8px;background:${T.layer1};"></video>`
      : `<img data-ws-gallery-lightbox-media src="${escapeHtml(item.url || '')}" alt="" style="width:100%;max-height:70vh;object-fit:contain;border-radius:8px;background:${T.layer1};" />`
    box.setAttribute('data-open', '')
    box.setAttribute('aria-hidden', 'false')
  }

  const downloadUrl = (url, name) => {
    if (!url) return false
    const a = document.createElement('a')
    a.href = url
    a.download = name || `dsh-gallery-${Date.now()}.png`
    a.rel = 'noopener'
    a.target = '_blank'
    a.click()
    return true
  }

  const reload = async () => {
    const { paths, diskItems } = await fetchStorageMedia({ getRpc })
    state.paths = paths
    state.tags = readLocalTags()
    state.items = collectLocalMediaItems(diskItems)
    paintModelFilter()
    paintTags()
    paintGrid()
    paintViewSort()
    const seatHint = `${paths.gallery} · ${paths.history}`
    if (!state.items.length) setStatus(`本地座位 ${seatHint}（暂无媒体）`)
    else setStatus(`已读 ${state.items.length} 项 · ${seatHint}`)
  }

  const addFromDetail = async (detail) => {
    const src = String(detail?.src || detail?.url || '').trim()
    if (!src) {
      setStatus('无图可加画廊')
      return { ok: false }
    }
    const snap = detail?.snapshot && typeof detail.snapshot === 'object' ? detail.snapshot : {}
    const local = addLocalGalleryItem({
      url: src,
      prompt: detail.prompt || snap.prompt,
      mode: detail.mode || snap.mode,
      model: detail.model || snap.modelId,
      ratio: detail.ratio || snap.ratio,
      kind: detail.kind,
      name: detail.prompt || snap.prompt ? String(detail.prompt || snap.prompt).slice(0, 40) : undefined,
    })
    state.items = collectLocalMediaItems([])
    paintGrid()
    paintModelFilter()

    const rpc = typeof getRpc === 'function' ? getRpc() : null
    if (rpc && typeof rpc.call === 'function') {
      try {
        const result = await rpc.call(CTA_RPC_CHANNEL, CTA_RPC_GALLERY_ADD, {
          src,
          prompt: detail.prompt || snap.prompt || '',
          snapshot: snap,
          mode: detail.mode || snap.mode,
          model: detail.model || snap.modelId,
          ratio: detail.ratio || snap.ratio,
          dataDir: state.paths?.dataDir,
          galleryRel: state.paths?.gallery,
        })
        if (result?.ok) {
          setStatus(result.value?.added !== false ? '已加入画廊' : '画廊已有相同内容')
          await reload()
          return { ok: true, added: result.value?.added !== false }
        }
      } catch (_) {}
    }
    setStatus(local.added ? '已加入画廊（本地）' : '画廊已有相同内容（本地）')
    return { ok: true, added: local.added }
  }

  page.querySelectorAll('[data-ws-gallery-filter]').forEach((sel) => {
    sel.addEventListener('change', (e) => {
      const el = e.target
      const key = el.getAttribute('data-ws-gallery-filter')
      if (key === 'mode') state.filters.mode = el.value
      else if (key === 'model') state.filters.model = el.value
      else if (key === 'ratio') state.filters.ratio = el.value
      persistLayout()
      paintGrid()
    })
  })

  page.querySelectorAll('[data-ws-gallery-view]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.view = btn.getAttribute('data-ws-gallery-view') === 'waterfall' ? 'waterfall' : 'grid'
      persistLayout()
      paintViewSort()
      paintGrid()
    })
  })

  page.querySelectorAll('[data-ws-gallery-sort]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.sort = btn.getAttribute('data-ws-gallery-sort') === 'oldest' ? 'oldest' : 'newest'
      persistLayout()
      paintViewSort()
      paintGrid()
    })
  })

  page.querySelector('[data-ws-gallery-tag-action="create"]')?.addEventListener('click', () => {
    const name = window.prompt('新标签名称', '')
    if (name == null) return
    const trimmed = String(name).trim()
    if (!trimmed) {
      setStatus('标签名不能为空')
      return
    }
    if (state.tags.some((t) => t.name === trimmed)) {
      setStatus('标签已存在')
      return
    }
    const tag = { id: makeId('tag'), name: trimmed }
    state.tags = [...state.tags, tag]
    writeLocalTags(state.tags)
    paintTags()
    setStatus(`已新建标签「${trimmed}」`)
  })

  page.querySelector('[data-ws-gallery-tag-list]')?.addEventListener('click', (e) => {
    const btn = e.target instanceof Element ? e.target.closest('[data-ws-gallery-tag]') : null
    if (!btn) return
    const id = btn.getAttribute('data-ws-gallery-tag') || ''
    if (!id) return
    if (state.filters.tagIds.includes(id)) {
      state.filters.tagIds = state.filters.tagIds.filter((x) => x !== id)
    } else {
      state.filters.tagIds = [...state.filters.tagIds, id]
    }
    persistLayout()
    paintTags()
    paintGrid()
  })

  page.querySelector('[data-ws-gallery-tag-list]')?.addEventListener('contextmenu', (e) => {
    const btn = e.target instanceof Element ? e.target.closest('[data-ws-gallery-tag]') : null
    if (!btn) return
    e.preventDefault()
    const id = btn.getAttribute('data-ws-gallery-tag') || ''
    const tag = state.tags.find((t) => t.id === id)
    if (!tag) return
    if (!window.confirm(`删除标签「${tag.name}」？`)) return
    state.tags = state.tags.filter((t) => t.id !== id)
    state.filters.tagIds = state.filters.tagIds.filter((x) => x !== id)
    writeLocalTags(state.tags)
    for (const it of readLocalGalleryItems()) {
      if ((it.tagIds || []).includes(id)) {
        tagLocalGalleryItem(it.id, (it.tagIds || []).filter((x) => x !== id))
      }
    }
    state.items = collectLocalMediaItems([])
    persistLayout()
    paintTags()
    paintGrid()
    setStatus(`已删除标签「${tag.name}」`)
  })

  page.querySelector('[data-ws-gallery-grid]')?.addEventListener('click', (e) => {
    const card = e.target instanceof Element ? e.target.closest('[data-ws-gallery-card]') : null
    if (!card) return
    const id = card.getAttribute('data-id') || ''
    if (!id) return
    if (e.metaKey || e.ctrlKey) {
      if (state.selection.includes(id)) state.selection = state.selection.filter((x) => x !== id)
      else state.selection = [...state.selection, id]
      paintGrid()
      return
    }
    openLightbox(id)
  })

  page.querySelector('[data-ws-gallery-lightbox-close]')?.addEventListener('click', closeLightbox)
  page.querySelector('[data-ws-gallery-lightbox]')?.addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeLightbox()
  })

  page.querySelector('[data-ws-gallery-lightbox-actions]')?.addEventListener('click', (e) => {
    const btn = e.target instanceof Element ? e.target.closest('[data-ws-gallery-action]') : null
    if (!btn) return
    const action = btn.getAttribute('data-ws-gallery-action') || ''
    const item = state.items.find((it) => it.id === state.lightboxId)
    if (!item) {
      setStatus('无选中素材')
      return
    }
    const src = item.url || ''
    if (action === '下载') {
      setStatus(downloadUrl(src, `${item.name || 'gallery'}.png`) ? '已下载' : '无图可下载')
      return
    }
    if (action === '当参考图') {
      host.dispatchEvent(new CustomEvent('dsh-ws-use-as-ref', { bubbles: true, detail: { src, item, from: 'gallery' } }))
      host.dispatchEvent(new CustomEvent('dsh-ws-top-page', { bubbles: true, detail: { page: IMAGE_PAGE } }))
      setStatus(src ? '已设为参考图' : '无图可作参考')
      return
    }
    if (action === '拿去做视频') {
      host.dispatchEvent(new CustomEvent('dsh-ws-top-page', { bubbles: true, detail: { page: VIDEO_PAGE, frameUrl: src } }))
      setStatus('已切换到视频生成')
      return
    }
    if (action === '加入画布') {
      host.dispatchEvent(new CustomEvent('dsh-ws-top-page', { bubbles: true, detail: { page: CANVAS_PAGE, imageUrl: src } }))
      setStatus('已切换到无限画布')
      return
    }
    if (action === '加对话') {
      host.dispatchEvent(new CustomEvent('dsh-ws-add-to-chat', { bubbles: true, detail: { src, prompt: item.prompt || item.name || '' } }))
      setStatus('已发送到对话')
      return
    }
    setStatus(`「${action}」`)
  })

  page.querySelectorAll('[data-ws-gallery-batch]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const kind = btn.getAttribute('data-ws-gallery-batch')
      if (!state.selection.length) {
        setStatus('先多选素材（Ctrl/⌘+点击）')
        return
      }
      if (kind === 'tag') {
        if (!state.tags.length) {
          setStatus('请先新建标签')
          return
        }
        const names = state.tags.map((t) => t.name).join(' / ')
        const picked = window.prompt(`批量打标签（现有：${names}）`, state.tags[0]?.name || '')
        if (picked == null) return
        const tag = state.tags.find((t) => t.name === String(picked).trim())
        if (!tag) {
          setStatus('标签不存在，请先新建')
          return
        }
        for (const id of state.selection) {
          const it = state.items.find((x) => x.id === id)
          if (!it) continue
          const nextIds = sanitizeTags([...(it.tagIds || it.tags || []), tag.id])
          tagLocalGalleryItem(id, nextIds)
          const rpc = typeof getRpc === 'function' ? getRpc() : null
          if (rpc && typeof rpc.call === 'function' && it.seat === 'gallery') {
            try {
              await rpc.call(CTA_RPC_CHANNEL, CTA_RPC_GALLERY_TAGS, {
                id,
                tags: nextIds,
                dataDir: state.paths?.dataDir,
              })
            } catch (_) {}
          }
        }
        state.items = collectLocalMediaItems([])
        paintGrid()
        setStatus(`已为 ${state.selection.length} 项打上「${tag.name}」`)
        return
      }
      if (kind === 'download') {
        let n = 0
        for (const id of state.selection) {
          const it = state.items.find((x) => x.id === id)
          if (it?.url && downloadUrl(it.url, `${it.name || id}.png`)) n++
        }
        setStatus(n ? `已触发 ${n} 项下载` : '选中项无可下载 URL')
      }
    })
  })

  const onGalleryAddEvent = (ev) => {
    const detail = ev?.detail && typeof ev.detail === 'object' ? ev.detail : {}
    void addFromDetail(detail)
  }
  document.addEventListener('dsh-ws-gallery-add', onGalleryAddEvent)

  const setPage = (tab) => {
    const name = String(tab || IMAGE_PAGE)
    host.setAttribute('data-ws-top-page', name)
    if (name === GALLERY_PAGE) reload()
  }

  reload()

  return {
    state,
    setPage,
    reload,
    setStatus,
    addFromDetail,
    dispose() {
      document.removeEventListener('dsh-ws-gallery-add', onGalleryAddEvent)
      closeLightbox()
      page.remove()
      styleEl?.remove()
    },
  }
}
