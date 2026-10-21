# Qwen 3.5 4B — findings by Gemini 3.8 Flash

- Source: Alibaba / Qwen (`qwen/qwen-3.5-4b`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 4B
- **Short description:** Alibaba's 4B dense open-weight foundation model featuring hybrid Gated DeltaNet attention, native 262K context, early-fusion vision, and extended thinking, outperforming older 7B/9B class models.
- **Provider / access:** Hugging Face open weights (`Qwen/Qwen3.5-4B`), Ollama, MLX, DeepInfra, OpenRouter.
- **Release / knowledge:** March 2026 release; Apache 2.0 license; knowledge cutoff early 2026.
- **IDs:** `qwen/qwen-3.5-4b`, `opencode/qwen-3.5-4b`
- **Context window:** 262,144 tokens total (262K context window; up to 16,384 max output tokens).
- **Modalities:** Native multimodal input (text, images, video); text output; toggleable thinking mode.
- **Pricing (as of 2026-10-22):** Free open weights ($0.00) under Apache 2.0; hosted inference ~$0.06 / 1M input, ~$0.15 / 1M output tokens.
- **Architecture:** 4B parameter dense hybrid Gated DeltaNet architecture combining linear attention for rapid token generation and standard attention for deep logical reasoning.

### Raw benchmarks found

Agent / tool use:

- IFEval: **78.6%**
- Terminal-Bench: **34.5%**
- Tau-Bench Retail: **67.0%**

Reasoning / knowledge:

- MMLU-Pro: **79.1%** (optimized reasoning mode)
- GPQA Diamond: **58.4%** (with extended thinking)
- Artificial Analysis Intelligence Index: **27**
- GSM8K: **89.5%**

Coding:

- HumanEval: **86.5%**
- LiveCodeBench: **48.2%**
- SWE-bench Verified: **38.0%**

Long context / multimodal:

- Video-MME: **83.5%**
- 262,144 token context window natively supported with low memory overhead; runs locally on consumer GPUs and workstations within 8GB VRAM.

### Normalized scores (1–100)

- **Tool use: 56/100.** Strong tool navigation and schema adherence for a 4B model evidenced by 78.6% on IFEval and 67.0% on Tau-Bench Retail.
- **Reasoning: 64/100.** Exceptional reasoning density beating legacy 7B/9B models (79.1% MMLU-Pro, 58.4% GPQA Diamond, 27 AA Intelligence Index).
- **Context window: 74/100.** Full 262K token context capacity supported efficiently via Gated DeltaNet architecture.
- **Multimodal: 68/100.** Outstanding native multimodal perception evidenced by 83.5% on Video-MME and solid UI visual comprehension.
- **Coding: 58/100.** Capable code writing, refactoring, and debugging verified by 86.5% on HumanEval, 48.2% on LiveCodeBench, and 38.0% on SWE-bench Verified.
- **Cost efficiency: 100/100.** Completely free Apache 2.0 open weights with low compute requirements for local consumer hardware.
- **Overall Score: 64/100.** Arithmetic mean of five quality dimensions: (56 + 64 + 74 + 68 + 58) / 5 = 64.0 → 64. Top-of-class 4B dense multimodal powerhouse delivering outstanding reasoning and vision efficiency.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-10-22
- Method: Public documentation, Alibaba model card benchmarks, Artificial Analysis evaluations, and community testing; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
