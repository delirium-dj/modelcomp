# Omen Alpha — findings by GPT 5.6 Terra
- Source: Omen Alpha/omen-alpha
- Date: 2026-10-09 (UTC; refreshed)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md
## Model card
- **Name:** Omen Alpha
- **Short description:** Anonymous low-cost coding/agent model served through Tokenra.
- **Provider / access:** OpenAI-compatible Chat Completions, ID `omen-alpha` ([official site](https://omenalpha.io/)).
- **Release / knowledge:** preview; publisher, date and cutoff undisclosed.
- **IDs:** `omen-alpha`.
- **Context window:** not publicly disclosed in reviewed source.
- **Modalities:** text in/out; tool support not independently specified.
- **Pricing (as of 2026-09-29):** $0.20 input, $0.66 output, $0.04 cached input per 1M tokens; zero-day retention.
- **Architecture:** undisclosed.
### Raw benchmarks found
Coding:
- OpenCode coding score: **23.14/40**, rank **#15**, across four projects (provider benchmark snapshot, dated 2026-09-04).
Long context:
- No verified context or retrieval score found.
### Normalized scores (1–100)
- **Tool use: 60/100.** Agent positioning exists, but no tool-use benchmark was published.
- **Reasoning: 65/100.** No verified general-reasoning benchmark was found.
- **Context window: 55/100.** Limit not disclosed.
- **Multimodal: 15/100.** Text-only evidence in reviewed materials.
- **Coding: 70/100.** OpenCode 23.14/40 and #15 demonstrate competitive practical coding, but breadth is limited.
- **Cost efficiency: 96/100.** $0.20/$0.66 per million is exceptionally inexpensive.
- **Overall Score: 53/100.** Half-up quality mean; an economical coding trial model with opaque specs and narrow evaluation.
## Refresh note

Fresh public-source recheck found no newer authoritative model card or comparable benchmark table for this exact route. Existing evidence is retained.

## Signature
- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-09
- Method: public internet research; normalized interpretations, not vendor scores.
