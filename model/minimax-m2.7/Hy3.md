# MiniMax M2.7 — findings by Hy3

- **Source / Date:** 百度百科, 腾讯云开发者社区, CSDN, DataLearnerAI — 2026-11-14
- **Overview:** MiniMax M2.7 is the company's Agent flagship large model, released 2026-03-18 and globally open-sourced on 2026-04-12. It pioneers a model self-evolution path: an Agent-centric harness participates in its own training/optimization, can run 100+ consecutive "analyze–improve–verify" loops, and lifted internal eval scores ~30%. It emphasizes multi-agent collaboration and agentic software engineering.

## Model Card
| Field | Value |
| --- | --- |
| Provider | MiniMax (稀宇科技) |
| Release date | 2026-03-18 (open-sourced 2026-04-12) |
| Architecture | MoE (self-evolution / Agent-harness trained) |
| Parameters | Not officially disclosed |
| Context window | Not officially disclosed (agentic class, est. 200K–256K) |
| Modality | Text |
| License | Open weight (post open-source) |
| Pricing | API + open weight |

## Raw Benchmarks
### Agent / Tool Use
- SWE-bench Pro: 56.22% (ties GPT-5.3-Codex)
- VIBE-Pro: 55.6% (ties Opus 4.6)
- Terminal Bench 2: 57.0%
- GDPval-AA (office): ELO 1495 — highest among domestic Chinese models

### Reasoning
- Strong general reasoning via self-evolution; exact MMLU/GPQA not in launch coverage.

### Coding
- Kaggle MLE Lite: 22/24 problems solved in 24h, 9 gold / 5 silver / 1 bronze (66.6% medal rate), behind only Opus-4.6 and GPT-5.4, tied with Gemini-3.1.

### Long Context
- No explicit long-context benchmark disclosed.

## Normalized Scores
- **Tool use: 74/100.** Strong agentic profile (SWE-bench Pro 56.22%, Terminal Bench 2 57%, GDPval-AA 1495).
- **Reasoning: 72/100.** Self-evolution yields solid reasoning; VIBE-Pro 55.6% is competitive but mid-pack.
- **Context window: 72/100.** Agentic-class window; not officially benchmarked.
- **Multimodal: 46/100.** Text-only.
- **Coding: 74/100.** SWE-bench Pro 56.22% and strong Kaggle MLE Lite showing.
- **Cost efficiency: 82/100.** Open-weight after 2026-04-12; efficient to self-host.
- **Overall Score: 67.6/100.** Mean of the five quality dims (74+72+72+46+74 = 338 / 5 = 67.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/MiniMax%20M2.7/67501420
  - https://cloud.tencent.com/developer/article/2648469
  - https://www.datalearner.com/ai-models/pretrained-models/minimax-m2-7/analysis
