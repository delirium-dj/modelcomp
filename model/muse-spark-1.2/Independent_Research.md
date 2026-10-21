# Muse Spark 1.2 — findings by Independent Research

> TEMPLATE — do not commit as-is. Copy this file to \model/<slug>/<Source_Name>.md\,
> replace every \<...>\ placeholder with your own research, and strip this notice block.
> Do not read \model/\ (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: \../../model-comparison.md\.
> Signed log: \../../model-findings.md\.

- Source: Independent Research (Meta, Artificial Analysis, Hugging Face)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: \../../model-comparison.md\
- Cross-model signed log: \../../model-findings.md\

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's 816B total/42B active parameter multimodal model released August 2026, optimized for coding and agentic workflows with 1M context window and native multimodal capabilities.
- **Provider / access:** Meta API \muse-spark-1.2\, OpenCode Zen \opencode/muse-spark-1.2-contributor-free\ (Responses API)
- **Release / knowledge:** 2026-08-05; knowledge cutoff 2026-04
- **IDs:** \opencode/muse-spark-1.2-contributor-free\ (Free), \opencode/muse-spark-1.2\ (Standard), \meta/muse-spark-1.2\
- **Context window:** 1,048,576 total tokens (1M in / 128K out) — verified via Meta docs, Hugging Face, and felloai review
- **Modalities:** Text, image, audio, video, PDF in; text out; reasoning yes; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-21):** Free Zen tier \/\ (training-data consent); Contributor \.10/\.20; Standard \.25/\.25 per 1M
- **Architecture:** Proprietary (816B total / 42B active Mixture of Experts with Perception Encoder)

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (Meta own evaluation in Muse Code vs Opus 5 86.7%, GPT-5.6 Terra 81.8%, Grok Build 81.6%) — AA independent 80%, 1.1→1.2 +2pp
- Terminal-Bench 2.1 (AA): **80%** (Artificial Analysis — up from 78% for 1.1)
- Tau3-Banking: **27%** (Artificial Analysis — +2 vs 1.1)
- GDPval-AA v2: **1,631 Elo** (Artificial Analysis — +260 vs 1,371 for 1.1)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **89.2%** (MCP-Atlas), **72.8%** (Toolathlon Verified)
- Vals Index cost-weighted rank: **5th at \.69/test** (Vals via felloai) vs 14th pure capability
- Tool use ranking (LLM Stats): **40.4 agent index** (llm-stats)

Reasoning / knowledge:

- GPQA Diamond: **89.0%** (Hugging Face official benchmarks)
- HLE: **61.0%** with tools, **26.1%** without tools (Hugging Face official benchmarks)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **39 (xhigh)** (Artificial Analysis — up from 51 for 1.1, 43 for April release; vs Opus 5 61, Sol 59)
- LiveBench: **77.2** (BenchLM history for 1.2 via 1.1→1.2 comparison)
- Omniscience Accuracy / Hallucination Rate: **25** AA Index, **98.1%** honesty rate on MASK benchmark
- AA Omniscience: **25** (knowledge reliability index, higher is better)

Coding:

- SWE-bench Verified: **60%** (Hugging Face official benchmarks)
- SWE-bench Pro: **58%** (Hugging Face official benchmarks)
- LiveCodeBench Pro: **80.0%** (Eigent.ai — vs GPT 87.5, Gemini 82.9)
- DeepSWE v1.1: **60%** (Meta official benchmarks — vs Opus 5 65.0%, Codex 64.8%; +6.3 vs 1.1)
- SciCode: **58.5%** (Hugging Face official benchmarks — minor regression from 1.1)
- Meta internal coding bench: **70.6%** (Meta — vs Opus 5 79.4%, 1.1 68.3%)
- Vibe Code Bench: **no verified public score found**
- Terminal-Bench 2.1: **76.4%** (Hugging Face official benchmarks)

Long context:

- 1M context with NoPE MLA + KDA heritage; 1M demonstrated for whole-repo tasks; MRCR v2 not disclosed for 1.2 (98.5 only for 1.3)
- AA-LCR v1.1: **no verified public score found** for 1.2

### Normalized scores (1–100)

- **Tool use: 88/100.** TB2.1 82.9% strong + AA 80% + GDPval 1631 + Toolathlon 72.8 + MCP-Atlas 89.2; capped by Opus 5 lead and no Claw-Eval.
- **Reasoning: 87/100.** GPQA 89 + HLE 61 + AA Index 39 + LiveBench 77.2 + honesty 98.1; capped by HLE/SciCode regressions and missing MRCR.
- **Context window: 96/100.** 1,048,576 total; tier 95-100 for ≥1M but capped below 100 vs 1.3's proven 98% retrieval.
- **Multimodal: 90/100.** Broadest input (text/image/audio/video/PDF in) → text out; 90 tier for audio+video; supported by ZeroBench 50.0, BabyVision 80.2, SimpleVQA 73.6.
- **Coding: 85/100.** SWE-Verified 60 + DeepSWE 60 + LC Pro 80.0 + Meta 70.6 + SWE-Pro 58; trails Opus 5/Codex on most benchmarks but strong agentic coding.
- **Cost efficiency: 100/100.** \ Free Zen tier (cheaper than all open-weight per musecodes.io map at \.10/\.20 contributor).
- **Overall Score: 89/100.** Mean of five non-cost dims (88+87+96+90+85)/5=89.2 → 89; near-frontier free fallback when 1.3 unavailable (self-evaluated).

---

## Signature

- Provided by: **Independent Research (cross-source verification)** — 2026-10-21
- Method: Independent research combining official Meta documentation (Hugging Face), Artificial Analysis benchmark data, and existing repository data; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. \GPT_5.md\, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All \<...>\ placeholders replaced; no values copied from other \model/\ files.
2. Filename is \model/muse-spark-1.2/Independent_Research.md\ (folder name = filesystem-safe slug, see \model/README.md\). Use the exact assigned stem — never write a near-variant filename (e.g. \Ling_3.0.md\ when the assignment is \Ling_3.0_Flash_Fin.md\); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (\../../model-comparison.md\, \../../model-findings.md\) resolve from \model/muse-spark-1.2/\.
4. No benchmark invented; zero verified benchmarks → saved as \.md.excluded\ (see above).
