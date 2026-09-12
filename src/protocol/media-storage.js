/**
 * Host media seats under dataDir — Visio-like morphology (generated/gallery/history/canvas/templates),
 * Nova-like flat file landing under each seat. No Visio TS / Nova backend vendored.
 */
import { createHash, randomUUID } from 'node:crypto'
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  renameSync,
  statSync,
  writeFileSync,
} from 'node:fs'
import path from 'node:path'

/** Relative seats returned by storage.paths (client-safe; no absolute paths required). */
export const MEDIA_SEATS = Object.freeze({
  generated: 'media/generated',
  gallery: 'media/gallery',
  history: 'media/history',
  canvas: 'media/canvas',
  templates: 'media/templates',
})

/** Subdirs created on apply / settings change (includes canvas pages/assets for future host canvas). */
export const MEDIA_STORAGE_SUBDIRS = Object.freeze([
  MEDIA_SEATS.generated,
  MEDIA_SEATS.gallery,
  path.join(MEDIA_SEATS.gallery, 'images'),
  MEDIA_SEATS.history,
  MEDIA_SEATS.canvas,
  path.join(MEDIA_SEATS.canvas, 'pages'),
  path.join(MEDIA_SEATS.canvas, 'assets'),
  MEDIA_SEATS.templates,
])

const MEDIA_IMAGE_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.gif', '.mp4', '.webm', '.mov'])

/**
 * @param {string} dataDir
 */
export function ensureMediaSeats(dataDir) {
  const root = String(dataDir || '').trim()
  if (!root) return
  for (const sub of MEDIA_STORAGE_SUBDIRS) {
    try {
      mkdirSync(path.join(root, sub), { recursive: true })
    } catch {
      /* ignore */
    }
  }
}

/**
 * @param {string} dataDir
 * @returns {{ dataDir: string, generated: string, gallery: string, history: string, canvas: string, templates: string, seats: typeof MEDIA_SEATS }}
 */
export function storagePathsOf(dataDir) {
  const root = String(dataDir || '').trim()
  return {
    dataDir: root,
    generated: MEDIA_SEATS.generated,
    gallery: MEDIA_SEATS.gallery,
    history: MEDIA_SEATS.history,
    canvas: MEDIA_SEATS.canvas,
    templates: MEDIA_SEATS.templates,
    seats: { ...MEDIA_SEATS },
  }
}

/**
 * List image/video files under dataDir/relativeSeat (non-recursive).
 * @param {string} dataDir
 * @param {string} relativeSeat
 */
export function listMediaSeat(dataDir, relativeSeat) {
  const root = String(dataDir || '').trim()
  const seat = String(relativeSeat || '').trim().replace(/^\/+/, '')
  if (!root || !seat) return []
  const abs = path.join(root, seat)
  let names = []
  try {
    names = readdirSync(abs)
  } catch {
    return []
  }
  const out = []
  for (const name of names) {
    const ext = path.extname(name).toLowerCase()
    if (!MEDIA_IMAGE_EXT.has(ext)) continue
    const full = path.join(abs, name)
    let st
    try {
      st = statSync(full)
    } catch {
      continue
    }
    if (!st.isFile()) continue
    const kind = ['.mp4', '.webm', '.mov'].includes(ext) ? 'video' : 'image'
    out.push({
      id: `${seat}/${name}`,
      name,
      relativePath: `${seat}/${name}`,
      seat,
      kind,
      createdAt: Math.floor(st.mtimeMs || Date.now()),
      localPath: full,
      url: '',
    })
  }
  out.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0))
  return out
}

/**
 * @param {string} mime
 */
function extOfMime(mime) {
  const m = String(mime || '').split(';')[0].trim().toLowerCase()
  switch (m) {
    case 'image/jpeg':
    case 'image/jpg':
      return 'jpg'
    case 'image/webp':
      return 'webp'
    case 'image/gif':
      return 'gif'
    case 'video/mp4':
      return 'mp4'
    case 'video/webm':
      return 'webm'
    case 'video/quicktime':
      return 'mov'
    default:
      return 'png'
  }
}

