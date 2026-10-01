# GPT-5 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5
- **Short description:** OpenAI's August 2025 flagship model that routes between fast and deep reasoning variants, succeeding GPT-4.5 series.
- **Provider / access:** OpenAI API `gpt-5`; ChatGPT Work; OpenRouter; OpenCode Zen.
- **Release / knowledge:** Released August 2025; knowledge cutoff likely late 2024/early 2025.
- **IDs:** `opencode/gpt-5` (no Free-tier ID verified).
- **Context window:** 400,000 tokens (400K) total / 128K max output; lower than 5.6 series.
- **Modalities:** Text, image, file in; text out; reasoning support; tool calling enabled.
- **Pricing (as of 2026-10-01):** $1.25 input / $10 output per 1M tokens (OpenAI); OpenCode Zen $1.07/$8.50. Paid-tier only.
- **Architecture:** Proprietary; multi-variant routing system between fast/deep variants.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **81.5%** (derived from average.md; comparable to GPT-5.6 Terra's strong agent performance)
- GDPval-AA, Tau3-Banking, Claw-Eval: **no verified public scores found** for exact GPT-5 variant
- Toolathlon, MCP-Atlas, SWE Atlas QnA: **no verified scores**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score** for exact GPT-5 configuration
- HLE: **no verified public score**
- Artificial Analysis Intelligence Index: **derived ~53-58** (GPT-5.6 Terra ~58; likely slightly lower)

Coding:

- SWE-bench Pro: **no verified score** (GPT-5.6 Terra 63.4%; likely comparable)
- LiveCodeBench, SciCode, DeepSWE: **no verified scores**
- CursorBench, Vibe Code Bench: **no verified scores**

Long context:

- 400K context window; no MRCR/RULER retrieval benchmarks found.

### Normalized scores (1-100)

Derived from available evidence and comparative analysis using methodology in `model-comparison.md`:

- **Tool use: 82/100.** GPT-5.6 Terra scores strong on agent tasks; 400K context suggests good but not top-tier tool performance vs 1M-window models.
- **Reasoning: 87/100.** Strong reasoning lineage from GPT-4.5+; AI Index ~53-58 projected; capped by lower context window vs 5.6 series.
- **Context window: 84/100.** 400K vs 1M puts it in 350K-500K tier (80-84); below top 100K+ models.
- **Multimodal: 76/100.** Image/file support; similar to other GPT models; text-only output caps at 70-80 tier.
- **Coding: 84/100.** Strong coding heritage; similar to GPT-5.6 Terra's capabilities but lower context for long-repo work.
- **Cost efficiency: 72/100.** $1.25/$10 per 1M places at ~$30 tier anchor; competitive with Opus 5.5's $4/$20 but higher than Flash models.
- **Overall Score: 83/100.** Mean of (82 + 87 + 84 + 76 + 84) / 5 = 82.6 → 83. Strong reasoning model with lower context window; good for short-medium tasks but surpassed by 5.6 series.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: comparative analysis using GPT-5.6 Terra benchmarks as reference, public pricing data, and architectural lineage; scores normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.