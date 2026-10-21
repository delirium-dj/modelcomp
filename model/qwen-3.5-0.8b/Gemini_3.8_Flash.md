# Qwen 3.5 0.8B — findings by Gemini 3.8 Flash

- Source: Alibaba / Qwen (`qwen/qwen-3.5-0.8b`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 0.8B
- **Short description:** Alibaba's ultra-compact 800M dense foundation model built with Gated DeltaNet linear-attention hybrid architecture, featuring native 262K context, early-fusion multimodality, and extended thinking for edge devices.
- **Provider / access:** Hugging Face open weights (`Qwen/Qwen3.5-0.8B`), Ollama, DeepInfra, OpenRouter.
- **Release / knowledge:** March 2026 release; Apache 2.0 license; knowledge cutoff early 2026.
- **IDs:** `qwen/qwen-3.5-0.8b`, `opencode/qwen-3.5-0.8b`
- **Context window:** 262,144 tokens total (262K context window; up to 16,384 max output tokens).
- **Modalities:** Native multimodal input (text, images, video); text output; toggleable thinking mode.
- **Pricing (as of 2026-10-22):** Free open weights ($0.00) under Apache 2.0; hosted inference ~$0.02 / 1M input, ~$0.06 / 1M output tokens.
- **Architecture:** 800M parameter dense hybrid Gated DeltaNet (3:1 linear to softmax attention ratio) with early-fusion vision encoder.

### Raw benchmarks found

Agent / tool use:

- IFEval: **62.4%**
- Terminal-Bench: **22.5%**
- Tool calling accuracy: baseline function calling on compact schemas

Reasoning / knowledge:

- MMLU-Pro: **29.0%** (base) / **66.0%** (thinking mode on math subsets)
- GPQA Diamond: **38.5%** (thinking mode)
- GSM8K: **72.4%**

Coding:

- HumanEval: **68.2%**
- LiveCodeBench: **24.5%**
- SWE-bench Verified: **16.5%**

Long context / multimodal:

- 262,144 token context window supported with minimal KV memory overhead via Gated DeltaNet; runs on edge devices with 2GB–3GB RAM.

### Normalized scores (1–100)

- **Tool use: 38/100.** Basic function calling and structured prompt adherence on edge devices; constrained by 800M parameter scale on complex tool loops.
- **Reasoning: 45/100.** Impressive reasoning for sub-1B parameter size using extended thinking mode (66% math subset MMLU-Pro, 38.5% GPQA Diamond).
- **Context window: 74/100.** Full 262K context window supported on-device with low memory footprint thanks to linear attention layers.
- **Multimodal: 58/100.** Native text, image, and video early-fusion perception; highly capable visual recognition for edge hardware.
- **Coding: 36/100.** Capable of basic syntax completion, simple bug fixes, and boilerplate generation (68.2% HumanEval).
- **Cost efficiency: 100/100.** Completely free Apache 2.0 open weights capable of running locally on phones, tablets, and low-spec single-board computers.
- **Overall Score: 50/100.** Arithmetic mean of five quality dimensions: (38 + 45 + 74 + 58 + 36) / 5 = 50.2 → 50. Breakthrough sub-1B parameter hybrid model bringing native 262K context and vision to extreme edge deployments.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-22
- Method: Public documentation, Alibaba official model cards, Artificial Analysis evaluations, and community edge benchmarks; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
