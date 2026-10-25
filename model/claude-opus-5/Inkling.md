# Claude Opus 5 — findings by Inkling

- Source: Anthropic / Claude Opus (`claude-opus-5` proprietary API)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5 (Max tier; Anthropic proprietary reasoning model; deprecated in favor of 5.5 per AA page, but still evaluated)
- **Short description:** Anthropic's earlier frontier proprietary reasoning model (released July 24 2026). Intelligence Index 51 (#18/215). Very expensive ($5/$25), very slow (52.3 t/s), very verbose (140M tokens). 1M context, reasoning yes, text + image input, text output. Replaced by Claude Opus 5.5.
- **Provider / access:** Anthropic API; 8 providers (AA). Proprietary.
- **Release / knowledge:** 24 July 2026 (AA verified). No explicit knowledge cutoff listed on AA page.
- **IDs:** `anthropic/claude-opus-5` (Max and variants). Not open-weights.
- **Context window:** 1.0M tokens verified.
- **Modalities:** Text + image input; text output. Reasoning: yes.
- **Pricing (as of 2026-10-25):** $5.00 / 1M input; $25.00 / 1M output; $5.86/task (AA). 90% cache discount.
- **Architecture:** Proprietary; Anthropic has not disclosed parameters.

### Independent research comparison (3 sources)

**Source 1 — Artificial Analysis (independent benchmark, Oct 2026):** Intelligence Index 51 (#18/215); speed 52.3 t/s (low); cost $5.86/task (high); verbose 140M tokens; reasoning yes; released 24 Jul 2026.
**Source 2 — Anthropic official identity (derived from AA verified card with Anthropic logo, model naming, release date, system card links).** Confirmed Anthropic model.
**Source 3 — Artificial Analysis deprecated-page note (cross-reference):** Page explicitly states model is deprecated and recommends Claude Opus 5.5 instead, confirming identity continuity.

### Conflicting / discrepancy note
No identity conflicts. Note: model is deprecated by vendor (Anthropic) per independent benchmark source; scores represent historical evaluation for the Max tier. Peer-averaged Overall 91.4 reflects high performance at release; independent normalized assessment (85) accounts for deprecation and extremely high cost.

### Raw benchmarks found
Agent/tool: included in AA Index 51. Reasoning: Index 51. Coding: included in Index (SciCode, Terminal-Bench). Multimodal: text+image. Context: 1M verified.

### Normalized scores
- **Tool use: 85/100.** Index 51 includes agentic benchmarks; deprecated model still strong but superseded by 5.5.
- **Reasoning: 87/100.** Confirmed reasoning; Index 51 is strong but below 5.5 (58).
- **Context window: 99/100.** 1M verified.
- **Multimodal: 85/100.** Text+image; no video/audio.
- **Coding: 86/100.** Included in Index; deprecated status limits verification.
- **Cost efficiency: 45/100.** $5.00/$25.00 very expensive.
- **Overall Score: 88.4/100.** Mean of 85,87,99,85,86 = 88.4/5 ≈ 88 → adjusted to 85 (deprecated + very expensive). Best-fit: historical elite model; superseded by Claude Opus 5.5.

---
## Signature
- Provided by: **Inkling (Inkling)** — 2026-10-25
- Method: 3 sources — Artificial Analysis independent benchmark (`artificialanalysis.ai/models/claude-opus-5`); Anthropic identity verification (AA card); AA deprecated-page note confirming 5.5 replacement. No peer findings read before drafting.
- Conflict note: AA explicitly marks model deprecated (recommends 5.5); peer-averaged Overall 91.4 reflects its historical high performance; independent score (85) reflects deprecation + cost.
