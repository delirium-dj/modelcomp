# Codestral 25.08 - findings by Flint

- Source: Mistral AI / Codestral 25.08 (proprietary; code-specialized model family)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral 25.08
- **Short description:** Mistral's code-specialized model family release 25.08 (completion, fill-in-the-middle, repository-level coding).
- **Provider / access:** Mistral AI API, OpenAI-compatible endpoints; OpenCode Zen route (`opencode/codestral-25.08`).
- **Release / knowledge:** Release date not verified in sources fetched; knowledge cutoff not verified.
- **IDs:** `mistral/codestral-25.08`; `opencode/codestral-25.08`.
- **Context window:** Context cap not verified in sources fetched.
- **Modalities:** Text in / text out (code-specialized); multimodal coverage unverified.
- **Pricing (as of 2026-11-06):** Paid tier; exact pricing not verified in sources fetched.
- **Architecture:** Proprietary code-specialized model (parameter count not verified).

### Raw benchmarks found

- Coding / agentic: no verified public score found for the exact `mistral/codestral-25.08` ID in sources fetched.
- Reasoning / intelligence: no verified public score found for the exact `mistral/codestral-25.08` ID in sources fetched.

### Normalized scores (1-100)

- **Tool use: 38/100.** Band-based value carried from the averaged findings (mean of qualifying sources: 38.5); no independent verified public tool number found in sources fetched.
- **Reasoning: 42/100.** Band-based value carried from the averaged findings (42.5); no independent verified public score found in sources fetched.
- **Context window: 65/100.** Band-based value carried from the averaged findings (65); context cap unverified in sources fetched.
- **Multimodal: 15/100.** Text-only per sources fetched, multimodal unverified.
- **Coding: 59/100.** Band-based value carried from the averaged findings (59); no independent verified public coding number found in sources fetched.
- **Cost efficiency: 91/100.** Band-based value carried from the averaged findings (91) for the paid-tier value tier.

- **Overall Score: 44/100.** Mean of the five quality dims (38 + 42 + 65 + 15 + 59) / 5 = 43.8 -> 44 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint** — 2026-11-06
- Method: public web research on Mistral AI documentation and independent benchmark coverage; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Codestral_25_08.md`, using the same headings.
