# Ternary Bonsai 2 27B — findings by MiMo 2.6 Flash

- Source: Prism ML (`prism-ml/Ternary-Bonsai-2-27B`)
- Date: 2026-11-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 2 27B
- **Short description:** Prism ML's ternary ({−1, 0, +1}) quantization of Qwen3.8-27B (Sep 2026) — 98.2% of FP16 benchmark intelligence at ~5.9 GB (1.72 bits/weight), with thinking, tool calling and image input intact, built for laptop-local 27B agents.
- **Provider / access:** Hugging Face `prism-ml/Ternary-Bonsai-2-27B` (MLX 2-bit pack, GGUF companion `Ternary-Bonsai-2-27B-gguf` with PTQ1_0 / PQ2_0 / Q2_0), Ollama `bonsai-2:27b`, LM Studio; custom PrismML llama.cpp fork for PTQ1_0/PQ2_0 (Q2_0 runs on stock llama.cpp ≥ b11556).
- **Release / knowledge:** cited September 2026 (Prism ML tech report); HF collection updated 2026-09-17; Ollama library published ~3 weeks before 2026-11-12; knowledge cutoff inherited from Qwen3.8-27B (not announced).
- **IDs:** `prism-ml/Ternary-Bonsai-2-27B-mlx-2bit`, `prism-ml/Ternary-Bonsai-2-27B-gguf`, Ollama `bonsai-2:27b`; no hosted API / no OpenCode Zen Free ID found.
- **Context window:** 262,144 tokens (262K) native — inherited from Qwen3.8-27B, kept practical on-device by the ~75% linear-attention backbone (community LM Studio runs observed 65,536 in their config); no max output figure published.
- **Modalities:** text, image in (official Qwen3.8-27B vision tower bundled, 0.92 GB FP16, unquantized); text out; thinking mode yes (xhigh default, low unsupported); tool calls yes; JSON mode not explicitly claimed.
- **Pricing (as of 2026-11-12):** free — Apache 2.0 open weights (~5.95 GB GGUF PTQ1_0, 7.21 GB PQ2_0, 7.63 GB Q2_0, 8.60 GB MLX); no API pricing; hardware cost only (~28 tok/s on an M5 Pro laptop, ~130 tok/s on an RTX 5090).
- **Architecture:** ternary g128 ({−1,0,+1} + FP16 group scales, Hadamard-rotated basis), 27.36B total (24.35B language backbone, 64 blocks, hybrid ~75% linear / 25% full attention, SwiGLU, RoPE, RMSNorm; 2.54B embedding/LM head; 0.46B vision tower), base model `Qwen/Qwen3.8-27B`, license Apache 2.0.

### Raw benchmarks found

> Evaluated by Prism ML with EvalScope + vLLM on NVIDIA H100, thinking mode, 14 benchmarks; "vs FP16" is relative to the Qwen3.8-27B FP16 reference (86.32 average). Bonsai 2 27B average: **84.78** (98.2% of FP16).

Reasoning / knowledge:

- MMLU-Redux: **89.09%** (FP16 91.46)
- MuSR: **70.63%** (FP16 79.63)
- AIME26: **95.83%**; AIME25: **95.00%**
- GPQA Diamond / HLE / MLCR: no verified public score found

Math:

- GSM8K: **96.66%**; MATH-500: **98.80%** (category avg 96.57 vs FP16 97.06)

Coding:

- LiveCodeBench: **90.07%** (conventional IQ2_XXS build collapses to 56.40)
- HumanEval+: **95.12%**; MBPP+: **83.07%** (category avg 89.42, level with FP16 89.07)
- SWE-bench / DeepSWE / Terminal-Bench: no verified public score found

Instruction following / tool use:

- IFEval: **91.31%**; IFBench (prompt-loose): **74.00%** (category 82.66 vs FP16 81.25)
- BFCL v3 (agentic tool calling): **74.92%** (FP16 76.74)

Vision:

- MMMU-Pro: **75.49%**; OCR Bench v2: **56.88%** (category 66.19 vs FP16 71.36)

Community (llm-bench.io, 3 LM Studio runs, LLM-judged 0–100): overall **68.2**, Agent Workflow **84.8**, Role Play **88.4**, Research & Analysis **80.5**, Code Generation **19.2** (judge spread P5–P95 2.1–43.2 — very noisy, treat as directional only).

Long context: no MRCR / RULER retrieval score published (262K window advertised).

### Normalized scores (1–100)

- **Tool use: 72/100.** BFCL v3 74.92% (within 2 points of the FP16 base) plus the community agent-workflow score of 84.8 show tool calling survives the ternary cut, but no Terminal-Bench / Tau3 / OSWorld harness exists for this ID — mid-tier only.
- **Reasoning: 82/100.** AIME25/26 at 95+ and MMLU-Redux 89.09 are strong, but MuSR 70.63, no GPQA/HLE row, and a knowledge-and-reasoning category 79.86 (vs FP16 85.55) hold it below frontier reasoning scores.
- **Context window: 76/100.** 262K native lands in the 200K–500K tier (65–84, 200K = 70); no measured long-context retrieval at that depth, so mid-tier applies.
- **Multimodal: 68/100.** Image input with a bundled FP16 vision tower puts it in the +image tier (60–70); MMMU-Pro 75.49 is solid but OCR Bench v2 56.88 and no video/audio keep it mid-tier.
- **Coding: 85/100.** LiveCodeBench 90.07 and HumanEval+ 95.12 are near-frontier and the coding category actually matches the FP16 base (89.42 vs 89.07) — the absence of any SWE-bench / DeepSWE / Terminal-Bench row is what caps it below 90.
- **Cost efficiency: 100/100.** Apache 2.0 weights, $0 to run — a full 27B reasoning model in ~5.9 GB that fits commodity hardware (28 tok/s laptop, 30 tok/s on a 72 W L4).
- **Overall Score: 77/100.** (72 + 82 + 76 + 68 + 85) / 5 = 76.6 → 77 — best-fit: the efficiency play for offline/laptop-local 27B agents that need near-FP16 coding and math at a ninth of the footprint.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-11-12
- Method: public internet research (vendor model card and whitepaper, Ollama library, community benchmark aggregator); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — prism-ml/Ternary-Bonsai-2-27B-mlx-2bit (full model card + benchmarks)](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-mlx-2bit)
  - [Ollama — bonsai-2 library](https://ollama.com/library/bonsai-2)
  - [Prism ML — Bonsai 2 27B whitepaper (PDF)](https://github.com/PrismML-Eng/Bonsai-demo/blob/main/bonsai-2-27b-whitepaper.pdf)
  - [llm-bench.io — ternary-bonsai-2-27b community benchmarks](https://llm-bench.io/models/ternary-bonsai-2-27b)
  - [GitHub — satindergrewal/Ternary-Bonsai-2-27B-1M-context-KV4-RTX-5090 (serving recipe)](https://github.com/satindergrewal/Ternary-Bonsai-2-27B-1M-context-KV4-RTX-5090/tree/main/)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
