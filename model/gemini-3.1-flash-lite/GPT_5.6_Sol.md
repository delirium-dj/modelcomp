# Gemini 3.1 Flash-Lite — Independent Research Report

## Summary and evidence

Gemini 3.1 Flash-Lite is Google's low-cost, high-throughput Gemini model. Google's model documentation specifies **1,048,576 input tokens**, **65,536 output tokens**, multimodal input, structured output, function calling, and other Gemini API features.

Sources: [Google Gemini 3.1 Flash-Lite model documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.1-flash-lite)

## Cost and limitations

Its low-cost tier prioritizes throughput over peak reasoning and coding quality. Preview or rolling aliases can also change, so production deployments should pin a stable version when available.

## Scores

- **Tool use: 84/100.** Function calling and structured output are mature and production-friendly.
- **Reasoning: 73/100.** Reasoning is useful but intentionally below Pro and full Flash tiers.
- **Context window: 97/100.** A 1,048,576-token input window is exceptional for the price class.
- **Multimodal: 94/100.** Broad native multimodal input is a core Gemini strength.
- **Coding: 74/100.** Adequate for routine code generation, capped by the Lite tier's quality target.
- **Cost efficiency: 98/100.** Very low pricing and high throughput make it exceptionally economical.
- **Overall Score: 84/100.** Half-up rounded mean: (84 + 73 + 97 + 94 + 74) / 5 = 84.4.

## Bottom line

Gemini 3.1 Flash-Lite is ideal for high-volume multimodal processing and long-context extraction where cost dominates peak intelligence.

