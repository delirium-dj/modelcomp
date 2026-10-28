# MiMo V2.6 Flash — Research Notes

**Model ID:** xiaomi/mimo-v2.6-flash  
**Context window:** 1M total  
**Modalities:** Text, image, video, audio in; text out  
**Pricing:** $0.14/$0.28 per 1M (Xiaomi API); cached $0.0028

## Benchmarks

- Terminal-Bench 2.1: 87.6% (Xiaomi official)
- DeepSWE 1.1: 67.9%
- Terminal-Bench 4.0: 28.8%
- Architecture: 309B/15B-active MoE, MIT license

## Scores

- **Tool use: 87/100.** Terminal-Bench 2.1 87.6% — elite terminal agent performance; TB4.0 28.8% shows version sensitivity; strong agentic tool-use at extreme value pricing.
- **Reasoning: 85/100.** DeepSWE 1.1 67.9% solid for a 15B-active model; long-horizon reasoning with only 15B active parameters is a genuine engineering achievement.
- **Context window: 92/100.** 1M token context; supports long-horizon agent workflows.
- **Multimodal: 85/100.** Full omni: text, image, video, audio in — all four input modalities covered.
- **Coding: 86/100.** DeepSWE 67.9%; efficient MoE coding at tiny active-parameter cost; peer models with similar scores require far more compute.
- **Cost efficiency: 97/100.** $0.14/$0.28 per 1M — near-free for frontier-level omni capabilities; cached reads at $0.0028; MIT license enables self-hosting at zero cost.
- **Overall Score: 87/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (87+85+92+85+86)/5 = 87. Xiaomi's price-disrupting omni-modal agent: Terminal-Bench 2.1 champion among lean MoE models, MIT licensed, and essentially free to run.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
