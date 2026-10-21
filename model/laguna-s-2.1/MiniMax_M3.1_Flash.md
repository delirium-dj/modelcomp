# Laguna S 2.1 — findings by MiniMax M3.1 Flash

- Source: Poolside (Laguna S 2.1), `poolside/Laguna-S-2.1`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside's July 2026 open-weight (OpenMDW 1.1) MoE for agentic coding — 118B total / ~8B active, a **1M context**, Terminal-Bench 2.1 70.2% (ranked #12 at launch), SWE-bench Pro 59.4%, and small enough to run on a single NVIDIA DGX Spark.
- **Provider / access:** Hugging Face `poolside/Laguna-S-2.1` (OpenMDW-1.1; FP8/NVFP4/INT4/GGUF/MLX quants and a DFlash drafter), OpenRouter `poolside/laguna-s-2.1` ($0.09/$0.18 with a 90% running discount, cache $0.009; a 256K free route at `poolside/laguna-s-2.1:free` is deprecated), Poolside's own 1M endpoint ($0.10/$0.20, cache $0.01), nano-gpt, Pioneer, Vercel.
- **Release / knowledge:** **2026-07-21** (Poolside blog "Introducing Laguna S 2.1"; models.dev agrees). Knowledge cutoff not published.
- **IDs:** `poolside/Laguna-S-2.1` (HF), `poolside/laguna-s-2.1` (OpenRouter, models.dev), `opencode/laguna-s-2.1-free` (retired free slot).
- **Context window:** **1,048,576** tokens (48 layers: 12 global + 36 sliding-window with a 512 window, GQA 8 KV heads × head dim 128, vocab 100,352).
- **Modalities:** text in / text out only (no vision).
- **Pricing (as of 2026-10-20):** **$0.10/M in, $0.20/M out, $0.01/M cached** (Poolside's dedicated 1M endpoint); OpenRouter lists $0.09/$0.18 after a 90% provider discount; self-host $0 (OpenMDW-1.1).
- **Architecture:** MoE, **118B total / ~8B active** (256 routed experts with top-10 + 1 shared), BF16 weights ≈236 GB; pre-training started 2026-05-22 on 4,096 H200s and shipped in under nine weeks.

### Raw benchmarks found

> Poolside's launch figures and HF eval yamls only — there is no Artificial Analysis page for this model and BenchLM carries just six sourced rows.

Agent / tool use:

- Terminal-Bench 2.1: **70.2%** — ranked **#12** on the Terminal-Bench 2.1 leaderboard as of 2026-07-21; **60.4%** in no-thinking mode
- SWE-bench Multilingual: **78.5%** (71% no-think at 23k tokens → 79% think at 101k) · SWE-bench Pro: **59.4%** (53 → 59) · DeepSWE v1.1: **40.4%** (16.5 → 40.4) · SWE-Atlas Codebase QnA: **46.2%** · Toolathlon Verified: **49.7%**
- Tau2-bench / Tau3 / GDPval-AA / OSWorld / AutomationBench / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA / HLE / AIME / MMLU-Pro / FrontierMath: **no verified public score found** — Artificial Analysis has no page for this model (`/models/laguna-s-2-1` → 404) and BenchLM has no general-reasoning rows
- LCR / MRCR: no verified public score found

Coding:

- Terminal-Bench 2.1: **70.2%** (the one hard number) · SWE-bench Pro **59.4%** · SWE-bench Multilingual **78.5%** · DeepSWE **40.4%** · LiveCodeBench: no verified public score found · SWE-bench Verified: no verified public score found

Long context:

- No MRCR / RULER measurement published, despite the 1M window.

### Normalized scores (1–100)

- **Tool use: 55/100.** Terminal-Bench 2.1 70.2% and Toolathlon-Verified 49.7% are mid, with no τ², GDPval, OSWorld or MCP-Atlas figure to lift the agentic picture.
- **Reasoning: 45/100.** Not one general-reasoning benchmark (GPQA, HLE, AIME, MMLU-Pro) has been published for this model, so the dimension is scored as unmeasured with a penalty.
- **Context window: 85/100.** A genuine 1,048,576-token window with a 12-global/36-local attention mix, discounted for the absence of any published retrieval measurement.
- **Multimodal: 15/100.** Text-in/text-out only.
- **Coding: 66/100.** Terminal-Bench 2.1 70.2%, SWE-bench Multilingual 78.5%, SWE-bench Pro 59.4% and DeepSWE 40.4% are mid-band, with no SWE-bench Verified or LiveCodeBench figure.
- **Cost efficiency: 97/100.** $0.10/M in and $0.20/M out on Poolside's own 1M endpoint (or $0.09/$0.18 on OpenRouter) is among the cheapest routes in the catalogue, and OpenMDW-1.1 weights are free to self-host.
- **Overall Score: 53/100.** Mean of the five quality dims = (55 + 45 + 85 + 15 + 66) / 5 = 53.2 → **53**. Best fit: affordable agentic coding that has to run on your own single DGX Spark — the economics and the 1M window are the story, the published evidence is thin.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (Poolside launch blog and Hugging Face model card/README, Artificial Analysis absence check, BenchLM, models.dev, OpenRouter API); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Laguna_XS_2.1.md`, using the same headings.
