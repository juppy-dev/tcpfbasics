# Shopify Data and Sample Catalog Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development or superpowers:executing-plans to implement this plan task-by-task. Use the execution method selected by the user. Steps use checkbox syntax for tracking.

**Goal:** Replace the six existing Shopify products with ten complete draft samples, backed by reusable custom data, five original artwork masters, and forty consistent product photographs.

**Architecture:** Keep Shopify's native product/catalog features and refine the four existing metaobject definitions. Version the source data, image provenance, and sanitized Shopify ID map locally; execute imports through authenticated CLI GraphQL in dependency order. Complete and read back the replacement set before deleting the six superseded products.

**Tech Stack:** Shopify CLI 4.8.4, Admin GraphQL 2026-10, built-in image generation, JSON source records, native filesystem tools and temporary commands.

**Spec:** [Approved phase 2 specification](../specs/2026-10-05-shopify-data-catalog-design.md); [approved sample brief](../data/02-sample-product-briefs.md); [brand specification](../specs/2026-10-05-brand-system-design.md).

**Dependencies:** [Maintained data and execution diagram](../diagrams/shopify-data-model.md).

**Status:** Approved by the user’s “yes, proceed” response on 2026-10-05. Native execution in progress.

## Global Constraints

- Store: `tcpfbasics.myshopify.com`; API version: `2026-10`; currency: PHP; vendor: `TCPF BASICS`.
- Assortment: 3 boleros, 2 terno sets, 2 skirts, 2 dresses, 1 top; names, prices, construction, copy, and measurements come from the approved sample brief.
- Each product has the single `Size` option with XS, S, M, L, XL and four images ordered primary, silhouette, detail, styled.
- Generate five artwork masters and forty separate product photographs with the built-in tool. Save accepted originals and exact prompts in this workspace.
- Generated artwork attribution is `AI-generated sample artwork`; origin is `ai_concept`. Garment/measurement status is `sample`.
- Products remain `DRAFT`, unpublished, concept flagged, tracked at zero stock, and configured to `DENY` overselling. Metaobject entries remain staged for the later protected preview.
- Preserve existing internal definition types, reference keys, field types, and legacy fields; add only the approved fields and definitions.
- Keep upload credentials and CLI authentication out of Git, terminal output, and receipts. Use temporary query/variable files for one-off operations; create no permanent helper scripts.
- No borrowed image files enter the project or new catalog. Retain their IDs/reference metadata only for cleanup evidence.
- Stage intended files explicitly and use atomic Conventional Commits without attribution trailers.
- Completion evidence consists of image inspection, source comparisons, mutation receipts, and authenticated store readback. Theme work and preview publication belong to phase 3.

## Review Focus

1. **Interrupted imports:** a successful request with a lost response must be recovered by its recorded ID or unique handle/filename, rather than blindly creating duplicates. Owned-record checks belong to tasks 1, 4, and 5.
2. **Print/garment drift:** alternate views and sets must preserve their referenced artwork and garment construction. Cross-view inspection belongs to tasks 2 and 3.
3. **Incorrect set or size references:** each set contains the matching bolero and skirt, with both guides and consistent XS–XL labels; irrelevant measurements are absent rather than zero. Source checks belong to task 1; store comparisons belong to task 5.
4. **Failed processing or omitted list items:** an API response alone does not prove usable media or complete variants. Readiness checks belong to task 4; full list/readback checks belong to task 5.
5. **Deletion or publication outside scope:** replacement deletes only the six verified old IDs after completion; uncertain shared assets are recorded for later review; samples remain unpublished. Deletion receipts and final status checks belong to task 6.

## Files and Data Interfaces

Create the following during execution, with one role per file:

| Path | Role |
| --- | --- |
| `data/shopify/schema.json` | Target metaobject/metafield definition fields, types, and validations from the approved spec. |
| `data/shopify/catalog.json` | Complete local sample data, native product fields, collections, and references by stable handle. |
| `data/shopify/snapshots/before-catalog-replacement.json` | Timestamped metadata snapshot: six old products, relevant entries/definitions, file references, collections, and locations. No secrets or image bytes. |
| `data/shopify/state.json` | Store/API identity and maps of definitions, entries, files, products/variants, and collections to Shopify IDs. |
| `data/shopify/mutation-receipts.json` | Sanitized operations, targeted IDs, returned errors/statuses, and deletion results. |
| `data/catalog/artwork/{artwork-handle}/master.png` | One accepted original for each of the five artwork masters. |
| `data/catalog/products/{product-handle}/{01-primary,02-silhouette,03-detail,04-styled}.png` | Four accepted original photographs per product. |
| `data/catalog/provenance.json` | Asset ID, path, exact prompt, referenced source paths, tool mode, dimensions/checksum, and acceptance notes. |
| `docs/data/03-import-report.md` | Actual counts, exceptions, old-product deletion results, and final import evidence. |
| `docs/data/04-merchant-guide.md` | Admin editing steps and phase 3 preview requirements. |

