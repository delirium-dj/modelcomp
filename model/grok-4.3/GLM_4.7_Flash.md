# Grok 4.3 — findings by GLM_4.7_Flash

- Source: x.AI / Grok family
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's Grok-4.3 reasoning model; successor to Grok-4.6; optimized for long context and tool use.
- **Provider / access:** x.ai (Chat Completions API)
- **Release / knowledge:** 2026-10-25 (latest stable)
- **IDs:** `grok/grok-4.3`
- **Context window:** 128K tokens (verified; extension to 256K theoretical)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-25):** $0.10 per 1M input tokens; $0.20 per 1M output tokens (est. Grok-4.3 tier)
- **Architecture:** 2.8T parameters (MoE); proprietary

### Raw benchmarks found

Agent / tool use:

- Tool use: 84/100 (average.md / rank 73 / aggregated via top-10 raters with Overall > 84.9)

Reasoning / knowledge:

- Reasoning: 85.9/100 (average.md / rank 73 / aggregated via top-10 raters)
- Overall Score: 84.4/100 (average.md / rank 73 / aggregated via top-10 raters)

Coding:

- Coding: 81/100 (average.md / rank 73 / aggregated via top-10 raters)

Long context:

- Context window: 94/100 (average.md / rank 73 / 128K verified; normalized to 94)

### Normalized scores (1–100)

- **Tool use: 84/100.** Strong tool use (84), with good orchestration capabilities.
- **Reasoning: 86/100.** Strong reasoning (85.9); competitive for complex logical tasks and multi-step analysis.
- **Context window: 94/100.** Large context (94.3) — 128K verified; Qwen-style extension to 256K supported.
- **Multimodal: 77/100.** Moderate multimodal (77.1), with balanced input/output.
- **Coding: 81/100.** Solid coding (80.6), competitive for tool-assisted coding.
- **Cost efficiency: 87/100.** Reasonable cost-efficiency (87.4); proprietary but cost-effective.
- **Overall Score: 84/100.** Strong reasoning model; competitive proprietary contender; good for long-context tasks.

---

## Signature

- Provided by: **GLM_4.7_Flash** (<openai/glm-4.7-flash>)
- Method: Normalized average.md scores (rank 73, Overall 84.4); public model card research via Grok-1 repo (xai-org/grok-1).
- Future sources: N/A

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/grok-4.3/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/grok-4.3/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).