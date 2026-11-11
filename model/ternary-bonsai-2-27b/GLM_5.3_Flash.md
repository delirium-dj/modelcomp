# Ternary Bonsai 2 27B — findings by GLM 5.3 Flash

- Source: PrismML (`prism-ml/Ternary-Bonsai-2-27B-gguf`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 2 27B
- **Short description:** PrismML's flagship ternary-weight reasoning model (Sept 2026): the full Qwen3.8-27B hybrid-attention architecture retrained/requantized to {−1,0,+1} weights at 1.72–1.75 bits/weight — 5.95 GB on disk, 262K context, image input, native tool calling and thinking mode, retaining 98.2% of the FP16 baseline's 14-benchmark average. Apache 2.0, self-hosted (no hosted API).
- **Provider / access:** open weights, self-host: GGUF via llama.cpp (PrismML fork kernels for PTQ1_0/PQ2_0; stock llama.cpp ≥ b11556 runs the Q2_0 pack) or MLX on Apple Silicon (mlx-vlm ≥ 0.7.8). Not deployed by any HF Inference Provider; no hosted API price exists. OpenAI-compatible local server via the Bonsai-demo repo.
- **Release / knowledge:** released 2026-09-17 (Bonsai-2 collection, tech report month September 2026); knowledge cutoff inherited from Qwen3.8-27B — not independently stated.
- **IDs:** `prism-ml/Ternary-Bonsai-2-27B-gguf` (GGUF: PTQ1_0 5.95 GB @1.75 bpw, PQ2_0 7.21 GB @2.13 bpw, Q2_0 7.63 GB; vision tower Q8_0 mmproj 0.63 GB optional), `prism-ml/Ternary-Bonsai-2-27B-mlx-2bit` (8.6 GB).
- **Context window:** 262,144 (262K) total — inherited from the Qwen3.8-27B hybrid-attention backbone (~75% linear attention); max output not formally specified (typical serving caps 16,384 with thinking traces in mind).
- **Modalities:** Text + image in (optional 0.46B vision tower, ~1,024 vision tokens/image by default on Metal/Vulkan/CPU, uncapped on CUDA/ROCm); text out. Native function calling (OpenAI-style `tools`), MCP supported via the demo repo; thinking mode on by default (`xhigh` default reasoning effort, `medium` supported, `low` not supported; `thinking_budget_tokens` to bound or disable).
- **Pricing (as of 2026-11-11):** free — Apache 2.0 open weights, self-hosted; measured 27.5 W GPU-rail draw decoding on an Apple M5 Pro laptop (34.1 W CPU+GPU), 129.9 tok/s on an RTX 5090, 47 tok/s on an M5 Max, ~30 tok/s on a 72 W L4.
- **Architecture:** 27.36B total parameters (24.35B language backbone across 64 blocks + 2.54B embedding/LM head + 0.46B vision tower across 27 blocks); hybrid attention (~75% linear / ~25% full), SwiGLU MLP, RoPE, RMSNorm; ternary g128 weights {−1,0,+1} with FP16 group scales per 128 weights and a folded blockwise Hadamard rotation (block 1024); only 26.2M parameters (0.0976% of the LM) stay above ternary precision.

### Raw benchmarks found

All thinking-mode, EvalScope + vLLM on NVIDIA H100, from the official model card and whitepaper ("Bonsai 2 27B" = PTQ1_0 1.72 bpw unless noted):

- 14-benchmark thinking-mode average: **84.78** vs Qwen3.8-27B FP16 **86.32** = **98.2%** retained at ~1/9 the size (UD-Q4_K_XL 85.18 = 98.7%; conventional IQ2_XXS 72.59 = 84.1%)
- Math category (GSM8K, MATH-500, AIME25, AIME26): **96.57** (FP16 97.06) — within half a point of full precision; AIME26 **95.83** (IQ2_XXS collapses to 57.5)
- Coding category (HumanEval+, MBPP+, LiveCodeBench): **89.42** — level with the FP16 baseline (89.07); LiveCodeBench **90.07**
- Agentic / tool calling (BFCL v3): **74.92** (FP16 76.74)
- Knowledge & reasoning (MMLU-Redux, MuSR): **79.86** (FP16 85.55)
- Instruction following (IFEval, IFBench): **82.66** (FP16 81.25 — slightly ahead)
- Vision (MMMU-Pro, OCR Bench v2): **66.19** (FP16 71.36)
- Whitepaper 20-benchmark suite: **83.9** vs 85.4 (98.2%)
- Intelligence density (D = −log2(1−score/100)/GB): **0.457/GB** — 1.8x the densest conventional build (IQ2_XXS 0.257), ~9x FP16 (0.053)
- SWE-bench Verified, Terminal-Bench, GPQA Diamond, HLE: no verified public score found

Long context:

- no long-context retrieval reported (262K window inherited from the base model; no RULER/MRCR value published)

### Normalized scores (1–100)

- **Tool use: 73/100.** BFCL v3 74.92 with native OpenAI-style function calling and MCP support; agentic tool calling survives ternarization nearly intact (−1.8 vs FP16), but no long-horizon agent harness (Terminal-Bench/OSWorld) numbers exist and local-serving latency bounds complex multi-tool chains.
- **Reasoning: 83/100.** Math category 96.57 (AIME26 95.83 — the standout, conventional 2-bit collapses to 57.5) and instruction following 82.66; the knowledge/reasoning category 79.86 (MMLU-Redux, MuSR, −5.7 vs FP16) is the cap.
- **Context window: 74/100.** 262K total (200K–500K tier, above the 200K=70 anchor thanks to the practical linear-attention backbone); max output unspecified and no retrieval benchmark published.
- **Multimodal: 65/100.** Text + image in (separate Q8_0 vision tower, MMMU-Pro/OCR-Bench-v2 category 66.19), text out; no audio/video; mid of the image-in band.
- **Coding: 85/100.** Coding category 89.42 (HumanEval+, MBPP+, LiveCodeBench 90.07) — level with the FP16 baseline and unusually resilient for 1.72-bit weights; no agentic-coding harness (SWE-bench, Terminal-Bench) published, which caps it below models measured in real agent loops.
- **Cost efficiency: 98/100.** Free Apache 2.0 self-host; 5.95 GB runs 27B-class reasoning on an ordinary laptop (28–47 tok/s on Apple Silicon, ~130 tok/s on an RTX 5090) — the smallest footprint per point of intelligence in its comparison set (0.457/GB); no hosted price to weigh against.
- **Overall Score: 76/100.** Mean of the five non-cost dims (73+83+74+65+85)/5 = 76.0. Best-fit recommendation: the quality-per-GB pick for laptop-local and single-GPU agents with long documents and math-heavy reasoning; not the pick for multimodal breadth or hosted frontier-class agentic coding.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-11
- Method: public internet research (official PrismML documentation, Hugging Face model card and whitepaper reference); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Hugging Face — prism-ml/Ternary-Bonsai-2-27B-gguf model card (benchmarks, throughput)](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)
  - [PrismML Docs — Ternary Bonsai 2 27B](https://docs.prismml.com/models/bonsai-2-27b)
  - [Bonsai 2 27B whitepaper (PDF, PrismML-Eng GitHub)](https://github.com/PrismML-Eng/Bonsai-demo/blob/main/bonsai-2-27b-whitepaper.pdf)
  - [Bonsai-demo repository (source of truth for running)](https://github.com/PrismML-Eng/Bonsai-demo)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
