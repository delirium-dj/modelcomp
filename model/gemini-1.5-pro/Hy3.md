# Gemini 1.5 Pro — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Gemini 1.5 Pro is Google's 2024 multimodal MoE model that pioneered very-long context (1M tokens at launch, upgraded to 2M in May 2024). It handled text, code, images, audio, video, and PDFs, and at its peak topped the LMSYS Chatbot Arena (≈1300 ELO) and surpassed GPT-4o in LMSYS eval (Aug 2024). **Status note:** As of 2026 it is retired — marked deprecated in April 2025, with final build `gemini-1.5-pro-002`, and service terminated 2025-09-24. Scores below reflect its capabilities at peak; availability/cost-efficiency are now effectively zero.

## Model card
| Field | Value |
|---|---|
| Vendor | Google (DeepMind) |
| Release | 2024 (1.5 Pro) |
| Architecture | MoE, dynamic token allocation (128K→1M→2M) |
| Context window | 1M tokens (2M from 2024-05) |
| Modalities | Text, code, image, audio, video, PDF |
| Status | Retired 2025-09-24 (deprecated) |

## Raw benchmarks
- **Agent / Tool use:** Early agent/multimodal tooling; strong for its 2024 era.
- **Reasoning:** Strong math, multilingual, and code generation for its time; Arena #1.
- **Coding:** Solid code generation; capable of 30,000-line-code tasks within 1M context.
- **Long context:** Flagship long-context pioneer (1M→2M tokens), could process ~1h video / 11h audio.

## Normalized scores
- **Tool use: 74/100.** Strong 2024-era agent/multimodal tooling.
- **Reasoning: 74/100.** Arena-topping reasoning in its era.
- **Context window: 84/100.** 1M–2M token pioneer.
- **Multimodal: 78/100.** Broad native multimodality (text/code/image/audio/video/PDF).
- **Coding: 76/100.** Strong code generation for its time.
- **Cost efficiency: 55/100.** Retired — no longer available for production use.
- **Overall Score: 77.2/100.** Mean of the five quality dims (74+74+84+78+76 = 386 / 5 = 77.2); note this reflects peak capability, not current availability.

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://baike.baidu.com/item/Gemini%201.5%20Pro/64418820
  - https://cloud.tencent.com/developer/article/2402942
  - https://www.datalearner.com/blog/1051708013012877
  - https://www.zhihu.com/question/644458732
