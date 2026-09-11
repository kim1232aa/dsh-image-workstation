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
