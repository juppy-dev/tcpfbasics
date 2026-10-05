# Horizon source and theme access — phase 3 research

2026-10-05 · Read-only investigation. Theme implementation has not begun.

## Source observed

The requested [Shopify Horizon repository](https://github.com/Shopify/horizon) was cloned into a temporary inspection directory through the GitHub CLI wrapper. The observed main commit is `5acd1b6b66c02f61d3216e3adace5dd9e0404fc9`, committed 2026-09-21. Its release notes identify **4.2.0**. Refresh the upstream revision when the approved theme implementation starts; this note does not freeze a future “latest” claim.

Horizon renders HTML through Liquid, uses theme blocks, native custom elements, ES modules and an import map, and progressively enhances Shopify's server-rendered storefront. Its product layout captures native media and product-detail blocks before rendering `product-information-content`. Collection/search filtering, pagination, variants, product forms, dialogs, and cart behavior already have platform-aware implementations.

The [upstream README](https://github.com/Shopify/horizon/blob/main/README.md) warns that main can contain unreleased features. The actual store preview will need compatibility inspection before delivery. Preserve the upstream copyright and [license](https://github.com/Shopify/horizon/blob/main/LICENSE.md). Its terms expressly cover direct merchant delivery as part of a services engagement for that merchant's Shopify store; this project is a client service engagement.

## Authenticated store themes

Separate Shopify theme CLI authentication succeeded. No manual login was required for the read-only investigation.

| Theme | ID | Role |
| --- | --- | --- |
| tcpf-basics/main | 188630696118 | Live |
| Horizon | 188630433974 | Unpublished |
| TCPF Client Demo | 188657959094 | Unpublished |
| TCPF Wearable Art Demo | 188664479926 | Unpublished |
| Development (54337d-juppy) | 188654321846 | Development |

No theme was changed, uploaded, or published. The custom build should have an explicit preview target and preserve the live theme until the client launch decision.

## Old image usage

Liquid, JSON, JavaScript, and CSS were pulled into a temporary audit directory from all five themes. Image binaries were excluded. Filename and exact-ID scans found explicit text references to **three** of the **17** remaining pre-existing Files; **14** had no text matches. This is not an exhaustive usage assertion for apps, other content contexts, or non-text theme assets.

The [cleanup snapshot](../../../data/shopify/snapshots/catalog-cleanup.json) records theme IDs, relative source paths, and matching line numbers. Keep those old files while their known or uncertain uses remain. None enters the replacement catalog or the future fresh-Horizon source import.

## Planning implications

- Use the approved TCPF palette, Fraunces/Instrument Sans fonts, supplied logo, and new sample imagery as the design basis.
- Build custom editorial sections and reusable artwork, garment, sizing, and matching-piece components while retaining Horizon's Shopify commerce interfaces where applicable.
- Keep product facts server rendered from the approved data model. Sample notices and purchase guards must cover product, card, search, recommendations, cart, and structured-data paths.
- Shipping markets and operating policies are not yet confirmed. PHP and a Philippine business base are known; no dispatch promise or overseas delivery claim should be invented.
- Theme design, merchant controls, template composition, and acceptance criteria still need the phase 3 specification and plan review required by the brainstorming workflow.
