# Grok 4 Fast — findings by Ernie 5.5 Flash

- Source: xAI/Grok 4 Fast (`grok-4-fast`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast (non-reasoning variant is the base; a thinking mode exists on the same checkpoint — `grok-4-fast-reasoning` is the same weights per the repo alias record)
- **Short description:** xAI's efficiency-focused Grok 4 variant (model card 2025-09-19; family GA 2025-08-28): reasoning quality near Grok 4 at much lower latency and cost, with the option to skip reasoning entirely. Now deprecated in favour of Grok 4.1 Fast.
- **Provider / access:** xAI API (`grok-4-fast`), OpenRouter and other gateways; 2M-token context.
- **Release / knowledge:** 2025-09-19 (model card); knowledge cutoff not published.
- **IDs:** `grok-4-fast`, `x-ai/grok-4-fast`, `grok-4-fast-non-reasoning`.
- **Context window:** 2,000,000 tokens declared by xAI; max output 30K (LLM Stats route).
- **Modalities:** text and image in; text out; tool calls; reasoning optional (thinking / no-reasoning modes on the same checkpoint).
- **Pricing (as of 2026-11-13):** $0.20 in / $0.50 out per 1M; blended ~$0.275.
- **Architecture:** proprietary (undisclosed).

### Raw benchmarks found

> Independent rows from BenchLeader's reconciled board (Vals AI / Artificial Analysis / LMArena / ARC Prize sources, data as of 2026-11-13) — the first extractable per-benchmark rows for this exact ID. Thinking-effort column unless noted.

Agent / tool use:

- Terminal-Bench Hard: **18.9%** (thinking) / 12.1% (no reasoning) — AA
- Terminal-Bench 2.0 (Vals): **29.2%**; τ²-Bench Telecom: **65.8%**; τ³-Banking: **15.7%** (high effort); Cybench: **30.0%**; Poker Agent: **1034.3%**

Reasoning / knowledge:

- GPQA Diamond (AA): **84.8%** (thinking) / 60.6% (no reasoning); GPQA Diamond (Vals): **85.3%**
- HLE (AA): **19.1%** (thinking) / 4.5% (no reasoning); CritPt: **2.9%**; ARC-AGI-1 **48.5%**, ARC-AGI-2 **5.3%**; MMLU-Pro **79.7%**; IFBench **50.5%**
- AA Intelligence Index v4.3.2: **17.9** (thinking) / 11.1 (no reasoning); AA Progress Index **248.8**; Kagi LLM Benchmark **66.1%**; DTBench **82.7%**

Coding:

- LiveCodeBench (Vals): **79.0%** (thinking) / 46.1% (no reasoning); LiveCodeBench (AA): **83.2%** (thinking — #20 of all measured)
- SWE-bench (Vals): **45.4%** (thinking); Vibe Code Bench v1.1: **0.0%**; WeirdML **42.9%**; Arena WebDev 1163 Elo

Long context:

- AA-LCR v1.1: **73.7%** (thinking) / 24.0% (no reasoning); Fiction.LiveBench 120k: **75.0%**; BenchLeader long-context category **61** (its strongest)

Multimodal:

- MMMU-Pro (AA): **61.8%** (thinking); MMMU-Pro (Vals): **72.8%**; MortgageTax **42.1%**

Human preference:

- Arena Text 1405 Elo, Arena Hard Prompts 1414, Arena Search 1162; BenchLeader human-preference category 58

Composite:

- BenchLeader Index: **51.6 ±4.6** (thinking, #306 of 605; no-reasoning 45.6); quality #150 of 337; price #62 of 253

### Normalized scores (1–100)

- **Tool use: 72/100.** Terminal-Bench Hard 18.9%, TB2.0 29.2% and τ²-Telecom 65.8% are mid; Cybench 30.0% and τ³-Banking 15.7% are low. Mid-band for a 2025 efficiency tier.
- **Reasoning: 78/100.** GPQA 84.8–85.3% is strong for the price, HLE 19.1% and ARC-AGI-1 48.5% are respectable, but the AA Index 17.9 (v4.3.2 scale) is a generation behind the 2026 frontier. Capped by the index gap.
- **Context window: 95/100.** 2,000,000 tokens — the largest window in this dataset's tier; AA-LCR 73.7% at long context and Fiction.LiveBench 75.0% verify usable retrieval. Not 100 because no ≥98%-at-512K+ style figure is published for this ID.
- **Multimodal: 65/100.** Text + image in with MMMU-Pro 61.8% (AA) / 72.8% (Vals); no audio/video/PDF input. Mid for the modality class.
- **Coding: 72/100.** LiveCodeBench 79.0–83.2% is genuinely strong for the price, but SWE-bench (Vals) 45.4% and Vibe Code Bench 0.0% show the agentic-coding gap. Capped by SWE-bench.
- **Cost efficiency: 96/100.** $0.20/$0.50 per 1M at 2M context — among the cheapest per capability point in the dataset.
- **Overall Score: 76.4/100.** Best fit for cheap high-volume chat, classification, extraction and long-document work at 2M context where 2025-era quality is acceptable; the agentic-coding and index rows keep it out of the top band, and it is now deprecated in favour of Grok 4.1 Fast.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13
- Method: public internet research (BenchLeader reconciled benchmark record for grok-4-fast — Vals AI / Artificial Analysis / LMArena / ARC Prize sources, data as of 2026-11-13, LLM Stats pricing/context, Artificial Analysis model page, xAI model card); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Grok 4 Fast — BenchLeader (full reconciled benchmark record)](https://www.benchleader.com/models/grok-4-fast)
  - [Grok 4 Fast — LLM Stats (pricing, 2M context)](https://llm-stats.com/models/grok-4-fast)
  - [Grok 4 Fast (Non-reasoning) — Artificial Analysis](https://artificialanalysis.ai/models/grok-4-fast)
  - [Grok 4 Fast model card (PDF) — xAI](https://data.x.ai/2025-09-19-grok-4-fast-model-card.pdf)
- Future sources: add a new file next to this one, e.g. `Ernie_5.5_Flash_v2.md`, using the same headings.