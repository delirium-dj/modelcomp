# Gemini 3.8 Flash — findings by Claude Opus 5

- Source: Google / Google DeepMind (`gemini-3.8-flash`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.8 Flash (stable / GA). No `-free` API SKU verified; consumer access runs through the Gemini app Pro & Ultra tiers and Google AI Studio. Variant/alias flag: **`gemini-3.8-flash-cyber` is a separate, access-restricted twin**, not this entry — it is gated behind Google's Fairwind Program for vetted defensive security teams and has its own folder in this dataset.
- **Short description:** Google DeepMind's Flash-tier model tuned for autonomous agentic loops, long-horizon software engineering and multi-step tool use, released 2026-09-02 — Google's third Flash iteration in six weeks (3.6 Flash 2026-07-21, 3.7 Flash 2026-08-13). It keeps 3.7 Flash's envelope (1M context, full multimodal input, same headline price) and changes behaviour rather than architecture: Google says it "works harder", reasoning longer and calling more tools per task.
- **Provider / access:** Gemini API (`gemini-3.8-flash`), Google AI Studio, Gemini Enterprise Agent Platform, the Gemini app (Pro & Ultra), AI Mode, Google Antigravity, Android Studio, Google Stitch and Gemini in Sheets. Four consumption modes: Standard, Batch, Flex and Priority. Native surface is the Gemini/Interactions API, not OpenAI Chat Completions. Tooling: context caching, code execution, computer use (**preview**), file search, function calling, Google Maps and Search grounding, structured output and URL context. Not supported: native audio generation, image generation, Live API.
- **Release / knowledge:** Released 2026-09-02. Knowledge cutoff **March 2026**, with Google noting some domains may effectively be limited to January 2025.
- **IDs:** `gemini-3.8-flash` (stable). Restricted sibling: `gemini-3.8-flash-cyber`. **No free-tier API ID verified** (AI Studio free usage was not confirmed from primary sources in this pass).
- **Context window:** **1,048,576 input tokens, 65,536 max output tokens** — Google-reported in the model documentation and independently restated by OpenRouter's listing. Google's own documentation carries the caveat that window capacity is not proof of recall across a full million-token prompt.
- **Modalities:** Input: **text, image, video, audio and PDF**. Output: text only. Reasoning: yes — three thinking levels (`low`, `medium` default, `high`); `minimal` returns an error, and thinking tokens are billed as output. Tool calls: yes (broad tool surface above). JSON mode / structured output: yes.
- **Pricing (as of 2026-10-03):** USD per 1M tokens, **introductory rates that expire 2026-12-31 and then double**:
  - Standard: **$0.75 in / $0.075 cached in / $3.75 out** → **$1.50 / $0.15 / $7.50 from 2027-01-01**
  - Batch and Flex: $0.375 / $0.0375 / $1.875 → $0.75 / $0.075 / $3.75
  - Priority: $1.35 / $0.135 / $6.75 → $2.70 / $0.27 / $13.50
  - Cache storage: $0.50 per 1M tokens per hour → $1.00
  - Google Search / Maps grounding billed separately: 5,000 free requests shared across eligible Gemini 3.x usage, then **$14 per 1,000 queries**
- **Architecture:** Proprietary, closed weights. Parameter count, active parameters, topology, layer count, training tokens and training compute are **all explicitly undisclosed** by Google.

### Raw benchmarks found

> Evidence is kept separated by harness. *Google-reported* = Google DeepMind's September 2026 evaluation chart / model card. *Independent* = a benchmark operator or third-party lab ran the model. Configuration variance is real here: Google's Enterprise developer guide reports Terminal-Bench 2.1 at **90.8% vs 81.6%** where the launch chart reports **89.4% vs 85.8%** for the same 3.8-vs-3.7 pair. I record both rather than averaging them.

Agent / tool use:

- Terminal-Bench 2.1 (**agentic CLI**): **89.4%** Google-reported launch chart (3.7 Flash 85.8%); **90.8%** in Google's Enterprise developer guide (3.7 Flash 81.6%). Either way it clears the frontier reference and leads its cost class.
- Terminal-Bench 4.0 (**frontier high-difficulty CLI**): **19.1%** (3.7 Flash 11.2%). Google's own chart puts Claude Opus 5 at 51.8% on the same row — a collapse of roughly 33 points against the frontier tier on the harder benchmark version.
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA v2 (Elo): **1,545** (3.7 Flash 1,482; Claude Opus 5 reported at 1,824 and GPT-5.6 Sol at 1,710 in third-party comparison tables)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- OSWorld 2.0 (computer use, partial score, batch tool enabled): **59.0%** (3.7 Flash 50.6%; Claude Opus 5 75.4% — a decisive ~16-point loss)
- Vals Finance Agent v2 (chart score): **61.4%** (3.7 Flash 59.0%)
- Harvey Legal Agent Benchmark (all-pass rate): **10.0%** (3.7 Flash 8.8%) — a class lead on a benchmark where every model is close to the floor
- Gray Swan indirect prompt injection (attack success rate, lower is better): **5.5%** (3.7 Flash 9.2%)

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: **HLE-Verified 54.9%** Google-reported (3.7 Flash 53.6%)
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: **59 on Index v4.1.1 at high reasoning**, up from 56 for 3.7 Flash (independent). Same run: ~305 output tokens/second, ~**48,000 output tokens per index task**, cost per task up from **$0.40 to $0.58** and time per task from 2.2 to 2.5 minutes versus 3.7 — a ~40% cost increase for a 3-point intelligence gain. **Conflicting aggregator figure:** at least one third-party API index lists this model at 40.9 (#17 of 72) and another ranks it #13 of 212 at 73.95/100 on its own composite, so only the AA v4.1.1 figure of 59 is treated as traceable here.
- Omniscience Accuracy / Hallucination Rate: no verified public score found. Google's model card explicitly warns the model can hallucinate, may be slow or time out, and that Search grounding improves freshness without guaranteeing correctness.
- Other published reasoning rows (Google-reported): **BioMysteryBench 88.8%** human-solvable split (Claude Opus 5 90.1%) and **56.5%** human-difficult split (3.7 Flash 43.5% — a 13-point jump, the largest single delta in the launch chart); **LABBench2 86.2%** (3.7 Flash 82.1%)

Coding:

- SWE-bench Verified / SWE-Pro: SWE-bench Verified — no verified public score found. **SWE-bench Pro 61.6%** (3.7 Flash 60.4%)
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: **DeepSWE v1.1 73.7%** Google-reported (3.7 Flash 65.3%), and **independently confirmed at 74% ±1%** on the public DeepSWE v1.1 leaderboard running `mini-swe-agent` at high effort (3.7 Flash 65% ±2%). The independent run also quantifies the "works harder" mechanism: **143,000 output tokens and 166 agent steps** per task versus 107,000 and 125 for 3.7, with average run cost rising from $2.18 to $2.36.
- GDP.PDF (all-pass rate): **35.0%** (3.7 Flash 34.0%; GPT-5.6 Sol 40%)

Long context / multimodal:

- **LVBench (long video): 87.8% agentic / 87.1% static** (3.7 Flash 85.4%, condition not stated — Google's chart does not allow a clean delta)
- **CharXiv Reasoning (dense scientific charts, no tools): 86.2%** (3.7 Flash 84.5%)
- **No MRCR, RULER or GraphWalks result found at any window length** — there is no published needle-in-a-haystack retrieval rate for the 1M window, and Google's own documentation declines to claim perfect recall.

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 at **89.4–90.8%** clears the methodology's ~88%+ frontier anchor, Gray Swan injection ASR of 5.5% shows a genuinely hardened agent loop, and it leads its price class on Vals Finance (61.4%) and Harvey Legal (10.0% all-pass). It cannot reach the 90+ band because the frontier reference needs more than one row: **GDPval-AA v2 at 1,545 Elo sits well below the ~1750+ marker**, **Tau3-Banking and Claw-Eval were never published** (the methodology's explicit missing-evidence penalty), OSWorld 2.0 at 59.0% loses to Opus 5's 75.4% by ~16 points, computer use is still **preview**, and most damaging, **Terminal-Bench 4.0 at 19.1% against Opus 5's 51.8%** shows the TB2.1 result does not survive a harder harness. The TB2.1 strength is real but narrow.
- **Reasoning: 88/100.** The independent **Artificial Analysis Intelligence Index of 59** is the single most credible signal and sits just below the 60+ frontier marker; **HLE-Verified 54.9%** is well above the 40%+ reference; LABBench2 86.2% and the 13-point BioMysteryBench jump on the human-difficult split (56.5%) confirm real gains on hard science. Capped at 88 by the absence of **GPQA Diamond, MRCR/LCR and CritPt**, by BioMysteryBench's human-solvable split still losing to Opus 5 (88.8 vs 90.1), by a conflicting third-party index figure (40.9) that cannot be reconciled, and by the fact that the 3-point index gain over 3.7 cost ~40% more per task — intelligence bought with tokens rather than efficiency.
- **Context window: 96/100.** Verified **1,048,576 input tokens** places it in the ≥1M tier (95–100), and the long-video result (LVBench 87.8% agentic) is real evidence of working across very long multimodal inputs rather than merely accepting them. It cannot reach 100 because the tier's ≥98%-retrieval-at-512K+ condition is **completely unverified** — no MRCR/RULER/GraphWalks figure exists and Google itself states capacity is not proof of recall. The 65,536-token output ceiling clears the methodology's <64K caveat threshold only barely and is half of what the frontier Opus/Fable tier offers, which matters for long single-shot generations.
- **Multimodal: 93/100.** Input covers **text, image, video, audio and PDF under one stable ID** — audio input puts it in the methodology's top band (90–100), and unlike most models in that band the breadth is backed by measured results: CharXiv Reasoning 86.2% on dense scientific plots and LVBench 87.8% on long video, both class-leading. Held at 93 rather than higher because output is **text only** (no native audio generation, no image generation, no Live API) and because the document path is the weak link — **GDP.PDF all-pass is only 35.0%**, behind GPT-5.6 Sol's 40%, so PDF ingestion is supported but not reliable end-to-end.
- **Coding: 90/100.** This is the dimension with the best evidence quality: **DeepSWE v1.1 at 73.7% Google-reported is independently reproduced at 74% ±1%** on the public leaderboard with a documented harness (`mini-swe-agent`, high effort), landing exactly on the methodology's 74%+ frontier reference, and **Terminal-Bench 2.1 at 89.4–90.8%** clears the 85%+ coding reference. It sits at the band floor because **SWE-bench Verified, LiveCodeBench, SciCode and Vibe Code Bench are all missing**, SWE-bench Pro at 61.6% is only a 1.2-point gain over 3.7 and far from frontier, and the 74% pass rate is bought with 143,000 output tokens and 166 agent steps per task — a third more than 3.7 — so throughput-limited pipelines will not see the benchmark result.
- **Cost efficiency: 86/100.** $0.75 in / $3.75 out is far below the $3/$15 anchor that maps to ~60, cached input at $0.075 is almost free, and Batch/Flex halve it again to $0.375/$1.875 — on the tasks where it matches frontier models (DeepSWE 73.7 vs Opus 5 74.0, TB2.1 89.4 vs 89.1) the per-task spend is roughly $2.36 against double-digit dollars for the Opus tier. Four concrete deductions keep it out of the 90s: **every rate doubles on 2027-01-01** (to $1.50/$7.50), thinking tokens bill as output while the model deliberately spends ~30% more of them than 3.7, AA measured real cost per task rising $0.40 → $0.58, and Search/Maps grounding costs **$14 per 1,000 queries** past the shared 5,000-request allowance. No $0 tier verified.
- **Overall Score: 90.4/100.** Mean of the five non-cost dimensions (85 + 88 + 96 + 93 + 90) / 5 = 90.4 — the strongest value proposition in this dataset for repository-scale coding agents, terminal automation, and finance/legal/scientific pipelines that ingest charts, PDFs, audio or hours of video, because it buys near-frontier DeepSWE and Terminal-Bench 2.1 results at roughly a tenth of Opus-tier token prices. Do not choose it for open-ended desktop GUI automation (OSWorld 59.0 vs 75.4), for the hardest ambiguous systems debugging (Terminal-Bench 4.0 19.1%), for high-Elo knowledge-work prose (GDPval 1,545), or for latency- and token-budget-capped pipelines — and re-baseline the business case before 2027-01-01, when the price doubles.

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-03
- Method: fresh public internet research only — DuckDuckGo result set for Gemini 3.8 Flash benchmarks/pricing/context; Kingy AI's review (published 2026-09-02, updated 2026-09-16), which transcribes Google DeepMind's launch evaluation chart with explicit evidence labels and documents the Enterprise-guide configuration variance, the full four-route pricing table with the 2027-01-01 doubling, the spec/modality/tool table, the model-card safety results, the independent DeepSWE v1.1 leaderboard run and the Artificial Analysis v4.1.1 figures; CodingFleet's review (2026-09-05) for the corroborating benchmark table, SWE-bench Pro, Gray Swan ASR, per-task cost comparison and the Flash Cyber / Fairwind distinction. Those secondary sources attribute to Google's launch post, the Gemini API model documentation, the Gemini Developer API pricing page, the Google DeepMind model card, Google Cloud's Gemini Enterprise developer guide, Artificial Analysis, the DataCurve DeepSWE v1.1 leaderboard and Vals AI. Where harnesses or Google surfaces disagree (Terminal-Bench 2.1 89.4% vs 90.8%; AA Index 59 vs a third-party 40.9), both figures are recorded rather than reconciled. No peer `model/` findings files were read. Unavailable figures (GPQA Diamond, SWE-bench Verified, LiveCodeBench, SciCode, Vibe Code Bench, Tau3, Claw-Eval, Toolathon, MCP-Atlas, MRCR/RULER/GraphWalks, CritPt, hallucination rate, parameter count) are recorded as "no verified public score found" rather than estimated. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
