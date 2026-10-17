# Nemotron 3.5 Super VL — findings by Qwen 3.7 Plus

- Source: NVIDIA (`nemotron-3.5-super-vl`)
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL
- **Short description:** NVIDIA's open 120B/12B-active multimodal MoE for specialized always-on agentic workflows. Vision-language model with text, image, and video input; 1M context; open weights under OpenMDW 1.1. Released October 15, 2026.
- **Provider / access:** OpenCode Zen `opencode/nemotron-3.5-super-vl`; OpenRouter `nvidia/nemotron-3.5-super-vl` (free tier: `nvidia/nemotron-3.5-super-vl:free`); NVIDIA NIM; Hugging Face; ModelScope.
- **Release / knowledge:** 2026-10-15 release; knowledge cutoff not publicly stated.
- **IDs:** `opencode/nemotron-3.5-super-vl` (OpenCode Zen), `nvidia/nemotron-3.5-super-vl` (OpenRouter), `nvidia/nemotron-3.5-super-vl:free` (free tier).
- **Context window:** 1,048,576 tokens (1M), with native Multi-Token Prediction for speculative decoding (per NVIDIA model card).
- **Modalities:** Text, image (JPEG/PNG), video (MP4 up to 2 minutes) in; text out; reasoning (off/medium/high via chat template); tool calling; vision-language understanding.
- **Pricing (as of 2026-10-17):** Free on OpenRouter (free tier). NVIDIA NIM available as production microservice. Open weights for self-hosting.
- **Architecture:** Sparse MoE, 120B total parameters, 12B active per token; Mamba-2/Transformer hybrid with 512 routed experts per MoE layer; C-RADIO vision encoder + connector; open weights under OpenMDW 1.1 (near-MIT license, no field-of-use restrictions). Trained on ~26T tokens, post-trained with ~3.8M samples + RL across dozens of environments.

### Raw benchmarks found

> Sources: NVIDIA blog (blogs.nvidia.com/blog/nemotron-3-5-super-vl, 2026-10-15), NVIDIA model card (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4 on HuggingFace), AI Release Tracker (aireleasetracker.com), DEV Community analysis (dev.to, NVFP4 benchmark tables), Artificial Analysis (via various aggregators), Kilo leaderboard. All NVFP4 precision unless noted.

Agent / tool use:

- Terminal-Bench 2.1: **62.78%** (NVIDIA model card, BF16; NVFP4 not separately reported for this benchmark)
- CyberGym: data not found separately (NVIDIA focuses on VL agent tasks)
- tau2 airline: **75.75%** (NVIDIA model card, NVFP4)
- tau2 telecom: **73.19%** (NVIDIA model card, NVFP4)
- OSWorld-Verified: **52.3%** (NVIDIA model card, NVFP4)
- IFBench: **71.50%** (NVIDIA model card, NVFP4)
- GDP.pdf: **6.0%** (NVFP4; BF16: 6.6% — weak document understanding)
- WebVoyager (offline): **66.31%** (NVFP4; BF16: 77.72% — significant precision penalty)
- Kilo coding leaderboard: **#1 ranked model** (by developer usage, real-world coding tasks)

Reasoning / knowledge:

- GPQA Diamond: **89.90%** (NVIDIA model card, NVFP4; BF16 not separately reported; AI Release Tracker: 89.52%)
- HLE (text-only): **31.44%** (NVIDIA model card, NVFP4; up from 17.42% on Nemotron 3 Super)
- LiveCodeBench v6: **87.41%** (NVIDIA model card, NVFP4; up from 78.44% on Nemotron 3 Super)
- AA-LCR: **67.69%** (NVIDIA model card, NVFP4; up from 58.06% on Nemotron 3 Super)
- MMLU-ProX: **73.76%** (NVIDIA model card, NVFP4; down from 79.37% on Nemotron 3 Super)
- SciCode subtask: **46.61%** (NVIDIA model card, NVFP4; up from 40.83% on Nemotron 3 Super)
- AA Intelligence Index: visible on Artificial Analysis chart (estimated ~45-50 range based on chart position)

Coding:

