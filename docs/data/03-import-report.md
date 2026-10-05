# Phase 2 — Shopify import report

Updated: 2026-10-05. Status: phase 2 complete; independent review finding corrected and authenticated recovery recorded.

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
- [Before snapshot](../../data/shopify/snapshots/before-catalog-replacement.json). [Final snapshot](../../data/shopify/snapshots/after-catalog-replacement.json) includes fresh products, variants, media, inventory, references, entries, definitions, and Files.

All artwork, garment facts, measurements, and photographs are demonstration content. Artwork is attributed to AI-generated sample concepts, not to Tisha Chavez. The active store price references were retained for the approved categories; new separates use the approved provisional PHP 950 sample price.

## Old-catalog replacement

The six exact old records matched their snapshot immediately before deletion. All six `productDelete` results returned the requested GID; subsequent node reads returned null for all six. No other product was deleted.

| Deleted Product ID | Prior handle |
| --- | --- |

| `gid://shopify/Product/15390146527414` | `concept-painted-bolero-top` |
| `gid://shopify/Product/15390146560182` | `concept-painted-terno-set` |
| `gid://shopify/Product/15390146592950` | `concept-floral-halter-dress` |
| `gid://shopify/Product/15390182244534` | `francia-painted-filipiniana-bolero` |
| `gid://shopify/Product/15390182310070` | `francia-claire-modern-terno-set` |
| `gid://shopify/Product/15390182375606` | `anneleise-blue-floral-halter-dress` |

After product removal, authenticated `referencedBy` reads found no remaining metafield references to the old garment/artwork records. Those were removed first, then the unused guides and rows: **48 superseded metaobjects** (6 garments, 6 artworks, 6 charts, 30 rows). Node readback confirmed all removed IDs no longer resolve. No shared or uncertain metaobject was deleted.

**Seventeen old Files remain**, pending a theme/reference usage audit. Six of the 23 old file IDs no longer resolve after product/content cleanup; no separate `fileDelete` request was made. The Admin connection lacks `read_themes`, but a separate theme CLI login successfully read text files from all five themes. Three surviving Files have explicit references in existing themes; fourteen have no text matches. MediaImage exposes no general usage connection, and other content contexts have not been exhaustively audited, so all 17 were retained. Image binaries were not downloaded into the project. All 45 new assets are READY; no replacement record points to an old product, content entry, or borrowed file. [Cleanup evidence](../../data/shopify/snapshots/catalog-cleanup.json).

## Collection IDs

| Collection | Shopify Collection ID | Membership |
| --- | --- | --- |
| Ready-to-wear | `gid://shopify/Collection/511928238262` | 10 samples |
| Printed Boleros | `gid://shopify/Collection/511928271030` | 3 samples |
| Modern Terno Sets | `gid://shopify/Collection/511888359606` | 2 samples |
| Printed Skirts | `gid://shopify/Collection/511928303798` | 2 samples |
| Printed Dresses | `gid://shopify/Collection/511888392374` | 2 samples |
| Printed Tops | `gid://shopify/Collection/511928336566` | 1 samples |
| Amihan Garden | `gid://shopify/Collection/511928369334` | 3 samples |
| Dapithapon | `gid://shopify/Collection/511928402102` | 3 samples |

Two other pre-existing collections, `frontpage` and `filipiniana-tops`, were preserved. The eight target collections use native images, copy, SEO, and membership. Draft members remain unavailable in public Liquid collections.

## Final acceptance

- The final store contains exactly the ten intended sample products and 50 variants. Fresh source comparison found no differences in native fields, SEO, ordered media, references, collection membership, or inventory safeguards.
- Fresh definition/content comparison found no differences across four refined metaobject definitions, four new metafield definitions, and all 45 new entries.
- All products and metaobjects remain DRAFT. Products are concept flagged, unpublished, inventory tracked at zero, and configured to DENY overselling.
- The four original internal definition keys and legacy field types/required flags/validators were preserved. Required new-record content and legacy-field length rules are also recorded in the local source contract; new fields use their schema validations.
- All 45 accepted local asset IDs match state. Checksums match provenance; the 40 product photos are distinct outputs, four for each product. Asset inspection is documented in provenance. Client creative approval remains pending.

## Handoff and remaining work

No manual data or media import was needed. The CLI handled definitions, content, products, variants, collections, and staged-upload file creation. The [merchant guide](04-merchant-guide.md) explains native fields, shared content, typed measurements, included pieces, and sample safeguards.

Separate theme CLI authentication succeeded. Phase 3 needs latest-Horizon import, custom sections/templates, and protected-preview setup before any sample publication. Three of the 17 retained Files still have old-theme references; the other fourteen need a wider usage audit before removal. Client artwork review, actual garment/price/stock validation, policies, and launch approval remain outstanding. No preview or live-sale publication occurred in phase 2.

## Independent review

The fresh whole-branch reviewer found no Critical/Minor issues and one Important interruption-recovery gap in the temporary importer. The gap was corrected through fresh ownership/source checks and receipt-ID recovery. An authenticated recovery-only operation rebuilt all 8 collection, 10 product, and 50 variant mappings with no state differences or Shopify mutations. See [review decisions](06-review-and-decisions.md) and the [recovery procedure](05-import-recovery.md). No tests were added or run; completion evidence consists of inspection, source comparison, mutation receipts, and authenticated readback, as directed by the developer instructions.
