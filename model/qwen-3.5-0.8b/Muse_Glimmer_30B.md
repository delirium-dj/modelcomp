# Qwen 3.5 0.8B — findings by Muse Glimmer 30B

- Source: Alibaba Qwen `Qwen/Qwen3.5-0.8B`
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.5 0.8B (`qwen-3.5-0.8b`)
- **Short description:** Smallest dense member of Qwen 3.5 series — a 0.8B vision-language foundation model with hybrid Gated DeltaNet + attention, 262K native context, thinking/non-thinking modes, marketed for prototyping, edge deployment and on-device assistants.
- **Provider / access:** Open weights `Qwen/Qwen3.5-0.8B` Apache 2.0; Hugging Face Transformers / vLLM / SGLang / KTransformers; Ollama `qwen3.5:0.8b`; GGUF via Unsloth/mlx-community; WebGPU client runtimes. `opencode/qwen-3.5-0.8b` inference route listed.
- **Release / knowledge:** Series announced February 2026; Hugging Face card published 2026-03-09. Training cutoff not published.
- **IDs:** `Qwen/Qwen3.5-0.8B`, `opencode/qwen-3.5-0.8b`, Ollama `qwen3.5:0.8b`.
- **Context window:** 262,144 tokens natively; provider rows note 81,920 max output.
- **Modalities:** Text in / text out; image + video in (native early-fusion vision encoder). Tool calling supported via parser; structured output true.
- **Pricing (as of 2026-10-27):** Open weights Apache 2.0; hosted routes $0.00/$0.00 in provider catalogs.
- **Architecture:** 0.8 B parameters, 24 layers, hidden dim 1024, 8 attention heads / 2 KV, Gated DeltaNet linear attention blocks, MTP-trained. Vision encoder attached.

### Raw benchmarks found

> Sources: Official model card `Qwen/Qwen3.5-0.8B` (Hugging Face, 2026-03-09) – language and vision tables publishing Thinking / Non-thinking columns for 0.8B; NVIDIA Megatron Bridge Qwen 3.5/3.6 docs confirming 0.8B dense variant and 262K context; Vultr Docs Qwen3.5 0.8B overview confirming architecture, release March 2 2026, multimodal capabilities. Independent benchmark aggregations: BenchmarkList / BenchGecko entries for ParseBench and Artificial Analysis.

Agent / tool use:

- BFCL-V4: **25.3** thinking – Hugging Face card
- TAU2-Bench: **11.6** thinking – Hugging Face card
- ScreenSpot-Pro: **46.5** non-thinking – BenchmarkList aggregation

Reasoning / knowledge:

- MMLU-Pro: **42.3** thinking / **29.7** non-thinking
- MMLU-Redux: **59.5** thinking / **48.5** non-thinking
- C-Eval: **50.5** thinking / **46.4** non-thinking
- SuperGPQA: **21.3** thinking / **16.9** non-thinking
- GPQA: **11.9** thinking
- IFEval: **44.0** thinking / **52.1** non-thinking
- IFBench: **21.0** thinking
- MultiChallenge: **18.9** thinking
- PolyMATH: **8.2** thinking
- AA-LCR: **4.7** thinking
- LongBench v2: **26.1** thinking

Long context:

- AA-LCR **4.7** thinking; LongBench v2 **26.1** thinking – measured retrieval collapses despite 262K spec.

Multimodal:

- MMMU: **49.0** thinking / **47.4** non-thinking
- MMMU-Pro: **31.2** / **31.4**
- MathVista(mini): **62.2** / **58.6**
- DynaMath: **49.9** / **46.5**
- OCRBench: **74.5** / **79.1**
- OmniDocBench1.5: **61.0** / **70.6**
- MMBench EN-DEV-v1.1: **69.9** / **68.0**
- VideoMME w sub.: **63.8**; MLVU **65.6**; LVBench **45.1**
- ParseBench mean: **28.4** – Hugging Face eval results

Coding:

- No official coding benchmark row published for 0.8B in the Qwen 3.5 HF card; coding rows start at 4B tier.
- Independent community runs: oMLX HumanEval 4-bit MLX  **24.4%** – oMLX Benchmark; Authon blog `qwen3.5-small-0.8b` HumanEval **31.7%**, MBPP **28.4%** (llama.cpp Q4_K_M, local). Numbers are inconsistent across quantizations and not vendor-verified.

### Normalized scores (1–100)

- **Tool use: 26/100.** BFCL-V4 25.3 and TAU2-Bench 11.6 show tool calling is technically present but fails on most real agent tasks; ScreenSpot-Pro 46.5 is a visual outlier but does not lift overall tool reliability.
- **Reasoning: 34/100.** MMLU-Pro 42.3 thinking and MMLU-Redux 59.5 give a best-in-sub-1B knowledge signal, but GPQA 11.9, SuperGPQA 21.3 and PolyMATH 8.2 anchor reasoning near floor.
- **Context window: 58/100.** 262K native spec is large for 0.8B, but AA-LCR 4.7 and LongBench v2 26.1 show practical retrieval is poor; score reflects nominal capacity tempered by measured performance.
- **Multimodal: 53/100.** Native image/video understanding with MMMU ~49, OCRBench ~74-79, VideoMME 63.8 demonstrates functional multimodal perception at 0.5 GB; absolute accuracy remains well below production VLM levels.
- **Coding: 27/100.** No vendor coding benchmark; independent HumanEval samples cluster ~24-32% across quantizations, consistent with minimal reliable code generation at this scale.
- **Cost efficiency: 98/100.** Apache 2.0 open weights, sub-1 GB quantized, runs on phones/WebGPU, $0 hosted routes – maximal efficiency for the capability band.
- **Overall Score: 40/100.** Mean of five quality dims (26 + 34 + 58 + 53 + 27) / 5 = 39.6 → 40. Best fit: ultra-compact offline/on-device perception and routing micro-model; unsuitable for reliable reasoning, long-context retrieval, tool agents or coding.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-27
- Method: public internet research; official sources first (Hugging Face `Qwen/Qwen3.5-0.8B` model card with official language/vision tables, NVIDIA Megatron Bridge Qwen 3.5 docs, Vultr Docs Qwen3.5 0.8B); independent aggregations (BenchmarkList, BenchGecko, oMLX). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
