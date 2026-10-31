# MiniMax M3 — findings by Solar Mini 4

> Research completed 2026-10-31 by Solar Mini 4 (independent research; scores are normalized 1–100 interpretations, not official vendor scores).

- **Source:** MiniMax / MiniMax M3
- **Date:** 2026-10-31 (UTC)
- **Overview & methodology:** `../../model-comparison.md` · **Log:** `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's native multimodal MoE model; claimed first open-weight model with frontier coding, agentic, and multimodal capability. Self-demonstrated feats: 12-hour ICLR paper reproduction, CUDA kernel 9.4x speedup, PostTrainBench #3.
- **Provider / access:** MiniMax API (api.minimax.io/v1/text/chatcompletion_v2) and M Plan subscription; open weights on Hugging Face (`MiniMaxAI/MiniMax-M3`) and GitHub (`MiniMax-AI/MiniMax-M3`) under a non-Apache custom license; local serving via SGLang/vLLM/transformers.
- **Release / knowledge:** Released May 31, 2026 (OpenRouter); knowledge cutoff January 2026 (model card). Full open-source release announced 2026-10-31.
- **IDs:** `minimax/minimax-m3` (OpenRouter); `MiniMaxAI/MiniMax-M3` (HF).
- **Context window:** 1,000,000 tokens total (guaranteed min 512K). MSA gives 9x prefill / 15x decode vs M2 at 1M, per-token compute 1/20.
- **Modalities:** Text, image, video input; text output; native multimodal; reasoning modes enabled / adaptive / disabled.
- **Pricing (2026-10-31):** Official ≈ $0.30 in / $1.20 out per 1M; OpenRouter ~$0.23/$0.96.
- **Architecture:** Sparse MoE ~428B total / ~23B active; MiniMax Sparse Attention (MSA) custom operator; non-Apache license.

### Raw benchmarks found

> Evidence mix: **estimates with confidence intervals** dominate (BenchGap/AA); a smaller set is **measured**. Vendor marketing claims are self-reported.

**Agent / tool use:**
- Terminal-Bench 2.1: **66.0%** measured (BenchGap); Vals AI 53.6% measured.
- SWE-bench Verified: **80.5%** measured (BenchGap); Vals SWE-bench 75.0%.
- SWE-bench Pro: **59.0%** measured; DeepSWE: **29.9%** estimated (weak).
- LiveCodeBench v6: **89.1%** estimated (high); Vals LiveCodeBench 82.2% measured.
- τ²-bench: **88.9%** measured; τ-Bench Banking 15.3% (AA).
- CyberGym: **69.2%** estimated (medium); AA Cyber Index **22.4%** measured.
- Agentic Index: **29.5%** (AA) — very low.
- BrowseComp: **83.5%** measured (self-reported > Opus 4.7 79.3).
- AA Coding Index **58.6%** measured; AA Agentic Index 29.5%.

**Reasoning / knowledge:**
- AA Intelligence Index (v5.0): **18.7%** measured — very low composite.
- GPQA Diamond: **92.9%** measured (AA); Vals GPQA Diamond **92.7%** measured.
- HLE: **39.0%** measured (AA); HLE with tools 51.7% estimated.
- CritPt: **3.7%** measured — severe weakness.
- MMLU **94.6%**; MMLU-Pro **85.9%**; MMLU-Redux **96.6%**; AA-MMMU-Pro **78.6%**; MMMU **85.2%**.
- IFBench **82.9%** measured; LRCR **83.0%** measured; τ²-bench **88.9%** measured.
- SciCode **47.1%** measured (AA).
- MathVision **87.0%**; MLVU **86.0%**; CharXiv **78.8%** estimated (high); Video-MME **85.4%** measured; C-Eval **91.2%** estimated.

**Coding:**
- SWE-bench Verified 80.5% measured; SWE-bench Pro 59.0%; DeepSWE 29.9%; LiveCodeBench v6 89.1%; TB2.1 66.0% measured.

**Long context / cost / speed:**
- MSA: 9x prefill / 15x decode vs M2 at 1M; per-token compute 1/20.
- Multimodal: text + image + video in, text out.

### Normalized scores (1–100)

- **Tool use: 65/100.** TB2.1 66% measured (mid-tier); Agentic Index 29.5% and DeepSWE 29.9% very low; SWE-bench Verified 80.5% and τ²-bench 88.9% strengths. Mixed.
- **Reasoning: 78/100.** GPQA Diamond 92.9% meets frontier bar; τ²-bench 88.9%, LRCR 83.0% solid; counterweights CritPt 3.7% (severe), HLE 39.0%, AA v5.0 Intelligence Index 18.7% (very low).
- **Context window: 96/100.** 1M input — ≥1M tier (95–100); 100 only with ≥98% retrieval at 512K+ (unverified).
- **Multimodal: 82/100.** Text + image + video in, text out.
- **Coding: 72/100.** SWE-bench Verified 80.5% and LiveCodeBench v6 89.1% strong; SWE-bench Pro 59.0%, DeepSWE 29.9%, SciCode 47.1%, TB2.1 66.0% drag down.
- **Cost efficiency: 96/100.** $0.30/$1.20 per 1M — among the cheapest frontier-class; OpenRouter $0.23/$0.96 even cheaper.
- **Overall Score: 79/100.** (65+78+96+82+72)/5 = 393/5 = 78.6 → half-up 79. Best fit: cost-efficient open-weight agentic coding model; treat vendor "three frontier capabilities" claims with caution.

## Signature

- Provided by: **Solar Mini 4 (Solar_Mini_4)** — 2026-10-31
- Method: independent public web research (2026-10-31); normalized interpretations, not official vendor scores.
- Reference URLs:
  - [MiniMax M3 official page](https://www.minimax.io/models/text/m3)
  - [MiniMax-AI/MiniMax-M3 GitHub](https://github.com/MiniMax-AI/MiniMax-M3)
  - [MiniMaxAI/MiniMax-M3 Hugging Face](https://huggingface.co/MiniMaxAI/MiniMax-M3)
  - [BenchLM — MiniMax M3 benchmarks](https://benchlm.ai/models/minimax-m3)
  - [BenchGap — MiniMax M3 benchmarks](https://benchgap.net/model/minimax-m3)

## Changelog

- 2026-10-31: created by Solar Mini 4 via independent research; spans all five quality dims; estimate-vs-measured distinctions noted; vendor feats flagged.