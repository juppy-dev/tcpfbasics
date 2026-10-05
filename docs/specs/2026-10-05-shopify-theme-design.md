# TCPF Basics — custom Horizon theme design

2026-10-05 · Draft for written review. Theme implementation starts after this specification and its implementation plan are approved.

## Intent and confirmed choices

Build a distinctive Shopify storefront for the client's own store, with the theme source in this directory. Ready-to-wear shopping is the primary journey; bespoke inquiries are secondary. Preserve the existing logo and accessible price presentation. Use the approved **Contemporary Wearable Gallery** identity, with a **shop-first homepage** selected by the user. Launch planning is **Philippines first**, in PHP.

Success means shoppers can find a garment quickly, see what is included, understand its print and fit, and use native Shopify commerce when a real product is available. The merchant can edit products, reusable stories/specifications/measurements, collections, page content, and editorial sections without changing code. The demonstration catalog remains visibly identified and unavailable for purchase.

The [brand system](2026-10-05-brand-system-design.md), [visual identity](../brand/05-visual-identity.md), [data design](2026-10-05-shopify-data-catalog-design.md), and [completed import report](../data/03-import-report.md) are the source. See the maintained [theme architecture](../diagrams/shopify-theme-architecture.md) and [data relationships](../diagrams/shopify-data-model.md).

## Foundation and source import

- Import the latest `Shopify/horizon` main revision at implementation start, record its exact SHA/date, and preserve its license. Read-only research observed 4.2.0 at `5acd1b6b66c02f61d3216e3adace5dd9e0404fc9`; refresh before importing.
- Place its native `assets`, `blocks`, `config`, `layout`, `locales`, `sections`, `snippets`, and `templates` in this directory while preserving existing brand/data/documents and Git history.
- Use Liquid, native theme blocks, CSS, and small ES modules. Keep Horizon's variant, product form, cart, search, filtering, pagination, and dialog interfaces where applicable. Custom presentation and content components use those interfaces.
- Prefix custom components and assets with `tcpf-`. Change upstream files only for deliberate integration, brand behavior, and complete sample guards; document those changes for future upstream updates. Do not refactor unrelated upstream code or remove its comments.
- Develop and upload an unpublished preview theme. Keep the current live theme intact until a separate client launch decision. No theme publication is included in this design approval.

## Visual system

Use canvas `#F6F1E9`, ink `#26231F`, plum `#5D426F`, muted ink `#6B625A`, and restrained periwinkle/petal editorial surfaces. Gold remains in the supplied logo. Use the entire original white-background mark on white, without redrawing, recoloring, or substituting a monogram.

Self-host compressed WOFF2 fonts derived from the approved, licensed Fraunces and Instrument Sans sources. Retain relevant Latin/Filipino glyph coverage. Fraunces 400/500, softness 25 and wonk 0, carries headings; Instrument Sans 400/500/600 carries shopping information. Use real text, calm spacing, image-led cards, readable prices, modest button corners, and strong focus indicators.

Distinctive details are paired painting/garment compositions, small artwork captions, controlled asymmetry in editorial sections, and an occasional colored story panel. Product browsing stays orderly. Motion is brief and optional; the opening content and purchase controls appear immediately.

## Global navigation and footer

Primary navigation: **Shop**, **Our story**, **Bespoke**, **Contact**. Shop exposes Ready-to-wear and five garment categories. Search and cart remain visible practical controls. Desktop navigation and the mobile drawer share the same destinations and support keyboard use. No localization selector is needed for this Philippines-first presentation unless native enabled markets later require one.

The footer contains the retained identity, useful shopping/help links, size guidance, contact, and native policy links when policies exist. Do not invent delivery promises, addresses, payment guarantees, or policy text. Shopify's native menu resources are preferred; section link settings provide merchant editing where access/setup requires it.

## Homepage — shop-first composition

1. **Compact introduction and category browsing.** Use the approved headline “Original art. A new way to wear Filipiniana.” with short supporting copy and an obvious Ready-to-wear link. Five image-led category links occupy the opening shopping area. Keep this opening compact enough that product browsing begins near the top, including on mobile.
2. **Ready-to-wear edit.** A curated native collection grid with garment names, PHP prices, clear product links, and a View all link. Use four columns on large screens and two on mobile. Choose products explicitly through the collection/order controls; do not label samples as bestsellers or manufacture urgency.
3. **Artwork edits.** Two larger Amihan Garden and Dapithapon collection features pairing garment photography with the correct artwork master and concise captions. These provide another route into the same catalog.
4. **Artist and brand introduction.** A concise, sourced introduction to Tisha Chavez, printed artwork, and the Naga City business. Link to Our story. Use an artwork/garment composition rather than an invented founder portrait.
5. **Bespoke invitation.** A smaller section with a clear inquiry link. Explain that custom work starts with a conversation; no fabricated price, turnaround, or availability guarantee.

