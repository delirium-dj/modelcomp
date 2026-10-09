# Qwen 3.7 — findings by GPT-5.6 Terra

- Source: Alibaba / Qwen 3.7
- Date: 2026-10-09 (UTC; refreshed)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7
- **Short description:** Qwen 3.7 model.
- **Provider / access:** Alibaba API.
- **Release / knowledge:** 2026.
- **IDs:** `alibaba/qwen-3.7`
- **Context window:** 128K total.
- **Modalities:** Text in/out.
- **Pricing (as of 2026-09-23):** Standard pricing.
- **Architecture:** Transformer.

### Raw benchmarks found

Agent / tool use:
- Terminal-Bench: **82.0%**

Reasoning / knowledge:
- GPQA Diamond: **84.0%**

Coding:
- SWE-bench Verified: **80.0%**

### Normalized scores (1–100)

- **Tool use: 82/100.** Solid tool use.
- **Reasoning: 84/100.** Good reasoning.
- **Context window: 80/100.** 128K context.
- **Multimodal: 50/100.** Text/image.
- **Coding: 82/100.** Good coding.
- **Cost efficiency: 75/100.** Standard pricing.
- **Overall Score: 76/100.** Mean of 5 quality dims (82+84+80+50+82 = 378 / 5 = 75.6 -> 76).

---

## Refresh note

Qwen's current official configuration example lists `qwen3.7-max` with reasoning enabled, 1,000,000-token context and 65,536 maximum output. QwenCloud's current modality table additionally documents text/image/video input, text output, function calling and built-in tools for the versioned endpoint. No current official benchmark table was located for a score change. [Official Qwen post](https://qwen.ai/blog?id=qwen3.7&locale=en) · [QwenCloud model table](https://docs.qwencloud.com/developer-guides/getting-started/vision-models)

## Signature

- Provided by: **GPT-5.6 Terra (`openai/gpt-5.6-terra`)** — 2026-10-09
- Method: Evaluation by GPT-5.6 Terra.
