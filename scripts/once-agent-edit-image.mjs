/**
 * One paid Agent edit_image invoke via the SAME registerAgentImageTools path
 * (mock ctx.tools.register → captured execute). Uses local night-street ref.
 * Usage:
 *   export DSH_HOME=/workspace/dsh/home
 *   node scripts/once-agent-edit-image.mjs
 */
import { loadMediaEnv, mediaEnvSummary } from '../src/protocol/load-media-env.js'
import { createHostProxy } from '../src/protocol/host-proxy.js'
import { resolveConfig } from '../src/config.js'
import { registerAgentImageTools } from '../src/agent/image-tools.js'
import path from 'node:path'
import os from 'node:os'
import fs from 'node:fs'

const REF =
  process.env.AGENT_EDIT_REF ||
  '/workspace/dsh/home/dsh-image-workstation/media/generated/381a0b3f-ed2b-4437-b4ac-8045ff8d1f06.jpg'
const PROMPT = process.env.AGENT_EDIT_PROMPT || '城市夜景，霓虹更亮'

if (!fs.existsSync(REF)) {
  console.error(JSON.stringify({ ok: false, code: 'REF_MISSING', ref: REF }))
  process.exit(2)
}

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
const cfg = resolveConfig({})

/** @type {Map<string, any>} */
const tools = new Map()
const ctx = {
  tools: {
    register(def) {
      tools.set(def.name, def)
      return () => tools.delete(def.name)
    },
  },
}

await registerAgentImageTools(ctx, proxy, () => ({
  allowAgentImageGeneration: cfg.allowAgentImageGeneration,
  agentImageModels: cfg.agentImageModels,
}))

if (!tools.has('edit_image') || !tools.has('generate_image')) {
  console.error(JSON.stringify({ ok: false, code: 'REGISTER_MISS', keys: [...tools.keys()] }))
  process.exit(1)
}

const tool = tools.get('edit_image')
const started = Date.now()
const ac = new AbortController()
try {
  const value = await tool.execute(
    {
      prompt: PROMPT,
      refImages: [REF],
      count: 1,
      size: '1:1',
      quality: '1k',
    },
    { signal: ac.signal },
  )
  const rendered = tool.output?.render?.({}, value) || tool.render?.({}, value)
  // defineTool may nest render under output
  const parts =
    typeof tool.output?.render === 'function'
      ? tool.output.render({}, value)
      : typeof tool.render === 'function'
        ? tool.render({}, value)
        : []
  console.log(
    JSON.stringify({
      ok: true,
      ms: Date.now() - started,
      job_id: value.job_id,
      status: value.status,
      urls: (value.images || []).map((i) => i.url),
      renderText: Array.isArray(parts) ? parts.map((p) => p.text).join('\n') : String(rendered || ''),
      tools: [...tools.keys()],
    }),
  )
} catch (e) {
  const msg = String(e?.message || e)
  const scrubbed = media.token ? msg.split(media.token).join('[redacted]') : msg
  console.error(
    JSON.stringify({
      ok: false,
      code: e?.code || null,
      message: scrubbed.slice(0, 400),
      ms: Date.now() - started,
    }),
  )
  process.exit(1)
}
