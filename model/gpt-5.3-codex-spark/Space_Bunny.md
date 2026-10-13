# GPT-5.3-Codex-Spark — findings by Space Bunny

- Source: OpenAI (`gpt-5.3-codex-spark`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Third-pass note. Overall moves 51 → 48, and the reason is not a benchmark — it is
> that nothing has been benchmarked.** **Vector Wire returns no record for this model at
> all** (404, and absent from its index of 743), consistent with there being no public
> API. The 2026-10-01 file already recorded zero reasoning measurements, zero
> long-context measurements, zero vision benchmarks and no published price; **eight
> months later every one of those gaps is still a gap.** What the fresh pass did find is
> first-hand operational evidence, and it is negative: **Spark uses no tools by default**,
> **does not explore a codebase before emitting tokens**, and **does not verify its own
> output** — all reported by a practitioner who runs it daily. That last set of findings
> is what moves Tool use from 65 to 58.

> **Data-quality warning, carried forward and extended.** OpenAI's launch post for this
> model **published no absolute benchmark percentages** — it described SWE-Bench Pro and
> Terminal-Bench 2.0 performance qualitatively. The secondary record remains
> **materially contradictory**, and the fresh pass found **two further sources making the
> same class of error**. Terminal-Bench 2.0 is **58.4%** per the-decoder and Adam Holter
> and **77.3%** per SiliconANGLE and Digital Applied; SWE-Bench Pro is **~56%** per Turing
> College and Adam Holter and **72.8%** per Digital Applied. **New in this pass:** a
> 2026-04-30 review transposes the flagship's Terminal-Bench figure onto Spark
> ("Spark scores 77.3%, up from GPT-5.2 Codex's 64%"), repeats the ~72% Codex SWE-Bench
> Pro figure that contradicts OpenAI's authoritative **56.8%**, and lists the flagship's
> context window as **192k** against OpenAI's documented **400k** — three independent
> errors in one table. A 2026-05-11 practitioner guide carries the same ~72% Codex figure.
> **The reliability test from the previous pass still holds and is applied again: any
> source misstating GPT-5.3-Codex's authoritative 56.8% SWE-Bench Pro is excluded from
> absolute-number use.** Read the Coding and Tool use lines with the provenance attached.

## Model card

- **Name:** GPT-5.3-Codex-Spark
- **Short description:** A **smaller, speed-optimised version of GPT-5.3-Codex**, released 2026-02-12 as the **first model OpenAI has ever deployed on production silicon outside its Nvidia stack** — it runs on Cerebras' Wafer-Scale Engine 3 (WSE-3) wafer-scale accelerator. OpenAI's first release in a multi-billion-dollar Cerebras partnership announced in January 2026. It streams **more than 1,000 tokens per second** against the flagship's ~65–70 t/s, with time-to-first-token around **120 ms**, and is positioned as a *complement* to the full Codex rather than a replacement. **Distinct model, not a variant alias** of GPT-5.3-Codex.
- **Provider / access:** **Research preview, ChatGPT Pro subscribers only** — Codex **app, CLI and VS Code/IDE extension**. Because it runs on specialised low-latency hardware, usage is governed by a **separate rate limit that may adjust with demand** during the preview. API access exists **only for a small set of design partners**, and **OpenAI has published no per-token price**. Not on OpenRouter or any public gateway. **Two availability notes:** during OpenAI's June 2026 Codex deprecations — which retired GPT-5.2-Codex and the full GPT-5.3-Codex — **Codex-Spark was explicitly exempted and remained available**; and a 2026-10-07 report still describes it as a ChatGPT Pro research preview, so it appears to have survived as a preview. **Free Codex CLI access via OAuth or API does not include Spark**, confirmed as of May 2026.
- **Release / knowledge:** released **2026-02-12**. **Knowledge cutoff not published** for the Spark variant; the parent GPT-5.3-Codex's is 2025-08-31 and is not assumed here.
- **IDs:** `gpt-5.3-codex-spark`. **API access is not generally available** and the model is absent from the public aggregator indexes.
- **Context window:** **128,000 tokens**, corroborated independently by the-decoder, AI/TLDR, CodeConductor, Digital Applied and the 2026-05-11 practitioner guide. This is **one-third of the full GPT-5.3-Codex's 400K** (the same source correctly records 400K for the flagship, which is how it passes the reliability test even while misquoting a benchmark), a deliberate trade for latency.
- **Modalities:** **text only.** No image, audio or video input — an explicit launch-time limitation, independently reconfirmed in 2026, and the source of the dataset's multimodal floor score below. Output: text. Reasoning: yes, but shallower than the full Codex; OpenAI states plainly that **for heavy multi-step reasoning the larger Codex models still win on absolute quality**.
- **Pricing (as of 2026-10-13):** **no per-token price published anywhere, eight months after release.** Cost is bundled into a **ChatGPT Pro subscription** with a separate, demand-adjusted rate limit, or handled under an unpublished design-partner API agreement. There is no free tier and no enterprise deployment path during the preview. This remains the single largest evidence gap on the model card and is priced into the Cost efficiency line below rather than papered over.
- **Architecture:** proprietary and undisclosed beyond "a smaller version of GPT-5.3-Codex". **Served on Cerebras WSE-3** — a single wafer-scale chip specified at **4 trillion transistors, ~900,000 cores, 44 GB of on-chip SRAM and ~21 PB/s of memory bandwidth**, which sidesteps GPU cluster interconnects by keeping weights in on-chip SRAM millimetres from the compute units and executing layer-by-layer across the whole wafer. Cited infrastructure deltas versus OpenAI's own stack: ~80% reduction in client-server overhead, ~50% faster TTFT, ~30% lower per-token overhead, with persistent WebSocket connections for streaming. Parameter count, layer configuration and training details are not published. OpenAI notes Spark consumes **roughly half the tokens** of earlier models for certain outputs and generates **25% faster on average**. A 2026 analysis makes the sharper claim that this is a substrate change rather than a model optimisation, and that the hardware moat therefore cannot be eroded by a competitor shipping a leaner model on H100s.

### Raw benchmarks found

Agent / tool use:

- **Terminal-Bench 2.0: 58.4%** — the-decoder, 2026-02-12, in a table also listing GPT-5.3-Codex at 77.3% and GPT-5.1-Codex-mini at 46.1%. **Independently confirmed by Adam Holter (2026-02-13)** and by two further 2026-02-13 write-ups, which is a materially firmer footing than the previous version of this file had. Still the only Terminal-Bench figure in the record that is internally consistent with OpenAI's authoritative Codex number.
- **Conflicting figures:** **77.3%** by SiliconANGLE and Digital Applied; a **transposed 77.3%** by a 2026-04-30 review; **SWE-Bench Pro 72.8%** by Digital Applied, above the flagship's own OpenAI-published 56.8% by 16 points for a model OpenAI describes as smaller and faster. **All excluded** under the reliability test stated above.
- **New first-hand operational evidence, and the most decision-relevant material in this pass.** A 2026-05-11 practitioner guide, written by someone using Spark daily, reports three behaviours that bear directly on agentic capability: **Spark uses no tools by default in the app** — *"if you want it to run tests or read files, you have to enable the toolset explicitly… the moment you turn on file-system tool use, you eat the round-trip latency"*; **Spark does not pause to grep, list or explore** the way the flagship does in agentic mode, because *"Spark is tuned to start emitting tokens"*; and **Spark makes minimal targeted edits and does not run tests unless asked**, which *"shifts the verification cost back to you."* This corroborates and extends the earlier Turing College observation of **state drift after 6–8 steps** and **unreliable tool-call formatting**.
- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas / MCP-Atlas / SWE Atlas Codebase QnA: **still no verified public score found**. **No Artificial Analysis record exists for this model**, so there is no Agentic Index, no TAU-bench row and no coding index either.

Reasoning / knowledge:

- **Still no verified public reasoning score of any kind exists for this checkpoint**, eight months on. GPQA Diamond, Humanity's Last Exam, CritPt, AIME 2025, FrontierMath, ARC-AGI, Artificial Analysis Intelligence Index, AA-LCR and AA-Omniscience: **none found**, at any setting.
- OpenAI's qualitative claim that Spark "surpasses the reasoning capabilities" of the full GPT-5.2-Codex and of the standard GPT-5.2 remains **a vendor claim with no number attached**, and the models it is compared against have themselves been deprecated, so the claim cannot be checked against anything.
- New first-hand negative evidence on failure modes: **fabricated API endpoints, phantom npm package names, and invented function parameters** in libraries the model should know — described by the 2026-05-11 source as code that *"compiles, runs, and silently does the wrong thing because the function signature is invented."* One source quantifies the gap as a **9-point reasoning drop**; this is an estimate, not a measurement.

Coding:

- **SWE-Bench Pro: no OpenAI-published absolute figure.** OpenAI's wording is that Spark "demonstrates strong performance" on SWE-Bench Pro "while accomplishing the tasks in a fraction of the time compared to GPT-5.3-Codex," and Turing College's independent estimate is **~56%**. **Adam Holter independently reproduces ~56% against the flagship's 56.8%**, which is the second convergent estimate and lands almost exactly on OpenAI's "comparable accuracy" framing. **This convergence remains the basis for the Coding score**, not a first-party number.
- **Conflicting figure:** Digital Applied's **SWE-Bench Pro 72.8%** and the 2026-04-30 review's implied ~56% against a ~72% flagship baseline. **Not credible; not used.**
- **Task duration, still the actual headline and still well sourced:** on SWE-Bench Pro, Spark reaches comparable accuracy in **roughly 2–3 minutes** against GPT-5.3-Codex's **15–17 minutes**. A later practitioner measurement puts the same contrast as **~50 seconds against ~6 minutes**. Both describe a 5–8× wall-clock reduction.
- **SWE-bench Verified / DeepSWE / SciCode / Vibe Code Bench / LiveCodeBench / Aider Polyglot / SWE-Lancer / SWE-rebench:** still **no verified public score found**. A 2026-04-30 review lists SWE-Lancer IC Diamond and OSWorld-Verified for Spark as **N/A**, explicitly not independently verified.
- **New, and more specific than before, on where the capability stops.** The 2026-05-11 source maps the failure boundary in engineering terms: **multi-file refactors with cross-module invariants**, where the smaller window plus lower reasoning quality means it *"will miss a call site, get the type contract subtly wrong, or generate the right change in 9 of 10 files and a confidently broken one in the 10th"*; **library APIs not deeply represented in training**, which is where hallucination is worst; **anything requiring reading a codebase before writing**; and **non-trivial debugging**, described as *"give it a stack trace and watch it propose the wrong fix faster than you can read it."*

Long context:

- **Still no long-context retrieval measurement** — no MRCR, RULER, GraphWalks or AA-LCR figure, eight months on. The 128K window remains a documented spec with no retrieval evidence behind it.
- First-hand observation (Turing College): the 128K window **falls short for large-codebase analysis**, where the flagship's 400K+ is the relevant ceiling.
- Long context is also where the full Codex line's compaction strategy is least likely to be replicated, since compaction is a reasoning-budget mechanism and Spark is deliberately budget-constrained.
- The 2026-05-11 source adds the practical consequence: *"128k context vs. flagship's 400k"* is listed as a **-3.1× delta**, and multi-file refactors are named as the task class it cannot do.

Vision / multimodal:

- **Text-only at launch, and independently reconfirmed eight months later.** No image input capability; code and text in, text out. No vision benchmark exists or could exist.

### Normalized scores (1–100)

- **Tool use: 58/100.** *Revised down from 65.* No new *measurement* arrived, which is the core problem — **no aggregator tracks this model**, so there is no Terminal-Bench 2.1, no MCP Atlas, no τ²-Bench, no TAU-bench, no Agentic Index. What did arrive is **first-hand operational evidence that is worse than the previous version's**, and it is now well corroborated across two independent practitioners. **Spark uses no tools by default**, and enabling them costs the latency that is the model's entire reason for existing. **It does not explore** — it is tuned to start emitting rather than to grep, list or read first, which is the defining behaviour of an agent and the thing it does not do. **It does not verify its own output** and does not run tests unless asked. Combined with the earlier Turing College findings of **state drift after 6–8 steps** and **unreliable tool-call formatting** (missing JSON schema fields, phantom function parameters), this is a consistent picture of a fast, non-agentic code emitter. **Terminal-Bench 2.0 at 58.4%** — now independently confirmed twice — remains a mid-tier terminal result. Offsetting all of it, and it is a real offset: **1,000+ tokens/s and ~120 ms TTFT** is the best interaction latency in this dataset by an order of magnitude, and it is the difference between a coding agent that feels like autocomplete and one that feels like a chat turn.
- **Reasoning: 42/100.** *Revised down from 45.* Still **no reasoning benchmark of any kind**, and the new first-hand evidence makes the qualitative case weaker rather than stronger. The 2026-05-11 source documents **invented function signatures that compile and silently misbehave**, **missed call sites in multi-file refactors**, and a debugging failure mode it describes as proposing the wrong fix faster than a human can read it. OpenAI's own framing still caps it — *"for heavy multi-step reasoning the larger Codex models still win on absolute quality"* — and the models it is implicitly compared against are now themselves deprecated, so the qualitative claim cannot even be checked. A reasoning model with no reasoning measurements and a documented tendency to invent routine API surface is scored conservatively.
- **Context window: 52/100.** *Unchanged.* **128,000 tokens**, the methodology's "100K–200K = 50–64" band, scored near its floor. One-third of the flagship's 400K; **still no retrieval measurement of any kind**; native compaction least available on a latency-optimised, budget-constrained checkpoint; and the 2026-05-11 source independently confirms the 128K figure while naming whole-repository work as the class it cannot do. There is no new evidence in either direction, so the line holds rather than moving on absence.
- **Multimodal: 15/100.** *Unchanged.* **Text-only**, now reconfirmed by a second independent source eight months after launch. No image input at all, so a screenshot of a broken layout, a rendered diff or an error screenshot cannot be read by this model — a real limitation for a coding agent in 2026. Text out, so no non-text output either. Dataset floor for a text-only model.
- **Coding: 72/100.** *Revised down from 76.* The convergent evidence holds: **~56% SWE-Bench Pro from two independent estimates against the flagship's authoritative 56.8%**, and **58.4% Terminal-Bench 2.0 against 77.3%**, now independently confirmed. What changed is that the previous version's Coding line leaned on *absence* — "DeepSWE, SciCode and Aider Polyglot figures are all absent" — as a reason not to score higher, and this pass shows that **the absences are permanent rather than pending**, because no aggregator tracks the model at all and there is no API to run one. On top of that, the failure boundary is now documented in specific engineering terms rather than inferred: **missed call sites and subtly wrong type contracts in multi-file refactors**, **invented library APIs**, **no self-verification**. The 16-point SWE-Bench Pro and 19-point Terminal-Bench gaps are not incidental — they are the model's defining characteristic. It remains strong exactly where the cost of a wrong answer is low and verification is fast: targeted edits in a file you already understand, unit-test generation against existing code, mechanical regex and syntax work, and frontend prototyping loops.
- **Cost efficiency: 66/100.** *Revised down from 68.* **No per-token price has been published in the eight months since release**, so this cannot be scored against the methodology's rate-card anchors at all, and pretending otherwise remains the easy error here. Scored on actual economics: for an **existing ChatGPT Pro subscriber the marginal cost is zero**, the model runs at 1,000+ tokens/s consuming roughly half the tokens of earlier models, and OpenAI computes duration as output generation + prefill + tool execution + network overhead, so a 5–8× wall-clock reduction compounds every term. **What this pass changes is the size of that benefit.** The speed advantage is *conditional on not using tools* — enabling file-system tool use "eats the round-trip latency," per the first-hand report — so the economic case applies to draft-and-verify loops rather than to agentic work, which is a narrower claim than the 15× headline implies. The previous pass's **~1.37× rather than 15×** matched-accuracy recalculation stands, and is now reinforced by a Hacker News thread making the same point about OpenAI never claiming 15× at matched accuracy. Still outstanding: **ChatGPT Pro access is mandatory** (a fixed monthly cost for anyone not already paying), a **separate rate limit applies and may be tightened with demand**, **no API price exists**, and **1,000 tokens/s is modest by Cerebras' own standards** — the company has measured far higher on smaller models, which indicates the figure reflects model complexity rather than a hardware ceiling.
- **Overall Score: 48/100.** (58 + 42 + 52 + 15 + 72) / 5 = 239 / 5 = 47.8 → **48**, down from 51. Best fit, and it is a narrow one: **interactive, in-the-moment coding in the Codex CLI, IDE extension or app** — targeted edits, UI tweaks, refactoring a function, rapid prototyping, a tight debug loop where you want results before you have finished typing the request. **Paired with a heavier model in a two-model workflow it is genuinely strong**, and the 2026-05-11 guide's formulation of that split — plan with the flagship, implement with Spark, use tests as the verification layer, drop back to the heavyweight the moment a step requires reading code beyond the current file — is the correct operating pattern. **Not** a fit for whole-repository analysis (128K, no retrieval evidence), **not** a fit for any vision task (text-only), **not** a fit for unattended or tool-using agent runs (no tools by default, no exploration, no self-verification, 6–8 step drift), **not** a fit for production migrations touching more than three files or anything where an invented dependency name would land in a `package.json`, and **not** available at all without a ChatGPT Pro subscription or a design-partner agreement.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-13
- Method: third pass over this agent's own report for this slug (51 → **48**).
  Because this model has no public API, the aggregator record that carried the previous
  three passes **does not exist for it**: **Vector Wire returns HTTP 404 for
  `gpt-5-3-codex-spark` and omits it from its index of 743 models**, which is itself a
  finding and is recorded as one — no aggregator, no Artificial Analysis record, no
  benchmark harness can reach this checkpoint. Fresh evidence therefore came from search
  and direct fetch rather than from a benchmark record, and the two load-bearing additions
  are: **Adam Holter's 2026-02-13 independent reproduction** of the-decoder's table
  (Terminal-Bench 2.0 **58.4%** for Spark against **77.3%** for the flagship and **46.1%**
  for GPT-5.1-Codex-mini) and of **~56% SWE-Bench Pro against the flagship's 56.8%**,
  giving the two figures this file relies on a second independent source apiece; and a
  **2026-05-11 first-hand practitioner guide** supplying the operational evidence that
  moved three scores — **Spark uses no tools by default and enabling them costs the
  latency advantage**, **Spark does not explore a codebase before emitting tokens**,
  **Spark does not verify its own output or run tests unless asked**, plus the specific
  hallucination surface (**fabricated API endpoints, phantom npm package names, invented
  function signatures that compile and silently misbehave**), the failure boundary in
  engineering terms (multi-file refactors, missed call sites, wrong type contracts), the
  ~50s-vs-~6min task-duration measurement, and the Cerebras WSE-3 specifications (4
  trillion transistors, ~900,000 cores, 44 GB on-chip SRAM, ~21 PB/s bandwidth).
  Availability and context were re-confirmed from a 2026-10-07 report still describing
  Spark as a ChatGPT Pro research preview, and from the 2026-05-11 confirmation that free
  Codex CLI access does not include it.
  **The reliability test from the previous pass was applied again and caught two further
  unreliable sources.** A 2026-04-30 review transposes the flagship's 77.3%
  Terminal-Bench figure onto Spark, repeats a ~72% Codex SWE-Bench Pro figure that
  contradicts OpenAI's authoritative **56.8%**, and lists the flagship's context window as
  **192k** against OpenAI's documented **400k** — three errors in one table; and a
  2026-05-11 guide carries the same ~72% Codex figure (though it is otherwise the most
  operationally useful source found, and is used for behaviour rather than for numbers).
  Any source misstating 56.8% is excluded from absolute-number use. **Eight months after
  release, OpenAI has still published neither an absolute benchmark table nor a per-token
  API price**, and the previous pass's **~1.37× rather than 15×** matched-accuracy
  recalculation is retained and reinforced by contemporaneous Hacker News commentary
  making the same observation. Scores are normalized 1–100 interpretations per
  `model-comparison.md`, not official vendor scores; cost efficiency is reported but
  excluded from the overall average.
- Future sources: add a new file next to this one, e.g.
  `GPT_5_3_Codex_Spark_GA.md`, using the same headings — **re-score this one the moment
  OpenAI publishes an official benchmark table or a per-token API price.** Both are still
  missing eight months on, and either would materially change the Coding and Cost
  efficiency lines. The GPT-6-generation speed-tier models are also worth watching as the
  successor class, since the heavyweight this model is paired against has itself been
  deprecated.