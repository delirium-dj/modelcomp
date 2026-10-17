# Ember-1 — findings by Space Bunny

- Source: Fireworks Research (`fireworks/ember-1`)
- Date: **2026-10-17 (UTC) — second pass.** First pass 2026-10-02 (Overall 84).
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **What this pass changed: four of six scores down, Overall 84 → 80.** Two independent
> composites appeared in the 15 days since this file was written, and both read far below
> the vendor's own numbers.
>
> | Dimension | Was | Now | Driver |
> |---|---|---|---|
> | Tool use | 88 | **78** | AI BENCHY **Tool Calling 3.0 (0/1)** — but the failure was an **API error**, and **8 of 12 wrong tests across the whole run were API errors**, reliability 8.3 |
> | Reasoning | 78 | **74** | LLM Stats Reasoning **38.6 (#72)**; AI BENCHY **Trivia 3.0 (0/1)**, Domain specific 3.6 (0/3), 6.7 at #209 |
> | Context window | 95 | **95** | Unchanged; **max output 943,718 now published**, filling a gap |
> | Multimodal | 68 | **68** | Unchanged; still no vision benchmark |
> | Coding | 92 | **84** | AI BENCHY **Coding 5.2 (1/3), consistency 4.4** — **2 of 3 failures were API errors**; LLM Stats Coding 36.4 (#24) |
> | Cost efficiency | 66 | **58** | AI BENCHY: **$3.264 per 23-test run**, **97.34s average / 587.08s maximum** response; AA's own alternatives panel beats it on **both** score and cost |
>
> (78 + 74 + 95 + 68 + 84) / 5 = 79.8 → **80**.
>
> **Read the drop correctly.** Most of it is not a capability verdict. The AI BENCHY run is
> **contaminated by serving instability** — eight of its twelve failures are API errors, six
> tests are flaky, and reliability is 8.3 where every other model in this batch scored 10.0.
> What the new data actually establishes is that **Ember-1's serving layer is unreliable in
> a way its vendor never measured**, which is a first-order production risk on a model whose
> entire pitch is agentic loop economics. The vendor's own large-sample rows
> (SWE-bench Verified n=500 at 92.2%, DeepSWE 1.1 n=113 at 75.2%, Terminal-Bench 2.1
> n=89 at 82.0%) remain **unreproduced by anyone** — this pass makes that gap larger, not
> smaller, because the one broad independent attempt failed for reasons outside the model.
>
> **Two things this pass also resolves.** The **Research Preview persisted** — the two-week
> window opened 2026-09-23 and closed around 2026-10-07, and the model is **still live on
> 2026-10-15 with the price unchanged at $3.00 / $0.30 / $15.00**. And the active parameter
> count is now documented: **~2.8T total / ~104B active MoE**.

## Model card

- **Name:** Ember-1
- **Short description:** Fireworks Research's first model in the Ember series — a **post-trained derivative of Moonshot AI's Kimi K3**, trained to emit shorter reasoning traces while keeping the deliberation that changes the answer. The target is not raw capability but reasoning *economics*: reasoning-heavy agentic workloads re-bill every prior turn's reasoning trace, so cutting wasted thinking cuts cost quadratically. **Variant note:** Ember-1 is not a Kimi-family SKU and not a new architecture — it is K3 retrained, and Fireworks markets and catalogs it as its own model. Launched 2026-09-23 as a **Research Preview with an initial two-week serverless window**, after which permanence was to be decided by community demand. **That window has now passed and the model is still live — permanence appears to have been granted, though Fireworks still labels it a research preview.**
- **Provider / access:** Fireworks AI **Serverless** (`fireworks/ember-1`, model path `accounts/fireworks/models/ember-1`), state **Ready**. Also on **OpenRouter**, **Vercel AI Gateway**, **Kilo Gateway**, and (via Fireworks) Blackbox AI. Four providers carried it in the models.dev catalog as of **2026-10-15**. Fireworks Chat Completions. Enterprise customers can train their own token-efficient Ember variants via Fireworks Serverless Training. The endpoint advertises **Zero Data Retention and No Prompt Training**; Fireworks states **no customer data was used in training**.
- **Release / knowledge:** announced **2026-09-23**; Fireworks model page created-on date 2026-09-22; AI BENCHY records release as 2026-09-28. Knowledge cutoff not published separately; inherited from the K3 base.
- **IDs:** `fireworks/ember-1` (Fireworks API, OpenRouter, Vercel, Kilo), `accounts/fireworks/models/ember-1` (model path). No Zen Free ID.
- **Context window:** **1,040,576 tokens** (~1.04M) per the Fireworks model page, cross-checked by BenchLM (1.04M), LLM Stats (1,040,000) and ModelsAtlas (1.0M). **NEW THIS PASS — maximum output is now published: 943,718 tokens** (AI/ML API gateway spec, inheriting K3's envelope). This closes a gap the prior pass flagged as unpublished. **No MRCR / RULER / GraphWalks retrieval measurement exists at any window length** — the window is a documented specification inherited from K3, not a measured capability of this checkpoint.
- **Modalities:** **text and image in, text out** (Fireworks model page lists "Support image input: Supported", Mixture-of-Experts: Yes, Function Calling: Supported, Parameters: 2.78T; Vercel AI Gateway, ModelsAtlas, Blackbox AI and AI/ML API all agree). Reasoning yes — traces are exposed and separately countable (this is the model's entire point). Tool calling / function calling supported; structured output and streaming supported; implicit prompt caching supported on the Fireworks endpoint. **Video input is not advertised for Ember-1** even though the K3 base supports it — the narrower modality list is what the serving endpoints document, and that is what is scored.
- **Pricing (as of 2026-10-17):** **$3.00 / $0.30 cached / $15.00 per 1M input / cached input / output tokens** on Fireworks — **unchanged since launch** and identical to Kimi K3's rate on the same platform (Fireworks model page; BenchLM; OpenRouter; LLM Stats; artificialwatch's sweep read $3/$15 on 2026-10-15). **Gateway markup, recorded separately:** AI/ML API lists **$4.1262 / $0.41262 / $20.631**, a ~37% markup. Kimi K3 itself is available from other providers as low as **$1 / $9 per 1M** (llm-stats lists Kimi K3 at $3.9/$19.5 on that route), so at equal routing Ember-1 is *more expensive* than the cheapest available K3 route. The savings story is **entirely on the volume side, not the rate side** — fewer generated tokens at the same rate.
- **Architecture:** **proprietary post-training of an open-weight MoE base.** **~2.8T total / ~104B active** (Fireworks lists Parameters 2.78T; AI BENCHY records "~2.8T total (~104B active), MoE, Closed", explicitly labelled *Estimated* — it inherits K3's reported counts, and **Ember-specific counts are still not disclosed by the vendor**). Fireworks ran 50+ training experiments and 200+ evaluations across mathematics, coding, instruction following, conversation, search, tool use and software engineering. **Ember-1's own weights, training code and algorithms are not released** — self-hosting is not possible, and no licence is published.

### Raw benchmarks found

> Provenance matters for every row below: the five core public-benchmark numbers are **Fireworks' own evaluations** (blog post, 2026-09-23) and **still have not been independently reproduced**. Three independent sources have now attempted or scored this model; all three read below the vendor's own numbers.

**Vendor evaluation — Fireworks Research, 2026-09-23 (unchanged, still unreproduced):**

| Benchmark | N | K3 Low | K3 High | K3 max | **Ember-1** | Ember-1 vs K3 max |
|---|---|---|---|---|---|---|
| Terminal-Bench 2.1 | 89 | 76.4% | 77.6% | 80.9% | **82.0%** | −51.9% tokens / −$23.10 |
| SWE-bench Verified | 500 | 80.4% | 86.0% | 93.2% | **92.2%** | −15.5% tokens / −$68.10 |
| SWE-Interact | 75 | 6.7% | 13.3% | 21.3% | **20.0%** | −32.5% tokens / −$60.80 |
| DeepSWE 1.1 | 113 | 55.8% | 62.8% | 66.4% | **75.2%** | −23.7% tokens / −$126.90 |
| τ²-Bench Airline | 50 | 64% | 64% | 64% | **66%** | −5.9% tokens / −$0.30 |

- **Doximity Bedside Bench** (500 physician-validated clinical cases, 10 categories) on Fireworks' **Specialized Intelligence Index**: Ember-1 reportedly set a new Pareto frontier on **cost per task** against GPT-5.6 Sol, GPT-6 Astra and Claude Opus 5 — *a Pareto position, not a score, and only as good as its cost assumptions, which are Kimi K3's public rate card, not an Ember-1 card.*
- **Pareto analysis across industry benchmarks with >50 samples:** Ember-1 sits on or near the quality-vs-cost frontier, matching K3-max quality at a fraction of the cost and **strictly dominating K3-low**; the same analysis against GPT-6 Astra, Claude Opus 5 and GLM 5.3 reportedly places it as a frontier leader.
- **Fireworks production A/B tests** (2 customers, live coding workloads): **score 0.753 / 21.4 steps / 29.9K output tokens** for Ember-1 vs **0.751 / 23.8 steps / 49.3K output tokens** for K3 — **71.3% reasoning-token and 39% total-token reduction** at statistically indistinguishable quality. One customer moved to full production on the strength of it.
- **Self-reported launch figure: ~40% fewer tokens overall, 35–50% across seven benchmarks.**

**NEW — AI BENCHY independent evaluation** (`aibenchy.com/model/fireworks-ember-1-max`; released 2026-09-28, tested 2026-09-30 23:04, `fireworks/ember-1::max`). **This is the first broad independent run of the model, and it must be read with its own failure taxonomy in view:**

- **Score 6.7, rank #209 of ~426 configurations. Reliability 8.3, Consistency 7.8.**
- **11 of 23 tests correct.** Failure reasons: **API error ×8, wrong answer ×3, no answer ×1.** **Attempt pass rate 59.4%, with 6 flaky tests.**
- **Response time: 97.34s average, 587.08s maximum, 2,238.73s total.** Per-category averages are extreme in one place: **Domain specific averaged 471.21s with a 587.08s maximum**, against 7.04s for General Intelligence and 6.57s for Puzzle Solving.
- **Total cost $3.264** for the run (186,901 output + 153,399 input tokens) — the AI BENCHY stat tiles confirm the $3.00/$15.00/$0.30 rate card was applied.
- Full category breakdown:

| Category | Score | Consistency | Tests correct | Failure |
|---|---|---|---|---|
| Agentic | **10.0** | 10.0 | 1/1 | — |
| General Intelligence | **10.0** | 10.0 | 1/1 | — |
| Anti-AI Tricks | 8.7 | 7.9 | 3/4 | API error: 1 |
| Puzzle Solving | 7.7 | 10.0 | 2/3 | Wrong answer: 1 |
| Combined | 6.5 | 10.0 | 1/2 | API error: 1 |
| Data parsing and extraction | 6.4 | 5.9 | 1/2 | API error: 1 |
| Instructions following | 6.2 | 5.8 | 1/2 | API error: 1 |
| **Coding** | **5.2** | **4.4** | **1/3** | **API error: 2** |
| Domain specific | 3.6 | 7.2 | 0/3 | Wrong answer: 2, API error: 1 |
| **Tool Calling** | **3.0** | 10.0 | **0/1** | **API error: 1** |
| Trivia | 3.0 | 10.0 | 0/1 | No answer: 1 |

- Stands out most in **Agentic, where it ranks #1**; weakest in **Tool Calling at #17**.
- **Rank by effort:** low **#184**, high **#191**, max **#209**, none **#320**. AI BENCHY offers only `(max) (high) (low) (none)` for this model.
- **AI BENCHY's own "Recommended alternatives" panel is the sharpest independent finding in this file.** Against Ember-1 at max: **Gemini 3.7 Flash (low)** scores **9.4** (+2.70) at **$0.183, 94.4% cheaper, 6.24s — 93.6% faster**; **Claude Haiku 5.5 (low)** scores 8.6 at **$0.061, 98.1% cheaper, 7.51s — 92.3% faster**; **GPT-6.1 Sol (low)** scores 9.6 at $0.460, 85.9% cheaper, 7.15s — 92.7% faster. **Ember-1 is beaten on both score and cost by all three.**
- **Honest qualification:** eight of twelve failures are API errors, not wrong answers. Tool Calling's 0/1 and two of Coding's three failures are *serving* failures. **This run cannot establish that Ember-1 is weak at tool calling or coding** — what it establishes is that the serving path failed on 8 of 23 calls, which is a real and separately damning finding.

**NEW — LLM Stats composite score** (last updated 2026-10-12):

- **LLM Stats Score 42.8 (#55, 4 evals)**; **Reasoning 38.6 (#72, 3 evals)**; **Coding 36.4 (#24, 3 evals)**; **Agents 29.1 (#48, 2 evals)**. In head-to-head comparisons LLM Stats gives Ember-1 **0 of 1** shared-benchmark wins against Muse Wonder Full (which wins on DeepSWE 1.1) and against Muse Wonder, and rates Muse Wonder **1.3× cheaper**… no: **1.3× more expensive** on a blended 3:1 basis, so LLM Stats does place Ember-1 as the cheaper of the pair. Recorded for the Coding and Agents sub-indexes, which are markedly lower than the vendor's own rows.

**Retained independent replication** (Jessica Wachtel, The New Stack, 2026-09-29) — 15 runs, 5 per test, both models via OpenRouter routed to Fireworks, reasoning tokens logged separately:

- *Logic puzzles* (4/5/7-engineer constraint sets): Ember-1 **5/5 perfect**, 3m46s, 13,630 reasoning tokens, $0.27 — K3 5/5, 12m26s, 16,679 tokens, $0.34.
- *Deploy scheduling* (12 dependent services, two blackout windows, optimum 17h): Ember-1 **5/5 perfect**, 1m29s, 6,543 tokens, $0.10 — K3 5/5, 4m46s, 7,792 tokens, $0.13.
- *Probability* (5 exact-fraction retry-system questions vs a 2M-request simulation): Ember-1 **4/5** — one run made an arithmetic slip (0.94619 vs 0.94629) that propagated into two other answers; K3 **5/5**. Ember-1 1m47s, 6,242 tokens, $0.13 — K3 6m48s, 9,682 tokens, $0.19.
- **Totals: Ember-1 14/15 vs K3 15/15; 23% fewer reasoning tokens** (against the marketed ~40%); **3.4× faster** end-to-end; $2.48 vs $3.26 on Fireworks (24% cheaper), but $1.96 for K3 at the cheapest available route.

**Still absent:**

- GPQA Diamond, HLE, LCR/MLCR, CritPt, Omniscience/hallucination, Artificial Analysis Intelligence Index, BenchLM overall score (still **unranked, 5 of 639 benchmarks covered** as of 2026-10-16), LiveCodeBench, SciCode, Vibe Code Bench, GDPval-AA, Claw-Eval, Toolathlon, MCP-Atlas, SWE Atlas Codebase QnA, Tau3-Banking: **no verified public score found.**
- **No long-context retrieval reported** at any length — no MRCR, RULER or GraphWalks run exists.
- **Rejected as unverified:** ModelsAtlas publishes "capability signals" for Ember-1 (MMLU 97, GPQA proxy 95, HumanEval proxy 92, GSM8K proxy 87) explicitly labelled **"estimated from metadata — not an official benchmark run."** LLM Reference states **no mapped benchmark peers are available**. AI BENCHY's own model-facts block is likewise labelled *Estimated* for parameters. None are used here.

### Normalized scores (1–100)

- **Tool use: 78/100.** *(was 88.)* The vendor rows remain strong and unreproduced — **Terminal-Bench 2.1 82.0% (n=89)** just under the methodology's ~88% frontier reference, **τ²-Bench Airline 66% (n=50)** well into frontier territory, **SWE-Interact 20.0% (n=75)** above every K3 tier below max — and Ember-1 **beats K3 at max effort** on the terminal benchmark while using 51.9% fewer tokens, which remains the cleanest single demonstration that the saving did not come out of agentic capability. What now caps it is new and specific: **AI BENCHY ranks Tool Calling at 3.0 and #17, its weakest category**, reliability is **8.3** where every peer scored 10.0, **six tests are flaky**, and the run's average response time was **97.34s with a 587.08s maximum**. Eight of twelve failures were **API errors**, so the 3.0 is not a clean capability verdict — but an agentic model whose serving layer drops roughly a third of its calls cannot be scored in the high band regardless of who would have won those calls. No GDPval-AA, Tau3-Banking, MCP-Atlas or Claw-Eval row exists anywhere.
- **Reasoning: 74/100.** *(was 78.)* Still fundamentally inference-dependent: **no GPQA Diamond, HLE, LCR, CritPt or Intelligence Index value exists**, and the AA index does not list it at all. The positive evidence is unchanged and still real — **DeepSWE 1.1 75.2%**, where Ember-1 beats K3 at *every* effort tier including max (66.4%), which is hard to explain if deliberative depth were simply lost; and the independent 15-run replication at **14 of 15 perfect**, the single miss a propagated arithmetic slip rather than a reasoning collapse. The new negatives are: **LLM Stats Reasoning 38.6 (#72)**; AI BENCHY **Trivia 3.0 (0/1, no answer)** and **Domain specific 3.6 (0/3)**; a composite of **6.7 at #209**; and — importantly for a reasoning model — a **97.34s average and 587.08s maximum response time**, with Domain specific averaging **471s**. Deliberation that long is a reasoning-adjacent failure mode even when the answer arrives. Held well out of the 90–100 band the methodology reserves for GPQA 90%+ / HLE 40%+, because the entire knowledge-anchor set remains missing.
- **Context window: 95/100.** *(unchanged.)* Tier mapping: ≥1M = 95–100, and the documented ceiling is **1,040,576 tokens**, cross-checked across four sources. **New this pass: maximum output is now published at 943,718 tokens**, filling a gap the prior pass could only flag. Not 100 because that tier requires **≥98% retrieval measured at 512K+**, and no MRCR / RULER / GraphWalks run exists for this checkpoint. The vendor's own architectural argument is *about* context economics — reasoning traces are re-read and re-billed every turn, growing roughly quadratically — which is a cost argument, not a retrieval-accuracy result, and is not scored here.
- **Multimodal: 68/100.** *(unchanged.)* Methodology band: text + image in, text out = 60–70; placement is high in that band because image input is confirmed across **five** independent catalogues now (Fireworks model page, Vercel AI Gateway, ModelsAtlas, Blackbox AI, AI/ML API) and tool calling, structured output and implicit prompt caching are documented on the same endpoints. **What caps it:** **no video or PDF input is advertised for Ember-1** — narrower than the K3 base's documented image-and-video support — output is text-only, so both higher bands are out of reach on current documentation; and **no vision benchmark of any kind has ever been run on it**, in either pass.
- **Coding: 84/100.** *(was 92 — the largest single change in this file.)* The vendor rows are the strongest evidence that exists and remain unreproduced: **SWE-bench Verified 92.2% on n=500** — the largest harness sample published for this model by an order of magnitude, above the methodology's 90% frontier marker; **DeepSWE 1.1 75.2% on n=113**, above its 74% frontier marker and a genuine 8.8-point win over K3-max; **Terminal-Bench 2.1 82.0% on n=89**. What changed is the state of independent corroboration. **AI BENCHY scores Coding at 5.2 with 1 of 3 tests correct and the lowest consistency figure of any category (4.4)** — though **two of those three failures were API errors**, so this is a contaminated signal rather than a clean refutation. **LLM Stats rates Coding 36.4 (#24)** on its own composite. And the model still has **zero third-party reproduction of any harness row** after 24 days. Dropped to 84 because a 92 requires the numbers to be holding, and the only two attempts to check them independently have not produced a confirmation.
- **Cost efficiency: 58/100.** *(was 66 — the largest single drop in this file.)* The rate card is **$3.00 / $0.30 / $15.00, unchanged from launch and identical to K3 on the same platform**, so the entire saving still depends on volume. The volume claim has **one** independent confirmation: the New Stack replication measured **23% fewer reasoning tokens** and 3.4× faster on three narrow task types, against a marketed ~40%. This pass adds a **broad** independent measurement that does not confirm it: AI BENCHY spent **$3.264 on a 23-test run** at **97.34s average and 587.08s maximum response time**, and its own alternatives panel lists **Gemini 3.7 Flash (low) at $0.183 and 6.24s — 94.4% cheaper and 93.6% faster** — plus Claude Haiku 5.5 (low) at **$0.061 and 7.51s, 98.1% cheaper**. A model whose entire reason to exist is cost-per-task in agent loops is losing on cost-per-task by two orders of magnitude to three cheaper models on the same suite. Also unrecovered: **Kimi K3 remains available elsewhere at $1 / $9**, so the saving is real only against K3-on-Fireworks, and the Research Preview label (still applied by BenchLM as of 2026-10-16) means neither price nor endpoint is contractual. Kept at 58 rather than lower because the vendor's measured A/B (71.3% reasoning-token reduction at flat quality) and the narrow independent replication are real evidence that the effect exists *on the workloads Fireworks selected*.
- **Overall Score: 80/100.** *(was 84.)* Half-up mean of the five quality dims (78 + 74 + 95 + 68 + 84) / 5 = 79.8 → **80**. **Best fit, revised:** a reasoning-economics experiment worth running if your bottleneck is specifically reasoning-token volume on long agentic coding loops **and you can tolerate a serving layer that dropped 8 of 23 calls and took 97s on average**. Beyond that the recommendation has flipped since the prior pass: **on the current evidence, Gemini 3.7 Flash at low effort, Claude Haiku 5.5 at low effort, or plain Kimi K3 at $1/$9 are all better buys on AI BENCHY's own numbers — better on score and one to two orders of magnitude better on cost.** This is no longer a capability upgrade (at or slightly below its base on SWE-bench Verified and SWE-Interact), no longer a reasoning-research model (no knowledge or reasoning anchor benchmark has ever been run on it), and no longer clearly a cost upgrade once measured outside Fireworks' chosen benchmarks. **The Research Preview question has resolved favourably — the model survived its window at an unchanged price — but the serving-reliability finding is new, material, and was not visible 15 days ago.**

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-17
- Method: **second pass**, public internet research. Four searches plus two direct retrievals. **New sources this pass:**
  - **[AI BENCHY `fireworks/ember-1::max`](https://aibenchy.com/model/fireworks-ember-1-max)** — the load-bearing addition and the first broad independent run: **6.7, #209, reliability 8.3, consistency 7.8, 11/23 tests correct, 59.4% attempt pass rate, 6 flaky tests, 97.34s average / 587.08s maximum / 2,238.73s total response time, $3.264 total cost**, the full 11-category breakdown (Agentic 10.0 #1 in category, General Intelligence 10.0, Anti-AI Tricks 8.7, Puzzle Solving 7.7, Combined 6.5, Data parsing 6.4, Instructions following 6.2, Coding 5.2 at 1-of-3 with 2 API errors, Domain specific 3.6, Tool Calling 3.0 at #17, Trivia 3.0), the per-effort ranks (low #184, high #191, max #209, none #320), the estimated model-facts block (**~2.8T total / ~104B active MoE, Closed**), and the **recommended-alternatives panel** showing Gemini 3.7 Flash low, Claude Haiku 5.5 low and GPT-6.1 Sol low all beating Ember-1 on both score and cost. The eight-API-error contamination is stated explicitly wherever its numbers are used.
  - **[llm-stats.com/models/ember-1](https://llm-stats.com/models/ember-1)** and its comparison pages — the first independent composite: **LLM Stats Score 42.8 (#55, 4 evals)**, Reasoning 38.6 (#72), Coding 36.4 (#24), Agents 29.1 (#48); context 1,040,000; $3.00/$15.00.
  - **[artificialwatch.com/model/ember-1](https://artificialwatch.com/model/ember-1)** — resolves the Research Preview question: **live since 2026-09-24**, price still **$3/$15** on a 2026-10-15 sweep, and **four providers** carrying it in models.dev as of 2026-10-15 (OpenRouter, Vercel AI Gateway, Fireworks AI, Kilo Gateway).
  - **[Fireworks model page](https://fireworks.ai/models/fireworks/ember-1)** — **Parameters 2.78T**, Mixture-of-Experts: Yes, Function Calling: Supported, Support image input: Supported, state Ready, created 2026-09-22, $3.00/$0.30/$15.00, 1040k context.
  - **[aimlapi.com/models/fireworks-ember-1](https://aimlapi.com/models/fireworks-ember-1)** — fills the max-output gap (**943,718 tokens**) and supplies the gateway-markup price (**$4.1262 / $0.41262 / $20.631**), plus a 100% 7-day uptime reading on that gateway as of 2026-10-12.
  - **[benchlm.ai/models/ember-1](https://benchlm.ai/models/ember-1)** — confirms the absence has not changed: still **unranked**, **5 of 639** benchmarks, variant still labelled **(Research Preview)**, context 1.04M.
  - **[oflight.co.jp](https://www.oflight.co.jp/en/columns/fireworks-ember-1-kimi-k3-fewer-tokens-2026)** (2026-09-28) — corroborating Japanese analysis; confirms the Hacker News front-page moment (462 points, 2026-09-28), the "no independent third-party verification" caveat, and the production A/B numbers.
  - Retained from the prior pass: Fireworks' launch post and five-row evaluation table, the Specialized Intelligence Index Pareto claim, the 2-customer production A/B, Jessica Wachtel's independent 15-run replication, and the explicit rejections of ModelsAtlas's metadata "signals" and LLM Reference's absent peer mappings.
  - Conflicts recorded and resolved in favour of measurement: AI BENCHY's low category scores (accepted as contaminated and used only for the serving-reliability finding); LLM Stats' 42.8 composite (accepted as a second independent read below the vendor); AI BENCHY's alternatives panel (accepted, and it is what drove the cost-efficiency drop); gateway markup (recorded separately from the Fireworks rate card). Scores are normalized 1–100 interpretations per `../../model-comparison.md`, not official vendor scores. Vendor-reported figures remain labelled as such throughout, and no vendor number was upgraded to "independently confirmed" — none has been.
- Future sources: add a new file next to this one using the same headings. **Re-score when:** (1) any third party reproduces Fireworks' harness rows; (2) an Artificial Analysis or BenchLM overall score appears (BenchLM is still at 5 of 639); (3) Fireworks issues a non-preview rate card or drops the research-preview label; (4) AI BENCHY reruns the model without API errors — that single rerun is the cleanest available test of whether the 6.7 is a model verdict or a serving verdict. **Note for any re-check:** ModelsAtlas publishes GPQA/HumanEval/MMLU "signals" for this model that are explicitly metadata estimates rather than benchmark runs, and AI BENCHY's parameter block is labelled *Estimated* — do not adopt either as measurements.