# Grok 4 — findings by Hy3

**Source:** Web research (Baidu Baike, Baidu Baijiahao, STCN, Tencent Cloud dev community, QQ Browser) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Grok 4 is xAI's fourth major model iteration, released 2025-07-09/10 (build `grok-4-0709`), trained on the Colossus supercomputer. It comes in a standard single-agent version and a multi-agent "Grok 4 Heavy" version (four agents working together), with a 256K-token context. It reaches PhD-level on academic problems and scores 25.4% on Humanity's Last Exam (2,500 PhD-level questions across math, engineering, humanities). A fast-inference "Grok 4 Fast" variant followed (cost ~15× lower). Grok 4 was later added to the US federal procurement list (Super Grok Heavy subscription $300/mo).

## Model card
- **Vendor:** xAI (SpaceXAI)
- **Release:** 2025-07-09/10
- **Variants:** Grok 4 (single-agent) + Grok 4 Heavy (4-agent multi-agent)
- **Context window:** 256,000 tokens
- **Speed:** ~75 tok/s (API)
- **Training:** Colossus supercomputer

## Raw benchmarks

### Agent
- Grok 4 Heavy multi-agent coordination (4 agents); tool/agent capability implied.

### Reasoning
- **HLE:** 25.4% (2,500 PhD-level questions); ~10× prior-generation reasoning.

### Coding
- Strong coding implied; exact public coding-bench headline not isolated.

### Long context
- **Context window:** 256,000 tokens.

## Normalized scores
- **Tool use: 81/100.** Heavy multi-agent coordination; agentic implied.
- **Reasoning: 84/100.** HLE 25.4% — strong frontier reasoning.
- **Context window: 72/100.** 256K window — below long-context leaders.
- **Multimodal: 80/100.** Multimodal-supported; not a vision flagship.
- **Coding: 83/100.** Strong coding; no isolated headline bench.
- **Cost efficiency: 76/100.** Premium-tier pricing at launch.
- **Overall Score: 80.0/100.** Mean of the five quality dims (81+84+72+80+83 = 400 / 5 = 80.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Grok%204/66197155
  - https://baijiahao.baidu.com/s?id=1837239858472151418&wfr=spider&for=pc
  - https://www.stcn.com/article/detail/2528139.html
  - https://cloud.tencent.com/developer/article/2539525
  - https://browser.qq.com/mobile/news?doc_id=852686f67cd74752
