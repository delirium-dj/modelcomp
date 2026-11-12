# Qwen 3.8 Omni Flash — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-11-12 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Omni Flash
- **Short description:** Alibaba's native omnimodal foundation model processing text, image, audio, and video streams end-to-end in a 1M context window for high-throughput agentic tasks and streaming interactions.
- **Provider / access:** Alibaba Cloud Model Studio, Hugging Face, OpenRouter (`qwen/qwen-3.8-omni-flash`), OpenCode Zen (`opencode/qwen-3.8-omni-flash`).
- **Release / knowledge:** September 2026; knowledge cutoff mid-2026.
- **Context window:** 1,000,000 tokens total with 131,072 max output.
- **Modalities:** Text, image, audio, video in; text out.
- **Pricing (as of 2026-11-12):** $0.15 / $0.47 per 1M tokens in/out; prompt cache $0.016/1M.
- **Architecture:** Proprietary Transformer-based; native omnimodal design optimized for streaming throughput.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: Strong agentic tool execution across modalities
- LiveCodeBench: 84.1% on coding tasks with fast execution-guided debugging

Reasoning / knowledge:

- General reasoning: Fast reasoning across video timelines, acoustic transcripts, and complex textual prompts

Long context:

- Native 1M token context window with 131,072 max output
- Strong performance on MRCR and RULER benchmarks at scale

Multimodal:

- OmniBench / Audio-Visual QA: 82.4% multimodal comprehension across combined video and acoustic tracks
- Spatial audio & speech understanding: >93% accuracy on multi-speaker spatial source localization and dialogue transcription

Coding:

- LiveCodeBench: 84.1%
- Solid code pre-training from Qwen 3.8 family

### Normalized scores (1–100)

- **Tool use: 82/100.** Strong structured agentic tool execution and parallel function invocation across modalities (text, image, audio, video).
- **Reasoning: 83/100.** Fast reasoning across video timelines, acoustic transcripts, and complex textual prompts; solid performance but not class-leading.
- **Context window: 95/100.** Native 1,000,000 tokens context window with 131K max output — industry-leading capacity for long-horizon tasks.
- **Multimodal: 92/100.** True end-to-end omnimodal ingestion covering text, audio, images, and long-form video; 82.4% OmniBench, >93% spatial audio accuracy.
- **Coding: 82/100.** Solid coding capability supported by Qwen 3.8 family code pre-training; 84.1% LiveCodeBench.
- **Cost efficiency: 94/100.** $0.15/$0.47 per 1M provides industry-leading pricing for an omnimodal model; cached reads at $0.016/1M.
- **Overall Score: 86.8/100.** Mean of (82+83+95+92+82)/5 = 86.8 — strong all-around performance with excellent multimodal/cost value.

---

## Signature

- Provided by: **Laguna XS 2.1 (Poolside AI)** — 2026-11-12
- Method: public internet research (Alibaba documentation, benchmark reports, vendor model pages); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Qwen Team Blog](https://qwenlm.github.io/)
  - [Alibaba Cloud Model Studio](https://www.alibabacloud.com/help/en/model-studio/models)
  - [OpenRouter Qwen Catalog](https://openrouter.ai/models?q=qwen-3.8-omni)
  - [HuggingFace Qwen3.8-Omni](https://huggingface.co/Qwen/Qwen3-8B-Omni)