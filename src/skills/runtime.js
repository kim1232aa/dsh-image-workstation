/**
 * Runnable skill flows — discover ≠ done.
 * Reads local SKILL.md / calls poster scripts. Never hard-codes creative body.
 * Score is display-only; never gates 出图.
 */
import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { discoverSkills } from './discover.js'
import { runPosterValidateAndBuild, runPosterScript, posterScriptPaths } from './poster-scripts.js'
import { stitchTriptychVertical } from './stitch.js'

/**
 * @param {string} folder
 * @returns {string}
 */
export function loadSkillMd(folder) {
  const p = join(folder, 'SKILL.md')
  if (!existsSync(p)) throw new Error(`SKILL.md missing: ${p}`)
  return readFileSync(p, 'utf8')
}

/**
 * @param {string} skillDir
 * @param {string} skillId
 */
export function findSkill(skillDir, skillId) {
  const list = discoverSkills(skillDir)
  const hit = list.find((s) => s.id === skillId || s.label === skillId)
  if (!hit) throw new Error(`skill not found: ${skillId}`)
  return hit
}

/**
 * Extract a soft negative hint from SKILL.md without importing gates.
 * Looks for lines under 负面 / avoid / 避免 — display-only, user-deletable.
 * @param {string} md
 */
function softNegativesFromMd(md) {
  const lines = String(md || '').split(/\r?\n/)
  const hits = []
  for (const line of lines) {
    if (/负面|避免|avoid|不要|别搞/i.test(line) && line.length < 200) {
      const cleaned = line.replace(/^[#*\-\s\d.]+/, '').trim()
      if (cleaned) hits.push(cleaned)
    }
    if (hits.length >= 8) break
  }
  return hits.join('；')
}

/**
 * @param {{ skillDir: string, skillId: string, brief: string, overrideAspect?: string, wantTriViews?: boolean, briefJsonPath?: string }} req
 */
export async function planSkill(req) {
  const skill = findSkill(req.skillDir, req.skillId)
  const md = loadSkillMd(skill.folder)
  const aspect =
    req.overrideAspect ||
    skill.defaultAspect ||
    (skill.id === 'triptych-cover' ? '3:4' : skill.id === 'cinema-triptych' ? '21:9' : '自动')

  /** @type {{ label: string, prompt: string, aspect: string, layer?: string }[]} */
  let prompts = []
  let rationale = `已加载「${skill.label}」SKILL.md（${md.length} 字）。方案可改；出图不因分数锁定。`
  let negativePrompt = softNegativesFromMd(md)
  /** @type {{ total: number, notes: string[] } | undefined} */
  let score

  if (skill.id === 'movie-poster') {
    const run = await runPosterValidateAndBuild(skill.folder, {
      briefJsonPath: req.briefJsonPath,
    })
    const built = (run.build && run.build.stdout || '').trim()
    const promptBody = built || String(req.brief || '')
    prompts = [
      { label: '底图', prompt: promptBody, aspect: aspect === '自动' ? '9:16' : aspect, layer: 'base' },
      { label: '字体层', prompt: promptBody + '\n（字体设计层：大字标题，断笔/错位/叠压；本地不打字）', aspect: '9:16', layer: 'type' },
      { label: '合成说明', prompt: '本地 composite_layers.py 叠加；不满意只重出字体层，底图可不动', aspect: '9:16', layer: 'composite' },
    ]
    rationale += run.ok
      ? ' 海报脚本 validate_/build_prompt 已跑通。'
      : ` 海报脚本未全过：${(run.build && run.build.stderr) || (run.validateProject && run.validateProject.stderr) || 'see runPosterScripts'}。仍允许出图。`
    // validate scripts may print checks — never treat as CTA lock
    score = { total: run.ok ? 90 : 70, notes: ['脚本校验仅供自检展示', '低分不锁出图'] }
  } else if (skill.id === 'cinema-triptych') {
    const brief = String(req.brief || '').trim() || '未命名题材'
    prompts = [
      { label: '镜头1', prompt: `${brief} — 建立镜头，电影感 21:9`, aspect: '21:9' },
      { label: '镜头2', prompt: `${brief} — 发展镜头，与镜头1有剪辑关系，21:9`, aspect: '21:9' },
      { label: '镜头3', prompt: `${brief} — 收束镜头，与前两镜形成三联，21:9`, aspect: '21:9' },
    ]
    rationale += ' 三联：三张单独出图后本地纵向拼接（黑边），不靠模型一张画三格。'
    score = { total: 0, notes: ['自检分待 Agent/模型填写；展示用不锁 CTA'] }
  } else if (skill.id === 'triptych-cover') {
    prompts = [
      {
        label: '三联封面',
        prompt: `${String(req.brief || '').trim() || '基于已有三联'} — 3:4 项目封面（≠ 9:16 电影海报）`,
        aspect: '3:4',
      },
    ]
    score = { total: 0, notes: ['封面入口 ≠ 电影海报'] }
  } else if (skill.id === 'casting') {
    const brief = String(req.brief || '').trim() || '角色'
    prompts = [{ label: '角色', prompt: brief, aspect }]
    if (req.wantTriViews) {
      prompts.push(
        { label: '三视图-正', prompt: `${brief} — 正面`, aspect },
        { label: '三视图-侧', prompt: `${brief} — 侧面`, aspect },
        { label: '三视图-背', prompt: `${brief} — 背面`, aspect },
      )
    }
    rationale += req.wantTriViews ? ' 已显式要三视图。' : ' 默认单张；三视图需显式要求。'
    score = { total: 0, notes: ['自检展示 only'] }
  } else {
    // portrait / photography / unknown — brief + SKILL.md soft negatives
    prompts = [
      {
        label: skill.label,
        prompt: String(req.brief || '').trim() || skill.label,
        aspect: aspect || '自动',
      },
    ]
    score = { total: 0, notes: ['自检展示 only'] }
  }

  return {
    skillId: skill.id,
    label: skill.label,
    folder: skill.folder,
    skillMdPath: skill.skillMdPath,
    rationale,
    prompts,
    negativePrompt,
    score,
    /** 【必须】never use to disable CTA */
    disabledByScore: false,
    editable: true,
  }
}

/**
 * User edits a plan in place — no auto-rewrite beyond their fields.
 * @param {Awaited<ReturnType<typeof planSkill>>} plan
 * @param {Partial<{ rationale: string, prompts: typeof plan.prompts, negativePrompt: string, score: typeof plan.score }>} patch
 */
export function editPlan(plan, patch = {}) {
  return {
    ...plan,
    ...patch,
    prompts: patch.prompts || plan.prompts,
    negativePrompt: patch.negativePrompt !== undefined ? patch.negativePrompt : plan.negativePrompt,
    disabledByScore: false,
    editable: true,
  }
}

/**
 * Display-only self-check. Never throws to block generate.
 * @param {Awaited<ReturnType<typeof planSkill>>} plan
 */
export function selfCheckDisplay(plan) {
  const score = plan.score || { total: 0, notes: [] }
  return {
    score,
    disabledByScore: false,
    canGenerate: true,
    message: '自检仅展示；出图按钮永远可点',
  }
}

/**
 * Local vertical stitch for 电影三联.
 * @param {string[]} imagePaths
 * @param {string} outPath
 * @param {{ gap?: number, gapColor?: string }} [opts]
 */
export async function stitchTriptych(imagePaths, outPath, opts = {}) {
  return stitchTriptychVertical(imagePaths, outPath, opts)
}

/**
 * Poster layered redo: call upstream composite_layers.py (needs Pillow in plugin .venv).
 * @param {string} skillFolder
 * @param {{ base: string, typeLayer: string, out: string, canvas?: string, box?: string }} args
 */
export async function redoPosterComposite(skillFolder, args) {
  const paths = posterScriptPaths(skillFolder)
  const canvas = args.canvas || '1080x1920'
  const box = args.box || args.typeBox || '0,0,1,1'
  const gridOut = args.gridOut || args.out.replace(/(\.[^.]+)$/, '.grid$1')
  const result = await runPosterScript(
    paths.scriptsDir,
    'composite_layers.py',
    [
      '--base',
      args.base,
      '--type',
      args.typeLayer,
      '--out',
      args.out,
      '--grid-out',
      gridOut,
      '--canvas',
      canvas,
      '--type-box',
      box,
      '--mode',
      args.mode || 'screen',
    ],
    { cwd: skillFolder },
  )
  return { ...result, gridOut, disabledByScore: false }
}

export const RUNTIME_CAPABILITIES = Object.freeze([
  'discover',
  'loadSkillMd',
  'plan',
  'editPlan',
  'selfCheckDisplay',
  'stitchTriptych',
  'redoPosterComposite',
  'runPosterScripts',
])
