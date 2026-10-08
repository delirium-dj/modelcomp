# Naming Conventions & Utilities

<cite>
**Referenced Files in This Document**
- [naming.mjs](file://scripts/lib/naming.mjs)
- [sync-data.mjs](file://scripts/sync-data.mjs)
- [models.ts](file://src/data/models.ts)
- [naming.test.mjs](file://scripts/lib/naming.test.mjs)
</cite>

## Update Summary
**Changes Made**
- Added comprehensive documentation for the new `formatGptLabel` function that handles OpenAI GPT- prefix formatting
- Updated VENDOR_PREFIXES section to include all 11 supported vendors (google, openai, anthropic, meta, mistral, deepseek, alibaba, xai, microsoft, nvidia, cohere)
- Enhanced slug exception documentation to include qwen-3.5-397b parameter-size exception
- **Added detailed documentation for improved stem normalization including proper handling of version separators (converting underscore versions like Laguna_XS_2_1 to dotted versions Laguna_XS_2.1)**
- **Added comprehensive coverage of parameter-size exceptions for models like Gemma_4_31B_IT and Qwen_3.8_27B**
- Updated examples and diagrams to reflect the new GPT label formatting behavior

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
This document explains the naming conventions and utility functions that standardize model and source identification across the data pipeline. It focuses on:

- Display name normalization with `normName`.
- **New**: OpenAI GPT- prefix formatting with `formatGptLabel` for official vendor styling.
- **Enhanced**: Improved stem normalization with proper handling of version separators (converting underscore versions like `Laguna_XS_2_1` to dotted versions `Laguna_XS_2.1`).
- **Updated**: Parameter-size exceptions for models like `Gemma_4_31B_IT` and `Qwen_3.8_27B` that should not be treated as version violations.
- Conversion between filesystem filenames and internal source keys with `stemToKey` and `labelOf`.
- Hyphen-version violation detection to prevent duplicate model folders such as `gpt-5-5` versus `gpt-5.5`.
- The virtual key system used for special sort views.
- The slug guessing algorithm used when auto-scaffolding missing `meta.json` files.
- The `SOURCE_OVERRIDES` mapping for cases where default naming does not match expected behavior.
- **Updated**: Expanded vendor prefix recognition supporting 11 major AI vendors.

These utilities keep the pipeline deterministic, readable, and consistent from raw markdown findings through generated TypeScript sources to the runtime model registry.

## Project Structure
The naming and identification logic is split into two layers:

- Pure helpers in `scripts/lib/naming.mjs`: zero-dependency functions that define the contract for names, slugs, labels, and validation rules.
- Orchestration in `scripts/sync-data.mjs`: reads the filesystem, applies the pure helpers, enforces conventions, and writes generated artifacts.
- Runtime consumption in `src/data/models.ts`: uses generated sources and defines virtual views for UI sorting.

```mermaid
graph TB
subgraph "Scripts"
SYNC["scripts/sync-data.mjs"]
NAMING["scripts/lib/naming.mjs"]
end
subgraph "Generated Sources"
SOURCES_TS["src/data/sources.generated.ts"]
SCORES_TS["src/data/scores.generated.ts"]
end
subgraph "Runtime Data"
MODELS_TS["src/data/models.ts"]
end
SYNC --> NAMING
SYNC --> SOURCES_TS
SYNC --> SCORES_TS
MODELS_TS --> SOURCES_TS
```

**Diagram sources**
- [sync-data.mjs:36-75](file://scripts/sync-data.mjs#L36-L75)
- [sync-data.mjs:438-480](file://scripts/sync-data.mjs#L438-L480)
- [sync-data.mjs:490-523](file://scripts/sync-data.mjs#L490-L523)
- [models.ts:18-20](file://src/data/models.ts#L18-L20)
- [models.ts:318-329](file://src/data/models.ts#L318-L329)

**Section sources**
- [naming.mjs:1-7](file://scripts/lib/naming.mjs#L1-L7)
- [sync-data.mjs:1-30](file://scripts/sync-data.mjs#L1-L30)
- [models.ts:6-16](file://src/data/models.ts#L6-L16)

## Core Components
The core naming utilities are small, pure functions designed to be stable across builds and easy to test.

| Function | Purpose | Input | Output | Notes |
|---|---|---|---|---|
| `normName` | Case- and punctuation-folded comparison for deep-links and catalog matching | String display or filename text | Lowercase string without non-alphanumeric characters | Used to map a human-readable name to a normalized form for catalog lookup. |
| **`formatGptLabel`** | **Format OpenAI GPT models with official hyphenated style** | String label | Formatted label with GPT- prefix | **New**: Converts "GPT 5.6 Terra" to "GPT-5.6 Terra", "GPT OSS 120B" to "GPT-OSS 120B". |
| **`normalizeStem`** | **Canonical findings-stem normalizer with improved version separator handling** | Filename stem | Stem with digit-underscore-digit patterns converted to dots | **Enhanced**: Converts `Laguna_XS_2_1` to `Laguna_XS_2.1`, respects parameter-size exceptions. |
| **`stemVersionViolation`** | **Underscore-version gate for findings-file stems** | Filename stem | Suggested dotted stem or `null` if valid | **New**: Detects underscore-separated version patterns like `Laguna_XS_2_1`. |
| `stemToKey` | Convert a findings-file stem to an internal source key | Filename stem without `.md` | Source key with spaces replacing underscores | Example: `Gemini_3.6_Flash` becomes `Gemini 3.6 Flash`. |
| `labelOf` | Extract the Agreement-notes label from a full filename | Full `.md` filename | Label with underscores replaced by spaces and extension removed | Uses `formatGptLabel` for GPT models; used for deterministic A-Z sorting of sources. |
| `resolveSourceMeta` | Resolve display label and model-page slug for a source key | Source key, overrides map, catalog lookup function | Object containing `label` and optional `slug` | Overrides take precedence; otherwise the normalized key is matched against the catalog. |
| `hyphenVersionViolation` | Detect invalid hyphen-separated version segments in slugs | Slug string | Suggested dotted slug or `null` if valid | Prevents duplicates like `gpt-5-5` when `gpt-5.5` already exists. |
| `vendorPrefixViolation` | Detect vendor-prefixed duplicate slugs | Slug string, known slugs list | Canonical slug or `null` if valid | **Updated**: Supports 11 vendors including google, openai, anthropic, meta, mistral, deepseek, alibaba, xai, microsoft, nvidia, cohere. |
| `VIRTUAL_KEYS` | Set of virtual sort-view keys | None | Set of six view keys | These keys represent sort dimensions, not real reporting agents. |
| `formatSlugGuess` | Auto-scaffold a human-readable display name from a slug | Folder slug | Title-cased, space-separated guess | Applies `formatGptLabel` for GPT models; must be reviewed before being trusted as an official vendor name. |
| `missingMetaFields` | Validate required fields in `meta.json` | Metadata object and required field list | Array of missing fields | Used during sync validation. |
| `metaNameHasUnderscore` | Reject slug-like artifacts in display names | Name string | Boolean | Underscores indicate a slug artifact, not a valid display name. |

**Section sources**
- [naming.mjs:8-27](file://scripts/lib/naming.mjs#L8-L27)
- [naming.mjs:29-72](file://scripts/lib/naming.mjs#L29-L72)
- [naming.mjs:78-101](file://scripts/lib/naming.mjs#L78-L101)

## Architecture Overview
The naming utilities participate in three main flows:

1. **Sync-time identification**: `sync-data.mjs` scans model folders, converts filenames to keys, resolves labels and slugs, validates metadata, and generates source registries and score indexes.
2. **Convention enforcement**: Hyphen-version violations are rejected early so duplicate model folders cannot be created. **Underscore-version violations in findings files are also detected**. Missing or malformed `meta.json` files are scaffolded with a slug guess and flagged for manual review.
3. **Runtime presentation**: `src/data/models.ts` consumes generated sources and defines virtual views for sorting results by dimension.

```mermaid
flowchart TD
Start(["Start sync"]) --> ScanFolders["Scan model/<slug>/ folders"]
ScanFolders --> CheckHyphen["Check hyphen-version violations"]
CheckHyphen --> |Violation| FailHyphen["Fail with dotted suggestion"]
CheckHyphen --> |Valid| ReadMeta["Read or scaffold meta.json"]
ReadMeta --> ScaffoldGuess["Use formatSlugGuess when meta.json is missing"]
ScaffoldGuess --> ValidateMeta["Validate required fields"]
ValidateMeta --> ParseFiles["Parse findings files and scores"]
ParseFiles --> CheckStems["Check findings-file stems for underscore versions"]
CheckStems --> |Violation| FailStem["Fail with dotted stem suggestion"]
CheckStems --> |Valid| StemToKey["Convert stems to source keys"]
StemToKey --> ResolveMeta["Resolve label + slug via SOURCE_OVERRIDES and catalog"]
ResolveMeta --> GenerateSources["Generate sources.generated.ts"]
GenerateSources --> GenerateScores["Generate scores.generated.ts"]
GenerateScores --> End(["End sync"])
FailHyphen --> End
FailStem --> End
```

**Diagram sources**
- [sync-data.mjs:180-197](file://scripts/sync-data.mjs#L180-L197)
- [sync-data.mjs:297-326](file://scripts/sync-data.mjs#L297-L326)
- [sync-data.mjs:371-398](file://scripts/sync-data.mjs#L371-L398)
- [sync-data.mjs:438-480](file://scripts/sync-data.mjs#L438-L480)
- [sync-data.mjs:490-523](file://scripts/sync-data.mjs#L490-L523)

## Detailed Component Analysis

### Display Name Normalization: `normName`
`normName` normalizes display names by converting them to lowercase and removing all characters except letters and digits. This makes it safe to compare names that may differ in case, punctuation, or separators.

Key behaviors:
- Converts uppercase to lowercase.
- Removes spaces, hyphens, dots, slashes, and other punctuation.
- Produces a compact identifier suitable for catalog matching.

Example transformations:
- `"DeepSeek v4.1 Flash"` → normalized form without spaces, dots, or punctuation.
- `"deepseek-v4.1-flash"` → same normalized form.
- `"MiMo v2.6 Flash"` → normalized form without spaces or punctuation.

Rationale:
- Deep links and catalog lookups must tolerate different human-written forms.
- Normalization avoids accidental mismatches caused by casing or punctuation.

**Section sources**
- [naming.mjs:8-9](file://scripts/lib/naming.mjs#L8-L9)
- [naming.test.mjs:31-37](file://scripts/lib/naming.test.mjs#L31-L37)

### OpenAI GPT Label Formatting: `formatGptLabel`
**New functionality**: `formatGptLabel` implements OpenAI's official hyphenation style for GPT model names. This ensures consistency with OpenAI's branding guidelines and API naming conventions.

Key behaviors:
- Converts "GPT 5.6 Terra" to "GPT-5.6 Terra" (space to hyphen before version numbers).
- Converts "GPT OSS 120B" to "GPT-OSS 120B" (space to hyphen for OSS variants).
- Leaves non-GPT names unchanged (e.g., "Gemini 3.6 Flash").
- Preserves voice product names like "GPT Realtime 2" without modification.

Integration points:
- Applied automatically in `labelOf()` for findings file processing.
- Used in `formatSlugGuess()` for auto-scaffolded meta.json files.
- Applied in `resolveSourceMeta()` as default label formatting.

Example transformations:
- `"GPT 5.6 Terra"` → `"GPT-5.6 Terra"`
- `"GPT OSS 120B"` → `"GPT-OSS 120B"`
- `"GPT 5"` → `"GPT-5"`
- `"Gemini 3.6 Flash"` → `"Gemini 3.6 Flash"` (unchanged)

```mermaid
flowchart TD
Input["Input label"] --> GptCheck{"Starts with 'GPT'?"}
GptCheck --> |No| NonGpt["Return unchanged"]
GptCheck --> |Yes| OssCheck{"Followed by 'OSS'?"}
OssCheck --> |Yes| OssFormat["Replace 'GPT OSS' with 'GPT-OSS'"]
OssCheck --> |No| VersionCheck{"Followed by digit?"}
VersionCheck --> |Yes| VersionFormat["Replace 'GPT ' with 'GPT-'"]
VersionCheck --> |No| VoiceCheck{"Voice product name?"}
VoiceCheck --> |Yes| KeepAsIs["Keep original format"]
VoiceCheck --> |No| DefaultFormat["Apply version hyphenation"]
OssFormat --> Output["Output formatted label"]
VersionFormat --> Output
KeepAsIs --> Output
DefaultFormat --> Output
NonGpt --> Output
```

**Diagram sources**
- [naming.mjs:15-25](file://scripts/lib/naming.mjs#L15-L25)
- [naming.test.mjs:207-238](file://scripts/lib/naming.test.mjs#L207-L238)

**Section sources**
- [naming.mjs:15-25](file://scripts/lib/naming.mjs#L15-L25)
- [naming.test.mjs:207-238](file://scripts/lib/naming.test.mjs#L207-L238)

### Enhanced Stem Normalization: `normalizeStem` and `stemVersionViolation`
**Enhanced functionality**: The naming system now includes improved stem normalization that properly handles version separators in findings-file stems. This prevents duplicate model entries caused by inconsistent version formatting.

Key behaviors:
- Converts digit-underscore-digit patterns to dotted versions (e.g., `Laguna_XS_2_1` → `Laguna_XS_2.1`).
- Respects parameter-size exceptions that should not be treated as version violations.
- Provides both a canonical normalizer (`normalizeStem`) and a violation detector (`stemVersionViolation`).

**Parameter-size exceptions**: The system recognizes specific model names where digit-underscore-digit patterns represent parameter sizes rather than version separators:
- `Gemma_4_31B_IT`: Represents "Gemma 4 with 31B parameters" - the "4_31" pattern is not a version separator
- `Qwen_3.8_27B`: Represents "Qwen 3.8 with 27B parameters" - the "8_2" pattern is not a version separator

Example transformations:
- `Laguna_XS_2_1` → `Laguna_XS_2.1` (version separator corrected)
- `Gemma_4_31B_IT` → `Gemma_4_31B_IT` (parameter size preserved)
- `Qwen_3.8_27B` → `Qwen_3.8_27B` (parameter size preserved)
- `DeepSeek_4.1_Flash` → `DeepSeek_4.1_Flash` (already correct)

```mermaid
flowchart TD
Input["Input stem"] --> ExceptionCheck{"Is stem in STEM_VERSION_EXCEPTION?"}
ExceptionCheck --> |Yes| Valid["Return unchanged (parameter size)"]
ExceptionCheck --> |No| PatternCheck{"Does stem contain digit-underscore-digit?"}
PatternCheck --> |No| Valid
PatternCheck --> |Yes| Normalize["Replace underscore with dot between digits"]
Normalize --> ReturnSuggestion["Return normalized stem"]
```

**Diagram sources**
- [naming.mjs:78-101](file://scripts/lib/naming.mjs#L78-L101)
- [naming.test.mjs:134-160](file://scripts/lib/naming.test.mjs#L134-L160)

**Section sources**
- [naming.mjs:78-101](file://scripts/lib/naming.mjs#L78-L101)
- [naming.test.mjs:134-160](file://scripts/lib/naming.test.mjs#L134-L160)

### Filename-to-Key Conversion: `stemToKey` and `labelOf`
`stemToKey` converts a findings-file stem into an internal source key by replacing underscores with spaces. This is the bridge between filesystem naming and the application's internal representation.

`labelOf` extracts a user-facing label from a full `.md` filename by removing the extension and replacing underscores with spaces. It now applies `formatGptLabel` for GPT models.

Example transformations:
- `Gemini_3.6_Flash` → `Gemini 3.6 Flash`
- `GLM_5.3_Flash.md` → `GLM 5.3 Flash`
- `GPT_5.6_Terra.md` → `GPT-5.6 Terra` (with GPT formatting)

Rationale:
- Filenames use underscores for filesystem safety.
- Display keys and labels use spaces for readability.
- Sorting uses the same transformation so file order matches expected agreement-note ordering.

**Section sources**
- [naming.mjs:11-15](file://scripts/lib/naming.mjs#L11-L15)
- [naming.test.mjs:39-44](file://scripts/lib/naming.test.mjs#L39-L44)
- [sync-data.mjs:387-393](file://scripts/sync-data.mjs#L387-L393)

### Hyphen-Version Violation Detection
The hyphen-version rule prevents duplicate model folders by rejecting folder slugs that contain a digit-hyphen-digit pattern. Version numbers should use dots, not hyphens.

Behavior:
- If a slug contains a digit followed by a hyphen followed by another digit, it is considered a violation.
- Exceptions exist for known slugs where the hyphen separates meaningful parts, such as parameter sizes.
- The function returns the suggested dotted slug when a violation is detected.
- `sync-data.mjs` fails the run with a clear message pointing to the correct folder name.

Examples:
- `gpt-5-5` → violation; suggested destination is `gpt-5.5`.
- `gemma-4-31b` → exception; treated as a param-size slug, not a version violation.
- `qwen-3.8-27b` → exception; treated as version plus parameter size.
- **Updated**: `qwen-3.5-397b` → exception; treated as version plus parameter size.

```mermaid
flowchart TD
Input["Input slug"] --> ExceptionCheck{"Is slug in SLUG_VERSION_EXCEPTION?"}
ExceptionCheck --> |Yes| Valid["Return null (valid)"]
ExceptionCheck --> |No| PatternCheck{"Does slug contain digit-hyphen-digit?"}
PatternCheck --> |No| Valid
PatternCheck --> |Yes| Suggest["Replace hyphen with dot between digits"]
Suggest --> ReturnSuggestion["Return suggested dotted slug"]
```

**Diagram sources**
- [naming.mjs:29-44](file://scripts/lib/naming.mjs#L29-L44)
- [sync-data.mjs:180-197](file://scripts/sync-data.mjs#L180-L197)

**Section sources**
- [naming.mjs:29-44](file://scripts/lib/naming.mjs#L29-L44)
- [sync-data.mjs:180-197](file://scripts/sync-data.mjs#L180-L197)

### Vendor Prefix Recognition: `VENDOR_PREFIXES`
**Updated**: The vendor prefix system now supports 11 major AI vendors to detect and reject vendor-prefixed duplicate slugs. This prevents confusion between canonical model names and their vendor-prefixed variants.

Supported vendors:
- **google** - Google models (Gemini, Gemma)
- **openai** - OpenAI models (GPT, Codex)
- **anthropic** - Anthropic models (Claude)
- **meta** - Meta models (Llama, Muse)
- **mistral** - Mistral models
- **deepseek** - DeepSeek models
- **alibaba** - Alibaba models
- **xai** - xAI models (Grok)
- **microsoft** - Microsoft models
- **nvidia** - NVIDIA models (Nemotron)
- **cohere** - Cohere models

Behavior:
- Checks if a slug starts with any of the vendor prefixes followed by a hyphen.
- Verifies if the remaining part (after removing vendor prefix) exists as a known slug.
- Returns the canonical slug if a duplicate is detected, otherwise returns null.

Examples:
- `google-gemini-2.5-flash-lite` → suggests `gemini-2.5-flash-lite`
- `openai-gpt-5.6-terra` → suggests `gpt-5.6-terra`
- `anthropic-claude-opus-4.8` → suggests `claude-opus-4.8`

```mermaid
flowchart TD
Input["Input slug"] --> VendorLoop{"Check each vendor prefix"}
VendorLoop --> CheckPrefix{"Slug starts with 'vendor-'?"}
CheckPrefix --> |No| NextVendor["Try next vendor"]
CheckPrefix --> |Yes| StripPrefix["Remove vendor prefix"]
StripPrefix --> CheckExists{"Remaining slug exists?"}
CheckExists --> |Yes| ReturnCanonical["Return canonical slug"]
CheckExists --> |No| NextVendor
NextVendor --> MoreVendors{"More vendors to check?"}
MoreVendors --> |Yes| VendorLoop
MoreVendors --> |No| ReturnNull["Return null (no violation)"]
```

**Diagram sources**
- [naming.mjs:79-101](file://scripts/lib/naming.mjs#L79-L101)
- [naming.test.mjs:131-153](file://scripts/lib/naming.test.mjs#L131-L153)

**Section sources**
- [naming.mjs:79-101](file://scripts/lib/naming.mjs#L79-L101)
- [naming.test.mjs:131-153](file://scripts/lib/naming.test.mjs#L131-L153)

### Virtual Key System for Special Views
The virtual key system provides special sort views that are not real reporting agents. These views reuse the average scores but change the ranking dimension.

Virtual keys:
- `tool`
- `reason`
- `context`
- `cost`
- `code`
- `multi`

At runtime, `src/data/models.ts` defines `VIRTUAL_VIEWS` and derives dropdown entries from them. The virtual views are never registered as real sources in the generated registry; they are synthesized at build time.

```mermaid
classDiagram
class VirtualView {
+string key
+string label
+string dim
}
class ModelsModule {
+VIRTUAL_VIEWS : VirtualView[]
+sortSourceFor(dim) ResultsView
+virtualDimFor(source) DimensionKey
}
ModelsModule --> VirtualView : "defines"
```

**Diagram sources**
- [naming.mjs:46-47](file://scripts/lib/naming.mjs#L46-L47)
- [models.ts:251-274](file://src/data/models.ts#L251-L274)

**Section sources**
- [naming.mjs:46-47](file://scripts/lib/naming.mjs#L46-L47)
- [models.ts:243-274](file://src/data/models.ts#L243-L274)

### Slug Guessing Algorithm for Auto-Scaffolded `meta.json`
When a model folder lacks `meta.json`, `sync-data.mjs` scaffolds one automatically. The scaffolded `name` is generated by `formatSlugGuess`, which title-cases slug segments and treats `gpt` specially. Now includes automatic GPT label formatting.

Algorithm steps:
1. Split the slug by hyphens and underscores.
2. For each segment:
   - Skip empty segments.
   - Capitalize `GPT` exactly.
   - Otherwise, capitalize the first letter and lowercase the rest.
3. Join segments with spaces.
4. Apply `formatGptLabel` for proper GPT formatting.

Important constraint:
- The scaffolded name is only a guess. It must be replaced with the official vendor display name and verified facts before the entry is trustworthy.
- The underscore check rejects slug-like artifacts in the final display name.

Example transformations:
- `gpt-5.6-sol` → `GPT-5.6 Sol` (with GPT formatting)
- `longcat_2.5_preview` → `Longcat 2.5 Preview`
- `gemini-3.8-flash` → `Gemini 3.8 Flash`
- `gpt-oss-120b` → `GPT-OSS 120B` (with GPT formatting)

```mermaid
flowchart TD
Start(["Input slug"]) --> Split["Split by hyphens and underscores"]
Split --> MapSegments["Map each segment"]
MapSegments --> EmptyCheck{"Segment empty?"}
EmptyCheck --> |Yes| Skip["Skip segment"]
EmptyCheck --> |No| GptCheck{"Segment equals 'gpt'?"}
GptCheck --> |Yes| KeepGPT["Keep 'GPT'"]
GptCheck --> |No| TitleCase["Title-case segment"]
KeepGPT --> Join["Join segments with spaces"]
TitleCase --> Join
Skip --> Join
Join --> FormatGpt["Apply formatGptLabel"]
FormatGpt --> Output(["Output slug guess"])
```

**Diagram sources**
- [naming.mjs:49-62](file://scripts/lib/naming.mjs#L49-L62)
- [sync-data.mjs:302-319](file://scripts/sync-data.mjs#L302-L319)

**Section sources**
- [naming.mjs:49-72](file://scripts/lib/naming.mjs#L49-L72)
- [sync-data.mjs:302-326](file://scripts/sync-data.mjs#L302-L326)

### `SOURCE_OVERRIDES` Mapping
`SOURCE_OVERRIDES` handles special cases where the default naming convention does not produce the expected display label or model-page slug.

Overrides include:
- Custom display labels, such as capitalization or vendor-preferred wording.
- Explicit slugs when the normalized key would not match the actual model folder.
- Cases where the agent filename differs from the tracked model page slug.
- **Updated**: GPT model overrides now leverage the automatic `formatGptLabel` formatting.

Resolution order:
1. Use the override's explicit label if present.
2. Use the override's explicit slug if present.
3. Otherwise, fall back to the source key as the label.
4. Fall back to catalog lookup using the normalized key.

```mermaid
flowchart TD
Input["Source key"] --> CheckOverride{"Override exists?"}
CheckOverride --> |Yes| UseOverrideLabel["Use override label if present"]
CheckOverride --> |Yes| UseOverrideSlug["Use override slug if present"]
CheckOverride --> |No| DefaultLabel["Use source key as label"]
UseOverrideSlug --> CatalogLookup["Catalog lookup by normalized key"]
UseOverrideLabel --> CatalogLookup
DefaultLabel --> CatalogLookup
CatalogLookup --> Result["Return label and slug"]
```

**Diagram sources**
- [sync-data.mjs:85-100](file://scripts/sync-data.mjs#L85-L100)
- [naming.mjs:17-27](file://scripts/lib/naming.mjs#L17-L27)

**Section sources**
- [sync-data.mjs:85-100](file://scripts/sync-data.mjs#L85-L100)
- [naming.mjs:17-27](file://scripts/lib/naming.mjs#L17-L27)

### Pipeline Integration: From Filename to Model Page
The complete flow connects filenames, keys, labels, slugs, and generated sources.

```mermaid
sequenceDiagram
participant FS as "Filesystem"
participant Sync as "sync-data.mjs"
participant Naming as "naming.mjs"
participant Registry as "sources.generated.ts"
participant Runtime as "models.ts"
FS->>Sync : Findings files and model folders
Sync->>Naming : stemToKey(filename)
Naming-->>Sync : Source key
Sync->>Naming : normalizeStem(stem)
Naming-->>Sync : Normalized stem
Sync->>Naming : resolveSourceMeta(key, overrides, catalog)
Naming-->>Sync : Label and slug
Sync->>Registry : Append or reconcile registry entries
Runtime->>Registry : Import SourceKey and SOURCE_DEFS
Runtime->>Runtime : Build VIRTUAL_VIEWS and SOURCES
```

**Diagram sources**
- [sync-data.mjs:242-257](file://scripts/sync-data.mjs#L242-L257)
- [sync-data.mjs:371-398](file://scripts/sync-data.mjs#L371-L398)
- [sync-data.mjs:438-480](file://scripts/sync-data.mjs#L438-L480)
- [models.ts:318-329](file://src/data/models.ts#L318-L329)

**Section sources**
- [sync-data.mjs:242-257](file://scripts/sync-data.mjs#L242-L257)
- [sync-data.mjs:371-398](file://scripts/sync-data.mjs#L371-L398)
- [sync-data.mjs:438-480](file://scripts/sync-data.mjs#L438-L480)
- [models.ts:318-329](file://src/data/models.ts#L318-L329)

## Dependency Analysis
The naming utilities have minimal external dependencies and are intentionally isolated:

- `scripts/lib/naming.mjs` has no imports and exports pure functions.
- `scripts/sync-data.mjs` imports the naming helpers and combines them with filesystem I/O, parsing, validation, and code generation.
- `src/data/models.ts` imports generated sources and defines runtime virtual views.

```mermaid
graph LR
NAMING["scripts/lib/naming.mjs"] --> SYNC["scripts/sync-data.mjs"]
SYNC --> SOURCES_GEN["src/data/sources.generated.ts"]
SYNC --> SCORES_GEN["src/data/scores.generated.ts"]
MODELS["src/data/models.ts"] --> SOURCES_GEN
```

**Diagram sources**
- [naming.mjs:1-7](file://scripts/lib/naming.mjs#L1-L7)
- [sync-data.mjs:36-75](file://scripts/sync-data.mjs#L36-L75)
- [sync-data.mjs:490-523](file://scripts/sync-data.mjs#L490-L523)
- [models.ts:18-20](file://src/data/models.ts#L18-L20)

**Section sources**
- [naming.mjs:1-7](file://scripts/lib/naming.mjs#L1-L7)
- [sync-data.mjs:36-75](file://scripts/sync-data.mjs#L36-L75)
- [models.ts:18-20](file://src/data/models.ts#L18-L20)

## Performance Considerations
The naming utilities are designed for performance and determinism:

- `normName`, `stemToKey`, and `labelOf` are simple string operations with linear complexity relative to input length.
- `formatGptLabel` performs constant-time regex replacements for GPT-specific formatting.
- **`normalizeStem` and `stemVersionViolation` perform efficient regex-based conversions with exception checking**.
- `resolveSourceMeta` performs constant-time override lookup and one normalized catalog lookup.
- `hyphenVersionViolation` uses a single regular expression and replacement pass.
- `vendorPrefixViolation` iterates through 11 vendor prefixes with constant-time string operations.
- `formatSlugGuess` splits and maps short slug segments, which is negligible compared to filesystem scanning.

Because these functions are pure and side-effect-free, they can be reused across sync passes and tests without state concerns.

[No sources needed since this section provides general guidance]

## Troubleshooting Guide
Common issues and how the utilities help diagnose them:

| Issue | Symptom | Utility or Rule Involved | Resolution |
|---|---|---|---|
| Duplicate model folder due to hyphenated version | Sync fails with a suggestion to use a dotted version | `hyphenVersionViolation` | Rename the folder to use dots, such as `gpt-5.5`, and merge content into the existing folder. |
| **Duplicate findings file due to underscore version** | **Sync fails with a suggestion to use a dotted stem** | **`stemVersionViolation`** | **Rename the findings file to use dots, such as `Laguna_XS_2.1.md`, and merge content into the existing file.** |
| Wrong display label for GPT models | Dropdown shows "GPT 5.6 Terra" instead of "GPT-5.6 Terra" | `formatGptLabel` | The automatic formatting should handle this; check if custom override is interfering. |
| Wrong display label for a source | Dropdown shows unexpected casing or wording | `SOURCE_OVERRIDES` | Add or update the override for the source key with the correct label. |
| Source key not linked to a model page | Source has no slug after sync | `resolveSourceMeta` and catalog lookup | Ensure the normalized display name exists in a `meta.json`, or add an explicit slug override. |
| Scaffolded `meta.json` name looks wrong | Generated name contains slug artifacts | `formatSlugGuess` and underscore gate | Replace the scaffolded name with the official vendor display name and remove underscores. |
| Vendor-prefixed folder detected | Sync fails with vendor-prefix violation | `vendorPrefixViolation` | Remove the vendor prefix from the folder name (e.g., rename `google-gemini-2.5-flash-lite` to `gemini-2.5-flash-lite`). |
| Sorting order differs from expectations | Labels appear out of order | `labelOf` and A-Z sorting | Ensure filenames follow the underscore-to-space convention used by `labelOf`. |

**Section sources**
- [sync-data.mjs:180-197](file://scripts/sync-data.mjs#L180-L197)
- [sync-data.mjs:371-398](file://scripts/sync-data.mjs#L371-L398)
- [sync-data.mjs:302-326](file://scripts/sync-data.mjs#L302-L326)
- [naming.mjs:17-27](file://scripts/lib/naming.mjs#L17-L27)
- [naming.mjs:49-72](file://scripts/lib/naming.mjs#L49-L72)
- [naming.mjs:78-101](file://scripts/lib/naming.mjs#L78-L101)

## Conclusion
The naming conventions and utilities in this project provide a stable contract between filesystem artifacts, generated sources, and runtime presentation. `normName` ensures robust comparison, **the new `formatGptLabel` function ensures proper OpenAI GPT- prefix formatting**, **the enhanced `normalizeStem` and `stemVersionViolation` functions ensure proper handling of version separators in findings files**, `stemToKey` and `labelOf` bridge filenames and display keys, `hyphenVersionViolation` prevents duplicate model folders, the **expanded `VENDOR_PREFIXES` system supports 11 major AI vendors**, the virtual key system enables consistent sort views, and `SOURCE_OVERRIDES` handles edge cases. Together, they keep the pipeline predictable, auditable, and maintainable as new models and sources are added.

[No sources needed since this section summarizes without analyzing specific files]