# Mistral Large 4 - findings by Flint

- Source: Mistral AI / Mistral Large 4 (proprietary; multimodal MoE)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4 (Mistral Large 4 Preview per Artificial Analysis)
- **Short description:** Mistral's 1T-parameter multimodal MoE for reasoning, coding, and agentic work; multilingual European option.
- **Provider / access:** Mistral AI API, OpenAI-compatible endpoints; OpenCode Zen / OpenRouter routes (`opencode/mistral-large-4`).
- **Release / knowledge:** Released 2026-10-06; knowledge cutoff not verified in sources found.
- **IDs:** `mistral/mistral-large-4`; `opencode/mistral-large-4`.
- **Context window:** Conflicting sources: models.dev **1,048,576** total / **262,144** out; repo meta.json **131,072** total / **32,768** out; Artificial Analysis **524k** context.
- **Modalities:** Text, image in; text out (models.dev; Artificial Analysis confirms text+image in, text out).
- **Pricing (as of 2026-10-25):** Paid $2.00/$6.00 per 1M (Mistral AI); Artificial Analysis: $1.36 in / $4.18 out, cache discount 90% -> $1.13 effective.

- **Architecture:** Proprietary 1T-parameter multimodal MoE; models.dev: open_weights = false.

### Raw benchmarks found

- Reasoning / intelligence:
  - Artificial Analysis Intelligence Index: **38** (3/4 units for intelligence), rank **#66/215**; Speed **#57/186** (109.1 tok/s); Cost **#58/113**; cost per Intelligence Index task **$1.13**.
- Coding / agentic: vendor model card + agentic claims; no independent coding number found in sources fetched.

### Cross-source comparison

- Context window conflict across three sources (1M vs 131K vs 524k) -> treated as provisional; reasoning score capped by low independent index number.

### Normalized scores (1-100)

- **Tool use: 60/100.** Agentic/tool-use capability claimed by vendor; no independent verified public tool number found in fetched sources.
- **Reasoning: 65/100.** Artificial Analysis Intelligence Index **38 (3/4 units) -> mid**.
- **Context window: 60/100.** Artificial Analysis **524k** context -> mid-high; models.dev 1M and meta.json 131K conflict.
- **Multimodal: 60/100.** Text + image in, text out -> mid-high.
- **Coding: 65/100.** Vendor agentic positioning; no independent verified public coding number found in fetched sources.
- **Cost efficiency: 85/100.** $1.36/$4.18 per 1M, cache discount 90% -> good value tier.

- **Overall Score: 62/100.** Mean of the five quality dims (60 + 65 + 60 + 60 + 65) / 5 = 62; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/mistral-large-4)** - 2026-10-25
- Method: public web research prioritizing official model card/docs plus independent benchmarks - three independent web searches.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.
