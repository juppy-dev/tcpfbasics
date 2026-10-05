# TCPF Shop-first Horizon Theme Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task with the user's preserved Native method. Steps use checkbox syntax for tracking.

**Goal:** Deliver a custom, merchant-editable TCPF Shopify theme in this directory, with a shop-first homepage, complete template set, reusable product content, and an unpublished protected sample preview.

**Architecture:** Import the latest Horizon foundation and retain native Shopify commerce interfaces. Add focused TCPF editorial/content sections and blocks, wire the completed data library into them, and apply sample behavior across every purchase/rendering path. Build a preview and merchant handoff without publishing the live theme.

**Tech Stack:** Shopify Liquid/theme blocks, CSS, ES modules, Shopify CLI 4.8.4, Admin GraphQL 2026-10, approved local font/logo sources, existing Shopify media.

**Spec:** [Approved theme design](../specs/2026-10-05-shopify-theme-design.md). Dependencies: [brand system](../specs/2026-10-05-brand-system-design.md), [data source](../../data/shopify/catalog.json), [state map](../../data/shopify/state.json), [merchant data guide](../data/04-merchant-guide.md).

**Diagram:** [Theme architecture](../diagrams/shopify-theme-architecture.md).

**Status:** Written specification and implementation plan approved through the review page; Native implementation is in progress. Native execution carries forward from phase 2. A portable [plan review page](tcpf-theme-plan-review.html) presents this plan in the approved TCPF identity.

## Global Constraints

- Work in `/Users/juppy/Projects/tcpf-basics`; preserve brand/data/docs and unrelated user changes. Use a theme feature branch in the requested directory.
- Store `tcpfbasics.myshopify.com`; Philippines first; PHP; RTW primary; bespoke secondary; shop-first homepage.
- Refresh `Shopify/horizon` main at implementation start and record its exact commit/date. Preserve the license. No theme distribution beyond this merchant services engagement.
- Colors: canvas `#F6F1E9`, ink `#26231F`, plum `#5D426F`, muted `#6B625A`; restrained periwinkle/petal surfaces. Existing gold logo remains intact on white.
- Fonts: compressed WOFF2 Fraunces 400/500, softness 25, wonk 0; Instrument Sans 400/500/600; retain licenses and relevant glyphs.
- Keep essential content in Liquid/HTML. Add no general animation framework, CRM/form service, or marketing app. Use native money/variant/cart/contact interfaces.
- Custom filenames use `tcpf-`. Preserve upstream comments and change only integrations required by this design. Use meaningful editor controls; no controls that silently fail to affect rendering.
- Samples remain concept flagged, tracked at zero, and DENY overselling. Product/card/featured/recommendation/search/cart/structured-data paths share the sample decision. Client creative approval is not invented.
- No real inventory/material/measurement/artist/celebrity/dispatch claims are inferred from sample content. Prepare policy/contact slots using verified facts; hide missing optional details.
- Initial products/entries remain DRAFT. Protected preview activation requires source guards, confirmed password protection, and authorization to use the reviewed sample imagery for the demonstration. Final client creative approval remains separate from publishable status.
- No live theme publication, customer messages, or test contact submissions. No tests added/run unless explicitly requested. Evidence here is source inspection, static lint, rendered-page inspection, and authenticated readback; later requested functional/a11y/performance evaluation reports limits.
- Keep temporary CLI query/upload/signing files and secrets outside Git. Stage explicit paths. Atomic Conventional Commits; no attribution.

## Review Focus

1. **Mixed or unexpected sample paths:** a sample appearing in quick add, featured product, search, recommendation, or a pre-existing cart must remain visibly identified and unavailable for checkout; real-only carts keep native behavior. Task 7 owns this.
2. **Missing references and partially populated data:** blank artwork/garment fields, missing related products, and sets with two guides must retain usable product pages and honest information, without zero placeholders or broken links. Tasks 4/5 own this.
3. **Variant and asynchronous native updates:** size/price/availability changes, filter pagination, editor section reloads, and cart updates must retain the native component interfaces and event/DOM contracts. Tasks 3–5/7 own this.
4. **Access limits and uncertain writes:** pages/menu/password setup may need Admin UI; lost theme/data responses require exact-ID/handle recovery and readback rather than duplicate creation or accidental live-theme overwrite. Tasks 1/6/8 own this.
5. **Mobile content and loading:** long headings, two-column cards, measurement tables, dialogs, and LCP images must remain readable and contained; initial content must not be lazy-loaded or hidden behind animation. Tasks 2–5/8 own this.

