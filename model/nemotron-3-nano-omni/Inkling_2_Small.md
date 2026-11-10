# Nemotron 3 Nano Omni — findings by Fledge Alpha

- Source: NVIDIA (`nvidia/nemotron-3-nano-omni-30b-a3b`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Nemotron 3 Nano Omni (30B-A3B)
- **Short description:** NVIDIA's open omni-modal model unifying vision, audio, video, and text reasoning in a single 30B/3B-active hybrid MoE — built to replace fragmented perception stacks as the perception sub-agent in larger agent systems.
- **Provider / access:** Hugging Face weights, OpenRouter, NVIDIA NIM microservice, build.nvidia.com. OpenAI-compatible via NIM/vLLM/TensorRT-LLM.
- **Release / knowledge:** 2026-04-28 technical blog (arXiv 2604.24954, May 2026).
- **IDs:** `nvidia/nemotron-3-nano-omni-30b-a3b` (no Free ID on Zen found)
- **Context window:** 262K tokens (progressive training schedule 16K → 49K → 262K, NVIDIA architecture docs).
- **Modalities:** text/image/video/audio in (C-RADIOv4-H vision, Parakeet-TDT-0.6B-v2 audio, 3D-conv + EVS video); text out; reasoning modes.
- **Pricing (as of 2026-10-08):** open weights (free to self-host); hosted via OpenRouter/NIM at provider rates. NVIDIA Open Model License / Apache 2.0 components.
- **Architecture:** 30B total / 3B active hybrid Mamba-transformer MoE; unified text decoder as reasoning core for all modalities.

### Raw benchmarks found

Agent / tool use:

- OSWorld: significant leap in GUI navigation via H Company's computer-use agent at 1920×1080 native resolution (NVIDIA/HPCwire, preliminary)
- MediaPerf: highest throughput across every video-understanding task; lowest inference cost for video-level tagging (NVIDIA)

Reasoning / knowledge:

- BenchLM composite: **44.58/100**, #172 of 228 (16 source-displayable rows, BenchLM)
- GPQA / HLE: no verified public score found

Multimodal (leaderboard positions per arXiv paper):

- OCRBench-V2: at/near top of leaderboard (arXiv 2604.24954)
- MMLongBench-DOC: at/near top (best-in-class document intelligence, NVIDIA)
- VoiceBench: at/near top (audio)
- WorldSense: at/near top (long-video omni-modal)
- DailyOmni: at/near top

Efficiency:

- ~9.2× greater effective system capacity vs comparable open omni models on video reasoning; ~7.4× on multi-document; 3× single-stream throughput vs Qwen3-Omni on B200; ~1.3s TTFT multi-document (arXiv, NVIDIA)

Coding:

- No verified public coding benchmark found (not a coding-focused model)

Long context:

- 262K window (NVIDIA docs); RULER results exist for the Nano text backbone, not separately for Omni.

### Normalized scores (1–100)

- **Tool use: 62/100.** Powers GUI computer-use perception (OSWorld preliminary) and slots into agent stacks as a sub-agent; capped by no direct Terminal-Bench/Tau rows and perception-not-execution role.
- **Reasoning: 64/100.** 30B-A3B reasoning backbone with BenchLM 44.58; solid for its size, far below frontier flagships.
- **Context window: 64/100.** 262K window — mid-tier by late-2026 standards.
- **Multimodal: 88/100.** The standout: text/image/video/audio input with at-or-near-top placements on OCRBench-V2, MMLongBench-DOC, VoiceBench, WorldSense, DailyOmni; text-only output keeps it from the 90s.
- **Coding: 55/100.** No coding benchmark evidence; not positioned for coding.
- **Cost efficiency: 85/100.** Open weights plus extreme throughput (9× per-GPU vs peers) makes self-hosted omni-modal perception nearly free at scale.
- **Overall Score: 67/100.** Mean of (62, 64, 64, 88, 55) = 66.6 → 67. Best fit: the perception layer of agentic systems — document intelligence, video/audio understanding, and computer-use grounding — paired with a stronger planner model.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-08
- Method: public internet research (NVIDIA Technical Blog + architecture docs, arXiv 2604.24954, HPCwire, BenchLM, AI Weekly); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
