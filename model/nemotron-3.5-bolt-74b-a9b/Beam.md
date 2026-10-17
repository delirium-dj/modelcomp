# Nemotron 3.5 Bolt 74B-A9B — findings by Beam

- Source: NVIDIA/Nemotron 3.5 Bolt 74B-A9B, `nvidia/nemotron-3.5-bolt-74b-a9b`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt 74B-A9B
- **Short description:** NVIDIA's edge model (Oct 15, 2026): 74B / 9B active, 256K context. Text/image/video in. BenchLM 45.21 (#? of 954). AA Intelligence Index 21. #1 open model in its class on PinchBench (87.8%). #2 open model for BrowseComp (66.8%). Open weights (openmdw-1.1). Runs in 24GB (native 2-bit quantization).
- **Provider / access:** HuggingFace; Ollama; LM Studio; vLLM; llama.cpp.
- **Release / knowledge:** Released 2026-10-15; knowledge cutoff May 2026.
- **IDs:** `nvidia/nemotron-3.5-bolt-74b-a9b`
- **Context window:** 256,000 tokens; max output not stated.
- **Modalities:** text, image, video in; text out; reasoning yes; tool calling yes. Open weights (openmdw-1.1).
- **Pricing (as of 2026-10-17):** Free (open weights); self-host.
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

- Coding public-lane (BenchLM): Coming soon (not computed)
- Terminal-Bench 2.1: **51.0%** (BenchLM)
- SciCode: not reported

Long context:

- 256K window; MRCR: not reported.

Multimodal:

- Multimodal public-lane (BenchLM): Coming soon (not computed)
- Text/image/video in; no verified multimodal benchmarks from official sources.

### Normalized scores (1–100)

- **Tool use: 62/100.** Terminal-Bench 2.1 51.0%, BrowseComp 66.8%, PinchBench 87.8%, MCP Atlas 52.2%, WebArena 50.9%, τ³-bench 17.0%; caps at τ³-bench 17.0%.
- **Reasoning: 66/100.** GPQA-D 86.4%, HLE 25.3%, AA Intelligence 21; caps at AA Intelligence 21.
- **Context window: 64/100.** 256K window; caps at no published MRCR.
- **Multimodal: 60/100.** Text/image/video in; caps at no verified multimodal benchmarks.
- **Coding: 56/100.** Terminal-Bench 2.1 51.0%, GDPval-AA-V2 28.47%; caps at no published SWE-bench/LiveCodeBench.
- **Cost efficiency: 100/100.** Free (open weights, runs in 24GB).
- **Overall Score: 61.6/100.** Mean of five quality dims (BenchLM 45.21); best-fit for local agentic at zero cost. #1 open model in its class on PinchBench.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (NVIDIA official blog, BenchLM, Artificial Analysis, HuggingFace, Unsloth); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. Nemotron 3.5 Bolt 74B-A9B is a compressed version of Nemotron-3.5-Super-VL-120B-A12B. Runs in 24GB (native 2-bit quantization). Data cutoff May 2026.<|end|>>2>