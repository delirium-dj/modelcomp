# DeepSeek V4.1 Flash — findings by Ernie 5.5 Flash

- Source: DeepSeek/DeepSeek-V4.1-Flash (`deepseek-v4.1-flash`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's September-2026 open-weight multimodal MoE (released 2026-09-10): a 552B backbone that activates 8B prefill / 16B decode parameters, with a 1M-token context, 384K output and MIT-licensed weights.
- **Provider / access:** DeepSeek API (`deepseek-v4.1-flash`), OpenRouter, Nvidia NIM (free, rate-limited), DeepInfra, AI/ML API, Inco, OpenCode Go, plus ~67 routes. Open weights (MIT).
- **Release / knowledge:** 2026-09-10; knowledge cutoff 2025-05 (models.dev).
- **IDs:** `deepseek-v4.1-flash`, `deepseek-ai/DeepSeek-V4.1-Flash`, `nvidia/deepseek-ai/deepseek-v4.1-flash`, `opencode-go/deepseek-v4.1-flash`.
- **Context window:** 1,000,000 tokens (1,048,576 on some gateways); max output 384,000.
- **Modalities:** text and image in; text out; reasoning with controllable effort and tool calls.
- **Pricing (as of 2026-11-11):** $0.15 / $0.60 per 1M input/output on OpenRouter/DeepSeek ($0.30/$1.20 on AI/ML API); cache read $0.007. The NVIDIA NIM route is free.
- **Architecture:** open-weight MoE, 552B total / 8B active prefill / 16B active decode (DeepSeek); MIT licence.

### Raw benchmarks found

> Figures below are from BenchLM's profile of the current serving build (labelled "DeepSeek V4.1 Flash 1017"); the launch-day vendor table is cited where it differs.

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (vendor-reported, best verified TB2.1 row in this dataset)
- AutomationBench: **60.5%** (best verified row); Terminal-Bench 4.0: **42.30%**; Terminal-Bench 3.0: **30%**
- CyberGym: **88.1%**; CWE-bench v2: **57.6%**; CWE-bench v1: **55.0%**; ExploitGym: **15.3%**
- Agents' Last Exam: **35.4%**; MazeBench: **1%**

Reasoning / knowledge:

- Humanity's Last Exam with tools: **63.9%** (above Opus 5.5's 67.7% is not claimed — 63.9% is the figure)
- STEMBench120: **2.54**; Codeforces rating: **3471.0**
- GPQA Diamond / ARC-AGI / FrontierMath: no verified public rows published

Coding:

- DeepSWE: **77.0%** (vendor launch figure 74.2%)
- Codeforces rating: **3471.0** — competitive-programming level
- NL2Repo: **68.2%**; ScarfBench: **69.0%**; OpenHarmony Bench v1.0: **60.3%**
- FrontierCode 2.0: **19.3%**; ProgramBench: **29.1%**; CursorBench 4.0: **47.7%**; Bug Hunt Bench: **39.1 fixes**

Long context:

- 1M context with 384K output declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 82/100.** TB2.1 90.6% and AutomationBench 60.5% are the strongest verified agentic rows for an open-weight model; TB4.0 42.3% is respectable, ExploitGym 15.3% and MazeBench 1% are not.
- **Reasoning: 78/100.** HLE 63.9% with tools is good (near Claude Sonnet 5.5), STEMBench120 2.54 solid; no GPQA/ARC/FrontierMath publication leaves the top end unverified.
- **Context window: 100/100.** 1,000,000 tokens with 384,000 max output — the largest output cap in this dataset.
- **Multimodal: 60/100.** Text and image input only (no video/audio/PDF), and no public image-understanding benchmark rows were published.
- **Coding: 85/100.** DeepSWE 77.0%, Codeforces 3471 and NL2Repo 68.2% are strong for the price; FrontierCode 2.0 19.3% and ProgramBench 29.1% are weak.
- **Cost efficiency: 95/100.** $0.15/$0.60 per 1M with $0.007 cache reads, free NIM route and MIT weights — the best price/performance point among open-weight models in this dataset.
- **Overall Score: 81.0/100.** Best fit for self-hosted coding agents and high-volume inference where cost dominates; weak on multimodal breadth and the newest harnesses.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (DeepSeek V4.1 Flash announcement and model card, BenchLM model profile, llm-stats/benchmarklist entries, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [DeepSeek-V4.1-Flash — Hugging Face](https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash)
  - [DeepSeek V4.1 Flash benchmarks & sources — BenchLM](https://benchlm.ai/models/deepseek-v4-1-flash)
  - [DeepSeek V4.1 Flash launch benchmarks — Digital Applied](https://www.digitalapplied.com/blog/deepseek-v4-1-flash-pro-routing-prices-early-tests)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `DeepSeek_4.1_Flash_v2.md`, using the same headings.