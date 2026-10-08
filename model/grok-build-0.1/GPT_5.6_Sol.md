# Grok Build 0.1 — findings by GPT 5.6 Sol

- Source: xAI / routed model (`x-ai/grok-build-0.1`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** Dedicated low-cost coding model originally used by the Grok Build developer agent.
- **Provider / access:** Routed through providers including OpenRouter and Vercel AI Gateway; official architecture details are sparse.
- **Context window:** 256K tokens.
- **Modalities:** Text input and output; no verified native vision support.
- **Pricing:** Approximately $1/M input and $2/M output on documented routes.

### Raw benchmarks found

- LiveBench overall **67.78**, reasoning **76.37**, mathematics **78.43**, coding **65.39**, and agentic coding **45.81**.
- Artificial Analysis Intelligence Index **27.2**.
- Exact-model evidence is aggregated rather than first-party, so interpretation is intentionally conservative ([Rank.ai summary](https://www.rank.ai/llm-leaderboard/grok-build-0-1), [benchmark detail](https://favllm.com/models/xai--grok-build-0-1)).

### Normalized scores (1–100)

- **Tool use: 75/100.** Agentic coding 45.81 suggests useful autonomy but a meaningful gap from leading agents.
- **Reasoning: 78/100.** LiveBench reasoning 76.37 and math 78.43 are strong, while the composite intelligence result is more modest.
- **Context window: 82/100.** 256K capacity is well suited to sizable repositories, though no exact retention benchmark was found.
- **Multimodal: 15/100.** No native image, audio, or video capability was verified for this exact model.
- **Coding: 75/100.** LiveBench coding 65.39 is capable, capped by agentic coding 45.81 and sparse provider documentation.
- **Cost efficiency: 92/100.** $1/$2 token pricing is attractive for a dedicated coding model.
- **Overall Score: 65/100.** Half-up mean of the five non-cost dimensions; a practical budget coder whose overall is reduced by text-only input.

---

## Signature

- Provided by: **GPT 5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-08
- Method: Fresh public internet research using exact-model public leaderboard and routing records; scores are normalized interpretations.
- Future sources: add a new file next to this one using the same headings.
