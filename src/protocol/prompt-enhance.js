/**
 * 提示词增强 — vision lane (VISION_*). Nova prompt-optimize behavior +
 * VisioWork stripReasoning. Never reuses Images / ANTHROPIC / GPTIMG keys.
 * No content-moderation / score gate.
 */
import { loadVisionEnv, VISION_NOT_CONFIGURED } from './vision-read.js'
import { scrubErrorMessage } from './rpc-errors.js'

export const ENHANCE_NOT_CONFIGURED = 'ENHANCE_NOT_CONFIGURED'

/** Strip <think>…</think> and dangling unclosed <think> (VisioWork). */
export function stripReasoning(text) {
  const withoutClosed = String(text || '').replace(/<think>[\s\S]*?<\/think>/gi, '')
  const dangling = /<think>/i.exec(withoutClosed)
  return (dangling === null ? withoutClosed : withoutClosed.slice(0, dangling.index)).trim()
}

function scrub(text, token) {
  let s = scrubErrorMessage(text)
  if (token && token.length >= 8) s = s.split(token).join('[redacted]')
  return s.slice(0, 500)
}

/** Nova text-to-image optimize system (ported). */
export const ENHANCE_SYSTEM_TEXT =
  '你是一位专业的 AI 绘图提示词优化专家。\n' +
  '你的任务是将用户的简短描述优化为高质量的文生图提示词。\n' +
  '优化规则：\n' +
  '- 保留用户的原始意图和核心描述\n' +
  '- 补充画面主体的细节（外观、材质、姿态等）\n' +
  '- 添加合适的艺术风格描述（如摄影、插画、油画等）\n' +
  '- 补充光影、色调、氛围描述\n' +
  '- 优化构图和视角描述\n' +
  '- 使用简洁精准的中文描述\n' +
  '- 不要添加与画面无关的说明文字\n' +
  '- Do not add banned filler (8K, masterpiece, best quality, ultra detailed, hyper realistic, trending on artstation, octane render).\n' +
  '只输出优化后的提示词本身，不要输出任何解释、前缀或额外说明。'

/** Nova image-to-image optimize system. */
export const ENHANCE_SYSTEM_I2I =
  '你是一位专业的图生图提示词优化专家。\n' +
  '你的任务是结合参考图和用户描述，优化为精准的图生图提示词。\n' +
  '优化规则：\n' +
  '- 观察参考图的内容、风格、色调、构图\n' +
  '- 结合用户的修改意图，生成精准的图生图提示词\n' +
  '- 保留用户想要保留的参考图元素\n' +
  '- 明确描述用户想要修改的部分\n' +
  '- 使用简洁精准的中文描述\n' +
  '- 不要添加与画面无关的说明文字\n' +
  '只输出优化后的提示词本身，不要输出任何解释、前缀或额外说明。'

/**
 * @param {{
 *   prompt: string,
 *   modelId?: string,
 *   aspect_ratio?: string,
 *   resolution?: string,
 *   size?: string,
 *   mode?: string,
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
  const mode = req?.mode ? String(req.mode) : ''

  const contextBits = []
  if (aspect) contextBits.push(`aspect_ratio=${aspect}`)
  if (resolution) contextBits.push(`resolution=${resolution}`)
  if (size) contextBits.push(`size=${size}`)
  if (modelId) contextBits.push(`target_image_model=${modelId}`)

  const isI2i = /图生图|i2i|image-to-image|edit/i.test(mode)
  const system = isI2i ? ENHANCE_SYSTEM_I2I : ENHANCE_SYSTEM_TEXT

  const userParts = [`用户输入：\n${prompt}`]
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
  const raw = Array.isArray(content)
    ? content.map((c) => (typeof c === 'string' ? c : c?.text || '')).join('').trim()
    : String(content || '').trim()

  const enhanced = stripReasoning(raw)
  if (!enhanced) {
    const err = new Error(
      raw
        ? 'chat model returned only reasoning content (empty <think> payload)'
        : 'enhancePrompt returned empty content',
    )
    err.code = 'ENHANCE_EMPTY'
    throw err
  }

  return { prompt: enhanced }
}
