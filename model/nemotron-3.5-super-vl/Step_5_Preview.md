# Nemotron 3.5 Super VL — findings by Step 5 Preview

- Source: NVIDIA/Nemotron 3.5 Super VL (`nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3.5 Super VL (120B-A12B)
- **Short description:** NVIDIA's open-weight vision-language flagship (Oct 2026): a 120B-total/12B-active Mamba-2–Transformer hybrid MoE with a C-RADIO vision encoder, built for agentic reasoning, coding, tool use, and document/video understanding at 1M context.
- **Provider / access:** Self-host weights (Hugging Face, BF16 + NVFP4; vLLM/SGLang recipes, 4× H100 or 2× GB200); 8 API providers per Artificial Analysis (median $0.225/$0.575 per MTok). OpenCode Zen lists a $0 promotional route `opencode/nemotron-3.5-super-vl-free` (verified 2026-10-19); no paid Zen ID was listed. OpenAI-compatible Chat Completions API.
- **Release / knowledge:** GA 2026-10-15 (HF v1.0); foundation data collection ran 2013–Dec 2025 per the model card (no separate "knowledge cutoff" published).
- **IDs:** `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16` (HF BF16) · `nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-NVFP4` (quantized) · served-model-name `nemotron-3.5-super-vl` · `opencode/nemotron-3.5-super-vl-free` (Zen, free promo).
- **Context window:** Up to 1,048,576 tokens (prompt, images, history, tool results, and output share the window); 35B-token long-context extension + 9B-token recovery stage in training; reasoning mode configurable via chat template (`enable_thinking`, `medium_effort`).
- **Modalities:** Text + image + video in (mp4 up to 2 min, ≤256 frames at 2 FPS; documents as page images); text out; tool calling (Qwen3-Coder parser); native MTP speculative decoding.
- **Pricing (as of 2026-10-19):** Free ($0) on the Zen promotional route; provider median $0.225/1M in, $0.575/1M out (Artificial Analysis; blended $0.14, $0.19 per Intelligence-Index task).
- **Architecture:** Open weights, OpenMDW-1.1 license (commercial use allowed); hybrid Mamba-2 + attention MoE, 512 routed experts per MoE layer, 120B total / 12B active params, MTP head.

### Raw benchmarks found

> NVIDIA publishes its own suite (run via NeMo Gym) and Artificial Analysis re-measures independently — both are listed; where they disagree, both numbers are kept (e.g. GDPval-AA: 1211 official vs Elo 1162 independent).

Agent / tool use:

- Terminal-Bench 2.1: **60.67%** (official, NeMo Gym)
- Terminal-Bench 4 (offline harness): **1.0%** (official) — near-floor on the newest terminal eval
- tau2-bench: retail **69.24%** / airline **76.50%** / telecom **73.19%** (official)
- tau3-bench banking: **18.88%** (official) — mid band
- GDPval-AA v2: **1211** (official) vs **Elo 1162** (#127/298, Artificial Analysis, Oct 2026)
- OSWorld-Verified: **51.14%** (official)
- WebVoyager (offline): **77.72%**; BrowseComp: **78%** (official)
- AutomationBench-AA (offline): **32.44%** (official) — weak
- IFBench (instruction following): **70.86%** (official)
- Claw-Eval / MCP-Atlas / Toolathlon: no verified public score found

Reasoning / knowledge:

- GPQA-Diamond: **89.52%** (official)
- HLE: **31.79%** text-only / **29.20%** full set (official)
- AA-LCR v1.1 (long-context reasoning): **68.62%** (official)
- GraphWalks: **89.71%** (official) — long-context retrieval, strongest in-table long-context figure
- CritPt: **10.86%**; APEX shortlist: **88.36%** (official)
- AA-Omniscience: accuracy **26.20%**, hallucination rate **30.0%**, index **4.03** (official)
- Artificial Analysis Intelligence Index: **26** — #1 of 67 open-weight models in its 40–150B size class (class median 8), but mid-pack globally
- MMLU-ProX: **76.91%**; LMArena v3 proxy: **52.67%**; WMT24++: **84.80%** (official)

Coding:

- SWE-bench Verified: **71.10%**; Multilingual: **67.72%**; Pro: **51.78%** (official)
- LiveCodeBench v6: **88.22%** (official)
- SciCode (subtask): **47.13%** (official)
- DeepSWE (offline harness): **24.65%** (official) — far below the 74%+ frontier reference
- Vibe Code Bench / Coding Index: no verified public score found

Multimodal (vision-language model):

- V*: **85.60%**; MathVision: **78.16%**; CharXiv reasoning: **80.82%** (official)
- MMLongBench-Doc: **62.82%**; OCR-Reasoning: **65.08%**; OCRBench v2: EN **68.12%** / ZH **59.15%** (official)
- Video-MME v2: **32.85%**; BabyVision: **29.60%** (official) — weak on low-level perception despite video input support
- AA-MMMU-Pro: evaluated by Artificial Analysis (in its 19-of-28 eval set) but no text figure published on the model page

Long context:

- 1M window verified (official + AA); GraphWalks **89.71%** and AA-LCR **68.62%** are the closest retrieval/reasoning-at-length numbers; no MRCR/RULER pass-rate-at-512K figure published.

Speed / latency (Artificial Analysis, median across 8 providers): 435.5 output tokens/s (#1/28 in class), TTFT 0.80 s; verbose — 170M output tokens on the Intelligence Index (median 100M).

### Normalized scores (1–100)

- **Tool use: 76/100.** tau2-bench 69–77%, OSWorld 51.1%, WebVoyager 77.7%, BrowseComp 78% and IFBench 70.9% sit well above the mid band, but tau3-bench banking 18.9%, AutomationBench 32.4% and Terminal-Bench 4 at 1.0% show the newest agentic harnesses are a real weakness; GDPval ~1160–1211 lands at the top of the mid band.
- **Reasoning: 73/100.** GPQA-Diamond 89.5% and APEX 88.4% are frontier-adjacent and HLE 31.8% clears the mid reference, but the AA Intelligence Index of 26 (class leader, global mid-pack), CritPt 10.9% and LMArena proxy 52.7% cap it; omniscience accuracy 26.2% with a 30% hallucination rate is mid-table.
- **Context window: 95/100.** 1M-token window verified on the official card and by AA with dedicated long-context training stages; GraphWalks 89.7% is strong but the 100 tier needs ≥98% retrieval at 512K+, which no source publishes, so 95.
- **Multimodal: 78/100.** Rare image + video + document-page input coverage (video in moves it out of the image-only 60–70 band), with strong chart/document reasoning (V* 85.6%, MathVision 78.2%, CharXiv 80.8%) but weak low-level perception (BabyVision 29.6%, Video-MME 32.9%) and text-only output.
- **Coding: 74/100.** LiveCodeBench v6 88.2% is near-frontier and SWE-bench Verified 71.1% is solid, but SciCode 47.1%, Terminal-Bench 2.1 60.7%, DeepSWE 24.7% and Terminal-Bench 4 at 1.0% keep it clearly below the 90+ frontier tier (DeepSWE 74%+/TB2.1 85%+).
- **Cost efficiency: 96/100.** Priced on the verified provider median $0.225/$0.575 per MTok (blended $0.14, $0.19/task — near the ~$0.10/$0.20 → 97–99 band); a $0 Zen promotional route (`opencode/nemotron-3.5-super-vl-free`) also exists and would score 100 while active, but the paid provider pricing is the durable figure.
- **Overall Score: 79/100.** Mean of 76/73/95/78/74 = 79.2 → 79. Best fit: the strongest open-weight vision-language pick for self-hosters — class-leading efficiency at 1M context with image/video/document input — best used for multimodal analysis, long-context document work, and cost-sensitive tool use rather than frontier-tier agentic coding.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-10-19
- Method: public internet research — official NVIDIA model card (Hugging Face, incl. the NeMo Gym benchmark table) cross-checked against Artificial Analysis (model page, GDPval-AA v2.1 leaderboard) and the OpenCode Zen model list; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Step_5_Preview_v2.md`, using the same headings.