Merchant controls: introduction text/links, category collection pickers, featured collection/count, artwork/collection references, editorial images/text, section order, and bespoke copy/link. No carousel, autoplay hero video, popup, or hover-only information is required.

## Collection templates

The default collection template combines title, concise description, category navigation, native sort/filter controls, and the product grid. Enable only useful native filters actually available in the store. Keep pagination accessible; do not require infinite scroll. Empty collections have an honest empty state and a route to Ready-to-wear.

An artwork collection variation adds the referenced master, AI or real-work attribution, short story, and a paired garment image above the same commerce grid. Read `collection.metafields.tcpf.artworks.value`; hide unavailable content cleanly. Collection images/copy/SEO/membership remain native. Do not repeat a full brand manifesto above every grid.

## Product template

Desktop uses a prominent media area and a readable, sticky information column; mobile places media before the main product information in DOM order. Preserve all four images with useful thumbnails/navigation, deliberate crops, and sleeve/hem visibility.

The shopping column contains title, native price, a concise description, explicit included pieces, Size choices, nearby size guidance, quantity, and the native product form. Real products use native selected-variant price/availability and out-of-stock behavior. Sample products replace purchasing with a visible concept notice and unavailable state; hide accelerated checkout and quick add for samples.

Custom information components:

| Component | Source | Shopper purpose |
| --- | --- | --- |
| Garment facts | `tcpf.apparel_details` | Fabric, lining, stretch, closures, pockets, fit, care, contents. |
| Size guidance | Garment → guide → measurement rows | Typed garment measurements in cm; ordered XS–XL; irrelevant values omitted. |
| Artwork story | `tcpf.design_concept` | Correct master, title, story, origin, attribution, palette/motif. |
| Set contents | `tcpf.set_components` | Bolero then skirt, with links and clear exclusions. No automatic bundle-stock synchronization. |
| Related pieces | `tcpf.related_products` + context | “Complete the look” for outfit pieces; “More in this print” for alternatives. |

Show a short included/excluded summary beside buying decisions. More detailed facts can use native disclosure elements. Size guidance can be a focus-managed dialog with a usable inline/no-JavaScript route. For sets, show two clearly named guides. Explain garment circumference rather than implying body measurements. Never infer model dimensions from AI photographs.

Core descriptions/prices/options remain native and server rendered. Shared fields use typed `.value` references. Missing references hide optional story/recommendation sections; missing essential real-product facts must be surfaced for merchant correction before launch. Recommendations exclude the current product and render only valid references.

## Page templates

| Template | Contents and controls |
| --- | --- |
| Our story | Brand/founder introduction, printed-art relationship, sourced creative context, image/text sections, RTW link. No unsupported celebrity feature or AI founder portrait. |
| Bespoke | Clear inquiry proposition, proposed discussion/design/quote/production steps for client confirmation, example artwork/garment imagery, native Shopify contact form. |
| Contact | Visible field labels, name/email/message, optional phone, honest success/error states; optional client-supplied contact details and Naga City location text. |
| Size guide | Merchant-selected reusable guides, garment-measurement explanation, accessible tables and links to shopping. |
| General page | Branded native page content for future FAQs and help; avoid inventing operating policies. |

Bespoke form: required name, email, and brief; optional garment interest, occasion/date, and phone. Use Shopify's contact backend, unique field IDs, meaningful error associations, and a clear submit label. Retain native spam protection. Do not send test inquiries without explicit user authorization. No external form service or CRM is needed.

Search, cart, password, 404, and policy rendering receive coherent brand treatment and sample behavior. Shopify checkout and customer-account areas remain native platform surfaces.

## Sample safeguards and protected preview

Read the typed boolean `product.metafields.tcpf.concept_only.value`. Apply the decision consistently in product pages, product cards/quick add, featured products, recommendations, search/predictive search, and cart rendering. Hide accelerated checkout for samples. Display sample price/imagery notices and prevent sample purchase actions; retain tracked zero stock and DENY policy in the store as a separate safeguard.

