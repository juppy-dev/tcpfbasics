# TCPF Basics Shopify theme

Custom merchant theme based on Shopify Horizon, with the approved Contemporary Wearable Gallery identity and shop-first, Philippines-first storefront.

## Project contents

- Native Shopify theme directories at the repository root.
- `docs/brand/`: researched brand system and retained identity assets.
- `data/catalog/`: tracked provenance for 40 original AI sample photographs and five artwork masters; the PNG originals are hosted on Shopify Files and retained locally as ignored copies. See [asset storage and recovery](data/catalog/README.md).
- `data/shopify/`: reusable custom schema, source catalog, native ID maps and readback evidence.
- `docs/theme/`: source record, merchant editing and preview handoff.

## Local workflow

Project delivery and remaining launch work are tracked in [TCPF Basics — Shopify storefront on Linear](https://linear.app/juppy-dev/project/tcpf-basics-shopify-storefront-e76388d3c34d). Completed brand, catalog and theme tasks have evidence; client approvals, production readiness, validation and conditional follow-ups remain open.

Use Shopify CLI with store `tcpfbasics.myshopify.com`. Upload only to the recorded unpublished preview theme. The live theme must not be overwritten or published by the development workflow.

The GitHub-connected branch excludes catalog PNG originals to stay below Shopify's 50 MB import limit. Keep source checksums, CDN mappings and provenance in Git. Theme templates and product/metaobject references already resolve the hosted images; an ordinary theme checkout needs no image re-upload. See [asset storage and recovery](data/catalog/README.md) before restoring or adding originals.

```sh
shopify theme dev --store tcpfbasics.myshopify.com
shopify theme check --path .
```

Sample concepts are demonstration content and remain unavailable for sale. Inventory, actual garment specifications, artwork authorization, policies, and client creative approval must be resolved before launch.

See [the approved build plan](docs/plans/2026-10-05-shopify-theme.md), [source/license record](docs/theme/01-source.md), and [catalog merchant guide](docs/data/04-merchant-guide.md). Retain LICENSE.md; direct delivery is solely for this merchant’s own use.

## Merchant handoff

The new [protected preview](https://tcpfbasics.myshopify.com/?preview_theme_id=188681584822) is unpublished theme 188681584822. The current live theme remains 188630696118. [Theme editing guide](docs/theme/04-merchant-guide.md), [build evidence](docs/theme/05-build-report.md), and [store setup](docs/theme/03-store-setup.md) describe the completed configuration and remaining client launch facts.

Final source review and execution decisions are recorded in [review and decisions](docs/theme/06-review-and-decisions.md). Theme Check reports zero errors and six unchanged upstream warnings. Source and preview observations do not establish transaction, accessibility, performance or conversion certification.

A portable [visual build handoff](docs/theme/tcpf-build-handoff.html) includes preview links, deliverables, evidence limits and execution decisions. It uses the approved TCPF identity and opens without the local review server.
