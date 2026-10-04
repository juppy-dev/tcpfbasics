# TCPF Shopify data and sample catalog design

2026-10-05 · Version 1.0 · Written design approved by the user's “looks good” response. Implementation plan review follows; no mutations performed.

## Intent and approved decisions

Build the data that makes the approved Contemporary Wearable Gallery identity useful: show the artwork behind a print, help shoppers understand the garment and size, and connect matching pieces.

The user approved a **reusable library** rather than product-only duplication or a larger editorial system. The ten-product assortment includes **3 boleros, 2 terno sets, 2 skirts, 2 dresses, and 1 top**. Replace all six existing products and their borrowed imagery. Create four separate AI-generated photographs per sample product, within the requested 3–5 range.

The [approved brand system](2026-10-05-brand-system-design.md), [imagery guide](../brand/06-imagery-art-direction.md), and [store audit](../data/01-store-audit.md) provide the constraints. The [data diagram](../diagrams/shopify-data-model.md) shows references and the later publication handoff.

## Architecture

Use Shopify's native products, variants, prices, descriptions, SEO fields, media, and collections. Refine the four existing metaobject definitions into artwork, garment details, size charts, and typed measurement rows. Keep existing internal type names and product reference keys to minimize unnecessary migration.

Add product references for matching pieces and set components. Every sample has `tcpf.concept_only = true`; all garment facts, chart values, artwork, and imagery are demonstration data. Generated art is attributed as an AI concept, not Tisha Chavez's original painting.

All new references are typed. Artwork and size guides can be shared by multiple products. Merchant-visible names and display keys make records identifiable without exposing internal IDs in the storefront.

## Data that stays native

| Shopify field | Content |
| --- | --- |
| Product title and handle | Garment name and clear category; stable lowercase handle. |
| Description | Brand-voice introduction, sample notice, and useful styling. |
| Vendor and product type | TCPF BASICS; Bolero, Terno Set, Skirt, Dress, or Top. |
| Options and variants | One option named `Size`; XS, S, M, L, XL. |
| Price | PHP sample values based on the observed current store price points. |
| Inventory | Tracked, zero available, inventory policy `DENY`. No sample checkout. |
| SEO title and description | Distinct, readable sample product content; no fabricated reviews or claims. |
| Media | Four ordered images with view-specific alternative text. |
| Collections | Ready-to-wear, category collections, and two matching artwork edits. |

Keep products **DRAFT and unpublished** in phase 2. Preserve observed prices in the existing snapshot before removal. Do not add fictional compare-at pricing, discounts, ratings, delivery guarantees, or inventory urgency.

## Product metafields

All are merchant-owned under namespace `tcpf`, with storefront-readable access for the later theme.

| Key | Shopify type | Rule and consumer |
| --- | --- | --- |
| `apparel_details` | `metaobject_reference` | Existing key, constrained to garment-detail definition; one complete record per sample product. Product facts and sizing. |
| `design_concept` | `metaobject_reference` | Existing key, constrained to artwork definition; one shared artwork per product. Artwork section and collection grouping. |
| `concept_only` | `boolean` | Existing key; true for all samples. Future theme sample notice and purchase guard. |
| `related_products` | `list.product_reference` | New; up to four distinct related products, excluding self. Outfit or same-artwork links. |
| `related_products_context` | `single_line_text_field` | New; `outfit` or `same_artwork`. The theme labels these “Complete the look” or “More in this print”. |
| `set_components` | `list.product_reference` | New; exactly two entries on each set, bolero then skirt; empty elsewhere. Explains set contents and links to separates. |

Matching links and set components describe merchandise relationships. Each set has its own native variant/inventory record; automatic component-inventory synchronization is outside this demonstration scope.

## Artwork metaobject

Internal type: **`tcpf_design_concept`**. Merchant name: **TCPF Artwork**. Display key: `title`.

