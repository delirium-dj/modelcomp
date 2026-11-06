# Qwen 3.5 Flash Lite — findings by Flint

- Source: Alibaba (Qwen / Tongyi Lab) / Qwen 3.5 Flash Lite
- Date: 2026-11-06 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Flash Lite
- **Short description:** Alibaba's cost-efficient, high-throughput Flash-tier model of the Qwen 3.5 family, aimed at agentic coding and multimodal agent workloads at production scale; the hosted Qwen3.5-Flash line built from the Qwen3.5-35B-A3B base.
- **Provider / access:** Alibaba Cloud Model Studio / Qwen API (`qwen3.5-flash`); OpenRouter (`qwen/qwen3.5-flash`); Hugging Face collection `Qwen/qwen35`. Weights private per Vals for the Flash tier.
- **Release / knowledge:** Released 2026-11-06/25 (Qwen 3.5 Medium Model Series); knowledge cutoff not verified in sources found.
- **IDs:** `Qwen/qwen3.5-Flash`; Alibaba Cloud `qwen3.5-flash`; OpenRouter `qwen/qwen3.5-flash`.
- **Context window:** 1M tokens (hosted Flash tier per Vals; open-weight Qwen3.5 models list 254K native, extensible to 1M).
- **Modalities:** Text, image, video in; text out; natively multimodal via early fusion; reasoning yes (thinking levels).
- **Pricing (as of 2026-11-06):** $0.10 input / $0.01 cached / $0.40 output per 1M tokens (Alibaba Cloud API); OpenRouter ~$0.065/$0.26 per 1M (BenchmarkList).
- **Architecture:** Qwen3.5-Flash production variant developed from the Qwen3.5-35B-A3B MoE base; Apache 2.0 open-weight lineage for the Qwen3.5 family.

### Raw benchmarks found

Official (Alibaba / Qwen / Tongyi Lab / HF / GIGAZINE / DeepLearning.ai):

- Qwen 3.5 Medium Model Series (2026-11-06/25): Qwen3.5-Flash, -35B-A3B, -122B-A10B, -27B announced; Qwen3.5-Flash positioned as high-throughput agentic model; API pricing $0.1/$0.01/$0.4 per 1M.
- Qwen3.5-397B-A17B flagship benchmarks: AIME 2026 **91.3**, GPQA Diamond **88.4**, MathVista **90.3**, MMMU **85.0**, LiveCodeBench v6 **83.6**.

Independent (Artificial Analysis / BenchLM / Vals AI / Bloomberg / VentureBeat / GIGAZINE / RITS / DeepLearning.ai):

- Vals AI (Qwen 3.5 Flash): Accuracy **69.46%**; GPQA Diamond **82.83%** ±1.90; LiveCodeBench **83.28%** ±1.04; SWE-bench **64.40%** ±2.14; MMLU Pro **84.06%** ±0.36; MMMU Pro **81.91%** ±0.93; Terminal-Bench 2.0 **24.72%** ±4.60; Context 1M; MaxOut 66k; $0.10/$0.40; Vals Index **#22 overall (49.6% acc), #7 among open-weight**; SWE-bench Verified **54.9%**; Finance Agent **46.7%**.
- BenchmarkList (Qwen3.5-Flash): SWE-bench Verified **64.4%**; SWT-Bench **38.3%**; Commit0 **12.5%**; GAIA **49.7%**; Arena ELO **1238.05**; ALE-Bench **265.93**.
- Small series (Qwen3.5-9B, same family): GPQA Diamond **81.7**, MMMU-Pro **70.1**, Video-MME **84.5**, HMMT Feb 2025 **83.2**, OmniDocBench v1.5 **87.7**; vs gpt-oss-120B **80.1** (GPQA).

### Cross-source comparison

- Coverage gap: Vals and BenchmarkList both track the Flash tier but with different benchmark sets; small-series numbers (9B) are not strictly the Flash tier.
- Independent vs vendor: Alibaba's flagship numbers (AIME 91.3 / GPQA 88.4) vs Vals' independent Flash-tier numbers (GPQA 82.83 / SWE-bench 64.4) — different models in the family, not directly comparable.

### Normalized scores (1–100)

- **Tool use: 65/100.** Agentic: GAIA **49.7**, TAU2-Bench tool use **79.1** (Qwen3.5-9B small), SWT-Bench **38.3**; Terminal-Bench 2.0 **24.7** caps the coding-agent story.
- **Reasoning: 70/100.** GPQA Diamond **82.83** (Vals Flash) / **81.7** (9B small); strong but below frontier proprietary tier.
- **Context window: 80/100.** Official/independent **1M** tokens (hosted tier); 254K native open-weight with 1M extension.
- **Multimodal: 80/100.** Native multimodal (early fusion) covering text/image/video; small series matched GPT-5-Nano / Gemini 2.5 Flash-Lite on vision tasks.
- **Coding: 70/100.** LiveCodeBench **83.28**, SWE-bench **64.4**; solid mid-tier coding.
- **Cost efficiency: 95/100.** Open-weight lineage (Apache 2.0 for small series); hosted $0.10/$0.40 per 1M — very low.

- **Overall Score: 73/100.** Mean of the five quality dims (65 + 70 + 80 + 80 + 70) / 5 = **72**; Cost efficiency excluded.

## Signature

- Provided by: **Flint (opencode/qwen-3.5-flash-lite)** — 2026-11-06
- Method: public web research prioritizing official model card/docs (Alibaba Qwen / Tongyi Lab announcements, Hugging Face `Qwen/qwen35`, Alibaba Cloud API docs) plus independent benchmarks/reviews (Vals AI, BenchmarkList, DeepLearning.ai / The Batch, GIGAZINE, VentureBeat) — three independent web searches.
- Reference URLs:
  - [Qwen 3.5: Alibaba’s Native Multimodal Agent Model Arrives | DeepLearning.ai](https://www.deeplearning.ai/the-batch/qwen-3-5-alibabas-native-multimodal-agent-model-arrives)
  - [Introducing the Qwen 3.5 Medium Model Series | GIGAZINE](https://gigazine.net/gsc_news/en/20260226-qwen-3-5-medium-model-series)
  - [Qwen3.5 Small｜9Bが120B超えの理由を解説 | Uravation](https://uravation.com/media/qwen-35-on-device-ai-enterprise)
  - [Qwen 3.5 Flash Benchmarks, Cost and Capabilities | Vals AI](https://www.vals.ai/models/alibaba_qwen3.5-flash)
  - [Qwen3.5 Flash Benchmark Scores & Evals | BenchmarkList](https://benchmarklist.com/models/qwen-qwen3.5-flash-02-23)
- Future sources: add a new file next to this one, e.g. `<Source_Name>.md`, using the same headings.

