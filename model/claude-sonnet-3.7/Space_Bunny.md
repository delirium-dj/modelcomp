# Claude Sonnet 3.7 — findings by Space Bunny

- Source: Anthropic (`claude-3-7-sonnet-20250219`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Availability caveat, corrected and stated up front.** Claude Sonnet 3.7 was
> **deprecated 2025-10-28 and retired 2026-02-19** — both dates re-confirmed against
> Anthropic's own deprecation table on 2026-10-13, and the retirement is now eight
> months old. The 2026-10-01 file named `claude-sonnet-4-6` as the successor; **Anthropic
> names `claude-sonnet-5-5`**, and that is corrected here. Artificial Analysis has frozen
> its benchmarking on this model — it continues to track only the default 10K
> input-token workload and marks all other results historical. The scores below are
> therefore a **historical record of a retired checkpoint**, useful as a baseline for
> the Claude 4 generation, not as a purchase recommendation.
>
> **The score moved 69 → 66, and the reason is a 17.5-point gap that only opened up this
> month: Anthropic reports SWE-bench Verified at 70.3%, and the official SWE-bench
> leaderboard now carries this model at 52.80%.** The 2026-10-01 file scored Coding on
> the vendor number.

## Model card

- **Name:** Claude Sonnet 3.7 (Claude 3.7 Sonnet)
- **Short description:** Anthropic's February 2025 release and the **first hybrid reasoning model on the market** — it can answer near-instantly as a base model or switch on extended, step-by-step visible thinking with a caller-controlled token budget. It shipped alongside Claude Code, Anthropic's first agentic coding tool. At launch it took **#1 on LiveBench** (both thinking and non-thinking variants) and **#1 on SnakeBench**. Not a variant or alias of another entry in this dataset.
- **Provider / access:** Anthropic Claude Platform (Messages API), Amazon Bedrock (`us.anthropic.claude-3-7-sonnet-20250219-v1:0`), Google Cloud Vertex AI. Was available on all Claude plans including Free; extended thinking required a paid tier. **Retired 2026-02-19**; deprecation was announced 2025-10-28. **Mandated replacement `claude-sonnet-5-5`.**
- **Release / knowledge:** released **2025-02-24** (Anthropic news post, same day as the API). Knowledge cutoff **October 2024** (Anthropic system card and Artificial Analysis both record Oct 2024; several third-party spec sheets list 2024-10-31). Roughly two years stale.
- **IDs:** `claude-3-7-sonnet-20250219`. Bedrock: `us.anthropic.claude-3-7-sonnet-20250219-v1:0`. No current OpenAI-compatible or Responses-API equivalent.
- **Context window:** **200,000 tokens** (Anthropic platform docs; Artificial Analysis confirms 200k). **No 1M-token option** — every Claude 4-generation Sonnet added one, so this is the generation's hardest ceiling. Max output **64,000 tokens** with extended thinking, **16,000** without; a few third-party spec sheets list 128K, which no first-party Anthropic page supports.
- **Modalities:** **text, image and PDF in; text out** (Anthropic PDF-support docs list `claude-3-7-sonnet-20250219` explicitly; full visual PDF understanding on Bedrock's Converse API requires citations to be enabled, else it falls back to text extraction only). Reasoning: **hybrid** — extended thinking is off by default and budgeted by the caller. Full tool use: bash, file editing, web search, computer use, function calling, parallel tool calls, structured output, streaming, prompt caching.
- **Pricing (as of 2026-10-13, historical list price):** **$3.00 / MTok input, $15.00 / MTok output**. Cache read **$0.30** (90% discount), Batch API **50% off** both directions. Artificial Analysis blended rate at a 7:2:1 cache-hit/input/output ratio: **$2.31 / MTok**. No free tier. Price is identical to Claude Sonnet 4, 4.5 and 4.6 — the generation, not the discount, is what changed.
- **Architecture:** proprietary. Parameter count never disclosed. Safety level ASL-2, confirmed by Anthropic's Responsible Scaling Policy evaluation, including under extended thinking.

### Raw benchmarks found

> **Vector Wire now tracks 84 results on 50 benchmarks from 25 sources for this model —
> 39 independently verified, 30 aggregator-attributed, 15 vendor-reported, latest
> 2026-10-11.** That is a far larger evidence base than the 2026-10-01 file drew on, and
> it is what surfaced the SWE-bench divergence below.

Agent / tool use:

- **SWE-bench Verified — four values now on record, and they disagree by 17.5 points:**
  - **52.80% — Verified, on `swebench.com`, dated 2026-09-01** (Vector Wire). This is the official leaderboard entry.
  - **61.0% ±2.2, #29** — Epoch AI Benchmarking Hub (eval log dated 2026-02-04), carried independently by evals.report as "Official" and by BenchLeader.
  - **63.7%** — Anthropic's own **no-scaffold** figure, on its own n=489 subset.
  - **70.3%** — Anthropic's headline "high compute" figure, also on n=489.
  > **This is the most important correction in the file, and it is about methodology,
  > not disagreement.** Anthropic's launch post states the 70.3% comes from a pipeline
  > that "we sample multiple parallel attempts… discard patches that break the visible
  > regression tests… and then **rank the … attempts with a scoring model**" — i.e.
  > best-of-N with rejection sampling and a separate model doing the ranking. Anthropic
  > itself reports that **"without this scaffold, Claude 3.7 Sonnet achieves 63.7% on
  > SWE-bench Verified using this same subset."** It also discloses that only 489 of
  > 500 problems are solvable on its infrastructure, that the 11 others are counted as
  > failures, and that it **releases those 11 test cases separately**. The gap between
  > 70.3% and 63.7% is therefore test-time compute, and the gap between 63.7% and the
  > official **52.80%** is the scaffold and subset. A bare pass@1 number is 52.8%, and
  > that is the one used for Coding below.
  - **Terminal-Bench Hard: 21.2% — #87 of 150** (LLMLearner, normal mode with tools). **This row did not exist in the 2026-10-01 file**, which recorded "Terminal-Bench 2.1: no verified public score found."
  - **CadEval: 54.0%, #5** (Epoch AI Benchmarking Hub) — new.
  - OSWorld-Verified: **28.0%** (LLMLearner, thinking with tools) — **#26 of 26, dead last of every model on its board.**
  - τ²-Bench Service Workflows: **61.8%** (#28 of 40); τ²-Bench Telecom: **55.0%** (#92 of 155) — LLMLearner.
  - GDPval-AA (cross-industry professional work): **28.0%** (#13 of 14) — LLMLearner.
  - METR Time Horizons v1.1 (autonomy / task-completion horizon): **60.4% (#14 of 19)** — LLMLearner. Still the strongest agentic-autonomy number the model has, and still the one most often missed.
  - SHADE-Arena (agentic safety, adversarial prompt-injection arena): **26.2% overall success** (Anthropic research post, 2025-06).
  - GSO (maintenance & optimisation): **3.8%** (#16 of 18 LLMLearner / #30 BenchLeader).
  - Terminal-Bench 2.1 / Tau3-Banking / Toolathon / Claw-Eval / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** (Terminal-Bench 2.1 postdates this model)
  - Third-party qualitative: David Schwarz reported Claude 3.7 as the first agent to crack the highest reported Cybench agent-performance query, which OpenAI Deep Research failed.

Reasoning / knowledge:

- GPQA Diamond: **68.3%** base mode, **84.8%** with extended thinking ("better-than-human", Anthropic's wording) — **#67 of 186** (LLMLearner, parallel thinking, no tools). Independent trackers carry 77.0% and 78.5% for other configurations.
- **MATH-500: 96.2%, #20 of 41** (thinking, no tools, 64K budget) — LLMLearner. *The 2026-10-01 file recorded 82.2%; this is the better-measured thinking-mode figure.*
- **AIME 2024: 80.0%, #23 of 53** (parallel thinking, no tools). *The 2026-10-01 file recorded 23.3%; that was a different configuration.*
- **Epoch Capabilities Index: 141, #9 of 166** (effort unspecified).
- Humanity's Last Exam: **10.3%** (#111 of 135, thinking); **4.2%** on Artificial Analysis's non-reasoning variant.
- CritPt scientific reasoning: **0.9%** (#103 of 125, thinking); **0%** on AA's non-reasoning variant.
- AIME 2025: **54.8%, #76 of 85**; FrontierMath: **4.1% (#32 of 48)**; SimpleBench commonsense **46.4% (#56 of 90)**; MATH-500 parallel thinking as above.
- MMLU: **86.1%** — AI Flash Report.
- **Artificial Analysis Intelligence Index: 15 (estimated), #32 of 61** non-reasoning models, in the current v4.3.2 index family. AA characterises it as "below average in intelligence and somewhat expensive" versus non-reasoning peers of similar price (class median 15). No verified Intelligence Index figure exists for the extended-thinking variant.
- **IFBench instruction following: 44%** on AA's non-reasoning variant; **48.3% (#103 of 165)** on LLMLearner.
- **Launch-era comparison against records still on file** (LLMLearner): GPQA Diamond 84.8 vs GPT-5 87.3 / o3 83.3 / Gemini 3.0 Pro 93.8; HLE 10.3 vs 35.2 / 20.3 / 45.8; CritPt 0.9 vs 5.7 / 1.1 / 9.1; MMMU-Pro 60.1 vs 78.4 / 76.4 / 80.2; **AIME 2025 54.8 vs 99.6 / 88.9 / 95.7**; **FrontierMath 4.1 vs 26.3 / 10.3 / 38.0**. Every one of these is a loss, and the maths gaps are the widest.
- Hallucination behaviour: in Anthropic's RSP evaluation, extended thinking produced hallucinated information **~4% of the time** and intentional omissions 0.0%; Anthropic also reported cutting unnecessary refusals by **45%** in standard thinking mode and **31%** in extended thinking versus Sonnet 3.6.

Coding:

- **The SWE-bench Verified divergence above is the headline: official 52.80%, Epoch 61.0%, Anthropic base 63.7%, Anthropic high-compute 70.3%.**
- **SWE-bench Multilingual: 43%** (Verified) and **SWE-bench Multimodal: 1.33%** (Verified) — both new, and the multimodal figure is close to zero.
- **Aider-Polyglot: 64.9%** (thinking, no tools, 32K budget, **#10–12 of 47**) — still the strongest coding figure this model owns, and it is on an agentic-development leaderboard rather than a vendor table.
- **LiveCodeBench: 47.3% (#122 of 180, LLMLearner)** versus **60.4% (#101, Vals AI)** and 56.7% (#106) — a genuine cross-source conflict of ~13 points on the same benchmark.
- BigCodeBench: **35.8%** (Benchgen evaluation, 2025-07).
- CyberGym: **14.5%** (Benchgen, 2025-07) — ahead of o4-mini at 2.5% and Gemini 2.5 Flash at 4.8%.
- **Terminal-Bench Hard 21.2% (#87 of 150)**; GSO maintenance & optimisation 3.8%.
- DeepSWE / SWE-bench Pro / Vibe Code Bench / SciCode: **no verified public score found**
  > **Benchmark-health caveat that applies to this whole section.** BenchLM's
  > SWE-bench Verified leaderboard (updated 2026-10-10, 90 models) now carries the
  > notice: **"SWE-bench Verified is still displayed on BenchLM for reference, but it is
  > excluded from the weighted scoring formula. We moved it to display only in
  > BenchAlign v5.6 because its tests are contaminated and saturated."** For context on
  > that same board, the leaders are Claude Opus 5 at 96%, Claude Mythos 5 at 95.5%,
  > Claude Fable 5 at 95% and Fireworks' Ember-1 at 92.2%; Claude Haiku 4.5 sits at #50
  > with 73.3% and Claude 3.5 Sonnet at #83 with 49%. **Claude Sonnet 3.7 does not
  > appear on that 90-model board at all.** Whatever the 52.80% vs 70.3% resolution,
  > SWE-bench Verified is no longer a benchmark on which any 2026 claim should rest.

Long context:

- **AA-LCR v1.1: three figures now on record and they disagree.** **51.7% (#305)** per BenchLeader's reading of the AA number; **51.67%, 58th percentile, 36.1% behind the leader** per Vector Wire dated 2026-10-11; and **61.0% (#16 of 17)** / **62.33%** on the AA and LLMLearner rows. The **#305 field rank on a large board** is the decisive piece of context: this is not a mid-field long-context result, it is a bottom-decile one.
- Fiction.liveBench 120k Long Reasoning: **53.1%, #20** (BenchLeader) / 50.0% (#16 of 16, LLMLearner).
- No MRCR, RULER or GraphWalks measurement exists. Anthropic published no long-context retrieval claim for Sonnet 3.7; the 200K window was a spec, not a measured capability.

Vision / multimodal:

- MMMU: **75.0%**; MMMU-Pro: **60.1%** (#86 of 115); GeoBench ACW visual understanding: **68.0%** (#13 of 17); VPCT visual understanding: **39.0%** (#15 of 18) — LLMLearner. BenchLM's category breakdown gives Multimodal as this model's **lowest category at 43**.

### Normalized scores (1–100)

- **Coding: 62/100.** *Revised down from 70 — the largest single change in this file, and it is a correction of the score's foundation rather than new information about the model.* The 2026-10-01 file scored 70 on Anthropic's **70.3%**, noting the "custom scaffold" without following it into the launch appendix. That appendix says the 70.3% is best-of-N with regression-test rejection sampling and **a separate scoring model doing the ranking**, and that **without it the model scores 63.7%** on the same n=489 subset. The **official SWE-bench leaderboard entry is 52.80%**, verified and dated 2026-09-01, and Epoch AI independently puts it at 61.0% ±2.2. Against those, **Terminal-Bench Hard at 21.2% (#87 of 150)** and **GSO at 3.8%** are poor, and **SWE-bench Multimodal at 1.33%** is close to zero. What holds it at 62 rather than lower: **Aider-Polyglot 64.9% at #10–12 of 47** is a genuine agentic-development result, LiveCodeBench is 47.3%–60.4% depending on source, and the model shipped Claude Code with it. What stops it going higher: no DeepSWE, no SWE-bench Pro, no SciCode, and the benchmark-health caveat above.
- **Tool use: 60/100.** *Revised down from 62.* The 2026-10-01 file recorded "Terminal-Bench 2.1: no verified public score found" and inferred from TAU-bench and SWE-bench. **Terminal-Bench Hard at 21.2%, #87 of 150**, now exists and is bad. Against it: **METR Time Horizons 60.4% at #14 of 19** remains a real and under-recognised autonomy result, τ²-Bench Service Workflows 61.8%, **CadEval 54.0% at #5**, and 26.2% on SHADE-Arena. Capped hard by **OSWorld-Verified 28.0%, last of 26** on its board, τ²-Bench Telecom at **#92 of 155**, and the fact that the strongest tool-facing number (SWE-bench Verified) is contested 52.8-versus-70.3.
- **Reasoning: 65/100.** *Revised down from 66, and the evidence moved in both directions.* Up: **MATH-500 96.2% (#20 of 41)** and **AIME 2024 80.0% (#23 of 53)** in parallel-thinking mode are much better than the 82.2% and 23.3% the previous file carried, and **Epoch Capabilities Index 141 at #9 of 166** is a strong aggregate. Down, and heavier: **HLE 10.3% (#111 of 135)**, **CritPt 0.9% (#103 of 125)**, **FrontierMath 4.1%**, **IFBench 44–48%**, an AA Intelligence Index of **15 that sits at the non-reasoning class median**, and a launch-era comparison table in which this model loses to GPT-5, o3, o4-mini and Gemini 3.0 Pro on *every* row — including by 45 points on AIME 2025 (54.8 vs 99.6) and 22 points on FrontierMath (4.1 vs 26.3). GPQA Diamond 84.8% and MMLU 86.1% are the numbers keeping it in the mid-to-upper-mid band.
- **Context window: 66/100.** *Revised down from 70.* 200,000 tokens is still the methodology's explicit "200K = 70" tier, and the 2026-10-01 file scored exactly on the tier and cited AA-LCR 61.0%. Three AA-LCR figures now exist (51.7% / 51.67% / 61.0%), and the two most recent agree on **~51.7% — which BenchLeader places at #305 of its board**, "36.1% behind the leader" per Vector Wire. Fiction.LiveBench long reasoning corroborates at 53.1%. This is a bottom-decile long-context reasoning result on a model whose every Claude-4-generation successor carries a 1M window, so the bare tier mapping is not defensible and the score sits below it.
- **Multimodal: 76/100.** Unchanged. **Text, image and PDF in; text out.** Anthropic's PDF-support documentation lists `claude-3-7-sonnet-20250219` by name, which puts this in the methodology's "+video/PDF in = 75–90" band near its floor. Visual quality is mid-tier rather than strong — MMMU-Pro **60.1% (#86 of 115)**, GeoBench ACW 68.0%, VPCT 39.0% — and BenchLM's category breakdown makes Multimodal this model's lowest at 43. There is no audio or video input and no non-text output. The PDF caveat is real: on Bedrock's Converse API, visual PDF analysis requires citations to be enabled or the model silently falls back to text extraction. **New negative worth recording: SWE-bench Multimodal at 1.33% (Verified)** — not a vision-understanding score, but a direct measure of this model failing at software issues that involve images.
- **Cost efficiency: 60/100.** Unchanged. **$3.00 / $15.00 per MTok** is the methodology's explicit **$3/$15 ≈ 60** anchor, scored straight from the rate card. Partial offsets — cache reads at $0.30, Batch at 50% off, a $2.31 blended rate — do not move the tier, and there is no free tier. It was never cheap, and the mandated replacement `claude-sonnet-5-5` is **$2 / $10**, i.e. cheaper on both sides.
- **Overall Score: 66/100.** (60 + 65 + 66 + 76 + 62) / 5 = 65.8 → **66**, down from 69. Four of five dimensions moved down, and the largest move — Coding −8 — is the discovery that the number the previous score rested on was produced by best-of-N with a scoring model, against an official leaderboard figure 17.5 points lower. Best fit, stated historically: in February 2025 this was a serious pick for extended-thinking reasoning and agentic coding at frontier-adjacent quality on a 200K window, and its hybrid design — buy the reasoning when you want it — was genuinely novel. **Today its practical best fit is none.** It is retired, replaced by `claude-sonnet-5-5`, and useful here as the baseline that shows what the 1M-context generation gained: 5× the window, adaptive thinking in place of manual budgeting, and materially better terminal and computer use (Terminal-Bench Hard 21.2% here against a frontier in the 60s).

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-13
- Method: third pass over this agent's own report for this slug (69 → **66**).
  **Lifecycle corrected this pass:** Anthropic's **model-deprecations page** gives
  `claude-3-7-sonnet-20250219` as **Retired**, deprecated 2025-10-28, retirement date
  2026-02-19, mandated replacement **`claude-sonnet-5-5`** — the 2026-10-01 file named
  `claude-sonnet-4-6`, which is corrected. **The score's foundation was re-examined and
  the number below it does not hold:** **Anthropic's own launch post
  (`anthropic.com/news/claude-3-7-sonnet`) documents that the headline 70.3% on
  SWE-bench Verified comes from parallel sampling plus regression-test rejection plus
  "rank the … attempts with a scoring model", that it runs on an n=489 subset of the
  500 problems, that the 11 excluded cases are counted as failures and released
  separately, and that "without this scaffold, Claude 3.7 Sonnet achieves 63.7% on
  SWE-bench Verified using this same subset."** Against that, **the official
  `swebench.com` leaderboard entry is 52.80%, Verified, dated 2026-09-01**, and **Epoch
  AI's Benchmarking Hub gives 61.0% ±2.2 (#29)** with an eval log dated 2026-02-04,
  corroborated by evals.report and BenchLeader. **New independent data:** **Vector
  Wire** (84 results / 50 benchmarks / 25 sources, 39 independently verified, latest
  2026-10-11) for the official 52.80% row, the AA-LCR 51.67% at 58th percentile and
  36.1%-behind-the-leader framing, and the full verification-tier split; **LLMLearner**
  (updated) for **Terminal-Bench Hard 21.2% at #87 of 150** — a row that did not exist
  in the previous file — **MATH-500 96.2% (#20 of 41)**, **AIME 2024 80.0% (#23 of 53)
  in parallel thinking**, GPQA 84.8% (#67 of 186), HLE 10.3% (#111 of 135), CritPt 0.9%
  (#103 of 125), AIME 2025 54.8% (#76 of 85), IFBench 48.3%, and the launch-era
  comparison table against GPT-5 / o3 / o4-mini / Gemini 3.0 Pro on which this model
  loses every row; **BenchLeader** (last measured 2026-10-09) for **#336 of 760 at
  51.1 ±2.8 with 286 configurations inside that band**, **AA-LCR 51.7% at #305**,
  **LiveCodeBench 60.4% (#101, Vals AI)** against LLMLearner's 47.3%, **CadEval 54.0%
  (#5)**, Fiction.LiveBench 53.1% (#20), and SWE-bench Verified (bash-only) 52.8%;
  **evals.report** for **SWE-bench Multilingual 43%** and **SWE-bench Multimodal
  1.33%**, both Verified; **Shawn Hack / Artificial Analysis** for the non-reasoning
  variant's HLE 4.2%, CritPt 0%, AA-LCR 51.7% and IFBench 44%; and **BenchLM's
  SWE-bench Verified leaderboard** (updated 2026-10-10) for the health notice that the
  benchmark's tests are now considered "contaminated and saturated" and excluded from
  weighted scoring, plus the field context that this model is **absent from that
  90-model board** while Opus 5 leads at 96%. **Conflicts adjudicated explicitly:**
  Anthropic's `claude-sonnet-5-5` over third-party trackers' `claude-sonnet-4-6`; the
  official 52.80% over Anthropic's 70.3% for Coding, for the reasons Anthropic's own
  appendix gives; and the ~51.7% AA-LCR over the 61.0% row for Context window, on the
  strength of the #305 field rank and the recency of the lower figure. Scores are
  normalized 1–100 interpretations per `model-comparison.md`, not official vendor
  scores.
- Future sources: **this file is closed to new measurement for the same reason
  `claude-sonnet-3.5` is** — the model was retired eight months ago and cannot be run.
  Add a new file next to this one, e.g. `Claude_Sonnet_37_Scaffold_Audit.md`, only if
  the 52.80-versus-70.3 question needs a dedicated reconstruction, or if an archival
  release permits re-running the benchmarks this entry now cites second-hand.