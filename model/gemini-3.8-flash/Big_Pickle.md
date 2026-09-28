# Google Gemini 3.8 Flash — findings by Big Pickle

- Source: Google DeepMind (`gemini-3.8-flash`, three effort tiers); benchmarks from Google's own model evaluation report, Artificial Analysis, BenchLM, llm-stats and emergent.sh
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash, released **2026-09-02**. Google's own framing: "Google's most intelligent Flash model", with significant gains over 3.7 Flash across software engineering, agentic tasks and multi-step reasoning. Ships in **three reasoning-effort tiers** — `low`, `medium`, `high` — which are separate priced SKUs with materially different capability and speed.
- **Short description:** The model that reset the value tier. It leads Claude Opus 5 and GPT-5.6 Sol on Terminal-Bench 2.1 and Vals Finance Agent v2 in Google's own comparison table, matches or beats them on HLE-Verified, and does all of it at **$0.75 / $3.75** — roughly a sixth of GPT-6 Astra's output price.
- **Provider / access:** Google AI Studio, Vertex AI. Reasoning effort selectable per request; the three tiers are separately listed by Artificial Analysis as `gemini-3-8-flash`, `gemini-3-8-flash-medium` and `gemini-3-8-flash-low`.
- **Release / knowledge:** released **2026-09-02**. Knowledge cutoff not published in any source found.
- **IDs:** `gemini-3.8-flash` (high effort), `gemini-3.8-flash-medium`, `gemini-3-8-flash-low`; `google/gemini-3.8-flash` in aggregator naming.
- **Context window:** **1,048,576 tokens (1.049M)** input, **65,536 max output** (llm-stats and LM Market Cap; BenchLM rounds the window to "1M"). Note this is 512K larger than sibling Gemini 3.1 Pro's 1M as BenchLM reports it, and identical to Gemini 3.8's 3.7 predecessor.
- **Modalities:** text, image and video in, text out — consistent with the Gemini 3 line (Artificial Analysis lists speech and video input for 3.1 Pro; no source found that narrows 3.8 Flash's set, and no source confirms it either). Reasoning yes; function calling, JSON mode, web search supported.
- **Pricing (as of 2026-09-28), per 1M:** **$0.75 input / $0.075 cached / $3.75 output** — **identical per-token to Gemini 3.7 Flash**. This matters for the cost discussion below, because the per-token price is not where the change is.
- **Architecture:** **proprietary / closed weights.** No parameter count.

### Raw benchmarks found

**Google's published model evaluation report** (via emergent.sh, which reproduces the full table with Google's own comparison set). All figures are Google's:

| Benchmark | 3.8 Flash | 3.7 Flash | Claude Opus 5 | GPT-5.6 Sol |
|---|---|---|---|---|
| DeepSWE v1.1 | **73.7%** | 65.3% | 74.0% | 72.7% |
| Terminal-Bench 2.1 | **89.4%** | 85.8% | 89.1% | 88.8% |
| Terminal-Bench 4.0 | **19.1%** | 11.2% | **51.8%** | 37.3% |
| HLE-Verified | **54.9%** | 53.6% | 54.4% | 54.5% |
| OSWorld-2.0 | **59.0%** | 50.6% | trails | trails |
| Vals Finance Agent v2 | **61.4%** | 59.0% | — | — |
| Harvey Legal Agent | **10.0%** | 8.8% | — | — |
| GDP.PDF | **35.0%** | 34.0% | — | — |
| CharXiv Reasoning | **86.2%** | 84.5% | — | — |
| LVBench | **87.8%** | 85.4% | — | — |
| LABBench2 | **86.2%** | 82.1% | — | — |

BenchLM (third-party collected):

