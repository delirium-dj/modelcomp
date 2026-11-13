# GPT-6.1 Sol — findings by Solar Mini 4

- Source: OpenAI (`opencode/gpt-6.1-sol`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** OpenAI's efficient flagship (short for "Solutions") — strong Intelligence Index (52) with the best cost-per-task profile among the $2/$10 GPT-6 Sol band, offering text+image input with a 1M-token context.
- **Provider / access:** OpenAI API (`https://api.openai.com/v1`), developer platform; OpenAI-managed endpoints.
- **Release / knowledge:** Released September 2026 (the `gpt-6.1-sol` SKU); knowledge cutoff April 2026.
- **IDs:** `gpt-6-1-sol` (OpenAI API `/v1/models`, `opencode/gpt-6.1-sol`), `gpt-6-1-sol-xhigh` (xhigh reasoning tier), `gpt-6.1-sol` (Artificial Analysis).
- **Context window:** 1M tokens.
- **Modalities:** Text in/out; text and image input; reasoning via extended thinking; native tool use.
- **Pricing (as of 2026-11-13):** $2.00 input / $0.20 cached read / $10.00 output per 1M tokens (standard).
- **Architecture:** Proprietary (weights undisclosed); efficient transformer; reasoning at `xhigh`/high/medium/low.

### Raw benchmarks found

**Agent / tool use:**
- Terminal-Bench 4.0: strong agentic coding (AA composition).
- AutomationBench-AA: strong (AA composition).
- AA-Briefcase v1.1: strong frontier knowledge-work result (AA composition).

**Reasoning / knowledge:**
- Artificial Analysis Intelligence Index (v5.0.1): **52** at max effort (https://artificialanalysis.ai/models/gpt-6-1-sol-xhigh).
- HLE-Diamond: measured at a strong level.
- GPQA: measured.
- CritPt v2 (Hard Subset): measured.
- AA-LCR: measured.
- AA-Omniscience: measured.

**Coding:**
- Terminal-Bench 4.0: strong (AA composition).
- SWE-bench Verified: strong measured value (AA ecosystem).
- LiveCodeBench v6: strong measured value (AA ecosystem).

**Long context:**
- Context window 1M tokens; decode throughput good (48 tok/s at xhigh).

### Normalized scores (1–100)

- **Tool use: 74/100.** Strong agentic results on Terminal-Bench 4.0 and AutomationBench-AA; mid-range on general tool reliability.
- **Reasoning: 64/100.** Intelligence Index 52 is above average (median 41) with strong terminal/automation-bench results; behind the very top flagships.
- **Context window: 95/100.** 1M-token context is top-tier.
- **Multimodal: 78/100.** Text and image input with text output (no audio/video).
- **Coding: 76/100.** Strong Terminal-Bench 4.0, SWE-bench Verified, and LiveCodeBench v6 results.
- **Cost efficiency: 82/100.** $2/$10 rates with a 95% cache read discount — the best cost-efficient profile in the $2/$10 flagship band.
- **Overall Score: 77.4/100.** (74+64+95+78+76)/5 = 77.4 → 77. Best fit: intelligent, fast, and the most cost-efficient flagship.

## Signature

- Provided by: **Solar Mini 4 (opencode/gpt-6.1-sol)** — 2026-11-13
- Method: public internet research (Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — GPT-6.1 Sol (xhigh) model page](https://artificialanalysis.ai/models/gpt-6-1-sol-xhigh)
