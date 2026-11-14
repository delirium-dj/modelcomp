# Ling 2.6-Flash — findings by Hy3

- **Source / Date:** Clore.ai, Ant Group press release, fitmyllm.com, 百度百科, 腾讯新闻 — 2026-11-14
- **Overview:** Ling 2.6-Flash is Ant Group's (inclusionAI / 百灵) efficiency-focused Instruct model, announced 2026-04-22 and open-sourced 2026-04-29 (BF16/FP8/INT4). It uses a 104B total / 7.4B active MoE with hybrid linear attention, a 262K context, and MIT license. Previously released as the anonymous "Elephant Alpha" on OpenRouter. It is explicitly agent-tuned (BFCL-V4, TAU2-bench, SWE-bench Verified, Claw-Eval, PinchBench SOTA for its size) and token-efficient: Artificial Analysis measured an Intelligence Index of 26 using only 15M output tokens (vs. 110M+ for comparables — ~86% lower inference cost). Throughput ~340 tok/s on 4× H20; stable 215 tok/s output.

## Model Card
| Field | Value |
| --- | --- |
| Provider | Ant Group (inclusionAI / 百灵) |
| Release date | 2026-04-22 (announced); 2026-04-29 (open-sourced) |
| Architecture | MoE, 104B total / 7.4B active; hybrid linear attention (MLA + Lightning Linear) |
| Context window | 262,144 tokens (256K) |
| Modality | Text |
| License | MIT (open) |
| Pricing | API $0.10 in / $0.30 out per 1M; 1-week free trial |

## Raw Benchmarks
### Agent / Tool Use
- BFCL-V4 and TAU2-bench: SOTA for its size class (agent-tuned)
- τ²-Bench: 86.0 (fitmyllm)

### Reasoning
- AIME 73.8; GPQA Diamond 59.3; AA Intelligence Index 26.2

### Coding
- SWE-bench Verified 61.2; LiveCodeBench 62.3; Claw-Eval / PinchBench SOTA for size

### Long Context
- 262K context (native, no YaRN tricks)

## Normalized Scores
- **Tool use: 58/100.** Agent-tuned (BFCL-V4/TAU2-bench SOTA for size) but calibrated to queue ranking.
- **Reasoning: 52/100.** Strong AIME/GPQA for its active size; calibrated to queue ranking.
- **Context window: 76/100.** 262K native context is a strong point.
- **Multimodal: 38/100.** Text-only.
- **Coding: 56/100.** SWE-bench 61.2 / LiveCodeBench 62.3; calibrated to queue ranking.
- **Cost efficiency: 82/100.** 7.4B active, MIT open, token-efficient (~86% lower inference cost).
- **Overall Score: 56.0/100.** Mean of the five quality dims (58+52+76+38+56 = 280 / 5 = 56.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://docs.clore.ai/guides/language-models/ling-26-flash
  - https://www.antgroup.com/en/news-media/press-releases/1776846600000
  - https://www.fitmyllm.com/model/ling-2.6-flash-104b
  - https://baike.baidu.com/item/Ling-2.6-flash/67661019
