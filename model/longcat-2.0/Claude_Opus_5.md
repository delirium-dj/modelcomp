# LongCat 2.0 — findings by Claude Opus 5

- Source: Meituan LongCat (`meituan-longcat/LongCat-2.0`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** LongCat 2.0
- **Short description:** Meituan's **MIT-licensed open-weight** 1.6-trillion-parameter MoE with 48B active and a 1M-token context, built for coding and agentic work. Its most-reported fact is not a benchmark: it was **trained end-to-end on roughly 50,000 Chinese domestic AI chips, with no Nvidia hardware** ([agenticbrew](https://www.agenticbrew.ai/news/bc1e3e75-8ccd-47e4-b45d-228f03c9f313/meituan-longcat-2-0-a-1-6-trillion-parameter-model-trained-end-to-end-on-chinese-chips); [The Value Engineering](https://thevalue.engineering/news/meituan-longcat-2-0-1-6t-parameters-no-nvidia-chips.html)). Distinct model; `longcat_2.5_preview` is the API-only successor with added image understanding and has its own folder.
- **Provider / access:** **Open weights under MIT** (`meituan-longcat/LongCat-2.0`); Meituan's LongCat API. Serving documentation and evaluation structure are mirrored on DeepWiki. **No OpenCode Zen ID** — Zen's LongCat entry is the 2.5-preview free route, not 2.0. This repo records `meituan/longcat-2.0`.
- **Release / knowledge:** **Dates conflict across sources and I report both:** this repo's curated metadata says "unveiled **2026-06-29**", which matches a cluster of coverage dated 2026-06-30, while BenchmarkList records "Released **Jul 20, 2026**" and dates its vendor model-card figures to that day. The likeliest reading is an announcement in late June followed by weights/benchmarks on 2026-07-20. Knowledge cutoff: no verified public date found.
- **IDs:** `meituan-longcat/LongCat-2.0`, served as `longcat-2.0`. **No free tier** — `noFreeId: true` is correct; the MIT weights are the free path.
- **Context window:** **1,000,000 tokens**, corroborated by BenchmarkList, [BenchLM](https://benchlm.ai/models/longcat-2-0) and this repo's metadata. Max output: no verified public figure found.
- **Modalities:** **Text in → text out.** Supported by two lines of evidence: this repo's metadata states text-only, and the successor LongCat 2.5 Preview is consistently described as adding "**new** image understanding", which implies 2.0 lacks it. No multimodal benchmark exists for this checkpoint. Reasoning: yes — BenchLM classifies it a reasoning model, and ObviousBench results are reported separately for reasoning and non-reasoning modes (see below). Tool calls: yes, and extensively evaluated.
- **Pricing (as of 2026-10-08):** **$0.30 / MTok input, $0.006 / MTok cached input, $1.20 / MTok output** on the LongCat API. The **$0.006 cached-input rate is the lowest cached rate I have encountered in this entire research pass**. BenchmarkList's blended price index puts it at **$1.5** against Claude Opus 5.5 at $24 and Claude Fable 5.1 at $60. MIT weights are free to self-host.
- **Architecture:** **1.6 trillion total parameters, 48B active**, Mixture-of-Experts. No further architectural detail (layer counts, expert counts, attention design) surfaced in the sources I could reach. **MIT license** — among the most permissive terms of any model in this dataset, and notable for a frontier-scale Chinese release.

### Raw benchmarks found

> **Provenance is the central issue for this model, and BenchmarkList fortunately labels it.** Entries marked **"Model card"** are Meituan's own, run in Meituan's harness — and contemporaneous coverage is blunt about the limitation: *"Every benchmark above is vendor-reported and self-measured. The cross-model comparisons are Meituan's, run in Meituan's harness, with **no public third-party evaluation** as of 2026-07-08"* ([groundy](https://groundy.com/articles/meituan-open-sources-longcat-2-0-a-1-6t-model-trained-on-50-000-chinese-gpus/)). Entries marked **"Source"** or **"Verified"** are independent. The pattern below is consistent and important: **the vendor-run numbers are strong; the independently-run numbers are middling.** BenchLM separately has a page for this model with **0 of 625 benchmarks** ("coming soon"), so BenchmarkList is the only aggregator with coverage.

Agent / tool use (BenchmarkList, 4 evals, median 51st percentile):

- **BrowseComp: 79.9%** — rank 35/60, 42nd percentile (*Model card* — vendor)
- **RWSearch: 78.8%** and **FORTE: 73.2%** (office-agent benchmark) — vendor-reported via launch coverage; FORTE 73.2 ties Claude Opus 4.6 and trails GPT-5.5's 77.8
- GDPval-AA: **1,032 Elo** — rank 108/352, 70th percentile (*Verified*, 2026-09-02); field leader 1861, i.e. **−828 Elo behind**
- AA-Briefcase: **739 Elo**, rubric pass rate **16.9%** — rank 77/145, 47th percentile (*Verified*, 2026-10-03); **−1083 Elo behind** the leader
- Tau3-Banking: **13.2%** — rank 80/176, 55th percentile (*Source*); field leader GLM-5.3 at 50.3%
- LongCatClawBench and VitaBench appear in Meituan's evaluation structure on DeepWiki, but **no values surfaced** and are not estimated
- τ²-bench, OSWorld, MCP-Atlas, Toolathlon: no verified public score found

Reasoning / knowledge (BenchmarkList, median 64th percentile on Intelligence):

- **GPQA Diamond: 88.9%** — rank 49/468, **90th percentile** (*Model card*); field leader 96.1%
- **Humanity's Last Exam: 33.7%** — rank 65/478, **87th percentile** (*Source* — independent, and the strongest independently-measured result here)
- **ObviousBench: 95.8% answer pass³ in reasoning mode** (strict pass³ 95.8%, format pass³ 100.0%, run cost $0.34, 54,587 reasoning tokens) versus **68.8% with no reasoning effort** — rank 82/254, 68th percentile (*Source*). The 27-point gap between modes is a direct measurement of what its reasoning actually buys.
- IMO-AnswerBench: **81.8%** — rank 2/5, 75th percentile (*Model card*)
- IFEval: **90.0** (vendor-reported via launch coverage)
- Artificial Analysis Intelligence Index: **19.1** — rank 176/427, 59th percentile (*Source*); field leader Fable 5.1 at 65.7
- **AIIQ Composite IQ: 101** — rank 106/147, 28th percentile (*Source*), with a revealing breakdown: **Academic Reasoning 120, Reliability 108, Programmatic 101, Computer Use 96, Mathematical 94, Abstract Reasoning 85**
- **WritingBench: 83.8** — rank **2 of 55, 98th percentile** (*Model card*). Recorded because it is the model's single best percentile placement anywhere, though it measures generative writing rather than a scored quality dimension here.
- DuelLab GameBench 2: **32.5** — rank 39/48, 19th percentile (*Source*), with an 18.8% model-code failure rate
- CritPt, AA-IFBench, AA-Omniscience: **no verified public score found** — so there is **no hallucination measurement**

Coding (BenchmarkList, 7 evals, median 56th percentile):

- **SWE-bench Multilingual: 77.3%** — rank 16/49, 69th percentile (*Model card*)
- **Terminal-Bench 2.1: 70.8%** — rank 50/194, 75th percentile (*Model card*); field leader Fable 5.1 at 91.4%
- **SWE-bench Pro: 59.5%** — rank 26/58, 56th percentile (*Model card*). This is the release's headline claim: in Meituan's harness it edges **GPT-5.5 (58.6)**, Claude Opus 4.6 (57.3) and Gemini 3.1 Pro (54.2) — a 0.9-point margin over GPT-5.5, measured by Meituan.
- SciCode: **36.3%** — rank 148/296, 50th percentile (*Source* — independent)
- KernelBench Hard: **10.4%** (rank 8/17) and **13.7%** (rank 12/15) across two runs (*Source*), with per-kernel detail — FP8 GEMM 21.8–32.9%, Paged Attention 24.2–31.9%, **KDA CUTLASS 0.0–0.1%**
- **KernelBench Mega: Correct = 0 — rank 28 of 28, 0th percentile** (*Source*). A complete failure on fused GPU megakernels, and BenchmarkList records it as this model's largest single deficit (−100 points against Claude Opus 5.5).
- LiveCodeBench, SWE-bench Verified: no verified public score found

Multimodal:

- **Nothing, consistent with a text-only model.**

Long context:

- **AA-LCR: 65.0%** — rank 146/408, 64th percentile (*Source*); field leader Kimi K3 at 88.7%. **MRCR v2 (8-needle)** appears in Meituan's published evaluation structure on DeepWiki but **no value surfaced**, and I am not estimating it. No other retrieval measurement at any depth.

Competitive position (BenchmarkList head-to-head, recorded for context):

- Against a seven-model comparison set (Kimi K3, Fable 5.1, GLM 5.3, Qwen3.8-Flash-Next, Opus 5.5, Qwen3.8-2.4T-A95B, MiMo-V2.6-Pro), LongCat 2.0 places **#8 of 8 overall**, trailing on Coding (−19 to −56), Intelligence (−20 to −42), Agentic (−33 to −40) and Long Context (−24 to −36) — **but at a blended $1.5 against $0.63–$60**. BenchmarkList records **0 wins and 86 losses** in shared ranked rows.

### Normalized scores (1–100)

- **Tool use: 66/100.** The vendor's own figures are genuinely good — **BrowseComp 79.9%, RWSearch 78.8%, FORTE 73.2%** — and FORTE tying Claude Opus 4.6 on office-agent work is a real result. But every *independently* measured agentic number lands mid-table: GDPval-AA 1,032 Elo at the 70th percentile and **−828 Elo behind the leader**, AA-Briefcase 739 Elo with a 16.9% rubric pass rate at the 47th percentile, Tau3-Banking 13.2%. With no third-party evaluation of the vendor's strongest claims and an AIIQ Computer Use IQ of 96, the mid-60s is where the evidence sits.
- **Reasoning: 74/100.** The best-balanced dimension, and unusually the *independent* numbers help rather than hurt: **HLE 33.7% at the 87th percentile of 478 models** is a strong third-party result, and **ObviousBench 95.8% answer pass³ with 100% format compliance** shows real reliability on the "obvious mistake" failure modes that users notice. GPQA Diamond 88.9% (vendor, 90th percentile) and IMO-AnswerBench 81.8% round it out, and WritingBench's 98th-percentile placement is remarkable even if off-dimension. Capped by an AA Intelligence Index of 19.1, an **AIIQ Abstract Reasoning IQ of 85** against Academic 120 — it is well-read rather than sharp — and the complete **absence of any hallucination measurement**.
- **Context window: 80/100.** A vendor-stated 1M window, confirmed by three sources, with **AA-LCR 65.0%** as the only quantified long-context measurement — mid-band at the 64th percentile and 23.7 points behind Kimi K3. Meituan's own evaluation structure lists **MRCR v2 8-needle** but publishes no value, which for a model named *LongCat* is a conspicuous omission. Scored on capacity with a real deduction for thin validation.
- **Multimodal: 15/100.** **Text-only** — no image, audio or video input, no generated media, no multimodal benchmark, and the successor model's "new image understanding" framing confirms the absence here. Template floor, and it costs this model roughly 13 points of Overall.
- **Coding: 70/100.** The dimension the model was built for, and the vendor evidence is strong: **SWE-bench Multilingual 77.3%, Terminal-Bench 2.1 70.8%, and SWE-bench Pro 59.5% edging GPT-5.5's 58.6** — a genuine claim, if measured in Meituan's own harness with no third-party replication. The independent picture is harsher: SciCode 36.3% at the 50th percentile, KernelBench Hard 10.4–13.7%, and **KernelBench Mega at 0, dead last of 28 entries** — fused GPU megakernel work is entirely beyond it, which is an interesting irony for a model trained on custom domestic silicon.
- **Cost efficiency: 88/100.** Excellent and structurally so. **MIT licence** on a 1.6T-parameter model with 48B active is among the most permissive frontier-scale releases anywhere; the API rate of **$0.30 in / $1.20 out with cached input at $0.006 per million** — the cheapest cached rate in this entire pass — makes high-volume agentic runs genuinely affordable; and BenchmarkList's blended $1.5 against Opus 5.5's $24 and Fable 5.1's $60 quantifies the gap. There is also real strategic value in a frontier model trained without Nvidia hardware. Docked because **1.6T of weights is a severe self-hosting barrier**, there is no free tier on any route, and BenchmarkList's head-to-head shows it losing 86 of 86 shared ranked rows — cheap, but comprehensively outperformed.
- **Overall Score: 61/100.** Mean of the five non-cost dims (66 + 74 + 80 + 15 + 70) / 5 = 61.0. Best fit: **high-volume, cost-sensitive text coding and agentic work on permissively-licensed weights** — SWE-bench-grade multilingual repair, browse/search agents, long-document reasoning and notably strong long-form writing — where $0.006 cached input and an MIT licence matter more than placing top-5 on a leaderboard. Two caveats to design around, both well-evidenced: its strongest claims are **vendor-measured with no third-party replication**, and the independently-run benchmarks consistently land 20–40 percentile points lower than the vendor's. Avoid it for GPU-kernel engineering (KernelBench Mega: 0) and treat its hallucination behaviour as unmeasured.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — **BenchmarkList's** LongCat 2.0 page, which supplied 19 benchmark rows with ranks, percentiles, field leaders, measurement dates and — critically — **per-row provenance labels** distinguishing Meituan's own "Model card" figures from independently "Source"/"Verified" ones, plus the seven-model head-to-head comparison, the blended price index, and the sub-metric detail on KernelBench and ObviousBench; **BenchLM**, whose page for this model carries 0 of 625 benchmarks ("coming soon"), establishing that BenchmarkList is the only aggregator with coverage; and launch-period reporting from The Value Engineering, groundy, remio, askdeck, chats-llm and agenticbrew for the 1.6T/48B architecture, MIT licence, 1M context, the ~50,000-Chinese-domestic-chip training claim, the IFEval/FORTE/RWSearch figures, and the SWE-bench Pro cross-model comparison. The groundy article's explicit warning — that all launch benchmarks were vendor-reported and self-measured with no public third-party evaluation — is reported prominently and shapes the scoring: vendor and independent figures are labelled separately throughout and the independent ones are weighted. Conflicting release dates (2026-06-29 unveiling per this repo's metadata versus 2026-07-20 per BenchmarkList) are both reported rather than reconciled. LongCatClawBench, VitaBench and MRCR v2 appear in Meituan's evaluation structure without extractable values and were not estimated. **No data was imported from `longcat_2.5_preview`**, which is a different, API-only model with its own folder. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
