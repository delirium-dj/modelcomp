# Grok Build 0.1 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/grok-build-0-1 (xAI Grok Build 0.1 model page)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok Build 0.1
- **Short description:** xAI's proprietary non-reasoning model; 256K context / text+in → text out; sibling models: Grok 4, Grok 4.1 Fast, Grok 4 Fast.
- **Provider / access:** xAI API (`grok-build-0.1`); proprietary (weights not public).
- **Release / knowledge:** Released 2026 per xAI; knowledge cutoff not stated.
- **IDs:** `grok-build-0.1` (xAI API). No Free ID confirmed.
- **Context window:** 256K tokens (benchlm.ai). Verified.
- **Modalities:** Not confirmed on benchlm.ai; assumed text in → text out; reasoning type: Non-Reasoning per benchlm.ai; tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Not found on benchlm.ai or AA.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; non-reasoning model.

### Raw benchmarks found

Agent / tool use:

- Gert Labs: **49.15%** (Gert Labs rankings)

Reasoning / knowledge:

- No GPQA, HLE, MMLU-Pro, ARC-AGI, Intelligence Index, or other reasoning/knowledge benchmarks found.

Coding:

- No coding benchmarks found.

Multimodal & grounded:

- No multimodal benchmarks found.

Long context:

- Declared 256K context (benchlm.ai); no public needle-recall score found.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is extremely thin (benchlm 1 of 639 slots).

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 45/100.** Gert Labs (49.15%); capped by extremely thin coverage — only 1 agentic benchmark found.
- **Reasoning: 20/100.** No reasoning benchmarks found; scored conservatively due to zero data.
- **Context window: 75/100.** Verified 256K tokens (benchlm.ai); capped because context below 1M frontier and no public needle-recall score found.
- **Multimodal: 35/100.** No multimodal benchmarks found; capped by text-only output assumption and zero multimodal data.
- **Coding: 25/100.** No coding benchmarks found; scored conservatively due to zero data.
- **Cost efficiency: 50/100.** No pricing data found; scored conservatively.
- **Overall Score: 40/100.** Half-up mean of (45 + 20 + 75 + 35 + 25) / 5 = 40.0 → 40. Best-fit recommendation: all scores provisional due to extremely thin benchmark coverage (1 of 639 slots); treat as placeholder pending broader data.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai xAI Grok Build 0.1 model page; Artificial Analysis page returned 404); scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is extremely thin (1 of 639 slots) — treat all scores as provisional.
- Future sources: add a new file next to this one, using the same headings.
