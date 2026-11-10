# Ternary Bonsai 27B — findings by Nemotron 3 Ultra 550B A55B

- Source: PrismML (`ternary-bonsai-27b`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 27B (first generation, "Bonsai 27B")
- **Short description:** PrismML's first 27B-class ternary-weight model derived from Qwen3.6 27B. Achieves 95% of full-precision benchmark performance at 1.71 bits per weight (5.9GB footprint). Multimodal (text+image), 262K context, native tool calling, reasoning model. Released July 14, 2026 under Apache 2.0. Superseded by Bonsai 2 27B (Sep 2026).
- **Provider / access:** Open weights on Hugging Face (`prism-ml/Ternary-Bonsai-27B-gguf`, MLX). Runs locally via PrismML llama.cpp fork (CUDA) or MLX (Apple Silicon). Free limited-time developer preview API (Darkbloom). No Free tier ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-07-14; base model Qwen3.6 27B knowledge cutoff not published.
- **IDs:** `prism-ml/Ternary-Bonsai-27B-gguf` (GGUF), MLX variant available.
- **Context window:** 262,144 tokens. Verified via PrismML announcement.
- **Modalities:** Text and image input; text output. Reasoning: yes (thinking mode evaluated). Tool calls: yes (BFCL v3, TauBench). JSON mode: supported via tool calling.
- **Pricing (as of 2026-11-11):** Free (open weights, Apache 2.0). Local inference only. Hardware: runs on laptop (5.9GB) or phone (1-bit variant 3.9GB). Free dev preview API (limited time).
- **Architecture:** Hybrid attention, SwiGLU MLP, RoPE, RMSNorm (Qwen3.6 architecture). Ternary weights {−1, 0, +1} with FP16 group-wise scaling. 27B-class. Open weights (Apache 2.0).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- BFCL v3 / TauBench (Agentic & Tool-calling): **74.0** (vs Qwen3.6-27B 80.0) — 92.5% retention (PrismML announcement, 2026-07-14)
- Terminal-Bench: no verified public score found
- τ³-bench / Tau2-Bench: no verified public score found (TauBench included above)
- GDPval-AA: no verified public score found
- MCP Atlas / Toolathon / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- MMLU-Redux / MuSR (Knowledge/STEM): **77.0** (vs 83.1) — 92.7% retention
- Math (GSM8K, MATH-500, AIME25, AIME26): **93.4** (vs 95.3) — 98.0% retention
- GPQA Diamond: no individual score (included in Knowledge/STEM)
- HLE / CritPt: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found

Coding:

- HumanEval+, MBPP+, LiveCodeBench (Coding): **86.0** (vs 88.7) — 97.0% retention
- SWE-bench / LiveCodeBench individual: no verified public score found
- AA-SciCode / DeepSWE: no verified public score found

Vision:

- MMMU Pro, OCRBench (Vision): **65.2** (vs 72.6) — 89.8% retention

Instruction Following:

- IFEval, IFBench: **71.8** (vs 78.4) — 91.6% retention

Overall (15 benchmarks): **80.5** (vs 85.0) — 94.7% retention

Long context:

- Speculative decoding supported (draft-and-verify acceleration)
- No MRCR/RULER/GraphWalks scores found (262K context supported)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 70/100.** Agentic & Tool-calling 74.0 (BFCL v3, TauBench) at 92.5% retention. Native tool calling supported. Capped by no Terminal-Bench/GDPval-AA/MCP Atlas individual scores.
- **Reasoning: 78/100.** Math 93.4 (98% retention) excellent. Knowledge/STEM 77.0 (92.7% retention) solid. Thinking mode evaluated. Capped by no GPQA/HLE/CritPt individual scores.
- **Context window: 75/100.** 262K tokens — strong for local/phone deployment class but below 1M+ tier. Capped by 1M+ models.
- **Multimodal: 75/100.** Text + image input; vision 65.2 (89.8% retention). Vision tower in compact 4-bit form. No audio/video input.
- **Coding: 80/100.** Coding suite 86.0 (HumanEval+, MBPP+, LiveCodeBench) at 97% retention — near-lossless. Capped by no SWE-bench/LiveCodeBench individual scores.
- **Cost efficiency: 100/100.** Free open weights (Apache 2.0); runs locally on laptop (5.9GB) or phone (1-bit 3.9GB). Zero marginal cost. Intelligence density 0.53/GB (1-bit) — 10x full-precision baseline.
- **Overall Score: 75.6/100.** Mean of (70+78+75+75+80)/5 = 75.6 → adjusted to 80 reflecting exceptional cost efficiency (100) and phone-class deployment uniqueness. Best-fit: pioneering phone-deployable 27B model; superseded by Bonsai 2 27B for quality.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-11
- Method: Public internet research via PrismML official announcement (prismml.com/news/bonsai-27b) and whitepaper (github.com/PrismML-Eng/Bonsai-demo); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [PrismML News: Announcing Bonsai 27B](https://prismml.com/news/bonsai-27b)
  - [PrismML Whitepaper: Bonsai 27B](https://github.com/PrismML-Eng/Bonsai-demo/blob/main/bonsai-27b-whitepaper.pdf)
  - [Hugging Face: prism-ml/bonsai-27b collection](https://huggingface.co/collections/prism-ml/bonsai-27b)
  - [Bonsai Demo Repo](https://github.com/PrismML-Eng/Bonsai-demo)
  - [Darkbloom Developer Preview API](https://console.darkbloom.dev/models)

---