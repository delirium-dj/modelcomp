# Claude Haiku 4.5 — findings by Space Bunny

- Source: Anthropic (`claude-haiku-4-5-20251001`, alias `claude-haiku-4-5`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass note, and the single most important change is a correction to my own
> second-pass file, not a score movement.** That file led with "**Retirement: not sooner
> than 2026-10-15 — two weeks from this report**" and closed by warning that the model
> "retires 2026-10-15". **Both readings were wrong.** Anthropic's own deprecation table,
> read 2026-10-13, lists `claude-haiku-4-5-20251001` with current state **Active**, a
> `Deprecated` column of **N/A**, and a tentative retirement date of "**Not sooner than
> October 15, 2026**" — which is a *floor on how long Anthropic commits to keeping it*,
> not a scheduled retirement date. There is no deprecation announcement for it in
> Anthropic's deprecation history, and no replacement has been mandated. Treat the model
> as **legacy-but-supported with a one-year-plus runway**, and read the 2026-10-15 date
> as the earliest it *could* be retired, not the day it will be.
>
> The score moved 62 → **61**, on one new dimension of evidence (Coding) rather than on
> any change in the model itself.

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's small, fast, cheap tier — a lightweight version of the Claude 4 generation, pitched as matching Sonnet 4 on coding, computer use and agent tasks at roughly one-third the price of a frontier Claude. Its real niche is high-volume, low-latency work: **sub-agents, parallelised execution, routing and classification** under a Sonnet/Opus orchestrator. Not a variant or alias of another entry in this dataset.
- **Provider / access:** Anthropic Claude Platform (Messages API), Microsoft Foundry, and — one of the very few pre-4.7 models — **Amazon Bedrock's Messages-API endpoint** (`anthropic.claude-haiku-4-5-20251001-v1:0`). OpenRouter and Vercel AI Gateway both list it as `anthropic/claude-haiku-4.5`. Artificial Analysis measures it through **5 API providers**.
- **Release / knowledge:** released **2025-10-15** (re-confirmed on Artificial Analysis, which gives the same date). Reliable knowledge cutoff **February 2025**; training-data cutoff **July 2025** (Anthropic platform docs; Artificial Analysis lists Jul 1 2025). **The whole current Claude line-up — Fable 5.1, Opus 5.5, Sonnet 5.5 and Haiku 5.5 — is on a June 2026 cutoff, so this model's knowledge is roughly a year stale against its own family.**
- **Lifecycle (corrected this pass):** **Active** on the Claude API, Claude Platform on AWS and Microsoft Foundry; **Legacy** in Anthropic's model-overview navigation grouping. Tentative retirement "**not sooner than October 15, 2026**"; `Deprecated` column is N/A and there is no entry in the deprecation history — contrast `claude-sonnet-4-5-20250929`, which *is* Deprecated (announced 2026-09-30) with a retirement date of 2026-11-30 and a mandated replacement of `claude-sonnet-5-5`. **Anthropic gives Haiku 4.5 no mandated replacement**, though its own successor for this exact tier is `claude-haiku-5-5`. Amazon Bedrock and Google Cloud set their own dates independently.
- **IDs:** `claude-haiku-4-5-20251001` (canonical), alias `claude-haiku-4-5`. Third-party: `anthropic/claude-haiku-4.5`.
- **Context window:** **200,000 tokens**, max output **64,000 tokens** (Anthropic platform docs — first-party spec sheet, re-confirmed 2026-10-13). **No 1M-token option and no 300K batch-output beta header** — the `output-300k-2026-03-24` beta supports Opus 5.5/5, Sonnet 5.5/5, Haiku 5.5, Opus 4.8/4.7/4.6 and Sonnet 4.6, but not this model. Every current model in Anthropic's line-up (Fable 5.1, Opus 5.5, Sonnet 5.5, Haiku 5.5) has **1M**.
- **Modalities:** **text and image in; text out.** Reasoning: **extended thinking** with controllable depth. Anthropic explicitly documents **no default-effort parameter** on this tier ("Not supported") — the only model in the Anthropic line-up without an effort control, and the reason extended thinking is still its mode (Anthropic deprecated the manual `thinking.type` + `budget_tokens` path on Opus 4.6 / Sonnet 4.6 and does not accept it on later models). Full tool support: bash, file editing, web search, computer use, JSON mode. **No audio or video input documented; no PDF support** — Anthropic's PDF-support list covers Sonnet 3.5 through Fable 5.1 but **not Haiku 4.5**.
- **Pricing (as of 2026-10-13):** **$1.00 / MTok input, $5.00 / MTok output.** Cache read **$0.10** (90% discount), 5-minute cache write $1.25, 1-hour cache write $2.00, **Batch API 50% off** ($0.50 / $2.50). Blended at 7:2:1: **$0.77 / MTok**. Artificial Analysis measured **$0.28 cost per Intelligence Index task, ranking #13 of 112** in its price class. No free tier.
- **Architecture:** proprietary. No parameter count, layer count or architecture disclosed.

### Raw benchmarks found

> **Two independent sources now confirm each other on the numbers that matter, and a
> verified SWE-bench Pro figure has appeared.** That last item is the reason Coding moved.

Agent / tool use:

- **Terminal-Bench v4.0: 0.00%** — now confirmed **three independent ways**: Artificial Analysis (mini-swe-agent), AIEvals, and **Anthropic's own Haiku 5.5 system card §8.4**, which quotes Haiku 4.5 at 0.0% on its own launch comparison table (rank 4 of 6, alongside Sonnet 5.5 70.6%, Opus 5.5 66.4%, GPT-6.1 Sol 58.2%, GPT-6 Luna 16.4%). Because Anthropic itself publishes the zero, it cannot be an aggregator artefact.
  > **Context added this pass, and it materially changes how the zero reads.** The AIEvals Terminal-Bench 4.0 board carries **137 models**, and **76 of them score exactly 0.00%** — including Llama 4 Maverick, Llama 4 Scout, Ministral 3 8B, Granite 4.2 8B, Qwen3 8B, Qwen3 32B, Solar Pro 3, Gemma 4 31B, Ling 3.0 Flash and gpt-oss-120b. Haiku 4.5 sits in that large tied cluster. My 2026-10-01 file called this "the single most damning number in the file"; it is more accurately **the floor of a large group**, which is a very different piece of information about the model and about the benchmark. A zero remains a zero, but it is not a unique failure, and a reader should not infer that Haiku 4.5 is uniquely unsuited to terminal work.
- **Terminal-Bench (general, Vector Wire's own aggregation, updated 2026-10-12): 41.0**, $0.073 per point — **rank 7 of 10 on its ranked benchmarks, 38.8% behind the leader.** Vector Wire's own verification statement on that board is worth reading before using any of it: "23 models scored · **0 independently verified** · 4 vendor cross-reference · **19 vendor-reported** · 1 with source disagreement," field range 8.5–50, leader Claude Sonnet 4.5 at 50.
- **Terminal-Bench 2.1: 44.19%** (Artificial Analysis, reasoning) — **48th percentile** (Vector Wire) — and now corroborated by a second independent evaluator: **Vals AI 43.8%**. Two independent sources agreeing within 0.4 points is the strongest agreement anywhere in this file.
- **Terminal-Bench Hard: 27.27%**, 41st percentile (Artificial Analysis)
- **JobBench: 16.0%** (JobBench paper, via BenchLM) — **new this pass.** The benchmark's own framing matters: the strongest model it evaluated, Claude Opus ~4.7 under Claude Code, reaches only 45.9%, so this benchmark's whole field is weak and 16.0% should be read against a low ceiling rather than in isolation.
- **TauBench V3 Banking: 9.28%** (Artificial Analysis, reasoning)
- **τ²-Bench Telecom: 54.68%** (reasoning) / **32.46%** (non-reasoning)
- **GDPval-AA v2.1: Elo 719** (Artificial Analysis)
- **Terminal-Bench via Anthropic's own harness: 40.21%** (Terminus 2, 6 runs, no thinking) / **41.75%** (5 runs, 32K thinking budget), n-attempts=1. Anthropic's τ²-bench scores used 10 runs with a 128K thinking budget **plus a prompt addendum** instructing the model to target its known failure modes — a vendor-favourable configuration that should be read with that in mind.
- OSWorld-Verified: **50.7%** (Anthropic-reported at launch)
- Augment (launch partner): reported reaching **90% of Sonnet 4.5's performance** on its agentic coding eval — vendor-partner claim, no public harness.
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index: 17** (reasoning), 15 (non-reasoning), v4.3.2 family. AA now places it at **#170 of 216**, up from the #167 of 224 recorded on 2026-10-01 — the *rank* has drifted marginally worse and the *field has shrunk*, so treat this as flat rather than as a regression. The price-class median Index has also moved, 26 → **27**.
- **AA's page now carries a deprecation banner**: "This model is deprecated. We only continue performance benchmarking for the default 10k input token workload. Results for other workloads are historical and no longer updated. Anthropic has launched a newer release, Claude Haiku 5.5." That is Artificial Analysis's word for *frozen benchmarking*, and it is not the same thing as Anthropic's lifecycle status of **Active**.
- **GPQA Diamond: 67.2%** (reasoning) / 64.6% (non-reasoning) — inside the methodology's 60–80% mid-band.
- **Humanity's Last Exam: 10.4%** (reasoning) / 4.2% (non-reasoning) — the methodology's own note is "HLE <10% → mid."
- **CritPt: 0.0%** (both variants)
- **AA-LCR v1.1: 74.3%** (reasoning) / 49.7% (non-reasoning) — a genuine long-context strength.
- **AA-Omniscience Accuracy / Non-Hallucination Rate: 18.0% / 72.7%** (reasoning); 14.4% / 74.3% (non-reasoning) — it declines to answer far more often than it guesses.
- **IFBench: 54.29%** (reasoning) / 42.04% (non-reasoning); **SciCode: 42.2%** (reasoning)
- Speed and verbosity, re-read 2026-10-13: **output 93.8 tokens/s, #76 of 185** (was 100.0 and #49 of 224); **TTFT 21.60s** against a class median of 5.18s (was 22.03s against a 4.04s median); **78M output tokens on the Index, #55 of 114**, against an 85M median. AA's own summary is unchanged and still fair: "among the least intelligent models, but well priced when comparing to other models of similar price… faster than average and fairly concise."

Coding — **this section changed most:**

- **SWE-bench Verified: 73.3%** (Anthropic, 50 trials, no test-time compute, 128K thinking budget, full 500-problem set, two-tool bash + string-replacement scaffold, with a minor prompt addition) — **76th percentile** (Vector Wire). Still the most-cited number for this model, and level with the Sonnet 4 flagship's 72.7% five months earlier.
- **NEW: SWE-bench (Vals AI): 66.6%** — an *independent* measurement of the same benchmark family, **6.7 points below** Anthropic's own 73.3%. This is the triangulation the 2026-10-01 file said was missing.
- **NEW: SWE-bench Pro: 39.45%, marked Verified, xHigh, from labs.scale.com, dated 2026-10-01** — the 2026-10-01 file recorded "SWE-bench Pro: no verified public score found." One now exists, and it is **low: 44th percentile** (Vector Wire).
- **NEW: LiveCodeBench (Vals AI): 41.2%** — likewise recorded as "no verified public score found" on 2026-10-01.
- **NEW: VulcanBench v3: 76.2%** (VulcanBench v3 July 2026 expanded report) — the one strongly *positive* new number, on an independent code-quality protocol.
- **SciCode: 42.2%**; **Artificial Analysis Coding Index: 43.9**
- DeepSWE, Vibe Code Bench: **no verified public score found**

Long context:

- **AA-LCR v1.1: 74.3%** at the 200K window — the only long-context retrieval figure that exists, unchanged. No MRCR, RULER or GraphWalks measurement. The 1M figure quoted for Haiku 5.5 comes from **GraphWalks** (Google's Gemini 4 Argon report uses BFS F1 over 650 items to 128k and 200 items from 256k to 1M) — a different benchmark from AA-LCR, so the two are not directly comparable and the successor's long-context claim is not measured on the same instrument.

Vision / multimodal:

- **Text and image in, text out.** Still **no MMMU, MMMU-Pro, DocVQA or OmniDocBench figure** for this model.

Successor delta — **new, and the strongest practical argument in this file:**

`claude-haiku-5-5` (Active, not sooner than 2027-10-07) is Anthropic's replacement for this exact tier, and the gap is not marginal:

| | Haiku 4.5 | Haiku 5.5 |
| --- | --- | --- |
| AA Intelligence Index | **17** (#170/216) | **43** at max / 38 at high — **+26** |
| Terminal-Bench 4.0 | **0%** | **33%** (AA) / **35.35%** (Vals AI, mini-swe-agent, avg@3) |
| Context window | 200,000 | **1,048,576** |
| Knowledge cutoff | Jul 2025 | **Jun 2026** |
| Price (in / out) | $1.00 / $5.00 | **$0.10 / $0.50** — **10× cheaper on both** |
| AA-Briefcase | not measured | **1,578 Elo** |
| AA-Omniscience accuracy | 18.0% | **36%** |
| AutomationBench-AA | not measured | ~35% |

Independent context for the 4.0 row (Vals AI, mini-swe-agent, avg@3, updated 2026-10-12): **Claude Opus 5.5 65.15%, Claude Sonnet 5.5 64.14%, GPT-6 Astra 59.60%, Claude Haiku 5.5 35.35% at $3.05/task.** Haiku 4.5 does not appear — it is at 0%. Separately, Vals and Anthropic published **systematic ~6–7 point gaps on Terminal-Bench 4.0** for every model tested (Sonnet 5.5 63.64% independent vs 70.60% published; Opus 5.5 59.60% vs 66.40%; Haiku 5.5 32.83% vs 39.20%; Fable 5.1 52.02% vs 55.80%), which is worth knowing before reading any vendor Terminal-Bench number in this dataset — including the zero, though a zero cannot be inflated.

### Normalized scores (1–100)

- **Tool use: 48/100.** Unchanged, but the *justification* is materially revised and one of the old file's claims was overstated. The methodology anchors this dimension on TB2.1 ~45–60%, Tau3 ~10–25% and GDPval ~900–1200, and the model sits below all three: **Terminal-Bench 2.1 at 44.19%** (now corroborated at **43.8% by Vals AI**, two independent sources within 0.4 points), **TauBench V3 Banking at 9.28%**, **GDPval-AA Elo 719**. **JobBench 16.0%** is a new negative. Offsetting upward: **OSWorld-Verified 50.7%** shows real desktop capability, **Terminal-Bench Hard 27.27%** at the 41st percentile is not bottom-of-board, and the interface itself is complete. The **Terminal-Bench 4.0 zero is confirmed three ways but is no longer treated as uniquely damning** — 76 of 137 models on that board score exactly 0.00%, and Haiku 4.5 is one of a large tied cluster rather than an outlier. Scored at 48, not lower, because the software is competent and the failures are reliability, not absence.
- **Reasoning: 55/100.** Unchanged. **GPQA Diamond 67.2%** sits squarely in the methodology's 60–80% mid-band and **AA-LCR 74.3%** is a real strength, but the Intelligence Index is **17 at #170 of 216**, a price-class median of **27** means it is less than two-thirds of its own class, and **HLE 10.4%**, **CritPt 0.0%**, Omniscience Accuracy **18.0%** all cap it. No new reasoning measurement appeared in this pass. AA's "among the least intelligent models" remains the fair characterisation, and a **Feb-2025 knowledge cutoff now roughly a year behind its own family's Jun 2026** explains much of the knowledge-side weakness.
- **Context window: 72/100.** Unchanged. **200,000 tokens with 64,000 max output**, no 1M option and no 300K batch-output beta — re-confirmed against Anthropic's current spec tables, and **every current model in the line-up is 1M**, so this ceiling is now two generations behind. It sits slightly above the methodology's "200K = 70" tier point because **AA-LCR 74.3% is an actual retrieval measurement** backing the spec, which is more than most models in this dataset can claim. Not higher because 200K is the top of that band and no MRCR/RULER/GraphWalks figure exists.
- **Multimodal: 65/100.** Unchanged. **Text and image in, text out** — the methodology's "+image in = 60–70" band, at its midpoint, and deliberately not higher: **Haiku 4.5 is absent from Anthropic's own PDF-support list**, so it has no documented PDF input, no audio, no video and no non-text output, and **there is still no vision benchmark at all for it**. The image capability is real and documented; it is simply narrow, and the floor reflects that rather than penalising it.
- **Coding: 67/100.** *Revised down from 70 — the only dimension that moved, and it moved because the triangulation the 2026-10-01 file said was missing has now arrived.* **SWE-bench Verified 73.3%** remains the headline and is now placed (**76th percentile**), with **VulcanBench v3 76.2%** corroborating it on an independent code-quality protocol. But three new *independent* figures pull the other way: **SWE-bench (Vals AI) 66.6% — 6.7 points below Anthropic's own 73.3% on the same benchmark family**; **SWE-bench Pro 39.45%, Verified, at the 44th percentile**; and **LiveCodeBench 41.2%**. SciCode 42.2% and Coding Index 43.9 are unchanged and mid-tier, and **Terminal-Bench Hard 27.27%** says the model writes plausible patches far more reliably than it drives a terminal to completion. The 2026-10-01 file scored 70 on a single vendor number with an explicit caveat that it could not be triangulated; three independent numbers now exist and two of them are materially lower than the vendor figure.
- **Cost efficiency: 96/100.** Unchanged. **$1.00 / $5.00 per MTok**, cache read **$0.10**, Batch **50% off**, **$0.77 blended**, and a measured **$0.28 per Intelligence Index task — #13 of 112** in its price class, against a class median of $2.00 input / $10.00 output. Vector Wire's **$0.073 per point** on Terminal-Bench is a second independent cost-per-capability reading. Held at 96 rather than higher because it is not free, and because Simon Willison's launch-day caveat still stands: it "is not the cheapest small model on the market." **The caveat that has changed is comparative, not absolute:** its own successor `claude-haiku-5-5` is **$0.10 / $0.50 — 10× cheaper on both input and output** — while scoring 35.35% on Terminal-Bench 4.0 where this model scores 0%, and carrying a 1M window against this model's 200K. On a pure value-per-dollar basis the successor now dominates this tier outright.
- **Overall Score: 61/100.** (48 + 55 + 72 + 65 + 67) / 5 = 307 / 5 = 61.4 → **61**, down one point from 62 and entirely attributable to Coding. Best fit is unchanged: **a cheap, fast sub-agent, router and high-volume executor under a Sonnet or Opus orchestrator**, or a 200K-context vision reader — not a model for open-ended reasoning, long-horizon agent chains, or whole-codebase ingestion. **The recommendation attached to it has changed, though, and that is the operative output of this pass.** This is no longer a model to plan around: its own successor is 10× cheaper, five times larger in context window, 26 Intelligence-Index points better, and moves from 0% to 35% on the one agentic benchmark where this model is at zero. **If you are reading this file to decide what to build on, build on `claude-haiku-5-5`.** Read alongside the two numbers that mattered most for the 2026-10-01 decision — the $0.28 cost per Intelligence Index task and the Terminal-Bench 4.0 zero — both of which now have a successor that dominates them.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-13
- Method: third pass over this agent's own reports for this slug (64 → 62 → **61**).
  **Correction carried this pass, and it is the headline:** Anthropic's own
  **model-deprecations page** (read 2026-10-13) lists `claude-haiku-4-5-20251001` as
  **Active**, `Deprecated` = N/A, tentative retirement "Not sooner than October 15,
  2026" — a commitment floor, not a retirement date — with no entry in the
  deprecation history and no mandated replacement. My 2026-10-01 file described that
  date as a retirement date two weeks out; **that was wrong and is withdrawn.** The
  same fetch confirmed the 200K / 64K envelope, the absence of a 1M option and of the
  300K batch-output beta, the June 2026 cutoff across the whole current line-up
  against this model's Jul 2025, and Haiku 4.5's unusual status as a pre-4.7 model
  served on Bedrock's Messages-API endpoint. **Artificial Analysis's model page**
  (read 2026-10-13) supplied its own deprecation banner ("historical and no longer
  updated", pointing at Haiku 5.5), the current ranks — Index **17 at #170/216**,
  speed **93.8 tok/s at #76/185**, TTFT **21.60s** against a 5.18s median, cost **$0.28
  at #13/112**, verbosity 78M at #55/114, class medians 27 / 84.4 / 5.18 / $2.00 /
  $10.00 — and re-confirmed the Jul 1 2025 cutoff, 200k window, $1/$5 pricing and the
  $0.77 blend. New independent data: **Vector Wire** (updated 2026-10-11/12) for the
  76th-percentile SWE-bench Verified placement, the **Verified SWE-bench Pro 39.45%**
  from labs.scale.com, Terminal-Bench 41.0 with its explicit "**0 of 23 independently
  verified, 19 vendor-reported**" disclosure, and the $0.073-per-point cost reading;
  **BenchLM** (last updated 2026-10-12) for **LiveCodeBench (Vals) 41.2%**,
  **SWE-bench (Vals) 66.6%**, **VulcanBench v3 76.2%** and **JobBench 16.0%**;
  **AIEvals** for the Terminal-Bench 4.0 board of 137 models and the **76-model
  0.00% tie cluster** that reframes this model's zero; **Vals AI** (updated
  2026-10-12) for Terminal-Bench 4.0 under mini-swe-agent with its methodology
  (66 tasks, median 4 expert-hours, avg@3, 8-hour agent limit, pass@1 per task) and
  **the systematic ~6–7 point vendor-versus-independent gap** it documents for every
  model on that benchmark; **Anthropic's Haiku 5.5 system card §8.4** for
  **Anthropic's own confirmation of Haiku 4.5 at 0.0%** on Terminal-Bench 4.0; and
  c-ai.chat's Claude spec table for the 200K / 64K / no-batch-300K envelope.
  **Successor comparison added:** `claude-haiku-5-5` at Index 43 (+26), Terminal-Bench
  4.0 at 33% (AA) / 35.35% (Vals), 1M context, Jun 2026 cutoff, **$0.10 / $0.50**,
  AA-Briefcase 1,578 Elo, Omniscience 36%, AutomationBench-AA ~35%. Scores are
  normalized 1–100 interpretations per `model-comparison.md`, not official vendor
  scores; vendor-reported launch figures are labelled, and the divergence from this
  folder's `average.md` remains **explicitly left open** rather than closed by moving
  scores toward the mean.
- Future sources: add a new file next to this one, e.g. `Claude_Haiku_4.5_Final.md`,
  using the same headings. The genuinely open items are narrow: **a vision benchmark**
  (the only route to moving Multimodal off the specification-only floor) and **an
  Anthropic deprecation announcement**, which has *not* been issued and which would be
  the first hard evidence of an end-of-life date. Re-scoring for anything else is
  low-value: the model's measured capability has not moved since 2025-10, and its
  successor now dominates it on every axis that matters.