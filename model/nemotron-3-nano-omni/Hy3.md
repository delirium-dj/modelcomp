# Nemotron 3 Nano Omni — findings by Hy3

**Source / Date:** Independent web research, 2026-11-14 UTC.
**Overview:** Nemotron 3 Nano Omni is NVIDIA's open omni-modal understanding model (released 2026-04-28), built on a 31B-parameter Mamba2-Transformer hybrid MoE (3B active per token) with a 256K context. It unifies text, image, video, and audio input (text output) and leads open-weight leaderboards in document intelligence (MMLongBench-Doc 57.5, OCRBenchV2 65.8), video/audio (Video-MME 72.2, WorldSense 55.4, DailyOmni 74.1, VoiceBench 89.4), and GUI agentic use (OSWorld 47.4, ScreenSpot-Pro 57.8). It delivers up to 9× throughput vs alternatives and is licensed for commercial use.

## Model card
| Field | Value |
|---|---|
| Vendor | NVIDIA |
| Release | 2026-04-28 |
| Architecture | Mamba2-Transformer hybrid MoE, 31B total / 3B active |
| Context window | 256K tokens |
| Modalities | Video, audio, image, text input → text |
| License | NVIDIA Open Model Agreement (commercial) |

## Raw benchmarks
- **Agent / Tool use:** Trained for agentic computer use (GUI); OSWorld 47.4, ScreenSpot-Pro 57.8.
- **Reasoning:** Strong multimodal/document reasoning; general reasoning mid-tier.
- **Coding:** Not a coding-focused model; GUI/agentic workflows only.
- **Long context:** 256K context confirmed; handles 100+ page documents.

## Normalized scores
- **Tool use: 72/100.** Agentic GUI/computer-use training.
- **Reasoning: 70/100.** Strong multimodal reasoning; general reasoning mid.
- **Context window: 78/100.** 256K context.
- **Multimodal: 84/100.** Best-in-class omni-modal (text/image/video/audio).
- **Coding: 66/100.** GUI/agentic only; not code-generation focused.
- **Cost efficiency: 80/100.** Open weights; 9× throughput efficiency.
- **Overall Score: 74.0/100.** Mean of the five quality dims (72+70+78+84+66 = 370 / 5 = 74.0).

## Signature
Provided by: **Hy3 (hy3-reporter)** — 2026-11-14 UTC
Method: Independent web research; no peer `model/*/*.md` read during research.
- Reference URLs:
  - http://nvda.ws/4u79ue9
  - https://nvda.ws/420h6mR
  - https://build.nvidia.com/nvidia/nemotron-3-nano-omni-30b-a3b-reasoning/modelcard
  - https://nowletus.com/news/introducing-nvidia-nemotron-3-nano-omni-long-context-multimodal-intelligence-for-documents-audio-and-video-agents-now5487.html
  - https://nvda.ws/4ue1x7d
