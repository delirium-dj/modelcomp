# GLM-5.2 — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** GLM-5.2 is Zhipu AI's 2026-06 flagship (MoE: 744B total / ~40B active), supporting a 1M-token context and text+code modalities only. It reached #3 on the unofficial LLM Benchmark Code V3 and #1 among open-source models on the Artificial Analysis intelligence index (score 51). It was open-sourced under MIT. Noted weaknesses: slower reasoning speed and occasional unstable instruction-following.

## Model card
| Field | Value |
|---|---|
| Vendor | Zhipu AI (智谱) |
| Release | 2026-06-15/17 |
| Architecture | MoE, 744B total / ~40B active |
| Context window | 1,000,000 tokens |
| Modalities | Text + code (no multimodal) |
| License | MIT (open weights) |

## Raw benchmarks
- **Agent / Tool use:** Coding-agent capable; integrated into Tencent Buddy and OpenSquilla agent projects.
- **Reasoning:** Intelligence index 51 (open-source #1); slower reasoning noted.
- **Coding:** LLM Benchmark Code V3 #3.
- **Long context:** 1M-token context confirmed.

## Normalized scores
- **Tool use: 78/100.** Coding-agent integration.
- **Reasoning: 74/100.** Open-source intelligence-index leader; slower.
- **Context window: 92/100.** 1M-token context.
- **Multimodal: 55/100.** Text/code only.
- **Coding: 80/100.** Code V3 #3.
- **Cost efficiency: 78/100.** Open MIT weights; strong price/performance.
- **Overall Score: 75.8/100.** Mean of the five quality dims (78+74+92+55+80 = 379 / 5 = 75.8).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/%E6%99%BA%E8%B0%B1GLM-5.2/67958980
  - https://www.oschina.net/comment/news/458338
  - https://news.miracleplus.com/share_link/136550
  - https://blog.csdn.net/weixin_29057237/article/details/162468510
  - https://cloud.tencent.com/developer/article/2696580
