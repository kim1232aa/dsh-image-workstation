import { loadMediaEnv } from './load-media-env.js'
import { loadVisionEnv } from './vision-read.js'

/**
 * Prefer settings Config media* when set; else media.env channels.
 * Merges video* / vision* into dedicated lanes (settings-first, else env).
 * @param {Record<string, unknown>} [cfg]
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

  const vision = resolveVisionCfg(cfg)
  const withLanes = (base) => ({ ...base, video, vision })

  if (settingsUrl || settingsKey) {
    const provider =
      settingsProvider === 'anthropic-compat' || settingsProvider === 'gptimg'
        ? settingsProvider === 'gptimg'
          ? 'openai-images'
          : 'anthropic-compat'
        : settingsProvider || 'openai-images'
    const ch =
      settingsProvider === 'gptimg'
        ? env.channels?.find((c) => c.id === 'gptimg')
        : settingsProvider === 'anthropic-compat'
          ? env.channels?.find((c) => c.id === 'primary')
          : null
    return withLanes({
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
    })
  }

  if (settingsProvider === 'gptimg') {
    const ch =
      env.channels?.find((c) => c.id === 'gptimg') ||
      env.channels?.find((c) => c.provider === 'openai-images' && c.id === 'gptimg')
    if (ch) {
      return withLanes({
        baseUrl: ch.baseUrl,
        token: ch.token,
        provider: 'openai-images',
        defaultModel: ch.defaultModel || 'gpt-image-2',
        activeId: ch.id,
        channels: env.channels || [],
        source: env.source,
      })
    }
  }
  if (settingsProvider === 'anthropic-compat') {
    const ch = env.channels?.find((c) => c.id === 'primary')
    if (ch) {
      return withLanes({
        baseUrl: ch.baseUrl,
        token: ch.token,
        provider: ch.provider,
        defaultModel: ch.defaultModel || 'grok-imagine-image',
        activeId: ch.id,
        channels: env.channels || [],
        source: env.source,
      })
    }
  }

  return withLanes({
    baseUrl: env.baseUrl || '',
    token: env.token || '',
    provider: env.provider || 'unknown',
    defaultModel: env.defaultModel || 'grok-imagine-image',
    activeId: env.activeId || '',
    channels: env.channels || [],
    source: env.source,
  })
}

/** @param {Record<string, unknown>} [cfg] */
export function resolveVideoCfg(cfg = {}) {
  return resolveMediaBag(cfg).video
}

/** @param {Record<string, unknown>} [cfg] */
export function resolveVideoEnv(cfg = {}) {
  return resolveMediaBag(cfg).video
}

/**
 * Settings-first vision lane (else media.env VISION_*). Never uses images/video keys.
 * @param {{ visionBaseUrl?: string, visionApiKey?: string, visionModel?: string }} [cfg]
 */
export function resolveVisionCfg(cfg = {}) {
  const env = loadVisionEnv()
  const settingsUrl = String(cfg.visionBaseUrl || '').trim()
  const settingsKey = String(cfg.visionApiKey || '')
  const settingsModel = String(cfg.visionModel || '').trim()
  const baseUrl = settingsUrl || env.baseUrl || ''
  const apiKey = settingsKey || env.apiKey || ''
  const model = settingsModel || env.model || 'gpt-4o-mini'
  return {
    baseUrl,
    apiKey,
    model,
    source: settingsUrl || settingsKey ? 'settings' : env.source,
    configured: Boolean(baseUrl && apiKey),
    lane: 'vision',
  }
}

/** @deprecated */
export const resolveVideoBag = resolveVideoEnv
/** @deprecated */
export const resolveMediaCfg = resolveMediaBag
