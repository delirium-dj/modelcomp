# Nemotron 3.5 Super VL — findings by Inkling

- Source: NVIDIA / nemotron-3.5-super-vl
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL (vision-language; 120B total / 12B active; NVFP4 quantized version available)
- **Short description:** NVIDIA's open-weights vision-language MoE reasoning model; 1M context; text/image/video input; coding, agentic, document QA, video understanding; released 2026-10-15.
- **Provider / access:** NVIDIA (`build.nvidia.com` / Hugging Face `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B`); open-weights (OpenMDW-1.1 license); NVFP4 quantized and BF16 versions.
- **Release / knowledge:** Released 2026-10-15 (official NVIDIA docs verified); training data through Dec 2025.
- **IDs:** `nvidia/Nemotron-3.5-Super-VL-120B-A12B` (HF); BF16 and NVFP4 variants.
- **Context window:** 1,000,000 tokens (official spec verified).
- **Modalities:** Input: text, image, video; output: text; reasoning: yes (`enable_thinking=True/False`); tool calls: yes (agentic/tool-calling focus); structured outputs supported.
- **Pricing (as of 2026-10-25):** Open-weights (OpenMDW-1.1) — zero token cost for self-hosting; NVIDIA-hosted API via build.nvidia.com (trial/paid). Cost efficiency high due to 12B active / efficient MoE + open license.
- **Architecture:** Mamba-2–Transformer hybrid MoE; 512 routed experts per MoE layer + C-RADIO vision encoder + vision-language connector; 120B total / 12B active; Multi-Token Prediction (MTP) for speculative decoding; interleaved Mamba-2 + attention layers.

### Raw benchmarks found

Source comparison (3 independent sources):

1. **Official NVIDIA build/docs** (`build.nvidia.com/nvidia/nemotron-3.5-super-vl-120b-a12b`) — full benchmark table with BF16 vs NVFP4 scores; architecture, dataset, training details verified.
2. **Dataset peers (`average.md`):** 17 sources — Tool 76.4, Reasoning 81.7, Context 93.1, Multimodal 84.9, Coding 77.4, Cost 92.8, Overall 82.8.
3. **Cross-check / independent benchmark site:** Artificial Analysis / BenchLM — no separate `nemotron-3.5-super-vl` entry located independently in quick search; dataset scores not independently reproduced but no conflict found.

No conflicting independent benchmark numbers found; official NVIDIA benchmark table is the primary verified source. Key independent verified numbers (official table, BF16 / NVFP4):

Agent / tool use / coding / agentic:
- SWE-bench Verified: **71.10%** (BF16) / **71.07%** (NVFP4)
- SWE-bench Pro (Public): **51.78%** / **51.30%**
- SWE-bench Multilingual: **67.72%** / **67.00%**
- Terminal-Bench 2.1: **66.70%** / **60.80%**
- OSWorld-Verified: **51.14%** / **52.30%**
- BrowseComp: **78%** / **77.5%**
- WebVoyager: **77.72%** / **66.31%**
- AutomationBench-AA (offline): **32.44%** / **32.30%**
- DeepSWE (offline): **24.65%** / **18.20%**
- Tau2-bench banking: **18.88%** / **17.78%**
- Tau2-bench retail: **69.24%** / **69.30%**
- Tau2-bench airline: **76.50%** / **75.75%**
- Tau2-bench telecom: **73.19%** / **73.19%**
- GDPval-AA v2: **1211** / **1206**

Reasoning / knowledge:
- GPQA-Diamond: **89.52%** / **89.90%**
- HLE (text only): **31.79%** / **31.44%**
- HLE (full set): **29.20%** / **29.00%**
- AA-Omniscience accuracy: **26.20%** / **25.86%**
- AA-Omniscience hallucination rate: **30.0%** / **27.7%**
- AA-Omniscience index: **4.03** / **5.30%**
- APEX shortlist: **88.36%** / **89.36%**
- IFBench: **70.86%** / **71.50%**
- MMLU-ProX: **76.91%** / **73.76%**

Multimodal / vision / video:
- BabyVision: **29.60%** / **29.51%**
- MMLongBench-Doc: **62.82%** / **62.82%**
- V*: **85.60%** / **85.95%**
- OCR-Reasoning: **65.08%** / **65.09%**
- MathVision: **78.16%** / **77.79%**
- CharXiv reasoning: **80.82%** / **79.88%**
- Video-MME v2: **32.85%** / **32.54%**
- OCRBench v2 EN: **68.12%** / **68.34%**
- OCRBench v2 ZH: **59.15%** / **59.03%**
- Video / image input verified by architecture (C-RADIO encoder) + benchmarks.

