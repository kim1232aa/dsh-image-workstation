/**
 * Screenshot / Critiquito helpers — prior local mediaProxy gens only.
 * NOT a fake CTA success. Source files live under $DSH_HOME/.../media/generated/
 * (resized copies in ./fixtures/). Activate via ?wsDemoResults=1 or
 * window.__dshWsPaintDemoResults() / studio.paintDemoLocalResults().
 */
// esbuild --loader:.jpg=dataurl inlines these as data:image/jpeg;base64,...
import realGen01 from './fixtures/real-gen-01.jpg'
import realGen02 from './fixtures/real-gen-02.jpg'

/** @type {readonly string[]} */
export const DEMO_LOCAL_RESULT_URLS = Object.freeze([realGen01, realGen02])

/** Honest provenance note for status / comments */
export const DEMO_LOCAL_STATUS =
  '本地出图预览（既有生成文件 · 非本次 CTA）'

export const DEMO_LOCAL_JOB_ID = 'local-demo-prior-gen'
