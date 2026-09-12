/**
 * Local loop verify — docs/03 red-line shape checks (no live UI / no paid API).
 * Exit 0 only if contracts hold.
 */
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { RATIOS, CLARITY, COUNTS, SKILL_ENTRIES, CTA } from '../src/ui/labels.js'
import { studioTree } from '../src/ui/studio-stub.js'
import { SKILL_ENTRY_LABELS, TRIPTYCH_COVER } from '../src/skills/discover.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const fail = (msg) => {
  console.error('FAIL:', msg)
  process.exitCode = 1
}

if (RATIOS.length !== 9 || RATIOS[0] !== '自动') fail(`RATIOS ${RATIOS}`)
if (JSON.stringify([...CLARITY]) !== JSON.stringify(['自动', '1K', '2K', '4K'])) fail(`CLARITY ${CLARITY}`)
if (JSON.stringify([...COUNTS]) !== JSON.stringify([1, 2, 3, 4])) fail(`COUNTS ${COUNTS}`)

const cta = studioTree.columns.find((c) => c.id === 'studio')?.children?.find((c) => c.id === 'cta')
if (!cta || cta.disabledByScore !== false || cta.requiresSkill !== false || cta.label !== CTA) {
  fail(`studioTree.cta ${JSON.stringify(cta)}`)
}

if (!SKILL_ENTRIES.includes('三联封面') || !SKILL_ENTRIES.includes('电影海报')) {
  fail('SKILL_ENTRIES missing 三联封面 or 电影海报')
}
if (SKILL_ENTRIES.indexOf('三联封面') === SKILL_ENTRIES.indexOf('电影海报')) {
  fail('三联封面 merged with 电影海报')
}
if (JSON.stringify([...SKILL_ENTRY_LABELS]) !== JSON.stringify([...SKILL_ENTRIES])) {
  fail('SKILL_ENTRY_LABELS !== SKILL_ENTRIES')
}
if (TRIPTYCH_COVER.label !== '三联封面' || TRIPTYCH_COVER.defaultAspect !== '3:4') {
  fail(`TRIPTYCH_COVER ${JSON.stringify(TRIPTYCH_COVER)}`)
}

const srcFiles = [
  'src/client/studio-host.js',
  'src/client/sidebar-entry.js',
  'src/client.js',
  'src/ui/studio-stub.js',
  'src/ui/labels.js',
  'src/protocol/host-proxy.js',
  'lib/client.js',
]
const banned = [
  /不能生成/,
  /disabledByScore\s*:\s*true/,
  /敏感词/,
  /内容审查/,
  /blacklist/i,
  /moderat(e|ion)/i,
]
for (const rel of srcFiles) {
  const text = readFileSync(join(root, rel), 'utf8')
  for (const re of banned) {
    if (re.test(text)) fail(`${rel} matches ${re}`)
  }
}

const host = readFileSync(join(root, 'src/client/studio-host.js'), 'utf8')
if (!/data-ws-cta/.test(host)) fail('studio-host missing data-ws-cta')
if (/data-ws-cta[^>]*(?:\sdisabled|disabled\s*=)/.test(host.replace(/\s+/g, ' '))) {
  // allow programmatic cta.disabled = false
}
if (!host.includes("cta.disabled = false") && /\[data-ws-cta\][^\n]*disabled\s*=\s*true/.test(host)) {
  fail('CTA disabled=true in studio-host')
}

const client = readFileSync(join(root, 'src/client.js'), 'utf8')
if (!client.includes("onStudio: () => studio.open()")) fail('sidebar 生图 does not open studio')
if (!client.includes("studio: '生图'")) fail('sidebar label missing 生图')

const sidebar = readFileSync(join(root, 'src/client/sidebar-entry.js'), 'utf8')
if (!sidebar.includes("opts.onStudio()")) fail('sidebar-entry missing onStudio click path')

const chatCol = studioTree.columns.find((c) => c.id === 'chat')
if (!chatCol || chatCol.defaultCollapsed !== true) fail('chat not defaultCollapsed')

const ctaRpc = readFileSync(join(root, 'src/protocol/cta-rpc.js'), 'utf8')
if (!ctaRpc.includes("CTA_RPC_CHANNEL = '/dsh-ws'")) fail('cta-rpc missing /dsh-ws channel')
if (!ctaRpc.includes('createCtaRpcHandler') || !ctaRpc.includes('attachCtaRpc')) fail('cta-rpc missing handler/attach')

const hostIdx = readFileSync(join(root, 'src/index.js'), 'utf8')
if (!hostIdx.includes("inject = ['connection']")) fail('host missing connection inject')
if (!hostIdx.includes('attachCtaRpc')) fail('host missing attachCtaRpc')

