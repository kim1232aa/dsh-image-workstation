/**
 * OpenAI-compatible /images/generations (xAI Grok Imagine + OpenAI shapes).
 * Host-only. Caller passes token; this module never logs it.
 */
import fs from 'node:fs'
import path from 'node:path'
import { randomUUID } from 'node:crypto'

/**
 * @param {string} text
 * @param {string} token
 */
function scrub(text, token) {
  let s = String(text || '')
  if (token) s = s.split(token).join('[redacted]')
  return s.slice(0, 500)
}

/**
 * Map UI size / clarity into gateway fields.
 * Prefer xAI aspect_ratio+resolution when model looks like grok-imagine.
 * @param {{ size?: string, aspect_ratio?: string, resolution?: string, quality?: string, model?: string }} req
 */
function buildBody(req) {
  const model = req.model || (typeof process !== 'undefined' && process.env?.MEDIA_IMAGE_MODEL) || 'grok-imagine-image'
  const body = {
    model,
    prompt: req.prompt,
    n: Math.min(Math.max(Number(req.n) || 1, 1), 4),
    response_format: 'url',
  }

  const grok = /imagine|grok/i.test(model)
  if (grok) {
    body.aspect_ratio = req.aspect_ratio || '1:1'
    body.resolution = req.resolution || '1k'
    // quality only on grok-imagine-image-2.0; omit otherwise to stay cheap/valid
    if (req.quality && /image-2\.0/i.test(model)) body.quality = req.quality
  } else {
    body.size = req.size || '1024x1024'
    if (req.quality) body.quality = req.quality
  }
  return body
}

/**
 * Download remote URL to dataDir (evidence). Returns local path or null.
 * @param {string} url
 * @param {string} outDir
 * @param {string} token
 * @param {AbortSignal} [signal]
 */
async function downloadTo(outDir, url, token, signal) {
  try {
    const res = await fetch(url, { signal })
    if (!res.ok) return null
    const buf = Buffer.from(await res.arrayBuffer())
    const ct = res.headers.get('content-type') || ''
    const ext = ct.includes('jpeg') || ct.includes('jpg') ? 'jpg' : 'png'
    const file = path.join(outDir, `${randomUUID()}.${ext}`)
    fs.writeFileSync(file, buf)
    return file
  } catch {
    return null
  }
}

/**
 * @param {{ baseUrl: string, token: string }} cred
 * @param {{ prompt: string, size?: string, n?: number, model?: string, quality?: string, aspect_ratio?: string, resolution?: string }} req
 * @param {{ dataDir: string, signal?: AbortSignal }} opts
 */
