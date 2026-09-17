# Design QA

## Evidence

- Source visual truth: `/Users/javedali/Documents/ChatGPT/Tiny Physio/references/homepage-sora.png`
- Source pixels: 738 × 2132 px, representing the approved 1440 px wide desktop design at reduced display density.
- Implementation: `http://localhost:4173/`
- Browser-rendered implementation capture: Codex in-app browser capture of `http://localhost:4173/` during this task.
- Desktop comparison viewport: 1440 × 4160 CSS px, device scale factor 1, scaled to 20.5% beside the source for a single combined visual comparison.
- Responsive inspection viewport: approximately 666 × 867 CSS px in the Codex in-app browser.
- State: light theme, homepage, default navigation plus open mobile-menu and booking-anchor states.

## Full View Comparison

The approved source and live implementation were rendered together in one browser comparison view. The implementation preserves the source hierarchy, section order, concise copy, Sora typography, blush and ivory palette, dark booking actions, portrait-led hero, treatment pathways, approach principles, five-service preview, testimonial, closing booking panel, and compact footer.

The implementation is intentionally slightly shorter than the mockup because the user requested less reading and a neater page. This reduces repeated copy without changing the required homepage sections.

## Focused Region Comparison

- Hero: heading weight, line breaks, CTA priority, logo, palette, portrait placement, and decorative line icon were inspected at full browser size.
- Meet Anjali: the portrait crop was inspected separately after the first pass exposed a face-cropping issue.
- Mobile navigation: open and closed states were inspected, including the full-width booking action.
- Booking section: the hero booking action was activated and confirmed to scroll to `#book`.

## Required Fidelity Surfaces

- Fonts and typography: Sora 400–600 is used throughout the interface; the supplied logo remains the only script treatment. Heading scale, compact leading, weights, and wrapping match the selected direction. No Inter or eyebrow text is present.
- Spacing and layout rhythm: desktop grids follow the mockup. Tablet and mobile layouts collapse without overlap or horizontal scrolling. Section spacing remains generous but is deliberately more concise than the source.
- Colors and tokens: ivory, cream, pale blush, dusty rose, aubergine, and muted navy tokens consistently match the source. Text and action contrast remain clear.
- Image quality and asset fidelity: the original supplied Anjali portrait and logo are used. No placeholder portrait, CSS illustration, or handcrafted SVG substitute is present. Interface icons come from the Phosphor icon library and share a consistent thin-line style.
- Copy and content: all seven client-required homepage sections are present. Copy matches the approved concise design direction.
- Accessibility and behavior: semantic headings and navigation, descriptive image alt text, visible focus rings, reduced-motion support, practical touch targets, responsive navigation, and functional anchor links are present.
- Browser errors: no visible runtime errors surfaced in the in-app browser, the accessibility tree rendered completely, and the Vite development process remained clean during interaction testing.

## Comparison History

### Iteration 1

- P2 logo crop: the supplied wordmark was partially clipped at responsive widths.
  - Fix: measured the non-white source bounds and recalibrated the header, mobile, and footer crop positions.
- P2 hero image crop: Anjali's face was outside the visible image area at narrower widths.
  - Fix: removed the forced image height and object-cover crop, then adjusted responsive width and top positioning.
- P2 About image crop: the portrait initially removed the face and later rendered too small.
  - Fix: replaced the forced crop with proportional image sizing and separate desktop/mobile positioning.
- P2 responsive density: the third care principle wrapped to a full-width second row at tablet width, making the section unnecessarily tall.
  - Fix: retained a three-column approach layout at tablet width and reduced horizontal padding.

### Iteration 2

The combined desktop comparison and direct responsive inspection showed no remaining actionable P0, P1, or P2 issues. The adjusted portrait crops, wordmark, responsive approach grid, footer, CTA hierarchy, and section rhythm all rendered correctly.

## Follow-up Polish

- P3: replace the temporary `#book` value in `src/siteConfig.js` with the final Jane booking URL when supplied.
- P3: add final social profile links only when the client provides verified URLs.

final result: passed
