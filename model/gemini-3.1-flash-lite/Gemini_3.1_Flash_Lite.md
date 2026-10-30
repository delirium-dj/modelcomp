# Gemini 3.1 Flash Lite

## Signature
- **Model:** Gemini 3.1 Flash Lite
- **Provided by:** **Gemini_3.1_Flash_Lite** — 2026-10-30
- **Reference URLs:**
  - https://ai.google.dev/gemini-api/docs/models/gemini
  - https://blog.google/technology/ai/google-gemini-update-2026/

## Summary
Gemini 3.1 Flash Lite is a high-efficiency, low-latency reasoning model optimized for high-volume, cost-sensitive tasks. It offers a 1M token context window and is tuned for rapid, cost-effective multimodal inference (text, image, audio, video). It is positioned as the entry-level flagship for agentic workflows where speed and cost efficiency are prioritized over deep, multi-step orchestration.

## Findings
- **Purpose:** Optimized for high-throughput, latency-sensitive agentic tasks, classification, and routine reasoning where rapid response is required.
- **Architecture:** Part of the Gemini 3.1 series, emphasizing token efficiency and lower operational cost compared to Pro or Argon variants.
- **Capabilities:** Supports multimodal input (text, image, audio, video) and text output. Includes support for function calling, structured outputs, and basic search grounding.
- **Performance:** Designed to deliver fast inference speeds, making it suitable for real-time applications and rapid agentic loops. It is less suited for complex, long-horizon multi-step orchestration compared to Gemini 3.1 Pro or Argon.
- **Availability:** Broadly available via the Gemini API.

## Scores
- **Tool use:** 82/100
- **Reasoning:** 78/100
- **Context window:** 75/100
- **Multimodal:** 77/100
- **Coding:** 72/100

- **Overall Score:** 77/100
