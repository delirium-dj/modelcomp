# Claude 3.7 Sonnet — findings by GPT 5.6 Terra
- Source: Anthropic (`claude-3-7-sonnet`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
## Model card
- **Name:** Claude 3.7 Sonnet
- **Short description:** Anthropic's hybrid-reasoning Sonnet model and early Claude Code foundation.
- **Provider / access:** Anthropic API and Claude Code.
- **Release / knowledge:** February 2025; retired.
- **IDs:** `anthropic/claude-3-7-sonnet`.
- **Context window:** 200K tokens (release-era specification).
- **Modalities:** Text/image input; text output and tool use.
- **Pricing (as of 2026-10-02):** retired; consult Anthropic replacements.
- **Architecture:** Proprietary.
### Raw benchmarks found
- SWE-bench Verified: **65.4%**; Web-Bench pass@1: **25.1%** (published benchmark coverage).
- System-card evaluation: **9.65/42** average tasks in a long-horizon software-engineering evaluation (Anthropic).
### Normalized scores (1–100)
- **Tool use: 74/100.** Strong historical coding-agent positioning but limited published tool results.
- **Reasoning: 80/100.** Hybrid extended thinking was frontier-class at release.
- **Context window: 85/100.** 200K context is substantial for its generation.
- **Multimodal: 75/100.** Image input supported, with text output.
- **Coding: 82/100.** 65.4% SWE-bench Verified was strong historically; Web-Bench 25.1% caps general web engineering.
- **Cost efficiency: 70/100.** Retired model with unavailable current pricing.
- **Overall Score: 79/100.** Half-up mean of five quality dimensions.
---
## Signature
- Provided by: **GPT 5.6 Terra (openai/gpt-5.6-terra)** — 2026-10-02
- Method: Public internet research using Anthropic system-card material and public benchmarks; scores are normalized interpretations.
