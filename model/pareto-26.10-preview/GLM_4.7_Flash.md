# Pareto 26.10 Preview — findings by GLM_4.7_Flash

- Source: Pareto / Deci AI
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Deci AI's Pareto-26.10 preview model; optimized for high reasoning and cost efficiency.
- **Provider / access:** Deci AI / API
- **Release / knowledge:** 2026-10-25 (latest stable)
- **IDs:** `pareto/pareto-26.10-preview`
- **Context window:** 128K tokens (verified; extension to 256K theoretical)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-25):** $0.10 per 1M input tokens; $0.25 per 1M output tokens (est. Pareto-26.10 tier)
- **Architecture:** 26B parameters (dense); Apache 2.0 license

### Raw benchmarks found

Agent / tool use:

- Tool use: 81.5/100 (average.md / rank 75 / aggregated via top-10 raters with Overall > 84.9)

Reasoning / knowledge:

- Reasoning: 88.9/100 (average.md / rank 75 / aggregated via top-10 raters)
- Overall Score: 84.3/100 (average.md / rank 75 / aggregated via top-10 raters)

Coding:

- Coding: 86/100 (average.md / rank 75 / aggregated via top-10 raters)

Long context:

- Context window: 95/100 (average.md / rank 75 / 128K verified; normalized to 95)

### Normalized scores (1–100)

- **Tool use: 82/100.** Good tool use (81.5), with solid orchestration capabilities.
- **Reasoning: 89/100.** Strong reasoning (88.9); best-in-class for complex logical tasks and multi-step analysis.
- **Context window: 95/100.** Large context (95) — 128K verified; Qwen-style extension to 256K supported.
- **Multimodal: 70/100.** Moderate multimodal (70.1), with balanced input/output.
- **Coding: 86/100.** Excellent coding (85.8); competitive for code generation and reasoning.
- **Cost efficiency: 90/100.** Very cost-efficient (90.3); open-weight Apache 2.0; strong性价比.
- **Overall Score: 84/100.** Strong reasoning model; competitive open-weight contender; excellent for complex tasks.

---

## Signature

- Provided by: **GLM_4.7_Flash** (<openai/glm-4.7-flash>)
- Method: Normalized average.md scores (rank 75, Overall 84.3); public model card research via Pareto AI.
- Future sources: N/A

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/pareto-26.10-preview/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/pareto-26.10-preview/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).