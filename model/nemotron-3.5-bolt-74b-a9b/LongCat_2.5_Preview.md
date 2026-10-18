# Nemotron 3.5 Bolt 74B-A9B — findings by LongCat 2.5 Preview

- Source: NVIDIA/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB
- Date: 2026-10-18 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Bolt 74B-A9B
- **Short description:** NVIDIA's first Bolt-family model (October 2026), a 74B total / 9B active hybrid Mamba-Transformer MoE compressed from Nemotron 3.5 Super VL 120B-A12B. Designed for local agentic workloads on 24GB GPUs with 2-bit quantization. OpenMDW-1.1 license.
- **Provider / access:** Open weights on Hugging Face `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` (IQ2) and `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-BF16` (full precision); LiLiCorr drafter on HF. Supports llama.cpp, vLLM, LM Studio, Ollama. No Zen Free ID.
- **Release / knowledge:** Released 2026-10-15; knowledge cutoff not explicitly stated (parent Super VL cutoff likely applies).
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` (no Free ID on Zen; open weights)
- **Context window:** 256K tokens (262K per Artificial Analysis).
- **Modalities:** Text + image + video input → text output; reasoning; tool calls; JSON output.
- **Pricing (as of 2026-10-18):** Open weights — self-host at cost. No public API pricing found. 2-bit quantization (22GB) enables local deployment on consumer GPUs (RTX 4090/5090).
- **Architecture:** 74B total / 9B active MoE; Mamba-2-Transformer hybrid LatentMoE; C-RADIO v4-H vision encoder; 40 Mamba + 40 MoE + 8 attention layers; Star Elastic compression + IQ2_XXS quantization (2.0625 bits/element); LiLiCorr speculative drafter (1.13B params). OpenMDW-1.1 license.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **52.2%** (HF) / **52.2%** (AA)
- BrowseComp: **66.75%** (HF) / **66.8%** (AA)
- Tau3 Banking: **17.01%** (HF)
- AutomationBench-AA: **15.5%** (AA)
- GDPVal-AA-V2: **28.47%** (HF) / **24.0%** (AA)
- WebArena (vision): **50.86%** (HF)

Reasoning / knowledge:

- GPQA Diamond: **86.43%** (HF) / **86.4%** (AA)
- HLE (no tools): **25.30%** (HF) / **24.7%** (AA)
- AA-Omniscience accuracy: **16.90%** (HF) / **17.1%** (AA)
- AA-Omniscience non-hallucination: **61.27%** (HF) / hallucination rate 44% (AA)
- AA Intelligence Index: **21.4** (AA / rank 4 among models under 100B)
- IFBench: **66.17%** (HF)
- CritPt: **4.3%** (AA)
- PinchBench: **87.82%** (HF) / **87.8%** (AA)

Coding:

- Terminal-Bench 2.1: **50.98%** (HF) / **51.0%** (AA)
- SciCode: **41.02%** (HF) / **39.7%** (AA)
- LiveCodeBench: **~80.3%** (benchgap estimate)
- SWE-bench Verified: **~65.5%** (benchgap estimate)

Long context:

- AA-LCR: **64.06%** (HF) / **69.7%** (AA)
- LongBench v2: **~60.8%** (benchgap estimate)
- 256K token context window

### Normalized scores (1–100)

- **Tool use: 58/100.** MCP Atlas 52.2% is moderate; BrowseComp 66.8% is decent. Capped by Tau3 Banking 17.0% and AutomationBench 15.5% — weak agentic tool use.
- **Reasoning: 62/100.** GPQA Diamond 86.4% is good; HLE 25.3% is below frontier. Capped by AA-Omniscience -19 (44% hallucination rate — very poor factuality) and CritPt 4.3%.
- **Context window: 78/100.** 256K tokens is solid but below the 1M frontier. Hybrid Mamba-Transformer architecture enables efficient long-context processing.
- **Multimodal: 72/100.** Text + image + video input with C-RADIO v4-H vision encoder; WebArena 50.9%. Capped by limited vision benchmark data and 2-bit quantization impact on visual reasoning.
- **Coding: 62/100.** Terminal-Bench 2.1 51.0% is moderate; SciCode 41.0% is decent. Capped by 2-bit quantization impact on code generation and no SWE-bench Verified measurement.
- **Cost efficiency: 85/100.** Open weights with 2-bit quantization (22GB) enables local deployment on consumer GPUs; no API costs. Outstanding value for self-hosting. Capped by requiring NVIDIA hardware for optimal performance.
- **Overall Score: 66/100.** Mean of (58+62+78+72+62)/5 = 66.4 → 66. A technically impressive compressed model that runs locally on 24GB GPUs, but with significant trade-offs: poor factuality (44% hallucination), weak agentic tool use, and coding performance below frontier. Best for local vision-reasoning workloads and GPU-constrained deployments. Not recommended as a primary coding or knowledge model.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-18
- Method: Public internet research (NVIDIA official research page + technical report, Hugging Face model cards, Artificial Analysis, Thorsten Meyer AI, Mindstudio, Rundowns AI, Local Model Bench, benchgap, CloudPrice, LLM Reference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
