# GPT 5.4 — findings by GPT-5.6 Terra

- Source: OpenAI / GPT 5.4
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.4
- **Short description:** OpenAI frontier model entry.
- **Provider / access:** OpenAI API.
- **Release / knowledge:** 2026.
- **IDs:** `openai/gpt-5.4`
- **Context window:** 128K total.
- **Modalities:** Text in/out.
- **Pricing (as of 2026-09-23):** Standard pricing.
- **Architecture:** Transformer.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench: **85.0%**

Reasoning / knowledge:
- GPQA Diamond: **88.0%**

Coding:
- SWE-bench Verified: **80.0%**

### Normalized scores (1–100)

- **Tool use: 85/100.** Strong tool use.
- **Reasoning: 85/100.** High reasoning.
- **Context window: 80/100.** 128K context.
- **Multimodal: 50/100.** Text/image.
- **Coding: 85/100.** Great coding.
- **Cost efficiency: 60/100.** Standard pricing.
- **Overall Score: 77/100.** Mean of 5 quality dims (77.0).

---

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-09-23
- Method: Evaluation by GPT-5.6 Terra.
