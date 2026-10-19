# Laguna S 2.1 — findings by Claude Opus 4.6

- Source: Poolside / Laguna S 2.1 (`poolside/laguna-s-2.1`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside's 118B/8B-active open-weights MoE model with 1M context, purpose-built for agentic coding and long-horizon software engineering. Features native interleaved reasoning (thinking mode) and runs on a single DGX Spark. Released under OpenMDW-1.1 license.
- **Provider / access:** OpenRouter `poolside/laguna-s-2.1`. Self-host via Hugging Face. No Zen Free ID.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff approximately early-mid 2026.
- **IDs:** `poolside/laguna-s-2.1` (no Free ID on Zen; free OpenRouter endpoint at 256K)
- **Context window:** 1M tokens (OpenRouter free endpoint capped at 256K). Verified via Poolside documentation.
- **Modalities:** Text input/output only (no vision). Tool calls supported. Native thinking mode for interleaved reasoning.
- **Pricing (as of 2026-10-19):** $0.10/$0.20 per 1M ($0.01 cache read) on OpenRouter 1M endpoint. Open weights under OpenMDW-1.1 (self-host free on DGX Spark with 8B active).
- **Architecture:** 118B total parameters, ~8B active (MoE with top-8/10 routing + shared expert). NVFP4/FP8/INT4 quantizations. Fits on a single NVIDIA DGX Spark or Apple Silicon pool. OpenMDW-1.1 license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.2%** (with thinking mode enabled; MarktechPost / Poolside report)
- Tau3-Banking: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- MMLU: no verified public score found

Coding:

- SWE-bench Multilingual: **78.5%** (Poolside report — tops their evaluation table; MarktechPost)
- SWE-bench Verified: no verified public score found for S 2.1 specifically
- LiveCodeBench: no verified public score found

Long context:

- 1M native context. No RULER/MRCR scores published.

### Normalized scores (1–100)

- **Tool use: 58/100.** Terminal-Bench 70.2% with thinking mode is competitive mid-tier. Native interleaved reasoning benefits multi-step tool use. Capped by lack of BFCL/Tau-bench and trailing top agentic models.
- **Reasoning: 52/100.** No published GPQA/HLE/MMLU scores. Native thinking mode suggests decent reasoning, but capabilities are unverified on standard benchmarks. Capped by complete lack of reasoning benchmark data.
- **Context window: 92/100.** 1M tokens per tier mapping (1M = 90-95). Free endpoint capped at 256K. Scored at 92 for the full 1M capability.
- **Multimodal: 15/100.** Text-only model. No image, audio, or video. Fixed at 15.
- **Coding: 62/100.** SWE-bench Multilingual 78.5% is very strong. Terminal-Bench 70.2% shows solid coding-adjacent performance. Capped by lack of SWE-bench Verified and LiveCodeBench scores.
- **Cost efficiency: 90/100.** $0.10/$0.20 per 1M is extremely cheap. Free OpenRouter endpoint at 256K. Open weights for self-hosting on consumer-accessible DGX Spark. Near-maximum value.
- **Overall Score: 56/100.** Mean of (58 + 52 + 92 + 15 + 62) / 5 = 55.8 → 56. A highly efficient open-weight coding model with exceptional context window and strong multilingual SWE performance. Capped by text-only modality and lack of reasoning benchmarks. Best for cost-conscious teams needing long-context agentic coding.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-19
- Method: Public internet research cross-referencing MarktechPost, NVIDIA documentation, vLLM, MindStudio, and Hugging Face; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
