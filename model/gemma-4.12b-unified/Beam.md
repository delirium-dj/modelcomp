# Gemma 4 12B Unified — findings by Beam

- Source: Google/Gemma 4 12B Unified, `google/gemma-4-12b-unified`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B Unified
- **Short description:** Google's open-weight 12B model (Jun 3, 2026) with encoder-free unified architecture: vision/audio/text in single decoder. Apache 2.0. MMLU Pro 77.2%, AIME 2026 77.5%, LiveCodeBench v6 72.0%, MMMU-Pro 69.1%.
- **Provider / access:** HuggingFace `google/gemma-4-12B`; Google AI Studio; NVIDIA NIM.
- **Release / knowledge:** Released 2026-06-03; knowledge cutoff not stated.
- **IDs:** `google/gemma-4-12b-unified`
- **Context window:** 256,000 tokens; max output not stated.
- **Modalities:** text, image, audio in; text out; reasoning yes; tool calling yes. Open weights (Apache 2.0).
- **Pricing (as of 2026-10-17):** Free (open weights); self-host.
- **Architecture:** 11.95B total, dense, encoder-free (unified), Apache 2.0. 48 layers, 1024 sliding window.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **22.8** (estimated #113/150)
- τ²-bench: **36.3%**
- GDPval-AA: **0.0%** / 591 Elo

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **52.6** (unranked, 3 rows)
- GPQA: **78.8%**
- GPQA-D: **78.8%**
- MMLU-Pro: **77.2%**
- HLE w/o tools: **5.2%**
- MRCRv2: **43.4%**
- AA-LCR: **63.7%**
- CritPt: **0.0%**
- AIME 2026 (no tools): **77.5%**

Coding:

- Coding public-lane (BenchLM): **22.8** (estimated #113/150)
- LiveCodeBench v6: **72.0%**
- AA Coding Index: **31.0%**

Long context:

- 256K window; MRCRv2 43.4%, AA-LCR 63.7%.

Multimodal:

- Multimodal public-lane (BenchLM): **59.4** (#44/54)
- MMMU-Pro: **69.1%**
- MathVision: **79.7%**
- MedXpertQA (MM): **48.7%**
- AA-MMMU-Pro: **69.7%**

### Normalized scores (1–100)

- **Tool use: 58/100.** Agentic lane #113/150 (22.8), τ²-bench 36.3%, GDPval-AA 0.0% (591 Elo); caps at no published Terminal-Bench.
- **Reasoning: 66/100.** GPQA 78.8%, MMLU-Pro 77.2%, AIME 77.5%, AA-LCR 63.7%, HLE 5.2%; caps at CritPt 0.0%.
- **Context window: 70/100.** 256K window; MRCRv2 43.4%, AA-LCR 63.7%.
- **Multimodal: 76/100.** Text/image/audio in (encoder-free); MMMU-Pro 69.1%, MathVision 79.7%, AA-MMMU-Pro 69.7%.
- **Coding: 62/100.** LiveCodeBench v6 72.0%, AA Coding 31.0%, coding lane #113/150 (22.8).
- **Cost efficiency: 98/100.** Free (open weights).
- **Overall Score: 66.4/100.** Mean of five quality dims (BenchLM aggregate 36.35); best-fit for local multimodal reasoning at zero cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Google blog, HuggingFace, BenchLM, CloudPrice); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|><|start|>2>