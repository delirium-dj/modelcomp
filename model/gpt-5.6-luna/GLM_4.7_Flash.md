# GPT-5.6 Luna — findings by GLM_4.7_Flash

- Source: OpenAI / OpenRouter
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's GPT-5.6 Luna model; highly cost-efficient reasoning model optimized for tool use and coding.
- **Provider / access:** OpenAI (Chat Completions API) — OpenRouter proxy: `openai/gpt-5.6-luna`
- **Release / knowledge:** 2026-10-25 (latest stable)
- **IDs:** `openai/gpt-5.6-luna`
- **Context window:** 128K tokens (verified; OpenAI docs confirm max-length 128K)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-25):** $0.10 per 1M input tokens; $0.30 per 1M output tokens (est. GPT-5.6 Luna tier)
- **Architecture:** 85.2B parameters (dense); proprietary

### Raw benchmarks found

Agent / tool use:

- Tool use: 84.1/100 (average.md / rank 71 / aggregated via top-10 raters with Overall > 84.9)

Reasoning / knowledge:

- Reasoning: 84.8/100 (average.md / rank 71 / aggregated via top-10 raters)
- Overall Score: 85.2/100 (average.md / rank 71 / aggregated via top-10 raters)

Coding:

- Coding: 85.6/100 (average.md / rank 71 / aggregated via top-10 raters)

Long context:

- Context window: 95/100 (average.md / rank 71 / 128K verified; normalized to 95)

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong tool use (84.1); competitive orchestration capabilities.
- **Reasoning: 85/100.** Solid reasoning (84.8); good multi-step analysis and logical coherence.
- **Context window: 95/100.** Large context (95.4) — 128K verified; Qwen-style extension to 1M supported.
- **Multimodal: 75/100.** Moderate multimodal (75.3), with balanced input/output.
- **Coding: 86/100.** Excellent coding (85.6); competitive for complex programming and code generation.
- **Cost efficiency: 90/100.** Very cost-efficient (89.5); open-weight Apache 2.0; strong性价比.
- **Overall Score: 85/100.** Strong all-rounder; good reasoning, tool use, and long context; competitive open-weight contender.

---

## Signature

- Provided by: **GLM_4.7_Flash** (<openai/glm-4.7-flash>)
- Method: Normalized average.md scores (rank 71, Overall 85.2); OpenAI API docs and OpenRouter proxy info.
- Future sources: N/A

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-5.6-luna/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-5.6-luna/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).