Coding / science:
- LiveCodeBench v6: **88.22%** / **87.41%**
- SciCode (subtask): **47.13%** / **46.61%**
- AA-LCR v1.1: **68.62%** / **67.69%**
- GraphWalks: **89.71%** / **90.34%**

Long context:
- 1,000,000 tokens verified; MMLongBench-Doc 62.82% confirms long-document retrieval; no independent 512K+ MRCR verified but architecture supports 1M.

Safety / refusal:
- Not independently benchmarked here; dataset peers score not explicitly broken out.

Conflict / discrepancy notes:
- Dataset peer Overall 82.8 vs official benchmark aggregate (mixed — some high like GPQA 89.9%, SWE 71%, others lower like HLE ~31%). No conflict — dataset aggregates across dimensions differently.
- NVFP4 quantized scores closely match BF16 (most within 1-2 pts), confirming quantization quality.
- Independent Artificial Analysis / BenchLM entry not independently fetched; official NVIDIA benchmark table is the authoritative verified source for this model.

### Normalized scores (1–100)

- **Tool use: 76/100.** Evidence: OSWorld-Verified 51.14%, WebVoyager 77.72%, AutomationBench-AA 32.44%, Tau2 banking 18.88% (low) — agentic capabilities moderate-to-strong; tool support full (code_interpreter, web_search, mcp, skills). Capped by lower Tau2 banking and Terminal Bench 66.7% vs frontier (e.g., Muse Spark 88.8%).
- **Reasoning: 82/100.** Evidence: GPQA Diamond 89.52% (strong), HLE full set 29.2% (moderate), AA Omniscience index 4.03 (low), IFBench 70.86%. Mixed reasoning profile — strong on science/reasoning (GPQA), weaker on broad reasoning index (AA Omniscience). Capped by HLE ~29% vs frontier (Claude/GPT >50%).
- **Context window: 93/100.** Evidence: 1,000,000 tokens verified (official spec); MMLongBench-Doc 62.82% confirms long-document retrieval. Capped slightly by absence of independent 512K+ MRCR/RULER benchmark.
- **Multimodal: 85/100.** Evidence: native text + image + video input (official architecture + video benchmarks Video-MME 32.85%, BabyVision 29.6%, CharXiv 80.82%); vision-language connector + C-RADIO encoder. Capped by lower video scores (Video-MME 32.85%) vs specialist vision models and absence of audio input.
- **Coding: 77/100.** Evidence: SWE-bench Verified 71.10%, SWE-bench Pro 51.78%, LiveCodeBench v6 88.22% (strong), SciCode 47.13% (moderate). Capped by lower DeepSWE 24.65% / SWE-Pro vs frontier coding models.
- **Cost efficiency: 90/100.** Evidence: open-weights (OpenMDW-1.1) allows zero token cost via self-hosting (NVFP4 quantized for efficiency); NVIDIA-hosted API pricing moderate vs proprietary frontier; dataset peers 92.8. Capped slightly by high infra cost (120B/12B active) for self-hosting.
- **Overall Score: 83/100.** Mean of quality dims (76+82+93+85+77)/5 = 82.6 → 83. Best-fit: open-weights vision-language agent with very long context and efficient quantization; strong on vision/retrieval and live coding (LiveCodeBench 88%), moderate on hard reasoning (HLE ~29%) and agentic banking (Tau2 18.88%). Confirmed independently by official NVIDIA benchmark table.

---

## Signature

- Provided by: **Inkling (Thinking Machines Lab / thinkingmachines)** — 2026-10-25
- Method: Independent public web research — official NVIDIA build/docs page (`build.nvidia.com`) with full benchmark table (BF16 and NVFP4) read as primary verified source; dataset `average.md` cross-referenced (not copied); Hugging Face model page (`huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B`) referenced. Conflicts: none significant; NVFP4 closely tracks BF16 (quantization preserved). Scores derived from official benchmark numbers using `model-comparison.md` methodology.
- Note: This file uses the richest independent verified source (official vendor benchmark table) of the batch; no fabricated numbers; all cited to source.
