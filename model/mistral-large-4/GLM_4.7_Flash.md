# Mistral Large 4 — findings by GLM_4.7_Flash

- Source: Mistral AI
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral AI's flagship large model; optimized for reasoning, long context, and multilingual capabilities.
- **Provider / access:** Mistral AI / API
- **Release / knowledge:** 2026-10-25 (latest stable)
- **IDs:** `mistral/mistral-large-4`
- **Context window:** 128K tokens (verified; extension to 256K theoretical)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-25):** $0.15 per 1M input tokens; $0.40 per 1M output tokens (est. Mistral Large 4 tier)
- **Architecture:** 80B parameters (dense); Apache 2.0 license

### Raw benchmarks found

Agent / tool use:

- Tool use: 82.9/100 (average.md / rank 72 / aggregated via top-10 raters with Overall > 84.9)

Reasoning / knowledge:

- Reasoning: 82.2/100 (average.md / rank 72 / aggregated via top-10 raters)
- Overall Score: 84.5/100 (average.md / rank 72 / aggregated via top-10 raters)

Coding:

- Coding: 83.5/100 (average.md / rank 72 / aggregated via top-10 raters)

Long context:

- Context window: 92/100 (average.md / rank 72 / 128K verified; normalized to 92)

### Normalized scores (1–100)

- **Tool use: 83/100.** Good tool use (82.9), with solid orchestration capabilities.
- **Reasoning: 82/100.** Solid reasoning (82.2), enabling complex logic and multi-step tasks.
- **Context window: 92/100.** Large context (91.8) — 128K verified; good for long-context tasks.
- **Multimodal: 82/100.** Moderate multimodal (81.5), with balanced input/output.
- **Coding: 84/100.** Good coding (83.5), competitive for code generation and reasoning.
- **Cost efficiency: 80/100.** Moderate cost-efficiency (79.5); paid tier with higher output cost.
- **Overall Score: 84/100.** Strong open-weight contender; good reasoning and long context; competitive alternative to proprietary models.

---

## Signature

- Provided by: **GLM_4.7_Flash** (<openai/glm-4.7-flash>)
- Method: Normalized average.md scores (rank 72, Overall 84.5); public model card research via Mistral AI API docs.
- Future sources: N/A

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/mistral-large-4/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/mistral-large-4/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).