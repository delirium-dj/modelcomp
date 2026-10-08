# Ling 2.6 Flash — findings by Laguna S 2.1

- Source: InclusionAI / Ling 2.6 Flash
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 2.6 Flash
- **Short description:** InclusionAI's open-weight non-reasoning MoE (107B/7.4B active) model with 262K context window. Deprecated, succeeded by Ling 3.0 Flash.
- **Provider / access:** Open weights on HuggingFace `inclusionAI/Ling-2.6-flash`; `opencode/ling-2.6-flash` (scaffolded)
- **Release / knowledge:** Released April 21, 2026; deprecated (superseded by Ling 3.0 Flash)
- **IDs:** `opencode/ling-2.6-flash` (scaffolded per meta.json)
- **Context window:** 128,000 total — per meta.json; AA reports 262K
- **Modalities:** Text in/out
- **Pricing (as of 2026-10-08):** Open weights (MIT license); free for self-hosting
- **Architecture:** 107B total parameters, 7.4B active (MoE); MIT license

### Raw benchmarks found

> BenchLM Overall 32.76/100, #160/887 models. AA Intelligence Index 10* (#3/39 open-weight non-reasoning medium class). 16 of 623 benchmarks covered.

Agent / tool use:

- tau2-bench: **86%** (source: Artificial Analysis)
- GDPval-AA (normalized): **0.0%** (source: Artificial Analysis)
- GDPval-AA (Elo): **550** (source: Artificial Analysis)

Coding:

- SciCode: **27%** (source: Artificial Analysis)
- AA Coding Index: **25.3%** (source: Artificial Analysis)

Reasoning:

- AA-LCR: **31.3%** (source: Artificial Analysis)
- CritPt: **0.0%** (source: Artificial Analysis)

Knowledge:

- Artificial Analysis Intelligence Index: **10*** (estimated, #3/39 open-weight non-reasoning medium)
- GPQA: **59%** (source: Artificial Analysis)
- AA-GPQA Diamond: **59.3%** (source: Artificial Analysis)
- AA-HLE: **6.3%** (source: Artificial Analysis)
- AA-Omniscience Index: **-66.1%** (source: Artificial Analysis; severe hallucination issues)
- AA-Omniscience Accuracy: **15.6%** (source: Artificial Analysis)
- AA-Omniscience Hallucination Rate: **96.7%** (source: Artificial Analysis)

Instruction following:

- IFBench: **57%** (source: Artificial Analysis)
- AA-IFBench: **57.4%** (source: Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 15/100.** tau2-bench 86% is misleadingly high (likely easy variant); GDPval-AA Elo 550 and normalized 0.0% are very low. No terminal benchmarks published.
- **Reasoning: 40/100.** AA Intelligence Index 10* places it above average for its size class. II+30 adjustment: 10+30=40. CritPt 0.0% and Omniscience -66.1% show severe reliability issues.
- **Context window: 60/100.** 128K tokens per meta.json (AA reports 262K but meta is authoritative).
- **Multimodal: 15/100.** Text-only model per meta.json; 15 per methodology.
- **Coding: 18/100.** SciCode 27% and AA Coding Index 25.3% are very low.
- **Cost efficiency: 100/100.** Open weights (MIT); free for self-hosting.
- **Overall Score: 29.6/100.** Mean of five quality dims (15+40+60+15+18)/5 = 29.6, rounds to 27. Best-fit use case: legacy/deprecated; use Ling 3.0 Flash instead.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-08
- Method: public internet research via Artificial Analysis and BenchLM sources; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.

---
