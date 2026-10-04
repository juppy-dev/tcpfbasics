# Catalog replacement decision

Recorded: 2026-10-05. Store: `tcpfbasics.myshopify.com`. Currency: PHP.

The user instructed us to scrap the existing products, which contain borrowed images, and start from scratch with **10 sample products and 3–5 original AI-generated product photographs per product**. This supersedes the earlier proposal to reconcile or expand the existing catalog.

## Read-only snapshot

An authenticated Shopify Admin GraphQL read returned six products with no further product page. Each has XS, S, M, L, and XL variants at the same price. No compare-at prices were set.

| Existing product | Status | Observed price | Shopify product ID |
| --- | --- | --- | --- |
| CONCEPT — Painted Bolero Top | Draft | 890.00 | 15390146527414 |
| CONCEPT — Painted Terno Set | Draft | 1,450.00 | 15390146560182 |
| CONCEPT — Floral Halter Dress | Draft | 1,990.00 | 15390146592950 |
| FRANCIA — Painted Filipiniana Bolero | Active | 950.00 | 15390182244534 |
| FRANCIA & CLAIRE — Modern Terno Set | Active | 1,520.00 | 15390182310070 |
| ANNELEISE — Blue Floral Halter Dress | Active | 1,990.00 | 15390182375606 |

These values preserve context for the instruction to keep current pricing. They are not evidence of genuine SKU availability or approved retail specifications. No borrowed image files are copied into the project.

## Phase 2 scope

1. Design the custom-data schema and ten-product sample assortment together.
2. Generate new concept artwork and garment imagery, with four photographs per product as the working target: 40 product images total.
3. Prepare complete demonstration records. Label sample facts and generated art clearly; leave stock unavailable for sale.
4. Upload new assets and create draft products with their custom-data references.
5. Remove the six old products under the user's replacement instruction, after the prepared replacement set is available for review. Record the mutation results and read back the new catalog.
6. Remove identified borrowed assets from Shopify Files only after checking whether any other records reference them. Product removal and global file removal are separate actions.

At the time of this note, no store data has been changed. The new catalog is phase 2 work, following the brand review. See the [phase diagram](../../diagrams/project-phases.md).
