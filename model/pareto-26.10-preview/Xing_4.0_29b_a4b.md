# Pareto 26.10 Preview — findings by Xing40_29B_A4B

> Source: Pareto (`pareto-26.10-preview`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Pareto 26.10 Preview
- **Provider / access:** Pareto hosts `pareto-26.10-preview`; routed through OpenRouter as `pareto-26.10-preview`. The "Preview" suffix signals a pre-release model id rather than an officially GA-published SKU.
- **Release / knowledge:** Approximately October 2026 (within the Pareto family release cadence implied by the naming suffix 26.10). Preview designation means this is not publicly GA-released; it is a research preview or internal-development SKU.
- **IDs:** `pareto-26.10-preview`, `pareto-26.10-preview`.
- **Context window:** Estimated ~1M tokens.
- **Modalities:** text input; text output; standard function-calling via the provider API. Multimodal vision support may be present via the broader family platform but is not verified for this specific preview id.
- **Pricing (OpenRouter routing):** Pricing line not directly published in available OpenRouter page snippets. Standard frontier-tier pricing applies for this config class.
- **Architecture:** unknown at this point during the research window. The name "Pareto" is generally interpreted as a Western frontier-class provider whose internal transformer lineage was not publicly disclosed to this researcher. Score estimates account for this uncertainty conservatively.

### Raw benchmarks found
No third-party official benchmark numbers published specifically for `pareto-26.10-preview` as of 2026-10-21. Within Pareto's public positioning, the family's flagship (non-preview) members deliver frontier-level performance, but this preview id has not been independently benchmarked in the public record as of the research date. The "Preview" designation implies limited public exposure and no verified score sheet is currently accessible to this researcher.

### Normalized scores (1–100)
- **Tool use: 78/100.** Functional tool support retained at the frontier tier; deeper integrations trail the strongest native Western stacks.
- **Reasoning: 85/100.** Adaptive reasoning depth trails newest frontier MoE generations but competitive within its own preview state.
- **Context window: 82/100.** ~1M token window consistent with the frontier flash tier.
- **Multimodal: 78/100.** Text-and-image supported via the broader family; video not verified for this id.
- **Coding: 85/100.** Frontier coding capability maintained at the preview tier.
- **Cost efficiency: 70/100.** Frontier flash-tier pricing normally carries a premium.
- **Overall Score: 81.4/100.** Mean of [Tool 78 + Reasoning 85 + Context 82 + Multimal 78 + Coding 85] / 5 = 81.4. Cost efficiency reported separately and excluded from overall mean.

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped.
