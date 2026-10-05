# TCPF Basics — theme architecture

2026-10-05 · Implemented phase 3 architecture. Horizon 4.2.0 and custom source are in the project; protected preview 188681584822 is uploaded.

```mermaid
flowchart TD
    H[Horizon 4.2.0 revision 5acd1b6 + retained license] --> N[Native Liquid layout, blocks, commerce components]
    B[Approved palette, fonts, supplied logo] --> UI[Custom TCPF sections and presentation]
    N --> UI
    P[Native products, variants, media, collections] --> UI
    A[Shared artwork entries] --> UI
    G[Garment details + size guides + rows] --> UI
    R[Related products + ordered set components] --> UI
    E[Theme editor + four pages + two native menus] --> UI
    P --> HERO[Hotspot hero: product picker + outfit photograph]
    A --> HERO
    HERO --> DETAIL[Product and artwork detail panels]
    DETAIL --> T
    E --> HEADER[Branded native header + artwork menu feature]
    A --> HEADER
    HEADER --> C
    UI --> T[Homepage, collection, product, story, bespoke, contact, size guide]
    N --> C[Native cart, search, filters, variants, contact backend]
    S[Concept flag + zero stock + DENY] --> GUARD[Sample notices and purchase guards]
    GUARD --> T
    GUARD --> C
    T --> V[Unpublished protected preview 188681584822]
    C --> V
```

```mermaid
stateDiagram-v2
    [*] --> DraftData: Phase 2 complete
    DraftData --> BuildTheme: Spec and plan approved
    BuildTheme --> GuardedTheme: Components and sample paths inspected
    GuardedTheme --> ProtectedPreview: Confirmed password + authorized demonstration + activation
    ProtectedPreview --> ClientReview: Sample catalog unavailable for purchase
    ClientReview --> RealMerchandise: Client facts, rights, policies and inventory verified
    RealMerchandise --> LiveTheme: Separate client launch decision
```

The sample guard covers product/card/featured/recommendation/search/cart/structured-data paths. It is accompanied by store inventory safeguards; it is not a server-side checkout extension. Existing themes and uncertain old Files remain separate from the fresh-Horizon build.

See the [theme specification](../specs/2026-10-05-shopify-theme-design.md) and [data architecture](shopify-data-model.md).

Homepage/header revision: approved in conversation on 2026-10-05 and uploaded to separate unpublished preview **188685779126**. The hero reads `product.metafields.tcpf.design_concept`; the menu feature reads the selected collection's `tcpf.artworks`. Both reuse the hosted catalog images. Hotspot JavaScript progressively enhances server-rendered detail cards and cleans up its event listeners when a section is replaced in the editor. No schema migration is required.

Current preview state: ten active concepts, 45 active entries, eight Online Store collections; tracked zero stock and DENY; client artwork approval pending. Size-guide picker selections use handles in their declared type, while API state records GIDs. All planned page views and final source review are recorded in [build evidence](../theme/05-build-report.md). Client launch remains pending.
