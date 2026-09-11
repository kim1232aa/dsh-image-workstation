# Adapter: `async.task_id`

Generic two-step used by many image gateways and almost all video.

## Flow
1. `POST {submitPath}` → `{ task_id }` (field name may be `task_id` | `id` | `taskId` — config alias)
2. Poll `GET {pollPath}` with id until terminal status
3. Read result URL(s) from configured JSON paths
4. **Use URLs verbatim** (video 【必须】)

## Channel extras
```ts
type AsyncTaskConfig = {
  submitPath: string      // e.g. /v1/images/generations
  pollPath: string        // e.g. /v1/tasks/{task_id}
  taskIdField: string     // default task_id
  statusField: string     // default status
  successValues: string[] // e.g. ["SUCCEEDED","success","completed"]
  failValues: string[]    // e.g. ["FAILED","failed"]
  resultUrlPaths: string[] // JSONPath-ish, e.g. data[0].url | output.video_url
  progressField?: string
  pollIntervalMs: number  // default 2000
  pollTimeoutMs: number   // default 600000 (video longer)
}
```

## JobHandle
- `phase` queued → submitted → polling (percent from `progressField` if present) → downloading → done|failed|cancelled
- `cancel`: stop poll loop; best-effort `DELETE` cancel endpoint if configured
- elapsed always shown

## Video (`video.async`)
Same skeleton; defaults: longer timeout, modalities `t2v`|`i2v`, refs = first(+last) frame attachment ids.
Quality tiers that cost more must be labeled in model metadata (UI concern; adapter exposes `expensive?: boolean`).

## Errors
Map upstream status + message; never echo API keys. Ghost jobs after restart: mark failed (host queue policy).
