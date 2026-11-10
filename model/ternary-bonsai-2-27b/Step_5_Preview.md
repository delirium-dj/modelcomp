# Ternary Bonsai 2 27B — findings by Step 5 Preview

- Source: PrismML / `Ternary-Bonsai-2-27B` (open weights, Hugging Face)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 2 27B
- **Short description:** PrismML's flagship ternary-weight reasoning model — every language-model weight stored as {−1, 0, +1} at ~1.72–1.75 effective bits — derived from Qwen3.8-27B with the architecture unchanged, built for local and on-device inference. Released 2026-09-17 under Apache 2.0; it retains ~98.2% of the FP16 baseline's benchmark average at roughly a ninth of the file size.
- **Provider / access:** self-hosted open weights only. GGUF (`PTQ1_0` 5.95 GB, `PQ2_0` 7.21 GB; `Q2_0` 7.63 GB for stock llama.cpp builds b11555+) and MLX 2-bit (8.60 GB incl. FP16 vision tower) from the PrismML Hugging Face collection; the `PTQ1_0`/`PQ2_0` packs need PrismML's llama.cpp fork, MLX loads natively in mlx-vlm ≥ 0.7.8. No hosted API price exists — and no OpenCode Console/Zen route (verified absent from the live catalog).
- **Release / knowledge:** released 2026-09-17; knowledge cutoff not disclosed.
- **IDs:** `prism-ml/Ternary-Bonsai-2-27B-gguf` (HF), `prism-ml/Ternary-Bonsai-2-27B-mlx-2bit` (HF). No provider API ID; no Free ID.
- **Context window:** 262,144 tokens (PrismML docs; LLMLearner rounds to 256K). Max output not disclosed.
- **Modalities:** text + image input, text output (vision tower 0.46B params, mmproj Q8_0 0.63 GB); reasoning model with thinking mode (`reasoning_effort`, default `xhigh`, `medium` supported, `low` not supported) and native OpenAI-style tool calling / MCP.
- **Pricing (as of 2026-11-10):** no hosted API price — Apache 2.0 weights, free to self-host; the 5.95–7.63 GB files run on consumer and datacenter GPUs (L4/Ada faster on `PTQ1_0`, H100/A100/Blackwell faster on `PQ2_0`) and Apple Silicon via MLX.
- **Architecture:** 27.36B total (24.35B language backbone + 2.54B embedding/LM head + 0.46B vision tower), dense (not MoE); hybrid attention (~75% linear / ~25% full), SwiGLU, RoPE, RMSNorm — all inherited unchanged from Qwen3.8-27B; ternary g128 weights with FP16 group-wise scaling and blockwise Hadamard rotation.

### Raw benchmarks found

All official rows below are PrismML-reported (EvalScope + vLLM, H100, thinking mode, per the model card / whitepaper / announcement); ranks are LLMLearner's leaderboard positions.

Agent / tool use:

