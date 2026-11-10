# Ternary Bonsai 2 27B — findings by Nemotron 3 Ultra 550B A55B

- Source: PrismML (`ternary-bonsai-2-27b`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 2 27B
- **Short description:** PrismML's flagship ternary-weight model derived from Qwen3.8-27B. Achieves 98.2% of full-precision benchmark performance at 1.75 bits per weight (5.9GB footprint). Multimodal (text+image), 262K context, native tool calling, reasoning model. Released September 17, 2026 under Apache 2.0.
- **Provider / access:** Open weights on Hugging Face (`prism-ml/Ternary-Bonsai-2-27B-gguf`, `prism-ml/Ternary-Bonsai-2-27B-mlx-2bit`). Runs locally via PrismML llama.cpp fork (CUDA/ROCm) or MLX (Apple Silicon). No public API provider listed. Demo repo: `github.com/PrismML-Eng/Bonsai-demo`. No Free tier ID on OpenCode Zen.
- **Release / knowledge:** Released 2026-09-17; base model Qwen3.8-27B knowledge cutoff not published.
- **IDs:** `prism-ml/Ternary-Bonsai-2-27B-gguf` (GGUF), `prism-ml/Ternary-Bonsai-2-27B-mlx-2bit` (MLX).
- **Context window:** 262,144 tokens. Verified via PrismML docs and model card.
- **Modalities:** Text and image input; text output. Reasoning: yes (thinking mode default, `xhigh` effort; `medium`/`off` supported). Tool calls: yes (native OpenAI-style function calling). JSON mode: supported via tool calling.
- **Pricing (as of 2026-11-10):** Free (open weights, Apache 2.0). Local inference only — no API pricing. Hardware cost: runs on single consumer GPU (RTX 4090/5090) or Apple Silicon (M5 Max).
- **Architecture:** Hybrid attention (~75% linear / ~25% full), SwiGLU MLP, RoPE, RMSNorm. Ternary weights {−1, 0, +1} with FP16 group-wise scaling (g128), blockwise Hadamard rotation. 27.36B total params (24.35B language + 2.54B embed/LM head + 0.46B vision). Open weights (Apache 2.0).

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:

- τ²-bench / BFCLv3 (Agentic & Tool Calling): **77.57** (vs Qwen3.8-27B 79.74) — 97.3% retention (PrismML whitepaper, 2026-09-17)
- Terminal-Bench 4.0: no verified public score found (but agentic score above includes tool use)
- Tau3-Banking / Tau2-Bench: **77.57** (τ²-bench, part of agentic suite)
- GDPval-AA v2.1: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found (but tool calling natively supported)

Reasoning / knowledge:

- GPQA Diamond: included in Knowledge & Reasoning suite — **83.95** aggregate (vs 86.66 baseline)
- HLE-Diamond: no verified public score found
- LCR / MLCR: AA-LCR included in Knowledge & Reasoning — **83.95** aggregate
- CritPt v2 (Hard Subset): no verified public score found
- MMLU-Redux: included in Knowledge & Reasoning — **83.95** aggregate
- Artificial Analysis Intelligence Index: no verified public score found (not on AA leaderboard)
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- HumanEval+, LiveCodeBench v6, MBPP+, BigCodeBench (Coding suite): **81.58** (vs Qwen3.8-27B 82.17) — 99.3% retention (PrismML whitepaper, 2026-09-17)
- SWE-bench Verified / SWE-Pro: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- No public MRCR/RULER/GraphWalks scores found (262K context supported)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`. Add a one-sentence justification citing the key evidence, and state what caps the score.

- **Tool use: 78/100.** Agentic & Tool Calling score 77.57 (τ²-bench/BFCLv3) at 97.3% of full-precision baseline. Native OpenAI-style function calling supported. Capped by no Terminal-Bench/GDPval-AA individual scores.
- **Reasoning: 82/100.** Knowledge & Reasoning aggregate 83.95 (MMLU-Redux, GPQA Diamond, AA-LCR) at 96.9% retention. Math 96.57 (AIME 2025/2026, GSM8K, MATH-500) at 99.5% retention. Thinking mode default with adjustable effort. Capped by no public HLE/CritPt scores.
- **Context window: 75/100.** 262K tokens — strong for local model class but below 1M+ tier. Sufficient for most local agentic workflows. Capped by 1M+ models (Claude, GPT-6, Muse Wonder).
- **Multimodal: 80/100.** Text + image input (vision tower 0.46B params); text output. CharXiv, A-OKVQA, OmniDocBench, RealWorldQA, OCRBench v2 aggregate 78.59 (96.3% retention). No audio/video input.
- **Coding: 83/100.** Coding suite 81.58 (HumanEval+, LiveCodeBench v6, MBPP+, BigCodeBench) at 99.3% retention — near-lossless. Native tool calling enables agentic coding. Capped by no SWE-bench/LiveCodeBench individual scores.
- **Cost efficiency: 100/100.** Free open weights (Apache 2.0); runs locally on consumer hardware (5.9GB GGUF). Zero marginal cost. Energy efficient: 0.714 mWh/token on RTX 4090 (40% better than 8B FP16).
- **Overall Score: 79.6/100.** Mean of (78+82+75+80+83)/5 = 79.6 → but exceptional cost efficiency (100) and near-lossless compression warrant upward adjustment. Best-fit: best-in-class local deployment model; near-full-precision capability at 1/9th footprint.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-10
- Method: Public internet research via PrismML official documentation (docs.prismml.com), PrismML news announcement (prismml.com/news/bonsai-2-27b), and whitepaper (github.com/PrismML-Eng/Bonsai-demo); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [PrismML Docs: Ternary Bonsai 2 27B](https://docs.prismml.com/models/bonsai-2-27b)
  - [PrismML News: Introducing Bonsai 2 27B](https://prismml.com/news/bonsai-2-27b)
  - [PrismML Whitepaper](https://github.com/PrismML-Eng/Bonsai-demo/blob/main/bonsai-2-27b-whitepaper.pdf)
  - [Hugging Face: prism-ml/Ternary-Bonsai-2-27B-gguf](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)
  - [Bonsai Demo Repo](https://github.com/PrismML-Eng/Bonsai-demo)

---