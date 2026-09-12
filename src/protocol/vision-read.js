/**
 * Vision lane — reverse-prompt (反推提示词).
 * Separate credential lane from images: VISION_* only. Never fall back to
 * Images / ANTHROPIC / GPTIMG / OPENAI keys.
 */
import fs from 'node:fs'
import path from 'node:path'
import { scrubErrorMessage } from './rpc-errors.js'

export const VISION_NOT_CONFIGURED = 'VISION_NOT_CONFIGURED'

/**
 * @typedef {{
 *   baseUrl: string,
 *   apiKey: string,
 *   model: string,
 *   source: string,
 *   configured: boolean,
 * }} VisionEnv
 */

function parseEnvFile(file) {
  /** @type {Record<string, string>} */
  const map = {}
  if (!fs.existsSync(file)) return map
  const text = fs.readFileSync(file, 'utf8')
  for (const line of text.split('\n')) {
    const t = line.trim()
    if (!t || t.startsWith('#')) continue
    const i = t.indexOf('=')
    if (i < 0) continue
    map[t.slice(0, i).trim()] = t.slice(i + 1).trim()
  }
  return map
}

/**
 * Load VISION_* from media.env / process.env. Images lane keys are ignored.
 * @returns {VisionEnv}
 */
export function loadVisionEnv() {
  const home = process.env.DSH_HOME || path.join(process.env.HOME || '/tmp', '.dsh')
  const file = process.env.MEDIA_ENV_PATH || path.join(home, 'media.env')
  /** @type {Record<string, string>} */
  const map = { ...process.env }
  let source = 'process.env'
  try {
    const fromFile = parseEnvFile(file)
    if (Object.keys(fromFile).length) {
      Object.assign(map, fromFile)
      source = file
    }
  } catch {
    /* missing file ok */
  }

  const baseUrl = String(map.VISION_BASE_URL || '').trim()
  const apiKey = String(map.VISION_API_KEY || '').trim()
  const model = String(map.VISION_MODEL || '').trim() || 'gpt-4o-mini'
  // Explicit: do NOT read ANTHROPIC_* / GPTIMG_* / OPENAI_* / MEDIA_* for this lane
  return {
    baseUrl,
    apiKey,
    model,
    source,
    configured: Boolean(baseUrl && apiKey),
  }
}

/**
 * @param {string} text
 * @param {string} token
 */
function scrub(text, token) {
  let s = scrubErrorMessage(text)
  if (token && token.length >= 8) s = s.split(token).join('[redacted]')
  return s.slice(0, 500)
}

/**
 * Reverse an image into a text prompt via OpenAI-compatible chat/completions vision.
 * @param {{ imageUrl?: string, dataUrl?: string, signal?: AbortSignal, instruction?: string }} req
 * @param {VisionEnv} [env]
 * @returns {Promise<{ prompt: string }>}
 */
export async function reversePrompt(req, env = loadVisionEnv()) {
  if (!env?.configured || !env.baseUrl || !env.apiKey) {
    const err = new Error(
      'Vision lane not configured. Set visionBaseUrl + visionApiKey in Settings→Plugins, or VISION_BASE_URL + VISION_API_KEY (+ optional VISION_MODEL) in media.env. Images/ANTHROPIC/GPTIMG keys are a separate lane and are not used.',
    )
    err.code = VISION_NOT_CONFIGURED
    throw err
  }

  const image =
    (req?.imageUrl && String(req.imageUrl).trim()) ||
    (req?.dataUrl && String(req.dataUrl).trim()) ||
    ''
  if (!image) {
    const err = new Error('reversePrompt requires imageUrl or dataUrl')
    err.code = 'IMAGE_REQUIRED'
    throw err
  }

  const base = String(env.baseUrl).replace(/\/+$/, '')
  const url = /\/v1\/chat\/completions$/i.test(base)
    ? base
    : /\/v1$/i.test(base)
      ? `${base}/chat/completions`
      : `${base}/v1/chat/completions`

  const instruction =
    (req?.instruction && String(req.instruction).trim()) ||
    'Describe this image as a detailed image-generation prompt. Reply with the prompt only, no preamble.'

  const body = {
    model: env.model,
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: instruction },
          { type: 'image_url', image_url: { url: image } },
        ],
      },
    ],
    max_tokens: 1024,
  }

  let res
  try {
    res = await fetch(url, {
      method: 'POST',
      headers: {
        authorization: `Bearer ${env.apiKey}`,
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify(body),
      signal: req?.signal,
    })
  } catch (e) {
    if (e?.name === 'AbortError' || e?.code === 'ABORT_ERR') {
      const err = new Error('cancelled')
      err.code = 'CANCELLED'
      throw err
    }
    const err = new Error(scrub(e?.message || e, env.apiKey))
    err.code = 'VISION_FETCH_FAILED'
    throw err
  }

  const text = await res.text()
  let parsed
  try {
    parsed = text ? JSON.parse(text) : {}
  } catch {
    parsed = {}
  }

  if (!res.ok) {
    const upstream = parsed?.error?.message || parsed?.message || text || `HTTP ${res.status}`
    const err = new Error(scrub(upstream, env.apiKey))
    err.code = 'VISION_UPSTREAM_HTTP'
    err.status = res.status
    throw err
  }

  const content =
    parsed?.choices?.[0]?.message?.content ??
    parsed?.choices?.[0]?.text ??
    ''
  const prompt = Array.isArray(content)
    ? content
        .map((c) => (typeof c === 'string' ? c : c?.text || ''))
        .join('')
        .trim()
    : String(content || '').trim()

  if (!prompt) {
    const err = new Error('vision reversePrompt returned empty content')
    err.code = 'VISION_EMPTY'
    throw err
  }

  return { prompt }
}

/** Client-safe summary — never includes apiKey */
export function visionEnvSummary(env = loadVisionEnv()) {
  return {
    configured: Boolean(env.configured),
    baseUrlSet: Boolean(env.baseUrl),
    apiKeySet: Boolean(env.apiKey),
    model: env.model || '',
    source: env.source === 'process.env' ? 'process.env' : 'file',
    lane: 'vision',
  }
}
