# Qwen 3.5 9B — findings by Gemini 3.8 Flash

- Source: Alibaba / Qwen (`qwen/qwen-3.5-9b`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 9B
- **Short description:** Alibaba's open-weights dense 9B parameter vision-language reasoning model under the Apache 2.0 license, combining Gated DeltaNet linear attention with standard attention, native chain-of-thought thinking traces, 262K context window, and exceptional efficiency for local and edge deployments.
- **Provider / access:** [Hugging Face](https://huggingface.co/Qwen) open weights, Alibaba Cloud DashScope API, [OpenRouter](https://openrouter.ai/models/qwen/qwen-3.5-9b), DeepInfra, vLLM / Ollama self-hosting.
- **Release / knowledge:** February/March 2026 release; knowledge cutoff mid-2026.
- **IDs:** `alibaba/qwen-3.5-9b`, `qwen/qwen-3.5-9b`, `qwen-3.5-9b`
- **Context window:** 262,144 tokens total (262K context window); max output 32,768 tokens.
- **Modalities:** Multimodal input (text, image, video); text, code, structured JSON, and tool-calling output; configurable thinking mode.
- **Pricing (as of 2026-11-06):** ~$0.08 – $0.15 / 1M input tokens, ~$0.15 – $0.20 / 1M output tokens; Apache 2.0 open weights free for local self-hosting (~5–6 GB VRAM with 4-bit quantization, fits easily in 8GB–12GB consumer GPUs).
- **Architecture:** 9B dense transformer with early-fusion multimodal vision encoder and Gated DeltaNet linear attention layers.

### Raw benchmarks found

Agent / tool use:

- Tau2-Bench: **80.5%**
- Terminal-Bench 2.1: **52.0%**
- GDPval-AA: **1,175 Elo**
- Toolathon / SWE Atlas: **38.0%**

Reasoning / knowledge:

- GPQA Diamond: **81.7%** (vendor high) / **72.4%** (Artificial Analysis standardized)
- MMLU-Pro: **82.5%**
- Humanity's Last Exam (HLE): **16.5%**
- Artificial Analysis Intelligence Index: **31.2**

Multimodal:

- CadBench & document OCR: category-leading for sub-10B weights due to native early fusion.
- Native image, video, and multi-image context comprehension.

Coding:

- SWE-bench Verified: **58.5%** (standardized independent) / **76.4%** (specialized scaffolding)
- SWE-bench Multilingual: **72.0%**
- LiveCodeBench: **66.0%** pass@1
- SciCode: **34.2%**

Long context:

- 262,144 token context window evaluated on long-form document retrieval and multi-image context.

### Normalized scores (1–100)

- **Tool use: 66/100.** Competent lightweight tool execution and JSON function calling, evidenced by 80.5% on Tau2-Bench and 52.0% on Terminal-Bench 2.1.
- **Reasoning: 70/100.** Strong mathematical and analytical reasoning for a 9B model, achieving 72.4%–81.7% on GPQA Diamond and 82.5% on MMLU-Pro.
- **Context window: 75/100.** Native 262K context window offers substantial capacity for a small-footprint model.
- **Multimodal: 72/100.** Native early-fusion vision encoder providing strong document OCR, chart comprehension, and visual reasoning.
- **Coding: 64/100.** Solid everyday coding utility with 58.5% on SWE-bench Verified and 66.0% on LiveCodeBench.
- **Cost efficiency: 98/100.** Near-zero operational cost with Apache 2.0 self-hosting and sub-$0.15 hosted API tiers.
- **Overall Score: 69/100.** Arithmetic mean of non-cost metrics: (66 + 70 + 75 + 72 + 64) / 5 = 69.4 → 69. Premier open-weights small model excelling in local vision-language tasks, math, and high-frequency tool calls.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-06
- Method: Public benchmark evaluation and analysis of Alibaba Qwen technical reports, Hugging Face model cards, OpenRouter pricing, and Artificial Analysis leaderboards; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
