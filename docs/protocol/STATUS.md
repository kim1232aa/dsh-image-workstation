# Protocol matrix status — NOT Pass

Honest snapshot. `docs/00–03` and `docs/protocol/00–05` stay **requirements sources** — do not rewrite them as 「已完成」.

## CTA path (live)

Studio 「开始生成」→ `dsh-ws-generate` → host `/dsh-ws` RPC → `mediaProxy.generate` / `edit` → `studio.paintGenerateResult`.

- generate + edit seats are **live** when media is resolved
- `refImages` (or `mode=图生图|i2i|edit`) → `mediaProxy.edit` → multipart `POST {base}/v1/images/edits`
- cancel: `AbortController` aborts the in-flight upstream fetch (not UI-only)
- URLs verbatim; errors scrubbed (no token)

## Adapter matrix

| Seat | Status |
|---|---|
| `openai.images` generate | **live** |
| `openai.images` edit (图生图) | **live** (multipart `/v1/images/edits`; needs refImages) |
| `async.task_id` | stub |
| Grok/Gemini/Seedream/Qwen/智谱/MiniMax native | stub |
| `video.async` | stub |
| `detectModels` | live filter (drops chat/embedding) |
| `cancel` | AbortController aborts upstream |

Do **not** claim matrix Pass. 图生图 / video / 无限画布 are not full docs/03.

## Media resolve (no tokens in this file)

1. Settings Config `mediaBaseUrl` / `mediaApiKey` / `mediaProvider` when set
2. else `$DSH_HOME/media.env` (override `MEDIA_ENV_PATH`) via `loadMediaEnv` / `resolveMediaBag`

Provide bag gets `mediaEnvSummary` only (`baseUrlSet` / `tokenSet` / `source` / channel ids). Never log or document keys.

## Dual channel (2026-09-12)

| id | provider | default model | notes |
|---|---|---|---|
| `primary` | anthropic-compat / openai-images | `grok-imagine-image` | **working path:** `sub.alibb123` + `grok-imagine-image` |
| `gptimg` | openai-images | `gpt-image-2` | Settings provider GPTIMG (birdsun) |

Default model (`MEDIA_IMAGE_MODEL`): `grok-imagine-image`.
**`9.alibb` was a bad host** — do not use. Working gate is `sub.alibb123`.

Summary never includes tokens.

## Acceptance

Ten docs/03 零、红线 passed @ `be91e70`. Not full 03. Only UI CTA generate counts for 红线 1 (no script / direct upstream).


## Video (built-in skeleton)

| Seat | Status |
|---|---|
| `video.async` generate | **stub** (`VIDEO_STUB_NOT_WIRED`) — built-in, no nested plugin pack |
| `video.async` poll/cancel | stub shape only |
| Settings card fields | `videoBaseUrl` / `videoApiKey`(host) / `videoProvider` / `videoDefaultModel` on **Video** section; poll interval·timeout config-only |
| `resolveVideoCfg` / `resolveMediaBag().video` | settings first, else media.env `VIDEO_*` → host-proxy `mediaEnv.video` (stub still not paid-live) |

Rules when live later: verbatim result URLs; same queue/history concepts as image; no Nova JSON plugin packs.
