# Qwen 3.8 Flash — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba's 3.8-generation dense model variant; lighter, cheaper sibling to Qwen 3.8-27B with optimized inference.
- **Provider / access:** Alibaba Cloud Model Studio; OpenRouter; self-host Qwen/Qwen3.8-Flash.
- **Release / knowledge:** July 2026 release; knowledge cutoff undisclosed.
- **IDs:** `qwen/qwen3.8-flash`.
- **Context window:** 1M tokens (YaRN-extended from native window).
- **Modalities:** Text, image, video in; text out; reasoning support.
- **Pricing:** Low-cost third-party hosting; <$1 tier.

### Normalized scores (1-100)

Derived from `average.md` scores using methodology in `model-comparison.md`:

- **Tool use: 80/100.** Mean from top 8 raters; solid agentic capability.
- **Reasoning: 83/100.** Strong reasoning tier; 82.6 average from peer reports.
- **Context window: 84/100.** 1M window at this price point; 83.9 tier.
- **Multimodal: 68/100.** Text/image/video input; 67.6 tier.
- **Coding: 80/100.** Strong coding assistance at flash tier.
- **Cost efficiency: 93/100.** Excellent price for this capability tier; 92.9 tier.
- **Overall Score: 79/100.** Mean of (79.9+82.6+83.9+67.6+79.6)/5 = 78.7 → 79. Best fit: cost-effective coding agent with reasonable reasoning.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: analysis of comparative scores from top-tier raters (Gemini 3.x, GPT 5.6, Muse Spark); normalized interpretations.
- Future sources: add a new file next to this one, e.g. `Qwen_3.9_Flash.md`, using the same headings.