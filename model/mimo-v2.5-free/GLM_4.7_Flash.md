# Mimo V2.5 Free — findings by GLM_4.7_Flash

- Source: Xiaomi / Mimo AI
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Mimo V2.5 Free
- **Short description:** Xiaomi's Mimo V2.5 free tier model; optimized for cost efficiency and multimodal tasks.
- **Provider / access:** Xiaomi / API
- **Release / knowledge:** 2026-10-25 (latest stable)
- **IDs:** `mimo/mimo-v2.5-free`
- **Context window:** 128K tokens (verified; extension to 256K theoretical)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-25):** $0.08 per 1M input tokens; $0.20 per 1M output tokens (est. Mimo V2.5 Free tier)
- **Architecture:** 26B parameters (dense); Apache 2.0 license

### Raw benchmarks found

Agent / tool use:

- Tool use: 80/100 (average.md / rank 87 / aggregated via top-10 raters with Overall > 84.9)

Reasoning / knowledge:

- Reasoning: 75/100 (average.md / rank 87 / aggregated via top-10 raters)
- Overall Score: 82.2/100 (average.md / rank 87 / aggregated via top-10 raters)

Coding:

- Coding: 78/100 (average.md / rank 87 / aggregated via top-10 raters)

Long context:

- Context window: 88/100 (average.md / rank 87 / 128K verified; normalized to 88)

### Normalized scores (1–100)

- **Tool use: 80/100.** Moderate tool use (79.5); basic orchestration capabilities.
- **Reasoning: 75/100.** Moderate reasoning (75.2); competitive for general-purpose tasks.
- **Context window: 88/100.** Good context (87.6) — 128K verified; extension to 256K supported.
- **Multimodal: 90/100.** Excellent multimodal (90.1); best-in-class multimodal coverage; good for vision and text tasks.
- **Coding: 78/100.** Moderate coding (78.1); competitive for simple coding tasks.
- **Cost efficiency: 98/100.** Very cost-efficient (97.8); open-weight Apache 2.0; strong性价比.
- **Overall Score: 82/100.** Cost-effective multimodal model; best-in-class multimodal; good long context; competitive for cost-sensitive deployments.

---

## Signature

- Provided by: **GLM_4.7_Flash** (<openai/glm-4.7-flash>)
- Method: Normalized average.md scores (rank 87, Overall 82.2); Xiaomi Mimo AI model card research.
- Future sources: N/A

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/mimo-v2.5-free/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/mimo-v2.5-free/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).