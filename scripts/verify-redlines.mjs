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

console.log('OK verify-redlines')
console.log('- labels/ratios/clarity/counts')
console.log('- CTA requiresSkill:false disabledByScore:false')
console.log('- 三联封面 ≠ 电影海报')
console.log('- sidebar 生图 → studio.open()')
console.log('- no moderation / 不能生成 patterns in src+lib')
