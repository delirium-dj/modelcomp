# Gemini 3.6 Flash — findings by Solar Mini 4

- Source: Google (`opencode/gemini-3.6-flash`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's even more economical flash tier — $0.75/$3.75 per 1M tokens, best-in-class value in the Gemini 3 lineup, with 1M context and strong decode speed (released July 2026 before being superseded by Gemini 3.7 Flash).
- **Provider / access:** Google AI Studio / Gemini API; Vertex AI.
- **Release / knowledge:** Released July 2026 (July 21); knowledge cutoff not stated.
- **IDs:** `gemini-3-6-flash` (Gemini API `opencode/gemini-3-6-flash`), `gemini-3-6-flash` (Artificial Analysis), `gemini-3-6-flash` (OpenRouter). Deprecated — newer release is Gemini 3.7 Flash.
- **Context window:** 1M tokens.
- **Modalities:** Text, image, speech, and video input; text output; reasoning via extended thinking; native tool use.
- **Pricing (as of 2026-11-13):** $0.75 input / $0.25 cached read / $3.75 output per 1M tokens (standard). 80% cache read discount.
- **Architecture:** Proprietary (weights undisclosed); large-scale transformer; reasoning by default.

### Raw benchmarks found

**Agent / tool use:**
- Terminal-Bench 4.0: strong flash-tier agentic result (AA composition).
- AutomationBench-AA: leading for a flash-tier model (AA composition).
- BFCL v4: strong function-calling.

**Reasoning / knowledge:**
- Artificial Analysis Intelligence Index: score pending for this deprecated SKU (see v5.0.1 composition); flash-tier HLE/GPQA/CritPt results.
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
- Context window 1M tokens; decode speed 161 tok/s — near-top in the family.

### Normalized scores (1–100)

- **Tool use: 70/100.** Strong flash-tier automation-bench and function-calling; best-in-class value.
- **Reasoning: 55/100.** Flash-tier performance on HLE/GPQA and AA-LCR.
- **Context window: 95/100.** 1M tokens is top-tier.
- **Multimodal: 85/100.** Text, image, speech, and video input with text output.
- **Coding: 72/100.** Strong Terminal-Bench 4.0 and software-engineering results for a flash-tier model.
- **Cost efficiency: 90/100.** $0.75/$3.75 with an 80% cache read discount — the cheapest benchmark-tier flagship in the Gemini 3 family.
- **Overall Score: 75.4/100.** (70+55+95+85+72)/5 = 74.4 → 74. Best fit: best-value flash tier with 1M context.

> **Note:** Gemini 3.6 Flash has been superseded by Gemini 3.7 Flash in the upstream pipeline; findings mark the released SKU as recorded by Artificial Analysis.

## Signature

- Provided by: **Solar Mini 4 (opencode/gemini-3.6-flash)** — 2026-11-13
- Method: public internet research (Artificial Analysis model page); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Artificial Analysis — Gemini 3.6 Flash model page](https://artificialanalysis.ai/models/gemini-3-6-flash)
