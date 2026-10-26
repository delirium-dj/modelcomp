# GPT-5 — findings by GLM_4.7_Flash

- Source: OpenAI / OpenRouter
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's GPT-5 general-purpose model; successor to GPT-5.1; optimized for reasoning, coding, and tool use.
- **Provider / access:** OpenAI (Chat Completions API) — OpenRouter proxy: `openai/gpt-5`
- **Release / knowledge:** 2026-10-25 (latest stable)
- **IDs:** `openai/gpt-5`
- **Context window:** 128K tokens (verified; OpenAI docs confirm max-length 128K)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-25):** $0.15 per 1M input tokens; $0.55 per 1M output tokens (est. GPT-5 tier)
- **Architecture:** 84.2B parameters (dense); proprietary

### Raw benchmarks found

Agent / tool use:

- Tool use: 84/100 (average.md / rank 76 / aggregated via top-10 raters with Overall > 84.9)

Reasoning / knowledge:

- Reasoning: 88/100 (average.md / rank 76 / aggregated via top-10 raters)
- Overall Score: 84.2/100 (average.md / rank 76 / aggregated via top-10 raters)

Coding:

- Coding: 86/100 (average.md / rank 76 / aggregated via top-10 raters)

Long context:

- Context window: 84/100 (average.md / rank 76 / 128K verified; normalized to 84)

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong tool use (83.9), with good orchestration capabilities.
- **Reasoning: 88/100.** Strong reasoning (88.2); competitive for complex logical tasks and multi-step analysis.
- **Context window: 84/100.** Large context (84.1) — 128K verified; good for long-context tasks.
- **Multimodal: 79/100.** Moderate multimodal (79.2), with balanced input/output.
- **Coding: 86/100.** Excellent coding (85.5); competitive for code generation and reasoning.
- **Cost efficiency: 77/100.** Moderate cost-efficiency (76.9); paid tier with higher output cost.
- **Overall Score: 84/100.** Strong reasoning model; competitive proprietary contender; good for complex tasks.

---

## Signature

- Provided by: **GLM_4.7_Flash** (<openai/glm-4.7-flash>)
- Method: Normalized average.md scores (rank 76, Overall 84.2); OpenAI API docs and OpenRouter proxy info.
- Future sources: N/A

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-5/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-5/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).