| Field | Type | Requirement |
| --- | --- | --- |
| `title` | `single_line_text_field` | Required for new records; maximum 100 characters. |
| `artwork_image` | `file_reference` | Existing required image field; image-only validation retained. |
| `story` | `multi_line_text_field` | Required sample narrative; maximum 1,200 characters. Describe the invented visual concept. |
| `origin` | `single_line_text_field` | New; choices `ai_concept`, `human_original`. All five samples use `ai_concept`. |
| `attribution` | `single_line_text_field` | New; maximum 160 characters. Samples: “AI-generated sample artwork”. |
| `medium` | `single_line_text_field` | New; maximum 160 characters. Samples identify a digital painterly concept, not physical oil paint provenance. |
| `palette` | `list.single_line_text_field` | New; up to five readable color names for editorial context. |
| `review_status` | `single_line_text_field` | Existing field; new records use `pending` or `approved`. Visual approval does not change AI origin. |

Existing `reference_name` and `reference_url` remain as legacy fields and are empty on new samples. New artwork records contain no borrowed source images or fabricated artist memories. Future real artwork can use `human_original` and verified Tisha attribution.

## Garment-detail metaobject

Internal type: **`tcpf_apparel_details`**. Merchant name: **TCPF Garment Details**. Add `title` as its display key.

| Field | Type | Content and rule |
| --- | --- | --- |
| `title` | `single_line_text_field` | New; maximum 160 characters, product name plus “details”. |
| `garment_category` | `single_line_text_field` | Existing; controlled values `bolero`, `terno_set`, `skirt`, `dress`, `top` for new records. |
| `silhouette` | `single_line_text_field` | Existing; clear shape description, maximum 200 characters. |
| `fit_notes` | `multi_line_text_field` | Existing; describe the sample cut and how to use the guide, maximum 1,000 characters. |
| `fabric` | `single_line_text_field` | Existing; sample fabric description, maximum 200 characters. |
| `fiber_content` | `multi_line_text_field` | Existing; demonstration composition, maximum 500 characters. |
| `stretch` | `single_line_text_field` | Existing; explicit sample stretch description. |
| `lining` | `single_line_text_field` | Existing; explicit lining or “Unlined” demonstration specification. |
| `closure` | `single_line_text_field` | Existing; sample fastening description. |
| `pockets` | `multi_line_text_field` | Existing; pocket specification or “No pockets”. |
| `care_instructions` | `multi_line_text_field` | Existing; complete sample instructions, maximum 1,000 characters; not a real garment care guarantee. |
| `included_items` | `multi_line_text_field` | New; state exactly which garments belong to the listing. |
| `size_charts` | `list.metaobject_reference` | New; constrained to size-chart definition, maximum two. One for a separate; bolero and skirt charts for each set. |
| `data_status` | `single_line_text_field` | Existing; new samples use `sample`; `verified` is reserved for approved real facts. |

Existing single `size_chart` remains unchanged as a legacy field. New products use `size_charts`. Do not require clients to enter JSON to maintain new measurements.

## Size-chart and measurement metaobjects

Internal chart type: **`tcpf_size_chart`**. Merchant name: **TCPF Size Guide**. Add `title` as display key.

| Chart field | Type | Rule |
| --- | --- | --- |
| `title` | `single_line_text_field` | New; identifies the cut, maximum 100 characters. |
| `unit` | `single_line_text_field` | Existing; all new charts use `cm`. |
| `measurement_kind` | `single_line_text_field` | New; `garment` or `body`; sample charts use `garment`. Circumferences are distinguished from flat widths. |
| `measurements` | `list.metaobject_reference` | Existing; constrained to measurement-row definition; five ordered rows XS → XL. |
| `notes` | `multi_line_text_field` | New; explains how to measure and states that values are demonstration data. |
| `chart_status` | `single_line_text_field` | Existing; `sample` for this catalog, `verified` only for real checked measurements. |

Internal row type: **`tcpf_size_measurement`**. Merchant name: **TCPF Size Measurement**. Add `title` as display key.

| Row field | Type | Rule |
| --- | --- | --- |
| `title` | `single_line_text_field` | New; e.g. “Bolero — XS”, maximum 100 characters. |
| `size_label` | `single_line_text_field` | Existing; XS, S, M, L, XL for new rows. |
| `bust_cm`, `waist_cm`, `hip_cm` | `number_decimal` | New; positive garment circumferences where relevant; omit irrelevant measurements. |
| `length_cm` | `number_decimal` | New; positive garment length, with measurement method explained on the chart. |
| `measurement_status` | `single_line_text_field` | Existing; `sample` for new rows. |

