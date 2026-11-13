# Nemotron 3.5 Super VL — findings by Ernie 5.5 Flash

- Source: NVIDIA/Nemotron 3.5 Super VL (`nemotron-3.5-super-vl`, 120B A12B)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** NVIDIA Nemotron 3.5 Super VL (120B A12B)
- **Short description:** NVIDIA's open multimodal MoE built for long-running agents — text/image/video understanding, reasoning, coding, tool use and document work. Weights, data and recipes are open under OpenMDW-1.1.
- **Provider / access:** NVIDIA Build / NIM (`nvidia/nemotron-3.5-super-vl-120b-a12b`), OpenRouter (`nvidia/nemotron-3.5-super-vl`), DeepInfra; open weights `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16` and an NVFP4 checkpoint (Hugging Face).
- **Release / knowledge:** 2026-10-15 (weights + technical report).
- **IDs:** `nvidia/nemotron-3.5-super-vl-120b-a12b` (Build), `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16` (HF), `nvidia/nemotron-3.5-super-vl` (OpenRouter served name).
- **Context window:** up to 1,048,576 tokens (1M); typical hosted deployment lists 262,144 (DeepInfra 262.1K in/out).
- **Modalities:** text / image / video in, text out; reasoning yes (configurable `enable_thinking`, medium-effort option); tool calls yes; JSON mode via structured outputs.
- **Pricing (as of 2026-11-13):** $0.20 in / $0.10 cached / $1.00 out per 1M (DeepInfra); NVIDIA free endpoints on Build also serve it.
- **Architecture:** Mamba-2–Transformer hybrid MoE, 120B total / 12B active, 512 routed experts per MoE layer, C-RADIO vision encoder + VL connector, Multi-Token Prediction head for native speculative decoding; BF16 reference + NVFP4 inference checkpoints; 124B safetensors params.

### Raw benchmarks found

> All figures are NVIDIA's own evaluation table from the `NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16` model card (NeMo Gym harness), SuperGA BF16 column.

Agent / tool use:

- Terminal-Bench 2.1: **60.67%** (vs 85.80 Qwen3.8-Flash-Next, 76.80 DeepSeek-V4-Flash, 54.80 Nemotron 3 Ultra)
- Terminal-Bench 4: **1.0** (offline harness — early/immature row)
- Tau2-Bench retail / airline / telecom: **69.24 / 76.50 / 73.19**; Tau3-Banking: **18.88**
- GDPval-AA v2: **1211** (Qwen3.8-Flash-Next 1561, DeepSeek-V4-Flash 1382)
- BrowseComp: **78**; WebVoyager: **77.72**; OSWorld-Verified: **51.14**
- AA-Briefcase-Lite: **1137 / 1252 / 40**; AutomationBench-AA: **32.44**
- Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.52%** (vs 92.7 Qwen3.8-Flash-Next, 91.2 GLM-5.3-Flash)
- HLE (text-only): **31.79%** (full set 29.20)
- MMLU-ProX: **76.91** (vs 83.0–85.5 peers)
- AA-Omniscience accuracy / hallucination / index: **26.20 / 30.0% / 4.03** — lowest hallucination rate of the peer set
- CritPt: **10.86%**; APEX shortlist: **88.36**

Coding:

- SWE-bench Verified: **71.10%** (vs 78.7 Qwen3.8-Flash-Next)
- SWE-bench Pro: **51.78%**; SWE-bench Multilingual: **67.72%**
- LiveCodeBench v6: **88.22%**; SciCode (subtask): **47.13**
- DeepSWE: **24.65** (offline harness)

Long context:

- AA-LCR v1.1: **68.62**; GraphWalks: **89.71** (best of the peer table); MMLongBench-Doc: **62.82**; V*: **85.60**

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.1 60.67% and tau2 retail/airline/telecom 69–77% are mid-frontier; GDPval-AA 1211 and AutomationBench 32.44 trail Qwen3.8-Flash-Next badly; TB4 = 1.0 shows the harness gap. Capped by weak economic-agent rows.
- **Reasoning: 78/100.** GPQA 89.5% is strong but MMLU-ProX 76.91 and HLE 31.79% sit below the Flash-tier peers; the 4.03 AA-Omniscience index (30% hallucination, best in table) is the standout. Mid-band overall.
- **Context window: 88/100.** Up to 1M with a 35B-token long-context extension; GraphWalks 89.71 and AA-LCR 68.62 are solid but hosted default is 262K, so the 1M-native band stays out of reach.
- **Multimodal: 85/100.** Native image + video in (Video-MME v2 32.85, MathVision 78.16, CharXiv 80.82, OCRBench v2 EN 68.12); video score is the weakest of the peer table, capping it below the Qwen/GLM VL leaders.
- **Coding: 75/100.** SWE-bench Verified 71.1% and LCB v6 88.22% are solid open-weight numbers, but SWE-Pro 51.78 and DeepSWE 24.65 trail the leaders by a wide margin — that gap is the cap.
- **Cost efficiency: 95/100.** $0.20/$1.00 per 1M with open weights and free NVIDIA endpoints — very cheap for the capability.
- **Overall Score: 80.4/100.** Best fit for self-hosted multimodal agent work where low hallucination and open weights matter; the coding-agent and GDPval gaps keep it out of the top band.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13
- Method: public internet research (NVIDIA Nemotron 3.5 Super VL Hugging Face model card and its full benchmark table, LLM Stats pricing/context listing, NVIDIA technical report); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16 — Hugging Face model card (benchmark table)](https://huggingface.co/nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)
  - [NVIDIA Nemotron 3.5 Super VL and Lightning Technical Report (PDF)](https://research.nvidia.com/labs/nemotron/files/NVIDIA-Nemotron-3.5-Super-and-Lightning-Technical-Report.pdf)
  - [Nemotron 3.5 Super VL (120B A12B): Benchmarks, Pricing & Context — LLM Stats](https://llm-stats.com/models/nemotron-3.5-super-vl-120b-a12b)
  - [Nemotron 3.5 Super VL — NVIDIA Developer blog](https://developer.nvidia.com/blog/nvidia-nemotron-3-5-super-vl-powers-specialized-agents-with-multimodal-reasoning/)
- Future sources: add a new file next to this one, e.g. `Ernie_5.5_Flash_v2.md`, using the same headings.