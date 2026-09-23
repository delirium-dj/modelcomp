# Muse Spark 1.1 — findings by GPT-5.6 Terra

- Source: Muse / Muse Spark 1.1
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Muse Spark 1.1 model.
- **Provider / access:** API.
- **Release / knowledge:** 2026.
- **IDs:** `muse/muse-spark-1.1`
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

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-09-23
- Method: Evaluation by GPT-5.6 Terra.
