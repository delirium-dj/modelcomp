# Grok 4.20 — findings by GPT 6 Sol

- Source: SpaceXSI / xAI (`grok-4.20-0309-reasoning`)
- Date: 2026-10-31 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.20
- **Short description:** 2026 Grok family with reasoning, non-reasoning and separately orchestrated multi-agent *modes*. This report assesses the **single-agent reasoning** 0309 route, not performance of the multi-agent service ([xAI model card](https://data.x.ai/2026-04-07-grok-4-20-model-card.pdf), [API card](https://docs.x.ai/developers/models/grok-4.20)).
- **Provider / access:** First-party model `grok-4.20-0309-reasoning`; bare `grok-4.20`, beta 0309 and `-reasoning-latest` are explicitly **aliases of it**, not separate subjects ([xAI docs](https://docs.x.ai/developers/models/grok-4.20)). Non-reasoning and multi-agent routes are deployment modes; the latter coordinates multiple agents and must not lend benchmark scores to this report. The xAI card still lists the pinned reasoning route; [Artificial Analysis](https://artificialanalysis.ai/models/grok-4-20-0309) marks its older *evaluated profile* deprecated for a v2 update, which is not proof that first-party `grok-4.20` redirects to `grok-4.3`.
- **Release / knowledge:** 0309 dated **March 9, 2026**; xAI's system card is dated **April 7**. Exact training knowledge cutoff unavailable in reviewed primary documentation ([system card](https://data.x.ai/2026-04-07-grok-4-20-model-card.pdf), [OCI reference](https://docs.oracle.com/en-us/iaas/Content/generative-ai/xai-grok-4-20.htm)).
- **Context window:** **1,000,000** combined tokens per **current xAI API** and OCI, while [Vals' beta profile](https://www.vals.ai/models/grok_grok-4.20-0309-reasoning) and [AA's archived snapshot](https://artificialanalysis.ai/models/grok-4-20-0309) list **2M**. The documented production ceiling governs this report; versions/providers may differ. Azure preview exposes only **262K/8,192 output** ([Foundry](https://ai.azure.com/catalog/models/grok-4-20-reasoning)).
- **Modalities:** Text/image in, text out, function calling and structured output. External Imagine and X-video tools are not native image/video generation ([xAI](https://data.x.ai/2026-04-07-grok-4-20-model-card.pdf)).
- **Pricing (2026-10-31):** First-party below 200K prompt **$1.25 input / $0.20 cached / $2.50 output per 1M**; at ≥200K, **$2.50 / $0.40 / $5.00** for the whole request; Batch 20% off ([xAI model card](https://docs.x.ai/developers/models/grok-4.20)). [Vals' older beta $2/$6](https://www.vals.ai/models/grok_grok-4.20-0309-reasoning) is historical and should not replace live first-party pricing.
- **Architecture:** Proprietary single-agent reasoner; parameter count undisclosed. Multi-agent is orchestration of agents, not evidence of another base checkpoint ([xAI system card](https://data.x.ai/2026-04-07-grok-4-20-model-card.pdf)).

### Raw benchmarks found

- **Agents/tool use:** [Vals' independent beta 0309 reasoning-route run](https://www.vals.ai/models/grok_grok-4.20-0309-reasoning) records **Terminal-Bench 2.1 44.20% ±0.99**, TaxEval v2 **74.12% ±0.86**, but **Finance Agent v2 28.49% ±0.32** and Tax Agent **6.95% ±1.75**; professional agency is uneven. [AA's older 0309 profile](https://artificialanalysis.ai/models/grok-4-20-0309) now has **N/A** v5 Index, not zero or a current independent reevaluation. Do not import multi-agent tool benchmarks.
- **Reasoning:** Independent [Vals](https://www.vals.ai/models/grok_grok-4.20-0309-reasoning) **GPQA Diamond 88.64% ±1.59**, **MMLU Pro 86.25% ±0.34**, SAGE **38.24% ±3.42**; strong academic reasoning but lower real-task performance. Vals describes the run as a **March beta**. Its current aggregate accuracy **47.65%** is an average over its evaluated tasks, not GPQA accuracy. No Pro/Heavy or later `-gv2` score imported.
- **Coding:** [Vals](https://www.vals.ai/models/grok_grok-4.20-0309-reasoning) measures **LiveCodeBench 84.27% ±1.03**, **SWE-bench 72.20% ±2.01** and **Vibe Code Bench v1.1 4.06% ±2.06**. A separate March 13 update quotes SWE Verified **74.20%** under its then-reported run; use the current row 72.20 rather than silently combining cohorts. Terminal-Bench 2.1 is **44.20%** under its specific harness.
- **Long context / multimodal:** [Vals MMMU Pro **83.47% ±0.89**](https://www.vals.ai/models/grok_grok-4.20-0309-reasoning) corroborates useful image interpretation. Its profile's **2M** context metadata conflicts with live xAI's **1M** limit, and no independently verified near-1M retrieval/recall result was located for the pinned route. [Microsoft Foundry](https://ai.azure.com/catalog/models/grok-4-20-reasoning) independently warns of elevated safety/jailbreak risks on its hosted deployment; avoid assuming image understanding implies safe autonomous use.

### Normalized scores (1–100)

- **Tool use: 71/100.** Independent TB2.1 44.2 and TaxEval 74.1, limited by Finance/Tax Agent weaknesses.
- **Reasoning: 79/100.** GPQA 88.64 and MMLU Pro 86.25; March beta vintage and SAGE 38.24 temper certainty.
- **Context window: 87/100.** Official 1M, not independent beta's 2M, with no near-cap retrieval evidence.
- **Multimodal: 76/100.** Independent MMMU Pro 83.47; text/image in, text out only.
- **Coding: 71/100.** SWE-bench 72.2 and LCB 84.27 versus Vibe Code 4.06 and TB2.1 44.2.
- **Cost efficiency: 74/100.** Competitive short-context $1.25/$2.50 with cache/batch, but long-prompt rate doubles and agent work is uneven.
- **Overall Score: 77/100.** Half-up mean (71 + 79 + 87 + 76 + 71) / 5 = 76.8; solid single-agent reasoning/vision, not a multi-agent benchmark result.

---

## Signature

- Provided by: **GPT 6 Sol (openai/gpt-6-sol)** — 2026-10-31
- Method: Three searches, current xAI exact-route pricing/aliases, independent Vals beta evaluation, AA lifecycle and Azure deployment constraints. Separated dated beta scores from live API configuration and single- from multi-agent evidence; scores are interpretations.
- Reference URLs:
  - [xAI current pinned reasoning route, aliases, limits and prices](https://docs.x.ai/developers/models/grok-4.20)
  - [xAI Grok 4.20 system card](https://data.x.ai/2026-04-07-grok-4-20-model-card.pdf)
  - [Vals AI beta-0309 reasoning-route benchmarks](https://www.vals.ai/models/grok_grok-4.20-0309-reasoning)
  - [Artificial Analysis archived 0309 profile](https://artificialanalysis.ai/models/grok-4-20-0309)
  - [Azure Foundry deployment limits and safety review](https://ai.azure.com/catalog/models/grok-4-20-reasoning)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
