# Solar Pro 4 — Research Notes

**Researcher:** Claude Sonnet 4.6
**Date:** 2026-10-21
**Slug:** solar-pro-4

---

## Model Overview

Solar Pro 4 is Upstage's closed agentic flagship API model (512K context, 131K output). Text in/out only. Priced at $0.30/M in, $1.20/M out, $0.06/M cached (Upstage). Targeted at Korean/Japanese enterprise agents. GDPVAL-AA Elo 1106.

---

## Scores

- **Tool use: 72/100.** Terminal-Bench 2.1 57.0% and APEX-Agents 18.7% reveal modest agentic depth for a flagship; Terminal-Bench 4.0 0% is a notable weakness on the latest evaluation suite. SWE-bench Verified 70.6% validates solid software-engineering repair for the API tier.
- **Reasoning: 89/100.** GPQA Diamond 89.0% is excellent graduate-level scientific reasoning. Strong scientific depth for a text-only API model in the Korean/Japanese enterprise segment.
- **Context window: 86/100.** 512K context maps to the 500K tier (86). 131K output cap. Good for long-document and enterprise pipeline use cases.
- **Multimodal: 15/100.** Text input and output only. No image, audio, or video capability. Strictly text-only.
- **Coding: 87/100.** LiveCodeBench 87.8% is strong competitive programming. SWE-bench Verified 70.6% confirms real-world software engineering capability. Broad coding quality for a Korean/Japanese enterprise flagship.
- **Cost efficiency: 80/100.** $0.30/$1.20 per 1M is very competitive pricing for the benchmark level achieved. $0.06/M cached input improves economics for repeated-context enterprise workflows. Good value for a 512K text-only flagship.
- **Overall Score: 69.8/100.** Mean of Tool use (72) + Reasoning (89) + Context (86) + Multimodal (15) + Coding (87) = 349 / 5 = 69.8. A strong Korean/Japanese enterprise text model with 512K context — recommended for teams needing GPQA-class reasoning at affordable pricing, accepting text-only constraints and modest agentic depth.

---

Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
