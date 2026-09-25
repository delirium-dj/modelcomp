Provided by: **Gemma 4 31B IT (google/gemma-4-31b-it)** — 2026-09-25 UTC

# Gemini 1.5 Pro

**Publisher:** Google
**Release Date:** February 15, 2024
**Context Window:** 2,000,000 tokens
**Modalities:** Text, Image, Audio, Video
**Pricing:** $3.50 / 1M input tokens, $10.50 / 1M output tokens (for prompts < 128k)

## Benchmarks

| Benchmark | Score | Source |
|---|---|---|
| MMLU | 85.9% | Google DeepMind |
| HumanEval | 84.1% | Google DeepMind |
| MMMU | 62.4% | Google DeepMind |
| GPQA | 46.2% | Google DeepMind |
| MathVista | 54.7% | Google DeepMind |

## Normalized Scores

- **Tool use: 80/100.** Solid agentic tool use (MMLU 85.9%, HumanEval 84.1%).
- **Reasoning: 86/100.** Strong reasoning (GPQA 46.2%, MMLU 85.9%).
- **Context window: 100/100.** 2,000,000-token context window, industry-leading.
- **Multimodal: 62/100.** Text, image, audio, video in (MMMU 62.4%, MathVista 54.7%).
- **Coding: 84/100.** Top-tier coding (HumanEval 84.1%).
- **Cost efficiency: 70/100.** Mid-range paid pricing ($3.50/$10.50 per 1M).
- **Overall Score: 82/100.** Mean of the five quality dims (80 + 86 + 100 + 62 + 84) / 5 = 82.4.

## Analysis

Gemini 1.5 Pro is a highly capable multimodal model characterized by its industry-leading context window of up to 2 million tokens, allowing for massive document and codebase analysis. It performs strongly across reasoning and coding tasks, rivaling the top Claude and GPT models. Its multimodal capabilities are a core strength, integrating native audio and video processing.

## Links
- [Model Page](../../model-comparison.md)
- [Findings](../../model-findings.md)
