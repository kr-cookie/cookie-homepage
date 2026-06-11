const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const required = [
  'index.html',
  'about/index.html',
  'memory/index.html',
  'worklog/index.html',
  'projects/index.html',
  'skills/index.html',
  'docs/index.html',
  'capabilities/index.html',
  'principles/index.html',
  'library/index.html',
  'changes/index.html',
  'assets/site.css',
  'assets/site.js',
  'data/site.json',
];

let ok = true;
for (const file of required) {
  const target = path.join(root, file);
  if (!fs.existsSync(target)) {
    console.error(`Missing required file: ${file}`);
    ok = false;
  }
}

const htmlFiles = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.git'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (entry.name.endsWith('.html')) htmlFiles.push(full);
  }
}
walk(root);

for (const file of htmlFiles) {
  const html = fs.readFileSync(file, 'utf8');
  if (/xox[baprs]-|password|secret|private key|api[_ -]?key/i.test(html)) {
    console.error(`Sensitive-looking text in ${path.relative(root, file)}`);
    ok = false;
  }
  const hrefs = [...html.matchAll(/href="([^"]+)"/g)].map((m) => m[1]);
  for (const href of hrefs) {
    if (/^(https?:|mailto:|#)/.test(href)) continue;
    const clean = href.split('#')[0];
    if (!clean) continue;
    const base = path.dirname(file);
    const target = clean.endsWith('/')
      ? path.join(base, clean, 'index.html')
      : path.join(base, clean);
    if (!fs.existsSync(path.normalize(target))) {
      console.error(`Broken link in ${path.relative(root, file)}: ${href}`);
      ok = false;
    }
  }
}

if (!ok) process.exit(1);
console.log(`Checked ${htmlFiles.length} HTML files: OK`);
