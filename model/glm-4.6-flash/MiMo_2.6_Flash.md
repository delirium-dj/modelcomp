# GLM 4.6 Flash — findings by MiMo 2.6 Flash

- Source: Z.ai / Zhipu AI (`zai-org/GLM-4.6V-Flash`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 4.6 Flash (GLM-4.6V-Flash)
- **Short description:** Z.ai's dense 9B vision-language Flash model (GLM-4.6V series, Dec 2025) — local/edge-optimized, 128K multimodal context, and the first GLM line to ship native multimodal function calling (images/screenshots passed directly as tool arguments, vision-to-tool without OCR).
- **Provider / access:** Z.ai API (Flash is **free** — input, output and cached tokens), Zhipu Open Platform; open weights on Hugging Face (`zai-org/GLM-4.6V-Flash`, MIT license, GGUF/MLX available via LM Studio ≈ 8 GB); serve with vLLM/SGLang/Transformers.
- **Release / knowledge:** GLM-4.6V series released 2025-12-08 (BenchGecko/lmmarketcap/pricepertoken); review published 2025-12-09; knowledge cutoff not published.
- **IDs:** `zai-org/GLM-4.6V-Flash` (HF/ModelScope), opencode id `opencode/glm-4.6-flash`.
- **Context window:** 128K tokens (shared by the series; ~150 pages / ~1-hour video in one pass).
- **Modalities:** video, image, text, file in; text out. (No audio.)
- **Pricing (as of 2026-10-21):** Free on Z.ai Zen tier (site meta) and free Flash API on the Z.ai platform (input/output/cached all $0 — binaryverse review); self-host = weights only (BF16 ≈ 18–20 GB VRAM, Int4/GGUF ≈ 6–8 GB).
- **Architecture:** dense 9B, hybrid reasoning ("Thinking" mode), multimodal function calling, interleaved image-text generation, grounding.

### Raw benchmarks found

> Exact `GLM-4.6V-Flash` (9B) column, compiled by BinaryVerse AI (2025-12-09) from the Zhipu GLM-4.6V technical report. 106B sibling figures deliberately NOT merged.

Multimodal reasoning / VQA:

- MMMU (Val): **71.1%**; MMMU_Pro: **60.6%** (Flash column)
- MathVista: **82.7%**; AI2D: **89.2%**
- MMBench V1.1: **86.9%** (EN), **85.9%** (CN); MMStar: **74.7%**; UIRBENCH: **75.7%**

Agent / tool use (vision-native):

- WebVoyager: **71.8%**; OSWorld: **21.1%**; Design2Code: **69.8%** (Flash column, same source)
- Tau3 / GDPval / Terminal-Bench: no verified public score found (text-agent suites not run on this VLM)

Coding:

- Design2Code **69.8%** (UI-to-code); frontend replication is the vendor-highlighted workflow
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found for this exact ID

OCR / grounding (supports the above):

- OCRBench: **84.7%**; OCR-Bench_v2 (EN): **63.5%**; ChartQAPro: **62.6%**; RefCOCO-avg (val): **85.6%**

Long context / text reasoning:

- No MRCR/RULER figure; no GPQA/HLE/AIME rows for this exact ID (vision-focused card)

### Normalized scores (1–100)

- **Tool use: 70/100.** WebVoyager 71.8% and Design2Code 69.8% are strong mid-high vision-agent marks, and native multimodal function calling is a genuine differentiator; OSWorld 21.1% (GUI control) holds it back, and no text Tau3/TB rows exist.
- **Reasoning: 72/100.** MMMU 71.1 / MMMU_Pro 60.6 / MathVista 82.7 are solid multimodal-reasoning scores for a 9B, but no text GPQA/HLE/AIME evidence exists for this ID.
- **Context window: 64/100.** 128K is the floor of the long-context band (200K = 70 reference); no retrieval measurement at window length.
- **Multimodal: 78/100.** Image + video + file in with top-of-class 9B perception (MMMU 71.1, OCRBench 84.7, RefCOCO 85.6, ~1-hour video) — upper part of the image+video tier (75–90); text-only out, no audio keeps it under 90.
- **Coding: 66/100.** Frontend/visual coding is a strength (Design2Code 69.8%, screenshot-to-HTML/CSS workflow), but there is no SWE/LCB/SciCode row for this ID and the vendor's own review flags weaker backend logic.
- **Cost efficiency: 98/100.** Free hosted API (all token classes) plus MIT open weights that fit in 6–8 GB quantized — effectively zero marginal cost.
- **Overall Score: 70/100.** Mean of (70 + 72 + 64 + 78 + 66) / 5 = 70.0 → 70. Best fit: free local/API vision agent — screenshots, documents, GUI and frontend replication loops; not a text-reasoning or backend-SWE model.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-21
- Method: fresh public web research (HF `zai-org/GLM-4.6V-Flash` card, z.ai docs/GitHub GLM-V, BinaryVerse AI technical-report compilation, LM Studio, pricepertoken/BenchGecko release data); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
