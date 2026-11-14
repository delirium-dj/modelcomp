# Hy3 — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Hy3 is Tencent Hunyuan's open-source model, released 2026-07-06 (following an April 2026 Preview). It is a 295B-parameter MoE (21B active, 192 experts / top-8) with a 256K context and a fast/slow-thinking fusion design. It was tuned via expanded post-training to approach far larger flagship open models. On SWE-bench Verified it scores 78.0 (vs ~84 for GPT-5.5). Weights are on GitHub, Hugging Face, and ModelScope. (Note: this model slug "hy3" is distinct from the reporter STEM "Hy3".)

## Model card
| Field | Value |
|---|---|
| Vendor | Tencent Hunyuan |
| Release | 2026-07-06 (Preview 2026-04) |
| Architecture | MoE, 295B total / 21B active (192 experts, top-8) |
| Context window | 256K tokens |
| Modalities | Text (thinking fusion: fast/slow) |
| License | Open source (GitHub / HF / ModelScope) |

## Raw benchmarks
- **Agent / Tool use:** Agentic/productivity tasks; strong practical utility.
- **Reasoning:** Fast/slow-thinking fusion; SWE-bench Verified 78.0.
- **Coding:** SWE-bench Verified 78.0.
- **Long context:** 256K context confirmed.

## Normalized scores
- **Tool use: 74/100.** Agentic/productivity oriented.
- **Reasoning: 72/100.** Thinking-fusion; solid reasoning tier.
- **Context window: 80/100.** 256K context.
- **Multimodal: 58/100.** Text model (vision added later in Hy4).
- **Coding: 76/100.** SWE-bench Verified 78.0.
- **Cost efficiency: 75/100.** Open weights; low API cost on Tencent Cloud.
- **Overall Score: 72.0/100.** Mean of the five quality dims (74+72+80+58+76 = 360 / 5 = 72.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://hy3ai.com/
  - https://ai.gitcode.com/tencent_hunyuan/Hy3
  - https://blog.csdn.net/TongwenAI/article/details/162661047
  - https://cloud.tencent.com/developer/news/4205517
  - https://baijiahao.baidu.com/s?id=1869949429311949580&wfr=spider&for=pc