export async function openaiImagesGenerate(cred, req, opts) {
  const base = String(cred.baseUrl || '').replace(/\/+$/, '')
  if (!base || !cred.token) {
    const err = new Error('openai.images: media.env missing baseUrl or token')
    err.code = 'MEDIA_ENV_MISSING'
    throw err
  }
  if (!req?.prompt || !String(req.prompt).trim()) {
    const err = new Error('openai.images: prompt required')
    err.code = 'PROMPT_REQUIRED'
    throw err
  }

  const url = `${base}/v1/images/generations`
  const body = buildBody(req)

  let res
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${cred.token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      signal: opts.signal,
    })
  } catch (e) {
    if (e?.name === 'AbortError' || opts.signal?.aborted) {
      const reason = opts.signal?.reason
      const err = new Error(
        scrub(
          reason?.message || e?.message || 'openai.images: request aborted (timeout or cancel)',
          cred.token,
        ),
      )
      err.code = reason?.code || 'GENERATE_ABORTED'
      throw err
    }
    const err = new Error(`openai.images: fetch failed ${scrub(e?.message || e, cred.token)}`)
    err.code = 'UPSTREAM_FETCH'
    throw err
  }

  const rawText = await res.text()
  let json
  try {
    json = JSON.parse(rawText)
  } catch {
    const err = new Error(`openai.images: non-JSON ${res.status} ${scrub(rawText, cred.token)}`)
    err.code = 'UPSTREAM_BAD_BODY'
    err.status = res.status
    throw err
  }

  if (!res.ok) {
    const msg = json?.error?.message || json?.message || scrub(rawText, cred.token)
    const err = new Error(`openai.images: HTTP ${res.status} ${scrub(msg, cred.token)}`)
    err.code = 'UPSTREAM_HTTP'
    err.status = res.status
    throw err
  }

  const data = Array.isArray(json?.data) ? json.data : []
  const outDir = path.join(opts.dataDir, 'media', 'generated')
  fs.mkdirSync(outDir, { recursive: true })

  /** @type {{ kind: 'image', url: string, localPath?: string, mime?: string }[]} */
  const results = []
  for (const item of data) {
    if (item?.b64_json) {
      const file = path.join(outDir, `${randomUUID()}.png`)
      fs.writeFileSync(file, Buffer.from(item.b64_json, 'base64'))
      results.push({
        kind: 'image',
        url: `data:image/png;base64,${item.b64_json}`,
        localPath: file,
        relativePath: `media/generated/${path.basename(file)}`,
        mime: 'image/png',
      })
      continue
    }
    if (item?.url) {
      const remote = String(item.url)
      const localPath = await downloadTo(outDir, remote, cred.token, opts.signal)
      results.push({
        kind: 'image',
        url: remote,
        ...(localPath
          ? {
              localPath,
              relativePath: `media/generated/${path.basename(localPath)}`,
              mime: 'image/png',
            }
          : { mime: 'image/png' }),
      })
    }
  }

  if (!results.length) {
    const err = new Error('openai.images: empty data[]')
    err.code = 'UPSTREAM_EMPTY'
    throw err
  }
  return results
}

/**
 * @param {string} dataUrlOrPath
 * @returns {{ buf: Buffer, filename: string, contentType: string }}
 */
