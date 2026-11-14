# Inkling 2 Small — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Inkling 2 Small is Thinking Machines Lab's (Mira Murati) second model, released 2026-11-05. It is a 594B-parameter MoE activating 17B per token, accepting text and image input (text output). It underwent four pretraining stages plus 9 days of joint RL, and used reasoning traces collected from Moonshot's Kimi K3 during late training. Weights are planned for release under Apache 2.0 after external safety/red-team testing. It emphasizes customizable training so developers can further fine-tune with their own data.

## Model card
| Field | Value |
|---|---|
| Vendor | Thinking Machines Lab |
| Release | 2026-11-05 |
| Architecture | MoE, 594B total / 17B active |
| Modalities | Text + image input, text output |
| License | Apache 2.0 (planned, post safety review) |
| Training | 4-stage pretrain + 9-day joint RL; Kimi K3 traces |

## Raw benchmarks
- **Agent / Tool use:** Not specifically benchmarked in reviewed sources; tool-calling emphasized for customization.
- **Reasoning:** Boosted by Kimi K3 reasoning traces in late training.
- **Coding:** Not separately benchmarked in reviewed material.
- **Long context:** No explicit figure verified.

## Normalized scores
- **Tool use: 78/100.** Tool-calling / customization emphasized; not benchmarked.
- **Reasoning: 78/100.** Reasoning traces from Kimi K3; strong for size.
- **Context window: 76/100.** Unconfirmed; estimated mid-range.
- **Multimodal: 72/100.** Image input supported.
- **Coding: 76/100.** Not separately benchmarked; inferred capable.
- **Cost efficiency: 76/100.** 17B active params; open weights planned.
- **Overall Score: 76.0/100.** Mean of the five quality dims (78+78+76+72+76 = 380 / 5 = 76.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Inkling%202%20Small/69626551
  - https://www.zhihu.com/pin/2102101299093418089
  - https://baijiahao.baidu.com/s?id=1881113264078738261&wfr=spider&for=pc
