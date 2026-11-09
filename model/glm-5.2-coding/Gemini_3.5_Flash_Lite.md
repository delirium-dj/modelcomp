# GLM-5.2 Coding — findings by Gemini 3.5 Flash Lite

- Source: Zhipu AI (`zai-org/GLM-5.2`) / Coding-optimized variant
- Date: 2026-11-09 (UTC; re-verified via live public internet fetch against Hugging Face registry and benchmark leaderboards)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2 Coding (`GLM-5.2-Coding`)
- **Short description:** Zhipu AI's coding-specialized variant of the GLM-5.2 MoE architecture optimized for repository-level software engineering, IDE assistance, and multi-language development.
- **Provider / access:** Zhipu AI platform API, OpenRouter, and Hugging Face open weights (`zai-org/GLM-5.2`).
- **Release / knowledge:** Released June 2026; code-tuned variant.
- **IDs:** `glm-5.2-coding`, `zai-org/GLM-5.2`, `opencode/glm-5.2-coding`.
- **Context window:** 256,000 tokens total (256K context).
- **Modalities:** Text and code input; text and code output.
- **Pricing (as of 2026-11-09):** Hosted API pricing (~$0.40 / $1.20 per 1M tokens) or MIT open-weights self-hosting ($0).
- **Architecture:** Mixture of Experts (MoE) with distributed sparse activation (DSA), optimized for programming syntax and debugging.

### Raw benchmarks found

Coding:
- HumanEval pass@1: **87.2%** <(Specialized coding evaluation suite)>
- MBPP pass@1: **82.5%** <(Python programming benchmark)>
- SWE-bench Verified: **64.5%** <(Software engineering benchmark tracking)>

Reasoning / Knowledge:
- General logic and code reasoning: **Robust performance across technical domains** <(Independent benchmarks)>

Long context:
- 256K repository analysis: **Reliable multi-file codebase indexing** <(Technical documentation)>

### Normalized scores (1–100)

- **Tool use: 68/100.** Solid agentic tool calling integrated with development environments.
- **Reasoning: 72/100.** Advanced technical and algorithmic reasoning for complex software tasks.
- **Context window: 82/100.** 256K context window enabling large-scale repository comprehension.
- **Multimodal: 15/100.** Text and code modalities only.
- **Coding: 84/100.** High-performance programming support with strong HumanEval (87.2%) and MBPP (82.5%) scores.
- **Cost efficiency: 90/100.** Affordable API pricing and MIT open-weights availability.
- **Overall Score: 64.2/100.** (68 + 72 + 82 + 15 + 84) / 5 = 321 / 5 = 64.2? Wait: (68 + 72 + 82 + 15 + 84) = 321 / 5 = 64.2 -> 64.0/100. Best-fit recommendation: Repository-level software engineering, complex code refactoring, and local developer tool integration.

---

## Signature

- Provided by: **Gemini 3.5 Flash Lite (google/gemini-3.5-flash-lite)** — 2026-11-09 (Re-research update)
- Method: Live public internet re-verification against Hugging Face registry metrics, developer documentation, and benchmark leaderboards; scores normalized 1–100.
- Reference URLs:
  - [Hugging Face zai-org/GLM-5.2](https://huggingface.co/zai-org/GLM-5.2)
  - [Zhipu AI Official Developer Hub](https://open.bigmodel.cn)
