# Gemma 4 26B A4B — findings by Laguna S 2.1

- Source: Artificial Analysis (`https://artificialanalysis.ai/models/gemma-4-26b-a4b`), BenchLM (`https://benchlm.ai/models/gemma-4-26b-a4b`), Hugging Face (`https://huggingface.co/google/gemma-4-26B-A4B-it`), Google DeepMind Technical Report (`https://arxiv.org/abs/2607.02770`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B (Reasoning)
- **Short description:** Google DeepMind's open-weights MoE model (25.2B total / 3.8B active, Apache 2.0) with 256K context, text+image(+video) input, 4B-class inference speed, and configurable thinking mode. Best for cheap high-throughput image+text agents.
- **Provider / access:** Google; managed API via 10 providers (per AA); self-host free (Apache 2.0, `noFreeId: true` per `meta.json`); OpenCode Zen: `google/gemma-4-26b-a4b` (per `meta.json`)
- **Release / knowledge:** Released April 2, 2026; knowledge cutoff January 2025 (per HF model card)
- **IDs:** `google/gemma-4-26b-a4b` (OpenRouter, OpenCode Zen, per `meta.json`); `google/gemma-4-26B-A4B-it` (HuggingFace, instruction-tuned); `google/gemma-4-26B-A4B` (base, pre-trained)
- **Architecture:** Mixture-of-Experts (MoE); 25.2B total parameters, 3.8B active; 30 layers; 8 active / 128 total + 1 shared experts; sliding window 1024 tokens; hybrid attention (local sliding window + global); Proportional RoPE (per HF model card)
- **Context window:** 262,144 (256k) (per AA, HF model card, and `meta.json`); 512 tokens sliding window
- **Modalities:** Text, image, and video input; text output (per AA and HF model card code examples); `meta.json` states "Text, image in; text out" but model card includes video input code and AA lists video support
- **Pricing (as of 2026-10-08):** $0.07–0.10 input / $0.22–0.40 output per 1M tokens (AA median across 10 providers: $0.10/$0.37; `meta.json`: OpenRouter ~$0.09/$0.30, Bedrock/Snowflake ~$0.13/$0.40); 40% cache discount; `noFreeId: true`; self-host $0 (Apache 2.0)
- **Reasoning:** Yes (configurable thinking mode, chain-of-thought; per HF model card and AA)
- **Speed:** N/A (not reported on AA; "4B-class speed" per `meta.json` short description)
- **TTFT:** Not reported
- **License:** Apache 2.0 (per HF, AA, and `meta.json`)
- **Status:** Current (not deprecated)

### Raw benchmarks found

> Sources: Artificial Analysis (`https://artificialanalysis.ai/models/gemma-4-26b-a4b`), BenchLM (`https://benchlm.ai/models/gemma-4-26b-a4b`), Hugging Face model card (`https://huggingface.co/google/gemma-4-26B-A4B-it`), Google DeepMind Technical Report (`https://arxiv.org/abs/2607.02770`). BenchLM covers 19 of 623 benchmarks. AA Intelligence Index = 17 (estimated, rank #15/142, median for class: 8). Confidence: high for reported benchmarks.

Agent / tool use:

- **GDPval-AA:** **3.4%** — (BenchLM citing AA; normalized score)
- **GDPval-AA (Elo):** **713** — (BenchLM citing AA; weak, below ~900+ frontier)
- **τ²-bench:** **43.6%** — (BenchLM citing AA; moderate)
- **Terminal-Bench 4.0:** no verified public score found (not reported; part of Intelligence Index but not broken out)
- **Terminal-Bench 2.1:** no verified public score found (not reported; HF model card mentions evaluation but no score)
- **AA-Briefcase v1.1:** no verified public score found
- **AA Agentic Index:** no verified public score found
- **OSWorld-Verified:** no verified public score found
- **Claw-Eval:** no verified public score found

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index:** **17** — (AA v4.3.2, estimated rank #15/142, median: 8; per AA model page)
- **Artificial Analysis Intelligence Index (BenchLM):** **16.7%** — (BenchLM citing AA; consistent with AA)
- **AA-GPQA Diamond:** **79.2%** — (BenchLM citing AA; moderate-strong)
- **GPQA Diamond:** **82.3%** — (HuggingFace eval results and model card table; moderate-strong)
- **AA-HLE:** **19.3%** — (BenchLM citing AA; weak)
- **HLE (no tools):** **8.7%** — (HF model card; very weak)
- **HLE (with search):** **17.2%** — (HF model card; weak)
- **AA-LCR:** **65.7%** — (BenchLM citing AA; moderate)
- **AA-MMMU-Pro:** **69.2%** — (BenchLM citing AA; moderate-strong)
- **CritPt:** **0.0%** — (BenchLM citing AA; weak)
- **AA-Omniscience Index:** **-50.8%** — (BenchLM citing AA; very poor)
- **AA-Omniscience Accuracy:** **19.1%** — (BenchLM citing AA; very weak)
- **AA-Omniscience Hallucination Rate:** **86.4%** — (BenchLM citing AA; very high)
- **MMLU-Pro:** **82.6%** — (HF model card; strong)
- **MMMLU:** **86.3%** — (HF model card; strong)
- **BigBench Extra Hard:** **64.8%** — (HF model card; moderate)
- **AA-IFBench:** **72.4%** — (BenchLM citing AA; moderate)

Coding:

- **AA Coding Index:** **39.3%** — (BenchLM citing AA; below median)
- **AA-SciCode:** **40.0%** — (BenchLM citing AA; weak, below ~55% frontier)
- **LiveCodeBench v6:** **77.1%** — (HF model card; moderate-strong)
- **AIME 2026 (no tools):** **88.3%** — (HF model card; strong, but math not coding)
- **SWE-bench Verified:** no verified public score found (not reported)
- **DeepSWE:** no verified public score found
- **Terminal-Bench 2.1:** no verified public score found

Multimodal & grounded:

- **MMMU-Pro:** **73.8%** — (HF model card and BenchLM citing AA: 69.2%; strong)
- **MATH-Vision:** **82.4%** — (HF model card; strong)
- **OmniDocBench 1.5:** **0.149** (edit distance, lower is better) — (HF model card; moderate)
- **Video understanding:** supported (per HF model card and AA, video input supported)
- **RealWorldQA:** no verified public score found
- **CountBench:** no verified public score found
- **ScreenSpot Pro:** no verified public score found

Long context:

- **MRCR v2 (8 needle 128k):** **44.1%** — (HF model card; weak for 256K context)
- **AA-LCR:** **65.7%** — (BenchLM citing AA; moderate)
- **RULER:** no verified public score found (not reported)

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = half-up mean of the five quality dims (see `RULES.md`). Cost excluded from Overall.
> Confidence: moderate — 19 public benchmarks found across 3 sources (AA, BenchLM, HuggingFace). AA Intelligence Index is estimated (not yet independently computed). Note: `meta.json` flags the tracked tier as `opencode/gemma-4.26b-a4b` (OpenCode Zen); model card data is for `google/gemma-4-26B-A4B-it` (HuggingFace).

- **Tool use: 38/100.** GDPval-AA at 3.4% (Elo 713) is weak — well below the ~900+ Elo frontier. τ²-bench at 43.6% is moderate. No Terminal-Bench 4.0 or 2.1 scores (not publicly broken out from Intelligence Index). No AA-Briefcase, AA Agentic Index, OSWorld, or Claw-Eval. With only GDPval-AA (weak) and τ²-bench (moderate), tool use is estimated at 38.

- **Reasoning: 47/100.** Intelligence Index 17 → base = 17 + 30 = 47 (per scoring methodology). GPQA Diamond at 82.3% (HF) / 79.2% (AA) is moderate-strong (below 90% frontier). AA-HLE at 19.3% / HLE 8.7-17.2% is very weak (below ~37.5% frontier). CritPt at 0.0% is at the frontier threshold. AA-LCR at 65.7% is moderate (below ~95% frontier). AA-Omniscience Index at -50.8 is very poor (high hallucination rate 86.4%, accuracy only 19.1%). MMLU-Pro at 82.6% is strong. Despite strong knowledge benchmarks (MMLU-Pro 82.6%, GPQA 82.3%), the terrible hallucination metrics and weak HLE drag down the score.

- **Context window: 72/100.** 262,144 (256k) tokens (per AA, HF model card, and `meta.json`). ≥256K tier → 72. MRCR v2 at 44.1% is weak for the 256K context (frontier ~95%+ at 256K). AA-LCR at 65.7% confirms moderate long-context reasoning. No verified ≥98% token-retrieval at longer ranges.

- **Multimodal: 70/100.** Text, image, and video input; text output (per AA and HF model card code examples; `meta.json` says "Text, image in; text out" — video support confirmed in code examples and AA). Per methodology: "+image in = 60–70, +video in = 70–80". With text+image+video in, text out: 70. No audio input (not supported on 26B A4B per HF model card: "Audio: E2B, E4B, and 12B — not 26B A4B"), no non-text output.

- **Coding: 48/100.** AA Coding Index at 39.3% is below average. AA-SciCode at 40.0% is weak (below ~55% frontier). LiveCodeBench v6 at 77.1% (HF) is moderate-strong (frontier ~85%+). AIME 2026 at 88.3% is strong but measures math, not coding. No SWE-bench Verified, no DeepSWE score. The weak AA Coding Index and SciCode offset the decent LiveCodeBench; estimated at 48.

- **Cost efficiency: 65/100.** $0.07–0.10 input / $0.22–0.40 output per 1M tokens (AA median across 10 providers: $0.10/$0.37; `meta.json` OpenRouter: $0.09/$0.30). AA notes model is "somewhat expensive" compared to similar-size open-weight peers (median: $0.03 input, $0.15 output). At $0.10/$0.37, the input price is below $0.15 (→ 80) but the output price ($0.37) and blended rate (~$0.15) fall in the "$0.15–$1" tier (→ 65). `noFreeId: true` (no Zen free tier). Self-host free (Apache 2.0). Using 65 as a balanced estimate.

- **Overall Score: 55/100.** Mean of five non-cost dimensions: (38 + 47 + 72 + 70 + 48) / 5 = 275 / 5 = 55. BenchLM overall 46/100 (#115/887, 19 of 623 benchmarks — conservative due to partial coverage). Strong multimodal capabilities (70) with image+video input, decent knowledge benchmarks (MMLU-Pro 82.6%, GPQA 82.3%), and moderate long-context (65.7% AA-LCR). Severely limited by very weak agentic performance (GDPval-AA Elo 713), poor hallucination metrics (Omniscience Index -50.8, Accuracy 19.1%, Hallucination 86.4%), weak coding (AA Coding Index 39.3%), and only 19 of 623 benchmarks covered.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-08
- Method: public internet research via Artificial Analysis, BenchLM, HuggingFace, and Google DeepMind Technical Report; scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `model/` findings files during research.
- Notes: `meta.json` tracks `opencode/gemma-4.26b-a4b` (OpenCode Zen); model card data is for `google/gemma-4-26B-A4B-it` (HuggingFace) — same model, different deployment. AA Intelligence Index is "Estimated" (not yet independently computed, per AA model page). BenchLM covers 19 of 623 benchmarks (partial coverage, conservative overall score). `noFreeId: true` — no free Zen tier; self-host is free (Apache 2.0).
- Future sources: add a new file next to this one, e.g. `Gemma_4_26B_A4B_Tech_Report.md`, using the same headings.

---
