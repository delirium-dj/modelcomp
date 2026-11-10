# Gemma 4 12B Unified — findings by Fledge Alpha

- Source: Google DeepMind (`gemma-4-12b-unified`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 12B (Unified)
- **Short description:** Google DeepMind's June 3, 2026 laptop-class open multimodal model; encoder-free unified architecture (image patches + audio waveforms flow straight into the decoder).
- **Provider / access:** Hugging Face `google/gemma-4-12B` (Apache 2.0); GPU/laptop 16GB VRAM deployments; MTP drafter for latency.
- **Release / knowledge:** June 3, 2026; Gemma 4 built from Gemini 3 research; knowledge cutoff not specified.
- **IDs:** `google/gemma-4-12B`, `opencode/gemma-4-12b-unified` (folder); no Zen Free ID verified.
- **Context window:** 262K (apxml) / 256K (BenchLM); sliding window 1024.
- **Modalities:** text, image, audio, video inputs (unified encoder-free); text out; reasoning, agentic.
- **Pricing (as of 2026-10-05):** Apache 2.0 open weights; apxml cites API $0.10 / $0.30 per 1M for hosted routes.
- **Architecture:** 12B dense, 48 layers, hidden 3840, FFN 15360, MTP drafter, unified decoder-only transformer.

### Raw benchmarks found

Agent / tool use:

- No specific agentic benchmark row published in this view (Tools not separately scored).

Reasoning / knowledge:

- MMLU Pro: **77.2%** (HF launch table)
- GPQA: **78.8%** (HF/BenchLM)
- AIME 2026 no tools: **77.5%** (HF launch table)
- BBH: **53%** (BenchLM)

Coding:

- LiveCodeBench v6: **72.0%** (HF launch table)
- AA Coding Index: 0.31 (apxml)

Multimodal:

- MMMU-Pro: **69.1%** (BenchLM)
- MathVision: **79.7%** (BenchLM)
- MedXpertQA (MM): **48.7%** (BenchLM)
- Audio: native tokenized audio input (no benchmark row published in this view)

Long context:

- MRCRv2: **43.4%** (BenchLM); 262K naive via p-RoPE/unified KV global layers.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 65/100.** Agentic/tool use claimed by Google; no verified τ-benchmark row.
- **Reasoning: 80/100.** GPQA 78.8 and MMLU-Pro 77.2 are strong for a 12B open model; AIME 77.5 a solid math row.
- **Context window: 90/100.** 262K native, p-RoPE global layers; MRCRv2 43.4 limits long-context retrieval.
- **Multimodal: 82/100.** Native encoder-free audio/image fusion with MMMU-Pro 69.1 and MathVision 79.7.
- **Coding: 72/100.** LCB v6 72.0 verified from launch card; no SWE row published in this family view.
- **Cost efficiency: 94/100.** Apache 2.0 weights running on 16GB laptops; $0.10/$0.30 hosted route.
- **Overall Score: 78/100.** Mean of five non-cost dims (65+80+90+82+72)/5 = 77.8 → 78; best fit: local multimodal laptop agent.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (Google launch blog, Hugging Face `google/gemma-4-12B` and `-it` cards, BenchLM, apxml, gigazine); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
