# GLM-5.1 — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** GLM-5.1 is Zhipu AI's open-source model (released 2026-04-08), notable for long-horizon task capability: it can run 8-hour continuous agentic sessions (e.g., building a complete Linux desktop from scratch, with up to 655 self-optimizing iterations). On SWE-bench Pro it set a then-global-best, surpassing Opus 4.6; it reached global #3 / domestic #1 / open-source #1 across SWE-bench Pro, Terminal-Bench 2.0, and NL2Repo, with coding capability at ~94.6% of Opus 4.6 at ~$3/month. Layer-level MoE load balancing on Ascend delivered +30% throughput.

## Model card
| Field | Value |
|---|---|
| Vendor | Zhipu AI (智谱) |
| Release | 2026-04-08 (open-sourced) |
| Context window | 200K tokens (per API metadata); 8-hour task horizon |
| Modalities | Text / code |
| Pricing | ~$3/month Coding Plan |
| Strengths | 8-hour long-horizon agentic tasks |

## Raw benchmarks
- **Agent / Tool use:** 8-hour autonomous loops; self-evaluation/optimization.
- **Reasoning:** Strong; SWE-bench Pro global best at release.
- **Coding:** SWE-bench Pro #1 (open), Terminal-Bench 2.0, NL2Repo top-tier.
- **Long context:** 200K context; exceptional task endurance.

## Normalized scores
- **Tool use: 74/100.** Long-horizon agentic execution.
- **Reasoning: 70/100.** Strong; coding-weighted.
- **Context window: 76/100.** 200K context.
- **Multimodal: 54/100.** Text/code only.
- **Coding: 76/100.** SWE-bench Pro open-source leader.
- **Cost efficiency: 82/100.** ~$3/month; strong price/performance.
- **Overall Score: 70.0/100.** Mean of the five quality dims (74+70+76+54+76 = 350 / 5 = 70.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/%E6%99%BA%E8%B0%B1GLM-5.1/67544623
  - https://docs.bigmodel.cn/cn/guide/models/text/glm-5.1
  - https://baijiahao.baidu.com/s?id=1860822514534098480&wfr=spider&for=pc
  - https://blog.csdn.net/demm868/article/details/160605447
  - https://hub.baai.ac.cn/view/53807
