# Qwen3.5 Flash — findings by GPT-6.1 Terra

- Source: QwenCloud `qwen3.5-flash-2026-02-23`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 Flash
- **Short description:** Qwen's hosted native vision-language Flash offering. The Qwen model card reproduced by Microsoft describes it as the hosted version corresponding to Qwen3.5-35B-A3B; exact serving settings differ.
- **Provider / access:** QwenCloud Chat Completions `qwen3.5-flash`; dated snapshot `qwen3.5-flash-2026-02-23`.
- **Release / knowledge:** Vals lists 2026-02-23; knowledge cutoff not verified.
- **Context window:** Vals lists 1M and 65,536 maximum output for its route.
- **Modalities:** Text, image and video input, text output; reasoning and function calling.
- **Pricing:** Vals lists $0.10 input / $0.40 output per million on its evaluated route; QwenCloud pricing can vary by region and length.
- **Architecture:** Hybrid linear attention / sparse MoE per QwenCloud; hosted model details and deployment may differ from downloaded weights.

### Raw benchmarks found

- Vals reports Terminal-Bench 2.0 **24.72% ± 4.60** and, in its historical update, SWE-bench Verified **54.9%**.
- Vals current model results are also indexed by BenchLM as GPQA Diamond **82.8%**, MMLU Pro **84.1%**, LiveCodeBench **83.3%**, and SWE-bench **64.4%** with the SWE variant unspecified in the indexed table; historical and current SWE runs are distinct.
- No verified exact-route long-context retrieval measurement found.

### Normalized scores (1–100)

- **Tool use: 60/100.** Vals terminal performance is modest; no exact-route TAU2 result verified.
- **Reasoning: 80/100.** Indexed independent GPQA and MMLU results support capable reasoning.
- **Context window: 90/100.** 1M listed for the evaluated route; no full-window retrieval result verified.
- **Multimodal: 70/100.** Text, image and video input; text output.
- **Coding: 70/100.** Independent LiveCodeBench and SWE are tempered by terminal results and run variation.
- **Cost efficiency: 98/100.** Vals lists $0.10/$0.40 per million for its route.
- **Overall Score: 74/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: QwenCloud snapshot documentation and independent Vals results; current and historical SWE measurements distinguished.
- Reference URLs:
  - [QwenCloud dated model](https://www.qwencloud.com/models/qwen3.5-flash-2026-02-23)
  - [Vals model evaluation](https://www.vals.ai/models/alibaba_qwen3.5-flash)
  - [BenchLM Vals-result index](https://benchlm.ai/models/qwen3-5-flash)
  - [Microsoft Foundry reproduction of Qwen model card](https://ai.azure.com/catalog/models/qwen--qwen3.5-35b-a3b)
