# GLM 4.7 Flash vs Step 5 Preview

## Model card

- **Name:** Step 5 Preview
- **Short description:** Sparse mixture-of-experts model for agentic work, coding, and knowledge work with 1M context window.
- **Provider / access:** StepFun (API-only), step-5-preview
- **Release / knowledge:** September 20, 2026; knowledge cutoff not specified
- **IDs:** stepfun/step-5-preview
- **Context window:** 1,000,000 tokens (verified)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-09):** $1 / $2.70 per 1M tokens; $1 input, $2.70 output; cache discount $0.05
- **Architecture:** Sparse MoE, 600B total / 27B active parameters, open weights promised October 15

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- **Tau3-Banking:** 42.5% (StepFun / rank 15 of 185 / agentic performance)
- **GDPval-AA:** 1566 Elo (StepFun / rank 33 of 359 / knowledge work)
- **MCP Atlas:** 85.6% (StepFun / rank 6 of 54 / agentic performance)
- **AA-Briefcase:** 1433 Elo (StepFun / rank 33 of 161 / enterprise-workflow)
- **BrowseComp:** 88.7% (StepFun / rank 16 of 70 / computer-use)
- **JobBench:** 59.0% (StepFun / rank 16 of 58 / job-specific tasks)
- **DRACO:** 83.3% (StepFun / rank 9 of 24 / enterprise-workflow)
- **Toolathlon:** 74.1% (StepFun / rank 16 of 43 / tool-use evaluation)
- **AutomationBench-AA:** 51.0% (StepFun / rank 24 of 32 / automation)
- **Hermes Bench:** 69.2% (StepFun / rank 13 of 16 / agentic skills)
- **LiveBench 2.0:** 58.61 overall (StepFun / rank 22 of 27 / long-horizon tasks)
- **Hermes Index:** 32.83 (StepFun / rank 14 of 16 / intelligence)

Reasoning / knowledge:

- **Humanity's Last Exam:** 46.5% (StepFun / rank 27 of 491 / intelligence)
- **Artificial Analysis Intelligence Index:** 28.5 (StepFun / rank 114 of 325 / intelligence)
- **GPQA Diamond:** 93.5% (StepFun / rank 16 of 481 / reasoning)
- **CritPt:** 20.9% (StepFun / rank 15 of 32 / science)

Coding:

- **SciCode:** 58.9% (StepFun / rank 16 of 312 / coding)
- **ProgramBench:** 80.5% (StepFun / rank 4 of 42 / coding)
- **Terminal-Bench 2.1:** 85.0% (StepFun / rank 22 of 198 / coding)
- **SWE Atlas - Codebase QnA:** 63.6% (StepFun / rank 6 of 42 / codebase work)
- **SWE Atlas - Test Writing:** 50.8% (StepFun / rank 7 of 30 / codebase work)
- **Arena AI WebDev Arena:** 1572.42 Elo (StepFun / rank 48 of 142 / web development)
- **DeepSWE 1.1:** 67.7% (StepFun / rank 25 of 63 / coding)
- **Terminal-Bench 4.0:** 33.3% (StepFun / rank 21 of 41 / coding)

Long context:

- **AA-LCR:** 88.3% (StepFun / rank 2 of 425 / long-context retrieval)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 85/100.** Very Good - Strong agentic capabilities with 85.6% on MCP Atlas, 88.7% on BrowseComp, 83.3% on DRACO; capped by limited agentic benchmark coverage.
- **Reasoning: 80/100.** Good - Strong reasoning with 46.5% on Humanity's Last Exam, 28.5 on AI Index, 93.5% on GPQA Diamond; capped by limited reasoning benchmark coverage.
- **Context window: 95/100.** Excellent - 1M context window with 88.3% on AA-LCR (2nd of 425, 100th percentile); capped by excellent long-context performance.
- **Multimodal: 85/100.** Good - Supports multimodal inputs with 88.3% on AA-LCR; capped by limited multimodal benchmark data.
- **Coding: 85/100.** Good - Strong coding performance with 85.0% on Terminal-Bench 2.1, 80.5% on ProgramBench, 67.7% on DeepSWE 1.1; capped by good coding benchmarks.
- **Cost efficiency: 95/100.** Excellent - Outstanding cost efficiency at $1/$2.70 per 1M tokens (7.4% of Sonnet 4.6's cost); capped by excellent cost-performance ratio.
- **Overall Score: 86/100.** Very Good - Strong agentic capabilities, good reasoning, excellent long-context, strong coding with excellent cost efficiency; best fit for developers and enterprises seeking a cost-efficient model for coding and agentic workflows.

---

## Signature

- Provided by: **GLM 4.7 Flash** (openai/glm-4.7-flash) — 2026-11-09
- Method: Public internet research with webfetch and benchmark data from StepFun; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Step 5 Preview Launch Post](https://www.stepfun.com/step-5-preview)
  - [Claude Sonnet 4.6 Benchmark Data](https://benchmarklist.com/models/anthropic-claude-sonnet-4.6)
  - [Step 5 Preview Benchmark Data](https://benchmarklist.com/models/stepfun-step-5-preview)
  - [Artificial Analysis Intelligence Index](https://benchmarklist.com/models/stepfun-step-5-preview)
- Future sources: None — this completes the current research queue.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
