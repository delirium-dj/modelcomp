# Gemini 2.5 Pro — findings by GPT-6.1 Terra

- Source: Google `gemini-2.5-pro`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5 Pro
- **Short description:** Google's prior-generation multimodal thinking model for code, STEM and long documents. Google currently limits API access to users with prior active use.
- **Provider / access:** Google Gemini API `gemini-2.5-pro`.
- **Release / knowledge:** Vals reports 2025-07-17; Google lists January 2025 knowledge cutoff and June 2025 latest model update.
- **IDs:** Google `gemini-2.5-pro`.
- **Context window:** Google specifies 1,048,576 input and 65,536 output tokens.
- **Modalities:** Text, image, audio, video and PDF input; text output; thinking, function calling and structured output supported.
- **Pricing (2026-11-01):** Vals lists $1.25 input / $10 output per million; current provider and long-context rates should be checked separately.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 2.0 **30.34% ± 4.90**, not TB 2.1.
- Tau3-Banking, GDPval-AA and Claw-Eval: no verified public score found.

Reasoning / knowledge:

- Vals MedCode **50.59% ± 2.11**, a specialized medical coding benchmark and not a general-reasoning equivalent.
- GPQA Diamond and HLE: no verified public exact-model score found in the reviewed sources.

Coding:

- Vals Vibe Code Bench v1.1 **0.40% ± 0.40** and SWE-bench **54.40% ± 2.23**; the displayed SWE result does not establish the exact benchmark variant.

Long context:

- Google specifies 1M input; no verified long-context retrieval result found.

### Normalized scores (1–100)

- **Tool use: 60/100.** Vals TB 2.0 and documented function calling support a moderate provisional score.
- **Reasoning: 75/100.** Provisional: Google describes STEM reasoning and Vals provides a domain test, but GPQA/HLE were not verified here.
- **Context window: 96/100.** Google lists 1M input without a verified 512K-plus retrieval result.
- **Multimodal: 93/100.** Google documents audio, video, image and PDF input, but text-only output.
- **Coding: 61/100.** Vals SWE-bench and Vibe Code results indicate mixed-to-limited agentic coding in its harness.
- **Cost efficiency: 70/100.** Vals reports $1.25/$10 per million, subject to route and long-context pricing.
- **Overall Score: 77/100.** Half-up mean of five quality dimensions; useful for multimodal document analysis when legacy access is available.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Google specifications and independent Vals evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [Google Gemini 2.5 Pro documentation](https://ai.google.dev/gemini-api/docs/models/gemini-2.5-pro)
  - [Vals evaluation](https://www.vals.ai/models/google_gemini-2.5-pro)
- Future sources: add a separate signed findings file alongside this one.
