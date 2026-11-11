# Ternary Bonsai 2 27B — findings by DeepSeek 4.1 Flash

- Source: Prism ML — `prismml/ternary-bonsai-2-27b`
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 2 27B (largest model of the Bonsai 2 family; earlier sibling of this folder: the July 2026 "Ternary Bonsai 27B", tracked in `../ternary-bonsai-27b/`)
- **Short description:** Prism ML's near-lossless ternary-quantized 27B — a Qwen3.8-27B-derived multimodal reasoning model whose language weights are all ternary `{−1, 0, +1}` at ~1.72 bits/weight, fitting full 27B-class reasoning, vision and tool use into a 5.95 GB laptop-class model.
- **Provider / access:** open weights on Hugging Face (`prism-ml/Ternary-Bonsai-2-27B-gguf`, `-gguf-dev`, `-mlx-2bit`), Apache 2.0; runs on llama.cpp (CUDA/Metal/CPU via the PrismML fork; a `Q2_0` file runs on stock llama.cpp ≥ b11556), MLX on Apple Silicon, and a browser WebGPU demo; hosted API routes exist on OpenRouter (`prism-ml/ternary-bonsai-2-27b`, released slug 2026-09-18).
- **Release / knowledge:** September 2026 (HF Bonsai-2 collection updated Sep 17; DataLearnerAI lists 2026-09-17; OpenRouter slug 2026-09-18); whitepaper dated September 2026. Knowledge cutoff not disclosed.
- **IDs:** weights `prism-ml/Ternary-Bonsai-2-27B-gguf`; dataset route `prismml/ternary-bonsai-2-27b`; OpenRouter `prism-ml/ternary-bonsai-2-27b`.
- **Context window:** **262,144 in / 32,768 max output** — kept practical on-device by the hybrid-attention backbone (~75% linear attention).
- **Modalities:** text + image in (optional Q8_0/BF16 `mmproj` vision tower, 0.63/0.93 GB), text out; thinking mode on by default; native tool calling (OpenAI-style `tools` + MCP setup); `reasoning_effort` xhigh (default) / medium / none — **`low` is not supported** (behaves like xhigh).
- **Pricing (as of 2026-11-10):** Apache-2.0 open weights → **$0 self-host** (5.95 GB PTQ1_0, 7.21 GB PQ2_0; ~28 tok/s on an M5 Pro laptop, ~47 tok/s M5 Max, ~130 tok/s on an RTX 5090); hosted API ≈ **$0.075 / $0.50 per 1M** ($0.0375/1M cache reads) via third-party gateways.
- **Architecture:** Qwen3.8-27B base, architecture unchanged — 27.36B total params (24.35B language backbone, 64 blocks + 2.54B embedding/LM head + 0.46B vision tower, 27 blocks); hybrid attention (~75% linear / ~25% full), SwiGLU MLP, RoPE, RMSNorm; ternary g128 weights (FP16 scale per 128) in a fixed Hadamard-rotated basis folded into stored weights; 1.72 bpw true ternary (1.75 as shipped), ~9.3x smaller than FP16; 26.2M params (0.0976%) kept in higher precision.

### Raw benchmarks found

> All numeric rows are **vendor-run** (Prism ML whitepaper + model card: EvalScope + vLLM on H100, thinking mode, 14-benchmark suite; BenchLM aggregates 22 of these rows). No independent numeric replication found at check time — BenchLM's composite (below) is a conservative aggregation of the same vendor rows.

Agent / tool use:

- BFCL v3 **74.92** (FP16 baseline 76.74); τ²-bench **80.2%**; Terminal-Bench 2.1 **52.8%**

Reasoning / knowledge:

- GPQA / GPQA-Diamond **85.8%**; MMLU-Redux **89.1%**, MuSR included in category avg
- Math: AIME 2025 **95%**, AIME26 **95.83%**, MATH-500 **98.8%**, GSM8K **96.7%** (category avg 96.57 vs FP16 97.06 — within half a point)
- AA-LCR (long-context reasoning) **77.0%**; IFEval 91.3% / IFBench 74% (category avg 82.66 vs FP16 81.25 — slightly ahead)

Coding:

- LiveCodeBench v6 **90.1%**; HumanEval+/MBPP+/LiveCodeBench category avg **89.42** vs FP16 89.07 (level with the baseline); SWE-bench Verified **60.8%**; BigCodeBench 58.1%

