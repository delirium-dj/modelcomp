# GPT-5.3-Codex-Spark — findings by Space Bunny Alpha

- Source: OpenAI (`gpt-5.3-codex-spark`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass note: this file was re-run on user instruction. The Overall is unchanged
> at 51, but one line moved.** The fresh search **corroborated the Terminal-Bench 2.0
> figure of 58.4%** this file already used as the credible independent number, against
> OpenAI's unquantified 77.3%, and added **GPT-5.1-Codex-mini at 46.1%** as a third
> calibration point. It also produced **new evidence that materially lowers the Cost
> efficiency line from 75 to 68**: a matched-accuracy recalculation of OpenAI's own
> speed claim puts the real speedup at **~1.37×, not 15×**. Because `RULES.md` excludes
> Cost from the Overall, that correction moves no dimension in the mean and the Overall
> stands — but it changes the recommendation, and it is the single most decision-relevant
> finding from this pass.

> **Data-quality warning, stated up front.** OpenAI's launch post for this model
> **published no absolute benchmark percentages** — it described SWE-Bench Pro and
> Terminal-Bench 2.0 performance qualitatively ("strong performance… in a fraction of
> the time"). The secondary record is then **materially contradictory**: Terminal-Bench
> 2.0 is reported as **58.4%** by the-decoder and as **77.3%** by SiliconANGLE and
> Digital Applied, and SWE-Bench Pro is reported as **~56%** by Turing College and as
> **72.8%** by Digital Applied. Two of those secondary sources also misstate
> GPT-5.3-Codex's own SWE-Bench Pro score as ~72–75%, against OpenAI's authoritative
> **56.8%**, which is how they can be identified as unreliable on absolute numbers. The
> two figures used below are the ones that survive that check, and both are labelled
> throughout. Read the Coding and Tool use lines with the provenance attached.

## Model card

- **Name:** GPT-5.3-Codex-Spark
- **Short description:** A **smaller, speed-optimised version of GPT-5.3-Codex**, released 2026-02-12 as the **first model OpenAI has ever deployed on production silicon outside its Nvidia stack** — it runs on Cerebras' Wafer-Scale Engine 3 (WSE-3) wafer-scale accelerator. OpenAI's first release in a multi-billion-dollar Cerebras partnership announced in January 2026. It streams **more than 1,000 tokens per second** (roughly 15× GPT-5.3-Codex's ~67 t/s) with time-to-first-token around **120 ms**, and is positioned as a *complement* to the full Codex rather than a replacement: "real-time collaboration when you want rapid iteration, and long-running tasks when you need deeper reasoning and execution." OpenAI calls it a daily productivity driver for debugging, deploying, monitoring, writing PRDs, editing copy, user research, tests and metrics — with emphasis on **steerable mid-task** work and frequent status updates. **Distinct model, not a variant alias** of GPT-5.3-Codex.
- **Provider / access:** **Research preview, ChatGPT Pro subscribers only** — Codex **app, CLI and VS Code/IDE extension**. Because it runs on specialised low-latency hardware, usage is governed by a **separate rate limit that may adjust with demand** during the preview. API access exists **only for a small set of design partners**, and **OpenAI has published no per-token price**. Not on OpenRouter or any public gateway. **Availability note:** during OpenAI's June 2026 Codex deprecations — which retired GPT-5.2-Codex and the full GPT-5.3-Codex — **Codex-Spark was explicitly exempted and remained available** rather than being sunset.
- **Release / knowledge:** released **2026-02-12**. **Knowledge cutoff not published** for the Spark variant; the parent GPT-5.3-Codex's is 2025-08-31 and is not assumed here.
- **IDs:** `gpt-5.3-codex-spark`. **API access is not generally available** — LLM Reference records its status as "API only" for design partners, and OpenAI's announcement confirms it is not a public API model.
- **Context window:** **128,000 tokens** (AI/TLDR, CodeConductor, Digital Applied — all consistent, and all derived from OpenAI's launch material). This is **one-third of the full GPT-5.3-Codex's 400K**, a deliberate trade for latency.
- **Modalities:** **text only.** No image, audio or video input — an explicit launch-time limitation, and the source of the dataset's multimodal floor score below. Output: text. Reasoning: yes, but shallower than the full Codex; OpenAI states plainly that **for heavy multi-step reasoning the larger Codex models still win on absolute quality**.
- **Pricing (as of 2026-10-01):** **no per-token price published anywhere.** Cost is bundled into a **ChatGPT Pro subscription** with a separate, demand-adjusted rate limit, or handled under an unpublished design-partner API agreement. There is no free tier and no enterprise deployment path during the preview. This is the single largest evidence gap on the model card and it is priced in the Cost efficiency line below rather than papered over.
- **Architecture:** proprietary and undisclosed beyond OpenAI's description of "a smaller version of GPT-5.3-Codex". **Served on Cerebras WSE-3** — a wafer-scale chip with massive on-chip memory and bandwidth, sidestepping GPU cluster interconnects. Cited infrastructure deltas versus OpenAI's own stack: ~80% reduction in client-server overhead, ~50% faster TTFT, ~30% lower per-token overhead, with persistent WebSocket connections for streaming. Parameter count, layer configuration and training details are not published. OpenAI notes Spark consumes **roughly half the tokens** of earlier models for certain outputs and generates **25% faster on average**.

### Raw benchmarks found

Agent / tool use:

- **Terminal-Bench 2.0: 58.4%** — the-decoder, 2026-02-12, in a table that also lists GPT-5.3-Codex at 77.3% and GPT-5.1-Codex-mini at 46.1%. **This is the only Terminal-Bench figure in the record that is internally consistent with OpenAI's authoritative Codex number**, which is why it is the figure used here.
- **Conflicting figure:** the same benchmark is reported as **77.3%** by SiliconANGLE and by Digital Applied. SiliconANGLE's article attributes 77.3% to Codex in one sentence and to Spark in another, and Digital Applied's table claims Spark 72.8% / Codex 75.1% on SWE-Bench Pro — both of which contradict OpenAI's published 56.8% for Codex. **Treated as unreliable and not used.**
- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found** for this model.
- Hands-on agentic observation (Turing College, 2026-02-14): the model **drifts after 6–8 steps** in sequential planning chains, against the full Codex holding state across 12+ step plans; multiple developer threads flagged **unreliable tool-call formatting** — JSON schemas missing fields and function signatures with phantom parameters. That last item is a direct, first-hand tool-use defect and is weighted into the Tool use score below.

Reasoning / knowledge:

- **No verified public reasoning score of any kind exists for this checkpoint.** GPQA Diamond, Humanity's Last Exam, CritPt, AIME 2025, FrontierMath, ARC-AGI, Artificial Analysis Intelligence Index, AA-LCR and AA-Omniscience: **none found** for GPT-5.3-Codex-Spark at any setting.
- OpenAI's qualitative claim, as reported by SiliconANGLE: Spark **surpasses the reasoning capabilities** of the full GPT-5.2-Codex and of the standard GPT-5.2 that powered ChatGPT at launch. This is a vendor claim with no number attached, and GPT-5.2-Codex itself has no published absolute figures either, so the claim cannot be checked against anything.
- No Artificial Analysis record exists for this model.

Coding:

- **SWE-Bench Pro: no OpenAI-published absolute figure.** OpenAI's wording is that Spark "demonstrates strong performance" on SWE-Bench Pro "while accomplishing the tasks in a fraction of the time compared to GPT-5.3-Codex," and Turing College's independent estimate is **~56%** — which happens to land almost exactly on GPT-5.3-Codex's authoritative 56.8%, consistent with OpenAI's "comparable accuracy" framing. **This convergence is the basis for the Coding score**, not a first-party number.
- **Conflicting figure:** Digital Applied reports **SWE-Bench Pro 72.8%** for Spark — above GPT-5.3-Codex's own OpenAI-published 56.8% by 16 points, for a model OpenAI describes as a *smaller, faster* sibling. **Not credible; not used.**
- **Task duration, which is the actual headline and is well sourced:** on SWE-Bench Pro, Spark reaches comparable accuracy in **roughly 2–3 minutes** against GPT-5.3-Codex's **15–17 minutes** for the same tasks — a 5–8× wall-clock reduction. OpenAI also notes it achieves its SWE-Bench Pro scores with a fraction of the tokens.
- Game and web development: OpenAI reports **similar improvements** to those seen on Terminal-Bench 2.0 (qualitative only).
- SWE-bench Verified / DeepSWE / SciCode / Vibe Code Bench / LiveCodeBench / Aider Polyglot / SWE-Lancer / SWE-rebench: **no verified public score found**

Long context:

- **No long-context retrieval measurement was found** — no MRCR, RULER, GraphWalks or AA-LCR figure. The 128K window is a documented spec with no retrieval evidence behind it.
- First-hand observation (Turing College): the 128K window **falls short for large-codebase analysis**, where the full Codex's 400K+ is the relevant ceiling.
- Long context is also where the compaction strategy of the full Codex line is least likely to be replicated, since compaction is a reasoning-budget mechanism and Spark is deliberately budget-constrained.

Vision / multimodal:

- **Text-only at launch.** No image input capability. Code and text in, text out. No vision benchmark exists or could exist.

### Normalized scores (1–100)

- **Tool use: 65/100.** Scored from contested evidence, and the score is deliberately mid-band rather than high. **Terminal-Bench 2.0 at 58.4%** (the-decoder, the only internally consistent figure available) is a mid-tier terminal-agent result — well below the methodology's ~88%+ frontier reference and roughly 19 points behind the full Codex on the same benchmark. Offsetting that, the interaction economics are the best in this dataset by an order of magnitude: **1,000+ tokens/s and ~120 ms TTFT against the full Codex's ~67 t/s and ~240 ms**, which is the difference between a coding agent that feels like autocomplete and one that feels like a chat turn. Held down from 70+ by the first-hand **tool-call formatting defects** — missing JSON schema fields, phantom function parameters — and by **state drift after 6–8 steps**, both of which are agentic-reliability failures regardless of how fast the tokens arrive.
- **Reasoning: 45/100.** Below the dataset's mid-scale band, and the score is driven entirely by absence. **No reasoning benchmark exists for this model** — no GPQA, no HLE, no AIME, no FrontierMath, no ARC-AGI, no Intelligence Index, no LCR. OpenAI's own framing caps it: "for heavy multi-step reasoning the larger Codex models still win on absolute quality," and Turing College measured state drift after 6–8 steps where the full Codex holds 12+. OpenAI's claim that Spark beats GPT-5.2-Codex and GPT-5.2 on reasoning cannot be verified, because neither of those models has a published absolute figure to compare against. A reasoning model with no reasoning measurements is scored conservatively rather than optimistically.
- **Context window: 52/100.** **128,000 tokens** — the methodology's "100K–200K = 50–64" band, scored near its floor for a 2026 coding agent. It is **one-third of the full GPT-5.3-Codex's 400K**, and Turing College found the window **falls short for large-codebase analysis** specifically. No retrieval measurement exists (no MRCR, RULER, GraphWalks, AA-LCR), and native compaction — the full Codex line's answer to exceeding the window — is least available on a latency-optimised checkpoint with a constrained reasoning budget. For interactive single-file and immediate-dependency work 128K is ample; for whole-repository work it is the binding constraint.
- **Multimodal: 15/100.** **Text-only at launch, explicitly.** No image input capability at all, so a screenshot of a broken layout, a rendered diff or an error screenshot cannot be read by this model — a real limitation for a coding agent in 2026. Text out, so no non-text output either. Dataset floor for a text-only model.
- **Coding: 76/100.** The highest dimension and the one with the least first-party evidence, which is stated plainly here. The reasoning: OpenAI's own wording is that Spark matches or approaches GPT-5.3-Codex on SWE-Bench Pro while running **2–3 minutes instead of 15–17** on the same tasks; GPT-5.3-Codex's authoritative SWE-Bench Pro is **56.8%**, the industry high on the four-language contamination-resistant harness; Turing College's independent estimate for Spark is **~56%**. Three independent points converging on ~56% supports a frontier-leading patch-generation score. What pulls it down from the 84–87 range the full Codex earns is the **58.4% Terminal-Bench 2.0 against the full Codex's 77.3%** — a 19-point drop that says the same model is far better at writing patches than at driving a terminal through a long multi-step session — plus the total absence of SWE-bench Verified, DeepSWE, SciCode, SWE-rebench, SWE-Lancer and Aider Polyglot figures. **Treat 76 as an inference from OpenAI's comparative claim plus one independent estimate, not as a measurement.**
- **Cost efficiency: 68/100.** **Reduced from 75 on the second pass, on new evidence.** No per-token price is published anywhere, so this cannot be scored against the methodology's rate-card anchors at all — and pretending otherwise would be the easy error here. Scored instead on the actual economics: for an **existing ChatGPT Pro subscriber the marginal cost is zero**, the model runs at **1,000+ tokens/s consuming roughly half the tokens** of earlier models, and OpenAI computes duration as output generation + prefill + tool execution + network overhead, so a 5–8× wall-clock reduction compounds every one of those terms. **The second pass lowered this from 75 on specific new evidence.** A matched-accuracy recalculation using OpenAI's own published SWE-Bench Pro chart points — matching Spark to the baseline model at comparable accuracy *by reasoning effort* — puts the effective speedup at **~1.37× rather than 15×**, on the reasoning that "if you put high reasoning for everything… giving up some intelligence, and then taking the hit on some inevitable re-runs / re-prompts at 15× ends up with more than a 7% speed improvement on a lot of tasks." OpenAI's own 2–3 minutes versus 15–17 minutes is a comparison of **different settings**, not of the same work at matched quality. Two further constraints from the same pass: **Ars Technica notes OpenAI "did not share independent validation of those numbers,"** and **1,000 tokens/s is itself modest by Cerebras standards** — the company has measured 2,100 tokens/s on Llama 3.1 70B and 3,000 tokens/s on OpenAI's own gpt-oss-120B, which indicates Spark's lower figure reflects the overhead of a larger, more complex model rather than a hardware ceiling. Remaining credits, unchanged: **ChatGPT Pro access is mandatory** (a ~$200/month fixed cost for anyone not already paying it), a **separate rate limit applies and may be tightened with demand**, and there is **no published API price**, so nobody building on this knows what it will cost them. The score is a statement about marginal cost inside an existing subscription, not a unit-economics claim.
- **Overall Score: 51/100.** (65 + 45 + 52 + 15 + 76) / 5 = 50.6 → **51**. Best fit, and it is a narrow one: **interactive, in-the-moment coding in the Codex CLI, IDE extension or app** — targeted edits, UI tweaks, refactoring a function, rapid prototyping, a tight debug loop where you want results before you have finished typing the request. Paired with the full Codex in a two-model workflow it is genuinely strong: Spark drafts fast, Codex 5.3 fixes the multi-step architecture work, at a fraction of the wall-clock and token cost. **Not** a fit for whole-repository analysis (128K, no retrieval evidence), **not** a fit for any vision task (text-only), **not** a fit for unattended multi-step agent runs (6–8 step drift), and **not** available at all without a ChatGPT Pro subscription or a design-partner agreement.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-10-01
- Method: public internet research — OpenAI's GPT-5.3-Codex-Spark launch post (`openai.com/index/introducing-gpt-5-3-codex-spark/`), which supplies the model card, the Cerebras WSE-3 deployment facts, the access model, the separate rate limit and the explicit statement that no absolute benchmark percentages were published; the-decoder's 2026-02-12 launch report (source of the 58.4% Terminal-Bench 2.0 figure and the 2–3 min vs 15–17 min task durations); SiliconANGLE, Digital Applied, CodeConductor, cmotech, Turing College and AI/TLDR (source of the token-throughput, TTFT, infrastructure-overhead, context-window, text-only and June-2026-deprecation-exemption facts, and of the contested benchmark figures). Scores are normalized 1–100 interpretations per `model-comparison.md`, not official vendor scores. Where secondary sources conflict, the conflict is preserved and the reliability test is stated: sources that misstate GPT-5.3-Codex's authoritative 56.8% SWE-Bench Pro are excluded from absolute-number use.
- Future sources: add a new file next to this one, e.g. `GPT_5_3_Codex_Spark_GA.md`, using the same headings — re-score this one if OpenAI ever publishes an official benchmark table or a per-token API price, both of which are currently missing and both of which would change the Cost efficiency and Coding lines.