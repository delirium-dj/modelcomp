# NVIDIA Nemotron 3.5 Super VL 120B A12B — findings by LongCat 2.5 Preview

- Source: NVIDIA/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL 120B A12B
- **Short description:** NVIDIA's open-weight 120B total / 12B active Mamba-2–Transformer hybrid MoE vision-language model (released 2026-10-15) for multimodal, long-context agentic workflows — documents, charts, GUI and video. Successor to the Nemotron 3 Super line, adding a C-RADIO v4-H vision encoder.
- **Provider / access:** Open weights on Hugging Face (`nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16`, `-NVFP4`); served via OpenRouter `nvidia/nemotron-3.5-super-vl` (Together, DeepInfra, CoreWeave) and NVIDIA NIM `build.nvidia.com/nvidia/nemotron-3.5-super-vl-120b-a12b`. OpenAI-compatible Chat Completions.
- **Release / knowledge:** Released 2026-10-15; knowledge cutoff not published.
- **IDs:** `nvidia/nemotron-3.5-super-vl` (OpenRouter); served name `nemotron-3.5-super-vl` (vLLM/SGLang); no Free ID on OpenCode Zen.
- **Context window:** up to 1,048,576 (1M) native, shared across prompt, visual inputs, history, tool results and output; host-served 262,144 (Together/DeepInfra) up to 1,048,576 (CoreWeave). Verified from NVIDIA model card + OpenRouter endpoints API.
- **Modalities:** text, image, video in; text out. Configurable reasoning (off / medium / on), tool calls, structured/JSON output.
- **Pricing (as of 2026-10-21):** Together $0.15 in / $0.50 out per 1M (cache read $0.02); DeepInfra $0.20/$1.00 (cache $0.10); CoreWeave $0.25/$1.50; Artificial Analysis provider median $0.23/$0.57. Open weights (OpenMDW-1.1) — self-host free.
- **Architecture:** Mamba-2–Transformer hybrid Mixture-of-Experts, 120B total / 12B active, 512 routed experts per MoE layer, C-RADIO v4-H vision encoder, vision-language connector, native Multi-Token Prediction (MTP) speculative decoding; NVFP4 quantization-aware distillation from BF16.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.70%** (NVIDIA model card, BF16; NVFP4 60.80; 71.9% with parallel agent + self-verification)
- Tau2-Bench: retail **69.24%**, airline **76.50%**, telecom **73.19%** (NVIDIA model card)
- Tau3-Bench banking: **18.88%** (NVIDIA model card)
- GDPval-AA v2: **Elo 1211** (NVIDIA model card)
- Hermes Bench: **63.44%**; LangChain Evals: **87.05%** (NVIDIA release announcement)
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.52%** (NVIDIA model card, BF16; NVFP4 89.90)
- HLE (text-only): **31.79%** (NVIDIA model card)
- AA-LCR v1.1: **68.62%** (NVIDIA model card)
- CritPt: **10.9%** (BenchLM)
- Artificial Analysis Intelligence Index: **26.5** (AA release article; AA model page rounds to 26); BenchLM overall **49.38** (point estimate; public-lane #60/128)
- AA-Omniscience Accuracy: **26.20%** / Hallucination Rate: **30.0%** (NVIDIA model card)
- MMLU-ProX: **76.91%**; IFBench: **70.86%**; WMT24++: **84.80%**; APEX shortlist: **88.36**; LMArena v3 proxy: **52.67**

Coding:

- SWE-bench Verified: **71.10%** (NVIDIA model card; NVFP4 71.07)
- SWE-bench Multilingual: **67.72%**; SWE-bench Pro: **51.78%** (NVIDIA model card)
- LiveCodeBench v6: **88.22%** (NVIDIA model card)
- SciCode (subtask): **47.13%** (NVIDIA model card)
- DeepSWE pass@1: **10.4%** (from 6.4% after agentic mid-training; NVIDIA technical report)

Long context:

- RULER-1M: **81.0** (NVIDIA technical report; recovered from 33.5 after mid-training); GraphWalks: **89.71**
- MMLongBench-Doc: **62.82%**; OCRBench v2 (English): **68.12%**; CharXiv reasoning: **80.82%**; V*: **85.60%**; BabyVision: **29.60%**

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 2.1 66.7% sits between the mid (45–60) and frontier (88+) anchors; Tau3-banking 18.9% and Tau2 69–77% plus GDPval-AA Elo 1211 (top of the 900–1200 mid band) and Hermes Bench 63.4% place it upper-mid; capped by the weak Tau3 banking figure and missing Claw-Eval/MCP-Atlas.
- **Reasoning: 77/100.** GPQA 89.5% is just under the 90% frontier anchor, but HLE 31.8% is below the 40% frontier line, AA-LCR 68.6% and AA Intelligence Index 26.5 stay in the 20–35 mid band, and CritPt 10.9% is modest.
- **Context window: 88/100.** 1M-token native window qualifies for the ≥1M tier (95–100); held below 95 because RULER-1M is 81.0 (not the ≥98% retrieval the top of the band requires) and most host endpoints serve 262,144.
- **Multimodal: 86/100.** Text + image + video input with a dedicated C-RADIO v4-H vision encoder and strong document/OCR/chart/video understanding (MMLongBench-Doc 62.8, OCRBench v2 68.1, CharXiv 80.8, V* 85.6); text-only output keeps it inside the 75–90 image/video band.
- **Coding: 79/100.** LiveCodeBench v6 88.2% and SWE-bench Verified 71.1% are solid, but SWE-bench Pro 51.8%, SciCode 47.1% and DeepSWE pass@1 10.4% sit under the frontier anchors (DeepSWE 74%+, SciCode 55%+).
- **Cost efficiency: 94/100.** Open weights (OpenMDW-1.1, self-host free) with the cheapest hosted route at $0.15/$0.50 per 1M and a $0.02 cache read — between the methodology's ~$0.10/$0.20 (97–99) and ~$0.60/$2.20 (~92) anchors.
- **Overall Score: 81/100.** Half-up mean of Tool use (76), Reasoning (77), Context window (88), Multimodal (86), Coding (79) = 406/5 = 81.2 → 81. Best fit: a cheap, fast, open multimodal agent model for document/video-heavy high-volume pipelines; not a frontier general reasoner.

---

## Signature

- Provided by: **LongCat 2.5 Preview (meituan/longcat-2.5-preview)** — 2026-10-21
- Method: public internet research (NVIDIA model card via build.nvidia.com, HF BF16/NVFP4 cards, NVIDIA research page + technical report PDF, NVIDIA developer blog, Artificial Analysis model page + release article, CellCog, LM Studio, BenchLM compare, OpenRouter endpoints API); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
