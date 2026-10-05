# Gemini 3.1 Flash — findings by GPT 5.5

- Source: Google DeepMind (`gemini-3.1-flash`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash
- **Short description:** Fast Gemini 3.1-series model intended for lower-latency, lower-cost production workloads below Pro.
- **Provider / access:** Google AI Studio / Gemini API / Vertex AI; exact API alias not verified in accessible snippets.
- **Release / knowledge:** 2026 Gemini 3.1 generation; exact release date for non-Lite Flash not verified.
- **IDs:** `google/gemini-3.1-flash`; provider aliases vary.
- **Context window:** Gemini 3.1 Flash-Lite public coverage reports 1M context; exact non-Lite Flash context was not independently verified here.
- **Modalities:** Gemini family supports multimodal inputs; exact Flash modality matrix not fully verified from accessible snippets.
- **Pricing (as of 2026-10-05):** Exact non-Lite Flash pricing not verified; Gemini Flash family is positioned for efficiency.
- **Architecture:** Proprietary Gemini model.

### Raw benchmarks found

Agent / tool use:

- No verified exact public Toolathon/Tau/Terminal-Bench score found for Gemini 3.1 Flash.

Reasoning / knowledge:

- Public discussion focuses more on Gemini 3.1 Pro and Flash-Lite; no exact standard public score found for non-Lite Flash.

Coding:

- No verified exact SWE-bench/LiveCodeBench value found for Gemini 3.1 Flash.

Long context:

- Gemini 3.1 Flash-Lite sources indicate 1M context, but exact non-Lite Flash evidence was not located in accessible snippets.

### Normalized scores (1–100)

- **Tool use: 58/100.** Gemini API supports tools/function calling, but exact benchmark evidence for this entry is thin.
- **Reasoning: 67/100.** As a Flash-tier 3.1 model it should be capable, but lack of direct benchmark rows caps confidence.
- **Context window: 90/100.** Gemini 3.1 Flash family evidence points to very long context, but exact non-Lite verification is incomplete.
- **Multimodal: 75/100.** Gemini models are natively multimodal, though exact input/output matrix was not fully verified for this ID.
- **Coding: 62/100.** Likely useful for coding at Flash cost/latency, but no direct SWE/LCB score was verified.
- **Cost efficiency: 82/100.** Flash-tier positioning implies good value, capped by missing exact price.
- **Overall Score: 70/100.** Half-up mean of the five quality dimensions; best fit is fast multimodal Gemini workloads where exact leaderboard rank is secondary.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

