# TCPF Shopify data relationships

2026-10-05 · Phase 2 proposed design; definitions have not yet been changed.

```mermaid
flowchart LR
    AI[5 original AI artwork masters] --> A[Artwork metaobjects]
    AI --> IMG[40 separate garment photographs]
    A --> P[10 Shopify sample products]
    IMG --> M[Native Shopify product media]
    M --> P
    R[Typed measurement rows] --> S[Reusable size charts]
    S --> G[Garment detail metaobjects]
    G --> P
    P --> V[Native XS–XL variants and reference prices]
    P --> L[Matching-product and set-component references]
    L --> P
    P --> C[Native category and artwork collections]
    A --> C
    P --> T[Phase 3 Liquid components]
    G --> T
    A --> T
    S --> T
```

```mermaid
stateDiagram-v2
    [*] --> DraftSample: Upload and populate
    DraftSample --> ReviewedSample: Product and image review
    ReviewedSample --> ProtectedPreview: Later theme preview safeguards ready
    ProtectedPreview --> VerifiedMerchandise: Replace concept assets and confirm real facts
    VerifiedMerchandise --> LiveSale: Client launch decision
```

Draft samples have zero inventory, deny overselling, and carry the concept flag. Normal collections cannot render draft products, so preview publication is a separate phase 3 handoff after password protection and sample purchase guards are confirmed. A reviewed AI sample is not automatically verified merchandise.

See the [phase 2 design](../specs/2026-10-05-shopify-data-catalog-design.md).
