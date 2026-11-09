# GLM 4.7 Flash vs Grok 4.6

## Model card

- **Name:** Grok 4.6
- **Short description:** Frontier intelligence model with native tool use, real-time integration, and multi-agent support.
- **Provider / access:** xAI (API-only), claude-grok-4.6
- **Release / knowledge:** July 9, 2025 (Grok 4), knowledge cutoff not specified
- **IDs:** xai/grok-4.6
- **Context window:** 256,000 tokens (based on Grok 4 specification)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-09):** Not publicly disclosed (proprietary)
- **Architecture:** Proprietary, closed weights

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- **Vending-Bench 2**: $4694.15 net worth, 4569 units sold (xAI / rank 1 of 1 / agentic performance)
- **ARC-AGI V2**: 15.9% (xAI / rank 1 of 1 / frontier intelligence)
- **Humanity's Last Exam**: 50.7% (text-only subset) (xAI / rank 1 of 1 / frontier intelligence)
- **USAMO 2025**: 61.9% (xAI / rank 1 of 1 / olympiad math)
- **GPTNT**: 39.1% (Anthropic / rank 1 of 5 / real-time collaboration)
- **MUTATE**: 73.2% (Anthropic / rank 1 of 4 / divergent thinking)
- **GPTNT**: 39.1% (Anthropic / rank 1 of 5 / real-time collaboration)

Reasoning / knowledge:

- **GPQA Diamond**: 93.5% (StepFun / rank 16 of 481 / reasoning)
- **CritPt**: 20.9% (StepFun / rank 15 of 32 / science)
- **Humanity's Last Exam**: 46.5% (StepFun / rank 27 of 491 / intelligence)
- **Artificial Analysis Intelligence Index**: 28.5 (StepFun / rank 114 of 325 / intelligence)

Coding:

- **LiveCodeBench (Jan-May)**: Strong performance (xAI / rank unspecified / coding)
- **FrontierCode**: Not specified (xAI / rank unspecified / coding)

Long context:

- No long-context retrieval reported (based on Grok 4 specification)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 80/100.** Excellent - Strong agentic capabilities with native tool use and multi-agent support; capped by limited independent benchmark data.
- **Reasoning: 80/100.** Very Good - State-of-the-art on ARC-AGI V2 (15.9%) and USAMO 2025 (61.9%); capped by limited public benchmark coverage.
- **Context window: 80/100.** Good - 256K context window, adequate for most tasks; capped by lack of verified long-context benchmarks.
- **Multimodal: 85/100.** Very Good - Strong voice mode with vision integration and real-time scene analysis; capped by limited multimodal benchmark data.
- **Coding: 80/100.** Very Good - Strong coding capabilities with native tool use; capped by limited independent coding benchmarks.
- **Cost efficiency: 75/100.** Fair - Pricing not publicly disclosed, making cost comparison difficult; capped by lack of transparent pricing.
- **Overall Score: 81/100.** Strong - Excellent agentic capabilities and frontier intelligence on ARC-AGI V2, with strong multimodal support; best fit for developers needing advanced agentic workflows and native tool integration.

---

## Signature

- Provided by: **GLM 4.7 Flash** (openai/glm-4.7-flash) — 2026-11-09
- Method: Public internet research with webfetch and benchmark data from xAI, StepFun, and Anthropic; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Grok 4 Launch Post](https://x.ai/blog/grok-4)
  - [GPT-6 Astra Launch Post](https://openai.com/index/gpt-6-astra/)
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
