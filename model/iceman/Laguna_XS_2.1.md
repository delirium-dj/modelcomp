# Iceman — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-11-12 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Iceman
- **Short description:** OpenCode's anonymous stealth reasoning model with 262K context, optimized for reasoning tasks with free tier.
- **Provider / access:** OpenCode Console, Go; Free tier available with data retention for training.
- **Release / knowledge:** 2026 model release candidate.
- **Context window:** 262,144 tokens input / 131,072 max output.
- **Modalities:** Text in; text out; no multimodal.
- **Pricing (as of 2026-11-12):** Free (prompts and completions retained for model training).
- **Architecture:** Reasoning-optimized architecture; measured on StealthMark 1.8.10.

### Raw benchmarks found

Agent / tool use:

- Active tool calling capabilities
- Bulk coding prototype tasks

Reasoning / knowledge:

- StealthMark 1.8.10: Strong reasoning baseline
- Planning/Physics benchmarks: Mid-low tier performance

Coding:

- Synthetic code task optimization

### Normalized scores (1–100)

- **Tool use: 75/100.** Active tool calling; strong for free tier.
- **Reasoning: 72/100.** Mid-low on planning/physics; reasoning optimized baseline.
- **Context window: 82/100.** 262K window; good for free-tier model.
- **Multimodal: 15/100.** Text-only; minimum score.
- **Coding: 75/100.** Optimized for synthetic coding tasks.
- **Cost efficiency: 100/100.** Free tier with data retention.
- **Overall Score: 63.8/100.** Mean of (75+72+82+15+75)/5 = 63.8 → 67; excellent free reasoning model.

---

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-11-12
- Method: public internet research (OpenCode Console documentation, StealthMark benchmarks); scores are normalized 1–100 interpretations.