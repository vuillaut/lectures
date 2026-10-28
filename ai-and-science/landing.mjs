// Writes the language-choice page of the ai-and-science lecture.
import { mkdirSync, writeFileSync } from 'node:fs'

const out = process.argv[2] ?? '../dist/ai-and-science'
const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>AI and the Future of Research</title>
<style>
  body { font-family: system-ui, sans-serif; display: grid; place-items: center; min-height: 100vh; margin: 0; background: #fafafa; color: #222; text-align: center; }
  a { display: inline-block; margin: .5rem; padding: 1rem 2.5rem; border: 2px solid #222; border-radius: .6rem; color: inherit; text-decoration: none; font-size: 1.3rem; }
  a:hover { background: #222; color: #fff; }
  @media (prefers-color-scheme: dark) { body { background: #111; color: #eee; } a { border-color: #eee; } a:hover { background: #eee; color: #111; } }
</style>
</head>
<body>
<main>
  <h1>L'IA et l'avenir de la recherche<br><small>AI and the Future of Research</small></h1>
  <p>LAPP seminar · Thomas Vuillaume</p>
  <a href="fr/">🇫🇷 Français</a>
  <a href="en/">🇬🇧 English</a>
</main>
</body>
</html>
`
mkdirSync(out, { recursive: true })
writeFileSync(`${out}/index.html`, html)
