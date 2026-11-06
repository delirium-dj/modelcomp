# Gemini 3.1 Flash-Lite — findings by Step 5 Preview

- Source: Google DeepMind (`gemini-3.1-flash-lite`)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash-Lite. Now **four generations behind**: Gemini 4 Carbon (88.79) → 4 Argon (82.29) → 3.8 Flash (66.74) → 3.7 Flash (66.49) → 3.1 Pro (64.48) → 3.6 Flash (62.56) → 3.5 Flash (61.62) → and this at **46.62, #117 of 1,015** with **12 benchmarks**. BenchLM classifies it **Non-Reasoning** — the fourteenth such model in this corpus.
- **Short description:** A 1M-context Flash-Lite with two genuinely striking figures in opposite directions: **Vibe Code Bench 0.00% (the lowest measured anywhere in this research series) against LiveCodeBench 80.1% (Vals)** — a 80-point gap on two neighbouring coding benchmarks. Its exam figures are respectable (**MMLU-Pro 86.2%, GPQA Diamond 81.1%**) and its agentics are near-floor (**Terminal-Bench 2.1 34.1%, Gert Labs 38.46%**).
- **Provider / access:** Gemini API, and OpenCode Zen. No Free ID. Proprietary, closed weights.
- **Release / knowledge:** release date not restated; the 3.1 generation is Google's mid-2026 line. **Knowledge cutoff not disclosed.**
- **IDs:** `gemini-3-1-flash-lite` (Gemini API, Zen, BenchLM canonical); `google_gemini-3.1-flash-lite-preview` (Vals).
- **Context window:** **1M tokens** (BenchLM) — a full frontier window at Flash-Lite pricing, and the model's structural advantage.
- **Modalities:** **text and image in; text out** (CharXiv 73.2%, ParseBench 56.66%).
- **Pricing (as of 2026-11-06):** **not published in the sources checked** — BenchLM's row carries no rate card. Scored conservatively and flagged as unverified.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

Google's Gemini 3.1 Flash-Lite model card is the primary source (so the CharXiv row is **vendor-run**), with Artificial Analysis-adjacent third parties, Vals AI, Epoch AI, Gert Labs, LlamaIndex and JevBench supplying independent rows. 12 benchmarks total — the second-thinnest evidence base in this batch.

Agent / tool use:

- **Gert Labs: 38.46%**; **Terminal-Bench 2.1 (Vals): 34.1%** — 53.9 points under the 88%+ reference
- **Terminal-Bench 2.0/4.0, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index: no verified public score found** — so **all three of the methodology's agentic frontier references are unmeasured and no composite exists**

Reasoning / knowledge:

- **GPQA Diamond (Vals): 81.1%** — fails the 90%+ reference by 8.9 points
- **MMLU-Pro (Vals): 86.2%** — respectable
- **FrontierMath v2 Tiers 1–3: 27.7%** [Epoch] — near-floor
- **JevBench 1.4: 14.26 / JevBench 1.5: 19.58** [JevBench] — a paired long-context/legal-eval benchmark set
- **CritPt, AA-LCR, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME: no verified public score found** — so **long-context reasoning, composite depth, reliability and all mathematics beyond FrontierMath Tiers 1–3 are entirely unmeasured**

Coding — **the model's defining contradiction**:

- **LiveCodeBench (Vals): 80.1%** — a strong competitive-programming figure
- **SWE-bench (Vals): 62.8%** — 22.2 points under the 85%+ terminal reference
- **Vibe Code Bench: 0.00%** [Vals] — **the lowest Vibe Code Bench figure measured anywhere in this research series**, and an **80.1-point gap from the model's own LiveCodeBench figure on a neighbouring coding benchmark** — the starkest internal contradiction in this batch
- **SWE-bench Verified, DeepSWE, AA-SciCode, AA Coding Index, Terminal-Bench 4.0, FrontierCode: no verified public score found** — so the 85%, 74%, 70% and 55% references are all unmeasured

Multimodal (image-in):

- **CharXiv: 73.2%** (vendor); **ParseBench: 56.66%** [LlamaIndex]
- **MMMU-Pro, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena: no verified public score found**

### Normalized scores (1–100)

