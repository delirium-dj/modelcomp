# Gemma 4 26B A4B — findings by Laguna S 2.1

- Source: Google / Gemma 4 26B A4B
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google DeepMind's open-weight 26B MoE (10B active) model for multimodal agentic applications with text, image, speech, and video input.
- **Provider / access:** Open weights on HuggingFace; API via providers; `opencode/gemma-4.26b-a4b`
- **Release / knowledge:** June 2026
- **IDs:** `opencode/gemma-4.26b-a4b` (no Free ID on Zen per meta.json)
- **Context window:** 256,000 total — per meta.json
- **Modalities:** Text, image, speech, video in; text out; reasoning yes; tool calls yes
- **Pricing (as of 2026-10-08):** $0.15 per 1M input tokens, $0.60 per 1M output tokens (OpenRouter median); 80% cache discount
- **Architecture:** 26B total parameters, 10B active (MoE); Apache 2.0 license

### Raw benchmarks found

> AA Intelligence Index 10* estimated (#45/142), "Above Average". BenchLM has 12 of 623 benchmarks.

Agent / tool use:

- AA-Briefcase: **1330 Elo** (source: Artificial Analysis)
- AA-AutomationBench: **49.1%** (source: Artificial Analysis)
- AA-Terminal-Bench 4.0: **38.6%** (source: Artificial Analysis)
- GDP.pdf: **20.8%** (source: Artificial Analysis)

Coding:

- AA-SciCode: **58.3%** (source: Artificial Analysis)

Multimodal:

- AA-MMMU-Pro: **82.0%** (source: Artificial Analysis)

Reasoning:

- AA-LCR: no verified public score found
- CritPt: no verified public score found

Knowledge:

- Artificial Analysis Intelligence Index: **10*** (estimated, #45/142, "Above Average")
- AA-Omniscience Index: no verified public score found

Long context:

- no long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 50/100.** AA-Briefcase 1330 Elo is solid; AA-AutomationBench 49.1% and AA-Terminal-Bench 38.6% are moderate. GDP.pdf 20.8% is low.
- **Reasoning: 40/100.** AA Intelligence Index 10* places it above average for open-weight 26B class. II+30 adjustment: 10+30=40. Limited other reasoning benchmarks.
- **Context window: 95/100.** 256K tokens places it in 256K tier.
- **Multimodal: 58/100.** Supports text, image, speech, video input; AA-MMMU-Pro 82.0% confirms strong multimodal reasoning.
- **Coding: 52/100.** AA-SciCode 58.3% is decent; no SWE-bench or LiveCodeBench published.
- **Cost efficiency: 75/100.** $0.15/$0.60 is reasonable for a 26B MoE model; also open-weights (free self-host).
- **Overall Score: 55/100.** Mean of five quality dims (50+40+95+58+52)/5 = 55.0. Best-fit use case: open-weight multimodal MoE model with 256K context and strong image/speech/video support.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-08
- Method: public internet research via Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.

---
