/**
 * Call poster skill scripts — do not reimplement rules.
 * Authority: fantasy-movie-poster-skill/scripts/*
 */
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { spawn } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname } from 'node:path'

const _here = dirname(fileURLToPath(import.meta.url))
const VENV_PYTHON = join(_here, '../../.venv/bin/python')
const PYTHON = existsSync(VENV_PYTHON) ? VENV_PYTHON : 'python3'

/**
 * @param {string} scriptsDir
 * @param {string} scriptName
 * @param {string[]} args
 * @param {{ cwd?: string, timeoutMs?: number }} [opts]
 * @returns {Promise<{ ok: boolean, code: number|null, stdout: string, stderr: string }>}
 */
export function runPosterScript(scriptsDir, scriptName, args = [], opts = {}) {
  const scriptPath = join(scriptsDir, scriptName)
  if (!existsSync(scriptPath)) {
    return Promise.resolve({
      ok: false,
      code: null,
      stdout: '',
      stderr: `missing script: ${scriptPath}`,
    })
  }
  const timeoutMs = opts.timeoutMs ?? 60_000
  return new Promise((resolve) => {
    const child = spawn(PYTHON, [scriptPath, ...args], {
      cwd: opts.cwd || scriptsDir,
      env: process.env,
    })
    let stdout = ''
    let stderr = ''
    const t = setTimeout(() => {
      child.kill('SIGKILL')
      resolve({ ok: false, code: null, stdout, stderr: stderr + '\ntimeout' })
    }, timeoutMs)
    child.stdout?.on('data', (d) => {
      stdout += String(d)
    })
    child.stderr?.on('data', (d) => {
      stderr += String(d)
    })
    child.on('close', (code) => {
      clearTimeout(t)
      resolve({ ok: code === 0, code, stdout, stderr })
    })
    child.on('error', (err) => {
      clearTimeout(t)
      resolve({ ok: false, code: null, stdout, stderr: String(err) })
    })
  })
}

/** @param {string} skillFolder absolute poster skill root */
export function posterScriptPaths(skillFolder) {
  const scriptsDir = join(skillFolder, 'scripts')
  return {
    scriptsDir,
    validateProject: join(scriptsDir, 'validate_project.py'),
    validatePosterText: join(scriptsDir, 'validate_poster_text.py'),
    buildPrompt: join(scriptsDir, 'build_prompt.py'),
    briefTemplate: join(skillFolder, 'templates', 'project-brief.json'),
  }
}

/**
 * @param {string} skillFolder
 * @param {{ briefJsonPath?: string }} [opts]
 */
export async function runPosterValidateAndBuild(skillFolder, opts = {}) {
  const paths = posterScriptPaths(skillFolder)
  if (!existsSync(paths.scriptsDir)) {
    return { ok: false, error: 'no scripts/', paths }
  }
  const brief = opts.briefJsonPath || paths.briefTemplate
  const validateProject = await runPosterScript(paths.scriptsDir, 'validate_project.py', brief ? [brief] : [])
  const validateText = await runPosterScript(paths.scriptsDir, 'validate_poster_text.py', brief ? [brief] : [])
  const build = await runPosterScript(paths.scriptsDir, 'build_prompt.py', brief ? [brief] : [])
  return {
    ok: validateProject.ok && validateText.ok && build.ok,
    paths,
    validateProject,
    validateText,
    build,
  }
}
