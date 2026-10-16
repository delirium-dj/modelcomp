# Nemotron 3.5 Super VL 120B A12B — findings by Nemotron 3.5 Super VL 120B A12B

- Source: nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16 (BF16) and NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4 (quantized), build.nvidia.com endpoint `nemotron-3.5-super-vl-120b-a12b`
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL 120B A12B
- **Short description:** NVIDIA's vision-language MoE model (120B total / 12B active parameters) for reasoning, coding, tool use, document understanding, and video understanding; 1M-token context, OpenMDW-1.1 open weights, released 2026-10-15.
- **Provider / access:** NVIDIA NIM endpoint on build.nvidia.com (`nemotron-3.5-super-vl-120b-a12b`, OpenAI-compatible Chat Completions via vLLM/SGLang); Hugging Face checkpoints `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16` (full precision) and `...-NVFP4` (quantized).
- **Release / knowledge:** Released 2026-10-15 via Hugging Face and build.nvidia.com; foundation data collection period 2013 to December 2025.
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16` (BF16), `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4` (NVFP4), build.nvidia.com `nemotron-3.5-super-vl-120b-a12b`. No Free ID confirmed in fetched sources.
- **Context window:** Up to 1M tokens (verified on the HF model-card Model Summary and build.nvidia.com Model Summary; shared across prompt, visual inputs, conversation history, tool results, and generated response).
- **Modalities:** Text, image, and video in; text out; reasoning yes (configurable via chat template `enable_thinking`); tool calls yes (auto tool choice, `qwen3_coder` tool-call parser, `nemotron_v3`/`nemotron_3` reasoning parser); JSON mode not explicitly advertised.
- **Pricing (as of 2026-10-16):** Not publicly disclosed in fetched sources; trial service governed by NVIDIA API Trial Terms of Service; model use governed by OpenMDW-1.1 license.
- **Architecture:** 120B total / 12B active parameters, Mamba-2–Transformer hybrid Mixture of Experts (512 routed experts per MoE layer) with a C-RADIO vision encoder and vision-language connector, native Multi-Token Prediction (MTP) speculative decoding; open weights under OpenMDW-1.1.

### Raw benchmarks found

All measured numbers below come from NVIDIA's own model card (evaluated via the NeMo Gym harness, containers/prompts/parsers published in NVIDIA-NeMo/Gym) and the matching build.nvidia.com page. No independent third-party verification exists yet — the model was released 2026-10-15, one day before this research date (2026-10-16). BF16 column = build.nvidia.com BF16; NVFP4 column = quantized variant where reported.

Conflicting result noted: Terminal-Bench 2.1 reads 60.67% on the Hugging Face BF16 model card but 66.70% (BF16) / 60.80% (NVFP4) on build.nvidia.com — the two official sources disagree on the BF16 figure; both are cited.

Agent / tool use:

- tau2-bench retail: **69.24%** (NVIDIA model card / build.nvidia.com, NeMo Gym)
- tau2-bench airline: **76.50%** (NVIDIA model card / build.nvidia.com, NeMo Gym)
- tau2-bench telecom: **73.19%** (NVIDIA model card / build.nvidia.com, NeMo Gym)
- tau3-bench banking: **18.88%** (NVIDIA model card / build.nvidia.com, NeMo Gym)
- APEX shortlist: **88.36%** (NVIDIA model card / build.nvidia.com, NeMo Gym)
- IFBench: **70.86%** (NVIDIA model card / build.nvidia.com, NeMo Gym)
- BrowseComp: **78%** (NVIDIA model card / build.nvidia.com, NeMo Gym)
- WebVoyager [offline]: **77.72%** (NVIDIA model card / build.nvidia.com, NeMo Gym)
- OSWorld-Verified: **51.14%** (NVIDIA model card / build.nvidia.com, NeMo Gym)
- AA-Briefcase-Lite [offline]: **1137** (NVIDIA model card / build.nvidia.com, NeMo Gym)
- AutomationBench-AA: **32.44%** (NVIDIA model card / build.nvidia.com, NeMo Gym)
- GDP.pdf [offline]: **6.6** (NVIDIA model card / build.nvidia.com, NeMo Gym)
- Terminal-Bench 2.1: **60.67%** (HF BF16 card) / **66.70%** (build.nvidia.com BF16 column) — conflicting official figures

Reasoning / knowledge:

- GPQA Diamond: **89.52%** (NVIDIA model card / build.nvidia.com, NeMo Gym)
- HLE text-only: **31.79%**; HLE full set **29.20%** (NVIDIA model card / build.nvidia.com, NeMo Gym)
- MMLU-ProX: **76.91%** (NVIDIA model card / build.nvidia.com, NeMo Gym)
- AA-Omniscience accuracy / hallucination rate: **26.20% / 30.0%** (NVIDIA model card / build.nvidia.com, NeMo Gym)
- CritPt: **10.86%** (NVIDIA model card / build.nvidia.com, NeMo Gym)
- SciCode subtask: **47.13%** (NVIDIA model card / build.nvidia.com, NeMo Gym)
- GraphWalks: **89.71%** (NVIDIA model card / build.nvidia.com, NeMo Gym)
- LMArena v3 proxy: **52.67%** (NVIDIA model card / build.nvidia.com, NeMo Gym)

Coding:

- LiveCodeBench v6: **88.22%** (NVIDIA model card / build.nvidia.com, NeMo Gym)
- SWE-bench Verified: **71.10%** (NVIDIA model card / build.nvidia.com, NeMo Gym)
- SWE-bench Multilingual: **67.72%** (NVIDIA model card / build.nvidia.com, NeMo Gym)
- SWE-bench Pro: **51.78%** (NVIDIA model card / build.nvidia.com, NeMo Gym)
- SciCode subtask: **47.13%** (NVIDIA model card / build.nvidia.com, NeMo Gym)
- Terminal-Bench 2.1: **60.67%** (HF BF16 card) / **66.70%** (build.nvidia.com BF16 column) — conflicting official figures
- DeepSWE [offline]: **24.65%** (NVIDIA model card / build.nvidia.com, NeMo Gym)

Long context:

- MMLongBench-Doc: **62.82%** (NVIDIA model card / build.nvidia.com, NeMo Gym)
- GraphWalks at long context: **89.71%** (NVIDIA model card / build.nvidia.com, NeMo Gym)
- AA-LCR v1.1: **68.62%** (NVIDIA model card / build.nvidia.com, NeMo Gym)
- Declared 1M-token context (verified on HF model card + build.nvidia.com); long-context mid-training (256K-context SE stage + 9B-token recovery); no public long-context retrieval score measured at the full 1M window.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 72/100.** Strong on APEX shortlist (88.36), tau2-bench airline (76.50), BrowseComp (78), WebVoyager (77.72); capped by weak tau3-bench banking (18.88), OSWorld-Verified (51.14), and AutomationBench-AA (32.44). All figures vendor-reported via NeMo Gym; no independent corroboration yet.
- **Reasoning: 70/100.** Strong on GPQA Diamond (89.52), GraphWalks (89.71), MMLU-ProX (76.91); capped by weak HLE text-only (31.79), AA-Omniscience accuracy (26.20), CritPt (10.86), and SciCode (47.13). Spiky profile — excellent knowledge/retrieval reasoning, weak on hard open-ended reasoning (HLE).
- **Context window: 90/100.** Declared 1M tokens with dedicated long-context mid-training (256K-context software-engineering stage + 9B-token recovery); capped because individual deployment recipes may use a smaller window and no public retrieval score is measured at the full 1M window.
- **Multimodal: 68/100.** Strong on V* (85.60), MathVision (78.16), CharXiv reasoning (80.82), OCR-Reasoning (65.08); capped by weak BabyVision (29.60), Video-MME v2 (32.85), and OCRBench v2 ZH (59.15). Mixed visual/document/video performance.
- **Coding: 72/100.** Strong on LiveCodeBench v6 (88.22) and SWE-bench Verified (71.10); capped by weak SWE-bench Pro (51.78), DeepSWE (24.65), and SciCode subtask (47.13). Competitive-coding strength does not yet extend to full agentic software engineering.
- **Cost efficiency: 60/100.** NVFP4 quantization plus 12B-active / 120B-total MoE implies inference efficiency; capped by undisclosed public pricing and a 4× H100 / 2× GB200 deployment footprint. Not counted toward Overall.
- **Overall Score: 74/100.** Half-up mean of (72 + 70 + 90 + 68 + 72) / 5 = 74.4 → 74. Best-fit recommendation: a capable vision-language agent for document/video understanding and tool-assisted coding, but verify on your own HLE-class and agentic-coding tasks before production reliance given the spiky benchmark profile and single-vendor sourcing.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (official NVIDIA model card on Hugging Face + NVIDIA Build endpoint page); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.
