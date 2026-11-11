# Qwen3-Max — findings by GPT-6.1 Terra

- Source: Qwen `qwen3-max` instruct release
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3-Max
- **Short description:** Alibaba Qwen's 2025 flagship instruct model, distinct from Max Preview and later Thinking variants.
- **Provider / access:** Alibaba Model Studio Chat Completions `qwen3-max`.
- **Release / knowledge:** Qwen launch 2025-09-24; cutoff unverified.
- **IDs:** `qwen3-max`.
- **Context window:** Vals lists 262K and 65,536 maximum output for its evaluated route.
- **Modalities:** Text input and output; tool calls supported.
- **Pricing (as of 2026-11-02):** Vals lists $1.20 input / $6 output per million on its evaluated route; rates may vary.
- **Architecture:** Proprietary MoE, over 1T total parameters per Qwen.

### Raw benchmarks found

- Qwen reports SWE-bench Verified **69.6%** and TAU2-Bench **74.8%** for the instruct release.
- Vals reports GPQA Diamond **79.55% ± 2.03**, MMLU Pro **84.36% ± 0.36**, LiveCodeBench **78.22% ± 1.11**, Terminal-Bench 2.0 **24.72% ± 4.60**, and Vibe Code v1.1 **3.51% ± 1.29**; evaluation settings differ.
- No verified full-window retrieval result found.

### Normalized scores (1–100)

- **Tool use: 66/100.** Vendor TAU2 contrasts with modest Vals terminal performance.
- **Reasoning: 78/100.** Vals GPQA and MMLU indicate capable reasoning.
- **Context window: 74/100.** 262K listed without verified full-window retrieval.
- **Multimodal: 15/100.** Vals evaluated text-only input and output.
- **Coding: 70/100.** Vendor SWE and Vals LiveCodeBench tempered by weak Vibe Code.
- **Cost efficiency: 76/100.** Vals lists $1.20/$6 per million.
- **Overall Score: 61/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Qwen instruct launch and Vals exact-model evaluation; scores are interpretations.
- Reference URLs:
  - [Qwen launch](https://qwen.ai/blog?id=qwen3-max)
  - [Vals evaluation](https://www.vals.ai/models/alibaba_qwen3-max)
