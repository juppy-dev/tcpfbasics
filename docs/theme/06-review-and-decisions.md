# Phase 3 — review and execution decisions

2026-10-05 · Protected preview and merchant source complete. Live launch remains a client decision.

## Independent review

A fresh reviewer inspected `5742b42..d4c4818`, including custom source, native integrations, templates, configuration, data evidence and comparison against pristine Horizon `5acd1b6b66c02f61d3216e3adace5dd9e0404fc9`.

- Critical: none found in inspected source.
- Important: none found in inspected source.
- Minor: Bespoke lacked the approved example imagery. Corrected in `363793b` with the existing story-panel section, Dapithapon sample outfit and explicit AI/concept attribution. This remains a Minor grade; fulfilling the user's requested design takes precedence over the skill's default deferral rule.
- Correction evidence: final Theme Check has zero errors and six unchanged upstream warnings; Shopify accepted the template upload to unpublished theme 188681584822; the actual bespoke preview shows the image, heading and attribution. No second reviewer was dispatched.
- Native JavaScript remains unchanged. Source review covered native component contracts, sample purchase/metadata guards, missing typed data, guide semantics, set/related filtering and resource recovery evidence.

The reviewer did not perform transactions, submit contact forms, audit interactions, measure performance/accessibility/conversion or grant client merchandise/creative approval. Those exclusions are ruled on below. The implementer subsequently observed the remaining Our story, search, empty cart, password and 404 views; detailed evidence is in the [build report](05-build-report.md).

The final change is template configuration, so it needs no new architecture diagram. Existing project/theme diagrams were updated to reflect completed observations and review.

## Rulings made

Listed in decision order, including the cost or remaining limitation of each.

- Ruling: Use a feature branch in the requested directory rather than a second worktree — the user requires the theme here and phase 2 already used this arrangement — costs branch-only isolation.
- Ruling: Source inspection, static lint, rendered observations, and authenticated readback replace TDD/task-done test invocations — developer explicitly forbids tests unless requested — costs no automated regression suite.
- Task 4: Ruling: Add English TCPF label fallbacks to all native locale files — the Philippines-first build is English and Horizon requires matching locale key shapes; existing translated text/comments stay intact — costs translation work if other storefront languages are enabled.
- Task 6: Ruling: Prepared exact page/menu setup while authorization is pending — existing app lacks scopes and browser observation is unavailable; plan allows prepared manual setup — costs missing native page/menu resources until scope authorization or merchant setup.
- Task 8/9: Ruling: Overlap final source documentation/review with remaining browser observations — source, upload, protected activation and core rendered views are ready; concurrent Arc use interrupts native navigation — costs the reviewer not seeing those remaining rendered observations until they are completed. Native execution remains in this session.
- Final: Ruling: Complete the bespoke imagery requirement despite the skill's default minor-deferral rule — the user requested this visual deliverable and the approved design explicitly includes example artwork/garment imagery; user scope takes precedence over skill workflow — costs one additional template-only change using an existing section and attributed sample asset. Severity remains Minor; no artificial re-grading.
- Final: Ruling: Cart/checkout transactions, mixed-cart removal and real-product purchases remain source-inspected only — the approved observation plan excludes purchase submissions; protected samples have zero stock and DENY — costs no transaction-level acceptance evidence.
- Final: Ruling: Contact delivery, server validation and spam challenges remain unsubmitted — native markup/backend and enabled hCaptcha are observed, but sending an inquiry has not been authorized — costs no delivery or post-submit evidence.
- Final: Ruling: Variant/filter/editor reload/keyboard/mobile behavior has source contracts and limited rendered observations — no full interaction or accessibility audit was part of the approved observation scope — costs unresolved interaction coverage beyond the documented views.
- Final: Ruling: Complete the remaining Our story/search/cart/password/404 observations in this session — the reviewer did not control the shared browser; the active TCPF preview now exposes these pages — costs no independent reviewer observation of those views. All five were observed by the implementer; cart evidence is the empty state only.
- Final: Ruling: Report accessibility/performance/conversion as implementation intentions, without measured certification — no audit, benchmark or conversion experiment was performed — costs an unmeasured live baseline.
- Final: Ruling: Leave final artwork/merchandise/policy/live approval to the client — protected sample demonstration does not establish actual merchandise or business commitments — costs client confirmation and commercial setup before launch.
- Final: Ruling: Preserve feat/shop-first-theme and the requested directory without Git integration — the approved plan says keep them unless integration is requested; no merge/push/PR was requested — costs an unmerged, unpushed local branch.

The earlier page/menu authorization limitation was resolved by the user-authorized retry; all four pages and two menus now exist. The test restriction above records the rule in force during implementation; the final configuration change followed the current low-impact verification guidance.

## Deferred minors

None. The one minor requirement omission was completed.

## Branch handoff

Keep `feat/shop-first-theme` in `/Users/juppy/Projects/tcpf-basics`. No merge, Git push, PR or live theme publication was requested. The protected preview, source, merchant editing guide, data schema/provenance and final readback are the deliverables. The execution scratch directory is removed only after this durable record is committed.
