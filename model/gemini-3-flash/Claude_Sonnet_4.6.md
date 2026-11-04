# Gemini 3 Flash — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** gemini-3-flash

---

## Model Overview

Google's Gemini 3 Flash is a preview-tier multimodal model with 1M token context (65K output), accepting text, image, and audio input; text output. Priced at $0.50/$3.00 per 1M (audio $1/M). Positioned as an interactive-coding bargain — near-Pro analysis quality at Flash speed and competitive pricing.

---

## Scores

- **Tool use: 87/100.** SWE-bench Verified 78% confirms strong agentic tool use and software engineering repair capabilities. Flash-class latency makes it practical for iterative agentic loops.
- **Reasoning: 91/100.** GPQA Diamond ~90.4% is elite graduate-level reasoning, rivaling Pro-tier models. Exceptional for a Flash-class model; confirms deep scientific reasoning across biology, physics, and chemistry.
- **Context window: 92/100.** 1M token context maps to the 1M tier (92). 65K output cap is a limitation for very long generations, but retrieval across 1M tokens is fully supported.
- **Multimodal: 72/100.** Text, image, and audio input; text output. Three input modalities (no video in; no non-text out). Maps to the image+audio tier (~70–80); scored 72 for the audio coverage without video.
- **Coding: 88/100.** LiveCodeBench 85.6–90.8% (configuration-dependent), SWE-bench Verified 78%. Strong across competitive programming and real-world software engineering tasks; preview-SKU output cap slightly limits very long code generation runs.
- **Cost efficiency: 82/100.** $0.50/$3 per 1M is among the most affordable frontier-class models. Excellent value for the benchmark level achieved — highly cost-efficient for high-volume pipelines.
- **Overall Score: 86/100.** Mean of Tool use (87) + Reasoning (91) + Context (92) + Multimodal (72) + Coding (88) = 430 / 5 = 86.0. A well-rounded Flash-class model at frontier reasoning quality — recommended for interactive coding, analysis, and long-document tasks where cost efficiency matters.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