## File and data interfaces

| Files | Responsibility |
| --- | --- |
| Native Horizon directories + `LICENSE.md` | Recorded foundation; existing platform behavior. |
| `docs/theme/01-source.md` | Revision/import record and upstream integration notes. |
| `assets/tcpf-brand.css`, `snippets/tcpf-brand-assets.liquid`, two WOFF2 assets | Brand tokens, typography, shared presentation and font loading. |
| `sections/tcpf-shop-intro.liquid` | Compact fixed headline and five collection/category routes. |
| `sections/tcpf-featured-collection.liquid` | Curated collection using native product-card blocks. |
| `sections/tcpf-artwork-edit.liquid` | Paired collection/garment/master feature with attribution. |
| `sections/tcpf-story-panel.liquid`, `sections/tcpf-bespoke-invitation.liquid` | Reusable editorial and secondary inquiry sections. |
| `sections/tcpf-collection-intro.liquid` | Default/artwork collection introduction. |
| `blocks/tcpf-included-pieces.liquid`, `blocks/tcpf-size-guidance.liquid` | Product-column content beside native variant/form controls. |
| `sections/tcpf-product-content.liquid` | Full artwork/garment/set/related content below the native commerce layout. |
| `snippets/tcpf-size-table.liquid`, `snippets/tcpf-concept-notice.liquid` | Typed guide rendering and consistent visible sample notices. |
| `sections/tcpf-page-header.liquid`, `sections/tcpf-contact.liquid`, `sections/tcpf-size-guides.liquid` | Editorial page shell, native contact backend, shared guide directory. |
| `templates/*.json`, `config/settings_data.json`, English locale additions | Concrete layouts, editable defaults, translated control messages. |
| `data/shopify/theme-state.json` | Theme/brand-file/page/menu IDs and preview state; no passwords. |
| `docs/theme/02-page-copy.md`, `03-store-setup.md`, `04-merchant-guide.md`, `05-build-report.md` | Prepared content, exact setup, editing guide and acceptance evidence. |

Do not introduce new metaobject definitions. Product artwork is `tcpf.design_concept.value`; garment is `tcpf.apparel_details.value`; its ordered guides are `size_charts.value`; each guide's rows are `measurements.value`. Typed row keys are `size_label`, `bust_cm`, `waist_cm`, `hip_cm`, `length_cm`. Contents use `included_items`; artwork attribution uses `origin`, `attribution`, `review_status`.

## Task 1: Import the Horizon Foundation

**Files:** Native theme directories and license; `docs/theme/01-source.md`; root README; theme-state skeleton.

**Interfaces:** Produces the current upstream source and revision record for all subsequent tasks. Brand/data paths remain available unchanged.

- [x] Read the approved spec/plan and current Git status; create `feat/shop-first-theme` from the reviewed documentation state in this directory.
- [x] Refresh the temporary Horizon checkout through the preferred GitHub workflow; read applicable upstream instructions and license, record SHA/date/version. Import the eight native theme directories and required source/config metadata without replacing project documents or Git history.
- [x] Confirm the imported revision's product/card/gallery/filter/cart/contact interfaces still match the observed 4.2.0 basis. Record any current-main differences before consuming them.
- [x] Write a client-project README and source/import record, including how to identify upstream changes. Create `theme-state.json` with store/API identity and empty preview/setup mappings.
- [x] Inspect native folder presence and imported revision provenance. Expected: all eight folders and license present; existing 45 asset sources/data/documents intact; no borrowed image binary or existing-store theme copied into the new source.
- [x] Commit `chore(theme): import latest Shopify Horizon foundation`.

## Task 2: Apply the Brand and Global Layout

**Files:** Brand CSS/font snippet/WOFF2/license assets; native layout/font/style integration; native header/footer groups and config defaults; English locale additions; theme state.

