/**
 * Exactly one paid test generate. Usage:
 *   export DSH_HOME=/workspace/dsh/home; fnm use 22
 *   node scripts/once-generate.mjs
 * Reads $DSH_HOME/media.env. Never prints token.
 */
import { loadMediaEnv, mediaEnvSummary } from '../src/protocol/load-media-env.js'
import { createHostProxy } from '../src/protocol/host-proxy.js'
import path from 'node:path'
import os from 'node:os'
import fs from 'node:fs'

const media = loadMediaEnv()
const summary = mediaEnvSummary(media)
console.log('mediaEnv', JSON.stringify(summary))
if (!summary.baseUrlSet || !summary.tokenSet) {
  console.error('abort: media.env incomplete')
  process.exit(2)
}

const home = process.env.DSH_HOME || path.join(os.homedir(), '.dsh')
const dataDir = path.join(home, 'dsh-image-workstation')
fs.mkdirSync(path.join(dataDir, 'media', 'generated'), { recursive: true })

const proxy = createHostProxy({ dataDir }, media)
console.log(
  'proxy',
  JSON.stringify({
    live: proxy.live,
    mediaConfigured: proxy.mediaConfigured,
    tokenSet: proxy.tokenSet,
    baseUrlSet: proxy.baseUrlSet,
    dataDir,
  }),
)

const started = Date.now()
try {
  const out = await proxy.generate({
    prompt: 'a simple red apple on a white table, product photo, soft light',
    n: 1,
    model: 'grok-imagine-image',
    aspect_ratio: '1:1',
    resolution: '1k',
  })
  const items = (out.results || []).map((r) => ({
    hasUrl: Boolean(r.url),
    localPath: r.localPath || null,
    mime: r.mime || null,
  }))
  console.log(
    JSON.stringify({
      ok: true,
      jobId: out.jobId,
      phase: out.phase,
      ms: Date.now() - started,
      items,
    }),
  )
} catch (e) {
  const msg = String(e.message || e)
  const scrubbed = media.token ? msg.split(media.token).join('[redacted]') : msg
  console.error(
    JSON.stringify({
      ok: false,
      code: e.code || null,
      message: scrubbed.slice(0, 400),
      ms: Date.now() - started,
    }),
  )
  process.exit(1)
}
