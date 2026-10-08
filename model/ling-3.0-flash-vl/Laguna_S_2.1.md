# Ling 3.0 Flash VL — findings by Laguna S 2.1

- Source: InclusionAI / Ling 3.0 Flash VL
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL
- **Short description:** InclusionAI's (Ant Group) open-weight reasoning MoE (124B total / 5.5B active) for long-context multimodal agentic workflows with text, image, and video input.
- **Provider / access:** Open weights on HuggingFace `inclusionAI/Ling-3.0-flash-VL`; 1 API provider; `opencode/ling-3.0-flash-vl`
- **Release / knowledge:** Released September 10, 2026
- **IDs:** `opencode/ling-3.0-flash-vl`; HuggingFace `inclusionAI/Ling-3.0-flash-VL`
- **Context window:** 262,144 total (65,536 output) — verified via AA
- **Modalities:** Text, image, video in; text out; reasoning yes; tool calls yes
- **Pricing (as of 2026-10-08):** $0.075 per 1M input tokens, $0.22 per 1M output tokens; 80% cache discount
- **Architecture:** 124B total parameters, 5.5B active (MoE); MIT license; open weights

### Raw benchmarks found

> BenchLM Overall 47.41/100, #108/887 models. AA Intelligence Index 25* (#1/65 open-weight reasoning, medium size class). 11 of 623 benchmarks covered.

Agent / tool use:

- GDPval-AA (normalized): **33.2%** (source: Artificial Analysis)

Coding:

- AA-SciCode: **44.2%** (source: Artificial Analysis)

Multimodal:

- AA-MMMU-Pro: **79.0%** (source: Artificial Analysis)

Reasoning:

- AA-LCR: **78.3%** (source: Artificial Analysis; long-context reasoning)
- CritPt: **2.0%** (source: Artificial Analysis; physics reasoning — low)

Knowledge:

- Artificial Analysis Intelligence Index: **25*** (estimated, #1/65 medium open-weight reasoning)
- AA-GPQA Diamond: **86.2%** (source: Artificial Analysis)
- AA-HLE: **22.0%** (source: Artificial Analysis)
- AA-Omniscience Index: **-4.5%** (source: Artificial Analysis)
- AA-Omniscience Accuracy: **14.4%** (source: Artificial Analysis)
- AA-Omniscience Hallucination Rate: **22.0%** (source: Artificial Analysis)

Long context:

- AA-LCR: **78.3%** (source: Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 40/100.** GDPval-AA 33.2% is moderate; no other agentic benchmarks published. Limited agentic coverage (1/623 benchmarks).
- **Reasoning: 55/100.** AA Intelligence Index 25* places it well above average (#1/65). II+30 adjustment: 25+30=55. AA-GPQA 86.2% is excellent; AA-LCR 78.3% is strong; but HLE 22.0% and Omniscience -4.5% indicate reliability issues.
- **Context window: 95/100.** 262K tokens places it in 262K tier.
- **Multimodal: 55/100.** Supports text, image, video input; AA-MMMU-Pro 79.0% confirms strong multimodal reasoning.
- **Coding: 42/100.** AA-SciCode 44.2% is moderate; no SWE-bench or LiveCodeBench published.
- **Cost efficiency: 85/100.** $0.075/$0.22 is very competitive; also open-weights MIT (free self-host).
- **Overall Score: 57/100.** Mean of five quality dims (40+55+95+55+42)/5 = 57.4, rounds to 57. Best-fit use case: open-weight multimodal MoE model with elite reasoning (IQ 25*), 262K context, and very competitive pricing.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-08
- Method: public internet research via Artificial Analysis and BenchLM sources; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.

---
