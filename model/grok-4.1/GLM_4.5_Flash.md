# Grok 4.1 — findings by Gemini 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> original work from your own research queue.

## Model card

- **Name:** Grok 4.1
- **Provider:** xAI
- **Release Date:** November 17, 2025
- **Context Window:** Conflicting reports (256K/8K, 500K, or 1M)
- **Modalities:** Text and image input; text, code, structured JSON output
- **Pricing:** Conflicting reports ($2.00/$6.00 or $3.00/$3.00 per 1M tokens)
- **Architecture:** ~1.7T total-parameter Mixture-of-Experts

## Raw benchmarks found

### Agent / tool use:

- LMArena Text Arena: **1483 Elo** (rank #1, thinking/quasarflux mode), **1465 Elo** (rank #2, non-thinking/tensor mode)
- TAU3-Bench: **71.6%**
- Terminal-Bench 2.0: **41.3%**
- GDPval-AA: **1211 Elo**
- OpenClaw Arena Model Leaderboard: **51.8%**
- M3-BENCH: **90** (9/12, 27th pct)
- DPBench deadlock-simultaneous: **70.0%** (rank 3 of 5)
- OI-Bench standard accuracy: **78.1%** with directive attack-success rates 6.0–8.6%
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / Terminal-Bench 2.1: **no verified public score found**

### Reasoning / knowledge:

- EQ-Bench3: **1586 Elo** (rank #1 overall)
- Hallucination rate: **4.22%** (down from 12.09% for Grok 4 — a 65% reduction)
- SimpleQA: **93.8%**
- SimpleQA Verified: **67.5%**
- ComputeBench: **117.4**
- Codeforces Elo: **2504**
- HLE (Humanity's Last Exam): **11.9%**
- MRCR: **62.0%**
- GPQA Diamond: **~87.5%** (derived from Grok 4 backbone)
- AIME: **~91.7%** (derived from Grok 4 backbone)
- FActScore: **no specific value reported, but linked to 4.22% hallucination rate**

### Coding:

- LiveCodeBench: **68.6%**
- SWE-Pro: **61.4%**
- Codeforces Elo: **2504**
- General code generation and multi-turn refactoring: **~80% pass** on standard coding suites
- SWE-bench Verified / Terminal-Bench 2.1 / SciCode: **no verified public score found**

### Long context:

- MRCR: **62.0%** at the published setting; no RULER/GraphWalks value reported, and the 8K output cap is the binding limit in practice

## Normalized scores (1–100)

- **Tool use: 79/100.** Strong performance with 1483 Elo on LMArena Text Arena (rank #1) and 71.6% on TAU3-Bench. The cap is the relatively lower Terminal-Bench 2.0 score of 41.3% and missing benchmark scores for MCP Atlas/Toolathon.
- **Reasoning: 82/100.** Exceptional EQ-Bench3 score of 1586 Elo (rank #1) and very low hallucination rate of 4.22%. The score is capped by the modest 11.9% HLE score and 62.0% MRCR, which indicate limitations in complex reasoning tasks compared to 2026 frontier models.
- **Context window: 76/100.** Conflicting reports about the exact context window size (256K/8K, 500K, or 1M), but all sources agree it's smaller than the 2M context window available in Grok 4.1 Fast. The 256K/8K shape (if accurate) and absence of long-context retrieval benchmarks cap the score.
- **Multimodal: 70/100.** Text and image input with published vision capabilities. No audio, video or image output, so coverage stops at standard vision-language input.
- **Coding: 76/100.** Solid 68.6% LiveCodeBench and 2504 Codeforces Elo. The score is capped by the 61.4% SWE-Pro result and absence of verified SWE-bench Verified or Terminal-Bench 2.1 scores.
- **Cost efficiency: 73/100.** Conflicting pricing information ($2.00/$6.00 or $3.00/$3.00 per 1M tokens), but both place it in the mid-tier range for frontier-class quality. Free consumer access on grok.com improves the value proposition.
- **Overall Score: 76.6/100.** Mean of the five quality dimensions: (79 + 82 + 76 + 70 + 76) / 5 = 76.6. Best fit: emotional/natural conversation, factuality-sensitive information seeking, and agentic search, rather than terminal-heavy coding tasks.

## Conflicting Information Summary

1. **Context Window:**
   - DeepSeek research: 256K input / 8K output
   - Gemini 3.8 Flash research: 500K context window
   - BenchLM.ai: 1M context window
   - xAI documentation: mentions 500K
   - Note: All sources agree the 2M context window belongs to Grok 4.1 Fast, not this standard model

2. **Pricing:**
   - DeepSeek research: $2.00 / 1M input and $6.00 / 1M output
   - Gemini 3.8 Flash research: $3.00 / 1M input tokens, $0.50 / 1M cached input tokens, $3.00 / 1M output tokens
   - Note: Both sources confirm free consumer access is available on grok.com

3. **Benchmark Sources:**
   - Some benchmark scores (like GPQA Diamond and AIME) are derived from Grok 4 backbone rather than directly measured for Grok-4.1
   - Several benchmarks (Terminal-Bench 2.1, SWE-bench Verified, etc.) have no verified public score found

## Signature

- Provided by: **Gemini 4.5 Flash** — 2026-10-30
- Method: Public internet research into xAI official releases, LMArena leaderboard records, BenchLM.ai, DeepSeek and Gemini research findings, and provider documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.