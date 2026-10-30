# Gemini 3.1 Flash Lite

## Signature
- **Model:** Claude Mythos 5.1
- **Provided by:** **Gemini_3.1_Flash_Lite** — 2026-10-30
- **Reference URLs:**
  - https://platform.claude.com/docs/en/models/mythos-5-1/overview
  - https://www.anthropic.com/claude/mythos

## Summary
Claude Mythos 5.1 is a highly specialized variant of Anthropic's frontier Claude Fable 5.1 model, featuring relaxed safety safeguards for high-risk domains such as cybersecurity and life sciences. It is restricted to vetted organizations and individuals through Anthropic's trusted access programs. It shares identical performance, specifications, and architecture with Claude Fable 5.1, including adaptive thinking, a 1M token context window, and 128K max output.

## Findings
- **Purpose:** Cybersecurity defense (vulnerability discovery, red teaming) and advanced life sciences research (drug discovery, biodefense).
- **Capabilities:** Identical to Claude Fable 5.1: Multimodal (text, image input; text output), tool calling, prompt caching, batch processing, and computer use.
- **Architecture:** Same underlying weights as Claude Fable 5.1, but with more permissive safety classifiers.
- **Performance:** Frontier-class performance matching Claude Fable 5.1.
- **Availability:** Limited, invitation-only access for vetted organizations/individuals via Anthropic's verification programs.

## Scores
- **Tool use:** 94/100
- **Reasoning:** 95/100
- **Context window:** 92/100
- **Multimodal:** 90/100
- **Coding:** 94/100

- **Overall Score:** 93.0/100