- SWE-bench Verified: **71.07%** (NVIDIA model card, NVFP4)
- SWE-bench Pro: **51.30%** (NVIDIA model card, NVFP4)
- Terminal-Bench 2.1: **62.78%** (NVIDIA model card)
- LiveCodeBench v6: **87.41%** (NVIDIA model card — also listed under reasoning)
- DeepSWE (offline): **18.2%** (NVFP4; BF16: 24.65% — significant precision penalty)
- SciCode subtask: **46.61%** (NVIDIA model card)

Multimodal & Grounded (vision-language):

- MathVision: **77.79%** (NVIDIA model card, NVFP4)
- CharXiv reasoning: **79.88%** (NVIDIA model card, NVFP4)
- V* (visual grounding): **85.95%** (NVIDIA model card, NVFP4)
- OCRBench v2 EN: **68.34%** / ZH: **59.03%** (NVIDIA model card, NVFP4)
- MMLongBench-Doc: **62.82%** (NVIDIA model card, NVFP4)
- OSWorld-Verified: **52.3%** (NVIDIA model card, NVFP4)
- Video-MME v2: **32.54%** (NVIDIA model card, NVFP4)

Long context:

- AA-LCR: **67.69%** at 1M context (NVIDIA model card, NVFP4)

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`.

- **Tool use: 73/100.** tau2 airline 75.75% and tau2 telecom 73.19% show strong domain-specific agentic capability. OSWorld-Verified 52.3% is moderate. IFBench 71.5% is solid for instruction following. However, GDP.pdf 6.0% is very weak for document agent tasks, and WebVoyager 66.31% (NVFP4) shows a significant precision penalty. Capped by document understanding weakness and NVFP4 quality loss on agentic tasks.
- **Reasoning: 80/100.** GPQA Diamond 89.90% is excellent. LiveCodeBench v6 87.41% is outstanding. HLE 31.44% is moderate (much improved over Nemotron 3 Super's 17.42% but still well below frontier). MMLU-ProX 73.76% is solid. AA-LCR 67.69% shows reasonable long-context reasoning. Capped by HLE gap vs frontier (31% vs 46-67% for leaders) and MMLU-ProX regression.
- **Context window: 88/100.** 1M tokens native with Multi-Token Prediction for speculative decoding. AA-LCR 67.69% confirms functional but not exceptional long-context retrieval. Docked vs leaders because AA-LCR is ~16 pp behind top scores (88%+).
- **Multimodal: 82/100.** Text + image + video input (MP4 up to 2 min). Vision benchmarks are strong: V* 85.95%, CharXiv 79.88%, MathVision 77.79%. OCRBench EN 68.34% is moderate. MMLongBench-Doc 62.82% is solid. Video-MME v2 32.54% is weak. C-RADIO vision encoder provides broad coverage. Capped by Video-MME weakness and OCRBench ZH at 59%.
- **Coding: 80/100.** SWE-bench Verified 71.07% is strong. LiveCodeBench v6 87.41% is outstanding. Terminal-Bench 2.1 62.78% is moderate. SWE-bench Pro 51.30% is solid. DeepSWE 18.2% (NVFP4) is very weak — but BF16 is 24.65%, and the NVFP4 precision penalty is significant. #1 on Kilo leaderboard by developer usage. Capped by DeepSWE weakness and Terminal-Bench gap.
- **Cost efficiency: 100/100.** Free on OpenRouter. Open weights under OpenMDW 1.1 (near-MIT). Self-hostable on 128 GB+ hardware. Zero marginal cost for self-hosted deployments.
- **Overall Score: 81/100.** Mean of five non-cost dims: (73 + 80 + 88 + 82 + 80) / 5 = 80.6, half-up = 81. A frontier-class open multimodal model with outstanding LiveCodeBench (87.41%), strong SWE-bench Verified (71.07%), and versatile vision-language capabilities — all available for free with open weights. Best fit for: specialized always-on agents, multimodal agentic workflows, and organizations wanting to post-train on their own data.

---

## Signature

- Provided by: **Qwen 3.7 Plus (opencode/qwen-3.7-plus)** — 2026-10-17
- Method: public internet research across NVIDIA blog, NVIDIA HuggingFace model card, AI Release Tracker, DEV Community analysis, Artificial Analysis, OpenRouter, and Kilo leaderboard; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
