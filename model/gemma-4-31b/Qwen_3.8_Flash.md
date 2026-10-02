# Gemma 4 31B — findings by Qwen 3.8 Flash

- Source: Google DeepMind / Gemma 4 31B IT (`google/gemma-4-31b-it`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B (instruction-tuned), flagship dense size of the Gemma 4 open-weights family
- **Short description:** Google's 2026 open-weights release — the first Apache-2.0 Gemma, a 31B dense model with configurable thinking, native image+text multimodality and 140+ language support, positioned for "advanced reasoning and agentic workflows". Excellent static-knowledge scores for its size (GPQA ~85, MMLU-Pro 85.2), but thin audited agentic evidence and a catastrophic AA-Omniscience factuality profile (−47.9 / 85% hallucination).
- **Provider / access:** Google DeepMind — open weights on Hugging Face (`google/gemma-4-31B-it`, Apache 2.0), free to self-host; served on standard gateways. Family ships five sizes (E2B, E4B, 12B, 26B A4B, 31B).
- **Release / knowledge:** released 2026-03-31 (announced 2026-04-02; MTP update 2026-04-16); knowledge cutoff Jan 2025.
- **IDs:** `google/gemma-4-31b-it`.
- **Context window:** **256K (262,144) tokens** per the official model card and BenchLM — the curated `meta.json` "128K / Text in/out only" is a stale placeholder contradicted by verified data; scored on the real 256K text+image model.
- **Modalities:** text + image in (native multimodality across the Gemma 4 family); text out. No audio/video input or non-text output documented.
- **Pricing (as of 2026-10-02):** **$0** open weights (Apache 2.0) / optional gateway hosting. Cost excluded from Overall.
- **Architecture:** 31B dense, configurable thinking mode, multilingual (140+ languages); first Apache-2.0-licensed Gemma.

### Raw benchmarks found

> Verified against BenchLM `gemma-4-31b` (overall **41.07–44.83/100**, rank **#103–128 of ~512–783**, 24 of 645 rows — sparse coverage → conservative aggregate), citing Artificial Analysis, the Google model card and independent harnesses; cross-checked against the sibling `Qwen_3.8_27B.md` report and blog.google / model_card_4 launch coverage (fetched 2026-10-02).

Agent / tool use:

- τ²-bench (AA): **59.9%** — the only solid structured-tool-calling row
- GDPval-AA: **Elo 755 (≈5.3–5.7% normalized)**; AA Agentic Index **6.7%**; Gert Labs **35.26%** → open-ended agentic loops are the model's weakest dimension

Reasoning / knowledge:

- GPQA Diamond (AA): **85.7%** (BenchLM 84.3); MMLU-Pro: **85.2%** — excellent for a 31B open model
- AA-LCR: **69.7%**; IFBench: **75.6%**; HLE: **19.5–26.5%** (AA 23.6, under the 40% bar); CritPt **1.4%**; AA Intelligence Index **19.0**
- AA-Omniscience Index **−47.9%** (Accuracy 20.0% / **Hallucination 85.0%**) — severe unaided-factuality failure

Coding:

- SWE-Rebench: **41.6%**; React Native Evals: **75.2%** (frontend signal); AA-SciCode **45.5%**; AA Coding Index **43.4%**; no SWE-bench Verified/Pro or LiveCodeBench row published

Multimodal / long context:

- MMMU-Pro: **76.9%** (AA **73.4%**) — confirms genuine image understanding, contradicting the curated "text only"
- 256K window; AA-LCR 69.7 supportive; no MRCR/RULER ≥98%-at-length retrieval row published.

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Sparse coverage (24/645) → band floors preferred over invented ceilings.

- **Tool use: 44/100.** τ²-bench 59.9% is a legitimate mid signal, but GDPval-AA ~5.5%, AA Agentic Index 6.7% and Gert Labs 35.3% show a 31B open model that cannot yet sustain real agentic loops — the "agentic workflows" marketing outruns the audited 2026 evidence.
- **Reasoning: 70/100.** GPQA 84.3–85.7% and MMLU-Pro 85.2% are frontier-adjacent for static knowledge at this size, and IFBench 75.6% / AA-LCR 69.7% are decent; but HLE 19.5–26.5% and CritPt 1.4% mark the depth ceiling, and a −47.9 Omniscience / 85% hallucination profile is a heavy unaided-factuality penalty that caps this well below the knowledge-score headline.
- **Context window: 78/100.** Verified 256K (official card + BenchLM) sits in the 200K–500K tier (65–84), above the 200K=70 reference; AA-LCR 69.7 supportive but no ≥98%-at-length retrieval measurement → mid-upper, not near the ceiling.
- **Multimodal: 66/100.** Native text + image in / text out is the +image 60–70 band, and MMMU-Pro 76.9 (AA 73.4) is genuinely strong vision for a 31B open model; no video/audio input and no non-text output keep it from the upper band.
- **Coding: 55/100.** React Native Evals 75.2% is a solid frontend signal, but SWE-Rebench 41.6%, SciCode 45.5% and AA Coding Index 43.4% place it in mid-tier open-model coding with no SWE-bench Verified/LiveCode evidence to lift it.
- **Cost efficiency: 100/100.** Apache 2.0 open weights, free to self-host — the rubric's $0 open-weights reference point. Cost is excluded from Overall.
- **Overall Score: 63/100.** Mean of Tool 44, Reasoning 70, Context 78, Multimodal 66, Coding 55 = 313/5 = 62.6 → 63. Best fit: the strongest free, self-hostable, multilingual open model in its size class for static-knowledge reasoning and image understanding at 256K context — but its −47.9 Omniscience / 85% hallucination makes it unsafe for unaided factual recall, and its GDPval/AA-Agentic weakness means the "agentic" positioning is aspirational rather than benchmarked; treat it as a capable open chat/vision/knowledge model, not an autonomous agent.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM `gemma-4-31b` rows citing Artificial Analysis + Google model card, fetched 2026-10-02; cross-checked against the sibling `Qwen_3.8_27B.md` evaluation and blog.google / model_card_4 launch coverage for the Apache-2.0 licence, 256K window, five-size family and Jan-2025 cutoff). Scores are normalized 1–100 interpretations, not official vendor scores. Flagged that the curated `meta.json` (128K / "Text in/out only") understates the verified 256K native-multimodal model, and that GPQA/MMLU-Pro headline strengths are offset by a sparse-coverage (24/645) BenchLM aggregate and a severe AA-Omniscience factuality failure.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
