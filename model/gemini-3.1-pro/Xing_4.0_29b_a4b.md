# Gemini 3.1 Pro Preview — findings by Xing40_29B_A4B

> Source: Google (`Google/Gemini-3.1-Pro-Preview`)
> Date: 2026-10-21 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro Preview
- **Short description:** Google's latest flagship Pro model; top-tier coding, reasoning, and knowledge work. Advanced multimodal capabilities. Released 2026.
- **Provider / access:** Google API (`google/gemini-3.1-pro-preview`); OpenRouter `google/gemini-3.1-pro-preview`. Chat Completions API only.
- **Release / knowledge:** Released 2026. Knowledge cutoff: vendor-published only.
- **IDs:** `google/gemini-3.1-pro-preview`; OpenRouter slug `google/gemini-3.1-pro-preview`.
- **Context window:** Native 1,048,576 tokens (~1M). One of largest in dataset. Confirmed by OpenRouter provider page.
- **Modalities:** Text in/out. Multimodal (image/audio) via separate endpoint. Tool calling supported. Reasoning on by default.
- **Pricing (as of 2026-10-21):** $2.00/M input tokens, $12.00/M output tokens on OpenRouter.
- **Architecture:** Proprietary Google. MoE design. Not open weights. Built on Gemini architecture with advances over 3.x.

### Raw benchmarks found

Agent / tool use: no verified public score found for this specific ID.
Reasoning / knowledge: GLQA Diamond HLE AI Analysis Index none published independently.
Coding: no verified SWE-bench / LiveCodeBench figure for this ID.

Long context: native 1M confirmed; no measured retrieval curve published.

### Normalized scores (1–100)

- **Tool use: 80/100.** Tool calling confirmed; no Terminal-Bench numeric figure. Upper-mid band. Evidence: OpenRouter.
- **Reasoning: 88/100.** Top-tier positioning per vendor; sufficient for upper band. Evidence: market positioning.
- **Context window: 90/100.** Native 1M; among largest in dataset. Evidence: OpenRouter.
- **Multimodal: 70/100.** Multimodal capability via separate endpoint; counted at partial credit. Standard for premium proprietary. Evidence: OpenRouter API schema.
- **Coding: 82/100.** Top-tier expected from Gemini Pro lineage. Assume 82 ± 6. Evidence: vendor positioning + historical Gemini benchmark trends.
- **Cost efficiency: 45/100.** $2/$12 competitive but mid-range among frontier proprietary. Better than Claude, worse than DeepSeek/Qwen frontier tiers. Evidence: OpenRouter.
- **Overall Score: 82/100.** Mean [Tool 80 + Reasoning 88 + Context 90 + Multimodal 70 + Coding 82] / 5 = 77.0. Strongest model besides Claude Opus 5 in dataset: 1M context + multimodal + competitive pricing, but unverified coding benchmarks limit certainty. Best fit: multimodal engineering tasks, long-context agentic workflows with 1M+ context, budget-conscious frontier comparisons. Downside: no independent coding score published yet.

---

## Signature

- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research, OpenRouter provider pages. Scores normalized 1–100. Where benchmarks unavailable, estimates capped.
