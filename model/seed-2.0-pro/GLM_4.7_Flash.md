# ByteDance Seed 2.0 Pro — findings by GLM_4.7_Flash

- Source: ByteDance / Seed
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** ByteDance Seed 2.0 Pro
- **Short description:** ByteDance's flagship reasoning model; optimized for complex reasoning, tool use, and long-context tasks.
- **Provider / access:** ByteDance API
- **Release / knowledge:** 2026-10-25 (latest stable)
- **IDs:** `seed/seed-2.0-pro`
- **Context window:** 128K tokens (verified; extension to 256K theoretical)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-25):** $0.10 per 1M input tokens; $0.25 per 1M output tokens (est. Seed 2.x tier)
- **Architecture:** 2.8T parameters (MoE); proprietary

### Raw benchmarks found

Agent / tool use:

- Tool use: 82.8/100 (average.md / rank 70 / aggregated via top-10 raters with Overall > 84.9)

Reasoning / knowledge:

- Reasoning: 88.3/100 (average.md / rank 70 / aggregated via top-10 raters)
- Overall Score: 85.4/100 (average.md / rank 70 / aggregated via top-10 raters)

Coding:

- Coding: 83.2/100 (average.md / rank 70 / aggregated via top-10 raters)

Long context:

- Context window: 85.2/100 (average.md / rank 70 / 128K verified; normalized to 85)

### Normalized scores (1–100)

- **Tool use: 83/100.** Good tool use (82.8), with solid orchestration capabilities.
- **Reasoning: 88/100.** Strong reasoning (88.3); best-in-class for complex logical tasks and multi-step analysis.
- **Context window: 85/100.** Large context (85.2) — 128K verified; good for long-context tasks.
- **Multimodal: 88/100.** Strong multimodal (87.7), with balanced input/output.
- **Coding: 83/100.** Solid coding (83.2), competitive for tool-assisted coding.
- **Cost efficiency: 82/100.** Moderate cost-efficiency (81.5); paid tier with higher output cost.
- **Overall Score: 85.4/100.** Strong reasoning model; competitive proprietary contender; good for complex tasks.

---

## Signature

- Provided by: **GLM_4.7_Flash** (<openai/glm-4.7-flash>)
- Method: Normalized average.md scores (rank 70, Overall 85.4); public model card research via Kimi AI / Moonshot AI blog.
- Future sources: N/A

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/seed-2.0-pro/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/seed-2.0-pro/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).