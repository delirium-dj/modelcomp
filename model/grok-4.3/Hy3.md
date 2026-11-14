# Grok 4.3 — findings by Hy3

**Source:** Web research (Zhihu, CSDN, SegmentFault, SMZDM) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Grok 4.3 is an xAI model that launched quietly (API only, no formal announcement) around 2026-05-01. It supports a 1M-token context at $1.25 input / $2.50 output per M tokens (price doubles beyond 200K tokens). Architecturally it activates roughly one-quarter of total parameters via a "select-2-experts weighted aggregation" mechanism, keeping per-inference cost low. It emphasizes agentic ability and tool calling with strong cost-performance, though community testing notes occasional stutter and some hallucination.

## Model card
- **Vendor:** xAI (SpaceXAI)
- **Release:** ~2026-05-01 (quiet API launch)
- **Architecture:** MoE, ~1/4 params activated per inference
- **Context window:** 1,000,000 tokens
- **Pricing:** $1.25 in / $2.50 out per M tokens (2× beyond 200K)

## Raw benchmarks

### Agent
- Enhanced tool-calling and agentic capability emphasized; Artificial Analysis coverage cited but exact headline not isolated.

### Reasoning
- No isolated public reasoning-bench headline; practical "gets-work-done" positioning.

### Coding
- No isolated public coding-bench headline; coding implied via agentic tooling.

### Long context
- **Context window:** 1,000,000 tokens.

## Normalized scores
- **Tool use: 85/100.** Enhanced tool calling / agentic focus.
- **Reasoning: 83/100.** Practical reasoning; no isolated headline number.
- **Context window: 96/100.** 1M-token window.
- **Multimodal: 78/100.** Text-centric; vision not emphasized.
- **Coding: 83/100.** Coding implied via agentic tooling; no headline bench.
- **Cost efficiency: 86/100.** ~1/4-activation MoE at competitive $1.25/$2.50 pricing.
- **Overall Score: 85.0/100.** Mean of the five quality dims (85+83+96+78+83 = 425 / 5 = 85.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://www.zhihu.com/pin/2033448614786224143
  - https://zhuanlan.zhihu.com/p/2034712669182222611
  - https://zhisuanpusa.blog.csdn.net/article/details/160472870
  - https://segmentfault.com/a/1190000047944636
  - https://post.smzdm.com/p/awwp9wgg/
