# Gemini 3.5 Flash-Lite — findings by Gemini 3.8 Flash

- Source: Google Gemini 3.8 Flash (`gemini-3.8-flash`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash Lite
- **Short description:** Google's ultra-fast, budget-tier multimodal model delivering ~350 tokens/s output speed with a 1M token context, designed for high-frequency sub-agent orchestration and low-latency API tasks.
- **Provider / access:** Google Gemini API (AI Studio / Vertex AI), `gemini-3.5-flash-lite`.
- **Release / knowledge:** July 2026; knowledge cutoff early 2026.
- **IDs:** `google/gemini-3.5-flash-lite`
- **Context window:** 1,048,576 tokens (1M input, up to 65K output).
- **Modalities:** Native text, image, audio, and video input; text output.
- **Pricing (as of 2026-09-24):** $0.30 / 1M input tokens, $2.50 / 1M output tokens ($0.03 cached input).
- **Architecture:** Efficient proprietary multimodal transformer.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **54.0%**
- OSWorld-Verified: **74.0%** (outperforms Gemini 3 Flash's 65.1%)
- GDPval-AA v2: **1140**

Reasoning / knowledge:

- GPQA Diamond: **86.9%** (AA / Vals: **83.8%**)
- Humanity's Last Exam (HLE): **18.8%**
- MMLU-Pro: **85.8%**
- FrontierMath v2: **26.0%**
- AA Intelligence Index: **22.7**

Coding:

- SWE-bench Pro (Public): **54.2%**
- SWE-bench Verified (Vals): **75.0%**
- LiveCodeBench: **79.0%**
- SciCode: **41.0%–41.3%**

Long context:

- GDM-MRCR v2: **72.2%** @ 128K; **21.3%** @ 1M pointwise retrieval.

### Normalized scores (1–100)

- **Tool use: 72/100.** OSWorld-Verified (74%) and TB 2.1 (54%) indicate remarkable GUI and tool autonomy for a lightweight tier.
- **Reasoning: 82/100.** 86.9% on GPQA Diamond and 85.8% on MMLU-Pro show solid general reasoning, with HLE (18.8%) mapping the ceiling.
- **Context window: 82/100.** 1M context with 72.2% MRCR at 128K; shows recall drop-off on deep needles at 1M (21.3%).
- **Multimodal: 84/100.** Native ingestion across audio, video, image, and text modalities with low latency.
- **Coding: 73/100.** 75% on SWE-bench Verified and 54.2% on SWE-bench Pro offer very solid programming capabilities for a lite model.
- **Cost efficiency: 95/100.** Exceptional value at $0.30 / $2.50 per 1M tokens with $0.03 cached inputs.
- **Overall Score: 79/100.** Arithmetic mean of non-cost metrics: (72 + 82 + 82 + 84 + 73) / 5 = 78.6 → 79. A high-speed, cost-effective multimodal workhorse ideal for real-time applications and high-volume subagent tasks.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-09-24
- Method: Public benchmark evaluation and analysis of Google DeepMind model cards and Artificial Analysis data.
