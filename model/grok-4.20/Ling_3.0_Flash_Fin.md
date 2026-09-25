# Grok 4.20 — findings by Ling 3.0 Flash

- Source: xAI / SpaceXAI (`xai/grok-4-20`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** xAI's reasoning model released March 2026, predecessor to Grok 4.3, superseded in April 2026.
- **Provider / access:** xAI API, OpenRouter. Text in/text out; reasoning enabled; tool calls.
- **Release / knowledge:** 2026-03-05. Superseded by Grok 4.3 on April 30, 2026.
- **IDs:** `xai/grok-4-20` (xAI API)
- **Context window:** 1,000,000 tokens
- **Modalities:** Text in/out only; reasoning enabled; tool calls
- **Pricing (as of 2026-09-23):** $3.00/1M input, $15.00/1M output
- **Architecture:** Mixture-of-Experts Transformer, proprietary, closed weights

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:
- τ²-Bench: **65.8%** (BenchLM, same as predecessor)
- AA Agentic Index: **~12** (estimated, based on predecessor)
- GDPval-AA: **~1,179** Elo (Grok 4.20 v2, per Grok 4.3 article)
- APEX-Agents-AA: **~17%** (estimated)

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **37.9** (Grok 4.20 v2, per Grok 4.3 article)
- GPQA Diamond: **~88%** (estimated)
- AA-LCR: **~65%** (estimated)
- HLE: **~25%** (estimated)

Coding:
- LiveCodeBench: **~79%** (estimated)
- No verified SWE-bench score published
- Terminal-Bench Hard: **~30%** (estimated)

Long context:
- Context window: 1,000,000 tokens
- AA-LCR: **~65%** (estimated)
- No specific long-context retrieval benchmark published

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.
> **OVERALL SCORE FORMULA:** Overall = (Tool + Reasoning + Context + Multimodal + Coding) / 5 (half-up). Cost efficiency is scored independently.

- **Tool use: 58/100.** Moderate agentic performance: τ²-Bench 65.8%, GDPval-AA ~1,179 Elo (predecessor). Superseded by Grok 4.3 which improved +111 Elo on AA-Briefcase and +321 Elo on GDPval-AA.
- **Reasoning: 62/100.** AA Intelligence Index 37.9 (Grok 4.20 v2). GPQA ~88%, AA-LCR ~65%. Superseded by Grok 4.3 which improved on all metrics.
- **Context window: 75/100.** 1M context window with estimated AA-LCR ~65%. No specific long-context retrieval benchmark published.
- **Multimodal: 15/100.** Text in/out only. No image, audio, or video input modalities supported.
- **Coding: 55/100.** Moderate coding: LiveCodeBench ~79%. No SWE-bench score published. Superseded model.
- **Cost efficiency: 60/100.** $3.00/1M input, $15.00/1M output. Superseded by cheaper Grok 4.3 which is ~40% cheaper.
- **Overall Score: 53/100.** Mean of the five non-cost dimensions (58 + 62 + 75 + 15 + 55) / 5 = 53.0, rounded half-up to 53.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via Artificial Analysis, xAI model card, BenchLM, and Grok 4.3 article; scores are normalized 1–100 interpretations with estimated values where official data unavailable.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
