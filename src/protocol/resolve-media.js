import { loadMediaEnv } from './load-media-env.js'

/**
 * Prefer settings Config media* when set; else media.env / process.env.
 * @param {{ mediaBaseUrl?: string, mediaApiKey?: string, mediaProvider?: string }} [cfg]
 */
export function resolveMediaBag(cfg = {}) {
  const env = loadMediaEnv()
  const baseUrl = String(cfg.mediaBaseUrl || '').trim() || env.baseUrl || ''
  const token = String(cfg.mediaApiKey || '') || env.token || ''
  const provider =
    (cfg.mediaBaseUrl || cfg.mediaApiKey
      ? cfg.mediaProvider || 'openai-images'
      : env.provider) || 'openai-images'
  return {
    baseUrl,
    token,
    provider: provider === 'anthropic-compat' ? 'anthropic-compat' : 'openai-images',
    source: cfg.mediaBaseUrl || cfg.mediaApiKey ? 'settings' : env.source,
  }
}
