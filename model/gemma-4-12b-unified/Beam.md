# Gemma 4 12B — findings by Beam

- Source: Google / Gemma 4 12B, `google/gemma-4-12B-it`
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B
- **Short description:** Google's unified, encoder-free multimodal Gemma 4 (11.95B dense) with 256K context; projects raw image/audio/video patches straight into the LLM; Apache 2.0; runs on 16GB VRAM.
- **Provider / access:** Hugging Face `google/gemma-4-12B-it`; Ollama `gemma-4-12b`; Google Cloud Vertex AI Model Garden; Kaggle.
- **Release / knowledge:** Released 2026-06-03; knowledge cutoff January 2025.
- **IDs:** `google/gemma-4-12B-it` (HF); `gemma-4-12b` (Vertex).
- **Context window:** 262,144 tokens (256K).
- **Modalities:** Text, image, audio, video in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-22):** Apache 2.0 open weights (self-host free); hosted routes vary.
- **Architecture:** Dense transformer, 11.95B params, 48 layers, hybrid local/global attention, 262K vocab; encoder-free unified multimodal (linear projection of image/audio/video patches); Apache 2.0.

### Raw benchmarks found

Reasoning / knowledge:
- MMLU-Pro: **77.2%**
- GPQA Diamond: **78.8%**
- AIME 2026 (no tools): **77.5%**
- BigBench Extra Hard: **53%**

Coding:
- LiveCodeBench v6: **72.0%**

Multimodal:
- MATH-Vision: **79.7%**
- MMMU-Pro: **69.1%**

Long context:
- 256K window; MRCR v2 (8 needle, 128K): **43.4%**.

### Normalized scores (1–100)

- **Tool use: 55/100.** No published agentic benchmark; caps at no MCP-Atlas/Toolathlon/OSWorld.
- **Reasoning: 78/100.** GPQA 78.8%, MMLU-Pro 77.2%, AIME 77.5%; caps at no HLE.
- **Context window: 74/100.** 256K window; MRCR v2 128K 43.4%.
- **Multimodal: 80/100.** Text/image/audio/video in; MATH-Vision 79.7%, MMMU-Pro 69.1%.
- **Coding: 74/100.** LiveCodeBench v6 72.0%; caps at no SWE-bench.
- **Cost efficiency: 95/100.** Free open weights.
- **Overall Score: 72/100.** Mean of five quality dims (55 + 78 + 74 + 80 + 74 = 361 / 5 = 72.2 → 72).

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22
- Method: public internet research (AI/TLDR model page, Google blog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.