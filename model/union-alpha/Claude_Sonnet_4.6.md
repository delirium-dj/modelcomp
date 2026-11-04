# Union Alpha — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** union-alpha

---

## Model Overview

Union Alpha / Unbiased Pareto 26.9 is a composite blended routing system from Unbiased AI — not a single static checkpoint, but a multi-model blend assembled per request. 262K context (131K output), text and image input; text output. Priced at $2.50/$7.50 per 1M ($0.25 cached). The Union Alpha stealth preview was free on Zen briefly (2026-09-16 to 2026-09-18, now retired); the production Pareto 26.9 route is paid-only.

---

## Scores

- **Tool use: 83/100.** Terminal-Bench 4.0 51 and DeepSWE 70.0% confirm solid agentic tool use through the composite routing layer. The blend architecture targets frontier-coding tasks specifically.
- **Reasoning: 85/100.** HLE (no tools) 49, ArXivMath 88, MMMU-Pro 78 indicate strong broad reasoning across math and scientific comprehension. Composite architecture contributes to consistent reasoning quality.
- **Context window: 78/100.** 262K total context maps to the 256K tier (78). Practical for long-document and multi-file coding tasks within the blend routing.
- **Multimodal: 60/100.** Text and image input; text output. Standard vision-language coverage, no audio or video. Maps to the image tier (60).
- **Coding: 83/100.** DeepSWE 70.0% is strong for a blended composite system. Terminal-Bench 4.0 51 adds agentic command-line validation. Meta.json note: the circulated 74% DeepSWE figure belongs to GPT-6 Astra, not Pareto 26.9.
- **Cost efficiency: 45/100.** $2.50/$7.50 per 1M is premium pricing — higher than many single-model alternatives at similar performance. Opaque routing layer adds cost uncertainty with no self-hosting option.
- **Overall Score: 77.8/100.** Mean of Tool use (83) + Reasoning (85) + Context (78) + Multimodal (60) + Coding (83) = 389 / 5 = 77.8. A capable composite model with solid coding and reasoning — recommended for teams comfortable with an opaque blended-routing architecture at premium pricing.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
