# Grok 4.1 Fast — findings by Flint

- Source: xAI / Grok 4.1 Fast
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast (xAI; Grok family — Fast tier).
- **Short description:** xAI's best tool-calling model with a 2M-token context window, built and released (Nov 2025) for real-world agentic use cases such as customer support and finance; launched alongside the Agent Tools API.
- **Provider / access:** xAI API (`grok-4-1-fast-reasoning`, `grok-4-1-fast-non-reasoning`); also surfaced via third-party API providers per independent coverage.
- **Release / knowledge:** Release date ~2025-11-19 (xAI blog; some sources 2025-11-20); knowledge cutoff not stated in verified sources.
- **IDs:** `grok-4-1-fast-reasoning` (max intelligence) / `grok-4-1-fast-non-reasoning` (instant responses) under the `grok-4.1-fast` family.
- **Context window:** 2,000,000 tokens (xAI blog + Artificial Analysis verified); conflicting reports (BenchLM, aimlapi) split base context 1M vs reasoning context 2M — resolved toward 2M for the reasoning variant.
- **Modalities:** Text + image input, text output; reasoning variants; native tool use (function calling) built in.
- **Pricing (as of 2026-10-28):** xAI: input $0.20 / 1M tokens, cached input $0.05 / 1M, output $0.50 / 1M; tool calls from $5 / 1,000 successful invocations. Independent source (aimlapi) reported Reasoning variant at $1.625 in / $3.25 out per 1M — conflict noted.
- **Architecture:** Proprietary (xAI / SpaceXAI); parameter count not disclosed in verified sources.

### Raw benchmarks found

- Agent / tool use:
  - τ²-bench Telecom (agentic tool use in real-world customer support): **100%** (AA-verified independent evaluation; total cost $105).
  - Berkeley Function Calling v4: **72%** overall accuracy (multi-turn charts vs Grok 4.1 Fast / Grok 4 Fast / Grok 4).
  - Terminal-Bench 2.0 (Vals AI): **24.72%** ±4.60 for Grok 4.1 Fast (Reasoning); strong across the board, 3rd on Vals page.
- Reasoning / knowledge:
  - τ²-bench (Reasoning variant): **93.3%**.
  - FActScore hallucination rate: **2.97%** (Grok 4.1 Fast) vs **9.89%** (Grok 4) — hallucination halved vs previous generation.
- Coding:
  - Vibe Code Bench (Reasoning variant): **1.20%**.

### Cross-source comparison

- Context: xAI blog and Artificial Analysis both state 2M context; BenchLM and aimlapi report base context 1M with reasoning variant at 2M — resolution: reasoning variant carries the 2M window, base Fast tier covered by xAI/AA at 2M.
- Pricing: xAI official pricing ($0.20 in / $0.50 out) conflicts with aimlapi's reported Reasoning pricing ($1.625 in / $3.25 out) — official xAI numbers taken as primary.
- Reasoning vs non-reasoning: API split into `grok-4-1-fast-reasoning` (max intelligence) and `grok-4-1-fast-non-reasoning` (instant responses); benchmark subsets (τ²-bench, Vibe Code Bench) applied to the Reasoning variant only.

### Normalized scores (1–100)

- **Tool use: 85/100.** τ²-bench Telecom **100%** (AA-verified) and Berkeley Function Calling v4 **72%**; Vals AI strong across board (3rd on Vals page); xAI positions Grok 4.1 Fast as best tool-calling model. Cap: specialized agentic tool-use niche rather than general reasoning/coding breadth.
- **Reasoning: 70/100.** Reasoning variant τ²-bench **93.3%**; FActScore hallucination halved vs Grok 4 Fast (**2.97%** vs **9.89%**). Capped: base tier is non-reasoning; Artificial Analysis Intelligence Index not scored for this model.
- **Context window: 90/100.** 2M tokens per xAI + Artificial Analysis; conflicting base-1M reports reconciled (reasoning variant = 2M). Retrieval-at-scale behavior not verified independently.
- **Multimodal: 65/100.** Text + image input, text output (Artificial Analysis); image understanding present but no audio/video/PDF coverage found → mid band.
- **Coding: 60/100.** Vals AI Terminal-Bench 2.0 **24.72%** ±4.60; Vibe Code Bench **1.20%** (Reasoning variant); xAI targeted the Fast tier at tool calling/agentic reliability rather than coding — capped below frontier coding tiers.

- **Cost efficiency: 70/100.** Fast-tier pricing $0.20 in / $0.50 out per 1M with $5/1k tool calls; cheap relative to frontier proprietary models; conflicting third-party pricing noted → mid band.
- **Overall Score: 74/100.** Mean of the five quality dims (Tool 85 + Reasoning 70 + Context 90 + Multimodal 65 + Coding 60) / 5 = 74; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/flint)** — 2026-10-28
- Method: public web research prioritizing official model card/docs (xAI blog) plus independent benchmarks/reviews (Artificial Analysis, Vals AI, BenchLM, Overchat AI) — official-first with independent benchmark comparison.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
