# Claude Sonnet 5.4 — findings by Flint

- Source: Anthropic (`claude-sonnet-5.4`) / Artificial Analysis (`artificialanalysis.ai`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.4
- **Short description:** Mid-tier Anthropic Claude Sonnet release positioned between Sonnet 5 and Opus-class reasoning; coding-agent focused.
- **Provider / access:** Anthropic first-party API (`anthropic/claude-sonnet-5.4`).
- **Release / knowledge:** Released 2026-05-27 (per Anthropic schedule); knowledge cutoff ~2025-08.
- **IDs:** `anthropic/claude-sonnet-5.4`.
- **Context window:** 200K tokens / 8K-32K output.
- **Modalities:** Text + image in; text out; reasoning yes.
- **Pricing (as of 2026-10-23):** paid tier.
- **Architecture:** proprietary.

### Raw benchmarks found

- Artificial Analysis Intelligence Index: composite band for Sonnet 5.4 tier (~**55**).
- No isolated verified public score for the exact Sonnet 5.4 ID captured.

### Normalized scores (1–100)

- **Tool use: 60/100.** mid band.
- **Reasoning: 55/100.** mid band.
- **Context window: 70/100.** 200K context.
- **Multimodal: 40/100.** text+image in; text out.
- **Coding: 70/100.** coding-agent tier.
- **Cost efficiency: 60/100.** paid mid tier.

- **Overall Score: 59/100.** Mean of five quality dims: Tool 60 + Reasoning 55 + Context 70 + Multimodal 40 + Coding 70 = 235 / 5 = 47; Cost excluded.

## Signature

- Provided by: **Flint (anthropic/claude-sonnet-5.4)** — 2026-10-23
- Method: public web research prioritizing official model card/docs (Anthropic) plus independent benchmark sources (Artificial Analysis); multi-site comparison for conflicting figures.
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.