**Interfaces:** Produces shared `tcpf-` presentation classes and brand assets. Native content/color/font controls remain meaningful. Later sections consume shared spacing/button/type conventions.

- [x] Compress the approved source fonts to WOFF2 retaining needed glyphs; record source/output sizes and licenses. Upload or resolve the unmodified supplied logo through Files with exact-filename/ID recovery; record it separately from the 45 catalog assets.
- [x] Add `tcpf-brand-assets` once in the head after native variable generation. Wire the approved typography and solid palette defaults into native presets and custom classes; avoid duplicate default-font loading. Keep editor font/color selections meaningful rather than masking them with unconditional overrides.
- [x] Configure the retained white-background logo, practical header/menu/search/cart controls, and branded footer. Keep navigation destinations editable, include size/help/policy slots, and expose missing setup in the merchant guide rather than the shopper UI.
- [x] Set visible focus, 44–48 px practical targets, readable body/labels/prices, logical spacing, reduced-motion behavior, and contained grids. Initial content is never held at zero opacity for a reveal.
- [x] Run static `shopify theme check --path /Users/juppy/Projects/tcpf-basics`; compare diagnostics with the unmodified imported source baseline. Expected: no introduced syntax/schema errors; any upstream diagnostic recorded, not silently refactored away.
- [x] Commit `feat(theme): apply TCPF identity and global navigation`.

## Task 3: Build the Shop-first Homepage

**Files:** Five custom homepage sections; `templates/index.json`; scoped section styles; required locale messages.

**Interfaces:** `tcpf-shop-intro` consumes five native collections; `tcpf-featured-collection` consumes a native collection/count and renders Horizon's static `_product-card` block with `closest.product`; artwork/edit sections consume collection and typed artwork references. Produces the selected homepage order.

- [x] Build the compact intro with the exact approved headline, RTW link, and five image-led category collection routes. Use real collection URLs/images, visible labels, and useful empty-editor states.
- [x] Build the curated RTW grid with native product-card block interfaces, four desktop/two mobile columns, names/prices, and View all. Preserve native card IDs/events and merchant order; do not create a parallel quick-add engine.
- [x] Build Amihan/Dapithapon artwork edits using matching masters/garments and explicit sample attribution. Add source-backed story and smaller bespoke sections using merchant text/image/link settings.
- [x] Seed the homepage JSON with the five sections in the approved order and the actual new collection/artwork resources. Reuse accepted imagery; generate no extra product photographs.
- [x] Inspect section schemas, DOM order, responsive image widths/dimensions/loading, and defaults. Expected: category/product browsing near the top; no invented proof or blank broken links; first prominent image eager/high priority, lower images lazy.
- [x] Commit `feat(theme): build shop-first TCPF homepage sections`.

## Task 4: Build Collection and Card Presentation

**Files:** Collection-intro section; `templates/collection.json`, `templates/collection.artwork.json`; deliberate native card/collection integration and scoped styles.

**Interfaces:** Consumes native collection filters/sort/pagination and card interfaces from Horizon. Artwork introduction consumes `collection.metafields.tcpf.artworks.value`. Produces compatible collection/card markup for home/search/recommendation consumers.

- [x] Create concise default and artwork introductions. Optional artwork fields render only when present, with correct origin/attribution; category navigation uses actual collection links.
- [x] Compose the collection templates around Horizon's native main-collection/filter/pagination contracts. Use only available useful filters; retain accessible pagination and an honest empty state.
- [x] Apply the distinctive card typography/crop/spacing and sample labels while preserving native element refs, variant-relevant links, and loading behavior. Ensure all meaningful information is visible on touch without hover.
- [x] Inspect absent/blank reference branches, filter/query URLs, long titles, card column sizing, and image crops in source. Static lint must show no introduced errors. Expected: usable empty collections and no duplicated filtering/card engine.
- [x] Commit `feat(theme): create custom collection and product card presentation`.

## Task 5: Build Product Facts, Sizing, and Artwork Content

**Files:** Included-pieces and size-guidance blocks; product-content section; size-table snippet; `templates/product.json`; scoped styles/optional size-dialog module.

**Interfaces:** Retains native product media/title/price/variant/product-form blocks. New content receives the current Product; size-table receives one typed guide plus a unique ID prefix. Related/set cards use the compatible card interface from task 4.

