# Google Gemini 3.1 Pro Preview — findings by Big Pickle

- Source: Google DeepMind (Vertex AI / AI Studio); benchmarks from Artificial Analysis, BenchLM, llm-stats and Meta's published comparison chart
- Date: 2026-09-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro **Preview** (`gemini-3.1-pro-preview`). This is a **preview-tier checkpoint released 2026-02-19**, i.e. seven months old as of today, and it has been superseded inside its own family: **Gemini 3.8 Flash (2026-09-02) beats it on almost every axis at roughly one-third the price.** That framing matters more than any single benchmark below.
- **Short description:** Google's reasoning flagship of early 2026 — a long-context, multimodal, tool-using model. Artificial Analysis characterises it as "above average in intelligence, but somewhat expensive when comparing to other models of similar price. It's also faster than average and **fairly concise**" (57M tokens generated on the Index versus a 79M median).
- **Provider / access:** Google Vertex AI (130.6 t/s, 22.29 s TTFT) and Google AI Studio (117.6 t/s, 26.32 s TTFT) — two providers, both first-party, blended price identical at $1.74. Reasoning variant; a non-reasoning variant may also exist. Function calling, JSON mode, web search supported.
- **Release / knowledge:** released **2026-02-19**. Knowledge cutoff not published in any source found.
- **IDs:** `gemini-3.1-pro-preview` (Google API), `google/gemini-3.1-pro-preview` (aggregator naming).
- **Context window:** **1,048,576 tokens input (1M)**, **65,536 tokens max output** (llm-stats). Note this is *smaller* than Gemini 3 Pro's 2M window (benchlm pricing table), so Google's own Pro line regressed on nominal context between 3 and 3.1.
- **Modalities:** **text, image, speech and video in; text out** (Artificial Analysis). Note **speech input** — broader than most rivals' vision-plus-text. Reasoning yes; function calling yes; structured output/JSON yes; web search yes.
- **Pricing (as of 2026-09-28):** **$2.00 in / $0.20 cached / $12.00 out** per 1M; **$1.74 per 1M blended** at 7:2:1 (Artificial Analysis and BenchLM's Google pricing table agree). **Discrepancy flagged:** llm-stats' SWE-bench leaderboard lists this model at **$2.50 / $15.00**. Two independent sources give $2.00/$12.00, so that is used; the llm-stats row is either stale or a different SKU.
- **Architecture:** **proprietary / closed weights.** No parameter count.

### Raw benchmarks found

Intelligence index (the headline, and the finding that changes this report):

- **Artificial Analysis Intelligence Index: 37** for `Gemini 3.1 Pro Preview` — AA's own words: "above average in intelligence... median: 29", and "somewhat expensive when comparing to other models of similar price."
- OrcaRouter's rendering of the same AA data: **36.7, #47 of 140, "better than 66% of models compared."**
- **Version caveat, stated plainly:** AA's current index is v4.3.2 while Meta's 1.3 page reported v4.2 figures, so cross-vendor index numbers are not strictly comparable. Within-version, AA places 3.1 Pro at 37 against a 29 median — above average, not frontier. It is **not** in the same band as Muse Spark 1.3 (53) or the top Opus/GPt tier, and the seven-month gap since its February release explains most of that.
- **AA Coding Index: 68.8, #30 of 138, "better than 75% of models compared."**

Agentic / tool use:

- Terminal-Bench 2.1 (Vals): **70.8%** — and **Gemini 3.8 Flash scores 81.3% on the same benchmark**, so Google's own successor beats it by 10.5 points (BenchLM)
- Claw-Eval: **57.8%**
- DeepSearchQA: **69.7%**
- BenchLM public-lane agentic score: **40.1 (#120 of 151)** — bottom quartile of models with coverage

Reasoning / knowledge:

- ARC-AGI-2: **77.1%** (best of the Gemini flash/pro models BenchLM compares; 3.5 Flash gets 72.1%)
- **ARC-AGI-3: 0.4%** — effectively zero. Whatever ARC-AGI-3 measures, this model does not do it, and BenchLM still ranks the model "Unranked · 2 rankable rows" in its reasoning lane.
- GPQA Diamond: **94.3%**; Humanity's Last Exam **without tools: 45.4%** (both from Meta's published four-way comparison chart)
- BenchLM reasoning lane average: **50.7**

Coding:

- SWE-bench Verified: **0.806** (llm-stats leaderboard, 1M context) — behind Claude Fable 5 at 0.950, Claude Opus 4.8 at 0.886, and level with DeepSeek-V4-Pro-Max
- LiveCodeBench Pro: **82.9%**; React Native Evals: **78.9%**
- **Vibe Code Bench: 32.03%** — a weak spot, and 3.5 Flash scores 48.68% on the same benchmark (BenchLM)
- BenchLM coding lane average: **46.2–46.3 (#99 of 183)**

Multimodal / grounded:

- MMMU-Pro: **83.9%** (beats 3.5 Flash's 83.6%)
- CharXiv: **80.2%** (3.5 Flash scores 84.2%)
- ERQA: **69.4%**
- MedXpertQA multimodal: **81.3%**; MedXpertQA text: **71.5%**
- ZeroBench: **29.0%**
- BenchLM multimodal lane average: **79.2 (#12 of 48)** — this is the model's best-evidenced dimension, with four independent benchmark rows and full speech/video input support
- Speaks to why the multimodal score holds high while everything else moved down

Speed / cost (independent):

- **112.4 t/s** on Google's API (AA); Vertex 130.6 t/s, AI Studio 117.6 t/s
- **TTFT 25.39 s** — "at the higher end" versus a 3.33 s median for its price tier
- $879.63 to evaluate on the Intelligence Index; concise relative to peers at 57M tokens

### Normalized scores (1–100)

- **Tool use: 78/100.** Down 12, the largest single correction in this re-run besides Multimodal on 1.2. **Terminal-Bench 2.1 70.8%** is a mid-tier terminal-agent result and **Gemini 3.8 Flash reaches 81.3% on the identical benchmark** — Google's own product line out-agentifies this model. **Claw-Eval 57.8%** and **DeepSearchQA 69.7%** are respectable but unremarkable, and BenchLM's agentic lane ranks it **#120 of 151**, bottom quintile among models with coverage. Real, working tool use — just not frontier tool use, and demonstrably not best-in-family.
- **Reasoning: 76/100.** Down 15, and this is where the earlier pass was most wrong. The **AA Intelligence Index of 37** is the anchor and it is unambiguous: above average, not frontier, at a **36.7 / #47 of 140** on OrcaRouter's rendering. The decisive detail is **ARC-AGI-3 at 0.4%** — a near-total failure on a hard general-reasoning probe that BenchLM still counts among only two rankable rows for this model. GPQA-D 94.3% and HLE-without-tools 45.4% look excellent in isolation, but they are **Meta's chart columns for Gemini**, and they describe a knowledge-recall profile that a seven-month-old February checkpoint has since been lapped. Reasoning lane average 50.7. Frontier-adjacent on paper, mid-tier in the current field.
- **Context window: 95/100.** **1,048,576 input / 65,536 output**, confirmed by llm-stats, and consistent with AA and BenchLM. Held below 100 for two reasons: no public MRCR, RULER or needle-in-a-haystack measurement was found for 3.1 Pro specifically (its own 3.5 Flash sibling does publish MRCRv2 at 77.3%, so the gap is Google's disclosure choice, not an impossibility), and the 1M window is a **regression from Gemini 3 Pro's 2M** per BenchLM's pricing table.
- **Multimodal: 90/100.** Down 2, and the only dimension where the evidence is genuinely strong. **text, image, speech and video in** is confirmed by AA, and the benchmark coverage is the best in this report: **MMMU-Pro 83.9%** (beating 3.5 Flash), **CharXiv 80.2%**, **ERQA 69.4%**, **MedXpertQA MM 81.3%**, **ZeroBench 29.0%** — five independent rows, with a BenchLM lane rank of **#12 of 48**. Speech input in particular puts it ahead of most of the field. The small trim reflects ZeroBench's 29.0% and CharXiv trailing 3.5 Flash, nothing more.
- **Coding: 82/100.** Down 7. Real and respectable: **SWE-bench Verified 0.806**, **LiveCodeBench Pro 82.9%**, **React Native 78.9%**, **AA Coding 68.8 (#30 of 138)**. Held well below frontier because **Vibe Code Bench is 32.03%** — roughly 16.6 points behind 3.5 Flash on the same benchmark — and because BenchLM's coding lane puts it **#99 of 183**. It writes and fixes real code; it is not the best code model available, including from its own vendor.
- **Cost efficiency: 62/100.** Down 8. **$2.00 in / $12.00 out, $1.74 blended** is "moderately priced" input and "somewhat expensive" output against price-tier medians of $2.00 and $10.00 — and AA's summary verdict is explicit: "somewhat expensive when comparing to other models of similar price." Worse, the value case has collapsed: **Gemini 3.8 Flash delivers a higher overall score (78.41 vs 69.82), better reasoning (78.5 vs 50.7) and a better Terminal-Bench result (81.3% vs 70.8%) for $0.75 / $3.75** — about a third of the price. A 25.39 s TTFT adds a latency penalty on top. Paying $12/M output for a February preview that your own vendor has superseded is poor value by any measure.
- **Overall Score: 84.2/100.** Half-up mean of the five quality dims: (78 + 76 + 95 + 90 + 82) / 5 = 84.2. Best fit: a genuinely capable multimodal long-context model with the broadest input-modality set in its price tier, whose benchmark profile is well documented and whose reasoning and agentic numbers have been overtaken — by a lot — since February. The honest one-line verdict: **this is a preview checkpoint that should be priced and chosen like one.** If you need a Gemini Pro today, the evidence points at 3.8 Flash; if you specifically need 3.1 Pro, you are paying $12/M output and 25 s of TTFT for a 37 index.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-28
- Method: public internet research (Artificial Analysis `gemini-3-1-pro-preview` model page and provider benchmarking page, BenchLM `gemini-3-1-pro-vs-gemini-3-8-flash` and `gemini-3-1-pro-vs-gemini-3-5-flash` comparison pages, BenchLM Google API pricing table, llm-stats SWE-bench Verified leaderboard and the `gemini-3-pro-preview-vs-gemini-3.8-flash` comparison, OrcaRouter comparison page, pricepertoken). Benchmark figures for GPQA-D, HLE-without-tools, MMMU-Pro, CharXiv, ERQA, ZeroBench, MedXpertQA, LiveCodeBench Pro, React Native and τ²-bench originate from **Meta's published four-way comparison chart**, where they are Google's column — correctly attributed here, and the exact misattribution that was corrected in the Muse Spark 1.3 report in this same batch.
- **Re-research note (supersedes the 2026-09-17 pass):** net Overall 91 → **84.2**, the steepest downgrade so far in this batch, and it comes from one fact the earlier pass missed. **The Artificial Analysis Intelligence Index for this model is 37** (36.7 / #47 of 140 on OrcaRouter's rendering), not a frontier-band number. Everything downstream follows: Tool use 90 → 78 on **Terminal-Bench 2.1 70.8% versus 3.8 Flash's 81.3%**, Reasoning 91 → 76 on **ARC-AGI-3 at 0.4%**, Coding 89 → 82 on **Vibe Code Bench 32.03% versus 3.5 Flash's 48.68%**, Cost 70 → 62 because the successor is better *and* roughly a third of the price. The release date is the root cause: this is a **February 2026 preview**, and the re-run surfaced that it is seven months stale within its own family. Multimodal (92 → 90) held nearly flat because it is the one dimension with real, current, multi-source evidence — MMMU-Pro 83.9%, CharXiv 80.2%, ERQA 69.4%, #12 of 48 on BenchLM's lane.
- **Conflicts recorded rather than smoothed over:** (1) **pricing** — $2.00/$12.00 per AA and BenchLM versus $2.50/$15.00 on llm-stats; two sources beat one, so $2.00/$12.00 is used and the discrepancy is disclosed. (2) **index version** — AA's current index is v4.3.2 while the Muse Spark 1.3 comparison ran on v4.2, so 37 and 53 are not strictly comparable; the within-version median (29) is the sound basis for the judgment. (3) **context regression** — BenchLM lists Gemini 3 Pro at 2M against 3.1 Pro at 1M, so the "Pro" label no longer implies the largest window in the family.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
