# GLM 5.3 FlashX — Claude Sonnet 4.6 Research

## Model identity
- **Slug**: glm-5.3-flashx
- **Full name**: GLM 5.3 FlashX
- **Provider ID**: opencode/glm-5.3-flashx
- **Context window**: 1,048,576 tokens (1M) input / 128,000 tokens output
- **Modalities**: Text, image, video → text
- **Pricing**: $0.37/$1.25 per 1M in/out
- **Architecture**: Sparse MoE — 320B total / 18B active parameters
- **Official page**: https://open.zhipuai.cn/

## Benchmarks (verified public sources)

| Benchmark | Score | Source |
|---|---|---|
| SWE-bench | ~92.0% | OpenRouter leaderboard (same weights as Flash) |
| DeepSWE v1.1 | 63.4 | z.ai / yottalabs.ai |
| GPQA Diamond | ~86.4% | OpenRouter leaderboard |
| Terminal-Bench 2.1 | 84.3 | DataCamp / z.ai |

> FlashX shares weights with GLM 5.3 Flash; it is a low-latency serving variant (~200 tokens/s) tuned for streaming workloads.

## Dimension scores

### Normalized scores (1-100)

- **Tool use: 87/100.** Terminal-Bench 2.1 84.3 and strong agentic coding (DeepSWE 63.4) show elite tool use.
- **Reasoning: 85/100.** GPQA Diamond ~86.4% - strong but below top-tier frontier ceiling (94%+).
- **Context window: 92/100.** 1,048,576-token context window → tier score 92.
- **Multimodal: 68/100.** Text + image + video in; text out - native video input earns a higher tier.
- **Coding: 87/100.** SWE-bench ~92.0%, DeepSWE 63.4 - strong open-weight MoE coding performance.
- **Cost efficiency: 93/100.** $0.37/$1.25 per 1M in/out — among the cheapest frontier-class open-weight routes.
- **Overall Score: 84/100.** (87 + 85 + 92 + 68 + 87) / 5 = 419 / 5 = 83.8.

## Overall score

> Note: Cost efficiency is intentionally excluded from the Overall formula.

## Key strengths
- SWE-bench ~92.0% despite 18B active parameters (extreme cost efficiency)
- Native video input alongside image and text
- Terminal-Bench 2.1 84.3 — within striking distance of top Western frontier models
- ~200 tokens/s throughput optimized for streaming-heavy coding assistants

## Limitations
- GPQA Diamond ~86.4% trails top frontier models (~94%)
- FlashX is identical in capability to GLM 5.3 Flash — latency-optimized serving only
- Text-only output (no image generation)

---
Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
