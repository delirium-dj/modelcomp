# GPT-6 Sol — Claude Sonnet 4.6 Research

## Model identity
- **Slug**: gpt-6-sol
- **Full name**: GPT-6 Sol
- **Provider ID**: opencode/gpt-6-sol
- **Context window**: 1,050,000 tokens input / 128,000 tokens output
- **Modalities**: Text, image, file → text
- **Pricing**: $2.00/$10.00 per 1M in/out (standard); cached input $0.20/M
- **Official page**: https://openai.com/index/gpt-6-sol/

## Benchmarks (verified public sources)

| Benchmark | Score | Source |
|---|---|---|
| DeepSWE v1.1 | 68.8% | OpenAI official |
| ARC-AGI-2 (max reasoning) | 89.6% | BenchLM.ai / VerticalTabs |
| GPQA Diamond | ~94.3% | ArtificialAnalysis.ai / VerticalTabs |

## Dimension scores

### Normalized scores (1-100)

- **Tool use: 85/100.** DeepSWE 68.8% is solid agentic coding; below GPT-6.1 Sol (75.2%).
- **Reasoning: 90/100.** GPQA Diamond 94.3% and ARC-AGI-2 89.6% confirm strong multi-step reasoning.
- **Context window: 92/100.** 1,050,000-token context window → tier score 92.
- **Multimodal: 60/100.** Text + image + file in; text-only out - no audio or video.
- **Coding: 83/100.** DeepSWE 68.8%; slightly below successor GPT-6.1 Sol (75.2%); superseded for agentic coding.
- **Cost efficiency: 82/100.** $2.00/$10.00 per 1M in/out with $0.20/M cached input — mid-tier flagship pricing.
- **Overall Score: 82/100.** (85 + 90 + 92 + 60 + 83) / 5 = 410 / 5 = 82.0.

## Overall score

> Note: Cost efficiency is intentionally excluded from the Overall formula.

## Key strengths
- GPQA Diamond ~94.3% — near-flagship scientific reasoning
- ARC-AGI-2 89.6% at max reasoning effort
- Low cached input pricing ($0.20/M) rewards repeat workloads
- Mid-tier price ($2/$10) for strong agentic capability

## Limitations
- Superseded by GPT-6.1 Sol for agentic coding (DeepSWE 68.8% vs 75.2%)
- No audio or video input
- Text-only output

---
Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
