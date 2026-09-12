/**
 * Load host-only media env from $DSH_HOME/media.env (or MEDIA_ENV_PATH).
 * Supports multiple channels + video.async fields. Never log token values.
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

/**
 * @typedef {{
 *   baseUrl: string,
 *   token: string,
 *   defaultModel: string,
 *   submitPath: string,
 *   pollPath: string,
 *   pollIntervalMs: number,
 *   pollTimeoutMs: number,
 *   provider: string,
 * }} VideoEnv
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
 * @param {Record<string, string>} map
 * @returns {VideoEnv}
 */
export function resolveVideoEnvFromMap(map = {}) {
  const interval = Number(map.VIDEO_POLL_INTERVAL_MS)
  const timeout = Number(map.VIDEO_POLL_TIMEOUT_MS)
  return {
    baseUrl: String(map.VIDEO_BASE_URL || '').trim(),
    token: String(map.VIDEO_API_KEY || ''),
    defaultModel: String(map.VIDEO_DEFAULT_MODEL || '').trim(),
    submitPath: String(map.VIDEO_SUBMIT_PATH || '').trim(),
    pollPath: String(map.VIDEO_POLL_PATH || '').trim(),
    pollIntervalMs: Number.isFinite(interval) && interval > 0 ? interval : 2000,
    pollTimeoutMs: Number.isFinite(timeout) && timeout > 0 ? timeout : 600_000,
    provider: String(map.VIDEO_PROVIDER || '').trim() || 'video.async',
  }
}

/**
 * Standalone video env loader (same media.env file as images).
 * @returns {VideoEnv & { source: string }}
 */
export function loadVideoEnv() {
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
  return { ...resolveVideoEnvFromMap(map), source }
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
 *   video: VideoEnv,
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

  const video = resolveVideoEnvFromMap(map)

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
      video,
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
    video,
  }
}

/** Safe summary for logs / provide bag — never includes token */
export function mediaEnvSummary(env = loadMediaEnv()) {
  const video = env.video || {}
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
    video: {
      baseUrlSet: Boolean(video.baseUrl),
      tokenSet: Boolean(video.token),
      defaultModel: video.defaultModel || '',
      provider: video.provider || 'video.async',
    },
    source: env.source === 'process.env' ? 'process.env' : 'file',
  }
}
