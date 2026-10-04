# TCPF Basics — visual identity specification

Version 1.0 · Palette and typography approved through the user's written-system review on 2026-10-05.

## Visual premise

**A warm gallery canvas that gives paintings, clothing, and people room to be seen.**

The mood is expressive, luminous, considered, and welcoming. Warm ivory provides continuity; plum anchors actions and editorial emphasis; periwinkle and petal bring softness. Actual product artwork can contain a wider range of color without requiring the interface to match every print.

The interface palette is our proposal inspired by inspected historical art/garment references. The retained logo's gold is measured separately from the client-supplied asset. This is not an existing TCPF brand manual. See [research image provenance](research/source-register.md).

## Existing logo

**Keep the existing logo intact.** The user supplied a Facebook image, saved as [the original logo source](assets/logo/tcpf-facebook-source.jpg). It is a 2048 × 2048 JPEG with a gold needle/thread and floral mark on white, with no lettering. Do not redraw it, create a new monogram, or claim the descriptive interpretation is an official logo rationale.

Use the supplied gold version on white, preserving the white background and existing generous space. A common interior pixel color is approximately `#CFAA66`; JPEG variations mean this is a sampled approximation, not an official vector swatch. Use monochrome or reversed versions only if the client supplies or approves them. Do not recolor the logo to match plum.

For this review, show the entire uncropped source image in a white square so its built-in clear space remains intact. A vector or transparent master would support more flexible production placement; the JPEG is sufficient for reviewing the identity. Final header and favicon sizes will be checked in the theme against the mark's fine needle detail. A plain text label in the review board identifies the document; it is not a replacement wordmark.

## Approved color system

| Name | Hex | Role | Text pairing |
| --- | --- | --- | --- |
| Canvas | `#F6F1E9` | Primary page and editorial background | Ink or muted ink |
| Ink | `#26231F` | Main text, key icons, selected outlines | Canvas, white, periwinkle, or petal surface |
| Plum | `#5D426F` | Primary actions, links, strong editorial accent | White on plum; plum on canvas |
| Logo gold | `#CFAA66` | Existing logo; optional small decorative identity detail | Do not use for ordinary text on white or canvas |
| Periwinkle | `#B7ACE0` | Occasional editorial surface or artwork frame | Ink |
| Petal | `#E8BACB` | Occasional warm surface/detail | Ink |
| Leaf | `#68744F` | Restrained botanical accent | White on leaf, at full opacity |
| Muted ink | `#6B625A` | Secondary text with ordinary text contrast | Canvas |
| White | `#FFFFFF` | Clean image backgrounds and reversed action text | Ink or plum |
| Stone | `#D8D0C7` | Decorative dividers only | Do not use as required control boundary |

Keep most interface area neutral. Use plum consistently for the primary shopping action. Retain gold primarily in the logo, rather than expanding it into metallic gradients or a separate luxury claim. Choose one pastel surface per editorial grouping; avoid cycling all accents across adjacent cards. Leaf is optional and should remain a small detail.

## Measured text contrast

Ratios below were calculated from the proposed solid hex colors with the WCAG relative-luminance formula. They are rounded for display; pass/fail uses the unrounded result. The [W3C text-contrast guidance](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html) sets a minimum of 4.5:1 for ordinary text and 3:1 for qualifying large text at AA.

| Foreground / background | Ratio | Ordinary text |
| --- | --- | --- |
| Ink / canvas | 13.91:1 | Pass |
| Muted ink / canvas | 5.31:1 | Pass |
| White / plum | 8.49:1 | Pass |
| Plum / canvas | 7.55:1 | Pass |
| Ink / periwinkle | 7.44:1 | Pass |
| Ink / petal | 9.17:1 | Pass |
| White / leaf | 5.00:1 | Pass |
| Periwinkle / canvas | 1.87:1 | Fail |
| Petal / canvas | 1.52:1 | Fail |
| Logo gold / canvas | 1.95:1 | Fail |