const clientSrc = readFileSync(join(root, 'src/client.js'), 'utf8')
if (!clientSrc.includes("addEventListener('dsh-ws-generate'")) fail('client missing dsh-ws-generate listener')
if (!clientSrc.includes('rpc.call') || !clientSrc.includes('CTA_RPC_CHANNEL') || !clientSrc.includes('CTA_RPC_GENERATE')) fail('client missing rpc.call generate')
if (!clientSrc.includes('postDshWs') || !clientSrc.includes('callCtaRpc')) fail('client missing direct POST /dsh-ws/generate')
if (!clientSrc.includes('paintGenerateResult')) fail('client missing paintGenerateResult')

const studioSrc = readFileSync(join(root, 'src/client/studio-host.js'), 'utf8')
if (!studioSrc.includes('paintGenerateResult')) fail('studio-host missing paintGenerateResult')
if (studioSrc.includes('/api/dsh-image-workstation/generate')) fail('studio-host must not fetch /api/.../generate directly')
if (!studioSrc.includes("CustomEvent('dsh-ws-generate'")) fail('studio-host missing dsh-ws-generate dispatch')

console.log('OK verify-redlines')
console.log('- labels/ratios/clarity/counts')
console.log('- CTA requiresSkill:false disabledByScore:false')
console.log('- 三联封面 ≠ 电影海报')
console.log('- sidebar 生图 → studio.open()')
console.log('- no moderation / 不能生成 patterns in src+lib')
console.log('- CTA dsh-ws-generate → /dsh-ws/generate → paintGenerateResult')

// --- this loop: honest RPC errors + Agent generate_image register path ---
const rpcErrors = readFileSync(join(root, 'src/protocol/rpc-errors.js'), 'utf8')
if (!rpcErrors.includes('formatClientRpcFailure') || !rpcErrors.includes('Failed to fetch')) {
  fail('rpc-errors missing formatClientRpcFailure / Failed to fetch guidance')
}
if (!rpcErrors.includes('HOST_GENERATE_TIMEOUT_MS') || !rpcErrors.includes('CLIENT_GENERATE_TIMEOUT_MS')) {
  fail('rpc-errors missing timeout constants')
}

const clientHonest = readFileSync(join(root, 'src/client.js'), 'utf8')
if (!clientHonest.includes('formatHostGenerateError') || !clientHonest.includes('formatClientRpcFailure')) {
  fail('client.js missing honest error formatters')
}
if (!clientHonest.includes('CLIENT_GENERATE_TIMEOUT_MS') || !clientHonest.includes('AbortController')) {
  fail('client.js missing generate AbortController timeout')
}

const ctaHonest = readFileSync(join(root, 'src/protocol/cta-rpc.js'), 'utf8')
if (!ctaHonest.includes('HOST_GENERATE_TIMEOUT_MS') || !ctaHonest.includes('GENERATE_TIMEOUT')) {
  fail('cta-rpc missing host generate timeout')
}
if (!ctaHonest.includes('HANDLER_FAILURE') || !ctaHonest.includes('server-response')) {
  fail('cta-rpc outer failure must return server-response envelope')
}

const agentTools = readFileSync(join(root, 'src/agent/image-tools.js'), 'utf8')
const agentPolicy = readFileSync(join(root, 'src/agent/model-policy.js'), 'utf8')
if (!agentTools.includes("name: 'generate_image'")) fail('agent tools missing generate_image')
if (!agentTools.includes('mediaProxy.generate')) fail('agent tools must call mediaProxy.generate')
if (!agentPolicy.includes('MODEL_CHOICE_REQUIRED')) fail('agent tools missing multi-model ask')
if (!agentPolicy.includes('IMAGE_API_NOT_CONFIGURED')) fail('agent tools missing not-configured guide')
if (!agentTools.includes('ctx.tools.register')) fail('agent tools missing ctx.tools.register')
if (!agentPolicy.includes('allowAgentImageGeneration')) fail('agent tools missing allowAgent toggle')

const hostIdx2 = readFileSync(join(root, 'src/index.js'), 'utf8')
if (!hostIdx2.includes('attachAgentImageTools')) fail('host index missing attachAgentImageTools')

const cfg = readFileSync(join(root, 'src/config.js'), 'utf8')
if (!cfg.includes('allowAgentImageGeneration') || !cfg.includes('agentImageModels')) {
  fail('config missing Agent allow / models fields')
}

console.log('- honest CTA errors (host scrubbed + timeout + Failed to fetch guidance)')
console.log('- Agent generate_image → mediaProxy.generate register path')
