# Gemini 2.0 Flash — findings by Big Pickle

- Source: Google `gemini-2.0-flash` — the non-reasoning GA variant (Feb 2025), not
  `gemini-2.0-flash-thinking` and not the separate `gemini-2.0-flash-lite`
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash — Google's "most balanced multimodal model with great
  performance across all tasks", built for the era of agents.
- **Short description:** The 2.0-generation workhorse: native tool use, 1M context and
  native multimodal input at Flash price. **Deprecated and shut down on 2026-06-01** —
  Google directs users to `gemini-3.1-flash-lite` (Vertex lifecycle table) and
  Artificial Analysis suggests Gemini 2.5 Flash (non-reasoning). Tracked here as a
  historical reference point only; there is nothing to call.
- **Provider / access:** Google AI Studio / Gemini Developer API
  (`generativelanguage.googleapis.com`) and Vertex AI on `gemini-2.0-flash`. **All
  endpoints are now closed** — `gemini-2.0-flash`, `gemini-2.0-flash-001` and
  `gemini-2.0-flash-exp` are all listed as shut down. No OpenCode Zen ID ever existed.
- **Release / knowledge:** Experimental **2024-12-11**, generally available
  **2025-02-05** (Google Developers Blog). Knowledge cutoff **June 2024** (AA) — over
  two years stale.
- **IDs:** `gemini-2.0-flash` (GA), `gemini-2.0-flash-001` (pinned), both retired.
  Distinct from `gemini-2.0-flash-lite` (cost-optimized sibling, also retired
  2026-06-01) and `gemini-2.0-flash-thinking` (separate reasoning model).
- **Context window:** **1,048,576 tokens** (1M) input, per the Gemini API model page
  and AA. First-party documented; no max-output figure is published for the retired
  endpoint.
- **Modalities:** text, image, **audio/speech** and video input; text and image output
  (AA technical specs). Reasoning: **no** for this variant — direct responses without
  extended chain-of-thought (a separate `-thinking` variant exists). Native tool use,
  function calling, code execution, caching, grounding with Google Search and Google
  Maps, structured outputs: supported at launch. Live API: supported. File search, URL
  context, tuning: not available.
- **Pricing (as of 2026-09-27 — historical, model is closed):** Google AI Studio
  **$0.10 in / $0.40 out per 1M** (text/image/video input), audio input $0.70; context
  caching $0.025 per 1M; Vertex AI charged more at **$0.15 in / $0.60 out** with batch
  at half. A free tier existed, with the standard Google caveat that free-tier data was
  used to improve Google's products; paid-tier data was not.
- **Architecture:** proprietary; parameter count not disclosed. Google describes it as
  a single dense Flash-tier model, and at launch it defaulted to a concise output style
  (cheaper, and improvable by prompting for verbosity) with no short/long context price
  split — a single price per input type, unlike Gemini 1.5.

### Raw benchmarks found

**Source-quality warning:** the per-benchmark figures below come from a single
aggregated third-party table (AI Flash Report, aiflashreport.com) that does not break
out a source or harness per row. They are internally plausible and consistent with
Google's published launch claims, but they are **not** independently verified per row.
The AA Intelligence Index and the lifecycle facts are first-party or independently
measured and carry more weight.

Agent / tool use:

- TAU2-bench: **29.5%** (AI Flash Report aggregate; harness not stated)
- TerminalBench-Hard: **3.8%** (AI Flash Report aggregate) — note this is the *Hard*
  variant, not Terminal-Bench 2.0/2.1
- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **63.6%** (AI Flash Report aggregate)
- HLE: **4.7%** (AI Flash Report aggregate)
- MATH-500: **91.1%** (AI Flash Report aggregate)
- AIME 2025: **30.0%** (AI Flash Report aggregate)
- MMLU-Pro: **78.2%** (AI Flash Report aggregate)
- IF-Bench (instruction following): **40.2%** (AI Flash Report aggregate)
- Artificial Analysis Intelligence Index v4.3.2: **9** (estimated), **#103 of 2999**,
  above the 7 median among comparable **non-reasoning** models in the same price class
  (AA, read 2026-09-27). AA benchmarks only the default 10k input workload for
  deprecated models
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- HumanEval: **90.7%** (AI Flash Report aggregate) — a 2021-era benchmark that was
  already near saturation for frontier models, so it carries little signal
