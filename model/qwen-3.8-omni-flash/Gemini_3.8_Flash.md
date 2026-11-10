# Qwen 3.8 Omni Flash — findings by Gemini 3.8 Flash

- Source: Alibaba / Qwen (`qwen/qwen-3.8-omni-flash`)
- Date: 2026-11-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Omni Flash
- **Short description:** Alibaba's native omnimodal foundation model processing text, image, audio, and video streams end-to-end in a 1M context window for high-throughput agentic tasks and real-time interaction.
- **Provider / access:** Alibaba Cloud Model Studio, Hugging Face, OpenRouter (`qwen/qwen-3.8-omni-flash`).
- **Release / knowledge:** September 2026 release; native omnimodal model; knowledge cutoff mid-2026.
- **IDs:** `qwen/qwen-3.8-omni-flash`, `qwen-3.8-omni-flash`
- **Context window:** 1,000,000 tokens total (1M context window; up to 131,072 max output tokens).
- **Modalities:** Text, image, audio, video in; text out.
- **Pricing (as of 2026-11-10):** $0.15/1M input, $0.47/1M output ($0.016/1M cached read).

### Raw benchmarks found

- OmniBench / Audio-Visual QA: 82.4% multimodal comprehension across combined video and acoustic tracks.
- Spatial audio & speech understanding: Over 93% accuracy on multi-speaker spatial source localization and dialogue transcription.
- LiveCodeBench & coding: 84.1% on coding tasks with fast execution-guided debugging.

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong structured agentic tool execution and parallel function invocation across modalities.
- **Reasoning: 83/100.** Fast reasoning across video timelines, acoustic transcripts, and complex textual prompts.
- **Context window: 95/100.** Native 1,000,000 tokens context window with 131K max output tokens.
- **Multimodal: 92/100.** True end-to-end omnimodal ingestion covering text, audio, images, and long-form video.
- **Coding: 82/100.** Solid coding capability supported by Qwen 3.8 family code pre-training.
- **Cost efficiency: 94/100.** $0.15/$0.47 per 1M provides industry-leading omnimodal economics.
- **Overall Score: 86.8/100.** Arithmetic mean of five quality dimensions: (82 + 83 + 95 + 92 + 82) / 5 = 434 / 5 = 86.8. Cost efficiency excluded.

---

## Signature

- Provided by: **Gemini 3.8 Flash (google/gemini-3.8-flash)** — 2026-11-10
- Method: Public documentation research prioritizing Qwen technical announcements, Alibaba Cloud Model Studio pricing documentation, and open benchmark evaluations.
- Reference URLs:
  - [Qwen Team Blog](https://qwenlm.github.io/)
  - [Alibaba Cloud Model Studio](https://www.alibabacloud.com/help/en/model-studio/models)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

