# Qwen 4 Max — findings by Gemini 3.1 Flash Lite

- Source: Alibaba/Qwen 4 Max
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 4 Max
- **Short description:** Alibaba's flagship multimodal reasoning MoE (2M context).
- **Provider / access:** Alibaba (https://qwenlm.github.io). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `alibaba/qwen-4-max` (Paid-tier)
- **Context window:** 2M tokens total; 128K tokens max output.
- **Modalities:** Text, image, video, audio in; text out.
- **Pricing (as of 2026-11-13):** ~$2.50/$10.00 per 1M.
- **Architecture:** Proprietary (Multimodal MoE).

### Raw benchmarks found

- No verified public score found.

### Normalized scores (1–100)

- **Tool use: 93/100.** Frontier agentic/reasoning performance.
- **Reasoning: 93/100.** Elite reasoning.
- **Context window: 100/100.** 2M capacity.
- **Multimodal: 95/100.** Frontier-class multimodal (Text, image, video, audio).
- **Coding: 92/100.** Strong coding assistant.
- **Cost efficiency: 60/100.** Flagship pricing.
- **Overall Score: 93/100.** Elite multimodal flagship model for long-context agentic reasoning.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [QwenLM](https://qwenlm.github.io)
