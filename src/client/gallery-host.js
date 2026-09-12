/**
 * 画廊 page shell — grid + local history/media read (docs/ui/06).
 * Resolves seats via RPC storage.paths (media/gallery · media/history).
 * VisioWork-shaped density only; original CSS via --dsw-* host tokens.
 * Labels exact from ../ui/labels.js. Empty honest if no media — no fake demos.
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

const STORAGE_KEY = 'dsh-ws-gallery-items'
const HISTORY_KEY = 'dsh-ws-history-v1'
const CTA_RPC_CHANNEL = '/dsh-ws'
const CTA_RPC_STORAGE_PATHS = 'storage.paths'
const CTA_RPC_STORAGE_LIST = 'storage.list'
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

/**
 * @typedef {{ id: string, url: string, kind?: string, mode?: string, model?: string, ratio?: string, tagIds?: string[], createdAt?: number, name?: string }} GalleryItem
 * @typedef {{ id: string, name: string }} GalleryTag
 */

/** Read local gallery media — never invent fixtures. */
export function readLocalGalleryItems() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    return parsed.filter(
      (it) => it && typeof it === 'object' && typeof it.id === 'string' && typeof it.url === 'string',
    )
  } catch (_) {
    return []
  }
}

/** @param {GalleryItem[]} items */
export function writeLocalGalleryItems(items) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
  } catch (_) {}
}

/**
 * @returns {{
 *   filters: { mode: string, model: string, ratio: string, tagIds: string[] },
 *   view: 'waterfall' | 'grid',
 *   sort: 'newest' | 'oldest',
 *   tags: GalleryTag[],
 *   selection: string[],
 *   items: GalleryItem[],
 *   lightboxId?: string,
 * }}
 */

/** @returns {typeof DEFAULT_PATHS & Record<string, string>} */
export function defaultStoragePaths() {
  return { ...DEFAULT_PATHS }
}

/**
 * Read studio local history (if persisted) into gallery-shaped items.
 * Never invent fixtures.
 * @returns {GalleryItem[]}
 */
export function readLocalHistoryItems() {
  try {
    const raw = localStorage.getItem(HISTORY_KEY)
    if (!raw) return []
    const parsed = JSON.parse(raw)
    if (!Array.isArray(parsed)) return []
    /** @type {GalleryItem[]} */
    const out = []
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
          createdAt: Number(entry.savedAt) || Date.now(),
          name: snap.prompt ? String(snap.prompt).slice(0, 40) : '历史',
          seat: 'history',
        })
      })
    }
    return out
  } catch (_) {
    return []
  }
}

/**
 * @param {{ getRpc?: () => { call?: Function } | null | undefined } | null | undefined} opts
 * @returns {Promise<{ paths: typeof DEFAULT_PATHS & Record<string, string>, diskItems: GalleryItem[] }>}
 */
