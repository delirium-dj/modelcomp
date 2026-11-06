# Gemma 4 E2B — Claude Sonnet 4.6 Research

Gemma 4 E2B (April 2026, Apache 2.0) is Google's smallest fully multimodal edge model in the Gemma 4 family. "E2B" means Effective 2 Billion — it has 5.1B total parameters but only 2.3B active compute paths thanks to Per-Layer Embeddings (PLE), which keeps working memory and GGUF size very small (~3.3 GB Q4_0). Designed for Android phones (via LiteRT-LM / AICore), Raspberry Pi, and Jetson Orin Nano. Accepts text, image, and audio input; video is handled as extracted frames. 128K context window. Hosted by Google at ~$0.04/$0.08 per 1M in/out; self-hosting is free under Apache 2.0.

Benchmarks (verified):
- MMLU-Pro: 60.0% (from meta.json) / 68.2–69.4% with Thinking Mode (web sources — using conservative 60.0% from curated meta)
- HLE (Humanity's Last Exam): 4.8%
- HumanEval: ~54.3% (Python pass@1)
- AA index (Artificial Analysis aggregate): 7.8
- Terminal-Bench 2.1: 0.4%
- MRCR (long-context retrieval): 19.1% at 128K
- Multi-turn conversation stability: ~70%; function-calling accuracy: ~80% (community benchmarks)

## Scores

- **Tool use: 55/100.** ~80% function-calling accuracy in community benchmarks and multi-turn stability ~70% are solid for a 2B-class edge model. Insufficient for complex chained multi-tool agentic tasks; fine for local device agents with simple tool schemas.
- **Reasoning: 40/100.** MMLU-Pro 60.0%, HLE 4.8% — clearly below frontier reasoning models. The small effective parameter count limits deep multi-step logical reasoning, though Thinking Mode provides incremental gains on local workloads.
- **Context window: 65/100.** 128K tokens. Tier: 128K = 65 points. Unusual for an effective 2B model; MRCR 19.1% shows retrieval quality degrades significantly at the full 128K boundary.
- **Multimodal: 68/100.** Text + image + audio in; video as frames; text out. Three input modalities for a 2B-class edge model is exceptional. No native audio generation or video streaming output. Positions in the image+audio-in tier (65–72).
- **Coding: 35/100.** HumanEval 54.3% and Terminal-Bench 2.1 0.4% confirm coding is functional but weak. Best suited for simple code snippets and local IDE autocomplete, not repository-scale reasoning.
- **Cost efficiency: 95/100.** Apache 2.0 open weights; Q4_0 GGUF ~3.3 GB fits on-device at zero API cost. Hosted rate (~$0.04/$0.08 per 1M) is negligible. The best cost-efficiency story of any multimodal model.
- **Overall Score: 53/100.** Mean of Tool use (55) + Reasoning (40) + Context (65) + Multimodal (68) + Coding (35) = 263 / 5 = 52.6, rounded to 53. Ideal for on-device multimodal applications where cost and size matter more than raw reasoning depth.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
