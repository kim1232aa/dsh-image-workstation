# GIF / 电商 contracts (Nova-aligned)

Honest seats — **no fake success**. Result URLs **verbatim** when live (same rule as `openai.images` / `video.async`).

Primary reference: **Nova** (`ref-nova-image-studio`) — GIF = sprite-sheet via images lane + client encode; ecommerce has **no** dedicated Nova generation seat.

## RPC methods (`/dsh-ws`)

### `gifGenerate` — **host-only partial** (not UI CTA-Pass)

> Honest: host may return `results[].url` (sprite grid image). Client paints those URLs via `paintGifResult` (`c3050c3`); still **no GIF encode** / animated export. Unconfigured → `GIF_NOT_CONFIGURED`; `forceStub` → `GIF_STUB_NOT_WIRED`. Do not claim matrix live/Pass.

Payload:

```json
{
  "prompt": "string",
  "frameCount": 12,
  "fps": 12,
  "loop": true,
  "closedLoop": false,
  "loops": 0,
  "size": "3264x2448",
  "modelId": "optional",
  "refImages": [{ "url": "…" }]
}
```

Behavior (Nova `useGifWorkflow` / `buildGifPrompt`):

1. If media channel configured **or** `GIF_BASE_URL` + `GIF_API_KEY` (alias `GIF_API_URL`) set → compose sprite-sheet prompt → `openai.images` generate (or edit when `refImages` present).
2. Returns grid image URL(s) verbatim (`seat: gif.grid`). Client may encode GIF locally (Nova `gifenc` pattern) — **host does not invent GIF blobs**.
3. If neither media nor `GIF_*` → `{ ok:false, error:{ code:"GIF_NOT_CONFIGURED" } }`.
4. `forceStub` → `GIF_STUB_NOT_WIRED` (no fake success).

Success:

```json
{
  "ok": true,
  "value": {
    "jobId": "…",
    "phase": "done",
    "seat": "gif.grid",
    "results": [{ "kind": "image", "url": "https://…/grid.png" }]
  }
}
```

### `ecommerceGenerate` — **stub**

Nova has no dedicated ecommerce generation seat (gallery category only). Keep honest stub.

Payload (draft / reserved):

```json
{
  "productImages": [{ "url": "…" }],
  "styleRef": { "url": "…" },
  "name": "string",
  "paramsText": "string",
  "locale": "zh",
  "purposes": [{ "id": "hero", "enabled": true, "count": 1 }],
  "confirmed": true
}
```

Always:

```json
{ "ok": false, "error": { "code": "ECOM_STUB_NOT_WIRED", "message": "…", "details": {} } }
```

Optional future keys (names only): `ECOM_BASE_URL`, `ECOM_API_KEY`, `ECOM_DEFAULT_MODEL` (alias `ECOM_API_URL`). Not a live seat today.

## Host

- `mediaProxy.gifGenerate` → host live-when-configured (deps: `generate` + optional `gifEnv`); UI paints grid URLs; GIF encode still open
- `mediaProxy.ecommerceGenerate` → `ECOM_STUB_NOT_WIRED`

## Env keys (names only — never values)

| Key | Role |
|---|---|
| (media channel) | Primary GIF path — same as studio generate |
| `GIF_BASE_URL` / `GIF_API_URL` | Optional GIF lane override |
| `GIF_API_KEY` | Optional GIF lane secret |
| `GIF_DEFAULT_MODEL` | Optional model id |
| `ECOM_BASE_URL` / `ECOM_API_URL` | Documented only (seat stub) |
| `ECOM_API_KEY` | Documented only (seat stub) |

## Verbatim URL rule

Pass upstream result URLs through unchanged (no domain rewrite); scrub tokens in errors only.
