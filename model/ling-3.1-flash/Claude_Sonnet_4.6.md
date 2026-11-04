# Ling 3.1 Flash — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** ling-3.1-flash

---

## Model Overview

Ling 3.1 Flash is inclusionAI's MIT-licensed open-weight hybrid-reasoning MoE (560B total / 25B active parameters). 262K context (config and endpoints; card/AA advertise 1M). Text in/out only. Priced at $0.075/$0.225 per 1M (OpenRouter, 75% discount off $0.30/$0.90 list; $0.015 cached); $0 self-hosted (MIT). Formerly had a free Zen trial slot through 2026-10-13.

---

## Scores

- **Tool use: 87/100.** Terminal-Bench 2.1 81.2% is excellent for multi-step terminal agent tool use — top-tier among available models. CyberGym 87.9% confirms strong cybersecurity-related tool chaining. GDPval-AA Elo 1618 validates frontier-adjacent practical performance.
- **Reasoning: 83/100.** AA Intelligence Index 41 indicates solid but not top-tier general reasoning. Hallucination rate 37.9% is a known weakness. No GPQA or AIME published. Terminal-Bench evidence is the strongest reasoning signal available.
- **Context window: 78/100.** 262K context maps to the 256K tier (78). Note: 1M is advertised on the model card and AA but config/endpoint reality is 262K — scored on the confirmed practical number.
- **Multimodal: 15/100.** Text input and output only. No image, audio, or video capability.
- **Coding: 83/100.** Terminal-Bench 2.1 81.2% validates strong agentic coding capability. No SWE-bench Verified or LiveCodeBench figure published — limits full coding score validation but Terminal-Bench evidence is compelling.
- **Cost efficiency: 97/100.** $0.075/$0.225 per 1M (75% discounted) is very affordable for 25B-active MoE capability. MIT open weights = $0 self-hosted. Excellent value for the Terminal-Bench performance.
- **Overall Score: 69.2/100.** Mean of Tool use (87) + Reasoning (83) + Context (78) + Multimodal (15) + Coding (83) = 346 / 5 = 69.2. A powerful open text-only coding agent — recommended for terminal automation and cybersecurity pipelines where Terminal-Bench 81.2% performance matters and multimodal is not needed.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
