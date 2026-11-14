# Kimi K2.7 Code — findings by Hy3

**Source:** Web research (Baidu Baike, CSDN, Baidu Baijiahao, Tencent Cloud dev community) · **Date:** 2026-11-14 · **Reporter STEM:** Hy3

## Overview
Kimi K2.7 Code is Moonshot AI's open-source coding-specialized model released 2026-06-12, with 1.1T parameters and a 256K context window. It targets long-context programming — instruction-following and long-horizon task performance — and specifically addresses overthinking, cutting average token consumption ~30%. On internal/external benchmarks it improved sharply over K2.6: Kimi Code Bench v2 +21.8%, MLS Bench Lite (multilingual code understanding) +31.5%. A high-speed variant (2026-06-15) raises output 5–6× (≈180 tok/s常规, up to 260 tok/s short-context). Coinbase adopted it (with Zhipu GLM 5.2) as a default model for engineers, halving AI spend.

## Model card
- **Vendor:** Moonshot AI (月之暗面)
- **Release:** 2026-06-12 (open source); high-speed variant 2026-06-15
- **Params:** 1.1T
- **Context window:** 256K tokens
- **Focus:** Long-context coding, instruction following, long-horizon tasks
- **Speed:** high-speed variant ≈180–260 tok/s

## Raw benchmarks

### Agent
- Coding-agent oriented; used for code review, doc summarization (Coinbase default).

### Reasoning
- Reduced overthinking (−30% tokens); reasoning tuned for code correctness.

### Coding
- **Kimi Code Bench v2:** +21.8% over K2.6 · **MLS Bench Lite:** +31.5% (multilingual code understanding).

### Long context
- **Context window:** 256K tokens (long-context programming focus).

## Normalized scores
- **Tool use: 85/100.** Coding-agent deployment at scale (Coinbase).
- **Reasoning: 81/100.** Code-correctness reasoning; overthinking reduced.
- **Context window: 80/100.** 256K — below 1M-class.
- **Multimodal: 72/100.** Coding-focused; text-centric.
- **Coding: 90/100.** Kimi Code Bench v2 +21.8%, MLS Bench Lite +31.5% — strong coding.
- **Cost efficiency: 88/100.** Open source + 30% token savings + high-speed variant.
- **Overall Score: 81.6/100.** Mean of the five quality dims (85+81+80+72+90 = 408 / 5 = 81.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Kimi%20K2.7%20Code/67986864
  - https://blog.csdn.net/weixin_42589700/article/details/170408472
  - https://baijiahao.baidu.com/s?id=1867812583196933149&wfr=spider&for=pc
  - https://cloud.tencent.com/developer/news/4077872
  - https://blog.csdn.net/weixin_69779134/article/details/161957319
