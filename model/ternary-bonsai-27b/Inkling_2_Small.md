# Ternary Bonsai 27B — findings by Inkling 2 Small

- Source: Prism ML (`ternary-bonsai-27b`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 27B
- **Short description:** Prism ML's ternary ({-1,0,+1}) weight build of the Qwen3.6-27B hybrid-attention backbone — full 27B-class reasoning at ~7.2 GB deployed (GGUF Q2_0_g128), running on laptops/consumer GPUs. 95% of FP16 intelligence retained; Apache 2.0. Variant of the same base weights, never a separate architecture.
- **Provider / access:** Open weights on Hugging Face (`prism-ml/Ternary-Bonsai-27B-gguf`, plus MLX 2-bit companion); Together AI; llama.cpp (CUDA/Metal/CPU); 262K-token on-device context.
- **Release / knowledge:** Released Jul 2026 (Bonsai 27B collection updated Jul 15); knowledge cutoff inherited from Qwen3.6-27B (not stated for the build).
- **IDs:** `prism-ml/Ternary-Bonsai-27B-gguf` (HF)
- **Context window:** 262,144 tokens (256K) via ~75% linear-attention backbone + 4-bit KV; max output undisclosed.
- **Modalities:** text + image in (optional 4-bit HQQ vision tower, ~0.63 GB mmproj); text out; reasoning yes (thinking mode); tool calls yes (BFCL v3 / τ²-Bench measured).
- **Pricing (as of 2026-11-10):** Apache 2.0 open weights — free; no hosted first-party price (Together AI hosts it at provider rates).
- **Architecture:** hybrid attention (~75% linear / 25% full), ~27.3B ternary language weights (~1.71 bits/weight) + 0.46B vision tower; derived from `Qwen/Qwen3.6-27B`.

### Raw benchmarks found

Agent / tool use:

- BFCL v3 + τ²-Bench (category average): **74.01** (Prism ML model card, thinking mode)

Reasoning / knowledge:

- Math category (GSM8K, MATH-500, AIME25, AIME26): **93.40** (card); AIME 2026 (MathArena): **87.5** (HF eval results)
- Knowledge & reasoning (MMLU-Redux, MuSR): **76.96** (card)
- Overall 15-benchmark thinking-mode average: **80.49** (94.6% of Qwen3.6-27B FP16 85.07) (card)
- Instruction following (IFEval, IFBench): **71.77** (card); IFBench (HF eval): **74** prompt-level loose
- Conventional-build comparison IQ2_XXS: **72.73** (card)

Coding:

- Coding category (HumanEval+, MBPP+, LiveCodeBench): **85.96** (card); LiveCodeBench: **82.8**
- Codeforces claim: not published for this build

Long context:

- 262K tokens; no MRCR/RULER rows for this build — no verified public long-context retrieval score found (full-precision parent reports family numbers, not this build's).

Multimodal:

- Vision category (MMMU-Pro, OCR Bench v2): **65.19** (card); MMMU-Pro Vision (HF eval results): **68.96**

### Normalized scores (1–100)

- **Tool use: 70/100.** BFCL v3/τ²-Bench 74.01 (thinking mode) — strong agentic tool reliability for a 2-bit build; no long-horizon coding-agent claims (vendor targets this next).
- **Reasoning: 78/100.** Math 93.40, AIME 2026 87.5, knowledge 76.96 — within ~2 points of FP16 on math; capped by instruction-following 71.77 and knowledge 76.96.
- **Context window: 72/100.** 262K tokens on-device; retrieval unmeasured publicly for this build.
- **Multimodal: 68/100.** Text + optional image in (4-bit mmproj); MMMU-Pro 68.96, vision category 65.19; audio not supported.
- **Coding: 78/100.** Coding category 85.96, LiveCodeBench 82.8 — exceptional for a laptop-class 7.2 GB build.
- **Cost efficiency: 96/100.** Free Apache 2.0 weights, ~7.2 GB footprint serving on a laptop or one GPU — near-zero marginal cost.
- **Overall Score: 73/100.** (70 + 78 + 72 + 68 + 78) / 5 = 73.2 → 73. Best fit: local/on-device open assistants and cost-free agentic prototypes; not for hardest long-horizon agentic coding (vendor roadmap).

## Signature

- Provided by: **Inkling 2 Small (thinkingmachines/inkling-2-small)** — 2026-11-10 UTC
- Method: public internet research (Prism ML HF model card + whitepaper reference, HF eval results, Together AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Ternary-Bonsai-27B-gguf — Hugging Face model card](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)
  - [Bonsai 27B whitepaper — PrismML (GitHub)](https://github.com/PrismML-Eng/Bonsai-demo/blob/main/bonsai-27b-whitepaper.pdf)
  - [Bonsai 27B collection — Hugging Face](https://huggingface.co/collections/prism-ml/bonsai-27b)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