- **SWE-bench (Vals): 80.0%** — against **GPT-5.6 Sol's 96.2%**, a 16.2-point loss and the largest weakness found for this model
- LiveCodeBench (Vals): **89.5%**; deepSwe **73.8%**; SWE-bench Pro **64.6%**; cursorBench32 **69.2%**
- Terminal-Bench 2.0: **91.9%**; **Terminal-Bench 2.1 (Vals): 81.3%**; **Terminal-Bench 3.0: 34.6%**; Terminal-Bench 4.0 **19.10%**
- GPQA Diamond (Vals): **94.4%**; MMLU-Pro (Vals): **90.2%**; HLE-Verified **54.9%**
- CharXiv without tools: **86.2%**; LVBench **87.8%**
- BenchLM overall **78.41** vs GPT-5.6 Sol **79.64**; lanes: agentic **67.6 (#11 of 151)**, coding **68.1 (#6 of 183)**, reasoning **78.5 (#6 of 22)**, knowledge **76.3 (#6 of 181)**, multimodal **82.8 (#8 of 48)**

Artificial Analysis (v4.3.2, 10 evaluations: AA-Briefcase v1.1, GDPval-AA v2.1, AutomationBench-AA, Terminal-Bench 4.0, SciCode, HLE, GDP.pdf, CritPt, AA-Omniscience, AA-LCR v1.1):

- **Intelligence Index: 41** (`high`), **40** (`medium`), **33–34** (`low`) — "well above average among comparable models (median: 25)"
- **Output speed: 328–332 t/s (`high`)** — fastest model in its class; 265.3 t/s for `low` via AI Studio
- **Time to first answer token: 15.57s (`high`)**; 19.84s on a second measurement; `low` tier is **0.78s**
- **Cost per task: $0.93 (`medium`, lowest in class), $1.24 (`high`)**; AI Studio blended **$0.58** for `low`
- **Prices vary up to 1.3× across the three effort tiers**

llm-stats: LLM Stats Score **51.3, #14 overall**; Reasoning 47.2 (#23), Coding 39.9 (#12), Agents 36.3 (#15).

### Normalized scores (1–100)

- **Tool use: 87/100.** Down 1. Strong and cheap: **Terminal-Bench 2.1 89.4%** — beating Claude Opus 5 (89.1%) and GPT-5.6 Sol (88.8%) in Google's own table — plus **Terminal-Bench 2.0 91.9%**, **Vals Finance Agent v2 61.4%**, **OSWorld-2.0 59.0%** (a large +8.4 jump over 3.7 Flash) and **Harvey Legal Agent 10.0%**. BenchLM's agentic lane is **#11 of 151**. Capped hard by **Terminal-Bench 4.0 at 19.1%**, which is less than 40% of Opus 5's 51.8% and barely half of Sol's 37.3% — the harder terminal benchmark remains a genuine wall — and by **OSWorld 2.0 59.0% trailing Sol's 62.6%** on BenchLM. Capable and cheap; not the frontier terminal agent.
- **Reasoning: 90/100.** Down 2. **HLE-Verified 54.9%** edges Opus 5 (54.4%) and Sol (54.5%) on a benchmark built to be hard, **GPQA Diamond 94.4%** and **MMLU-Pro 90.2%** are strong, and BenchLM's reasoning lane of **78.5 ranks #6 of 22**. The **AA Intelligence Index of 41 at high effort** is "well above average" against a 25 median. Trimmed because 41 is well short of the 53 that Muse Spark 1.3 reaches on a comparable index, and because 3.8 Flash's advantage over 3.7 Flash on reasoning is a modest +1.3 HLE rather than a generational jump.
- **Context window: 93/100.** Up 1. **1,048,576 input / 65,536 output**, confirmed by llm-stats and LM Market Cap, with BenchLM listing 1M. Held below the top band because **no MRCR, RULER or needle-in-a-haystack figure was found for 3.8 Flash**, even though its own 3.5 Flash sibling publishes MRCRv2 at 77.3% — so the omission is Google's disclosure choice. Output at 64K is comfortable but not exceptional.
- **Multimodal: 89/100.** Down 1. **CharXiv Reasoning 86.2%**, **LVBench 87.8%**, **GDP.PDF 35.0%** and **LABBench2 86.2%** are all solid, with BenchLM's multimodal lane at **#8 of 48**. Gemini's family-wide text/image/video input set is the broadest in this comparison. Trimmed marginally because **no MMMU-Pro row exists for 3.8 Flash** (its 3.1 Pro and 3.5 Flash siblings publish 83.9% and 83.6%, and the MMMU-Pro leaderboard's top-three contains no 3.8 Flash entry), and because **GDP.PDF at 35.0% is low** for a document-grounded task in 2026.
- **Coding: 87/100.** Down 1. **DeepSWE v1.1 73.7%** (Google) / **73.8%** (BenchLM) edges GPT-5.6 Sol's 72.7% and nearly matches Opus 5's 74.0%, **LiveCodeBench 89.5%** beats Sol's 82.6%, **cursorBench32 69.2%** beats Sol's 67.2%, and BenchLM's coding lane is **#6 of 183**. Held down by the one severe result in this report's dataset for the model: **SWE-bench (Vals) 80.0% against GPT-5.6 Sol's 96.2%** — a 16.2-point gap on the most-cited coding benchmark — and by SWE-bench Pro at 64.6%.
- **Cost efficiency: 85/100.** Down 3. Per-token this is one of the cheapest frontier options: **$0.75 / $3.75** with $0.075 cached input, and Artificial Analysis measures **$0.93 per task at medium effort — the lowest in its class** — against GPT-6 Astra's $10/$50. The reason it is not higher is a real and easily-missed cost fact: **real-world cost is roughly 40% higher than Gemini 3.7 Flash despite identical per-token pricing**, because 3.8 Flash reasons for longer. Anyone migrating from 3.7 Flash on the assumption of a price-neutral upgrade will get a ~40% bill increase, and the three effort tiers vary pricing by up to 1.3× on top.
- **Overall Score: 89.2/100.** Half-up mean of the five quality dims: (87 + 90 + 93 + 89 + 87) / 5 = 89.2. Best fit: **the best quality-per-dollar model in this dataset**, and the one to reach for when a frontier-adjacent agent must run at volume. It beats Claude Opus 5 and GPT-5.6 Sol on Terminal-Bench 2.1, HLE-Verified and Finance Agent v2 while costing a sixth of Astra's output rate, and it runs at 328 t/s. The honest limits: **Terminal-Bench 4.0 at 19.1% and SWE-bench at 80.0%** show it is not the frontier coder, **the real-world bill is ~40% above 3.7 Flash**, and its multimodal coverage is the one dimension where Google's own disclosure is thinnest for this tier.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-28
- Method: public internet research (Google's model evaluation report as reproduced in full by emergent.sh, Artificial Analysis `releases/gemini-3-8-flash` and `models/gemini-3-8-flash` and `models/gemini-3-8-flash-low/providers`, BenchLM `gemini-3-1-pro-vs-gemini-3-8-flash` and `gemini-3-8-flash-vs-gpt-5-6-sol` comparison pages, BenchLM `gemini-3-pro` and `gemini-3-flash` model pages for family context, BenchLM MMMU-Pro leaderboard, llm-stats `gemini-3-pro-preview-vs-gemini-3.8-flash`, LM Market Cap model page). Scores are normalized 1–100 interpretations, not official vendor scores.
- **Re-research note (supersedes the 2026-09-17 pass):** net Overall 90 → **89.2**, a small, honest downgrade. Quality dimensions moved down 1–2 points each on newly surfaced evidence: **Terminal-Bench 4.0 at 19.1%** (against Opus 5's 51.8% and Sol's 37.3%) caps Tool use at 87; **AA Intelligence Index 41 at high effort** against a 25 median caps Reasoning at 90; **SWE-bench 80.0% against Sol's 96.2%** holds Coding at 87; and the absence of any MMMU-Pro row trims Multimodal. Context rose 1 to 93 on the confirmed 1,048,576 / 65,536 figures. The single most consequential new fact is economic: **Artificial Analysis and emergent.sh both report that real-world cost is ~40% higher than Gemini 3.7 Flash despite byte-identical per-token pricing**, because 3.8 Flash reasons for longer — that took Cost efficiency 88 → 85 and is the change most likely to affect a real purchasing decision.
- **Conflicts recorded rather than smoothed over:** (1) **AA Intelligence Index — the important one.** emergent.sh (2026-09-03) reports AA scoring 3.8 Flash at **59** at high effort, "median 36", "17th of 196". Artificial Analysis's own current page says **41**, and the AA releases page lists **41 (high) / 40 (medium) / 33–34 (low)** on **index v4.3.2**, with a median of 25. AA's first-party figure is used; emergent.sh's 59 is most likely a pre-restatement figure from an earlier index version, and the version difference is exactly why cross-source index comparisons are unsafe. (2) **Terminal-Bench 2.1 has two values** — 89.4% on Google's own table and 81.3% on BenchLM's Vals run. Different harness and evaluation set; both are reported rather than one being chosen. (3) **Coding rankings directly contradict across methodologies** — BenchLM puts 3.8 Flash at **#6 of 183** in coding while LM Market Cap puts it at **#237 of 409**. These are different composite methodologies over different signal sets (LM Market Cap weights recency and pricing signals heavily); BenchLM's benchmark-lane ranking is the more meaningful of the two for capability, and both are disclosed.
- Future sources: add a new file next to this one, e.g. `Claude_Fable_5.1.md`, using the same headings.
