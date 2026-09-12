# CTA → host RPC → mediaProxy (acceptance path)

**【必须】** 红线 1 有效路径只有：插件 UI「开始生成」→ RPC → `mediaProxy.generate` → 结果画进工作室。  
禁止脚本/验收直调 upstream API。禁止苹果、机器人 demo 题材。

## Client event
Studio CTA dispatches `dsh-ws-generate` (bubbles). `src/client.js` listens and calls:

`ctx.connection.rpc.call('/dsh-ws', 'generate', detail)`

## Host seat
`connection.rpc.handle('/dsh-ws', handler)` in `src/protocol/cta-rpc.js` →  
`ctx.get('dshImageWorkstation').mediaProxy.generate({ prompt, size, n, model?, aspect_ratio, resolution, signal })`  
→ `{ ok:true, value:{ jobId, phase, results:[{ kind:'image', url, localPath? }] } }`  
URLs verbatim. Errors scrubbed (no token).

## UI paint
`studio.paintGenerateResult(value)` fills `[data-ws-results]` + history list. Prefers `https?` url.

## media.env
`loadMediaEnv` prefers GPTIMG/OPENAI when set (`provider=openai-images`). Summary only on bag.

## 图生图
mode=`图生图` + `refImages[0].url` (data URL) → `mediaProxy.edit` → `POST /v1/images/edits`.

## Screenshot: real results on right (preferred = real CTA)

**Preferred for Critiquito results shot** — real generate, not demo:

1. Set 张数=`1`, prompt a real-scene brief (e.g. wet dusk street / shopkeeper — **never** apples, fruit still-lifes, or robots)
2. Click 「开始生成」
3. Wait for host RPC → `paintGenerateResult` on the right column
4. Expect: empty hint gone, thumb count matches 张数, no 「非本次 CTA」 / demo disclaimer, RESULT_ACTIONS packed under the grid

If generate needs accounts / model keys, check host logs and default model (`gpt-image-2`); do not invent success.

## Dev helper: prior local gens (not CTA success)

For layout-only shots without another paid CTA:

1. Console: `window.__dshWsPaintDemoResults()`, **or**
2. `studio.paintDemoLocalResults()`, **or**
3. `?wsDemoResults=1` (opt-in; production open does not auto-paint)

Paints prior local fixtures into right `[data-ws-results]` via `paintGenerateResult`. Demo disclaimer is **console-only** — never user-visible `setStatus`. Respects current 张数. Broken fixtures are skipped (no near-black fallback). No picsum / stock placeholders.
