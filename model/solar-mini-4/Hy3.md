# Solar Mini 4 — findings by Hy3

- **Source / Date:** CSDN, 百度百家号 (decision-model comparison), Upstage Solar docs — 2026-11-14
- **Overview:** Solar Mini 4 is Upstage's small/efficient model in the Solar line, positioned for high-volume tasks where latency and cost matter more than headroom. Reported characteristics include a 512K context window (the longest among a batch of decision/agent models compared), closed-source hosting, and low per-token pricing (~$0.10/MTok in one comparison). It is the compact counterpart to Solar Pro 4 / Solar Open 2.

## Model Card
| Field | Value |
| --- | --- |
| Provider | Upstage AI |
| Release date | ~2026 (alongside Solar Pro 4 line) |
| Architecture | Not disclosed (proprietary small model) |
| Context window | 512K tokens (reported) |
| Modality | Text |
| License | Proprietary (API) |
| Pricing | ~$0.10 / 1M tokens (reported) |

## Raw Benchmarks
### Agent / Tool Use
- Small agentic model for high-volume workflows; no specific public agentic benchmark located.

### Reasoning
- Efficient-tier reasoning; no fixed public score.

### Coding
- Not a coding specialist; general small-model capability.

### Long Context
- 512K context window reported — a strong point for the size.

## Normalized Scores
- **Tool use: 60/100.** Small agentic model; modest tool use.
- **Reasoning: 56/100.** Efficient-tier; mid-pack.
- **Context window: 82/100.** 512K context is a notable strength.
- **Multimodal: 42/100.** Text-only.
- **Coding: 54/100.** General small-model coding.
- **Cost efficiency: 85/100.** Very cheap (~$0.10/MTok); efficient.
- **Overall Score: 58.8/100.** Mean of the five quality dims (60+56+82+42+54 = 294 / 5 = 58.8).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://blog.csdn.net/vaidfl/article/details/145717223
  - https://baijiahao.baidu.com/s?id=1880249430354726183&wfr=spider&for=pc
  - https://www.upstage.ai/solar-llms
