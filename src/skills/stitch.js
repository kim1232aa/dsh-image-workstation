/**
 * Local vertical stitch for 电影三联 — three images + black gap.
 * Uses plugin .venv Pillow (does not ask the model to paint three panels).
 */
import { existsSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawn } from 'node:child_process'
import { writeFileSync } from 'node:fs'

const _here = dirname(fileURLToPath(import.meta.url))
const VENV_PYTHON = join(_here, '../../.venv/bin/python')
const PYTHON = existsSync(VENV_PYTHON) ? VENV_PYTHON : 'python3'

/**
 * @param {string[]} imagePaths length 3 preferred
 * @param {string} outPath
 * @param {{ gap?: number, gapColor?: string }} [opts]
 */
export function stitchTriptychVertical(imagePaths, outPath, opts = {}) {
  const gap = opts.gap ?? 24
  const gapColor = opts.gapColor || '#000000'
  const paths = (imagePaths || []).filter(Boolean)
  if (paths.length < 2) {
    return Promise.resolve({ ok: false, error: 'need ≥2 images to stitch' })
  }
  mkdirSync(dirname(outPath), { recursive: true })
  const script = `
from PIL import Image
import sys
paths = sys.argv[1:-3]
gap = int(sys.argv[-3])
gap_color = sys.argv[-2]
out = sys.argv[-1]
ims = [Image.open(p).convert('RGB') for p in paths]
w = max(im.width for im in ims)
scaled = []
for im in ims:
    if im.width != w:
        nh = int(im.height * (w / im.width))
        im = im.resize((w, nh), Image.Resampling.LANCZOS)
    scaled.append(im)
total_h = sum(im.height for im in scaled) + gap * (len(scaled) - 1)
canvas = Image.new('RGB', (w, total_h), gap_color)
y = 0
for i, im in enumerate(scaled):
    canvas.paste(im, (0, y))
    y += im.height
    if i < len(scaled) - 1:
        y += gap
canvas.save(out)
print(out)
`
  return new Promise((resolve) => {
    const child = spawn(PYTHON, ['-c', script, ...paths, String(gap), gapColor, outPath], {
      env: process.env,
    })
    let stdout = ''
    let stderr = ''
    child.stdout?.on('data', (d) => {
      stdout += String(d)
    })
    child.stderr?.on('data', (d) => {
      stderr += String(d)
    })
    child.on('close', (code) => {
      resolve({
        ok: code === 0 && existsSync(outPath),
        code,
        outPath,
        stdout,
        stderr,
      })
    })
    child.on('error', (err) => {
      resolve({ ok: false, error: String(err), stderr })
    })
  })
}
