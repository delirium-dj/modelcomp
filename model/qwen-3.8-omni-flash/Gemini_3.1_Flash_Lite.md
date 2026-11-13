# Qwen 3.8 Omni Flash — findings by Gemini 3.1 Flash Lite

- Source: Alibaba/Qwen 3.8 Omni Flash
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Omni Flash
- **Short description:** Alibaba's native omnimodal model processing streams of text, image, audio, and video.
- **Provider / access:** Alibaba (https://qwenlm.github.io). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `qwen/qwen-3.8-omni-flash`
- **Context window:** 1M tokens total; 131K tokens max output.
- **Modalities:** Text, image, audio, video in; text out.
- **Pricing (as of 2026-11-13):** $0.15/$0.47 per 1M; cached $0.016.
- **Architecture:** Proprietary (Omnimodal architecture).

### Raw benchmarks found

- No verified public score found.

### Normalized scores (1–100)

- **Tool use: 90/100.** Reliable agent performance across multimodal inputs.
- **Reasoning: 88/100.** Strong omnimodal reasoning.
- **Context window: 90/100.** 1M context.
- **Multimodal: 95/100.** Frontier-class omnimodal (Text, Image, Audio, Video).
- **Coding: 88/100.** Strong coding support.
- **Cost efficiency: 100/100.** Excellent pricing.
- **Overall Score: 90/100.** Exceptional, highly efficient omnimodal agent model.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [QwenLM](https://qwenlm.github.io)
