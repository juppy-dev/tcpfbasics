# Phase 2 — review and execution decisions

2026-10-05 · Phase 2 complete. Theme design remains the next phase.

## Independent review

A fresh reviewer inspected `04aa637..1978c54` and supplemental cleanup commit `a300832`. Inspection included five artwork masters, eighteen representative product photographs, schema, source, readbacks, deletion evidence, and merchant instructions.

- No Critical or Minor findings.
- One Important finding: the temporary importer relied on a static ownership snapshot after a potentially successful but interrupted write.
- The finding was corrected: current handle reads and sanitized receipt IDs establish ownership; source signatures guard adoption; recovered collection/product/variant IDs are saved without new creation requests. Local state/receipt replacement is atomic.
- Authenticated recovery reconstructed 8 collection, 10 product, and 50 variant mappings. The resulting state equals the committed state exactly; no Shopify mutations were performed. [Recovery evidence](../../data/shopify/snapshots/recovery-readback.json) and [procedure](05-import-recovery.md).
- No tests were added or run, following the developer instruction. Fix evidence is authenticated reconstruction and source/state comparison; no second independent review was dispatched.

## Rulings made

Decisions are listed in order. Each records the practical cost if wrong or incomplete.

- Ruling: Work on a feature branch in the requested directory — the developer authorizes routine isolation choices and the user wants this directory to contain deliverables — costs branch-only isolation rather than a second checkout.
- Ruling: Use asset inspection and authenticated data readback, with no added or run tests — developer instruction expressly prohibits tests unless requested — costs absence of an automated regression suite for the data import.
- Task 1: Ruling: Omit explicit admin input for merchant namespace metafield definitions; expect PUBLIC_READ_WRITE on readback — this namespace uses merchant-owned defaults while GraphQL input enums expose only app-owned admin choices — costs no added restriction beyond the current model.
- Task 4: Ruling: Upload accepted assets and stage independent content while remaining images render — definitions and the individual source assets are already accepted, and all references still wait for readiness — costs partial staged records if image generation is interrupted.
- Task 6: Ruling: Retain the remaining 17 old Files pending theme usage audit — a separate theme CLI text audit found explicit references to three remaining files, fourteen have no text matches, and MediaImage exposes no exhaustive usage connection; new catalog references are exclusively original assets — costs continued storage of unused borrowed files until usage is established.
- Final: Ruling: Theme rendering, accessibility, performance, and sample purchase guards stay in phase 3 — no theme implementation exists in this data plan — costs delaying storefront-level acceptance until that build.
- Final: Ruling: Treat garment facts and physical print fidelity as unverified demonstration content — the user requested original AI sample products; draft flags and merchant instructions make this explicit — costs requiring actual garment/artwork validation before sale.
- Final: Ruling: Keep client creative approval pending — technical inspection establishes consistency but does not approve artwork for the client — costs a later creative approval step before protected publication.
- Final: Ruling: Retain old Files whose broader usage is not proven — partial theme audit finds three referenced files and fourteen without matches — costs keeping seventeen pre-existing Files until usage is resolved.
- Final: Ruling: Keep the feature branch and requested directory in place for the continuing theme project — no merge/push/PR was requested; the developer authorizes routine isolation choices — costs leaving phase 2 unmerged and unpublished in Git.

## Deferred minor findings

None.

## Continuing work

The local branch `feat/sample-catalog` and requested workspace are preserved. Phase 3 will use the approved TCPF identity and new sample assets. The user selected a Philippines-first launch and a shop-first homepage composition. Theme CLI read access is confirmed; no theme code or preview publication has been implemented.
