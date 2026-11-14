# Xing 4.0-29B-A4B — findings by Hy3

- **Source / Date:** 百度百科, CSDN, api-free.com — 2026-11-14
- **Overview:** Xing 4.0-29B-A4B is China Telecom's (中电信人工智能科技 / TeleAI) "XingChen" (星辰) large model, released and open-sourced 2026-09-17 as the first full-stack domestic lightweight agent model. It uses a 29B total / 4B active MoE trained on domestic Ascend (昇腾) compute and the MindSpore framework, focuses on complex-task understanding, planning, tool-calling and autonomous execution, and runs on consumer GPUs (≈15GB at 4-bit, RTX 3090/4090). It scored 93.52 on the SuperCLUE Agent benchmark (#3).

## Model Card
| Field | Value |
| --- | --- |
| Provider | China Telecom AI (TeleAI) |
| Release date | 2026-09-17 (open-sourced) |
| Architecture | MoE, 29B total / 4B active |
| Context window | 256K tokens (native) |
| Modality | Text |
| License | Open weight |
| Pricing | Open weight / free API tiers |

## Raw Benchmarks
### Agent / Tool Use
- SuperCLUE Agent: 93.52 (#3)
- Tool-calling, multi-turn context management, task planning emphasized.

### Reasoning
- Agentic reasoning for complex tasks; not a general-reasoning flagship.

### Coding
- Code development scenario support.

### Long Context
- 256K native context; KV-cache dynamic release for long tasks.

## Normalized Scores
- **Tool use: 72/100.** SuperCLUE Agent #3 reflects strong tool/agent capability.
- **Reasoning: 62/100.** Agentic reasoning; mid-pack general reasoning.
- **Context window: 78/100.** 256K native context is a strong point.
- **Multimodal: 44/100.** Text-only.
- **Coding: 64/100.** Code-dev capable; not a coding specialist.
- **Cost efficiency: 86/100.** 4B active, runs on consumer GPUs at 4-bit; very cheap.
- **Overall Score: 64.0/100.** Mean of the five quality dims (72+62+78+44+64 = 320 / 5 = 64.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Xing4.0/69210989
  - https://blog.csdn.net/weixin_29045001/article/details/170206563
  - https://api-free.com/
