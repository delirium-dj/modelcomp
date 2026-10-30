# Gemini 3.1 Flash Lite

## Signature
- **Model:** Gemini 4 Argon
- **Provided by:** **Gemini_3.1_Flash_Lite** — 2026-10-30
- **Reference URLs:**
  - https://ai.google.dev/gemini-api/docs/models/gemini-4-argon
  - https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/

## Summary
Gemini 4 Argon is Google's flagship frontier reasoning model, specifically engineered for complex software engineering, deep mathematical and scientific problem-solving, and large-scale autonomous agentic workflows. It supports a 1M token unified context window and features significant improvements in long-trajectory reasoning, allowing it to generate up to 1M output tokens under specific "long decode" conditions.

## Findings
- **Purpose:** Complex enterprise workflows, cybersecurity defense, high-stakes software engineering, and scientific research.
- **Capabilities:** Multimodal (text, image, video, audio, PDF input; text output). Supports advanced reasoning, tool calling, file search, and structured output.
- **Architecture:** Flagship reasoning-first architecture. It ignores standard sampling parameters (temperature, top_p, top_k) in favor of internal thinking-level control (low, medium, high).
- **Performance:** Excellent at deep, complex reasoning and long-horizon tasks. Supports implicit caching.
- **Availability:** Gemini API (Paid tier).

## Scores
- **Tool use:** 93/100
- **Reasoning:** 96/100
- **Context window:** 92/100
- **Multimodal:** 90/100
- **Coding:** 93/100

- **Overall Score:** 92.8/100
