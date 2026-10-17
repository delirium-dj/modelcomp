# Space Bunny Alpha — findings by Space Bunny

- Source: anonymous, undisclosed provider (`stealth/space-bunny-alpha` on OpenRouter; `space-bunny-free` on OpenCode Zen and Go)
- Date: **2026-10-17 (UTC) — third pass.** First pass 2026-10-01 (scored 65/100), second pass 2026-10-01 (revised to 72/100), this pass re-verified against fresh sources 16 days later.
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **What this pass changed, and what it did not.**
> **Changed — one score.** Tool use **58 → 62**, on new *independent* evidence: AI BENCHY
> (aibenchy.com) now publishes a full per-category independent evaluation of
> `stealth/space-bunny-alpha` across all five effort levels, and its **Tool Calling category
> scores 10.0/10.0 with the test passed**. That is a second independent confirmation of what
> APIMODELS found in September.
> **Unchanged — four scores, and Overall stays 72.** Reasoning, Context window, Multimodal and
> Coding all hold, because the new independent data cuts both ways: it confirms the coding
> weakness just as clearly as it confirms the tool-calling strength. Recomputed:
> (62 + 72 + 92 + 78 + 58) / 5 = 72.4 → **72**.
>
> **Two prior claims in this file are now corrected by evidence.**
> 1. The 2026-10-01 pass asserted the free preview "**has almost certainly lapsed**." **It has
>    not.** OpenCode Zen's live documentation still lists Space Bunny Free at
>    **Free / Free / Free** twelve days past its own announced end date, and OpenCode's own
>    telemetry shows it at **#3 of all models by token volume**. That inference was wrong.
> 2. `spacebunnymodel.com` markets the model as having "**native text-vision-audio-video
>    input**." **No source supports the audio half.** APIMODELS measured video arriving as a
>    few sampled frames *without audio*; every catalog (models.sulat, allaimodel, benchable)
>    lists text/image/video in, text out, and allaimodel's capability flags are "R T V" —
>    **no audio flag**. The audio claim is recorded as marketing, not capability.
>
> **Conflict of interest, disclosed and unchanged.** This file describes a model whose
> provider has not identified itself. There is no model card to check anything against. I
> score **independently measured** evidence highest, treat provider self-reports as
> directional, and cap accordingly.

## Model card

