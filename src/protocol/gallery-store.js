/**
 * Host gallery seat under ${dataDir}/media/gallery — Nova asset-store semantics
 * (content-hash dedupe, tags, no auto-evict) with VisioWork-shaped index.json.
 * Framework-free (node:fs + crypto). Do not run Nova Next/SQLite.
 */
import { promises as fs } from 'node:fs'
import { createHash, randomUUID } from 'node:crypto'
import path from 'node:path'

const INDEX_NAME = 'index.json'
const IMAGES_DIR = 'images'

/** @param {string} dataDir */
function galleryRoot(dataDir) {
  return path.join(String(dataDir || '').trim(), 'media', 'gallery')
}

/** @param {string} dataDir */
function indexPath(dataDir) {
  return path.join(galleryRoot(dataDir), INDEX_NAME)
}

/** @param {string} dataDir */
function imagesDir(dataDir) {
  return path.join(galleryRoot(dataDir), IMAGES_DIR)
}

/** @type {Promise<void>} */
let pending = Promise.resolve()

/**
 * @template T
 * @param {() => Promise<T>} op
 * @returns {Promise<T>}
 */
function mutate(op) {
  const next = pending.then(op, op)
  pending = next.then(
    () => undefined,
    () => undefined,
  )
  return next
}

/** @param {string} mime */
function extOf(mime) {
  switch (String(mime || '').split(';')[0].trim()) {
    case 'image/jpeg':
      return 'jpg'
    case 'image/webp':
      return 'webp'
    case 'image/gif':
      return 'gif'
    case 'video/mp4':
      return 'mp4'
    case 'video/webm':
      return 'webm'
    default:
      return 'png'
  }
}

/** @param {string} file */
function mimeOfFile(file) {
  switch (path.extname(file).toLowerCase()) {
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg'
    case '.webp':
      return 'image/webp'
    case '.gif':
      return 'image/gif'
    case '.mp4':
      return 'video/mp4'
    case '.webm':
      return 'video/webm'
    default:
      return 'image/png'
  }
}

/** @param {string} id */
function safeId(id) {
  const cleaned = String(id || '').replace(/[^a-zA-Z0-9-]/g, '-')
  return cleaned === '' ? 'entry' : cleaned
}

/**
 * Nova sanitizeTags — trim, unique, cap 20.
 * @param {unknown} tags
 * @returns {string[]}
 */
export function sanitizeTags(tags) {
  if (!Array.isArray(tags)) return []
  const unique = new Set()
  for (const raw of tags) {
    const tag = String(raw ?? '').trim()
    if (tag) unique.add(tag)
  }
  return [...unique].slice(0, 20)
}

/**
 * @param {unknown} value
 * @returns {value is { id: string, createdAt: number, images: Array<{ file: string, mime: string }> }}
 */
function isStoredEntry(value) {
  if (value === null || typeof value !== 'object') return false
  const e = /** @type {Record<string, unknown>} */ (value)
  return (
    typeof e.id === 'string' &&
    typeof e.createdAt === 'number' &&
    typeof e.prompt === 'string' &&
    Array.isArray(e.images) &&
    e.images.every((img) => {
      if (img === null || typeof img !== 'object') return false
      const r = /** @type {Record<string, unknown>} */ (img)
      return typeof r.file === 'string' && typeof r.mime === 'string'
    })
  )
}

/** @param {string} dataDir */
async function ensureDirs(dataDir) {
  await fs.mkdir(imagesDir(dataDir), { recursive: true })
}

/** @param {string} dataDir */
async function readIndex(dataDir) {
  try {
    const raw = await fs.readFile(indexPath(dataDir), 'utf8')
    const parsed = JSON.parse(raw)
    const entries = parsed?.entries
    if (!Array.isArray(entries)) return []
    return entries.filter(isStoredEntry)
  } catch {
    return []
  }
}

/**
 * @param {string} dataDir
 * @param {object[]} entries
 */
async function writeIndex(dataDir, entries) {
  await ensureDirs(dataDir)
  const tmp = `${indexPath(dataDir)}.tmp-${process.pid}`
  await fs.writeFile(tmp, JSON.stringify({ entries }), 'utf8')
  await fs.rename(tmp, indexPath(dataDir))
}

