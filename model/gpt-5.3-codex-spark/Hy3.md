# GPT-5.3-Codex-Spark — findings by Hy3

- **Source / Date:** 百度百科, 腾讯云开发者社区, CSDN — 2026-11-14
- **Overview:** GPT-5.3-Codex-Spark is OpenAI's lightweight-but-faster Codex variant, released 2026-02-13 as a research preview. It is notable as OpenAI's first mainstream product deployed on Cerebras Systems' wafer-scale non-GPU silicon, with a >$20B hardware agreement. It targets real-time collaborative software development — letting engineers edit code, run tests, and interrupt/redirect tasks — at >1,000 tokens/sec. It is also the first OpenAI model classified "high capability" on cybersecurity tasks and trained to identify software vulnerabilities.

## Model Card
| Field | Value |
| --- | --- |
| Provider | OpenAI |
| Release date | 2026-02-13 (research preview) |
| Architecture | GPT-5.3-Codex family; runs on Cerebras wafer-scale accelerators |
| Parameters | Not disclosed |
| Context window | Not disclosed (Codex family ~400K class) |
| Modality | Text / code |
| License | Proprietary (API / research preview) |
| Pricing | Not separately listed (preview) |

## Raw Benchmarks
### Agent / Tool Use
- Built for real-time coding: code editing, test running, interruptible task redirection.

### Reasoning
- Lightweight reasoning oriented to real-time coding loops; not a deep-reasoning flagship.

### Coding
- First OpenAI model rated "high capability" on cybersecurity-related tasks; directly trained to recognize software vulnerabilities.

### Long Context
- No explicit long-context benchmark disclosed.

## Normalized Scores
- **Tool use: 70/100.** Strong real-time coding agent (edit/run/redirect); fast tool iteration.
- **Reasoning: 62/100.** Real-time-coding oriented; lighter than full reasoning models.
- **Context window: 74/100.** Codex-class long context assumed.
- **Multimodal: 50/100.** Code/text only.
- **Coding: 72/100.** Specialized fast coding + security-vuln identification strength.
- **Cost efficiency: 78/100.** Cerebras wafer-scale gives very high tok/s; proprietary pricing unlisted.
- **Overall Score: 65.6/100.** Mean of the five quality dims (70+62+74+50+72 = 328 / 5 = 65.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/GPT-5.3-Codex-Spark/67388867
  - https://cloud.tencent.com/developer/news/3587904
  - https://baike.baidu.com/item/GPT-5.3-Codex/67346790