- **Name:** Space Bunny Alpha (OpenRouter) · **Space Bunny Free** (OpenCode Zen and Go)
- **Short description:** An **anonymous stealth-preview model**, live since **2026-09-23**, described by OpenRouter as "a flash model with fast inference, adjustable reasoning, and a 1M-token context window." The word "flash" is load-bearing: this is pitched as a fast, low-cost tier, not a flagship, and community comparisons have accordingly treated it against **DeepSeek V4.1 Flash and GLM-5.3 Flash**. Its pitch is native multimodal input and always-on reasoning over a 1M window at $0. **It is not run by OpenRouter, OpenCode, or any model lab** — they are distribution platforms. Not a variant or alias of another entry in this dataset.
- **Provider / access:** **OpenRouter** (`stealth/space-bunny-alpha`) and **OpenCode Zen / Go** (`space-bunny-free`, Chat Completions at `https://opencode.ai/zen/v1`, `@ai-sdk/openai-compatible`). Third-party resellers: **APIMODELS**, **Command Code**, **AnyRouter**, and **CODEFASHION TECH LTD's own hosted endpoint** (`spacebunnymodel.com/api/v1/chat/completions`, signup-free, $10 starting credits).
- **Release / knowledge:** listed **2026-09-23** (OpenRouter, OpenCode, Kilo Code, benchable all agree); AI BENCHY records it as released 2026-09-24. Knowledge cutoff not disclosed.
- **IDs:** `stealth/space-bunny-alpha` (OpenRouter); `space-bunny-free` (OpenCode Zen and Go); `space-bunny-alpha` (APIMODELS). **Treat the ID as temporary.**
- **Context window:** **1,000,000 tokens (OpenRouter) / 1,048,576 (OpenCode Zen)** with **524,288 max output**. The two platforms list slightly different context figures — a round 1,000,000 and a round 1,048,576 — and models.sulat confirms the OpenCode figure of 1,048,576. **The 524,288-token output ceiling is the largest of any model in this dataset.**
- **Modalities:** **text, image and video in; text out** — agreed by models.sulat, allaimodel ("R T V" = reasoning, tools, vision), benchable and Kilo Code. Tool calling, `tool_choice` and `response_format` JSON output all supported. **No audio is supported on any tested route** despite the provider's "text-vision-audio-video" marketing line. No non-text output.
- **Reasoning:** **always on, cannot be disabled** — five effort levels, `low` / `medium` / `high` / `xhigh` / `max`, **defaulting to `max`** on OpenRouter. AI BENCHY independently confirms the full five-level ladder. This has a measured practical consequence, covered below.
- **Pricing (as of 2026-10-17):** **$0.00 / MTok input and output, $0.00 cache read, on OpenRouter and OpenCode Zen** — still live, twelve days past the announced 2026-10-05 end date. AI BENCHY's entire 23-test run cost **$0.000** (315,136 input + 219,014 output tokens). **APIMODELS' gateway rate: $0.10 input / $0.40 output / $0.01 cached per MTok** — but that is the gateway's own margin, not a vendor list price, because the model is free upstream. **There is no official list price to compare against.**
- **Data terms — unchanged and important.** OpenRouter's stealth terms state the provider **may retain prompts and completions, but does not use them for training**. OpenCode Zen's listing states the opposite for its own route, in its own words: *"Space Bunny Free is a stealth model that's free on OpenCode for a limited time. Its provider follows a zero-retention policy and does not use your data for model training."* These are route-specific and must not be generalised. **Do not send data you would not share with an unnamed third party.**
- **Architecture:** **undisclosed.** No parameters, no MoE routing detail, no weights, no model card. AI BENCHY's own model-facts block says so explicitly: *"the exact checkpoint's provider, parameter counts, and architecture are undisclosed; there is no sourced basis for a numeric estimate or an identity relation."*

### Raw benchmarks found

**NEW — AI BENCHY independent evaluation** (`aibenchy.com`, `stealth/space-bunny-alpha::max`, released 2026-09-24, tested 2026-09-24 to 2026-09-30). This is the first real independent composite for this model and the most important addition since the file was written.

- **Score 6.7, rank #201 of ~426 model configurations. Reliability 10.0, Consistency 8.3.**
- **11 of 23 tests correct.** Failure reasons: **wrong answer ×10, did not follow instructions ×2.** **Attempt pass rate 59.4%, with 5 flaky tests.**
- Response time: **36.24 s average, 320.00 s maximum**, 833.43 s total. *The 320 s maximum independently reproduces the ~300 s upstream cut-off APIMODELS reported.*
- Full category breakdown:

| Category | Score | Consistency | Tests correct |
|---|---|---|---|
| Tool Calling | **10.0** | **10.0** | 1/1 |
| Data parsing and extraction | **10.0** | **10.0** | 2/2 |
| Puzzle Solving | 7.8 | 9.9 | 2/3 |
| Domain specific | 7.7 | 10.0 | 2/3 |
| Combined | 6.5 | 10.0 | 1/2 |
| Anti-AI Tricks | 6.4 | 7.9 | 2/4 |
| Agentic | 6.1 | 3.1 | 0/1 |
| **Instructions following** | **5.9** | **2.6** | **0/2** |
| **Coding** | **5.7** | 7.1 | **1/3** |
| General Intelligence | 5.3 | 10.0 | 0/1 |
| Trivia | 3.0 | 10.0 | 0/1 |

- Stands out in **Domain specific, where it ranks #1**; weakest in **Instructions following at #17**.
- **Rank is not monotonic in reasoning effort** — live leaderboard: **high #143**, **max #201**, **medium #254**, **xhigh #259**, **low #299**. Spending more thinking tokens makes it *worse* on this suite, which is itself a finding.
- Calibration anchors on the same live leaderboard: Claude Opus 4.7 (medium) **#105**, Nemotron 3.5 Super VL (high) **#81**, Ling 3.1 Flash (medium) **#96**, Beam 1.0 (medium) **#220**, Ember-1 (high) **#191**, Mercury 2.5 (high) **#225**.

