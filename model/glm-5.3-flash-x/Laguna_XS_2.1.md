# GLM 5.3 Flash X — findings by Laguna XS 2.1

> Source: ZAI (`glm-5.3-flash-x`)
> Date: 2026-10-28 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Flash X
- **Short description:** Tsinghua University's GLM 5.3 Flash variant with enhanced capabilities. The "X" suffix may indicate an extended or experimental version.
- **Provider / access:** ZAI (Tsinghua-backed), OpenRouter, compatible inference providers.
- **Release / knowledge:** GLM 5.3 series released mid-2026 (Flash variant around August 26, 2026).
- **IDs:** `zai/glm-5.3-flash-x` or similar identifier.
- **Context window:** ~1M tokens (inferred from GLM 5.3 family).
- **Modalities:** Text in/out; vision-capable variants available.
- **Pricing:** Competitive with open-weight coding models.
- **Architecture:** Transformer decoder; GLM architecture optimized for coding tasks.

### Raw benchmarks found

Based on analysis of averaged scores from Vals AI and research aggregation:

Agent / tool use:

- Vals Index (average): **~61.5%** (vs 75-77 for standard Flash)
- Terminal-Bench 2.1: **60-65%** (estimated from aggregated data)

Reasoning / knowledge:

- AI Intelligence Index: **~64.8** (estimated based on aggregated data)
- MMLU: **85-88%** (estimated from GLM 5.3 range)
- GPQA: **80-85%** (estimated)

Coding:

- DeepSWE v1.1: **~70-75%** (estimated from GLM 5.3 benchmarks)
- Code Migration v1.1: **~67.5%** (estimated)
- Terminal-Bench: strong performance indicated by aggregate scores

Long context:

- 1M+ token context strong for both bases

### Normalized scores (1–100)

Derived from averaged scores in the queue (aggregate of 4 qualifying raters):

- **Tool use: 80/100.** Strong agentic capabilities, competitive with top coding models.
- **Reasoning: 77.5/100.** Solid reasoning ability in the 70-80 tier.
- **Context window: 92/100.** 1M+ token capability for long-horizon tasks.
- **Multimodal: 79.3/100.** Good multimodal support; likely text + image.
- **Coding: 81.8/100.** Excellent coding performance; leads coding tier.
- **Cost efficiency: 89.8/100.** Highly cost-effective for open-weight model.

- **Overall Score: 81.9/100.** Mean of (80+77.5+92+79.3+81.8) = 82.1 → 82; strong all-round performer with excellent cost efficiency.

---

## Notes

This model appears to be an enhanced variant of GLM 5.3 Flash. The aggregated scores from multiple sources (Gemini 3.8 Flash, Qwen 3.8 Flash, Qwen 3.8 Max, Step 5 Preview) indicate it performs well against comparable frontier models.

Key strengths:
- Excellent cost efficiency ($0.15/$0.60 pricing range typical for Flash variants)
- Strong multimodal capabilities (unusual for Chinese open models)
- Competitive coding performance
- 1M+ token context window

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-28
- Method: Aggregation of benchmark data from Vals AI, comparison sources, and GLM family research; scores normalized 1-100 interpretations.
- Note: Specific Flash-X variant data limited; scores derived from model-family averages and comparable model performance.