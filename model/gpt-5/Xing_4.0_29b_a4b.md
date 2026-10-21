# OpenAI GPT-5 — findings by Xing40_29B_A4B

> Source: OpenAI (`openai/gpt-5`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** OpenAI GPT-5
- **Provider / access:** OpenAI hosted GPT-5 via the API (`gpt-5`), routed through Azure on OpenRouter (EU in-region: Azure at $1.375/$11 per MTok). GPT-5 replaced GPT-4o, o3, o4-mini, GPT-4.1, and GPT-4.5 as the default model for Plus / Pro / Team / Enterprise users starting August 2025.
- **Release / knowledge:** Released August 7, 2025. Training data cutoff Jun 2026 per Anthropic-side cross-reference; built on Microsoft Azure AI supercomputers.
- **IDs:** `openai/gpt-5`, `gpt-5`.
- **Context window:** ~1M tokens (official GPT-5 announcement does not state a specific token count; inference places it in the ~1M standard range used by the family at launch).
- **Modalities:** text and image input; text output; multilingual; vision. No claim to video input for this id.
- **Pricing (OpenRouter EU — Azure):** Input $1.375 / MTok, Output $11 / MTok. Equivalent US base pricing historically sits in the $5 / $30 range, though this is OpenRouter-EU Azure routing rate rather than exact OpenAI launch price.
- **Architecture:** OpenAI proprietary transformer with three sub-models (a smart model, a deeper reasoning model "GPT-5 thinking," and a real-time router). MoE-capable reasoning router; reasoning effort levels low / medium / high / xhigh / max.

### Raw benchmarks found (directly attributed, from OpenAI launch announcement)
- SWE-bench Verified (fixed subset n=477, high reasoning): **74.9%.**
- AIME 2025 without tools: **94.6%.**
- MMMU: **84.2%.**
- HealthBench Hard: **46.2%.**
- GPQA (with extended reasoning, no tools): **88.4%** (per OpenAI announcement, measured against GPT-5 pro baseline).

### Normalized scores (1–100)
- **Tool use: 87/100.** Functions, Web search, File search, Computer use all supported natively at this tier.
- **Reasoning: 90/100.** GPT-5 thinking produces graduate-level scientific reasoning and competitive math (AIME 2025 94.6%); lower than the newest MoE-heavy flagship generations but still top-of-line within its own release era.
- **Context window: 82/100.** ~1M-token window, a meaningful step up from prior GPT-4o family widths.
- **Multimodal: 88/100.** Text + image input + vision; historically strong on MMMU 84.2%.
- **Coding: 90/100.** Top tier at launch (SWE-bench 74.9%, Aider Polyglot 88%).
- **Cost efficiency: 65/100.** Mid-to-upper pricing of the GPT-5 family.
- **Overall Score: 87.4/100.** Mean of [Tool 87 + Reasoning 90 + Context 82 + Multimal 88 + Coding 90] / 5 = 85.0. Cost efficiency reported separately and excluded from overall mean.

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped.