/**
 * Wire shape for client (no base64).
 * @param {object} entry
 */
function toWire(entry) {
  return {
    id: entry.id,
    createdAt: entry.createdAt,
    mode: entry.mode || '',
    model: entry.model || '',
    prompt: entry.prompt || '',
    ratio: entry.ratio || '',
    kind: entry.kind || 'image',
    tags: Array.isArray(entry.tags) ? entry.tags : [],
    tagIds: Array.isArray(entry.tagIds) ? entry.tagIds : [],
    hash: entry.hash,
    name: entry.name || entry.prompt?.slice?.(0, 40) || '画廊',
    images: (entry.images || []).map((image) => ({
      file: image.file,
      mime: image.mime,
      relativePath: `media/gallery/${IMAGES_DIR}/${image.file}`,
      localPath: image.localPath,
      url: image.url || '',
    })),
    url: entry.images?.[0]?.url || '',
    localPath: entry.images?.[0]?.localPath,
    relativePath: entry.images?.[0]
      ? `media/gallery/${IMAGES_DIR}/${entry.images[0].file}`
      : undefined,
    seat: 'gallery',
  }
}

/**
 * Resolve image bytes from data URL, http(s) URL, or raw base64.
 * @param {{ src?: string, b64?: string, mime?: string }} input
 * @returns {Promise<{ buf: Buffer, mime: string, urlHint: string } | null>}
 */
export async function resolveImageBytes(input) {
  const src = String(input?.src || '').trim()
  const localPath = String(input?.localPath || '').trim()
  const dataDir = String(input?.dataDir || '').trim()
  if (input?.b64) {
    return {
      buf: Buffer.from(String(input.b64), 'base64'),
      mime: String(input.mime || 'image/png'),
      urlHint: src || localPath,
    }
  }

  const readLocal = async (fp) => {
    let resolved = String(fp || '')
    if (resolved.startsWith('file://')) resolved = resolved.slice(7)
    if (!resolved) return null
    if (dataDir) {
      const root = path.resolve(dataDir)
      const abs = path.resolve(resolved)
      if (!abs.startsWith(root + path.sep) && abs !== root) return null
    }
    try {
      const buf = await fs.readFile(resolved)
      const ext = path.extname(resolved).toLowerCase()
      const mime =
        ext === '.jpg' || ext === '.jpeg'
          ? 'image/jpeg'
          : ext === '.webp'
            ? 'image/webp'
            : ext === '.gif'
              ? 'image/gif'
              : String(input?.mime || 'image/png')
      return { buf, mime, urlHint: resolved }
    } catch {
      return null
    }
  }

  if (localPath) {
    const hit = await readLocal(localPath)
    if (hit) return hit
  }

  if (!src) return null
  if (src.startsWith('data:')) {
    const m = /^data:([^;,]+)?(;base64)?,([\s\S]*)$/i.exec(src)
    if (!m) return null
    const mime = m[1] || 'image/png'
    const isB64 = Boolean(m[2])
    const payload = m[3] || ''
    const buf = isB64 ? Buffer.from(payload, 'base64') : Buffer.from(decodeURIComponent(payload), 'utf8')
    return { buf, mime, urlHint: src.slice(0, 64) }
  }
  if (src.startsWith('file://') || path.isAbsolute(src)) {
    const hit = await readLocal(src)
    if (hit) return hit
  }
  if (dataDir && src.startsWith('media/')) {
    const hit = await readLocal(path.join(dataDir, src))
    if (hit) return hit
  }
  if (/^https?:\/\//i.test(src)) {
    const res = await fetch(src)
    if (!res.ok) throw new Error(`gallery fetch HTTP ${res.status}`)
    const mime = res.headers.get('content-type')?.split(';')[0]?.trim() || 'image/png'
    const ab = await res.arrayBuffer()
    return { buf: Buffer.from(ab), mime, urlHint: src }
  }
  // blob: — cannot resolve on host without client bytes
  return null
}

