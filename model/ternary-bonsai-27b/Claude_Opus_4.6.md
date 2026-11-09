# Ternary Bonsai 27B — findings by Claude Opus 4.6

- Source: Prism ML (`ternary-bonsai-27b`)
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 2 27B
- **Short description:** Prism ML's extreme ternary-compressed open-weight reasoning model, released September 2026. Built on Qwen3.8-27B with 1.58-bit ternary quantization (weights restricted to {−1, 0, +1}), retaining 98.2% of FP16 baseline intelligence while fitting in ~6–7GB. Runs at 47–58+ tok/s on Apple M-series, 134–163 tok/s on RTX 5090.
- **Provider / access:** Hugging Face (Prism ML), llama.cpp, MLX for Apple Silicon. Open-weight Apache 2.0.
- **Release / knowledge:** 2026-09; knowledge cutoff inherited from Qwen3.8-27B.
- **IDs:** `prismml/ternary-bonsai-2-27b`
- **Context window:** 262,144 tokens (256K) inherited from Qwen3.8-27B base.
- **Modalities:** Text, image in (vision tower included ~0.92GB); text out; reasoning/thinking mode; tool calling (BFCL v3 evaluated).
- **Pricing (as of 2026-09):** Free (open-weight Apache 2.0). ~6–7GB LLM weights + ~0.92GB vision tower = ~8.6GB total (down from 54GB FP16). Runs on 8GB VRAM consumer GPUs.
- **Architecture:** Based on Qwen3.8-27B (27B params). Hybrid attention (75% linear / 25% full), SwiGLU MLPs, RoPE, RMSNorm. 1.58-bit ternary post-training compression with blockwise Hadamard rotations and FP16 scale factors per 128-weight group. Apache 2.0 license.

### Raw benchmarks found

Agent / tool use:

- BFCL v3 (Agentic Tool Calling): **74.92** (datanorth.ai — vs. FP16 baseline 76.74; 97.6% retention)
- IFEval (Instruction Following): **82.66** (datanorth.ai — vs. FP16 81.25; actually exceeds baseline)
- IFBench: included in composite instruction-following score
- Terminal-Bench: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- MCP-Atlas / Toolathon: no verified public score found

Reasoning / knowledge:

- MMLU-Redux: part of knowledge/reasoning composite **79.86** (datanorth.ai — vs. FP16 85.55; most notable compression drop)
- MuSR: included in knowledge composite
- GPQA Diamond: no standalone score found; overall average 84.78/14 benchmarks
- HLE: no verified public score found
- Average across 14 thinking-mode benchmarks: **84.78** (vs. FP16 baseline 86.32; 98.2% retention)

Coding:

- HumanEval+: part of coding composite **89.42** (datanorth.ai — vs. FP16 89.07; exceeds baseline)
- MBPP+: included in coding composite
- LiveCodeBench: included in coding composite
- Math (GSM8K, MATH-500, AIME): **96.57** (vs. FP16 97.06)
- SWE-bench Verified: no standalone score found

Multimodal / Vision:

- MMMU-Pro: part of multimodal composite **66.19** (datanorth.ai — vs. FP16 71.36; 92.8% retention)
- OCR Bench v2: included in multimodal composite

Long context:

- 256K context window inherited from Qwen3.8-27B. No specific MRCR/RULER/GraphWalks percentage published.

### Normalized scores (1–100)

- **Tool use: 65/100.** BFCL v3 at 74.92 demonstrates solid agentic tool calling capability. IFEval 82.66 exceeds FP16 baseline — instruction following is well preserved. Capped by lack of Terminal-Bench and broader agent benchmarks, and by 27B model size limitations.
- **Reasoning: 68/100.** Average 84.78/14 benchmarks retaining 98.2% of FP16 quality is remarkable for ternary compression. Math composite 96.57 is near-perfect. Knowledge/reasoning composite 79.86 shows the most compression loss. Capped by knowledge degradation and lack of standalone GPQA Diamond score.
- **Context window: 80/100.** 256K tokens inherited from Qwen3.8-27B. Tier-mapped to 80 for 256K window.
- **Multimodal: 60/100.** Vision tower included with text + image input. MMMU-Pro/OCR composite 66.19 (92.8% retention of FP16). Reasonable visual capability but compressed. No video/audio input. Capped by compression loss on vision benchmarks.
- **Coding: 75/100.** Coding composite 89.42 actually exceeds FP16 baseline (89.07) — compression may even help coding tasks. LiveCodeBench included. Math 96.57 near-perfect. Capped by lack of standalone SWE-bench score and 27B size limitations for complex repository work.
- **Cost efficiency: 99/100.** Free open-weight Apache 2.0. Fits in ~8.6GB on disk. Runs on 8GB VRAM consumer GPUs and Apple Silicon laptops at 47–163 tok/s. Near-zero cost. Extraordinary compression achievement.
- **Overall Score: 70/100.** Mean of (65 + 68 + 80 + 60 + 75) / 5 = 69.6, rounded half-up to 70. A groundbreaking compression achievement that retains 98.2% of a 54GB model's intelligence in ~8.6GB, excelling in coding and math with minimal quality loss — limited by knowledge/reasoning compression artifacts and modest multimodal retention.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4.6)** — 2026-11-09
- Method: Public internet research across official model documentation, benchmark reports, and community evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Prism ML — Ternary Bonsai 2 27B](https://prismml.com)
  - [DataNorth — Ternary Bonsai Benchmarks](https://datanorth.ai)
  - [BenchLM — Ternary Bonsai 27B](https://benchlm.ai)
  - [MindStudio — Ternary Bonsai Analysis](https://mindstudio.ai)
  - [Medium — Ternary Bonsai Architecture](https://medium.com)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