### Catalog contract

`catalog.json` contains `store`, `api_version`, `currency`, `sizes`, and six arrays: `artworks`, `measurement_rows`, `size_charts`, `garments`, `products`, `collections`.

- Content records contain `handle` and `values` keyed by the approved metaobject field names. References remain handles in local source until resolved to Shopify IDs.
- Artwork records also contain `artwork_asset_id`.
- Chart records contain ordered `measurement_handles`; garment records contain ordered `size_chart_handles`.
- Product records contain `handle`, `title`, `description_html`, `vendor`, `product_type`, `seo`, `price`, `sku_prefix`, `artwork_handle`, `garment_handle`, `related_handles`, `related_products_context`, `set_component_handles`, `collection_handles`, and ordered `image_asset_ids`.
- Collection records contain `handle`, `title`, `description_html`, `seo`, `image_asset_id`, `product_handles`, and optional `artwork_handles`. Use the artwork master for each artwork edit and a representative primary photograph for each category and ready-to-wear collection.
- Use decimal price strings, real numbers for local centimetre values, and omit irrelevant measurements. Build five variants per product from `sizes` and the SKU pattern in the sample brief.
- Use product handles from the approved lineup, artwork handles from the sample brief, measurement handles `sample-{guide-handle}-{lowercase-size}`, guide handles `sample-{guide-handle}`, and garment handles `sample-{product-handle}`. Guide handles are `bolero`, `skirt`, `halter-dress`, `wrap-dress`, `blouse`.

`state.json` maps definitions by type, entries by `type/handle`, files by asset ID, products by handle, variants by product handle/size, and collections by handle. Each file record includes Shopify ID, stable CDN URL, source checksum, and processing status. Successful responses are recorded before starting the next dependent mutation.

`provenance.json` contains one record per accepted asset, including its `alt_text`. Artwork asset IDs are `artwork/{handle}`; photograph IDs are `product/{handle}/{view}`, with views `primary`, `silhouette`, `detail`, `styled`. Rejected candidates are not counted or attached to products.

---

## Task 1: Prepare the Source and Refine the Schema

**Files:** Create the schema/catalog JSON, before snapshot, state map, and receipts. Update this plan's task status and [store audit](../data/01-store-audit.md).

**Interfaces:** Consumes the approved spec and sample brief. Produces complete source records, an ownership snapshot, and the definition-ID map used by tasks 4–5.

- [x] Read current products, definitions, relevant entries, file references, collections, publications, locations, and granted scopes through CLI 2026-10; capture sanitized metadata in the snapshot.
- [x] Populate `schema.json` and `catalog.json` from the approved documents, including all descriptions, five chart tables, contents, related contexts, and eight native manual collections: ready-to-wear, five categories, Amihan Garden, Dapithapon.
- [x] Compare source counts and references: 10 products, 5 artworks, 10 garment records, 5 charts, 25 rows, 50 expanded variants; two sets with matching bolero/skirt links; Luntian uses `same_artwork`; dresses have no related-product claims.
- [x] Confirm target handles are available or already belong to this import. Resolve an existing owned record through the state/snapshot map; do not overwrite a handle belonging to unrelated content.
- [x] Update the four existing definitions additively, using the exact fields and merchant/display names in the spec. Preserve legacy field types, required flags, and validations. Give new fields their specified choices/length/list/reference constraints; enforce positive measurements and all required new-record content in source acceptance without invalidating legacy records.
- [x] Create the three new PRODUCT definitions (`related_products`, `related_products_context`, `set_components`) and COLLECTION `artworks` definition under `tcpf`; make intended theme fields storefront readable and references constrained to the relevant types.
- [x] Read definitions back and compare every target key, type, access setting, display key, and new validation with `schema.json`; resolve mutation errors before continuing.
- [x] Commit intended source/schema/snapshot files with `feat(data): define reusable Shopify catalog schema`.

## Task 2: Generate Five Original Artwork Masters

