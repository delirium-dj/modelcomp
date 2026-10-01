---
kind: business_term
name: Business Glossary
category: business_term
scope:
    - '**'
---

### STEM
- Definition：The agent's identity filename stem (display name with spaces converted to underscores, e.g. `Gemini 3.8 Flash` → `Gemini_3.8_Flash`) used to resolve which `model/<slug>/<STEM>.md` findings file an assigned research agent should produce. It is resolved via a strict chain: kickoff line → pinned line in `tasks/research-assign.md` → self-identification against `src/data/sources.generated.ts` → otherwise STOP and ask the orchestrator.
- Aliases：agent identity stem、AGENT_SOURCE_STEM

### SourceKey
- Definition：A registered reporting-agent identifier stored in `src/data/sources.generated.ts`. A new SourceKey is auto-registered by `pnpm sync` when a previously unseen `<Source_Name>.md` is dropped into a model folder; it is also the canonical value used to validate a STEM during self-identification.
- Aliases：source key

### Overall Score
- Definition：The primary ranking metric per model: rounded mean of the five quality dimensions (Tool use, Reasoning, Context window, Multimodal, Coding), each normalized 1–100. Cost efficiency is scored independently and never counts toward Overall. Only raters whose own Overall exceeds 84.9 contribute to the average; evidence-free reports are quarantined as `.md.excluded`.
- Aliases：Overall

### average.md
- Definition：Arithmetic-mean aggregation file per model folder, recomputed deterministically by `pnpm sync` from all source findings files. Never edited by hand; it drives the queue ordering (highest-Overall-first) for research agents.

### Signature date
- Definition：The provenance line in a findings file (`Provided by: **...** — YYYY-MM-DD`) used to gate enrichment: if older than 7 days and fresh search finds genuinely new verified evidence that would change scores, the agent emits an `ENRICH-PROPOSAL` rather than overwriting the file.

### Quarantine backlog
- Definition：Placeholder findings files left behind after the 2026-09-19 purge, named `<STEM>.md.excluded` and carrying `- **Overall Score: 15/100**`. They lead the research queue so they can be replaced by real normalized-scored files and then deleted.

### Enrichment proposal
- Definition：An approval-gated output format (`ENRICH-PROPOSAL: <slug> | old <date>/<Overall> | new evidence <URLs> | delta`) emitted when a findings file's Signature date is older than 7 days and fresh research found evidence that would change scores. The agent advances without overwriting until explicitly approved.
- Aliases：ENRICH-PROPOSAL
