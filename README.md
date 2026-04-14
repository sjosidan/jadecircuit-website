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

## Deploy to Caddy server

Copy the contents of `out/` into your Caddy web root:

```bash
rsync -avz --delete out/ user@server:/var/www/jadecircuit.com/
```

Example Caddyfile:

```
jadecircuit.com {
    root * /var/www/jadecircuit.com
    encode gzip zstd
    try_files {path} {path}/ {path}.html /index.html
    file_server
}
```

## Swapping project screenshots

Replace the placeholder SVGs in `public/projects/`:

- `vikingcup.svg`
- `nordickeys.svg`
- `mongi.svg`
- `swiftrates.svg`

PNG/JPG work too — update the `img` paths in `app/page.tsx`.
