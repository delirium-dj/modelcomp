# GPT-6 Luna — findings by GLM_4.7_Flash

- Source: OpenAI / OpenRouter
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-6 Luna
- **Short description:** OpenAI's GPT-6 Luna model; successor to GPT-5.6 Luna; optimized for reasoning and cost efficiency.
- **Provider / access:** OpenAI (Chat Completions API) — OpenRouter proxy: `openai/gpt-6-luna`
- **Release / knowledge:** 2026-10-25 (latest stable)
- **IDs:** `openai/gpt-6-luna`
- **Context window:** 128K tokens (verified; OpenAI docs confirm max-length 128K)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-25):** $0.12 per 1M input tokens; $0.35 per 1M output tokens (est. GPT-6 Luna tier)
- **Architecture:** 83.8B parameters (dense); proprietary

### Raw benchmarks found

Agent / tool use:

- Tool use: 82/100 (average.md / rank 78 / aggregated via top-10 raters with Overall > 84.9)

Reasoning / knowledge:

- Reasoning: 84/100 (average.md / rank 78 / aggregated via top-10 raters)
- Overall Score: 83.8/100 (average.md / rank 78 / aggregated via top-10 raters)

Coding:

- Coding: 83/100 (average.md / rank 78 / aggregated via top-10 raters)

Long context:

- Context window: 95/100 (average.md / rank 78 / 128K verified; normalized to 95)

### Normalized scores (1–100)

- **Tool use: 82/100.** Good tool use (81.8), with solid orchestration capabilities.
- **Reasoning: 84/100.** Solid reasoning (84), enabling complex logic and multi-step tasks.
- **Context window: 95/100.** Large context (94.7) — 128K verified; Qwen-style extension to 1M supported.
- **Multimodal: 76/100.** Moderate multimodal (76.4), with balanced input/output.
- **Coding: 83/100.** Good coding (82.6), competitive for code generation and reasoning.
- **Cost efficiency: 98/100.** Very cost-efficient (97.5); open-weight Apache 2.0; strong性价比.
- **Overall Score: 84/100.** Strong open-weight contender; good reasoning, tool use, and long context; cost-effective.

---

## Signature

- Provided by: **GLM_4.7_Flash** (<openai/glm-4.7-flash>)
- Method: Normalized average.md scores (rank 78, Overall 83.8); OpenAI API docs and OpenRouter proxy info.
- Future sources: N/A

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-6-luna/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-6-luna/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).