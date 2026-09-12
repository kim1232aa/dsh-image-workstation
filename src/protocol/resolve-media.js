import { loadMediaEnv } from './load-media-env.js'

/**
 * Prefer settings Config media* when set; else media.env channels.
 * Settings mediaProvider `gptimg` selects birdsun channel from env when URL/key empty.
 * Also merges videoBaseUrl / videoApiKey (and poll/model) into `video` for video.async.
 * @param {{
 *   mediaBaseUrl?: string,
 *   mediaApiKey?: string,
 *   mediaProvider?: string,
 *   videoBaseUrl?: string,
 *   videoApiKey?: string,
 *   videoProvider?: string,
 *   videoDefaultModel?: string,
 *   videoPollIntervalMs?: number,
 *   videoPollTimeoutMs?: number,
 * }} [cfg]
 */
export function resolveMediaBag(cfg = {}) {
  const env = loadMediaEnv()
  const settingsUrl = String(cfg.mediaBaseUrl || '').trim()
  const settingsKey = String(cfg.mediaApiKey || '')
  const settingsProvider = String(cfg.mediaProvider || '').trim()

  const envVideo = env.video || {
    baseUrl: '',
    token: '',
    defaultModel: '',
    submitPath: '',
    pollPath: '',
    pollIntervalMs: 2000,
    pollTimeoutMs: 600_000,
    provider: 'video.async',
  }
  const settingsVideoUrl = String(cfg.videoBaseUrl || '').trim()
  const settingsVideoKey = String(cfg.videoApiKey || '')
  const settingsVideoModel = String(cfg.videoDefaultModel || '').trim()
  const settingsVideoProvider = String(cfg.videoProvider || '').trim()
  const pollInterval = Number(cfg.videoPollIntervalMs)
  const pollTimeout = Number(cfg.videoPollTimeoutMs)
  const video = {
    baseUrl: settingsVideoUrl || envVideo.baseUrl || '',
    token: settingsVideoKey || envVideo.token || '',
    defaultModel: settingsVideoModel || envVideo.defaultModel || '',
    submitPath: envVideo.submitPath || '',
    pollPath: envVideo.pollPath || '',
    pollIntervalMs:
      Number.isFinite(pollInterval) && pollInterval > 0
        ? pollInterval
        : envVideo.pollIntervalMs || 2000,
    pollTimeoutMs:
      Number.isFinite(pollTimeout) && pollTimeout > 0
        ? pollTimeout
        : envVideo.pollTimeoutMs || 600_000,
    provider: settingsVideoProvider || envVideo.provider || 'video.async',
  }

  // Explicit settings URL/key wins
  if (settingsUrl || settingsKey) {
    const provider =
      settingsProvider === 'anthropic-compat' || settingsProvider === 'gptimg'
        ? settingsProvider === 'gptimg'
          ? 'openai-images'
          : 'anthropic-compat'
        : settingsProvider || 'openai-images'
    // If only provider=gptimg and no URL, fall through to env channel
    if (settingsUrl || settingsKey) {
      const ch =
        settingsProvider === 'gptimg'
          ? env.channels?.find((c) => c.id === 'gptimg')
          : settingsProvider === 'anthropic-compat'
            ? env.channels?.find((c) => c.id === 'primary')
            : null
      return {
        baseUrl: settingsUrl || ch?.baseUrl || env.baseUrl || '',
        token: settingsKey || ch?.token || env.token || '',
        provider: provider === 'anthropic-compat' ? 'anthropic-compat' : 'openai-images',
        defaultModel:
          settingsProvider === 'gptimg'
            ? 'gpt-image-2'
            : ch?.defaultModel || env.defaultModel || 'grok-imagine-image',
        activeId: settingsProvider === 'gptimg' ? 'gptimg' : ch?.id || env.activeId,
        channels: env.channels || [],
        source: 'settings',
        video,
      }
    }
  }

  // Provider-only switch from settings (no pasted URL).
  // Only settingsProvider === 'gptimg' selects birdsun; openai-images alone
  // must fall through to env primary (do not hijack to gptimg channel).
  if (settingsProvider === 'gptimg') {
    const ch =
      env.channels?.find((c) => c.id === 'gptimg') ||
      env.channels?.find((c) => c.provider === 'openai-images' && c.id === 'gptimg')
    if (ch) {
      return {
        baseUrl: ch.baseUrl,
        token: ch.token,
        provider: 'openai-images',
        defaultModel: ch.defaultModel || 'gpt-image-2',
        activeId: ch.id,
        channels: env.channels || [],
        source: env.source,
        video,
      }
    }
  }
  if (settingsProvider === 'anthropic-compat') {
    const ch = env.channels?.find((c) => c.id === 'primary')
    if (ch) {
      return {
        baseUrl: ch.baseUrl,
        token: ch.token,
        provider: ch.provider,
        defaultModel: ch.defaultModel || 'grok-imagine-image',
        activeId: ch.id,
        channels: env.channels || [],
        source: env.source,
        video,
      }
    }
  }

  return {
    baseUrl: env.baseUrl || '',
    token: env.token || '',
    provider: env.provider || 'unknown',
    defaultModel: env.defaultModel || 'grok-imagine-image',
    activeId: env.activeId || '',
    channels: env.channels || [],
    source: env.source,
    video,
  }
}

/**
 * Settings-first video channel resolve (else media.env VIDEO_*).
 * Also available via resolveMediaBag(...).video — kept as explicit export for host apply.
 * @param {{
 *   videoBaseUrl?: string,
 *   videoApiKey?: string,
 *   videoProvider?: string,
 *   videoDefaultModel?: string,
 *   videoPollIntervalMs?: number,
 *   videoPollTimeoutMs?: number,
 * }} [cfg]
 */
export function resolveVideoCfg(cfg = {}) {
  return resolveMediaBag(cfg).video
}

/**
 * Resolve video.async env from settings cfg + media.env (same sources as resolveMediaBag().video).
 * Prefer settings videoBaseUrl/videoApiKey when set.
 * @param {{
 *   videoBaseUrl?: string,
 *   videoApiKey?: string,
 *   videoProvider?: string,
 *   videoDefaultModel?: string,
 *   videoPollIntervalMs?: number,
 *   videoPollTimeoutMs?: number,
 * }} [cfg]
 */
export function resolveVideoEnv(cfg = {}) {
  return resolveMediaBag(cfg).video
}

/** @deprecated alias — prefer resolveVideoEnv */
export const resolveVideoBag = resolveVideoEnv

/** @deprecated alias — prefer resolveMediaBag */
export const resolveMediaCfg = resolveMediaBag
