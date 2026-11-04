# Gemini 2.0 Flash — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** gemini-2.0-flash

---

## Model Overview

Gemini 2.0 Flash was Google's 1M-context multimodal workhorse designed for fast tasks — the model that mainstreamed high-volume 1M-context inference. 1M token context (8K output), text/image/audio/video input, text output with native tool use. Shut down 2026-06-01. Historical Google AI Studio pricing: $0.10/$0.40 per 1M (audio in $0.70); Vertex AI $0.15/$0.60. Retained as a historical reference point.

---

## Scores

- **Tool use: 83/100.** Native tool use built in; strong agentic pipeline capability confirmed at the Gemini 2.x generation. Shut down before 2026 agentic benchmarks (Terminal-Bench 2.1) were fully established for it.
- **Reasoning: 79/100.** Gemini 2.0-class reasoning — solid for early 2025. Exceeded Gemini 1.5-era general reasoning; MMLU-Pro and similar benchmarks placed it at the mid-to-high frontier for its time, now clearly superseded by Gemini 3.x.
- **Context window: 92/100.** 1M token context maps to the 1M tier (92). 8K output cap is a notable limitation for long generation tasks. Retrieved across the full 1M reliably.
- **Multimodal: 82/100.** Text, image, audio, and video input; text output — full four-modality input coverage. Scored 82 for the breadth of input modalities (image+audio+video tier).
- **Coding: 76/100.** Good 2025-era coding capability for a Flash-class model. Standard coding benchmarks at release showed strong performance vs. prior Flash tiers; superseded by Flash revisions in 2025–2026.
- **Cost efficiency: 30/100.** Shut down — no longer available. Historical pricing $0.10/$0.40 was reasonable in 2025. Kept as reference only; no current cost efficiency.
- **Overall Score: 82.4/100.** Mean of Tool use (83) + Reasoning (79) + Context (92) + Multimodal (82) + Coding (76) = 412 / 5 = 82.4. A historical workhorse that mainstreamed 1M-context multimodal speed. Retained for reference; use Gemini 3 Flash or later for new deployments.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