- BFCL v3 (function calling): **74.92** (official model-card suite; no leaderboard rank published)
- IFEval (instruction following): **91.31** (2nd of 3 on LLMLearner's leaderboard)
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found — noted N/A
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found (native tool calling and an MCP walkthrough are documented, but unmeasured)

Reasoning / knowledge:

- 14-benchmark thinking-mode suite average: **84.78** vs the Qwen3.8-27B FP16 baseline's 86.32 (**98.2% retained**); whitepaper's 20-benchmark suite: **83.9** vs 85.4 (also 98.2%)
- AIME 2026: **95.83** (11th of 34); AIME 2025: **95.00** (24th of 86); MATH-500: **98.80** (7th of 49); GSM8K: **96.7** (1st of 67)
- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR / CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- LiveCodeBench: **90.07** (LLMLearner 90.1, 9th of 112)
- HumanEval+: **95.12** (official model-card suite)
- "Coding is level with the [FP16] baseline" (PrismML claim)
- SWE-bench Verified / SWE-bench Pro: no verified public score found
- SciCode / AA-SciCode / Vibe Code Bench / DeepSWE / Coding Index: no verified public score found
- FrontierCode 2.0 / Terminal-Bench 4.0: no verified public score found

Long context:

- 262,144-token window (official); no MRCR / RULER / GraphWalks retrieval figure reported at any window length.

### Normalized scores (1–100)

- **Tool use: 74/100.** BFCL v3 74.92 with native OpenAI-style tool calling and a documented MCP path, plus IFEval 91.31 instruction-following — above the mid-band reference but unproven at agentic depth: Terminal-Bench, Tau3-Banking, GDPval-AA, Claw-Eval and Toolathon all read "no verified public score found", so the frontier band (90–100) is out of reach.
- **Reasoning: 85/100.** Elite mathematics — AIME 2026 95.83, MATH-500 98.80, GSM8K 96.7 — and a 14-suite average of 84.78 that tracks the 27B FP16 baseline to 98.2%. Capped below 90 because the reasoning rubric's anchors (GPQA Diamond, HLE, an intelligence index) are entirely unpublished for this model.
- **Context window: 76/100.** 262,144 tokens lands in the 200K–500K tier (65–84, with 200K = 70); the ≥1M tier (95–100) is not reached, and no MRCR/RULER retrieval figure exists to move it within the band.
- **Multimodal: 66/100.** Text + image input with text-only output sits in the +image-in band (60–70); MMMU-Pro 75.49 (60th of 132) is solid small-model visual understanding but not enough for the +video/PDF band, and there is no audio input or non-text output.
- **Coding: 80/100.** LiveCodeBench 90.07 (9th of 112) and HumanEval+ 95.12 are strong classic-coding evidence, with PrismML reporting coding parity with the FP16 baseline. Capped below the frontier band by the missing agentic-coding anchors — SWE-bench Verified, FrontierCode 2.0, SciCode, Vibe Code Bench — which are exactly what the rubric's 90–100 band requires.
- **Cost efficiency: 95/100.** Apache 2.0 weights with no hosted API price at all: a 5.95 GB GGUF runs locally on L4/Ada/Apple-Silicon-class hardware, so the marginal token cost is zero. Held below 100 because self-hosting still costs hardware and electricity and there is no $0 hosted route.
- **Overall Score: 76/100.** Mean of Tool use 74, Reasoning 85, Context window 76, Multimodal 66, Coding 80. Best fit: private, low-cost local deployment — a 6 GB ternary checkpoint that keeps ~98% of the Qwen3.8-27B baseline on math/coding evals with native tool calling and image input, for on-device and air-gapped agent loops.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-10
- Method: public internet research (PrismML official model docs, Hugging Face model card, whitepaper reference, LLMLearner benchmark aggregation, and an independent architecture/runtime analysis); scores are normalized 1–100 interpretations per `model-comparison.md`, not official vendor scores. Official benchmark rows are labelled as vendor-reported; unreported benchmarks are marked "no verified public score found" rather than estimated.
- Reference URLs:
  - [PrismML docs — Ternary Bonsai 2 27B (specs, artifacts, runtimes)](https://docs.prismml.com/models/bonsai-2-27b)
  - [Hugging Face — prism-ml/Ternary-Bonsai-2-27B-gguf (model card, benchmark tables)](https://huggingface.co/prism-ml/Ternary-Bonsai-2-27B-gguf)
  - [GitHub — Bonsai 2 27B whitepaper (20-benchmark suite)](https://github.com/PrismML-Eng/Bonsai-demo/blob/main/bonsai-2-27b-whitepaper.pdf)
  - [LLMLearner — Ternary Bonsai 2 27B benchmarks, specs and leaderboard ranks](https://llmlearner.com/models/ternary-bonsai-2-27b)
  - [Threat Frontier — Ternary Bonsai 2 27B: 1.76-bit architecture, benchmarks and independent runtime testing](https://threatfrontier.com/articles/ternary-bonsai-2-27b-architecture-benchmarks-runtime)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
