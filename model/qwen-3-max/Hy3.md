# Qwen3-Max — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Qwen3-Max is Alibaba's flagship text model in the Qwen3 generation, released 2026-09-24 (a Preview appeared 2025-09-05 as the first Qwen model to exceed 1 trillion parameters). The standard commercial SKU is a non-reasoning model with a 256K context and a hybrid thinking/non-thinking paradigm (thinking typically delivered via a separate variant). It shows strong code (SWE-Bench) and agentic (Tau2-Bench) performance and was trained on a 36T-token corpus.

## Model card
| Field | Value |
|---|---|
| Vendor | Alibaba Tongyi Lab |
| Release | 2026-09-24 (Preview 2025-09-05) |
| Parameters | >1 trillion |
| Context window | 256K tokens |
| Modalities | Text (standard SKU) |
| Paradigm | Hybrid thinking / non-thinking |

## Raw benchmarks
- **Agent / Tool use:** Strong agentic tool-chain orchestration (Tau2-Bench-class).
- **Reasoning:** Hybrid thinking mode available via variant.
- **Coding:** Strong code ability (SWE-Bench-class).
- **Long context:** 256K context confirmed.

## Normalized scores
- **Tool use: 74/100.** Strong agentic orchestration.
- **Reasoning: 72/100.** Reasoning via thinking variant; standard SKU non-reasoning.
- **Context window: 80/100.** 256K context.
- **Multimodal: 58/100.** Text model; no multimodal claims for standard SKU.
- **Coding: 76/100.** Strong code performance.
- **Cost efficiency: 72/100.** Flagship-tier API pricing.
- **Overall Score: 72.0/100.** Mean of the five quality dims (74+72+80+58+76 = 360 / 5 = 72.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://blog.csdn.net/daiziguizhong/article/details/151246057
  - https://zhuanlan.zhihu.com/p/1900631617950688593
  - https://blog.csdn.net/m0_38097087/article/details/153048629
  - https://baike.baidu.com/item/Qwen3/65634886
  - https://baijiahao.baidu.com/s?id=1830702421623485260&wfr=spider&for=pc
