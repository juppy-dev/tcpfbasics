# Horizon source record

Imported 2026-10-05 after fetching Shopify/horizon main. Revision **5acd1b6b66c02f61d3216e3adace5dd9e0404fc9**, committed 2026-09-21T03:23:31-05:00; native theme version 4.2.0. Fetch confirmed no newer main revision than the read-only design research.

Eight native theme directories are imported directly; upstream Git history and README are not copied over this client project. The original LICENSE.md is retained. This is a direct merchant services engagement for TCPF’s own Shopify store. The derived theme cannot be sold as a general-purpose theme or redistributed.

## Interfaces retained

- Native `product-component`, media gallery, product details and product form refs/events.
- Static `_product-card` theme block consumes `closest.product`; card snippet receives `product`, `children`, and native context.
- Price snippet receives `product_resource` and retains selected-variant updates.
- Main collection filtering, sort, pagination and product grid container.
- Native cart, predictive search, contact backend, and dialogs.

## Upstream updates

Compare native changes against the recorded upstream revision before importing later releases. Preserve TCPF integrations listed here as they are added; review component refs/events and section schemas together. Do not overwrite this project’s brand, catalog, or documentation folders.

## TCPF integration register

The implementation report records each modified native renderer. Custom components use a `tcpf-` prefix. The original source can be found at [Shopify/horizon](https://github.com/Shopify/horizon/tree/5acd1b6b66c02f61d3216e3adace5dd9e0404fc9).
