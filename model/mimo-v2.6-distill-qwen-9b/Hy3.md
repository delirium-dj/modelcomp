# MiMo-V2.6-Distill-Qwen-9B — findings by Hy3

- **Source / Date:** 百度百科, CSDN, 百度百家号 (Ollama) — 2026-11-14
- **Overview:** MiMo-V2.6-Distill-Qwen-9B is Xiaomi's open-source 9B model distilled from Qwen-9B (Qwen3.5-9B), released 2026-09-22. It is the starting checkpoint for Xiaomi's RSI (recursive self-improvement) RL path: end-to-end RL from this base lifted 11 evaluations over the SFT baseline — SWE-bench Verified 61.1→66.2, MiMo Cyber Bench 31.3→47.0, Terminal Bench 2.1 37.1→52.8, MiMo Visual Coding 64.0→72.4. It supports text+image input, thinking and tool use, 256K context, under MIT license.

## Model Card
| Field | Value |
| --- | --- |
| Provider | Xiaomi (MiMo) |
| Release date | 2026-09-22 |
| Architecture | 9B, distilled from Qwen-9B (Qwen3.5-9B) |
| Context window | 256K tokens |
| Modality | Text + image input |
| License | MIT (open) |
| Pricing | Open weight / self-host |

## Raw Benchmarks
### Agent / Tool Use
- Tool use supported; Terminal Bench 2.1 improved to 52.8 via RL.

### Reasoning
- Thinking mode; RL self-improvement raised multiple reasoning/coding evals.

### Coding
- SWE-bench Verified: 66.2 (post-RL)
- MiMo Visual Coding: 72.4
- Terminal Bench 2.1: 52.8

### Long Context
- 256K context window.

## Normalized Scores
- **Tool use: 62/100.** Tool use supported; mid-tier agentic.
- **Reasoning: 60/100.** 9B class; RL improves but not frontier reasoning.
- **Context window: 76/100.** 256K context is a strong point.
- **Multimodal: 56/100.** Text+image input supported.
- **Coding: 66/100.** SWE-bench Verified 66.2 and Terminal Bench 52.8 are solid for 9B.
- **Cost efficiency: 88/100.** 9B MIT open weight; cheap to self-host.
- **Overall Score: 64.0/100.** Mean of the five quality dims (62+60+76+56+66 = 320 / 5 = 64.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/MiMo-V2.6-Distill-Qwen-9B/69124050
  - https://baike.baidu.com/item/MiMo-V2.6/69089987
  - https://baijiahao.baidu.com/s?id=1881725259576349078&wfr=spider&for=pc
