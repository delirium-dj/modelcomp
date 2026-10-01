# Data Schemas & Interfaces

<cite>
**Referenced Files in This Document**
- [models.ts](file://src/data/models.ts)
- [sources.generated.ts](file://src/data/sources.generated.ts)
- [catalog.generated.ts](file://src/data/catalog.generated.ts)
- [HexRadar.tsx](file://src/components/HexRadar.tsx)
- [ModelCards.tsx](file://src/components/ModelCards.tsx)
- [CompareSection.tsx](file://src/components/CompareSection.tsx)
- [model/[slug]/index.tsx](file://src/routes/model/[slug]/index.tsx)
</cite>

## Table of Contents
1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Core Components](#core-components)
4. [Architecture Overview](#architecture-overview)
5. [Detailed Component Analysis](#detailed-component-analysis)
6. [Dependency Analysis](#dependency-analysis)
7. [Performance Considerations](#performance-considerations)
8. [Troubleshooting Guide](#troubleshooting-guide)
9. [Conclusion](#conclusion)

## Introduction
This document describes the data model used by ModelComp to represent AI models, their scores, reporting agents, and curated metadata. It focuses on the `AiModel` interface, the `ModelScores` interface, the `SourceKey` union type, and the `MetaFile` structure. It also explains how these types are hydrated from generated score files and per-model metadata, how they are consumed by UI components, and what validation rules keep the dataset consistent.

## Project Structure
The schema definitions live under `src/data`, while generated registry and score data are imported at build time. UI components import the typed models and use them for rendering comparisons, rankings, tooltips, and tables.

```mermaid
graph TB
subgraph "Data Layer"
M["src/data/models.ts"]
S["src/data/sources.generated.ts"]
C["src/data/catalog.generated.ts"]
end
subgraph "UI Layer"
H["src/components/HexRadar.tsx"]
MC["src/components/ModelCards.tsx"]
CS["src/components/CompareSection.tsx"]
R["src/routes/model/[slug]/index.tsx"]
end
S --> M
C --> M
M --> H
M --> MC
M --> CS
M --> R
```

**Diagram sources**
- [models.ts:18-30](file://src/data/models.ts#L18-L30)
- [sources.generated.ts:5-80](file://src/data/sources.generated.ts#L5-L80)
- [catalog.generated.ts:3-15](file://src/data/catalog.generated.ts#L3-L15)
- [HexRadar.tsx:3-6](file://src/components/HexRadar.tsx#L3-L6)
- [ModelCards.tsx:3-5](file://src/components/ModelCards.tsx#L3-L5)
- [CompareSection.tsx:4](file://src/components/CompareSection.tsx#L4)
- [model/[slug]/index.tsx:4](file://src/routes/model/[slug]/index.tsx#L4)

**Section sources**
- [models.ts:18-30](file://src/data/models.ts#L18-L30)
- [sources.generated.ts:5-80](file://src/data/sources.generated.ts#L5-L80)
- [catalog.generated.ts:3-15](file://src/data/catalog.generated.ts#L3-L15)

## Core Components
This section documents the primary interfaces that define the application’s data contract.

### AiModel Interface
`AiModel` is the central runtime representation of a tracked AI model. It combines:
- Identity and display fields: `id`, `name`, `short`, `slug`.
- Scores: `scores` (the default “average” view) and `sources` (per-reporting-agent score sets).
- Metadata: `meta`, including context window, modalities, pricing note, optional free-tier note, optional pricing tiers, and an optional flag indicating no free tier ID.

Key responsibilities:
- Provides a single object for UI components to render hexagons, cards, tables, and detail pages.
- Keeps the default view (`scores`) separate from per-source views (`sources[key]`).
- Carries human-readable metadata needed for tooltips, legends, and pricing displays.

Validation and hydration:
- Hydrated from per-model `meta.json` and pre-parsed scores emitted by the sync script.
- A model without a usable average is skipped with a warning rather than failing the build.

**Section sources**
- [models.ts:56-77](file://src/data/models.ts#L56-L77)
- [models.ts:79-119](file://src/data/models.ts#L79-L119)

### ModelScores Interface
`ModelScores` represents one normalized scoring snapshot across six dimensions plus an overall composite:
- `tool`: tool-use performance.
- `reasoning`: reasoning benchmark performance.
- `context`: context-window capability.
- `multimodal`: multimodal support.
- `coding`: coding ability.
- `cost`: cost efficiency.
- `overall`: rounded mean of the five quality dimensions; cost is scored separately and does not count toward overall.

Usage patterns:
- `AiModel.scores` holds the average snapshot.
- `AiModel.sources[key]` holds a reporting agent’s snapshot.
- UI components read dimension keys directly from `ModelScores` to render charts and tables.

**Section sources**
- [models.ts:46-54](file://src/data/models.ts#L46-L54)
- [models.ts:85-97](file://src/data/models.ts#L85-L97)

### SourceKey Union Type
`SourceKey` is a string union enumerating every registered reporting agent plus the special `average` key. It is auto-generated from the source registry and kept in sync by the build pipeline.

Relationship to reporting agents:
- Each `SourceKey` corresponds to a row in `SOURCE_DEFS`, which maps the key to a label, file name, and optional tracked model slug.
- The `AGENT_MODEL_SLUG` map derives a mapping from `SourceKey` to the model page slug when a reporting agent has its own tracked model.
- `AiModel.sources` is keyed by `SourceKey`; only keys present in `SOURCE_DEFS` can appear there.

Virtual views:
- `ViewKey` and `ResultsView` extend `SourceKey` with virtual sort views like `tool`, `reason`, `context`, `cost`, `code`, and `multi`.
- Virtual views are not real reporting agents and do not appear in `AiModel.sources`; they are computed at runtime to re-rank using a specific dimension.

**Section sources**
- [sources.generated.ts:5-66](file://src/data/sources.generated.ts#L5-L66)
- [sources.generated.ts:68-80](file://src/data/sources.generated.ts#L68-L80)
- [sources.generated.ts:82-144](file://src/data/sources.generated.ts#L82-L144)
- [models.ts:21-30](file://src/data/models.ts#L21-L30)

### MetaFile Interface
`MetaFile` defines the required shape of each model’s `meta.json` file. Required fields include:
- `id`: stable identifier for the model.
- `name`: full model name.
- `short`: short display name.
- `contextWindow`: context window description.
- `modalities`: supported input/output modalities.
- `pricingNote`: pricing summary shown in tooltips and tables.

Optional fields include:
- `pricingTiers`: stacked pricing lines for comparison tables.
- `freeTierNote`: explanation of how a free tier is obtained.
- `noFreeId`: indicates whether cost is scored on paid pricing because no free tier ID exists.

Validation rules:
- Missing or empty required fields cause the model to be skipped with a warning during hydration.
- Duplicate `id` values are detected; the first occurrence is kept and subsequent duplicates are warned about.
- The strict gate for missing data is the sync script; at runtime, incomplete entries are skipped to avoid breaking builds.

**Section sources**
- [models.ts:169-180](file://src/data/models.ts#L169-L180)
- [models.ts:182-218](file://src/data/models.ts#L182-L218)
- [catalog.generated.ts:3-13](file://src/data/catalog.generated.ts#L3-L13)

## Architecture Overview
The data flow connects raw research findings to typed runtime objects consumed by the UI.

```mermaid
sequenceDiagram
participant Sync as "Sync Script"
participant Generated as "Generated Score Files"
participant Models as "models.ts"
participant UI as "UI Components"
Sync->>Generated : Emit numbers-only scores<br/>and source registry
Models->>Generated : Import GENERATED_SCORES and SOURCE_DEFS
Models->>Models : Load meta.json files<br/>validate required fields
Models->>Models : Hydrate AiModel objects<br/>attach scores and sources
Models-->>UI : Export MODELS, SOURCES, DIMENSIONS
UI->>Models : Read AiModel.scores and AiModel.meta
UI->>Models : Select ResultsView via SourceKey or ViewKey
```

**Diagram sources**
- [models.ts:6-16](file://src/data/models.ts#L6-L16)
- [models.ts:18-30](file://src/data/models.ts#L18-L30)
- [models.ts:79-119](file://src/data/models.ts#L79-L119)
- [models.ts:227-241](file://src/data/models.ts#L227-L241)

## Detailed Component Analysis

### AiModel Hydration and Validation Flow
Hydration merges curated metadata with pre-parsed scores. If a model lacks a usable average, it is skipped with a warning.

```mermaid
flowchart TD
Start(["Hydrate Model"]) --> LoadFiles["Load pre-parsed scores for slug"]
LoadFiles --> BuildSources["Build per-source ModelScores"]
BuildSources --> HasAverage{"Has average?"}
HasAverage --> |No| WarnSkip["Warn and skip model"]
HasAverage --> |Yes| MergeMeta["Merge meta.json into AiModel"]
MergeMeta --> ReturnModel["Return AiModel"]
WarnSkip --> End(["End"])
ReturnModel --> End
```

**Diagram sources**
- [models.ts:79-119](file://src/data/models.ts#L79-L119)

**Section sources**
- [models.ts:79-119](file://src/data/models.ts#L79-L119)

### SourceKey Usage Across the Application
Components consume `SourceKey` and `ResultsView` to select which scores to display:
- `ModelCards` filters and sorts models based on the selected results source.
- `CompareSection` uses `SOURCES` to populate the dropdown and renders exact scores per dimension.
- The model detail route reads `ModelScores` to compute column statistics and highlight high/low values.

```mermaid
classDiagram
class AiModel {
+string id
+string name
+string short
+string slug
+ModelScores scores
+Partial~Record~SourceKey, ModelScores~~ sources
+object meta
}
class ModelScores {
+number tool
+number reasoning
+number context
+number multimodal
+number coding
+number cost
+number overall
}
class SourceKey {
<<union>>
}
class HexRadar {
+renders radar chart using AiModel.scores
}
class ModelCards {
+filters/sorts by ResultsView
}
class CompareSection {
+renders table rows from AiModel.meta and scores
}
AiModel --> ModelScores : "has"
AiModel --> SourceKey : "sources keyed by"
HexRadar --> AiModel : "consumes"
ModelCards --> AiModel : "consumes"
CompareSection --> AiModel : "consumes"
```

**Diagram sources**
- [models.ts:46-77](file://src/data/models.ts#L46-L77)
- [sources.generated.ts:5-80](file://src/data/sources.generated.ts#L5-L80)
- [HexRadar.tsx:3-6](file://src/components/HexRadar.tsx#L3-L6)
- [ModelCards.tsx:3-5](file://src/components/ModelCards.tsx#L3-L5)
- [CompareSection.tsx:4](file://src/components/CompareSection.tsx#L4)

**Section sources**
- [HexRadar.tsx:47-55](file://src/components/HexRadar.tsx#L47-L55)
- [ModelCards.tsx:13-28](file://src/components/ModelCards.tsx#L13-L28)
- [CompareSection.tsx:72-75](file://src/components/CompareSection.tsx#L72-L75)
- [model/[slug]/index.tsx:56](file://src/routes/model/[slug]/index.tsx#L56)

### MetaFile Validation Rules
The loader enforces:
- Presence and non-empty strings for required fields.
- Uniqueness of `id`.
- Deterministic ordering by `id`.
- Skipping incomplete entries with warnings instead of failing the build.

```mermaid
flowchart TD
Start(["Load Metas"]) --> Iterate["Iterate meta.json modules"]
Iterate --> ValidateFields["Validate required fields"]
ValidateFields --> Valid{"All required fields valid?"}
Valid --> |No| Skip["Warn and skip entry"]
Valid --> |Yes| CheckDuplicate["Check duplicate id"]
CheckDuplicate --> Duplicate{"Duplicate id?"}
Duplicate --> |Yes| WarnDup["Warn and skip"]
Duplicate --> |No| AddEntry["Add to entries"]
AddEntry --> Sort["Sort by id"]
Sort --> End(["Return entries"])
Skip --> End
WarnDup --> End
```

**Diagram sources**
- [models.ts:182-218](file://src/data/models.ts#L182-L218)

**Section sources**
- [models.ts:182-218](file://src/data/models.ts#L182-L218)

## Dependency Analysis
The data layer depends on generated files produced by the sync script. UI components depend on the typed exports from `models.ts`.

```mermaid
graph LR
Sync["scripts/sync-data.mjs"] --> Scores["src/data/scores.generated.ts"]
Sync --> Sources["src/data/sources.generated.ts"]
Scores --> Models["src/data/models.ts"]
Sources --> Models
Models --> HexRadar["src/components/HexRadar.tsx"]
Models --> ModelCards["src/components/ModelCards.tsx"]
Models --> CompareSection["src/components/CompareSection.tsx"]
Models --> DetailRoute["src/routes/model/[slug]/index.tsx"]
```

**Diagram sources**
- [models.ts:6-16](file://src/data/models.ts#L6-L16)
- [models.ts:18-30](file://src/data/models.ts#L18-L30)
- [HexRadar.tsx:3-6](file://src/components/HexRadar.tsx#L3-L6)
- [ModelCards.tsx:3-5](file://src/components/ModelCards.tsx#L3-L5)
- [CompareSection.tsx:4](file://src/components/CompareSection.tsx#L4)
- [model/[slug]/index.tsx:4](file://src/routes/model/[slug]/index.tsx#L4)

**Section sources**
- [models.ts:6-16](file://src/data/models.ts#L6-L16)
- [sources.generated.ts:1-4](file://src/data/sources.generated.ts#L1-L4)

## Performance Considerations
- Pre-parsed scores and source registry reduce client bundle size by avoiding inlining markdown prose.
- Hydration runs once at module evaluation time, producing deterministic arrays for UI consumption.
- Virtual views avoid duplicating score data by computing rankings from existing snapshots.

[No sources needed since this section provides general guidance]

## Troubleshooting Guide
Common issues and their signals:
- Missing required metadata fields: the loader warns and skips the model; run the sync script to enforce completeness.
- No usable average for a model: hydration warns and skips the model; ensure the average file is present and parsed.
- Duplicate model IDs: the loader warns and keeps the first occurrence; resolve conflicts in metadata.
- Overall score mismatch: in development, a check warns if a source’s overall deviates significantly from the mean of the five quality dimensions.

Operational recommendations:
- Always run the sync script after adding or modifying model folders.
- Keep `meta.json` files complete and unique by `id`.
- Use the generated types to prevent invalid keys when selecting results sources.

**Section sources**
- [models.ts:98-102](file://src/data/models.ts#L98-L102)
- [models.ts:198-214](file://src/data/models.ts#L198-L214)
- [models.ts:335-350](file://src/data/models.ts#L335-L350)

## Conclusion
The ModelComp data model centers on `AiModel`, `ModelScores`, `SourceKey`, and `MetaFile`. These types provide a clear contract between generated data, curated metadata, and UI components. Validation ensures data integrity at both build time and runtime, while virtual views and source registries enable flexible ranking and presentation without duplicating data. Following the documented schemas and validation rules keeps the application consistent, performant, and maintainable.