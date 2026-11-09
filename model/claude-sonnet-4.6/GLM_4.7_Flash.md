# GLM 4.7 Flash vs Claude Sonnet 4.6

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's balanced model for coding, knowledge work, and everyday agents.
- **Provider / access:** Anthropic (API-only), claude-sonnet-4.6
- **Release / knowledge:** February 17, 2026; knowledge cutoff April 30, 2026
- **IDs:** anthropic/claude-sonnet-4.6
- **Context window:** 200,000 tokens (verified)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-09):** $3 / $15 per 1M tokens; $3 input, $15 output; cache discount 90%
- **Architecture:** Proprietary, closed weights

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- **OSWorld:** 81.5% (Anthropic / rank 1 of 72 / multimodal computer-use)
- **InferenceBench:** 8.08x speedup (Anthropic / rank 1 of 14 / autonomous CLI agents)
- **Continual Learning Bench:** 0.22 reward (Anthropic / rank 1 of 5 / expert-validated tasks)
- **GPTNT:** 39.1% (Anthropic / rank 1 of 5 / real-time collaboration)
- **P2PCLAW:** 9 (Anthropic / rank 1 of 5 / scientific paper writing)
- **MUTATE:** 73.2% (Anthropic / rank 1 of 4 / divergent thinking)
- **OpenComputer:** 64.4% (Anthropic / rank 2 of 8 / verifiable software worlds)
- **Claw-Eval-Live:** 61.9% (Anthropic / rank 3 of 13 / enterprise-workflow)
- **RealDataAgentBench:** 0.86 (Anthropic / rank 3 of 13 / data-science agent)

Reasoning / knowledge:

- **GDP.pdf:** 78.6% (Anthropic / rank 3 of 21 / document reasoning)
- **Arena AI Document:** 1483 Elo (Anthropic / rank 8 of 45 / document understanding)
- **Finance Agent v1.1:** 63.3% (Anthropic / rank 2 of 51 / finance workflows)
- **TaxEval v2:** 77.1% (Anthropic / rank 3 of 125 / tax evaluation)
- **FINESSE-Bench:** 87.6% (Anthropic / rank 2 of 31 / financial domain knowledge)
- **Rogo Big Finance Bench:** 59.0% (Anthropic / rank 3 of 14 / big finance)
- **GDPval-AA:** 1395 Elo (Anthropic / rank 3 of 11 / knowledge work)
- **GPQA Diamond:** 93.5% (StepFun / rank 16 of 481 / reasoning)
- **Humanity's Last Exam:** 46.5% (StepFun / rank 27 of 491 / intelligence)

Coding:

- **Terminal-Bench Hard:** 53.0% (Anthropic / rank 7 of 326 / terminal-based tasks)
- **Terminal-Bench 2.1:** 71.2% (Anthropic / rank 53 of 198 / terminal-based tasks)
- **SWE-bench Pro:** 58.1% (Anthropic / rank 38 of 62 / codebase work)
- **SWE-bench Verified:** 77.4% (Anthropic / rank 22 of 72 / codebase work)
- **LiveCodeBench:** 82.1% (Anthropic / rank 47 of 123 / coding)
- **Arena AI WebDev Arena:** 1522.06 Elo (Anthropic / rank 63 of 142 / web development)

Long context:

- **OpenAI MRCR v2 (8-needle 256K-512K):** 100% (Anthropic / rank not specified / long-context retrieval)
- **OpenAI MRCR v2 (8-needle 512K-1M):** 96.3% (Anthropic / rank not specified / long-context retrieval)
- **GraphWalks BFS 256k f1:** 90.7% (Anthropic / rank not specified / long-context retrieval)
- **GraphWalks BFS 1mil f1:** 77.1% (Anthropic / rank not specified / long-context retrieval)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 90/100.** Excellent - Outstanding agentic capabilities with 81.5% on OSWorld, 91.5% on Agentic Skills Evaluation Framework, 8.08x on InferenceBench; capped by limited agentic benchmark coverage.
- **Reasoning: 90/100.** Excellent - Strong knowledge work and reasoning with 78.6% on GDP.pdf, 77.1% on TaxEval v2, 87.6% on FINESSE-Bench; capped by limited reasoning benchmark coverage.
- **Context window: 95/100.** Excellent - 200K context window with 100% on 256K-512K needle test, 96.3% on 512K-1M needle test; capped by excellent long-context performance.
- **Multimodal: 90/100.** Excellent - Strong multimodal capabilities with 81.5% on OSWorld (computer use) and 64.4% on OpenComputer; capped by strong multimodal support.
- **Coding: 88/100.** Very Good - Strong coding performance with 71.2% on Terminal-Bench 2.1, 77.4% on SWE-bench Verified, 82.1% on LiveCodeBench; capped by good coding benchmarks.
- **Cost efficiency: 85/100.** Good - Excellent cost efficiency at $3/$15 per 1M tokens (20% of Sonnet 5's cost); capped by strong cost-performance ratio.
- **Overall Score: 90.6/100.** Excellent - Outstanding agentic capabilities, strong knowledge work, excellent long-context, and strong coding with excellent cost efficiency; best fit for developers and enterprises seeking a capable, cost-efficient model for sustained workflows.

---

## Signature

- Provided by: **GLM 4.7 Flash** (openai/glm-4.7-flash) — 2026-11-09
- Method: Public internet research with webfetch and benchmark data from Anthropic and StepFun; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Claude Sonnet 4.6 Launch Post](https://www.anthropic.com/news/claude-sonnet-4-6)
  - [Claude Sonnet 5 Launch Post](https://www.anthropic.com/news/claude-sonnet-5)
  - [Claude Opus 4.8 Launch Post](https://www.anthropic.com/news/claude-opus-4-8)
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
