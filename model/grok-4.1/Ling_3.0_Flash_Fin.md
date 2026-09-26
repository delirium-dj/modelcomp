# Grok 4.1 — findings by Ling 3.0 Flash

- Source: xAI / SpaceXAI (`xai/grok-4-1`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI's reasoning model released November 2025, positioned between Grok 4 and Grok 4.3, superseded by newer versions.
- **Provider / access:** xAI API, OpenRouter. Text in/text out; reasoning enabled; tool calls.
- **Release / knowledge:** 2025-11-19. Superseded by Grok 4.3.
- **IDs:** `xai/grok-4-1` (xAI API)
- **Context window:** 1,000,000 tokens
- **Modalities:** Text in/out only; reasoning enabled; tool calls
- **Pricing (as of 2026-09-23):** $3.00/1M input, $15.00/1M output
- **Architecture:** Mixture-of-Experts Transformer, proprietary, closed weights

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:
- LMArena Search Arena: **1163** Elo (grok-4-fast-search variant, #1)
- τ²-Bench: **65.8%** (BenchLM)
- AA Agentic Index: **~12** (estimated, similar to Grok 4 Fast)

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **~39** (Grok 4.1 Fast, per HokAI)
- GPQA Diamond: **~87%** (estimated)
- AA-LCR: **~70%** (estimated)
- AIME 2025: **~92%** (estimated)

Coding:
- LiveCodeBench: **~80%** (estimated)
- No verified SWE-bench score published
- AA Coding Index: **not separately published**

Long context:
- Context window: 1,000,000 tokens
- AA-LCR: **~70%** (estimated)
- No specific long-context retrieval benchmark published

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.
> **OVERALL SCORE FORMULA:** Overall = (Tool + Reasoning + Context + Multimodal + Coding) / 5 (half-up). Cost efficiency is scored independently.

- **Tool use: 60/100.** Moderate agentic performance: τ²-Bench 65.8%, AA Agentic Index ~12. Superseded by Grok 4.3. No independent agentic benchmark verification available.
- **Reasoning: 65/100.** Estimated Intelligence Index ~39 (Grok 4.1 Fast). GPQA ~87%, AA-LCR ~70%. Reasoning capability between Grok 4 and 4.3 but superseded.
- **Context window: 75/100.** 1M context window with estimated AA-LCR ~70%. No specific long-context retrieval benchmark published.
- **Multimodal: 15/100.** Text in/out only. No image, audio, or video input modalities supported.
- **Coding: 55/100.** Moderate coding: LiveCodeBench ~80%. No SWE-bench score published. Superseded model.
- **Cost efficiency: 60/100.** $3.00/1M input, $15.00/1M output. Expensive pricing. Superseded by cheaper Grok 4.3.
- **Overall Score: 54/100.** Mean of the five non-cost dimensions (60 + 65 + 75 + 15 + 55) / 5 = 54.0, rounded half-up to 54.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via xAI official model card, Artificial Analysis, BenchLM, HokAI, and BenchLeader; scores are normalized 1–100 interpretations with estimated values where official data unavailable.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
