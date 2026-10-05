# TCPF Basics — theme architecture

2026-10-05 · Proposed phase 3 design. Theme source has not yet been imported into the project.

```mermaid
flowchart TD
    H[Latest Horizon revision + retained license] --> N[Native Liquid layout, blocks, commerce components]
    B[Approved palette, fonts, supplied logo] --> UI[Custom TCPF sections and presentation]
    N --> UI
    P[Native products, variants, media, collections] --> UI
    A[Shared artwork entries] --> UI
    G[Garment details + size guides + rows] --> UI
    R[Related products + ordered set components] --> UI
    E[Theme editor + native page/menu content] --> UI
    UI --> T[Homepage, collection, product, story, bespoke, contact, size guide]
    N --> C[Native cart, search, filters, variants, contact backend]
    S[Concept flag + zero stock + DENY] --> GUARD[Sample notices and purchase guards]
    GUARD --> T
    GUARD --> C
    T --> V[Unpublished preview theme]
    C --> V
```

```mermaid
stateDiagram-v2
    [*] --> DraftData: Phase 2 complete
    DraftData --> BuildTheme: Spec and plan approved
    BuildTheme --> GuardedTheme: Components and sample paths inspected
    GuardedTheme --> ProtectedPreview: Password + image/content review + activation
    ProtectedPreview --> ClientReview: Sample catalog unavailable for purchase
    ClientReview --> RealMerchandise: Client facts, rights, policies and inventory verified
    RealMerchandise --> LiveTheme: Separate client launch decision
```

The sample guard covers product/card/featured/recommendation/search/cart/structured-data paths. It is accompanied by store inventory safeguards; it is not a server-side checkout extension. Existing themes and uncertain old Files remain separate from the fresh-Horizon build.

See the [theme specification](../specs/2026-10-05-shopify-theme-design.md) and [data architecture](shopify-data-model.md).
