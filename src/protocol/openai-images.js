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
  const model = req.model || 'grok-imagine-image'
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

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${cred.token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    signal: opts.signal,
  })

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
      results.push({ kind: 'image', url: `file://${file}`, localPath: file, mime: 'image/png' })
      continue
    }
    if (item?.url) {
      const remote = String(item.url)
      const localPath = await downloadTo(outDir, remote, cred.token, opts.signal)
      results.push({
        kind: 'image',
        url: remote,
        ...(localPath ? { localPath, mime: 'image/png' } : { mime: 'image/png' }),
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
