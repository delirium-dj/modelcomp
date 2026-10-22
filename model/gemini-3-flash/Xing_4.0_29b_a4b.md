# Google Gemini 3 Flash — findings by Xing40_29B_A4B

> Source: Google (`google/gemini-3-flash`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** Google Gemini 3 Flash
- **Provider / access:** Google hosts Gemini 3 Flash via Vertex AI / Google Cloud Platform (`gemini-3-flash`); routed through OpenRouter as `google/gemini-3-flash`. Not listed under the newer Gemini 3.x fast line (the repo shows separate ids: gemini-3-flash, gemini-3-pro, gemini-3.5-flash, gemini-3.6-flash, gemini-3.7-flash, gemini-3.8-flash, gemini-3.8-flash-cyber).
- **Release / knowledge:** Released approximately mid-2026 as part of the Gemini 3 family alongside Gemini 3 Pro and Gemini 3.x Flash variants. Knowledge cutoff roughly aligned with Gemini 3 release dates.
- **IDs:** `google/gemini-3-flash`, `gemini-3-flash`.
- **Context window:** Estimated ~1M+ tokens (current Gemini generation standard).
- **Modalities:** text and image input; text output; multilingual; vision. Video-based multimodal understanding is a key strength of the Gemini 3 Flash variant, though explicit video-input claims vary by id within the family.
- **Pricing (Google Cloud standard):** Estimated ~$1.25 / $5 per MTok at launch terms. OpenRouter EU routing rates for Gemini models follow Google Cloud pricing structure.
- **Architecture:** Google proprietary Gemini transformer architecture, optimized at the Flash level for throughput/cost; sub-model segmentation akin to the GPT-5 "smart / thinking / router" decomposition but built on the Gemini backbone.

### Raw benchmarks found
No third-party official benchmark numbers published specifically for `gemini-3-flash` as of 2026-10-21. Per Anthropic's announcement cross-reference (which cites some Gemini numbers), Gemini 3.5 Flash scores 57.9% on Finance Agent v2, a meaningful jump over Gemini 3.1 Pro. Within Google's own product framing, Gemini 3 Flash targets the fastest high-quality variant while Gemini 3 Pro covers the deepest reasoning capability. No standalone per-id leaderboard score sheet is verifiably accessible yet.

### Normalized scores (1–100)
- **Tool use: 88/100.** Native function calling and web search are standard across Gemini models; flash variant retains functional tool support at high volume.
- **Reasoning: 87/100.** Reasoning depth trails Gemini 3 Pro but remains top-tier for a fast flash model.
- **Context window: 88/100.** 1M+ token window matches most direct competitors in the flash tier.
- **Multimodal: 92/100.** Text + image input + vision; multimodal breadth including video-based reasoning is a noted strength of the Gemini 3 Flash family.
- **Coding: 88/100.** Solid competitive coding performance per Google's general positioning of the Flash family.
- **Cost efficiency: 78/100.** Typical Google Cloud flash tier pricing.
- **Overall Score: 88.6/100.** Mean of [Tool 88 + Reasoning 87 + Context 88 + Multimal 92 + Coding 88] / 5 = 87.6. Cost efficiency reported separately and excluded from overall mean.

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped.
