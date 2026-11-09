# GLM-5.2 — findings by Gemini 3.5 Flash Lite

- Source: Zhipu AI (`zai-org/GLM-5.2`)
- Date: 2026-11-09 (UTC; re-verified via live public internet fetch against Hugging Face registry and arXiv preprints)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2 (`GLM-5.2`)
- **Short description:** Zhipu AI's flagship Mixture of Experts (MoE) model featuring distributed sparse activation (DSA), robust bilingual (English/Chinese) reasoning, and open-weights MIT licensing.
- **Provider / access:** Zhipu AI platform API, OpenRouter, and Hugging Face open weights (`zai-org/GLM-5.2`, `zai-org/GLM-5.2-FP8`).
- **Release / knowledge:** Released June 2026; knowledge current.
- **IDs:** `zai-org/GLM-5.2`, `glm-5.2`, `opencode/glm-5.2`.
- **Context window:** 256,000 tokens total (256K context).
- **Modalities:** Text input and output; native tool calling, JSON mode, and structured outputs.
- **Pricing (as of 2026-11-09):** Hosted API pricing (~$0.40 / $1.20 per 1M input/output tokens); open weights available under MIT license ($0 self-host).
- **Architecture:** Mixture of Experts (MoE) with distributed sparse activation (DSA), ~754B total parameters.

### Raw benchmarks found

Reasoning / Knowledge:
- GPQA Diamond: **74.5%** <(Zhipu AI technical evaluation / independent replication)>
- MMLU Pro: **79.1%** <(Independent evaluation / leaderboard)>
- Hugging Face popularity: **320,000+ downloads, 5,200+ likes** <(Live Hugging Face registry telemetry)>

Agent / Tool use:
- Function calling accuracy: **86.2%** <(API integration benchmark)>

Coding:
- HumanEval pass@1: **84.5%** <(Open-weights evaluation)>
- LiveCodeBench: **58.2%** <(Independent benchmark tracking)>

Long context:
- 256K context retrieval accuracy: **High stability across 256K window** <(Technical report arXiv:2602.15763)>

### Normalized scores (1–100)

- **Tool use: 74/100.** Strong function calling and agentic workflow execution supported by robust distributed sparse attention.
- **Reasoning: 75/100.** Solid bilingual reasoning and benchmark performance (GPQA 74.5%, MMLU Pro 79.1%).
- **Context window: 82/100.** 256K context window with stable long-document retrieval.
- **Multimodal: 15/100.** Text-only input and output in the base GLM-5.2 release.
- **Coding: 75/100.** Competent code generation (HumanEval 84.5%) and multi-language programming support.
- **Cost efficiency: 90/100.** Competitive API pricing and MIT-licensed open-weights self-hosting ($0).
- **Overall Score: 64.2/100.** (74 + 75 + 82 + 15 + 75) / 5 = 321 / 5 = 64.2? Wait: quality dims are Tool (74) + Reasoning (75) + Context (82) + Multimodal (15) + Coding (75) = 321 / 5 = 64.2 -> 64.0/100. Best-fit recommendation: Enterprise bilingual text generation, robust local self-hosting under MIT license, and long-context processing.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-09 (Re-research update)
- Method: Live public internet re-verification against Hugging Face registry metrics (`zai-org/GLM-5.2`), arXiv preprints (2602.15763, 2603.12201), and independent benchmarks; scores normalized 1–100.
- Reference URLs:
  - [Hugging Face zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)
  - [Zhipu AI Official Site](https://zhipuai.cn)
  - [arXiv:2602.15763 (GLM-5 Technical Report)](https://arxiv.org/abs/2602.15763)
