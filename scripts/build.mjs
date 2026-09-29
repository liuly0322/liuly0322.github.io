import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises'
import MarkdownIt from 'markdown-it'

// Resolve paths from this file, so the build also works outside the project root.
const root = new URL('../', import.meta.url)
const path = (name) => new URL(name, root)
const read = (name) => readFile(path(name), 'utf8')
const write = (name, content) => writeFile(path(`dist/${name}`), content)
const md = new MarkdownIt({ html: false, linkify: true })
const escape = md.utils.escapeHtml

// Match VitePress 1.3.1 slugs, including duplicate headings such as 寒假-1.
function slugify(text) {
  return text.normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[\u0000-\u001f]/g, '')
    .replace(/[\s~`!@#$%^&*()\-_+=[\]{}|\\;:"'“”‘’<>,.?/]+/g, '-')
    .replace(/-{2,}/g, '-').replace(/^-+|-+$/g, '')
    .replace(/^(\d)/, '_$1').toLowerCase()
}

function renderArticle(source, withContents) {
  const tokens = md.parse(source, {})
  const used = new Set()
  const headings = []
  for (let i = 0; i < tokens.length; i++) {
    const token = tokens[i]
    if (token.type !== 'heading_open') continue
    const title = tokens[i + 1].children
      .filter((child) => ['text', 'code_inline'].includes(child.type))
      .map((child) => child.content).join('')
    const base = slugify(title)
    let id = base
    for (let n = 1; used.has(id); n++) id = `${base}-${n}`
    used.add(id)
    token.attrSet('id', id)
    if (token.tag === 'h2') headings.push({ id, title })
  }
  const contents = withContents ? `<nav class="contents" aria-label="文章目录"><h2>目录</h2><ul>${headings.map(({ id, title }) => `<li><a href="#${escape(id)}">${escape(title)}</a></li>`).join('')}</ul></nav>` : ''
  // Keep the article title before the table of contents.
  return md.renderer.render(tokens.slice(0, 3), md.options, {}) + contents
    + md.renderer.render(tokens.slice(3), md.options, {})
}

const pages = [
  { name: 'archive', title: '历史归档', description: '本科阶段的企划与学习经历，作为个人历史文档保留。' },
  { name: 'projects', title: '企划（归档）', description: '本科课程项目、个人作品与开源贡献的历史记录。' },
  { name: 'logs', title: '个人经历（归档）', description: '2020—2024 年在中国科大的本科学习与生活记录。' },
]

await rm(path('dist/'), { recursive: true, force: true })
await mkdir(path('dist/'), { recursive: true })
await cp(path('public/'), path('dist/'), { recursive: true })
for (const name of ['base.css', 'home.css', 'article.css']) {
  await write(name, await read(`src/${name}`))
}
await write('index.html', await read('src/index.html'))
for (const page of pages) {
  const body = renderArticle(await read(`src/${page.name}.md`), page.name !== 'archive')
  await write(`${page.name}.html`, `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="${escape(page.description)}">
  <title>${escape(page.title)} | 刘良宇的个人主页</title>
  <link rel="stylesheet" href="/base.css">
  <link rel="stylesheet" href="/article.css">
</head>
<body>
  <div class="article-shell">
    <nav class="archive-nav" aria-label="页面导航"><a href="/">返回首页</a>${page.name !== 'archive' ? '<a href="/archive.html">历史归档</a>' : ''}</nav>
    <main class="article">${body}</main>
  </div>
</body>
</html>
`)
}
await write('CNAME', 'liuly.moe\n')
await write('.nojekyll', '')
console.log('Built homepage, 3 archive pages, and static assets in dist/.')
