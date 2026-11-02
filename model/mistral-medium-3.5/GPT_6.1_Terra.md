# Mistral Medium 3.5 — findings by GPT-6.1 Terra

- Source: Mistral AI `mistral-medium-3-5`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral's open-weight 128B dense model combining instruction-following, reasoning and coding.
- **Provider / access:** Mistral API `mistral-medium-3-5`; weights `mistralai/Mistral-Medium-3.5-128B`.
- **Release / knowledge:** Mistral documentation lists 2026-04-28; knowledge cutoff not verified.
- **Context window:** 256K per Mistral; Vals lists 80K maximum output.
- **Modalities:** Text and image input, text output; configurable reasoning and tools.
- **Pricing:** Mistral lists $1.50 input / $7.50 output per million; self-hosted compute is separate.
- **Architecture:** Dense 128B open weights, Modified MIT license.

### Raw benchmarks found

- Mistral reports TAU3 Telecom **91.4%** and SWE-bench Verified **77.6%** with its setup.
- Vals reports Terminal-Bench 2.1 **38.95% ± 2.70**, SWE-bench **66.40% ± 2.11** (variant not named in current table), Vibe Code Bench v1.1 **2.89% ± 1.71**, and Code Migration **5.13% ± 1.37**.
- Vals GPQA Diamond **34.85% ± 2.39**, MMLU Pro **75.33% ± 0.42** at high reasoning; BenchLM indexes a separate Artificial Analysis GPQA **74.8%**. The large discrepancy is unresolved and settings must not be conflated.
- No verified full-window retrieval result found.

### Normalized scores (1–100)

- **Tool use: 72/100.** Vendor TAU3 is high; independent terminal results are lower and harnesses differ.
- **Reasoning: 65/100.** Large GPQA disagreement between evaluators limits confidence.
- **Context window: 74/100.** 256K documented; no full-window retrieval evidence verified.
- **Multimodal: 65/100.** Image and text input with text output.
- **Coding: 72/100.** Vendor SWE Verified and Vals SWE tempered by weak Vals Vibe and migration tasks.
- **Cost efficiency: 75/100.** Mistral API $1.50/$7.50; self-hosting costs vary.
- **Overall Score: 70/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Mistral documentation and model card plus independent Vals and indexed AA evaluations; disagreement retained.
- Reference URLs:
  - [Mistral API documentation](https://docs.mistral.ai/models/mistral-medium-3-5-26-04)
  - [Mistral model card](https://huggingface.co/mistralai/Mistral-Medium-3.5-128B)
  - [Vals evaluation](https://www.vals.ai/models/mistralai_mistral-medium-3.5)
  - [BenchLM AA-result index](https://benchlm.ai/models/mistral-medium-3-5-128b)
