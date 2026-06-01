# JadeCircuit Website

Static Next.js site for [jadecircuit.com](https://jadecircuit.com).

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build static site

```bash
npm run build        # outputs to ./out
```

## Deploy

Hosted on **GitHub Pages** — just push to `main` and it deploys itself:

```bash
git push          # triggers the deploy
```

[`.github/workflows/pages.yml`](.github/workflows/pages.yml) builds the static
export and publishes `out/` to Pages on every push to `main`. No manual steps.

- Custom domain `jadecircuit.com` is set via `public/CNAME` (don't delete it —
  it keeps the domain attached on each deploy).
- DNS lives on Cloudflare: apex + `www` are `CNAME → sjosidan.github.io`,
  **DNS only** (grey cloud), relying on CNAME flattening at the apex.

## Swapping project screenshots

Replace the placeholder SVGs in `public/projects/`:

- `vikingcup.svg`
- `nordickeys.svg`
- `mongi.svg`
- `swiftrates.svg`

PNG/JPG work too — update the `img` paths in `app/page.tsx`.
