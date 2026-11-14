# Claude Haiku 5.5 — findings by Hy3

**Source:** Web research (Anthropic Transparency Hub, Baidu Baike, BenchGecko, Model Matchbook, Traictory) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Claude Haiku 5.5 is Anthropic's fastest, most capable small model, released 2026-10-07 for high-volume work (summarization, subagents, browser use). It jumps the context window from Haiku 4.5's 200K to 1M tokens, adds Adaptive Thinking with adjustable effort (Low–Max), and introduces Browser Use. It accepts text, image, and file/PDF inputs and serves as a coding subagent for Opus 5.5 and Sonnet 5.5. Official benchmarks show large gains: OSWorld 72.4% (vs 15.7%), Terminal-Bench 4.0 39.2%, HLE 45.9% (57.4% with tools), GPQA Diamond 89.6%, FrontierMath Tiers 1–3 75.1%.

## Model card
- **Vendor:** Anthropic
- **Release:** 2026-10-07
- **Context window:** 1,000,000 tokens (128K max output)
- **Modalities:** Text, image, file/PDF input → text; vision, multilingual
- **Pricing:** $0.10 in / $0.50 out per M tokens (≤100K prompt)
- **Role:** Subagent for Opus 5.5 / Sonnet 5.5

## Raw benchmarks

### Agent
- Browser Use added; serves as coding subagent; tool use + adaptive thinking supported.

### Reasoning
- **LiveBench Reasoning:** 84.6% · **GPQA Diamond:** 89.6% (max effort) · **HLE:** 45.9% (57.4% with tools).

### Coding
- **Terminal-Bench 4.0:** 39.2% · **LiveBench Coding:** 77.9% · **OSWorld:** 72.4%.

### Long context
- **Context window:** 1,000,000 tokens (up from 200K in Haiku 4.5).

## Normalized scores
- **Tool use: 83/100.** Browser Use + subagent role; solid tool use for a small model.
- **Reasoning: 81/100.** GPQA 89.6% strong, but small-model tier overall.
- **Context window: 96/100.** 1M-token window.
- **Multimodal: 84/100.** Text/image/file/PDF multimodal input.
- **Coding: 78/100.** Terminal-Bench 39.2% / LiveBench Coding 77.9% — capable for size.
- **Cost efficiency: 95/100.** $0.10/$0.50 pricing — exceptional value for capability.
- **Overall Score: 84.4/100.** Mean of the five quality dims (83+81+96+84+78 = 422 / 5 = 84.4).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://www.anthropic.com/transparency
  - https://baike.baidu.com/item/Claude%20Haiku%205.5/69132115
  - https://benchgecko.ai/model/claude-haiku-5-5
  - https://modelmatchbook.com/models/anthropic/claude-haiku-5.5-20261007
  - https://traictory.com/model/claude-haiku-5-5