- LiveCodeBench: **21.0%**; LiveCodeBench (reasoning setting): **28.3%** (AI Flash
  Report aggregate)
- SciCode: **34.0%** (AI Flash Report aggregate)
- SWE-bench Verified / SWE-Pro: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- no long-context retrieval reported. The 1M window is first-party documented, but no
  MRCR / RULER / GraphWalks / recall-at-length figure was ever published for
  `gemini-2.0-flash`, and the model is now closed so no one can measure it.

### Normalized scores (1–100)

- **Tool use: 46/100.** τ²-bench 29.5% is above the methodology's low anchor (Tau3
  10–25%) but TerminalBench-Hard 3.8% is far below its 45–60% anchor, and both numbers
  come from an unsourced aggregate row. Native tool use was a real launch feature, so
  this is not an evidence-floor score — it is a genuinely weak agentic result, placed
  just under the methodology's mid band (50–70).
- **Reasoning: 60/100.** GPQA Diamond 63.6% and HLE 4.7% both sit in the methodology's
  mid band (GPQA 60–80%, HLE <10% → 55–65), with MATH-500 91.1% and MMLU-Pro 78.2%
  showing solid non-reasoning academic performance and AIME 2025 30.0% showing where it
  stops. The AA Index of 9 is above its own class median (7) but is not a
  frontier-comparable figure, and the variant has **no reasoning mode at all** — the
  separate `-thinking` model is where 2.0's reasoning actually lived. Ceiling is capped
  by a June 2024 knowledge cutoff.
- **Context window: 95/100.** 1,048,576 tokens puts this in the methodology's ≥1M band
  (95–100). Not 100: that requires ≥98% retrieval measured at 512K+, and no retrieval
  benchmark was ever published for this model.
- **Multimodal: 92/100.** Text, image, **speech/audio** and video input plus text and
  image output is squarely in the methodology's top band (90–100) — audio input *or*
  any non-text output qualifies. Not at the ceiling because output is text/image only
  and the Live API was still maturing at GA.
- **Coding: 42/100.** LiveCodeBench 21.0% (28.3% with reasoning) and SciCode 34.0% are
  well below the methodology's mid band, whose own worked example (LiveCode 80% with
  SciCode <40%) still lands at 65–75. HumanEval 90.7% is ignored for scoring purposes
  because the benchmark was saturated for frontier models in 2024. Coding was not this
  model's purpose, and 2.0 Pro / 2.5 Pro are where Google put code strength.
- **Cost efficiency: 95/100.** Scored on the **historical** Google AI Studio price
  ($0.10 in / $0.40 out) against the methodology's ~$0.10/$0.20 anchor of 97–99, minus
  the higher output rate and the audio input premium. The decisive caveat: **this model
  cannot be bought at any price** — it was shut down on 2026-06-01, so the score
  describes what it *was*, and no amount of budget changes today's answer, which is to
  use `gemini-2.5-flash` or `gemini-3.1-flash-lite`.
- **Overall Score: 67/100.** (46 + 60 + 95 + 92 + 42) / 5 = 67.0. Best fit: a
  historical reference row explaining why 1M-context omni models became table stakes —
  this was the generation that put native tool use and audio/video input at $0.10/$0.40.
  No operational fit: the model is closed. Read the Overall as a description of the
  2.0 generation's shape (exceptional Context and Multimodal, weak Coding and Tool
  use), not as a recommendation.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-27
- Method: public internet research (Google's Gemini API model page and the Feb 2025
  Gemini 2.0 developer blog, Google Cloud's model versions and lifecycle table, the
  Artificial Analysis model page, and a third-party aggregated benchmark table).
  Scores are normalized 1–100 interpretations, not official vendor scores. The
  per-benchmark figures are flagged as single-source aggregates; lifecycle, pricing and
  AA figures are first-party or independently measured.
- Future sources: add a new file next to this one, e.g. `GLM_5.3.md`, using the same
  headings.
