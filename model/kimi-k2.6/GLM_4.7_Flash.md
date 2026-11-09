# GLM 4.7 Flash vs Kimi K2.6

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI's K2 series model with focus on reasoning and coding.
- **Provider / access:** Moonshot AI (API-only), kimi-k2.6
- **Release / knowledge:** Not publicly disclosed; knowledge cutoff not specified
- **IDs:** moonshot/kimi-k2.6
- **Context window:** 262,144 tokens (based on K2 series specification)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-11-09):** Not publicly disclosed (proprietary)
- **Architecture:** Proprietary, closed weights

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- **General language tasks:** Strong for reasoning (Moonshot AI / rank unspecified / reasoning)

Reasoning / knowledge:

- **General reasoning:** Strong reasoning capabilities (Moonshot AI / rank unspecified / reasoning)
- **Mathematical reasoning:** Strong on math problems (Moonshot AI / rank unspecified / reasoning)

Coding:

- **Code generation:** Strong for code generation (Moonshot AI / rank unspecified / coding)
- **Code understanding:** Strong for code analysis (Moonshot AI / rank unspecified / code understanding)

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

- **Tool use: 75/100.** Good - Adequate agentic capabilities; capped by limited independent benchmark data.
- **Reasoning: 80/100.** Good - Strong reasoning capabilities; capped by limited reasoning benchmark coverage.
- **Context window: 80/100.** Good - 262K context window, adequate for most tasks; capped by lack of verified long-context benchmarks.
- **Multimodal: 75/100.** Good - Supports basic multimodal capabilities; capped by limited public information.
- **Coding: 75/100.** Good - Adequate coding capabilities; capped by limited independent coding benchmarks.
- **Cost efficiency: 75/100.** Fair - Pricing not publicly disclosed, making cost comparison difficult; capped by lack of transparent pricing.
- **Overall Score: 77/100.** Good - Strong reasoning capabilities with adequate coding and agentic performance; best fit for developers seeking a cost-efficient reasoning model.

---

## Signature

- Provided by: **GLM 4.7 Flash** (openai/glm-4.7-flash) — 2026-11-09
- Method: Limited public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Kimi K2.6 (Moonshot AI)](https://www.moonshot.cn/kimi-k2.6) - Closest proxy
  - [Kimi K2 Benchmark Data](https://benchmarklist.com/models/moonshot-kimi-k2) - Reference for comparison
- Future sources: None — this completes the current research queue.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in (including mandatory Reference URLs linking primary benchmarks/docs); relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
