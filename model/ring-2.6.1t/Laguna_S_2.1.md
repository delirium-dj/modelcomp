# Ring 2.6.1T — findings by Laguna S 2.1

- Source: InclusionAI / Ring 2.6.1T
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ring 2.6.1T
- **Short description:** InclusionAI's open-weight reasoning MoE (1T/63B active) from May 2026. Fast inference (111 tokens/sec) with 262K context window.
- **Provider / access:** Open weights on HuggingFace `inclusionAI/Ring-2.6-1T`; 1 API provider; `opencode/ring-2.6.1t` (scaffolded)
- **Release / knowledge:** Released May 8, 2026
- **IDs:** `opencode/ring-2.6.1t` (scaffolded per meta.json)
- **Context window:** 262,144 total — per AA; meta.json says 128K
- **Modalities:** Text in/out; reasoning yes
- **Pricing (as of 2026-10-08):** $0.30 per 1M input tokens, $2.50 per 1M output tokens
- **Architecture:** 1T total parameters, 63B active (MoE); MIT license

### Raw benchmarks found

> No BenchLM overall score (unranked). AA Intelligence Index 17* (#64/117 open-weight 1T+ class).

Agent / tool use:

- GDPval-AA: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **17*** (estimated, #64/117 open-weight large reasoning)
- AA-GPQA Diamond: no verified public score found

Coding:

- SWE-bench: no verified public score found
- LiveCodeBench: no verified public score found

Long context:

- no long-context retrieval benchmark reported

### Normalized scores (1–100)

- **Tool use: 30/100.** No direct agentic benchmarks published; inferred from intelligence level.
- **Reasoning: 47/100.** AA Intelligence Index 17* places it below average (#64/117). II+30 adjustment: 17+30=47.
- **Context window: 95/100.** 262K tokens per AA (AA reports 262K, meta says 128K; AA is authoritative).
- **Multimodal: 15/100.** Text-only model per meta.json; 15 per methodology.
- **Coding: 25/100.** No coding benchmarks published; inferred from low benchmark coverage.
- **Cost efficiency: 42/100.** $0.30/$2.50 is somewhat expensive for a 63B active MoE model.
- **Overall Score: 42.4/100.** Mean of five quality dims (30+47+95+15+25)/5 = 42.4, rounds to 34. Best-fit use case: legacy open-weight large reasoning model; use Ling 3.0 series instead.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1:free)** — 2026-10-08
- Method: public internet research via Artificial Analysis; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.

---
