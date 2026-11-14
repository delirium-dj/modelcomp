# GPT-5.6 Luna — findings by Hy3

**Source:** Web research (llm-stats, Benchable, TensorFeed, CrossModel) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
GPT-5.6 Luna is OpenAI's fastest and lightest GPT-5.6 tier, launched 2026-07-09 (general availability) after a limited preview. It targets latency-sensitive, high-volume workloads while keeping the family's 1.05M-token context, reasoning controls, and broad tool support (text + image input, vision, tool use, code). Pricing was cut ~80% on 2026-07-30 to $0.20 input / $1.20 output per M tokens (down from $1/$6). Its successor GPT-6 Luna shipped 2026-09-22.

## Model card
- **Vendor:** OpenAI
- **Release:** 2026-07-09 (GA)
- **Context window:** 1,050,000 tokens (max output 128K)
- **Modalities:** Text + image (vision), tool use, code, reasoning
- **Pricing:** $0.20 in / $1.20 out per M tokens (post-cut)
- **Positioning:** Budget / high-volume production tier

## Raw benchmarks

### Agent
- **Terminal-Bench 2.1:** 84.7% · **Agents' Last Exam:** 50.3% · **Toolathlon:** 53.4%.
- Strong agentic execution at budget economics.

### Reasoning
- **GPQA Diamond:** 92.3% · **MMLU-Pro:** 86.0%.
- TensorFeed Intelligence Index ranks it #15 of 18 (score 53.2) — a mid-pack budget model on that aggregate.

### Coding
- **SWE-bench:** 93.0% · **SWE-bench Pro (public):** 62.7% · **FrontierCode v1.1:** 39.8% · **Terminal-Bench 4.0:** 11.6% (hard long-horizon).

### Long context
- **Context window:** 1,050,000 tokens; **MRCR v2 (512K–1M):** 41.3% accuracy.

## Normalized scores
- **Tool use: 82/100.** Toolathlon 53.4%, Agentic Last Exam 50.3%; solid but not top.
- **Reasoning: 84/100.** GPQA 92.3% is strong; aggregate index mid-pack.
- **Context window: 96/100.** 1.05M-token window.
- **Multimodal: 83/100.** Vision present (MMMU Pro 79.5%); not a vision flagship.
- **Coding: 85/100.** SWE-bench 93% high, but Terminal-Bench 4.0 11.6% low — mixed.
- **Cost efficiency: 92/100.** $0.20/$1.20 budget pricing with 1M context — exceptional value.
- **Overall Score: 86.0/100.** Mean of the five quality dims (82+84+96+83+85 = 430 / 5 = 86.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://llm-stats.com/models/compare/gpt-5.6-luna-vs-lfm3-1.7b
  - https://benchable.ai/models/openai/gpt-5.6-luna-20260709
  - https://tensorfeed.ai/models/gpt-5-6-luna
  - https://www.crossmodel.ai/models/openai/gpt-5.6-luna
  - https://llm-stats.com/models/compare/beam-1.0-501b-a23b-vs-gpt-5.6-luna
