# Laguna S 2.1 — findings by Hy3

- **Source / Date:** 百度百科, CSDN, 知乎, ModelScope — 2026-11-14
- **Overview:** Laguna S 2.1 is an open-source large language model released by Poolside, designed for agentic coding and long-horizon tasks. It uses a 118B total / 8B active MoE architecture with up to 1M-token context, offers thinking and no-thinking inference modes, and can run on a single NVIDIA DGX Spark. Poolside released the weights under the OpenMDW-1.1 license (Hugging Face / ModelScope) and integrates it into the OpenCode platform. It is billed as a leading agentic coding model in its weight class.

## Model Card
| Field | Value |
| --- | --- |
| Provider | Poolside |
| Release date | ~2026-07/08 |
| Architecture | MoE, 118B total / 8B active |
| Context window | Up to 1,000,000 tokens (1M) |
| Modality | Text / code |
| License | OpenMDW-1.1 (open weight) |
| Pricing | Open weight (self-host) |

## Raw Benchmarks
### Agent / Tool Use
- Terminal-Bench 2.1 (agentic coding) — demonstrated agentic capability
- Toolathlon Verified — agentic tool-use benchmark
- DeepSWE / SWE Atlas (Scale AI leaderboard) — agentic coding

### Reasoning
- Coding-focused reasoning; benchmarks reported on ModelScope card (third-party: Terminal-Bench 2.1, SWE Atlas, Toolathlon Verified).

### Coding
- Agentic coding strength is the headline; per Poolside, "far ahead of any model in its weight class." Compared against DeepSeek V4 Pro Max in community write-ups.

### Long Context
- 1M-token context window — top-tier.

## Normalized Scores
- **Tool use: 70/100.** Strong agentic coding (Toolathlon Verified, Terminal-Bench 2.1) but a code-specialist.
- **Reasoning: 66/100.** Coding-centric reasoning; not a general-reasoning flagship.
- **Context window: 84/100.** 1M context is a major strength.
- **Multimodal: 44/100.** Text/code only.
- **Coding: 74/100.** Leading agentic coding in its weight class; strong but smaller than frontier generalists.
- **Cost efficiency: 82/100.** Open-weight 8B-active MoE; runs on a single DGX Spark.
- **Overall Score: 67.6/100.** Mean of the five quality dims (70+66+84+44+74 = 338 / 5 = 67.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Laguna%20S2.1/68732291
  - https://dongfangyou.blog.csdn.net/article/details/163398995
  - https://modelscope.cn/models/poolside/Laguna-S-2.1
