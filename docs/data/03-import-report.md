# Phase 2 — Shopify import report

Updated: 2026-10-05. Status: replacement catalog accepted; old-catalog cleanup and independent review pending.

## Accepted replacement

Authenticated CLI readback against API `2026-10` returned no differences from the local catalog.

| Item | Count / result |
| --- | --- |
| Products | 10, all DRAFT, concept flagged, unpublished |
| Variants | 50; XS, S, M, L, XL; tracked, zero available/on-hand, DENY overselling |
| Product photographs | 40, four per product in primary/silhouette/detail/styled order |
| Artwork masters | 5 original AI concepts |
| Files | 45 READY files; source checksums match provenance |
| Content entries | 45 DRAFT entries: 25 rows, 5 guides, 5 artworks, 10 garment records |
| Manual collections | 8; existing terno-sets and dresses reused, six created |
| Product relationships | 8 related lists with context; 2 ordered set component lists |

Product creation assigned zero available inventory directly at the recorded store location. Readback also confirmed zero on-hand, so no separate inventory quantity mutation was required.

## Product IDs

| Product | Shopify Product ID | PHP sample price |
| --- | --- | --- |
| Amihan Printed Bolero | `gid://shopify/Product/15392866894006` | 950.00 |
| Dapithapon Printed Bolero | `gid://shopify/Product/15392866926774` | 950.00 |
| Luntian Printed Bolero | `gid://shopify/Product/15392866959542` | 950.00 |
| Amihan Modern Terno Set | `gid://shopify/Product/15392866992310` | 1520.00 |
| Dapithapon Modern Terno Set | `gid://shopify/Product/15392867025078` | 1520.00 |
| Amihan Printed Midi Skirt | `gid://shopify/Product/15392867057846` | 950.00 |
| Dapithapon Printed Midi Skirt | `gid://shopify/Product/15392867090614` | 950.00 |
| Hiraya Floral Halter Dress | `gid://shopify/Product/15392867123382` | 1990.00 |
| Sinag Printed Wrap Dress | `gid://shopify/Product/15392867156150` | 1990.00 |
| Luntian Printed Blouse | `gid://shopify/Product/15392867188918` | 950.00 |

## Source and evidence

- [Catalog source](../../data/shopify/catalog.json), [schema](../../data/shopify/schema.json), and [ID/state map](../../data/shopify/state.json).
- [Asset provenance](../../data/catalog/provenance.json): exact prompts, reference paths, output paths, dimensions, checksums, and inspection notes.
- [Sanitized mutation receipts](../../data/shopify/mutation-receipts.json). Signed upload parameters and authentication are excluded.
- [Before snapshot](../../data/shopify/snapshots/before-catalog-replacement.json). The final snapshot is recorded after cleanup.

All artwork, garment facts, measurements, and photographs are demonstration content. Artwork is attributed to AI-generated sample concepts, not to Tisha Chavez. The active store price references were retained for the approved categories; new separates use the approved provisional PHP 950 sample price.

## Pending handoff

Delete the exact six authorized old product IDs after their final ownership read. Inspect superseded content references and record any Files/theme usage that cannot yet be established. Samples remain unavailable for sale.
