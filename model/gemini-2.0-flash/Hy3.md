# Gemini 2.0 Flash — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Gemini 2.0 Flash is Google's agent-era Flash model, first shown 2024-12-12 and shipped in versions (Pro/Flash/Flash-Lite) on 2025-02-06. It is built for the agentic web: native multimodal input/output (including image generation and controllable multilingual TTS), native Google Search/Maps and third-party tool integration, and a Multimodal Live API. It reached #1 on the Arena leaderboard and delivered ~90% accuracy on AI Overviews.

## Model card
| Field | Value |
|---|---|
| Vendor | Google (DeepMind) |
| Release | 2024-12-12 (preview); 2025-02-06 versions |
| Context window | 1M tokens (Flash); 2M (Pro) |
| Modalities | Multimodal in/out (image gen, TTS) |
| Tools | Native Search, Maps, third-party functions |
| Agent projects | Project Astra, Mariner, Jules |

## Raw benchmarks
- **Agent / Tool use:** Native Search/Maps and third-party tool calling; underpins agent projects Astra/Mariner/Jules — a headline strength.
- **Reasoning:** Thinking-model optimization; >100% speed vs prior gen; strong general reasoning.
- **Coding:** Capable coding; Jules provides agent-based code assistance.
- **Long context:** 1M-token (Flash) / 2M-token (Pro) context.

## Normalized scores
- **Tool use: 78/100.** Native tool integration + agent-project backbone.
- **Reasoning: 72/100.** General reasoning with thinking mode.
- **Context window: 84/100.** 1M (Flash) / 2M (Pro).
- **Multimodal: 78/100.** Multimodal in/out incl. image gen and TTS.
- **Coding: 74/100.** Solid; Jules agent-assist.
- **Cost efficiency: 80/100.** Flash-tier pricing; high throughput.
- **Overall Score: 77.2/100.** Mean of the five quality dims (78+72+84+78+74 = 386 / 5 = 77.2).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - https://developers.google.cn/newsletter/2024/12?hl=en
  - https://baike.baidu.com/item/Gemini%202.0/65208443
  - https://developer.android.google.cn/ai/gemini
  - https://www.fonearena.com/blog/445193/google-gemini-app-gemini-2-0-flash-imagen-3.html
  - https://m.36kr.com/p/3154542383798793
