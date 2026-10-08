# Mistral Large 4 — findings by Laguna S 2.1

- Source: Mistral AI / Mistral Large 4
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4
- **Short description:** Mistral AI's flagship frontier model featuring native multilingual fluency, advanced reasoning, and robust tool use. 1M context window with hybrid reasoning.
- **Provider / access:** Mistral AI API; `opencode/mistral-large-4`
- **Release / knowledge:** October 2026
- **IDs:** `opencode/mistral-large-4` (no Free ID on Zen per meta.json)
- **Context window:** 1,048,576 total (1M; 32,768 output) — per meta.json; BenchLM reports 1M
- **Modalities:** Text in/out; hybrid reasoning; tool calls yes; JSON mode yes
- **Pricing (as of 2026-10-08):** $2.00 per 1M input tokens, $6.00 per 1M output tokens (Mistral AI)
- **Architecture:** Proprietary model; part of Mistral Large 4 family

### Raw benchmarks found

> BenchLM Overall 53.74/100, #71/887 models. 18 of 623 benchmarks covered. AA Intelligence Index 38* (#64/225 in $0.15-1/M token tier).

Agent / tool use:

- Cybench: **93.0%** (source: Mistral AI announcement)
- Finance Agent v2: **54.7%** (source: Vals AI)
- GDPval-AA (normalized): **46.2%** (source: Artificial Analysis)
- AA-Briefcase: **1393 Elo** (source: Artificial Analysis)
- AA-AutomationBench: **59.9%** (source: Artificial Analysis)
- AA-Terminal-Bench 4.0: **26.8%** (source: Artificial Analysis)
- GDP.pdf: **18.6%** (source: Artificial Analysis)
- GDPval-AA (Elo): **1424** (source: Artificial Analysis)

Reasoning:

- AA-LCR: **81.3%** (source: Artificial Analysis; long-context reasoning)
- CritPt: **10.6%** (source: Artificial Analysis)
- AA-GPQA-Diamond: no verified public score found directly, but related data exists
- AA-HLE: no verified public score found directly
- Artificial Analysis Intelligence Index: **38.4%** (source: BenchLM); AA IQ 38* (#64/225)

Coding:

- Vibe Code Bench: **78.40%** (source: Vals AI)
- AA-SciCode: **54.2%** (source: Artificial Analysis)

Multimodal:

- AA-MMMU-Pro: **76.4%** (source: Artificial Analysis)

Knowledge:

- AA-Omniscience Index: **-5.3%** (source: Artificial Analysis; hallucination concerns)
- AA-Omniscience Accuracy: **25.8%** (source: Artificial Analysis)
- AA-Omniscience Hallucination Rate: **41.9%** (source: Artificial Analysis)

Long context:

- AA-LCR: **81.3%** (source: Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 65/100.** Cybench 93.0% is excellent; GDPval-AA Elo 1424 and AA-Briefcase 1393 Elo confirm strong agentic reasoning. GDP.pdf 18.6% is low; AA-AutomationBench 59.9% and AA-Terminal-Bench 26.8% are moderate.
- **Reasoning: 68/100.** AA Intelligence Index 38* (mid-range). II+30 adjustment: 38+30=68. AA-LCR 81.3% is excellent for long-context reasoning; CritPt 10.6% is weak; Omniscience -5.3% shows some reliability issues.
- **Context window: 95/100.** 1M tokens places it in 1M tier.
- **Multimodal: 15/100.** Text-only model per meta.json (despite AA-MMMU-Pro 76.4% listing); 15 per methodology.
- **Coding: 52/100.** Vibe Code Bench 78.40% is strong; AA-SciCode 54.2% is moderate.
- **Cost efficiency: 28/100.** $2.00/$6.00 is expensive; more expensive than median ($0.30/$1.15).
- **Overall Score: 59/100.** Mean of five quality dims (65+68+95+15+52)/5 = 59.0, rounds to 55. Best-fit use case: multilingual enterprise agents and tool-use tasks where the 1M context window and multilingual fluency justify the higher cost.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-08
- Method: public internet research via Artificial Analysis and BenchLM sources; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.

---
