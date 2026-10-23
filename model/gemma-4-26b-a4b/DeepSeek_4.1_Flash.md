# Gemma 4 26B A4B — findings by DeepSeek 4.1 Flash

- Source: Google DeepMind/Gemma-4-26B-A4B (`google/gemma-4-26b-a4b-it`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google DeepMind's 26B-total / 4B-active sparse MoE Gemma 4 model, offering near-flagship reasoning and coding at small-active-parameter cost, with a 256K window and multimodal input.
- **Provider / access:** Google AI Studio / Gemini API, Hugging Face (`google/gemma-4-26b-a4b-it`), Vertex AI, Ollama and llama.cpp. Open weights under the Gemma license.
- **Release / knowledge:** Gemma 4 generation (2026); exact launch date per Google DeepMind model card.
- **IDs:** `google/gemma-4-26b-a4b-it`; `gemma-4-26b-a4b`; Gemma Terms of Use.
- **Context window:** 256K tokens (262,144) — Google model card / BenchLM.
- **Modalities:** text, image and video in; text out (Gemma 4 family multimodal input).
- **Pricing (as of 2026-10-23):** free weights; hosted inference priced per provider (AI Studio free tier available).
- **Architecture:** sparse MoE, 26B total / 4B active; Gemma 4 family.

### Raw benchmarks found

Agent / tool use:

- τ²-Bench: **68.2%** (Google DeepMind Gemma 4 model card comparison table)

Reasoning / knowledge:

- GPQA Diamond: **82.3%**; AIME 2026: **88.3%**; HLE: **8.7%**; MMMLU: **86.3%** (Google model card table)
- MMLU-Pro: **82.6%** (same table)

Coding:

- LiveCodeBench v6: **77.1%**; Codeforces ELO: **1718** (Google model card table)

Long context:

- No MRCR/RULER row in the comparison table; 256K window vendor-stated.

Multimodal (VL) evidence:

- MMMU Pro: **73.8%**; MATH-Vision: **82.4%**; OmniDocBench: **0.149** error rate (Google model card table)

### Normalized scores (1–100)

- **Tool use: 66/100.** τ²-Bench 68.2% is slightly below the smaller 12B Unified's 69.0%, so the larger MoE does not improve this axis (Google model card).
- **Reasoning: 79/100.** AIME 88.3%, GPQA 82.3% and MMLU-Pro 82.6% are near-flagship for 4B active; HLE 8.7% is the limiting result (Google model card).
- **Context window: 72/100.** 256K is upper-tier, but no long-context retrieval benchmark was published for this variant.
- **Multimodal: 73/100.** MMMU Pro 73.8%, MATH-Vision 82.4% and OmniDocBench 0.149 beat the 12B Unified on document and chart work (Google model card).
- **Coding: 70/100.** LiveCodeBench v6 77.1% and Codeforces 1718 are the strongest in the Gemma 4 open family (Google model card).
- **Cost efficiency: 92/100.** Open weights with only 4B active parameters give flagship-adjacent quality at small-model serving cost.
- **Overall Score: 72/100.** Mean of the five quality dims (66+79+72+73+70)/5 = 72.0 → 72. Best-fit: cost-sensitive coding and reasoning workloads that still need multimodal input.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-23
- Method: public internet research (Google DeepMind Gemma 4 model card and Hugging Face comparison table, BenchLM, Google AI Studio docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