Pastels therefore serve as surfaces, not text on canvas. Gold is reserved for the existing logo and decoration, not small text or necessary interface indicators. Logos have a specific exception in the cited text-contrast criterion; this does not make gold suitable for ordinary labels. Do not reduce text opacity without checking the composited color. Avoid text directly over a painting or photo unless an opaque surface or verified treatment maintains contrast across the actual image. These calculations do not certify a complete website.

## Typography

### Display: Fraunces

Use **Fraunces** for major editorial headings, collection introductions, and short artwork titles. Recommended weights: 400 and 500. Suggested variable settings: optical sizing automatic, softness 25, wonk 0. The aim is expressive, warm letterforms with enough restraint to let the paintings lead.

Use sentence case, close tracking around `-0.02em`, and line height 1.15–1.25. Begin around 40–48 px on mobile and 64–88 px on larger screens for the main headline; tune to actual content and available width. Smaller headings should use a more comfortable line height. Avoid long all-capital serif blocks and very thin weights.

### Reading and shopping: Instrument Sans

Use **Instrument Sans** for body text, navigation, prices, product details, form fields, buttons, and labels. Recommended weights: 400 for reading, 500–600 for emphasis; width axis 100.

Begin at 16–18 px for body text, line height 1.5–1.65, and roughly 55–70 characters per editorial line. Labels may be smaller when readable, but essential product information should retain body-sized clarity. These sizes are design recommendations, not WCAG mandates.

Use a simple serif fallback for Fraunces and a system sans-serif fallback for Instrument Sans. Keep licenses with font distributions. Both families use the SIL Open Font License: [Fraunces](https://raw.githubusercontent.com/google/fonts/main/ofl/fraunces/OFL.txt), [Instrument Sans](https://raw.githubusercontent.com/google/fonts/main/ofl/instrumentsans/OFL.txt).

Locally saved fonts in [assets/fonts](assets/fonts/) make the review board independent of external font services. Phase 3 will select appropriately compressed subsets and loading strategy rather than shipping review-board TTF files by default.

## Composition and brand signatures

1. **Painting beside garment:** show the relationship through a purposeful pairing of artwork detail and clothing image. This requires correctly linked artwork, not an unrelated decorative image.
2. **Small artwork captions:** use clear artist/title/context captions like a gallery label, kept close to their image. They support understanding without overwhelming product facts.
3. **Controlled asymmetry:** a larger image can sit beside a compact text block; maintain readable order and alignment on mobile.
4. **Soft editorial color fields:** a periwinkle or petal surface can frame an artist story or collection introduction. Product grids remain calm.
5. **Visible material detail:** include real-looking fabric, sleeve structure, print scale, and construction views in the image sequence.

These signatures belong to the visual direction. They are not a requirement to build every possible section or decorative treatment.

## Layout and interface principles

- Use a consistent spacing rhythm based on 8 px, with comfortable image/text separation. Keep mobile page gutters approximately 20–24 px as a starting point.
- Keep product cards image-led: garment name and price visible, consistent image crops, no decorative sticker clutter.
- Use a restrained primary button: solid plum, white text, a readable label, modest radius. Provide distinct hover, focus, disabled, and loading states in the theme design.
- Use line icons of consistent weight for practical controls. Meaningful status must also have text.
- Use plum or ink for focus indicators and required control boundaries; decorative stone dividers are not sufficient for those roles.
- Keep text as real text. Do not bake prices, descriptions, or action labels into images.
- Preserve keyboard access, logical heading order, visible focus, useful alternative text, and reduced-motion preferences in the eventual theme.

## Motion

Recommended motion is brief and quiet: subtle image reveals or editorial transitions where they support orientation. Keep purchase controls immediate. Do not make essential content depend on animation, hover, or a scroll effect. No autoplay hero video is required by this identity.

## Application checks

Review every new application for logo integrity, readable text, coherent palette roles, consistent typography, product clarity, and honest image attribution. The supplied gold mark appears in the review board beside the proposed type and colors so their compatibility can be reviewed together.
