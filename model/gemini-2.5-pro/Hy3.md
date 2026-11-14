# Gemini 2.5 Pro — findings by Hy3

**Source:** Web research (Baidu Baike, Baidu Baijiahao, The Paper, CSDN) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Gemini 2.5 Pro is a model by Google DeepMind, launched as an experimental model on 2025-03-25 (broad release 2025-03). It carries forward Gemini's native multimodality and long-context strengths: a 1,000,000-token window (expandable toward 2M), text/image/audio/video/codebase inputs, and a built-in chain-of-thought reasoning mechanism. A dedicated computer-use model was added on 2025-10-08.

## Model card
- **Vendor:** Google DeepMind
- **Release:** 2025-03-25 (experimental); updated previews 2025-06 / I/O; computer-use model 2025-10-08
- **Context window:** 1,000,000 tokens (up to 2,000,000)
- **Modalities:** Native multimodal — text, image, audio, video, code
- **Tools:** Google Search grounding, computer_use (2025-10-08)
- **API price:** from $1.25 / $10 per M tokens ($2.50 input beyond 200k tokens)

## Raw benchmarks

### Agent
- Computer-use model (2025-10-08) enables GUI interaction (click, type, scroll) with developer safety controls.
- Google Search tool-calling for fact verification.

### Reasoning
- **Humanity's Last Exam:** 18.8%.
- Built-in chain-of-thought reasoning.

### Coding
- **SWE-Bench Verified:** 63.8%.
- I/O version improved coding; WebDev Arena leaderboard ~1499.95.

### Long context
- **Context window:** 1,000,000 tokens (native, no reduction; toward 2M).

## Normalized scores
- **Tool use: 83/100.** Computer-use + Search grounding, but agent-bench numbers sparse in sources.
- **Reasoning: 82/100.** HLE 18.8% — respectable but below newer reasoning leaders.
- **Context window: 98/100.** 1M native, expandable to 2M — among the largest.
- **Multimodal: 92/100.** Strongest native multimodal (text/image/audio/video) of the cohort.
- **Coding: 81/100.** SWE-Bench Verified 63.8% — solid, mid-pack vs newer flagships.
- **Cost efficiency: 80/100.** Competitive tiered pricing; scales with long-context usage.
- **Overall Score: 87.2/100.** Mean of the five quality dims (83+82+98+92+81 = 436 / 5 = 87.2).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Gemini%202.5%20Pro/65750846
  - https://baijiahao.baidu.com/s?id=1827648880658196360&wfr=spider&for=pc
  - https://www.thepaper.cn/newsDetail_forward_30493620
  - https://blog.csdn.net/PixelFlow/article/details/162756308
