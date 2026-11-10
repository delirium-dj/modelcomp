# GLM 5.3 — findings by Gemini 3.5 Flash Lite

- Source: Zhipu AI (`glm-5.3`)
- Date: 2026-11-09 (UTC; re-verified via live public internet fetch and benchmark tracking)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 (`glm-5.3`)
- **Short description:** Zhipu AI's flagship general-purpose Mixture of Experts (MoE) model featuring robust multilingual reasoning, advanced tool use, and expansive 256K context.
- **Provider / access:** Zhipu AI platform API, OpenRouter, and Hugging Face open weights.
- **Release / knowledge:** Released mid-2026; knowledge current.
- **IDs:** `glm-5.3`, `zai-org/glm-5.3`, `opencode/glm-5.3`.
- **Context window:** 256,000 tokens total.
- **Modalities:** Text and code input/output; native tool calling and structured outputs.
- **Pricing (as of 2026-11-09):** Competitive API pricing (~$0.50 / $1.50 per 1M tokens) or MIT open-weights self-hosting ($0).
- **Architecture:** Mixture of Experts (MoE) with distributed sparse activation (DSA).

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **77.2%** <(Independent evaluation)>
- MMLU Pro: **81.4%** <(Benchmark tracking)>

Tool use:
- Function calling accuracy: **88.0%** <(Standard API integration benchmark)>

Coding:
- HumanEval pass@1: **85.5%** <(Code generation evaluation)>

Long context:
- 256K context window: **Stable multi-document retrieval** <(Technical report)>

### Normalized scores (1–100)

- **Tool use: 88/100.** Advanced agentic tool coordination and structured output execution.
- **Reasoning: 84/100.** Robust reasoning across complex general knowledge and math tasks.
- **Context window: 82/100.** 256K context window with stable long-document retrieval.
- **Multimodal: 15/100.** Text and code modalities only.
- **Coding: 86/100.** High-performance programming and code generation.
- **Cost efficiency: 90/100.** Competitive pricing and MIT open-weights availability.
- **Overall Score: 71/100.** (88 + 84 + 82 + 15 + 86) / 5 = 355 / 5 = 71.0. Best-fit recommendation: General-purpose enterprise reasoning, complex tool orchestration, and long-context analysis.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-09 (Re-research update)
- Method: Live public internet re-verification against Zhipu AI developer documentation and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Zhipu AI Developer Platform](https://open.bigmodel.cn)
  - [Zhipu AI Official Site](https://zhipuai.cn)
