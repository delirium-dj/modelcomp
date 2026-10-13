# Nemotron 3 Nano Omni — findings by MiMo 2.6 Flash

- Source: NVIDIA (`nemotron-3-nano-omni`)
- Date: 2026-10-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni
- **Short description:** NVIDIA's open omni-modal reasoning model (video + audio + image + text) designed as the "eyes and ears" perception sub-agent in multi-model agentic systems; tops six leaderboards for document intelligence, video, and audio understanding; up to 9× higher throughput than other open omni models at the same interactivity.
- **Provider / access:** Hugging Face (`nvidia/Nemotron-3-Nano-Omni-30B-A3B-Reasoning-BF16`); OpenRouter; NVIDIA NIM microservice; build.nvidia.com demo; SageMaker JumpStart, OCI, Dell on-prem.
- **Release / knowledge:** Released 2026-04-28 (NVIDIA blog); technical report 2026-04-27; knowledge cutoff not disclosed.
- **IDs:** `nvidia/nemotron-3-nano-omni` (HF/OpenRouter family); exact API IDs vary by host.
- **Context window:** 256K tokens (BenchLM); max output not disclosed.
- **Modalities:** video + audio + image + text in; text out; reasoning mode (on/off variants); tool calls; omni perception (Parakeet ASR speech stack, C-RADIOv4-H vision).
- **Pricing (as of 2026-10-13):** open weights (free download); API pricing varies by host (OpenRouter/NIM); no first-party $/M published in reviewed sources.
- **Architecture:** 30B total parameters, 3B active per token (sparse MoE A3B); hybrid MoE with text-centric decoder + cross-modal bridges; NVIDIA Nemotron Open Model License; FP8/NVFP4 quantization supported.

### Raw benchmarks found

Agent / tool use:

- OSWorld: **47.4%** (BenchLM; significant leap over Nemotron Nano V2 VL per NVIDIA)
- τ²-bench: **45.3%** (BenchLM)
- H Company computer-use agent integration: high-fidelity GUI navigation at native 1920×1080 (NVIDIA blog; preliminary OSWorld integration results)

Reasoning / knowledge:

- MMLU-Pro: **77.3%** (BenchLM)
- GPQA Diamond: **72.2%** (BenchLM)
- IFBench: **74.2%** (BenchLM; instruction following #62/124)
- AA Intelligence Index: no verified public score found

Coding:

- LiveCodeBench v5: **63.2%** (BenchLM)
- SciCode: **32%** (BenchLM)
- SWE-bench Verified: no verified public score found for this exact model

Multimodal (core strength):

- MMMU: **70.8%** (BenchLM)
- MMLongBench-Doc: **57.5%** (BenchLM)
- CharXiv: **76.3%** (BenchLM)
- ScreenSpot Pro: **57.8%** (BenchLM)
- Video-MME (w/o subtitle): **72.2%** (BenchLM)
- AI2D_TEST: **88.5%** (BenchLM)
- RefCOCO (avg): **90.5%** (BenchLM; strong visual grounding)
- MediaPerf: highest throughput across every video understanding task + lowest inference cost for video-level tagging (NVIDIA blog)

Long context:

- MMLongBench-Doc 57.5% at document lengths; no classic MRCR/RULER curve published.

### Normalized scores (1–100)

- **Tool use: 68/100.** OSWorld 47.4% is a strong computer-use result for a 3B-active model; τ²-bench 45.3% solid. Capped by perception-subagent framing (designed to pair with a planner, not solo long-horizon agentic loops) and no BFCL/toolathlon figures.
- **Reasoning: 70/100.** MMLU-Pro 77.3% and GPQA 72.2% are mid-tier for 2026; IFBench 74.2% good instruction following. Capped by clearly below frontier on academic reasoning and no HLE.
- **Context window: 82/100.** 256K is solid mid-range; MMLongBench-Doc 57.5% proves document-length reasoning works but leaves headroom. Capped by no 1M class window.
- **Multimodal: 90/100.** True omni-modal (video+audio+image+text) with top-of-class efficiency: tops six leaderboards per NVIDIA, RefCOCO 90.5% grounding, AI2D 88.5%, 9× throughput vs open omni peers, 500+ tok/s on B200. Capped only by MMMU 70.8% not quite matching the largest multimodal flagships.
- **Coding: 55/100.** LiveCodeBench v5 63.2% is respectable for 3B active; SciCode 32% shows science-code limits. Capped hard by no SWE-bench figure and clearly not a coding-first model.
- **Cost efficiency: 95/100.** 3B active params + open weights + NVFP4 Blackwell throughput = one of the most cost-efficient omni models available; effectively free to self-host on consumer/prosumer hardware.
- **Overall Score: 73/100.** Mean of (68 + 70 + 82 + 90 + 55) / 5 = 73.0 → **73**. Best-fit recommendation: the go-to open perception sub-agent for multimodal agentic systems — pair it with a stronger planner (Nemotron 3 Super/Ultra or any frontier model) for computer-use, video understanding, and document intelligence at rock-bottom cost; not a standalone coding or deep-reasoning model.

---

## Signature

- Provided by: **MiMo 2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-13
- Method: fresh public internet research (NVIDIA research report PDF, NVIDIA blog/developer blog, BenchLM comparison pages, Gigazine coverage, NVIDIA Nemotron inference docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
