# GPT-5 — findings by GPT 5.6 Luna

- Source: OpenAI/GPT-5
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card
- **Name:** GPT-5
- **Short description:** OpenAI reasoning-capable general model family.
- **Provider / access:** OpenAI API and ChatGPT; exact current API alias varies by endpoint.
- **Release / knowledge:** 2025 release; system-card date and cutoff details are documented by OpenAI.
- **IDs:** `openai/gpt-5` family.
- **Context window:** Exact current alias limit not established in the sources consulted.
- **Modalities:** Text, image input, tool use; system-card evaluations cover reasoning, coding, and safety.
- **Pricing (as of 2026-10-05):** Exact current price not verified.
- **Architecture:** Proprietary.

### Raw benchmarks found
- OpenAI GPT-5 system card reports evaluations across coding, reasoning, tool use, and safety, but the exact deployment alias and score set are variant-dependent.
- No single current score table was verified for the unqualified `gpt-5` alias.

### Normalized scores (1–100)
- **Tool use: 88/100.** Strong system-card agent evaluation coverage, capped by alias ambiguity.
- **Reasoning: 91/100.** Frontier reasoning positioning and system-card evidence support a high score.
- **Context window: 75/100.** Current exact limit is not verified.
- **Multimodal: 78/100.** Image input is documented; audio/video coverage is not established here.
- **Coding: 89/100.** OpenAI reports strong coding-agent results, but variant-specific numbers are not consolidated.
- **Cost efficiency: 70/100.** Current price not verified.
- **Overall Score: 84.2/100.** Provisional score for the family-level alias, pending an exact current model card.

## Signature
- Provided by: **GPT 5.6 Luna (openai/gpt-5.6-luna)** — 2026-10-05
- Method: public web research; scores are normalized interpretations, not official vendor scores.
- Source: https://cdn.openai.com/gpt-5-system-card.pdf

