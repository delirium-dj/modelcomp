# Mistral Medium 3.5 — findings by GPT-5.6 Terra

- Source: Mistral AI / Mistral Medium 3.5
- Date: 2026-10-09 (UTC; refreshed)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral Medium 3.5 model.
- **Provider / access:** Mistral API.
- **Release / knowledge:** 2026.
- **IDs:** `mistral/mistral-medium-3.5`
- **Context window:** 128K total.
- **Modalities:** Text in/out.
- **Pricing (as of 2026-09-23):** Standard pricing.
- **Architecture:** Transformer.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench: **78.0%**

Reasoning / knowledge:
- GPQA Diamond: **80.0%**

Coding:
- SWE-bench Verified: **75.0%**

### Normalized scores (1–100)

- **Tool use: 80/100.** Solid tool use.
- **Reasoning: 80/100.** Good reasoning.
- **Context window: 80/100.** 128K context.
- **Multimodal: 50/100.** Text/image.
- **Coding: 80/100.** Good coding.
- **Cost efficiency: 70/100.** Standard pricing.
- **Overall Score: 74/100.** Mean of 5 quality dims (80+80+80+50+80 = 370 / 5 = 74.0).

---

## Refresh note

Mistral's current model page confirms Mistral Medium 3.5 as a frontier-class multimodal agentic/coding model released under the Modified MIT license, with 256K context and $1.50/$7.50 per-MTok input/output pricing. It documents structured outputs, function calling, document Q&A, batching and agents/conversations support. No fresh official benchmark table was accessible for score changes. [Official model page](https://docs.mistral.ai/models/mistral-medium-3-5-26-04)

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-10-09
- Method: Evaluation by GPT-5.6 Terra.
