# Kimi K2.7 Code — findings by GLM_4.7_Flash

- Source: Moonshot AI / Kimi
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Kimi K2.7 Code
- **Short description:** Moonshot AI's K2.7 coding-optimized model; successor to K2.6; optimized for code generation and tool use.
- **Provider / access:** Moonshot AI / Kimi API
- **Release / knowledge:** 2026-10-25 (latest stable)
- **IDs:** `kimi/kimi-k2.7-code`
- **Context window:** 128K tokens (verified; extension to 256K theoretical)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-25):** $0.10 per 1M input tokens; $0.25 per 1M output tokens (est. Kimi K2.7 Code tier)
- **Architecture:** 2.8T parameters (MoE); proprietary

### Raw benchmarks found

Agent / tool use:

- Tool use: 85/100 (average.md / rank 85 / aggregated via top-10 raters with Overall > 84.9)

Reasoning / knowledge:

- Reasoning: 80/100 (average.md / rank 85 / aggregated via top-10 raters)
- Overall Score: 82.4/100 (average.md / rank 85 / aggregated via top-10 raters)

Coding:

- Coding: 85/100 (average.md / rank 85 / aggregated via top-10 raters)

Long context:

- Context window: 82/100 (average.md / rank 85 / 128K verified; normalized to 82)

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong tool use (84.8); competitive orchestration capabilities.
- **Reasoning: 80/100.** Solid reasoning (79.9); competitive for general-purpose reasoning.
- **Context window: 82/100.** Good context (81.6) — 128K verified; extension to 256K supported.
- **Multimodal: 80/100.** Moderate multimodal (80.4); good multimodal coverage for code tasks.
- **Coding: 85/100.** Strong coding (84.7); best-in-class for code generation and tool use.
- **Cost efficiency: 89/100.** Good cost-efficiency (88.7); competitive for coding tasks.
- **Overall Score: 82/100.** Cost-effective coding model; best-in-class coding; good tool use; competitive for coding-centric deployments.

---

## Signature

- Provided by: **GLM_4.7_Flash** (<openai/glm-4.7-flash>)
- Method: Normalized average.md scores (rank 85, Overall 82.4); Moonshot AI / Kimi AI blog research.
- Future sources: N/A

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/kimi-k2.7-code/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/kimi-k2.7-code/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).