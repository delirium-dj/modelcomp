# Claude Haiku 4.5 — findings by Space Bunny Alpha

- Source: Anthropic (`claude-haiku-4-5-20251001`, alias `claude-haiku-4-5`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass note: this file was re-run on user instruction, and the score moved
> *down*, from 64 to 62.** The fuller evidence base — chiefly **Terminal-Bench v4.0 at
> 0%**, **Terminal-Bench 2.1 at 44.19%**, **TauBench V3 Banking at 9.28%** and
> **GDPval-AA Elo 719 (rank 159/432)** — is worse than what was available when the file
> was first written. **The divergence from this folder's `average.md` therefore
> increased rather than closed, and that is the correct outcome.** My earlier number was
> not a mistake; it is the product of scoring this model against the methodology in
> `model-comparison.md`, while the peer average reflects raters who weight its
> 73.3% SWE-bench Verified and its $1/$5 price more heavily and weight its agentic and
> reasoning floors more lightly. I have not moved the score to close the gap, and I would
> not recommend any rater who does.

## Model card

- **Name:** Claude Haiku 4.5
- **Short description:** Anthropic's small, fast, cheap tier — a lightweight version of the Claude 4 generation, pitched as matching Sonnet 4 on coding, computer use and agent tasks at roughly one-third the price of a frontier Claude. Its real niche is high-volume, low-latency work: **sub-agents, parallelised execution, routing and classification** under a Sonnet/Opus orchestrator. Not a variant or alias of another entry in this dataset.
- **Provider / access:** Anthropic Claude Platform (Messages API), Amazon Bedrock (`anthropic.claude-haiku-4-5-20251001-v1:0`) and Google Vertex AI. OpenRouter and Vercel AI Gateway both list it as `anthropic/claude-haiku-4.5`. Artificial Analysis measures it through **5 API providers**. **Retirement: not sooner than 2026-10-15** — two weeks from this report.
- **Release / knowledge:** released **2025-10-15**. Reliable knowledge cutoff **February 2025**; training-data cutoff **July 2025** (Anthropic platform docs; Artificial Analysis lists Jul 1 2025).
- **IDs:** `claude-haiku-4-5-20251001` (canonical), alias `claude-haiku-4-5`. Third-party: `anthropic/claude-haiku-4.5`.
- **Context window:** **200,000 tokens**, max output **64,000 tokens** (Anthropic platform docs — first-party spec sheet). **No 1M-token option**; unlike Sonnet 5 / Opus 5 / Fable 5, every one of which has one.
- **Modalities:** **text and image in; text out.** Reasoning: **extended thinking** with controllable depth. Anthropic explicitly documents **no default-effort parameter** on this tier ("Not supported") — the only model in the current Anthropic line-up without an effort control. Full tool support: bash, file editing, web search, computer use, JSON mode. **No audio or video input documented; no PDF support** — Anthropic's PDF-support list covers Sonnet 3.5, Sonnet 3.7, Sonnet 4/4.5, Opus 4/4.1 and Fable 5.1 but **not Haiku 4.5**.
- **Pricing (as of 2026-10-01):** **$1.00 / MTok input, $5.00 / MTok output.** Cache read **$0.10** (90% discount), 5-minute cache write $1.25, 1-hour cache write $2.00, **Batch API 50% off** ($0.50 / $2.50). Blended at 7:2:1: **$0.77 / MTok**. Artificial Analysis measured **$0.28 cost per Intelligence Index task**, ranking **#13 of 224** among reasoning models in its price class. No free tier.
- **Architecture:** proprietary. No parameter count, layer count or architecture disclosed.

### Raw benchmarks found

Agent / tool use — **the weakest dimension, and the fuller second-pass data makes it worse:**

- **Terminal-Bench v4.0: 0%** (Artificial Analysis, reasoning on). Zero. On the benchmark AA describes as "a harder 66-task benchmark of complex terminal work… with recalibrated compute and time allowances." For context, GPT-6 Astra (xhigh) leads it at 59.6% and Claude Fable 5.1 at 55.1%. **This is the single most damning number in the file and it is independent.**
- **Terminal-Bench 2.1: 44.19%** (Artificial Analysis, reasoning) — against GPT-5.6 Sol (max) at 65.9% on Terminal-Bench Hard, and Fable 5 (max) at 62.9%.
- **Terminal-Bench Hard: 27.27%** (Artificial Analysis)
- **TauBench V3 Banking: 9.28%** (Artificial Analysis, reasoning) — bottom of the methodology's 10–25% mid-band, effectively at the floor.
- **τ²-Bench Telecom: 54.68%** (reasoning) / **32.46%** (non-reasoning) (Artificial Analysis)
- **GDPval-AA v2.1: Elo 719, rank 159 of 432** (Artificial Analysis) — versus Claude Opus 5.5 (Adaptive, Max) at 1846 and Claude 3.5 Haiku at 198.
- **Terminal-Bench via Anthropic's own harness: 40.21%** (Terminus 2, 6 runs, no thinking) / **41.75%** (5 runs, 32K thinking budget), n-attempts=1. Anthropic's τ²-bench scores used 10 runs with a 128K thinking budget **plus a prompt addendum** instructing the model to target its known failure modes — a vendor-favourable configuration that should be read with that in mind.
- OSWorld-Verified: **50.7%** (Anthropic-reported at launch; Sonnet 4 comparison point 42.2%, Sonnet 4.6 72.5%)
- Augment (launch partner): reported reaching **90% of Sonnet 4.5's performance** on its agentic coding eval — vendor-partner claim, no public harness.
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- **Artificial Analysis Intelligence Index: 17** (reasoning), **15** (non-reasoning), current v4.3.2 family. AA places the reasoning variant at **#167 of 224** among reasoning models and characterises it as "among the least intelligent models, but well priced when comparing to other models of similar price."
- **GPQA Diamond: 67.2%** (reasoning) / 64.6% (non-reasoning) — inside the methodology's 60–80% mid-band.
- **Humanity's Last Exam: 10.4%** (reasoning) / 4.2% (non-reasoning) — the methodology's own note is "HLE <10% → mid."
- **CritPt: 0.0%** (both variants)
- **AA-LCR v1.1: 74.3%** (reasoning) / 49.7% (non-reasoning) — a genuine long-context strength.
- **AA-Omniscience Accuracy / Non-Hallucination Rate: 18.0% / 72.7%** (reasoning); 14.4% / 74.3% (non-reasoning) — it declines to answer far more often than it guesses.
- **IFBench: 54.29%** (reasoning) / 42.04% (non-reasoning) (Artificial Analysis)
- **SciCode: 42.2%** (reasoning)
- Output speed **100.0 tokens/s**, TTFT **22.03s** on the reasoning variant (#49 of 224 on speed); non-reasoning **88.5 tokens/s**, TTFT **0.59s** (#15 of 618). The 22s reasoning TTFT is a real extended-thinking cost against a 4.04s class median.

Coding:

- **SWE-bench Verified: 73.3%** (Anthropic, 50 trials, no test-time compute, 128K thinking budget, full 500-problem set, two-tool bash + string-replacement scaffold, with a minor prompt addition) — the model's strongest and most-cited number, and level with the Sonnet 4 flagship's 72.7% five months earlier.
- **SciCode: 42.2%**; **Artificial Analysis Coding Index: 43.9**
- LiveCodeBench / DeepSWE / SWE-bench Pro / Vibe Code Bench: **no verified public score found**

Long context:

- **AA-LCR v1.1: 74.3%** at the 200K window — the only long-context retrieval figure that exists. No MRCR, RULER or GraphWalks measurement.

Vision / multimodal:

- **Text and image in, text out.** No MMMU, MMMUPro, DocVQA or OmniDocBench figure was found for this model.

### Normalized scores (1–100)

- **Tool use: 48/100.** **This is the number the second pass moved most, and it moved down.** Anchored on the methodology's mid-band — "TB2.1 ~45–60%, Tau3 ~10–25%, GDPval ~900–1200 → 50–70" — this model sits **below that band on all three anchors**: **Terminal-Bench 2.1 at 44.19%** (just under the 45% floor), **TauBench V3 Banking at 9.28%** (under the 10% floor), **GDPval-AA Elo 719** against a 900–1200 floor. And **Terminal-Bench v4.0 at 0%** is not a below-band result, it is a zero on a benchmark the field's leaders treat as their headline — GPT-6 Astra reaches 59.6% there. Offsetting upward, honestly: **OSWorld-Verified 50.7%** shows real desktop capability, **Terminal-Bench Hard 27.27%** is not bottom-of-board, and the interface itself (bash, file editing, computer use, JSON mode) is complete. Scored at 48, not lower, because the software is competent and the failures are reliability, not absence.
- **Reasoning: 55/100.** Inside the methodology's documented mid-band, and the second pass confirms rather than changes it. **GPQA Diamond 67.2%** sits squarely in the 60–80% band and **AA-LCR 74.3%** is a real strength. Everything else caps it: **HLE 10.4%**, **CritPt 0.0%**, Omniscience Accuracy **18.0%**, and an **Intelligence Index of 17 placing it #167 of 224**. AA's own summary — "among the least intelligent models" — is the fair characterisation. This is a reasoning-light model sold on price and latency, and the 2025-02 knowledge cutoff explains much of the knowledge-side weakness.
- **Context window: 72/100.** **200,000 tokens with 64,000 max output** — the methodology's "200K = 70" tier point, scored slightly above it because **AA-LCR 74.3% is an actual retrieval measurement** backing the spec, which is more than most models in this dataset can claim. Not higher because 200K is the top of that band, there is no 1M option while every Claude 4-generation sibling has one, and no MRCR/RULER/GraphWalks figure exists.
- **Multimodal: 65/100.** **Text and image in, text out** — the methodology's "+image in = 60–70" band, at its midpoint. This is *below* what a 70 would allow, and deliberately so: **Haiku 4.5 is absent from Anthropic's own PDF-support list**, which covers Sonnet 3.5 through Fable 5.1. So it has no documented PDF input, no audio, no video, and no non-text output. There is also **no vision benchmark at all** for it. The image capability is real and documented; it is simply narrow, and the floor reflects that rather than penalising it.
- **Coding: 70/100.** Solid and confirmed by the second pass. **73.3% SWE-bench Verified** — measured over 50 trials with a 128K thinking budget, which is a properly constructed number, and level with a flagship from five months earlier. **SciCode 42.2%** and **Coding Index 43.9** are both mid-tier, and **Terminal-Bench Hard 27.27%** says the model writes plausible patches far more reliably than it drives a terminal to completion. Capped below the methodology's 65–75 mid-coding band ceiling by the absence of LiveCodeBench, DeepSWE and SWE-bench Pro, which means the SWE-bench figure cannot be triangulated.
- **Cost efficiency: 96/100.** **$1.00 / $5.00 per MTok**, cache read **$0.10**, Batch **50% off**, **$0.77 blended**, and a measured **$0.28 per Intelligence Index task — #13 of 224** in its price class. Near the top of the paid band and one of the best price-per-task positions in this dataset. Held at 96 rather than higher because it is not free, and because Simon Willison's launch-day caveat still stands: it "is not the cheapest small model on the market" — GPT-5 mini and the Gemini Flash tier undercut it on raw price.
- **Overall Score: 62/100.** (48 + 55 + 72 + 65 + 70) / 5 = 62.0 → **62**. Best fit: **a cheap, fast sub-agent, router and high-volume executor under a Sonnet or Opus orchestrator**, or a 200K-context vision reader — not a model for open-ended reasoning, long-horizon agent chains, or whole-codebase ingestion. **Read alongside the two numbers that matter most for a decision: the $0.28 cost per Intelligence Index task (#13 of 224) and the Terminal-Bench v4.0 score of 0%.** The first says this is one of the best values on any board; the second says do not put it in charge of anything long-running.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-10-01
- Method: public internet research, **second pass on user instruction; the score moved from 64 to 62 and the divergence from `average.md` widened as a result.** Sources: Anthropic's launch post (`anthropic.com/news/claude-haiku-4-5`) for SWE-bench Verified 73.3% with its full 50-trial/128K-thinking methodology, the Terminal-Bench Terminus-2 figures (40.21% / 41.75%) and the τ²-bench 10-run configuration **including the prompt addendum**, plus OSWorld-Verified 50.7% and the Augment 90%-of-Sonnet-4.5 claim; Anthropic's platform model page for the $1/$5 rates, cache and batch pricing, the 200K/64K envelope, the Feb-2025/Jul-2025 cutoffs, the extended-thinking-only reasoning model with no effort control, and the 2026-10-15 retirement; **Artificial Analysis's Claude 4.5 Haiku reasoning page** for the Index of 17 at #167/224, the $0.28 cost per task at #13/224, the 100 tokens/s and 22.03s TTFT; **Vector Wire and AI Atlas** for the independent per-benchmark rows the earlier file lacked — **Terminal-Bench 2.1 44.19%, Terminal-Bench Hard 27.27%, Terminal-Bench v4.0 0%, TauBench V3 Banking 9.28%, τ²-Bench Telecom 54.68%, IFBench 54.29%, GDPval-AA Elo 719 at rank 159/432**; **Artificial Analysis's Terminal-Bench Hard and v4.0 leaderboards** for the comparison points (GPT-5.6 Sol max 65.9%, Fable 5 max 62.9% on Hard; GPT-6 Astra xhigh 59.6% on v4.0) that make Haiku's zeros legible; and Anthropic's PDF-support documentation, whose model list **excludes Haiku 4.5**. Scores are normalized 1–100 interpretations per `model-comparison.md`, not official vendor scores. Vendor-reported launch figures are labelled; the Anthropic τ²-bench prompt addendum is disclosed; and **the divergence from the folder average is explicitly left open rather than closed by adjusting scores toward the mean.**
- Future sources: this model **retires 2026-10-15**. Its replacement in this dataset is `claude-haiku-4.5`'s successor tier — check `platform.claude.com/docs/en/models/overview` for what replaces it on the Anthropic line-up. Re-score only if Anthropic publishes a Terminal-Bench v4.0 re-run or a vision benchmark, both of which are currently missing and both of which bear directly on the two lowest dimensions.