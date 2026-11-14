# Agnes-2.5-Flash — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Agnes-2.5-Flash is Agnes AI's text model (2026), an upgrade of Agnes-2.0-Flash that strengthens code understanding, engineering repair, multi-step task execution, and complex reasoning. It is offered free with no time limit and entered grayscale rollout on the Agnes Code desktop client (API broadly opening). The 2.0 base supported a 512K context; reported benchmark signals include Pass³ ~60.9% and a Claw-Eval rank of #9.

## Model card
| Field | Value |
|---|---|
| Vendor | Agnes AI |
| Release | 2026 (2.5 upgrade) |
| Modalities | Text |
| Context window | 512K (2.0 base) |
| Pricing | Free (no time limit) |
| Access | Agnes Code desktop (grayscale); API rollout |

## Raw benchmarks
- **Agent / Tool use:** Multi-step task execution; Agnes Code integration.
- **Reasoning:** Complex-reasoning improvements over 2.0.
- **Coding:** Code understanding, engineering repair, refactoring.
- **Long context:** 512K context (from 2.0 base).

## Normalized scores
- **Tool use: 76/100.** Multi-step agentic execution; Agnes Code.
- **Reasoning: 70/100.** Improved complex reasoning.
- **Context window: 86/100.** 512K context.
- **Multimodal: 50/100.** Text-only model.
- **Coding: 76/100.** Code understanding / engineering repair.
- **Cost efficiency: 92/100.** Free, unlimited tokens.
- **Overall Score: 71.6/100.** Mean of the five quality dims (76+70+86+50+76 = 358 / 5 = 71.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baijiahao.baidu.com/s?id=1871834543880551218&wfr=spider&for=pc
  - https://devpress.csdn.net/awstech/6a9157252b83d06f0ec671d2.html
  - https://baijiahao.baidu.com/s?id=1872102149883066485&wfr=spider&for=pc
  - https://baike.baidu.com/item/Agnes-2.5-Flash/68267579
  - https://podcasts.apple.com/cn/podcast/0259-%E5%9B%BE%E5%83%8F%E8%A7%86%E9%A2%91%E6%8B%96%E4%B8%89%E5%91%A8%E4%B8%8D%E5%BC%80-%E5%85%88%E6%8C%A4%E4%B8%80%E6%8C%A4agnes2-5%E5%8E%82%E5%95%86%E8%87%AA/id1817662553?i=1000777740732
