# Store setup record

Store: tcpfbasics.myshopify.com. Content/navigation scopes were authorized by the user and confirmed by fresh authenticated reads on 2026-10-05. Theme CLI access works. Native Arc admin access is now available; the Chrome wrapper still has no selected page.

## Pages resolved through exact-handle readback

| Title | Handle | Template suffix | Body source |
| --- | --- | --- | --- |
| Our story | our-story | story | 02-page-copy.md / Our story |
| Bespoke | bespoke | bespoke | 02-page-copy.md / Bespoke |
| Contact | contact | contact | 02-page-copy.md / Contact |
| Size guide | size-guide | size-guide | 02-page-copy.md / Size guide |

Our story, Bespoke, and Size guide were created as unpublished pages. The existing empty Contact page was reused and left intact. Intended suffixes are assigned after the new theme is uploaded. Exact IDs are saved in data/shopify/theme-state.json; before/after setup snapshots preserve the original state.

## Navigation

Created `TCPF Main Menu` (handle `tcpf-main-menu`): Shop → Ready-to-wear, Boleros, Terno sets, Skirts, Dresses, Tops; Our story; Bespoke; Contact. Created `TCPF Footer Menu` (`tcpf-footer-menu`): Ready-to-wear, Our story, Bespoke, Size guide, Contact. Use actual collection/page resources. These handles are already selected in theme groups.

## Collections

Assign the `artwork` template suffix to Amihan Garden and Dapithapon. Other collections use the default template. Do not alter membership or catalog IDs.

## Protection

Anonymous read on 2026-10-05 returned HTTP 200 at /password. Admin confirmation of protection is still pending; do not save or expose the password. Concept content remains DRAFT until the task 8 preview conditions are met.

## Client facts before launch

Confirm real products, measurements, material/care information, artwork ownership/attribution, bespoke process, direct contact information, delivery/returns/privacy policies, and actual inventory. This prepared content does not complete client approval or live launch.
