# Big Pickle — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** big-pickle

---

## Model Overview

Big Pickle is OpenCode Zen's long-running free stealth slot with a disputed underlying model — maintainer-confirmed as GLM-4.6 in 2025, then described as "DeepSeek-class" by mid-2026. 200K context (32K max output). Text in/out only. Free Zen tier ($0/$0, no published end date); data may be used to improve the model (not zero-retention). The underlying checkpoint has been swapped at least once, so no score can be attributed to a stable model identity.

---

## Scores

- **Tool use: 55/100.** One third-party measurement: SWE-Atlas 50.8% — the only published benchmark figure. No Terminal-Bench, DeepSWE, or other agentic benchmark published. Scored based on the single data point and the stated "DeepSeek-class" or GLM-class capability range.
- **Reasoning: 55/100.** No GPQA, AIME, or reasoning benchmarks published. The disputed identity (GLM-4.6 → DeepSeek-class) prevents reliable scoring. Scored conservatively at the mid-tier for a free stealth model of this stated class.
- **Context window: 75/100.** 200K total context maps between the 128K tier (65) and 256K tier (78); scored at 75 for the 200K stated window. 32K max output cap.
- **Multimodal: 15/100.** Text input and output only. No image, audio, or video capability.
- **Coding: 60/100.** SWE-Atlas 50.8% is the only coding evidence — a moderate score. No SWE-bench Verified, LiveCodeBench, or Terminal-Bench published. Checkpoint instability means this score may not apply to the current version.
- **Cost efficiency: 95/100.** Free Zen tier ($0/$0). No per-token cost. Data retention (not zero-day) means confidential code should not be used. Good for non-confidential exploration.
- **Overall Score: 52/100.** Mean of Tool use (55) + Reasoning (55) + Context (75) + Multimodal (15) + Coding (60) = 260 / 5 = 52.0. A free but identity-unstable stealth model — suitable for low-stakes non-confidential exploration only. Treat capability as unknown; validate independently before any real use.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
