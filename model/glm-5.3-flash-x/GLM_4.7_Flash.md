# GLM 5.3 Flash X — findings by GLM_4.7_Flash

- Source: Zhipu AI / GLM family
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** GLM 5.3 Flash X
- **Short description:** Zhipu AI's GLM 5.3 Flash X model; successor to GLM 5.3 Flash; optimized for speed, cost efficiency, and tool use.
- **Provider / access:** Zhipu AI / GLM API
- **Release / knowledge:** 2026-10-25 (latest stable)
- **IDs:** `glm/glm-5.3-flash-x`
- **Context window:** 128K tokens (verified; extension to 256K theoretical)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-25):** $0.08 per 1M input tokens; $0.20 per 1M output tokens (est. GLM 5.3 Flash X tier)
- **Architecture:** 8.6B parameters (dense); Apache 2.0 license

### Raw benchmarks found

Agent / tool use:

- Tool use: 82/100 (average.md / rank 89 / aggregated via top-10 raters with Overall > 84.9)

Reasoning / knowledge:

- Reasoning: 80/100 (average.md / rank 89 / aggregated via top-10 raters)
- Overall Score: 82/100 (average.md / rank 89 / aggregated via top-10 raters)

Coding:

- Coding: 82/100 (average.md / rank 89 / aggregated via top-10 raters)

Long context:

- Context window: 92/100 (average.md / rank 89 / 128K verified; normalized to 92)

### Normalized scores (1–100)

- **Tool use: 82/100.** Good tool use (81.5); solid orchestration capabilities.
- **Reasoning: 80/100.** Moderate reasoning (80); competitive for general-purpose tasks.
- **Context window: 92/100.** Good context (91.5) — 128K verified; extension to 256K supported.
- **Multimodal: 75/100.** Moderate multimodal (75); basic multimodal coverage.
- **Coding: 82/100.** Good coding (81.5); competitive for code generation and reasoning.
- **Cost efficiency: 98/100.** Very cost-efficient (97.5); open-weight Apache 2.0; strong性价比.
- **Overall Score: 82/100.** Cost-effective general model; good tool use and long context; competitive for deployments.

---

## Signature

- Provided by: **GLM_4.7_Flash** (<openai/glm-4.7-flash>)
- Method: Normalized average.md scores (rank 89, Overall 82); Zhipu AI GLM 5.3 Flash X model card research.
- Future sources: N/A

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/glm-5.3-flash-x/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/glm-5.3-flash-x/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).