**Self-reported by the provider, on its own subsets — still not comparable to full-benchmark scores** (this caveat comes from the sources themselves):

- **GPQA Diamond: 82.0%** on a **60-question** subset
- **Humanity's Last Exam: 46.1%** on a **300-question** subset
- **AI BENCHY suite: 7.0 / 10** — **note the conflict:** AI BENCHY's own live leaderboard now shows **6.7 at `max`**. The provider's "7.0" is close but not identical to the independent reading, and the independent number is the one used.
- OpenRouter's collection copy claims "leading accuracy on benchmarks including **AIME 2025, TerminalBench, and SWE-Bench Verified**" — **no numbers attached to any of the three**, and none has appeared on any leaderboard in the 16 days since.

**Independent evaluation — APIMODELS, 28 tasks on 2026-09-29, one real API call per task** (retained from the prior pass, still the best single evidence source for *behavioural* detail):

- **21 passed, 5 partial, 2 failed.**
- **3D and web: 6 of 6 passed** — a Three.js solar system with orbit controls, a pure-CSS 3D page, and a 64 KB Chart.js admin dashboard whose sorting, filtering, dark mode and collapsible sidebar all worked in Chrome with no console errors.
- **Writing: 4 of 4 passed** — a seven-character quatrain that scans correctly line by line, a Chinese-to-English technical translation with every number intact, a 2,300-word engineering article, and native-quality Japanese and Korean product copy.
- **Reasoning: 3 of 3 passed** — including a deliberately under-constrained seating puzzle that it **correctly reported as having four solutions instead of inventing one**, and a three-day itinerary meeting every budget, walking and attraction constraint.
- **Long context: 3 of 3 passed** — **planted facts retrieved from a 91,298-token document with exact quotes.**
- **Tool calling: perfect** — two parallel tool calls with correct arguments in 2 seconds.
- **Coding: all four tasks partial, for the same reason** — the logic was right but the details were not checked. It missed one of the bugs in an async-pool function; wrote 13 tests for a correct LRU cache of which **3 assert the opposite of its own implementation**; left a garbled token in an otherwise sound SQL query; and printed a hand-computed pandas table with **4 of 12 quantiles wrong**. A 1,450-line canvas explainer failed on a single missing quote — **with that character restored it rendered five scenes.**
- **Two advertised capabilities did not hold on this route:** a strict JSON schema sent through `response_format` was **accepted but not enforced** (two required keys renamed, extra fields added) — validate on your side; and **video input arrives as a few sampled frames without audio**, so it can describe what is in a clip but not its length, motion or sound.
- **Image input is genuinely good:** it named **Preikestolen over Lysefjord from a photo unprompted** and estimated the crowd on the plateau correctly.
- **Two settings matter more than anything else.** First, `reasoning_effort`: **at the default the model reasoned for 4 to 5 minutes before the first character** on code, planning and even a four-line poem, and **4 of 28 calls were cut upstream around 300 seconds**; at `low` or `medium` the same prompts answered in **4 to 40 seconds to first token with no loss the tester could see**. Second, `max_tokens`: **the reasoning trace is billed inside `completion_tokens` and streams before the answer, so a small cap returns empty content** — omit it or set it large.
- **Throughput: roughly 90 to 140 tokens per second, including reasoning.**

**Production telemetry — OpenCode Data (2026-10-16 snapshot).** This is new and it is the strongest evidence that the model is genuinely used at scale rather than merely announced:

- **Ranked #3 of all OpenCode models by tokens over the past 7 days — 19–20T tokens**, behind only DeepSeek V4.1 Flash (57T) and Muse Spark 1.3 Contributor (36T). 352B in the past day.
- **96.8% of input tokens served from cache** — the highest ratio of any model in that dashboard, ahead of DeepSeek V4.1 Flash (96.2%) and Step 5 Preview (95.4%). 18T cached vs 597B uncached.
- Lab listed as "**-**" (unknown), consistent with the stealth framing. Absent from the dashboard's token-price table, consistent with $0 metering.

