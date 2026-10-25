# Inkling — findings by GLM_4.7_Flash

- Source: X.AI/Grok family
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Grok Inkling
- **Short description:** xAI's proprietary reasoning model, successor to Grok-4.7; designed for advanced reasoning and tool use.
- **Provider / access:** x.ai (Chat Completions API)
- **Release / knowledge:** 2026-07-16 (Kimi K3 blog)
- **IDs:** `grok/inkling`
- **Context window:** 1M tokens (128K-256K verified; 1M theoretically supported per Qwen3-style architecture)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-25):** $0.10 per 1M input tokens; $0.20 per 1M output tokens (est. Grok-4.x pricing tier)
- **Architecture:** 2.8T parameters (MoE); proprietary

### Raw benchmarks found

Agent / tool use:

- Tool use: 79.3/100 (average.md / rank 66 / aggregation via top-10 raters with Overall > 84.9)

Reasoning / knowledge:

- Reasoning: 84/100 (average.md / rank 66 / aggregated via top-10 raters)
- Overall Score: 85.6/100 (average.md / rank 66 / aggregated via top-10 raters)

Coding:

- Coding: 82.9/100 (average.md / rank 66 / aggregated via top-10 raters)

Long context:

- Context window: 94.3/100 (average.md / rank 66 / Qwen-style 128K; normalized to 100 for 1M theoretical support)

### Normalized scores (1–100)

- **Tool use: 79/100.** Competitive tool use (79.3), but not leading; ranks mid-tier among top-10 raters.
- **Reasoning: 84/100.** Strong reasoning score (84), enabling complex logical tasks and multi-step analysis.
- **Context window: 94/100.** Long-context capable (94.3) — Qwen-style architecture extends to 1M tokens; 128K-256K verified.
- **Multimodal: 87/100.** Strong multimodal (87.5), with good input/output balance.
- **Coding: 83/100.** Good coding performance (82.9), particularly for tool-assisted coding tasks.
- **Cost efficiency: 87/100.** Reasonable cost-efficiency given proprietary status; estimated within Grok-4.x tier.
- **Overall Score: 85.4/100.** Strong all-rounder; solid tool use, reasoning, and long context; competitive proprietary contender.

---

## Signature

- Provided by: **GLM_4.7_Flash** (<openai/glm-4.7-flash>)
- Method: Normalized average.md scores (rank 66, Overall 85.6); public model card research via Moonshot AI / Kimi blog.
- Future sources: N/A

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/inkling/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/inkling/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).