# Model Research & Evaluation

<cite>
**Referenced Files in This Document**   
- [README.md](file://README.md)
- [model-comparison.md](file://model-comparison.md)
- [model-findings.md](file://model-findings.md)
- [model-report-TEMPLATE.md](file://model-report-TEMPLATE.md)
- [model/README.md](file://model/README.md)
- [RULES.md](file://RULES.md)
- [tasks/sync-data.md](file://tasks/sync-data.md)
- [tasks/research.md](file://tasks/research.md)
- [tasks/research-assign.md](file://tasks/research-assign.md)
- [.agents/rules.md](file://.agents/rules.md)
- [scripts/lib/quarantine.mjs](file://scripts/lib/quarantine.mjs)
- [scripts/lib/parse.mjs](file://scripts/lib/parse.mjs)
- [scripts/lib/average.mjs](file://scripts/lib/average.mjs)
- [scripts/sync-data.mjs](file://scripts/sync-data.mjs)
- [scripts/find-fails.mjs](file://scripts/find-fails.mjs)
- [src/components/Methodology.tsx](file://src/components/Methodology.tsx)
- [src/data/models.ts](file://src/data/models.ts)
- [REPORT.md](file://REPORT.md)
- [src/data/scores.generated.ts](file://src/data/scores.generated.ts)
- [src/data/sources.generated.ts](file://src/data/sources.generated.ts)
- [model/qwen-3.5-397b/meta.json](file://model/qwen-3.5-397b/meta.json)
- [model/qwen-3.5-397b/average.md](file://model/qwen-3.5-397b/average.md)
- [model/ring-2.6.1t/meta.json](file://model/ring-2.6.1t/meta.json)
- [model/ring-2.6.1t/average.md](file://model/ring-2.6.1t/average.md)
- [model/solar-mini-4/meta.json](file://model/solar-mini-4/meta.json)
- [model/solar-mini-4/average.md](file://model/solar-mini-4/average.md)
- [model/solar-open-2/meta.json](file://model/solar-open-2/meta.json)
- [model/solar-open-2/average.md](file://model/solar-open-2/average.md)
- [model/step-5-preview/meta.json](file://model/step-5-preview/meta.json)
- [model/mercury-2.5/meta.json](file://model/mercury-2.5/meta.json)
- [model/mistral-large-4/meta.json](file://model/mistral-large-4/meta.json)
- [model/grok-4.7/meta.json](file://model/grok-4.7/meta.json)
- [model/grok-4.7/average.md](file://model/grok-4.7/average.md)
- [model/grok-4.7/Claude_Opus_4.8.md](file://model/grok-4.7/Claude_Opus_4.8.md)
- [model/mistral-large-4/average.md](file://model/mistral-large-4/average.md)
- [model/mistral-large-4/Claude_Opus_4.6.md](file://model/mistral-large-4/Claude_Opus_4.6.md)
- [model/ox_alpha/meta.json](file://model/ox_alpha/meta.json)
- [model/ox_alpha/average.md](file://model/ox_alpha/average.md)
- [model/ox_alpha/Claude_Opus_5.md](file://model/ox_alpha/Claude_Opus_5.md)
</cite>

## Update Summary
**Changes Made**   
- Added comprehensive documentation for three new major model entries: Grok 4.7 (84.4/100), Mistral Large 4 (81.8/100), and Ox Alpha (84.5/100) with detailed benchmark evaluations
- Updated scoring methodology examples to include the latest frontier model assessments and specialized evaluation patterns
- Enhanced evaluator ecosystem analysis with coverage of xAI's flagship coding model, Mistral AI's open-weight MoE architecture, and stealth model investigation methodologies
- Expanded model directory structure documentation to include enterprise-focused models, stealth models, and specialized assessment approaches for experimental checkpoints

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
ModelComp is a static site that compares AI coding models across six normalized dimensions: Tool use, Reasoning, Context window, Multimodal, Coding, and Cost efficiency. Each dimension is scored 1–100 (higher is better). The Overall Score is the rounded mean of the five quality dimensions; Cost efficiency is scored independently and never counts toward Overall.

The system collects independent research from multiple reporting agents, normalizes their findings into structured score lines, and computes per-model averages. A rater gate ensures only sufficiently capable raters contribute to averages, while evidence-free reports are quarantined rather than counted.

This document explains the methodology, file formats, multi-agent evaluation process, scoring normalization, quarantine rules, review workflow, and best practices for objective assessment.

**Section sources**
- [README.md:3-59](file://README.md#L3-L59)
- [model-comparison.md:1-10](file://model-comparison.md#L1-L10)

## Project Structure
At the data layer, each tracked model lives under `model/<slug>/`. Inside each folder:
- One findings file per reporting agent (`<Source_Name>.md`)
- An auto-generated `average.md` with arithmetic means
- A hand-edited `meta.json` with display metadata

```mermaid
graph TB
AgentFiles["Agent findings files<br/>model/<slug>/<Source_Name>.md"] --> Sync["pnpm sync<br/>scripts/sync-data.mjs"]
Meta["Per-model meta.json"] --> Sync
Sync --> Average["Recomputed average.md"]
Sync --> QueueFile["Auto-generated model-queue.md<br/>Deterministic research queue"]
Sync --> GeneratedScores["src/data/scores.generated.ts"]
Sync --> SourceRegistry["src/data/sources.generated.ts"]
GeneratedScores --> ModelsTS["src/data/models.ts"]
SourceRegistry --> ModelsTS
QueueFile --> Agents["Research agents<br/>Process queue top-down"]
ModelsTS --> UI["Compare view + per-model pages"]
```

**Diagram sources**
- [README.md:31-44](file://README.md#L31-L44)
- [model/README.md:1-30](file://model/README.md#L1-L30)
- [tasks/sync-data.md:19-62](file://tasks/sync-data.md#L19-L62)
- [scripts/lib/average.mjs:103-121](file://scripts/lib/average.mjs#L103-L121)

Key responsibilities:
- `model/<slug>/<Source_Name>.md`: self-contained research report with raw benchmarks and normalized scores.
- `model/<slug>/average.md`: recomputed by sync; not edited by hand.
- `model-queue.md`: auto-generated research queue with deterministic ordering by overall scores.
- `model/<slug>/meta.json`: curated display metadata required by sync.
- `scripts/sync-data.mjs`: deterministic synchronization pipeline.
- `src/data/models.ts`: hydrates model data and derives Results-source ordering.
- `src/components/Methodology.tsx`: public explanation of scoring on the site.

**Section sources**
- [model/README.md:1-30](file://model/README.md#L1-L30)
- [README.md:61-73](file://README.md#L61-L73)

## Core Components
The core components of the evaluation system are:

| Component | Purpose | Key Rules |
|---|---|---|
| Findings file | Independent agent report with raw benchmarks and normalized scores | Must include all seven score lines; zero verified benchmarks → `.md.excluded` |
| `meta.json` | Display metadata for a model | Required fields enforced by sync |
| `average.md` | Arithmetic means across eligible raters | Recomputed by sync; not hand-edited |
| `model-queue.md` | Auto-generated research queue with deterministic ordering | Highest Overall first, ties A-Z; generated by sync |
| Sync script | Parses, validates, quarantines, registers sources, and writes generated data | Deterministic; non-zero exit code on failures |
| Rater gate | Filters which agent reports count toward an average | Only raters whose own model average exceeds 84.9 qualify |
| Quarantine | Auto-moves evidence-free or invalid-quality-dimension reports | Renames to `.md.excluded`; preserves content |
| Methodology page | Public explanation of scoring | States cost is excluded from Overall |

**Section sources**
- [model-report-TEMPLATE.md:71-87](file://model-report-TEMPLATE.md#L71-L87)
- [model/README.md:32-57](file://model/README.md#L32-L57)
- [tasks/sync-data.md:19-62](file://tasks/sync-data.md#L19-L62)
- [RULES.md:46-63](file://RULES.md#L46-L63)
- [src/components/Methodology.tsx:14-25](file://src/components/Methodology.tsx#L14-L25)

## Architecture Overview
The end-to-end flow starts with agent-authored findings and ends with pre-parsed data consumed by the static site.

```mermaid
sequenceDiagram
participant Researcher as "Research Agent"
participant Repo as "Repository"
participant Sync as "sync-data.mjs"
participant Parser as "parse.mjs / average.mjs"
participant Data as "generated scores + sources"
participant Site as "UI components"
Researcher->>Repo : Write model/<slug>/<Source_Name>.md
Researcher->>Sync : Run pnpm sync
Sync->>Parser : Parse findings + validate scores
Parser-->>Sync : Scores, labels, eligibility
Sync->>Sync : Quarantine evidence-free files
Sync->>Sync : Compute average.md with rater gate
Sync->>Sync : Generate model-queue.md (deterministic order)
Sync->>Data : Write scores.generated.ts + sources.generated.ts
Data-->>Site : MODELS, Sources, Rankings
Site-->>User : Hexagon, tables, cards, methodology
```

**Diagram sources**
- [README.md:31-44](file://README.md#L31-L44)
- [tasks/sync-data.md:19-62](file://tasks/sync-data.md#L19-L62)
- [scripts/sync-data.mjs:212-372](file://scripts/sync-data.mjs#L212-L372)

## Detailed Component Analysis

### Findings File Format
Each agent's report follows a strict structure:
- Header with source, date, and links to methodology and cross-model log
- Model card with provider, IDs, context window, modalities, pricing, architecture
- Raw benchmarks section with sourced numbers
- Normalized scores section with exactly seven labeled lines
- Signature block with agent identity, method, and future-source guidance
- Submission checklist (removed before committing)

Critical constraints:
- All seven score lines must be present with exact labels.
- Overall Score must equal the half-up mean of the five quality dimensions.
- If no verified public benchmark exists for the exact model/ID, save `<STEM>.md.excluded` instead of inventing scores.

```mermaid
flowchart TD
Start(["Start report"]) --> Card["Fill model card"]
Card --> Benchmarks["List raw benchmarks with sources"]
Benchmarks --> Evidence{"Any verified benchmark?"}
Evidence --> |No| Excluded["Save <STEM>.md.excluded"]
Evidence --> |Yes| Scores["Write seven normalized score lines"]
Scores --> Formula["Overall = mean of five quality dims"]
Formula --> Signature["Add signature block"]
Signature --> Checklist["Complete submission checklist"]
Checklist --> Commit["Remove checklist and commit"]
```

**Diagram sources**
- [model-report-TEMPLATE.md:1-104](file://model-report-TEMPLATE.md#L1-L104)
- [tasks/research.md:104-108](file://tasks/research.md#L104-L108)

**Section sources**
- [model-report-TEMPLATE.md:1-104](file://model-report-TEMPLATE.md#L1-L104)
- [tasks/research.md:104-143](file://tasks/research.md#L104-L143)

### Scoring Methodology and Six Dimensions
The six dimensions are:
1. Tool use
2. Reasoning
3. Context window
4. Multimodal
5. Coding
6. Cost efficiency

Cost efficiency is scored but excluded from Overall. Overall is the rounded mean of the first five quality dimensions.

Dimension anchors and interpretation guidelines:
- Tool use: Terminal-Bench, Tau3, GDPval, OSWorld/AutomationBench, tool-call efficiency.
- Reasoning: GPQA Diamond, HLE, LCR/MRCR, CritPt, Intelligence Index.
- Context window: tiered mapping based on total tokens and retrieval performance.
- Multimodal: input/output coverage; text-only scores low.
- Coding: SWE-bench Verified, DeepSWE, LiveCodeBench, SciCode, SWE-Atlas, Coding Index.
- Cost efficiency: inverse pricing on evaluated tier; $0 maps to 100.

The methodology also documents frontier and mid-range reference bands and notes missing benchmarks explicitly rather than fabricating values.

**Section sources**
- [model-comparison.md:140-150](file://model-comparison.md#L140-L150)
- [model-comparison.md:35-48](file://model-comparison.md#L35-L48)
- [src/components/Methodology.tsx:14-25](file://src/components/Methodology.tsx#L14-L25)

### Multi-Agent Evaluation Process
Multiple reporting agents independently evaluate the same model. Each agent produces its own findings file under the same model folder. The system then:
- Parses each agent's seven score lines.
- Validates label names and numeric ranges.
- Quarantines evidence-free or invalid-quality-dimension reports.
- Computes per-model averages using eligible raters.
- Registers new reporting agents automatically.

Eligibility rule:
- Only raters whose own model average exceeds 84.9 count toward another model's average.
- If no rater clears the gate, the average falls back to all available reports (top-10 cap still applies), and this fallback is logged.

**Updated** The evaluation dataset has been significantly expanded with extensive new model evaluation reports covering GLM 5.3 Flash (67/100) across multiple provider directories including Inkling, Claude Fable 5, Gemini 2.5, Qwen 3.5, and Qwen 3.8 Flash Next, demonstrating consistent assessment methodology across different provider contexts. Additionally, new model evaluations include Inkling Small (74/100), Qwen 3.8 Flash Next (73/100), Pareto 26.10 Preview (66/100), Gemini 2.5 (63/100), Qwen 3.5 (69/100), and stealth model Fledge Alpha with detailed methodology documentation showcasing specialized evaluation approaches for experimental checkpoints, preview models, and stealth models.

```mermaid
flowchart TD
Start(["Averages computed"]) --> Collect["Collect eligible source Overalls"]
Collect --> Gate{"Own model average > 84.9?"}
Gate --> |Yes| Top10["Top-10 highest Overalls"]
Gate --> |No| Skip["Skip for this average"]
Top10 --> Mean["Arithmetic mean of top-10 source Overalls"]
Skip --> Fallback{"Any eligible raters?"}
Fallback --> |No| AllReports["Use all available reports (top-10 cap)"]
Fallback --> |Yes| Mean
AllReports --> Label["Label below-gate fallback"]
Mean --> Output["Write average.md"]
Label --> Output
```

**Diagram sources**
- [tasks/sync-data.md:38-47](file://tasks/sync-data.md#L38-L47)
- [RULES.md:52-59](file://RULES.md#L52-L59)
- [scripts/lib/parse.mjs:39-41](file://scripts/lib/parse.mjs#L39-L41)

**Section sources**
- [tasks/sync-data.md:38-47](file://tasks/sync-data.md#L38-L47)
- [RULES.md:52-63](file://RULES.md#L52-L63)
- [scripts/lib/parse.mjs:39-41](file://scripts/lib/parse.mjs#L39-L41)

### Sophisticated Research Queue System
The research queue system eliminates redundant queue-sorting scans across research runs through an auto-generated `model-queue.md` file at the repository root. This deterministic ordering system provides significant performance improvements and consistency guarantees.

**Queue Generation**: The `buildQueueFile()` function in `scripts/lib/average.mjs` generates the queue by:
- Extracting all models with parseable average entries
- Sorting by Overall Score descending (highest first)
- Breaking ties alphabetically (A-Z)
- Skipping slugs without valid average entries

**Queue Processing**: Research agents process the queue by:
- Reading the single `model-queue.md` file instead of scanning all `average.md` files
- Processing folders in deterministic order (highest Overall first)
- Handling unlisted slugs (no `average.md` yet) by appending them last, sorted A-Z
- Falling back to parsing individual `average.md` files only if the queue is missing or stale

**Benefits**:
- Eliminates token waste from repeated queue sorting operations
- Provides deterministic ordering for reproducible research workflows
- Reduces computational overhead from scanning ~130 model directories
- Maintains freshness contract like other generated files

```mermaid
flowchart TD
ScoreIndex["Score index with average entries"] --> BuildQueue["buildQueueFile()"]
BuildQueue --> Sort["Sort by Overall desc, ties A-Z"]
Sort --> QueueFile["model-queue.md output"]
QueueFile --> Agents["Research agents read queue"]
Agents --> Process["Process folders top-down"]
Process --> Missing["Unlisted slugs go last, A-Z"]
```

**Diagram sources**
- [scripts/lib/average.mjs:103-121](file://scripts/lib/average.mjs#L103-L121)
- [scripts/sync-data.mjs:543-559](file://scripts/sync-data.mjs#L543-L559)

**Section sources**
- [scripts/lib/average.mjs:103-121](file://scripts/lib/average.mjs#L103-L121)
- [scripts/sync-data.mjs:543-559](file://scripts/sync-data.mjs#L543-L559)
- [tasks/research-assign.md:29-30](file://tasks/research-assign.md#L29-L30)
- [tasks/research.md:52-57](file://tasks/research.md#L52-L57)

### Unified Model Organization and Marketplace Identity Management
The model organization system supports unified model structures where different marketplace identities and access levels are consolidated under a single model directory rather than separate folders. This approach emphasizes that models with multiple marketplace names should be treated as one model with identical weights, differing only in pricing and distribution channels.

**Space Bunny Identity Unification Example**: The Space Bunny model demonstrates the unified approach where three marketplace identities — **Space Bunny** (canonical), **Space Bunny Alpha** (OpenRouter `stealth/space-bunny-alpha`), and **Space Bunny Free** (OpenCode `space-bunny-free`, limited-time $0 tier) — are now part of a single `model/space-bunny/` directory. Internet-verified as one anonymous stealth model under three marketplace labels with identical weights. The directory rename from `space-bunny-alpha/` to `space-bunny/` ensures that marketplace suffixes cannot be misinterpreted as separate models. Meta ships one model with identical weights across all marketplaces - the only differences are pricing and distribution channels.

**Muse Spark Consolidation Examples**: Following the same unified approach, Muse Spark models were reorganized to eliminate redundant directory structures like `muse-spark-1.2-free/`, `muse-spark-1.3-max/`, and `muse-spark-1.3-contributor/` in favor of single authoritative model entries. Muse Spark 1.2 was reorganized from `muse-spark-1.2-free/` to `model/muse-spark-1.2/`, and Muse Spark 1.3 consolidates Contributor Free, Contributor, Standard, and Max tiers under a single directory.

**Marketplace Alias Resolution**: The system maintains backward compatibility through marketplace alias resolution. When sources reference models by marketplace names or access tiers, they resolve to the base slug rather than creating separate directories. This ensures consistency while preserving historical references and avoiding duplicate model entries.

```mermaid
flowchart TD
OldStructure["Old Structure:<br/>space-bunny-alpha/<br/>space-bunny-free/<br/>muse-spark-1.2-free/<br/>muse-spark-1.3-max/"] --> Consolidation["Consolidation Process"]
NewStructure["New Structure:<br/>space-bunny/<br/>muse-spark-1.2/<br/>muse-spark-1.3/"] --> Marketplaces["Single Models with Multiple Marketplaces:<br/>Space Bunny (canonical)<br/>Space Bunny Alpha (OpenRouter)<br/>Space Bunny Free (OpenCode)<br/>Muse Spark Tiers (Contributor/Standard/Max)"]
Marketplaces --> Pricing["Different Marketplace Pricing<br/>Same Weights & Capabilities"]
```

**Diagram sources**
- [model/space-bunny/meta.json:1-11](file://model/space-bunny/meta.json#L1-L11)
- [model/muse-spark-1.2/meta.json:1-15](file://model/muse-spark-1.2/meta.json#L1-L15)
- [model/muse-spark-1.3/meta.json:1-15](file://model/muse-spark-1.3/meta.json#L1-L15)
- [model/README.md:105-116](file://model/README.md#L105-L116)

**Section sources**
- [model/space-bunny/meta.json:1-11](file://model/space-bunny/meta.json#L1-L11)
- [model/muse-spark-1.2/meta.json:1-15](file://model/muse-spark-1.2/meta.json#L1-L15)
- [model/muse-spark-1.3/meta.json:1-15](file://model/muse-spark-1.3/meta.json#L1-L15)
- [model/README.md:105-116](file://model/README.md#L105-L116)

### Quarantine System for Evidence-Free Reports
Quarantine protects the integrity of averages by excluding reports without sufficient evidence.

Auto-quarantine triggers:
- Eight or more rows reading "no verified public score found" with zero measured numbers in the Raw-benchmarks section.
- Any quality dimension scored as 0 (floors are 10+; 0 indicates "no data" filed as 0).
- Flat-identical quality dimensions with zero cited numbers.

Behavior:
- The sync script renames the file to `<Source_Name>.md.excluded`.
- Content is preserved.
- Quarantined files are skipped during parsing and averaging.
- They remain in version control unless replaced by a corrected real report.

```mermaid
flowchart TD
Start(["Findings file scanned"]) --> Count["Count 'no verified public score found' rows"]
Count --> ZeroMeasured{"Zero measured numbers in Raw benchmarks?"}
ZeroMeasured --> |Yes| CheckThreshold{"≥ 8 such rows?"}
CheckThreshold --> |Yes| Quarantine["Rename to .md.excluded"]
CheckThreshold --> |No| CheckDims["Check quality dimensions"]
ZeroMeasured --> |No| CheckDims
CheckDims --> HasZero{"Any quality dim = 0?"}
HasZero --> |Yes| Quarantine
HasZero --> |No| FlatDims["Are quality dims flat with zero citations?"]
FlatDims --> |Yes| Quarantine
FlatDims --> |No| Keep["Keep file as valid finding"]
```

**Diagram sources**
- [tasks/sync-data.md:21-29](file://tasks/sync-data.md#L21-L29)
- [scripts/lib/quarantine.mjs:1](file://scripts/lib/quarantine.mjs#L1)

**Section sources**
- [tasks/sync-data.md:21-29](file://tasks/sync-data.md#L21-L29)
- [RULES.md:10-16](file://RULES.md#L10-L16)
- [scripts/lib/quarantine.mjs:1](file://scripts/lib/quarantine.mjs#L1)

### Scoring Normalization and Drift Correction
Normalization converts raw benchmark results into comparable 1–100 scores. The sync pipeline enforces consistency:

- Each findings file must contain exactly seven labeled score lines.
- Overall Score drift tolerance is 0.51.
- If a file's Overall differs from the half-up mean of its five quality dimensions by more than 0.51, sync rewrites only the Overall number and logs an AUTO line.
- Benchmarks and prose are never rewritten by sync.

```mermaid
flowchart TD
Start(["Parse findings"]) --> Extract["Extract seven score lines"]
Extract --> Validate{"All labels present and valid?"}
Validate --> |No| Fail["Fail sync loudly"]
Validate --> |Yes| Compute["Compute five-dim quality mean"]
Compute --> Compare{"Drift > 0.51?"}
Compare --> |No| Accept["Accept file scores"]
Compare --> |Yes| Correct["Rewrite Overall to correct mean"]
Correct --> Log["Log AUTO correction"]
Accept --> Next["Proceed to averaging"]
Log --> Next
```

**Diagram sources**
- [tasks/sync-data.md:31-37](file://tasks/sync-data.md#L31-L37)
- [scripts/sync-data.mjs:349-366](file://scripts/sync-data.mjs#L349-L366)

**Section sources**
- [tasks/sync-data.md:31-37](file://tasks/sync-data.md#L31-L37)
- [scripts/sync-data.mjs:349-366](file://scripts/sync-data.mjs#L349-L366)

### Review Process and Quality Assurance
The review process combines automated checks with human verification:

Automated checks:
- Filename validation: only letters, digits, underscores, and dots allowed.
- Score-line format validation.
- `meta.json` schema validation.
- Quarantine detection.
- Overall drift correction.
- Rater gate enforcement.
- Generated data written only when sync has zero failures.

Human verification:
- Confirm new model folders have `meta.json`, findings, and generated `average.md`.
- Confirm new reporting agents appear in the Results-source dropdown.
- Confirm `pnpm build` passes.
- Update `REPORT.md` with changes.
- Ensure permanence rules hold: no deleted or uncommitted research files.

```mermaid
flowchart TD
Human["Human edits findings or meta.json"] --> SyncCmd["Run pnpm sync"]
SyncCmd --> AutoChecks["Automated validation + quarantine + averaging"]
AutoChecks --> Green{"Sync exit code 0?"}
Green --> |No| Fix["Read FAIL lines and fix"]
Green --> |Yes| Build["Run pnpm build.types && pnpm build"]
Build --> Verify["Verify selectors, dropdowns, hexagon, cards"]
Verify --> Report["Update REPORT.md if needed"]
```

**Diagram sources**
- [tasks/sync-data.md:66-108](file://tasks/sync-data.md#L66-L108)
- [README.md:18-29](file://README.md#L18-L29)

**Section sources**
- [tasks/sync-data.md:66-108](file://tasks/sync-data.md#L66-L108)
- [README.md:18-29](file://README.md#L18-L29)

### Standards for Contributing New Model Evaluations
To add a new model:
1. Create `model/<slug>/` with at least one findings file and `meta.json`.
2. Use filesystem-safe slug naming with dotted versions where appropriate.
3. Follow the template structure and scoring contract.
4. Run `pnpm sync` to create `average.md` and register data.
5. Run typecheck and build.

To add a new reporting agent's findings:
1. Drop `<Source_Name>.md` into every model folder it evaluated.
2. Run `pnpm sync`.
3. Run typecheck and build.

Important naming rules:
- Slug uses dots for version numbers, e.g., `gpt-5.5`, not `gpt-5-5`.
- Findings filenames use letters, digits, underscores, and dots.
- `meta.json` `name` must match vendor display casing and spacing.

**Updated** For models with multiple marketplace identities or access levels, consolidate under a single model directory using marketplace alias resolution. Do not create separate directories for different marketplace names (e.g., avoid `model/space-bunny-alpha/`, `model/space-bunny-free/`, `model/muse-spark-1.3-free/`, or `model/muse-spark-1.3-max/`). Instead, use the unified model structure with appropriate marketplace metadata in `meta.json`. Both Space Bunny and Muse Spark models now follow this pattern where every marketplace variant name represents different distribution channels of the same model with identical weights.

**Section sources**
- [model/README.md:7-16](file://model/README.md#L7-L16)
- [model/README.md:32-57](file://model/README.md#L32-L57)
- [model/README.md:59-77](file://model/README.md#L59-L77)
- [model/README.md:105-116](file://model/README.md#L105-L116)

### Guidelines for Writing Research Findings
Guidelines derived from the template and task instructions:
- Start from `model-report-TEMPLATE.md`.
- Do not read peer findings before writing your report.
- Use fresh public web research for each model.
- Record raw benchmarks with sources; mark missing data explicitly.
- Derive normalized scores using the documented methodology.
- Include a one-sentence justification per dimension.
- Never invent placeholder scores.
- If zero verified benchmarks exist, save the `.md.excluded` twin.
- Fill the signature block with agent identity, method, and date.
- Remove the submission checklist before committing.

Best practices for objectivity:
- Cite harnesses and sources for every number.
- Note variance between sources rather than averaging them manually.
- State what caps each score.
- Treat free tiers carefully: note time limits and training-data caveats.
- Keep Cost efficiency separate from Overall.

**Updated** The expanded evaluator ecosystem demonstrates diverse research methodologies through extensive new model evaluations including GLM 5.3 Flash (67/100) multi-provider coverage under claude-fable-5, gemini-2.5, qwen-3.5, and qwen-3.8-flash-next, plus specialized evaluation patterns for experimental checkpoints like Qwen 3.8 Flash Next (73/100), preview models like Pareto 26.10 Preview (66/100), legacy models like Gemini 2.5 (63/100), and stealth models like Fledge Alpha with detailed methodology documentation. Specific examples include Inkling Small (74/100) representing Thinking Machines Lab's open-weights flagship evaluation, Qwen 3.5 (69/100) showcasing Alibaba's flagship generation assessment, and sophisticated multimodal capability analysis showing vendor-independent measurement divergences.

**Section sources**
- [model-report-TEMPLATE.md:1-104](file://model-report-TEMPLATE.md#L1-L104)
- [tasks/research.md:98-143](file://tasks/research.md#L98-L143)
- [model-comparison.md:152-158](file://model-comparison.md#L152-L158)

### Evidence Quality and Permanence Rules
Evidence quality is enforced through:
- Self-exclusion for zero-evidence reports.
- Quarantine thresholds for weak or fabricated-looking data.
- Strict filename and score-line contracts.
- Per-file signatures and dated attribution.

Permanence rules:
- Existing findings files must not be deleted, overwritten, renamed, or moved.
- Only sync's quarantine rename is sanctioned.
- Reporting-agent folders are dataset infrastructure and must remain.
- Below-gate or out-of-top-10 reports stay on disk and on the site; they only stop counting toward averages.

**Section sources**
- [RULES.md:8-44](file://RULES.md#L8-L44)
- [tasks/research.md:147-182](file://tasks/research.md#L147-L182)
- [tasks/sync-data.md:78-108](file://tasks/sync-data.md#L78-L108)

### Cross-Model Signed Log
The cross-model signed log records what was found, what is missing, and who reported it. It complements the normalized scores table by providing an audit trail for recent additions and name resolutions.

Key properties:
- Each entry includes model name, findings summary, scores, and signature.
- Name resolution notes clarify aliases, typos, and paid-vs-free mismatches.
- The changelog tracks methodology transitions, including v4 exclusion of Cost from Overall.

**Updated** Recent additions include comprehensive evaluations from new model directories including GLM 5.3 Flash (67/100) multi-provider coverage under claude-fable-5, gemini-2.5, qwen-3.5, and qwen-3.8-flash-next, plus specialized assessments for experimental checkpoints like Qwen 3.8 Flash Next (73/100), preview models like Pareto 26.10 Preview (66/100), legacy models like Gemini 2.5 (63/100), and stealth models like Fledge Alpha with detailed methodology documentation.

**Section sources**
- [model-findings.md:1-8](file://model-findings.md#L1-L8)
- [model-findings.md:12-201](file://model-findings.md#L12-L201)
- [model-findings.md:198-202](file://model-findings.md#L198-L202)

### Expanded Evaluator Ecosystem
The comprehensive expansion of the model evaluation dataset introduces extensive new model directories that significantly enhance evaluation coverage and scoring infrastructure.

New model evaluation characteristics:

**GLM 5.3 Flash Multi-Provider Coverage (67/100)**: Showcases ZhiPu AI's GLM 5.3 Flash model evaluated across multiple provider directories including Inkling, Claude Fable 5, Gemini 2.5, Qwen 3.5, and Qwen 3.8 Flash Next. The evaluation demonstrates consistent assessment methodology across different provider contexts with specialized handling for various model architectures and capabilities, achieving a solid 67/100 overall score.

**Qwen 3.8 Flash Next Experimental Assessment (73/100)**: Represents Alibaba's open-weight experimental checkpoint (125B language params, 6B active) with 262K native context extensible to 1M with YaRN, distinct from managed Qwen3.8-Flash. The evaluation showcases specialized assessment techniques for experimental checkpoints with image and video understanding capabilities.

**Pareto 26.10 Preview Specialized Evaluation (66/100)**: Demonstrates Unbiased's composite/blended multimodal preview model for research, coding and agents with 1M context and 131K max output. The evaluation handles the challenge of preview models with no verified public benchmark scores yet, carrying provisional scoring with explicit evidence gaps.

**Gemini 2.5 Legacy Model Assessment (63/100)**: Showcases Google's Gemini 2.5 family flagship served as `gemini-2.5-pro` with deep-reasoning and coding capabilities, 1M context, thinking, and text/image/audio/video input. The evaluation demonstrates specialized handling of legacy access-limited models with comprehensive multimodal capability analysis.

**Qwen 3.5 Flagship Generation Evaluation (69/100)**: Represents Alibaba's Qwen 3.5 flagship generation (2026) for general and agentic work with 128K–1M context range and text in/out capabilities. The evaluation handles the complexity of unconfirmed tracked tiers with family-proxy provisional facts.

**Fledge Alpha Stealth Model Investigation**: Demonstrates sophisticated evaluation of unpublished vendor identity with routing probes revealing multi-model backend (DeepSeek V4.1, Kimi K3). The evaluation showcases specialized methodology for stealth models with free OpenCode Zen preview access and provisional scoring due to lack of formal benchmarks.

```mermaid
graph TB
Subgraph NewEvaluations["Expanded Evaluation Coverage"]
GLMFlash["GLM 5.3 Flash<br/>Multi-Provider Coverage (67/100)"]
QwenNext["Qwen 3.8 Flash Next<br/>Experimental Assessment (73/100)"]
ParetoPreview["Pareto 26.10 Preview<br/>Specialized Evaluation (66/100)"]
GeminiLegacy["Gemini 2.5<br/>Legacy Assessment (63/100)"]
QwenFlagship["Qwen 3.5<br/>Flagship Evaluation (69/100)"]
FledgeStealth["Fledge Alpha<br/>Stealth Model Investigation"]
end
Subgraph Coverage["Evaluation Coverage"]
Diverse["Diverse Assessment<br/>Approaches"]
Enhanced["Enhanced Infrastructure<br/>Scoring Accuracy"]
Standardized["Standardized Framework<br/>Consistent Metrics"]
end
NewEvaluations --> Coverage
Coverage --> Enhanced
```

**Diagram sources**
- [model/Inkling/GLM_5.3_Flash.md:1-69](file://model/Inkling/GLM_5.3_Flash.md#L1-L69)
- [model/qwen-3.8-flash-next/meta.json:1-14](file://model/qwen-3.8-flash-next/meta.json#L1-L14)
- [model/pareto-26.10-preview/meta.json:1-10](file://model/pareto-26.10-preview/meta.json#L1-L10)
- [model/gemini-2.5/meta.json:1-10](file://model/gemini-2.5/meta.json#L1-L10)
- [model/qwen-3.5/meta.json:1-9](file://model/qwen-3.5/meta.json#L1-L9)
- [model/fledge-alpha/meta.json:1-10](file://model/fledge-alpha/meta.json#L1-L10)

**Section sources**
- [model/Inkling/GLM_5.3_Flash.md:1-69](file://model/Inkling/GLM_5.3_Flash.md#L1-L69)
- [model/claude-fable-5/GLM_5.3_Flash.md:1-64](file://model/claude-fable-5/GLM_5.3_Flash.md#L1-L64)
- [model/gemini-2.5/GLM_5.3_Flash.md:1-69](file://model/gemini-2.5/GLM_5.3_Flash.md#L1-L69)
- [model/qwen-3.5/GLM_5.3_Flash.md:1-69](file://model/qwen-3.5/GLM_5.3_Flash.md#L1-L69)
- [model/qwen-3.8-flash-next/GLM_5.3_Flash.md:1-69](file://model/qwen-3.8-flash-next/GLM_5.3_Flash.md#L1-L69)
- [model/qwen-3.8-flash-next/meta.json:1-14](file://model/qwen-3.8-flash-next/meta.json#L1-L14)
- [model/pareto-26.10-preview/meta.json:1-10](file://model/pareto-26.10-preview/meta.json#L1-L10)
- [model/gemini-2.5/meta.json:1-10](file://model/gemini-2.5/meta.json#L1-L10)
- [model/qwen-3.5/meta.json:1-9](file://model/qwen-3.5/meta.json#L1-L9)
- [model/fledge-alpha/meta.json:1-10](file://model/fledge-alpha/meta.json#L1-L10)

### Comprehensive Scoring Data Expansion
The extensive scoring data synchronization across the expanded model directories encompasses evaluations across numerous new model families that significantly expand the evaluation coverage:

**GLM 5.3 Flash Multi-Provider Integration**: The GLM 5.3 Flash model has been comprehensively evaluated across multiple provider directories including Inkling, Claude Fable 5, Gemini 2.5, Qwen 3.5, and Qwen 3.8 Flash Next, achieving a consistent 67/100 overall score. These evaluations demonstrate sophisticated multimodal capability analysis, vendor-independent measurement divergences, and specialized assessment methodologies for Flash-tier optimizations.

**Qwen 3.8 Flash Next Experimental Assessment**: The Qwen 3.8 Flash Next model represents Alibaba's open-weight experimental checkpoint with 125B language parameters and 6B active parameters, achieving 73/100 overall score. The evaluation showcases specialized assessment techniques for experimental checkpoints with 262K native context extensible to 1M with YaRN, demonstrating advanced multimodal capabilities including image and video understanding.

**Pareto 26.10 Preview Specialized Evaluation**: The Pareto 26.10 Preview model demonstrates Unbiased's composite/blended multimodal preview approach, achieving 66/100 overall score. The evaluation handles the unique challenges of preview models with no verified public benchmark scores yet, applying provisional scoring methodology with explicit evidence gaps while maintaining comprehensive multimodal capability analysis.

**Gemini 2.5 Legacy Model Assessment**: The Gemini 2.5 model showcases Google's legacy flagship model serving as `gemini-2.5-pro`, achieving 63/100 overall score. The evaluation demonstrates specialized handling of legacy access-limited models with comprehensive analysis of deep-reasoning and coding capabilities, 1M context window, and text/image/audio/video input processing.

**Qwen 3.5 Flagship Generation Evaluation**: The Qwen 3.5 model represents Alibaba's 2026 flagship generation for general and agentic work, achieving 69/100 overall score. The evaluation handles the complexity of unconfirmed tracked tiers with family-proxy provisional facts, showcasing 128K–1M context range and text in/out capabilities with sophisticated assessment methodology.

**Fledge Alpha Stealth Model Investigation**: The Fledge Alpha model demonstrates sophisticated evaluation methodology for unpublished vendor identity with routing probes revealing multi-model backend architecture (DeepSeek V4.1, Kimi K3). The evaluation showcases specialized techniques for stealth models with free OpenCode Zen preview access and provisional scoring due to lack of formal benchmarks.

These additions demonstrate the system's scalability and consistency across different model families and providers, maintaining the standardized evaluation framework while accommodating diverse model architectures, evidence availability scenarios, and model types including experimental checkpoints, preview models, legacy models, stealth models, and Flash-tier optimizations.

**Section sources**
- [model/Inkling/GLM_5.3_Flash.md:1-69](file://model/Inkling/GLM_5.3_Flash.md#L1-L69)
- [model/claude-fable-5/GLM_5.3_Flash.md:1-64](file://model/claude-fable-5/GLM_5.3_Flash.md#L1-L64)
- [model/gemini-2.5/GLM_5.3_Flash.md:1-69](file://model/gemini-2.5/GLM_5.3_Flash.md#L1-L69)
- [model/qwen-3.5/GLM_5.3_Flash.md:1-69](file://model/qwen-3.5/GLM_5.3_Flash.md#L1-L69)
- [model/qwen-3.8-flash-next/GLM_5.3_Flash.md:1-69](file://model/qwen-3.8-flash-next/GLM_5.3_Flash.md#L1-L69)
- [model/qwen-3.8-flash-next/meta.json:1-14](file://model/qwen-3.8-flash-next/meta.json#L1-L14)
- [model/pareto-26.10-preview/meta.json:1-10](file://model/pareto-26.10-preview/meta.json#L1-L10)
- [model/gemini-2.5/meta.json:1-10](file://model/gemini-2.5/meta.json#L1-L10)
- [model/qwen-3.5/meta.json:1-9](file://model/qwen-3.5/meta.json#L1-L9)
- [model/fledge-alpha/meta.json:1-10](file://model/fledge-alpha/meta.json#L1-L10)

### New Model Evaluation Examples
The expanded model directories showcase diverse evaluation approaches and methodologies:

**GLM 5.3 Flash Multi-Provider Evaluation Examples**: The comprehensive evaluation demonstrates consistent assessment methodology across multiple provider directories including Inkling, Claude Fable 5, Gemini 2.5, Qwen 3.5, and Qwen 3.8 Flash Next. The evaluation showcases sophisticated multimodal capability analysis with vendor-independent measurement divergences, achieving consistent 67/100 overall score across different provider contexts with specialized handling for various model architectures and capabilities.

**Qwen 3.8 Flash Next Experimental Assessment Examples**: The experimental checkpoint evaluation represents Alibaba's open-weight model with 125B language parameters and 6B active parameters, achieving 73/100 overall score. The evaluation demonstrates specialized assessment techniques for experimental checkpoints with 262K native context extensible to 1M with YaRN, comprehensive multimodal capability analysis including image and video understanding, and sophisticated pricing structure analysis with Vercel AI Gateway and self-host options.

**Pareto 26.10 Preview Specialized Evaluation Examples**: The preview model assessment showcases Unbiased's composite/blended multimodal approach with 1M context and 131K max output, achieving 66/100 overall score. The evaluation handles the unique challenges of preview models with no verified public benchmark scores yet, applying provisional scoring methodology with explicit evidence gaps while maintaining comprehensive multimodal capability analysis and sophisticated pricing structure analysis.

**Gemini 2.5 Legacy Model Assessment Examples**: The legacy model evaluation demonstrates Google's Gemini 2.5 family flagship served as `gemini-2.5-pro`, achieving 63/100 overall score. The evaluation showcases specialized handling of legacy access-limited models with comprehensive analysis of deep-reasoning and coding capabilities, 1M context window, and text/image/audio/video input processing, including sophisticated generational demotion implications analysis.

**Qwen 3.5 Flagship Generation Evaluation Examples**: The flagship generation assessment represents Alibaba's 2026 model for general and agentic work, achieving 69/100 overall score. The evaluation handles the complexity of unconfirmed tracked tiers with family-proxy provisional facts, showcasing 128K–1M context range and text in/out capabilities with sophisticated assessment methodology for next-generation model evaluation.

**Fledge Alpha Stealth Model Investigation Examples**: The stealth model evaluation demonstrates sophisticated methodology for unpublished vendor identity with routing probes revealing multi-model backend architecture (DeepSeek V4.1, Kimi K3). The evaluation showcases specialized techniques for stealth models with free OpenCode Zen preview access, comprehensive benchmark coverage despite lack of formal benchmarks, and sophisticated pricing structure analysis with free tier considerations.

These examples illustrate the flexibility and consistency of the evaluation framework across different model types, evidence availability scenarios, and use cases while maintaining standardized scoring methodology and sophisticated analytical approaches.

**Section sources**
- [model/Inkling/GLM_5.3_Flash.md:1-69](file://model/Inkling/GLM_5.3_Flash.md#L1-L69)
- [model/claude-fable-5/GLM_5.3_Flash.md:1-64](file://model/claude-fable-5/GLM_5.3_Flash.md#L1-L64)
- [model/gemini-2.5/GLM_5.3_Flash.md:1-69](file://model/gemini-2.5/GLM_5.3_Flash.md#L1-L69)
- [model/qwen-3.5/GLM_5.3_Flash.md:1-69](file://model/qwen-3.5/GLM_5.3_Flash.md#L1-L69)
- [model/qwen-3.8-flash-next/GLM_5.3_Flash.md:1-69](file://model/qwen-3.8-flash-next/GLM_5.3_Flash.md#L1-L69)
- [model/qwen-3.8-flash-next/meta.json:1-14](file://model/qwen-3.8-flash-next/meta.json#L1-L14)
- [model/pareto-26.10-preview/meta.json:1-10](file://model/pareto-26.10-preview/meta.json#L1-L10)
- [model/gemini-2.5/meta.json:1-10](file://model/gemini-2.5/meta.json#L1-L10)
- [model/qwen-3.5/meta.json:1-9](file://model/qwen-3.5/meta.json#L1-L9)
- [model/fledge-alpha/meta.json:1-10](file://model/fledge-alpha/meta.json#L1-L10)

### Major New Model Entries Documentation
The latest updates introduce four major new model entries that significantly expand the evaluation coverage:

**Qwen 3.5 397B A17B (76.4/100)**: Alibaba's massive hybrid Gated DeltaNet Mixture-of-Experts model with 397B total parameters and 17B active parameters. This natively multimodal early-fusion model excels in reasoning, coding, agents, and vision tasks. The evaluation demonstrates sophisticated assessment of large-scale MoE architectures with 262K native context extensible to ~1M, achieving strong performance across all dimensions with particular strength in reasoning (76.4/100) and coding (77.8/100).

**Ring-2.6-1T (63.4/100)**: InclusionAI's trillion-parameter open-weight reasoning flagship with 1T total parameters and 63B active parameters. This specialized reasoning model serves as the thinking half of the 2.6-1T pair with adjustable Reasoning Effort settings. The evaluation showcases specialized assessment techniques for ultra-large reasoning models with 128K native context (256K with YaRN), demonstrating exceptional cost efficiency (87.8/100) while maintaining competitive reasoning capabilities (75.7/100).

**Solar Mini 4 (56.4/100)**: Upstage's efficient lightweight model optimized for high-throughput enterprise tasks and fast inference. This proprietary MoE model demonstrates specialized assessment for enterprise-focused models with 65,536 total context window, achieving excellent cost efficiency (91.1/100) while maintaining solid reasoning (62.4/100) and coding (59.8/100) capabilities.

**Solar Open 2 (66.1/100)**: Upstage's open-weights model designed for flexible enterprise fine-tuning and domain-specific knowledge integration. The evaluation demonstrates sophisticated assessment of open-weight enterprise models with 65,536 total context window, achieving strong context window performance (86.1/100) and balanced capabilities across reasoning (78.1/100) and coding (81/100).

```mermaid
graph TB
Subgraph MajorNewModels["Major New Model Entries"]
Qwen397B["Qwen 3.5 397B<br/>Massive Hybrid MoE (76.4/100)"]
Ring1T["Ring-2.6-1T<br/>Trillion-Parameter Reasoning (63.4/100)"]
SolarMini4["Solar Mini 4<br/>Proprietary Enterprise MoE (56.4/100)"]
SolarOpen2["Solar Open 2<br/>Open-Weights Enterprise (66.1/100)"]
end
Subgraph SpecializedAssessment["Specialized Assessment Patterns"]
LargeScale["Large-Scale MoE Assessment"]
ReasoningFocus["Reasoning-Focused Evaluation"]
EnterpriseOptimization["Enterprise Optimization Analysis"]
OpenWeightAnalysis["Open-Weight Capability Analysis"]
end
MajorNewModels --> SpecializedAssessment
```

**Diagram sources**
- [model/qwen-3.5-397b/meta.json:1-9](file://model/qwen-3.5-397b/meta.json#L1-L9)
- [model/ring-2.6.1t/meta.json:1-9](file://model/ring-2.6.1t/meta.json#L1-L9)
- [model/solar-mini-4/meta.json:1-10](file://model/solar-mini-4/meta.json#L1-L10)
- [model/solar-open-2/meta.json:1-10](file://model/solar-open-2/meta.json#L1-L10)
- [model/qwen-3.5-397b/average.md:1-23](file://model/qwen-3.5-397b/average.md#L1-L23)
- [model/ring-2.6.1t/average.md:1-23](file://model/ring-2.6.1t/average.md#L1-L23)
- [model/solar-mini-4/average.md:1-23](file://model/solar-mini-4/average.md#L1-L23)
- [model/solar-open-2/average.md:1-23](file://model/solar-open-2/average.md#L1-L23)

**Section sources**
- [model/qwen-3.5-397b/meta.json:1-9](file://model/qwen-3.5-397b/meta.json#L1-L9)
- [model/ring-2.6.1t/meta.json:1-9](file://model/ring-2.6.1t/meta.json#L1-L9)
- [model/solar-mini-4/meta.json:1-10](file://model/solar-mini-4/meta.json#L1-L10)
- [model/solar-open-2/meta.json:1-10](file://model/solar-open-2/meta.json#L1-L10)
- [model/qwen-3.5-397b/average.md:1-23](file://model/qwen-3.5-397b/average.md#L1-L23)
- [model/ring-2.6.1t/average.md:1-23](file://model/ring-2.6.1t/average.md#L1-L23)
- [model/solar-mini-4/average.md:1-23](file://model/solar-mini-4/average.md#L1-L23)
- [model/solar-open-2/average.md:1-23](file://model/solar-open-2/average.md#L1-L23)

### Additional Model Additions
Beyond the four major new entries, the system has incorporated numerous smaller model additions that enhance evaluation diversity:

**Mercury 2.5**: Advanced multimodal model with comprehensive evaluation across multiple provider directories, demonstrating sophisticated assessment methodology for complex multimodal capabilities.

**Mistral Large 4**: Enterprise-focused model with specialized evaluation patterns for large-scale deployment scenarios and enterprise optimization requirements.

**Ling 3.1 Flash**: High-performance flash model with optimized inference capabilities and specialized assessment for latency-sensitive applications.

**Step 5 Preview**: Scaffolded evaluation entry with standardized metadata structure for experimental model assessments.

These additions demonstrate the system's ability to accommodate diverse model architectures, use cases, and deployment scenarios while maintaining consistent evaluation standards.

**Section sources**
- [model/mercury-2.5/meta.json:1-10](file://model/mercury-2.5/meta.json#L1-L10)
- [model/mistral-large-4/meta.json:1-10](file://model/mistral-large-4/meta.json#L1-L10)
- [model/ling-3.1-flash/meta.json:1-14](file://model/ling-3.1-flash/meta.json#L1-L14)
- [model/step-5-preview/meta.json:1-9](file://model/step-5-preview/meta.json#L1-L9)

### Three New Major Model Entries: Grok 4.7, Mistral Large 4, and Ox Alpha
The latest updates introduce three significant new model entries that represent diverse architectural approaches and evaluation methodologies:

**Grok 4.7 (84.4/100)**: xAI's September-2026 flagship model (~210B parameters) positioned as the successor to Grok 4.6 for long-running coding and professional knowledge work. The model features 500K context window, text and image input with text output, and operates at Grok 4.6 pricing ($2.00/$6.00 per 1M tokens, doubling past 200K). The evaluation demonstrates sophisticated assessment of xAI's frontier coding model with strong performance across tool use (87/100), reasoning (86.7/100), context window (88.3/100), and coding (88.2/100). The model shows particular strength in agentic coding workflows and professional knowledge tasks, with 18 qualifying reporting sources contributing to the averaged scores.

**Mistral Large 4 (81.8/100)**: Mistral AI's flagship frontier model featuring native multilingual fluency, advanced reasoning, and robust tool use. This 1-trillion-parameter granular Mixture-of-Experts (MoE) model with 1.05 trillion total parameters and ~52B active parameters per token represents a significant advancement in open-weight frontier models. The model offers 131,072 total context window (32,768 output), text in/out modalities, and pricing at $2.00/$6.00 per 1M tokens. The evaluation showcases specialized assessment techniques for large-scale enterprise deployments with strong performance in context window (90.4/100), coding (82.1/100), and tool use (80.4/100). The model is currently in public preview with open weights planned for late October 2026.

**Ox Alpha (84.5/100)**: A stealth frontier reasoning model operating under OpenRouter's `stealth/ox-alpha` listing, described as the first natively omnimodal model in OpenRouter's Stealth anonymous series. The model features 1M context window with 131K maximum output, supporting text, image, video, and PDF input with text output. Operating under free Zen tier access, the model demonstrates sophisticated evaluation methodology for unpublished vendor identity with routing probes revealing potential connections to Zhipu's GLM family. The evaluation showcases specialized techniques for stealth models with evidence-absence scoring methodology, particularly notable for its exceptional cost efficiency (97.6/100) and strong context window performance (92.7/100).

```mermaid
graph TB
Subgraph NewFrontierModels["Three New Frontier Models"]
Grok47["Grok 4.7<br/>xAI Flagship (84.4/100)"]
MistralL4["Mistral Large 4<br/>Open-Weight MoE (81.8/100)"]
OxAlpha["Ox Alpha<br/>Stealth Omnimodal (84.5/100)"]
end
Subgraph EvaluationPatterns["Specialized Evaluation Approaches"]
CodingFocus["Agentic Coding Focus"]
EnterpriseScale["Enterprise Scale Assessment"]
StealthInvestigation["Stealth Model Investigation"]
end
NewFrontierModels --> EvaluationPatterns
```

**Diagram sources**
- [model/grok-4.7/meta.json:1-10](file://model/grok-4.7/meta.json#L1-L10)
- [model/mistral-large-4/meta.json:1-10](file://model/mistral-large-4/meta.json#L1-L10)
- [model/ox_alpha/meta.json:1-10](file://model/ox_alpha/meta.json#L1-L10)
- [model/grok-4.7/average.md:1-24](file://model/grok-4.7/average.md#L1-L24)
- [model/mistral-large-4/average.md:1-24](file://model/mistral-large-4/average.md#L1-L24)
- [model/ox_alpha/average.md:1-24](file://model/ox_alpha/average.md#L1-L24)

**Section sources**
- [model/grok-4.7/meta.json:1-10](file://model/grok-4.7/meta.json#L1-L10)
- [model/mistral-large-4/meta.json:1-10](file://model/mistral-large-4/meta.json#L1-L10)
- [model/ox_alpha/meta.json:1-10](file://model/ox_alpha/meta.json#L1-L10)
- [model/grok-4.7/average.md:1-24](file://model/grok-4.7/average.md#L1-L24)
- [model/mistral-large-4/average.md:1-24](file://model/mistral-large-4/average.md#L1-L24)
- [model/ox_alpha/average.md:1-24](file://model/ox_alpha/average.md#L1-L24)
- [model/grok-4.7/Claude_Opus_4.8.md:1-56](file://model/grok-4.7/Claude_Opus_4.8.md#L1-L56)
- [model/mistral-large-4/Claude_Opus_4.6.md:1-68](file://model/mistral-large-4/Claude_Opus_4.6.md#L1-L68)
- [model/ox_alpha/Claude_Opus_5.md:1-55](file://model/ox_alpha/Claude_Opus_5.md#L1-L55)

### Enhanced Scoring Methodology Examples
The expanded evaluation dataset provides sophisticated examples of scoring methodology across different model categories:

**Grok 4.7 Evaluation Methodology**: The xAI flagship model demonstrates sophisticated assessment of agentic coding capabilities with benchmark coverage including AA Briefcase (1657 Elo), GDPval-AA (1695 Elo), Terminal-Bench 4.0 (38.0%), and AutomationBench (65.6%). The evaluation showcases specialized handling of xAI's proprietary architecture with careful consideration of context window discrepancies (meta.json lists 128K but actual capacity appears to be 500K) and modality limitations (text+image input, text-only output).

**Mistral Large 4 Evaluation Methodology**: The open-weight MoE model evaluation demonstrates comprehensive assessment of enterprise-scale deployment scenarios with benchmark coverage including Terminal-Bench 4.0 (28.3%), AutomationBench (59.9%), Artificial Analysis Intelligence Index (38), and DeepSWE v1.1 (62%). The evaluation showcases specialized techniques for assessing large-scale MoE architectures with 1.05 trillion parameters and 1.6B vision encoder, while accounting for the model's preview status and promotional pricing structure.

**Ox Alpha Evaluation Methodology**: The stealth model evaluation represents the most sophisticated approach to evidence-absence scoring, with three of five dimensions explicitly marked as evidence-absence scores. The methodology demonstrates how to handle models with no verified benchmark data while still providing meaningful capability assessments. The evaluation includes sophisticated fingerprint analysis pointing to potential GLM family origins, careful handling of community claims versus verified facts, and comprehensive documentation of the model's structural capabilities despite absence of performance measurements.

**Section sources**
- [model/grok-4.7/Claude_Opus_4.8.md:20-47](file://model/grok-4.7/Claude_Opus_4.8.md#L20-L47)
- [model/mistral-large-4/Claude_Opus_4.6.md:20-59](file://model/mistral-large-4/Claude_Opus_4.6.md#L20-L59)
- [model/ox_alpha/Claude_Opus_5.md:21-46](file://model/ox_alpha/Claude_Opus_5.md#L21-L46)

## Dependency Analysis
The evaluation system depends on several coordinated modules:

```mermaid
graph LR
Template["model-report-TEMPLATE.md"] --> Research["tasks/research.md"]
Assign["tasks/research-assign.md"] --> Research
Research --> Findings["model/<slug>/<Source_Name>.md"]
MetaSchema["model/README.md"] --> Findings
Findings --> Sync["scripts/sync-data.mjs"]
Quarantine["scripts/lib/quarantine.mjs"] --> Sync
Parse["scripts/lib/parse.mjs"] --> Sync
Average["scripts/lib/average.mjs"] --> Sync
QueueGen["buildQueueFile()"] --> Sync
FindFails["scripts/find-fails.mjs"] --> Validation
Sync --> Generated["scores.generated.ts + sources.generated.ts"]
Sync --> QueueFile["model-queue.md"]
Generated --> ModelsTS["src/data/models.ts"]
QueueFile --> Agents["Research agents"]
ModelsTS --> UI["Components + routes"]
```

**Diagram sources**
- [model-report-TEMPLATE.md:1-104](file://model-report-TEMPLATE.md#L1-L104)
- [tasks/research.md:1-211](file://tasks/research.md#L1-L211)
- [tasks/research-assign.md:1-39](file://tasks/research-assign.md#L1-L39)
- [model/README.md:1-30](file://model/README.md#L1-L30)
- [scripts/sync-data.mjs:212-372](file://scripts/sync-data.mjs#L212-L372)
- [scripts/lib/quarantine.mjs:1](file://scripts/lib/quarantine.mjs#L1)
- [scripts/lib/parse.mjs:39-41](file://scripts/lib/parse.mjs#L39-L41)
- [scripts/lib/average.mjs:10-17](file://scripts/lib/average.mjs#L10-L17)
- [scripts/find-fails.mjs:1-20](file://scripts/find-fails.mjs#L1-L20)

Coupling and cohesion observations:
- Findings files are intentionally self-contained and decoupled from peer reports.
- Sync centralizes parsing, quarantine, averaging, and code generation.
- Generated TypeScript files are the single source of truth for the UI.
- Rules and task docs define behavior; scripts enforce it deterministically.
- New model directories follow the same structural patterns as existing models.
- The research queue system provides deterministic ordering for efficient agent processing.

Potential risks:
- Inconsistent score-line formatting breaks parsing.
- Missing `meta.json` blocks new models.
- Incorrect Overall calculation causes drift corrections.
- Voice/speech routing errors place models in the wrong tree.
- New model directories require proper meta.json configuration.
- Stale or missing `model-queue.md` requires fallback processing.

**Section sources**
- [scripts/sync-data.mjs:19-62](file://scripts/sync-data.mjs#L19-L62)
- [.agents/rules.md:31-35](file://.agents/rules.md#L31-L35)
- [tasks/research.md:68-94](file://tasks/research.md#L68-L94)
- [scripts/find-fails.mjs:1-20](file://scripts/find-fails.mjs#L1-L20)

## Performance Considerations
Performance considerations for contributors and maintainers:
- Use `pnpm sync:quiet` in large repositories to reduce noise while preserving failure semantics.
- Avoid reading peer findings during research; follow one-folder-at-a-time execution.
- Keep input size manageable for constrained agents (e.g., Gemini rate-limit rules).
- Prefer incremental saves: write each findings file before advancing.
- Trust generated data: do not hand-edit `average.md`, `scores.generated.ts`, `sources.generated.ts`, or `model-queue.md`.
- Monitor new model directory growth and ensure proper meta.json configuration.
- Leverage the pre-sorted research queue (`model-queue.md`) instead of scanning all `average.md` files for ordering.

**Updated** The sophisticated research queue system eliminates redundant queue-sorting scans across research runs. Agents now read the single `model-queue.md` file instead of scanning all ~130 `model/<slug>/average.md` files, significantly reducing token consumption and computational overhead. The queue provides deterministic ordering (highest Overall first, ties A-Z) and handles unlisted slugs by appending them last, sorted alphabetically.

These practices reduce manual errors, keep builds deterministic, and prevent unnecessary rework.

[No sources needed since this section provides general guidance]

## Troubleshooting Guide
Common issues and resolutions:

| Symptom | Likely Cause | Resolution |
|---|---|---|
| Sync fails loudly on filename | Invalid characters in findings filename | Rename to match `/^[A-Za-z0-9_.]+\.md$/` |
| Missing score lines | Template not fully filled | Add all seven labeled score lines |
| Overall drift correction | Manual rounding mismatch | Let sync rewrite Overall; verify five-dim mean |
| Evidence-free report ignored | Quarantine triggered | Add verified benchmarks or keep `.md.excluded` |
| New model not visible | Missing `meta.json` | Add required fields and rerun sync |
| New agent not in dropdown | Not registered yet | Run sync; it appends new sources automatically |
| Build fails after data change | Generated files stale or invalid | Re-run sync and build |
| Voice model placed incorrectly | Routing rule violated | Move to `models_voice/<slug>/` per RULES.md |
| New model directory issues | Improper meta.json configuration | Verify id, name, short, contextWindow, modalities, pricingNote fields |
| Findings file validation fails | Missing required score lines | Use find-fails.mjs to identify problematic files |
| Vision-instruct model evaluation issues | Specialized assessment methodology required | Document vision capabilities and instruction-following performance |
| Preview-tier model scoring | Limited evidence base | Apply provisional scoring philosophy with explicit evidence gaps |
| Multimodal model evaluation | Complex capability assessment | Handle text/image/video processing with specialized evaluation patterns |
| Model marketplace confusion | Using separate marketplace directories | Consolidate under unified model structure; use marketplace alias resolution |
| Space Bunny directory issues | Old marketplace-based structure | Use `model/space-bunny/` instead of `space-bunny-alpha/` or `space-bunny-free/` |
| Muse Spark directory issues | Old tier-based structure | Use `model/muse-spark-1.2/` or `model/muse-spark-1.3/` instead of `-free/` or `-max/` variants |
| Research queue not working | `model-queue.md` missing or stale | Run `pnpm sync` to regenerate; fallback to individual average.md parsing |
| Agents scanning too many files | Queue not being used | Ensure agents read `model-queue.md` instead of scanning all average.md files |
| Queue ordering inconsistent | Stale queue file | Regenerate with `pnpm sync`; queue sorts by Overall desc, ties A-Z |
| Open-weight model evaluation issues | Licensing and self-hosting considerations | Document license terms and self-hosting feasibility |
| Experimental checkpoint scoring | Limited availability and specialized capabilities | Apply provisional scoring with explicit evidence gaps and capability limitations |
| Flash-tier model assessment | Optimization-focused evaluation | Focus on latency-performance tradeoffs and specialized Flash capabilities |
| Frontier model evaluation | Advanced capability assessment | Apply comprehensive analysis of cutting-edge capabilities and specialized use cases |
| GLM 5.3 Flash multi-provider issues | Inconsistent evaluation methodology across providers | Ensure standardized assessment approach with consistent scoring methodology |
| Qwen 3.8 Flash Next integration problems | Improper experimental checkpoint setup | Verify proper integration within experimental checkpoint directory structure |
| Pareto 26.10 Preview evaluation issues | Preview model with no verified benchmarks | Apply provisional scoring methodology with explicit evidence gaps |
| Gemini 2.5 legacy model issues | Access-limited model handling | Document legacy access limitations and specialized assessment methodology |
| Qwen 3.5 family proxy issues | Unconfirmed tracked tier | Apply family-proxy provisional facts with appropriate uncertainty markers |
| Fledge Alpha stealth model issues | Unpublished vendor identity | Document routing probe findings and multi-model backend analysis |
| Multi-provider coverage gaps | Missing provider directory entries | Add GLM_5.3_Flash.md files under all required provider directories |
| Experimental checkpoint assessment problems | Specialized evaluation methodology required | Apply comprehensive analysis of experimental capabilities and licensing considerations |
| Preview model scoring inconsistencies | Limited evidence base handling | Maintain consistent provisional scoring philosophy across preview models |
| Legacy model evaluation issues | Generational demotion implications | Document service continuity considerations and specialized assessment approaches |
| Stealth model investigation problems | Multi-model backend complexity | Apply sophisticated routing probe methodology and backend analysis techniques |
| Qwen 3.5 397B integration issues | Massive MoE model complexity | Apply specialized assessment for large-scale hybrid Gated DeltaNet architectures |
| Ring 2.6 1T evaluation problems | Trillion-parameter model assessment | Document specialized reasoning-focused evaluation techniques |
| Solar Mini 4 enterprise issues | Proprietary MoE model handling | Apply enterprise optimization assessment methodology |
| Solar Open 2 open-weight issues | Flexible fine-tuning model assessment | Document open-weight capability analysis and enterprise integration patterns |
| Mercury 2.5 multimodal issues | Complex multimodal capability assessment | Apply comprehensive multimodal evaluation methodology |
| Mistral Large 4 enterprise issues | Large-scale deployment assessment | Document enterprise-focused evaluation patterns |
| Ling 3.1 Flash optimization issues | Flash model performance assessment | Apply specialized latency-performance optimization evaluation |
| Step 5 Preview scaffold issues | Experimental model scaffolding | Use standardized metadata structure for experimental assessments |
| Grok 4.7 integration issues | xAI flagship model assessment | Apply specialized assessment for agentic coding and professional knowledge work |
| Mistral Large 4 evaluation problems | Open-weight MoE model complexity | Document specialized assessment for 1-trillion parameter granular MoE architecture |
| Ox Alpha stealth model issues | Anonymous model investigation | Apply sophisticated evidence-absence scoring methodology and fingerprint analysis |
| xAI model context window discrepancies | Meta.json vs actual capacity differences | Document verified context window specifications and flag metadata inconsistencies |
| Mistral Large 4 preview status | Early access model with limited benchmarks | Apply provisional scoring with explicit acknowledgment of preview limitations |
| Ox Alpha pricing discrepancies | Historical free tier vs current availability | Document pricing changes and verify live availability before relying on free access |

**Section sources**
- [tasks/sync-data.md:21-62](file://tasks/sync-data.md#L21-L62)
- [tasks/sync-data.md:66-108](file://tasks/sync-data.md#L66-L108)
- [RULES.md:37-44](file://RULES.md#L37-L44)
- [scripts/find-fails.mjs:1-20](file://scripts/find-fails.mjs#L1-L20)

## Conclusion
ModelComp's evaluation system combines transparent methodology, strict file contracts, and deterministic automation. Agents produce independent findings, the sync pipeline validates and quarantines weak evidence, and averages reflect only qualified raters. Cost efficiency remains visible but is excluded from Overall, ensuring quality-focused comparisons.

**Updated** The comprehensive expansion with extensive new model evaluation reports including GLM 5.3 Flash (67/100) multi-provider coverage under claude-fable-5, gemini-2.5, qwen-3.5, and qwen-3.8-flash-next, Qwen 3.8 Flash Next experimental assessment (73/100), Pareto 26.10 Preview specialized evaluation (66/100), Gemini 2.5 legacy model assessment (63/100), Qwen 3.5 flagship generation evaluation (69/100), and Fledge Alpha stealth model investigation significantly enhances the system's evaluation coverage and scoring infrastructure. The sophisticated research queue system eliminates redundant queue-sorting scans across research runs, providing deterministic ordering and significant performance improvements. The addition of four major new model entries—Qwen 3.5 397B A17B (76.4/100), Ring-2.6-1T (63.4/100), Solar Mini 4 (56.4/100), and Solar Open 2 (66.1/100)—along with three new frontier models including Grok 4.7 (84.4/100), Mistral Large 4 (81.8/100), and Ox Alpha (84.5/100)—further expands the evaluation diversity. The diverse assessment approaches—from specialized experimental checkpoint evaluation to preview model assessment, legacy model analysis, stealth model investigation, multi-provider coverage, and specialized assessment of massive MoE architectures—provide richer insights into model capabilities and limitations.

For reliable contributions:
- Follow the template and methodology.
- Cite raw benchmarks and mark missing data.
- Respect quarantine and permanence rules.
- Run sync and build after every data change.
- Treat averages as computed outputs, not editorial inputs.
- Ensure new model directories have proper meta.json configuration.
- Handle vision-instruct models with appropriate specialized assessment methodology.
- Apply provisional scoring philosophy for preview-tier models with limited evidence bases.
- Accommodate multimodal capabilities with specialized evaluation patterns for complex model types.
- Use unified model organization for models with multiple marketplace identities rather than separate marketplace directories.
- Leverage marketplace alias resolution to maintain consistency while preserving historical references.
- Follow Space Bunny and Muse Spark consolidation patterns where every marketplace variant represents the same model with identical weights.
- Utilize the pre-sorted research queue (`model-queue.md`) for efficient agent processing instead of scanning all average.md files.
- Trust the deterministic queue ordering (highest Overall first, ties A-Z) for reproducible research workflows.
- Apply specialized evaluation methodologies for experimental checkpoints considering licensing and self-hosting implications.
- Handle preview model assessments with appropriate consideration for limited evidence bases and provisional scoring requirements.
- Assess legacy models with focus on generational demotion implications and service continuity considerations.
- Investigate stealth models with sophisticated routing probe methodology and multi-model backend analysis.
- Ensure consistent evaluation methodology across multiple provider directories for models like GLM 5.3 Flash.
- Handle multi-provider coverage gaps by adding missing provider directory entries for comprehensive model assessment.
- Maintain standardized assessment approaches when integrating new model types into existing provider directories.
- Apply comprehensive analysis techniques for experimental checkpoints, preview models, legacy models, and stealth models with appropriate specialized methodologies.
- Handle massive MoE architectures like Qwen 3.5 397B with specialized assessment for large-scale hybrid Gated DeltaNet models.
- Assess trillion-parameter reasoning models like Ring-2.6-1T with focused reasoning capability evaluation techniques.
- Evaluate enterprise-focused models like Solar Mini 4 and Solar Open 2 with appropriate enterprise optimization and open-weight capability analysis.
- Accommodate diverse model architectures including multimodal models, flash models, and specialized enterprise deployments.
- Use standardized scaffolding for experimental model assessments like Step 5 Preview.
- Apply sophisticated evidence-absence scoring methodology for stealth models like Ox Alpha with comprehensive documentation of unknown reliability factors.
- Handle xAI flagship model assessments like Grok 4.7 with specialized attention to agentic coding capabilities and context window verification.
- Assess open-weight frontier models like Mistral Large 4 with comprehensive analysis of MoE architecture implications and enterprise deployment considerations.
- Document pricing discrepancies and availability changes for models with evolving commercial terms.
- Maintain rigorous distinction between verified benchmarks and community claims in stealth model investigations.

This approach keeps the comparison fair, auditable, and scalable as new models and new reporting agents join the system.

[No sources needed since this section summarizes without analyzing specific files]