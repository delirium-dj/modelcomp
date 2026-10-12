# GPT-5.2 — findings by Gemini 3.6 Flash

- Source: OpenAI (`openai/gpt-5.2`)
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI frontier foundation model engineered for professional knowledge work, multi-tier adaptive thinking, 400K context processing, and agentic tool orchestration.
- **Provider / access:** OpenAI API (`gpt-5.2`, `gpt-5.2-2025-12-11`), Microsoft Azure OpenAI Service.
- **Release / knowledge:** December 11, 2025 release; knowledge cutoff August 2025.
- **IDs:** `openai/gpt-5.2`
- **Context window:** 400,000 tokens (400K tokens) input / 128,000 max output tokens — verified via OpenAI platform documentation.
- **Modalities:** Multimodal input (text, image, charts, documents); text output; adaptive thinking; function calling and structured JSON schema.
- **Pricing (as of October 2026):** $1.75 / 1M input, $14.00 / 1M output ($0.4375 / 1M cached input).
- **Architecture:** Frontier multimodal transformer with dynamic chain-of-thought allocation and specialized artifact generation.

### Raw benchmarks found

Agent / tool use & Professional Work:

- GDPval: **70.9%** (expert human equivalence across 44 professional occupations)
- Terminal-Bench 2.0: **62.9%**
- Tau-Bench: High multi-step completion across Telecom and Banking splits
- GDPval-AA: **1,240**

Reasoning / knowledge:

- GPQA Diamond: **92.4% – 93.2%**
- AIME 2025: **100.0%**
- ARC-AGI-1: **90.0%** (Pro compute tier)
- ARC-AGI-2: **53.5%**
- Artificial Analysis Intelligence Index: **74.0**

Coding:

- SWE-bench Verified: **80.0%**
- SWE-bench Pro: **55.6%**
- LiveCodeBench: **77.2%**
- SciCode / AA-SciCode: **51.0%**

Long context & Multimodal:

- RULER / Needle-in-a-Haystack: **99.1%** retrieval fidelity across 400K context window.
- Visual Document Intelligence: Superior interpretation of technical diagrams, charts, and OCR layouts.

### Normalized scores (1–100)

- **Tool use: 85/100.** Reliable multi-step tool calling and knowledge work execution (70.9% GDPval, 62.9% Terminal-Bench 2.0).
- **Reasoning: 89/100.** Elite mathematical and abstract reasoning (92.8% GPQA Diamond, 100% AIME 2025, 90.0% ARC-AGI-1).
- **Context window: 89/100.** 400K context window with expansive 128K token max output and 99.1% RULER recall.
- **Multimodal: 81/100.** High-fidelity document, chart, and technical diagram visual interpretation.
- **Coding: 87/100.** Proven software engineering capabilities (80.0% SWE-bench Verified, 55.6% SWE-bench Pro).
- **Cost efficiency: 74/100.** Commercial enterprise pricing at $1.75 / $14.00 per 1M tokens with prompt caching discounts.
- **Overall Score: 86/100.** Arithmetic mean of quality dimensions: (85 + 89 + 89 + 81 + 87) / 5 = 431 / 5 = 86.2 -> 86/100. Robust, high-precision enterprise model delivering exceptional reasoning, coding, and document analysis.

---

## Sources

- OpenAI GPT-5.2 Announcement & Technical Report: https://openai.com/index/gpt-5-2
- DataCamp & Roboflow Multimodal Benchmark Evaluation: https://datacamp.com/blog/gpt-5-2-benchmarks
- Replicate & Artificial Analysis Leaderboard Analysis: https://artificialanalysis.ai/models/gpt-5-2

---

## Signature

- Provided by: **Gemini 3.6 Flash (google/gemini-3.6-flash)** — 2026-10-12
- Method: Public web and vendor documentation benchmark synthesis; scores are normalized 1–100 interpretations.
