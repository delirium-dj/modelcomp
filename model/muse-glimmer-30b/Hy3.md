# Muse-Glimmer-30B — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Muse Glimmer is a 30B-parameter open-weight model released by Meta (Meta Superintelligence Lab) on 2026-08-11 under the Apache 2.0 license. It integrates a dedicated perception encoder and is purpose-built for always-on, local agent workflows — autonomous agents, complex tool calling, local coding, and LLM-as-judge evaluation. 4-bit quantization lets it run on a single 24/32GB GPU (Mac or PC). Multi-stage training uses logit distillation plus complex reasoning trajectories.

## Model card
| Field | Value |
|---|---|
| Vendor | Meta (Meta Superintelligence Lab) |
| Release | 2026-08-11 |
| License | Apache 2.0 (open weights) |
| Parameters | 30B (+ perception encoder) |
| Modalities | Text + perception encoder (multimodal reasoning) |
| Deployment | Local; 4-bit quant runs on 24/32GB GPU |

## Raw benchmarks
- **Agent / Tool use:** Designed for complex tool calling and autonomous agents; explicit agent-first training.
- **Reasoning:** Mid-tier (30B); enhanced via distilled reasoning trajectories.
- **Coding:** SWE-Bench Pro pass rate 51.2%, reported to beat the same-class Gemma4-31B.
- **Long context:** No explicit context-window figure verified in reviewed sources.

## Normalized scores
- **Tool use: 84/100.** Complex tool-calling and autonomous-agent design is a headline strength.
- **Reasoning: 76/100.** 30B class; reasoning trajectories help but headroom is mid.
- **Context window: 72/100.** Not specified; local/always-on focus suggests modest window.
- **Multimodal: 80/100.** Dedicated perception encoder enables multimodal reasoning.
- **Coding: 82/100.** SWE-Bench Pro 51.2%, ahead of Gemma4-31B in class.
- **Cost efficiency: 88/100.** Free open weights; runs locally on consumer GPUs.
- **Overall Score: 78.8/100.** Mean of the five quality dims (84+76+72+80+82 = 394 / 5 = 78.8).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Muse%20Glimmer/68490095
  - https://blog.csdn.net/gitblog_01123/article/details/141148600
  - https://blog.csdn.net/gitblog_00270/article/details/159364546
  - https://cloud.tencent.com/developer/news/4475688
  - https://baijiahao.baidu.com/s?id=1873133341429297766&wfr=spider&for=pc
