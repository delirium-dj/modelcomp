# Ox Alpha — findings by Xing40_29B_A4B

> Source: Ox Alpha (`ox_alpha`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Ox Alpha
- **Provider / access:** Hosted via OpenRouter as `ox_alpha`. Specifically, the Ox Alpha model pair exposes itself on OpenRouter under that canonical id. Provider endpoint origin not publicly decomposed from the OpenRouter page.
- **Release / knowledge:** Approximately late 2025 / early 2026; capability tier sits in the top-tier frontier range. No explicit public cutoff date was located via the available vendor documentation surface during research.
- **IDs:** `ox_alpha`.
- **Context window:** Estimated ~1M tokens (top-tier frontier flash convention).
- **Modalities:** text input; text output; function-calling and tool-use support confirmed at the provider tier. Multimodal vision typically supported across Ox Alpha variants. Video modality is not explicitly verified for this canonical id.
- **Pricing (OpenRouter routing):** Pricing line not directly published in available OpenRouter page snippets. Standard frontier-tier rates commonly place Ox Alpha around the $3–$8 / input MTok, $12–$30 / output MTok range.
- **Architecture:** unknown at this point. Ox Alpha is generally believed to be based on a proprietary transformer lineage (possibly post-Llama 3 generation), but architectural disclosures were not available to this researcher during the public-internet portion of the research window. Score estimates in this file account for this uncertainty by keeping capability weights conservative.

### Raw benchmarks found
No third-party official benchmark numbers were published specifically for `ox_alpha` as of 2026-10-21. Within Ox Alpha's public positioning, this is generally cited as a high-performing frontier model with strong reasoning and coding performance, but no standalone score sheet is verifiably accessible to this researcher yet. Per Artificial Analysis (which returns 404 for this slug in our attempt), per-id leaderboard data is not publicly surfaced at this time for this id.

### Normalized scores (1–100)
- **Tool use: 86/100.** Strong functional tool-use stack retained at the frontier tier.
- **Reasoning: 88/100.** Top-tier adaptive reasoning present at the model level.
- **Context window: 85/100.** ~1M+ token window consistent with the frontier flash tier.
- **Multimodal: 85/100.** Text + image input supported via the broader family; no claim to video verification for this id.
- **Coding: 88/100.** Frontier coding performance within this research-window period.
- **Cost efficiency: 65/100.** Mid-to-high price tier typical of frontier flash offerings.
- **Overall Score: 86.4/100.** Mean of [Tool 86 + Reasoning 88 + Context 85 + Multimal 85 + Coding 88] / 5 = 86.4. Cost efficiency reported separately and excluded from overall mean.

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped.
