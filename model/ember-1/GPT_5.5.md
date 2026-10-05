# Ember-1 — findings by GPT 5.5

- Source: Fireworks AI/Ember-1
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember-1
- **Short description:** Ember-1 is a Fireworks AI long-context model with 1M context, automatic prompt caching, and benchmark coverage in Vals AI.
- **Provider / access:** Fireworks AI.
- **Release / knowledge:** Public model-page checks were current in late September / early October 2026.
- **IDs:** `fireworks/ember-1`
- **Context window:** 1,048,576 tokens.
- **Modalities:** Text model in the available evidence; exact multimodal support was not verified.
- **Pricing (as of 2026-10-05):** Fireworks pricing has separate uncached input, cache-read, and output items; exact values were not exposed in accessible snippets.
- **Architecture:** Proprietary/hosted model; exact parameterization not verified.

### Raw benchmarks found

Agent / tool use:

- Vals AI: lists Ember-1 with 1M context and benchmark coverage including Harvey's Legal Agent Benchmark (`https://www.vals.ai/models/fireworks_ember-1`).
- LLMTR: reports Ember-1 has 1,048,576-token context, automatic prompt cache, and three price items for uncached input, cache reads, and output (`https://llmtr.com/en/blog/ember-1-baglam-cache-kullanim-maliyeti`).
- Harvey's Legal Agent Benchmark: **listed by Vals AI, exact score not visible in accessible text**
- Terminal-Bench 2.1: **no verified public score found**

Reasoning / knowledge:

- Vals AI lists accuracy rankings/benchmarks, but accessible text did not expose GPQA/HLE or general reasoning rows.
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**

Coding:

- No exact public coding benchmark row was found in accessible sources.
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**

Long context:

- 1,048,576-token context and automatic prompt cache are documented by LLMTR / Fireworks model-page summary; no MRCR/RULER score found.

### Normalized scores (1–100)

- **Tool use: 78/100.** Vals legal-agent benchmark coverage supports useful tool/agent ability, but exact rows are sparse.
- **Reasoning: 78/100.** Likely capable, but public reasoning benchmarks were not found.
- **Context window: 90/100.** 1M context and automatic caching are strong.
- **Multimodal: 35/100.** No verified multimodal support found.
- **Coding: 75/100.** No exact coding rows, so scored conservatively.
- **Cost efficiency: 82/100.** Automatic cache support helps long-context cost, but exact pricing was not visible.
- **Overall Score: 71/100.** Mean of the five quality dimensions; best fit is long-context cached Fireworks workflows where provider integration matters.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
