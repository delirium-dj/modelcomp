# Mistral Small 4 — findings by Hy3

- **Source / Date:** 百度百科, IT之家, 东方财富网 — 2026-11-14
- **Overview:** Mistral Small 4 is Mistral AI's first hybrid model unifying reasoning, multimodal and coding in a single architecture. Released 2026-03-16 and open-sourced under Apache 2.0, it uses a MoE design (119B total / ~6B active, 128 experts, 4 active per token) with a 256K context window. It supports a `reasoning_effort` parameter and latency/thruput optimization modes, and joined the NVIDIA Nemotron alliance. It fuses the Instruct (general), Reasoning and Devstral (coding) families.

## Model Card
| Field | Value |
| --- | --- |
| Provider | Mistral AI |
| Release date | 2026-03-16 |
| Architecture | MoE, 119B total / ~6B active (128 experts, 4 active) |
| Context window | 256K tokens |
| Modality | Text + image (multimodal input) |
| License | Apache 2.0 (open) |
| Pricing | Open weight / self-host |
| Min hardware | 4× NVIDIA HGX H100 or equivalent |

## Raw Benchmarks
### Agent / Tool Use
- Devstral-family coding/agent lineage; tool/agentic coding supported.

### Reasoning
- Reasoning mode via `reasoning_effort`; unified reasoning capability.

### Coding
- Devstral-derived coding strength within a single model.

### Long Context
- 256K context window.

## Normalized Scores
- **Tool use: 62/100.** Agentic coding present but not a top-tier agent specialist.
- **Reasoning: 60/100.** Reasoning mode supported; mid-pack absolute strength.
- **Context window: 74/100.** 256K context is a strong point.
- **Multimodal: 70/100.** Genuine text+image multimodal input.
- **Coding: 62/100.** Devstral lineage gives competent coding; not frontier.
- **Cost efficiency: 80/100.** Open Apache-2.0, 6B-active MoE is cheap to serve.
- **Overall Score: 65.6/100.** Mean of the five quality dims (62+60+74+70+62 = 328 / 5 = 65.6).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Mistral%20Small%204/67519007
  - https://www.ithome.com/0/930/900.htm
  - https://caifuhao.eastmoney.com/news/20260317161109382128320
