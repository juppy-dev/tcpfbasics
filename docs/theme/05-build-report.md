# TCPF theme build report

2026-10-05 · Protected preview and merchant handoff complete; independent source review and final page observations recorded.

## Source and preview

- Horizon 4.2.0, revision `5acd1b6b66c02f61d3216e3adace5dd9e0404fc9`, refreshed before import. Eight native directories and the license remain at the root.
- New unpublished theme **188681584822**, TCPF Shop-first Preview. [Preview](https://tcpfbasics.myshopify.com/?preview_theme_id=188681584822), [editor](https://admin.shopify.com/store/tcpfbasics/themes/188681584822/editor).
- Existing live theme **188630696118** remains live and was not an upload target. No live theme publication occurred.
- Original logo File **46391212769462** is READY. Two licensed WOFF2 assets total 146,412 bytes. No borrowed image binary is present in the new theme source.

## Implemented source

Eleven custom TCPF sections, two product blocks, three shared snippets, brand CSS, and licensed font assets. The source composes native Horizon cards, filters, pagination, gallery, variant/price updates, and real-product commerce with custom presentation and data content.

Templates: shop-first home; default/artwork collections; product; Our story, Bespoke, Contact, Size guide and general page. Search, cart, password, 404 and native policy surfaces carry the brand and appropriate sample behavior.

The five homepage sections are introduction/category routes, an eight-product RTW edit, two artwork edits, brand story, and a secondary bespoke invitation. Product content uses the existing artwork/garment/guide/row libraries, included-item summaries, ordered set components, and matching references. Duplicate set components are omitted from additional related cards.

## Store configuration and authenticated evidence

- 10 ACTIVE concept products and 45 ACTIVE content entries, after source guards, user-authorized sample demonstration, and confirmed password protection.
- 50 variants remain tracked at zero available/on-hand inventory with DENY overselling. All ten concept flags remain true.
- Products publish to Online Store only: 10 Online Store, 0 Point of Sale, 0 Shop. All eight required collections are published to the protected Online Store channel.
- Five artwork review statuses remain **pending**. Protected demonstration approval does not invent final client creative approval or verified merchandise.
- Four native page IDs resolved; three new pages created, the existing empty Contact reused. All have the intended suffix and are published for the protected preview. Two native menus are created and selected in the new theme. The two artwork collections have the artwork suffix.
- Admin Preferences explicitly showed password restriction on, enforced for this development store; anonymous HTTP read returned `/password`. The password was neither saved nor disclosed.
- Native contact forms retain Shopify’s backend. Admin confirmed hCaptcha protection on contact forms. No inquiry or purchase submission was performed.

Snapshots in `data/shopify/snapshots/`: before/after page/menu setup; catalog before/after activation; content after activation; publication readback; collections after publication; final combined catalog/content/page/menu readback. `theme-state.json` maps exact preview/page/menu/logo IDs. Mutation receipts contain response evidence, not signed targets or credentials.

## Integration corrections

1. Shopify rejected arbitrary relative URL schema defaults despite static Theme Check accepting them. URL values now live in concrete template/group settings. The same preview ID was retried successfully; no duplicate theme was created.
2. Six new collections were initially unpublished, while the two reused ones were visible. Fresh readback identified the missing publication flags; all eight now resolve on the protected channel.
3. Theme `metaobject_list` selections serialize as **handles**, not Admin GIDs. The native picker exposed the initial unavailable values. All five guides were selected, saved, pulled back, and copied to the source as handles; their tables appeared in both desktop and mobile previews.
4. The homepage supplies its own H1, so the native hidden store-name heading is now a non-heading span. Sample cards use Not for sale rather than Sold out. Sample compare-at presentations are suppressed.

## Rendered observations

Native Arc storefront and Shopify editor views were inspected in this session. Screenshots were reviewed in the conversation; screenshot binaries are not claimed as repository artifacts.

| Surface | Observed |
| --- | --- |
| Homepage | Five category routes, eight native cards with names/sample prices, correct artwork edits, story and bespoke sections. Desktop and mobile presentation observed. |
| Default collection | Ten products, price labels, category navigation, native filters and sorting. |
| Artwork collection | Amihan master paired with a matching garment, correct attribution/story, three products and native browsing controls. |
| Set product | Gallery, native sizes/price, explicit included pieces, unavailable sample state, shared facts/artwork and ordered component cards. |
| Set size disclosure | Separate bolero and skirt tables, XS–XL, relevant columns only, positive cm values and garment/sample explanations. |
| Size-guide directory | Five native selected guides and their tables; readable contained mobile table observed. |
| Bespoke | Dapithapon outfit inspiration panel and explicit AI/concept caption; required name/email/brief and optional phone/garment/date, visible labels and native submit button. No submission. |
| Contact | Required name/email/message, optional phone, visible labels and native submit button. No submission. |
| Our story | Tisha/Naga introduction, painted-fashion story, attributed Hiraya artwork and bespoke invitation. |
| Search | Amihan search returns three sample cards with sample prices and Not for sale labels. |
| Cart | Native Your cart is empty heading and recommendation area; this observation does not exercise populated/mixed carts. |
| Password | Original art headline and protected-preview/sample explanation in TCPF Shop-first Preview. |
| 404 | Page not found heading and branded footer in the preview. |

## Static lint and evaluation limits

Latest static Theme Check: **0 errors, 6 unchanged upstream warnings** (header setting count and five unused divider documentation parameters). The local lint did not replace Shopify upload validation; server acceptance was checked separately.

No automated tests were added or run. Earlier implementation followed the then-active developer restriction; the final template-only correction used static lint, upload acceptance and rendered observation, consistent with the current guidance for low-impact changes. No contact/cart/checkout submissions, mixed-cart exercise, automated accessibility audit, performance benchmark, conversion experiment, or certification is claimed. Real merchandise paths and mixed-cart behavior have source inspection; any later requested functional evaluation must report its environment and results.

## Before live launch

Client creative and merchandise approval, actual stock/measurements/material/care facts, verified artwork attribution, contact details, bespoke process, operating policies and commercial Shopify setup remain client decisions. The development store’s protected preview is not a live launch. Independent source review found no Critical/Important issues. Its one Minor finding, missing bespoke example imagery, was completed using an existing section and attributed sample asset. See [review and decisions](06-review-and-decisions.md) for scope, evidence limits and execution rulings.

## Hero and header revision — 2026-10-05

The user approved the “From canvas to clothing” direction for the requested hotspot hero and header refresh. This revision is on `feat/hotspot-hero-header`, tracked by Linear DEV-201 and DEV-202.

### Delivered

- A new homepage hero pairs an oversized plum Fraunces heading with the Amihan outfit and its overlapping artwork. The product and artwork hotspots disclose live product information and the shared artwork story; ready-to-wear shopping remains the primary action, with silhouette categories immediately below.
- Product, photograph, destination collections, copy and hotspot positions are editable in the theme editor. Artwork content comes from the existing product reference. The product-page artwork has a stable anchor for the collection-link fallback.
- Scoped JavaScript handles disclosure state, focus, Escape, closing and section teardown. Without JavaScript, the detail content and destination links remain available. Mobile cards flow below the photograph; motion respects the reduced-motion preference.
- The header retains the original logo and adds TCPF Basics typography, centered desktop navigation, plum accents, visible disclosure controls and a Shop menu with two category columns and an artwork/outfit feature. Native Horizon search, account, cart, drawer and sticky-header code is retained.
- Existing Shopify CDN imagery is reused. No raster originals or additional frameworks were added. Sample labels and purchase guards remain in place.

### Preview and observations

Uploaded successfully to unpublished theme **188685779126**, **TCPF Hero and Header Preview**: [preview](https://tcpfbasics.myshopify.com/?preview_theme_id=188685779126), [editor](https://admin.shopify.com/store/tcpfbasics/themes/188685779126/editor). At this revision, Shopify listed **188630433974** as live; that theme was not an upload target. Earlier theme IDs above describe the original handoff.

Native Arc storefront and Shopify editor observations covered the desktop composition, both hotspot cards, focus moving to card headings, Escape closing a card and returning focus, the final two-column Shop dropdown, mobile hero reflow, the mobile product card beneath the photograph, mobile artwork disclosure and the native mobile navigation drawer. The category heading was refined to “Find your silhouette.” Screenshots were reviewed in the conversation and are not repository artifacts.

Both uploads used `shopify theme push --strict`. The final upload completed successfully with **0 Theme Check errors and 6 unchanged upstream warnings**, and Shopify returned the theme role as `unpublished`. No automated tests, performance benchmark, screen-reader audit or cross-browser certification was performed. These observations do not replace the remaining launch evaluation recorded in Linear. Merchant guidance, the design amendment and the existing architecture diagram were updated together.