- [x] Compose the native commerce layout with a prominent gallery, sticky desktop information, and media-first mobile DOM order. Add included-items summary and size guidance beside variants; preserve native price/availability update interfaces.
- [x] Render garment fields `silhouette`, `fit_notes`, `fabric`, `fiber_content`, `stretch`, `lining`, `closure`, `pockets`, `care_instructions`, and `included_items` from the typed garment entry. Empty optional details hide cleanly.
- [x] Render ordered `size_charts` and `measurements` in semantic tables with captions, row/column headers, cm/garment explanation, positive typed measurements, and absent irrelevant columns. Sets show bolero and skirt guides separately. A dialog, if used, keeps a no-JavaScript route and native focus/Escape/return behavior.
- [x] Render artwork title/master/story/origin/attribution and set components bolero-first/skirt-second. Related lists use `outfit` → “Complete the look” and `same_artwork` → “More in this print”, exclude self, and skip unavailable references.
- [x] Inspect field keys against `schema.json`, guide/set ordering against catalog source, null handling, unique IDs and DOM order. Expected: all ten source records fit the same template; no body/model measurements inferred; no zero placeholders. Static lint has no introduced errors.
- [x] Commit `feat(theme): connect product artwork facts and size guidance`.

## Task 6: Build Editorial and Inquiry Pages

**Files:** Page-header/contact/size-guide sections; `page.story.json`, `page.bespoke.json`, `page.contact.json`, `page.size-guide.json`, `page.json`; prepared page-copy and setup documents; theme state.

**Interfaces:** Native Shopify contact backend with unique section-derived IDs; reusable guides selected through typed theme settings. Produces actual page handles/resources where authorized access permits, or exact prepared manual setup where access is unavailable.

- [ ] Prepare source-backed Our story copy and clear Bespoke/Contact/Size guide content. Proposed bespoke steps require client confirmation before live launch; no invented portrait, celebrity credit, address, email, price, or turnaround.
- [ ] Build page layouts using custom editorial sections and native page content. Build the guide directory from reusable guides and task 5's table interface.
- [ ] Build contact/bespoke form modes: required name/email/brief, optional phone, bespoke garment interest and occasion/date. Use visible labels, unique IDs, valid phone input without a restrictive invented pattern, native errors/success/spam protection. Do not submit a test inquiry.
- [ ] Use available authenticated Shopify Admin access for the four pages and menu destinations when possible. Resolve exact handles and record IDs before retrying creation. If access is unavailable, provide exact titles/handles/template suffixes/copy/menu steps in `03-store-setup.md`; report the precise remaining action.
- [ ] Inspect templates/form semantics, missing optional contact details, page URLs, and scope evidence. Expected: coherent Our story/Bespoke/Contact/Size guide templates plus general page; prepared content remains usable without unsupported claims. Static lint has no introduced errors.
- [ ] Commit `feat(theme): add editorial pages and native inquiry forms`.

## Task 7: Complete Sample Guards and Supporting Templates

**Files:** Concept-notice snippet; all relevant native purchase/card/search/cart/featured/structured-data renderers; supporting template styles; English locale messages.

**Interfaces:** Typed sample decision is `product.metafields.tcpf.concept_only.value`. Guards preserve native commerce for real products and use native cart-removal controls; store zero/DENY remains a separate safeguard.

- [ ] Inventory every renderer capable of a purchase action or product structured-data output using `rg`. Apply visible sample notices, sample-price context, unavailable purchase state, and accelerated-checkout/quick-add suppression in product, card, featured, search/predictive, and recommendation paths.
- [ ] Handle any existing concept cart line with a clear notice and native removal action. Suppress checkout while a concept remains; real-only carts retain native behavior. Do not claim this is a server-side checkout extension.
- [ ] Suppress fictional sample Product/Offer metadata in product and featured-product contexts. Retain factual native structured data for real merchandise; avoid duplicate output or fabricated ratings/reviews.
- [ ] Apply coherent brand and useful states to search/cart/password/404/policy surfaces. Keep checkout/customer accounts native. Ensure a page-level protected-preview notice does not interfere with focus or sticky controls.
- [ ] Inspect the complete renderer inventory and conditional branches, including missing flags, mixed carts, unavailable products, and native events. Expected: all sample paths covered, real-product paths preserved, no introduced static lint errors. No tests or form/cart submissions are performed without a request.
- [ ] Commit `feat(theme): guard sample purchases across storefront paths`.

