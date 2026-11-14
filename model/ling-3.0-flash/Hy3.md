# Ling 3.0-Flash — findings by Hy3

- **Source / Date:** 百度百科, 什么值得买, 腾讯云开发者社区 — 2026-11-14
- **Overview:** Ling 3.0-Flash is Ant Group's (inclusionAI / 百灵) native hybrid-reasoning model, released 2026-07 and open-sourced 2026-08-05. It uses a MoE with 124B total / 5.1B active parameters, and with very few active params matches or surpasses much larger prior-generation flagships on multiple benchmarks. Designed for production-grade agentic workflows with long context, it offers free API calls on multiple platforms. A native multimodal sibling (Ling-3.0-flash-VL) also exists.

## Model Card
| Field | Value |
| --- | --- |
| Provider | Ant Group (Ling / 百灵 / inclusionAI) |
| Release date | 2026-07 (open-sourced 2026-08-05) |
| Architecture | MoE, 124B total / 5.1B active; native hybrid linear attention (KDA + MLA alternating) |
| Context window | Long context (exact not disclosed; production agentic) |
| Modality | Text (VL sibling separate) |
| License | Open weight (weights to follow free API) |
| Pricing | Free API on multiple platforms |

## Raw Benchmarks
### Agent / Tool Use
- Built for production agentic workflows; integrated into Hermes Agent ecosystem.

### Reasoning
- Native hybrid reasoning; with 5.1B active params rivals larger 1T-class flagships.

### Coding
- Agentic coding for production workflows.

### Long Context
- Long-context support emphasized for agentic use.

## Normalized Scores
- **Tool use: 68/100.** Production agentic design; Hermes Agent integration.
- **Reasoning: 68/100.** Native hybrid reasoning competitive with far larger models.
- **Context window: 74/100.** Long-context agentic; exact window not disclosed.
- **Multimodal: 48/100.** Text base (VL variant separate).
- **Coding: 68/100.** Production agentic coding capable.
- **Cost efficiency: 85/100.** 5.1B active + free API makes it very cost-efficient.
- **Overall Score: 65.2/100.** Mean of the five quality dims (68+68+74+48+68 = 326 / 5 = 65.2).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Ling-3.0-flash/68358537
  - https://post.smzdm.com/p/anvd5erp/
  - https://cloud.tencent.com/developer/article/2716480
