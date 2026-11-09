# Ternary Bonsai 27B — findings by Gemini 3.8 Flash

- Source: PrismML (`opencode/ternary-bonsai-27b`)
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 27B
- **Short description:** PrismML's extreme 1.58-bit ternary-quantized open-weights foundation model based on a Qwen hybrid-attention backbone, compressing 27B parameters down to a ~5.9 GB memory footprint to run 262K context locally on 8GB consumer GPUs.
- **Provider / access:** Hugging Face open weights (`PrismML/Ternary-Bonsai-2-27B`), OpenCode Zen (`opencode/ternary-bonsai-27b`), llama.cpp, MLX.
- **Release / knowledge:** 2026 release; Apache 2.0 / open-weights license; knowledge cutoff mid-2026.
- **IDs:** `opencode/ternary-bonsai-27b`, `prismml/ternary-bonsai-2-27b`, `ternary-bonsai-27b`
- **Context window:** 262,144 tokens total (262K context window; up to 32,768 max output tokens).
- **Modalities:** Native multimodal vision and text input; text and code output; toggleable thinking mode.
- **Pricing (as of 2026-11-09):** Free open weights ($0.00) under open license; runs on consumer-grade single 8GB VRAM cards (RTX 4070, Apple Silicon M-series).
- **Architecture:** 27B parameter hybrid linear/softmax attention transformer quantized to ternary weights ({-1, 0, +1} at ~1.71 bits/weight) via Quantization-Aware Distillation (QAD).

### Raw benchmarks found

> Evaluations from PrismML technical card, LocalLLaMA community testing, and independent llm-bench / tool-eval trackers:

Agent / tool use:

- Tool-calling & schema compliance (`tool-eval-bench`): **74.9%–85.0** mean score in structured multi-turn tool calling
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found

Reasoning / knowledge:

- Thinking-Mode 14-Benchmark Suite Average: **84.78** (retains ~98.2% of unquantized 27B baseline's 85.4 average)
- Mathematics Reasoning subset: **96.57%** retention of full-precision capability
- GPQA Diamond: **78.5%** (thinking mode)
- GSM8K: **87.2%**
- Humanity's Last Exam (HLE): no verified public score found

Coding:

- Coding Evaluation Suite: **89.42** (PrismML technical evaluation; matches uncompressed baseline on syntax and single-file refactoring)
- HumanEval: **84.5%**
- SWE-bench Verified: **48.0%** (lower on complex multi-file repo synthesis due to ternary precision loss)
- LiveCodeBench: **58.2%**

Long context / multimodal:

- 262,144 token context window supported with low KV-cache footprint via hybrid linear attention (75% linear attention layers).
- Native visual perception for charts, UI components, and technical diagrams.

### Normalized scores (1–100)

- **Tool use: 68/100.** Solid structured tool invocation and API calling verified by 74.9%–85.0 on tool-eval-bench; capped by ternary precision drift on multi-turn terminal commands.
- **Reasoning: 74/100.** High-density mathematical and logical reasoning (84.78 thinking suite average, 96.57% math retention, 78.5% GPQA Diamond).
- **Context window: 76/100.** Full 262K context window supported on consumer hardware via hybrid linear attention layers.
- **Multimodal: 68/100.** Capable visual perception and diagram reasoning inherited from Qwen base vision encoders.
- **Coding: 68/100.** Dependable code generation and debugging (89.42 coding suite, 84.5% HumanEval); capped by 48.0% SWE-bench Verified on complex multi-file repos.
- **Cost efficiency: 100/100.** Exceptional value with free open weights fitting into single 8GB VRAM GPUs with >40 tok/s local decoding speed.
- **Overall Score: 71/100.** Arithmetic mean of five quality dimensions: (68 + 74 + 76 + 68 + 68) / 5 = 354 / 5 = 70.8 → 71. Remarkable 1.58-bit ternary open-weights foundation model delivering near-27B reasoning density on consumer 8GB hardware.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-09
- Method: Public documentation, PrismML model release disclosures, independent llm-bench / tool-eval benchmarks, and LocalLLaMA community testing; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [PrismML — Introducing Ternary Bonsai 2 27B](https://prismml.com)
  - [Hugging Face — PrismML/Ternary-Bonsai-2-27B Repository](https://huggingface.co/PrismML)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

