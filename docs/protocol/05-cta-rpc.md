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

## Screenshot: real results on right (not fake generate)

For Critiquito / UI shots that need 出图 visible without another paid CTA:

1. Open studio with `?wsDemoResults=1`, **or**
2. Console: `window.__dshWsPaintDemoResults()`, **or**
3. `studio.paintDemoLocalResults()`

This paints 1–2 **prior local gens** (resized copies of `$DSH_HOME/dsh-image-workstation/media/generated/…`) into right `[data-ws-results]` via `paintGenerateResult`. Status reads 「本地出图预览（既有生成文件 · 非本次 CTA）」 — not a claim that CTA just succeeded. No picsum / stock placeholders.
