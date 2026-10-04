# TCPF Basics — mood and imagery direction

Version 1.0 · Imagery mood approved through the user's written-system review on 2026-10-05. Product generation and upload remain phase 2 work.

## The world

Warm daylight, quiet gallery walls, painterly color, tactile fabric, and a person wearing the clothing naturally. The mood should feel **expressive, luminous, considered, and welcoming**. Keep the garment's shape and the artwork's character visible.

The [concept moodboard](assets/moodboard/wearable-gallery-v1.png) is an AI-generated direction study. It does not show existing inventory, prove fabric specifications, or reproduce a confirmed Tisha Chavez painting. Its conceptual Filipiniana detail explores the chosen mood; it is not one of the ten catalog products. [Provenance and exact prompt](assets/moodboard/provenance.json) are retained with the asset.

## Image categories

| Category | Purpose | Direction |
| --- | --- | --- |
| Primary product view | Show exactly which piece is listed. | Full silhouette, clear crop, soft neutral background, natural pose. |
| Secondary garment view | Explain shape and construction. | Side or back view selected for that garment's actual details. |
| Detail photograph | Show print scale and material appearance. | Close enough to see fabric, print, sleeve, or fastening without hiding context. |
| Styled outfit | Help the shopper imagine wearing it. | Simple supporting pieces, clear explanation of what the listing includes. |
| Artwork image | Connect print with its source. | Flat, color-consistent image of the actual linked painting/concept, separately attributed. |
| Founder/studio | Establish the real maker and process. | Authentic approved photography; no generated impersonation of Tisha. |

## Product-image brief

Use a consistent **4:5 portrait framing** as the initial catalog target, with enough surrounding space for common crops. Preserve full sleeves and important hem details. Keep pose, scale, lighting, color balance, and background consistent enough that the grid feels like one collection.

- Light: broad, soft daylight; retain visible fabric texture and natural shadows.
- Background: warm white or light ivory, without busy architecture behind the garment.
- Styling: simple supporting pieces, limited jewelry, clear set contents.
- People: natural expression and posture; use a varied, respectful casting approach without treating generated bodies as evidence of fit.
- Color: keep garment/print colors consistent between views; do not use filters that change the purchasable color.
- Details: show where the print falls, how sleeves stand, and the complete front/back silhouette.

For eventual real listings, match reference garments and artwork. For this requested sample catalog, first define the sample concept and then keep every generated view consistent with that definition.

## Four photographs per sample product

Four is the working target within the user's requested 3–5 range: **10 products × 4 images = 40 product photographs**.

1. Front or three-quarter primary view showing the full listed garment.
2. Back or side view explaining the silhouette.
3. Close-up of the artwork/print and a meaningful garment detail.
4. Styled outfit showing how the piece can be worn.

An optional fifth photograph should answer a product-specific question, such as a fastening, lining, or set component. A standalone artwork image can also live on the artwork record; it does not substitute for a required garment photograph.

## Sample generation sequence

1. **Define the sample:** garment category, construction, included pieces, colorway, proposed sizes, and linked concept artwork. Mark all invented specifications as sample data.
2. **Create an artwork master:** newly generated concept artwork with a unique internal title and explicit AI attribution. Do not reuse borrowed marketplace paintings.
3. **Create the primary photograph:** use the artwork master and a detailed garment brief. This establishes the sample's visual reference.
4. **Generate additional views as edits:** reference the primary photograph and artwork master to preserve the garment, print, model, styling, and lighting. Use a separate call/output for each final image rather than slicing a contact sheet into product photos.
5. **Inspect and revise:** compare sleeve construction, print colors, scale, placement, fastenings, hems, and included pieces across all views. Reject inconsistent or visibly malformed images.
6. **Prepare assets:** retain originals and generation provenance; produce suitable storefront derivatives during catalog preparation. Add useful alt text and associate each image with its intended product.
7. **Upload and read back:** use Shopify's supported file/media workflow through authenticated CLI GraphQL where available. Verify image processing, record references, and the four-photo count before treating a product as ready for review.

The exact generation prompts depend on the ten-product assortment developed in phase 2. This is an art-direction workflow, not a completed schema or an upload script.

## Fidelity and attribution

The sample products are a demonstration collection, not verified TCPF stock. Keep them as drafts, with a preview/sample notice. Generated artwork must not be credited to Tisha Chavez, called a real painting from her studio, or tied to an invented memory or cultural origin.

For a later real catalog, a generated product photograph needs faithful approved garment/artwork references. Photography cannot establish composition, measurements, comfort, care instructions, availability, or shipping times. Those remain merchant-supplied facts.

Product titles and captions should avoid “hand-painted” when the depicted garment is meant to carry a print. A printed painterly surface and paint physically applied to cloth are different product techniques.

## Editorial photography

Use fewer, stronger images with room for captions. A campaign can include movement and a more expressive setting, while product photography remains clear. Genuine founder and studio imagery should come from the client or a new real shoot, with approval for website use.

Historical publisher collages in the research directory are not storefront assets. Existing borrowed Shopify product images are excluded from the replacement set.

## Alternative text and filenames

Describe what the image adds to understanding the garment. An example pattern is: “Back view of the sample plum botanical bolero, showing the short hem and structured butterfly sleeves.” Mention sample/generated status where needed for truthful context; avoid keyword stuffing.

A proposed file pattern is `sample-product-handle-front-01`, with view names `back`, `detail`, and `styled`. Keep the artwork master and product photographs identifiable separately. Final formats and responsive image sizes will be selected for Shopify performance during phases 2–3.

## Image acceptance

- Four separate photographs per product, with optional additions within the 3–5 range.
- Same recognizable garment and artwork across its image sequence.
- Correct visible set contents and no misleading styling attribution.
- No borrowed product imagery, recognizable celebrity imitation, or invented founder portrait.
- No broken anatomy or obviously impossible garment construction.
- Clear provenance, sample labels, alt text, and product/artwork references.
- Successfully processed Shopify assets, verified through readback.

Any concept that cannot produce consistent views should be revised before it becomes a catalog record.
