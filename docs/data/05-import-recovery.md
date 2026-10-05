# Recover an interrupted sample import

2026-10-05 · Operational procedure for this catalog. There is no permanent importer to maintain; the upload/query helpers are temporary.

## Resolve ownership before retrying

A missing CLI response does not mean Shopify rejected the write. Do not rerun a creation request using the original ownership snapshot.

1. Preserve [state](../../data/shopify/state.json), [sanitized receipts](../../data/shopify/mutation-receipts.json), [catalog source](../../data/shopify/catalog.json), and [before snapshot](../../data/shopify/snapshots/before-catalog-replacement.json). A valid previous state file remains intact until its complete replacement is written.
2. Find the operation named `import-product-{handle}` or `import-collection-{handle}` in the receipts. A successful result provides the returned product/collection GID; a product response also provides variant and inventory-item GIDs. Temporary CLI output files may contain the response even when state persistence was interrupted. Do not copy private staged-upload responses or authentication into the project.
3. Read any recovered GID from Shopify. If no usable response exists, query the **current** store by exact handle and compare the returned handle explicitly. Search can return partial matches; incomplete pagination is not an ownership proof.
4. Establish ownership using the recorded ID, source signatures, and original snapshot. The ten new product handles were absent before import. The two reused collection handles, `terno-sets` and `dresses`, must resolve to their original snapshot IDs. Never overwrite a different ID or unrelated handle match.
5. Before adopting an unrecorded product, compare its title, description, vendor, product type, SEO, DRAFT/concept status, exact five size labels, sample SKUs/prices, tracked inventory policy, core garment/artwork references, four ordered media IDs, and intended collection IDs with source. For a new collection compare title, description, SEO, manual status, image filename/alt text (allowing Shopify’s copied-image filename suffix), and permitted artwork references. A mismatch stops recovery for inspection; it does not authorize replacing the record.
6. Save the recovered collection/product IDs and all variant/inventory-item IDs to state **without a new Shopify creation mutation**. Compare against any receipt IDs. Save local state and receipts through a complete temporary file followed by atomic replacement, so an interrupted write does not truncate the previous JSON.
7. Query the exact handle again immediately before any genuinely missing record is created. Complete reference-only patches with `metafieldsSet`; do not rerun an incomplete `productSet` list synchronization. Finish with the full catalog readback, including publication, inventory quantities, ordered media, and relationships.

## Example current-handle read

Pass variables in a temporary JSON file rather than interpolating them into a shell command. Use the authenticated CLI, store `tcpfbasics.myshopify.com`, and API `2026-10`.

```graphql
query ResolveProduct($query: String!) {
  products(first: 5, query: $query) {
    nodes {
      id
      handle
      title
      status
      variants(first: 10) {
        nodes { id title sku inventoryItem { id } }
        pageInfo { hasNextPage }
      }
    }
    pageInfo { hasNextPage }
  }
}
```

Example variable: `{"query":"handle:amihan-bolero"}`. This small query resolves IDs; request all source-signature fields from step 5 before adopting an unrecorded result. Resolving an ID alone does not establish ownership.

## File and content recovery

- New file names are `tcpf-sample-{asset-id-with-slashes-replaced-by-hyphens}-v1.png`. Resolve an uncertain upload by its exact filename or returned MediaImage ID, compare its alt text/dimensions and recorded source checksum, then wait for `READY`. Never create a duplicate or replace a different file to clear an error. A checksum in local state proves the intended local bytes, not an independent hash of Shopify's processed image.
- Retain a processing file's ID and poll it. An existing unrecorded filename requires ownership recovery before the temporary uploader continues. Private signing parameters stay outside receipts and Git.
- Metaobject handles are stable and type-specific. Resolve the existing owned entry and compare its full field map with source before upserting. References wait for their files/entries to be ready. Keep entries DRAFT.
- A deletion is recovered by its exact receipt ID and a subsequent node read returning null. A product with the same handle but a new GID is not the authorized old product.

## Review correction and evidence

The independent phase 2 reviewer identified stale ownership reads in the temporary product/collection helper. The corrected helper consults successful receipts, reads current handles before creation, validates source signatures, and adopts completed records without another creation request. Its recovery-only path reconstructs the eight collection, ten product, and fifty variant mappings through authenticated reads; store writes are disabled in that path. The reconstructed mapping matched the committed state exactly. [Authenticated recovery evidence](../../data/shopify/snapshots/recovery-readback.json).

No tests were added or run. This evidence is an authenticated reconstruction of the delivered catalog, followed by source/state comparison. Future imports must follow this procedure rather than depend on disposable helper files remaining in `/tmp`.
