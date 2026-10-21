# Nemotron 3.5 Lightning Free — findings by MiniMax M3.1 Flash

- Source: NVIDIA (Nemotron 3.5 Lightning 30B A3B), `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16`
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Lightning (30B A3B) — Free tier
- **Short description:** NVIDIA's August 2026 open-weight (OpenMDW 1.1) hybrid Mamba-2 MoE — 30B total / 3B active, up to a 1M-token window, text-only — built as the **always-on execution layer** for high-throughput agentic work, and served **free** on OpenCode Zen under NVIDIA's trial terms.
- **Provider / access:** Hugging Face `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16` (GA 08/11/2026; plus `-NVFP4`, `-NVFP4-DFlash`, `-NVFP4-DSpark`, `-Base-BF16`, and `ggml-org/…-GGUF`), NVIDIA NIM `nemotron-3.5-lightning-30b-a3b` (free trial endpoints), OpenRouter `nvidia/nemotron-3.5-lightning` (**$0.07/$0.20**; a `:free` route listing 1M ctx), and OpenCode Zen `nemotron-3.5-lightning-free` (**$0/$0**).
- **Release / knowledge:** **2026-08-11** (card "GA (08/11/2026)"; AA "released on August 11, 2026"). Knowledge cutoff not published.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Lightning-30B-A3B-BF16` (HF), `nvidia/nemotron-3.5-lightning-30b-a3b` (NIM), `nvidia/nemotron-3.5-lightning` (OpenRouter), `nemotron-3.5-lightning-free` (OpenCode Zen).
- **Context window:** **262,144** on the NVIDIA endpoint and OpenRouter, vs **up to 1M** on the card (validated at 1M on 8×H100 / GB200 / B200) and 256K on a single H100 80GB — conflict flagged.
- **Modalities:** text in / text out only.
- **Pricing (as of 2026-10-20):** **free ($0/$0/$0) on OpenCode Zen**; $0.07/M in and $0.20/M out on OpenRouter; $0.06/$0.20 (AA provider median); $0 on NVIDIA NIM trial endpoints. **Zen free-tier terms:** *"NVIDIA free endpoints: Trial use only — do not submit personal or confidential data. Your use is logged for security purposes and to improve NVIDIA products and services"* — the zero-retention carve-out does **not** apply to this slot. Self-host $0 (OpenMDW-1.1).
- **Architecture:** hybrid Mamba-2 + MoE + attention, 30B total / 3B active (AA: 31.6B/3.6B), 20T+ pretraining tokens, MTP layers.

### Raw benchmarks found

> NVIDIA's own card for the BF16 build (with the NVFP4 row alongside) plus
> Artificial Analysis and BenchLM readings.

Coding:

- SWE-bench Verified: **51.56%** (BF16 card) / **52.80%** (NVFP4 card) · SWE-bench Multilingual: **39.33%** / **36.47%** · Terminal-Bench 2.1: **24.58%** / **23.46%** · SciCode: **32.60%** / **31.38%**
- PinchBench: **85.37%** / **83.43%** · LiveCodeBench: no verified public score found for Lightning

Agent / tool use:

- Tau3-bench (Banking): **9.28%** · BrowseComp: **36.97%** / **36.81%** · GDPval-AA-V2: **832** (BF16) / **865** (NVFP4) · Terminal-Bench 4.0: **0.51%** (AA) · AutomationBench: **0.84%** (AA)
- IFBench (loose): **71.88%** / **72.88%** · EnterpriseOpsGym: **18.35%** (AA)

Reasoning / knowledge:

- GPQA Diamond: **75.44%** (card) / **74.34%** (AA) · MMLU-Pro: **81.94%** / **81.62%** · HLE (no tools): **11.72%** / **10.47%** · AA-LCR: **52.00%** / **49.19%**
- Artificial Analysis Intelligence Index: **13** (#1/64 for speed at **313 tok/s**, TTFT 0.60 s; 120M output tokens) · AA Omniscience Accuracy **14.4%** / hallucination **37.6%** · CritPt **0%** · MLCR **2.2%**
- BenchLM (NVFP4 row): **25.55/100, #209 of 972**, 27 of 668 benchmarks, AA Openness Index 83.3

### Normalized scores (1–100)

- **Tool use: 32/100.** Terminal-Bench 2.1 24.6%, τ³-Banking 9.3%, BrowseComp 37.0% and AutomationBench 0.8% are the floor of the agentic band — this model executes, it does not plan.
- **Reasoning: 58/100.** GPQA 75.4%, MMLU-Pro 81.9% and IFBench 71.9% are mid-band, capped by HLE ~11%, AA-LCR 52%, CritPt 0% and an Intelligence Index of 13.
- **Context window: 68/100.** 262,144 on the routes you can actually buy (1M is the card's ceiling for 8-GPU serving) with no published retrieval test.
- **Multimodal: 15/100.** Text-in/text-out only — the vision lives in the sibling Super VL 120B-A12B.
- **Coding: 60/100.** SWE-bench Verified 51.6–52.8%, PinchBench 85.4% and SciCode 32.6% are mid-band, with no LiveCodeBench figure at all.
- **Cost efficiency: 100/100.** The evaluated tier is **free** ($0/$0/$0) on OpenCode Zen; paid routes run $0.07/$0.20 and the weights are OpenMDW-1.1 for self-hosting. **Caveat:** NVIDIA's trial terms log your usage — keep confidential data off it.
- **Overall Score: 47/100.** Mean of the five quality dims = (32 + 58 + 68 + 15 + 60) / 5 = 46.6 → **47**. Best fit: a free, fast execution layer for high-volume agent steps (313 tok/s) — not the planner, and not the multimodal route.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-21
- Method: public internet research (NVIDIA Hugging Face model cards for BF16 and NVFP4, NVIDIA Build/NIM model card and blog, Artificial Analysis, BenchLM, models.dev, OpenRouter API, OpenCode Zen docs and privacy notes); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL.md`, using the same headings.
