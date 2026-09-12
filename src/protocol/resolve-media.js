import { loadMediaEnv } from './load-media-env.js'

/**
 * Prefer settings Config media* when set; else media.env channels.
 * Settings mediaProvider `gptimg` selects birdsun channel from env when URL/key empty.
 * @param {{ mediaBaseUrl?: string, mediaApiKey?: string, mediaProvider?: string }} [cfg]
 */
export function resolveMediaBag(cfg = {}) {
  const env = loadMediaEnv()
  const settingsUrl = String(cfg.mediaBaseUrl || '').trim()
  const settingsKey = String(cfg.mediaApiKey || '')
  const settingsProvider = String(cfg.mediaProvider || '').trim()

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
      }
    }
  }

  // Provider-only switch from settings (no pasted URL)
  if (settingsProvider === 'gptimg' || settingsProvider === 'openai-images') {
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
  }
}
