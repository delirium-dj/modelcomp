# Data Synchronization Pipeline

<cite>
**Referenced Files in This Document**
- [sync-data.mjs](file://scripts/sync-data.mjs)
- [parse.mjs](file://scripts/lib/parse.mjs)
- [codegen.mjs](file://scripts/lib/codegen.mjs)
- [naming.mjs](file://scripts/lib/naming.mjs)
- [validate.mjs](file://scripts/lib/validate.mjs)
- [sources.generated.ts](file://src/data/sources.generated.ts)
- [scores.generated.ts](file://src/data/scores.generated.ts)
- [meta.json](file://model/Inkling/meta.json)
- [package.json](file://package.json)
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
This document explains the data synchronization pipeline that turns research markdown files into deterministic runtime TypeScript data. The pipeline:

- Scans model research folders under `model/<slug>/`.
- Validates filenames, metadata, and score lines.
- Auto-corrects derived Overall scores when they drift from their quality dimensions.
- Applies a rater gate so only reports from sufficiently strong models contribute to averages.
- Computes per-folder averages over the top-10 cohort.
- Registers new reporting agents automatically.
- Generates `src/data/sources.generated.ts` and `src/data/scores.generated.ts`, which are consumed by the application at build time.

The sync script is designed to be deterministic: given the same input state, it produces byte-identical generated outputs and consistent average rewrites.

## Project Structure
The pipeline lives primarily under `scripts/`, with generated artifacts under `src/data/` and research inputs under `model/`.

```mermaid
graph TB
subgraph "Research Inputs"
M["model/<slug>/*.md"]
META["model/<slug>/meta.json"]
end
subgraph "Sync Script"
SYNC["scripts/sync-data.mjs"]
LIB_PARSE["scripts/lib/parse.mjs"]
LIB_CODEGEN["scripts/lib/codegen.mjs"]
LIB_NAMING["scripts/lib/naming.mjs"]
LIB_VALIDATE["scripts/lib/validate.mjs"]
end
subgraph "Generated Outputs"
SRC_GEN["src/data/sources.generated.ts"]
SCORES_GEN["src/data/scores.generated.ts"]
AVG["model/<slug>/average.md"]
end
M --> SYNC
META --> SYNC
SYNC --> LIB_PARSE
SYNC --> LIB_CODEGEN
SYNC --> LIB_NAMING
SYNC --> LIB_VALIDATE
SYNC --> SRC_GEN
SYNC --> SCORES_GEN
SYNC --> AVG
```

**Diagram sources**
- [sync-data.mjs:30-75](file://scripts/sync-data.mjs#L30-L75)
- [sources.generated.ts:1-145](file://src/data/sources.generated.ts#L1-L145)
- [scores.generated.ts:1-200](file://src/data/scores.generated.ts#L1-L200)

**Section sources**
- [sync-data.mjs:1-30](file://scripts/sync-data.mjs#L1-L30)
- [package.json:11-24](file://package.json#L11-L24)

## Core Components
The sync process is composed of one orchestrator script and four pure helper modules:

| Component | Responsibility | Key Behaviors |
|---|---|---|
| `scripts/sync-data.mjs` | Orchestrates scanning, validation, averaging, registry updates, and code generation | Reads git tree for permanence checks, parses all findings, computes averages, writes generated files |
| `scripts/lib/parse.mjs` | Pure parsing and scoring logic | Defines labels, short keys, quality dimensions, rater gate, drift tolerance, top-10 ranking, and cohort averaging |
| `scripts/lib/codegen.mjs` | Registry and code generation text builders | Parses/appends SourceKey union entries, SOURCE_DEFS array, reconciles labels/slugs, renders `scores.generated.ts` |
| `scripts/lib/naming.mjs` | Naming conventions and slug resolution | Converts stems to keys, resolves display labels and slugs, detects hyphen-version violations, formats slug guesses |
| `scripts/lib/validate.mjs` | Permanence and hygiene validation | Filters research paths, classifies missing tracked files, validates filenames and meta.json fields |

**Section sources**
- [sync-data.mjs:30-75](file://scripts/sync-data.mjs#L30-L75)
- [parse.mjs:8-45](file://scripts/lib/parse.mjs#L8-L45)
- [codegen.mjs:1-12](file://scripts/lib/codegen.mjs#L1-L12)
- [naming.mjs:1-27](file://scripts/lib/naming.mjs#L1-L27)
- [validate.mjs:1-12](file://scripts/lib/validate.mjs#L1-L12)

## Architecture Overview
At a high level, the pipeline transforms research markdown into typed runtime data through these stages:

1. **Discovery**: Enumerate model folders and research files.
2. **Permanence Check**: Ensure tracked research files are not silently deleted.
3. **Hygiene Validation**: Enforce filename rules and required metadata.
4. **Score Parsing**: Extract seven normalized scores from each findings file.
5. **Overall Correction**: Auto-fix derived Overall values when they drift.
6. **Rater Gate**: Filter eligible sources based on the rating model’s own average.
7. **Average Computation**: Compute averages over the top-10 cohort.
8. **Registry Update**: Register new reporting agents and reconcile existing entries.
9. **Code Generation**: Emit `sources.generated.ts` and `scores.generated.ts`.

```mermaid
flowchart TD
Start(["Run pnpm sync"]) --> Scan["Scan model/<slug> folders"]
Scan --> Permanence["Check tracked research files against git HEAD"]
Permanence --> Hygiene["Validate filenames and meta.json"]
Hygiene --> ParseScores["Parse 7 normalized scores per findings file"]
ParseScores --> CorrectOverall["Auto-correct drifted Overall scores"]
CorrectOverall --> RaterGate["Apply rater gate and partition eligible sources"]
RaterGate --> Top10["Rank top-10 cohort"]
Top10 --> Average["Compute average.md body and rewrite if changed"]
Average --> Registry["Register new sources and reconcile registry"]
Registry --> Codegen["Generate sources.generated.ts and scores.generated.ts"]
Codegen --> End(["Exit 0 if no failures, else exit non-zero"])
```

**Diagram sources**
- [sync-data.mjs:133-178](file://scripts/sync-data.mjs#L133-L178)
- [sync-data.mjs:288-326](file://scripts/sync-data.mjs#L288-L326)
- [sync-data.mjs:328-436](file://scripts/sync-data.mjs#L328-L436)
- [sync-data.mjs:438-523](file://scripts/sync-data.mjs#L438-L523)

## Detailed Component Analysis

### Sync Orchestrator: `scripts/sync-data.mjs`
The orchestrator coordinates all pipeline phases. It imports pure helpers and performs filesystem operations, logging, failure accounting, and deterministic writes.

Key responsibilities:
- Determine root and output paths.
- Define source overrides for display labels and slugs.
- Support quiet mode for CI or large repos.
- Perform permanence tripwire using git.
- Validate slug versioning conventions.
- Auto-quarantine evidence-free findings.
- Parse and index scores.
- Apply overall drift correction.
- Partition eligible raters and compute averages.
- Reconcile and append registry entries.
- Generate compact scores for the client bundle.

```mermaid
sequenceDiagram
participant Dev as "Developer"
participant Sync as "sync-data.mjs"
participant Git as "Git HEAD"
participant FS as "Filesystem"
participant Lib as "Pure Helpers"
participant Gen as "Generated Files"
Dev->>Sync : Run pnpm sync
Sync->>Git : List tracked research paths
Git-->>Sync : Tracked paths
Sync->>FS : Read model folders and findings
Sync->>Lib : Validate filenames and meta.json
Lib-->>Sync : Validation results
Sync->>Lib : Parse scores and compute averages
Lib-->>Sync : Scores, averages, eligibility
Sync->>Gen : Write sources.generated.ts
Sync->>Gen : Write scores.generated.ts
Sync-->>Dev : Exit code based on failures
```

**Diagram sources**
- [sync-data.mjs:133-178](file://scripts/sync-data.mjs#L133-L178)
- [sync-data.mjs:288-326](file://scripts/sync-data.mjs#L288-L326)
- [sync-data.mjs:328-436](file://scripts/sync-data.mjs#L328-L436)
- [sync-data.mjs:438-523](file://scripts/sync-data.mjs#L438-L523)

**Section sources**
- [sync-data.mjs:1-30](file://scripts/sync-data.mjs#L1-L30)
- [sync-data.mjs:77-118](file://scripts/sync-data.mjs#L77-L118)
- [sync-data.mjs:128-197](file://scripts/sync-data.mjs#L128-L197)
- [sync-data.mjs:259-436](file://scripts/sync-data.mjs#L259-L436)
- [sync-data.mjs:438-527](file://scripts/sync-data.mjs#L438-L527)

### Score Parsing and Averaging: `scripts/lib/parse.mjs`
This module defines the contract for score parsing and cohort averaging.

Important concepts:
- Seven canonical labels define the expected score structure.
- Short keys map long labels to compact names used in generated code.
- Quality dimensions exclude cost from the Overall derivation.
- Rater gate threshold determines which models can rate others.
- Drift tolerance allows automatic correction of Overall scores.
- Top-10 ranking selects the strongest sources for averaging.
- Label sorting follows a case-insensitive alphabetical convention.

```mermaid
flowchart TD
Input["Findings Markdown"] --> Parse["Parse 7 score lines"]
Parse --> Valid{"All labels present?"}
Valid --> |No| Missing["Return missing label error"]
Valid --> |Yes| MapKeys["Map labels to short keys"]
MapKeys --> Derive["Derive Overall from quality dims"]
Derive --> Drift{"Drift exceeds tolerance?"}
Drift --> |Yes| Fix["Mark for auto-fix"]
Drift --> |No| Keep["Keep current Overall"]
Fix --> Cohort["Top-10 cohort selection"]
Keep --> Cohort
Cohort --> Average["Compute mean per dimension"]
```

**Diagram sources**
- [parse.mjs:8-45](file://scripts/lib/parse.mjs#L8-L45)
- [parse.mjs:52-97](file://scripts/lib/parse.mjs#L52-L97)
- [parse.mjs:105-123](file://scripts/lib/parse.mjs#L105-L123)

**Section sources**
- [parse.mjs:8-45](file://scripts/lib/parse.mjs#L8-L45)
- [parse.mjs:52-97](file://scripts/lib/parse.mjs#L52-L97)
- [parse.mjs:105-123](file://scripts/lib/parse.mjs#L105-L123)

### Registry and Code Generation: `scripts/lib/codegen.mjs`
This module manages the TypeScript registry and generated score exports.

Responsibilities:
- Parse existing registry entries and SourceKey union members.
- Build registry entries with correct labels and slugs.
- Compute pending registrations and detect key collisions.
- Append new sources to both the union type and SOURCE_DEFS array.
- Reconcile existing entries for idempotent label/slug updates.
- Render deterministic `scores.generated.ts` with sorted slugs and files.

```mermaid
classDiagram
class Codegen {
+parseRegistryEntries(text)
+parseUnionMembers(text)
+buildRegistryEntry(key, stem, resolve)
+computePending(missingStems, sourcesTs, keyOf)
+appendPendingSources(sourcesTs, pending, buildEntry)
+reconcileRegistry(sourcesTs, buildEntry)
+renderScoresFile(scoreIndex)
}
class SourcesGenerated {
+SourceKey
+ViewKey
+ResultsView
+SourceDef
+SOURCE_DEFS
}
class ScoresGenerated {
+GeneratedScores
+GENERATED_SCORES
}
Codegen --> SourcesGenerated : "updates"
Codegen --> ScoresGenerated : "generates"
```

**Diagram sources**
- [codegen.mjs:14-35](file://scripts/lib/codegen.mjs#L14-L35)
- [codegen.mjs:44-84](file://scripts/lib/codegen.mjs#L44-L84)
- [codegen.mjs:92-105](file://scripts/lib/codegen.mjs#L92-L105)
- [codegen.mjs:111-139](file://scripts/lib/codegen.mjs#L111-L139)
- [sources.generated.ts:5-80](file://src/data/sources.generated.ts#L5-L80)

**Section sources**
- [codegen.mjs:1-12](file://scripts/lib/codegen.mjs#L1-L12)
- [codegen.mjs:14-35](file://scripts/lib/codegen.mjs#L14-L35)
- [codegen.mjs:44-84](file://scripts/lib/codegen.mjs#L44-L84)
- [codegen.mjs:92-105](file://scripts/lib/codegen.mjs#L92-L105)
- [codegen.mjs:111-139](file://scripts/lib/codegen.mjs#L111-L139)

### Naming Conventions: `scripts/lib/naming.mjs`
Naming utilities ensure consistent mapping between filenames, display labels, and model-page slugs.

Key behaviors:
- Normalize names for catalog matching.
- Convert underscores in filenames to spaces for display keys.
- Resolve labels and slugs using overrides and catalog lookup.
- Detect invalid hyphen-version folder names.
- Format slug guesses for auto-scaffolded metadata.
- Define virtual sort-view keys that are not real agents.

```mermaid
flowchart TD
Stem["Findings Filename Stem"] --> ToKey["Convert to Display Key"]
ToKey --> OverrideCheck{"Override exists?"}
OverrideCheck --> |Yes| UseOverride["Use override label/slug"]
OverrideCheck --> |No| CatalogLookup["Lookup normalized name in catalog"]
CatalogLookup --> SlugResult{"Slug found?"}
SlugResult --> |Yes| WithSlug["Include slug in registry"]
SlugResult --> |No| WithoutSlug["Omit slug from registry"]
```

**Diagram sources**
- [naming.mjs:8-27](file://scripts/lib/naming.mjs#L8-L27)
- [naming.mjs:36-44](file://scripts/lib/naming.mjs#L36-L44)
- [naming.mjs:49-62](file://scripts/lib/naming.mjs#L49-L62)

**Section sources**
- [naming.mjs:8-27](file://scripts/lib/naming.mjs#L8-L27)
- [naming.mjs:36-44](file://scripts/lib/naming.mjs#L36-L44)
- [naming.mjs:49-62](file://scripts/lib/naming.mjs#L49-L62)

### Validation and Permanence: `scripts/lib/validate.mjs`
Validation ensures research files remain permanent and well-formed.

Responsibilities:
- Identify sanctioned mirror trees for relocated files.
- Filter research paths to markdown files.
- Exclude regenerable files like averages and READMEs from permanence checks.
- Classify missing tracked files as twin-retired, relocated, or deleted.
- Find mirror locations for relocated files.
- Provide exact failure messages for forbidden deletions.
- Validate filenames against allowed character sets.
- Validate required metadata fields and display-name constraints.

```mermaid
flowchart TD
Path["Tracked File Path"] --> IsResearch{"Is research path?"}
IsResearch --> |No| Skip["Skip permanence check"]
IsResearch --> |Yes| IsRegenerable{"Is regenerable?"}
IsRegenerable --> |Yes| Skip
IsRegenerable --> |No| OnDisk{"Exists on disk?"}
OnDisk --> |Yes| OK["OK"]
OnDisk --> |No| TwinRetired{"Twin retired?"}
TwinRetired --> |Yes| Relocated["Classified as relocated"]
TwinRetired --> |No| MirrorFound{"Mirror found?"}
MirrorFound --> |Yes| Relocated
MirrorFound --> |No| Deleted["Classified as deleted (FAIL)"]
```

**Diagram sources**
- [validate.mjs:11-25](file://scripts/lib/validate.mjs#L11-L25)
- [validate.mjs:34-52](file://scripts/lib/validate.mjs#L34-L52)
- [validate.mjs:54-80](file://scripts/lib/validate.mjs#L54-L80)

**Section sources**
- [validate.mjs:11-25](file://scripts/lib/validate.mjs#L11-L25)
- [validate.mjs:34-52](file://scripts/lib/validate.mjs#L34-L52)
- [validate.mjs:54-80](file://scripts/lib/validate.mjs#L54-L80)

## Dependency Analysis
The sync script depends on pure helper modules to maintain deterministic behavior and testability.

```mermaid
graph LR
SYNC["sync-data.mjs"] --> PARSE["parse.mjs"]
SYNC --> CODEGEN["codegen.mjs"]
SYNC --> NAMING["naming.mjs"]
SYNC --> VALIDATE["validate.mjs"]
PARSE --> LABELS["Labels & Keys"]
PARSE --> GATE["Rater Gate"]
CODEGEN --> REGISTRY["Registry Builder"]
CODEGEN --> EMIT["Code Emitter"]
NAMING --> SLUGS["Slug Resolution"]
VALIDATE --> PERM["Permanence Rules"]
```

**Diagram sources**
- [sync-data.mjs:30-75](file://scripts/sync-data.mjs#L30-L75)
- [parse.mjs:8-45](file://scripts/lib/parse.mjs#L8-L45)
- [codegen.mjs:1-12](file://scripts/lib/codegen.mjs#L1-L12)
- [naming.mjs:1-27](file://scripts/lib/naming.mjs#L1-L27)
- [validate.mjs:1-12](file://scripts/lib/validate.mjs#L1-L12)

**Section sources**
- [sync-data.mjs:30-75](file://scripts/sync-data.mjs#L30-L75)

## Performance Considerations
The pipeline is optimized for deterministic builds and efficient client bundles:

- **Parsed-only scores**: Only numeric scores are emitted to `scores.generated.ts`, keeping full markdown prose out of the client bundle.
- **Sorted outputs**: Generated files use sorted keys to ensure byte-identical outputs across runs.
- **Avoid eager imports**: The old approach of eagerly importing raw markdown was replaced with pre-parsed numeric indexes.
- **Quiet mode**: Large repositories can run with reduced logging while maintaining identical behavior.
- **Incremental validation**: Metadata scaffolding prevents build failures while requiring human review.

[No sources needed since this section provides general guidance]

## Troubleshooting Guide

### Common Sync Failures

| Symptom | Likely Cause | Resolution |
|---|---|---|
| FAIL about missing tracked research file | A git-tracked findings file was deleted without following retirement procedures | Restore the file using git restore or follow the twin retirement process |
| FAIL about filename hygiene | Findings filename contains disallowed characters | Rename to match allowed pattern: letters, digits, underscore, dots |
| FAIL about missing meta.json field | Model metadata is incomplete or has placeholder values | Fill in required fields with verified vendor information |
| WARN about auto-scaffolded meta.json | New model folder lacks proper metadata | Replace slug guess with official vendor name and facts |
| SKIP about self-excluded file | Findings file has no verified benchmarks | Review the report; if valid, remove `.excluded` suffix after adding scores |
| QUAR about evidence-free file | Report has many "no verified public score found" rows but no measured values | Investigate benchmark data; consider removing or fixing the report |
| COLLISION about duplicate key | Two different filenames map to the same source key | Choose unique filenames or consolidate reports |
| SKIP scores.generated.ts not rewritten | Sync had failures during processing | Fix reported failures and re-run sync |

### How to Add a New Reporting Agent
1. Create a new findings markdown file in the appropriate model folder.
2. Include all seven normalized score lines.
3. Run `pnpm sync`.
4. The sync script will automatically register the new agent in `sources.generated.ts`.
5. If metadata is missing, update the scaffolded `meta.json` with verified information.

### How to Add a New Model Folder
1. Create a new folder under `model/` using dotted version notation (e.g., `gpt-5.5`).
2. Add a `meta.json` file with required fields.
3. Add findings markdown files with normalized scores.
4. Run `pnpm sync` to validate and generate outputs.

**Section sources**
- [sync-data.mjs:133-178](file://scripts/sync-data.mjs#L133-L178)
- [sync-data.mjs:288-326](file://scripts/sync-data.mjs#L288-L326)
- [sync-data.mjs:438-523](file://scripts/sync-data.mjs#L438-L523)

## Conclusion
The data synchronization pipeline provides a robust, deterministic workflow for transforming research markdown into runtime TypeScript data. It enforces data consistency through strict validation, automatic corrections, and controlled averaging. The generated files serve as the single source of truth for the application, ensuring that model comparisons remain accurate and up-to-date. By automating registration and code generation, the pipeline reduces manual overhead while maintaining high standards for data quality and consistency across builds.

[No sources needed since this section summarizes without analyzing specific files]