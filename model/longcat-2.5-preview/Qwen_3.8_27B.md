# LongCat 2.5 Preview — Evaluation Report

**Model:** LongCat 2.5 Preview (`opencode/longcat_2.5_preview`)
**Auditor:** Qwen 3.8 27B (qwen/qwen3.8-27b)
**Date:** 2026-09-28

## Model card

**Name:** LongCat-2.5-Preview
**Short:** Meituan's 1.6T/~48B-active open-architecture agent model: native 1M context, first multimodal (image) LongCat, agent-first post-training.
**Provider:** Meituan (LongCat team) — LongCat API Platform + web demo at longcat.ai; OpenCode limited-time free access; Claude Code / Codex / OpenClaw / OpenCode / Kilo Code / Hermes compatible (OpenAI + Anthropic dual-protocol API).
**Release date:** 2026-09-25 (preview; API live).
**Architecture:** MoE, ~1.6T total / ~48B active (carried over from LongCat 2.0), LongCat Sparse Attention (LSA) + N-gram embedding, DiNA discrete-native multimodal modeling, MOPD multi-expert post-training; trained on 50K+ AI ASIC superpods, 35T+ tokens.
**Context window:** 1,000,000 in / 128K out.
**Modalities:** Text + image in (native, first multimodal in the LongCat base model); text out; video not officially supported.
**Pricing:** Limited-time $0.30/M uncached input, $0.006/M cached, $1.20/M output (list $0.75 / $0.015 / $2.95); 5M free tokens for new/verified users.

### Raw benchmarks found

**LongCat-2.5-specific: none published.** Meituan has not released 2.5 standard benchmark results (no SWE-bench / Terminal-Bench / GPQA table for the preview; explainx 2026-09-26, ai-all.info 2026-09-25: "no official benchmarks, third-party evaluations are lacking").

**Architectural baseline — LongCat 2.0 (same 1.6T/48B/1M architecture; official Meituan table, Claude Code sandboxes, 2026-06-30):**
- Terminal-Bench 2.1: **70.8** (GPT-5.5 73.8*, Opus 4.7 71.7*, Opus 4.8 78.9*; *external)
- SWE-bench Pro: **59.5** (GPT-5.5 58.6*, Opus 4.7 64.3*); SWE-bench Multilingual: **77.3**
- FORTE: **73.2**; BrowseComp: **79.9**; RWSearch: **78.8**
- IFEval: **90.0**; IMO-AnswerBench: 81.8; GPQA-Diamond: **88.9** (Opus 4.8: 92.4)

**Verified 2.5 facts (official/2026-09-25..27):** 1.6T total / ~48B active, 1M context, 128K max output, native image understanding, long-horizon GUI/terminal/browser/spreadsheet task targeting, dual-protocol API, limited-time $0.30/$1.20 rates.

**Gaps:** No 2.5-standard scores (SWE-V, TB2.1, GPQA, HLE, vision); no independent reproduction yet (early preview); vision capability unmeasured in public.

### Normalized scores (1–100)

- **Tool use: 72/100.** 2.0-baseline TB2.1 70.8 (upper-mid agentic band; between GPT-5.5 73.8 and Opus 4.7 71.7 in Meituan's table), FORTE 73.2, BrowseComp 79.9, IFEval 90.0; 2.5 adds GUI/long-horizon targeting (terminals, browsers, spreadsheets, design tools) but its agent-specific numbers are unpublished — the 2.0 anchor with agent-first retraining is the defensible evidence.
- **Reasoning: 78/100.** GPQA-Diamond 88.9 (2.0 baseline) just under the 90+ frontier line, IMO-AnswerBench 81.8, IFEval 90.0; no HLE published. Depth ceiling slightly below the 2026 flagship GPQA 92–94 band.
- **Context window: 86/100.** Native 1M input / 128K out, trained on 1M-context data (LSA + CP parallelism to 512+); no independent retrieval/synthesis measurement published. Upper-mid of the 85–94 band.
- **Multimodal: 35/100.** First LongCat with image understanding in the base model (DiNA joint modeling: cross-modal Q&A, summarization, visual reasoning, screenshot-to-code), but zero published vision benchmarks, no video/audio, text-only output — real but unmeasured.
- **Coding: 78/100.** 2.0-baseline SWE-bench Pro 59.5 (within 0.4 points of the best standardized SEAL public score found in this audit — GPT-5.4 xHigh 59.1), SWE-Multilingual 77.3, TB2.1 70.8; 2.5 keeps the same scale with agent-first post-training aimed at exactly these workloads. No 2.5-specific SWE numbers to confirm the floor holds.
- **Cost efficiency: 94/100.** Limited-time $0.30/$1.20 with $0.006 cached input beats the $0.60/$2.20 ≈ 92 anchor; 5M free tokens and OpenCode free access improve entry economics; open-architecture MIT lineage enables self-hosting (datacenter-class, 16× H20 reference).
- **Overall Score: 70/100.** Half-up mean of (72 + 78 + 86 + 35 + 78) / 5 = 69.8.

### Why not higher
The 2.5 preview ships with **zero model-specific standard benchmarks**: every capability number above is the same-architecture 2.0 baseline, and its two genuinely new features (native image understanding, long-horizon GUI agents) are completely unmeasured in public. Multimodal 35 and the evidence discount on Tool/Coding keep it at 70, a hair under the cohort's 73.5, until Meituan publishes the 2.5 table or third-party reproduction lands.

## Signature

Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-28
