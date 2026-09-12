/**
 * Canvas host seat — thin wrapper over mediaProxy.generate / edit.
 * Nova canvas-generation-service uses the same image task queue;
 * here tiles call openai.images via generate (edit when refImages present).
 * No separate paid vendor required.
 */

export const CTA_RPC_CANVAS_GENERATE = 'canvasGenerate'

/**
 * @param {Record<string, unknown>} req  already mapped (prompt/mode/refImages/size/…)
 * @param {{ generate: (req: any) => Promise<any>, mediaConfigured?: boolean }} mediaProxy
 */
export async function canvasGenerate(req, mediaProxy) {
  if (!mediaProxy || typeof mediaProxy.generate !== 'function') {
    const err = new Error('[dsh-image-workstation] canvasGenerate: media.generate not available')
    err.code = 'HOST_PROXY_NOT_WIRED'
    throw err
  }
  if (!mediaProxy.mediaConfigured && mediaProxy.mediaConfigured !== undefined) {
    // Still attempt generate — host-proxy throws honest HOST_PROXY_NOT_WIRED / MEDIA_ENV_MISSING
  }
  const out = await mediaProxy.generate(req || {})
  return {
    jobId: out?.jobId,
    phase: out?.phase || 'done',
    results: Array.isArray(out?.results) ? out.results : [],
    seat: 'canvas.generate',
  }
}
