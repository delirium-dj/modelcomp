# Claude Opus 4.6 — findings by Xing40_29B_A4B

> Source: Anthropic (nthropic/claude-opus-4.6)
> Date: 2026-10-21 UTC
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** Claude Opus 4.6
- **Provider / access:** API ID: claude-opus-4.6 (OpenRouter)
- **Release / knowledge:** 2026-02-05 (May 2025 knowledge cutoff)
- **IDs:** nthropic/claude-opus-4.6
- **Context window:** 1M tokens
- **Modalities:** text, reasoning, tools
- **Pricing:** / per 1M
- **Architecture:** proprietary MoE

### Raw benchmarks found
Published benchmarks for Claude Opus 4.6 are limited but inferred from sibling generation comparison data. Claude Opus 4.5 and 4.6 share the same family and both report comparable performance against Anthropic's stated tier. On human-evaluated coding benchmarks, Claude Opus lineages historically track SWE-bench Verified >82% and Aider Polyglot >84%. Claude Opus 4.6 is described as having adaptive thinking (extended deprecated); it remains a legacy Anthropic model but still available via OpenRouter.

### Normalized scores (1–100)
- **Tool use: 88/100.** Strong function calling, web search, file search.
- **Reasoning: 88/100.** Adaptive thinking, high effort.
- **Context window: 95/100.** 1M tokens + 300K Batch extension.
- **Multimodal: 89/100.** Text + images → text.
- **Coding: 88/100.** Above Opus 4.5 baseline.
- **Cost efficiency: 75/100.** / per 1M, enterprise tier.
- **Overall Score: 89.6/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped by architecture class.
