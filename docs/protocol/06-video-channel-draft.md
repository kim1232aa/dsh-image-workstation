# Video channel fields (draft)

Built-in `video.async` — not a nested plugin pack.

| Field | Where | Notes |
|---|---|---|
| `videoBaseUrl` | Config / settings card / media.env | host |
| `videoApiKey` | secret + settings card | host-only, never client (Configured / Not configured) |
| `videoProvider` | Config / settings card | default `video.async` |
| `videoDefaultModel` | Config / settings card | e.g. grok-imagine-video |
| `videoPollIntervalMs` | Config only | default 2000 (not on card) |
| `videoPollTimeoutMs` | Config only | default 600000 (not on card) |

## Settings card

Wired under image fields with a **Video** section divider: URL, key, provider, model.
Save persists video ops with image ops. Detect models stays **image-only**.

Resolve path: `resolveConfig` → `resolveVideoBag` (settings first, else `VIDEO_*` / `GPTIMG_VIDEO_*` in media.env) → `mediaEnv.video` → `createVideoAsyncAdapter` on host-proxy.

**Stub adapter still not paid-live** (`VIDEO_STUB_NOT_WIRED`).