Existing `measurements_cm` JSON stays as legacy data and is not populated in new rows. Create five charts with five rows each: **bolero, skirt, halter dress, wrap dress, blouse**. Shared cuts across color/print variants share a chart. Sets reference bolero plus skirt charts.

## Collections

Create native manual collections for ready-to-wear, boleros, terno sets, skirts, dresses, and tops, plus **Amihan Garden** and **Dapithapon** artwork edits. Use native title, description, SEO, image, and product membership.

Add optional collection metafield **`tcpf.artworks`**, type `list.metaobject_reference`, constrained to the artwork definition. The two artwork edits each reference their corresponding painting concept; category collections need no extra artwork field content.

Existing collections are audited before editing. Create/update only the target sample collections and do not remove unrelated collection definitions.

## Ten-product sample lineup

The following names, garment designs, prices, measurements, and materials are demonstration proposals. They are not existing TCPF SKUs. Display sample status in previews.

| Handle / title | Category | Artwork | Sample PHP price | Size guide |
| --- | --- | --- | --- | --- |
| `amihan-bolero` · Amihan Printed Bolero | Bolero | Amihan Garden | 950 | Bolero |
| `dapithapon-bolero` · Dapithapon Printed Bolero | Bolero | Dapithapon | 950 | Bolero |
| `luntian-bolero` · Luntian Printed Bolero | Bolero | Luntian | 950 | Bolero |
| `amihan-terno-set` · Amihan Modern Terno Set | Terno Set | Amihan Garden | 1,520 | Bolero + Skirt |
| `dapithapon-terno-set` · Dapithapon Modern Terno Set | Terno Set | Dapithapon | 1,520 | Bolero + Skirt |
| `amihan-midi-skirt` · Amihan Printed Midi Skirt | Skirt | Amihan Garden | 950 | Skirt |
| `dapithapon-midi-skirt` · Dapithapon Printed Midi Skirt | Skirt | Dapithapon | 950 | Skirt |
| `hiraya-halter-dress` · Hiraya Floral Halter Dress | Dress | Hiraya Bloom | 1,990 | Halter Dress |
| `sinag-wrap-dress` · Sinag Printed Wrap Dress | Dress | Sinag Field | 1,990 | Wrap Dress |
| `luntian-blouse` · Luntian Printed Blouse | Top | Luntian | 950 | Blouse |

Prices use the observed active-store reference points, not a premium repricing strategy. New-category sample prices at PHP 950 are demonstration values. Actual client prices remain to be confirmed before any real launch.

### Artwork concepts

- **Amihan Garden:** ivory, plum, and periwinkle botanical brushwork. Shared by bolero, skirt, and set.
- **Dapithapon:** petal, coral, and muted plum floral brushwork. Shared by bolero, skirt, and set.
- **Luntian:** ivory, leaf green, and soft lavender botanical rhythm. Shared by bolero and blouse.
- **Hiraya Bloom:** powder blue and ivory floral imagery. Halter dress.
- **Sinag Field:** warm ivory, ochre, and soft rose meadow imagery. Wrap dress.

Names do not imply a founder-provided story or verified cultural origin. All five painting masters are newly generated.

### Garment concepts

The three boleros share a cropped structured butterfly-sleeve cut and their respective prints. The two midi skirts share an A-line cut. Each terno set depicts its matching bolero and skirt without changing either garment. The halter is a softly flared midi dress; the wrap dress has a defined waist and tie closure. The blouse is a longer top with structured sleeves in the Luntian print.

Complete per-product demonstration material, composition, closure, lining, pocket, fit, care, measurement values, descriptions, and photo styling are specified in the [sample source brief](../data/02-sample-product-briefs.md). The generation brief and data must agree; image defects are corrected rather than explained away by changing product facts after import.

The Luntian bolero/blouse pair uses `same_artwork`, rather than implying they form a mandatory outfit. Amihan/Dapithapon products use `outfit`; dresses omit related-product references. Set contents are separately identified through `set_components`.

## Image generation and asset contract

Produce **five artwork masters + forty product photographs**, each a separate output. Use the built-in image-generation tool. Save accepted originals in the workspace with exact prompts and provenance; the finished catalog references only new assets.