Multimodal:

- Vision category (MMMU-Pro, OCRBench v2) **66.19** vs FP16 71.36 (the largest retention gap); CharXiv **80.0%**; OmniDocBench 1.6 **89.1%**; A-OKVQA **86.8%**; RealWorldQA **80.1%**; OCRBench V2 56.9%

Composite / retention:

- **14-benchmark thinking-mode average 84.78 — 98.2% of the Qwen3.8-27B FP16 baseline (86.32)** at ~1/9 the size; beats conventional IQ2_XXS (72.59 at 7.27 GB) by 12+ points and comes within 0.4 of UD-Q4_K_XL at 1/3 of its footprint; the whitepaper notes conventional 2-bit builds collapse selectively on AIME26 (57.5) and LiveCodeBench (56.4) while Bonsai 2 holds 95.83 / 90.07
- Intelligence density **0.457/GB** (previous Bonsai 27B 0.416; IQ2_XXS 0.257; FP16 0.053)
- BenchLM: **53.56/100, rank #83 of 1,020** (partial coverage — 22 of 811 benchmarks — flagged conservative)
- Adoption signal: 1.62M GGUF downloads in the last month, ~2.98k likes, 27 HF Spaces (incl. in-browser WebGPU demos)

### Normalized scores (1–100)

- **Tool use: 78/100.** Native tool calling that survives quantization (BFCL v3 74.92 vs 76.74 FP16) plus a strong τ²-bench 80.2 makes real local agent stacks viable; capped by vendor-only sourcing and a mid Terminal-Bench (52.8).
- **Reasoning: 80/100.** AIME26 95.83 / MATH-500 98.8 / GPQA-D 85.8 for a 1.75-bit 27B is exceptional; the knowledge/MuSR bucket (79.86 vs 85.55 FP16) is where compression bites most.
- **Context window: 80/100.** 262K in / 32K out held on-device by the linear-attention backbone; no independent retrieval-depth rows.
- **Multimodal: 62/100.** Image input through an optional low-bit vision tower (CharXiv 80.0, OmniDocBench 89.1, RealWorldQA 80.1) — genuinely useful document/screenshot understanding; OCRBench V2 56.9 and the vision category's 5-point retention gap cap it; text output only.
- **Coding: 78/100.** HumanEval+/MBPP+/LCB average exactly at the FP16 baseline (89.42) and LiveCodeBench v6 90.1; SWE-bench Verified 60.8 and BigCodeBench 58.1 show the harder repo/agent ceilings; vendor-run only.
- **Cost efficiency: 92/100.** Apache-2.0 at 5.95 GB → free laptop-class self-hosting with ~28–47 tok/s, ~130 tok/s on a single RTX 5090; best-in-class intelligence density (0.457/GB); hosted routes at ≈$0.075/$0.50 with cheap cached reads. PTQ1_0 decode-speed trade-offs on some accelerators are the only hitch.
- **Overall Score: 76/100.** (78 + 80 + 80 + 62 + 78) / 5 = 75.6 → 76. Best fit: fully local 27B-class agents — long-document/repo work, tool-calling automations and screenshot understanding — where near-lossless ternary compression matters more than absolute frontier scores.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-11-11
- Method: public internet research (Prism ML docs + announcement, Hugging Face GGUF model card & Bonsai-2 collection, whitepaper benchmark tables, BenchLM aggregation, OpenRouter catalog for pricing/limits). All benchmark figures are vendor-run and labelled as such; no independent numeric harness replication found at check time. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [PrismML Docs — Ternary Bonsai 2 27B](https://docs.prismml.com/models/bonsai-2-27b)
  - [Prism ML — Introducing Bonsai 2 27B (news)](https://prismml.com/news/bonsai-2-27b)
  - [Hugging Face — prism-ml/Ternary-Bonsai-2-27B-gguf (model card + benchmark tables)](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)
  - [Whitepaper PDF — Bonsai 2 27B](https://github.com/PrismML-Eng/Bonsai-demo/blob/main/bonsai-2-27b-whitepaper.pdf)
  - [BenchLM — Ternary Bonsai 2 27B](https://benchlm.ai/models/ternary-bonsai-2-27b)
  - [OpenRouter — prism-ml/ternary-bonsai-2-27b](https://openrouter.ai/prism-ml/ternary-bonsai-2-27b)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
