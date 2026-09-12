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
| `async.task_id` | **skeleton live** (helper `runAsyncTask` / path extract / scrub; no standalone paid seat) |
| Grok/Gemini/Seedream/Qwen/智谱/MiniMax native | stub |
| `video.async` | **live** when `VIDEO_*` / settings videoBaseUrl+videoApiKey; else `VIDEO_NOT_CONFIGURED` (`forceStub` → `VIDEO_STUB_NOT_WIRED`) |
| `vision.reversePrompt` | **live** when `VISION_*` set; else `VISION_NOT_CONFIGURED` |
| `vision.enhancePrompt` | **live** when `VISION_*` set; else `ENHANCE_NOT_CONFIGURED` |
| `gif.generate` (`gifGenerate` RPC) | **stub** (`GIF_STUB_NOT_WIRED`) |
| `ecommerce.generate` (`ecommerceGenerate` RPC) | **stub** (`ECOM_STUB_NOT_WIRED`) |
| `detectModels` | live filter (drops chat/embedding) |
| `cancel` | AbortController aborts upstream |
| Agent `generate_image` tool register | **live** (register path); full Agent UX = **not Pass** |

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
Default Config `mediaProvider`: `anthropic-compat` (Schema also allows `openai-images` | `gptimg`).
**Channel drift fix:** only `settingsProvider === 'gptimg'` selects birdsun; `openai-images` alone falls through to env primary.
**`9.alibb` was a bad host** — do not use. Working gate is `sub.alibb123`.

Summary never includes tokens.

## Acceptance

Ten docs/03 零、红线 passed @ `be91e70`. Not full 03. Only UI CTA generate counts for 红线 1 (no script / direct upstream).


## Video (built-in skeleton)

| Seat | Status |
|---|---|
| `video.async` generate | **live when configured**; else `VIDEO_NOT_CONFIGURED`; `forceStub` → `VIDEO_STUB_NOT_WIRED` |
| `video.async` status/cancel | wired job map + AbortController |
| `/dsh-ws` `videoGenerate` | wired; UI CTA → RPC; status exact `VIDEO_NOT_CONFIGURED` when unset |
| Settings card fields | `videoBaseUrl` / `videoApiKey`(host) / `videoProvider` / `videoDefaultModel` on **Video** section; poll interval·timeout config-only |
| `resolveVideoBag` | settings first, else media.env `VIDEO_*` → host-proxy `mediaEnv.video` (stub still not paid-live) |

Rules when live later: verbatim result URLs; same queue/history concepts as image; no Nova JSON plugin packs.


## Vision / 反推 / 提示词增强 (see `07-vision-read.md`)

| Item | Status |
|---|---|
| `VISION_*` lane | separate from images; no Images/ANTHROPIC/GPTIMG fallback |
| `/dsh-ws` `reversePrompt` | wired; live iff vision configured |
| `/dsh-ws` `enhancePrompt` | wired; Studio button fills textarea on ok; ratio via `mapGenerateRequest` |
| Studio enhance UI layout | unchanged (behavior only) |
| UI enhance/reverse | enhance + 反推 → RPC; missing VISION_* → exact `ENHANCE_NOT_CONFIGURED` / `VISION_NOT_CONFIGURED` |

## GIF / 电商 stubs (see `08-gif-ecommerce-draft.md`)

| Item | Status |
|---|---|
| `gifGenerate` | stub → `GIF_STUB_NOT_WIRED` (no fake success) |
| `ecommerceGenerate` | stub → `ECOM_STUB_NOT_WIRED` (no fake success) |
| Verbatim URL rule | documented for when live |

## Agent generate_image

| Item | Status |
|---|---|
| tool register → `mediaProxy.generate` | **live** |
| full Agent UX (inline chat, slash edit, vision, web search) | **not Pass** |
| verify | `node scripts/verify-agent-generate-image.mjs` (no paid APIs) |
