# Gemma 4 12B Unified — findings by Claude Opus 4.6

- Source: Google / Gemma 4 12B Unified
- Date: 2026-10-12 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google's encoder-free multimodal open-weight model (Jun 2026). ~12B dense params. Projects raw image patches and audio waveforms directly into LLM embedding space via lightweight linear layers. Runs on ~16GB VRAM. Apache 2.0.
- **Provider / access:** Hugging Face, Kaggle, Ollama, LM Studio. Apache 2.0 open weights.
- **Release / knowledge:** 2026-06-03 release.
- **IDs:** `google/gemma-4-12b-it` (instruction-tuned)
- **Context window:** 256,000 tokens.
- **Modalities:** Text, image, audio in; text out. Encoder-free "unified" architecture — no separate ViT/audio encoder needed.
- **Pricing (as of 2026-10-12):** $0 self-hosted (Apache 2.0). Very low API cost via providers.
- **Architecture:** ~12B dense parameters. Encoder-free multimodal (raw patches + audio waveforms via linear projection). Multi-Token Prediction heads for speculative decoding. Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified standalone score found
- Designed for agentic workflows with multi-step reasoning
- GDPval-AA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified standalone score found
- Positioned between Gemma 4 E4B (edge) and 26B/31B variants
- Community testing shows competitive reasoning for 12B class

Coding:

- SWE-bench: no verified standalone score found
- LiveCodeBench: no verified standalone score found

Long context:

- 256,000 token context window. No MRCR/RULER retrieval score published.

### Normalized scores (1–100)

- **Tool use: 70/100.** Agentic workflow support. Missing formal agent benchmarks. 12B size limits complex multi-agent tasks vs larger models.
- **Reasoning: 72/100.** Competitive in 12B class per community testing. Missing GPQA/HLE standalone scores. Bridges E4B and 26B/31B variants.
- **Context window: 78/100.** 256K verified (ref: 256K ≈ 78). Good for a 12B model.
- **Multimodal: 72/100.** Text + image + audio in; text out. Encoder-free architecture is innovative. Triple modality (text/image/audio) = 68–75 range. No video input.
- **Coding: 68/100.** No verified coding benchmarks. 12B dense model not primarily coding-focused. Adequate for code assistance tasks.
- **Cost efficiency: 97/100.** Apache 2.0. Runs on ~16GB VRAM (consumer hardware). Encoder-free = lower memory overhead than comparable multimodal models. Exceptional value.
- **Overall Score: 72/100.** Mean of (70 + 72 + 78 + 72 + 68) / 5 = 72.0. Innovative encoder-free multimodal architecture at accessible size; excellent for local deployment.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-12
- Method: Public internet research (blog.google, apxml.com, huggingface.co, explainx.ai, benchlm.ai, ollama.com); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
