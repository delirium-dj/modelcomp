# Muse Spark 1.2 — findings by Step 5 Preview

- Source: Meta (Meta Superintelligence Labs) `muse-spark-1.2`
- Date: 2026-10-19 (UTC) — third-pass verification
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2 (`muse-spark-1.2`; Zen route `opencode/muse-spark-1.2`)
- **Short description:** Meta Superintelligence Labs' prior-generation flagship (predecessor to Muse Spark 1.3), tuned for agentic coding and knowledge work. Same weights across all tiers — only price and Meta's data-use policy differ. Superseded by 1.3 but still available.
- **Provider / access:** Meta Model API (`opencode/muse-spark-1.2`), also via OpenRouter. OpenAI-SDK-compatible Chat Completions. Two tiers of the SAME weights: **Standard** `muse-spark-1.2` (privacy-preserving, $1.25/$4.25) and **Contributor** `muse-spark-1.2-contributor` (cheaper, Meta may train on your prompts). Muse Code (terminal coding agent) pairs with it.
- **Release / knowledge:** Released 2026-08-05 (proprietary). Knowledge cutoff not disclosed.
- **IDs:** `opencode/muse-spark-1.2` (Standard); `opencode/muse-spark-1.2-contributor` (Contributor). No separate "Free" ID — the cheap Contributor tier is the free-ish route.
- **Context window:** 1,048,576 (1M) total input; large max output (1M-class window per trackers).
- **Modalities:** Text, image, video, PDF in; text out. Reasoning yes (effort up to xhigh/max); tool calls yes; JSON yes.
- **Pricing (as of 2026-10-08):** Standard $1.25/M in · $4.25/M out (no-training guarantee). Contributor tier priced far lower (opts prompts into Meta's training data — a privacy trade, not just a cheaper plan).
- **Architecture:** Proprietary; weights and parameter count not disclosed (open-weights promised by Meta's Chief AI Officer 2026-08-10 but not delivered as of 2026-08-26).

### Raw benchmarks found

> Cross-referenced vectorwire.ai (34 results/31 benchmarks, 12 independent) and themodelgap.com (8 independent runs + noise-band analysis). Independent runs preferred; harness spread flagged where it affects numbers.

Agent / tool use:

- Terminal-Bench 2.1: **80.15%** (Artificial Analysis, independent) / **82.9%** (Meta's own chart) / **69.66%** (vals.ai harness) — a 13-point spread across harnesses for the "same" benchmark
- Toolathlon-Verified: **75.9%** (independent; ahead of Gemini 3.1 Pro Preview +14.8)
- GDPval-AA v2 (Elo): **1,628** (vendor)
- Terminal-Bench 4.0 (xhigh): trails Grok 4.7 by **−22.7** (themodelgap, independent)
- Vector Wire capability: **Agentic "Capable"** (−23.3% vs leader, 3/7)

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (Artificial Analysis, independent, xhigh; single-source — absent from vals.ai's GPQA leaderboard)
- Humanity's Last Exam (no tools): **45.46%** (Artificial Analysis live data; an earlier AA article states 44–45% — sources disagree by ~1 pt)
- Artificial Analysis Intelligence Index: **57** (xhigh cross-ref) / **39.58** (aggregator xHigh)
- LiveBench Composite: **78** (trails Muse Spark 1.3 by −3.6)
- Vector Wire capability: **Reasoning "Capable"** (−12.3% vs leader, 5/6); **Factuality "Strong"** (−5.9%); **Math "Limited"** (−37.1%)

Coding:

- SWE-bench Verified: **86.6%** (independent; a retired/saturated board on themodelgap — treat as harness-dependent)
- Code Arena (Elo): **1,535** (deepmind cross-ref)
- DeepSWE v1.1: **55%** (independent leaderboard) / **59.3%** (Meta self-reported) — a real 4.3-pt gap, outside the ±2% CI
- AA Coding Index: **72.22** (xHigh aggregator)
- Vector Wire capability: **Coding "Limited"** (−26.1% vs leader, 5/10) — coding is a relative weakness for a Meta flagship
- SWE-bench Pro: no verified public score found for 1.2

Multimodal:

- Text + image + video + PDF in; text out.
- Vector Wire: Multimodal **not rated** (too few results); no live MMMU row surfaced for 1.2

Long context:

- 1M input (1M-class window); Vector Wire: Long Context **"Capable"** (−13.2% vs leader, 1/3). No explicit MRCR ≥98%-at-512K figure published.
- **AA-LCR: 79.0%** (Artificial Analysis, 2026-10-19 via BenchLM) — the first measured long-context-reasoning row for this model; solid but not top-tier retrieval evidence

Third-pass verification (2026-10-19):

- BenchLM composite: **65.9/100** overall, #34 of 959 models, 23 of 666 benchmarks covered; official Meta model page now linked
- New AA rows filling the file's gaps: GDPval-AA **48.6% normalized / Elo 1,631** (AA — corroborates the vendor 1,628), AA Agentic Index **44.0%** (strong), AA Intelligence Index **39.6** (consistent with the file's 39.58 aggregator reading; the "57" cross-ref was old-scale), AA-HLE **45.5%** / AA-GPQA **90.4%** reconfirmed, AA-Omniscience index **27.2%** / accuracy 45.4% / hallucination 33.3% (Factuality "Strong" corroborated), AA-LCR **79.0%**, CritPt **17.7%**, AA-SciCode **57.4%**, AA Coding Index **72.2%** (matches the file's 72.22), MMLU-Pro (Vals) **88.3%**, VulcanBench v3 **87.0%** (new — strong), Design Arena **1,313**
- Still weak: TB 2.1 (Vals) **69.7%** (vs Meta's 82.9%), MazeBench **0%**, FrontierSWE v2 **12.0%**, DeepSWE 59.3% (vendor self-report; independent reads 55%)

### Normalized scores (1–100)

- **Tool use: 82/100.** Terminal-Bench 2.1 80.15% (AA) and Toolathlon 75.9% (ahead of Gemini 3.1 Pro) are solid, but the TB2.1 figure spans a 13-point harness spread (82.9/80.15/69.66), TB4.0 trails Grok 4.7 by −22.7, and Vector Wire rates Agentic "Capable" (−23.3%). The agentic headline is harness-dependent rather than settled.
- **Reasoning: 88/100.** GPQA Diamond 90.4% (independent) and HLE 45.46% (clears the 40% frontier bar) with Factuality "Strong" (−5.9%). Capped by Reasoning "Capable" (−12.3%), Math "Limited" (−37.1%), single-source GPQA, and the AA-index discrepancy (57 cross-ref vs 39.58 aggregator).
- **Context window: 94/100.** 1M input / 1M-class output window with Long Context "Capable" (−13.2%) — squarely in the ≥1M tier, and the third pass added the first measured retrieval row (AA-LCR 79.0%) — solid but not the ≥98% evidence the top sub-tier describes, and no MRCR figure is published. Trimmed from 98 on that measurement.
- **Multimodal: 88/100.** Text + image + video + PDF in (text out) hits the 90–100 input band; held to 88 because Vector Wire has not rated Multimodal (too few results) and there is no live MMMU row — the input coverage is broad but the multimodal-reasoning evidence is thin.
- **Coding: 82/100.** SWE-bench Verified 86.6% (on a retired/saturated board), Code Arena 1,535 Elo, and AA Coding Index 72.22 are solid. Capped by DeepSWE 55% (independent; the 59.3% self-report is a 4.3-pt inflation), no SWE-bench Pro row, and Vector Wire's Coding "Limited" (−26.1%) — coding is a relative weakness for a Meta flagship.
- **Cost efficiency: 88/100.** Standard tier $1.25/$4.25 (rubric ~$1.25/$4.25 = ~88) with a far-cheaper Contributor tier (training-data consent caveat). No true $0 tier, but the Contributor route is close.
- **Overall Score: 87/100.** Mean of the five non-cost dims (82+88+94+88+82)/5 = 86.8 (Context 98→94 on the newly measured AA-LCR 79.0%; Overall 88→87). Best fit as a near-frontier free/cheap fallback for long-horizon coding/agentic work when the stronger Muse Spark 1.3 is unavailable; not the top pick for the hardest coding or math.

---

## Signature

- Provided by: **Step 5 Preview (opencode/step-5-preview)** — 2026-10-19
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores. Third-pass verification (2026-10-19) via BenchLM (composite 65.9/100, #34/959, 23/666; official Meta model page now linked): the file's GDPval/long-context gaps are filled — GDPval-AA 48.6%/Elo 1,631 (AA, corroborating the vendor 1,628), AA-LCR 79.0% (first measured row — Context trimmed 98→94, Overall 88→87), AA Agentic Index 44.0%, AA Index 39.6 (the "57" cross-ref was old-scale), AA-SciCode 57.4%, VulcanBench v3 87.0%, MMLU-Pro (Vals) 88.3% — with TB2.1 Vals 69.7%, MazeBench 0% and FrontierSWE v2 12.0% keeping the Tool/Coding caps. No Artificial Analysis page on the natural slug (404). Second-pass verification (2026-10-10) cross-referenced benchmarkregistry.org (29 primary-source results, updated 2026-10-07 — independent APEX-Agents 36.4%, BrowseComp 75.2%, Vibe Code 79.1%, Vals Index 49.3%, TB2.1 Vals Terminus 69.7%, TB4.0 6.1%, Toolathlon 75.9%). Prior pass (2026-10-08) used vectorwire.ai and themodelgap.com.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
