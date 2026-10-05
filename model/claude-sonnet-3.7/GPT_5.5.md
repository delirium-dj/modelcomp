# Claude Sonnet 3.7 — findings by GPT 5.5

- Source: Anthropic (`claude-sonnet-3.7`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude 3.7 Sonnet
- **Short description:** Anthropic's hybrid reasoning Sonnet model from the Claude 3 generation, notable historically for coding and strong practical reasoning at Sonnet pricing.
- **Provider / access:** Anthropic API historically, plus cloud/IDE partner routes; public benchmark notes indicate official deprecation/retirement from some benchmark trackers by 2026.
- **Release / knowledge:** Released February 2025; cutoff not verified.
- **IDs:** `anthropic/claude-3.7-sonnet`, `claude-sonnet-3.7`.
- **Context window:** **200K** tokens.
- **Modalities:** Text and image/PDF input; text output; tool use through Anthropic APIs.
- **Pricing (as of 2026-10-05):** Sonnet-class pricing: **$3/M input**, **$15/M output**, with caching and batch discounts; some older routes may be deprecated.
- **Architecture:** Proprietary Claude model with optional extended thinking.

### Raw benchmarks found

Agent / tool use:

- Anthropic system card reports increased performance across internal agentic tasks and external benchmarks versus Claude 3.5 Sonnet, but no new capability threshold beyond Claude 3.5 Sonnet (new).
- METR public summary lists Claude 3.7 Sonnet in AI R&D task-duration evaluations.

Reasoning / knowledge:

- Public reports cite Claude 3.7 Sonnet Thinking as strong but no longer top-tier; one extended NYT Connections report lists **33.5**.
- Safety-data extraction study reports Claude 3.7 Sonnet **79%** accuracy in one extraction setup, behind Gemini 1.5 Pro at 84% and GPT-4o at 81%.

Coding:

- Public commentary and usage consistently describe Claude 3.7 Sonnet as strong for coding; no exact SWE-bench row was recovered in snippets.

Long context:

- Context window: **200K**.

### Normalized scores (1–100)

- **Tool use: 70/100.** Strong historical Anthropic tool/agent support, but deprecated status and older benchmarks reduce confidence.
- **Reasoning: 73/100.** Extended thinking remains useful, though newer models surpass it.
- **Context window: 76/100.** 200K context is still solid.
- **Multimodal: 68/100.** Image/PDF input is available, without native audio/video output.
- **Coding: 78/100.** Strong historical coding reputation, capped by age and missing exact current rows.
- **Cost efficiency: 66/100.** Sonnet pricing is fair for quality but less attractive versus newer cheaper models.
- **Overall Score: 73/100.** Half-up mean of the five quality dimensions; best fit is legacy Claude workflows where compatibility matters.

---

## Signature

- Provided by: **GPT 5.5 (openai/gpt-5.5)** — 2026-10-05
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

