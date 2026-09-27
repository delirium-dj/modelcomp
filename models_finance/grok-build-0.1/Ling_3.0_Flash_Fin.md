# Grok Build 0.1 — findings by Ling 3.0 Flash

- Source: xAI / SpaceXAI (`xai/grok-build-0-1`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** xAI's coding model optimized for code generation and software tasks, deprecated as of May 2026 in favor of Grok 4.3.
- **Provider / access:** xAI API, OpenRouter. Text and image in; text out.
- **Release / knowledge:** 2026-06-16. Deprecated May 15, 2026; API retirement August 15, 2026.
- **IDs:** `xai/grok-build-0-1` (xAI API)
- **Context window:** 256,000 tokens total
- **Modalities:** Text and image in; text out
- **Pricing (as of 2026-09-23):** $1.00/1M input, $2.00/1M output (deprecated)
- **Architecture:** xAI proprietary, deprecated, closed weights

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:
- Terminal-Bench 2.1: **52.1%** (BenchmarkList)
- AA Agentic Index: **28.9** (Artificial Analysis)
- GDPval-AA: **1,212** Elo (BenchmarkList, 84th percentile)
- τ³-Banking: **13.4%** (BenchmarkList)

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **40.7** (rank 58th of 418)
- GPQA Diamond: **89.5%** (BenchmarkList)
- Humanity's Last Exam: **38.3%** (BenchmarkList)
- AA-LCR: **70.0%** (BenchmarkList)

Coding:
- AA Coding Index: **51.5** (Artificial Analysis)
- SciCode: **50.2%** (BenchmarkList)
- Terminal-Bench 2.1: **52.1%** (BenchmarkList)

Long context:
- Context window: 256,000 tokens total
- AA-LCR: **70.0%** (BenchmarkList)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.
> **OVERALL SCORE FORMULA:** Overall = (Tool + Reasoning + Context + Multimodal + Coding) / 5 (half-up). Cost efficiency is scored independently.

- **Tool use: 68/100.** Decent agentic performance: Terminal-Bench 2.1 (52.1%), GDPval-AA (1212 Elo), AA Agentic Index 28.9. τ³-Banking (13.4%) is weak. Deprecated model.
- **Reasoning: 72/100.** Strong reasoning for a coding model: AA Intelligence Index 40.7, GPQA Diamond 89.5%, HLE 38.3%, AA-LCR 70.0%. Above average for its class.
- **Context window: 65/100.** 256K context window with AA-LCR at 70.0%. Limited context compared to 1M+ competitors.
- **Multimodal: 55/100.** Text and image input only. No video or audio modalities. Limited multimodal reasoning.
- **Coding: 70/100.** Solid coding: AA Coding Index 51.5, SciCode 50.2%. Designed specifically for code generation.
- **Cost efficiency: 75/100.** $1.00/1M input, $2.00/1M output. Competitive pricing but model is deprecated.
- **Overall Score: 66/100.** Mean of the five non-cost dimensions (68 + 72 + 65 + 55 + 70) / 5 = 66.0, rounded half-up to 66.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via Artificial Analysis, BenchmarkList, llm.ing, ModelPriceWatch, and xAI model card; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
