# Muse Spark Open — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** muse-spark-open

---

## Model Overview

Muse Spark Open is Meta Superintelligence Labs' October 15, 2026 open-weight MoE model (816B total / ~42B active parameters). 1M token context (131K max output). Text, code, image, video, and audio input; text/JSON output. Free open-weight checkpoint (BF16/NVFP4) on Hugging Face under the Muse Model License (commercial revenue threshold: separate agreement required above $20M annual managed AI service revenue). Self-hosting requires ~2TB VRAM BF16 or ~700GB NVFP4; hosted via OpenCode Zen.

---

## Scores

- **Tool use: 90/100.** MCP-Atlas (multi-step tool orchestration) 89.2 is a standout score — leading US open-weight alternatives in complex multi-tool selection and planning. Terminal-Bench 2.1 76.4 and OSWorld Verified 80.4% confirm broad agentic tool-use strength.
- **Reasoning: 89/100.** GPQA Diamond 89.0% is excellent graduate-level scientific reasoning. Optimized for long-horizon agentic reasoning rather than single-turn benchmarks; OSWorld 80.4% validates extended context reasoning.
- **Context window: 92/100.** 1M token context maps to the 1M tier (92). Full long-context retrieval confirmed at frontier level for massive codebases and enterprise workflows.
- **Multimodal: 88/100.** Text, code, image, video, and audio input; text/JSON output — full five-modality input coverage including audio and video. Maps to the full omni input tier (82–90). Scored 88 for breadth of native multimodal perception.
- **Coding: 83/100.** DeepSWE 1.1 60.0 and SWE-Atlas-QnA ~58 confirm solid agentic coding capability. Optimized as an agentic orchestrator over raw single-turn patch generation; real coding strength is in multi-file, whole-repository planning contexts.
- **Cost efficiency: 80/100.** Free open-weight checkpoint under Muse Model License ($0 license cost below $20M revenue threshold). Hosted via OpenCode Zen. Infrastructure cost is very high for self-hosting (2TB BF16). Muse license terms add compliance overhead vs. Apache/MIT.
- **Overall Score: 88.4/100.** Mean of Tool use (90) + Reasoning (89) + Context (92) + Multimodal (88) + Coding (83) = 442 / 5 = 88.4. The premier open-weight agentic MoE with full omni multimodal input — recommended for teams with the hardware to serve 816B/42B weights needing frontier multi-tool orchestration and 1M context.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
