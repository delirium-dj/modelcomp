# Gemini 2.0 Flash — findings by DeepSeek 4 Flash

- Source: Google/Gemini 2.0 Flash
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's 2025 workhorse multimodal model with a 1M context window; shut down 2026-06-01 and kept as a historical reference for the 2.0 generation. Superseded across the board by Gemini 2.5/3.x Flash.
- **Provider / access:** Google AI Studio / Vertex AI; proprietary; no Zen Free ID.
- **Release / knowledge:** 2025 release; officially deprecated and shut down 2026-06-01.
- **IDs:** `google/gemini-2.0-flash`
- **Context window:** 1M total — per curated provider metadata.
- **Modalities:** text, image, audio, video in / text, image out; native tool use.
- **Pricing (as of 2026-10-01, historical):** Google AI Studio $0.10 in / $0.40 out per 1M (audio in $0.70); Vertex AI $0.15/$0.60. No longer served.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: **570 Elo** (40th percentile, rank 204/340)
- BFCL-v3: **61.2%**; GAIA (HAL) **32.7%**
- Terminal-Bench Hard: **3.8%**; Tau2-Bench Telecom **29.5%**; Online Mind2Web (HAL) **29.0%**
- ARC-AGI-2: **1.3%**

Reasoning / knowledge:

- GPQA Diamond: **65.2%** (Vals) / **63.6%** (epoch); MMLU-Pro **77.9%** / Vals **77.4%**
- HLE: **5.3%** (text-only **6.5%**); AA Intelligence Index **12.27**
- AIME 2025 **21.7%**; MATH 500 **88.0%**; MGSM **89.0%**
- LongBench v2 **51.1%**; AA-LCR **31.7%**

Coding:

- SciCode: **34.0%**; LiveCodeBench **43.6%**; SWE-bench Verified Mini (HAL) **24.0%**
- Defects4J Plausible@1 **33.0%**; RepairBench **30.4%**
- BenchmarkList ECI: **93.01**, #241 of 354

Multimodal:

- MMMU-Pro: **69.8%**; MMVU **69.5**; MathVista **73.1%**; OpenVLM **72.6**
- Audio: CASU contextual reasoning **73.3%** (rank 2/16)

Long context:

- AA-LCR 31.7%; LongBench v2 51.1% at 1M claimed window

### Normalized scores (1–100)

- **Tool use: 45/100.** BFCL-v3 61.2% and GDPval 570 are modest; Terminal-Bench Hard 3.8% and Mind2Web 29.0% are weak.
- **Reasoning: 50/100.** GPQA ~65% and MMLU-Pro 77.9% are mid; HLE 5.3% and AA Index 12.27 cap it.
- **Context window: 90/100.** 1M-token input verified, tempered by weak AA-LCR 31.7% retrieval.
- **Multimodal: 90/100.** Text/image/audio/video in with image out; MMMU-Pro 69.8% and strong audio-scene scores.
- **Coding: 48/100.** SciCode 34.0% and LiveCodeBench 43.6% are dated; SWE Verified Mini 24.0% caps it.
- **Cost efficiency: 97/100.** $0.10/$0.40 per 1M was exceptionally cheap before shutdown.
- **Overall Score: 65/100.** Mean of (45 + 50 + 90 + 90 + 48) / 5 = 64.6 → 65. Best-fit: historical multimodal reference; superseded for all current work.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (BenchmarkList, Vals AI, Artificial Analysis, provider metadata); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
