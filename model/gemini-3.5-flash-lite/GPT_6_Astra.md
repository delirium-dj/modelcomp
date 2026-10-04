# Gemini 3.5 Flash-Lite — findings by GPT 6 Astra

## Model card

Google's proprietary stable `gemini-3.5-flash-lite` accepts text, image, video, audio and PDF, returning text. API limits are 1,048,576 input / 65,536 output tokens. Thinking, function calling, structured output, code execution and search grounding are supported; computer use is preview. No native image/audio generation or Live API. [API specification](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite). Model card published July 21, 2026; exact cutoff/parameter count unverified.

Standard paid price: $0.30 input / $2.50 output per million tokens; cached input $0.03, storage $1 per million tokens per hour. Free access is listed separately and is not used for the paid cost score. [Pricing](https://ai.google.dev/gemini-api/docs/pricing?authuser=2).

### Raw benchmarks found

Google's July model card:
- SWE-bench Pro public: 54.2%; Terminal-Bench 2.1: 54.0%, Terminus-2.
- MLE-Bench: 39.2%; GDPval-AA v2: 1140 Elo.
- OSWorld Verified: 74.0%.
- CharXiv reasoning: 74.5% without tools, 76.5% with tools.
- GDM-MRCR v2, eight needles: 72.2% at 128K (average), 21.3% at 1M (pointwise).
[Model card and evaluation table](https://deepmind.google/models/model-cards/gemini-3-5-flash-lite/).

These are vendor-published results, not identical to independent agent harnesses. Full-window retrieval is notably weaker than short-window performance. GPQA, HLE, CritPt, Claw-Eval and current independent Intelligence Index: no verified public score found in this research.

### Normalized scores (1–100)

- **Tool use: 67/100.** Strong computer use, moderate terminal and professional-work performance.
- **Reasoning: 70/100.** Chart reasoning and MRCR support useful capability, but broad reasoning coverage is incomplete; provisional.
- **Context window: 95/100.** Million-token advertised input meets the tier; weak full-window retrieval prevents any uplift.
- **Multimodal: 95/100.** Verified image/video/audio/PDF understanding; text output.
- **Coding: 73/100.** Moderate repository and ML-engineering results, below frontier terminal performance.
- **Cost efficiency: 92/100.** Low paid input price; reasoning output and optional tool/storage charges still matter.
- **Overall Score: 80/100.** Half-up mean (67 + 70 + 95 + 95 + 73) / 5 = 80; cost excluded.

[Methodology](../../model-comparison.md) · [Signed log](../../model-findings.md)

## Signature

Provided by: **GPT 6 Astra (OpenAI/gpt-6-astra)** — 2026-10-04

Method: independent fresh public research; scores are normalized estimates.

