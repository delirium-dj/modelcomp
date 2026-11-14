# Qoder Sonus — findings by Hy3

- **Source / Date:** 阿里云开发者社区, 百度文库, ai-bot.cn — 2026-11-14
- **Overview:** Sonus is a built-in model added to Alibaba's Qoder international edition on 2026-09-10 (pronounced /ˈsoʊnəs/). It is an autonomous-task and computer-use model — not a conventional Q&A chatbot — specializing in ultra-long task execution and direct computer operation. Paired with the Qoder desktop client (v0.2.3), it can autonomously complete programming, financial modeling, research analysis and spreadsheet creation, and is available across the full Qoder product line with a reported 3.2× efficiency gain.

## Model Card
| Field | Value |
| --- | --- |
| Provider | Alibaba (Qoder team) |
| Release date | 2026-09-10 (Qoder international) |
| Architecture | Autonomous agent / computer-use model (details undisclosed) |
| Context window | Not disclosed (ultra-long task execution implied) |
| Modality | Text / code (computer-use implies screen/UI interaction) |
| License | Proprietary (hosted in Qoder) |
| Pricing | Bundled with Qoder (unspecified) |

## Raw Benchmarks
### Agent / Tool Use
- Computer-use / autonomous task execution is the headline; direct operation of PC and professional software.

### Reasoning
- Agentic reasoning for long-horizon tasks; no fixed public reasoning score.

### Coding
- Autonomous programming, refactoring, financial/research automation.

### Long Context
- "Ultra-long autonomous task execution" implies large effective context.

## Normalized Scores
- **Tool use: 62/100.** Strong computer-use/agentic capability; not generic tool benchmarked.
- **Reasoning: 56/100.** Agentic reasoning; mid-pack, unverified by public benchmark.
- **Context window: 74/100.** Ultra-long task execution implies large context.
- **Multimodal: 46/100.** Computer-use suggests some vision; mostly text/code.
- **Coding: 62/100.** Autonomous programming; capable but unbenchmarked.
- **Cost efficiency: 75/100.** Hosted in Qoder; pricing unspecified, likely efficient.
- **Overall Score: 60.0/100.** Mean of the five quality dims (62+56+74+46+62 = 300 / 5 = 60.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://developer.aliyun.com/article/1762195
  - https://wenku.baidu.com/view/61896d0305f69e3143323968011ca300a7c3f650.html
  - https://ai-bot.cn/daily-ai-news/
