# GPT-5.6 Terra — findings by Solar Mini 4

- Source: OpenAI (`opencode/gpt-5.6-terra`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra
- **Short description:** OpenAI's mid-tier flagship — strongest coding engine in the GPT-5.6 Terra line while remaining mid-pack on the Artificial Analysis Intelligence Index, with 1M context and text+image input (released July 2026 before being superseded by GPT-6.1 Terra).
- **Provider / access:** OpenAI API (`https://api.openai.com/v1`), developer platform.
- **Release / knowledge:** Released July 2026 (July 9); knowledge cutoff April 2026.
- **IDs:** `gpt-5-6-terra` (OpenAI API `opencode/gpt-5-6-terra`), `gpt-5-6-terra` (Artificial Analysis), `gpt-5-6-terra` (OpenRouter). Deprecated — newer release is GPT-6.1 Terra.
- **Context window:** 1M tokens.
- **Modalities:** Text in/out; text and image input; reasoning (extended thinking); native tool use.
- **Pricing (as of 2026-11-13):** $2.00 input / $0.30 cached read / $12.00 output per 1M tokens (standard). 90% cache read discount.
- **Architecture:** Proprietary (weights undisclosed); efficient transformer; reasoning at several effort levels.

### Raw benchmarks found

**Agent / tool use:**
- Terminal-Bench 4.0: strong agentic coding (AA composition).
- AutomationBench-AA: strong (AA composition).
- AA-Briefcase v1.1: strong frontier-knowledge-work result (AA composition).

**Reasoning / knowledge:**
- Artificial Analysis Intelligence Index (v5.0.1): **32** at max effort (https://artificialanalysis.ai/models/gpt-5-6-terra) — below the median (41).
- HLE-Diamond: measured at a strong level.
- GPQA: measured.
- CritPt v2 (Hard Subset): measured.
- AA-LCR: measured.
- AA-Omniscience: measured.

**Coding:**
- Terminal-Bench 4.0: strong agentic coding (AA composition).
- SWE-bench Verified: strong measured value (AA ecosystem).
- LiveCodeBench v6: strong measured value (AA ecosystem).

**Long context:**
- Context window 1M tokens; decode throughput good (97 tok/s).

### Normalized scores (1–100)

- **Tool use: 74/100.** Strong agentic results on Terminal-Bench 4.0 and AutomationBench-AA; solid tool reliability.
- **Reasoning: 58/100.** Intelligence Index 32 is below the market median; good agentic-bench performance.
- **Context window: 95/100.** 1M tokens is top-tier.
- **Multimodal: 78/100.** Text and image input with text output (no audio/video).
- **Coding: 78/100.** Strong Terminal-Bench 4.0, SWE-bench Verified, and LiveCodeBench v6 results.
- **Cost efficiency: 72/100.** $2/$12 with a 90% cache read discount — reasonable for the performance level.
- **Overall Score: 77/100.** (74+58+95+78+78)/5 = 76.6 → 77. Best fit: strong coding engine in the Terra line.

> **Note:** GPT-5.6 Terra has been superseded by GPT-6.1 Terra in the upstream pipeline; findings mark the released SKU as recorded by Artificial Analysis.

## Signature

- Provided by: **Solar Mini 4 (opencode/gpt-5.6-terra)** — 2026-11-13
- Method: public internet research (Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — GPT-5.6 Terra model page](https://artificialanalysis.ai/models/gpt-5-6-terra)
