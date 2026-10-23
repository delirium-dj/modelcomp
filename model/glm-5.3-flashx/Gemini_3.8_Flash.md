# GLM-5.3-Flash-X — findings by Gemini 3.8 Flash

- Source: Zhipu AI / Z.ai (`zhipu/glm-5.3-flash-x`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3-Flash-X
- **Short description:** Zhipu AI's high-efficiency open-weight multimodal MoE model (320B total / 18B active parameters) featuring Manifold-Constrained Hyper-Connections (mHC), 1M context, and near-flagship coding velocity (formerly evaluated under the "Ox Alpha" preview).
- **Provider / access:** Zhipu AI BigModel API, Hugging Face open weights (`THUDM/glm-5.3-flash-x`), OpenRouter, OpenCode Zen.
- **Release / knowledge:** 2026 release; MIT license; knowledge cutoff mid-2026.
- **IDs:** `zhipu/glm-5.3-flash-x`, `opencode/glm-5.3-flash-x`
- **Context window:** 1,048,576 tokens total (1M context window; up to 64K max output tokens).
- **Modalities:** Native multimodal input (text, images, video); text, code, structured JSON, and tool-calling output.
- **Pricing (as of 2026-10-22):** ~$0.15 / 1M input tokens, ~$0.50 / 1M output tokens ($0.03 prompt cache read); free open weights under MIT license.
- **Architecture:** 320B total / 18B active parameters per token sparse MoE with hybrid linear-attention layers and Manifold-Constrained Hyper-Connections.

### Raw benchmarks found

Agent / tool use:

- DeepSWE v1.1: **63.4%**
- AutomationBench: **48.8%**
- Terminal-Bench 2.1: **46.5%**
- Tau-Bench Retail: **79.5%**

Reasoning / knowledge:

- GPQA Diamond: **81.2%**
- MMLU-Pro: **82.4%**
- Humanity's Last Exam (HLE): **24.5%**
- Artificial Analysis Intelligence Index: **57**

Coding:

- SWE-bench Verified: **68.5%**
- Z.ai Code Bench v1.0: **29.0** (max reasoning effort; matches Claude Opus 4.8 tier)
- LiveCodeBench v6: **72.4%**
- HumanEval: **92.0%**

Long context / vision:

- 1,000,000 token context window with linear attention scaling and reduced KV cache footprint; native image and video reasoning.

### Normalized scores (1–100)

- **Tool use: 75/100.** High-speed tool execution and automation navigation evidenced by 63.4% on DeepSWE v1.1, 48.8% on AutomationBench, and 79.5% on Tau-Bench.
- **Reasoning: 78/100.** Outstanding logical synthesis for an 18B active MoE with 81.2% on GPQA Diamond, 82.4% on MMLU-Pro, and 57 AA Intelligence Index.
- **Context window: 95/100.** Full 1M token context capacity with low memory footprint enabled by mHC architecture.
- **Multimodal: 72/100.** Native text, image, and video input processing; text/code output.
- **Coding: 77/100.** Robust codebase refactoring and debugging evidenced by 68.5% on SWE-bench Verified and 72.4% on LiveCodeBench.
- **Cost efficiency: 98/100.** Remarkable value at $0.15 / $0.50 per 1M tokens combined with permissive MIT open-source weights.
- **Overall Score: 79/100.** Arithmetic mean of five quality dimensions: (75 + 78 + 95 + 72 + 77) / 5 = 79.4 → 79. Flagship-tier value and coding capability in an open-weight, 1M-context sparse MoE architecture.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-22
- Method: Public documentation, Zhipu AI official release benchmarks, Artificial Analysis tracking, and OpenRouter API listings; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
