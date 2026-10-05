# Editing the TCPF storefront

Use **TCPF Hero and Header Preview**, theme **188685779126**, for the latest homepage/header revision in Online Store → Themes → Customize. [Open the protected preview](https://tcpfbasics.myshopify.com/?preview_theme_id=188685779126). The earlier Shop-first Preview and the GitHub-connected themes remain separate.

## Homepage

| Section | Edit in the theme editor |
| --- | --- |
| TCPF hotspot hero | Two-line headline, introduction, button, featured product, outfit image, matching artwork collection and separate hotspot position sliders. Artwork image/story comes from the product's TCPF Artwork reference. |
| TCPF shop introduction | Category heading, RTW collection and five category blocks. Keep **H2 — below the hero** and the compact heading enabled when using the hero above it. |
| TCPF ready-to-wear edit | Native collection, product count and heading. Product order comes from the collection. Its card blocks retain native image/title/price controls. |
| TCPF artwork edits | Two artwork collection blocks and garment images. Paintings and attribution come from each collection’s TCPF artwork reference. |
| TCPF story panel | Approved story, image, caption and link. Keep AI sample attribution with demonstration art. |
| TCPF bespoke invitation | Secondary inquiry heading, copy and link. |

Reorder sections with the native editor controls. Category images remain within a contained horizontal row on mobile; the RTW edit uses two columns. Do not add urgency, reviews, artist/celebrity claims or delivery promises without real evidence.

The hero starts with the Amihan Modern Terno Set and its existing styled photograph. When changing the product, choose a matching photograph and artwork collection. The artwork is always taken from that product; the collection picker only sets the **Explore the print** destination. Leaving the collection empty links to the artwork on the product page. Position the product hotspot relative to the outfit photograph and the artwork hotspot relative to the square artwork panel. Both use percentage coordinates and retain their position when the layout scales. Keep controls clear of faces and important garment details.

Hotspots open one detail panel at a time. Close returns focus to the trigger; Escape also closes the panel. Desktop panels overlay the composition; mobile panels appear underneath. Without JavaScript, the detail cards and destination links remain visible. A missing artwork reference hides its panel/hotspot; an absent custom photograph falls back to the product's featured image. Sample prices, concept status and AI artwork attribution remain visible in the corresponding cards.

## Header

The original gold logo is retained in a compact white header. **Header → Logo** controls the adjacent brand name and caption; clear those fields to show only the supplied mark. Native theme logo-height controls still apply, with smaller mobile limits for navigation space.

**Header → Menu → TCPF artwork feature** controls the dropdown feature. The parent menu title defaults to **Shop** and must match a native menu item with child links. Choose an artwork collection and an outfit photograph from that collection. Its shared artwork supplies the smaller image. Clear the featured collection to return to the native menu presentation. The feature is shown on larger desktop layouts; narrow screens use the native navigation drawer.

Native menu destinations, search, account, cart and scroll-up sticky behavior remain in Horizon. Desktop menu placement is centered; mobile uses the familiar menu/identity/actions layout. No new announcement bar or promotional claim is added.

## Shared product information

Products → select a product:

- Native title, description, prices, media, variants, inventory and SEO stay in Shopify Products.
- TCPF Artwork (`tcpf.design_concept`) selects a reusable artwork record.
- TCPF Garment Details (`tcpf.apparel_details`) selects silhouette, fit, fabric, composition, lining, stretch, fastening, pockets, care, included items and ordered size guides.
- Related products and context use “Complete the look” for outfit pieces or “More in this print” for alternatives. The theme excludes the current product and already-included set components from extra related cards.
- Set components list the bolero first, skirt second. This is presentation data, not automatic bundle inventory synchronization.

Content → Metaobjects contains the merchant-named Artwork, Garment Details, Size Guide and Size Measurement libraries. Preserve existing internal types and keys; the theme depends on them. See the [data editing guide](../data/04-merchant-guide.md).

A shared entry change affects every referencing product. Artwork origin/attribution must be accurate. Real artwork should replace the AI concept before it is described as the artist’s painting.

## Size guidance

Measurements are typed positive numbers in cm. Rows are ordered XS, S, M, L, XL. Current guides show garment circumference rather than body size; sets have separate bolero and skirt guides. Missing irrelevant columns are hidden; missing cells are shown as unavailable rather than invented zero values.

The PDP disclosure works in HTML without JavaScript. The Size guide page’s `TCPF size-guide directory` has a native picker: select and reorder the five reusable guides. Theme settings store their **handles**; Admin GIDs belong in the API state map, not this picker’s JSON selection.

Validate physical garment dimensions, ease and fit notes before sale. Do not infer body/model measurements from AI photographs.

## Collections

Edit membership, order, descriptions, images and SEO in native Collections. Publish required collections and products to Online Store to make them visible. The two artwork edits use the `artwork` suffix and the collection’s `tcpf.artworks` reference; other collections use the default template.

Native filtering, sorting and pagination remain in Horizon. The present store exposes Availability and Price. Sample products have zero stock, so an In stock filter produces an honest empty result. Add useful supported filters through the merchant’s Shopify configuration when real merchandise is ready.

## Pages, forms and navigation

Four pages are configured: `our-story` → `story`, `bespoke` → `bespoke`, `contact` → `contact`, `size-guide` → `size-guide`. General pages use the default template. Native page body copy and theme section copy are both editable; avoid repeating the same introduction in both.

Bespoke includes a TCPF story panel with the Dapithapon sample outfit. Edit its image, heading, copy and attribution in the template; retain the AI/concept caption until approved real work replaces it.

Contact and Bespoke use Shopify’s contact backend with visible labels and unique section-derived IDs. Bespoke adds optional garment/date fields. The client must confirm recipient/contact details and the operating process. Do not submit a test inquiry without authorization to send it.

Menus: `TCPF Main Menu` / `tcpf-main-menu` and `TCPF Footer Menu` / `tcpf-footer-menu`. Edit native menu resources. The custom footer also exposes fallback destinations and hides policies without body content. Policy content itself stays in Shopify settings.

## Brand controls

Theme settings → TCPF identity:

- **Use approved TCPF fonts** loads the licensed Fraunces/Instrument Sans WOFF2 files and avoids native font duplication. Turn it off to expose and use the original Shopify font pickers.
- **Show sample preview notice** controls the page-level banner only. It does not disable product-level sample safeguards.

Use native palette controls for canvas/ink and the additional colors: color1 plum, color2 periwinkle, color3 dividers, color4 petal, color5 muted ink. Preserve contrast when changing them. The supplied original gold logo remains on white; replace it only with a client-approved source file.

The launch presentation is English/PHP and Philippines first. Custom strings in other native locale files are English fallbacks; translate all custom copy before enabling another language.

## Sample safeguards and real launch

The current ten products are ACTIVE only for the protected demonstration. They keep `tcpf.concept_only = true`, tracked zero stock and DENY overselling. The theme identifies samples, removes their forms/quick/accelerated purchase actions, excludes fictional sample Product/Offer metadata, and withholds checkout if a concept remains in a cart. Native removal controls remain available. Theme behavior is not a checkout extension; backend inventory protection remains essential.

For a genuine sellable product, confirm artwork authorization/attribution, photographs, actual material/care/measurements, price, stock and policies. Replace demonstration facts, update the shared entry statuses accurately, and clear the concept flag only after the merchandise is ready. Set real inventory and review the real product through Shopify’s native commerce flow when functional evaluation is authorized.

Client creative approval is still pending. Keep password protection until the client has approved the storefront and the merchant has completed commercial setup. No live theme publication, payment setup, domain purchase, shipping/returns policy creation or customer-message submission was performed by this build.

## Source maintenance

[Source record](01-source.md) lists the Horizon revision and native integrations. Custom files use `tcpf-`. Compare future upstream releases against that revision rather than overwriting the root directories. Preserve the original license; this theme is for this merchant’s own Shopify store under a direct services engagement.