- **Tool use: 42/100.** Below the methodology's mid band, and the weakest dimension alongside reasoning. Gert Labs 38.46% and Terminal-Bench 2.1 34.1% are the only two agentic figures and both are weak. **Terminal-Bench 2.0/4.0, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA and the AA Agentic Index have no measurement at all** — so all three frontier references are unmeasured and no composite exists.
- **Reasoning: 60/100.** Mid-band, and genuinely split. **MMLU-Pro 86.2% and GPQA Diamond 81.1% are respectable exam figures** — the latter 8.9 points under the 90%+ reference. Against that, **FrontierMath v2 Tiers 1–3 27.7% is near-floor** and **CritPt, AA-LCR, the AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR and AIME have no figure at all** — so composite depth, reliability and three of five reasoning references are unknown. The strong-exam-against-weak-depth pattern is consistent with BenchLM's **Non-Reasoning** classification.
- **Context window: 92/100.** **1M tokens** places it in the methodology's ≥1M tier — a full frontier window at Flash-Lite pricing, and the model's single most valuable property. Scored at 92 rather than 95+ because **no AA-LCR, MRCR or GraphWalks figure exists**, so the window's usable depth is entirely unverified, and no max-output limit is published. The **JevBench 1.4/1.5 pair (14.26 / 19.58)** is the only long-context-adjacent evidence and it is mid.
- **Multimodal: 68/100.** Text + image in with text out, in the methodology's 60–70 band and at its upper end on **CharXiv 73.2%**, a genuinely good chart/figure-reading result. Held at 68 rather than above because **ParseBench 56.66% is middling**, the visual suite is two benchmarks, and MMMU-Pro, ExtractBench, BabyVision, ZeroBench, OmniDocBench and MathVision are unmeasured.
- **Coding: 62/100.** Mid-band, with the report's central contradiction unresolved. **LiveCodeBench 80.1% is a strong figure and SWE-bench 62.8% is respectable-but-weak.** Against that, **Vibe Code Bench 0.00% is the lowest measured anywhere in this research series — an 80.1-point gap from the model's own LiveCodeBench figure on a neighbouring benchmark** — recorded as an unresolved data conflict rather than averaged, and the reason coding is not scored higher. Capped further by the absence of SWE-bench Verified, DeepSWE, AA-SciCode, the AA Coding Index, Terminal-Bench 4.0 and FrontierCode.
- **Cost efficiency: 82/100.** **No rate card is published in any source checked**, so the score rests on positioning rather than a price: the **Flash-Lite tier is Google's cheapest current route**, the one directional signal available. Scored at 82, between the methodology's ~$1.25/$4.25 (≈88) and ~$3/$15 (≈60) anchors. **Explicitly a positioning-based inference, not a measurement** — held below 88 because there is no free tier, no published rate, and no cache-read figure.
- **Overall Score: 65/100.** (42 + 60 + 92 + 68 + 62) / 5 = 64.8 → **65**. Recommendation: **a cheap 1M-context Flash-Lite with one alarming internal contradiction.** MMLU-Pro 86.2%, LiveCodeBench 80.1%, CharXiv 73.2% and a 1M window at Flash-Lite pricing is a reasonable package for high-volume work. **But Vibe Code Bench 0.00% against LiveCodeBench 80.1% is an 80.1-point gap on two neighbouring coding benchmarks — the starkest measured in this research series — and it must be resolved on your own harness before trusting any coding figure here.** Three further cautions: its agentic layer is near-floor (Terminal-Bench 2.1 34.1%, no composite at all); **there is no reliability measurement of any kind**, so it cannot be assessed as a factual assistant; and it is dominated on every axis by **Gemini 3.5 Flash-Lite (46.87)** and **Gemini 3.5 Flash (61.62)**, both of which score higher on BenchLM. Prefer the 3.5 Flash-Lite tier, which is the direct successor.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-06
- Method: re-research using Google's Gemini 3.1 Flash-Lite model card as the primary source for the CharXiv row (so that row is vendor-run and labelled as such), cross-checked against BenchLM's 12-row catalog (which attributes the independent numbers to Vals AI, Epoch AI, Gert Labs, LlamaIndex and JevBench). The second-thinnest evidence base in this batch (12 rows) is stated plainly rather than hedged. The report's central finding is an **80.1-point internal contradiction: Vibe Code Bench 0.00% (the lowest measured anywhere in this research series) against LiveCodeBench 80.1% on a neighbouring coding benchmark** — recorded as an unresolved data conflict rather than averaged, and carried into the recommendation as the thing to resolve before trusting any coding figure. The **8.9-point GPQA Diamond miss** and the **near-floor FrontierMath Tiers 1–3 (27.7%)** are attributed rather than presented bare. The strong-exam-against-weak-depth pattern is stated as consistent with BenchLM's **Non-Reasoning** classification. The unpublished rate card is surfaced with its effect on the cost score stated as a positioning-based inference. Missing benchmarks (Terminal-Bench 2.0/4.0, τ²-bench, τ³-bench, MCP-Atlas, OSWorld, BrowseComp, Toolathlon, MazeBench, ALE, Claw-Eval, JobBench, GDPval-AA, AA Agentic Index, CritPt, AA-LCR, AA Intelligence Index, AA-Omniscience, ARC-AGI, MRCR, AIME, SWE-bench Verified, DeepSWE, AA-SciCode, AA Coding Index, FrontierCode, MMMU-Pro, ExtractBench, BabyVision, ZeroBench, OmniDocBench, MathVision, Design Arena) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Google — Gemini 3.1 Flash-Lite model card (source of the CharXiv row)](https://deepmind.google/models/model-cards/gemini-3-1-flash-lite/)
  - [BenchLM — Gemini 3.1 Flash-Lite benchmark scores (12 rows, 46.62/100, #117/1015)](https://benchlm.ai/models/gemini-3-1-flash-lite)
  - [Vals AI — Gemini 3.1 Flash-Lite (preview) leaderboard results](https://www.vals.ai/models/google_gemini-3.1-flash-lite-preview)
  - [Vals AI — Vibe Code Bench v1.1 (source of the series-lowest 0.00%)](https://www.vals.ai/benchmarks/vibe-code)
  - [Epoch AI — FrontierMath v2 leaderboard](https://epoch.ai/benchmarks/frontiermath-tiers-1-3-v2)
  - [Gert Labs rankings](https://gertlabs.com/rankings)
  - [ParseBench leaderboard (LlamaIndex)](https://www.parsebench.ai/#leaderboard)
  - [JevBench v1.4.2.2 results](https://github.com/fstandhartinger/jevbench/blob/5b405e7e4efff2cfbbb2fe67db9b0cbad0704b8d/results/v1.4.2.2/jevbench-v1.4.2.2-results.json)
  - [JevBench v1.5.4 results](https://benchmarkheaven.com/api/jevbench/v1.5.4)
  - See also: [`model/gemini-3.5-flash-lite/`](gemini-3.5-flash-lite.md) (46.87) — the direct successor this report recommends preferring, refreshed in an earlier batch; [`model/gemini-3.5-flash/`](gemini-3.5-flash.md) (61.62) — the next tier up
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
