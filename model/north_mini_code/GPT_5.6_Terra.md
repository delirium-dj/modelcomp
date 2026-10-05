# North Mini Code — findings by GPT 5.6 Terra
- Source: Cohere Labs (`CohereLabs/North-Mini-Code-1.0`)
- Date: 2026-10-05 (UTC)
## Model card
- **Name:** North Mini Code
- **Short description:** Cohere's Apache-2.0 open-weight MoE research model for code generation, terminal tasks, and agentic software engineering.
- **Provider / access:** Downloadable weights, OpenCode, and hosted Hugging Face Space.
- **Release / knowledge:** Released 2026-06-17; cutoff not stated.
- **IDs:** `CohereLabs/North-Mini-Code-1.0`
- **Context window:** 256K, 64K maximum output.
- **Modalities:** Text code model with reasoning and tool use.
- **Pricing (as of 2026-10-05):** Open weights; a free hosted route was listed.
- **Architecture:** 30B total / 3B active MoE.
### Raw benchmarks found
- GPQA Diamond **75.7%**, IFBench **57.6%**, SciCode **38.2%**, τ²-bench Telecom **37.4%** (Artificial Analysis underlying results).
### Normalized scores (1–100)
- **Tool use: 60/100.** τ²-bench Telecom 37.4%.
- **Reasoning: 72/100.** GPQA 75.7%, tempered by lower general index results.
- **Context window: 88/100.** 256K context.
- **Multimodal: 15/100.** No native multimodal support verified.
- **Coding: 68/100.** Code specialization and benchmarked SWE/Terminal methodology, but no retrieved exact pass-rate row.
- **Cost efficiency: 99/100.** Apache-2.0 open weights and free route.
- **Overall Score: 61/100.** Half-up mean: 60.6.
---
## Signature
- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-05
- Method: fresh public internet research; scores are normalized interpretations.
