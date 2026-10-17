# Nemotron 3 Ultra (Free) — findings by Beam

- Source: NVIDIA/Nemotron 3 Ultra, `nvidia/nemotron-3-ultra`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Ultra
- **Short description:** NVIDIA's largest open model (Jun 4, 2026): 550B total / 55B active MoE, 1M context. BenchLM 46.59 (#115 of 954). AA Intelligence Index 22.9. Open weights (Apache 2.0). Free on OpenRouter. 5.9x higher throughput than GLM-5.1.
- **Provider / access:** NVIDIA build.nvidia.com; OpenRouter (free); HuggingFace.
- **Release / knowledge:** Released 2026-06-04; knowledge cutoff not stated.
- **IDs:** `nvidia/nemotron-3-ultra`
- **Context window:** 1,000,000 tokens; max output 65,536.
- **Modalities:** text in; text out; reasoning yes; tool calling yes. Open weights (Apache 2.0).
- **Pricing (as of 2026-10-17):** Free ($0/$0) on OpenRouter; self-host.
- **Architecture:** MoE, 550B total / 55B active, hybrid Mamba-Attention, LatentMoE, MTP layers, NVFP4 pretraining, Apache 2.0.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **27.7** (Supported · #98/128)
- Terminal-Bench 2.1: **56.4%** (NVIDIA model card) / **53.9%** (AA)
- Terminal-Bench 2.0: not reported
- Terminal-Bench Hard: **36.4%** (AA)
- Terminal-Bench 4.0: **0.5%** (AA)
- PinchBench: **90.0%** (NVIDIA model card)
- BrowseComp: **44.4%** (NVIDIA model card)
- τ³-bench: **70.9%** (NVIDIA model card)
- τ²-bench: **83.3%** (Artificial Analysis)
- GDPval-AA: **33.1%** (NVIDIA model card) / **25.8%** (AA)
- HLE w/ tools: **37.4%** (NVIDIA model card)
- AA Agentic Index: **20.1%** (Artificial Analysis)
- AA Harvey LAB v1.0: **81.7%** (Artificial Analysis)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **70.3** (Unranked · 1 rankable row)
- GPQA: **87%** (NVIDIA model card)
- GPQA-D: **87.0%** (NVIDIA model card)
- GPQA Diamond (Vals): **86.1%** (Vals AI)
- MMLU-Pro: **86.8%** (NVIDIA model card)
- MMLU-Pro (Vals): **85.8%** (Vals AI)
- HLE: **26.7%** (NVIDIA model card)
- HLE w/o tools: **26.7%** (NVIDIA model card)
- AA-HLE: **28.4%** (Artificial Analysis)
- AA Intelligence Index: **22.9%** (Artificial Analysis)
- AA-GPQA Diamond: **86.7%** (Artificial Analysis)
- AA-LCR: **67.0%** (NVIDIA model card) / **79.3%** (AA)
- CritPt: **3.1%** (NVIDIA model card / AA)
- LongBench v2: **61.9%** (NVIDIA model card)
- IFBench: **81.7%** (NVIDIA model card)
- AA-IFBench: **81.4%** (Artificial Analysis)
- AA-Omniscience Accuracy: **21.6%** (NVIDIA) / **22.6%** (AA)
- AA-Omniscience Index: **-0.4%** (Artificial Analysis)
- AA-Omniscience Hallucination Rate: **29.7%** (AA)
- AA-Omniscience Non-Hallucination Rate: **70.3%** (AA)

Coding:

- Coding public-lane (BenchLM): **21.7** (Supported · #116/150)
- AA Coding Index: **49.3%** (Artificial Analysis)
- SciCode: **40.3%** (AA)
- Terminal-Bench Hard: **36.4%** (AA)
- SWE-bench Verified: **71.9%** (Vibesim, from NVIDIA model card)
- Terminal-Bench 2.0: **54%** (Vibesim, from NVIDIA model card)

Long context:

- 1M window; AA-LCR **79.3%** (AA) / **67.0%** (NVIDIA); LongBench v2 **61.9%**.

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 66/100.** Agentic lane #98/128 (27.7), Terminal-Bench 2.1 56.4%/53.9%, τ²-bench 83.3%, GDPval-AA 33.1%/25.8%, PinchBench 90.0%, BrowseComp 44.4%, HLE w/ tools 37.4%; caps at Terminal-Bench Hard 36.4%.
- **Reasoning: 68/100.** GPQA 87%, MMLU-Pro 86.8%, HLE 26.7%, AA Intelligence 22.9%, AA-LCR 79.3%, CritPt 3.1%, LongBench v2 61.9%, IFBench 81.7%; caps at CritPt 3.1%.
- **Context window: 78/100.** 1M window; AA-LCR 79.3%, LongBench v2 61.9%.
- **Multimodal: 40/100.** Text-only.
- **Coding: 64/100.** SWE-bench 71.9%, AA Coding 49.3%, SciCode 40.3%, Terminal-Bench Hard 36.4%, coding lane #116/150 (21.7); caps at SciCode 40.3%.
- **Cost efficiency: 100/100.** Free (open weights).
- **Overall Score: 63.2/100.** Mean of five quality dims (BenchLM 46.59); best-fit for free open-weight agentic at zero cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (NVIDIA official, BenchLM, Artificial Analysis via OpenRouter, Vals AI, Vibesim); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|>>