# Design QA

## Evidence

- Source visual truth: `/Users/javedali/Documents/ChatGPT/Tiny Physio/references/homepage-sora.png`
- Source pixels: 819 × 1920 px.
- Browser-rendered implementation: `http://localhost:4173/`
- Primary implementation capture: `/Users/javedali/Documents/ChatGPT/Tiny Physio/references/implementation-homepage-desktop.png`
- Primary viewport: 1280 × 720 CSS px at device scale factor 1.
- Responsive capture: `/Users/javedali/Documents/ChatGPT/Tiny Physio/references/implementation-homepage-tablet.png` at approximately 668 × 867 CSS px.
- Compact mobile capture: `/Users/javedali/Documents/ChatGPT/Tiny Physio/references/implementation-mobile-compact.png` at approximately 668 × 867 CSS px in the narrow in-app browser surface.
- Full hero comparison: `/Users/javedali/Documents/ChatGPT/Tiny Physio/references/design-qa-hero-comparison.png`
- Focused section comparison: `/Users/javedali/Documents/ChatGPT/Tiny Physio/references/design-qa-focused-comparison.jpg`
- State: light theme, homepage, default navigation, desktop and responsive layouts.
- Density normalization: source hero and focused-section crops were resized to 1280 × 720 before being placed directly beside the corresponding 1280 × 720 browser captures. The source is a tall concept board rather than a literal browser viewport.

## Full View Comparison

The final hero comparison restores the approved asymmetrical composition: an ivory field, large Sora promise, cutout portrait over a freeform blush wash, a visible handwritten movement note, a long botanical line asset, and the original logo. The implementation adapts the 819 px-wide concept board into a wider responsive desktop grid while preserving its hierarchy and proportions.

## Focused Region Comparison

- Quick-find section: the flat rectangle was replaced with a broad, irregular blush wave and four evenly separated treatment routes.
- Meet Anjali: the portrait now sits over a freeform wash with the expressive Caveat note and botanical accent.
- Approach: the three principles occupy a second full-width wave rather than a rectangular subsection.
- Services: spacing, thin-line icons, compact descriptions, and the centered route to all services follow the source rhythm.
- Testimonial and booking: the testimonial sits inside a curved blush band and transitions into the closing booking panel with botanical accents.

## Required Fidelity Surfaces

- Fonts and typography: Sora remains the only functional UI and content family. Caveat is reserved for short handwritten movement notes and the footer signature, matching the source without introducing eyebrow text. Heading weight, compact leading, and line wrapping follow the mock.
- Spacing and layout rhythm: desktop uses the mock's alternating editorial fields and broad section transitions. The responsive hero stacks without CTA overlap or horizontal scrolling.
- Mobile density: phone rules reduce header, hero, section, and footer padding; retain two-column treatment/service previews and a three-column approach strip where labels remain legible; primary booking controls remain full-width and touch-friendly.
- Colors and visual tokens: ivory, blush, raspberry rose, aubergine, and muted navy remain consistent with the source. Contrast is maintained on all functional text and actions.
- Image quality and asset fidelity: the original logo and Anjali photography are preserved. The portrait cutout, organic wash, wave band, and botanical sprig are real raster assets rather than CSS-drawn approximations. Phosphor supplies the closest consistent thin-line service icons.
- Copy and content: all required homepage sections and concise approved copy remain present. No eyebrow text or unverified claims were introduced.
- Accessibility and behavior: semantic headings, image alternatives, visible focus rings, reduced-motion support, practical touch targets, responsive navigation, and working anchor/booking links remain intact.
- Browser errors checked: no visible runtime error overlay or broken accessibility tree appeared in the in-app browser; Vite reported no runtime compilation errors during desktop, anchor-state, and responsive inspections.

## Comparison History

### Iteration 1

- P1 organic-shape drift: the deployed page used rounded rectangular portrait panels and flat blush sections instead of the source's irregular washes and waves.
  - Fix: added separate transparent organic-wash and full-width wave assets, then rebuilt the hero, concern, approach, testimonial, and portrait compositions around them.
- P1 handwritten-note mismatch: the movement notes were rendered as italic Sora.
  - Fix: added Caveat only for expressive handwritten notes and increased their scale and rotation to match the mock.
- P1 missing decorative assets: small generic plant icons replaced the source's long botanical line work.
  - Fix: added a transparent botanical sprig asset and placed it in the hero, About, testimonial, and booking transitions.
- P2 portrait treatment: the original photograph was cropped inside geometric containers.
  - Fix: restored the transparent Anjali cutout over the organic wash and tuned desktop and responsive positioning separately.

### Iteration 2

- P2 tablet overlap: the portrait initially moved upward into the secondary hero action.
  - Fix: reset the stacked portrait origin below the CTA row and tuned its responsive scale.
- P2 closing-panel decoration: the left botanical sprig crossed the booking heading.
  - Fix: moved the decoration outside the copy column while keeping a restrained edge accent.
- P3 services action alignment: the services button sat at the left edge rather than centered beneath the grid.
  - Fix: changed the fitted action to a centering flex box.

### Final Pass

The side-by-side hero and focused section comparisons show no remaining actionable P0, P1, or P2 mismatch. Residual differences are responsive adaptations of the tall concept board, not missing visual language.

### Mobile Compact Pass

- P2 mobile density: the previous phone rules stacked every pathway and service into single columns, creating unnecessary scroll and weakening scanability.
  - Fix: reduced mobile spacing, kept treatment/services in two columns, retained a compact three-column approach strip, shortened the hero portrait field, and kept the booking CTA full-width.
- The narrow browser inspection shows the revised hero, quick-find grid, approach strip, services grid, testimonial, booking panel, and footer without CTA overlap or horizontal overflow.

## Follow-up Polish

- P3: replace the temporary booking anchor in `src/siteConfig.js` with the final Jane URL when supplied.

final result: passed
