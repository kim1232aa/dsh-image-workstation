/**
 * 提示词增强 — host seat on the vision credential lane (VISION_*).
 * Never reuses Images / ANTHROPIC / GPTIMG / OPENAI keys.
 */
import { loadVisionEnv, VISION_NOT_CONFIGURED } from './vision-read.js'
import { scrubErrorMessage } from './rpc-errors.js'

export const ENHANCE_NOT_CONFIGURED = 'ENHANCE_NOT_CONFIGURED'

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
 * Enhance a user prompt via OpenAI-compatible chat/completions (vision lane creds).
 * Ratio/size context must come from the same mapGenerateRequest fields (aspect_ratio,
 * resolution, size) — callers must pass those; this module does not invent a second table.
 *
 * @param {{
 *   prompt: string,
 *   modelId?: string,
 *   aspect_ratio?: string,
 *   resolution?: string,
 *   size?: string,
 *   signal?: AbortSignal,
 * }} req
 * @param {ReturnType<typeof loadVisionEnv>} [env]
 * @returns {Promise<{ prompt: string }>}
 */
export async function enhancePrompt(req, env = loadVisionEnv()) {
  if (!env?.configured || !env.baseUrl || !env.apiKey) {
    const err = new Error(
      'Prompt enhance needs vision lane. Set VISION_BASE_URL + VISION_API_KEY (+ optional VISION_MODEL) in media.env. Images/ANTHROPIC/GPTIMG keys are not used.',
    )
    err.code = ENHANCE_NOT_CONFIGURED
    // Honest alias so clients that only know VISION_NOT_CONFIGURED still match
    err.visionCode = VISION_NOT_CONFIGURED
    throw err
  }

  const prompt = String(req?.prompt ?? '').trim()
  if (!prompt) {
    const err = new Error('prompt required')
    err.code = 'PROMPT_REQUIRED'
    throw err
  }

  const aspect = req?.aspect_ratio ? String(req.aspect_ratio) : ''
  const resolution = req?.resolution ? String(req.resolution) : ''
  const size = req?.size ? String(req.size) : ''
  const modelId = req?.modelId ? String(req.modelId).trim() : ''

  const contextBits = []
  if (aspect) contextBits.push(`aspect_ratio=${aspect}`)
  if (resolution) contextBits.push(`resolution=${resolution}`)
  if (size) contextBits.push(`size=${size}`)
  if (modelId) contextBits.push(`target_image_model=${modelId}`)

  const system =
    'You enhance image-generation prompts. Expand with concrete subject, action, environment, light, framing, and material. ' +
    'Do not add banned filler (8K, masterpiece, best quality, ultra detailed, hyper realistic, trending on artstation, octane render). ' +
    'Reply with the enhanced prompt only — no preamble, no quotes.'

  const userParts = [`Original prompt:\n${prompt}`]
  if (contextBits.length) {
    userParts.push(`Generation context (reuse; do not contradict): ${contextBits.join(', ')}`)
  }

  const base = String(env.baseUrl).replace(/\/+$/, '')
  const url = /\/v1\/chat\/completions$/i.test(base)
    ? base
    : /\/v1$/i.test(base)
      ? `${base}/chat/completions`
      : `${base}/v1/chat/completions`

  const body = {
    model: env.model,
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: userParts.join('\n\n') },
    ],
    max_tokens: 1024,
    temperature: 0.7,
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
    err.code = 'ENHANCE_FETCH_FAILED'
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
    err.code = 'ENHANCE_UPSTREAM_HTTP'
    err.status = res.status
    throw err
  }

  const content =
    parsed?.choices?.[0]?.message?.content ?? parsed?.choices?.[0]?.text ?? ''
  const enhanced = Array.isArray(content)
    ? content
        .map((c) => (typeof c === 'string' ? c : c?.text || ''))
        .join('')
        .trim()
    : String(content || '').trim()

  if (!enhanced) {
    const err = new Error('enhancePrompt returned empty content')
    err.code = 'ENHANCE_EMPTY'
    throw err
  }

  return { prompt: enhanced }
}
