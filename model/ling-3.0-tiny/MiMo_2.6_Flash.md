# Ling-3.0-tiny — findings by MiMo 2.6_Flash

- Source: InclusionAI / Ant Group (`ling-3.0-tiny`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling-3.0-tiny
- **Short description:** Lightweight hybrid reasoning MoE from InclusionAI — 7.9B total / 1.3B active parameters — designed for strong reasoning and agentic capabilities at low inference cost on local/edge hardware (validated on NVIDIA DGX Spark, Apple Silicon MacBook / Mac mini). Same Ling-3.0 hybrid-linear family as Ling-3.0-flash, shrunk to consumer deployment. Switchable Thinking/Instant modes; native function calling; prompt caching.
- **Provider / access:** Hugging Face / ModelScope open weights (MIT; ~15.8GB BF16, FP8/INT4 quant available); OpenRouter `inclusionai/ling-3.0-tiny`; Novita AI (serverless); SGLang cookbook + prebuilt image; vLLM via vllm-ling-v3 branch; Ollama (PR in flight); MLX on Apple Silicon.
- **Release / knowledge:** Released 2026-08-06 (aitoolsreview / HF). Knowledge cutoff not disclosed.
- **IDs:** `inclusionAI/Ling-3.0-tiny` (HF); `inclusionai/ling-3.0-tiny` (OpenRouter / Novita).
- **Context window:** 128K native (max_position_embeddings 131072); served at 262,144 via YaRN (rope_theta 6e6); max output 32,768 tokens (Novita max_tokens example). Some listings show 262K served context.
- **Modalities:** text in; text out; hybrid reasoning (thinking mode default; `enable_thinking` per request); function calling; prompt caching.
- **Pricing (as of 2026-10-13):** Novita listed $0 / $0 (free promo or open-weight self-host); open weights MIT = free self-host (~8.34 GiB peak memory at 8K context on FP8 DGX Spark).
- **Architecture:** 7.9B total, 1.3B active; 18 KDA + 6 Gated MLA (3:1) hybrid-linear; 128 routed experts (8 active + 1 shared); hidden 1536; custom `BailingMoeV3ForCausalLM` (trust_remote_code required). FP8: ~100–105 tok/s DGX Spark, ~86–90 tok/s M4 Pro MacBook; AA-measured output speed >160 tok/s.

### Raw benchmarks found

Agent / tool use:

- AA Agentic Index: **16** (independent composite; class-leading for 1.3B-active — class median 8 per kinonn research vault)
- Native function calling; Thinking/Instant modes for agent loops
- No BFCL / τ-bench / PinchBench public per-benchmark figures (image-only chart on HF card)

Coding:

- HumanEval-Plus (base, Pass@1): **79.27** (HF tiny-base card; strong for class)
- MultiPL-E (base, Pass@1): **64.38** (HF tiny-base)
- No SWE-bench / LiveCodeBench figure for instruct model in extractable form (Terminal-Bench 2.1 image-only)

Reasoning / knowledge (independent AA + base):

- AA Intelligence Index v4.1.1: **25** (independent; #6/56 in class, class median 8 — kinonn research vault / HF card)
- MMLU-Pro (base): **51.83** (HF tiny-base)
- SimpleQA-Verified (base): **7.10** (HF tiny-base — weak factual precision)
- No AIME / GPQA figure extractable (image-only chart on instruct card)

Long context:

- 128K native / 262K YaRN; no MRCR / RULER figure published.

### Normalized scores (1–100)

- **Tool use: 58/100.** AA Agentic Index 16 is class-leading for 1.3B-active (median 8); native function calling + hybrid reasoning modes for agent loops. Capped by no per-benchmark agent figures (BFCL/τ/PinchBench unknown) and edge-hardware latency ceilings.
- **Reasoning: 60/100.** AA Intelligence Index 25 is strong for the 1.3B-active class (#6/56, median 8); HumanEval-Plus 79 on base shows solid code-reasoning foundation. Capped by no AIME/GPQA public figures, weak SimpleQA 7, and absolute scores well below frontier flash.
- **Context window: 65/100.** 128K native / 262K YaRN is good for a tiny model. Capped by native 128K (not 256K+), 32K max output, and no long-context retrieval measurements.
- **Multimodal: 15/100.** Text-only model — no image/audio/video input. Capped at text-only floor.
- **Coding: 55/100.** HumanEval-Plus 79 / MultiPL-E 64 on base is strong for 1.3B-active; no SWE-bench/LCB for instruct. Capped by unverified real-world SWE coding and weak absolute coding vs larger models.
- **Cost efficiency: 98/100.** MIT open weights + free API promo + 1.3B active + runs on MacBook/DGX Spark at ~8GB memory = near-maximum cost efficiency for local/edge agentic work.
- **Overall Score: 50.6/100.** Mean of (58 + 60 + 65 + 15 + 55) / 5 = 50.6 → **51**. Best-fit recommendation: best-in-class tiny agentic MoE for laptop/edge agent loops where memory and cost dominate; prefer Ling-3.0-flash for production coding/reasoning or Ring-2.6-1T for deep thinking ceilings.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-13
- Method: fresh public internet research (HF inclusionAI/Ling-3.0-tiny + tiny-base, OpenRouter, Novita, aitoolsreview, kinonn-bot research vault, ollama); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
