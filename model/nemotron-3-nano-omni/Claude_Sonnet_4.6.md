# Nemotron 3 Nano Omni 30B A3B — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** nemotron-3-nano-omni

---

## Model Overview

Nemotron 3 Nano Omni 30B A3B Reasoning is NVIDIA's April 2026 open omni reasoning model — a Mamba-2 + Transformer hybrid MoE (~31.6B total / 3B active parameters) supporting text, image, video, and audio input; text output. 256–262K context (65K output). Free on NVIDIA Build and OpenRouter free route; paid $0.20/$0.80 on DeepInfra. Vision encoder: C-RADIOv4-H; audio encoder: Parakeet; video: 3D conv + Efficient Video Sampling. Toggleable reasoning/thinking budget.

---

## Scores

- **Tool use: 70/100.** Multi-step tool calls, structured JSON output, and complex agent loops confirmed in real-world evaluations. Primary agentic strength is native multimodal perception rather than deep software-engineering chains. No SWE-bench or Terminal-Bench published.
- **Reasoning: 72/100.** Toggleable reasoning budget and Transformer layers for precision reasoning. Strong on document intelligence (MMLongBench-Doc, OCRBenchV2) and audio/speech (VoiceBench, DailyOmni). Deeper reasoning benchmarks (GPQA) not published for this model.
- **Context window: 78/100.** 256–262K context maps to the 256K tier (78). 65K output cap. Full omni context across text+audio+video within the window.
- **Multimodal: 88/100.** Text, image, video, and audio input; text output — full four-modality input coverage (the full omni input tier 82–90). High-resolution vision (C-RADIOv4-H), native speech/audio (Parakeet), and 3D video reasoning (EVS). Scored 88 for breadth and native processing of all four input modalities.
- **Coding: 60/100.** No SWE-bench, LiveCodeBench, or Terminal-Bench published. 3B active Nano-class parameters limit depth on complex software engineering. Handles structured output and simple agent loops; not a primary coding model.
- **Cost efficiency: 97/100.** $0 on NVIDIA Build and OpenRouter free route. Paid DeepInfra route $0.20/$0.80. Open weights available. Exceptional value for a full-omni model.
- **Overall Score: 73.6/100.** Mean of Tool use (70) + Reasoning (72) + Context (78) + Multimodal (88) + Coding (60) = 368 / 5 = 73.6. The free omni perception model — recommended for audio-visual document intelligence, speech Q&A, and multimodal sub-agent perception tasks where full modality coverage at zero cost matters.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
