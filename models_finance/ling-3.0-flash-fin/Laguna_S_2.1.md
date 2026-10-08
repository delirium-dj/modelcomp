# Ling 3.0 Flash Fin — findings by Laguna S 2.1

- Source: InclusionAI / Ling 3.0 Flash Fin
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash Fin
- **Short description:** InclusionAI's open-weight reasoning MoE (124B/5.1B active) finance-specialized variant of Ling 3.0 Flash. Released September 2026.
- **Provider / access:** Open weights on HuggingFace `inclusionAI/Ling-3.0-flash-Fin`; 1 API provider; `opencode/ling-3.0-flash-fin` (scaffolded)
- **Release / knowledge:** Released September 11, 2026
- **IDs:** `opencode/ling-3.0-flash-fin` (scaffolded per meta.json)
- **Context window:** 262,144 total — per AA; meta.json says 128K
- **Modalities:** Text in/out; reasoning yes
- **Pricing (as of 2026-10-08):** $0.075 per 1M input tokens, $0.22 per 1M output tokens (80% cache discount)
- **Architecture:** 124B total parameters, 5.1B active (MoE); MIT license

### Raw benchmarks found

> BenchLM reports 3 of 623 benchmarks with no public overall score (unranked). AA Intelligence Index 23* (#2/65 open-weight reasoning medium).

Agent / tool use:

- Finance Agent v2: **59.8%** (source: ITHome reproduction of InclusionAI launch chart)
- APEX-Agents: **29.2%** (source: ITHome reproduction)
- SpreadsheetBench 2: **21.8%** (source: ITHome reproduction)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **23*** (estimated, #2/65 open-weight reasoning medium)

Coding:

- SWE-bench: no verified public score found
- LiveCodeBench: no verified public score found

Long context:

- no long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 35/100.** Finance Agent v2 59.8% is the primary score; APEX-Agents 29.2% and SpreadsheetBench 21.8% are weak. Only 3/623 benchmarks covered.
- **Reasoning: 53/100.** AA Intelligence Index 23* places it well above average (#2/65). II+30 adjustment: 23+30=53. Finance-specialized but limited general reasoning benchmarks.
- **Context window: 95/100.** 262K tokens per AA.
- **Multimodal: 15/100.** Text-only model per meta.json; 15 per methodology.
- **Coding: 25/100.** No coding benchmarks published; inferred from general intelligence.
- **Cost efficiency: 85/100.** $0.075/$0.22 is very competitive; also open-weights MIT (free self-host).
- **Overall Score: 44.6/100.** Mean of five quality dims (35+53+95+15+25)/5 = 44.6, rounds to 46. Best-fit use case: finance-specialized agentic workflows within the Ling 3.0 Flash family.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-08
- Method: public internet research via Artificial Analysis and BenchLM sources; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.

---
