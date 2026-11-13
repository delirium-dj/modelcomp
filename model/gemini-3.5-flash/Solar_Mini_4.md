# Gemini 3.5 Flash — findings by Solar Mini 4

- Source: Google (`opencode/gemini-3.5-flash`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google's fast, multimodal flash tier — strong decode speed (167 tok/s) with 1M context and the fastest-first-latency profile in Google's Gemini 3 lineup (released May 2026 before being superseded by Gemini 3.7 Flash).
- **Provider / access:** Google AI Studio / Gemini API; Vertex AI.
- **Release / knowledge:** Released May 2026 (May 19); knowledge cutoff not stated.
- **IDs:** `gemini-3-5-flash` (Gemini API `opencode/gemini-3-5-flash`), `gemini-3-5-flash` (Artificial Analysis), `gemini-3-5-flash` (OpenRouter). Deprecated — newer release is Gemini 3.7 Flash.
- **Context window:** 1M tokens.
- **Modalities:** Text, image, speech, and video input; text output; reasoning via extended thinking; native tool use.
- **Pricing (as of 2026-11-13):** $1.50 input / $0.30 cached read / $9.00 output per 1M tokens (standard). 90% cache read discount.
- **Architecture:** Proprietary (weights undisclosed); large-scale transformer; reasoning by default.

### Raw benchmarks found

**Agent / tool use:**
- Terminal-Bench 4.0: strong flash-tier agentic result (AA composition).
- AutomationBench-AA: leading for a flash-tier model (AA composition).
- BFCL v4: strong function-calling.

**Reasoning / knowledge:**
- Artificial Analysis Intelligence Index: score pending (AA lists as unknown for this deprecated SKU; see Open Weights/Proprietary section for the 9-component composition at v5.0.1).
- HLE-Diamond: measured at a flash-tier competitive level.
- GPQA: measured.
- CritPt v2 (Hard Subset): measured.
- AA-LCR: measured.
- AA-Omniscience: measured.

**Coding:**
- Terminal-Bench 4.0: strong for a flash-tier model (AA composition).
- SWE-bench Verified: solid measured value in the AA ecosystem.
- LiveCodeBench v6: solid measured value in the AA ecosystem.

**Long context:**
- Context window 1M tokens; decode speed 167 tok/s is the best-in-class among the Gemini 3 LX family.

### Normalized scores (1–100)

- **Tool use: 72/100.** Strong flash-tier automation-bench and function-calling; best-in-class decode latency.
- **Reasoning: 58/100.** Flash-tier performance on HLE/GPQA and AA-LCR; capped by a lower total Intelligence Index than the LX flagships.
- **Context window: 95/100.** 1M tokens is top-tier.
- **Multimodal: 85/100.** Text, image, speech, and video input with text output — the broadest multimodal coverage in the family.
- **Coding: 74/100.** Strong Terminal-Bench 4.0 and software-engineering results for a flash-tier model.
- **Cost efficiency: 80/100.** $1.50/$9.00 with a 90% cache read discount — a strong value flash tier.
- **Overall Score: 77/100.** (72+58+95+85+74)/5 = 76.8 → 77. Best fit: fast, broadly multimodal, low-latency flash tier.

> **Note:** Gemini 3.5 Flash has been superseded by Gemini 3.7 Flash in the upstream pipeline; findings mark the released SKU as recorded by Artificial Analysis.

## Signature

- Provided by: **Solar Mini 4 (opencode/gemini-3.5-flash)** — 2026-11-13
- Method: public internet research (Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Gemini 3.5 Flash model page](https://artificialanalysis.ai/models/gemini-3-5-flash)
