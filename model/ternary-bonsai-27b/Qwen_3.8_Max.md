# Ternary Bonsai 27B — findings by Qwen 3.8 Max

- Source: PrismML (`opencode/ternary-bonsai-27b`; open weights `prism-ml/Ternary-Bonsai-27B-gguf`)
- Date: 2026-11-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ternary Bonsai 27B
- **Short description:** PrismML's ternary-quantized ({−1, 0, +1}) compression of Alibaba's Qwen3.6-27B — a 27.8B dense multimodal reasoning model squeezed to ~5.9 GB (≈1.71 effective bits/weight, 9.1× smaller than FP16) under Apache 2.0, aimed at on-device / laptop agentic coding, tool use and long-document work. Distinct from the September successor "Ternary Bonsai 2 27B" (Qwen3.8-27B base, BenchLM 53.77).
- **Provider / access:** OpenCode Zen `opencode/ternary-bonsai-27b`; open weights on Hugging Face `prism-ml/Ternary-Bonsai-27B-gguf` (the 27B repo is GATED — access request required) in GGUF / MLX / AWQ; PrismML free-tier developer-preview API; atomic.chat iOS/Android app. Runs on LM Studio, Ollama, vLLM, Docker Model Runner, MLX, WebGPU, and PrismML's llama.cpp fork (packed-ternary kernel — stock llama.cpp cannot use the packed path).
- **Release / knowledge:** Released 2026-07-14; knowledge cutoff inherited from the Qwen3.6-27B base (not separately published).
- **IDs:** `opencode/ternary-bonsai-27b` (Zen); `prism-ml/Ternary-Bonsai-27B-gguf` (HF). No separate paid hosted API ID beyond the free developer preview.
- **Context window:** 262,144 tokens (262K) total; max output 262,144 — inherited from and preserved from the Qwen3.6-27B base (confirmed by BenchLM, kie.ai, regolo.ai, PrismML). No long-context retrieval benchmark (MRCR/RULER) published; community reports "degraded context handling" vs the FP16 base.
- **Modalities:** Text in/out + IMAGE input (4-bit vision tower; MMMU-Pro 68.96, Vision category 65.2). Reasoning yes (thinking mode, highest effort). Tool calling + structured JSON output yes (BFCL v3, TauBench). No audio/video input; no non-text output.
- **Pricing (as of 2026-11-09):** Free — Apache 2.0 open weights ($0 self-host) plus a free-tier developer-preview API. Only cost is your own hardware/electricity.
- **Architecture:** Dense 27.8B multimodal (Qwen3.6-27B base: linear-attention backbone + vision encoder). Ternary {−1, 0, +1} weights with FP16 group-wise scaling (one scale per 128 weights), ~1.71 effective bits/weight; 5.9 GB ideal / ~7.2 GB deployed GGUF (9.1× reduction from ~54 GB FP16). Speculative decoding via PrismML's DSpark drafter. PrismML "Intelligence Density" 0.40–0.416 (score/GB). Speed: ~134 tok/s (RTX 5090), ~58 tok/s (M5 Max), ~28–35 tok/s (RTX 3060 12 GB / 4070 Ti Super).

### Raw benchmarks found

> All numbers are PrismML's own 15-benchmark thinking-mode suite (highest reasoning effort), self-reported on the HF card / launch post and reproduced by kie.ai and regolo.ai. Values below are the **Ternary Bonsai 27B** column, with the Qwen3.6-27B FP16 baseline in parentheses. Artificial Analysis: **not tracked (404)**. BenchLM: tracked but **0 of 759** benchmarks covered → Unranked ("coming soon").

Agent / tool use:

- Agentic / Tool (BFCL v3, TauBench): **74.0** (FP16 base 80.0) — PrismML suite; tool calling is the category most degraded by low-bit quantization.
- Terminal-Bench 2.1 / GDPval-AA / SWE-Atlas / Tau3-Banking: **no verified public score found** for THIS (July) release — the successor Bonsai 2 later reported TB 2.1 52.8, but the original did not. PrismML's card acknowledges long-horizon agentic coding "is not yet a strong target of this release."

Reasoning / knowledge:

- Math (GSM8K, MATH-500, AIME25/26): **93.4** (FP16 base 95.3) — strongest retained category.
- Knowledge / STEM (MMLU-Redux, MuSR): **77.0** (FP16 base 83.1).
- Instruction following (IFEval, IFBench): **71.8** (FP16 base 78.4).
- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index: **no verified public score found** for this exact release.
- Aggregate: retains **~94.6–95%** of Qwen3.6-27B FP16 across the 15-benchmark suite.

Coding:

- Coding (HumanEval+, MBPP+, LiveCodeBench): **86.0** (FP16 base 88.7) — strong function-level coding.
- SWE-bench Verified / DeepSWE / SciCode / Terminal-Bench / Vibe Code Bench: **no verified public score found** for the original (first reported for Bonsai 2: SWE-bench Verified 60.8). Community (r/LocalLLaMA) reports it feels "benchmaxxed" — strong on the published suite, weaker in day-to-day coding.

Multimodal (vision):

- Vision (MMMU-Pro, OCRBench): **65.2** (FP16 base 72.6); MMMU-Pro specifically **68.96** — vision is the most-degraded category under ternary quantization.

