# Findings File Format & Structure

<cite>
**Referenced Files in This Document**
- [model-report-TEMPLATE.md](file://model-report-TEMPLATE.md)
- [model-comparison.md](file://model-comparison.md)
- [model-findings.md](file://model-findings.md)
- [README.md](file://README.md)
- [model/README.md](file://model/README.md)
- [scripts/lib/parse.mjs](file://scripts/lib/parse.mjs)
- [scripts/lib/codegen.mjs](file://scripts/lib/codegen.mjs)
- [scripts/lib/naming.mjs](file://scripts/lib/naming.mjs)
- [scripts/lib/quarantine.mjs](file://scripts/lib/quarantine.mjs)
- [src/components/Methodology.tsx](file://src/components/Methodology.tsx)
- [src/data/models.ts](file://src/data/models.ts)
- [model/claude-opus-4.6/Claude_Opus_4.6.md](file://model/claude-opus-4.6/Claude_Opus_4.6.md)
- [model/gpt-5.6-terra/GPT_5.6_Terra.md](file://model/gpt-5.6-terra/GPT_5.6_Terra.md)
- [model/muse-spark-1.3-free/Muse_Spark_1.3.md](file://model/muse-spark-1.3-free/Muse_Spark_1.3.md)
</cite>

## Update Summary
**Changes Made**
- Updated scoring methodology section to reflect v4 standardization across 141+ model evaluations
- Enhanced model card format documentation with standardized field requirements
- Added examples of consistent benchmark categorization and normalization approaches
- Updated template structure to reflect applied changes in standardized evaluation format
- Revised relationship between findings files and generated TypeScript structures

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
This document explains the self-contained findings file format used by ModelComp research, how researchers should populate it, and how it connects to generated TypeScript data structures. A findings file captures one agent's independent evaluation of a model: its card, raw benchmarks, normalized 1–100 scores, and signature. The repository maintains a cross-model signed log and per-model metadata for display.

**Updated** The format has been standardized across 141+ model evaluations using consistent scoring methodologies and model card formats, ensuring uniformity in how models are evaluated and compared.

## Project Structure
Findings live under `model/<slug>/`. Each folder represents one tracked model and contains:
- One findings file per reporting agent, named `<Source_Name>.md`
- An auto-generated `average.md` (never edited by hand)
- A curated `meta.json` describing display metadata

```mermaid
graph TB
Repo["Repository root"] --> ModelDir["model/<slug>/"]
ModelDir --> FindingsA["Source_A.md"]
ModelDir --> FindingsB["Source_B.md"]
ModelDir --> Average["average.md (auto)"]
ModelDir --> Meta["meta.json (curated)"]
Scripts["scripts/lib/*"] --> DataGen["src/data/*.generated.ts (auto)"]
FindingsA --> Scripts
FindingsB --> Scripts
Meta --> DataGen
```

**Diagram sources**
- [README.md:31-44](file://README.md#L31-L44)
- [model/README.md:1-30](file://model/README.md#L1-L30)

**Section sources**
- [README.md:31-44](file://README.md#L31-L44)
- [model/README.md:1-30](file://model/README.md#L1-L30)

## Core Components
- **Findings file**: Self-contained Markdown with model card, raw benchmarks, normalized scores, and signature.
- **Cross-model signed log**: Per-model audit trail documenting what was found, what is missing, and who reported it.
- **Per-model metadata**: `meta.json` provides display fields such as id, name, short description, context window, modalities, and pricing note.
- **Sync pipeline**: Parses findings and metadata into generated TypeScript files consumed by the site build.

Key responsibilities:
- Researchers write findings independently using the standardized template.
- `pnpm sync` validates, quarantines evidence-free files, computes averages, and generates typed data.
- The UI reads generated data; no manual edits to generated files are needed.

**Updated** All findings files now follow the v4 standardized methodology with consistent scoring formulas and model card structures applied across 141+ model evaluations.

**Section sources**
- [model-report-TEMPLATE.md:1-104](file://model-report-TEMPLATE.md#L1-L104)
- [model-findings.md:1-10](file://model-findings.md#L1-L10)
- [model/README.md:32-57](file://model/README.md#L32-L57)
- [README.md:31-44](file://README.md#L31-L44)

## Architecture Overview
The end-to-end flow from researcher input to generated TypeScript types is deterministic and testable.

```mermaid
sequenceDiagram
participant Researcher as "Researcher"
participant Template as "model-report-TEMPLATE.md"
participant Findings as "model/<slug>/<Source_Name>.md"
participant Sync as "pnpm sync"
participant Parser as "scripts/lib/parse.mjs"
participant Codegen as "scripts/lib/codegen.mjs"
participant Generated as "src/data/scores.generated.ts"
participant Registry as "src/data/sources.generated.ts"
Researcher->>Template : Copy standardized template and fill sections
Researcher->>Findings : Save as Source_Name.md with v4 methodology
Researcher->>Sync : Run pnpm sync
Sync->>Parser : Parse score lines and validate schema
Parser-->>Sync : Parsed scores + validation results
Sync->>Codegen : Build registry entries and scores map
Codegen-->>Generated : Emit GeneratedScores interface + data
Codegen-->>Registry : Append SourceKey union + SOURCE_DEFS
Sync-->>Researcher : Averages recomputed, new source registered
```

**Diagram sources**
- [README.md:31-44](file://README.md#L31-L44)
- [scripts/lib/parse.mjs:8-33](file://scripts/lib/parse.mjs#L8-L33)
- [scripts/lib/codegen.mjs:107-139](file://scripts/lib/codegen.mjs#L107-L139)

## Detailed Component Analysis

### Standardized Scoring Methodology (v4)
**Updated** The scoring methodology has been standardized across all 141+ model evaluations with the following key principles:

- **Overall Score Formula**: Overall = half-up mean of the five quality dimensions `(Tool + Reasoning + Context + Multimodal + Coding) / 5`
- **Cost Efficiency Exclusion**: Cost efficiency is scored separately and never included in Overall calculations
- **Evidence-Based Normalization**: Scores must be derived from raw benchmarks with documented justification
- **Consistent Dimension Categories**: Agent/tool use, reasoning/knowledge, coding, and long context categories

```mermaid
flowchart TD
Start(["Start standardized evaluation"]) --> Card["Fill standardized model card fields"]
Card --> Benchmarks["Categorize raw benchmarks into standard groups"]
Benchmarks --> Evidence{"Any verified public numbers?"}
Evidence --> |No| Exclude["Save as .md.excluded"]
Evidence --> |Yes| Normalize["Apply standardized normalization to 1-100 scale"]
Normalize --> Formula["Compute Overall = mean of Tool + Reasoning + Context + Multimodal + Coding"]
Formula --> Signature["Add signature block with methodology reference"]
Signature --> End(["Complete standardized findings"])
Exclude --> End
```

**Diagram sources**
- [model-report-TEMPLATE.md:71-87](file://model-report-TEMPLATE.md#L71-L87)
- [model-comparison.md:140-150](file://model-comparison.md#L140-L150)

**Section sources**
- [model-report-TEMPLATE.md:71-87](file://model-report-TEMPLATE.md#L71-L87)
- [model-comparison.md:140-150](file://model-comparison.md#L140-L150)
- [src/components/Methodology.tsx:14-18](file://src/components/Methodology.tsx#L14-L18)

### Standardized Model Card Format
**Updated** All model cards now follow a consistent structure with required fields:

- **Name**: Official model name including tier information (e.g., "Muse Spark 1.3 Contributor")
- **Short description**: 1-2 sentences describing the model, provider, and primary use case
- **Provider/access**: Exact API endpoints and access methods (Chat Completions vs Responses API)
- **Release/knowledge**: Release date and knowledge cutoff information
- **IDs**: Provider/model identifiers with explicit Free ID status
- **Context window**: Total tokens with input/output breakdown when available
- **Modalities**: Input/output capabilities (text/image/audio/video/PDF)
- **Pricing**: Current pricing with free/paid distinctions and data usage caveats
- **Architecture**: Parameter counts, MoE configuration, or proprietary status

**Examples of standardized model cards:**

[Claude Opus 4.6 example:8-18](file://model/claude-opus-4.6/Claude_Opus_4.6.md#L8-L18):
- Name: Claude Opus 4.6
- Short description: Anthropic's legacy flagship model (Feb 2026). State-of-the-art at launch for agentic and reasoning tasks. Superseded by Opus 4.8 and Opus 5 but remains functional.
- Provider/access: Anthropic API (`claude-opus-4-6-20260205`), AWS Bedrock, Google Cloud. Messages API.

[GPT-5.6 Terra example:8-18](file://model/gpt-5.6-terra/GPT_5.6_Terra.md#L8-L18):
- Name: GPT-5.6 Terra  
- Short description: OpenAI's GPT-5.6 tier for workloads that balance intelligence and cost; OpenAI describes it as approximately the earlier GPT-5 mini tier.
- Provider/access: OpenAI API, `gpt-5.6-terra`, via both Chat Completions and Responses APIs.

[Muse Spark 1.3 example:8-18](file://model/muse-spark-1.3-free/Muse_Spark_1.3.md#L8-L18):
- Name: Muse Spark 1.3 Contributor (Meta, Contributor Free tier)
- Short description: Meta's proprietary multimodal reasoning model for long-horizon agentic and coding workflows, served as the $0 Contributor Free tier on OpenCode Zen (same weights as standard 1.3, training-data consent in exchange for free use).
- Provider/access: Meta via Meta Model API (`muse-spark-1.3` / `muse-spark-1.3-contributor`); OpenCode Zen `opencode/muse-spark-1.3-contributor-free` (Chat Completions + Responses-style tool calling, MCP supported).

**Section sources**
- [model-report-TEMPLATE.md:14-25](file://model-report-TEMPLATE.md#L14-L25)
- [model/claude-opus-4.6/Claude_Opus_4.6.md:8-18](file://model/claude-opus-4.6/Claude_Opus_4.6.md#L8-L18)
- [model/gpt-5.6-terra/GPT_5.6_Terra.md:8-18](file://model/gpt-5.6-terra/GPT_5.6_Terra.md#L8-L18)
- [model/muse-spark-1.3-free/Muse_Spark_1.3.md:8-18](file://model/muse-spark-1.3-free/Muse_Spark_1.3.md#L8-L18)

### Standardized Benchmark Categorization
**Updated** All findings files now use consistent benchmark categories:

- **Agent/tool use**: Terminal-Bench, Tau3-Banking, GDPval-AA, OSWorld/AutomationBench, Claw-Eval, Toolathon, MCP-Atlas
- **Reasoning/knowledge**: GPQA Diamond, HLE, LCR/MLCR, CritPt, Artificial Analysis Intelligence Index
- **Coding**: SWE-bench Verified/Pro, LiveCodeBench, SciCode, Vibe Code Bench, DeepSWE
- **Long context**: MRCR/RULER/GraphWalks measurements at various window lengths

Each benchmark entry includes source attribution and performance metrics with clear indication of missing data ("no verified public score found").

**Section sources**
- [model-report-TEMPLATE.md:26-70](file://model-report-TEMPLATE.md#L26-L70)
- [model/claude-opus-4.6/Claude_Opus_4.6.md:20-45](file://model/claude-opus-4.6/Claude_Opus_4.6.md#L20-L45)
- [model/gpt-5.6-terra/GPT_5.6_Terra.md:20-41](file://model/gpt-5.6-terra/GPT_5.6_Terra.md#L20-L41)

### Relationship Between Findings Files and Generated TypeScript Structures
The sync process parses findings files and emits:
- `src/data/scores.generated.ts`: Compact per-source scores mapped to short keys (`tool`, `reasoning`, `context`, `multimodal`, `coding`, `cost`, `overall`)
- `src/data/sources.generated.ts`: Source registry with keys, labels, filenames, and slugs

Score parsing contract:
- Seven labeled score lines are expected in canonical order
- Quality dimensions feed Overall; Cost efficiency is excluded from the mean
- Overall drift tolerance triggers automatic correction when within bounds

**Updated** The v4 methodology ensures consistency across all 141+ model evaluations with the Overall Score calculated as the mean of five quality dimensions only.

```mermaid
classDiagram
class GeneratedScores {
+number tool
+number reasoning
+number context
+number multimodal
+number coding
+number cost
+number overall
}
class ScoreLabels {
+string[] LABELS
+object SHORT
+string[] QUALITY_DIMS
}
class Codegen {
+renderScoresFile(scoreIndex) string
+buildRegistryEntry(key, stem, resolve) string
}
GeneratedScores <.. ScoreLabels : "keys derived from"
Codegen --> GeneratedScores : "emits interface + data"
```

**Diagram sources**
- [scripts/lib/codegen.mjs:107-139](file://scripts/lib/codegen.mjs#L107-L139)
- [scripts/lib/parse.mjs:8-33](file://scripts/lib/parse.mjs#L8-L33)

**Section sources**
- [scripts/lib/parse.mjs:8-33](file://scripts/lib/parse.mjs#L8-L33)
- [scripts/lib/codegen.mjs:107-139](file://scripts/lib/codegen.mjs#L107-L139)
- [src/data/models.ts:336-354](file://src/data/models.ts#L336-L354)

### Cross-Model Signed Log
The signed log documents per-model findings, signatures, and historical changes. It complements individual findings files by providing an aggregated audit trail.

Key aspects:
- Each model entry includes findings, scores, and signature
- Changelog tracks methodology updates and additions
- Provides context on free-tier usage and data privacy caveats

**Updated** The changelog now reflects the v4 methodology standardization applied across all model evaluations.

**Section sources**
- [model-findings.md:1-10](file://model-findings.md#L1-L10)
- [model-findings.md:314-331](file://model-findings.md#L314-L331)

## Dependency Analysis
The sync pipeline depends on pure modules for parsing, code generation, naming conventions, and quarantine logic.

```mermaid
graph LR
Sync["sync-data.mjs"] --> Parse["scripts/lib/parse.mjs"]
Sync --> Codegen["scripts/lib/codegen.mjs"]
Sync --> Naming["scripts/lib/naming.mjs"]
Sync --> Quarantine["scripts/lib/quarantine.mjs"]
Parse --> Types["GeneratedScores type"]
Codegen --> Sources["sources.generated.ts"]
Codegen --> Scores["scores.generated.ts"]
```

**Diagram sources**
- [scripts/lib/parse.mjs:1-7](file://scripts/lib/parse.mjs#L1-L7)
- [scripts/lib/codegen.mjs:1-7](file://scripts/lib/codegen.mjs#L1-L7)
- [scripts/lib/naming.mjs:1-7](file://scripts/lib/naming.mjs#L1-L7)
- [scripts/lib/quarantine.mjs:1-7](file://scripts/lib/quarantine.mjs#L1-L7)

**Section sources**
- [scripts/lib/parse.mjs:1-7](file://scripts/lib/parse.mjs#L1-L7)
- [scripts/lib/codegen.mjs:1-7](file://scripts/lib/codegen.mjs#L1-L7)
- [scripts/lib/naming.mjs:1-7](file://scripts/lib/naming.mjs#L1-L7)
- [scripts/lib/quarantine.mjs:1-7](file://scripts/lib/quarantine.mjs#L1-L7)

## Performance Considerations
- Findings files are parsed at build time; prose content does not ship to the client bundle.
- Generated TypeScript files contain only compact numeric scores and registry data.
- Auto-quarantine prevents evidence-free files from affecting averages.
- Standardized format reduces parsing complexity and improves build performance across 141+ model evaluations.

## Troubleshooting Guide
Common issues and resolutions:
- **Evidence-free findings**: Files with zero verified benchmarks are quarantined as `.md.excluded`. Ensure at least some measured numbers are present.
- **Zero-scored dimensions**: Filing "no data" as 0 triggers quarantine. Use minimum floors (10+) or mark as excluded.
- **Flat scores across dimensions**: Uniform scores without cited numbers indicate invented uniformity and trigger quarantine.
- **Underscores in meta.json name**: Sync rejects names containing underscores; use official vendor casing with spaces.
- **Hyphen-versioned folders**: Version numbers should use dots; sync suggests corrections.
- **Non-standardized model cards**: Ensure all required fields are present and follow the v4 template structure.
- **Incorrect Overall Score calculation**: Verify that Overall = mean of five quality dimensions only (excluding Cost efficiency).

Validation helpers:
- Quarantine logic checks for missing benchmarks, zero scores, and flat distributions.
- Naming utilities detect underscore violations and hyphen-version issues.
- Overall score validation ensures consistency with v4 methodology across all model evaluations.

**Updated** Additional validation for standardized model card format and v4 scoring methodology compliance.

**Section sources**
- [scripts/lib/quarantine.mjs:33-56](file://scripts/lib/quarantine.mjs#L33-L56)
- [scripts/lib/naming.mjs:64-72](file://scripts/lib/naming.mjs#L64-L72)
- [src/data/models.ts:336-354](file://src/data/models.ts#L336-L354)

## Conclusion
The ModelComp findings file format ensures consistent, auditable research documentation. By following the standardized v4 template, adhering to naming conventions, and maintaining accurate meta.json files, researchers contribute reliable data that powers the comparison site. The sync pipeline automates validation, quarantine, and TypeScript generation, minimizing manual overhead while preserving data integrity across 141+ model evaluations.

**Updated** The standardized methodology and consistent formatting ensure that all model evaluations are comparable and maintain high quality standards across the entire dataset.