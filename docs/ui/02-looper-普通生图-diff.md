# Looper checklist · 普通生图控件/标签

Authority: 01–02 only. Source of truth: `src/ui/labels.js` + `studio-stub.js`.

## Must ship (diff against empty studio)

| 控件 | 标签（照抄） | 选项/行为 |
|---|---|---|
| 顶栏 | 普通生图 \| 视频生成 \| 无限画布 \| 画廊 \| 电商模式 | 视频平级，非生图内开关 |
| 三栏 | 历史记录 \| 生图区 \| AI 对话 | 对话默收起，可拖宽 |
| 模式 | 文生图 \| 图生图 | |
| 提示词 | 提示词 | textarea；不选 Skill 也可出图 |
| 负面词 | 负面词 + 清除负面词 | 常显；skill 预填可见可删 |
| 提示动作 | 提示词增强、模板库、创作 Skill | 增强仅用户点击才改写 |
| Skill 入口 | 电影三联、三联封面、电影海报、人像、摄影、角色 | 三联封面 ≠ 电影海报；可选 |
| 比例 | 比例 | **固定序**：自动、1:1、3:4、4:3、9:16、16:9、2:3、3:2、21:9 |
| 清晰度 | 清晰度 | 自动、1K、2K、4K |
| 张数 | 张数 | 1、2、3、4 |
| 细节 / 模型 | 细节、模型 | |
| 主 CTA | 开始生成 | `data-ws-cta`；`requiresSkill:false`；**`disabledByScore:false`** |
| Skill CTA | 就这样出图 / 重新想一版 / 出图 | 双/三 CTA 均**永不**因分数 `disabled` |
| 空状态 | 灵感案例、随机 | |

## Hard no (Looper 撞即回滚)

- 给 `data-ws-cta` / 「出图」/「就这样出图」加 `disabled`（含因分数）
- 低分弹窗、自动重试、敏感词、「不能生成」
- 合并「三联封面」与「电影海报」
- 改比例顺序或漏「自动」
- 擅自改用户提示词（除点击「提示词增强」）
- 藏负面词控件

## Verify

```
labels.js RATIOS.length === 9 && RATIOS[0] === '自动'
CLARITY === ['自动','1K','2K','4K']
COUNTS === [1,2,3,4]
studioTree.cta.disabledByScore === false
studioTree.cta.requiresSkill === false
SKILL_ENTRIES includes 三联封面 and 电影海报 as separate
```
