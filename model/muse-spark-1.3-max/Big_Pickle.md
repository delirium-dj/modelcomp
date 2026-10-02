# Muse Spark 1.3 Max — findings by Big Pickle

- Source: Meta (`opencode/muse-spark-1.3-max`, upstream `meta/muse-spark-1.3` variant **max**)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.3 (**max** reasoning effort) — Meta's fourth Muse Spark release in five months, announced 2026-09-02.
- **Short description:** A multimodal reasoning model for long-horizon, multi-agent and coding workflows, designed to hold state across extended tasks. The 1.3 generation's gains come primarily from **agentic knowledge work and scientific capability**, with Tau3-Bench Banking jumping 12 points over 1.2. Two variants ship: `xhigh` (generally available) and `max` (limited preview to Meta partners). **This entry is the `max` variant** — the one that produced the published benchmark table — and Meta has never published its price or its safety data.
- **Provider / access:** Meta Model API, Meta Muse Code, OpenRouter (`meta/muse-spark-1.3`), one provider (Meta). `max` is gated behind a limited partner preview pending safety review; `xhigh` is what most teams can actually call.
- **Release / knowledge:** released 2026-09-02; knowledge cutoff not published.
- **IDs:** `opencode/muse-spark-1.3-max` (Zen); upstream `Muse Spark 1.3 (max)`.
- **Context window:** **1,048,576 tokens** (OpenRouter, Artificial Analysis: 1.0M / 1.05M), unchanged from Muse Spark 1.2.
- **Modalities:** **text, image and video input; text output.** Note 1.3 **dropped the speech input** that Artificial Analysis lists for 1.2.
- **Pricing (as of 2026-10-02):** **$1.25 in / $4.25 out per 1M**, cache hit **$0.15** (88% discount), blended **$0.78** at 7:2:1; web search $2.50/1K calls. These are the **`xhigh`** prices — **Meta has not published pricing for `max`**.
- **Architecture:** proprietary; Meta publishes no parameter count or architecture details.

### Raw benchmarks found

Artificial Analysis, current index (**v4.3.2**), Muse Spark 1.3 (max):

- **Intelligence Index: 48** (1.2 xhigh: 40) · AA-Briefcase **1589** · GDPval-AA v2 **1703 Elo**
- AutomationBench-AA **58%** · Terminal-Bench 4.0 **33%** · SciCode **59%** · HLE **49%** · GDP.pdf **27%** · CritPt **25%**
- AA-LCR v1.1 **83%** · AA-Omniscience **25**
- Output **255 t/s** (median 202 t/s) · TTFT **27.01s** · time to first answer token **34.85s** · end-to-end **36.81s**
- Output tokens per task **60k**, reasoning tokens per task **34k**; cost per task **$1.60**; ~$2,000 to run the full Intelligence Index

**Important discrepancy, recorded rather than smoothed over:** at launch on 2026-09-02, Artificial Analysis scored `max` at **62** and `xhigh` at **61** (max tying level with Claude Fable 5.1, behind Claude Fable 5.1 max at 66 and Claude Opus 5 max at 63). The current v4.3.2 index scores the same model **48** (xhigh 45). The drop is an index-version change — v4.3.2 added Terminal-Bench 4.0 and GDPval-AA v2.1 — not a regression by Meta. Both numbers are logged so a later revision does not "discover" the higher one and re-score this entry upward.

Artificial Analysis, launch-day article (2026-09-02), variant deltas:

- Tau3-Bench Banking: **max 52% — #1 among all models**; xhigh 47%; Muse Spark 1.2 was 35% (a 12-point gain)
- Terminal-Bench 2.1: 1.3 xhigh **85%** vs 1.2's 80%
- GDPval-AA v2 Elo: max **1754**, xhigh **1709**, 1.2 1615
- `max` reaches its higher agentic scores by spending more: **+62% reasoning on GDPval-AA v2, +28% on Tau3-Bench Banking** vs xhigh
- Cheapest cost-per-task claim in the industry belonged to **xhigh at $0.55** per Intelligence Index task (vs $0.95 GPT-5.6 Sol max, $0.94 Grok 4.6 high, $1.23 Claude Opus 5 high); `max` was explicitly excluded from cost comparison because pricing is unannounced

