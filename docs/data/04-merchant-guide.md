# TCPF Basics — merchant data guide

2026-10-05 · Phase 2 sample catalog.

## What is ready

The store has ten draft sample products, four photographs per product, eight manual collections, and a reusable artwork, garment, and size library. The [import report](03-import-report.md) records counts, IDs, readback, and cleanup. The [data diagram](../diagrams/shopify-data-model.md) shows the relationships.

All samples use AI-generated artwork and photography. Material composition, garment construction, care, measurements, and prices are demonstration values. They do not establish actual stock or identify an original painting by Tisha Chavez.

## Edit a product

Open the product in Shopify Admin. Native product fields hold its title, description, media, category/type, vendor, variants, prices, inventory, and search listing. Edit these directly; do not duplicate them in custom data.

1. Keep the five sizes ordered XS, S, M, L, XL. Each size has its own SKU and inventory item.
2. Keep photographs ordered primary, silhouette, detail, styled. Alt text describes the image and identifies sample imagery where appropriate.
3. Keep `tcpf.concept_only` checked while any product facts or imagery remain demonstration content. The product description also contains a visible sample notice.
4. Select the correct **TCPF Apparel Details** (garment) and **TCPF Design Concept** (artwork) references in the product's metafields. Internal keys remain `tcpf.apparel_details` and `tcpf.design_concept`.
5. Use **Related products** with **Related product context**. `outfit` means complementary pieces; `same_artwork` means another garment with the same print. Luntian's blouse and bolero are alternatives using the same artwork.
6. Only a complete two-piece set uses **Set components**: bolero first, skirt second. A reference connects content; it does not reserve component inventory or create a Shopify bundle. These samples have independent zero-stock variants. Real shared-stock bundle behavior requires a separate decision before sale.

Sample products must stay DRAFT, unpublished, tracked at zero stock, and configured to deny sales when out of stock until the protected preview process below is ready.

## Edit shared artwork

Find **Metaobjects** using Shopify Admin search and open **TCPF Artwork**. A single artwork entry can support several products and an artwork collection.

- Edit the artwork title, short story, motif, palette, technique, and master image in this entry. Shared edits affect every referenced product.
- Keep origin `ai_concept`, attribution **AI-generated sample artwork**, and review status `pending` until the client reviews the concept. Technical asset acceptance is not client artwork approval.
- When adding an actual work by Tisha, confirm authorship and image rights, use the appropriate real-work origin, and write its factual story. Do not relabel an AI concept as a Tisha painting.
- Avoid celebrity credits, cultural-origin claims, or production claims without supporting evidence.

## Edit garment facts

Open **TCPF Garment Details**. Each sample product has its own entry. Store construction, fabric composition, lining, stretch, closures, pockets, care, fit notes, included/excluded pieces, and size-guide references here.

- Verify facts against the actual garment before changing status from `sample` to verified content.
- Be explicit about what is included. A bolero does not include the inner camisole or styling skirt; a terno set includes the two printed pieces and excludes the inner camisole/accessories.
- Both terno sets reference two guides: bolero first, skirt second. Separates reference their own guide.
- This library keeps garment facts separate from artwork stories and native commerce fields.

## Edit sizing

Open **TCPF Size Guide**, then its referenced **TCPF Size Measurement** rows. Five reusable sample guides cover bolero, skirt, halter dress, wrap dress, and blouse.

1. Guide units are **cm** and the basis is **garment measurements**. Circumferences are not body measurements or flat widths. Keep the explanation visible.
2. Measurement rows use numeric fields for bust, waist, hips, and length. Enter positive numbers only; leave an irrelevant measurement empty rather than entering zero.
3. Keep the row-reference list ordered XS, S, M, L, XL and aligned with native variant labels.
4. Do not enter a model's height, size, or measurements without a verified reference. No model measurements are claimed for these AI photographs.
5. Editing a shared guide or row changes every garment that references it. Duplicate a guide when a real garment requires different measurements; give it an identifiable title and handle.

Internal types retain the earlier store keys: `tcpf_size_measurement`, `tcpf_size_chart`, `tcpf_apparel_details`, and `tcpf_design_concept`. Their merchant-facing names have been updated; do not recreate the definitions under new keys.

## Edit collections

The eight target collections are manual: Ready-to-wear, Printed Boleros, Modern Terno Sets, Printed Skirts, Printed Dresses, Printed Tops, Amihan Garden, and Dapithapon.

Manage membership, order, description, image, and search listing in native collection fields. Artwork collections use `tcpf.artworks` to connect their shared story. Category collections do not need an artwork reference. Draft products will not appear in ordinary public collection rendering.

## Phase 3 protected preview

The separate Shopify theme CLI login has succeeded. The theme build will import the latest Horizon source. Before activating sample content for an actual storefront preview:

1. Confirm store password protection and the intended unpublished preview theme.
2. Build visible sample notices and product purchase guards. Do not output fabricated sale availability or merchandise claims in structured data.
3. Inspect the new theme's product, collection, cart, search, and recommendation paths with the sample flag in place.
4. Then activate the required metaobjects and products and publish only to the protected preview's required channel. Keep inventory zero and overselling denied.

No preview publication or live-sale action was performed in phase 2. A live launch requires client-approved artwork/assets, real garment facts and measurements, actual prices and stock, delivery/returns policies, and a launch decision.

## Remaining manual or later work

- No manual product, metafield, metaobject, or media import is required; these were uploaded through the authenticated CLI and staged upload flow.
- The 17 remaining pre-existing Files are absent from the new catalog. A text audit of all five themes found explicit references to three of these files; fourteen had no text matches. Keep the three referenced files while those themes use them, and establish wider usage before deleting the other fourteen. Do not bulk-delete Files.
- The existing logo is a white-background JPEG. It is preserved; a client-supplied original vector or transparent source would improve placement options without changing the logo.
- Client artwork review, factual merchandise validation, operating policies, and protected-preview setup remain part of the next phase and launch handoff.
