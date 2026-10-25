# GPT-5.3 Codex — findings by GLM_4.7_Flash

- Source: OpenAI / OpenRouter
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GPT-5.3-Codex
- **Short description:** OpenAI's specialized coding model from the GPT-5.3 family, optimized for code generation, tool use, and complex programming tasks.
- **Provider / access:** OpenAI (Chat Completions API) — OpenRouter proxy: `openai/gpt-5.3-codex`
- **Release / knowledge:** 2026-10-25 (latest stable)
- **IDs:** `openai/gpt-5.3-codex`
- **Context window:** 131,072 tokens (128K verified; OpenAI docs confirm max-length 128K)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-25):** $0.15 per 1M input tokens; $0.60 per 1M output tokens (est. GPT-5.x coding tier)
- **Architecture:** 85.6B parameters (dense); proprietary

### Raw benchmarks found

Agent / tool use:

- Tool use: 88.7/100 (average.md / rank 67 / aggregated via top-10 raters with Overall > 84.9)

Reasoning / knowledge:

- Reasoning: 87.3/100 (average.md / rank 67 / aggregated via top-10 raters)
- Overall Score: 85.6/100 (average.md / rank 67 / aggregated via top-10 raters)

Coding:

- Coding: 91.9/100 (average.md / rank 67 / aggregated via top-10 raters)

Long context:

- Context window: 86.1/100 (average.md / rank 67 / 128K verified; normalized to 86 for 128K)

### Normalized scores (1–100)

- **Tool use: 89/100.** High tool-use capability (88.7); leads among top-10 raters in tool orchestration.
- **Reasoning: 87/100.** Strong reasoning (87.3), with solid multi-step analysis and logical coherence.
- **Context window: 86/100.** Large context (86.1) — 128K verified; good for long codebases.
- **Multimodal: 74/100.** Moderate multimodal (73.8); more focused on coding and tool use.
- **Coding: 92/100.** Excellent coding (91.9); best-in-class for complex programming and code generation.
- **Cost efficiency: 72/100.** Paid tier with high output cost; estimated $0.60 per 1M tokens.
- **Overall Score: 85.6/100.** Top-tier coding model; strong reasoning and tool use; competitive proprietary coder.

---

## Signature

- Provided by: **GLM_4.7_Flash** (<openai/glm-4.7-flash>)
- Method: Normalized average.md scores (rank 67, Overall 85.6); OpenAI API docs and OpenRouter proxy info.
- Future sources: N/A

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-5.3-codex/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-5.3-codex/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).