function materializeImage(dataUrlOrPath) {
  const s = String(dataUrlOrPath || '')
  if (s.startsWith('data:')) {
    const m = /^data:([^;]+);base64,(.+)$/s.exec(s)
    if (!m) {
      const err = new Error('openai.images.edits: invalid data URL')
      err.code = 'BAD_REF_IMAGE'
      throw err
    }
    const contentType = m[1] || 'image/png'
    const ext = contentType.includes('jpeg') || contentType.includes('jpg') ? 'jpg' : 'png'
    return {
      buf: Buffer.from(m[2], 'base64'),
      filename: `ref.${ext}`,
      contentType,
    }
  }
  if (s.startsWith('file://')) {
    const fp = s.slice('file://'.length)
    const buf = fs.readFileSync(fp)
    const ext = path.extname(fp).slice(1) || 'png'
    return { buf, filename: `ref.${ext}`, contentType: ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : 'image/png' }
  }
  // bare path
  if (fs.existsSync(s)) {
    const buf = fs.readFileSync(s)
    const ext = path.extname(s).slice(1) || 'png'
    return { buf, filename: `ref.${ext}`, contentType: ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg' : 'image/png' }
  }
  const err = new Error('openai.images.edits: ref image not found (need data URL or local path)')
  err.code = 'BAD_REF_IMAGE'
  throw err
}

/**
 * OpenAI-compatible POST /v1/images/edits (multipart).
 * @param {{ baseUrl: string, token: string }} cred
 * @param {{ prompt: string, image: string, mask?: string, size?: string, n?: number, model?: string }} req
 *   image/mask: data URL, file://, or absolute path
 * @param {{ dataDir: string, signal?: AbortSignal }} opts
 */

/**
 * Downscale very large refs before multipart upload (keeps CTA under timeout).
 * Uses sharp if present; else returns original.
 * @param {{ buf: Buffer, filename: string, contentType: string }} img
 */
async function maybeDownscale(img) {
  const maxBytes = 1_500_000
  const maxEdge = 1536
  if (img.buf.length <= maxBytes) return img
  try {
    const sharp = (await import('sharp')).default
    const out = await sharp(img.buf)
      .rotate()
      .resize({ width: maxEdge, height: maxEdge, fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality: 85 })
      .toBuffer()
    return { buf: out, filename: 'ref.jpg', contentType: 'image/jpeg' }
  } catch {
    return img
  }
}

export async function openaiImagesEdit(cred, req, opts) {
  const base = String(cred.baseUrl || '').replace(/\/+$/, '')
  if (!base || !cred.token) {
    const err = new Error('openai.images.edits: media.env missing baseUrl or token')
    err.code = 'MEDIA_ENV_MISSING'
    throw err
  }
  if (!req?.prompt || !String(req.prompt).trim()) {
    const err = new Error('openai.images.edits: prompt required')
    err.code = 'PROMPT_REQUIRED'
    throw err
  }
  if (!req?.image) {
    const err = new Error('openai.images.edits: image (ref) required')
    err.code = 'REF_REQUIRED'
    throw err
  }

  let img = materializeImage(req.image)
  img = await maybeDownscale(img)
  const form = new FormData()
  form.append('image', new Blob([img.buf], { type: img.contentType }), img.filename)
  form.append('prompt', String(req.prompt))
  form.append('n', String(Math.min(Math.max(Number(req.n) || 1, 1), 4)))
  if (req.size) form.append('size', String(req.size))
  const model = req.model || (typeof process !== 'undefined' && process.env?.MEDIA_IMAGE_MODEL) || 'grok-imagine-image'
  form.append('model', model)
  form.append('response_format', 'url')
  if (req.mask) {
    const mask = materializeImage(req.mask)
    form.append('mask', new Blob([mask.buf], { type: mask.contentType }), mask.filename)
  }

  const url = `${base}/v1/images/edits`
  let res
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: { Authorization: `Bearer ${cred.token}` },
      body: form,
      signal: opts.signal,
    })
  } catch (e) {
    if (e?.name === 'AbortError' || opts.signal?.aborted) {
      const err = new Error(scrub(e?.message || 'openai.images.edits: aborted', cred.token))
      err.code = 'GENERATE_ABORTED'
      throw err
    }
    const err = new Error(`openai.images.edits: fetch failed ${scrub(e?.message || e, cred.token)}`)
    err.code = 'UPSTREAM_FETCH'
    throw err
  }

  const rawText = await res.text()
  let json
  try {
    json = JSON.parse(rawText)
  } catch {
    const err = new Error(`openai.images.edits: non-JSON ${res.status} ${scrub(rawText, cred.token)}`)
    err.code = 'UPSTREAM_BAD_BODY'
    err.status = res.status
    throw err
  }
  if (!res.ok) {
    const msg = json?.error?.message || json?.message || scrub(rawText, cred.token)
    const err = new Error(`openai.images.edits: HTTP ${res.status} ${scrub(msg, cred.token)}`)
    err.code = 'UPSTREAM_HTTP'
    err.status = res.status
    throw err
  }

  const data = Array.isArray(json?.data) ? json.data : []
  const outDir = path.join(opts.dataDir, 'media', 'generated')
  fs.mkdirSync(outDir, { recursive: true })
  /** @type {{ kind: 'image', url: string, localPath?: string, mime?: string }[]} */
  const results = []
  for (const item of data) {
    if (item?.b64_json) {
      const file = path.join(outDir, `${randomUUID()}.png`)
      fs.writeFileSync(file, Buffer.from(item.b64_json, 'base64'))
      results.push({
        kind: 'image',
        url: `data:image/png;base64,${item.b64_json}`,
        localPath: file,
        relativePath: `media/generated/${path.basename(file)}`,
        mime: 'image/png',
      })
      continue
    }
    if (item?.url) {
      const remote = String(item.url)
      const localPath = await downloadTo(outDir, remote, cred.token, opts.signal)
      results.push({
        kind: 'image',
        url: remote,
        ...(localPath
          ? {
              localPath,
              relativePath: `media/generated/${path.basename(localPath)}`,
              mime: 'image/png',
            }
          : { mime: 'image/png' }),
      })
    }
  }
  if (!results.length) {
    const err = new Error('openai.images.edits: empty data[]')
    err.code = 'UPSTREAM_EMPTY'
    throw err
  }
  return results
}
