/**
 * Load host-only media env from $DSH_HOME/media.env (or MEDIA_ENV_PATH).
 * Supports multiple channels. Never log token values.
 */
import fs from 'node:fs'
import path from 'node:path'

/**
 * @typedef {{
 *   id: string,
 *   provider: string,
 *   baseUrl: string,
 *   token: string,
 *   defaultModel: string,
 *   label: string,
 * }} MediaChannel
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
 * @returns {{
 *   channels: MediaChannel[],
 *   activeId: string,
 *   baseUrl: string,
 *   token: string,
 *   provider: string,
 *   defaultModel: string,
 *   source: string,
 * }}
 */
export function loadMediaEnv() {
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

  /** @type {MediaChannel[]} */
  const channels = []

  const alibbUrl = map.ANTHROPIC_BASE_URL || ''
  const alibbTok = map.ANTHROPIC_AUTH_TOKEN || ''
  // OPENAI_* may duplicate alibb primary — only use as primary fill if anthropic empty
  const openaiUrl = map.OPENAI_BASE_URL || ''
  const openaiTok = map.OPENAI_API_KEY || ''
  const primaryUrl = alibbUrl || openaiUrl
  const primaryTok = alibbTok || openaiTok
  if (primaryUrl && primaryTok) {
    channels.push({
      id: 'primary',
      provider: alibbUrl ? 'anthropic-compat' : 'openai-images',
      baseUrl: primaryUrl,
      token: primaryTok,
      defaultModel: map.MEDIA_IMAGE_MODEL || 'grok-imagine-image',
      label: 'Primary (grok-imagine / alibb)',
    })
  }

  const gptUrl = map.GPTIMG_BASE_URL || ''
  const gptTok = map.GPTIMG_API_KEY || ''
  if (gptUrl && gptTok) {
    channels.push({
      id: 'gptimg',
      provider: 'openai-images',
      baseUrl: gptUrl,
      token: gptTok,
      defaultModel: 'gpt-image-2',
      label: 'GPTIMG (birdsun / gpt-image-2)',
    })
  }

  // Prefer explicit MEDIA_ACTIVE_CHANNEL; else primary; else first
  const want = map.MEDIA_ACTIVE_CHANNEL || 'primary'
  let active = channels.find((c) => c.id === want) || channels.find((c) => c.id === 'primary') || channels[0]

  // Empty fallback
  if (!active) {
    return {
      channels: [],
      activeId: '',
      baseUrl: '',
      token: '',
      provider: 'unknown',
      defaultModel: map.MEDIA_IMAGE_MODEL || 'gpt-image-2',
      source,
    }
  }

  return {
    channels,
    activeId: active.id,
    baseUrl: active.baseUrl,
    token: active.token,
    provider: active.provider,
    defaultModel: active.defaultModel,
    source,
  }
}

/** Safe summary for logs / provide bag — never includes token */
export function mediaEnvSummary(env = loadMediaEnv()) {
  return {
    baseUrlSet: Boolean(env.baseUrl),
    tokenSet: Boolean(env.token),
    provider: env.provider || 'unknown',
    activeId: env.activeId || '',
    defaultModel: env.defaultModel || '',
    channels: Array.isArray(env.channels)
      ? env.channels.map((c) => ({
          id: c.id,
          provider: c.provider,
          label: c.label,
          baseUrlSet: Boolean(c.baseUrl),
          tokenSet: Boolean(c.token),
          defaultModel: c.defaultModel,
        }))
      : [],
    source: env.source === 'process.env' ? 'process.env' : 'file',
  }
}