## Task 8: Configure the Protected Preview and Record Rendered Evidence

**Files:** Theme state; source/setup/build report; final JSON resource mappings and needed integration fixes.

**Interfaces:** Consumes completed source guards and template/data resources. Produces an unpublished theme ID/preview URL and actual rendered-source/state observations. Live-theme ID must never be the upload target.

- [ ] Re-read theme list and record the live ID and intended new unpublished preview ID. Upload the complete theme using `shopify theme push --unpublished` or its exact recorded unpublished ID; persist results. Recover an uncertain response by exact ID/name before another creation.
- [ ] Inspect source/metadata results and authenticate any needed page/menu/template assignment. Verify password protection through Admin and an unauthenticated storefront read; do not save or disclose the password. If protection is unavailable, keep the catalog DRAFT and record the exact manual setup required.
- [ ] Once source guards/password and authorized sample demonstration review are established, activate the required 45 entries and ten products and publish only to the required protected channel. Keep `concept_only`, zero tracked inventory, DENY, and client `review_status` pending unless the client explicitly approves it. Read actual status/publication/inventory back.
- [ ] Inspect actual rendered home/category/artwork/product/story/bespoke/contact/size-guide/search/cart/password/404 paths and desktop/mobile presentation without sending messages or exercising purchase submissions. Record screenshots/HTML observations and any visible Liquid errors or missing data; correct required integration problems.
- [ ] Run final static Theme Check and document introduced versus upstream findings. Expected: no introduced syntax/schema errors; guarded, correctly linked protected preview where setup permits; live theme unchanged; factual report of any setup limitation. Do not claim tested conversion/performance/a11y certification.
- [ ] Commit `feat(theme): configure protected TCPF preview and record integration`.

## Task 9: Deliver Theme Editing Guidance and Whole-branch Review

**Files:** Merchant guide/build report/README/project context/source integration record; maintained diagrams; review decisions.

**Interfaces:** Produces a reviewable local theme source, preview/setup evidence, and client editing instructions. Phase 2 data/provenance remains available.

- [ ] Document how to edit homepage order/categories/products, artwork edits, product facts/size guides, set/related labels, page/form copy, native menus/policies, and brand defaults. Identify native resources versus custom sections and explain sample-to-real launch requirements.
- [ ] Record exact upstream revision, modified native integrations, preview ID/URL, resource statuses, source/lint/render/readback evidence, and any precise manual setup or client facts still needed. Update project context and diagrams in the same change.
- [ ] Request one fresh whole-branch reviewer using the executing-plans workflow. Review focus covers native contracts, sample guards, missing fields, scope/write recovery, and mobile/loading. The reviewer uses source/rendered evidence; no tests or store writes. Correct Important/Critical findings in one pass with source/render/readback evidence; record rulings and any deferred minors.
- [ ] Inspect final Git status, tracked theme files, source provenance, and preview state. Expected: complete theme source in the requested directory, no secrets or borrowed assets, actionable merchant handoff, and no unreported review findings. Do not mark live launch or client creative/merchandise approval complete.
- [ ] Commit `docs(theme): deliver merchant guide and build evidence` and preserve the branch/workspace unless the user requests Git integration.

## Plan Self-review and Execution Handoff

Spec coverage: task 1 foundation/license; task 2 visual/global; task 3 shop-first home; task 4 collections/cards; task 5 PDP/data; task 6 pages/forms/resources; task 7 sample/supporting/SEO; task 8 access/protected preview/render evidence; task 9 merchant handoff/review. Native interfaces and typed data keys agree across tasks. All five review-focus conditions have source/render/readback inspection owners. No tests are added to work around the developer's explicit instruction.

**Preserved execution method: Native.** The same agent implements all nine tasks, with one fresh reviewer at the end. The tasks share native component contracts and dependent Shopify setup, so this keeps those changes coordinated. Please review this plan and confirm it captures the intended build before implementation begins, as required by the writing-plans skill.
