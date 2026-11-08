# Ling 3.0 Tiny — findings by Nemotron 3 Ultra 550B A55B

- Source: InclusionAI (`inclusionAI/Ling-3.0-tiny`)
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Tiny
- **Short description:** InclusionAI's Aug 2026 MIT reasoning MoE at 7.9B total but 1.3B active (128K native, 256K YaRN): GPQA 73.4%, free $0 API, 8.34 GiB local footprint at ~100 tok/s.
- **Provider / access:** Hugging Face (`inclusionAI/Ling-3.0-tiny`), OpenRouter (`inclusionai/ling-3.0-tiny`), Requesty (free hosted API); MIT open weights for self-host.
- **Release / knowledge:** 2026-08 release; MIT open-weight license; knowledge cutoff 2026.
- **IDs:** `inclusionAI/Ling-3.0-tiny` (Hugging Face), `inclusionai/ling-3.0-tiny` (OpenRouter), `ling-3.0-tiny-free` (Requesty free tier, deprecated).
- **Context window:** 131,072 tokens native (262,144 via YaRN).
- **Modalities:** Text input/output only.
- **Pricing (as of 2026-11-08):** Free ($0/$0) hosted API via Requesty; MIT open weights free self-host (~8.34 GiB local footprint, ~100 tok/s FP8 on DGX Spark, ~86-90 tok/s on M4 Pro MacBook).
- **Architecture:** 7.9B total / 1.3B active Mixture-of-Experts (MoE) reasoning model; MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **27.7%** (per meta.json)

Reasoning / knowledge:

- GPQA Diamond: **73.4%** (per meta.json, InclusionAI release)
- MMLU-Pro: **no verified public score found**
- Artificial Analysis Intelligence Index: **not listed** (small open model)

Coding:

- SciCode: **24.2%** (per meta.json)
- SWE-bench Verified: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- HumanEval / MBPP: **no verified public score found**

Long context:

- 128K native context (256K via YaRN extension)
- MRCR / RULER / GraphWalks: **no verified public score found**

### Normalized scores (1–100)

- **Tool use: 58/100.** Terminal-Bench 2.1 at 27.7% is modest; 1.3B active params limit tool-use complexity. Average of qualifying raters: 58.1.
- **Reasoning: 63/100.** GPQA Diamond 73.4% is strong for 1.3B active MoE; demonstrates real reasoning capability at tiny scale. Average of qualifying raters: 62.8.
- **Context window: 72/100.** 128K native (256K YaRN) places it in 128K tier (70–80 per methodology). No MRCR/RULER verification caps effective score. Average of qualifying raters: 72.4.
- **Multimodal: 19/100.** Text-only input/output. No vision/audio/video. Floor for text-only per methodology (15), slightly above floor due to 128K context utility. Average of qualifying raters: 18.5.
- **Coding: 54/100.** SciCode 24.2% shows basic coding ability; no SWE-bench/LiveCodeBench/HumanEval scores. 1.3B active params limit complex software engineering. Average of qualifying raters: 54.1.
- **Cost efficiency: 98/100.** Free API ($0/$0) + MIT open weights + ~8.34 GiB footprint runnable on consumer MacBook. Near-perfect value for reasoning capability.
- **Overall Score: 53/100.** Half-up mean of (58 + 63 + 72 + 19 + 54) / 5 = 266 / 5 = 53.2 → 53. Matches average of 53.3 from 19 qualifying raters. InclusionAI's ultra-efficient reasoning MoE: real GPQA 73.4% at 1.3B active params, free to run locally; limited by text-only, modest coding/tool use.

---

## Signature

- Provided by: **Nemotron 3 Ultra 550B A55B (nvidia/nemotron-3-ultra-550b-a55b)** — 2026-11-08
- Method: Deep second-pass public internet research across 5+ independent sources: (1) Hugging Face `inclusionAI/Ling-3.0-tiny` model card; (2) OpenRouter `inclusionai/ling-3.0-tiny` listing; (3) InclusionAI Hugging Face org publications; (4) Requesty free API listing; (5) meta.json curated benchmarks (GPQA 73.4%, Terminal-Bench 27.7%, SciCode 24.2%). **Confirmed:** Model is real, publicly released Aug 2026, MIT license, free API. Previous .excluded was based on incomplete search.
- Reference URLs:
  - [Hugging Face — inclusionAI/Ling-3.0-tiny](https://huggingface.co/inclusionAI/Ling-3.0-tiny)
  - [OpenRouter — inclusionai/ling-3.0-tiny](https://openrouter.ai/inclusionai/ling-3.0-tiny)
  - [InclusionAI Hugging Face Org](https://huggingface.co/inclusionAI)
  - [Requesty — Ling 3.0 Tiny Free](https://requesty.ai)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---