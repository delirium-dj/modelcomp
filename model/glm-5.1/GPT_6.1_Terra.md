# GLM-5.1 — findings by GPT-6.1 Terra

- Source: Z.ai `glm-5.1`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.1
- **Short description:** Z.ai's open-weight reasoning and long-horizon engineering model.
- **Provider / access:** Z.ai Chat Completions `glm-5.1` and open weights.
- **Release / knowledge:** Vals lists 2026-04-01; cutoff unverified.
- **IDs:** `glm-5.1`.
- **Context window:** Vals lists 200K and 131K maximum output on its route.
- **Modalities:** Text input and output; reasoning and tool calls.
- **Pricing (as of 2026-11-02):** DeepInfra lists $1.05 input / $3.50 output per million; providers differ.
- **Architecture:** Open weights, MIT license; parameter count not verified here.

### Raw benchmarks found

- Z.ai reports SWE-bench Pro **58.4%**; BenchLM indexes its GPQA Diamond **86.2%**, MCP Atlas **71.8%**, and TAU3 **70.6%**.
- Vals independently reports GPQA Diamond **84.52% ± 1.82**, MMLU Pro **86.90% ± 0.33**, LiveCodeBench **81.38% ± 1.06**, Terminal-Bench 2.1 **56.93% ± 1.35**, and SWE-bench **76.40% ± 1.90**; the current model page does not specify the SWE variant.
- No full-window retrieval measurement verified.

### Normalized scores (1–100)

- **Tool use: 78/100.** Vendor MCP and independent terminal show capability under differing harnesses.
- **Reasoning: 84/100.** Independent GPQA and MMLU corroborate strong vendor GPQA.
- **Context window: 70/100.** 200K documented for Vals's route; no full-window retrieval verified.
- **Multimodal: 15/100.** Text-only route.
- **Coding: 80/100.** Vendor SWE Pro and independent coding tests support strong performance.
- **Cost efficiency: 87/100.** DeepInfra pricing $1.05/$3.50 per million.
- **Overall Score: 65/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Z.ai model page, Vals independent evaluations and DeepInfra price listing.
- Reference URLs:
  - [Z.ai GLM-5.1](https://docs.z.ai/guides/llm/glm-5.1)
  - [Vals model evaluation](https://www.vals.ai/models/zai_glm-5.1)
  - [BenchLM vendor-result index](https://benchlm.ai/models/glm-5-1)
  - [DeepInfra pricing](https://deepinfra.com/blog/glm-5-1-deepinfra-agentic-engineering-model)
