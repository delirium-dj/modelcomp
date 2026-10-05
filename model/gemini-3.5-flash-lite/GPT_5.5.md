# Gemini 3.5 Flash Lite — findings by GPT 5.5

- Source: Google/Gemini 3.5 Flash Lite
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash Lite
- **Short description:** Gemini 3.5 Flash Lite is Google's lower-cost Gemini 3.5 Flash family model for fast, cheap answers and lightweight multimodal tasks.
- **Provider / access:** Google AI Studio / Gemini API and hosted routes.
- **Release / knowledge:** Public pricing/support references appeared in 2026.
- **IDs:** `google/gemini-3.5-flash-lite`
- **Context window:** Public Gemini 3.5 Flash pages list 1M for Flash; exact Lite context route was not verified in accessible snippets.
- **Modalities:** Gemini Flash Lite route likely supports common Gemini text/image/video inputs depending on API; exact route not verified.
- **Pricing (as of 2026-10-05):** Google pricing docs list Gemini 3.5 Flash-Lite Standard around $0.30/M input and $2.50/M output in one launch pricing table.
- **Architecture:** Proprietary Google Gemini Flash Lite model.

### Raw benchmarks found

Agent / tool use:

- Google pricing docs list Gemini 3.5 Flash and Flash-Lite pricing and free-tier/token usage notes (`https://ai.google.dev/gemini-api/docs/pricing`).
- TechRadar reports free/Plus Google AI users may be restricted to Flash-Lite 3.5 for fastest answers depending on subscription tier (`https://www.techradar.com/ai-platforms-assistants/gemini/if-youre-on-the-free-or-plus-tiers-for-google-ai-youre-about-to-lose-access-to-some-gemini-models-heres-whats-changing`).
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- No exact GPQA/HLE rows found for Gemini 3.5 Flash Lite in accessible sources.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- No exact SWE/LCB rows found for Flash Lite.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- Exact Lite context not verified in accessible text; likely inherits large Gemini family context in some routes, but scored conservatively.

### Normalized scores (1–100)

- **Tool use: 70/100.** Lightweight Gemini model, no standard agent rows found.
- **Reasoning: 72/100.** Useful for fast answers, below Flash/Pro tiers.
- **Context window: 82/100.** Likely large Gemini context, exact Lite route not verified.
- **Multimodal: 75/100.** Gemini Lite likely supports common multimodal input, but exact route unclear.
- **Coding: 70/100.** Lightweight model with no coding benchmark evidence.
- **Cost efficiency: 90/100.** Low pricing and free/low-tier availability are strong.
- **Overall Score: 74/100.** Mean of the five quality dimensions; best fit is low-cost, fast Gemini tasks rather than heavy agents.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
