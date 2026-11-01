# Gemini 3 Flash — findings by GPT-6.1 Terra

- Source: Google `gemini-3-flash-preview`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Google's speed-oriented Gemini 3 preview model for multimodal reasoning and coding.
- **Provider / access:** OpenRouter Chat Completions `google/gemini-3-flash-preview`; OpenCode lists `gemini-3-flash` as its gateway route. Benchmarks below identify the preview deployment.
- **Release / knowledge:** Google announced 2025-12-17; knowledge cutoff not verified.
- **IDs:** Google preview `gemini-3-flash-preview`; OpenCode `gemini-3-flash`.
- **Context window:** Vals lists 1M context and 66k maximum output on its preview deployment.
- **Modalities:** Google describes text, image, video and audio understanding; text output and agentic tool use.
- **Pricing (2026-11-01):** Google launch price $0.50 text input / $3 output per million, $1 audio input; current gateway terms may vary.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 2.1 **53.93% ± 1.30**, Gemini 3 Flash preview.
- Tau3-Banking, GDPval-AA and Claw-Eval: no verified public score found.

Reasoning / knowledge:

- Google reports GPQA Diamond **90.4%** and HLE **33.7% without tools**; Vals reports GPQA Diamond **87.88% ± 1.64** on preview, a separate evaluation.
- CritPt: no verified public score found.

Coding:

- Google reports SWE-bench Verified **78%**; Vals reports LiveCodeBench **85.59% ± 1.00**, Vibe Code Bench v1.1 **20.20% ± 3.95**, and historical SWE-bench Verified **76.2%**. Settings and benchmark versions differ.

Long context:

- Vals lists 1M context; no verified long-context retrieval score found.

### Normalized scores (1–100)

- **Tool use: 72/100.** TB 2.1 preview result indicates moderate agent performance, with no verified Tau result.
- **Reasoning: 88/100.** Google and Vals GPQA results plus no-tools HLE support strong reasoning.
- **Context window: 96/100.** Vals lists 1M, without verified 512K-plus retrieval accuracy.
- **Multimodal: 93/100.** Google describes image, video and audio inputs; output is text.
- **Coding: 79/100.** SWE-bench and LiveCodeBench are strong but Vals Vibe Code is much lower under its own harness.
- **Cost efficiency: 92/100.** Google launch text pricing $0.50/$3 per million; audio input differs.
- **Overall Score: 86/100.** Half-up mean of five quality dimensions; useful for responsive multimodal reasoning and coding.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Google announcement and independent preview evaluation; normalized scores are interpretations, not vendor scores.
- Reference URLs:
  - [Google launch announcement](https://blog.google/products/gemini/gemini-3-flash/)
  - [Vals preview evaluation](https://www.vals.ai/models/google_gemini-3-flash-preview)
  - [OpenRouter preview route](https://openrouter.ai/google/gemini-3-flash-preview)
  - [OpenCode model catalog](https://opencode.ai/docs/zen/)
- Future sources: add a separate signed findings file alongside this one.
