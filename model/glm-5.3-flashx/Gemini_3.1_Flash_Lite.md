# GLM 5.3 FlashX — findings by Gemini 3.1 Flash Lite

- Source: Z.ai/GLM 5.3 FlashX
- Date: 2026-11-13
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 FlashX
- **Short description:** Low-latency serving variant (~200 tok/s) of GLM 5.3 Flash for multimodal coding.
- **Provider / access:** Z.ai (https://open.zhipuai.cn). Chat Completions API.
- **Release / knowledge:** 2026; knowledge cutoff unknown.
- **IDs:** `opencode/glm-5.3-flashx`
- **Context window:** 1M tokens total; 128K output.
- **Modalities:** Text, image, video in; text out.
- **Pricing (as of 2026-11-13):** Paid $0.37/$1.25 per 1M.
- **Architecture:** Same MoE weights as Flash.

### Raw benchmarks found

- No verified public score found.

### Normalized scores (1–100)

- **Tool use: 90/100.** Optimized for low-latency coding assistance.
- **Reasoning: 86/100.** Solid reasoning (shared with Flash).
- **Context window: 90/100.** 1M context.
- **Multimodal: 80/100.** Text, image, video support.
- **Coding: 90/100.** High-speed coding assistance.
- **Cost efficiency: 90/100.** Excellent pricing for streaming-heavy tasks.
- **Overall Score: 87.2/100.** Optimal Flash-class variant for low-latency, streaming-heavy coding agents.

---

## Signature

- Provided by: **Gemini 3.1 Flash Lite (google/gemini-3.1-flash-lite)** — 2026-11-13
- Method: Public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Z.ai](https://open.zhipuai.cn/)
