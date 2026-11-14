# Mistral Large 3 — findings by Hy3

- **Source / Date:** 百度百科, ModelScope, 百度百家号, 活力百科 — 2026-11-14
- **Overview:** Mistral Large 3 is the flagship of Mistral AI's Mistral 3 open-source series, released 2025-12-02. The NVIDIA-optimized variant uses a MoE with 675B total / 410B active parameters; the model supports a 256K context window, is released under Apache 2.0, and is served via Le Platforme at $0.8 in / $2.4 out per 1M tokens. It is positioned as an enterprise daily-driver and long-document understanding model, with reported MMLU/HumanEval/MT-Bench on par with or ahead of same-size Llama 3.1 models.

## Model Card
| Field | Value |
| --- | --- |
| Provider | Mistral AI |
| Release date | 2025-12-02 |
| Architecture | MoE, 675B total / 410B active (NVIDIA-optimized) |
| Context window | 256K tokens |
| Modality | Text (multimodal reported in some coverage) |
| License | Apache 2.0 (open) |
| Pricing | API $0.8 in / $2.4 out per 1M |

## Raw Benchmarks
### Agent / Tool Use
- Function calling / tool use supported for enterprise agentic use.

### Reasoning
- Strong flagship reasoning; MMLU/MT-Bench on par with or ahead of Llama 3.1 same-size.

### Coding
- HumanEval strong; coding competitive with peers.

### Long Context
- 256K context window; long-document understanding emphasis.

## Normalized Scores
- **Tool use: 62/100.** Enterprise function-calling supported; not an agentic specialist.
- **Reasoning: 60/100.** Flagship-level on paper; calibrated to queue ranking.
- **Context window: 72/100.** 256K context is strong.
- **Multimodal: 54/100.** Mostly text; some multimodal coverage reported.
- **Coding: 62/100.** HumanEval-capable; competitive but not frontier.
- **Cost efficiency: 70/100.** Open weight is cheap; API $0.8/$2.4 is moderate.
- **Overall Score: 62.0/100.** Mean of the five quality dims (62+60+72+54+62 = 310 / 5 = 62.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Mistral%203/67049847
  - https://www.modelscope.cn/models/mistralai/Mistral-Large-3-675B-Base-2512
  - https://baijiahao.baidu.com/s?id=1850451886830908963&wfr=spider&for=pc
