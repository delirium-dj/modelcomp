# Qwen 3 Max — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** qwen3-max

---

## Model Overview

Qwen 3 Max is Alibaba's 2025 closed-weight flagship API model (262K context, 65K output), text in/out only. Priced at $1.20/$6.00 per 1M (resellers $0.36–$0.85/M in). Now deprecated — the reference point that the Qwen3.6/3.7/3.8 Max line replaced. No public SWE-bench or Terminal-Bench figure was ever published for it; benchmarks available are from the Artificial Analysis suite.

---

## Scores

- **Tool use: 68/100.** No SWE-bench or Terminal-Bench published. AA Intelligence Index 15.6 (a composite) and HLE 11.9% (Humanity's Last Exam, no tools) indicate respectable but not frontier-class tool capability for a flagship at release. Deprecated status limits further validation.
- **Reasoning: 72/100.** HLE 11.9% and AA Intelligence Index 15.6 reflect solid 2025 reasoning for a closed flagship. Clearly superseded by Qwen3.6/3.7/3.8 Max on all measured reasoning axes. Scored at the mid-tier for a retired 2025 flagship.
- **Context window: 78/100.** 262K context maps to the 256K tier (78). 65K output cap. Text-only processing within the window.
- **Multimodal: 15/100.** Text input and output only. No image, audio, or video capability. Strictly text-only.
- **Coding: 68/100.** No SWE-bench or LiveCodeBench published. For a 2025 closed flagship, coding capability was competitive at release; now superseded by later Qwen generations on all coding benchmarks. Thin evidence.
- **Cost efficiency: 50/100.** $1.20/$6.00 per 1M is mid-to-high pricing for a deprecated 2025 model. No self-hosting option. Resellers offer $0.36–$0.85/M in, improving the picture. Deprecated — no current deployment recommended.
- **Overall Score: 60.2/100.** Mean of Tool use (68) + Reasoning (72) + Context (78) + Multimodal (15) + Coding (68) = 301 / 5 = 60.2. The 2025 Qwen Max flagship — kept as a reference baseline for the generation. For new work, use Qwen3.7 Max or Qwen3.8 Max instead.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