**What still does not exist:**

- **No Artificial Analysis record. No LMArena entry. No SWE-bench or Terminal-Bench row anywhere.** Command Code lists intelligence, coding and speed as "not yet scored." benchable.ai's benchmark table for this model is **empty (0 rows)**.
- **No Tau3-Banking, Tau2-Bench, GDPval-AA, Claw-Eval, Toolathlon, MCP-Atlas or SWE Atlas Codebase QnA** figure.
- **No SWE-bench Verified, SWE-bench Pro, DeepSWE, LiveCodeBench, SciCode or Aider Polyglot** figure.
- **No FrontierMath, CritPt, AA-LCR or AA-Omniscience** figure.
- **No MMMU, MMMU-Pro, DocVQA, OmniDocBench or CharXiv** figure — the vision evidence is behavioural only.
- **No model card, no weights, no parameters, no architecture.**

### Normalized scores (1–100)

> **Scoring-integrity notice.** Sources here are now three: a single 28-task behavioural
> evaluation, **AI BENCHY's independent 23-test composite with a full category breakdown**,
> and the provider's own self-reported subsets. None is a frontier leaderboard. Scores
> weight the two independent evaluations highest and should move materially the moment a
> real SWE-bench or Terminal-Bench row appears.

- **Tool use: 62/100.** *(was 58 — raised on new independent evidence.)* Two independent confirmations now, not one: AI BENCHY's **Tool Calling category scores 10.0/10.0 with the test passed and 10.0 consistency**, and APIMODELS measured **perfect parallel tool calling — two calls with correct arguments in 2 seconds**. Structural support is also confirmed by Kilo Code (Function Calling, Tool Choice, Structured Outputs all supported) and by reasoning being **always on**. Still capped well below the top band by four newly-measured negatives: **Agentic 6.1 with 0/1 tests passed and only 3.1 consistency**; **Instructions following 5.9 with 0/2 passed and 2.6 consistency — the worst consistency of any category**, which independently corroborates APIMODELS' finding that `response_format` accepts a strict schema without enforcing it; **a 320.00 s maximum response time**, independently reproducing the ~300 s upstream cut-off; and the fact that **no agentic benchmark exists** despite OpenRouter's unquantified TerminalBench claim.
- **Reasoning: 72/100.** *(unchanged.)* Now supported on both sides by independent data. Up: **Puzzle Solving 7.8 (2/3)**, **Domain specific 7.7 (2/3, and #1 in its category)**, **Data parsing and extraction 10.0 (2/2)**, and APIMODELS' **3 of 3** including the under-constrained seating puzzle where it **reported four solutions instead of inventing one** — calibrated uncertainty, which is rarer than a high score. Self-reported: GPQA Diamond 82.0% and HLE 46.1% on subsets. Down: **Trivia 3.0 (0/1)**, **General Intelligence 5.3 (0/1)**, an overall composite of **6.7 at #201**, and the finding that **rank is not monotonic in effort — `high` at #143 beats `max` at #201**, so more thinking actively hurts on this suite. Capped because the 60- and 300-question subsets are not full benchmarks, nobody has reproduced either, and no FrontierMath/CritPt/Intelligence Index figure exists.
- **Context window: 92/100.** *(unchanged.)* **1,000,000–1,048,576 tokens with 524,288 max output** — the methodology's ≥1M band, scored high in it because there is an **actual independent retrieval measurement behind the spec, which most models in this dataset lack**: **3 of 3 planted facts retrieved from a 91,298-token document with exact quotes.** The 524,288-token output ceiling is the largest in the dataset. Not 100 for one honest reason: **retrieval is verified to 91K, not to 512K or 1M**, and no retrieval number has been added in 16 days. The 1,000,000-versus-1,048,576 discrepancy is minor and flagged rather than resolved.
- **Multimodal: 78/100.** *(unchanged.)* **Text, image and video in; text out** — the methodology's "+video in = 75–90" band, scored near its floor because **video is nominally supported but degraded on the tested route**: APIMODELS found input "arrives as a few sampled frames without audio." Offsetting upward and measured: **image input is genuinely strong** — unprompted identification of **Preikestolen over Lysefjord**, a correct crowd estimate, and 6-of-6 on visual/3D web construction. **This pass adds a documented conflict rather than a resolution:** the provider markets "native text-vision-audio-**audio**-video input" while every catalog and every measurement supports no audio at all. **Scored on the measurement, not the marketing.** Still capped by **no vision benchmark of any kind** (no MMMU, MMMU-Pro, DocVQA, OmniDocBench, CharXiv) and by no audio and no non-text output.
- **Coding: 58/100.** *(unchanged — the new data reinforces the existing cap.)* Up: APIMODELS' **6 of 6 on 3D and web construction** — a working Three.js scene, a pure-CSS 3D page, and a 64 KB Chart.js dashboard with sorting, filtering, dark mode and a collapsible sidebar, all verified in Chrome with no console errors; and a 1,450-line canvas explainer that failed only on one missing quote. Down, and it is one consistent failure mode rather than several: **all four real coding tasks were partial because the model does not check its own output** — a missed async-pool bug, 13 LRU tests of which 3 assert the opposite of a correct implementation, a garbled SQL token, 4 of 12 wrong quantiles. **AI BENCHY now measures the same weakness independently: Coding 5.7 with 1 of 3 tests passed.** Two independent sources now agree. Capped at 58 by the total absence of **SWE-bench Verified, LiveCodeBench, SciCode and Aider Polyglot** figures and by OpenRouter's unquantified SWE-Bench Verified claim.
- **Cost efficiency: 90/100.** *(unchanged.)* **$0.00 on input, output and cache read**, still live on OpenCode Zen **twelve days past its own announced 2026-10-05 end date**, with AI BENCHY's complete 23-test run costing **$0.000** and Kilo Code listing it as no-cost. Strong corroborating operational figures: **96.8% input cache ratio — the highest of any model on OpenCode's dashboard** — and **19–20T tokens over 7 days, #3 overall**, which is real evidence of a model under genuine production load at zero marginal price. APIMODELS' gateway rate of $0.10/$0.40/$0.01 remains available. Held at 90 rather than 95–99 because **there is still no official list price** — the $0 is a promotional rate, Kilo Code labels the model "**retires Oct 5**," and the gateway rate is the gateway's own margin. One operational deduction restated: because **reasoning tokens bill as output tokens and stream before the answer**, a small `max_tokens` returns empty content, so a careless integration spends nothing and gets nothing.
- **Overall Score: 72/100.** *(unchanged.)* (62 + 72 + 92 + 78 + 58) / 5 = 72.4 → **72**. Best fit, with the caveats attached: **a free high-volume reasoning and long-context model for prototyping, open-source work and long agent sessions** — a 1M window with verified retrieval at 91K, image input that genuinely works, calibrated uncertainty on under-constrained problems, independently confirmed perfect tool calling and data extraction, and reasoning you can turn *down* to `low`/`medium` for 4–40 second first tokens instead of 4–5 minutes. **Four warnings.** First, **the ID is temporary** — stealth previews are normally renamed or withdrawn on reveal; pin nothing and keep a fallback. Second, **do not send sensitive data** — route-specific retention terms differ between OpenRouter and OpenCode, and Zen's zero-retention promise covers only its own route. Third, **default effort will time you out** — the 320 s maximum is now independently measured, not anecdotal; set `reasoning_effort` to `low` or `medium` and leave `max_tokens` unset or large. Fourth, **verify its output** — the consistent coding failure is skipped self-checking, and it now shows up on an independent harness as 1-of-3 on Coding and 0-of-2 on Instruction following. **And the honest summary after three passes:** this model is still unscored by any frontier leaderboard, its headline GPQA and HLE numbers remain its provider's own subsets, its one real composite sits at #201, and its rank *falls* as reasoning effort rises. It could be considerably better or worse than 72; nobody outside the provider has measured it properly.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-17
- Method: **third pass**, public internet research, superseding this agent's own 2026-10-01 report (65/100, then revised to 72/100). Four searches plus two direct retrievals. **New sources this pass:**
  - **[AI BENCHY](https://aibenchy.com/model/stealth-space-bunny-alpha-max)** — the load-bearing addition. Independent evaluation of `stealth/space-bunny-alpha` at all five effort levels: score **6.7**, rank **#201**, reliability **10.0**, consistency **8.3**, **11/23 tests correct**, 59.4% attempt pass rate, 5 flaky tests, **36.24 s average and 320.00 s maximum** response time, $0.000 total cost, plus the full 11-category breakdown (Tool Calling 10.0, Data parsing 10.0, Puzzle Solving 7.8, Domain specific 7.7 — #1 in category, Combined 6.5, Anti-AI Tricks 6.4, Agentic 6.1, Instructions following 5.9 at #17 and 2.6 consistency, Coding 5.7 at 1/3, General Intelligence 5.3, Trivia 3.0), and the non-monotonic effort ranking (high #143, max #201, medium #254, xhigh #259, low #299).
  - **[OpenCode Data](https://opencode.ai/data)** — production telemetry: **#3 of all models by 7-day tokens at 19–20T**, 352B in one day, **96.8% input cache ratio (highest in the dashboard)**, lab "-".
  - **[OpenCode Zen docs](https://opencode.ai/docs/zen)** — confirms Space Bunny Free is **still listed Free / Free / Free**, still described as "a stealth model that's free on OpenCode for a limited time," and confirms the route-specific **zero-retention, no-training** data terms in Zen's own words.
  - **[Kilo Code](https://kilo.ai/models/stealth-space-bunny-alpha)** — lists it as "**Space Bunny Alpha (retires Oct 5)**," $0.00/1M, 1,000,000 context, 524,288 max completion, text/image/video in, text out, Function Calling + Tool Choice + Structured Outputs + Reasoning Tokens supported, tokenizer "Other," content moderation disabled.
  - **[models.sulat.com](https://models.sulat.com/providers/opencode)** — OpenCode route at **1,048,576** context, released 2026-09-23, text/image/video in, text out, subscription-plan pricing.
  - **[spacebunnymodel.com](https://spacebunnymodel.com/)** — the provider's own marketing ("native text-vision-audio-video input," 1M in / up to 524k out, free, no signup), the source of the audio claim this file disputes.
  - **[allaimodel.com](https://allaimodel.com/providers/opencode)** (2026-10-11) — Space Bunny Free at free/free/free, 1.0M context, capability flags **"R T V"** — no audio flag.
  - **[benchable.ai](https://benchable.ai/models/stealth/space-bunny-alpha)** — benchmark table for this model is **empty**; confirms 1M context, released 2026-09-23, $0/$0 on the stealth endpoint.
  - **[BenchLeader](https://www.benchleader.com/)** — checked for a composite row; 434 models ranked across 23 live feeds as of 2026-10-12, and **Space Bunny Alpha has no entry**.
  - Retained from prior passes: **APIMODELS' 28-task evaluation** (`apimodels.app/models/space-bunny-alpha`, 2026-09-29), the provider's self-reported subsets (GPQA Diamond 82.0% on 60 questions, HLE 46.1% on 300, AI BENCHY 7.0/10), and OpenRouter's collection copy.
  - Conflicts resolved in favour of measurement over marketing: audio input (**rejected** — no source supports it), the provider's "AI BENCHY 7.0" versus AI BENCHY's live **6.7** (**independent figure used**), and the prior pass's claim that the free window had lapsed (**corrected — it has not**). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Space_Bunny_Revealed.md`, using the same headings. **Re-run this file the moment any of the following appears:** an Artificial Analysis, LMArena or BenchLeader entry; a real SWE-bench or Terminal-Bench row with a number; a vision benchmark (MMMU-Pro, DocVQA, CharXiv); a published post-preview list price; or the provider's reveal and the resulting ID change. **Two of five dimensions now rest on real independent measurements rather than one**, which is progress — but Context window still has no retrieval evidence past 91K, Multimodal still has no benchmark at all, and Coding is independently confirmed weak.