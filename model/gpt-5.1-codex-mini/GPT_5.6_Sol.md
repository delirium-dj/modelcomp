# GPT-5.1-Codex Mini — findings by GPT-5.6 Sol

- Source: OpenAI/GPT-5.1-Codex Mini
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex Mini
- **Short description:** OpenAI's smaller, lower-cost GPT-5.1-Codex variant for agentic coding through the Responses API.
- **Provider / access:** Retired OpenAI Responses model `gpt-5.1-codex-mini`; historical OpenRouter and Azure routes.
- **Release / knowledge:** Released 2025-11-13; September 30, 2024 knowledge cutoff.
- **IDs:** `gpt-5.1-codex-mini`; `openai/gpt-5.1-codex-mini`.
- **Context window:** 400,000 total, 272,000 maximum input, and 128,000 maximum output tokens.
- **Modalities:** Text and image input; text output; reasoning, function calling, web search, structured output, and caching.
- **Pricing (as of retirement):** $0.25 input / $2 output / $0.025 cached input per 1M tokens.
- **Architecture:** Proprietary; parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index v4.3.2: **20 estimated**, rank **54/173** in its comparison class. The page states independent component evaluation is forthcoming.
- Output speed: **172.2 tokens/s** and time to first token **10.17s** in Artificial Analysis provider measurements; these are performance, not capability scores.

Reasoning / knowledge:

- The exact-model composite Index is **20 estimated**; no exact public GPQA, HLE, or component score was exposed.

Coding:

- No exact public SWE-bench or LiveCodeBench score found. The model is coding-specialized, but parent Codex figures are not transferred.

Long context:

- 400K context is verified by OpenAI and Artificial Analysis; no exact retrieval-at-length score found.

### Normalized scores (1–100)

- **Tool use: 60/100.** Native function calling and web search plus an estimated composite Index of 20 support practical agents, capped by absent tool-component results.
- **Reasoning: 60/100.** The exact-model estimated Index of 20 is above average, but no independently measured component result is available.
- **Context window: 80/100.** The verified 400K window reaches the methodology's upper mid-tier, without retrieval evidence.
- **Multimodal: 65/100.** Image input is supported, but output is text-only and no exact visual benchmark is public.
- **Coding: 65/100.** Coding specialization and the exact composite support a moderate score; absent SWE-bench evidence prevents a high score.
- **Cost efficiency: 90/100.** $0.25/$2 with a 90% cache discount was inexpensive for a proprietary coding model.
- **Overall Score: 66/100.** Half-up mean `(60 + 60 + 80 + 65 + 65) / 5 = 66`; a fast budget coding model whose endpoint is now retired.

### Sources

- Official OpenAI model documentation: https://platform.openai.com/docs/models/gpt-5.1-codex-mini
- Artificial Analysis exact-model page: https://artificialanalysis.ai/models/gpt-5-1-codex-mini
- OpenRouter route metadata: https://openrouter.ai/openai/gpt-5.1-codex-mini
- Provider catalog cross-check: https://models.dev/api.json

---

## Signature

- Provided by: **GPT-5.6 Sol (openai/gpt-5.6-sol)** — 2026-10-25
- Method: fresh second-pass research using seven exact-name searches, official OpenAI docs, provider catalogs, and exact-model Artificial Analysis evidence; estimated evidence is explicitly capped.
- Future sources: add a new file next to this one using the same headings.
