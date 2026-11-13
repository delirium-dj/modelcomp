# Ternary Bonsai 2 27B — findings by Beam

- Source: Reflection AI / PrismML (`prismml/ternary-bonsai-2-27b`, OpenRouter `prismml/ternary-bonsai-2-27b`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 2 27B — PrismML's 1.58-bit ternary-quantized 27B model derived from Qwen3.8-27B; Apache 2.0; runs in ~5.95 GB (PTQ1_0) on a single laptop GPU.
- **Short description:** A ternary-quantized (weights in {-1,0,+1}) 27B-class reasoning model that retains 98.2% of the Qwen3.8-27B FP16 benchmark average at ~1/9 of its footprint; text in/out only, 262K context, thinking mode by default.
- **Provider / access:** PrismML (open weights on HuggingFace `prism-ml/Ternary-Bonsai-2-27B-gguf`); hosted API ~$0.07/$0.50 per 1M; self-host $0. OpenAI-compatible via llama.cpp (CUDA/Metal/CPU) or stock llama.cpp b11556+ (Q2_0 packing). Chat Completions.
- **Release / knowledge:** PrismML Bonsai 2 27B tech report, 2026-09 (citation month September 2026). Derived from Qwen3.8-27B; knowledge cutoff inherited from base.
- **IDs:** `prismml/ternary-bonsai-2-27b`; HF `prism-ml/Ternary-Bonsai-2-27B-gguf`; OpenRouter `prismml/ternary-bonsai-2-27b`.
- **Context window:** 262,144 total; 32,768 max output (inherited from Qwen3.8-27B hybrid-attention backbone; practical on-device).
- **Modalities:** Text in/out only — no vision encoder in the language pack (vision tower ships separately as ~0.63 GB mmproj Q8_0, optional).
- **Pricing (as of 2026-11-13):** Hosted ~$0.07/M in, $0.50/M out; self-host $0 (Apache 2.0 weights, ~5.95 GB). Cache pricing not published.
- **Architecture:** 27.36B total — 24.35B language backbone (64 blocks) + 2.54B embedding/LM head + 0.46B vision tower (27 blocks); hybrid attention (~75% linear / ~25% full), SwiGLU MLP, RoPE, RMSNorm; ternary g128 weights {-1,0,+1} with FP16 group scale (group 128); blockwise Hadamard rotation (block 1024) folded into stored weights; Apache 2.0.

### Raw benchmarks found

> Evaluated with EvalScope + vLLM on NVIDIA H100 under identical infrastructure, decoding, and scoring, in **thinking mode** (xhigh reasoning effort by default). 14 benchmarks across six skill categories. Bit-widths are true averages; "vs FP16" relative to Qwen3.8-27B FP16 reference (86.32 avg).

- FP16 reference (Qwen3.8-27B): 86.32 avg (100%).
- Bonsai 2 27B (1.72 bpw, 5.95 GB): 84.78 avg (98.2%).
- Conventional IQ2_XXS "2-bit" (2.16 bpw, 7.27 GB): 72.59 (84.1%).
- Conventional UD-Q4_K_XL "4-bit" (5.2 bpw, 17.56 GB): 85.18 (98.7%).

Agent / tool use:
- BFCL v3 (agentic / tool calling): **74.92** (Bonsai 2) vs FP16 76.74.

Reasoning / knowledge:
- MMLU-Redux + MuSR (knowledge & reasoning): **79.86** (Bonsai 2) vs FP16 85.55.
- Math (GSM8K, MATH-500, AIME25, AIME26): **96.57** (Bonsai 2) vs FP16 97.06.
- Instruction following (IFEval, IFBench): **82.66** (Bonsai 2) vs FP16 81.25.

Coding:
- Coding (HumanEval+, MBPP+, LiveCodeBench): **89.42** (Bonsai 2) vs FP16 89.07.
- AIME26 single figure: **95.83** (Bonsai 2); LiveCodeBench: **90.07** (Bonsai 2) — both far above the conventional IQ2_XXS collapse (57.5 / 56.4).

Long context:
- 262K context inherited from base; no MRCR/RULER curve published for this checkpoint; RULER likely competitive given linear-attention backbone, unverified.

Multimodal:
- Vision (MMMU-Pro, OCR Bench v2): **66.19** (Bonsai 2) vs FP16 71.36 (vision tower Q8_0 optional mmproj).

### Normalized scores (1–100)

- **Tool use: 75/100.** Anchor BFCL v3 74.92 — mid-high agentic tool-calling, essentially matching the FP16 base (76.74) at 1.72 bpw; no Terminal-Bench / Tau3 / GDPval row published for this checkpoint, so cap ~75 pending those suites. Evidence: PrismML HF model card benchmark table.
- **Reasoning: 82/100.** Math 96.57 (near FP16) and instruction following 82.66, but knowledge/reasoning category 79.86 (MMLU-Redux + MuSR) pulls down; no GPQA Diamond / HLE / LCR / CritPt row published, so cap mid-high rather than frontier. Evidence: PrismML HF model card.
- **Context window: 72/100.** 262,144 total tokens → 200K–500K tier (65–84); 32,768 max output is a structural cap on long generation; no MRCR/RULER retrieval curve published, so mid-tier placement. Evidence: PrismML HF model card spec table.
- **Multimodal: 66/100.** Vision category 66.19 (MMMU-Pro + OCR Bench v2) with optional Q8_0 mmproj tower; text+image input only (no audio/video); text out. Evidence: PrismML HF model card.
- **Coding: 89/100.** Coding category 89.42 (HumanEval+ / MBPP+ / LiveCodeBench) — essentially level with FP16 89.07 and far above the conventional 2-bit collapse; LiveCodeBench single 90.07. Evidence: PrismML HF model card.
- **Cost efficiency: 98/100.** Open weights Apache 2.0 → self-host $0 (100-equivalent), but hosted API ~$0.07/$0.50 per 1M and the ternary kernels require a forked llama.cpp build (deployment friction), so 98 rather than 100. Evidence: PrismML HF model card pricing + hosted tier.
- **Overall Score: 77/100.** Mean of [Tool use 75 + Reasoning 82 + Context window 72 + Multimodal 66 + Coding 89] / 5 = 76.8 → 77. Recommendation: best-in-class on-device 27B-class reasoning/coding for privacy-sensitive or offline single-GPU deployment at ~1/9 of FP16 footprint; downside anchors are knowledge/reasoning gap vs FP16, the 32K output cap, missing harder agentic suites (Terminal-Bench/GDPval), and deployment friction (forked llama.cpp kernels).

---
## Signature

- Provided by: **Beam (opencode/beam-free)** — 2026-11-13
- Method: fresh public web research reading the PrismML HuggingFace model card for `prism-ml/Ternary-Bonsai-2-27B-gguf` (official vendor benchmark table: EvalScope + vLLM on H100, thinking mode, 14 benchmarks across six skill categories, compared against Qwen3.8-27B FP16 / UD-Q4_K_XL / IQ2_XXS), plus spec table (262K context, 32K out, ternary g128, hybrid attention, Apache 2.0) and hosted pricing. Cross-checked OpenRouter route metadata. Scores are normalized 1–100 interpretations, not vendor scores; each number carries a source line.
- Reference URLs:
  - [HuggingFace — prism-ml/Ternary-Bonsai-2-27B-gguf (model card + benchmarks)](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)
  - [PrismML whitepaper (methodology + measurement notes)](https://github.com/PrismML-Eng/Bonsai-demo/blob/main/bonsai-2-27b-whitepaper.pdf)
  - [PrismML Bonsai-demo (run scripts, kernels)](https://github.com/PrismML-Eng/Bonsai-demo)
  - [OpenRouter — model page](https://openrouter.ai/prismml/ternary-bonsai-2-27b)
- Future sources: add a new file next to this one, e.g. `Beam_Alt.md`, using the same headings.
