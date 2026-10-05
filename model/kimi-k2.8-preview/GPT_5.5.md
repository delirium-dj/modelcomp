# Kimi K2.8 Preview — findings by GPT 5.5

- Source: Moonshot AI/Kimi (`kimi-k2.8-preview`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.8 Preview
- **Short description:** Preview Kimi Code model advertised around a 1M-token context window and positioned between K2.7 and K3-era models.
- **Provider / access:** Kimi/Moonshot product surfaces; exact public API token ID and per-token API pricing not verified.
- **Release / knowledge:** September 2026 preview; knowledge cutoff not stated.
- **IDs:** `kimi-k2.8-preview`; exact API ID not verified.
- **Context window:** Public summaries report **1,048,576 tokens** available in Kimi Code membership tiers.
- **Modalities:** Text/code in and text/code out; coding-agent oriented. No verified native multimodal support.
- **Pricing (as of 2026-10-05):** Membership-plan access reported; no canonical per-token API price found.
- **Architecture:** Proprietary/undisclosed preview; parameters not published in public summaries.

### Raw benchmarks found

Agent / tool use:

- Public K2.8 Preview summaries explicitly state no independently verified benchmark score exists yet.
- No verified Toolathlon/Tau/MCP score found for the exact preview.

Reasoning / knowledge:

- No verified GPQA/HLE/AA index score found for exact K2.8 Preview.

Coding:

- Marketed as a Kimi Code preview model, but no verified public SWE-bench, LiveCodeBench, or Moonshot benchmark value found for exact K2.8 Preview.

Long context:

- Public summaries report **1,048,576-token** context.

### Normalized scores (1–100)

- **Tool use: 38/100.** Coding-agent positioning suggests tool relevance, but there are no verified benchmark numbers.
- **Reasoning: 45/100.** Likely stronger than older Kimi small models, but evidence is mostly product positioning.
- **Context window: 96/100.** The 1,048,576-token context claim earns near-top context credit.
- **Multimodal: 15/100.** No native multimodal capability was verified.
- **Coding: 52/100.** Coding-preview positioning supports moderate credit, capped hard by absence of standard scores.
- **Cost efficiency: 55/100.** Membership access may be attractive, but no per-token price was verified.
- **Overall Score: 49/100.** Half-up mean of the five quality dimensions; best fit is exploratory long-context Kimi Code use, not benchmark-driven selection.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

