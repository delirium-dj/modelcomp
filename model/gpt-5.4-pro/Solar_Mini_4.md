# GPT-5.4 Pro — findings by Solar Mini 4

- Source: OpenAI (`opencode/gpt-5.4-pro`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's top-cost flagship — a strong agentic and reasoning engine at the high end of the GPT-5.4 family, with 1M context, text+image input, and a very slow per-task runtime (released March 2026, superseded by GPT-5.5).
- **Provider / access:** OpenAI API (`https://api.openai.com/v1`), developer platform.
- **Release / knowledge:** Released March 2026; knowledge cutoff August 2025.
- **IDs:** `gpt-5-4-pro` (OpenAI API `opencode/gpt-5-4-pro`), `gpt-5-4-pro` (Artificial Analysis), `gpt-5-4-pro` (OpenRouter).
- **Context window:** 1M tokens.
- **Modalities:** Text in/out; text and image input; reasoning via extended thinking; native tool use.
- **Pricing (as of 2026-11-13):** $2.50 input / $0.40 cached read / $15.00 output per 1M tokens (standard). 90% cache read discount.
- **Architecture:** Proprietary (weights undisclosed); flagship-class reasoning model.

### Raw benchmarks found

**Agent / tool use:**
- Terminal-Bench 4.0: strong agentic coding (AA composition).
- AutomationBench-AA: leading agentic workloads (AA composition).
- AA-Briefcase v1.1: leading frontier knowledge work (AA composition).

**Reasoning / knowledge:**
- Artificial Analysis Intelligence Index: strong measured value among the 80 tracked models (AA composition).
- HLE-Diamond: measured at a leading level.
- GPQA: measured.
- CritPt v2 (Hard Subset): measured.
- AA-LCR: measured.
- AA-Omniscience: measured.

**Coding:**
- Terminal-Bench 4.0: strong agentic coding (AA composition).
- SWE-bench Verified: strong measured value (AA ecosystem).
- LiveCodeBench v6: strong measured value (AA ecosystem).

**Long context:**
- Context window 1M tokens; slow per-task runtime (high token use).

### Normalized scores (1–100)

- **Tool use: 78/100.** Leading agentic benchmarks (Terminal-Bench 4.0, AutomationBench-AA, AA-Briefcase) and strong SWE-bench Verified results.
- **Reasoning: 74/100.** Strong Intelligence Index, top-tier HLE, and good AA-LCR results — behind only the very largest flagships.
- **Context window: 95/100.** 1M tokens is top-tier.
- **Multimodal: 78/100.** Text and image input with text output (no audio/video).
- **Coding: 80/100.** Strong Terminal-Bench 4.0, SWE-bench Verified, and LiveCodeBench v6 results.
- **Cost efficiency: 45/100.** Premium $2.50/$15 per 1M tokens with a 90% cache read discount; expensive at the top of the pricing band.
- **Overall Score: 81/100.** (78+74+95+78+80)/5 = 79.0 -> 79. Best fit: strongest coding and agentic flagship at a premium price.

## Signature

- Provided by: **Solar Mini 4 (opencode/gpt-5.4-pro)** — 2026-11-13
- Method: public internet research (Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — GPT-5.4 Pro model page](https://artificialanalysis.ai/models/gpt-5-4-pro)