Each product gets primary, back/side, detail, and styled views. Prefer 4:5 portrait composition with a consistent soft neutral studio treatment. Generate the primary from the artwork master and garment brief; reference it when generating further views. For sets and matching separates, reference the same garment masters so the set photographs agree with individual products.

Inspect each output for print/color consistency, sleeves, hem, fastening, anatomy, set contents, and crop. A retry targets the specific error; contact-sheet crops do not count as separate photographs. Original founder portraits, celebrity looks, and customer testimonials are outside this sample generation.

## Upload and replacement sequence

1. Snapshot definitions, existing relevant entries, product IDs, collection memberships, and file references without copying borrowed images into the project.
2. Refine existing definitions additively, preserving old field types and reference keys. New required fields apply to the new-record acceptance contract; avoid making old records invalid during migration.
3. Generate and inspect new artwork/photos; create complete local catalog source and provenance records.
4. Obtain staged targets through `stagedUploadsCreate`, upload local bytes to those targets, then create file assets with `fileCreate`. Keep temporary upload credentials out of logs and Git.
5. Wait for file readiness before creating references. Create new measurement rows, charts, artwork records, and garment records in dependency order.
6. Create ten draft products with variants/media/metafields, then resolve cross-product references and manual collection membership. Read back every reference and image count.
7. Delete the six superseded products under the user's catalog replacement instruction once the replacement set is complete. Record exact deleted IDs and returned mutation results. The price/metadata snapshot provides context; deletion is not presented as automatically reversible.
8. Review old associated entries and image usage. Delete borrowed assets and superseded concept entries only when their remaining references have been checked; do not globally erase Shopify Files or unrelated content.

Existing active sample products will disappear when removed. New drafts do not form a publicly purchasable catalog. No live merchandise is being claimed or launched by this phase.

## Draft catalog and theme-preview handoff

Shopify draft products are unavailable to sales channels, and active status alone does not publish a product. Therefore a normal Liquid collection will not render the phase 2 drafts. [Official product-status reference](https://shopify.dev/docs/api/admin-graphql/latest/enums/ProductStatus).

Before phase 3 storefront previews need the sample catalog, confirm store password protection, keep zero stock and deny overselling, implement the sample notice/purchase guard in the custom theme, then activate and publish the reviewed samples only for that protected demonstration. If those conditions are not ready, keep the products draft and review their data in Admin. Launching real merchandise requires verified facts/assets and the client's launch decision.

Metaobject publishable statuses are managed separately from product status. Entries needed for the protected preview must be active and storefront readable; phase 2 records remain staged until that handoff.

## Acceptance and merchant handover

- Exactly ten replacement sample products, each with XS–XL variants and four processed images.
- Five original artwork records, ten garment-detail records, five size charts, and twenty-five typed measurement rows.
- Two set-component pairs and consistent matching-product links; no deleted-product or borrowed-image references in the new dataset.
- Product prices, contents, artwork origin, material/care values, and chart values match the local source.
- Samples are draft, concept flagged, stock tracked at zero, and configured to deny overselling.
- API errors, image failures, and missing references are resolved before claiming import completion.
- Client instructions explain where to edit artwork, garment facts, chart rows, matching links, and native product fields.
- Store readback and asset inspection provide completion evidence. Theme behavior, SEO rendering, performance, and full accessibility are phase 3 acceptance.

## API basis and review gate

Use authenticated Shopify CLI Admin GraphQL pinned to **2026-10**, which succeeded in the audit. Existing scopes cover the planned phase 2 operations. Theme CLI authentication is a separate phase 3 setup.

Primary references: [definition updates](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectDefinitionUpdate), [metaobject capabilities](https://shopify.dev/docs/apps/build/metaobjects/use-metaobject-capabilities), [staged uploads](https://shopify.dev/docs/api/admin-graphql/latest/mutations/stagedUploadsCreate), [file creation](https://shopify.dev/docs/api/admin-graphql/latest/mutations/fileCreate), [product synchronization](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet). Refer to each mutation's current input type when writing the execution queries.

The user approved this written schema, exact sample lineup, and replacement/preview sequence with “looks good”. Continue with the [implementation plan](../plans/2026-10-05-shopify-data-catalog.md) and execution-method selection. No data mutations or catalog-image generation have begun.
