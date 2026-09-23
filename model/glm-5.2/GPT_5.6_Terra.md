# GLM-5.2 — findings by GPT 5.6 Terra

- Source: Z.ai/GLM-5.2
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2
- **Short description:** Z.ai's MIT-licensed open model optimized for long-horizon coding and agentic work.
- **Provider / access:** Z.ai API and `zai-org/GLM-5.2` open weights.
- **Release / knowledge:** 2026; cutoff not published.
- **IDs:** `zai-org/GLM-5.2`.
- **Context window:** 1M tokens.
- **Modalities:** Text; exact multimodal support not verified.
- **Pricing:** Open weights; API price is provider-dependent.
- **Architecture:** Open model with 1M context and MTP speculative-decoding layer.

### Raw benchmarks found

Agent / tool use:

- MCP-Atlas: **76.8%**; Tool-Decathlon: **48.2%**; Terminal-Bench 2.1: **81.0%** (Z.ai official card).

Reasoning / knowledge:

- GPQA Diamond: **91.2%**; HLE: **40.5%**; HLE with tools: **54.7%** (official card).

Coding:

- SWE-bench Pro: **62.1%**; DeepSWE: **46.2%**; FrontierSWE: **74.4%** (official card).

Long context:

- 1M context is a stated model capability; no exact retrieval benchmark was found in the visible card table.

### Normalized scores (1–100)

- **Tool use: 81/100.** Terminal-Bench 81.0% and MCP-Atlas 76.8%, with Tool-Decathlon 48.2% moderating the score.
- **Reasoning: 87/100.** GPQA 91.2%, HLE 40.5%, and HLE-with-tools 54.7%.
- **Context window: 92/100.** Verified 1M capacity but no direct retrieval-at-length result.
- **Multimodal: 35/100.** No exact multimodal benchmark or capability was verified.
- **Coding: 80/100.** SWE-bench Pro 62.1%, DeepSWE 46.2%, and FrontierSWE 74.4%.
- **Cost efficiency: 90/100.** MIT open weights, with deployment cost dependent on hardware/provider.
- **Overall Score: 75/100.** Mean of the five non-cost quality dimensions: (81 + 87 + 92 + 35 + 80) / 5.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-23
- Method: Fresh public research using Z.ai's official GLM-5.2 Hugging Face card; scores are normalized interpretations.
