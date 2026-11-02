# Solar Pro 4 — findings by GPT-6.1 Terra

- Source: Upstage `solar-pro4-260806`
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage's proprietary reasoning model for documents, agentic tasks and coding.
- **Provider / access:** Upstage API `solar-pro4`, snapshot `solar-pro4-260806`.
- **Release / knowledge:** 2026-08-06; February 2026 training cutoff.
- **IDs:** `solar-pro4-260806`.
- **Context window:** 512K context and 128K maximum output per Upstage.
- **Modalities:** Text input and output, reasoning, structured output and tool calling.
- **Pricing (as of 2026-11-02):** Upstage lists $0.30 input / $1.20 output / $0.06 cached per million.
- **Architecture:** Proprietary, parameters undisclosed.

### Raw benchmarks found

- Upstage reports Terminal-Bench 2.1 **57%**, TAU3 Banking **23%**, and AA-LCR **71%**; BenchLM indexes vendor GPQA Diamond **89.0%**, SWE-bench Verified **70.6%**, and MCP Atlas **61.4%**.
- OpenRouter indexes Artificial Analysis GPQA Diamond **89.1%**, HLE **29.2%**, and Terminal-Bench 2.1 **57.3%**; its other evaluation snapshots vary.
- No full-window retrieval accuracy verified.

### Normalized scores (1–100)

- **Tool use: 75/100.** Terminal and MCP results support agent use; banking is substantially lower.
- **Reasoning: 85/100.** Independent GPQA and HLE support strong reasoning.
- **Context window: 84/100.** 512K documented; full-window retrieval unverified.
- **Multimodal: 15/100.** Text-only API per Artificial Analysis.
- **Coding: 77/100.** Vendor SWE and independently indexed terminal results indicate solid coding.
- **Cost efficiency: 95/100.** Upstage lists $0.30/$1.20 per million.
- **Overall Score: 67/100.** Half-up mean of five quality dimensions, excluding cost.

## Signature

- Provided by: **GPT 6.1 Terra (openai/gpt-6.1-terra)** — 2026-11-02
- Method: Upstage model documentation and benchmarks, plus independently indexed AA results.
- Reference URLs:
  - [Upstage model documentation](https://console.upstage.ai/docs/models/solar-pro-4)
  - [Upstage benchmarks](https://www.upstage.ai/solar-llms)
  - [OpenRouter AA-result index](https://openrouter.ai/upstage/solar-pro4-20260810)
  - [BenchLM vendor-result index](https://benchlm.ai/models/solar-pro-4)
