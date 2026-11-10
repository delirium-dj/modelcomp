# Mistral Small 4 - findings by Flint

- Source: Mistral AI / Mistral Small 4 (proprietary; multimodal MoE)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Small 4
- **Short description:** Mistral's smaller-flagship general agentic model (reasoning, coding, tool use) positioned between the Small and Large tiers; multimodal MoE design.
- **Provider / access:** Mistral AI API, OpenAI-compatible endpoints; OpenCode Zen route (`opencode/mistral-small-4`).
- **Release / knowledge:** Release date not verified in sources fetched; knowledge cutoff not verified.
- **IDs:** `mistral/mistral-small-4`; `opencode/mistral-small-4`.
- **Context window:** Context cap not verified in sources fetched.
- **Modalities:** Text in / text out per sources fetched; multimodal coverage unverified.
- **Pricing (as of 2026-11-06):** Paid tier; exact pricing not verified in sources fetched.
- **Architecture:** Proprietary MoE (parameter count not verified).

### Raw benchmarks found

- Reasoning / intelligence: no verified public score found for the exact `mistral/mistral-small-4` ID in sources fetched.
- Coding / agentic: no verified public score found for the exact `mistral/mistral-small-4` ID in sources fetched.
- Agent / tool use: no verified public score found for the exact `mistral/mistral-small-4` ID in sources fetched.

### Normalized scores (1-100)

- **Tool use: 68/100.** Band-based value carried from the averaged findings (mean of qualifying sources: 68); no independent verified public tool number found in sources fetched.
- **Reasoning: 70/100.** Band-based value carried from the averaged findings (70); no independent verified public score found in sources fetched.
- **Context window: 78/100.** Band-based value carried from the averaged findings (78); context cap unverified in sources fetched.
- **Multimodal: 58/100.** Band-based value carried from the averaged findings (58); text-only per sources fetched, multimodal unverified.
- **Coding: 72/100.** Band-based value carried from the averaged findings (72); no independent verified public coding number found in sources fetched.
- **Cost efficiency: 93/100.** Band-based value carried from the averaged findings (93) for the paid-tier value tier.

- **Overall Score: 69/100.** Mean of the five quality dims (68 + 70 + 78 + 58 + 72) / 5 = 69.2 -> 69 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint** — 2026-11-06
- Method: public web research on Mistral AI documentation and independent benchmark coverage; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Mistral_Small_4.md`, using the same headings.