**Files:** Create five artwork PNGs and their provenance records; fill artwork asset IDs in `catalog.json`.

**Interfaces:** Consumes the five artwork names, colors, and stories. Produces five visually inspected master paths for task 3 and asset IDs for task 4.

- [ ] Write one precise prompt per artwork from the approved botanical/meadow brief, with a flat square composition, no words/logos, and no imitation of a known painting.
- [ ] Generate the five masters through the built-in tool. Independent artwork calls may overlap; record every returned path without printing image payloads.
- [ ] Inspect each master for the specified palette and painterly character. Revise a failed candidate through the image tool before selecting its final master.
- [ ] Copy accepted originals to their workspace paths; record exact prompts, mode, dimensions/checksum, and acceptance notes. Attribute all five as AI concepts.
- [ ] Compare the five files and source references; confirm no asset is borrowed or credited to Tisha and that each artwork handle has exactly one accepted master.
- [ ] Commit accepted artwork assets and provenance with `feat(catalog): create five original sample artwork masters`.

## Task 3: Generate Forty Consistent Product Photographs

**Files:** Create forty product PNGs, their provenance entries, and ordered product asset references in `catalog.json`.

**Interfaces:** Consumes artwork masters and exact garment/styling specifications. Produces four accepted views per product for tasks 4–5.

- [ ] Prepare the ten primary-image prompts, specifying garment cut, print, included pieces, fastenings, lining appearance, soft ivory studio light, anonymous model, and full sleeves/hem. Aim for 4:5 portrait framing with crop room.
- [ ] Generate Amihan bolero and skirt primary references, then its set using both references and the same artwork. Repeat for Dapithapon. Generate Luntian bolero, then its blouse using the same print reference; generate Hiraya and Sinag dress primaries from their masters. Independent families may overlap.
- [ ] Inspect the ten primaries, especially identical garments between sets/separates. Correct print, construction, anatomical, or framing defects before generating further views.
- [ ] Generate silhouette, detail, and styled photographs for each product, referencing its accepted primary and artwork master. Each photograph is a separate output, not a contact-sheet crop.
- [ ] Compare all four views per product for color, sleeve shape, hem, closures, print scale, model/styling consistency, and set contents. Correct individual failed views through targeted image-tool edits.
- [ ] Copy forty accepted originals to the defined paths; write view-specific alt text and exact prompt/reference provenance. Confirm `4 × 10 = 40` accepted photos and that a set matches its individual garments.
- [ ] Commit photo assets/source/provenance in logical artwork-family commits, using `feat(catalog): add {family} sample product photography`.

## Task 4: Upload Assets and Populate the Content Library

**Files:** Update state, receipts, provenance checksums, and this plan. Temporary upload/query files stay outside tracked source.

**Interfaces:** Consumes 45 accepted assets and target definitions. Produces 45 ready file IDs/CDN URLs and 45 staged content entries: 25 rows, 5 charts, 5 artworks, 10 garment records.

