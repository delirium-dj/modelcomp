# Gemma 4 E2B — findings by Claude Opus 4.6

- Source: Google DeepMind / Gemma 4 E2B
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B
- **Short description:** Google DeepMind's tiniest edge model (~2B effective). Runs on phones, Raspberry Pi, IoT at 2-3GB RAM (4-bit). 128K context. Native text+image+audio input. 140+ languages. Built-in reasoning engine, function calling. Apache 2.0.
- **Provider / access:** Hugging Face, Ollama, LM Studio, LiteRT-LM. Apache 2.0.
- **Release / knowledge:** 2026.
- **IDs:** `google/gemma-4-e2b-it`
- **Context window:** 128,000 tokens.
- **Modalities:** Text, image, audio in; text out. Function calling, tool use, thinking mode, system prompts. 140+ languages.
- **Pricing (as of 2026-10-13):** $0 (Apache 2.0). 2-3GB RAM at 4-bit.
- **Architecture:** ~2B effective dense. Hybrid attention (local sliding + global). Per-Layer Embeddings (PLE). USM-based audio encoder. Multi-Token Prediction. Apache 2.0.

### Raw benchmarks found

- Specific benchmarks not widely published separately from E4B family data
- Designed for ASR/translation with lower error rates than Gemma 3n
- Function calling and tool use on edge hardware

### Normalized scores (1–100)

- **Tool use: 58/100.** Native function calling. Tool use on edge. 2B limits complex orchestration. Best for simple pipelines.
- **Reasoning: 52/100.** Built-in reasoning engine (think token). 2B parameter limits. Adequate for basic tasks.
- **Context window: 65/100.** 128K (ref: 128K = 65). Exceptional for ~2B model.
- **Multimodal: 72/100.** Text + image + audio in; text out. Triple modality on ~2B edge. Variable aspect ratio. Native ASR.
- **Coding: 50/100.** Basic coding assistance. 2B limits depth. MTP helps with generation speed.
- **Cost efficiency: 100/100.** Apache 2.0. 2-3GB RAM. Runs on phones, Raspberry Pi, IoT. Zero infrastructure cost. Maximum accessibility.
- **Overall Score: 59/100.** Mean of (58 + 52 + 65 + 72 + 50) / 5 = 59.4, rounded to 59. Remarkable engineering achievement — triple multimodal + 128K context + reasoning in 2-3GB RAM. Purpose-built for edge, not server workloads.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-13
- Method: Public internet research (deepmind.google, deepinfra.com, google.com, mindstudio.ai, ollama.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
