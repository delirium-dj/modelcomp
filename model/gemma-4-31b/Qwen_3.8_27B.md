# Gemma 4 31B — Evaluation Report

**Model:** Gemma 4 31B (`google/gemma-4-31b-it`)
**Auditor:** Qwen 3.8 27B (qwen/qwen3.8-27b)
**Date:** 2026-09-28

## Model card

**Name:** Gemma 4 31B
**Short:** Google's open-weights 31B dense model (Gemma 4 family): Apache 2.0, 256K context, native multimodal, strong reasoning for its size.
**Provider:** Google (DeepMind) — open weights on Hugging Face (`google/gemma-4-31B`), Apache 2.0 (first Apache-2.0 Gemma); free to self-host; available on standard gateways.
**Release date:** 2026-03-31 (announced 2026-04-02; MTP update 2026-04-16).
**Architecture:** 31B dense, configurable thinking mode, 140+ language support.
**Context window:** 256K (official model card; repo meta's 128K figure is stale).
**Modalities:** Text + image in (native multimodality in the Gemma 4 family); text out.
**Pricing:** $0 — free open weights; standard paid hosting on gateways.

### Raw benchmarks found

**BenchLM.ai rows (Google Gemma 4 31B, 2026-09-28; overall 44.83/100, #103 of 512):**
- GPQA: **84.3%** (AA-GPQA Diamond 85.7%); MMLU-Pro: **85.2%**; HLE: 26.5% (w/o tools 19.5%; AA-HLE 23.6%)
- AA-LCR: 69.7%; CritPt: 1.4%; IFBench: 75.6%; AA Intelligence Index: 19.0
- τ²-bench: 59.9%; GDPval-AA: Elo 755 (5.3%); Gert Labs: 35.26%; AA Agentic Index: 6.7%
- SWE-Rebench: 41.6%; React Native Evals: **75.2%**; AA-SciCode: 45.5%; AA Coding Index: 43.4%
- MMMU-Pro: **76.9%** (AA 73.4%)
- AA-Omniscience: −47.9 (accuracy 20.0%, **hallucination 85.0%**)

**Official/launch (model_card_4, 2026-07-30; launch coverage):** up to 256K context; multilingual 140+ languages; five sizes (E2B, E4B, 12B, 26B A4B, 31B); "most intelligent open models to date, purpose-built for advanced reasoning and agentic workflows" (blog.google); native multimodality; first Apache 2.0 Gemma.

**Gaps:** No SWE-bench Verified/Pro or Terminal-Bench rows; agentic benchmarks (AA Agentic Index 6.7, GDPval 5.3%) are weak; 85% hallucination rate on AA-Omniscience; knowledge cutoff Jan 2025.

### Normalized scores (1–100)

- **Tool use: 42/100.** τ²-bench 59.9% is the standout, but GDPval-AA 5.3%, AA Agentic Index 6.7%, and Gert Labs 35.3% show a small open model that cannot yet run real agentic loops; the "agentic workflows" positioning outruns the 2026 benchmark evidence.
- **Reasoning: 74/100.** GPQA 84.3–85.7% and MMLU-Pro 85.2% are excellent for a 31B open model (competitive with much larger 2025 flagships on static knowledge); LCR 69.7% decent; HLE 23.6–26.5% and CritPt 1.4% show the depth ceiling at 31B scale.
- **Context window: 74/100.** 256K per the official model card (repo meta's 128K is stale) — above the 200K = 70 reference; no retrieval/synthesis measurement published.
- **Multimodal: 45/100.** Native image understanding in a 31B open model with MMMU-Pro 76.9% — genuinely strong for the size (image benchmarks that rival some 2025 frontiers); text-only output and no video/audio keep it mid-band.
- **Coding: 58/100.** React Native Evals 75.2% is a solid frontend-coding signal, but SWE-Rebench 41.6%, SciCode 45.5%, and AA Coding Index 43.4% place it in mid-tier open-model coding; no SWE-V/Pro evidence.
- **Cost efficiency: 100/100.** Apache 2.0 open weights, free to self-host — the rubric's $0 open-weights reference point (community/gateway hosting costs are optional, not required).
- **Overall Score: 59/100.** Half-up mean of (42 + 74 + 74 + 45 + 58) / 5 = 58.6.

### Why not higher
At 31B parameters, Gemma 4 wins on knowledge-per-parameters (GPQA 84.3, MMLU-Pro 85.2, MMMU-Pro 76.9) and cost ($0), but the cohort's 74.8 average is built on trillion-scale agentic flagships: AA Agentic Index 6.7%, GDPval 5.3%, SWE-Rebench 41.6%, and an 85% omniscience hallucination rate mark the 31B ceiling on 2026 agentic/knowledge-reliability work.

## Signature

Provided by: **Qwen 3.8 27B (qwen/qwen3.8-27b)** — 2026-09-28
