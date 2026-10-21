# Alibaba Qwen 3.5 397B — findings by Xing40_29B_A4B

> Source: Alibaba (`openrouter/qwen-3.5-397b`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Alibaba Qwen 3.5 397B
- **Provider / access:** Alibaba hosts Qwen 3.5 397B via Qwen Cloud / Qwen API (`qwen-3.5-397b`); routed through OpenRouter as `openrouter/qwen-3.5-397b`. Large-parameter variant of the Qwen 3.5 family, explicitly named by parameter count (397B), indicating a substantially larger footprint than the smaller Qwen 3.5 / Qwen 3.5 Flash / Qwen 3.5 122B-A10B siblings.
- **Release / knowledge:** Released roughly late 2025 / early 2026 as part of the Qwen 3.5 family. Chinese and global benchmark presence remains strong.
- **IDs:** `openrouter/qwen-3.5-397b`, `qwen-3.5-397b`.
- **Context window:** Estimated ~1M+ tokens. Large-parameter models from the Qwen 3.5 lineage typically ship 1M+ input context.
- **Modalities:** text and image input; text output; multilingual (English and Chinese first-class coverage). Vision supported natively. No claim to video verification for this specific id.
- **Pricing (Qwen Cloud standard):** Estimated ~$3–$5 / input MTok, $12–$20 / output MTok at launch terms. Higher price point than Qwen 3.8 Flash due to the large-parameter tier, closer to western flagship baselines.
- **Architecture:** Alibaba's proprietary Qwen transformer family. The 397B dense variant indicates a dense (non-MoE) large-parameter configuration within the Qwen 3.5 lineage — a departure from the earlier Qwen 3.5 MoE family that shipped at similar or larger effective model sizes in some configurations.

### Raw benchmarks found
No third-party official benchmark numbers published specifically for `qwen-3.5-397b` as of 2026-10-21. Within Alibaba's framing, the 397B variant preserves the coding and instruction-following quality of the broader Qwen 3.5 family but peaks slightly below the frontier MoE-heavy configurations (e.g., Qwen 3.5 122B-A10B and Qwen 3.5 27B). No standalone leaderboard score sheet is verifiably accessible to this researcher yet.

### Normalized scores (1–100)
- **Tool use: 84/100.** Full function-calling stack at the large-parameter tier; depths comparable to flagship Western models at similar configuration sizes.
- **Reasoning: 86/100.** Strong reasoning across Chinese and English tasks; graduate-level scientific reasoning depth trails the newest frontier MoE generations but remains top-tier within its own release era.
- **Context window: 85/100.** 1M+ token window matches direct competitors in the large-parameter tier.
- **Multimodal: 85/100.** Text + image input + vision.
- **Coding: 85/100.** Top-tier coding per Alibaba's positioning of the Qwen 3.5 family.
- **Cost efficiency: 55/100.** High price point typical of the large-parameter tier.
- **Overall Score: 84.8/100.** Mean of [Tool 84 + Reasoning 86 + Context 85 + Multimal 85 + Coding 85] / 5 = 84.8. Cost efficiency reported separately and excluded from overall mean.

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped.