export async function fetchStorageMedia(opts) {
  const paths = defaultStoragePaths()
  /** @type {GalleryItem[]} */
  let diskItems = []
  const rpc = typeof opts?.getRpc === 'function' ? opts.getRpc() : null
  if (!rpc || typeof rpc.call !== 'function') {
    return { paths, diskItems }
  }
  try {
    const pathRes = await rpc.call(CTA_RPC_CHANNEL, CTA_RPC_STORAGE_PATHS, {})
    if (pathRes?.ok && pathRes.value && typeof pathRes.value === 'object') {
      const v = pathRes.value
      if (v.dataDir != null) paths.dataDir = String(v.dataDir)
      if (v.generated) paths.generated = String(v.generated)
      if (v.gallery) paths.gallery = String(v.gallery)
      if (v.history) paths.history = String(v.history)
    }
  } catch (_) {
    /* keep defaults */
  }
  try {
    const listRes = await rpc.call(CTA_RPC_CHANNEL, CTA_RPC_STORAGE_LIST, {})
    if (listRes?.ok && listRes.value && typeof listRes.value === 'object') {
      const v = listRes.value
      if (v.gallery) paths.gallery = String(v.gallery || paths.gallery)
      if (v.history) paths.history = String(v.history || paths.history)
      if (v.dataDir != null) paths.dataDir = String(v.dataDir)
      const rows = Array.isArray(v.items)
        ? v.items
        : [...(Array.isArray(v.galleryItems) ? v.galleryItems : []), ...(Array.isArray(v.historyItems) ? v.historyItems : [])]
      diskItems = rows
        .filter((it) => it && typeof it === 'object')
        .map((it) => ({
          id: String(it.id || it.relativePath || it.name || Math.random()),
          url: it.url ? String(it.url) : '',
          localPath: it.localPath ? String(it.localPath) : undefined,
          kind: it.kind === 'video' ? 'video' : 'image',
          name: it.name ? String(it.name) : it.relativePath ? String(it.relativePath) : '素材',
          createdAt: Number(it.createdAt) || Date.now(),
          seat: it.seat ? String(it.seat) : undefined,
          relativePath: it.relativePath ? String(it.relativePath) : undefined,
        }))
    }
  } catch (_) {
    /* honest empty disk */
  }
  return { paths, diskItems }
}

/**
 * Merge localStorage gallery + history + disk seats. Dedup by id/url/path.
 * @param {GalleryItem[]} diskItems
 * @returns {GalleryItem[]}
 */
export function collectLocalMediaItems(diskItems = []) {
  const gallery = readLocalGalleryItems()
  const history = readLocalHistoryItems()
  const merged = [...diskItems, ...gallery, ...history]
  const seen = new Set()
  const out = []
  for (const it of merged) {
    const key = it.id || it.url || it.localPath || it.relativePath || ''
    if (!key || seen.has(key)) continue
    seen.add(key)
    out.push(it)
  }
  return out
}