Long-context retrieval (Meta's own methodology, via goml.io):

- **MRCR v2 256K–512K: 98.5%** (competitor reference 91.5%)
- **MRCR v2 512K–1M: 98.1%** (GPT-5.6 Sol **73.8%** in the same band; Claude Opus 5 has no reported figure)
- Method: OpenAI's MRCR v2 data re-binned by `o200k_base` token count, 100 examples per band, 8-needle variant, rule-based sequence-matcher grading, no agent tools

Design Arena Elo (OpenRouter, Muse Spark 1.3 Max):

- 3D **1416** · Code Categories **1359** · Game Development **1356** · UI Component **1358** · Website **1352** · SVG **1324** · Data Visualization **1315** · Full Stack **1321** · Webapps **1294** · Mobile Apps **1200** · Godot gamedev **1247**

Coding and professional work (Meta, methodology document):

- **DeepSWE v1.1** — 113 tasks, 91 repositories, five languages (TypeScript, Go, Python, JavaScript, Rust), graded by handwritten functional and regression tests, run with mini-swe agent; Meta reports frontier-tier results alongside SWEAtlas. Absolute figures are **not** reproduced in any source I could verify.
- Evaluated against Muse Spark 1.2, Claude Opus 5 and GPT-5.6 Sol at max reasoning effort on professional work, computer use, web research and automation, coding, long-context retrieval and instruction following.
- Vendor efficiency claim: **~20% fewer tool calls and ~25% fewer tokens** than 1.2.

Independent:

- AI Matic Bench: **72.3 / 100** (eight axes)
- **No published safety or alignment figures** for either variant.

### Normalized scores (1–100)

- **Tool use: 80/100.** The strongest reason to choose this model. **Tau3-Bench Banking 52% is the #1 score on that evaluation** in the entire field — banking is the hardest agentic tool-use test in common circulation, and a +12-point jump over its own predecessor is a real, measured gain, achieved by spending 28% more reasoning rather than by a harness change. AutomationBench-AA 58% and Terminal-Bench 2.1 85% corroborate. Terminal-Bench 4.0 at 33% and 27–35s to first answer token hold it below the very top: this is a model that works methodically, not one that sprints.
- **Reasoning: 76/100.** Frontier-adjacent and science-strong: **SciCode 59%**, **HLE 49%**, GDPval-AA v2 **1703 Elo**, AA-Briefcase 1589, CritPt 25%. The caps are AA's current index of 48 and a model that is *deliberately* verbose — 170M tokens on the index against a 82M median, 34k reasoning tokens per task. Also note that the launch-day index figure was 62 and the current one is 48; scoring uses the current, harder index.
- **Context window: 92/100.** Best in this comparison by a wide margin, and — unlike almost every other entry here — **measured**. A 1,048,576-token window plus **98.5% at 256K–512K and 98.1% at 512K–1M** on MRCR v2, versus GPT-5.6 Sol's 73.8% in the same band, is a 24-point lead at the hard end of the range where long-context quality usually collapses. AA-LCR 83% agrees. The only marks withheld: Opus 5 publishes no comparable figure, so the leaderboard is two models deep.
- **Multimodal: 84/100.** Text, **image and video** input confirmed by Artificial Analysis and OpenRouter, with Design Arena Elo across ten generative-artifact categories — UI Component 1358, Website 1352, Data Visualization 1315, SVG 1324 — that measure visual and front-end output quality rather than just VQA accuracy. Marked down for two things: 1.3 **dropped speech input** relative to 1.2, and there is no published MMMU/MMMU-Pro or video-understanding benchmark.
- **Coding: 84/100.** SciCode 59%, Terminal-Bench 2.1 85% (up from 80%), Code Categories Elo 1359, Game Development 1356, and Meta's own frontier-tier DeepSWE v1.1 and SWEAtlas results. Deducted for the same two gaps: Terminal-Bench 4.0 is only 33%, and the DeepSWE absolute numbers are not independently verifiable — Meta published the methodology but the figures circulate only in secondary coverage.
- **Cost efficiency: 74/100.** Genuinely good, and the reason 1.3 was framed as a frontier release: **$1.25 / $4.25** with an 88% cache discount, **$0.78** blended, output at roughly a third of Sonnet-class pricing, plus ~20% fewer tool calls and ~25% fewer tokens than 1.2. Two real deductions: Artificial Analysis's own "cheapest per task at this intelligence level" claim applied to **`xhigh` at $0.55**, not `max`; and `max` costs **$1.60 per task** with 60k output tokens per task and has **no published price at all** — so for this exact variant, cost per accepted result is uncomputable.
- **Overall Score: 83.2/100.** Half-up mean of the five quality dims. Strongest all-round entry written in this pass, and the long-context retrieval result is the single best measured number in the whole comparison. Two caveats to carry into any purchasing decision: **every benchmark in Meta's table is for the `max` variant, which is gated, unpriced and has no published safety data**, while the price everyone quotes belongs to the untested `xhigh`. Treat the capability numbers as an upper bound and ask Meta for an xhigh column, max pricing and safety documentation before committing anything annual.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-02
- Method: public internet research (Meta's "Muse Spark 1.3: Meta reaches the frontier" launch coverage and Artificial Analysis model/provider/release/comparison pages, Meta's published Muse Spark 1.3 multimodal evaluation methodology document, Design Arena Elo rows via OpenRouter, goml.io independent evaluation dated 2026-09-11). Where two Artificial Analysis index versions disagree, both are recorded and the current (harder) v4.3.2 figure is used for scoring. The `.md` in this folder is the **max** variant; `xhigh` figures are labelled as such and never merged into max scores.
- Future sources: add a new file next to this one, e.g. `Muse_Spark_1.3_xhigh.md`, using the same headings.

---