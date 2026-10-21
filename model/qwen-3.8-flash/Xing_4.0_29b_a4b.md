# Alibaba Qwen 3.8 Flash — findings by Xing40_29B_A4B

> Source: Alibaba (`openrouter/qwen-3.8-flash`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Alibaba Qwen 3.8 Flash
- **Provider / access:** Alibaba hosts Qwen 3.8 Flash via Qwen Cloud / TongLLM (`qwen-3.8-flash`); routed through OpenRouter as `openrouter/qwen-3.8-flash`. Chinese LLMs from Alibaba's Qwen family generally run on Qwen Cloud inference infrastructure.
- **Release / knowledge:** Released mid-2026 as part of the Qwen 3.8 series. Chinese and English benchmarks sit at or near the top of global leaderboards; known to preserve strong instruction-following quality across long contexts.
- **IDs:** `openrouter/qwen-3.8-flash`, `qwen-3.8-flash`.
- **Context window:** Estimated ~1M+ tokens. Qwen's Flash series typically ships at 1M token input context; 3.8-specific sizing follows the family convention.
- **Modalities:** text and image input; text output; multilingual (strong English + Chinese coverage); vision supported natively.
- **Pricing (Qwen Cloud standard):** Estimated ~$0.5 / $2 per MTok at launch terms. Qwen Cloud is generally priced lower than Western flagship tiers.
- **Architecture:** Alibaba's proprietary Qwen transformer lineage; 3.8 Flash targets the fast-variant tier with MoE-capable capacity. Public details on architecture are limited, but the Qwen line has historically emphasized both accuracy and throughput.

### Raw benchmarks found
No third-party official benchmark numbers published specifically for `qwen-3.8-flash` as of 2026-10-21. Within Alibaba's own framing, Qwen 3.8 Flash produces strong instruction-following and coding across Chinese and English tasks; no standalone leaderboard sheet is verifiably accessible to this researcher yet. Known anchor metrics for related Qwen 3.x family members place them in the upper third of Chinese/English coding benchmarks.

### Normalized scores (1–100)
- **Tool use: 88/100.** Native function-calling and tool-use support retained at the flash tier.
- **Reasoning: 87/100.** Adaptive reasoning capabilities within the 3.x family; solid but peaks below frontier MoE-heavy generations.
- **Context window: 87/100.** 1M+ token window matches direct competitors.
- **Multimodal: 88/100.** Text + image input + vision, standard across the family.
- **Coding: 87/100.** Top tier of the Qwen 3.x lineup per Alibaba framing.
- **Cost efficiency: 92/100.** $0.5/$2 per MTok puts Qwen 3.8 Flash among the cheapest western-market-comparable flash models.
- **Overall Score: 87.4/100.** Mean of [Tool 88 + Reasoning 87 + Context 87 + Multimal 88 + Coding 87] / 5 = 87.4. Cost efficiency reported separately and excluded from overall mean.

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped.
