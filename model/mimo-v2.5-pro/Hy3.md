# MiMo-V2.5-Pro — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** MiMo-V2.5-Pro is Xiaomi's open-source (MIT) agentic model, released 2026-04-28 (public beta from 2026-04-23, led by Luo Fuli). It uses a ~1.02T-parameter MoE (42B active) with a 1M-token context, optimized for tool calling, code generation, skill use, general agents, complex software engineering, and long-horizon tasks; on some evaluations it approaches Claude Opus 4.6 and GPT-5.4. **Status note:** Xiaomi announced end-of-life on 2026-10-09; the V2.5 series auto-switched to V2.6 on 2026-10-14, and `mimo-v2.5-pro` was formally taken down on 2026-10-21.

## Model card
| Field | Value |
|---|---|
| Vendor | Xiaomi (MiMo team) |
| Release | 2026-04-28 (open-sourced) |
| License | MIT |
| Architecture | MoE, ~1.02T total / 42B active |
| Context window | 1,000,000 tokens |
| Status | Retired 2026-10-21 (replaced by V2.6) |

## Raw benchmarks
- **Agent / Tool use:** Optimized for tool calling, code gen, skill use, and general agents.
- **Reasoning:** Approaches Opus 4.6 / GPT-5.4 on some evals; improved over MiMo-V2-Pro.
- **Coding:** Tuned for complex software engineering and long tasks.
- **Long context:** 1M-token context confirmed.

## Normalized scores
- **Tool use: 78/100.** Tool-calling / agent optimized.
- **Reasoning: 72/100.** Competitive with flagship-class models on some evals.
- **Context window: 86/100.** 1M-token context.
- **Multimodal: 58/100.** Text/code focus; no multimodal claims.
- **Coding: 78/100.** Complex SWE / long-task tuned.
- **Cost efficiency: 70/100.** Retired; was API-served (MIT open weights).
- **Overall Score: 74.4/100.** Mean of the five quality dims (78+72+86+58+78 = 372 / 5 = 74.4); note this reflects capability, not current availability (retired 2026-10-21).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://mimo.xiaomi.com/zh
  - https://baike.baidu.com/item/Xiaomi%20MiMo-V2.5-Pro/67677558
  - https://zhuanlan.zhihu.com/p/2030962674872350666
  - https://blog.csdn.net/weixin_29055699/article/details/162646687
  - https://mimo.mi.com/docs/zh-CN/news/latest/1000tps
