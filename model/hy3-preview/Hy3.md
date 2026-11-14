# Hy3 Preview — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Hy3 Preview is Tencent Hunyuan's first post-restructuring open-source model, released 2026-04-23 (the formal Hy3 followed 2026-07-06). It is a 295B-parameter MoE (21B active) with a 256K context and a fast/slow-thinking fusion design, positioning itself as the then-"most intelligent" Hunyuan model. It optimized multi-turn dialogue (coreference, ellipsis resolution, multi-turn constraint inheritance) and preceded the formal release that improved reasoning, agent, and long-context tasks.

## Model card
| Field | Value |
|---|---|
| Vendor | Tencent Hunyuan |
| Release | 2026-04-23 (Preview) |
| Architecture | MoE, 295B total / 21B active |
| Context window | 256K tokens |
| Modalities | Text (thinking fusion) |
| Status | Predecessor to formal Hy3 |

## Raw benchmarks
- **Agent / Tool use:** Early agent capability; refined in formal Hy3.
- **Reasoning:** Fast/slow-thinking fusion; improved over prior Hunyuan.
- **Coding:** Capable; formal Hy3 reached SWE-bench Verified 78.0.
- **Long context:** 256K context confirmed.

## Normalized scores
- **Tool use: 72/100.** Early agent design; refined later.
- **Reasoning: 70/100.** Thinking-fusion; preview-stage.
- **Context window: 80/100.** 256K context.
- **Multimodal: 56/100.** Text model.
- **Coding: 72/100.** Capable; formal version stronger.
- **Cost efficiency: 75/100.** Open weights; low API cost.
- **Overall Score: 70.0/100.** Mean of the five quality dims (72+70+80+56+72 = 350 / 5 = 70.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Hy3/68175158
  - https://ai-bot.cn/hy3-preview/
  - https://zhuanlan.zhihu.com/p/2057916842086229028
  - https://news.sohu.com/a/1046649767_122014422
  - https://baijiahao.baidu.com/s?id=1869982461880721750&wfr=spider&for=pc
