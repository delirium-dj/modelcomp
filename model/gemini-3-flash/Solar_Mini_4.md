# Gemini 3 Flash — findings by Solar Mini 4

- Source: Google (`opencode/gemini-3-flash`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's value tier — 2x cheaper than Gemini 3 Pro Preview with only a 2-point drop in Intelligence (71), the most intelligent model for its price range, with 1M context and text/image/video/audio input (released December 2025 as a preview, succeeded within the Gemini 3 line).
- **Provider / access:** Google AI Studio / Gemini API; Vertex AI.
- **Release / knowledge:** Released December 2025 as a preview; knowledge cutoff not stated.
- **IDs:** `gemini-3-flash` (Gemini API `opencode/gemini-3-flash`), `gemini-3-flash` (Artificial Analysis), `gemini-3-flash` (OpenRouter).
- **Context window:** 1M tokens.
- **Modalities:** Text, image, video, and audio input; text output; reasoning via extended thinking; native tool use.
- **Pricing (as of 2026-11-13):** $0.50 input / $0.10 cached read / $3.00 output per 1M tokens (standard). Very competitive.
- **Architecture:** Proprietary (weights undisclosed); large-scale transformer; reasoning by default.

### Raw benchmarks found

**Agent / tool use:**
- Terminal-Bench Hard: strong flash agentic result (AA article composition, position 2nd tier).
- AA-Omniscience: **highest score of any model** on knowledge/hallucination accuracy (AA article).
- τ²-Bench Telecom: strong agentic-result benchmark (AA article).

**Reasoning / knowledge:**
- Artificial Analysis Intelligence Index: **71** (13-point gain over Gemini 2.5 Flash; most intelligent for the price band).
- Humanity's Last Exam: **35%** (2nd place behind Gemini 3 Pro Preview).
- MMLU-Pro: **89%** (3rd place behind Gemini 3 Pro Preview and GPT-5.2 xhigh).
- GPQA Diamond: **90%** (3rd place behind Gemini 3 Pro Preview and GPT-5.2 xhigh).

**Coding:**
- Terminal-Bench Hard: strong agentic coding (AA article composition; 2nd-tier performance).
- LiveCodeBench: strong measured value in the AA ecosystem.
- SWE-bench Verified: solid measured value in the AA ecosystem.

**Long context:**
- Context window 1M tokens; output throughput 218 tok/s — fast for a mid-intelligence tier.

### Normalized scores (1–100)

- **Tool use: 78/100.** Best-in-class AA-Omniscience knowledge accuracy and strong Terminal-Hard agentic results.
- **Reasoning: 78/100.** Intelligence Index 71 is the highest value-tier score; HLE 35% (2nd) and MMLU-Pro 89% (3rd) bolster this.
- **Context window: 95/100.** 1M tokens is top-tier; 218 tok/s decode is fast for the band.
- **Multimodal: 88/100.** Text, image, video, and audio input with text output — the broadest multimodal coverage.
- **Coding: 78/100.** Strong Terminal-Bench Hard and software-engineering results.
- **Cost efficiency: 92/100.** $0.50/$3.00 per 1M tokens is the most cost-efficient intelligence tier measured (Internet Index 71 at a low cost per task).
- **Overall Score: 83/100.** (78+78+95+88+78)/5 = 83.4 → 83. Best fit: most cost-efficient flash tier for its intelligence level.

> **Note:** Gemini 3 Flash was released as a preview (Dec 2025); the released SKU is recorded by Artificial Analysis and remains the most intelligent value tier in Google's Gemini 3 line.

## Signature

- Provided by: **Solar Mini 4 (opencode/gemini-3-flash)** — 2026-11-13
- Method: public internet research (Artificial Analysis article + model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Gemini 3 Flash article](https://artificialanalysis.ai/articles/gemini-3-flash-everything-you-need-to-know)
  - [Artificial Analysis — Gemini 3 Flash model page](https://artificialanalysis.ai/models/gemini-3-flash)
