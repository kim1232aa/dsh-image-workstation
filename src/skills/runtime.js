/**
 * Runnable skill flows — discover ≠ done.
 * Reads local SKILL.md / calls poster scripts. Never hard-codes creative body.
 * Score is display-only; never gates 出图.
 */
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs'
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
 * Soft negatives from SKILL.md — display-only, user-deletable. No gates.
 * @param {string} md
 */
function softNegativesFromMd(md) {
  const lines = String(md || '').split(/\r?\n/)
  const hits = []
  for (const line of lines) {
    if (/负面|避免|avoid|不要|别搞|禁/i.test(line) && line.length < 220) {
      const cleaned = line.replace(/^[#*\-\s\d.]+/, '').trim()
      if (cleaned) hits.push(cleaned)
    }
    if (hits.length >= 8) break
  }
  return hits.join('；')
}

/**
 * Write a minimal poster brief JSON from free-text so build_prompt.py can run.
 * @param {string} skillFolder
 * @param {string} brief
 */
function writePosterBriefFromText(skillFolder, brief) {
  const dir = join(skillFolder, '.dsh-ws-briefs')
  mkdirSync(dir, { recursive: true })
  const path = join(dir, `brief-${Date.now()}.json`)
  const text = String(brief || '').trim() || '未命名剧情'
  const data = {
    title: text.slice(0, 24) || '未命名电影',
    english_title: '',
    genre: '作者电影',
    logline: text,
    synopsis: text,
    era: '',
    location: '',
    characters: [],
    relationship: '',
    primary_motif: '',
    supporting_clues: [],
    tone: [],
    palette: [],
    typography: 'auto',
    composition: 'auto',
    ensemble: false,
    reference_dna: [],
    avoid: [],
    aspect_ratio: '9:16',
    output_mode: 'image',
    credits_name: '梵想美学',
  }
  writeFileSync(path, JSON.stringify(data, null, 2), 'utf8')
  return path
}

/**
 * @param {{ skillDir: string, skillId: string, brief: string, overrideAspect?: string, wantTriViews?: boolean, briefJsonPath?: string }} req
 */
export async function planSkill(req) {
  const skill = findSkill(req.skillDir, req.skillId)
  const md = loadSkillMd(skill.folder)
  const brief = String(req.brief || '').trim()
  const aspect =
    req.overrideAspect ||
    skill.defaultAspect ||
    (skill.id === 'triptych-cover' ? '3:4' : skill.id === 'cinema-triptych' ? '21:9' : '自动')

  /** @type {{ label: string, prompt: string, aspect: string, layer?: string }[]} */
  let prompts = []
  let rationale = `【${skill.label}】已读 SKILL.md（${md.length} 字）。方案可改；分数不锁出图。`
  let negativePrompt = softNegativesFromMd(md)
  /** @type {{ total: number, notes: string[] } | undefined} */
  let score
  /** @type {Record<string, string> | undefined} */
  let scriptPaths

  if (skill.id === 'movie-poster') {
    const paths = posterScriptPaths(skill.folder)
    scriptPaths = {
      validateProject: paths.validateProject,
      validatePosterText: paths.validatePosterText,
      buildPrompt: paths.buildPrompt,
      composite: join(paths.scriptsDir, 'composite_layers.py'),
      briefTemplate: paths.briefTemplate,
    }
    let briefJson = req.briefJsonPath || ''
    if (!briefJson || !existsSync(briefJson)) {
      briefJson = writePosterBriefFromText(skill.folder, brief || '雨夜街道对峙')
    }
    const run = await runPosterValidateAndBuild(skill.folder, { briefJsonPath: briefJson })
    const built = ((run.build && run.build.stdout) || '').trim()
    const promptBody = built || brief || '电影海报题材'
    const a = aspect === '自动' ? '9:16' : aspect
    prompts = [
      { label: '底图', prompt: promptBody, aspect: a, layer: 'base' },
      {
        label: '字体层',
        prompt: `${promptBody}\n（字体设计层：大字标题，断笔/错位/叠压；本地不打字）`,
        aspect: '9:16',
        layer: 'type',
      },
      {
        label: '合成',
        prompt: '本地调用 scripts/composite_layers.py；可只重出字体层，底图不动',
        aspect: '9:16',
        layer: 'composite',
      },
    ]
    rationale += run.ok
      ? ` 海报脚本已跑：validate_* + build_prompt（brief=${briefJson}）。`
      : ` 海报脚本部分失败仍给出方案：${((run.build && run.build.stderr) || (run.validateProject && run.validateProject.stderr) || '').slice(0, 160)}`
    score = {
      total: run.ok ? 88 : 72,
      notes: ['脚本自检仅展示', '低分不锁出图', '三联封面 ≠ 本入口'],
    }
  } else if (skill.id === 'cinema-triptych') {
    const b = brief || '未命名题材'
    prompts = [
      { label: '镜头1·建立', prompt: `${b} — 建立镜头：交代空间与人物关系，电影感，21:9`, aspect: '21:9' },
      { label: '镜头2·发展', prompt: `${b} — 发展镜头：动作/目光推进，与镜头1有剪辑关系，21:9`, aspect: '21:9' },
      { label: '镜头3·收束', prompt: `${b} — 收束镜头：余韵或反转，与前两镜成三联，21:9`, aspect: '21:9' },
    ]
    const storyboard = join(skill.folder, 'scripts', 'compose-nine-shot-storyboard.ps1')
    scriptPaths = {
      stitchHost: 'stitchTriptych (Pillow 纵向拼+黑边)',
      storyboardPs1: existsSync(storyboard) ? storyboard : '',
    }
    rationale += ' 三联：三张单独出图 → host `stitchTriptych` 本地拼；不靠模型一张画三格。'
    score = { total: 0, notes: ['自检展示 only', '出图后可本地拼接'] }
  } else if (skill.id === 'triptych-cover') {
    const b = brief || '基于已有三联'
    prompts = [
      {
        label: '三联封面',
        prompt: `${b} — 3:4 项目封面（给已有三联配封面；≠ 9:16 独立电影海报）`,
        aspect: '3:4',
      },
    ]
    rationale += ' 入口派生自 cinema-dna，不是第六仓；与「电影海报」分开。'
    score = { total: 0, notes: ['封面 ≠ 电影海报', '比例默认 3:4 可改'] }
  } else if (skill.id === 'casting') {
    const b = brief || '角色形象'
    prompts = [{ label: '角色定妆', prompt: `${b} — 可复用角色形象，单张`, aspect: aspect || '自动' }]
    if (req.wantTriViews) {
      prompts.push(
        { label: '三视图·正', prompt: `${b} — 正面`, aspect: aspect || '自动' },
        { label: '三视图·侧', prompt: `${b} — 侧面`, aspect: aspect || '自动' },
        { label: '三视图·背', prompt: `${b} — 背面`, aspect: aspect || '自动' },
      )
      rationale += ' 已显式要三视图。'
    } else {
      rationale += ' 默认单张；要三视图请在 brief 写明或传 wantTriViews。'
    }
    score = { total: 0, notes: ['自检展示 only'] }
  } else if (skill.id === 'portrait') {
    const b = brief || '人像'
    prompts = [
      {
        label: '人像',
        prompt: `${b} — 生命感人像（可「升级已有照片」或「原创人像」）；避免影楼感/塑料脸`,
        aspect: aspect || '自动',
      },
    ]
    rationale += ' 两种模式见 UI 子项；参考图默认只分析。'
    score = { total: 0, notes: ['自检展示 only'] }
  } else if (skill.id === 'photography') {
    const b = brief || '现场摄影'
    prompts = [
      {
        label: '摄影',
        prompt: `${b} — 摄影模拟：保持光、焦段、材质与现场感，避免 CG/广告片感`,
        aspect: aspect || '自动',
      },
    ]
    rationale += ' 读本地 SKILL.md 作识货；不硬编码作者门禁。'
    score = { total: 0, notes: ['自检展示 only'] }
  } else {
    prompts = [
      {
        label: skill.label,
        prompt: brief || skill.label,
        aspect: aspect || '自动',
      },
    ]
    score = { total: 0, notes: ['自检展示 only'] }
  }

  const fillPrompt = prompts
    .filter((p) => p.layer !== 'composite')
    .map((p) => p.prompt)
    .filter(Boolean)
    .join('\n\n')

  return {
    skillId: skill.id,
    label: skill.label,
    folder: skill.folder,
    skillMdPath: skill.skillMdPath,
    rationale,
    prompts,
    negativePrompt,
    score,
    scriptPaths: scriptPaths || null,
    fillPrompt,
    fillAspect: prompts[0]?.aspect || aspect || null,
    fillNegative: negativePrompt || '',
    /** 【必须】never use to disable CTA */
    disabledByScore: false,
    editable: true,
  }
}

/**
 * @param {Awaited<ReturnType<typeof planSkill>>} plan
 * @param {Partial<{ rationale: string, prompts: typeof plan.prompts, negativePrompt: string, score: typeof plan.score }>} patch
 */
export function editPlan(plan, patch = {}) {
  const next = {
    ...plan,
    ...patch,
    prompts: patch.prompts || plan.prompts,
    negativePrompt: patch.negativePrompt !== undefined ? patch.negativePrompt : plan.negativePrompt,
    disabledByScore: false,
    editable: true,
  }
  next.fillPrompt = (next.prompts || [])
    .filter((p) => p.layer !== 'composite')
    .map((p) => p.prompt)
    .filter(Boolean)
    .join('\n\n')
  next.fillNegative = next.negativePrompt || ''
  next.fillAspect = next.prompts?.[0]?.aspect || next.fillAspect || null
  return next
}

/**
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
 * @param {string[]} imagePaths
 * @param {string} outPath
 * @param {{ gap?: number, gapColor?: string }} [opts]
 */
export async function stitchTriptych(imagePaths, outPath, opts = {}) {
  return stitchTriptychVertical(imagePaths, outPath, opts)
}

/**
 * @param {string} skillFolder
 * @param {{ base: string, typeLayer: string, out: string, canvas?: string, box?: string, gridOut?: string, mode?: string }} args
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
  return { ...result, gridOut, scriptPath: join(paths.scriptsDir, 'composite_layers.py'), disabledByScore: false }
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
