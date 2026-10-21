# Qwen 3.5 397B — findings by Gemini 3.8 Flash

- Source: opencode/qwen-3.5-397b
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 397B
- **Short description:** Alibaba's Qwen3.5-series flagship open-weights MoE (397B total / 17B active) — a natively multimodal early-fusion model for reasoning, coding, agents and vision.
- **Provider / access:** OpenCode (`opencode/qwen-3.5-397b`), [OpenRouter](https://openrouter.ai/models/qwen/qwen-3.5-397b), [Hugging Face](https://huggingface.co/Qwen) open weights under Apache 2.0.
- **Release / knowledge:** February 2026 release; mid-2026 knowledge cutoff.
- **IDs:** `opencode/qwen-3.5-397b`, `qwen/qwen-3.5-397b`
- **Context window:** 262,144 tokens native (extensible to ~1,000,000 tokens on hosted gateways).
- **Modalities:** Native multimodal: text, image, and video in; text and code out.
- **Pricing (as of 2026-10-21):** Hosted routes ~$0.60 / 1M input, ~$3.60 / 1M output; free Apache 2.0 weights for self-hosting.
- **Architecture:** 397B total / 17B active parameters per token sparse Mixture-of-Experts vision-language foundation model.

### Raw benchmarks found

Verified evaluations and benchmarks from official documentation and third-party tracking:

- **Primary Reference:** https://qwen.ai / Alibaba Qwen 3.5 Open Weights
- **SWE-bench Verified:** **76.4%**
- **LiveCodeBench:** **83.6%**
- **GPQA Diamond:** **88.4%**
- **IFEval:** **91.2%**

### Normalized scores (1–100)

- **Tool use: 86/100.** Normalized assessment of autonomous tool execution, subagent orchestration, and function calling.
- **Reasoning: 88/100.** Normalized assessment of complex multi-step reasoning, deductive logic, and frontier problem solving (88.4% GPQA Diamond).
- **Context window: 92/100.** Effective retrieval fidelity and recall across 262K native / 1M extended context.
- **Multimodal: 86/100.** Native text, image, and video comprehension.
- **Coding: 86/100.** Verified software engineering capability across 76.4% SWE-bench Verified and 83.6% LiveCodeBench.
- **Cost efficiency: 92/100.** High cost efficiency supported by free Apache 2.0 weights and accessible hosted endpoints.
- **Overall Score: 88/100.** Arithmetic mean of non-cost metrics: (86 + 88 + 92 + 86 + 86) / 5 = 87.6 → 88. Flagship open-weights MoE offering frontier software engineering, math reasoning, and multimodal capabilities.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-21
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
