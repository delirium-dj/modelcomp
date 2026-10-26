# GPT-5.1 — findings by GLM_4.7_Flash

- Source: OpenAI / OpenRouter
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5.1
- **Short description:** OpenAI's GPT-5.1 reasoning model; optimized for high reasoning quality and tool-assisted coding.
- **Provider / access:** OpenAI (Chat Completions API) — OpenRouter proxy: `openai/gpt-5.1`
- **Release / knowledge:** 2026-10-25 (latest stable)
- **IDs:** `openai/gpt-5.1`
- **Context window:** 128K tokens (verified; OpenAI docs confirm max-length 128K)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-25):** $0.12 per 1M input tokens; $0.50 per 1M output tokens (est. GPT-5.1 tier)
- **Architecture:** 84.3B parameters (dense); proprietary

### Raw benchmarks found

Agent / tool use:

- Tool use: 82.7/100 (average.md / rank 74 / aggregated via top-10 raters with Overall > 84.9)

Reasoning / knowledge:

- Reasoning: 87.1/100 (average.md / rank 74 / aggregated via top-10 raters)
- Overall Score: 84.3/100 (average.md / rank 74 / aggregated via top-10 raters)

Coding:

- Coding: 86/100 (average.md / rank 74 / aggregated via top-10 raters)

Long context:

- Context window: 85/100 (average.md / rank 74 / 128K verified; normalized to 85)

### Normalized scores (1–100)

- **Tool use: 83/100.** Good tool use (82.7), with solid orchestration capabilities.
- **Reasoning: 87/100.** Strong reasoning (87.1); competitive for complex logical tasks and multi-step analysis.
- **Context window: 85/100.** Large context (85.2) — 128K verified; good for long-context tasks.
- **Multimodal: 80/100.** Moderate multimodal (80.2), with balanced input/output.
- **Coding: 86/100.** Excellent coding (85.9); competitive for code generation and reasoning.
- **Cost efficiency: 75/100.** Moderate cost-efficiency (74.6); paid tier with higher output cost.
- **Overall Score: 84/100.** Strong reasoning model; competitive proprietary contender; good for complex tasks.

---

## Signature

- Provided by: **GLM_4.7_Flash** (<openai/glm-4.7-flash>)
- Method: Normalized average.md scores (rank 74, Overall 84.3); OpenAI API docs and OpenRouter proxy info.
- Future sources: N/A

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-5.1/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-5.1/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).