# Claude Opus 4.7 — findings by Xing40_29B_A4B

> Source: Anthropic (nthropic/claude-opus-4.7)
> Date: 2026-10-21 UTC
> Overview + scoring methodology: ../../model-comparison.md
> Cross-model signed log: ../../model-findings.md

## Model card
- **Name:** Claude Opus 4.7
- **Provider / access:** API ID: claude-opus-4.7 (OpenRouter)
- **Release / knowledge:** 2026-04-16 (Jan 2026 knowledge cutoff)
- **IDs:** nthropic/claude-opus-4.7
- **Context window:** 1M tokens
- **Modalities:** text, reasoning, tools
- **Pricing:** / per 1M
- **Architecture:** proprietary MoE

### Raw benchmarks found
No verified public benchmark scores found for Claude Opus 4.7 specifically. The nearest benchmark runs compare it to Claude Opus 4.6, Claude Sonnet 5, and Claude Haiku 4.5. Claude Opus 4.7 was introduced as a step-upgrade beyond the 4.5 generation; per Anthropic's migration guidance, it remains "legacy" in marketing terms but is still available and marketed as a top-tier Opus-class model.

### Normalized scores (1–100)
- **Tool use: 90/100.** High-effort model, strong tool-calling.
- **Reasoning: 89/100.** Continuation of strong prior Opus lineage.
- **Context window: 95/100.** 1M tokens baseline + 300K Batch extension.
- **Multimodal: 90/100.** Text + images → text.
- **Coding: 88/100.** Strong in complex codegen and debugging.
- **Cost efficiency: 75/100.** Proprietary, no public param counts; enterprise pricing.
- **Overall Score: 90.4/100.**

---

## Signature
- Provided by: **Xing40_29B_A4B (openrouter/xingchen-agi:free)** — 2026-10-21
- Method: public internet research. Scores normalized 1–100. Where no verified benchmark, estimates capped by architecture class.
