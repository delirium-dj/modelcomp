# Codestral - findings by Flint

- Source: Mistral AI / Codestral (proprietary; code-specialized model family)
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Codestral
- **Short description:** Mistral's code-specialized general agentic model (completion, fill-in-the-middle, repository-level coding).
- **Provider / access:** Mistral AI API, OpenAI-compatible endpoints; OpenCode Zen route (`opencode/codestral`).
- **Release / knowledge:** Release date not verified in sources fetched; knowledge cutoff not verified.
- **IDs:** `mistral/codestral`; `opencode/codestral`.
- **Context window:** Context cap not verified in sources fetched.
- **Modalities:** Text in / text out (code-specialized); multimodal coverage unverified.
- **Pricing (as of 2026-11-06):** Paid tier; exact pricing not verified in sources fetched.
- **Architecture:** Proprietary code-specialized model (parameter count not verified).

### Raw benchmarks found

- Coding / agentic: no verified public score found for the exact `mistral/codestral` ID in sources fetched.
- Reasoning / intelligence: no verified public score found for the exact `mistral/codestral` ID in sources fetched.

### Normalized scores (1-100)

- **Tool use: 35/100.** Band-based value carried from the averaged findings (mean of qualifying sources: 35); no independent verified public tool number found in sources fetched.
- **Reasoning: 41/100.** Band-based value carried from the averaged findings (41); no independent verified public score found in sources fetched.
- **Context window: 50/100.** Band-based value carried from the averaged findings (50.5); context cap unverified in sources fetched.
- **Multimodal: 15/100.** Text-only per sources fetched, multimodal unverified.
- **Coding: 56/100.** Band-based value carried from the averaged findings (56); no independent verified public coding number found in sources fetched.
- **Cost efficiency: 90/100.** Band-based value carried from the averaged findings (90) for the paid-tier value tier.

- **Overall Score: 39/100.** Mean of the five quality dims (35 + 41 + 50 + 15 + 56) / 5 = 39.4 -> 39 (half-up); Cost efficiency excluded from the mean.

## Signature

- Provided by: **Flint** — 2026-11-06
- Method: public web research on Mistral AI documentation and independent benchmark coverage; scores are normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Codestral.md`, using the same headings.
