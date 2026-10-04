# Gemini 3.5 Flash-Lite — Independent Research Report

## Summary and evidence

Gemini 3.5 Flash-Lite is Google's July 2026 low-latency multimodal model for high-throughput subagents and document parsing. It accepts text, image, video, audio, and PDFs; provides **1,048,576 input tokens** and **65,536 output tokens**; and supports thinking, caching, code execution, preview computer use, search/Maps grounding, files, functions, structured output, and URL context.

Source: [Gemini 3.5 Flash-Lite documentation](https://ai.google.dev/gemini-api/docs/models/gemini-3.5-flash-lite)

## Cost and limitations

It prioritizes latency and cost over difficult reasoning and coding, outputs text only, and lacks Live API or native media generation. Google positions it for simpler subagent work rather than frontier tasks.

## Scores

- **Tool use: 89/100.** The Google tool suite is broad, including preview computer use.
- **Reasoning: 76/100.** Thinking helps, but this is explicitly a lightweight execution tier.
- **Context window: 97/100.** One-million input and 65K output are outstanding.
- **Multimodal: 94/100.** It understands all major input media plus PDFs.
- **Coding: 78/100.** Suitable for routine subagent coding, not complex engineering.
- **Cost efficiency: 98/100.** It is optimized for inexpensive high-volume execution.
- **Overall Score: 87/100.** Half-up rounded mean: (89 + 76 + 97 + 94 + 78) / 5 = 86.8.

## Bottom line

Gemini 3.5 Flash-Lite is an excellent high-volume multimodal worker when low cost matters more than deep reasoning.
