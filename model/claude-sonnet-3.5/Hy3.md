# Claude Sonnet 3.5 — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Claude Sonnet 3.5 is Anthropic's mid-tier model (first released 2024-06, upgraded 2024-10 with Computer Use). It scored GPQA 59.4%, MMLU 88.3%, and HumanEval 92.0%, solved 64% of internal agentic-coding problems (vs 38% for Claude 3 Opus), and reached 49% on SWE-bench Verified after the upgrade. The October update added Computer Use (GUI control via screenshots/keyboard), and it runs at 2× the speed of Claude 3 Opus with a 200K context window.

## Model card
| Field | Value |
|---|---|
| Vendor | Anthropic |
| Release | 2024-06 (Computer Use upgrade 2024-10) |
| Context window | 200K tokens |
| Modalities | Text + vision; Computer Use (GUI) |
| Speed | 2× Claude 3 Opus |

## Raw benchmarks
- **Agent / Tool use:** Computer Use (GUI automation); strong agentic coding (64% internal).
- **Reasoning:** GPQA 59.4%; solid general reasoning.
- **Coding:** SWE-bench Verified 49%; HumanEval 92.0%.
- **Long context:** 200K-token window.

## Normalized scores
- **Tool use: 74/100.** Computer Use + agentic coding.
- **Reasoning: 72/100.** GPQA 59.4%; capable general reasoning.
- **Context window: 78/100.** 200K context.
- **Multimodal: 70/100.** Vision + Computer Use.
- **Coding: 76/100.** SWE-bench 49%, HumanEval 92%.
- **Cost efficiency: 75/100.** Mid-tier Sonnet pricing.
- **Overall Score: 74.0/100.** Mean of the five quality dims (74+72+78+70+76 = 370 / 5 = 74.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Claude%203.5%20Sonnet/64574961
  - https://baijiahao.baidu.com/s?id=1813669697975189316&wfr=spider&for=pc
  - https://baijiahao.baidu.com/s?id=1816063169353405600&wfr=spider&for=pc
  - https://blog.csdn.net/IOIO_/article/details/151643806
  - https://www.modb.pro/db/1854475725278031872