/**
 * Resolve bytes from src / localPath. Host cannot read blob: URLs.
 * @param {{ src?: string, localPath?: string, dataDir?: string }} input
 * @returns {{ buf: Buffer, ext: string, hash: string } | null}
 */
export function materializeMediaBytes(input = {}) {
  const dataDir = String(input.dataDir || '').trim()
  const localPath = String(input.localPath || '').trim()
  const src = String(input.src || '').trim()

  const tryFile = (fp) => {
    const resolved = path.resolve(fp)
    if (dataDir) {
      const root = path.resolve(dataDir)
      if (!resolved.startsWith(root + path.sep) && resolved !== root) {
        // Allow only under dataDir when dataDir known
        return null
      }
    }
    if (!existsSync(resolved)) return null
    const buf = readFileSync(resolved)
    const ext = path.extname(resolved).slice(1).toLowerCase() || 'png'
    return { buf, ext, hash: createHash('sha1').update(buf).digest('hex') }
  }

  if (localPath) {
    const hit = tryFile(localPath.startsWith('file://') ? localPath.slice(7) : localPath)
    if (hit) return hit
  }

  if (!src) return null

  if (src.startsWith('data:')) {
    const m = /^data:([^;]+);base64,(.+)$/s.exec(src)
    if (!m) return null
    const buf = Buffer.from(m[2], 'base64')
    return { buf, ext: extOfMime(m[1]), hash: createHash('sha1').update(buf).digest('hex') }
  }

  if (src.startsWith('file://')) {
    return tryFile(src.slice(7))
  }

  if (src.startsWith('blob:')) {
    return null
  }

  // Relative seat path (e.g. media/generated/uuid.png)
  if (dataDir && !src.includes('://') && (src.startsWith('media/') || src.startsWith('/'))) {
    const rel = src.replace(/^\/+/, '')
    return tryFile(path.join(dataDir, rel))
  }

  // Absolute path under dataDir
  if (path.isAbsolute(src)) {
    return tryFile(src)
  }

  return null
}

/**
 * Persist one image into media/gallery. Dedupes by content hash when a same-hash file exists.
 * @param {string} dataDir
 * @param {{ src?: string, localPath?: string, prompt?: string, snapshot?: unknown }} payload
 */
export function addGalleryItem(dataDir, payload = {}) {
  const root = String(dataDir || '').trim()
  if (!root) {
    const err = new Error('dataDir required for gallery.add')
    err.code = 'DATA_DIR_REQUIRED'
    throw err
  }
  ensureMediaSeats(root)
  const material = materializeMediaBytes({
    src: payload.src,
    localPath: payload.localPath,
    dataDir: root,
  })
  if (!material) {
    const err = new Error(
      'gallery.add needs localPath, data URL, or file under dataDir (blob: URLs cannot cross to host)',
    )
    err.code = 'GALLERY_SRC_UNREADABLE'
    throw err
  }

  const seat = MEDIA_SEATS.gallery
  const absSeat = path.join(root, seat)
  // Dedup: same sha1 prefix already present
  try {
    for (const name of readdirSync(absSeat)) {
      if (!name.includes(material.hash.slice(0, 12))) continue
      const existing = path.join(absSeat, name)
      if (!existsSync(existing)) continue
      const prev = readFileSync(existing)
      if (createHash('sha1').update(prev).digest('hex') === material.hash) {
        return {
          added: false,
          id: `${seat}/${name}`,
          relativePath: `${seat}/${name}`,
          localPath: existing,
          seat,
          prompt: String(payload.prompt || ''),
        }
      }
    }
  } catch {
    /* ignore list errors */
  }

  const name = `${Date.now()}-${material.hash.slice(0, 12)}.${material.ext || 'png'}`
  const dest = path.join(absSeat, name)
  const tmp = `${dest}.tmp-${process.pid}`
  writeFileSync(tmp, material.buf)
  renameSync(tmp, dest)

  // Sidecar meta (optional, non-secret)
  try {
    writeFileSync(
      `${dest}.meta.json`,
      JSON.stringify({
        prompt: String(payload.prompt || '').slice(0, 4000),
        createdAt: Date.now(),
        hash: material.hash,
        snapshot: payload.snapshot && typeof payload.snapshot === 'object' ? payload.snapshot : undefined,
      }),
    )
  } catch {
    /* ignore */
  }

  return {
    added: true,
    id: `${seat}/${name}`,
    relativePath: `${seat}/${name}`,
    localPath: dest,
    seat,
    prompt: String(payload.prompt || ''),
  }
}

