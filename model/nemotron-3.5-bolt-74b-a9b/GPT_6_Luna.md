# Nemotron 3.5 Bolt 74B A9B — findings by GPT-6 Luna

- Source: NVIDIA/Nemotron 3.5 Bolt 74B-A9B, `nvidia/nemotron-3.5-bolt-74b-a9b`
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt 74B A9B
- **Short description:** NVIDIA's open-weight 74B/9B-active Mamba-2 vision-language MoE (256K, IQ2 fits 24GB) for local coding and agentic work; Terminal-Bench 2.1 50.98%, no SWE-bench published.
- **Provider / access:** HuggingFace; Ollama; LM Studio; vLLM; llama.cpp.
- **Release / knowledge:** Released 2026-10-15; knowledge cutoff May 2026.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` (the exact tracked route; alternate hosts are listed in the provider line).
- **Context window:** 262,144 (256K) total
- **Modalities:** Text, image, video in; text out; reasoning/tool support as documented in the raw model card.
- **Pricing (as of 2026-10-30):** Open weights (OpenMDW-1.1); runs locally in 24GB, no per-token list price
- **Architecture:** Compressed from Nemotron-3.5-Super-VL-120B-A12B, 74B total / 9B active, latent MoE, native 2-bit quantization, 256K context, openmdw-1.1.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **34.5** (Estimated · #82/128)
- Terminal-Bench 2.1: **51.0%** (BenchLM)
- τ³-bench: **17.0%** (BenchLM)
- BrowseComp: **66.8%** (BenchLM)
- PinchBench: **87.8%** (BenchLM)
- MCP Atlas: **52.2%** (BenchLM)
- WebArena: **50.9%** (BenchLM)
- GDPval-AA-V2: **28.47%** (Unsloth comparison)
- AA Agentic Index: not reported

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **73.7** (Unranked · 2 rankable rows)
- GPQA-D: **86.4%** (BenchLM)
- HLE w/o tools: **25.3%** (BenchLM)
- AA Intelligence Index: **21** (Artificial Analysis)
- AA-LCR: not reported
- CritPt: not reported

Coding:

- Coding public-lane (BenchLM): not computed in the collected extract
- Terminal-Bench 2.1: **51.0%** (BenchLM)
- SciCode: not reported

Long context:

- 256K window; MRCR: not reported.

Multimodal:

- Multimodal public-lane (BenchLM): not computed in the collected extract
- Text/image/video in; no verified multimodal benchmarks from official sources.

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 2.1 51.0%, BrowseComp 66.8%, PinchBench 87.8%, MCP Atlas 52.2%, WebArena 50.9%, τ³-bench 17.0%; caps at τ³-bench 17.0%.
- **Reasoning: 66/100.** GPQA-D 86.4%, HLE 25.3%, AA Intelligence 21; caps at AA Intelligence 21.
- **Context window: 64/100.** 256K window; caps at no published MRCR.
- **Multimodal: 60/100.** Text/image/video in; caps at no verified multimodal benchmarks.
- **Coding: 56/100.** Terminal-Bench 2.1 51.0%, GDPval-AA-V2 28.47%; caps at no published SWE-bench/LiveCodeBench.
- **Cost efficiency: 100/100.** Free (open weights, runs in 24GB).
- **Overall Score: 61.6/100.** Half-up mean of the five non-cost quality dimensions: (62 + 66 + 64 + 60 + 56) / 5 = 61.6. Cost efficiency is excluded. best-fit for local agentic at zero cost. #1 open model in its class on PinchBench.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30 UTC
- Method: Public web research using the official model card/API documentation and the independent benchmark pages retained in the research extract; conflicting harnesses and inherited variant results are labelled in the raw section. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Source 1](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB)
  - [Source 2](https://research.nvidia.com/labs/nemotron/Nemotron-3.5-Bolt-24GB/)
  - [Source 3](https://benchlm.ai/models/nemotron-3-5-bolt-74b-a9b)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
