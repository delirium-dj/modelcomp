# MiniMax M3 — findings by Hy3

**Source:** Web research (Tencent Cloud dev community, CSDN, Baidu Baijiahao) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
MiniMax M3 is a general-purpose large model released by MiniMax (稀宇科技 / Xiyu Tech) on 2026-06-01. Its three headline capabilities are frontier coding, a 1M-token ultra-long context, and native multimodality. Independent evaluator Artificial Analysis (AA) covers it under its "AA Intelligence Index" spanning knowledge, reasoning, code generation, and agent capability.

## Model card
- **Vendor:** MiniMax (稀宇科技)
- **Release:** 2026-06-01
- **Architecture:** MoE (mixture-of-experts)
- **Context window:** 1,000,000 tokens
- **Modalities:** Text in/out, native multimodal (image / audio / video understanding)
- **Native agent product:** MiniMax Code (Agent Team collaboration; Producer + Verifier workflow)

## Raw benchmarks

### Agent
- Covered by the AA Intelligence Index agent sub-score.
- Ships with MiniMax Code, an agent product trained alongside M3: Agent Team multi-stage concurrent workflows, Producer + Verifier loops.

### Reasoning
- Scored within the AA Intelligence Index reasoning dimension; positioned as a top-tier domestic reasoning model.

### Coding
- **SWE-Bench:** ~59% (Tencent Cloud developer-community report).
- Independent coverage claims M3's coding surpasses GPT-5.5 and Gemini-3.1-Pro on multiple coding benchmarks, described at launch as the strongest publicly available coding model.

### Long context
- **Context window:** 1,000,000 tokens — the headline differentiator enabling whole codebases / long documents in a single pass.

## Normalized scores
- **Tool use: 80/100.** Strong agent framing (MiniMax Code, Agent Team), but fewer independent third-party agent-bench numbers than frontier US models.
- **Reasoning: 84/100.** Solid domestic-tier reasoning per AA index; trails the top reasoning specialists.
- **Context window: 98/100.** 1M-token window, near the current public maximum.
- **Multimodal: 84/100.** Native multimodal across image/audio/video, though vision leaderboards are less documented.
- **Coding: 90/100.** SWE-Bench ~59% with multiple claims of surpassing GPT-5.5 / Gemini-3.1-Pro.
- **Cost efficiency: 80/100.** MoE + open-weight-friendly positioning implies favorable cost, but no public per-token price confirmed.
- **Overall Score: 87.2/100.** Mean of the five quality dims (80+84+98+84+90 = 436 / 5 = 87.2).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://cloud.tencent.com/developer/article/2681344
  - https://blog.csdn.net/GHY2016/article/details/161585679
  - https://blog.csdn.net/smallym1/article/details/161892851
  - https://baijiahao.baidu.com/s?id=1867049560712424170&wfr=spider&for=pc
