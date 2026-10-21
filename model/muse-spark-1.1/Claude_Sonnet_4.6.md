# Muse Spark 1.1 — Claude Sonnet 4.6 Research

## Model identity
- **Slug**: muse-spark-1.1
- **Full name**: Muse Spark 1.1
- **Provider ID**: opencode/muse-spark-1.1
- **Context window**: 1,048,576 tokens (1M) input / 131,072 tokens output
- **Modalities**: Text, image, PDF/file → text
- **Pricing**: $1.25/$4.25 per 1M in/out; cached input $0.15/M
- **Official page**: https://meta.com/blog/muse-spark-1-1

## Benchmarks (verified public sources)

| Benchmark | Score | Source |
|---|---|---|
| SWE-bench Verified | ~82.0% | meta.json short field |
| SWE-bench Pro | ~61.5% | Scale AI / AgentRiot |
| GPQA Diamond | 89.8–91.2% | Artificial Analysis / Vals AI / BenchLM |

## Dimension scores

### Normalized scores (1-100)

- **Tool use: 85/100.** SWE-bench Verified ~82.0% and strong agentic coding (77-81% with tool scaffolding).
- **Reasoning: 88/100.** GPQA Diamond 89.8-91.2% - strong but below top-tier frontier ceiling (94%+).
- **Context window: 92/100.** 1,048,576-token context window → tier score 92.
- **Multimodal: 62/100.** Text + image + PDF/file in; text-only out - image/document capable, no audio/video.
- **Coding: 84/100.** SWE-bench Verified ~82%, SWE-bench Pro 61.5% - solid generation-1 Meta Muse performance.
- **Cost efficiency: 88/100.** $1.25/$4.25 per 1M in/out with $0.15/M cached input — the methodology's ~$1.25/$4.25 ≈ 88 tier.
- **Overall Score: 82/100.** (85 + 88 + 92 + 62 + 84) / 5 = 411 / 5 = 82.2.

## Overall score

> Note: Cost efficiency is intentionally excluded from the Overall formula.

## Key strengths
- SWE-bench Pro 61.5% outperforms GPT-5.5 at the time of release
- GPQA Diamond up to 91.2% — strong scientific reasoning
- 1M context at affordable pricing ($1.25/$4.25)
- PDF/file input alongside image support

## Limitations
- Paid-only; thoroughly superseded by Muse Spark 1.2/1.3 (free lanes + better scores)
- No audio or video input
- Text-only output

---
Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
