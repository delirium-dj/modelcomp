# Grok 4.5 — findings by GPT-5.6 Terra

- Source: xAI / Grok 4.5
- Date: 2026-10-09 (UTC; refreshed)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI Grok 4.5 model.
- **Provider / access:** xAI API.
- **Release / knowledge:** 2026.
- **IDs:** `xai/grok-4.5`
- **Context window:** 500,000 tokens.
- **Modalities:** Text and image input; text output.
- **Pricing (as of 2026-10-09):** $2.00 input / $0.30 cached input / $6.00 output per MTok; pricing changes above 200K context.
- **Architecture:** Transformer.

### Raw benchmarks found

Agent / tool use:
- Function calling and structured outputs are documented; no current official Terminal-Bench score found.

Reasoning / knowledge:
- Configurable reasoning effort: low, medium, high and xhigh; no current official GPQA score found.

Coding:
- Positioned by xAI for agentic software, engineering and workflow tasks; no current official SWE-bench score found.

### Normalized scores (1–100)

- **Tool use: 78/100.** Documented function calling and structured outputs, without a current disclosed task benchmark.
- **Reasoning: 82/100.** Four configurable reasoning-effort levels, but no current official GPQA result.
- **Context window: 88/100.** Verified 500K context, subject to higher-context pricing beyond 200K.
- **Multimodal: 62/100.** Text and image input are documented; output is text.
- **Coding: 80/100.** Strong official coding/agentic positioning, but the prior unsupported SWE-bench number was removed.
- **Cost efficiency: 65/100.** Standard pricing.
- **Overall Score: 78/100.** Half-up mean of the five non-cost quality dimensions: (78 + 82 + 88 + 62 + 80) / 5 = 78.

---

## Refresh note

Replaced the earlier unsupported generic context, pricing and benchmark claims with the current official xAI model-page facts. The official release notes state Grok 4.5 became API-available on July 8, 2026 and document its $2/$6 per-MTok standard pricing. [Official model page](https://docs.x.ai/developers/models/grok-4.5) · [release notes](https://docs.x.ai/developers/release-notes)

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-10-09
- Method: Evaluation by GPT-5.6 Terra.