export function defaultGalleryState() {
  return {
    filters: { mode: FILTER_ALL, model: FILTER_ALL, ratio: FILTER_ALL, tagIds: [] },
    view: 'grid',
    sort: 'newest',
    tags: [],
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
  /* display owned by [data-ws-page="gallery"] — same node must not force flex */
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

/**
 * @param {Record<string, string>} T
 * @param {object} css
 * @param {ReturnType<typeof defaultGalleryState>} state
 */
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

/**
 * @param {HTMLElement} host
 * @param {{ T: Record<string, string>, css: object }} opts
 */
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

  const filteredItems = () => {
    let list = [...state.items]
    const { mode, model, ratio, tagIds } = state.filters
    if (mode && mode !== FILTER_ALL) list = list.filter((it) => it.mode === mode)
    if (model && model !== FILTER_ALL) list = list.filter((it) => it.model === model)
    if (ratio && ratio !== FILTER_ALL) list = list.filter((it) => it.ratio === ratio)
    if (tagIds?.length) {
      list = list.filter((it) => (it.tagIds || []).some((id) => tagIds.includes(id)))
    }
    list.sort((a, b) => {
      const ta = Number(a.createdAt) || 0
      const tb = Number(b.createdAt) || 0
      return state.sort === 'oldest' ? ta - tb : tb - ta
    })
    return list
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
        return `<button type="button" data-ws-gallery-tag="${escapeHtml(tag.id)}" aria-pressed="${on}" style="${css.chip(on)}">${escapeHtml(tag.name)}</button>`
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
    const isVideo = item.kind === 'video' || /\.(mp4|webm|mov)(\?|$)/i.test(item.url)
    body.innerHTML = isVideo
      ? `<video class="data-ws-gallery-lightbox-media" data-ws-gallery-lightbox-media controls src="${escapeHtml(item.url)}" style="width:100%;max-height:70vh;border-radius:8px;background:${T.layer1};"></video>`
      : `<img data-ws-gallery-lightbox-media class="data-ws-gallery-lightbox-media" src="${escapeHtml(item.url)}" alt="" style="width:100%;max-height:70vh;object-fit:contain;border-radius:8px;background:${T.layer1};" />`
    box.setAttribute('data-open', '')
    box.setAttribute('aria-hidden', 'false')
  }

  const reload = async () => {
    const { paths, diskItems } = await fetchStorageMedia({ getRpc })
    state.paths = paths
    state.items = collectLocalMediaItems(diskItems)
    paintTags()
    paintGrid()
    paintViewSort()
    const seatHint = `${paths.gallery} · ${paths.history}`
    if (!state.items.length) {
      setStatus(`本地座位 ${seatHint}（暂无媒体）`)
    } else {
      setStatus(`已读本地媒体 · ${seatHint}`)
    }
  }

  page.querySelectorAll('[data-ws-gallery-filter]').forEach((sel) => {
    sel.addEventListener('change', (e) => {
      const el = /** @type {HTMLSelectElement} */ (e.target)
      const key = el.getAttribute('data-ws-gallery-filter')
      if (key === 'mode') state.filters.mode = el.value
      else if (key === 'model') state.filters.model = el.value
      else if (key === 'ratio') state.filters.ratio = el.value
      paintGrid()
    })
  })

  page.querySelectorAll('[data-ws-gallery-view]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const v = btn.getAttribute('data-ws-gallery-view')
      state.view = v === 'waterfall' ? 'waterfall' : 'grid'
      paintViewSort()
      paintGrid()
    })
  })

  page.querySelectorAll('[data-ws-gallery-sort]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const v = btn.getAttribute('data-ws-gallery-sort')
      state.sort = v === 'oldest' ? 'oldest' : 'newest'
      paintViewSort()
      paintGrid()
    })
  })

  page.querySelector('[data-ws-gallery-tag-action="create"]')?.addEventListener('click', () => {
    setStatus('「新建」标签未接线')
  })

  page.querySelector('[data-ws-gallery-tag-list]')?.addEventListener('click', (e) => {
    const btn =
      e.target instanceof Element ? e.target.closest('[data-ws-gallery-tag]') : null
    if (!btn) return
    const id = btn.getAttribute('data-ws-gallery-tag') || ''
    if (!id) return
    if (state.filters.tagIds.includes(id)) {
      state.filters.tagIds = state.filters.tagIds.filter((x) => x !== id)
    } else {
      state.filters.tagIds = [...state.filters.tagIds, id]
    }
    paintTags()
    paintGrid()
  })

  page.querySelector('[data-ws-gallery-grid]')?.addEventListener('click', (e) => {
    const card =
      e.target instanceof Element ? e.target.closest('[data-ws-gallery-card]') : null
    if (!card) return
    const id = card.getAttribute('data-id') || ''
    if (!id) return
    if (/** @type {MouseEvent} */ (e).metaKey || /** @type {MouseEvent} */ (e).ctrlKey) {
      if (state.selection.includes(id)) {
        state.selection = state.selection.filter((x) => x !== id)
      } else {
        state.selection = [...state.selection, id]
      }
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
    const btn =
      e.target instanceof Element ? e.target.closest('[data-ws-gallery-action]') : null
    if (!btn) return
    const action = btn.getAttribute('data-ws-gallery-action') || ''
    setStatus(`「${action}」未接线`)
  })

  page.querySelectorAll('[data-ws-gallery-batch]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const kind = btn.getAttribute('data-ws-gallery-batch')
      if (!state.selection.length) {
        setStatus('先多选素材（Ctrl/⌘+点击）')
        return
      }
      if (kind === 'tag') setStatus('「打标签」未接线')
      else if (kind === 'download') setStatus('「批量下载」未接线')
    })
  })

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
    dispose() {
      closeLightbox()
      page.remove()
      styleEl?.remove()
    },
  }
}
