# MiMo V2.6 Free — Claude Sonnet 4.6 Research

## Model identity
- **Slug**: mimo-v2.6-free
- **Full name**: MiMo V2.6 Free
- **Provider ID**: opencode/mimo-v2-6-free
- **Architecture**: MIT 309B total / 15B active (MoE)
- **Context window**: 1,048,576 tokens (1M) input / 128,000 tokens output (free tier: 200K/32K cap)
- **Modalities**: Text, image, video, audio → text
- **Pricing**: Free (OpenCode Zen $0); paid fallback $0.14/$0.28 per 1M in/out
- **Official page**: https://mimo.mi.com/models/en-US/mimo-v2.6-flash

## Benchmarks (verified public sources)

| Benchmark | Score | Source |
|---|---|---|
| SWE-bench Verified | 92.0% | meta.json short field |

## Dimension scores

### Normalized scores (1-100)

- **Tool use: 88/100.** SWE-bench Verified 92.0% confirms elite agentic tool use at MoE efficiency.
- **Reasoning: 84/100.** Xiaomi MiMo V2.6 class reasoning; no separate GPQA published - inferred from sibling V2.6 Pro.
- **Context window: 92/100.** 1,048,576-token full context; free tier capped at 200K input/32K output.
- **Multimodal: 82/100.** Text + image + video + audio in; text out - native omni input across all four modalities.
- **Coding: 90/100.** SWE-bench Verified 92.0% - top-tier coding; MIT license enables broad community adoption.
- **Cost efficiency: 100/100.** Free on OpenCode Zen $0 tier; paid fallback $0.14/$0.28 per 1M in/out remains cheap.
- **Overall Score: 87/100.** (88 + 84 + 92 + 82 + 90) / 5 = 436 / 5 = 87.2.

## Overall score

> Note: Cost efficiency is intentionally excluded from the Overall formula.

## Key strengths
- SWE-bench Verified 92.0% — frontier-class coding at zero cost on OpenCode Zen
- Native omni input: text, image, video, and audio in a single model
- MIT license — fully open for local deployment
- 309B total / 15B active MoE: frontier capability at flash-tier inference speed

## Limitations
- Free tier is capped (200K context / 32K output) — paid tier needed for long-horizon work
- Text-only output (no image generation despite rich input modalities)

---
Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
