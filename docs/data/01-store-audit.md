# Shopify data audit

2026-10-05 · Before-import snapshot and schema readback · `tcpfbasics.myshopify.com`.

## Catalog

Six products exist, three draft and three active. All six carry `tcpf.concept_only = true`. The user identifies borrowed imagery and instructs us to replace the entire product set. Prices and IDs are retained in the [replacement snapshot](../brand/research/catalog-replacement.md).

Twenty-three image records were returned from Shopify Files. Some descriptions claim original TCPF art while also describing generated concepts. Those descriptions do not establish authorship; none of these existing assets will be used for the fresh catalog.

## Existing definitions

| Definition | ID | Current structure |
| --- | --- | --- |
| `tcpf_size_measurement` | 25339527350 | `size_label`, JSON `measurements_cm`, `measurement_status`. |
| `tcpf_size_chart` | 25339560118 | `unit`, references to measurements, `chart_status`. |
| `tcpf_apparel_details` | 25339592886 | Category, silhouette, fit, fabric, fiber content, stretch, lining, closure, pockets, care, single size-chart reference, data status. |
| `tcpf_design_concept` | 25339625654 | Title, reference name/URL, story, review status, image. |

All four definitions already use `PUBLIC_READ_WRITE` admin access and `PUBLIC_READ` storefront access, with publishable capability enabled. Existing references are constrained to the intended definition IDs. Artwork image fields are already restricted to images.

Existing product metafield definitions are `tcpf.apparel_details`, `tcpf.design_concept`, and `tcpf.concept_only`. They can remain stable while their definitions gain the fields needed by the new model.

The existing measurement JSON is awkward for routine merchant edits. The proposed model adds typed decimal fields and explicit chart labels, leaving the older JSON field intact as legacy data. Sets need two chart references, so the proposal adds a chart list rather than altering the type of the existing single reference.

## Connection permissions

An authenticated `currentAppInstallation.accessScopes` read returned:

- Products: `read_products`, `write_products`.
- Definitions: `read_metaobject_definitions`, `write_metaobject_definitions`.
- Entries: `read_metaobjects`, `write_metaobjects`.
- Files: `read_files`, `write_files`.
- Inventory: `read_inventory`, `write_inventory`, `read_locations`.
- Publications: `read_publications`, `write_publications`.

A query pinned to Admin API **2026-10** succeeded. The current connection supports phase 2's planned data and file operations. Actual mutation/user errors and processing results still need readback during execution.

Theme access is separate: reading themes through this connection was denied for missing `read_themes`. Theme CLI authentication will be checked at the start of phase 3.

## Changes made

The original metadata is preserved in [the before snapshot](../../data/shopify/snapshots/before-catalog-replacement.json). The four existing metaobject definitions have their approved merchant/display names and new typed fields; all legacy field types, required flags, and validations remain unchanged. Three product reference/context definitions and one collection artwork definition were added. Definition readback agrees with [the target schema](../../data/shopify/schema.json), allowing Shopify’s JSON whitespace normalization.

The [local source catalog](../../data/shopify/catalog.json) contains ten products, five artwork concepts, ten garment-detail records, five size guides, twenty-five rows, and eight collections. No new product or image has been uploaded yet. Existing `terno-sets` and `dresses` collections contain only authorized old sample products and will be reused. Other existing collections remain intact.

Merchant-owned metafield creation omits the admin access input; readback is `PUBLIC_READ_WRITE`, matching existing definitions. Explicit `MERCHANT_READ_WRITE` was rejected for this namespace. Operation receipts retain the returned errors and successful definitions.
