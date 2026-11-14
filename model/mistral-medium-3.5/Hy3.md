# Mistral Medium 3.5 — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Mistral Medium 3.5 is Mistral AI's first "merged flagship" model, released 2026-04. It is a dense 128B model with a 256K context window that handles instruction-following, reasoning, and code generation within a single set of weights, and accepts text + image input (text output). It replaced Mistral Medium 3.1, Magistral, and Devstral 2 (in the Vibe coding agent) in Le Chat, and joined Microsoft Foundry / Copilot Studio in 2026-07. On SWE-bench Verified it scores 77.6%.

## Model card
| Field | Value |
|---|---|
| Vendor | Mistral AI |
| Release | 2026-04 |
| Architecture | Dense 128B ("merged" model) |
| Context window | 256K tokens |
| Modalities | Text + image input, text output |
| Integration | Le Chat; Microsoft Foundry / Copilot Studio |

## Raw benchmarks
- **Agent / Tool use:** Replaces Devstral 2 in the Vibe coding agent; tool/agent capable.
- **Reasoning:** Merged reasoning capability in one weights set.
- **Coding:** SWE-bench Verified 77.6%.
- **Long context:** 256K-token window confirmed.

## Normalized scores
- **Tool use: 76/100.** Coding-agent lineage (Vibe/Devstral replacement).
- **Reasoning: 72/100.** Solid merged-reasoning, mid-tier.
- **Context window: 80/100.** 256K context.
- **Multimodal: 74/100.** Image input supported.
- **Coding: 76/100.** SWE-bench Verified 77.6%.
- **Cost efficiency: 72/100.** Dense 128B; API-priced, not free.
- **Overall Score: 75.6/100.** Mean of the five quality dims (76+72+80+74+76 = 378 / 5 = 75.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Mistral%20Medium%203.5/68733045
  - https://www.modelscope.cn/models/mistralai/Mistral-Medium-3.5-128B/summary
  - https://news.miracleplus.com/share_link/127414
  - https://cloud.tencent.com/developer/article/2520576
  - https://blog.csdn.net/wmymo/article/details/160653123
