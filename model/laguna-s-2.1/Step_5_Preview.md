# Laguna S 2.1 — findings by Step 5 Preview

- Source: Poolside (`poolside/Laguna-S-2.1`, released 2026-07-21)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1 (Poolside's agentic-coding MoE, ~118B-A8B)
- **Short description:** Poolside's bet that **training methodology beats parameter count**: an 8B-active MoE (118B total, 256 experts) trained on 4,096 H200s from 2026-05-22 and launched under nine weeks later, using RLCEF (reinforcement learning with code-execution feedback), 409K training environments and multi-harness rollouts. The result out-runs models with 5–6× its active parameters: TB 2.1 70.2% (vs DeepSeek-V4-Pro-Max's 64.0 at 49B active and Inkling's 63.8 at 41B), SWE-bench Multilingual 78.5%, SWE-Pro 59.4%, and DeepSWE 40.4% against DeepSeek-V4-Pro's 9.0% — a 4.5× gap on the hardest agentic-coding benchmark. It is also the only model in this roster credited with an independent mathematical discovery: a proof of Erdős problem #397 (open for 50 years), derived in 68 minutes in a sandbox with no Python — the model switched to Perl. Thinking is on by default (TB 2.1 60.4→70.2, DeepSWE 16.5→40.4) but not user-configurable. Weights are open under OpenMDW-1.1, quantized builds run on a single DGX Spark, and the API lists $0.10/$0.20 per million tokens (free at 256K).
- **Provider / access:** Hugging Face (`poolside/Laguna-S-2.1`, BF16/FP8/INT4/NVFP4); Vercel AI Gateway; Bedrock-style routing; runs locally on one DGX Spark.
- **Release:** 2026-07-21 (weights 2026-08-03).
- **Context window:** 1M tokens in thinking and no-thinking modes (a free version serves a smaller window).
- **Modalities:** Text in → text out (agentic coding and long-horizon tool use).
- **Pricing (as of 2026-10-09):** ~$0.10/M input, $0.20/M output (free at 256K on some routes); OpenMDW-1.1 open weights.
- **Architecture:** 118B total / 8B active MoE, 48 layers, sliding-window attention with per-head gating in 36 of 48 layers (per the NVFP4 card); internal Harbor-framework fork for agentic evals.

### Raw benchmarks found

Vendor (benchmarks as of 2026-07-21; Poolside agent harness on a Harbor fork, 500 max steps, sandboxed; mean pass@1, 4 attempts per task except DeepSWE/SWE Atlas/Toolathlon with 3):

- Terminal-Bench 2.1 (thinking): **70.2%** (60.4% no-thinking) — 11th on Poolside's overall board, 1st in weight class
- SWE-bench Multilingual: **78.5%** (Hy3 75.8, DS-V4-Pro 76.2)
- SWE-bench Pro (public): **59.4%** (Hy3 57.9, DS-V4-Pro 55.4; Sonnet 5 63.2, Grok 4.5 64.7)
- DeepSWE v1.1: **40.4%** (16.5% no-thinking) — vs DS-V4-Pro-Max 9.0%, GLM-5.2 44.0%, Fable 5 70.0
- SWE Atlas (Codebase QnA): **46.2%**; Toolathlon Verified: **49.7%** (Muse Spark 1.1 75.6)
- Full trajectories released at trajectories.poolside.ai

Third-party: Artificial Analysis does not list Laguna S 2.1; no GPQA/HLE/AIME/ARC-AGI/MMLU figure has been published for it.

### Normalized scores (1–100)

- **Tool use: 68/100.** TB 2.1 70.2% (thinking), Toolathlon 49.7% and SWE Atlas QnA 46.2% are a strong upper-mid agentic profile for 8B active — but no MCP Atlas, GDPval or τ-bench number exists, so the top of the band is unevidenced.
- **Reasoning: 55/100.** No GPQA/HLE/AIME/ARC-AGI/MMLU score has been published; the Erdős #397 proof (independent, 50-year-open problem) is striking qualitative evidence, so mid-band on structure rather than measurement.
- **Context window: 86/100.** A 1M-token window (thinking + no-thinking) is the ≥1M band (95–100), docked because no MRCR/RULER retrieval curve is published.
- **Multimodal: 12/100.** Text-only (text in → text out) — the methodology's text-only band (10–20).
- **Coding: 70/100.** SWE-bench Pro 59.4%, SWE-Multilingual 78.5%, DeepSWE 40.4% (4.5× DeepSeek-V4-Pro) and TB 2.1 70.2% make it the best agentic coder per active parameter in the roster; short of the frontier band that Muse Spark 1.1, Kimi K3 and Fable 5 occupy.
- **Cost efficiency: 97/100.** ~$0.10/$0.20 per million tokens (free at 256K) with OpenMDW-1.1 weights, 8B active parameters and single-DGX-Spark deployment — near the methodology's ~$0.1/$0.2 ≈ 97–99 tier.
- **Overall Score: 58/100.** Best-fit recommendation: the efficiency champion of agentic coding — 70.2% TB 2.1 and 40.4% DeepSWE at 8B active and $0.10/$0.20, runnable on one DGX Spark; no published reasoning/multimodal benchmarks and thinking that can't be tuned down.

---

## Signature

- Provided by: **Step 5 Preview (StepFun)** — 2026-10-09
- Method: public internet research (Poolside launch blog, Hugging Face model cards incl. NVFP4 variant, Vercel AI Gateway/LMStudio listings, aimadetools benchmark analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Laguna_XS_2.1.md`, using the same headings.
