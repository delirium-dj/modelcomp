# Grok 4.20 Beta — findings by Hy3

**Source:** Web research (Baidu Baike, Tencent Cloud dev community, Baidu Baijiahao, eefocus) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Grok 4.20 Beta is xAI's multi-agent collaborative model launched 2026-02-18, designed to reduce hallucinations and improve reliability on complex tasks via a "4 Agents" system: Grok (coordinator), Harper (research), Benjamin (logic), and Lucas (creative). It uses a MoE architecture (~3T parameters) with a long context window, a fast-learning mechanism that iterates weekly from user interaction, and reached non-hallucination 78% on AA Omniscience while more readily admitting "I don't know." It launched in top 3 on LMArena's 2026-02-27 composite leaderboard, with API pricing $2–6 per M tokens (well below Grok 4).

## Model card
- **Vendor:** xAI (SpaceXAI)
- **Release:** 2026-02-18 (Beta)
- **Architecture:** MoE ~3T parameters; "4 Agents" multi-agent system
- **Context window:** 2,000,000 tokens
- **Pricing:** $2–6 per M tokens
- **Access:** iOS / Android / Web

## Raw benchmarks

### Agent
- Native multi-agent collaboration (coordinator + 3 specialist agents); weekly self-iteration.

### Reasoning
- **AA Omniscience non-hallucination:** 78%; improved "I don't know" honesty.

### Coding
- Coding implied via agentic tooling; no isolated public coding-bench headline.

### Long context
- **Context window:** 2,000,000 tokens.

## Normalized scores
- **Tool use: 82/100.** 4-agent collaboration; strong for complex tasks.
- **Reasoning: 80/100.** Low-hallucination, honest abstention; no isolated headline.
- **Context window: 94/100.** 2M-token window.
- **Multimodal: 78/100.** Multimodal-capable; not a vision flagship.
- **Coding: 78/100.** Coding implied; no isolated headline.
- **Cost efficiency: 84/100.** $2–6 pricing, far below Grok 4.
- **Overall Score: 82.0/100.** Mean of the five quality dims (82+80+94+78+78 = 410 / 5 = 82.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Grok%204.20%20Beta/67424669
  - https://cloud.tencent.com/developer/article/2672944
  - https://cloud.tencent.com/developer/article/2652395
  - https://baijiahao.baidu.com/s?id=1859511890730801466&wfr=spider&for=pc
  - https://www.eefocus.com/article/1991163.html
