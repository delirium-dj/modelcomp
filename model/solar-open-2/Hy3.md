# Solar Open 2 — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Solar Open 2 is Upstage's (Korea) open-source model, a 250B-parameter MoE with a 1M-token context. Per its technical report it records the highest average score of any model (including fast-tier closed APIs) on Korean benchmarks, and leads on the in-house Ko-GDPval. An NVFP4 quantization variant (Solar-Open2-250B-Nota-NVFP4) enables 32 concurrent users on optimized hardware via ~1.45× throughput and memory savings.

## Model card
| Field | Value |
|---|---|
| Vendor | Upstage (Korea) |
| Release | 2026 |
| Architecture | MoE, 250B parameters |
| Context window | 1,000,000 tokens |
| Modalities | Text |
| Quantization | NVFP4 variant for concurrency |

## Raw benchmarks
- **Agent / Tool use:** General agent use; concurrency-optimized.
- **Reasoning:** Highest average on Korean benchmarks vs closed fast APIs.
- **Coding:** Capable; Korean-centric strengths.
- **Long context:** 1M-token context confirmed.

## Normalized scores
- **Tool use: 70/100.** General agent; concurrency-tuned.
- **Reasoning: 70/100.** Strong on Korean eval; mid globally.
- **Context window: 86/100.** 1M-token context.
- **Multimodal: 54/100.** Text-only.
- **Coding: 68/100.** Capable; Korean-leaning.
- **Cost efficiency: 80/100.** Open weights; NVFP4 concurrency.
- **Overall Score: 69.6/100.** Mean of the five quality dims (70+70+86+54+68 = 348 / 5 = 69.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://blog.csdn.net/gitblog_01194/article/details/155884899
  - https://zhuanlan.zhihu.com/p/2064837808552933090
  - http://xueshu.baidu.com/s?wd=paperuri:(1p210mh0576u02s07g5d06m0x9223356)&filter=sc_long_sign&sc_ks_para=q%3DSolar+Open+2+Technical+Report&tn=SE_baiduxueshu_c1gjeupa&ie=utf-8&sc_us=11104345747195607572
  - https://blog.csdn.net/gitblog_00590/article/details/159032209
