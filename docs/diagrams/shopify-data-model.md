# TCPF Shopify data relationships

2026-10-05 · Phase 2 approved design; definitions have not yet been changed.

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

## Phase 2 execution dependencies

```mermaid
flowchart TD
    S[1. Source snapshot and schema refinement] --> A[2. Five artwork masters]
    A --> P[3. Forty garment photographs]
    P --> U[4. Upload assets and populate content library]
    U --> C[5. Ten draft products and references]
    C --> R[6. Delete old products and deliver handoff]
```

Each dependent mutation waits for its referenced files or records to be ready. Independent artwork families can generate in parallel. Individually accepted uploads and independent measurement records may stage while later photographs render; all forty photos and five masters must be ready before task 4 completes. Shared dependent store writes remain ordered.

See the [phase 2 design](../specs/2026-10-05-shopify-data-catalog-design.md) and [implementation plan](../plans/2026-10-05-shopify-data-catalog.md).