- [ ] Check each asset ID against state and its unique filename (`tcpf-sample-{asset-id-with-slashes-replaced-by-hyphens}-v1.png`). Reuse a proven completed upload; recover uncertain requests by querying their exact filename/ID before retrying.
- [ ] Create staged upload targets through CLI `stagedUploadsCreate`, then upload the local bytes using a temporary multipart command. Keep signed parameters in temporary files and out of logs/receipts.
- [ ] Call `fileCreate` with staged resource URLs, unique filenames, and alt text. Persist returned IDs and poll file status until every selected file is `READY`; resolve `FAILED` processing before referencing it.
- [ ] Upsert new measurement rows, charts, artwork records, and garment records in dependency order. Resolve handles to definition/entry/file IDs and set publishable status `DRAFT`.
- [ ] With API 2026-10, `metaobjectUpsert(values:)` replaces all values on an existing entry. Supply the complete source value map only to owned records; manage staged publishable status separately through the supported capability input/update. Do not combine mutually exclusive upsert arguments. [Official reference](https://shopify.dev/docs/api/admin-graphql/latest/mutations/metaobjectUpsert).
- [ ] Read each new entry back and compare values/references with source: no zero placeholders for absent measures, correct row ordering, two charts on sets, AI origin/attribution, staged status, and ready image targets.
- [ ] Record upload/entry completion in state and sanitized receipts; commit with `feat(data): upload sample assets and populate content library`.

## Task 5: Create Ten Draft Products and Connect the Catalog

**Files:** Update state, receipts, and this plan. Create the initial import report with actual counts.

**Interfaces:** Consumes native source records, ready media IDs, and content-entry IDs. Produces ten complete draft products with fifty variants, references, inventory safeguards, and eight manual collections.

- [ ] Create or resolve the eight target manual collections with source titles, copy, SEO, images from the ready asset CDN URLs, and their permitted artwork references. Record IDs; preserve unrelated collections and memberships.
- [ ] Use synchronous `productSet` on each owned product to supply the complete five-variant option list, native fields, intended metafields, and four ordered file associations. Include ready file IDs rather than uploading a second copy.
- [ ] Supply full lists deliberately: `productSet` can remove list items omitted from its input. Use `metafieldsSet` for the later reference-only patch rather than an incomplete product synchronization. [Official reference](https://shopify.dev/docs/api/admin-graphql/latest/mutations/productSet).
- [ ] Set each product `DRAFT`, `tcpf.concept_only = true`, and unpublished. Each variant uses source price/SKU, tracked inventory, and `DENY` policy; assign new inventory items to the recorded active store location and retain zero availability at every active inventory level.
- [ ] If setting quantities is needed, read prior quantities and call `inventorySetQuantities` with `compareQuantity`, target zero, and a persisted unique `@idempotent(key: ...)` value. API 2026-10 requires this directive; retain the same key for a retry of the same operation. [Official reference](https://shopify.dev/docs/api/admin-graphql/latest/mutations/inventorySetQuantities).
- [ ] Resolve `related_products`, `related_products_context`, `set_components`, artwork/garment fields, collection artwork fields, and manual membership after all ten product IDs exist.
- [ ] Read all products/variants/media/metafields/collections/inventory back. Compare 10 products, 50 sizes, 40 usable product images in order, exact prices/SKUs, two component pairs, intended labels, zero stock, draft status, and no sales-channel publication.
- [ ] Resolve errors or mismatched fields before marking the replacement set complete. Commit source/state/receipts/report with `feat(catalog): import ten complete draft sample products`.

## Task 6: Replace the Old Catalog and Deliver the Handoff

**Files:** Finish the import report and merchant guide; update snapshot receipts, state, project brief, marketing context, and phase status.

**Interfaces:** Consumes task 5's completed readback and the old-ID snapshot. Produces the ten-product replacement catalog, deletion evidence, and client editing instructions.

- [ ] Confirm the replacement acceptance checks in task 5 have passed, then re-read the six old records against the snapshot. Delete only these authorized Product IDs: `15390146527414`, `15390146560182`, `15390146592950`, `15390182244534`, `15390182310070`, `15390182375606`.
- [ ] Record each `productDelete` request/result using the full Shopify GID and confirm the old IDs no longer resolve. Do not interpret missing response data as deletion success without readback.
- [ ] Inspect the old associated metaobject and file references. Remove superseded entries and borrowed files only where usage is established to belong to the removed set and no surviving reference is found. Record uncertain/shared usage in the report, including theme usage not visible with current scopes.
- [ ] Read the final catalog and references again. Confirm ten intended samples remain, all concept flagged/draft/unpublished, no new record references an old product or borrowed file, and every asset/measurement count matches source.
- [ ] Write merchant instructions for native product edits, shared artwork stories, garment facts, typed measurements, set contents, related-product contexts, and keeping real verified data distinct from samples.
- [ ] Document the phase 3 handoff: theme CLI authentication; store password protection; sample notices/purchase guards; then protected preview publication. No preview-publication or live-sale action is part of this plan.
- [ ] Finish the import report with actual IDs/counts, inspection/readback evidence, deletion results, and any precise manual follow-up. Mark phase 2 complete only when its catalog/schema/image requirements are met.
- [ ] Commit handoff/state/report changes with `docs(shopify): record catalog replacement and merchant handoff`.

## Plan Review and Execution Choice

**Recommended: Native execution.** One agent implements the six tasks in this session, with independent image calls overlapping where possible; one fresh reviewer checks the completed work. This keeps dependent store writes and garment/artwork references coordinated.

**Alternative: Subagent-driven execution.** Delegate each task to a fresh implementer and reviewer, then review the whole result. This adds review at each boundary and uses more contexts; writes still need to remain sequential where their references depend on earlier results.

Review this plan and choose the execution method before tasks begin, as required by the writing-plans workflow. The existing authorization to replace the old products carries through to task 6; no new deletion permission is needed.
