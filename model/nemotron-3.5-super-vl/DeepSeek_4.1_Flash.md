# Nemotron 3.5 Super VL — findings by DeepSeek 4.1 Flash

- Source: NVIDIA / Nemotron 3.5 Super VL (`nemotron-3.5-super-vl`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Research pass — 2026-10-16** (≥3 independent sources).
> Released **2026-10-15**. An **open-weights 120B-total / 12B-active hybrid Mamba-Transformer MoE vision-language model** built with the "Nemotron Coalition", for reasoning, coding, tool use, document/GUI understanding and video understanding. **1M-token context** (AA); one host (NanoGPT) caps the served window at **262,144** with a 16K response limit. Text, image and **video** in / text out; reasoning; tool calls; structured output. **OpenMDW 1.1** license. Artificial Analysis: **Intelligence Index 26.5** — the **leading US open-weights model**, ~2× its predecessor Nemotron 3 Super (13), edging Inkling Small (25.7) and ahead of Nemotron 3 Ultra (23); HLE **30.7%**, AA-LCR **69.0%**, SciCode **47.8%**. NVFP4 release is near-lossless (within 0.1 index points of BF16). Notably fast: ~**630 tok/s** at 100K-token prompts. Trained on ~26T tokens + ~3.8M RL samples.
> **Conflicts surfaced:** (1) **Context** 1M (AA/NVIDIA) vs **262,144 (NanoGPT)** — served window is host-dependent and the AA 1M figure is the native maximum; this report scores the 1M native window but flags the host cap. (2) **Release date** 2026-10-15 across NVIDIA/StreetInsider; a Gate news note dated it 2026-10-12. (3) **Max output** 16,384 on NanoGPT — a host limit, not the model's. (4) **Benchmark coverage is thin**: no MRCR/RULER/GPQA/SWE-bench row exists; only AA's index components (HLE, AA-LCR, SciCode) and vendor claims about throughput/"frontier accuracy" were found. (5) **Processor identity**: served as `nemotron_h_omni` (HF NVFP4 card) vs the AA text-only comparison entry — the multimodal ("VL") capability is the differentiator.
> Sources: https://artificialanalysis.ai/articles/nemotron-3-5-super-and-bolt · https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/ · https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4 · https://nano-gpt.com/models/text/nvidia/nemotron-3.5-super-vl · https://www.streetinsider.com/Corporate+News/Nvidia+releases+Nemotron+3.5+Super+VL+and+Bolt+edge+models/27191879.html

## Model card

- **Name:** Nemotron 3.5 Super VL (120B-A12B)
- **Short description:** NVIDIA's open-weights flagship vision-language agent model (Oct 2026), the current top US open-weights model on the Artificial Analysis Intelligence Index, aimed at high-volume multimodal agentic workflows (OCR, charts, tool use, multi-step business tasks) and video understanding.
- **Provider / access:** Open weights on Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4`, plus BF16/FP8); NVIDIA NIM/TensorRT-LLM/Dynamo; hosted via DeepInfra (pre-release NVFP4), NanoGPT, and others. A derivative (Bolt 74B-A9B) targets 24GB edge.
- **Release / knowledge:** Released 2026-10-15; knowledge cutoff not disclosed.
- **IDs:** `nvidia/nemotron-3.5-super-vl`; HF `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4`.
- **Context window:** Native **1,000,000 tokens**; some hosts serve 262,144 with a 16,384 max output (host limits).
- **Modalities:** text + image + **video** in, text out; reasoning yes; tool calls, structured output. 6 languages.
- **Pricing (as of 2026-10-16):** NanoGPT auto-routing $0.15 / 1M in, $0.50 / 1M out, cache read $0.020; open weights (OpenMDW 1.1) allow self-hosting.
- **Architecture:** hybrid Mamba-Transformer MoE, 120B total / 12B active, NVFP4 (near-lossless vs BF16); 6-language; ~26T pretraining tokens.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 / Tau3 / GDPval-AA / MCP-Atlas: **no verified public score found** (vendor emphasizes "frontier accuracy" and ~5× throughput on the AA leaderboard, without naming an agentic benchmark row)
- AA throughput: ~**630 tok/s** at 100K-token prompts, 1.8s TTFT (pre-release DeepInfra NVFP4; fastest model scoring ≥20 on the AA Index at that prompt length)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **26.5** (leading US open-weights model)
- HLE: **30.7%** (AA); AA-LCR: **69.0%** (legacy/unversioned)
- GPQA Diamond / CritPt / AA-Omniscience: **no verified public score found**

Coding:

- SciCode: **47.8%** (AA); SWE-bench / LiveCodeBench / Terminal-Bench: **no verified public score found**

Long context:

- AA-LCR **69.0%** is the only long-context proxy; the 1M native window is vendor/AA-listed, no MRCR/RULER/GraphWalks value published.

### Normalized scores (1–100)

- **Tool use: 72/100.** A purpose-built agentic VLM with strong throughput, but no independently verified Terminal-Bench/Tau3/GDPval row; capped by the benchmark gap.
- **Reasoning: 70/100.** AA Index 26.5 and HLE 30.7% lead US open weights; thin reasoning coverage (no GPQA/CritPt) caps it.
- **Context window: 95/100.** 1M native tokens; no recall-at-depth benchmark and host-served windows of 262K keep it out of the 95–100 top band.
- **Multimodal: 85/100.** Text + image + video in with a real vision encoder and OCR/chart/GUI claims — the top of the `+video in` band; text-only output.
- **Coding: 72/100.** SciCode 47.8% is solid for a 120B model; no SWE-bench/LiveCodeBench/DeepSWE to support more.
- **Cost efficiency: 94/100.** $0.15/$0.50 hosted with $0.020 cache reads and permissive open weights; excellent value at 1M context.
- **Overall Score: 79/100.** Mean of the five quality dims (72+70+95+85+72)/5 = 78.8 → 79. Best fit: high-volume multimodal/video document understanding and long-context agentic pipelines where open weights and speed matter.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-16
- Method: public internet research (Artificial Analysis release article, NVIDIA blog, Hugging Face NVFP4 card, NanoGPT model page, StreetInsider/Gate coverage, BenchLM tracking). Vendor-reported figures flagged; the context/max-output host split, release-date variance and thin benchmark coverage are surfaced rather than hidden. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
