# GLM-4.5-Flash — findings by Hy3

- **Source / Date:** 百度百科, CSDN, 51CTO — 2026-11-14
- **Overview:** GLM-4.5-Flash is Zhipu AI's lightweight, free variant of the GLM-4.5 native-agentic flagship (released 2025-07-28; 355B total / 106B Air lightweight edition). GLM-4.5 was the first model to natively fuse reasoning, coding and agentic capability, ranking #3 globally (and #1 among open-source) across 12 industry benchmarks, and integrated with Claude Code / Gemini CLI toolchains. The Flash edition is the efficient, free-API version, retaining thinking / non-thinking dual modes and MIT-license openness.

## Model Card
| Field | Value |
| --- | --- |
| Provider | Zhipu AI (智谱) |
| Release date | ~2025-07 (Flash followed GLM-4.5) |
| Architecture | MoE; lightweight edition of GLM-4.5 |
| Context window | Not disclosed (est. 128K–256K) |
| Modality | Text |
| License | MIT (open) / free API |
| Pricing | Free API (bigmodel.cn glm-4.5-flash) |

## Raw Benchmarks
### Agent / Tool Use
- Native agentic design; GLM-4.5 base ranked #1 open-source on agentic benchmarks; tool-calling cost dropped to 1.4% of Claude Opus 4.1.

### Reasoning
- Thinking mode for complex reasoning and tool calling.

### Coding
- Strong AI-coding capability; widely adopted by overseas coding tools.

### Long Context
- Not explicitly benchmarked for Flash.

## Normalized Scores
- **Tool use: 60/100.** Strong native agentic/tool-calling lineage.
- **Reasoning: 52/100.** Thinking-mode reasoning; solid for an efficient model.
- **Context window: 64/100.** Assumed standard; not benchmarked for Flash.
- **Multimodal: 40/100.** Text-only.
- **Coding: 56/100.** Strong coding lineage; efficient-tier.
- **Cost efficiency: 90/100.** Free API, efficient; very cheap.
- **Overall Score: 54.4/100.** Mean of the five quality dims (60+52+64+40+56 = 272 / 5 = 54.4).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/GLM-4.5/66256335
  - https://glm45.org/
  - https://blog.51cto.com/xfxuezhang/14549949
