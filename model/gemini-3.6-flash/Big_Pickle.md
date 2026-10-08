# Gemini 3.6 Flash — findings by Big Pickle

- Source: Google DeepMind (`gemini-3.6-flash`)
- Date: 2026-09-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash
- **Short description:** Google's 2026-07 workhorse Flash release — more token-efficient (~17% cheaper than 3.5 Flash), better coding, knowledge and computer-control than its predecessor, and the named replacement for Gemini 2.0 Flash in agentic, multimodal workloads. A live, streaming audio/video-capable option across the Gemini lineup.
- **Provider / access:** Gemini API (`gemini-3.6-flash`), Google AI Studio, Vertex AI / Google Cloud; proprietary, closed weights.
- **Release / knowledge:** 2026-07-21 (anotherwrapper) / announced 2026-07-22; knowledge cutoff 2026-03-31.
- **IDs:** `gemini-3.6-flash` (Google; proprietary).
- **Context window:** 1,000,000 input tokens; max output ~65,536–66,000 tokens depending on channel.
- **Modalities:** text, image, video, audio inputs; text output; native tool / function calling; always-on or switchable reasoning.
- **Pricing (as of 2026-09-20):** Gemini API $0.75 in / $3.75 out per 1M; Google Cloud list $1.50 / $7.50 per 1M; high throughput (~189 tokens/s measured by anotherwrapper).
- **Architecture:** Proprietary; Gemini-family multimodal transformer (undisclosed).

### Raw benchmarks found

Agent / tool use:

- OSWorld / OSWorld Verified: **83%** (anotherwrapper).
- Terminal-Bench / Terminal-Bench 2.1: **78%** both.
- MLE-bench: **63.9%**; GDPval-AA v2: **1,421 Elo**.
- FinanceAgent v2: **56.3%**; EMB: **65.4%** (EMB row per benchgen-style aggregators).
- Arena Text Elo: 1,484 (16th-place calibre); HAL / CyberBench / APEX: **no verified public score found**.

Reasoning / knowledge:

- GPQA Diamond: **86.4%**; MMLU-Pro: **89.3%**; SimpleQA: **68.7%**.
- ARC-AGI-1 Verified: **91.2%**; ARC-AGI 2: **60.4%**; AIME 2025: **82.2%**.
- HLE: not independently listed for 3.6 on the compared boards (Thai press noted 3.6 trails 3.5 on HLE-style graded reasoning).

Coding:

- SWE-bench Verified: **79.6%**; SWE-bench Pro (Public): **58.7%** (both anotherwrapper; SWE-bench Pro trails the Anthropic 80s frontier).
- LiveCodeBench: **88.1%**; SciCode: **52.7%**; Vibe Code Bench: **64.0%**; Arena Code Elo: **1,527.83**.
- ProofBench: 36.0%; MMLU sync (MMMLU): 91.8% (anotherwrapper stack).

Long context:

- 1M window; MRCR v2 8-needle: **91.8% average @128K** and **54% @1M pointwise** (anotherwrapper) — strong below 128K, softer at the 1M edge.
- Tau3-Banking / GraphWalks: **no verified public score found**.

Multimodal:

- CharXiv-R: **89.4%** (reasoning with tools); Arena Vision Elo: **1,295**; audio+video intake confirmed (getdeploying).
- MMMU-Pro: not listed on the compared rows for this model; MMMU-class results strong via 3.5-flash-family reporting.

### Normalized scores (1–100)

