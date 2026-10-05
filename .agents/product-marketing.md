# TCPF Basics — product marketing context

Updated: 2026-10-05. Brand system approved; phase 2 complete; shop-first phase 3 specification for written review.

## Confirmed business context

**Product:** Modern Filipiniana clothing carrying original paintings/artwork as prints.

**Business:** TCPF / Tisha Chavez Painted Fashion, owned and operated by Tisha Chavez. Naga City base supplied by the user.

**Business model:** Clothing ecommerce with bespoke inquiries. Ready-to-wear shopping leads the new website; bespoke is secondary. This priority was explicitly selected by the user.

**Store:** `tcpfbasics.myshopify.com`; PHP currency confirmed by a read-only Shopify CLI query. The current catalog contains ten unpublished draft AI sample products; no real merchandise is claimed.

**Catalog decision:** Replace all six existing products. The user identifies borrowed imagery and asks for ten new sample products, each with 3–5 original AI-generated images. Create original demonstration concepts as drafts; do not attribute generated artwork to Tisha or represent invented specifications as verified inventory.

**Phase 2 approach:** The user selected matching separates (3 boleros, 2 sets, 2 skirts, 2 dresses, 1 top) and a reusable artwork, garment-detail, and structured sizing library. The user approved the [data/catalog design](../docs/specs/2026-10-05-shopify-data-catalog-design.md) and [sample brief](../docs/data/02-sample-product-briefs.md) with “looks good”. The user approved Native execution with “yes, proceed”. The CLI import created ten drafts, fifty variants, forty original product photos, five artwork masters, forty-five staged content records, and eight manual collections. The six old products and forty-eight unused old metaobjects were removed after readback. Seventeen old Files remain pending theme usage audit. See the [import report](../docs/data/03-import-report.md).

**Public channels:** [Instagram](https://www.instagram.com/tcpfbasics/), [X](https://x.com/TCPFBasics), [Facebook](https://www.facebook.com/tishapaintedfashion), and a matching [Shopee shop](https://shopee.ph/tcpfbasics).

## Audience and shopper jobs

The user confirmed a Philippines-first launch. Exact demographics, customer research, and domestic operating policies have not been established. Working segments for validation are occasion shoppers seeking modern Filipiniana, expressive dressers attracted to original prints, and returning followers of the artist. These are strategic hypotheses, not measured customer segments.

Likely shopping questions to investigate include fit, what a set includes, artwork placement, fabric and care, delivery before an event, and styling separates. Bespoke customers also need an explanation of the commission process and timing.

## Differentiation and positioning

Original artwork, an identifiable artist, and the translation from painting to garment are supported by the user's brief and published founder interviews. The user selected **A — Contemporary Wearable Gallery**, developed around **original paintings made wearable through modern Filipiniana**.

**Logo:** Keep the existing logo. The user supplied a 2048 px Facebook JPEG showing a gold needle/floral mark on white; it is saved intact in `docs/brand/assets/logo/`. No replacement logo is authorized. The user approved the detailed palette, Fraunces/Instrument Sans pairing, voice, headline, and imagery mood in the [brand specification](../docs/specs/2026-10-05-brand-system-design.md).

The connection between art and Filipiniana exists elsewhere in the category. Do not infer that TCPF invented it or is the only brand doing it. Individual artworks and founder authorship provide a more specific story.

The user selected a shop-first homepage composition: category and product browsing lead; artwork stories and a smaller bespoke invitation follow. The [theme design](../docs/specs/2026-10-05-shopify-theme-design.md) and its Native implementation plan were approved; the protected custom Horizon preview is implemented.

The user selected keeping current pricing while elevating the presentation. Public marketplace prices are research observations; confirm the exact catalog prices before creating or changing Shopify products.

## Competitive context

Research benchmarks: Filibela, Mestiza Filipina, Kaayo, VINTA Gallery, Filip + Inna, and Kultura. They represent overlapping ready-to-wear offers, craft-focused brands, bespoke alternatives, and multibrand retail. They are not six equivalent competitors.

See the [competitor comparison](../docs/brand/competitor-profiles/_summary.md) for the evidence and distinctions.

## Voice and claims

Approved voice: artistic, warm, assured, specific, and contemporary. Give product details in straightforward language; reserve poetic language for artwork and editorial stories. See the [voice guide](../docs/brand/04-brand-voice.md).

Distinguish **printed artwork** from **directly hand-painted garments**. Identify the actual technique for each product. Do not infer material composition, handweaving, sustainability certifications, limited production, or delivery guarantees from the overall brand story.

Celebrity wear including BINI was supplied by the user. Specific appearance evidence and asset credits remain to be collected before drafting a public feature.

## Proof and source limitations

Founder interviews and fashion coverage are recorded in the [source register](../docs/brand/research/source-register.md). They support historical creative context, not every current operating detail.

Direct social-feed review is incomplete. Instagram browser access was denied; Facebook and X did not provide usable page text through web retrieval. No customer testimonials, conversion metrics, or audience statistics have been independently established.

## Goals

**Business goal:** Deliver a distinctive Shopify storefront the client can operate and maintain.

**Primary conversion:** Purchase ready-to-wear clothing.

**Secondary conversion:** Submit a suitable bespoke inquiry.

**Performance evidence:** Establish a baseline and evaluate conversion after launch; no uplift is currently claimed.

## Storefront implementation status

Unpublished TCPF Shop-first Preview theme 188681584822 is uploaded. The ten AI concepts and shared entries are active for the protected demonstration only, at tracked zero stock/DENY with concept flags retained; final creative/merchandise approval remains pending. The theme uses the retained logo, approved fonts/palette, shop-first homepage and native Shopify commerce interfaces. See [theme evidence](../docs/theme/05-build-report.md) and [editing guidance](../docs/theme/04-merchant-guide.md).
