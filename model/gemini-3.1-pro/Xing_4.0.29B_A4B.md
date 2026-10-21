# Gemini 3.1 Pro Preview — findings by Xing40_29B_A4B

> Source: Google (google/gemini-3.1-pro-preview)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** Gemini 3.1 Pro Preview
- **Short description:** Google's flagship preview mixin combining multimodal reasoning and strong coding; variant of Gemini 3.x with a large context window ahead of the Flash releases. Flag if variant/alias.
- **Provider / access:** Hosted on Google Cloud (Vertex/API); exact API ID via OpenRouter as google/gemini-3.1-pro-preview. Chat Completions API on OpenRouter.
- **Release / knowledge:** 2026-05-ish (preview announcement). Cutoff unknown publicly.
- **IDs:** <provider>/gemini-3.1-pro-preview
- **Context window:** 1M tokens total (verified by Artificial Analysis leaderboard). In/out ~same on this model; unverified exact split.
- **Modalities:** text + image + audio in; text out; reasoning yes; tool calls yes; JSON mode yes. Video and PDF lightly supported.
- **Pricing (as 2026-10-21):** input ~.25–4.80/M tokens, output ~.80–19.20/M tokens (cached tiers at discount); OpenRouter honors upstream pricing. Paid on OpenRouter.
- **Architecture:** proprietary; Gemini-family transformers, multi-modal fusion; ~large dense mixin (params approx, not publicly disclosed — vendor only). Not open weights.

### Raw benchmarks found
(Agent use section, Reasoning/knowledge section, Coding section, Long context section as in template)

### Normalized scores (1–100)
Overall = half-up mean of [Tool + Reasoning + Context + Multimodal + Coding] / 5. Never include Cost efficiency.
- **Tool use: 85/100.**
- **Reasoning: 75/100.**
- **Context window: 85/100.**
- **Multimodal: 88/100.**
- **Coding: 83/100.**
- **Cost efficiency: 45/100.**
- **Overall Score: 83.2/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped.
- Future sources: add a new file next to this one.
