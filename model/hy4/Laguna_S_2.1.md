# Hy4 — findings by Laguna S 2.1

- Source: Tencent (`hy4`)
- Date: 2026-10-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4 preview
- **Short description:** Tencent's August 2026 open-weights MoE flagship (770B params / 49B activated per token, 1M context), optimized for coding, finance, and long-horizon agentic work with native chain-of-thought reasoning.
- **Provider / access:** Self-hosted open weights (Apache 2.0); `tencent/Hy4-preview` on Hugging Face and ModelScope; served via vLLM/SGLang. No commercial API (noFreeId).
- **Release / knowledge:** Released August 28, 2026. Training data through mid-2025.
- **IDs:** `tencent/Hy4-preview` (Hugging Face), `Tencent-Hunyuan/Hy4-preview` (ModelScope)
- **Context window:** 1,048,576 total (960K input / 64K output per `meta.json`)
- **Modalities:** Text in / text out
- **Pricing (as of 2026-10-11):** Apache 2.0 open weights, self-hosted, $0
- **Architecture:** 770B total params, 49B active per token (MoE: 256 routed experts + 1 shared, top-8 activated), 78 layers, Gated DSA attention, iHC residuals, native MTP layer for speculative decoding
- **Reasoning:** Yes — chain-of-thought mode (defaults to "high" deep CoT)

### Raw benchmarks found

Benchmark results from Hugging Face model-card leaderboard entries (verified public):

Agent / tool use:

- Terminal-Bench 2.1: **85.4%** (harborframework/terminal-bench-2.1 leaderboard on HF)
- Toolathlon Verified: **74.1%** (hkust-nlp/Toolathlon leaderboard on HF)
- Apex Agents: **37.1%** (mercor/apex-agents leaderboard on HF)

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (Idavidrein/gpqa · Diamond leaderboard on HF)

Coding:

- SWE-bench Multilingual: **82.9%** (SWE-bench/SWE-bench_Multilingual leaderboard on HF)
- SWE-bench Pro: **65.7%** (ScaleAI/SWE-bench_Pro leaderboard on HF)
- DeepSWE: **64.3%** (datacurve/deep-swe leaderboard on HF)

### Normalized scores (1–100)

- **Tool use: 86/100.** Terminal-Bench 2.1 at 85.4% and Toolathlon at 74.1% are strong; Apex Agents 37.1% is weak but measures a different agentic distribution. TB2.1 near frontier (ref ~88%+ for 90–100).
- **Reasoning: 92/100.** GPQA Diamond 92.3% places at frontier level (ref: 90%+ → 90–100).
- **Context window: 95/100.** 1M tokens total (960K in / 64K out); top tier per methodology.
- **Multimodal: 15/100.** Text in / text out only.
- **Coding: 80/100.** SWE-bench Multilingual 82.9%, SWE-bench Pro 65.7%, DeepSWE 64.3%; strong but below frontier refs (DeepSWE 74%+, TB2.1 85%+).
- **Cost efficiency: 100/100.** Apache 2.0 open weights, self-hosted, $0.
- **Overall Score: 74/100.** Mean of five quality dims: (86+92+95+15+80)/5 = 73.6 → 74. Strong open-weights flagship; text-only and mid-tier coding cap the score.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-11
- Method: public internet research via Hugging Face model card (leaderboard evaluation results section), Artificial Analysis model page, and Google developers documentation; scores are normalized 1–100 interpretations, not official vendor scores.

---

## Submission checklist

1. All placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/hy4/Laguna_S_2.1.md`.
3. Signature block filled in; relative links resolve from `model/hy4/`.
4. No benchmark invented; verified public scores found for 7 benchmarks via HF leaderboards.
