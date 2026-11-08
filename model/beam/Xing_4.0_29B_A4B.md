# Reflection Beam 1.0 — findings by Xing 4.0 29B A4B

- Source: `reflection/Beam-1.0-501B-A23B`, Apache 2.0 open weights on HuggingFace
- Date: 2026-11-08 (UTC) — benchmarks extracted from HF model card + eval leaderboards
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Reflection Beam 1.0 (Beam 501B A23B MoE)
- **Short description:** Reflection's first open-weight model, sparse MoE (501B/23B) targeting agentic coding, token-efficient reasoning, and long-horizon tool use. 1M context, text-only, open weights.
- **Provider / access:** HuggingFace `reflection/Beam-1.0-501B-A23B`; Apache 2.0 open weights; inference providers via HF safetensors deployment. No Chat Completions pricing endpoint found — model shipped as open weights at no cost.
- **Release / knowledge:** Released October 2026; knowledge cutoff June 30, 2026.
- **IDs:** `reflection/Beam-1.0-501B-A23B` (HF); OpenCode Zen Free entry uncertain pending sync verification.
- **Context window:** 1M total tokens — verified via HF model card spec. Max output not separately specified.
- **Modalities:** Text in / out; reasoning yes (gated GQA); tool calls yes (MCP integration, browsing); JSON mode inferred from agentic capabilities.
- **Pricing (as of 2026-11-08):** Free $0/$0 — open-weight release on HuggingFace, no commercial API pricing documented.
- **Architecture:** 501.3B total / 23.4B active; 52 layers (3 dense + 49 MoE); Gated GQA + Sliding Window Attention; 256 experts; 152k vocab; BF16/FP8/NVFP4 numerics.

### Raw benchmarks found

All benchmarks marked BF16 unless noted (HF model card table, temp=0.7, top_p=0.99).

Agentic Coding / Terminal:

- Terminal-Bench 2.1: **80.1%** (BF16)
- MCP Atlas: **80.8%** (BF16)
- DeepSearchQA w/ context management: **80.5%** (BF16)
- BrowseComp w/ context management: **76.8%** (BF16)
- AutomationBench (public split only): **39.3%** (BF16)
- SWE Atlas Codebase QnA: **31.8%** (BF16)

Reasoning:

- AIME 2026: **97.7%** (BF16)
- GPQA Diamond: **90.6%** (BF16)
- HLE no tools: **36.0%** (BF16)
- HLE with tools: **51.1%** (BF16)
- SciCode: **49.2%** (BF16)
- CriPT AA: **16.3%** (BF16)
- LiveCodeBench: **88.3%** (BF16)
- LongBench v2: **67.5%** (BF16)
- IFBench: **79.6%** (BF16)

Coding:

- SWE-bench Verified: **81.6%** (BF16)
- SWE Bench Pro v2-Hard: **76.5%** (BF16)
- SWE Bench Pro v1: **66.1%** (BF16)
- DeepSWE v1.1: **43.3%** (BF16)
- LiveCodeBench: **88.3%** (BF16)
- SciCode: **49.2%** (BF16)
- SWE Atlas Codebase QnA: **31.8%** (BF16)

### Normalized scores (1–100)

- **Tool use: 73/100.** Strong MCP Atlas (80.8%), DeepSearchQA (80.5%), Terminal-Bench (80.1%) validate strong agent/tool orchestration; weaker AutomationBench (39.3%) and SWE Atlas (31.8%) pull composite down.
- **Reasoning: 86/100.** Near-perfect AIME 2026 (97.7%) and top GPQA Diamond (90.6%) place this at frontier reasoning; HLE with tools 51.1% caps upper range.
- **Context window: 95/100.** Official 1M claimed; per tier ≥1M = 95–100 (no retrieval-at-512K verified → 95 floor).
- **Multimodal: 15/100.** Text-only verified (input/output both text).
- **Coding: 72/100.** SWE-bench Verified (81.6%), LiveCodeBench (88.3%), Terminal-Bench (80.1%) strong; DeepSWE (43.3%) and SWE Atlas (31.8%) pull coding index down; SciCode (49.2%) mid-tier.
- **Cost efficiency: 100/100.** Free open weights, $0/$0.
- **Overall Score: 68/100.** Mean of Tool (73) + Reasoning (86) + Context (95) + Multimodal (15) + Coding (72) = 341 / 5 = 68.2.

---

## Signature

- Provided by: **Xing 4.0 29B A4B** — 2026-11-08
- Method: public internet research; HF model card benchmarks normalized per `model-comparison.md` methodology (v4, cost excluded from Overall).
- Reference URLs:
  - [Reflection Beam 1.0 Model Card](https://huggingface.co/reflection/Beam-1.0-501B-A23B)
  - [HF Evaluation Results Leaderboard](https://huggingface.co/docs/hub/eval-results)
  - [HF Eval Results YAML](https://huggingface.co/reflection/Beam-1.0-501B-A23B/blob/main/.eval_results/Beam-1.0-501B-A23B.yaml)
  - [ScaleAI SWE-bench Pro leaderboard](https://datasets.scale.com/swebench)
  - [DeepSWE v1.1 dataset](https://huggingface.co/datasets/datacurve/deep-swe)

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
