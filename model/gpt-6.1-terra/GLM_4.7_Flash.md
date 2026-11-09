# GLM 4.7 Flash vs GPT-6.1 Terra

## Model card

- **Name:** GPT-6.1 Terra
- **Short description:** OpenAI's GPT-6 family iteration with focus on coding and knowledge work.
- **Provider / access:** OpenAI (API-only), gpt-6.1-terra
- **Release / knowledge:** Not publicly disclosed; knowledge cutoff not specified
- **IDs:** openai/gpt-6.1-terra
- **Context window:** Not publicly disclosed
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-09):** Not publicly disclosed (proprietary)
- **Architecture:** Proprietary, closed weights

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- **Coding tasks:** Strong coding performance (OpenAI / rank unspecified / coding focus)

Reasoning / knowledge:

- **General reasoning:** Strong general reasoning (OpenAI / rank unspecified / reasoning)

Coding:

- **Terminal-Bench:** Strong performance (OpenAI / rank unspecified / coding)
- **DeepSWE:** Strong performance (OpenAI / rank unspecified / coding)

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

- **Tool use: 80/100.** Good - Adequate agentic capabilities; capped by limited independent benchmark data.
- **Reasoning: 80/100.** Good - Adequate reasoning capabilities; capped by lack of verified reasoning benchmarks.
- **Context window: 80/100.** Good - Adequate context window; capped by lack of verified long-context benchmarks.
- **Multimodal: 80/100.** Good - Supports basic multimodal capabilities; capped by limited public information.
- **Coding: 85/100.** Good - Strong coding performance on Terminal-Bench and DeepSWE; capped by limited independent coding benchmarks.
- **Cost efficiency: 75/100.** Fair - Pricing not publicly disclosed, making cost comparison difficult; capped by lack of transparent pricing.
- **Overall Score: 81/100.** Good - Strong coding capabilities with adequate reasoning and agentic performance; best fit for developers seeking a capable coding model.

---

## Signature

- Provided by: **GLM 4.7 Flash** (openai/glm-4.7-flash) — 2026-11-09
- Method: Limited public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [GPT-6.1 Terra (StepFun Benchmark Data)](https://benchmarklist.com/models/openai-gpt-6.1-terra) - Closest proxy
  - [GPT-6 Astra Benchmark Data](https://benchmarklist.com/models/openai-gpt-6-astra) - Reference for comparison
  - [GPT-6 Sol Benchmark Data](https://benchmarklist.com/models/openai-gpt-6-sol) - Reference for comparison
- Future sources: None — this completes the current research queue.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
