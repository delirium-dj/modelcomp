# Muse Spark 1.1 — findings by Step 5 Preview

- Source: Meta / Meta AI (FAIR) (`muse-spark-1-1`)
- Date: 2026-11-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1. The **earliest Muse Spark generation with a dedicated evaluation report**, now three generations behind Muse Spark 1.3 and behind Muse Wonder (62.78) in the family. BenchLM scores it 65.16/100, #32 of 1009 — remarkably, it scores *below* both of its successors (1.2: 65.41, and it beats only base Muse Spark's 59.84), so generational improvement in this family is concentrated in 1.3.
- **Short description:** A 1.1-generation model with one genuinely notable result — **HLE 62.1% (vendor-run), the highest raw HLE figure measured in this research series** — and **Cybench 92.9%**, plus the best-documented agentic suite of any legacy Meta model (MCP Atlas 88.1%, OSWorld-Verified 80.8%, Toolathlon 75.6%, JobBench 54.7%). Its reliability is mid-pack (hallucination 50.0%) and its reasoning depth is thin (CritPt 15.1%, MRCR 1M 54.1%).
- **Provider / access:** Meta Model API, Muse Code, OpenRouter, and OpenCode Zen (`opencode/muse-spark-1-1`) — note Zen's current model list carries Muse Spark 1.3 and 1.2 but **not 1.1**, consistent with its superseded status. Weights never released.
- **Release / knowledge:** released **2026-07-09** (the first of the three Muse Spark releases between July and September 2026, per Artificial Analysis's "fourth Muse Spark model release in five months" framing). **Knowledge cutoff not disclosed by Meta.**
- **IDs:** `muse-spark-1-1` (Meta Model API); `meta/muse-spark-1.1` (OpenRouter).
- **Context window:** **1M tokens** (BenchLM and Meta's evaluation report agree). Max output not published.
- **Modalities:** **text, image, video and audio in; text out** (the Muse Spark lineup-wide modality set; corroborated by the CharXiv and BabyVision results).
- **Pricing (as of 2026-11-05):** not published for this legacy SKU in the sources checked — Zen's rate card covers 1.3 ($1.25/$4.25/$0.15) and 1.2 (same) but omits 1.1. Scored conservatively and flagged as unverified rather than assumed from siblings.
- **Architecture:** proprietary, closed weights; parameter count undisclosed.

### Raw benchmarks found

Meta AI's **Muse Spark 1.1 evaluation report** is the primary source (so most rows are **vendor-run**), with Artificial Analysis, Vals AI and Openrouter supplying independent rows.

Agent / tool use — **the strongest dimension**:

- **MCP Atlas: 88.1%** (vendor) — the best MCP Atlas figure in this batch
- **OSWorld-Verified: 80.8%** (vendor); Toolathlon: **75.6%**; WebArena-Verified: 69.0%
- **Terminal-Bench 2.1: 80.0%** (vendor) / **69.3%** (Vals) — a 10.7-point vendor-vs-independent gap, both under the 88%+ reference
- **GDPval-AA: 1,375 Elo** / 35.6% normalized — well under the 1,750+ frontier reference
- DeepSearchQA: 84.9%; JobBench: 54.7%; Finance Agent v2: 57.2%; **Cybench: 92.9%**
- **CyberGym: 59.0%**; **ExploitGym: 0.8%**; **OSWorld 2.0: 14.2%**
- **AA Agentic Index: 27.5%** — the second-lowest in this batch
- **τ³-Banking, BrowseComp, Toolathlon-Verified, Claw-Eval, MazeBench, ALE: no verified public score found**

Reasoning / knowledge — **split, with the series' highest raw HLE**:

- **HLE: 62.1%** (vendor evaluation report) / HLE without tools 52.2% — **the highest raw HLE figure measured anywhere in this research series**, above Claude Opus 5's 64.7% only in the without-tools column and above GPT-5.6 Sol's 54.5% on the verified column
- **AA-HLE: 46.2%**; **AA-GPQA Diamond: 89.8%** / **91.2%** (Vals) — clears the 90%+ reference only on the Vals run
- AA Intelligence Index: **33.7**; AA-LCR: **77.7%**; **CritPt: 15.1%**
- **MRCR 1M: 54.1%** — one of the few measured 1M-window retrieval figures in this research series, and mid-tier at that length
- AA-Omniscience: index 28.1, accuracy 52.1%, hallucination rate **50.0%**
- HealthBench Professional: 59.3%; MMLU-Pro (Vals): 88.7%
- **FrontierMath, ARC-AGI: no verified public score found**

Coding — mid-pack:

- **AA Coding Index: 71.3%** — clears the 70%+ frontier reference
- LiveCodeBench (Vals): **85.9%**; SWE-bench (Vals): **82.0%**
- Terminal-Bench 2.1: 80.0% — under the 85% reference
- **AA-SciCode: 58.8%** — clears the 55%+ reference; deepSWE: 53.3%
- SWE-bench Pro: 61.5%; **SWE-bench Verified: no verified public score found**

Multimodal (image + video + audio in):

- **CharXiv: 88.4%** (vendor); BabyVision: 76.3%; Design Arena (website): 1,269 Elo

### Normalized scores (1–100)

- **Tool use: 74/100.** Above the methodology's mid band on the strength of a genuinely broad agentic suite: **MCP Atlas 88.1%** (best in this batch), OSWorld-Verified 80.8%, Toolathlon 75.6%, DeepSearchQA 84.9%, JobBench 54.7% and Cybench 92.9%. Capped because **two of three frontier references are badly missed** — Terminal-Bench 2.1 is 80.0% (vendor) / 69.3% (Vals) against 88%, and GDPval-AA is 1,375 Elo against 1,750 — plus OSWorld 2.0 14.2%, ExploitGym 0.8%, AA Agentic Index 27.5% and no τ³-Banking, BrowseComp or Claw-Eval figure.
- **Reasoning: 78/100.** Mid-band, and the raw-HLE figure needs careful handling. **HLE 62.1% on Meta's own report is the highest raw HLE in this research series**, and AA's independent run still gives 46.2% (clearing the 40%+ reference). But GPQA Diamond is only 89.8% on AA and 91.2% on Vals, and **CritPt 15.1%, no FrontierMath and no ARC-AGI figure** mean the scientific and abstract-reasoning layers are unmeasured. AA Intelligence Index 33.7 and a 50.0% hallucination rate are mid-pack (mid-pack here means neither the best nor the worst of the series).
- **Context window: 96/100.** 1M-token tier, and one of the few models here with a measured 1M-window retrieval figure (**MRCR 1M 54.1%**). Held just under 100 because 54.1% is well below the ≥98% threshold, AA-LCR is 77.7%, and no max-output limit is published. A window that is demonstrably usable at 1M — unusually for a 1M-window model in this series — but only at about half the quality of shorter contexts.
- **Multimodal: 92/100.** Text + image + video + **audio** input places it in the methodology's 90–100 "audio in" tier, and the measured depth supports the upper-middle: **CharXiv 88.4%, BabyVision 76.3%**, plus the Muse Spark lineup's multimodal foundations. Held at 92 rather than higher because the visual suite is only three benchmarks and there is no MMMU-Pro, ZeroBench or ExtractBench figure.
- **Coding: 76/100.** AA Coding Index 71.3% clears the 70% reference, AA-SciCode 58.8% clears the 55% reference, and LiveCodeBench 85.9% / SWE-bench 82.0% (Vals) are solid. Capped by **deepSWE 53.3%** — 20.7 points under the 74% reference, the second-worst in this batch — plus Terminal-Bench 2.1 80.0%, SWE-bench Pro 61.5% and no SWE-bench Verified figure.
- **Cost efficiency: 55/100.** **No rate card is published for this legacy SKU** — Zen's current model list omits Muse Spark 1.1 entirely, and Meta's Model API pricing covers 1.3 and 1.2. Scored conservatively at 55, between the methodology's ~$3/$15 (≈60) and ~$10/$50 (≈30) anchors, on the assumption that a superseded 1.1-generation Meta flagship would sit in that band if a route existed. **Explicitly an estimate, not a measurement** — verify against Meta's current pricing before relying on it.
- **Overall Score: 83/100.** (74 + 78 + 96 + 92 + 76) / 5 = 83.2 → **83**. Recommendation: a genuinely well-rounded legacy model — **the highest raw HLE measured in this research series (62.1%), the best MCP Atlas in this batch (88.1%), measured 1M-window retrieval at 54.1%, and full audio/video input** — with the caveat that it is three generations behind and **priced on an unpublished card**. For agentic and multimodal work it remains competitive with newer models; for repository coding it is not (deepSWE 53.3%). Prefer Muse Spark 1.3 at a known $1.25/$4.25 unless 1.1 is already deployed.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-11-05
- Method: re-research using Meta AI's Muse Spark 1.1 evaluation report as the primary source (so most rows are vendor-run and labelled as such), cross-checked against BenchLM's 40-row catalog (attributing independent numbers to Artificial Analysis, Vals AI and Openrouter). The vendor-vs-independent gap on Terminal-Bench 2.1 (80.0% vs 69.3%) and the exceptional-but-vendor-run HLE 62.1% are both recorded explicitly rather than smoothed over, and the series' highest raw HLE is presented with its provenance attached. Missing benchmarks (τ³-Banking, BrowseComp, Toolathlon-Verified, Claw-Eval, MazeBench, ALE, FrontierMath, ARC-AGI, SWE-bench Verified, MMMU-Pro, ZeroBench, ExtractBench) are named as absent rather than substituted. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Meta AI — Muse Spark 1.1 evaluation report (primary benchmark source)](https://ai.meta.com/static-resource/muse-spark-1-1-evaluation-report)
  - [BenchLM — Muse Spark 1.1 benchmark scores (40 rows, 65.16/100, #32/1009)](https://benchlm.ai/models/muse-spark-1-1)
  - [Artificial Analysis — Muse Spark 1.1](https://artificialanalysis.ai/models/muse-spark-1-1)
  - [Vals AI — Muse Spark 1.1 leaderboard results](https://www.vals.ai/models/meta_muse_spark_1_1)
  - [Openrouter — Muse Spark 1.1 benchmarks](https://openrouter.ai/meta/muse-spark-1.1/benchmarks)
  - [OpenCode Zen — model list and Console pricing](https://opencode.ai/docs/zen/)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
