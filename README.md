# liuly.moe

Personal homepage: <https://liuly.moe>.

## Build and preview

Use Node.js 22 and pnpm 9 (matching CI):

```sh
pnpm install --frozen-lockfile
pnpm build
pnpm serve
```

Preview at http://localhost:8000. After editing source files, run `pnpm build` again.
The build renders Markdown with markdown-it, inlines each page's CSS, then compresses HTML and inline CSS with node-minify. Output has no client-side JavaScript or separate stylesheet requests.

## Content

- `src/index.html`, `src/home.css`: homepage and its styles. The `{{styles}}` placeholder is replaced with the shared and homepage CSS at build time.
- `src/archive.md`, `src/projects.md`, `src/logs.md`: historical archive, without frontmatter. Titles and descriptions are configured in `scripts/build.mjs`.
- `src/base.css`, `src/article.css`: shared colors, system light/dark mode, and archive typography.
- `public/cv/`: dated CV PDFs. Update the homepage link when adding a new CV.
- `public/images/`: archived project images. All public files are copied unchanged.

Build output is `dist/`, including `index.html`, `archive.html`, `projects.html`, and `logs.html`.
GitHub Pages continues to serve the legacy extensionless archive URLs; internal links use `.html` so they also work with a basic local file server.
Heading IDs retain the VitePress 1.3.1 slug format, including duplicate-heading suffixes.

## Deployment

[GitHub Actions](.github/workflows/build.yml) builds and publishes `dist/` to `gh-pages` on pushes to `main`.
The build emits `CNAME` (`liuly.moe`) and `.nojekyll`.
