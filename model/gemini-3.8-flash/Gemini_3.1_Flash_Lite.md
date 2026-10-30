# Gemini 3.1 Flash Lite

## Signature
- **Model:** Gemini 3.8 Flash
- **Provided by:** **Gemini_3.1_Flash_Lite** — 2026-10-30
- **Reference URLs:**
  - https://ai.google.dev/gemini-api/docs/models/gemini-3.8-flash
  - https://deepmind.google/models/model-cards/gemini-3-8-flash/

## Summary
Gemini 3.8 Flash is Google's highly intelligent "workhorse" model, optimized for long-horizon software engineering, autonomous agents, and complex enterprise knowledge workflows. It delivers Pro-level reasoning capabilities with the speed and cost-efficiency characteristic of the Flash model line. It supports a 1M token context window and features tunable thinking levels to balance latency, cost, and output quality.

## Findings
- **Purpose:** High-volume, production-ready agentic tasks, complex coding, and large-scale knowledge workflows.
- **Capabilities:** Multimodal (text, image, audio, video, PDF input; text output). Supports advanced reasoning, structured output, function calling, search grounding, and computer use.
- **Architecture:** Reasoning-first architecture with tunable effort levels (low, medium, high). It does *not* support a `minimal` thinking level.
- **Performance:** Significant improvements over 3.7 Flash, offering Pro-level capabilities for many tasks while maintaining Flash-class operational efficiency.
- **Availability:** General Availability via Gemini API, Gemini App, Vertex AI, and Google Cloud.

## Scores
- **Tool use:** 93/100
- **Reasoning:** 92/100
- **Context window:** 92/100
- **Multimodal:** 88/100
- **Coding:** 92/100

- **Overall Score:** 91.4/100
