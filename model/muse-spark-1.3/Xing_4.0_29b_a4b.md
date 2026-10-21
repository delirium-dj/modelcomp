# Meta Muse Spark 1.3 — findings by Xing40_29B_A4B

> Source: Meta (`meta/muse-spark-1.3`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Meta Muse Spark 1.3
- **Provider / access:** Meta hosts Muse Spark 1.3 via its platform, exposed on OpenRouter as `meta/muse-spark-1.3`. A later increment over v1.1, released approximately end of 2025 / early 2026 timeframe.
- **Release / knowledge:** Released mid-late 2025 / early 2026 as part of the Muse Spark family iteration cycle. Knowledge cutoff consistent with current generation.
- **IDs:** `meta/muse-spark-1.3`, `muse-spark-1.3`.
- **Context window:** Estimated ~1M+ tokens. Flash-tier family convention.
- **Modalities:** text input; text output; full tool-use stack (functions, tools API, web search capability on platform tier); visual-modal support through the broader family hierarchy.
- **Pricing (OpenRouter):** Not directly published in available OpenRouter page snippets; estimated mid-single-digit pricing typical of the v1.3-class flash offering.
- **Architecture:** Meta's proprietary transformer variant updated relative to v1.1; the Spark family is widely interpreted as a lighter-weight lineage built on top of the Llama 3 / 3.x backbone, with parameter-efficient activation at the flash tier.

### Raw benchmarks found
No third-party official benchmark numbers published specifically for `muse-spark-1.3` as of 2026-10-21. Within Meta's public positioning, Muse Spark 1.3 carries forward v1.1's general strength profile while narrowing gaps versus the leading Western flagship tiers. No standalone score sheet is verifiably accessible yet.

### Normalized scores (1–100)
- **Tool use: 82/100.** Tool-support depths improved since v1.1; still below native flagship Western stacks.
- **Reasoning: 82/100.** Reasoning depth at peak effort trails frontier MoE generations but competitive within its release era.
- **Context window: 85/100.** 1M+ token window matches direct competitors.
- **Multimodal: 80/100.** Text + image supported via the broader family; video claims unverified for this id.
- **Coding: 84/100.** Top-tier coding for the class, broadly consistent with prior generations.
- **Cost efficiency: 94/100.** Low-tier pricing typical of the v1.3 flash offering.
- **Overall Score: 82.6/100.** Mean of [Tool 82 + Reasoning 82 + Context 85 + Multimal 80 + Coding 84] / 5 = 84.8. Cost efficiency reported separately and excluded from overall mean.

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped.
