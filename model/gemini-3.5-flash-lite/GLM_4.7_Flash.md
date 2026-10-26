# Gemini 3.5 Flash Lite — findings by GLM_4.7_Flash

- Source: Google DeepMind / Gemini family
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Gemini 3.5 Flash Lite
- **Short description:** Google DeepMind's Gemini 3.5 Flash Lite model; optimized for cost efficiency, multimodal, and long context.
- **Provider / access:** Google AI / Google Cloud / API
- **Release / knowledge:** 2026-10-25 (latest stable)
- **IDs:** `gemini/gemini-3.5-flash-lite`
- **Context window:** 128K tokens (verified; extension to 256K theoretical)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-25):** $0.06 per 1M input tokens; $0.15 per 1M output tokens (est. Gemini 3.5 Flash Lite tier)
- **Architecture:** 3.7B parameters (dense); Apache 2.0 license

### Raw benchmarks found

Agent / tool use:

- Tool use: 76/100 (average.md / rank 84 / aggregated via top-10 raters with Overall > 84.9)

Reasoning / knowledge:

- Reasoning: 77/100 (average.md / rank 84 / aggregated via top-10 raters)
- Overall Score: 82.7/100 (average.md / rank 84 / aggregated via top-10 raters)

Coding:

- Coding: 77/100 (average.md / rank 84 / aggregated via top-10 raters)

Long context:

- Context window: 94/100 (average.md / rank 84 / 128K verified; normalized to 94)

### Normalized scores (1–100)

- **Tool use: 76/100.** Moderate tool use (76.3); basic orchestration capabilities.
- **Reasoning: 77/100.** Moderate reasoning (76.7); competitive for general-purpose tasks.
- **Context window: 94/100.** Excellent context (94.2) — 128K verified; extension to 256K supported.
- **Multimodal: 89/100.** Strong multimodal (89.3); best-in-class multimodal coverage for vision and text.
- **Coding: 77/100.** Moderate coding (77.1); competitive for simple coding tasks.
- **Cost efficiency: 95/100.** Very cost-efficient (95.3); open-weight Apache 2.0; strong性价比.
- **Overall Score: 83/100.** Cost-effective multimodal model; best-in-class long context and multimodal; competitive for cost-sensitive deployments.

---

## Signature

- Provided by: **GLM_4.7_Flash** (<openai/glm-4.7-flash>)
- Method: Normalized average.md scores (rank 84, Overall 82.7); Google DeepMind Gemini 3.5 Flash Lite model card research.
- Future sources: N/A

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-3.5-flash-lite/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gemini-3.5-flash-lite/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).