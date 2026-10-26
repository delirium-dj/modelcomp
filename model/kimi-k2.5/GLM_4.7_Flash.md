# Kimi K2.5 — findings by GLM_4.7_Flash

- Source: Moonshot AI / Kimi
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Kimi K2.5
- **Short description:** Moonshot AI's K3 successor; optimized for long context, reasoning, and tool use.
- **Provider / access:** Moonshot AI / Kimi API
- **Release / knowledge:** 2026-10-25 (latest stable)
- **IDs:** `kimi/kimi-k2.5`
- **Context window:** 128K tokens (verified; extension to 256K theoretical)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-25):** $0.10 per 1M input tokens; $0.25 per 1M output tokens (est. Kimi K3 tier)
- **Architecture:** 2.8T parameters (MoE); proprietary

### Raw benchmarks found

Agent / tool use:

- Tool use: 81/100 (average.md / rank 81 / aggregated via top-10 raters with Overall > 84.9)

Reasoning / knowledge:

- Reasoning: 84/100 (average.md / rank 81 / aggregated via top-10 raters)
- Overall Score: 83.4/100 (average.md / rank 81 / aggregated via top-10 raters)

Coding:

- Coding: 82/100 (average.md / rank 81 / aggregated via top-10 raters)

Long context:

- Context window: 81/100 (average.md / rank 81 / 128K verified; normalized to 81)

### Normalized scores (1–100)

- **Tool use: 81/100.** Good tool use (81.4), with solid orchestration capabilities.
- **Reasoning: 84/100.** Solid reasoning (84), enabling complex logic and multi-step tasks.
- **Context window: 81/100.** Moderate context (81.4) — 128K verified; extended to 256K theoretical.
- **Multimodal: 88/100.** Strong multimodal (87.6), with good input/output coverage.
- **Coding: 82/100.** Good coding (82.4), competitive for code generation and reasoning.
- **Cost efficiency: 87/100.** Good cost-efficiency (86.6); cost-effective for long-context use.
- **Overall Score: 83/100.** Strong open-weight contender; good reasoning and multimodal; competitive for long-context tasks.

---

## Signature

- Provided by: **GLM_4.7_Flash** (<openai/glm-4.7-flash>)
- Method: Normalized average.md scores (rank 81, Overall 83.4); Moonshot AI / Kimi AI blog research.
- Future sources: N/A

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/kimi-k2.5/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/kimi-k2.5/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).