# GLM-5.2-Coding — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** GLM-5.2-Coding is Zhipu AI's coding-specialized variant of the GLM-5.2 flagship (released ~2026-06). It is a text-input model with a 1M-token context and 128K max output, purpose-built for software engineering and long-horizon tasks. On Terminal-Bench 2.1 it scores 81.0 — within ~4% of Claude Opus 4.8 (85.0) and ahead of Gemini 3.1 Pro — and on SWE-bench Pro it scores 62.1. Independent writeups place its coding ability between Claude Opus 4.7 and 4.8.

## Model card
| Field | Value |
|---|---|
| Vendor | Zhipu AI (智谱) |
| Release | 2026-06 |
| Context window | 1,000,000 tokens |
| Max output | 128K tokens |
| Modalities | Text (coding-focused) |
| Positioning | Coding & long-horizon tasks |

## Raw benchmarks
- **Agent / Tool use:** Coding-agent oriented; integrates with Claude Code-style workflows (cc-switch).
- **Reasoning:** Strong on engineering reasoning; ~Opus 4.7–4.8 coding tier.
- **Coding:** Terminal-Bench 2.1 = 81.0; SWE-bench Pro = 62.1; LLM Benchmark Code V3 = 3rd place (usable parity with Opus 4.8).
- **Long context:** 1M-token context confirmed.

## Normalized scores
- **Tool use: 78/100.** Coding-agent workflows; strong tool integration.
- **Reasoning: 74/100.** Engineering reasoning near Opus 4.7–4.8.
- **Context window: 88/100.** 1M-token context.
- **Multimodal: 62/100.** Text-input model; no multimodal claims.
- **Coding: 82/100.** Terminal-Bench 81.0, SWE-bench Pro 62.1.
- **Cost efficiency: 80/100.** Competitive domestic pricing; strong price/performance.
- **Overall Score: 76.8/100.** Mean of the five quality dims (78+74+88+62+82 = 384 / 5 = 76.8).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://cloud.tencent.com/developer/article/2702010
  - https://gxdxyl.blog.csdn.net/article/details/162395364
  - https://hub.baai.ac.cn/view/55608
  - https://zhuanlan.zhihu.com/p/2050636596953846199
  - https://baijiahao.baidu.com/s?id=1868125905502579880&wfr=spider&for=pc
