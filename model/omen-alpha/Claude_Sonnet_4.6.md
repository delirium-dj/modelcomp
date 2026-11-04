# Omen Alpha — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** omen-alpha

---

## Model Overview

Omen Alpha is an anonymous stealth reasoning model available on OpenCode Go ($0.20/$0.66 per 1M, $0.04 cached; zero-day retention). ~500K context (third-party listing), 128K max output. Text and image input; text output. Also available via TokenRa at $0.08/$0.26 (60% promo). The vendor is not publicly confirmed (OpenCode data namespace points at zhipu/). The only published benchmark is a 2026-09-04 OpenCode coding snapshot scoring 23.14/40.

---

## Scores

- **Tool use: 67/100.** Zero public agentic benchmark data (no Terminal-Bench, SWE-bench, or DeepSWE). The single OpenCode coding snapshot (23.14/40 = 57.9%) provides limited signal. Anonymous stealth status prevents broader validation. Scored conservatively based on the single coding snapshot and stated agentic positioning.
- **Reasoning: 67/100.** No GPQA, AIME, or other reasoning benchmarks published. Anonymous vendor with undisclosed architecture. The stealth positioning suggests competitive reasoning capability, but no data supports a higher score.
- **Context window: 86/100.** ~500K context (third-party listing) maps to the 500K tier (86). 128K max output. Zero-day retention confirmed. Context spec is third-party — not vendor-confirmed.
- **Multimodal: 60/100.** Text and image input; text output. Standard vision-language coverage, no audio or video. Scored 60 for image-in capability.
- **Coding: 60/100.** OpenCode coding snapshot 23.14/40 (57.9%) is the only evidence. Insufficient to validate broad coding capability. Anonymous architecture limits further assessment.
- **Cost efficiency: 82/100.** $0.20/$0.66 per 1M (zero-day retention) or $0.08/$0.26 via TokenRa promo. Competitive pricing for the access level, though undisclosed vendor introduces trust risk. Zero-day retention is a privacy positive.
- **Overall Score: 68/100.** Mean of Tool use (67) + Reasoning (67) + Context (86) + Multimodal (60) + Coding (60) = 340 / 5 = 68.0. A stealth model with long context and competitive pricing — but extremely thin public benchmark evidence. Use only after in-house validation on your specific tasks.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
