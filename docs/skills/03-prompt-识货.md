# 03 · Prompt 识货（参考，非产品门禁）

**产品权威：项目 docs 00–03。** 本文只供「提示词增强」与本地 skill 读盘时的创作参考。  
**禁止**：把作者打分、敏感词、拒出逻辑写进产品；**不许审查、不许不给出**。

## 推荐外参（按需 clone 到 `skillDir`）

### 已在 brief 内（FANTASY 梵想）
| 入口 | 仓库 |
|---|---|
| 电影三联 | https://github.com/dacnay816y62-hub/cinema-dna-21x9x3 |
| 三联封面 | 同上目录派生（3:4），≠ 电影海报 |
| 电影海报 | https://github.com/dacnay816y62-hub/fantasy-movie-poster-skill |
| 人像 | https://github.com/dacnay816y62-hub/fantasy-life-force-portrait-photography |
| 摄影 | https://github.com/dacnay816y62-hub/fantasy-photography-simulation-github |
| 角色 | https://github.com/dacnay816y62-hub/character-casting-studio-skill |

### 外部优秀 skill
| 名称 | 链接 | 可借什么 |
|---|---|---|
| UltraReal Prompt Architect | https://github.com/Sugamdeol/UltraReal-Prompt-Architect | 摄影 brief；光/焦段/材质；反塑料感；按模型改方言 |
| photoreal-image-skill | https://github.com/olegspiridonovdev-spec/photoreal-image-skill | 10 块合同；draft→critique→final |
| visual-skills | https://github.com/smixs/visual-skills | 分模型视频/静帧语法 |
| gpt-image-2-cinematic | film-kit / gpt-image-2-cinematic | 电影单帧；编辑「只改 X / 保住 Y」 |

## 「提示词增强」建议模板（可选，用户点了才跑）

六槽，前重后轻；空槽省略；**一次只改一槽**做迭代：

1. **主体** — 具体人/物，禁「一个美女」
2. **动作/姿态** — 手在干什么
3. **环境** — 地点、天气、空气
4. **光** — 光源→方向→软硬→颜色→影子（禁单独写 cinematic lighting）
5. **构图/镜头** — 景别、机位、焦段/光圈若改变观感
6. **材质/瑕疵** — 1–4 条真实细节（防 CG 感）

### 模型方言（增强时按当前模型选）
- **Flux**：自然语言；**不要 negative**；想要什么写正面
- **SD/SDXL**：可短 negative；重要词靠前；`(term:1.2)` 慎用
- **GPT Image / 同类**：完整句子；可写 `photorealistic`；约束用「保持/只改」
- **Grok Imagine / 通用**：中英均可；比例/清晰度走 UI 参数，不靠堆 `8K`

### 禁用填料（增强器自己别加）
`8K` `4K` `masterpiece` `best quality` `ultra detailed` `hyper realistic` `trending on artstation` `octane render` `flawless` `beautiful lighting`

## 与产品接线
- UI：仅「提示词增强」按钮触发；**从不**自动改写用户原文
- Skill：读本地 `SKILL.md` / 调作者 scripts；分数只展示
- 密钥：只在 host；见 `$DSH_HOME/media.env`（本机测试），永不进 client / 日志 / git

## 试出图禁题（用户硬令）
- **禁止**：苹果（及水果静物默认 demo）
- **禁止**：机器人 / robot / cyborg 默认 demo
- 未指定题材时：从本文外参 skill（UltraReal / cinema-dna / FANTASY）里借**具体场景**，写成摄影 brief，不要用「一个苹果」「一个机器人」

### 允许的试图示例（可直接用）
Photorealistic travel photograph of a dusty Royal Enfield motorcycle leaned on a high-altitude Ladakh roadside curve. Late-morning hard sun from camera right, thin blue sky, ochre barren ridges, pale gravel and broken tarmac. 35mm at f/5.6, three-quarter front, unretouched documentary colour, fine dust in the light — not a poster, not CGI.

## 验收出图路径（用户硬令）
- **禁止**用 curl / 脚本 / 直调 Images API 当作验收
- **唯一有效**：dsh web 打开插件 → 点「开始生成」→ CTA→RPC→host `mediaProxy` → 结果进工作室
- 直调 API 出的图可以当通道探活，**不算**红线 1 通过

