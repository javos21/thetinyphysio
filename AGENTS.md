# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## The Tiny Physio design decisions

- The production deliverable must remain a static website suitable for Cloudflare Pages or Render Static Sites. Do not add a database, server-rendering dependency, or required web-service runtime.
- Use Sora for all website UI typography. Do not use Inter or eyebrow text.
- Keep homepage copy concise and scannable; avoid long explanatory paragraphs and repeated service descriptions.
- Preserve the supplied The Tiny Physio logo and Anjali photography as the primary brand assets.
- Keep the Jane booking URL centralized so it can be replaced when the client account is configured.
- Treat `references/homepage-sora.png` as the homepage visual source of truth. Preserve its broad organic portrait washes, full-width blush wave sections, line-art botanical accents, and spacious editorial rhythm rather than substituting rounded rectangular panels.
- Use Caveat only for the short expressive handwritten movement notes shown in the approved homepage mock. Keep Sora for all functional UI and content typography.
