# Canvas host seat

Nova `canvas-generation-service` submits to the **same image task queue** as studio (no separate paid vendor).

## Behavior

- Canvas tiles call **`generate`** (t2i) or **`edit`** when `refImages` / `mode=图生图|i2i|edit` present.
- Thin RPC alias: `canvasGenerate` → `mediaProxy.generate` (host already routes to edit).
- Same payload fields as studio CTA: `prompt`, `mode`, `refImages`, `ratio`, `clarity`, `count`, `modelId`, `negativePrompt`.
- Honest errors identical to `generate` (`HOST_PROXY_NOT_WIRED`, `PROMPT_REQUIRED`, `REF_REQUIRED`, `GENERATE_TIMEOUT`, scrubbed upstream).

## RPC

`POST /dsh-ws/canvasGenerate` — Connection envelope; maps via `mapGenerateRequest`.

UI may also call same-origin `callCtaRpc(..., 'generate', …)` with the same payload — both seats share openai.images.

## Status

| Seat | Status |
|---|---|
| `canvasGenerate` | **live-when-configured** (media channel) |
| Separate canvas vendor | **not required** |
