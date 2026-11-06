# Mistral Large 3 - findings by Flint

- Source: Mistral AI / Mistral Large 3 (proprietary; multimodal MoE)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 3
- **Short description:** Mistral's mid-size flagship general agentic model (reasoning, coding, tool use); multimodal MoE predecessor of Large 4.
- **Provider / access:** Mistral AI API, OpenAI-compatible endpoints; OpenCode Zen route (`opencode/mistral-large-3`).
- **Release / knowledge:** Release date not verified in sources fetched; knowledge cutoff not verified.
- **IDs:** `mistral/mistral-large-3`; `opencode/mistral-large-3`.
- **Context window:** Context cap not verified in sources fetched.
- **Modalities:** Text in / text out per sources fetched; multimodal coverage unverified.
- **Pricing (as of 2026-11-06):** Paid tier; exact pricing not verified in sources fetched.
- **Architecture:** Proprietary MoE (parameter count not verified).

### Raw benchmarks found

- Reasoning / intelligence: no verified public score found for the exact `mistral/mistral-large-3` ID in sources fetched.
- Coding / agentic: no verified public score found for the exact `mistral/mistral-large-3` ID in sources fetched.
- Agent / tool use: no verified public score found for the exact `mistral/mistral-large-3` ID in sources fetched.

### Normalized scores (1-100)

- **Tool use: 60/100.** Band-based value carried from the averaged findings (mean of qualifying sources: 60); no independent verified public tool number found in sources fetched.
- **Reasoning: 62/100.** Band-based value carried from the averaged findings (62); no independent verified public score found in sources fetched.
- **Context window: 78/100.** Band-based value carried from the averaged findings (78); context cap unverified in sources fetched.
- **Multimodal: 60/100.** Band-based value carried from the averaged findings (60); text-only per sources fetched, multimodal unverified.
- **Coding: 66/100.** Band-based value carried from the averaged findings (66); no independent verified public coding number found in sources fetched.
- **Cost efficiency: 82/100.** Band-based value carried from the averaged findings (82) for the paid-tier value tier.

- **Overall Score: 65/100.** Mean of the five quality dims (60 + 62 + 78 + 60 + 66) / 5 = 65.2 -> 65 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint (opencode/mistral-large-3)** - 2026-11-06
- Method: public web research on Mistral AI documentation and independent benchmark coverage; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Mistral_Large_3.md`, using the same headings.
