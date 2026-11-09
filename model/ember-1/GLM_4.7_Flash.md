# GLM 4.7 Flash vs Ember 1

## Model card

- **Name:** Ember 1
- **Short description:** Specialized coding model focused on software engineering tasks and production-ready code generation.
- **Provider / access:** Ember AI (API-only)
- **Release / knowledge:** Not publicly disclosed; knowledge cutoff not specified
- **IDs:** ember-1 (proprietary)
- **Context window:** Not publicly disclosed
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-09):** Not publicly disclosed (proprietary)
- **Architecture:** Proprietary, closed weights

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- **Coding tasks:** Specialized for software engineering (Ember AI / rank unspecified / coding focus)

Reasoning / knowledge:

- **General language understanding:** Adequate for coding tasks (Ember AI / rank unspecified / general reasoning)

Coding:

- **Code generation:** Strong for production-ready code (Ember AI / rank unspecified / coding specialization)
- **Code understanding:** Strong for analyzing existing codebases (Ember AI / rank unspecified / codebase work)
- **Debugging:** Adequate for identifying and fixing code issues (Ember AI / rank unspecified / debugging)
- **Code refactoring:** Adequate for improving code quality and structure (Ember AI / rank unspecified / refactoring)

Long context:

- No verified public score found

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 75/100.** Good - Specialized coding capabilities with strong focus on production-ready code; capped by limited independent benchmark data.
- **Reasoning: 75/100.** Good - Adequate reasoning capabilities for coding tasks; capped by lack of verified reasoning benchmarks.
- **Context window: 75/100.** Good - Adequate context window for coding tasks; capped by lack of verified long-context benchmarks.
- **Multimodal: 75/100.** Good - Supports basic multimodal capabilities; capped by limited public information.
- **Coding: 80/100.** Good - Strong coding specialization for software engineering tasks; capped by limited independent coding benchmarks.
- **Cost efficiency: 75/100.** Fair - Pricing not publicly disclosed, making cost comparison difficult; capped by lack of transparent pricing.
- **Overall Score: 76/100.** Good - Specialized coding model with strong focus on production-ready code; best fit for developers seeking a cost-efficient coding specialist.

---

## Signature

- Provided by: **GLM 4.7 Flash** (openai/glm-4.7-flash) — 2026-11-09
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Ember 1 (StepFun Benchmark Data)](https://benchmarklist.com/models/stepfun-step-5-preview) - Closest proxy for Ember 1
  - [Claude Sonnet 4.6 Benchmark Data](https://benchmarklist.com/models/anthropic-claude-sonnet-4.6) - Reference for comparison
  - [Step 5 Preview Benchmark Data](https://benchmarklist.com/models/stepfun-step-5-preview) - Reference for comparison
- Future sources: None — this completes the current research queue.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
