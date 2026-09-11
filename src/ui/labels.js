/**
 * Exact Chinese labels — authority: docs 01–02. Do not paraphrase.
 * VisioWork is shape reference only.
 */

/** @type {readonly string[]} 顶栏顺序：视频进顶栏，与图/画布平级 */
export const TOP_TABS = Object.freeze([
  '普通生图',
  '视频生成',
  '无限画布',
  '画廊',
  '电商模式',
])

/** 三栏栏名 */
export const COLUMNS = Object.freeze({
  history: '历史记录',
  studio: '生图区',
  chat: 'AI 对话',
})

export const MODE_TABS = Object.freeze(['文生图', '图生图'])

/** 【必须】比例 9 项固定序 */
export const RATIOS = Object.freeze([
  '自动',
  '1:1',
  '3:4',
  '4:3',
  '9:16',
  '16:9',
  '2:3',
  '3:2',
  '21:9',
])

/** 【必须】清晰度 4 档 */
export const CLARITY = Object.freeze(['自动', '1K', '2K', '4K'])

/** 【必须】张数 1–4 */
export const COUNTS = Object.freeze([1, 2, 3, 4])

export const PARAM_LABELS = Object.freeze({
  ratio: '比例',
  clarity: '清晰度',
  count: '张数',
  detail: '细节',
  model: '模型',
})

export const PROMPT_FIELDS = Object.freeze({
  prompt: '提示词',
  negative: '负面词',
  clearNegative: '清除负面词',
})

export const PROMPT_ACTIONS = Object.freeze({
  enhance: '提示词增强',
  templates: '模板库',
  skill: '创作 Skill',
  plan: '想方案',
  generate: '出图',
  replan: '重新想一版',
  acceptPlan: '就这样出图',
})

export const CTA = '开始生成'

/** Skill 入口名 —— 三联封面 ≠ 电影海报 */
export const SKILL_ENTRIES = Object.freeze([
  '电影三联',
  '三联封面',
  '电影海报',
  '人像',
  '摄影',
  '角色',
])

export const PORTRAIT_SUB = Object.freeze(['升级已有照片', '原创人像'])
export const CASTING_EXTRA = '三视图'

export const HISTORY_ACTIONS = Object.freeze({ clear: '清空' })

export const RESULT_ACTIONS = Object.freeze([
  '取消',
  '重试',
  '下载',
  '加画廊',
  '加对话',
  '当参考图',
  '重新生成',
  '复制提示词',
  '拿去做视频',
])

export const EMPTY = Object.freeze({
  inspiration: '灵感案例',
  shuffle: '随机',
})

export const CHROME = Object.freeze({
  settings: '设置',
  expandChat: 'AI 对话',
})
