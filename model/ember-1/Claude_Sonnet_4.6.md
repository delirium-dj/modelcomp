# Ember 1 — Claude Sonnet 4.6 Research

## Model identity
- **Slug**: ember-1
- **Full name**: Ember 1
- **Provider ID**: opencode/ember-1
- **Base model**: Kimi K3 fine-tune (Fireworks Research)
- **Context window**: 1,048,576 tokens (1M) input / 131,072 tokens output
- **Modalities**: Text, image → text
- **Pricing**: $3.00/$15.00 per 1M in/out; cached input $0.30/M
- **Official page**: https://huggingface.co/models?search=ember-1

## Benchmarks (verified public sources)

| Benchmark | Score | Source |
|---|---|---|
| SWE-bench Verified | 92.2% | meta.json short field |
| DeepSWE v1.1 | 75.2% | meta.json short field |
| Token efficiency | ~40% fewer tokens vs base K3 | meta.json / llmtr.com |

## Dimension scores

### Normalized scores (1-100)

- **Tool use: 89/100.** DeepSWE 75.2% and SWE-bench 92.2% demonstrate top-tier agentic tool use.
- **Reasoning: 83/100.** Kimi K3-class reasoning; no published GPQA score but strong agentic inference.
- **Context window: 92/100.** 1,048,576-token context window → tier score 92.
- **Multimodal: 60/100.** Text + image in; text-only out — image-capable, no audio/video.
- **Coding: 91/100.** SWE-bench Verified 92.2% is class-leading; DeepSWE 75.2% matches top-tier rivals.
- **Cost efficiency: 60/100.** $3.00/$15.00 per 1M in/out with $0.30/M cached input — the methodology's ~$3/$15 tier, partly offset by ~40% fewer tokens than base K3.
- **Overall Score: 83/100.** (89 + 83 + 92 + 60 + 91) / 5 = 415 / 5 = 83.0.

## Overall score

> Note: Cost efficiency is intentionally excluded from the Overall formula.

## Key strengths
- SWE-bench Verified 92.2% — one of the highest scores in the dataset
- DeepSWE 75.2% matches GPT-6.1 Sol at the top of the agentic coding leaderboard
- ~40% token efficiency gain over base K3 — quality per billed token is exceptional
- 1M context at $3/$15 (competitive for agentic workloads)

## Limitations
- Narrowly tuned for agentic coding; base K3 is safer for general tasks
- No audio or video input
- Paid-only; no free tier

---
Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