/**
 * @param {string} dataDir
 * @returns {Promise<object[]>}
 */
export async function listGallery(dataDir) {
  if (!String(dataDir || '').trim()) return []
  const entries = await readIndex(dataDir)
  return entries.map(toWire)
}

/**
 * Append one gallery entry. Dedupes by content hash (Nova same-source / VisioWork fingerprint).
 * @param {string} dataDir
 * @param {{
 *   src?: string,
 *   localPath?: string,
 *   b64?: string,
 *   mime?: string,
 *   prompt?: string,
 *   mode?: string,
 *   model?: string,
 *   ratio?: string,
 *   tags?: string[],
 *   tagIds?: string[],
 *   name?: string,
 *   kind?: string,
 *   snapshot?: Record<string, unknown>,
 * }} input
 */
export async function appendGallery(dataDir, input) {
  return mutate(async () => {
    const root = String(dataDir || '').trim()
    if (!root) {
      const err = new Error('dataDir required for gallery.add')
      err.code = 'GALLERY_NO_DATADIR'
      throw err
    }
    await ensureDirs(root)
    const resolved = await resolveImageBytes({
      ...input,
      dataDir: root,
      localPath: input?.localPath,
    })
    if (!resolved) {
      const err = new Error(
        'gallery.add needs localPath, data:/http(s) src, or b64 (blob: not host-resolvable)',
      )
      err.code = 'GALLERY_SRC_UNRESOLVED'
      throw err
    }
    const hash = createHash('sha1').update(resolved.buf).digest('hex')
    const existing = await readIndex(root)
    const dup = existing.find((e) => e.hash === hash)
    if (dup) {
      return { added: false, entry: toWire(dup), entries: existing.map(toWire) }
    }

    const id = randomUUID()
    const prefix = safeId(id)
    const file = `${prefix}-0.${extOf(resolved.mime)}`
    const full = path.join(imagesDir(root), file)
    await fs.writeFile(full, resolved.buf)

    const snap = input?.snapshot && typeof input.snapshot === 'object' ? input.snapshot : {}
    const entry = {
      id,
      createdAt: Date.now(),
      mode: String(input?.mode || snap.mode || ''),
      model: String(input?.model || snap.modelId || ''),
      prompt: String(input?.prompt || snap.prompt || ''),
      ratio: String(input?.ratio || snap.ratio || ''),
      kind: String(input?.kind || 'image'),
      name: String(input?.name || '').trim() || undefined,
      tags: sanitizeTags(input?.tags),
      tagIds: sanitizeTags(input?.tagIds),
      hash,
      images: [
        {
          file,
          mime: resolved.mime,
          localPath: full,
          // Prefer original http(s) URL for client display; data: kept empty (too large)
          url: /^https?:\/\//i.test(String(input?.src || '')) ? String(input.src) : '',
        },
      ],
    }
    const merged = [entry, ...existing]
    await writeIndex(root, merged)
    return { added: true, entry: toWire(entry), entries: merged.map(toWire) }
  })
}

/**
 * @param {string} dataDir
 * @param {string} id
 */
export async function removeGallery(dataDir, id) {
  return mutate(async () => {
    const root = String(dataDir || '').trim()
    const previous = await readIndex(root)
    const target = previous.find((e) => e.id === id)
    if (target) {
      for (const image of target.images || []) {
        try {
          await fs.rm(path.join(imagesDir(root), image.file), { force: true })
        } catch {
          /* ignore */
        }
      }
    }
    const kept = previous.filter((e) => e.id !== id)
    await writeIndex(root, kept)
    return kept.map(toWire)
  })
}

/**
 * @param {string} dataDir
 * @param {string} id
 * @param {string[]} tags
 */
export async function updateGalleryTags(dataDir, id, tags) {
  return mutate(async () => {
    const root = String(dataDir || '').trim()
    const normalized = sanitizeTags(tags)
    const entries = await readIndex(root)
    const target = entries.find((e) => e.id === id)
    if (target) {
      target.tags = normalized
      target.tagIds = normalized
    }
    await writeIndex(root, entries)
    return entries.map(toWire)
  })
}
