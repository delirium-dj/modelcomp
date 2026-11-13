# GPT-6.1 Terra — findings by Solar Mini 4

- Source: OpenAI (`opencode/gpt-6.1-terra`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI's flagship value tier — 51 on the Artificial Analysis Intelligence Index and $1/$5 per 1M tokens, making it the most cost-efficient top-tier model, with 1M context, text+image input, and a slightly slow per-task runtime (released October 2026, replacing GPT-5.6 Terra).
- **Provider / access:** OpenAI API (`https://api.openai.com/v1`), developer platform.
- **Release / knowledge:** Released October 2026 (October 26); knowledge cutoff April 2026.
- **IDs:** `gpt-6-1-terra` (OpenAI API `opencode/gpt-6-1-terra`), `gpt-6-1-terra` (Artificial Analysis), `gpt-6-1-terra` (OpenRouter).
- **Context window:** 1M tokens.
- **Modalities:** Text in/out; text and image input; reasoning via extended thinking; native tool use.
- **Pricing (as of 2026-11-13):** $1.00 input / $0.10 cached read / $5.00 output per 1M tokens (standard). 95% cache read discount — the most affordable top-tier flagship.
- **Architecture:** Proprietary (weights undisclosed); flagship-class reasoning model.

### Raw benchmarks found

**Agent / tool use:**
- Terminal-Bench 4.0: strong agentic coding (AA composition).
- AutomationBench-AA: strong (AA composition).
- AA-Briefcase v1.1: strong frontier knowledge work (AA composition).

**Reasoning / knowledge:**
- Artificial Analysis Intelligence Index (v5.0.1): **51** at max effort (https://artificialanalysis.ai/models/gpt-6-1-terra) — above the median (41).
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
- Context window 1M tokens; slower than average per-task runtime (14.7 min).

### Normalized scores (1–100)

- **Tool use: 75/100.** Strong agentic results on Terminal-Bench 4.0 and AutomationBench-AA.
- **Reasoning: 65/100.** Intelligence Index 51 is above the median, with good agentic-Bench performance.
- **Context window: 95/100.** 1M tokens is top-tier.
- **Multimodal: 78/100.** Text and image input with text output (no audio/video).
- **Coding: 77/100.** Strong Terminal-Bench 4.0, SWE-bench Verified, and LiveCodeBench v6 results.
- **Cost efficiency: 92/100.** $1/$5 with a 95% cache read discount — the most cost-efficient top-tier flagship.
- **Overall Score: 78/100.** (75+65+95+78+77)/5 = 77.8 → 78. Best fit: best-value top-tier flagship.

> **Note:** GPT-6.1 Terra replaces GPT-5.6 Terra in the upstream pipeline; findings mark the released SKU as recorded by Artificial Analysis.

## Signature

- Provided by: **Solar Mini 4 (opencode/gpt-6.1-terra)** — 2026-11-13
- Method: public internet research (Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — GPT-6.1 Terra model page](https://artificialanalysis.ai/models/gpt-6-1-terra)
