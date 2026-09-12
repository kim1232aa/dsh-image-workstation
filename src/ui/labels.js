/**
 * Exact Chinese labels — authority: docs 01–02. Do not paraphrase.
 * VisioWork is shape reference only.
 */

/** @type {readonly string[]} 顶栏顺序：视频进顶栏，与图/画布平级（已确认） */
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
  compare: '多模型对比',
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

/** VisioWork-shaped multi-model compare checkbox */
export const COMPARE = '多模型对比'

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

/** Studio/video history rail — local generate jobs (≠ host chat sessions) */
export const HISTORY_EMPTY = '暂无生图记录'

export const HISTORY_ACTIONS = Object.freeze({
  clear: '清空',
  restore: '恢复',
  remove: '删除',
})

export const RESULT_ACTIONS = Object.freeze([
  '取消',
  '重试',
  '下载',
  '重新生成',
  '复制提示词',
  '加画廊',
  '加对话',
  '当参考图',
  '拿去做视频',
  '再编辑',
])

/** Primary RESULT_ACTIONS row (under result grid) */
export const RESULT_PRIMARY_ACTIONS = Object.freeze(['下载', '重新生成', '复制提示词'])

/** Overflow under 「更多」 — keep unwired honest in host */
export const RESULT_MORE_ACTIONS = Object.freeze([
  '加画廊',
  '加对话',
  '当参考图',
  '拿去做视频',
  '再编辑',
])

export const EMPTY = Object.freeze({
  inspiration: '灵感案例',
  shuffle: '随机',
})

export const GO_CONFIGURE = '去配置'

export const CHROME = Object.freeze({
  settings: '设置',
  expandChat: 'AI 对话',
  connected: '已连接',
  disconnected: '未连接',
})

/* ─── 视频生成 ─── */

export const VIDEO_MODE_TABS = Object.freeze(['文生视频', '图生视频'])

export const VIDEO_FRAMES = Object.freeze({
  first: '首帧图',
  last: '尾帧图',
})

export const VIDEO_REFS = Object.freeze({
  image: '参考图',
  video: '参考视频',
  audio: '参考音频',
})

export const VIDEO_PARAMS = Object.freeze({
  duration: '时长',
  clarity: '清晰度',
  ratio: '比例',
  model: '模型',
  compare: '多模型对比',
})

/** 渠道分档价差提示（有则显示） */
export const VIDEO_CLARITY_TIERS = Object.freeze(['标准', '高清', '超清'])

export const VIDEO_CTA = '开始生成'

export const VIDEO_RESULT_ACTIONS = Object.freeze([
  '播放',
  '下载',
  '加画廊',
  '抽帧',
  '重新生成',
  '取消',
  '重试',
])

export const VIDEO_CROSS = Object.freeze({
  takeToVideo: '拿去做视频',
})

/* ─── 无限画布 ─── */

export const CANVAS_NODES = Object.freeze({
  image: '图片节点',
  text: '文本节点',
  genConfig: '生成配置节点',
  video: '视频节点',
})

export const CANVAS_NODE_TOOLS = Object.freeze({
  annotate: '标注',
  removeBg: '移除背景',
  setModel: '指定模型',
})

export const CANVAS_CHROME = Object.freeze({
  fitAll: '适应全部内容',
  send: '发送',
  addToCanvas: '加入画布',
  newProject: '新建',
  rename: '重命名',
})

/* ─── 画廊 ─── */

export const GALLERY_VIEWS = Object.freeze({
  waterfall: '瀑布流',
  grid: '规整网格',
})

export const GALLERY_SORT = Object.freeze({
  newest: '最新',
  oldest: '最早',
})

export const GALLERY_FILTERS = Object.freeze({
  mode: '模式',
  model: '模型',
  ratio: '比例',
  tag: '标签',
})

export const GALLERY_TAG_ACTIONS = Object.freeze({
  create: '新建',
  edit: '改',
  remove: '删',
  batchTag: '打标签',
  batchDownload: '批量下载',
})

export const GALLERY_ACTIONS = Object.freeze([
  '加画廊',
  '当参考图',
  '加对话',
  '拿去做视频',
  '加入画布',
  '下载',
])

/* ─── 电商套图 ─── */

export const ECOM_UPLOAD = Object.freeze({
  product: '商品主图',
  subject: '主体',
  packaging: '包装',
  detail: '细节',
  styleRef: '风格参考图',
})

export const ECOM_FORM = Object.freeze({
  name: '商品名称',
  params: '参数信息',
  aiWrite: 'AI 帮写',
  locale: '文案语言',
})

export const ECOM_PURPOSES = Object.freeze([
  '主图',
  '卖点图',
  '场景图',
  '细节图',
  '规格图',
  '使用图',
])

export const ECOM_FLOW = Object.freeze({
  planPreview: '套图预览',
  confirmBatch: '确认批量生成',
  exportList: '导出清单',
})

export const ECOM_RESULT_ACTIONS = Object.freeze([
  '重新生成',
  '下载',
  '加画廊',
  '加对话',
])

/* ─── GIF ─── */

export const GIF_TITLE = 'GIF'

export const GIF_PARAMS = Object.freeze({
  frames: '帧数',
  fps: '帧率',
  loops: '循环次数',
  size: '尺寸',
})

export const GIF_FRAME_ACTIONS = Object.freeze([
  '单帧重新生成',
  '删帧',
  '调顺序',
])

export const GIF_ACTIONS = Object.freeze({
  exportGif: '导出 GIF',
  addGallery: '加画廊',
})

export const GIF_CTA = '开始生成'

/* ─── UI 设计 ─── */

export const UI_DESIGN_TITLE = 'UI 设计'

export const UI_DESIGN_STEPS = Object.freeze([
  '上传设计稿',
  'AI 切图',
  '切图编辑',
  '素材处理',
  '背景填充',
  '网页复刻',
  '导出',
])

export const UI_DESIGN_LABELS = Object.freeze({
  upload: '上传设计稿',
  aiSlice: 'AI 切图',
  confirm: '确认',
  original: '原图',
  cutout: '抠图结果',
  slicesOnly: '只看切片',
  algoCutout: '算法抠透明',
  aiCutout: 'AI 抠透明',
  algoSvg: '算法转 SVG',
  aiSvg: 'AI 重绘 SVG',
  localComposite: '本地合成版',
  aiOriginal: 'AI 原图版',
  export: '导出',
})

/* ─── 模板库 / 提示词广场 ─── */

export const TEMPLATE_TITLE = '模板库'

export const TEMPLATE_LABELS = Object.freeze({
  square: '提示词广场',
  inspire: '灵感案例',
  shuffle: '随机',
  favorite: '收藏',
  fill: '一键回填',
})

/* ─── 次要工具入口 ─── */

export const TOOL_MORE = '更多'
export const TOOL_MENU = '工具'
export const TOOL_ENTRIES = Object.freeze(['反推提示词', 'GIF', 'UI 设计'])
