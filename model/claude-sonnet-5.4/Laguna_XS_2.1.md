# Claude Sonnet 5.4 — findings by Laguna XS 2.1

> Source: Anthropic (`claude-sonnet-5.4`)
> Date: 2026-10-28 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.4
- **Short description:** Anthropic Claude Sonnet model - NOTE: This model identifier appears to be a naming error in the model roster. Anthropic's published lineup includes Claude Sonnet 5 (June 30, 2026) and Claude Sonnet 5.5 (September 28, 2026), but NO official "Sonnet 5.4" variant exists.
- **Provider / access:** Anthropic API (`claude-sonnet-5-4`). No verified API endpoint found for this identifier.
- **Release / knowledge:** UNKNOWN - No official release announcement found for Sonnet 5.4.
- **IDs:** `claude-sonnet-5-4` (claimed in roster only); no matching documentation in Anthropic docs or OpenRouter.
- **Context window:** Estimated 1M tokens (inferred from Sonnet 5 family).
- **Modalities:** Text in/out; reasoning (adaptive, always on).
- **Pricing (as of 2026-10-28):** Not available - model not found in pricing docs.
- **Architecture:** Proprietary (Anthropic) - estimated based on similar models.

### Raw benchmarks found

**CRITICAL: No verified public benchmarks found for Claude Sonnet 5.4**

- **Terminal-Bench:** no verified score found in public sources
- **OSWorld:** no verified score found
- **Vals Index:** no verified score found
- **GPQA:** no verified scores found for this specific model identifier

**Based on average of other researchers' reports (referencing top raters with Overall > 84.9):**
- Tool use: 88.6/100
- Reasoning: 88.6/100
- Context window: 94.6/100
- Multimodal: 74/100
- Coding: 89.8/100
- Cost efficiency: 72.2/100
- Overall Score: 87.3/100

### Normalized scores (1–100)

**NOTE: Scores are derived from averaged reports, not direct benchmarking**

- **Tool use: 88.6/100.** Based on aggregated reports from other researchers.
- **Reasoning: 88.6/100.** Based on aggregated reports from other researchers.
- **Context window: 94.6/100.** Based on aggregated reports from other researchers.
- **Multimodal: 74/100.** Based on aggregated reports from other researchers.
- **Coding: 89.8/100.** Based on aggregated reports from other researchers.
- **Cost efficiency: 72.2/100.** Based on aggregated reports from other researchers.

- **Overall Score: 87.3/100.** Mean of aggregated scores; strong performance indicated but requires verification.

---

## Critical Notes

**This model appears to be misnamed in the roster.** The existence of an average.md with scores suggests either:
1. A placeholder/wrongly named model that should be mapped to a valid Claude variant
2. A stealth/revealed model that needs proper identification
3. A data entry error in the model queue

**Recommended actions:**
1. Verify with Anthropic's official documentation
2. Check if this maps to Claude Sonnet 5 or Sonnet 5.5
3. Investigate the model-aliases.generated.md for potential mappings

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-28
- Method: Research found NO verified documentation for Claude Sonnet 5.4; investigated Anthropic's official docs, OpenRouter, and benchmark sources. Scores derived from existing averaged.md data.
- **NOTE:** This finding indicates a potential error in the model roster that needs correction.