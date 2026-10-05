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

## Font assets

WOFF2 subsets retain Latin, Latin Extended, combining marks, common punctuation/currencies (including ₱), arrows, and trademark. Fraunces weight 400–500, SOFT 25, WONK 0; Instrument Sans 400–600. The original source fonts and OFL licenses remain in docs/brand/assets/fonts; licenses are also shipped in theme assets. Brand font mode skips native font-face/preload output; disabling it exposes and uses the original Shopify font pickers.

Compressed source sizes: Fraunces 360,440 → 85,300 bytes; Instrument Sans 194,336 → 61,112 bytes. Task 2 static Theme Check: zero errors, six unchanged upstream warnings (header settings count and divider doc parameters). Original logo File gid://shopify/MediaImage/46391212769462 is READY and stored separately from catalog media.

## Native integrations implemented

- Main/password layouts: one brand/font asset entry and an optional preview notice. Native font generation/preload honors the brand-font toggle; font pickers remain available when disabled.
- Header: store-name H1 becomes a span because the custom homepage owns its H1. Header/footer groups reference the new menus and retained logo.
- Product information and both featured-product sections: omit sample Product JSON-LD; product sticky purchase suppressed for samples.
- Buy buttons, standalone add, accelerated checkout, quick add and quick order: typed concept guards, with native real-product branches retained.
- Native price/card/resource-card/gallery/price block: sample labels, no sample compare-at/instalment presentation, compatible refs/events.
- Cart summary/products: concept line notice, quantity disabled, native removal retained, checkout withheld while a concept remains.
- Product grid: empty collection has an RTW route.
- English TCPF launch labels added as fallbacks to all native locale files; other-language storefronts require translation of custom content before enabling them.

Template resource serialization: native collection/page/image picker references; size-guide `metaobject_list` stores entry handles in the context of its declared type. Admin GIDs remain the API identity map.