For a mixed cart, identify and remove any concept line through the native cart controls; suppress checkout while any concept item remains. A real-only cart continues through native commerce. The theme guard is presentation behavior, not a server-side checkout extension; zero sample stock and DENY remain essential.

Do not emit fabricated Product/Offer availability, ratings, reviews, or real-painting authorship for samples. Guard Horizon's native product structured-data output wherever it can render sample products, including featured-product sections.

Products and metaobjects stay DRAFT during the initial build. Before protected preview publication, verify store password protection, inspect the source for all guard paths, and obtain the image/content review needed for that demonstration. Then activate the required entries/products and publish only to the intended protected preview channel; inspect the actual rendered paths before client handoff. Keep the concept flag, zero stock, and DENY. Never silently promote a reviewed AI sample to verified merchandise.

## CRO, SEO, performance, and accessibility

**CRO:** Clear RTW navigation; product discovery in the opening homepage area; visible prices and set contents; fit help near sizes; meaningful related-piece labels; minimal forms; useful empty/error states. Trust comes from actual artwork/facts and the founder story. No fictional reviews, scarcity, discounts, or celebrity proof. Conversion uplift is not claimed before post-launch measurement.

**SEO:** One logical main heading per page, semantic structure, native canonical/title/description/social metadata, useful internal links and alt text, and factual structured data for real merchandise. Avoid duplicate product structured data. Draft/protected sample content is not a public SEO launch. Native policy content and substantive page copy require client facts.

**Performance:** Essential content is Liquid/HTML. Use Shopify responsive image filters, explicit dimensions and `sizes`; eagerly load the initial prominent image with high fetch priority and lazy-load below-fold images. Do not conceal initial content behind animation. Scope new scripts/styles to where they are needed; add no general animation framework or third-party marketing app. Self-host WOFF2 fonts with restrained loading. Report actual observations and limits rather than promise a Lighthouse score or a field-data outcome. [Shopify performance guidance](https://shopify.dev/docs/storefronts/themes/best-practices/performance).

**Accessibility:** Target WCAG 2.2 AA with semantic landmarks, sensible heading/DOM order, visible focus, useful labels/errors, keyboard-operated menus/dialogs/gallery, focus return, announced variant/cart updates, reduced motion, adequate contrast, and unobscured controls. Aim for 44–48 px practical touch targets. Measurement tables retain captions and header associations and use contained horizontal scrolling when necessary. No color-only or hover-only meaning, hidden required information, or disabled page zoom. [Shopify accessibility guidance](https://shopify.dev/docs/storefronts/themes/best-practices/accessibility).

## Access and merchant setup

Theme CLI access is confirmed. The current stored Admin app lacks content, navigation, and theme scopes; it has the data/catalog scopes used in phase 2. Pages, menus, policies, and password settings may need the authenticated Shopify Admin interface or additional supported access. Prefer completing authorized setup through available tools; if that is unavailable, provide exact manual steps and prepared page content, not a vague login request. Do not request secrets in chat.

Reuse the completed data library; no additional metaobject system is planned. The 17 retained old Files are excluded from the new theme. Three have existing-theme references; do not erase or edit unrelated old themes as part of this build.

## Acceptance and handoff

- Root directory contains the recorded Horizon foundation and complete custom theme source, with brand/data/documents preserved.
- Homepage, default/artwork collection, product, Our story, Bespoke, Contact, Size guide, and general-page templates implement the selected hierarchy and reference the new catalog correctly.
- Merchant controls are identifiable in the editor, native resources remain native, and shared data changes appear where intended. Empty/missing-reference states are handled.
- Commerce interfaces remain native; every sample route and cart path carries the appropriate notice and guard. Initial product/content state stays DRAFT until the protected-preview conditions are met.
- Source, rendered-page inspection, and authenticated state readback document implementation. No automated tests are added or run unless the user explicitly requests testing/verification. Any later requested accessibility/performance/functional evaluation reports its environment and limits.
- An unpublished theme preview, editing guide, source revision record, and precise remaining merchant setup are delivered. No live theme launch occurs as part of the build handoff.

## Review gate

The user selected Philippines-first planning and the shop-first homepage. This written specification is the concrete design for review required by the **superpowers:brainstorming** skill. Approval permits writing the implementation plan; approval of that plan precedes theme code changes. An HTML review surface will summarize this design using the already-approved TCPF visual system.
