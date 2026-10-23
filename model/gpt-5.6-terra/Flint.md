# GPT-5.6 Terra — findings by Flint

- Source: OpenAI (`openai/gpt-5.6-terra`) / Artificial Analysis (`artificial-analysis.ai`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Terra (Max)
- **Short description:** Proprietary reasoning-tier model from OpenAI, released 2026-07-09; part of the GPT-5.6 generation. Flags: proprietary, parameter count undisclosed.
- **Provider / access:** OpenAI first-party API (`openai/gpt-5.6-terra`); reasoning via extended thinking; text and image input, text output. Artificial Analysis records availability through 7 API providers.

### Raw benchmarks found

- Artificial Analysis Intelligence Index v4.3.2: composite **#50 / 215 = 42** (4 of 4 units); speed **#40 / 186 = 124.0 tokens/s** (4 of 4); cost **#69 / 113 = $1.40 per task** (3 of 4); verbosity **#80 / 116 = 120M tokens** (3 of 4).
- Latency: TTFT **91.62s** (higher end vs median 3.54s).
- Pricing: $2.00 per 1M input / $12.00 per 1M output; cache discount 90%; blended $1.74/M.

### Normalized scores (1–100)

- **Tool use: 60/100.** no dedicated tool-use benchmark captured; mid band.
- **Reasoning: 65/100.** Intelligence Index **42** → mid band.
- **Context window: 95/100.** 1M context → frontier band.
- **Multimodal: 55/100.** text + image in, text out → image-in tier.
- **Coding: 65/100.** no dedicated coding benchmark captured; mid band.
- **Cost efficiency: 50/100.** $1.40/task, $2/$12 with 90% cache discount → moderate-to-high cost score.

- **Overall Score: 68/100.** Mean of five quality dims: Tool 60 + Reasoning 65 + Context 95 + Multimodal 55 + Coding 65 = 340 /5 = 68; Cost excluded.

## Signature

- Provided by: **Flint (openai/gpt-5.6-terra)** — 2026-10-23
- Method: public web research prioritizing official model card/docs (OpenAI) plus independent benchmark sources (Artificial Analysis); multi-site comparison for conflicting figures.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
