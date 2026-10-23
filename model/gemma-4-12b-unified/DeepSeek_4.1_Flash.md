# Gemma 4 12B Unified — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind/Gemma-4-12B-Unified (`google/gemma-4-12b-it`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google DeepMind's encoder-free 12B Gemma 4 model that ingests text, image, audio and video directly into one decoder — no separate vision/audio towers — with a 256K window and open weights.
- **Provider / access:** Google AI Studio / Gemini API, Hugging Face (`google/gemma-4-12b-it`), Ollama, llama.cpp and Vertex AI. Open weights under the Gemma license.
- **Release / knowledge:** Gemma 4 generation (2026); exact launch date per Google DeepMind model card.
- **IDs:** `google/gemma-4-12b-it`; `gemma-4-12b-unified`; Gemma Terms of Use.
- **Context window:** 256K tokens (262,144) — Google model card / BenchLM.
- **Modalities:** text, image, audio and video in; text out; encoder-free unified architecture.
- **Pricing (as of 2026-10-23):** free weights; hosted inference priced per provider (AI Studio free tier available).
- **Architecture:** 12B dense decoder-only transformer; unified multimodal input with no separate encoders.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench: **69.0%** (Google DeepMind Gemma 4 model card comparison table)

Reasoning / knowledge:

- GPQA Diamond: **78.8%**; AIME 2026: **77.5%**; HLE: **5.2%**; MMMLU: **83.4%** (Google model card table)
- MMLU-Pro: **77.2%** (same table)

Coding:

- LiveCodeBench v6: **72.0%**; Codeforces ELO: **1659** (Google model card table)

Long context:

- MRCR v2: **43.4%**; 256K window vendor-stated (Google model card table)

Multimodal (VL/audio) evidence:

- MMMU Pro: **69.1%**; MATH-Vision: **79.7%**; OmniDocBench: **0.164** error rate; CoVoST: **38.5** (Google model card table)

### Normalized scores (1–100)

- **Tool use: 62/100.** τ²-Bench 69.0% is solid for a 12B unified model but below the 26B-A4B sibling's 68.2 normalized at a larger scale (Google model card).
- **Reasoning: 72/100.** GPQA 78.8% and AIME 77.5% are excellent for 12B; HLE 5.2% and MMLU-Pro 77.2% cap it at the strong-mid tier (Google model card).
- **Context window: 72/100.** 256K is upper-tier, but MRCR v2 43.4% shows retrieval degrades well before the nominal limit (Google model card).
- **Multimodal: 70/100.** MMMU Pro 69.1%, MATH-Vision 79.7% and native audio/video input are broad, though OmniDocBench 0.164 trails dedicated document models (Google model card).
- **Coding: 66/100.** LiveCodeBench v6 72.0% and Codeforces 1659 are strong for 12B, below Gemma 4 26B-A4B's 77.1/1718 (Google model card).
- **Cost efficiency: 90/100.** Free weights and a 12B footprint make local inference cheap; hosted pricing varies by provider.
- **Overall Score: 68/100.** Mean of the five quality dims (62+72+72+70+66)/5 = 68.4 → 68. Best-fit: on-device multimodal assistants needing audio/video input without separate encoders.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-23
- Method: public internet research (Google DeepMind Gemma 4 model card and Hugging Face comparison table, BenchLM, Google AI Studio docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
