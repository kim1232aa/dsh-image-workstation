import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'

const body = readFileSync('/tmp/ws-client.cjs', 'utf8')
const wrapped = `window.__ModuleLoader__.load({
\tid: "dsh-image-workstation",
\tfactory: (require) => {
\t\tvar module = { exports: {} };
\t\tvar exports = module.exports;
${body}
\t\treturn module.exports;
\t}
});
`
mkdirSync(new URL('../lib', import.meta.url).pathname, { recursive: true })
writeFileSync(new URL('../lib/client.js', import.meta.url), wrapped)
console.log('wrapped lib/client.js', wrapped.length)
