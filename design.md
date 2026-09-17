# The Tiny Physio — Design Direction

## Purpose

The website is an informational, static marketing site for The Tiny Physio. Its primary conversion goal is to help prospective patients understand the practice and continue to the Jane booking experience.

## Brand Character

- Warm, reassuring, inclusive, and clinically trustworthy.
- Personal and human rather than institutional.
- Refined editorial presentation with generous whitespace.
- Feminine warmth without excluding visitors seeking general orthopaedic, headache, jaw, or movement care.

## Visual Language

- Warm ivory base with blush, dusty rose, and soft cream surfaces.
- Deep aubergine or navy for primary text and high-contrast calls to action.
- Use Sora across display headings, navigation, body copy, and buttons. Create hierarchy through scale, weight, spacing, and line length rather than switching font families.
- Preserve the supplied handwritten logo and use a restrained handwritten accent face only for expressive brand notes such as “More movement for a brighter you” and “Movement can change so much.”
- Organic curves and restrained line illustrations may support the photography.
- Use Anjali's supplied portrait and the existing The Tiny Physio logo as the primary brand assets.
- Prefer spacing, typography, alignment, and subtle dividers over excessive cards, borders, or shadows.

## Typography Rule: No Eyebrow Text

Do not use eyebrow text anywhere in the design. This includes small labels, kickers, overlines, category text, or uppercase pre-headlines placed above a heading, such as “OUR SERVICES,” “MEET ANJALI,” or “CARE THAT STARTS WITH LISTENING.”

Section headings must stand on their own. If context is necessary, express it through the heading itself, the supporting copy, navigation, or layout—not through eyebrow text.

## Typography System

- Primary family: **Sora**.
- Do not use Inter anywhere in the website.
- Use weights 400, 500, and 600; reserve 600 for headings and important actions.
- Use subtle negative letter spacing on large headings and normal tracking for body copy.
- Keep hero and section headings clean and compact, with controlled line breaks and approximately 1.0–1.1 line height.
- Avoid decorative high-contrast serifs, overly soft editorial fonts, and additional script fonts.
- The existing logo artwork is exempt from the type system and remains unchanged.
- Handwritten accent family: **Caveat**, reserved for short decorative movement notes only. It must not be used for navigation, headings, buttons, body copy, labels, or eyebrow text.

## Content Density

The homepage must communicate through hierarchy, imagery, and short phrases rather than explanatory paragraphs. Visitors should be able to understand the practice by scanning headings, service names, and calls to action.

- Keep the hero supporting copy to one short sentence.
- Prefer headings that carry the message without additional setup text.
- Keep homepage paragraphs to two short sentences at most.
- Use one-line descriptions for treatment pathways, care principles, and service previews.
- Remove repeated explanations when a later section covers the same idea.
- Use one primary action per section and omit secondary links that do not advance the visitor's decision.
- Preserve whitespace; do not fill open areas simply because space is available.

## Landing Page Content

The homepage follows the section order specified in `Website Layout.docx`:

1. **Welcome and Hero** — one clear promise, concise supporting copy, a primary Jane booking action, one optional secondary action, and Anjali's portrait.
2. **What I Treat** — a compact, visitor-led quick-find strip that helps people recognize the concern bringing them to the site. Use short labels and minimal supporting text rather than cards.
3. **Meet Anjali** — a two-sentence introduction to Anjali and a link to the full About page.
4. **My Approach** — three principles expressed as one concise line each: listening to the whole person, evidence-informed treatment, and a plan tailored to the individual.
5. **Services Preview** — a structured overview of Pelvic Health; Pregnancy and Postpartum; TMJ and Jaw Pain; Headaches and Migraine; and Orthopaedic Physiotherapy. Give each service no more than one short line and provide one route to the full Services page.
6. **Testimonials** — use a real client quotation only when it has been approved for publication.
7. **Book Now** — a strong closing call to action that continues to the Jane booking experience.

The global header contains the logo, Home, About, Services, Resources, FAQ, and a prominent booking action. The footer should repeat essential navigation and contact information without introducing a new primary goal.

### Combined Landing Page Direction

- Use the portrait-led, asymmetrical hero and generous organic shapes from concept 1.
- Use the calm, visitor-led “What brings you here?” treatment pathway and strong closing booking panel from concept 2.
- Carry concept 1's refined service illustrations and Meet Anjali presentation through the middle of the page.
- Preserve concept 2's reassuring pacing and testimonial treatment.
- Keep the full page spacious and editorial even with all seven required sections.

## Interaction and Accessibility

- Buttons and links must have clear hover and keyboard-focus states.
- Interactive targets should be at least 44px high or wide where practical.
- Body copy should render at a comfortable 16px-equivalent size with generous line height.
- Maintain at least WCAG AA text contrast.
- Respect `prefers-reduced-motion`; motion should remain subtle and non-essential.
- The layout must work without horizontal scrolling at 375px, 768px, 1024px, and 1440px widths.

## Static-Site Constraints

- The production site must build to static HTML, CSS, JavaScript, and optimized image assets.
- It must be deployable to Cloudflare Pages or Render Static Sites without a persistent server.
- Booking buttons will use a configurable Jane URL when it is supplied.
- Avoid runtime features that require a database, server process, or paid hosting tier.

## Avoid

- Eyebrow text or pre-headlines of any kind.
- Low-contrast pink text on pink backgrounds.
- Generic hospital-blue styling.
- Stock photos that replace or misrepresent Anjali.
- Dense card grids, cards nested inside cards, or pill shapes on every element.
- Unverified medical claims, fabricated credentials, awards, testimonials, or outcomes.
- Decorative animation that interferes with reading or booking.
