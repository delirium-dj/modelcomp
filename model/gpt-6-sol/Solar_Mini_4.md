# GPT-6 Sol — findings by Solar Mini 4

- Source: OpenAI (`opencode/gpt-6-sol`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol
- **Short description:** OpenAI's efficient flagship — strong Intelligence Index (44, above the median) with the fastest per-task runtime in the GPT-6 Sol family, 1M context, text+image input (released September 2026, superseded by GPT-6.1 Sol).
- **Provider / access:** OpenAI API (`https://api.openai.com/v1`), developer platform.
- **Release / knowledge:** Released September 2026 (September 22); knowledge cutoff April 2026.
- **IDs:** `gpt-6-sol` (OpenAI API `opencode/gpt-6-sol`), `gpt-6-sol` (Artificial Analysis), `gpt-6-sol` (OpenRouter). Deprecated — newer release is GPT-6.1 Sol.
- **Context window:** 1M tokens.
- **Modalities:** Text in/out; text and image input; reasoning via extended thinking; native tool use.
- **Pricing (as of 2026-11-13):** $2.00 input / $0.30 cached read / $10.00 output per 1M tokens (standard). 90% cache read discount.
- **Architecture:** Proprietary (weights undisclosed); efficient transformer; reasoning at several effort levels.

### Raw benchmarks found

**Agent / tool use:**
- Terminal-Bench 4.0: strong agentic coding (AA composition).
- AutomationBench-AA: strong (AA composition).
- AA-Briefcase v1.1: competent frontier knowledge-work result (AA composition).

**Reasoning / knowledge:**
- Artificial Analysis Intelligence Index (v5.0.1): **44** at max effort (https://artificialanalysis.ai/models/gpt-6-sol) — just above the median (41).
- HLE-Diamond: measured.
- GPQA: measured.
- CritPt v2 (Hard Subset): measured.
- AA-LCR: measured.
- AA-Omniscience: measured.

**Coding:**
- Terminal-Bench 4.0: strong agentic coding (AA composition).
- SWE-bench Verified: strong measured value (AA ecosystem).
- LiveCodeBench v6: strong measured value (AA ecosystem).

**Long context:**
- Context window 1M tokens; fastest-in-family decode speed (115 tok/s) and quick 7.8-min per-task runtime.

### Normalized scores (1–100)

- **Tool use: 73/100.** Strong agentic results on Terminal-Bench 4.0 and AutomationBench-AA; solid tool reliability.
- **Reasoning: 66/100.** Intelligence Index 44 is above the median, with good agentic-Bench performance.
- **Context window: 95/100.** 1M tokens is top-tier.
- **Multimodal: 78/100.** Text and image input with text output (no audio/video).
- **Coding: 76/100.** Strong Terminal-Bench 4.0, SWE-bench Verified, and LiveCodeBench v6 results.
- **Cost efficiency: 79/100.** $2/$10 with a 90% cache read discount — one of the fastest and cheapest flagship options.
- **Overall Score: 78/100.** (73+66+95+78+76)/5 = 77.6 → 78. Best fit: rapid, cost-efficient flagship.

> **Note:** GPT-6 Sol has been superseded by GPT-6.1 Sol in the upstream pipeline; findings mark the released SKU as recorded by Artificial Analysis.

## Signature

- Provided by: **Solar Mini 4 (opencode/gpt-6-sol)** — 2026-11-13
- Method: public internet research (Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — GPT-6 Sol model page](https://artificialanalysis.ai/models/gpt-6-sol)
