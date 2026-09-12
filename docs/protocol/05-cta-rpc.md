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

## Dev helper: removed

`DEMO_LOCAL` / `demo-local-results` / `paintDemoLocalResults` / `?wsDemoResults` / apple fixtures (`802bb6e4`) were deleted (`fcfe98d`). Do **not** revive them. Layout/results shots must use a real CTA generate (or prior real CTA outputs), never apple/robot fixtures.

## storage.paths

Lightweight probe: `rpc.call('/dsh-ws', 'storage.paths', {})` →
`{ ok:true, value:{ dataDir, generated:'media/generated', gallery:'media/gallery', history:'media/history' } }`
(client-safe paths; no secrets). Host mkdir on apply under `{dataDir}/media/{generated,gallery,history}`.

