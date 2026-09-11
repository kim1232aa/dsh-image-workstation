# Protocol adapter contract (image ‖ video)

Authority: docs 00–01. Video built-in — no nested plugin packs.

## Credential lanes (never merge)
| Lane | Use |
|---|---|
| `vision` | describe/OCR for text models |
| `images` | `/images/generations` + `/images/edits` (and native image APIs) |
| `video` | t2v / i2v submit+poll |

Host holds secrets; client only sees `configured: boolean`.

## Shared types

```ts
type AttachmentId = string // stable across turns; do not re-fingerprint pixels

type Channel = {
  id: string
  baseUrl: string
  protocol: ProtocolKind
  // apiKey: host-only
  models: ModelRef[]
  maxRefs?: number
  maxResolution?: string
}

type ModelRef = {
  id: string
  alias?: string
  modalities: ('t2i' | 'i2i' | 'edit-mask' | 't2v' | 'i2v')[]
}

type ProtocolKind =
  | 'openai.images'
  | 'async.task_id'
  | 'grok.imagine'
  | 'gemini.image'
  | 'seedream'
  | 'qwen.dashscope'
  | 'zhipu.glm-image'
  | 'minimax.image-01'
  | 'video.async' // built-in family; concrete models map here

type GenerateRequest = {
  channelId: string
  model: string
  prompt: string
  negativePrompt?: string
  size?: string          // from UI 比例×清晰度 mapping
  n?: 1 | 2 | 3 | 4
  quality?: 'auto' | '1K' | '2K' | '4K' | 'low' | 'standard' | 'hd'
  refs?: AttachmentId[]  // i2i / i2v first(+last) frame
  mask?: AttachmentId    // openai.images edits only
  signal?: AbortSignal
}

type Progress = {
  phase: 'queued' | 'submitted' | 'polling' | 'downloading' | 'done' | 'failed' | 'cancelled'
  percent?: number
  elapsedMs: number
  message?: string
}

type MediaResult = {
  kind: 'image' | 'video'
  url: string            // 【必须】verbatim upstream URL — no domain rewrite
  localPath?: string
  width?: number
  height?: number
  durationSec?: number
  mime?: string
}

type JobHandle = {
  jobId: string
  cancel(): Promise<void>
  onProgress(cb: (p: Progress) => void): () => void
  result(): Promise<MediaResult[]>
}
```

## Adapter interface

```ts
interface MediaAdapter {
  readonly kind: ProtocolKind
  supports(model: ModelRef): boolean
  /** optional: filter /models list; drop chat/embedding */
  detectModels?(channel: Channel): Promise<ModelRef[]>
  generate(req: GenerateRequest): Promise<JobHandle>
  edit?(req: GenerateRequest): Promise<JobHandle> // mask edits when supported
}
```

## Rules
- Image and video adapters share `JobHandle` / queue / history / gallery.
- Unsupported modality → omit from picker (e.g. no `edit-mask` ⇒ hide mask UI model).
- Paid live test: only after user approval (`low`, 1024×1024, PNG).
