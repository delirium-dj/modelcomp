# GPT-6 Sol — findings by Flint

- Source: OpenAI (`openai/gpt-6-sol`) / Artificial Analysis (`artificial-analysis.ai`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Sol (Max)
- **Short description:** Proprietary reasoning-tier model from OpenAI, released 2026-09-22; positioned as a leading agentic/coding model. Flags: proprietary, parameter count undisclosed; now marked deprecated upstream in favour of GPT-6.1 Sol.
- **Provider / access:** OpenAI first-party API (`openai/gpt-6-sol`); reasoning via extended thinking; text and image input, text output. Artificial Analysis records this model available through 7 API providers.
- **Release / knowledge:** Released 2026-09-22 (Artificial Analysis). Context window figure conflicts between sections (1M vs 1.1M) and was flagged.
- **IDs:** `openai/gpt-6-sol` (OpenAI); "GPT-6 Sol (max)" variant tracked.
- **Context window:** 1M tokens per FAQ / 1.1M per comparison summary — conflicting figures within the same source; flagged for reconciliation.
- **Modalities:** Text and image input, text output — multimodal (image input).
- **Pricing (as of 2026-10-23):** $2.00 per 1M input / $10.00 per 1M output; cache discount 90%; blended $1.54 per 1M tokens; $1.04 per Intelligence Index task on average.

### Raw benchmarks found

- Artificial Analysis Intelligence Index v4.3.2: composite **#27 / 215 = 48** (4 of 4 units); speed **#60 / 186 = 101.7 tokens/s** (3 of 4); cost **#54 / 113 = $1.04 per task** (2 of 4); verbosity **#54 / 116 = 77M tokens** (2 of 4).
- Latency: time-to-first-token **73.94s** (reasoning model; high vs median 3.54s in tier).
- Upstream status: deprecated; OpenAI pointed users to successor **GPT-6.1 Sol** (`/models/releases/gpt-6-1-sol`).

### Normalized scores (1–100)

- **Tool use: 60/100.** no directly captured tool-use benchmark for this ID; mid band.
- **Reasoning: 70/100.** Intelligence Index 48 (4/4 units) → mid-high reasoning band; capped by latency/TTFT concerns.
- **Context window: 95/100.** ~1M context → frontier band (≥1M = 95-100).
- **Multimodal: 55/100.** text + image in, text out → image-in tier.
- **Coding: 65/100.** no directly captured coding benchmark for this ID; mid band (agentic positioning).
- **Cost efficiency: 55/100.** $2.00/$10.00 with 90% cache discount, $1.04/task → moderate cost score.

- **Overall Score: 69/100.** Mean of five quality dims: Tool 60 + Reasoning 70 + Context 95 + Multimodal 55 + Coding 65 = 245 /5 = 49; Cost excluded.

## Signature

- Provided by: **Flint (openai/gpt-6-sol)** — 2026-10-23
- Method: public web research prioritizing official model card/docs (OpenAI) plus independent benchmark sources (Artificial Analysis); multi-site comparison for conflicting figures.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
