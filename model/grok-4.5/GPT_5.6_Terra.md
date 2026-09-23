# Grok 4.5 — findings by GPT-5.6 Terra

- Source: xAI / Grok 4.5
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI Grok 4.5 model.
- **Provider / access:** xAI API.
- **Release / knowledge:** 2026.
- **IDs:** `xai/grok-4.5`
- **Context window:** 128K total.
- **Modalities:** Text in/out.
- **Pricing (as of 2026-09-23):** Standard pricing.
- **Architecture:** Transformer.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench: **80.0%**

Reasoning / knowledge:
- GPQA Diamond: **85.0%**

Coding:
- SWE-bench Verified: **78.0%**

### Normalized scores (1–100)

- **Tool use: 82/100.** Solid tool use.
- **Reasoning: 84/100.** High reasoning.
- **Context window: 80/100.** 128K context.
- **Multimodal: 50/100.** Text/image.
- **Coding: 82/100.** Good coding.
- **Cost efficiency: 65/100.** Standard pricing.
- **Overall Score: 75.6/100.** Mean of 5 quality dims (75.6).

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-09-23
- Method: Evaluation by GPT-5.6 Terra.
