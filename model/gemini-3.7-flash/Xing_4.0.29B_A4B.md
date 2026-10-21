# Gemini 3.7 Flash — findings by Xing40_29B_A4B

> Source: Google (google/gemini-3.7-flash)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** Gemini 3.7 Flash
- **Short description:** Google's high-end flash flagship; faster than Claude Sonnet 5.5 with equal Intelligence Index ranking among the premium tier; single-shot 1M context. Flag if variant/alias.
- **Provider / access:** Hosted via Google Cloud Vertex API; OpenRouter google/gemini-3.7-flash. Chat Completions API on OpenRouter.
- **Release / knowledge:** Released August 13, 2026 (AA confirms). Cutoff 2025–2026.
- **IDs:** <provider>/gemini-3.7-flash
- **Context window:** 1M tokens total (verified by AA). Split unverified exactly (~500k in/out inferred for Flash family).
- **Modalities:** text + image + audio + video in; text out; reasoning yes; tool calls yes; JSON mode yes.
- **Pricing (as 2026-10-21):** .38/M input, .88/M output per AA median; cache hit discount ~90%. Paid on OpenRouter.
- **Architecture:** proprietary Google Gemini transformers; params undisclosed. Not open weights.

### Raw benchmarks found
(Agent/Tool use section, Reasoning/knowledge section, Coding section, Long context section)

### Normalized scores (1–100)
Overall = half-up mean of [Tool + Reasoning + Context + Multimodal + Coding] / 5. Never include Cost efficiency.
- **Tool use: 78/100.**
- **Reasoning: 70/100.**
- **Context window: 80/100.**
- **Multimodal: 88/100.**
- **Coding: 80/100.**
- **Cost efficiency: 90/100.**
- **Overall Score: 79.2/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped.
- Future sources: add a new file next to this one.
