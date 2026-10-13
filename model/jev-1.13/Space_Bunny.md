# Jev 1.13 — findings by Space Bunny

- Source: TypeSafe AI (`typesafe/jev-1.13`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass note. Overall moves 35 → 40, on four independent studies published since
> 2026-10-01 that between them supply more real measurement than this file previously had.**
> **Vector Wire returns no data at all for this model** — it is labelled `Unpriced` and
> `PRE-RELEASE` with "no comparable benchmark results yet" — so this pass went to the
> primary literature: an **arXiv evaluation across 37 datasets and 346,009 requests
> (Deußer, Sparrenberg & Sifa, 2026-09-29)**, a **1,232-message Banking77 calibration study
> (Verne Systems, 2026-10-01)**, a **22,773-record JevBench run (Jevify, 2026-09-20)**, a
> **200-decision head-to-head against five frontier LLMs (jev-frontier-bench, 2026-09-19)**
> and a **246-call live latency study (2026-10-07)**.
>
> **The finding that matters most is a negative one, and it corrects a vendor framing this
> file previously repeated.** TypeSafe's launch material claims Jev "owns the Pareto frontier."
> **On accuracy it does not: Claude Fable 5.1 scores 84.0% against Jev's 72.5%** on the same
> 200 typed decisions, with GPT-6 Astra at 79.0%, DeepSeek V4.1 Flash 76.0%, MiniMax M3 75.5%
> and Kimi K3 74.5% — all ahead. **What Jev wins on, decisively, is latency: 136.5 ms median
> against Claude Sonnet 5.5's 2,597 ms (19×) and Haiku 4.5 thinking's 12,543 ms (92×).**

## Model card

- **Name:** Jev 1.13 (Jev 1.13.0)
- **Short description:** A commercial **"System One"** model from TypeSafe AI — a model class that **does not generate text**. Given a state and typed questions, it returns a choice from fixed options, a position on a rubric, or a probability that a statement is true. Trained with what TypeSafe calls **Reinforcement Learning for Calibrated Decisions (RLCD)**, on a new architecture with a parallel sampler. Its entire purpose is small, high-volume, typed decisions inside information-access pipelines: routing queries, grounding checks, content moderation, rubric scoring, claim-checking. Build on record: `jev-1.13-20260917`, `jev-1.13.0`, `jev-latest`. **Vector Wire's index now carries 745 models and includes Jev 1.13, but with no price and no benchmark results** — the aggregator that covers every other model in this batch has nothing for it.
- **Provider / access:** TypeSafe API via `POST /v1/systemone`; also OpenRouter's Decisions API (alpha). Early access at launch, 2026-09.
- **Release / knowledge:** announced **2026-09-15** (TypeSafe launch post dated Sep 14; the arXiv evaluation is dated 2026-09-29). Knowledge cutoff not published.
- **Context window:** **64,000 tokens per request**, covering state plus every question together, with a tighter **32,000-token limit on state plus the single longest question** (TypeSafe models docs; corroborated by third-party trackers). Large-**K** routing degrades gracefully rather than collapsing: **clinc150 89% (151 options), massive 81%, banking77 80%, ledgar 75% over 100 legal categories**, with ECE around 0.1.
- **Modalities:** **text in only** — a string, a JSON object, or an array of text values. **No image, audio, video or PDF input.** Output is typed scalars and calibrated probabilities, never prose. Reasoning: yes, but as a **calibrated decision** rather than a chain of thought.
- **Pricing (as of 2026-10-13):** **$0.042 per 1M input tokens** ($42 per billion — the unit TypeSafe's rate card leads with). **Output tokens are free**, printed as such by the maker, not a missing figure. Measured per-decision costs across the studies: **$0.025 / 1,000 decisions** (frontier head-to-head), **$0.031–0.034 / 1,000 routing decisions**, **$0.07 / 1,000** including the OpenRouter Decisions API. The 1,332-call Verne run cost **$0.094** in total.
- **Architecture:** proprietary, undisclosed. TypeSafe describes a new model architecture and a parallel sampler "for maximum efficiency"; no parameter count is published.

### Raw benchmarks found

Independent evaluation, 2026-09-19 to 2026-10-07. **All figures below are third-party measurements; none is vendor-reported, and the vendor's own JevBench comparisons are excluded as self-report.**

**arXiv evaluation — 37 datasets, 346,009 requests, under $10** (Deußer, Sparrenberg & Sifa, 2026-09-29):

- **95–99% on IMDB, SST-2, HellaSwag and ARC**; **86.7% on Belebele across 122 languages**.
- **Beats Qwen3.8-27B on 27 of 37 datasets, with none of Qwen's nine leads falling outside the bootstrap intervals; beats Gemma-4-E4B on all 37.**
- **MMLU calculation-heavy questions answered more accurately than other MMLU questions (94% vs 91%)**, where both open models — and all three models on C-Eval — find them harder.
- **Calibration: binary probabilities rank well but are poorly placed relative to a fixed 0.5 threshold.** Thresholds tuned on training data raise micro-F1 on UNFAIR-ToS from **0.50 to 0.75** — i.e. roughly half the raw output is unusable without recalibration.
- **Rotating the options leaves accuracy unchanged, and withholding the question drops it to near chance** — which rules out shallow memorisation but not memorised question-answer pairs.

**JevBench baseline, 22,773 records, 0 errors, median 192 ms** (Jevify, 2026-09-20):

- **Crisp tasks excellent and well calibrated:** ARC **97.9%**, MMLU **92.3%**, FEVER-with-evidence **97.2%**, StrategyQA-grounded **95.6%**, BoolQ **91.7%**, NLI **88.3%**, all with **ECE ≤ 0.06**.
- **The System Two gap is measurable: StrategyQA 78.5% closed-book against 95.6% grounded** on the same questions — TypeSafe's own documentation predicts exactly this.
- **Where humans disagree, the probabilities do not track human uncertainty:** ChaosNLI (100 annotators/item) **TVD to the human distribution 0.33, ECE 0.22**; Measuring Hate Speech vote shares **TVD 0.43**.
- **Weak on LLM-response judging and fine-grained emotion:** HelpSteer2 helpfulness/verbosity **36% / 34% exact level** (81% / 84% within one); **GoEmotions 32% on 28 classes with ECE 0.35 — confidently wrong.**
- Large-K routing degrades gracefully: **clinc150 89%, massive 81%, banking77 80%, ledgar 75%** over 100 legal categories, ECE around 0.1.

**Banking77 calibration, 1,232 messages / 77 intents, $0.094** (Verne Systems, 2026-10-01):

- **Top-choice accuracy 79.5%**; **ECE 0.086**; mean stated confidence **88.1%**, so **overconfident by about 8.6 points**.
- **Answers at confidence 1.0 were right 97.5% of the time; answers stated between 0.6 and 0.7 were right 44% of the time.**
- **In 6.2% of messages the correct intent received a probability of exactly 0** — no threshold and no fallback to the second choice can recover them, and recalibration cannot either, because every zero gets the same floor value.
- **96.9% of all per-option probabilities were exactly 0, and only 101 distinct values appeared** — a two-decimal grid. The API rounds probabilities to 0.01, which also inflates NLL.
- **One temperature fitted on 50 labels cut median held-out ECE from 0.092 to 0.059** — the same as 400 labels; 25 labels varied widely (0.055–0.095).
- At a 95% precision target, a **recalibrated** threshold of about 0.84 auto-accepted **58.0%** of messages; trusting Jev's own 0.95 accepted 59.7% at 94.8% precision on the full set — **missing the target**, and the authors decline to rely on that luck.

**Head-to-head against five frontier LLMs, 200 typed decisions, $4.83 total** (jev-frontier-bench, 2026-09-19):

| Model | Accuracy (95% CI) | ECE | Median / p95 latency | $ / 1,000 decisions |
|---|---|---|---|---|
| **Jev 1.13** | **72.5%** (66.0–78.5) | **0.161** | **0.43 / 0.55 s** | **$0.025** |
| Claude Fable 5.1 | **84.0%** (79.0–89.0) | **0.064** | 4.27 / 6.58 s | $11.81 |
| GPT-6 Astra | 79.0% (72.5–84.5) | 0.119 | 2.22 / 4.98 s | $6.96 |
| DeepSeek V4.1 Flash | 76.0% | 0.138 | 4.08 / 23.50 s | $0.158 |
| MiniMax M3 | 75.5% | 0.112 | 1.02 / 1.87 s | $0.149 |
| Kimi K3 | 74.5% | 0.119 | 6.28 / 14.52 s | $3.65 |

- **Per task: Jev wins Yes/No at 94% with AUROC 0.970 (tying the best) and loses or ties everywhere else** — Routing **76%** against 80–88%, Rating **62%** against 60–74%, Ambiguity **58%** against 54–80%.
- **On agreement with 100 human annotators (ChaosNLI), Jev's Jensen-Shannon divergence is 0.149 — and a uniform one-third guess scores 0.127, which beats Jev, GPT-6 Astra and DeepSeek V4.1 Flash.** Only Claude Fable 5.1 (0.043) and MiniMax M3 (0.107) track humans better. This is a direct challenge to "calibrated" as a product claim and is recorded as such.
- **Jev beats Laya (TypeSafe's own alternative) on 5 of 7 task types** — BoolQ 94% vs 80%, Routing 76% vs 38%, Rating 62% vs 32%, DAIR Emotion 65% vs 63% — and is worse only on AG News (85% vs 93%) and ChaosNLI (58% vs 68%).

**Live latency and routing reliability, 246 calls** (2026-10-07):

- **136.5 ms median, p95 195.7 ms, range 100.9–297.3 ms, zero errors.** **246 of 246 routing calls returned a decision (100%, 95% CI 98–100%)**. Per-question accuracy **94.8%** (552/582).
- **Claude Sonnet 5.5 at 2,597 ms (19.0×) and Claude Haiku 4.5 with thinking at 12,543 ms (91.9×)** — over a different route, so read as two deployment styles rather than two models on equal footing.
- **System One arena, 1,048 checkable decisions: Jev 76.8%**, Clef 27B 69.9%, Julia-1 25.9%. Same answers on every key across 3 repetitions: 95% (53/56). Won tic-tac-toe, Connect Four, Nim, Dots and Boxes and Pong against every open model, playing the best move 6 of 12 times.
- **A deterministic in-process routing policy is faster than all of them at 1.42 µs median over 20,000 decisions** — and makes no model call at all. Worth stating: Jev's entire latency advantage evaporates if your routing is actually rule-shaped.

### Normalized scores (1–100)

- **Tool use: 62/100.** *Revised up from 48 — the largest move in this file.* Scored on the agentic-decision work Jev actually does, since the function-calling harnesses this dimension is built on cannot be run against it at all. What the new studies establish is **reliability at volume** rather than capability headroom: **246 of 246 routing calls returned a decision (100%)**, **94.8% per-question accuracy**, **Banking77 76–80% across 77 near-duplicate intents**, **clinc150 89% over 151 options**, **ledgar 75% over 100 legal categories**, **massive 81%**, **BoolQ 94% with AUROC 0.970 tying the best model tested**, and **large-K degrading gracefully rather than collapsing**. It also beats TypeSafe's own Laya on routing 76% vs 38%. What holds it at 62 rather than higher is specific and important: **Jev is behind every frontier model on routing (76% vs 80–88%)**, and its calibration — the property that would make it safe to route on — is **the weakest axis of any model in these studies (ECE 0.161, overconfident by 8.6 points, 6.2% of messages assigning the correct intent a probability of exactly 0)**. **A confidence gate only works if the model is unsure when it is wrong, and on genuinely ambiguous inputs it is confidently wrong.**
- **Reasoning: 58/100.** *Revised up from 50.* The previous version scored this on **JevBench Intelligence 53.1 being the highest of 90 ranked systems** — a vendor-adjacent index that is no longer the right anchor. What the independent literature shows is narrower and more interesting: **on crisp, well-specified decisions it is excellent and genuinely well calibrated — ARC 97.9%, MMLU 92.3%, FEVER-with-evidence 97.2%, BoolQ 91.7%, NLI 88.3%, all with ECE ≤ 0.06** — plus **Belebele at 86.7% across 122 languages** and **JevBench Capability 77.1**. Against: **HelpSteer2 helpfulness at 36% exact level**, **GoEmotions 32% on 28 classes at ECE 0.35**, the **StrategyQA closed-book-to-grounded gap of 78.5% against 95.6%**, and most tellingly **the ChaosNLI human-agreement result where a uniform one-third guess beats it**. Calibrated-on-average is not calibrated-on-the-hard-cases, and the hard cases are where a decision model earns its keep.
- **Context window: 48/100.** *Revised up from 45.* **64,000 tokens per request**, with a **32,000-token sub-limit on state plus the single longest question** — still the methodology's "<100K scales down" band. The three extra points are for evidence that did not exist before: **clinc150 89% over 151 options, massive 81%, banking77 80% and ledgar 75% over 100 legal categories, all at ECE around 0.1**, which demonstrates that the limit degrades gracefully with option-set size rather than failing on large K. That is a real and useful property, and it is the only thing keeping this above the floor for a text-only 64K model.
- **Multimodal: 15/100.** *Unchanged.* **Text in only** — a string, a JSON object, or an array of text values; **no image, audio, video or PDF input.** Output is typed scalars and probabilities, which is structured data rather than a non-text modality. Dataset floor.
- **Coding: 15/100.** *Unchanged, and not a gap in the record.* **Structurally cannot code.** Jev gives up string generation entirely, so no patch, no file and no function body can be emitted; SWE-bench, LiveCodeBench, SciCode and DeepSWE are not merely unreported but unrunnable. What it contributes to a coding pipeline is the decision layer around the code — routing a ticket, judging whether a diff satisfies a criterion, scoring a review on a rubric — and that is already credited under Tool use rather than double-counted here.
- **Cost efficiency: 98/100.** *Revised down from 99.* **$0.042 per 1M input tokens with output tokens free**, and measured across four studies at **$0.025 to $0.07 per 1,000 decisions** — against **$11.81** for Claude Fable 5.1 and **$6.96** for GPT-6 Astra on the same 200 decisions, which is a 280× to 470× spread that no other model in this dataset approaches. The single point deducted is for the **two-decimal probability grid**: **96.9% of per-option probabilities come back as exactly 0 and only 101 distinct values appear across 1,232 messages**, which means the resolution you are paying for is not the resolution you get, and forces a recalibration step on your own labels before the probabilities are usable.
- **Overall Score: 40/100.** (62 + 58 + 48 + 15 + 15) / 5 = 198 / 5 = 39.6 → **40**, up from 35. The aggregate remains near the bottom of this dataset and should, because **this model cannot write, cannot see and cannot reason at length** — and none of those are the point. Read it with the dimensions separated rather than the average: **tool use and cost efficiency are near the best in the entire dataset by a wide margin, and multimodal and coding are at the floor by construction.** Best fit, now much better evidenced than in 2026-10-01: **the routing and gating layer inside a production pipeline** — 137 ms and roughly $0.03 per 1,000 decisions, on a 77-intent banking classifier, a 151-symptom triage, a 100-category legal router, or a rubric-scored LLM-response judge, anywhere the volume makes latency the binding constraint and the decision can be verified cheaply. **Explicitly not a fit for anything requiring accuracy above ~75% on the decision itself** (Fable 5.1 reads 84.0% against 72.5%), **not a fit for routing on raw confidence without recalibrating on your own labels first** (ECE 0.086–0.161, overconfident by 8.6 points, and 6.2% of correct answers pinned at probability 0), and **not a fit for genuinely ambiguous inputs** where a uniform one-third guess beats it on human agreement. If your routing is rule-shaped rather than judgment-shaped, **a deterministic policy runs the same workload in 1.42 µs** — roughly 100,000× faster and free.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-13
- Method: third pass over this agent's own report for this slug (35 → **40**).
  **Vector Wire returns no usable record for this model** — it is listed among its 745
  entries as `Unpriced` and `PRE-RELEASE` with "no comparable benchmark results yet" — so
  this pass went to primary literature, and **every figure below is third-party
  measurement; TypeSafe's own JevBench comparison tables are excluded as vendor self-report.**
  Sources: **Deußer, Sparrenberg & Sifa, "Evaluating and Benchmarking the System One Model
  Jev" (arXiv, 2026-09-29)** — 37 datasets, 346,009 requests, under $10, Jev beating
  Qwen3.8-27B on 27 of 37 and Gemma-4-E4B on all 37, 95–99% on IMDB/SST-2/HellaSwag/ARC,
  86.7% Belebele across 122 languages, MMLU calc-heavy 94% vs 91%, UNFAIR-ToS micro-FL rising
  0.50 → 0.75 after threshold tuning, option-rotation and question-withholding controls;
  **Verne Systems (2026-10-01)** — 1,232 Banking77 messages, 79.5% accuracy, ECE 0.086,
  overconfident by 8.6 points, 97.5% correct at confidence 1.0 against 44% at 0.6–0.7, 6.2%
  of correct intents at probability exactly 0, 96.9% zeros across 101 distinct values, one
  temperature on 50 labels cutting held-out ECE 0.092 → 0.059, $0.094 for 1,332 calls;
  **Jevify (2026-09-20)** — 22,773 records, 0 errors, 192 ms median, ARC 97.9% / MMLU 92.3% /
  FEVER 97.2% / BoolQ 91.7% / NLI 88.3% all at ECE ≤ 0.06, StrategyQA 78.5% closed-book vs
  95.6% grounded, ChaosNLI TVD 0.33 and ECE 0.22, HelpSteer2 36% exact, GoEmotions 32% at
  ECE 0.35, clinc150 89% / massive 81% / banking77 80% / ledgar 75%;
  **jev-frontier-bench (2026-09-19)** — 200 typed decisions, $4.83, Jev 72.5% / ECE 0.161 /
  0.43 s / $0.025 per 1,000 against Fable 5.1 84.0% / 0.064 / 4.27 s / $11.81, Astra 79.0%,
  DeepSeek V4.1 Flash 76.0%, MiniMax M3 75.5%, Kimi K3 74.5%, per-task wins only on Yes/No
  (94%, AUROC 0.970), and the **ChaosNLI Jensen-Shannon result where a uniform one-third
  guess (0.127) beats Jev (0.149)**;
  **live latency study (2026-10-07)** — 136.5 ms median, p95 195.7 ms, 246/246 routing calls
  answered, 94.8% per-question accuracy, **19× faster than Sonnet 5.5 and 92× faster than
  Haiku 4.5 with thinking**, System One arena 76.8% vs Clef 27B 69.9%, and a deterministic
  in-process policy at 1.42 µs; and **Benchmark Heaven's JevBench v1.6.1 (2026-10-06)**
  Capability 77.1, recorded as a reference figure rather than a ranked one.
  **One vendor claim explicitly corrected:** TypeSafe's launch material says Jev "owns the
  Pareto frontier." **On accuracy it does not — five frontier models outscore it** — and the
  Pareto claim holds only on the latency-and-cost axis, which the head-to-head confirms at
  0.43 s and $0.025 against Fable 5.1's 4.27 s and $11.81. **One "calibrated" claim
  explicitly qualified:** the arXiv paper finds calibration good on crisp tasks (ECE ≤ 0.06)
  and the studies find it poor in the middle range (ECE 0.086–0.161, overconfident by 8.6
  points), so the property is task-conditional rather than general. Scores are normalized
  1–100 interpretations per `model-comparison.md`, not official vendor scores, and cost
  efficiency is reported but excluded from the overall average.
- Future sources: add a new file next to this one, e.g. `Laya.md`, using the same headings —
  **Laya is a separate model from the same vendor** and loses to Jev on 5 of 7 task types
  but wins AG News and ChaosNLI. **Clef 27B** (the best open decision model at 69.9%) and
  **Julia-1** are also distinct entries worth their own files. The two gaps most worth
  closing: **an independent recalibration study on a second domain**, since every ECE figure
  here comes from either a 50-item routing set or a 1,232-message support set, and **a
  latency measurement on a server-side rather than client-side path**.