Long context:

- 262,144-token window (preserved from base); **no MRCR / RULER / GraphWalks retrieval score reported**. Community notes degraded long-context handling vs FP16.

Overall (vendor suite):

- PrismML 15-benchmark Overall: **80.5** (FP16 base 85.0; 1-bit variant 76.1).

> Provenance & meta verification:
> - `model/ternary-bonsai-27b/meta.json` has TWO errors: (1) `contextWindow: "128,000 total"` — CONTRADICTED by every source (262,144 / 262K, inherited from Qwen3.6-27B); (2) `modalities: "Text in/out only"` — CONTRADICTED by the 4-bit vision tower + MMMU-Pro 68.96 (image input IS supported). Premise-corrected both above; recommend the orchestrator regenerate meta.json (262K context; text + image input).
> - Benchmark caveat: all scores are vendor-self-reported (PrismML's own suite), not independently reproduced; AA does not track it and BenchLM has 0/759 coverage for this exact model. Community sentiment ("benchmaxxed", unreliable tool use, degraded context) suggests real-world performance may sit below the published suite. Scores below normalize the published numbers with those caveats as caps.

### Normalized scores (1–100)

- **Tool use: 67/100.** BFCL v3 + TauBench 74.0 (vendor suite) is top-of-mid, but tool calling is the category most damaged by ternary quantization (80.0 → 74.0 vs FP16), no Terminal-Bench / GDPval / SWE-Atlas was published for this release, PrismML flags long-horizon agentic work as "not yet a strong target," and community reports unreliable real-world tool use — capped below the raw 74.
- **Reasoning: 76/100.** Strong math (AIME25/26 + MATH-500 + GSM8K = 93.4) and mid knowledge/STEM (MMLU-Redux + MuSR = 77.0) with ~95% FP16 retention; capped by the absence of GPQA Diamond / HLE / Intelligence Index for this exact build and the "benchmaxxed" caveat.
- **Context window: 73/100.** 262,144 tokens sits in the 200K–500K tier (200K = 70); interpolated to ~73 and held there (not higher) because no MRCR/RULER retrieval score was published and community reports degraded long-context handling vs the FP16 base.
- **Multimodal: 66/100.** Image input via a 4-bit vision tower (MMMU-Pro 68.96, Vision 65.2), text-only output, no audio/video — the "+image in" band (60–70); vision is the most-degraded category under quantization, so mid-band. (meta.json's "text in/out only" is wrong.)
- **Coding: 75/100.** HumanEval+ / MBPP+ / LiveCodeBench = 86.0 is strong function-level coding, but no SWE-bench Verified / DeepSWE / SciCode / Terminal-Bench was published for this release, PrismML flags long-horizon agentic coding as not-yet-targeted, and community calls it weaker in day-to-day coding — capped well below the 86 raw.
- **Cost efficiency: 100/100.** Apache 2.0 open weights ($0 self-host) plus a free-tier developer-preview API; only cost is your own hardware. $0 → 100 (the 27B HF repo is gated, and self-host needs ~6–8 GB VRAM/RAM plus KV cache).
- **Overall Score: 71/100.** Half-up mean of the five quality dims (67 + 76 + 73 + 66 + 75) / 5 = 71.4 → 71; converges exactly with the 2-rater cohort (71). Best fit: an extremely efficient on-device / laptop open-weight coder+reasoner (27B-class in ~6 GB, 262K context, Apache 2.0) — outstanding intelligence-per-GB, but treat vendor-suite numbers as optimistic and validate tool/agent reliability before production use.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-11-09
- Method: public internet research (PrismML launch/whitepaper figures via the HF card, kie.ai and regolo.ai deep dives, the BenchLM model page, and an NYU RITS family overview); scores are normalized 1–100 interpretations of the vendor's self-reported suite, not official vendor scores, and are capped by the independent-reproduction and community "benchmaxxed" caveats.
- Reference URLs:
  - [Hugging Face — prism-ml/Ternary-Bonsai-27B-gguf (official model card, gated)](https://huggingface.co/prism-ml/Ternary-Bonsai-27B-gguf)
  - [Kie.ai — What Is Bonsai 27B? PrismML's 3.9 GB Phone-Ready LLM (15-benchmark suite table, specs, Apache 2.0)](https://kie.ai/blog/what-is-bonsai-27b)
  - [Regolo.ai — Bonsai 27B Explained: How a 27B Model Runs Locally (retention %, tool-calling degradation, throughput)](https://regolo.ai/bonsai-27b-explained-how-a-27b-model-runs-locally/)
  - [BenchLM — Ternary Bonsai 27B (tracked, 0/759 coverage, Unranked)](https://benchlm.ai/models/ternary-bonsai-27b)
  - [NYU RITS — Bonsai 2 27B (family context: July original on Qwen3.6 base vs September successor on Qwen3.8)](https://rits.shanghai.nyu.edu/ai/bonsai-2-27b-qwen38-in-5-9-gb/)
- Future sources: independent third-party reproductions (especially agentic/tool reliability and vision) or a BenchLM-scored entry would let a future pass lift Tool/Coding; add a new file beside this one using the same headings.
