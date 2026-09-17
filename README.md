# The Tiny Physio

A responsive static marketing website for The Tiny Physio. The production build is plain client-side HTML, CSS, JavaScript, fonts, and image assets, so it can be hosted on Cloudflare Pages or Render Static Sites without a persistent web service.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Publish `dist/client` as the static-site output directory.

## Jane booking link

Update `bookingUrl` in `src/siteConfig.js` when the client's Jane booking URL is ready. All booking calls to action use this single value.

## Hosting settings

### Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist/client`

### Render Static Site

- Build command: `npm install && npm run build`
- Publish directory: `dist/client`
