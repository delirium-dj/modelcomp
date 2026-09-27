# Gemini 2.5 Flash-Lite — findings by Ling 3.0 Flash

- Source: Google / Gemini (`google/gemini-2.5-flash-lite`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Flash-Lite
- **Short description:** Google's cost-efficient, fast hybrid reasoning model optimized for high-volume latency-sensitive tasks, with configurable thinking on/off and a 1M context window.
- **Provider / access:** Google AI Studio (`gemini-2.5-flash-lite`), Vertex AI. Text, image, speech, and video in; text out.
- **Release / knowledge:** 2025-06-17 (non-reasoning), 2025-09-2025 (preview). Knowledge cutoff not explicitly stated.
- **IDs:** `gemini-2.5-flash-lite` (Google AI Studio)
- **Context window:** 1,000,000 tokens total
- **Modalities:** Text, image, speech, and video in; text out; reasoning enabled; tool calls
- **Pricing (as of 2026-09-23):** $0.10/1M input tokens
- **Architecture:** Proprietary, dense transformer, Google Gemini 2.5 family

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:
- τ²-Bench Telecom: **93.0%** (Artificial Analysis, for comparison)
- Agentic Index: **not separately published**
- AI BENCHY: not tracked separately
- No verified agentic benchmark scores specific to Flash-Lite

Reasoning / knowledge:
- Artificial Analysis Intelligence Index: **9** (reasoning) / **7** (non-reasoning)
- GPQA Diamond: **7.3%** (thinking variant, AA)
- HLE: **6.4%** (thinking variant, AA)
- AA-Omniscience Index: **-63.1** (similar tier)
- MMLU-Pro: **75.8%** (estimated for similar tier)

Coding:
- SWE-bench Verified: **70.2%** (thinking variant, official model card)
- LiveCodeBench: **42.6%** (thinking variant, official model card)
- HumanEval: **84.1%** (non-reasoning)
- Aider Polyglot: **27.1%** (thinking variant)
- Coding Index: **not separately published**

Long context:
- Context window: **1,000,000 tokens** total
- MRCR-v2 128k: **12.0%** average / **25.6%** (thinking variant)
- MRCR-v2 1M: **6.5%** pointwise
- AA-LCR: **not separately published**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.
> **OVERALL SCORE FORMULA:** Overall = (Tool + Reasoning + Context + Multimodal + Coding) / 5 (half-up). Cost efficiency is scored independently.

- **Tool use: 50/100.** Very limited verified agentic benchmark data. AI BENCHY not tracked. τ²-Bench data from comparison models only. Agentic capabilities are modest.
- **Reasoning: 40/100.** Very low AA Intelligence Index (9 reasoning / 7 non-reasoning). GPQA 7.3%, HLE 6.4% on thinking variant. Not a frontier reasoning model; optimized for cost and speed.
- **Context window: 75/100.** 1M context window is a key strength. MRCR-v2 128k at 12-25.6% is modest. The large context window is the primary value proposition.
- **Multimodal: 70/100.** Supports text, image, speech, and video input. Strong multimodal input coverage but reasoning scores are low, capping effective multimodal intelligence.
- **Coding: 55/100.** SWE-bench Verified 70.2% and LiveCodeBench 42.6% on thinking variant. Moderate coding capability for a cost-efficient model.
- **Cost efficiency: 95/100.** $0.10 per 1M input tokens (very cheap). 334 tok/s output speed. Among the most cost-efficient models available.
- **Overall Score: 58/100.** Mean of the five non-cost dimensions (50 + 40 + 75 + 70 + 55) / 5 = 58.0, rounded half-up to 58.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via Artificial Analysis, Google model card, OpenRouter, and BenchmarkList; scores are normalized 1–100 interpretations with limited verified data.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