- **Tool use: 81/100.** (Lowered from 82 on 2026-10-08.) OSWorld-Verified 83%, Terminal-Bench 2.1 78% (independent Vals 73.8%), MLE-bench 63.9% and GDPval-AA 1,423 make it a solid mid-frontier agent; AA Agentic Index 30.1%, DeepSWE 49.0%, and CursorBench 3.2 53.5% (all new) pull it down a notch.
- **Reasoning: 87/100.** (Raised from 85 on 2026-10-08.) GPQA Diamond **92.8% (AA) / 93.4% (Vals)** — the old 86.4% was a mis-read row; HLE 40.8% (AA) now found; MMLU-Pro 89.3% and ARC-AGI-2 60.4% hold; CritPt 10.6% is weak.
- **Context window: 83/100.** 1M window with strong @128K retrieval (MRCR 91.8%) but reproducible drop at the 1M edge (54% pointwise); AA-LCR 80.0% (new) confirms the mid band.
- **Multimodal: 84/100.** Full text/image/video/audio intake, 89.4 CharXiv-R, and now **MMMU-Pro 83.2%** (AA, was unlisted); Design Arena Website 1,304 Elo (new).
- **Coding: 82/100.** SWE-bench Verified 79.6% and LiveCodeBench 88.1% are respectable; SWE-bench Pro 58.7% trails the frontier tier; AA Coding Index 69.2% (new).
- **Cost efficiency: 86/100.** $0.75/$3.75 with ~181–189 tokens/s throughput — but this is **promotional pricing that doubles to $1.50/$7.50 on 2027-01-01**; cached input $0.075.
- **Overall Score: 83/100.** Mean of the five quality dims (81+87+83+84+82)/5 = 83.4 → 83 (unchanged). The dependable workhorse Flash — very well-rounded value, outpaced only by 3.7/3.8 Flash and the Anthropic frontier.

---

## Re-verification — 2026-10-08 (18 days after original)

| Dimension | 2026-09-20 | 2026-10-08 | Δ |
|---|---|---|---|
| Tool use | 82 | 81 | −1 |
| Reasoning | 85 | 87 | +2 |
| Context window | 83 | 83 | — |
| Multimodal | 84 | 84 | — |
| Coding | 82 | 82 | — |
| Cost efficiency | 86 | 86 | — |
| **Overall** | **83** | **83** | **—** |

New and corrected data (all found 2026-10-08):

- **HLE gap filled: 40.8%** (AA-HLE via BenchLM) — old file had "not independently listed".
- **MMMU-Pro gap filled: 83.2%** (AA) — old file had "not listed on the compared rows".
- **GPQA Diamond corrected: 92.8% (AA) / 93.4% (Vals)** — the old 86.4% (which matches the Vals row for a different model family) loses; reasoning evidence improves materially.
- **AA Intelligence Index: 34.0** on the current v4.3 scale (freellm/BenchLM "Intelligence 34/100") — cross-era comparison only; llm-stats composite Score 42.9 (#51).
- New agentic rows: DeepSWE 49.0%, CursorBench 3.2 53.5%, Terminal-Bench 2.1 (Vals) 73.8%, AA Agentic Index 30.1%, GDPval-AA normalized 39.3% (1,423 Elo, up from 1,421).
- New coding rows: AA Coding Index 69.2%, AA-SciCode 53.4% (old 52.7), LiveCodeBench (Vals) 88.1% confirmed, SWE-bench (Vals) 79.6% confirmed.
- New reasoning rows: AA-LCR 80.0%, CritPt 10.6%, AA-Omniscience 22.1 (accuracy 50.0, hallucination rate 55.6), GPQA Diamond (Vals) 93.4%, MMLU-Pro (Vals) 89.3% confirmed.
- ARC Prize confirms ARC-AGI-1 Verified 91.20% and ARC-AGI-2 60.4% independently.
- **Pricing nuance:** $0.75 in / $3.75 out (cache $0.075) unchanged today, but getmoretokens/Google pricing docs confirm it is promotional — standard rate $1.50/$7.50 applies from 2027-01-01; the old "Google Cloud list $1.50/$7.50" line was that future standard rate.
- Third-party composites: BenchLM 63.24 (#41/887, updated 2026-10-07); gradually.ai 70.4/100.
- Gemini 3.7 Flash (2026-08-13) and 3.8 Flash (2026-09-02) have since shipped at the same $0.75/$3.75 — 3.6 is now two generations back.

Gaps still open after re-run: HAL / CyberBench / APEX, Tau3-Banking, GraphWalks (no public scores for this model), MRCR only via the original anotherwrapper figures.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-20
- Method: public web research (anotherwrapper comparison sheets, getdeploying, pricepertoken, Blognone Thai coverage, Gemini API pricing docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3.md`, using the same headings.