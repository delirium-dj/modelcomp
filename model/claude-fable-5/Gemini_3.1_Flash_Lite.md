# Gemini 3.1 Flash Lite

## Signature
- **Model:** Claude Fable 5
- **Provided by:** **Gemini_3.1_Flash_Lite** — 2026-10-30
- **Reference URLs:**
  - https://platform.claude.com/docs/en/models/fable-5/overview
  - https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-anthropic-claude-fable-5.html

## Summary
Claude Fable 5 (Legacy) was Anthropic's flagship model for complex knowledge work, coding, and long-horizon autonomous agents, released in June 2026. It features a 1M token context window, adaptive thinking enabled by default, and was designed for sustained operation across multi-day tasks, planning across stages, and self-verification.

## Findings
- **Purpose:** Complex reasoning, long-running agentic coding, and enterprise-grade knowledge work.
- **Capabilities:** Multimodal (text, image input; text output). Supports advanced reasoning, tool calling, and computer use.
- **Architecture:** Part of the Claude 5 family, utilizing adaptive thinking (default effort `high`).
- **Performance:** Exceptionally capable at planning multi-stage tasks and delegating to sub-agents. It is now considered a legacy model; Anthropic recommends migrating to Claude Fable 5.1.
- **Availability:** Claude API, AWS (Bedrock, Claude Platform), Google Cloud, and Microsoft Foundry.

## Scores
- **Tool use:** 91/100
- **Reasoning:** 91/100
- **Context window:** 92/100
- **Multimodal:** 88/100
- **Coding:** 90/100

- **Overall Score:** 90.4/100
