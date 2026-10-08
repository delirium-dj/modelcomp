# Ling 3.0 Tiny — findings by Laguna S 2.1

- Source: InclusionAI / Ling 3.0 Tiny
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Tiny
- **Short description:** InclusionAI's open-weight reasoning MoE (7.9B/1.3B active) for efficient deployment. Very small model with 262K context window. Free to use.
- **Provider / access:** Open weights on HuggingFace `inclusionAI/Ling-3.0-tiny-int4`; 1 API provider; `opencode/ling-3.0-tiny` (scaffolded)
- **Release / knowledge:** Released August 6, 2026; deprecated (succeeded by Ling 3.1 Flash)
- **IDs:** `opencode/ling-3.0-tiny` (scaffolded per meta.json)
- **Context window:** 262,144 total — per AA; meta.json says 128K
- **Modalities:** Text in/out; reasoning yes
- **Pricing (as of 2026-10-08):** Free — $0.00 per 1M input/output tokens (via API provider); open weights MIT for self-hosting
- **Architecture:** 7.9B total parameters, 1.3B active (MoE); MIT license

### Raw benchmarks found

> BenchLM reports 10 of 623 benchmarks with no public overall score (unranked). AA Intelligence Index 11* (#36/142 open-weight tiny class).

Agent / tool use:

- GDPval-AA (normalized): **3.2%** (source: Artificial Analysis)

Reasoning:

- AA-LCR: **60.3%** (source: Artificial Analysis; long-context reasoning)
- CritPt: **0.0%** (source: Artificial Analysis)
- AA-GPQA Diamond: **73.4%** (source: Artificial Analysis)
- AA-HLE: **9.3%** (source: Artificial Analysis)
- AA-Omniscience Index: **-19.3%** (source: Artificial Analysis)
- AA-Omniscience Accuracy: **8.5%** (source: Artificial Analysis)
- AA-Omniscience Hallucination Rate: **30.5%** (source: Artificial Analysis)
- Artificial Analysis Intelligence Index: **11*** (estimated, #36/142 open-weight tiny)

Coding:

- AA-SciCode: **24.2%** (source: Artificial Analysis)

Long context:

- no long-context retrieval benchmark reported beyond AA-LCR 60.3%

### Normalized scores (1–100)

- **Tool use: 15/100.** GDPval-AA 3.2% is extremely low; no other agentic benchmarks published.
- **Reasoning: 41/100.** AA Intelligence Index 11* places it above average for tiny open-weight class (#36/142). II+30 adjustment: 11+30=41. AA-GPQA 73.4% and AA-LCR 60.3% are reasonable; AA-HLE 9.3% and Omniscience -19.3% show reliability issues.
- **Context window: 95/100.** 262K tokens per AA places it in 262K tier.
- **Multimodal: 15/100.** Text-only model per meta.json; 15 per methodology.
- **Coding: 18/100.** AA-SciCode 24.2% is low; no SWE-bench or LiveCodeBench published.
- **Cost efficiency: 100/100.** Free — $0.00 per 1M tokens via API; also open-weights MIT (free self-host).
- **Overall Score: 36.8/100.** Mean of five quality dims (15+41+95+15+18)/5 = 36.8, rounds to 34. Best-fit use case: experimental/free deployment where the 262K context and free pricing justify lower performance; use Ling 3.1 Flash instead.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-08
- Method: public internet research via Artificial Analysis and BenchLM sources; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.

---
