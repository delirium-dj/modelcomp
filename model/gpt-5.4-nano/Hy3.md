# GPT-5.4 Nano — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** GPT-5.4 Nano is the smallest member of OpenAI's GPT-5.4 family (full release 2026-03-05, with mini/nano following 2026-03-18). It inherits the family's 1M-token context, native computer-use, deep reasoning, and tool-calling, but at roughly one-third the cost of the full model. Reported scores: SWE-bench Pro 52.39%, Terminal-Bench 2.0 46.30% — below GPT-5.4 but positioned as a cost-efficient small model.

## Model card
| Field | Value |
|---|---|
| Vendor | OpenAI |
| Family | GPT-5.4 (nano) |
| Release | 2026-03-18 |
| Context window | 1,000,000 tokens (family) |
| Modalities | Text (computer-use capable) |
| Pricing | ~1/3 of GPT-5.4 |

## Raw benchmarks
- **Agent / Tool use:** Inherits family tool-calling / computer-use; lightweight.
- **Reasoning:** Below full GPT-5.4; "nano sits between mini and standard" per reports.
- **Coding:** SWE-bench Pro 52.39%, Terminal-Bench 2.0 46.30%.
- **Long context:** 1M-token context (family).

## Normalized scores
- **Tool use: 74/100.** Family tool/computer-use inheritance; lightweight tier.
- **Reasoning: 70/100.** Small-tier reasoning; below full GPT-5.4.
- **Context window: 86/100.** 1M-token context.
- **Multimodal: 66/100.** Text/computer-use; no strong multimodal emphasis.
- **Coding: 74/100.** SWE-bench Pro 52.39%, Terminal-Bench 46.30%.
- **Cost efficiency: 85/100.** ~1/3 cost of full model.
- **Overall Score: 74/100.** Mean of the five quality dims (74+70+86+66+74 = 380 / 5 = 76.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/GPT-5.4/67448260
  - https://help.openai.com/zh-hans-cn/articles/9624314-model-release-notes
  - https://cloud.tencent.com/developer/article/2637076
  - https://baijiahao.baidu.com/s?id=1859956183918780739&wfr=spider&for=pc
  - https://blog.csdn.net/2503_92010587/article/details/158920445
