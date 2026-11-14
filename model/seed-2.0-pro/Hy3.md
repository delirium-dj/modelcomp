# Seed 2.0 Pro — findings by Hy3

**Source:** Web research (ByteDance Seed official blog, BAAI, Zhihu) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Seed 2.0 Pro is part of ByteDance's Doubao Seed 2.0 family (Pro / Lite / Mini) launched 2026-02-14. It significantly strengthens unstructured-information handling — reaching top-tier model levels on ChartQAPro and OmniDocBench 1.5 — and sets best-in-class scores on long-context understanding (DUDE, MMLongBench, MMLongBench-Doc). Visual reasoning and logic also improved markedly over Seed 1.8 (LogicVista, VisuLogic), with strong video-scene capability.

## Model card
- **Vendor:** ByteDance (Seed / Doubao)
- **Release:** 2026-02-14 (family: Pro / Lite / Mini)
- **Strengths:** Document/chart understanding, long-context doc QA, visual logic, video
- **Positioning:** Enterprise document & multimodal understanding

## Raw benchmarks

### Agent
- Tool/agentic behavior not the headline; document-processing pipelines are the strength.

### Reasoning
- LogicVista and VisuLogic (visual puzzle + logical reasoning) scores rise significantly vs Seed 1.8.

### Coding
- Coding not the lead differentiator; public coding-bench headline not isolated.

### Long context
- **Long-context understanding:** best-in-class on DUDE, MMLongBench, MMLongBench-Doc.

## Normalized scores
- **Tool use: 82/100.** Strong document/extraction pipelines; lighter standalone agent-bench presence.
- **Reasoning: 85/100.** Improved logic + visual reasoning (LogicVista, VisuLogic).
- **Context window: 90/100.** Best-in-class long-doc benchmarks; exact window size not stated.
- **Multimodal: 90/100.** Charts, docs, video, visual logic — a multimodal-strong model.
- **Coding: 80/100.** Not the lead axis; no headline coding bench.
- **Cost efficiency: 84/100.** Strong capability/price for document workloads.
- **Overall Score: 85.4/100.** Mean of the five quality dims (82+85+90+90+80 = 427 / 5 = 85.4).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://seed.bytedance.com/zh/blog/seed-2-0-official-launch?view_from=content_recommend
  - https://hub.baai.ac.cn/view/52585
  - https://zhuanlan.zhihu.com/p/2006292148065157949
  - https://www.zhihu.com/answer/2006056482911838498
