# Claude 3.5 Sonnet — findings by Space Bunny

- Source: Anthropic (`claude-3-5-sonnet-20241022`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass note. The headline is a lifecycle correction, not a score movement: this
> model has been fully retired for nearly a year and the 2026-10-01 file did not say so.**
> That file recorded only that "the 3.5 line is absent entirely" from OpenCode Zen. In
> fact Anthropic **deprecated both 3.5 Sonnet snapshots on 2025-08-13 and retired them
> on 2025-10-28**; calls now fail. The score moved 67 → **65**, and both moves came from
> independent measurements that did not exist in October: **AA-LCR at 27%** and a
> **harder Intelligence Index of 8**.

## Model card

- **Name:** Claude 3.5 Sonnet (this report scores the final `claude-3-5-sonnet-20241022` checkpoint; the original 2024-06-20 release is called out where its numbers differ)
- **Short description:** Anthropic's mid-2024 mainstream "frontier-adjacent" Sonnet — the model that set the price/performance reference for a whole generation of coding assistants and was the first Claude with computer use (public beta, October 2024). By 2026 it is fully superseded **and no longer exists as a callable product**: Claude 3.7 Sonnet beat it on all five shared benchmarks, and the whole 3.5 line was retired in October 2025. It remains relevant as the historical baseline every newer mid-tier model is measured against, and for benchmark reproduction. Not a variant/alias of another entry in this comparison.
- **Provider / access: RETIRED — this is the operative fact.** Anthropic's own deprecation table lists both `claude-3-5-sonnet-20240620` and `claude-3-5-sonnet-20241022` with current state **Retired**, deprecated 2025-10-28, retirement date 2025-10-28, and a mandated replacement of **`claude-sonnet-5-5`**. Requests to retired models fail; independent trackers report 404 / invalid-model errors on the Claude API, Claude Platform on AWS and Microsoft Foundry. **Amazon Bedrock ran its own schedule: legacy status, public extended access lost 2025-12-01, end-of-life 2026-03-01** — seven months ago. There is no OpenCode Zen entry either, confirmed against Zen's live model and pricing tables. **Nothing in this entry is purchasable at any price.**
  > **Conflict recorded and adjudicated.** Anthropic's deprecation page names
  > **`claude-sonnet-5-5`** as the replacement. At least four third-party trackers
  > (modelsunset, AI/TLDR, CoolHandLabs, Clauder Navi) name **`claude-sonnet-4-6`**
  > instead. The deprecation page is Anthropic's own record of what it told customers,
  > so **Sonnet 5.5 is the mandated replacement**; the Sonnet 4.6 references appear to
  > be trackers inferring a nearer equivalent rather than quoting the notice.
- **Release / knowledge:** original 2024-06-20; upgraded checkpoint 2024-10-22. **Knowledge cutoff April 2024** (Anthropic system card; re-confirmed on Artificial Analysis 2026-10-13). Roughly two and a half years stale, and a **May 2023** training-data range by comparison. The current Claude line-up is on a June 2026 cutoff.
- **IDs:** `claude-3-5-sonnet-20241022` and `claude-3-5-sonnet-20240620` (Anthropic — both retired), `anthropic.claude-3-5-sonnet-20241022-v2:0` and `anthropic.claude-3-5-sonnet-20240620-v1:0` (Bedrock — both past EOL), `anthropic/claude-3-5-sonnet` (aggregator routing form). No Free ID anywhere.
- **Context window:** **200,000 tokens total, 8,192 maximum output** — Anthropic's documented limits (Puter and Bedrock/Vertex provider tables both list 200K context with an 8K output cap; re-confirmed by two independent spec trackers on 2026-10-13). Artificial Analysis also records **200k**. Note: the curated `meta.json` for this entry says "64K max output", which belongs to the later 3.7/4 generation, not to 3.5 Sonnet — the 8,192-token cap is the verified one.
- **Modalities:** **text, image and PDF in; text out**; extended-thinking-free (no reasoning mode — non-reasoning by construction); tool use / function calling (system tools); **computer use (public beta, added 2024-10-22)**; prompt caching; streaming. No audio or video input.
- **Pricing (as of 2026-10-13):** **$3.00 in / $15.00 out per 1M** on Anthropic, Bedrock and Vertex; OpenRouter listed the same; Artificial Analysis independently records **$3.00 / $15.00 with a $0.30 cache-hit price**. Prompt caching cut input cost; batch processing halved both. Paid — there has never been a Free tier. **These are historical list prices for a product that cannot be bought.** Artificial Analysis now shows "No data available" for cost-per-task and output speed on this model, because there is no live route to measure.
- **Architecture:** **proprietary** — dense transformer, parameter count and layer configuration undisclosed; ASL-2 safety level.

### Raw benchmarks found

Primary source for the Oct '24 checkpoint: Anthropic, *Model Card Addendum: Claude 3.5 Haiku and Upgraded Claude 3.5 Sonnet* (2024-10-22). Original 2024-06-20 checkpoint: Anthropic, *Claude 3.5 Sonnet Model Card Addendum* (2024-06-20). Aggregated figures are labelled as such — aggregator column orderings mix the two checkpoints and are not always reliable. **A retired model produces no new vendor measurements; everything below is either 2024 vendor data or a third-party estimate.**

Agent / tool use:

- SWE-bench Verified: **49.0%** pass@1 (Anthropic model card, 2024-10) — reported as state of the art at the time against a 45.2% leaderboard best. Same table: Claude 3.5 Haiku 40.6%, original Claude 3.5 Sonnet **33.4%**, Claude 3 Opus 22.2%, Claude 3 Haiku 7.2%.
- TAU-bench, pass@1: **Retail 69.2% / Airline 46.0%** (2024-10). Original checkpoint: Retail 62.6% / Airline 36.0%.
- OSWorld (computer use, screenshot-only input): **14.9%** average success rate (2024-10) — Anthropic called it state of the art, and it was still far from a reliable digital worker; the beta's failure modes (drag, scroll, zoom) were documented publicly.
- Terminal-Bench 2.1 / Tau3-Banking / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found (Terminal-Bench 2.1 postdates this model; the 14.9% OSWorld figure is the only computer-use row and it is not OSWorld-Verified). **This remains true in October 2026 — the model was retired before any of these benchmarks could be run against it.**
- Aggregated trackers: BenchLM lists a "Tool use" index of **8.6 (#129)** on only 2 evals — noted as thin, not load-bearing.

Reasoning / knowledge:

- **NEW: Artificial Analysis Intelligence Index: 8 (estimated)** on v4.3.2 — the 2026-10-01 file recorded **10**, also estimated but on the older v4.1.1 index. **The index version changed and the estimate fell by two points**; the honest reading is that this model scores even lower against a harder current index than it did against the 2024-era one.
- **NEW: GDPval-AA v2.1: Elo 210** — a first published value for this model on that evaluation, and a very low one. (For scale on the same instrument: Claude Haiku 4.5, one generation later, sits at 719.)
- **NEW: AA-Omniscience: index −23** — a strongly negative score, meaning materially more incorrect than correct answers on the knowledge-reliability set. This is the single most damaging independent number in the file and it did not exist in October.
- **NEW: Humanity's Last Exam: 4%**; **CritPt: 0%** — both on Artificial Analysis's v4.3.2 estimate set.
- GPQA Diamond: **65.0%** (0-shot CoT, 2024-10 card). Original checkpoint: **59.4%**.
- MMLU: **90.5%** (5-shot CoT) / **88.7%** (5-shot) (2024-10 card).
- Aggregated: MMLU-Pro **73.0%**, IFEval **86.0%**, BBH **93.1%**, SimpleQA **28.9%**, TruthfulQA **84.2%**, MT-Bench **9.1**, AlpacaEval 2.0 **52.4%**, Chatbot Arena ELO **1268**.
- Math: MATH **83.5%** (original card, 3-shot), GSM8K **96.4%** (original card, 0-shot CoT); aggregated MATH 78.3%, GSM8K 91.0%, **AIME 2025 23.0%**.
- ARC-AGI: **15.0%** — the weakest signal in the set and a direct read on genuine multi-step reasoning.
- LLM Stats composite: **19.4 (#189)**, Reasoning index 20.4 (#171).

Coding:

- SWE-bench Verified: **49.0%** (see above; also the single row BenchLM carries for this model, coding category 49.0).
- HumanEval: **92.0%** (0-shot CoT, original card); aggregated HumanEval+ **81.7%**.
- Anthropic internal agentic coding evaluation: **64%** solved vs 38% for Claude 3 Opus (original 2024-06 card; internal and not independently runnable).
- LiveCodeBench: **38.0%** (aggregated, livecodebench).
- SWE-bench Pro / SciCode / AA-SciCode / Vibe Code Bench / DeepSWE / Coding Index: no verified public score found.
- LLM Stats coding index: **11.6 (#141)** on 2 evals — thin, noted not load-bearing.

Long context — **this section changed, and the change is a conflict resolution:**

- **NEW: AA-LCR v1.1: 27%.** The 2026-10-01 file stated plainly: "No MRCR, GraphWalks, LCR or LongBench v2 row; **AA-LCR is part of AA's v4.1.1 index but no standalone number is published.**" A standalone number now exists on v4.3.2, and it is **27%**.
- **RULER 89.5%** (aggregated, listed at the 200K window) — unchanged.
  > **Conflict resolved against RULER.** The two figures differ by 62 points on the same
  > 200K window, so one of them has to give. RULER is a synthetic
  > needle-in-a-haystack retrieval test; AA-LCR is real long-context *reasoning* over
  > retrieved documents. A model that retrieves perfectly and reasons badly is a
  > familiar and coherent failure mode, and there is a direct control for the
  > instrument itself: **Claude Haiku 4.5, from Anthropic's own next generation, scores
  > 74.3% on AA-LCR.** A 27% is therefore not an artefact of the benchmark — it is a
  > genuine long-context reasoning deficit. **AA-LCR is used in the score below and
  > RULER is retained as lineage data.**
- No MRCR, GraphWalks or LongBench v2 row exists, and none can now be created: the
  model is retired and cannot be run against them.

Multimodal (vision):

- MMMU (validation): **70.4%** (2024-10 card); original checkpoint **68.3%**.
- MathVista (testmini, Math): **67.7%** — Anthropic reported state of the art at release; original card.
- AI2D (test): **94.7%**, ChartQA (test, relaxed accuracy): **90.8%**, DocVQA: **95.2%**, OCRBench: **788** — all reported state of the art in the original 2024-06 card.
- Vision was a headline strength at release: 4 of 5 vision benchmarks ahead of GPT-4o and Gemini 1.5 Pro (The Verge, 2024-06-20).
- Aggregated multimodal index: 18.2 (#68, 5 evals). Artificial Analysis records **text and image in, text out**, no reasoning.

Successor delta — for completeness, since the deprecation notice names one:

Anthropic's mandated replacement `claude-sonnet-5-5` is **$2 / $10 per MTok — cheaper than the retired model on both input and output** — with a **1,048,576-token context window** (5× this model's), 128K max output (16× this model's 8,192), a **June 2026** knowledge cutoff, and Adaptive thinking, which this model structurally lacked. `claude-sonnet-4-6`, which several trackers name instead, matches the retired model on price ($3/$15) but carries 1M context, 64K max output, extended and adaptive thinking, and an August 2025 reliable cutoff. **Either way the comparison is embarrassing for the incumbent.**

### Normalized scores (1–100)

Bands per `model-comparison.md`. Scored against the **2026-10-13** field, not against the October 2024 field — that gap is the whole story of this entry, and it is why a model that was state of the art two years ago lands in the mid-50s to low-80s rather than at the top. **No score in this file can now be revised by new measurement of this model, because the model cannot be run.** Every figure below is either 2024 vendor data or a third-party estimate, permanently.

- **Tool use: 62/100.** Unchanged, and now permanently so. TAU-bench Retail 69.2% and Airline 46.0% are respectable multi-step simulated-user results and SWE-bench Verified 49.0% shows real GitHub-issue-level agentic work, which places it in the methodology's mid band (50–70). It cannot clear into the frontier band because computer use was the weak link — **OSWorld 14.9%**, screenshot-only and public beta, means the model could not reliably operate a desktop — and because there is no Terminal-Bench 2.1, Tau3-Banking or GDPval-AA row, which is now permanent rather than merely a gap. No Claw-Eval was found — noted N/A, no invented substitute.
- **Reasoning: 57/100.** *Revised down from 62, on the independent v4.3.2 estimates.* The 2026-10-01 file anchored this dimension on **GPQA Diamond 65.0%** and **MMLU 90.5%** and placed the model at the top of the methodology's mid band. Three new independent numbers pull it into the lower half of that band: **Intelligence Index 8** (estimated, v4.3.2 — down from the 10 recorded against the older v4.1.1 index, so the *current* index is harsher than the one the old score was set against); **AA-Omniscience at −23**, a strongly negative knowledge-reliability result meaning materially more incorrect than correct; and **HLE 4% with CritPt 0%**. **GDPval-AA Elo 210** is a first-published value and a very low one. IFEval 86.0%, MMLU-Pro 73.0%, MMLU 90.5% and GPQA 65.0% keep it from going lower, and AIME 2025 at 23.0% and ARC-AGI at 15.0% confirm the ceiling is genuine: this is strong 2024 pattern-matching, not deep multi-step deduction.
- **Context window: 65/100.** *Revised down from 71 — the second and larger move in this file, and a conflict resolution.* The old score sat above the bare mapping because **RULER 89.5%** lifted it. That figure is still the aggregated number on record, but **AA-LCR v1.1 has now published a standalone figure of 27%** at the same 200K window, and that is the number the score should rest on. The reasoning: RULER measures synthetic retrieval and AA-LCR measures real long-context reasoning; a 62-point gap between them is the signature of a model that finds the needle and cannot reason over what it found; and the instrument is validated by **Claude Haiku 4.5 scoring 74.3% on the same AA-LCR** one generation later on Anthropic's own hardware. 200,000 verified tokens is still the methodology's 200K tier, but the bare mapping is 70 and a 27% long-context reasoning score places it at the **bottom** of the 200K–500K band. The 8,192-token output cap remains a separate, uncredited constraint.
- **Multimodal: 82/100.** Unchanged, and now the model's most defensible dimension. Text, image **and PDF** in with text out puts it in the methodology's 75–90 band (PDF input is what lifts it above the plain "+image in = 60–70" band), and the vision numbers justify the upper half: DocVQA 95.2%, AI2D 94.7%, ChartQA 90.8%, OCRBench 788, MMMU 70.4%, MathVista 67.7%. It stops below the 90–100 top band because there is no audio input, no video input and no non-text output. This is the one dimension where a 2024 measurement still describes current reality, because nothing about vision capability was ever superseded in a way that makes these numbers wrong — they simply describe a model you can no longer call.
- **Coding: 58/100.** Unchanged, and this is the dimension that aged worst and can now only age further. SWE-bench Verified **49.0%** and LiveCodeBench **38.0%** both sit *below* the methodology's mid-band example, and the internal agentic-coding figure of 64% is not independently runnable. HumanEval 92.0% / HumanEval+ 81.7% measure function-level synthesis, not repository work, and are the reason this is 58 rather than 45. Against the frontier band (DeepSWE 74%+, TB2.1 85%+, SciCode 55%+) there is no overlap, and no new measurement is possible.
- **Cost efficiency: 60/100.** Unchanged on the price point, and the caveat has become dispositive. **$3.00 in / $15.00 out per 1M** maps to the methodology's "$3/$15 = ~60" almost exactly; Artificial Analysis independently confirms $3.00 / $15.00 and adds a **$0.30 cache-hit** rate. There was never a Free tier. **But the price is a historical list price for a product that cannot be purchased**, and Artificial Analysis's cost-per-task field for this model now reads "No data available" precisely because there is no live route to meter. For a 2026 capability level this was poor value even when it was buyable — cheaper current models outperform it — and the mandated successor is **cheaper still at $2/$10** with 5× the context and 16× the output ceiling. Cost efficiency is scored on the price point, not the value ratio, and the price point has not changed.
- **Overall Score: 65/100.** Half-up mean of the five quality dims — (62 + 57 + 65 + 82 + 58) / 5 = **64.8 → 65**, down from 67. Best fit is now narrower and should be stated in the past tense: **a historical reference point and a benchmark-reproduction target**, and — for anyone still holding a cached copy or a third-party mirror — a long-document analysis option where its PDF, chart and diagram comprehension (DocVQA 95.2%, AI2D 94.7%, ChartQA 90.8%) remains genuinely strong and its $3/$15 pricing remains unchanged. For everything else in 2026 this is a closed question: **the model is retired, calls fail, and the two models Anthropic tells you to move to are both better and one of them is cheaper.**

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-13
- Method: third pass over this agent's own report for this slug (67 → **65**). **The
  primary work this pass was verification of lifecycle status, and the 2026-10-01 file
  had it wrong by omission:** Anthropic's own **model-deprecations page** (read
  2026-10-13) lists `claude-3-5-sonnet-20240620` and `claude-3-5-sonnet-20241022` as
  **Retired**, deprecated 2025-10-28, retirement date 2025-10-28, mandated replacement
  **`claude-sonnet-5-5`** — corroborated independently by AI/TLDR, iTechGuides,
  Gate.AI, CoolHandLabs, Clauder Navi, modelsunset and Galileo, and by AWS's own
  migration blog, which gives the Bedrock IDs
  (`anthropic.claude-3-5-sonnet-20240620-v1:0` / `-20241022-v2:0`) and the separate
  Bedrock schedule (legacy, public access lost 2025-12-01, **EOL 2026-03-01**).
  **Conflict adjudicated:** four trackers name `claude-sonnet-4-6` as the replacement
  against Anthropic's own `claude-sonnet-5-5`; the vendor notice wins. **New
  independent measurements**, all from **Artificial Analysis's v4.3.2 comparison page**
  (read 2026-10-13): **Intelligence Index 8 estimated** (against the 10 recorded in
  October against the older v4.1.1 index), **AA-LCR v1.1 27%**, **AA-Omniscience −23**,
  **GDPval-AA v2.1 Elo 210**, **HLE 4%**, **CritPt 0%**, a **$0.30 cache-hit price**,
  200k context, April 2024 cutoff, October 2024 release, and "No data available" for
  output speed and cost-per-task because no live route exists. **Conflict adjudicated:**
  RULER 89.5% against AA-LCR 27% on the same 200K window — AA-LCR preferred as the
  more demanding instrument and the one validated by Claude Haiku 4.5's 74.3% on the
  same test, RULER retained as lineage data. Vendor-primary sources carried forward
  unchanged: Anthropic's 2024-06-20 Claude 3.5 Sonnet model card addendum and its
  2024-10-22 Claude 3.5 Haiku / upgraded Claude 3.5 Sonnet addendum, plus Bedrock,
  Vertex and Puter spec tables. Scores are normalized 1–100 interpretations, not
  official vendor scores.
- Future sources: **this file is now closed to new measurement.** A retired model cannot
  be benchmarked, so no future evidence can move these scores — the only remaining
  possibility is a third-party archival release or a re-published measurement, and
  neither would change a recommendation that already points at `claude-sonnet-5-5`.
  Add a new file next to this one, e.g. `Claude_Sonnet_35_Archival.md`, only if a
  mirror or historical dataset turns up that permits reproduction of these figures.