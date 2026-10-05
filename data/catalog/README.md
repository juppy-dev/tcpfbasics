# Catalog asset storage and recovery

The 40 product photographs and five artwork masters are hosted in Shopify Files. Product media, metaobject image fields and theme `shopify://shop_images/` settings already reference those hosted files. The 45 PNG originals total 87,706,706 bytes and are excluded from the connected Git branch to keep the theme import below 50 MB.

## Tracked records

- [provenance.json](provenance.json): stable asset IDs, original relative paths, prompts, generation references, dimensions, SHA-256 hashes and acceptance notes. Paths describe the original working files and remain valid after restoration.
- [Shopify state](../shopify/state.json): each asset ID maps to a MediaImage ID, filename, CDN URL, processing status and original source checksum.
- [Catalog source](../shopify/catalog.json): ordered product images and artwork references by asset ID.

All 45 catalog Files and the original logo were read back as READY during the cleanup audit. Every retained local catalog PNG matched both provenance and the recorded upload-source checksum. CDN images may be processed by Shopify; the source checksum describes the original bytes, not a guaranteed hash of a delivered CDN variant.

## Preserved originals

The cleanup uses `git rm --cached`, so the 45 originals remain at their existing local paths under `data/catalog/artwork/` and `data/catalog/products/`. The root `.gitignore` prevents those PNGs from being accidentally re-added.

A second copy is archived outside this checkout at:

`../tcpf-basics-archives/catalog-originals-2026-10-05-7dd678c.zip`

The archive contains all 45 originals plus their provenance and Shopify state. Each archived original was read and verified against its SHA-256 before untracking. This workstation archive is not part of GitHub's theme package.

The originals are also recoverable from the preserved Git revision `7dd678c83c511cd7cd0dc3736eb0dc47041c2c6d`. No history rewrite is required. From a clone containing that revision, choose an unused output filename and export:

```sh
git archive --format=zip --output=/tmp/tcpf-catalog-originals.zip \
  7dd678c83c511cd7cd0dc3736eb0dc47041c2c6d \
  data/catalog/artwork data/catalog/products \
  data/catalog/provenance.json data/shopify/state.json
```

Extract into a separate directory first and compare each PNG's SHA-256 with `provenance.json`. Copy needed originals into the ignored local paths only after checking for existing edits. Avoid force-adding the PNGs to the connected branch.

## Future asset updates

1. Keep an exact original in the archive or another durable asset store and record its provenance/checksum.
2. Upload only genuinely new or changed assets to Shopify Files. Resolve existing recorded IDs before retrying an uncertain upload, as described in [import recovery](../../docs/data/05-import-recovery.md).
3. Wait for READY, then update the relevant product, artwork or theme image reference and the tracked ID/CDN map.
4. Commit metadata and theme changes while keeping catalog originals outside the connected branch. Measure its current archive before a large media or documentation addition.

Existing documentation, brand assets, theme code, licensed fonts and the theme license remain tracked. This is a packaging change; it does not alter product records, hosted files, image quality or theme rendering.
