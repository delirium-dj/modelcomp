# Nemotron 3.5 Bolt 74B-A9B — findings by DeepSeek 4.1 Flash

- Source: NVIDIA / Nemotron 3.5 Bolt 74B-A9B (`nemotron-3.5-bolt-74b-a9b`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Research pass — 2026-10-16** (≥3 independent sources).
> Released **2026-10-15**. A **74B-total / 9B-active hybrid Mamba-2/Transformer MoE vision-language model**, derived from Nemotron 3.5 Super VL 120B-A12B via **Star Elastic** compression plus **2-bit Quantization-Aware Distillation** to fit in **24GB** and run locally on RTX Spark / DGX Spark. **256K-token context** (262,144); vision + text in / text out; reasoning toggle; tool calls; **OpenMDW 1.1** license. NVIDIA card rows: **Terminal-Bench 2.1 50.98**, **GDPVal-AA-V2 28.47**, **Tau3 Banking 17.01**. **Artificial Analysis Intelligence Index 21** (21.4) — 4th among models under 100B, 1st among US models in that class, ~1.5 pts behind Nemotron 3 Ultra (550B) with ~1/7 the parameters; AA-Briefcase **912 Elo**, AutomationBench-AA **15.5%**, AA-LCR **70%**, HLE **25%**. #1 open model in its class on PinchBench and #2 open model on BrowseComp (vendor).
> **Conflicts surfaced:** (1) **Context** 262,144 (HF card, Ollama, vLLM `--max-model-len 262144`) — consistently 256K; some marketing says "up to 256K", no 1M claim on this SKU. (2) **Benchmark identity** — the HF card table lists GDPVal-AA-V2/Terminal-Bench 2.1/Tau3 for the **IQ2-quantized 24GB** checkpoint; the **AA Index 21** headline is AA's own run. Quantization is lossy by design (vendor: 74B-A9B-24GB = **85.1% size reduction**). (3) **Tau3 Banking 17.01** is far below the class leader, while GDPVal-AA-V2 28.47 leads the comparison set. (4) **Reasoning/GPQA**: no GPQA/HLE-with-tools number from the vendor; AA's HLE 25% is the only independent reasoning figure.
> Sources: https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB · https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB-Technical-Report.pdf · https://artificialanalysis.ai/articles/nemotron-3-5-super-and-bolt · https://ollama.com/library/nemotron-3.5-bolt · https://unsloth.ai/docs/models/nemotron-3.5-bolt · https://blogs.nvidia.com/blog/nemotron-3-5-super-vl/

## Model card

- **Name:** Nemotron 3.5 Bolt 74B-A9B (24GB)
- **Short description:** NVIDIA's compact open-weights vision-language agent model for local coding, reasoning and tool use — a compressed, 2-bit derivative of Nemotron 3.5 Super VL tuned to run within 24GB alongside other apps. First release in NVIDIA's new "Bolt" edge family.
- **Provider / access:** Open weights on Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB`, plus BF16 and GGUF variants and a LiLiCorr speculative drafter); runnable via vLLM/SGLang/llama.cpp/Ollama and NVIDIA NIM; local hardware (RTX/DGX Spark).
- **Release / knowledge:** Released 2026-10-15; knowledge cutoff not disclosed.
- **IDs:** `nemotron-3.5-bolt:74b-a9b` (Ollama); HF `nvidia/NVIDIA-Nemotron-3.5-Bolt-74B-A9B-24GB` / `...-BF16`.
- **Context window:** 262,144 tokens (256K); prompt, images, history, tool results and output share this window.
- **Modalities:** text + image in, text out (C-RADIO vision encoder); reasoning toggle (thinking on/off); tool calls. Primary languages English + code; also ES/FR/DE/IT/JA.
- **Pricing (as of 2026-10-16):** open weights (OpenMDW 1.1) — self-host / NIM; no per-token list price on the 24GB SKU. Cost is hardware-bound (fits 24GB).
- **Architecture:** hybrid Mamba-2 + Transformer MoE, **74B total / 9B active**, 88 blocks, 496 experts (9 active + 1 shared), IQ2_XXS expert weights with NVFP4/Q8_0 elsewhere; derived from Nemotron 3.5 Super VL 120B-A12B.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **50.98%** (NVIDIA HF card; Qwen3.6-35B 44.38, Gemma4 26B 37.22, Nemotron 3.5 Lightning 23.46)
- GDPVal-AA-V2: **28.47%** (NVIDIA HF card; leads the comparison set)
- Tau3 Banking: **17.01%** (NVIDIA HF card; Qwen3.6-35B 10.52, Gemma4 26B 14.02)
- AutomationBench-AA: **15.5%** (AA; leads Nemotron 3 Ultra's 3.0%); AA-Briefcase **912 Elo**
- PinchBench #1 open model in class; BrowseComp #2 open model (vendor)
- Toolathon / MCP-Atlas / Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **21 (21.4)**; HLE **25%** (AA; Nemotron 3 Ultra 28%)
- AA-LCR: **70%** (AA; Nemotron 3 Ultra 79%); CritPt / Omniscience: **no verified public score found**
- Uses ~82k output tokens per AA Index task (1.8× Super VL)

Coding:

- Terminal-Bench 2.1 **50.98%** (above) is the primary coding/terminal signal; SWE-bench / LiveCodeBench / SciCode: **no verified public score found**

Long context:

- 256K shared context; AA-LCR **70%** is the long-context reasoning proxy; no MRCR/RULER value published.

### Normalized scores (1–100)

- **Tool use: 60/100.** Terminal-Bench 2.1 50.98% and AA-AutomationBench 15.5% lead its local class, but Tau3 Banking 17.01% is weak and no MCP-Atlas/Toolathon exists.
- **Reasoning: 54/100.** AA Index 21 and HLE 25% sit mid-pack; no GPQA/CritPt and a lower AA-LCR than Ultra cap it.
- **Context window: 72/100.** 256K is a strong edge footprint but the retrieval evidence is only AA-LCR 70%; methodology 200K–500K band.
- **Multimodal: 68/100.** Vision + text in / text out via a real vision tower at the top of the `+image in` band; no video/audio, text-only output.
- **Coding: 56/100.** Terminal-Bench 2.1 50.98% is respectable for 24GB but there is no SWE-bench/LiveCodeBench to confirm.
- **Cost efficiency: 85/100.** Open weights that fit a single 24GB device; hardware cost only, but quantization is lossy.
- **Overall Score: 62/100.** Mean of the five quality dims (60+54+72+68+56)/5 = 62.0 → 62. Best fit: local, memory-constrained agentic/vision work where sending data to the cloud is unacceptable.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (`deepseek/deepseek-v4.1-flash`)** — 2026-10-16
- Method: public internet research (NVIDIA Hugging Face model card and technical report, Artificial Analysis release article and comparisons, Ollama/Unsloth cards, NVIDIA blog, Gate/StreetInsider coverage). Vendor-reported figures flagged; the quantization checkpoint identity, context wording and the absence of GPQA/SWE-bench are surfaced rather than hidden. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
