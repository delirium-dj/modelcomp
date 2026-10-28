# Claude Sonnet 5.4 — Research Notes

**Model ID:** opencode/claude-sonnet-5.4  
**Context window:** 1M total; 128K max output  
**Modalities:** Text, image in; text out  
**Pricing:** $2.50/$12.50 per 1M in/out; $0.25 cached read

## Benchmarks (Sonnet 5-class, mid-2026)

- SWE-bench Pro: ~63.2%
- Terminal-Bench 2.1: ~80.4%
- OSWorld-Verified (computer use): ~81.2%
- HLE (no tools): ~43.2%; with tools: ~57.4%
- Key features: adaptive thinking, sub-turn checkpointing, computer use

## Scores

- **Tool use: 87/100.** Computer use with sub-turn checkpointing; OSWorld ~81.2%; adaptive thinking with effort parameter tuning eliminates blind agent loops.
- **Reasoning: 86/100.** HLE with tools 57.4%; SWE-bench Pro ~63.2%; adaptive thinking dynamically scales reasoning depth per query complexity.
- **Context window: 92/100.** 1M token context; 128K max output; sustains long agentic sessions.
- **Multimodal: 60/100.** Text + image in, text out; no audio or video understanding.
- **Coding: 87/100.** SWE-bench Pro ~63.2%, Terminal-Bench 2.1 ~80.4%; sub-turn checkpointing fixes multi-step agent stall — key mid-2026 improvement over 4.6.
- **Cost efficiency: 76/100.** $2.50/$12.50 per 1M — slightly above Sonnet 5.5 pricing but very competitive for adaptive-thinking agentic capability; $0.25 cached reads.
- **Overall Score: 82/100.** Mean of Tool use + Reasoning + Context + Multimodal + Coding = (87+86+92+60+87)/5 = 82.4 ≈ 82. Mid-2026 Sonnet with structural improvements (adaptive thinking, sub-turn checkpointing) for reduced agent stall; image-only multimodal is the ceiling.

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
