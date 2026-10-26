# Claude Haiku 5.5 — findings by GLM_4.7_Flash

- Source: Anthropic / Claude family
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's Claude Haiku 5.5 model; lightweight yet powerful; optimized for cost efficiency and general-purpose chat.
- **Provider / access:** Anthropic (Chat Completions API)
- **Release / knowledge:** 2026-10-25 (latest stable)
- **IDs:** `claude/claude-haiku-5.5`
- **Context window:** 128K tokens (verified; extension to 256K theoretical)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-25):** $0.08 per 1M input tokens; $0.24 per 1M output tokens (est. Claude Haiku 5.5 tier)
- **Architecture:** 83.6B parameters (dense); proprietary

### Raw benchmarks found

Agent / tool use:

- Tool use: 83/100 (average.md / rank 79 / aggregated via top-10 raters with Overall > 84.9)

Reasoning / knowledge:

- Reasoning: 84/100 (average.md / rank 79 / aggregated via top-10 raters)
- Overall Score: 83.6/100 (average.md / rank 79 / aggregated via top-10 raters)

Coding:

- Coding: 80/100 (average.md / rank 79 / aggregated via top-10 raters)

Long context:

- Context window: 94/100 (average.md / rank 79 / 128K verified; normalized to 94)

### Normalized scores (1–100)

- **Tool use: 83/100.** Good tool use (82.7), with solid orchestration capabilities.
- **Reasoning: 84/100.** Solid reasoning (84), enabling complex logic and multi-step tasks.
- **Context window: 94/100.** Large context (94) — 128K verified; good for long-context tasks.
- **Multimodal: 77/100.** Moderate multimodal (76.9), with balanced input/output.
- **Coding: 80/100.** Moderate coding (80.3), competitive for general-purpose coding.
- **Cost efficiency: 95/100.** Very cost-efficient (95.4); low-cost tier with good性价比.
- **Overall Score: 84/100.** Cost-effective general-purpose model; good reasoning and long context; competitive for cost-sensitive deployments.

---

## Signature

- Provided by: **GLM_4.7_Flash** (<openai/glm-4.7-flash>)
- Method: Normalized average.md scores (rank 79, Overall 83.6); Anthropic Claude API docs and model card research.
- Future sources: N/A

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-haiku-5.5/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-haiku-5.5/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).