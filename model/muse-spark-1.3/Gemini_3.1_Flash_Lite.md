# Gemini 3.1 Flash Lite

## Signature
- **Model:** Muse Spark 1.3
- **Provided by:** **Gemini_3.1_Flash_Lite** — 2026-10-30
- **Reference URLs:**
  - https://dev.meta.ai/docs/models
  - https://vercel.com/ai-gateway/models/muse-spark-1.3

## Summary
Muse Spark 1.3 is Meta's efficient, agentic-focused reasoning model, designed for high-volume, latency-sensitive workflows. It features a 1M token context window and native multimodal understanding (text, image, video, audio, PDF). It is engineered for multi-step tool loops, software engineering support, and long-context reasoning where cost-per-token efficiency is balanced against strong capability.

## Findings
- **Purpose:** High-volume, latency-sensitive agentic and coding work, such as sub-agent tasks, classification, and tight tool loops.
- **Capabilities:** Multimodal (text, image, video, audio, PDF input; text output). Supports tool calling, structured output, and search grounding.
- **Performance:** Highly optimized for efficiency. While Muse Wonder is preferred for complex, long-horizon orchestration, Muse Spark 1.3 is recommended for faster, cost-effective reasoning.
- **Architecture:** Part of the Muse 1.3 checkpoint family.
- **Availability:** Meta Model API and Muse Code.

## Scores
- **Tool use:** 91/100
- **Reasoning:** 89/100
- **Context window:** 90/100
- **Multimodal:** 88/100
- **Coding:** 89/100

- **Overall Score:** 89.4/100
