# TCPF Basics — project brief

Updated: 2026-10-05. Status: phase 1 brand system approved; phase 2 written design for review.

## Intended outcome

Create a distinctive, maintainable Shopify storefront for the client's clothing business, with its theme source in this directory. TCPF means Tisha Chavez Painted Fashion. The client describes a Naga City boutique that prints original paintings and artworks onto modern Filipiniana, owned and operated by Tisha Chavez.

The user selected **ready-to-wear shopping as the primary launch journey, with bespoke as a secondary offer** and **keeping current pricing while elevating the presentation**. Preserve the accessible ready-to-wear positioning as the identity develops.

The selected creative direction is **A — Contemporary Wearable Gallery**. **Keep the existing logo and build the identity around it.** The user subsequently instructed us to scrap the existing Shopify products and start from scratch with ten sample products, each carrying 3–5 original AI-generated product photographs. Existing borrowed product imagery must not enter the new catalog or theme.

Phase 2's category mix and architecture are also selected: **3 boleros, 2 terno sets, 2 skirts, 2 dresses, 1 top**, with a reusable artwork/garment/size library and matching-product references. The [written data and catalog design](specs/2026-10-05-shopify-data-catalog-design.md) specifies the proposed schema, exact sample lineup, upload sequence, and draft-to-preview handoff.

## Three phases

| Phase | Work | Completion evidence |
| --- | --- | --- |
| 1. Brand | Research the business, comparable brands, cultural context, and shopper needs. Develop positioning, voice, mood, visual identity, and imagery direction. | A source register, research findings, selected creative direction, and usable brand guidelines with examples. |
| 2. Shopify data and catalog | Brainstorm the shopper information needed, design metafields and reusable metaobjects, replace the existing catalog, and prepare 10 complete sample products with 3–5 original AI-generated images each. | Documented definitions and relationships; populated draft records and product references; sample data identified as such; consistent images uploaded and attached; existing products removed; a readback of the intended store data. |
| 3. Theme | Pull the latest Shopify Horizon source at the start of this phase and record its commit. Build custom sections, blocks, and templates carrying the selected identity. | Homepage, collection and product pages, Our Story, Bespoke, Contact, and other agreed templates; merchant editing guidance; functional, accessibility, SEO, and performance review. |

The [phase diagram](diagrams/project-phases.md) shows the dependencies. Each phase's implementation details will be specified after the preceding decisions are available.

## Confirmed workspace and platform observations

- This directory was empty and was not a Git repository at the start of discovery.
- Shopify CLI 4.8.4 is installed. Its `store execute` command supports authenticated Admin GraphQL queries and mutations. [Official documentation](https://shopify.dev/docs/api/shopify-cli/store/store-execute).
- Stored CLI authentication exists for `tcpfbasics.myshopify.com`. A successful read returned shop name `tcpfbasics`, a Shopify primary domain, and currency `PHP`.
- The first five catalog records include three titles prefixed `CONCEPT` and two named FRANCIA products. Existing records require a fuller audit before catalog population; their presence does not establish their factual accuracy.
- A subsequent read found six products total: three drafts and three active records. Observed active price points were PHP 950, 1,520, and 1,990. These are reference values, not independently verified client prices. The [catalog replacement decision](brand/research/catalog-replacement.md) records scope and reference values.
- No logo was found among the 23 accessible Shopify file records. Reading theme settings was denied because the stored connection lacks `read_themes`. The user subsequently supplied a 2048 px Facebook JPEG of the gold needle/floral mark, saved intact in [brand assets](brand/assets/logo/tcpf-facebook-source.jpg).
- Horizon is the requested theme foundation. Its main branch can contain unreleased features; the imported source and deployed-store compatibility will be recorded when work begins. [Shopify Horizon](https://github.com/Shopify/horizon).

## Working principles

- Connect each custom field and theme feature to a real shopper or merchant need.
- Keep product facts, founder history, source observations, and creative proposals distinguishable.
- Create original sample concepts for the demonstration catalog. Keep generated concepts distinct from real Tisha Chavez paintings, real inventory, and verified garment specifications. Actual sale listings will need approved product references and facts.
- Define the brand before committing the palette, typography, and page composition.
- Document edits the client can make in Shopify Admin and the theme editor.
- Measure conversion after launch against an agreed baseline. A well-designed theme alone cannot establish a conversion uplift.

## Discovery decisions to resolve in order

1. Completed: review the detailed visual and verbal system for the selected wearable gallery direction, alongside the supplied existing logo.
2. Launch audience and shipping markets, sample garment concepts, and operating policies.
3. Custom-data needs and the replacement catalog's product and image specifications.
4. Template content, merchant controls, and measurable build acceptance criteria.

## Brand inputs supplied by the user

- [Instagram](https://www.instagram.com/tcpfbasics/)
- [X](https://x.com/TCPFBasics)
- [Facebook](https://www.facebook.com/tishapaintedfashion)
- Client reports national attention and garments worn by celebrities including BINI. Specific looks, dates, and credits have not yet been corroborated in the research.

Continue with the [brand research index](brand/README.md).
