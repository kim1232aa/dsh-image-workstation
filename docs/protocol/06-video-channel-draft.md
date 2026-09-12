# Video channel fields (draft)

Built-in `video.async` — not a nested plugin pack.

| Field | Where | Notes |
|---|---|---|
| `videoBaseUrl` | Config / media.env | host |
| `videoApiKey` | secret | host-only, never client |
| `videoProvider` | Config | `video.async` |
| `videoDefaultModel` | Config | e.g. grok-imagine-video |
| `videoPollIntervalMs` | Config | default 2000 |
| `videoPollTimeoutMs` | Config | default 600000 |

Settings card layout: unchanged for now (draft only).
