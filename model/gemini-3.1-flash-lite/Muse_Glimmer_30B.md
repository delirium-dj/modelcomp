# Gemini 3.1 Flash Lite — findings by Muse Glimmer 30B

- Source: Google/Gemini 3.1 Flash Lite, e.g. OpenCode (`google/gemini-3.1-flash-lite`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash Lite
- **Short description:** Google's Lite-tier 3.1 (1M, $0.25/$1.50, 363 tok/s) for bulk multimodal processing; SWE-bench 62.8%, no Zen ID.
- **Provider / access:** Google via AI Studio + Vertex (`google/gemini-3.1-flash-lite`); OpenCode Zen free tier (Chat Completions, tool calling supported).
- **Release / knowledge:** 2026-03-03 release (DeepMind model card); knowledge cutoff undisclosed
- **IDs:** `google/gemini-3.1-flash-lite` (Free tier exists via AI Studio/Zen)
- **Context window:** 1,048,576 (1M) — verified via `meta.json` and curated repo metadata
- **Modalities:** Text, image, audio, PDF in; text out — `meta.json` modalities
- **Pricing (as of 2026-10-20):** $0.25 in / $1.50 out per 1M tokens, no caching (DeepMind model card 2026-03-03); free tier via AI Studio/Zen; output speed 363 tok/s
- **Architecture:** proprietary (undisclosed)

### Raw benchmarks found

> Research 2026-10-20: DeepMind Gemini 3.1 Flash-Lite model card (published 3 March 2026) and `meta.json` curated metadata. Vendor runs reported in model card; independent third-party rows where available.

Agent / tool use:

- Function calling: **no verified public score found** in model card
- Terminal-Bench / Tau / GDPval / Claw: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **86.9% no-tools** (DeepMind model card, March 2026)
- Humanity’s Last Exam: **16.0% no-tools, full text+MM set** (DeepMind model card)
- MMMU-Pro: **76.8% no-tools** (DeepMind model card)
- MMMLU: **88.9%** (DeepMind model card)
- SimpleQA Verified: **43.3%** (DeepMind model card)
- FACTS Benchmark Suite: **40.6%** (DeepMind model card)
- CharXiv: **73.2%** (DeepMind model card)
- Video-MMMU: **84.8%** (DeepMind model card)

Coding:

- LiveCodeBench: **72.0%** (DeepMind model card, UI 1/1/2025-5/1/2025)
- SWE-bench: **62.8% SWE-bench Vals** (BenchLM third-party row cited in `Muse_Spark_1.3.md` lineage)

Long context:

- MRCR v2 (8-needle): **60.1% @128K average, 12.3% @1M pointwise** (DeepMind model card)

### Normalized scores (1–100)

- **Tool use: 62/100.** No independent BFCL/Terminal-Bench publication in card; Lite tier optimized for volume, not agentic depth.
- **Reasoning: 68/100.** GPQA 86.9 and MMMLU 88.9 show strong lightweight reasoning; capped by HLE 16.0 and lack of tool-augmented reasoning numbers.
- **Context window: 80/100.** 1M verified, but MRCR collapses to 12.3% @1M pointwise (60.1% @128K) — usable long-ish, not reliable 1M.
- **Multimodal: 83/100.** Text/image/audio/video/PDF in with MMMU-Pro 76.8 and Video-MMMU 84.8; outputs remain text only.
- **Coding: 65/100.** LiveCodeBench 72.0 and SWE-bench 62.8 indicate viable lightweight coding; no DeepSWE/SciCode numbers.
- **Cost efficiency: 98/100.** Free tier plus $0.25/$1.50 at 363 tok/s — cheapest high-volume Lite tier in its family.
- **Overall Score: 72/100.** Mean of five non-cost dims (62+68+80+83+65)/5 = 71.6 → 72; bulk-processing Lite pick with solid reasoning/multimodal for price.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: curated `meta.json` metadata + DeepMind model card web research (2026-03-03 published card, https://deepmind.google/models/model-cards/gemini-3-1-flash-lite/); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
