/**
 * Load host-only media env from $DSH_HOME/media.env (or MEDIA_ENV_PATH).
 * Never log token values. Returns { baseUrl, hasToken } only for diagnostics.
 */
import fs from 'node:fs'
import path from 'node:path'

export function loadMediaEnv() {
  const home = process.env.DSH_HOME || path.join(process.env.HOME || '/tmp', '.dsh')
  const file = process.env.MEDIA_ENV_PATH || path.join(home, 'media.env')
  const out = {
    baseUrl: process.env.ANTHROPIC_BASE_URL || process.env.GPTIMG_BASE_URL || process.env.OPENAI_BASE_URL || '',
    token: process.env.ANTHROPIC_AUTH_TOKEN || process.env.GPTIMG_API_KEY || process.env.OPENAI_API_KEY || '',
    provider: 'anthropic-compat',
    source: 'process.env',
  }
  try {
    if (fs.existsSync(file)) {
      const text = fs.readFileSync(file, 'utf8')
      for (const line of text.split('\n')) {
        const t = line.trim()
        if (!t || t.startsWith('#')) continue
        const i = t.indexOf('=')
        if (i < 0) continue
        const k = t.slice(0, i).trim()
        const v = t.slice(i + 1).trim()
        if (k === 'ANTHROPIC_BASE_URL' && !out.baseUrl) { out.baseUrl = v; out.provider = 'anthropic-compat' }
        if (k === 'ANTHROPIC_AUTH_TOKEN' && !out.token) out.token = v
        if ((k === 'GPTIMG_BASE_URL' || k === 'OPENAI_BASE_URL') && v) { out.baseUrl = v; out.provider = 'openai-images' }
        if ((k === 'GPTIMG_API_KEY' || k === 'OPENAI_API_KEY') && v) out.token = v
      }
      out.source = file
    }
  } catch {
    // ignore — missing file is fine until test
  }
  return out
}

/** Safe summary for logs — never includes token */
export function mediaEnvSummary(env = loadMediaEnv()) {
  return {
    baseUrlSet: Boolean(env.baseUrl),
    tokenSet: Boolean(env.token),
    provider: env.provider || 'unknown',
    source: env.source === 'process.env' ? 'process.env' : 'file',
  }
}
