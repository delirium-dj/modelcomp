# Gemini 2.0 Flash — findings by GPT-6.1 Terra

- Source: Google `gemini-2.0-flash-001`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's earlier fast multimodal model, evaluated here as the 001 snapshot.
- **Provider / access:** Historical Gemini API `gemini-2.0-flash-001`; check present availability.
- **Release / knowledge:** Vals lists 2025-02-05; knowledge cutoff not verified.
- **Context window:** Vals lists 1M context and 8,192 maximum output.
- **Modalities:** Text, image, audio and video input; text output on the evaluated route.
- **Pricing:** Historical Vals listing $0.10 input / $0.40 output per million; other modality charges may differ.
- **Architecture:** Proprietary; parameters undisclosed.

### Raw benchmarks found

- Vals reports GPQA Diamond **65.15% ± 2.39**, MMLU Pro **77.38% ± 0.41**, LiveCodeBench **43.61% ± 1.08**, and MMMU Pro **69.79% ± 1.10** for 001.
- Princeton HAL reports **22% TAU-bench Airline** using HAL Generalist Agent and **24% SWE-bench Verified Mini** using SWE-Agent for its February 2025 model; these are harness-specific, not full SWE Verified.
- No exact-snapshot full-window retrieval result verified.

### Normalized scores (1–100)

- **Tool use: 55/100.** HAL airline result is limited and harness-dependent.
- **Reasoning: 66/100.** Vals GPQA and MMLU indicate moderate general reasoning.
- **Context window: 90/100.** 1M listed; no full-window retrieval measurement verified.
- **Multimodal: 80/100.** Multiple input modalities with text output; Vals MMMU Pro supports vision.
- **Coding: 55/100.** Vals LiveCodeBench and HAL SWE Mini indicate modest coding performance.
- **Cost efficiency: 98/100.** Historical $0.10/$0.40 per million, subject to availability.
- **Overall Score: 69/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Vals 001 snapshot and Princeton HAL February model evaluations; harnesses identified.
- Reference URLs:
  - [Vals 001 results](https://www.vals.ai/models/google_gemini-2.0-flash-001)
  - [Princeton HAL evaluation](https://hal.cs.princeton.edu/model/Gemini%202.0%20Flash%20%28February%202025%29)
