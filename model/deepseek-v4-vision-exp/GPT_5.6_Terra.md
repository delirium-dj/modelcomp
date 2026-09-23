# DeepSeek-V4-Flash-Vision-Exp — findings by GPT 5.6 Terra

- Source: DeepSeek/DeepSeek-V4-Flash-Vision-Exp
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Flash-Vision-Exp
- **Short description:** An experimental open-weight vision extension of DeepSeek-V4-Flash, later retired as a hosted model.
- **Provider / access:** DeepSeek API legacy ID `deepseek-v4-flash-vision-exp`; requests now route to V4.1 Flash.
- **Release / knowledge:** 2026-08-21; knowledge cutoff not published.
- **IDs:** `deepseek/deepseek-v4-flash-vision-exp` (no Zen Free ID verified).
- **Context window:** 1M tokens, published in DeepSeek's model configuration/pricing documentation.
- **Modalities:** Text and image input; text output; image URLs, base64, and Files API; Chat Completions, Messages and Responses interfaces.
- **Pricing (historic/current alias):** Flash pricing; current documentation lists off-peak $0.15 input/$0.60 output and peak $0.30/$1.20 per MTok.
- **Architecture:** 305B-parameter MIT-licensed MoE open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.9%** (DeepSeek release/model card).
- Toolathlon-Verified: **75.9%** (DeepSeek model card).
- CyberGym: **75.3%** (DeepSeek model card).
- AutomationBench: **25.7%** (DeepSeek release/model card).
- ApexBench: **36.5%** pass@1; Chartography: **64.3%**; ZeroBench: **35.0%** pass@5 (DeepSeek model card).

Reasoning / knowledge:

- GPQA Diamond / HLE: no verified public score found for this exact model.

Coding:

- DeepSWE: **59.3%**; NL2Repo: **57.7%**; DSBench-Hard: **63.6%** (DeepSeek release/model card).

Long context:

- 1M-token advertised limit; no long-context retrieval score reported.

### Normalized scores (1–100)

- **Tool use: 80/100.** Terminal-Bench 83.9% and Toolathlon 75.9% are strong, while AutomationBench 25.7% limits the score.
- **Reasoning: 65/100.** Vendor describes text parity with V4-Flash but publishes no exact-model GPQA/HLE score.
- **Context window: 96/100.** 1M advertised context with no demonstrated retrieval-at-length result.
- **Multimodal: 78/100.** Verified image input and multimodal-agent results, but text-only output and modest hard-task scores cap it.
- **Coding: 68/100.** DeepSWE 59.3%, NL2Repo 57.7%, and DSBench-Hard 63.6% support a solid agent-coding score.
- **Cost efficiency: 93/100.** Low Flash-class pricing for a 1M-context vision model, but paid API use.
- **Overall Score: 77.4/100.** Mean of the five non-cost quality dimensions: (80 + 65 + 96 + 78 + 68) / 5.

---

## Signature

- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-09-23
- Method: Fresh public internet research using DeepSeek’s official release, documentation and Hugging Face model card; scores are normalized interpretations, not official vendor scores.
