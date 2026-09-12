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
const CTA_RPC_STORAGE_READ = 'storage.read'
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


/** Browser-usable image/video src (http/data/blob). file:// is never displayable. */
export function usableDisplaySrc(src) {
  const s = String(src || '').trim()
  if (!s) return ''
  if (/^https?:\/\//i.test(s)) return s
  if (s.startsWith('data:')) return s
  if (s.startsWith('blob:')) return s
  return ''
}

/** HARD RULE: grid/count only for items with a real displayable thumb src. */
export function itemHasDisplayableThumb(it) {
  if (!it || typeof it !== 'object') return false
  return Boolean(usableDisplaySrc(it.displayUrl || it.url))
}

/** Candidate for storage.read hydration (has disk path but no browser src yet). */
export function itemNeedsHydration(it) {
  if (!it || typeof it !== 'object') return false
  if (itemHasDisplayableThumb(it)) return false
  if (it.relativePath && String(it.relativePath).startsWith('media/')) return true
  if (it.localPath) return true
  if (String(it.url || '').startsWith('file://')) return true
  return false
}

/** Heuristic: drop obvious UI / smoke screenshots from the gens grid. Prefer keeping real gens when unsure. */
export function looksLikeUiScreenshot(it) {
  if (!it || typeof it !== 'object') return false
  if (it.uiChrome === true || it.looksLikeUi === true) return true
  const blob = [
    it.relativePath,
    it.localPath,
    it.url,
    it.name,
    it.prompt,
    it.mode,
    it.seat,
    ...(Array.isArray(it.tags) ? it.tags : []),
    ...(Array.isArray(it.tagIds) ? it.tagIds : []),
  ]
    .filter(Boolean)
    .map((x) => String(x))
    .join('\n')
  const lower = blob.toLowerCase()
  // Path / filename seats that are clearly docs, smoke, Critiquito, or light chrome dumps
  const pathBlob = [it.relativePath, it.localPath, it.url, it.name]
    .filter(Boolean)
    .map((x) => String(x))
    .join('\n')
  if (
    /docs\/ui\/ref|ui\/ref|smoke[-_]?ui|crit[-_]?|gate[-_]?(studio|final)|reinstall-smoke|dsh-[\w.-]*-light|[-_]light\.(png|jpe?g|webp)|preview/i.test(
      pathBlob,
    )
  ) {
    return true
  }
  if (/\b(screenshot|screen-?shot|ui-?dump|desktop[-_]?shot|ui[-_]?shot)\b/i.test(pathBlob.toLowerCase())) return true
  // Prompt / title Chinese chrome hints
  if (/工作台|截图|界面截图|浏览器截图/.test(blob) && !/夜景|苹果|赛博|街头|人像|产品/.test(blob)) return true
  // Chat edit false-ref / host chrome seats
  if (/false[-_]?ref|edit[-_]?image[-_]?ref|chat[-_]?edit.*ref/i.test(lower)) return true
  // Ultra-wide chrome-like ratios (browser window), only when name/path also smells like UI
  const ratio = String(it.ratio || '')
  if ((ratio === '21:9' || ratio === '16:9') && /ui|chrome|sidebar|settings|harness|工作台|light|crit|preview/i.test(blob)) {
    return true
  }
  // Known smoke / desktop dump pixel sizes when no creative prompt
  const w = Number(it.width || it.w || 0)
  const h = Number(it.height || it.h || 0)
  if (w && h) {
    const ar = w / h
    const noCreative = !String(it.prompt || '').trim() && !String(it.model || '').trim()
    const commonUi =
      (w === 1280 && h === 720) ||
      (w === 1440 && h === 900) ||
      (w === 1920 && h === 1080) ||
      (w === 1440 && h === 960) ||
      (w === 1280 && h === 800) ||
      (w === 1366 && h === 768) ||
      (w === 1536 && h === 864) ||
      (w === 1600 && h === 900)
    // Common desktop dump sizes without creative metadata → UI shot
    if (noCreative && commonUi) return true
    // ~16:9 desktop dumps with no creative metadata (even without path smell)
    if (noCreative && ar >= 1.7 && ar <= 2.05 && w >= 1100 && h >= 600) return true
    // Wide chrome + path/name smell
    if (noCreative && ar >= 1.7 && /ui|ref|smoke|screenshot|harness|sidebar|settings|工作台|截图|light|crit|preview/i.test(blob)) {
      return true
    }
  }
  return false
}

/**
 * Canvas sample: high near-white + gray UI chrome bands → desktop/editor screenshot.
 * Keeps photographic gens (night streets / apples) — those stay dark or organic.
 * @param {HTMLImageElement} img
 */
export function imageElLooksLikeLightUiChrome(img) {
  if (!(img instanceof HTMLImageElement)) return false
  const nw = img.naturalWidth || 0
  const nh = img.naturalHeight || 0
  if (nw < 64 || nh < 64) return false
  try {
    const canvas = document.createElement('canvas')
    const sw = 96
    const sh = 96
    canvas.width = sw
    canvas.height = sh
    const ctx = canvas.getContext('2d', { willReadFrequently: true })
    if (!ctx) return false
    ctx.drawImage(img, 0, 0, sw, sh)
    const { data } = ctx.getImageData(0, 0, sw, sh)
    const n = sw * sh
    let sum = 0
    let nearWhite = 0
    let grayUi = 0
    const rowMeans = new Array(sh).fill(0)
    for (let y = 0; y < sh; y++) {
      let row = 0
      for (let x = 0; x < sw; x++) {
        const i = (y * sw + x) * 4
        const r = data[i]
        const g = data[i + 1]
        const b = data[i + 2]
        const avg = (r + g + b) / 3
        sum += avg
        row += avg
        if (r > 230 && g > 230 && b > 230) nearWhite++
        const max = Math.max(r, g, b)
        const min = Math.min(r, g, b)
        const sat = max === 0 ? 0 : (max - min) / max
        if (sat < 0.12 && avg > 180 && avg < 250) grayUi++
      }
      rowMeans[y] = row / sw
    }
    const mean = sum / n
    const nearWhitePct = nearWhite / n
    const grayUiPct = grayUi / n
    let rowJumps = 0
    for (let y = 1; y < sh; y++) {
      if (Math.abs(rowMeans[y] - rowMeans[y - 1]) > 12) rowJumps++
    }
    const ar = nw / nh
    // Aggressive: washed light chrome UI (docs dumps, studio light screenshots)
    if (nearWhitePct >= 0.55 && mean >= 200 && (grayUiPct >= 0.25 || rowJumps >= 3 || ar >= 1.45)) {
      return true
    }
    // Softer: moderate white sea + desktop aspect
    if (nearWhitePct >= 0.4 && mean >= 210 && ar >= 1.55 && grayUiPct >= 0.2) return true
    return false
  } catch (_) {
    return false
  }
}

/** Friendly time for captions — never bare HH:MM (reads like video duration). */
export function formatCaptionTime(ts) {
  const n = Number(ts) || 0
  if (n <= 0) return ''
  try {
    const d = new Date(n)
    if (Number.isNaN(d.getTime())) return ''
    const now = Date.now()
    const diff = now - d.getTime()
    if (diff >= 0 && diff < 45_000) return '刚刚'
    if (diff >= 0 && diff < 3600_000) return `${Math.max(1, Math.floor(diff / 60_000))}分钟前`
    if (diff >= 0 && diff < 86400_000) return `${Math.max(1, Math.floor(diff / 3600_000))}小时前`
    const hh = String(d.getHours()).padStart(2, '0')
    const mm = String(d.getMinutes()).padStart(2, '0')
    const today = new Date()
    if (
      d.getFullYear() === today.getFullYear() &&
      d.getMonth() === today.getMonth() &&
      d.getDate() === today.getDate()
    ) {
      return `今天 ${hh}:${mm}`
    }
    const yesterday = new Date(today.getTime() - 86400_000)
    if (
      d.getFullYear() === yesterday.getFullYear() &&
      d.getMonth() === yesterday.getMonth() &&
      d.getDate() === yesterday.getDate()
    ) {
      return `昨天 ${hh}:${mm}`
    }
    return `${d.getMonth() + 1}/${d.getDate()} ${hh}:${mm}`
  } catch (_) {
    return ''
  }
}

/** One-line caption: prefer `model · truncated prompt`; never bare mm:ss duration. */
export function cardCaption(it) {
  if (!it || typeof it !== 'object') return '素材'
  const modelRaw = it.model ? String(it.model).trim() : ''
  // Keep model id readable (grok-imagine-image), strip org prefix only
  const model = modelRaw ? modelRaw.replace(/^.*\//, '').slice(0, 28) : ''
  const prompt = String(it.prompt || it.name || '')
    .replace(/\s+/g, ' ')
    .trim()
  // Avoid dumping raw filesystem paths / filenames into the caption
  const safePrompt =
    prompt && !/^(media\/|file:\/\/|\/)/i.test(prompt) && !/\.(png|jpe?g|webp|gif|mp4)$/i.test(prompt)
      ? prompt
      : ''
  const snippet = safePrompt ? `${safePrompt.slice(0, 28)}${safePrompt.length > 28 ? '…' : ''}` : ''
  const time = formatCaptionTime(it.createdAt)
  const modeHint =
    it.kind === 'video' ? '视频' : it.mode ? String(it.mode) : '文生图'
  if (model && snippet) return `${model} · ${snippet}`
  if (model) return `${model} · ${modeHint}`
  if (snippet) return snippet
  if (time) return `素材 · ${time}`
  return '素材'
}

function friendlyGalleryStatus(n) {
  const count = Math.max(0, Number(n) || 0)
  if (!count) return '本机画廊 · 暂无作品'
  return `本机画廊 · ${count} 项`
}

function friendlyEmptySeatsHint() {
  // Never surface raw media/gallery · media/history paths to users
  return '作品会保存在本机画廊'
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
          const relativePath = r?.relativePath ? String(r.relativePath) : ''
          out.push({
            id: `${id || 'hist'}-${i}`,
            url: url || '',
            localPath: localPath || undefined,
            relativePath: relativePath || undefined,
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
  const byKey = new Map()
  const richer = (a, b) => {
    // Prefer entry with prompt/model/name that is not a bare filename
    const score = (x) => {
      let s = 0
      if (x?.prompt) s += 4
      if (x?.model) s += 3
      if (x?.mode) s += 1
      const n = String(x?.name || '')
      if (n && !/\.(png|jpe?g|webp|gif|mp4)$/i.test(n) && !/^media\//i.test(n)) s += 2
      if (x?.displayUrl || usableDisplaySrc(x?.url)) s += 1
      if (x?.seat === 'gallery') s += 1
      return s
    }
    return score(b) > score(a) ? { ...a, ...b, ...pickDisplay(a, b) } : { ...b, ...a, ...pickDisplay(a, b) }
  }
  const pickDisplay = (a, b) => {
    const displayUrl = a?.displayUrl || b?.displayUrl
    const url = usableDisplaySrc(a?.url) ? a.url : usableDisplaySrc(b?.url) ? b.url : a?.url || b?.url
    return {
      displayUrl: displayUrl || undefined,
      url: url || '',
      prompt: a?.prompt || b?.prompt,
      model: a?.model || b?.model,
      mode: a?.mode || b?.mode,
      name: a?.name && !/\.(png|jpe?g|webp|gif|mp4)$/i.test(String(a.name)) ? a.name : b?.name && !/\.(png|jpe?g|webp|gif|mp4)$/i.test(String(b.name)) ? b.name : a?.name || b?.name,
    }
  }
  for (const it of merged) {
    const key = it.hash || it.relativePath || it.localPath || it.id || it.url || ''
    if (!key) continue
    // Also collide on basename for generated UUID files across seats
    const basenames = []
    if (it.relativePath) basenames.push(String(it.relativePath))
    if (it.localPath) basenames.push(String(it.localPath).split(/[/\\]/).pop())
    const keys = [key, ...basenames.filter(Boolean)]
    let placed = false
    for (const k of keys) {
      if (byKey.has(k)) {
        const mergedItem = richer(byKey.get(k), it)
        byKey.set(k, mergedItem)
        // keep primary key slot updated
        byKey.set(key, mergedItem)
        placed = true
        break
      }
    }
    if (!placed) byKey.set(key, it)
  }
  // Unique by object identity of final values
  const out = []
  const seenObj = new Set()
  for (const it of byKey.values()) {
    const id = it.id || it.relativePath || it.url
    if (!id || seenObj.has(id)) continue
    seenObj.add(id)
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
  display:grid; gap:12px; align-content:start; align-items:start;
  grid-auto-rows: auto;
}
/* auto-fit collapses empty tracks — no trailing blank slot from auto-fill */
[data-dsh-ws-studio-host] [data-ws-gallery-grid][data-view="grid"] {
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
}
[data-dsh-ws-studio-host] [data-ws-gallery-grid][data-view="waterfall"] {
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
}
[data-dsh-ws-studio-host] [data-ws-gallery-card] {
  border:1px solid var(--dsw-alias-border-l2); border-radius:10px; overflow:hidden;
  background: var(--dsw-alias-bg-module-platform); cursor:pointer;
  display:flex; flex-direction:column; min-width:0; align-self:start; height:auto;
}
[data-dsh-ws-studio-host] [data-ws-gallery-card][data-selected] {
  outline:2px solid var(--dsw-alias-state-business-primary); outline-offset:1px;
}
[data-dsh-ws-studio-host] [data-ws-gallery-card-media] {
  position:relative; width:100%; aspect-ratio:1; overflow:hidden; flex:none;
  background: var(--dsw-alias-bg-layer-1);
}
[data-dsh-ws-studio-host] [data-ws-gallery-card-media] img,
[data-dsh-ws-studio-host] [data-ws-gallery-card-media] video {
  width:100%; height:100%; object-fit:cover; display:block;
}
/* Overlay caption on every thumb — never clipped by grid row / overflow */
[data-dsh-ws-studio-host] [data-ws-gallery-card] [data-ws-gallery-card-meta] {
  position:absolute; left:0; right:0; bottom:0; z-index:1;
  padding:16px 8px 6px; font-size:11px;
  color: rgba(255,255,255,.94);
  background: linear-gradient(to top, rgba(0,0,0,.72) 0%, rgba(0,0,0,.35) 55%, transparent 100%);
  white-space:nowrap; overflow:hidden; text-overflow:ellipsis;
  display:flex; align-items:center; gap:5px; min-width:0; line-height:1.35;
  pointer-events:none;
}
[data-dsh-ws-studio-host] [data-ws-gallery-card] [data-ws-gallery-card-model] {
  flex:none; max-width:46%; padding:0 5px; height:16px; line-height:16px;
  border-radius:999px; font-size:10px;
  color: rgba(255,255,255,.95);
  background: rgba(0,0,0,.35);
  border:1px solid rgba(255,255,255,.22);
  overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
}
[data-dsh-ws-studio-host] [data-ws-gallery-card] [data-ws-gallery-card-snip] {
  flex:1; min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
  text-shadow: 0 1px 2px rgba(0,0,0,.45);
}
/* Soften dual-history: image history rail stays hidden on 画廊 (empty vs host sessions) */
[data-dsh-ws-studio-host][data-ws-top-page="画廊"] [data-ws-page="image"] [data-ws-col="history"],
[data-dsh-ws-studio-host][data-ws-top-page="画廊"] [data-ws-page="image"] [data-ws-pane-drag="history"],
[data-dsh-ws-studio-host][data-ws-top-page="画廊"] [data-ws-col="history"],
[data-dsh-ws-studio-host][data-ws-top-page="画廊"] [data-ws-pane-drag="history"] {
  display:none !important;
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
    // HARD RULE: only items with displayable src — never lay empty card shells
    // Also drop obvious UI/smoke screenshots so gens grid stays clean
    let list = state.items.filter((it) => itemHasDisplayableThumb(it) && !looksLikeUiScreenshot(it))
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

  const thumbInflight = new Map()

  /** Resolve path-only items to data URLs via storage.read. Mutates items in place. */
  const hydrateDisplayUrls = async (items) => {
    const rpc = typeof getRpc === 'function' ? getRpc() : null
    const need = items.filter(itemNeedsHydration)
    if (!need.length) return
    if (!rpc || typeof rpc.call !== 'function') return

    const concurrency = 6
    let i = 0
    const worker = async () => {
      while (i < need.length) {
        const it = need[i++]
        const rel = it.relativePath ? String(it.relativePath) : ''
        let localPath = it.localPath ? String(it.localPath) : ''
        if (!localPath && String(it.url || '').startsWith('file://')) {
          localPath = String(it.url).slice(7)
        }
        const key = it.id || rel || localPath
        if (!key) continue
        try {
          let job = thumbInflight.get(key)
          if (!job) {
            job = (async () => {
              const result = await rpc.call(CTA_RPC_CHANNEL, CTA_RPC_STORAGE_READ, {
                relativePath: rel || undefined,
                localPath: localPath || undefined,
                dataDir: state.paths?.dataDir,
              })
              if (result?.ok && result.value?.dataUrl) return String(result.value.dataUrl)
              return ''
            })().finally(() => {
              thumbInflight.delete(key)
            })
            thumbInflight.set(key, job)
          }
          const dataUrl = await job
          if (dataUrl) it.displayUrl = dataUrl
        } catch (_) {
          /* leave without displayUrl — filtered out of grid */
        }
      }
    }
    await Promise.all(Array.from({ length: Math.min(concurrency, need.length) }, () => worker()))
  }

  const syncCountLabel = () => {
    const countEl = page.querySelector('[data-ws-gallery-count]')
    const grid = page.querySelector('[data-ws-gallery-grid]')
    const n =
      grid instanceof HTMLElement
        ? grid.querySelectorAll('[data-ws-gallery-card]').length
        : filteredItems().length
    if (countEl) countEl.textContent = `共 ${n} 项`
  }

  const paintEmptyGrid = (grid) => {
    grid.innerHTML = `<div data-ws-gallery-empty role="status">${EMPTY_HINT}<div style="margin-top:8px;font-size:11px;opacity:.85;">${friendlyEmptySeatsHint()}</div></div>`
    syncCountLabel()
    setStatus(friendlyGalleryStatus(0))
  }

  const dropBrokenCard = (el, grid) => {
    const card = el instanceof Element ? el.closest('[data-ws-gallery-card]') : null
    if (!card) return
    const id = card.getAttribute('data-id')
    card.remove()
    if (id) {
      const hit = state.items.find((x) => x.id === id)
      if (hit) {
        hit.displayUrl = ''
        const src = el.getAttribute?.('src') || ''
        if (src && usableDisplaySrc(hit.url) === src) hit.url = ''
      }
      state.selection = state.selection.filter((x) => x !== id)
    }
    if (!grid.querySelector('[data-ws-gallery-card]')) paintEmptyGrid(grid)
    else {
      syncCountLabel()
      setStatus(friendlyGalleryStatus(grid.querySelectorAll('[data-ws-gallery-card]').length))
    }
  }

  const mediaLooksBroken = (el) => {
    if (!(el instanceof HTMLElement)) return true
    if (el instanceof HTMLImageElement) {
      if (el.complete && el.naturalWidth === 0) return true
      return false
    }
    if (el instanceof HTMLVideoElement) {
      // HAVE_METADATA or better with zero size → broken
      if (el.readyState >= 1 && el.videoWidth === 0) return true
      return false
    }
    return true
  }

  /** HARD RULE: probe before DOM — never mount a card without a loaded displayable image. */
  const probeImageSrc = (src) =>
    new Promise((resolve) => {
      if (!src) return resolve(null)
      const img = new Image()
      const done = (ok) => {
        if (!ok || !img.naturalWidth) return resolve(null)
        resolve(img)
      }
      img.onload = () => done(true)
      img.onerror = () => done(false)
      try {
        img.decoding = 'async'
      } catch (_) {}
      img.src = src
      if (img.complete) done(img.naturalWidth > 0)
    })

  let paintGen = 0

  const buildCardHtml = (it, src, isVideo) => {
    const selected = state.selection.includes(it.id)
    const media = isVideo
      ? `<video src="${escapeHtml(src)}" muted playsinline preload="metadata"></video>`
      : `<img src="${escapeHtml(src)}" alt="" decoding="async" />`
    const modelRaw = it.model ? String(it.model).replace(/^.*\//, '').slice(0, 18) : ''
    const caption = cardCaption(it)
    const snip =
      caption.includes(' · ') && modelRaw ? caption.slice(caption.indexOf(' · ') + 3) : caption
    const metaInner = modelRaw
      ? `<span data-ws-gallery-card-model title="${escapeHtml(String(it.model || ''))}">${escapeHtml(modelRaw)}</span><span data-ws-gallery-card-snip title="${escapeHtml(caption)}">${escapeHtml(snip)}</span>`
      : `<span data-ws-gallery-card-snip title="${escapeHtml(caption)}">${escapeHtml(caption)}</span>`
    return `<article data-ws-gallery-card data-id="${escapeHtml(it.id)}" role="listitem" ${selected ? 'data-selected' : ''}>
          <div data-ws-gallery-card-media>
            ${media}
            <div data-ws-gallery-card-meta>${metaInner}</div>
          </div>
        </article>`
  }

  const reconcileVisibleCount = (grid) => {
    const n = grid.querySelectorAll('[data-ws-gallery-card]').length
    syncCountLabel()
    setStatus(friendlyGalleryStatus(n))
    return n
  }

  const paintGrid = async () => {
    const grid = page.querySelector('[data-ws-gallery-grid]')
    if (!(grid instanceof HTMLElement)) return
    const gen = ++paintGen
    grid.setAttribute('data-view', state.view)
    // Candidates with a browser-usable src only
    const items = filteredItems().filter((it) => usableDisplaySrc(it.displayUrl || it.url))

    if (!items.length) {
      paintEmptyGrid(grid)
      return
    }

    // Probe images first — drop broken / zero-size / light-UI chrome before layout
    const probed = await Promise.all(
      items.map(async (it) => {
        const src = usableDisplaySrc(it.displayUrl || it.url)
        if (!src) return null
        const isVideo =
          it.kind === 'video' || /\.(mp4|webm|mov)(\?|$)/i.test(src || it.relativePath || '')
        if (isVideo) return { it, src, isVideo: true }
        const img = await probeImageSrc(src)
        if (!img) {
          it.displayUrl = ''
          return null
        }
        const w = img.naturalWidth || 0
        const h = img.naturalHeight || 0
        it.width = w
        it.height = h
        const lightChrome = imageElLooksLikeLightUiChrome(img)
        if (lightChrome) it.uiChrome = true
        if (looksLikeUiScreenshot(it) || lightChrome) {
          it.displayUrl = ''
          return null
        }
        return { it, src, isVideo: false }
      }),
    )
    if (gen !== paintGen) return

    const ready = probed.filter(Boolean)
    if (!ready.length) {
      paintEmptyGrid(grid)
      return
    }

    // Only place existing cards — no empty shells, no trailing blank track fillers
    grid.innerHTML = ready.map((row) => buildCardHtml(row.it, row.src, row.isVideo)).join('')

    // Belt-and-suspenders: runtime error / late decode still removes the card + reconciles counts
    grid.querySelectorAll('[data-ws-gallery-card] img, [data-ws-gallery-card] video').forEach((el) => {
      const onFail = () => {
        dropBrokenCard(el, grid)
        reconcileVisibleCount(grid)
      }
      el.addEventListener('error', onFail, { once: true })
      if (el instanceof HTMLImageElement) {
        const check = () => {
          if (mediaLooksBroken(el)) onFail()
        }
        el.addEventListener('load', check, { once: true })
        if (el.complete) check()
      } else if (el instanceof HTMLVideoElement) {
        el.addEventListener(
          'loadedmetadata',
          () => {
            if (mediaLooksBroken(el)) onFail()
          },
          { once: true },
        )
      }
    })
    reconcileVisibleCount(grid)
    requestAnimationFrame(() => {
      if (gen !== paintGen) return
      grid.querySelectorAll('[data-ws-gallery-card] img, [data-ws-gallery-card] video').forEach((el) => {
        if (mediaLooksBroken(el)) dropBrokenCard(el, grid)
      })
      reconcileVisibleCount(grid)
    })
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
    const src = usableDisplaySrc(item.displayUrl || item.url)
    const isVideo = item.kind === 'video' || /\.(mp4|webm|mov)(\?|$)/i.test(src || item.relativePath || '')
    if (!src) {
      body.innerHTML = `<div style="padding:24px;text-align:center;color:${T.fg3};font-size:13px;">无预览</div>`
    } else {
      body.innerHTML = isVideo
        ? `<video data-ws-gallery-lightbox-media controls src="${escapeHtml(src)}" style="width:100%;max-height:70vh;border-radius:8px;background:${T.layer1};"></video>`
        : `<img data-ws-gallery-lightbox-media src="${escapeHtml(src)}" alt="" style="width:100%;max-height:70vh;object-fit:contain;border-radius:8px;background:${T.layer1};" />`
    }
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
    // Hydrate path-only rows BEFORE paint — grid never shows empty shells
    await hydrateDisplayUrls(state.items)
    paintModelFilter()
    paintTags()
    await paintGrid()
    paintViewSort()
    // Friendly footer = visible card count only (post-probe)
    const grid = page.querySelector('[data-ws-gallery-grid]')
    const n =
      grid instanceof HTMLElement ? grid.querySelectorAll('[data-ws-gallery-card]').length : 0
    setStatus(friendlyGalleryStatus(n))
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
    void paintGrid()
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
      void paintGrid()
    })
  })

  page.querySelectorAll('[data-ws-gallery-view]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.view = btn.getAttribute('data-ws-gallery-view') === 'waterfall' ? 'waterfall' : 'grid'
      persistLayout()
      paintViewSort()
      void paintGrid()
    })
  })

  page.querySelectorAll('[data-ws-gallery-sort]').forEach((btn) => {
    btn.addEventListener('click', () => {
      state.sort = btn.getAttribute('data-ws-gallery-sort') === 'oldest' ? 'oldest' : 'newest'
      persistLayout()
      paintViewSort()
      void paintGrid()
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
    void paintGrid()
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
    void paintGrid()
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
      void paintGrid()
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
    const src = usableDisplaySrc(item.displayUrl || item.url)
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
        void paintGrid()
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
    // Workstation page open (incl. 画廊) → stamp studio-open so host New Session stays quiet
    if (
      name === GALLERY_PAGE ||
      name === IMAGE_PAGE ||
      name === VIDEO_PAGE ||
      name === CANVAS_PAGE
    ) {
      try {
        document.documentElement.setAttribute('data-dsh-ws-studio-open', '')
        document.body?.setAttribute('data-dsh-ws-studio-open', '')
        // Nudge sidebar MutationObserver / dual-tab to keep 生图 quiet + clear host row
        document.dispatchEvent(
          new CustomEvent('dsh-ws-top-tab', {
            bubbles: true,
            detail: { tab: name, studioPage: true },
          }),
        )
      } catch (_) {}
    }
    if (name === GALLERY_PAGE) void reload()
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
