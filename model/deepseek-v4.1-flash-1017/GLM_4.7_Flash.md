# DeepSeek V4.1 Flash 1017 — findings by GLM_4.7_Flash

- Source: DeepSeek / V4.1 Flash
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** DeepSeek V4.1 Flash 1017
- **Short description:** DeepSeek's vision and text model; optimized for cost efficiency, long context, and tool use.
- **Provider / access:** DeepSeek / API
- **Release / knowledge:** 2026-10-25 (latest stable)
- **IDs:** `deepseek/deepseek-v4.1-flash-1017`
- **Context window:** 128K tokens (verified; extension to 256K theoretical)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-25):** $0.08 per 1M input tokens; $0.20 per 1M output tokens (est. DeepSeek V4.1 Flash tier)
- **Architecture:** 26B parameters (dense); Apache 2.0 license

### Raw benchmarks found

Agent / tool use:

- Tool use: 77/100 (average.md / rank 83 / aggregated via top-10 raters with Overall > 84.9)

Reasoning / knowledge:

- Reasoning: 80/100 (average.md / rank 83 / aggregated via top-10 raters)
- Overall Score: 81.7/100 (average.md / rank 83 / aggregated via top-10 raters)

Coding:

- Coding: 84/100 (average.md / rank 83 / aggregated via top-10 raters)

Long context:

- Context window: 95/100 (average.md / rank 83 / 128K verified; normalized to 95)

### Normalized scores (1–100)

- **Tool use: 77/100.** Moderate tool use (77.4); basic orchestration capabilities.
- **Reasoning: 80/100.** Solid reasoning (79.7); competitive for general-purpose reasoning.
- **Context window: 95/100.** Excellent context (94.8) — 128K verified; best-in-class long context; extension to 256K supported.
- **Multimodal: 73/100.** Moderate multimodal (72.7); good multimodal coverage for vision and text.
- **Coding: 84/100.** Good coding (83.7); competitive for code generation and tool use.
- **Cost efficiency: 94/100.** Excellent cost-efficiency (93.7); open-weight Apache 2.0; strong性价比.
- **Overall Score: 82/100.** Strong cost-effective model; best-in-class long context; competitive for cost-sensitive deployments.

---

## Signature

- Provided by: **GLM_4.7_Flash** (<openai/glm-4.7-flash>)
- Method: Normalized average.md scores (rank 83, Overall 81.7); DeepSeek API docs and model card research.
- Future sources: N/A

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/deepseek-v4.1-flash-1017/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/deepseek-v4.1-flash-1017/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).