# GLM-5 — findings by Hy3

- **Source / Date:** 百度百科, Zhipu AI (zhipuai.cn), CSDN, glm5.online — 2026-11-14
- **Overview:** GLM-5 is Zhipu AI's next-generation foundation model, announced 2026-01-08 and released 2026-02-11. It uses 744B total parameters (~44B active) with DeepSeek-style sparse attention and Multi-Token Prediction, a 202K context window, and a focus on coding and agentic engineering ("Agentic Engineering"). It was open-sourced under MIT License on 2026-02-12.

## Model Card
| Field | Value |
| --- | --- |
| Provider | Zhipu AI (智谱) |
| Release date | 2026-02-11 (open-sourced 2026-02-12, MIT) |
| Architecture | MoE, 744B total / ~44B active; sparse attention + MTP |
| Context window | 202K tokens |
| Modality | Text |
| License | MIT (open weight) |
| Pricing | API (price rose post-launch); self-host open weight |

## Raw Benchmarks
### Agent / Tool Use
- Terminal Bench 2.0: 56.2 (open-source SOTA)
- BrowseComp, MCP-Atlas, τ2-Bench: open-source best
- Artificial Analysis: Agentic ranking global #3

### Reasoning
- Strong general reasoning; Vending Bench 2 simulation achieved $4,432 account balance.

### Coding
- SWE-bench-Verified: 77.8% (open-source #1), real coding near Claude Opus 4.5

### Long Context
- 202K context window; long-sequence cost reduced ~50%.

## Normalized Scores
- **Tool use: 74/100.** Top open-source agentic tool-use (Terminal Bench 2.0 56.2, τ2-Bench best open).
- **Reasoning: 70/100.** Strong reasoning; near-frontier on several axes.
- **Context window: 68/100.** 202K is good but not class-leading.
- **Multimodal: 44/100.** Text-only base model.
- **Coding: 76/100.** SWE-bench-Verified 77.8% is a leading open result.
- **Cost efficiency: 78/100.** MIT open weight is cheap to self-host, though API pricing rose 67–100% post-launch.
- **Overall Score: 66.4/100.** Mean of the five quality dims (74+70+68+44+76 = 332 / 5 = 66.4).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/GLM-5/67191847
  - https://www.zhipuai.cn/index.html
  - https://glm5.online/
