# GPT-6.1 Sol — findings by Space Bunny

- Source: OpenAI / GPT-6.1 Sol
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol (report covers the `max` reasoning variant, the one Artificial Analysis evaluates; the effort ladder is now mapped and the best point is **not** `max` — see Tool use)
- **Short description:** OpenAI's 2026-09-29 refresh of the GPT-6 Sol tier — a step change in agentic and terminal performance over GPT-6 Sol at roughly the GPT-6 Sol price, and a far cheaper way to approach GPT-6 Astra's capability. It is a distinct model from GPT-6 Sol, GPT-6 Astra and GPT-6 Luna.
- **Provider / access:** OpenAI API (Responses API; 6 providers route it per Artificial Analysis). Proprietary weights.
- **Release / knowledge:** Released **2026-09-29** (Artificial Analysis release page and FAQ; models.dev records the same date; the Hugging Face repos were created 2026-09-29). **OpenAI has since published its own launch post**, which the 2026-09-30 report noted did not exist — the vendor table below is from it. Knowledge cutoff still not published in any source found.
- **Context window:** **1,050,000 tokens** with **128,000 max output** (models.dev); Artificial Analysis reports the class as 1M. Verified as a metadata field. **New this pass: measured retrieval now exists — AA-LCR 83.0%.**
- **Modalities:** Text and image input, text output. Reasoning: yes, across five effort levels (`low` / `medium` / `high` / `xhigh` / `max`; the `none` setting present on GPT-6 Sol was **removed** in 6.1). Tools and structured output supported (models.dev records reasoning, tool calling and structured output; `temperature: No`).
- **Pricing (as of 2026-10-13):** **$2.00 input / $10.00 output per 1M tokens, $0.10 cached input** (OpenAI's launch post states the exact triple). Cache discount is therefore 95%. Same list price as GPT-6 Sol, with the **cache-read rate halved from $0.20 to $0.10**. Blended at the 7:2:1 cache-hit/input/output ratio this is **$1.47 per 1M tokens**.
- **Architecture:** Proprietary; OpenAI has not disclosed parameter count or architecture.

### Raw benchmarks found

> **Provenance has changed fundamentally since 2026-09-30.** That report said the
> model "shipped one day before this report, so the public record is thin and the
> vendor has published no launch table." Both halves of that are now false: OpenAI
> has published a launch post with six vendor suites across all five effort levels,
> and the independent record has filled in behind it. Three sources are kept
> separate below — **vendor (OpenAI's own runs)**, **independent evaluator
> (Artificial Analysis, full ladder)**, and **independent third party (VulcanBench,
> 115 judged runs)** — because they disagree in ways that matter.

**OpenAI's own launch figures (vendor, unreproduced):**

- DeepSWE v1.1, score and cost per task by effort — the most useful table in the release:
  `low 64.4% · $0.17` / `medium 73.0% · $0.42` / **`high 75.2% · $0.65`** /
  `xhigh 71.9% · $0.79` / `max 71.9% · $1.57`. Same effort on both sides: GPT-6 Sol
  37.2 / 56.6 / 65.3 / 66.6 / 68.8 at $0.16 / $0.38 / $0.64 / $1.00 / $2.74; GPT-6
  Astra 67.0 / 72.8 / 73.2 / 74.1 / 73.2 at $1.60 / $3.08 / $3.92 / $4.43 / $7.50.
  **The score peaks at `high` and declines by 3.3 points at the two most expensive
  rungs, where cost more than doubles.**
- Terminal-Bench Science 0.1: **57.0% at `max`, $5.47/task** — more than double
  GPT-6 Sol's 27.6% ($12.18). Claude Opus 5.5 scores 63.3% ($23.21) and **GPT-6
  Astra still leads at 68.1% ($23.80)**; OpenAI itself says to use Astra for the
  hardest scientific research tasks.
- OSWorld 2.0 offline: **71.4% at `max`**, +7.0 over GPT-6 Sol, −2.1 under Astra, at
  roughly one-seventh the cost per task.
- GDP.pdf (professional documents — tables, charts, diagrams, fine print): **32.0%
  at `high`** (+4.0 over GPT-6 Sol, −0.2 under Astra); at `max`, 31.0% at $0.42/task
  against Astra's identical 31.0% at $2.08 and Claude Opus 5.5's 26.2%.
- AutomationBench 1.0.6: 36.1% at `max` (+2.9 over GPT-6 Sol); at `medium`, +4.8 over
  GPT-6 Sol and +2.2 over Claude Opus 5.5 at about a third of the cost.
- Factual error rate: **7.7% at `high`**, from GPT-6 Sol's 11.4%.

**Artificial Analysis — independent, full effort ladder (the core new evidence):**

- Intelligence Index: `low` **42** / `medium` **48** / `high` **50** / `xhigh` **51** /
  `max` **52**. Cost per task: **$0.13 / $0.21 / $0.32 / $0.39 / $0.72**.
- AA-Briefcase v1.1 Elo: 1,118 / 1,365 / 1,471 / 1,507 / **1,564**
- GDPval-AA v2.1 Elo: 1,297 / 1,433 / 1,486 / 1,510 / **1,575**
- AutomationBench-AA (partial credit): 52.6% / 62.6% / 64.5% / **66.6%** / 64.9%
- **Terminal-Bench 4.0: 30.8% / 48.0% / 51.5% / 54.0% / 56.1%** — this is what the
  "+12 points over GPT-6 Sol" headline refers to (GPT-6 Sol at `max` was 44.1%)
- SciCode: 53.2 / 53.2 / **55.8** / 55.7 / 54.2
- Legal Index 50→58, Engineering Index 44→54, Economics Index 52→59
- Speed: output ≈67 tok/s at `max` and 74 tok/s at `low` (GPT-6 Sol ≈93 / ≈104);
  **TTFT 267.6 s at `max` versus 1.84 s at `low`**
- Field placement (BenchmarkList, rows dated 2026-10-03): **Intelligence Index 51.8,
  rank 18 of 427, 96th pct**, field leader Fable 5.1 at 65.7 (−13.9);
  **AA-Briefcase Elo 1,564, rubric pass rate 55.7%, rank 13 of 145, 92nd pct**
  (Verified), field leader O-5.5 at 1,822 (−257.79).

**Independent component measurements that close every gap the old report recorded as missing:**

- **CritPt: 31.7%** (rank 4 of 28, **89th pct**) — measured. The old report said
  "CritPt value: no verified public score found".
- **AA-LCR: 83.0%** — measured. There is now a real long-context retrieval number.
- **AA-SciCode 54.2%**, **AA-HLE 52.9%**, **GDPval-AA 53.8%**, **AA-Omniscience
  accuracy 62.1%** — all measured.
- **Humanity's Last Exam: 52.9%, rank 12 of 478, 98th pct**
- **AA-GPQA Diamond: 94.4% ± 1.2 pp** (estimated, high confidence); a second
  estimate gives GPQA 95.9% ± 0.8
- **AIIQ Composite IQ: 141, rank 3 of 147, 99th pct**
- MMLU-Pro 84.9% (est. ±3.7); BrowseComp 90.7% (est. ±1.8); BioMysteryBench 50.1%;
  DeepSearchQA 90.4%; JobBench 56.7%; BFCL v4 77.1%; Gert Labs 75.9%
- Coding estimates: **SWE-bench Verified 91.9%**, **SWE-bench Pro 65.7%**,
  **LiveCodeBench v6 95.1%**, AA Terminal-Bench 2.1 86.8%, Terminal-Bench 2.1 (Vals
  AI) 78.9%, Terminal-Bench 2.1 overall 89.6%, **AA Agentic Index 48.8%**
  (benchgap, as of 2026-10-11: 27 measured scores, 74 estimated)

**VulcanBench Frontier v4 — independent third party, published 2026-10-01 (new and the most valuable single source):**

115 runs, 23 tasks at each of five effort levels, Codex CLI 0.159.0 on a ChatGPT Pro
subscription, Sept 29–30. Combined score weights 50% functional correctness, 8.5%
lint/complexity, 8.5% security, **33% code quality** judged for a human reader by
Muse Spark 1.3 and Grok 4.6 under a frozen protocol.

- Combined score: Low **86.22** / Medium **86.44** / High **88.23** /
  **Extra-high 88.78 (best)** / Max **88.35** (SE 0.33–0.82)
- **Tasks passed: 20/23, 22/23, then 23/23 at High, Extra-high and Max** — and of
  the **231 hidden behaviours** the tasks test for, it fixes 225 at Low, 228 at
  Medium and **all 231 from High upward**
- Code quality: 70.79 / 70.25 / 73.67 / **74.99** / 73.80. Sub-scores: human
  readability 60.9–66.6 (**the weakest at every level**), maintainability 72.7–77.7,
  intent recovery 78.6–82.6
- **Cost per task: $0.31 / $0.40 / $0.33 / $0.43 / $0.46** — versus GPT-6 Sol
  $1.02–$2.52 and GPT-5.6 Sol $1.36–$1.77. Minutes per task 6.9 / 10.6 / 10.2 / 15.4 / 14.5
  (no run hit the 3-hour bound; longest was 80 minutes)
- Raw tokens per task **0.91M–1.62M**, against 3.26M–8.32M for GPT-6 Sol and
  1.79M–2.83M for GPT-5.6 Sol
- Direct comparison under the same 23 tasks and same judges: GPT-6 Sol scored
  67.62–86.82 and passed **4/23 → 19/23**; GPT-5.6 Sol 69.05–87.18 and **6/23 → 22/23**.
  GPT-6.1 Sol leads both at every effort level, by 18.60 and 17.17 points at Low
  narrowing to 1.53 and 1.17 at Max
- **Frontier v4 board position: best 88.78 ranks 13th of 49 model-and-effort columns.**
  Leaders are Claude Fable 5.1 at Max (91.84), Claude Opus 5.5 at High (91.11) and
  **GPT-6 Astra at Max (89.30, only 0.52 ahead)**. The gap to Fable is 3.06 points,
  of which 2.46 is code quality
- **Cost result worth stating on its own: of the 16 columns scoring 88 or more,
  GPT-6.1 Sol's three are the cheapest in the set, at $0.33–$0.46 per task against
  $1.71–$14.49 for the other thirteen.**

Coding field placement (BenchmarkList, independent):

- **DeepSWE v1.1: 75.2%, rank 3 of 52, 96th pct — and it is the field leader**, ahead
  of GPT-6 Astra's best 74.1%. This is the one benchmark where the near-Astra claim
  is not near, it is ahead.
- SciCode 55.8%, rank 24 of 296, **92nd pct**
- **SWE-Marathon: 68 of 160 passing trials (42.5% average uncalibrated partial
  score), rank 14 of 33, 59th pct** (Verified, 2026-10-03) — 20 multi-hour tasks,
  8 trials each, mean $7.90 and 26.67M tokens per costed trial, thinking mode `max`.
  The field leader is O-5 at 50.0%, so this is a genuinely mid-field result and the
  single strongest argument against over-reading the DeepSWE win
- Terminal-Bench-Science 0.1 57.0%, rank 5 of 10, **56th pct** (−11.1 behind G-6 Astra)

Terminal-Bench 4.0 field context (Artificial Analysis leaderboard, mini-swe-agent
harness, pass@1 over three repeats on 66 tasks): **Claude Sonnet 5.5 (Max) 63.6%**,
**Claude Opus 5.5 (Max) 59.6%**, **Claude Opus 5.5 (Xhigh) 59.6%** — against
**GPT-6.1 Sol's 56.1% at `max`**. It is inside three points of the frontier here, but
it is not leading it.

Measurement caveats, updated:

- **Harness sensitivity is now largely resolved, in the vendor's favour, and with a
  second independent line of evidence.** The 2026-09-30 report recorded an unresolved
  dispute: Codex-harness runs scored higher than Artificial Analysis's
  `mini-swe-agent` runs, Artificial Analysis disputed the bump and asked about repeat
  counts. VulcanBench has since run 115 Codex-CLI runs under a frozen protocol and
  lands the model at **88.78 combined, 23/23 tasks and 231/231 hidden behaviours from
  `high` upward** — which is consistent with the Codex-harness bump being real.
- **What remains unreproduced is specifically OpenAI's six launch suites.** Orcarouter
  (2026-10-07) states plainly that all six are the vendor's own runs against its own
  harness and "no third party has published a figure from any of them" — and notes
  that the three suites OpenAI leads with (DeepSWE v1.1, OSWorld 2.0,
  Terminal-Bench Science 0.1) are **not** among the independent composite. That is
  still true and is why DeepSWE's 96th-percentile field placement, though recorded
  here, rests on a vendor number. VulcanBench does not contradict Orcarouter — it
  measures a different thing entirely.
- **The effort ladder is not monotonic, and `max` is not the best setting.** DeepSWE
  peaks at `high`; AutomationBench-AA peaks at `xhigh`; TTFT at `max` is 267.6 s
  against 1.84 s at `low`. This refines, and confirms, the old report's advice to
  drop below `max` for interactive work — with the specific recommendation now being
  **`high` for coding and `xhigh` for business workflows**.
- A later OpenAI developer-community thread exists (2026-10-08) announcing the API
  rollout; no independent benchmark content was found in it.

Not found:

- A knowledge-cutoff date, any audio or video input, any non-text output, and any
  official OpenAI long-context recall figure of the kind published for GPT-6 Astra
  (96.3%): **no verified public source found**.

### Normalized scores (1–100)

- **Tool use: 86/100.** *Revised up from 85.* The evidence base is now a mapped
  ladder rather than two points. **Terminal-Bench 4.0 rises monotonically from 30.8%
  at `low` to 56.1% at `max`**, AutomationBench-AA runs 52.6%–66.6%, and
  **AA-Briefcase v1.1 reaches Elo 1,564 at the 92nd percentile of 145 models with a
  55.7% rubric pass rate** — a Verified measurement on long-horizon, multi-week
  professional knowledge work, which is the hardest thing in this dataset to score
  well on. OSWorld 2.0 at 71.4% and **SWE-Marathon 68/160 trials** add real
  long-horizon evidence. It is held below the 90+ band for one specific reason: on
  Terminal-Bench 4.0 the frontier is **Claude Sonnet 5.5 at 63.6% and Opus 5.5 at
  59.6%**, ahead of this model's 56.1%, and the AA Agentic Index sits at 48.8.
- **Reasoning: 91/100.** *Revised up from 86 — the largest quality move in this pass,
  and it is driven by measurements that did not exist in September.* Every gap the old
  report listed as unfilled is now filled: **GPQA Diamond ≈94.4% ± 1.2,
  CritPt 31.7% at the 89th percentile, AA-LCR 83.0%, AA-HLE 52.9%,
  AA-Omniscience accuracy 62.1% (hallucination falling 60% → 54%)**. Two placements
  stand out: **Humanity's Last Exam 52.9% at the 98th percentile of 478** and
  **AIIQ Composite IQ 141 at the 99th percentile of 147**, alongside a
  MMLU-Pro 84.9% and BrowseComp 90.7%. The Legal / Engineering / Economics indices
  all climb across the effort ladder. It is not 93+ because the hard-frontier ceiling
  shows elsewhere: **ProofBench-style research reasoning is not on record, HLE
  without tools is materially weaker than with, and BioMysteryBench at 50.1% says the
  human-difficult frontier has not been cleared.**
- **Context window: 95/100.** Unchanged, and now the reasoning behind it is stronger
  rather than weaker. 1,050,000 verified tokens puts it in the ≥1M band, and
  **AA-LCR is measured at 83.0%** where the old report could point only at the absence
  of any retrieval test. It remains 95 and not higher because the methodology
  reserves the top of that band for ≥98% measured retrieval at 512K+, 83% is the
  measured figure, and no test above 128K is published — against GPT-6 Astra, which
  OpenAI did disclose at 96.3% across its window.
- **Multimodal: 65/100.** Unchanged. Verified text and image input with text-only
  output places it in the +image band (60–70); there is no audio input, no video
  input and no non-text output. Two new figures are *usage* evidence rather than
  capability evidence and are deliberately not scored into this dimension:
  **OSWorld 2.0 at 71.4%** (an agentic vision-in-the-loop workload) and **GDP.pdf at
  32.0%** (professional PDFs with tables, charts and diagrams). Neither substitutes
  for MMMU / CharXiv / MathVista, which remain unmeasured for this model.
- **Coding: 91/100.** *Revised up from 89.* The strongest dimension, and now on
  independent evidence rather than a vendor chart. **DeepSWE v1.1 75.2% at the 96th
  percentile of 52 and the outright field leader**, above GPT-6 Astra's best 74.1%;
  **SciCode 55.8% at the 92nd percentile of 296**; SWE-bench Verified ~91.9%,
  SWE-bench Pro ~65.7%, LiveCodeBench v6 ~95.1% (all estimates); AA
  Terminal-Bench 2.1 86.8%. Above all of that, **VulcanBench's 115 independent
  judged runs: 88.78 combined at best, 23/23 tasks and 231/231 hidden behaviours
  fixed from `high` upward, at $0.33–$0.46 per task — the cheapest three columns of
  the sixteen scoring 88+.** It is not higher because the board position is real:
  13th of 49 columns, **0.52 points behind GPT-6 Astra, 2.33 behind Opus 5.5 and
  3.06 behind Fable 5.1**, with the gap concentrated in code quality (74.99 against
  82.43 / 79.98 / 76.26) and in **human readability, its weakest sub-score at every
  effort level**. And **SWE-Marathon at 42.5%, 59th percentile** is the honest
  counterweight to a field-leading DeepSWE.
- **Cost efficiency: 78/100.** Unchanged, and the reasoning is reinforced from three
  directions. List price stays **$2.00 / $10.00 with the cache read halved to $0.10**
  (95% discount, blended $1.47/M). Artificial Analysis's **$0.72 per Intelligence
  Index task at `max`, $0.13 at `low`** — versus $3.26 for Astra. And the newly
  independent **VulcanBench $0.31–$0.46 per task against GPT-6 Sol's $1.02–$2.52**,
  on **0.91M–1.62M raw tokens per task against 3.26M–8.32M** — GPT-6.1 Sol is both
  cheaper *and* more token-efficient than the model it replaces, on the one protocol
  where a third party has measured both. It still cannot reach the high 80s because
  $10/MTok output is $10/MTok output.
- **Overall Score: 86/100.** (86 + 91 + 95 + 65 + 91) / 5 = 428 / 5 = 85.6 → **86**,
  *up from 84.* Three of five dimensions moved and all three moved up, on evidence
  that did not exist on 2026-09-30: a mapped effort ladder, five closed measurement
  gaps, and the first genuinely independent 115-run evaluation. Best fit is
  **unchanged in shape and much better evidenced: near-flagship agentic and coding
  capability at roughly a quarter to a fifth of GPT-6 Astra's per-task cost, and the
  best price-per-point in this dataset above the sub-$1 tier.** Three operating
  rules the new evidence forces: **run coding at `high`, not `max`** (DeepSWE peaks
  there and falls 3.3 points by `xhigh`/`max` while cost more than doubles), **run
  business workflows at `xhigh`** (AutomationBench-AA peaks at 66.6% vs 64.9%), and
  **never `max` for anything a human waits on** (267.6 s TTFT against 1.84 s at
  `low`). Accept that OpenAI's six launch suites remain vendor-only, and that
  SWE-Marathon at 42.5% is the honest floor on multi-hour software work.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-13
- Method: revised second pass over the 2026-09-30 report, which was written one day
  after release and said so. New sources this pass, kept explicitly separated by
  provenance: **OpenAI's own launch post** ("Introducing GPT-6.1 Sol") for the six
  vendor suites and the $2/$0.10/$10 price triple; **Artificial Analysis's full
  effort ladder** for all ten Intelligence Index evaluations at all five effort
  levels with per-task costs, TTFT and output speed, plus the Terminal-Bench 4.0
  leaderboard for field context; **BenchmarkList** for independent rank, percentile
  and field-leader placement on DeepSWE, SciCode, SWE-Marathon, CritPt, HLE, AIIQ and
  AA-Briefcase; **benchgap** (2026-10-11) for the measured-versus-estimated split
  across 27 measured and 74 estimated benchmarks; and — most valuable —
  **VulcanBench's Frontier v4 evaluation of 2026-10-01**, 115 runs across five effort
  levels under code-quality protocol v3.18 with two named judges, giving an
  independent combined score, task-pass counts, hidden-behaviour counts, code-quality
  sub-scores, per-task cost, per-task tokens and a 49-column board position. Also
  used: emergent.sh, codingfleet.com, aiincontext.com, orcarouter.ai and OpenAI's
  developer-community announcement for cross-checking the vendor ladder and for the
  **effort-ladder finding that `high` beats `max` for coding**. **Three conflicts
  were adjudicated rather than averaged**: the Codex-vs-mini-swe-agent harness dispute
  (now resolved in the Codex direction by VulcanBench), the claim that no third party
  has measured any launch suite (true of OpenAI's six, not of the Frontier v4
  protocol), and the earlier "no verified public score found" list for CritPt,
  AA-LCR, SciCode, GPQA, LiveCodeBench and SWE-bench — all six now have values, four
  of them measured rather than estimated, and the estimated ones are labelled as
  such throughout. Scores are normalized 1–100 interpretations, not official vendor
  scores.
- Future sources: add a new file next to this one, e.g. `GPT_6.1_Sol_Effort_Ladder.md`,
  using the same headings. The gaps still worth filling are an **independent run of
  OpenAI's six launch suites** (DeepSWE v1.1 in particular, since its 96th-percentile
  placement currently rests on a vendor chart), a **retrieval measurement above
  128K** to match the 83.0% AA-LCR figure, and **MMMU / CharXiv / MathVista**, which
  remain the reason Multimodal cannot move.