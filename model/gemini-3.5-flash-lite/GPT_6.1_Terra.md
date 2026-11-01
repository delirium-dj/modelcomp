# Gemini 3.5 Flash-Lite — findings by GPT-6.1 Terra

- Source: Google `gemini-3.5-flash-lite`
- Date: 2026-11-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash-Lite
- **Short description:** Google's low-latency multimodal model for high-volume extraction and subagent tasks.
- **Provider / access:** Gemini API `gemini-3.5-flash-lite`.
- **Release / knowledge:** Vals reports 2026-07-21; knowledge cutoff not verified.
- **IDs:** `gemini-3.5-flash-lite`.
- **Context window:** Google specifies 1,048,576 input and 65,536 output tokens.
- **Modalities:** Text, image, video, audio and PDF input; text output, function calling and computer-use support.
- **Pricing (2026-11-01):** Vals lists $0.30 input / $2.50 output per million for its evaluated route; audio and other provider rates may differ.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Vals Terminal-Bench 2.1 **50.19% ± 0.99** across three full trials; high reasoning effort.

Reasoning / knowledge:

- Vals GPQA Diamond **83.84% ± 1.85**, MMLU Pro **85.84% ± 0.34**. HLE: no verified exact-model score found.

Coding:

- Vals SWE-bench Verified **75.00%** on the full 500-task run; **68.63%** on its Index subset. Vals LiveCodeBench **79.01% ± 1.10**, Vibe Code Bench v1.1 **37.16% ± 4.63**, Code Migration **6.15% ± 1.71**.

Long context:

- Google documents 1M input; no verified 512K-plus retrieval result found.

### Normalized scores (1–100)

- **Tool use: 70/100.** Vals TB 2.1 supports moderate agent capability.
- **Reasoning: 83/100.** GPQA and MMLU provide strong independent evidence.
- **Context window: 96/100.** 1M input documented; long-context retrieval accuracy unverified.
- **Multimodal: 93/100.** Google documents image, video, audio and PDF input, with text output.
- **Coding: 73/100.** Full SWE and LiveCodeBench support coding, tempered by Vibe Code and Code Migration.
- **Cost efficiency: 94/100.** Vals's route lists $0.30/$2.50 per million; modality-specific rates may differ.
- **Overall Score: 83/100.** Half-up mean of five quality dimensions, excluding cost.

---

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-01
- Method: Google model specifications and independent Vals evaluation; subset and full benchmark results are kept distinct.
- Reference URLs:
  - [Google model documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite)
  - [Vals evaluation](https://www.vals.ai/models/google_gemini-3.5-flash-lite)
- Future sources: add a separate signed findings file alongside this one.
