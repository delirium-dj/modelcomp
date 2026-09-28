# Gemini 3.5 Flash Lite — Evaluation Report

**Model:** Gemini 3.5 Flash Lite (`google/gemini-3.5-flash-lite`)
**Auditor:** Qwen 3.8 27B (qwen/qwen3.8-27b)
**Date:** 2026-09-28

## Model card

**Name:** Gemini 3.5 Flash-Lite
**Short:** Google's budget-tier 1M-context multimodal model: 350 tok/s at Lite pricing for high-volume, latency-sensitive agentic work.
**Provider:** Google (DeepMind) — API + free tier on Google AI Studio and OpenCode Zen; batch pricing available.
**Release date:** 2026-07-21.
**Architecture:** Proprietary; reasoning mode and tool use enabled.
**Context window:** 1,000,000 in / 65K out; knowledge cutoff Mar 2026.
**Modalities:** Text, image, PDF, video in; text out (repo meta additionally lists audio input; userightai lists text/image/PDF/video — minor source discrepancy).
**Pricing:** $0.30/M input, $2.50/M output; $0.03/M cached input; batch $0.15/$1.25.

### Raw benchmarks found

**BenchLM.ai source rows (2026-09-28; overall 50.96/100, #76 of 512):**
- Terminal-Bench 2.1: **54.0%** (AA 53.6%; Vals 50.2%) — vs 31% for the 3.1 Flash-Lite ("huge generational jump")
- OSWorld-Verified: **74%** (3.6 Flash: 83.0%)
- SWE-bench Pro: **54.2%**; SWE-bench (Vals): **75.0%**; LiveCodeBench (Vals): **79.0%**; AA-SciCode: **41.3%**; AA Coding Index: 49.3
- GDPval-AA: Elo **1139** (23.5% normalized); AA Briefcase Elo: **648**; AA Agentic Index: 15.9%; AA EnterpriseOps-Gym: 42.3%; AA AutomationBench: 25.0%; AA Tau3 Banking: **17.5%**; Terminal-Bench 4.0: **1.0%**; GDP.pdf: 13.6%
- AA-MMMU-Pro: **79.0%**
- MRCR-v2: **72.2%**; AA-LCR: 76.0%; CritPt: 0.0%; MLCR-AA: 7.2%
- GPQA Diamond: **83.8%** (AA & Vals); MMLU-Pro (Vals): **85.8%**; AA-HLE: **18.8%**; AA Intelligence Index: **22.2**; AA-Omniscience: +5.2 (accuracy 29.5%, hallucination 34.4%)

**userightai.com (verified 2026-09-04):** 350 output tok/s (fastest in Google's 3.5 lineup); SWE-Pro 54.2% and OSWorld-V 74.0% at $0.30/$2.50; "trails full Flash models on hard agentic work (OSWorld 74.0% vs 83.0% for 3.6 Flash)"; GPT-5.6 Luna undercuts it on per-token price.

**Gaps:** No independent SWE-bench Verified; TB4.0 1.0% and CritPt 0.0% on newest hardest task sets; AA Agentic Index 15.9 is very low; hallucination profile middling (34.4%).

### Normalized scores (1–100)

- **Tool use: 58/100.** TB2.1 54.0% sits in the 45–60% → 50–70 band; OSWorld-Verified 74.0% is a genuine strength (upper-mid computer use). Offsetting: Tau3 Banking 17.5%, AutomationBench 25.0%, EnterpriseOps 42.3%, AA Agentic Index 15.9, TB4.0 1.0% — hard agentic work clearly trails the full Flash tier and the frontier.
- **Reasoning: 70/100.** GPQA Diamond 83.8% and MMLU-Pro 85.8% are solid (graduate-science band just under the 90%+ line); LCR 76.0%. But HLE 18.8%, CritPt 0.0%, MLCR-AA 7.2%, and AA Intelligence Index 22.2 keep it well below the frontier on deep reasoning.
- **Context window: 90/100.** Full 1M input / 65K out with measured long-context retrieval (MRCR-v2 72.2% — verified needle retrieval at scale). Top of the 85–94 band; not 95+ since no published 1M-scale synthesis task.
- **Multimodal: 55/100.** Four input modalities (text, image, PDF, video — repo meta adds audio) with strong image understanding (AA-MMMU-Pro 79.0%), text-only output, no video/audio comprehension benchmarks published.
- **Coding: 70/100.** SWE-bench Pro 54.2% (competitive at Lite price — SEAL public #1 is GPT-5.4 xHigh at 59.1%), Vals SWE-bench 75.0% and LiveCodeBench 79.0% confirm usable agentic coding; TB2.1 54.0% and SciCode 41.3% cap it below the 80-tier coding models.
- **Cost efficiency: 94/100.** $0.30/$2.50 per 1M at 1M context with $0.03 cached input, batch half-rate, 350 tok/s, and a free tier on AI Studio/Zen — at or better than the $0.60/$2.20 ≈ 92 anchor, though GPT-5.6 Luna beats it on pure price-per-benchmark.
- **Overall Score: 69/100.** Half-up mean of (58 + 70 + 90 + 55 + 70) / 5 = 68.6.

### Why not higher
The agentic tail is the problem: TB4.0 1.0%, CritPt 0.0%, Tau3 17.5%, and AA Agentic Index 15.9 mark a real ceiling on hard multi-step work, and HLE 18.8% caps reasoning. What it does do — 1M context with verified MRCR retrieval, OSWorld 74%, GPQA 83.8%, SWE-Pro 54.2% — at $0.30/$2.50 and 350 tok/s makes it one of the best value-for-money workhorses in the cohort, which Cost 94 and Context 90 reflect.

## Signature

Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-28
