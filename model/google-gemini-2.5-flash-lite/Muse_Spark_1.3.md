# Google Gemini 2.5 Flash Lite — findings by Muse Spark 1.3

- Source: Google/Gemini 2.5 Flash Lite (`google/gemini-2.5-flash-lite`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Google Gemini 2.5 Flash Lite
- **Short description:** Google's speed-optimized non-reasoning lite model for high-throughput multimodal work at very low pricing.
- **Provider / access:** Google API `google/gemini-2.5-flash-lite` (Chat Completions); also served via OpenRouter (`openrouter.ai/google/gemini-2.5-flash-lite`).
- **Release / knowledge:** 2026-07-22 release listing (OpenRouter, via BenchmarkList); knowledge cutoff 2026-01-01 (Artificial Analysis)
- **IDs:** `google/gemini-2.5-flash-lite`
- **Context window:** 1M total tokens (Artificial Analysis; ~1500 A4 pages)
- **Modalities:** Text, image, speech, and video in; text out; reasoning no (non-reasoning variant); tool calls yes (function calling measured); JSON mode yes
- **Pricing (as of 2026-09-29):** $0.10/$0.40 per 1M in/out, 90% cache discount (Artificial Analysis / BenchmarkList)
- **Architecture:** Proprietary, size undisclosed (Google has not disclosed parameter count)

### Raw benchmarks found

Agent / tool use:

- Berkeley Function-Calling Leaderboard (**tool use**): 36.9% overall (via BenchmarkList, source deepmind.google; Non-Live AST 86.6%, Live 65.8%, Multi-Turn 13.5%)
- Terminal-Bench 2.1: **no verified public score found** (only Terminal-Bench Hard measured — see below)
- Tau3-Banking / Tau2-Bench: Tau2-Bench Telecom **19.0%** (via BenchmarkList, source Artificial Analysis; vs Fable 5 at 98.5% on same board)
- GDPval-AA: **321 Elo** (via BenchmarkList, source Artificial Analysis; rank 280/340, 18th percentile; vs O-5 at 1861)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: MCP-Bench **0.6** overall (via BenchmarkList; rank 11/20); Terminal-Bench Hard **4.5%** (via BenchmarkList, source Artificial Analysis; vs Fable 5 at 62.9%)

Reasoning / knowledge:

- GPQA Diamond: **62.5%** (via BenchmarkList; rank 252/464, 46th percentile)
- HLE: **6.8%** (via BenchmarkList; rank 234/466, 50th percentile)
- LCR / MLCR: AA-LCR **56.3%** (via BenchmarkList; rank 161/409, 61st percentile)
- CritPt: **no verified public score found for the Lite variant**
- Artificial Analysis Intelligence Index / BenchLM overall: AA Index **11.41** (via BenchmarkList; rank 252/418, 40th percentile; AA model page estimates 7 for the non-reasoning release, #56/75 in class)
- Omniscience Accuracy / Hallucination Rate: Vectara HHEM factual consistency **96.7%** (hallucination rate 3.3%, via BenchmarkList)
- MMLU-Pro (**knowledge proxy, provisional**): 75.9% (via BenchmarkList; rank 156/312, 50th percentile)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **19.3%** (via BenchmarkList, verified Artificial Analysis eval; vs Fable 5.1 at 62.0%)
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- AA-LCR 56.3% at 1M ceiling (via BenchmarkList); no MRCR / RULER / GraphWalks value found

### Normalized scores (1–100)

- **Tool use: 38/100.** BFCL 36.9% with multi-turn 13.5%, Tau2-Telecom 19.0%, GDPval 321, and TB-Hard 4.5%; capped by the TB-Hard gap to Fable 5 62.9%.
- **Reasoning: 58/100.** GPQA 62.5% with HLE 6.8%, MMLU-Pro 75.9%, and AA Index 11.41; capped by below-median GPQA rank and single-digit HLE.
- **Context window: 95/100.** 1M total hits the top tier; capped at 95 with AA-LCR 56.3% far below the 98% retrieval bar for 100.
- **Multimodal: 78/100.** Text/image/speech/video in with text out; capped by measured CAIS Vision 47.9 and MMAU 61.6% weakness.
- **Coding: 45/100.** SciCode 19.3% is the only measured coding number with TB-Hard 4.5% as proxy; capped by the SciCode gap to Fable 5.1 62.0% and zero SWE-bench/LiveCode coverage.
- **Cost efficiency: 97/100.** $0.10/$0.40 with 90% cache discount is very competitive per Artificial Analysis; capped below 100 as paid rather than $0.
- **Overall Score: 63/100.** Mean of the five non-cost dims (38+58+95+78+45)/5 = 62.8; best fit as a fast cheap multimodal workhorse, not a primary agent or coder.

---

## Signature

- Provided by: **Muse Spark 1.3 (meta/muse-spark-1.3-contributor-free)** — 2026-09-29
- Method: public internet research (Artificial Analysis model page, BenchmarkList model page with 54 benchmarks, BenchLM family page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