/**
 * Mirror generate results into media/history (and ensure generated copies exist).
 * openai-images already lands under generated; this also copies into history.
 * @param {string} dataDir
 * @param {Array<{ url?: string, localPath?: string, mime?: string, kind?: string }>} results
 * @param {{ prompt?: string, mode?: string, jobId?: string }} [meta]
 */
export function persistGenerateToSeats(dataDir, results, meta = {}) {
  const root = String(dataDir || '').trim()
  if (!root || !Array.isArray(results) || !results.length) {
    return { history: [], generated: [] }
  }
  ensureMediaSeats(root)
  const historyDir = path.join(root, MEDIA_SEATS.history)
  const generatedDir = path.join(root, MEDIA_SEATS.generated)
  const job = String(meta.jobId || randomUUID()).replace(/[^a-zA-Z0-9-_]/g, '-').slice(0, 48)
  /** @type {string[]} */
  const history = []
  /** @type {string[]} */
  const generated = []

  results.forEach((r, index) => {
    const local = String(r?.localPath || '').trim()
    let srcPath = ''
    if (local.startsWith('file://')) srcPath = local.slice(7)
    else if (local) srcPath = local

    let buf = null
    let ext = 'png'
    if (srcPath && existsSync(srcPath)) {
      buf = readFileSync(srcPath)
      ext = path.extname(srcPath).slice(1).toLowerCase() || extOfMime(r?.mime) || 'png'
      // If file is already under generated, record it
      const resolved = path.resolve(srcPath)
      if (resolved.startsWith(path.resolve(generatedDir) + path.sep)) {
        generated.push(resolved)
      }
    } else if (String(r?.url || '').startsWith('data:')) {
      const m = /^data:([^;]+);base64,(.+)$/s.exec(String(r.url))
      if (m) {
        buf = Buffer.from(m[2], 'base64')
        ext = extOfMime(m[1])
      }
    }

    if (!buf) return

    // Ensure a generated copy when result was only data URL
    if (!generated.length || !srcPath || !srcPath.startsWith(generatedDir)) {
      const gName = `${job}-${index}.${ext}`
      const gDest = path.join(generatedDir, gName)
      if (!existsSync(gDest)) {
        try {
          writeFileSync(gDest, buf)
          generated.push(gDest)
          srcPath = gDest
        } catch {
          /* ignore */
        }
      }
    }

    const hName = `${job}-${index}.${ext}`
    const hDest = path.join(historyDir, hName)
    try {
      if (srcPath && existsSync(srcPath)) copyFileSync(srcPath, hDest)
      else writeFileSync(hDest, buf)
      history.push(hDest)
      try {
        writeFileSync(
          `${hDest}.meta.json`,
          JSON.stringify({
            prompt: String(meta.prompt || '').slice(0, 4000),
            mode: String(meta.mode || ''),
            jobId: job,
            createdAt: Date.now(),
            index,
          }),
        )
      } catch {
        /* ignore */
      }
    } catch {
      /* ignore single file failure */
    }
  })

  return { history, generated }
}
