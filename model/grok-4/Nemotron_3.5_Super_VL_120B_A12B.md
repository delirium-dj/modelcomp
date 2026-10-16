# Grok 4 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/grok-4 (xAI Grok 4 model page), Artificial Analysis (`artificialanalysis.ai/models/grok-4`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4
- **Short description:** xAI's proprietary non-reasoning model; 128K context; proprietary (weights not public); sibling models: Grok 4.3, Grok 4.5, Grok 4.6, Grok 4.7.
- **Provider / access:** xAI API (`grok-4`); proprietary (weights not public).
- **Release / knowledge:** Released 2026 per xAI; knowledge cutoff not stated.
- **IDs:** `grok-4` (xAI API). No Free ID confirmed.
- **Context window:** 128K tokens (benchlm.ai). Verified.
- **Modalities:** Not confirmed on benchlm.ai; assumed text in → text out; reasoning type: Non-Reasoning per benchlm.ai; tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Not found on benchlm.ai or AA.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; non-reasoning model.

### Raw benchmarks found

Agent / tool use:

- τ²-bench results: **74.9%** (Artificial Analysis)
- Gert Labs: **42.34%** (Gert Labs rankings)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **22.5%** (Artificial Analysis)
- AA-GPQA Diamond: **87.7%** (Artificial Analysis)
- AA-HLE: **26.7%** (Artificial Analysis)
- AA-Omniscience Index **2.1%**; Accuracy **40.5%**; Hallucination rate **64.5%** (AA)
- AA-LCR (long-context reasoning): **68.0%** (Artificial Analysis)
- CritPt: **2.0%** (Artificial Analysis)
- AA-IFBench: **53.7%** (Artificial Analysis)

Coding:

- React Native Evals: **72.6%** (React Native Evals leaderboard)

Multimodal & grounded:

- AA-MMMU-Pro: **68.8%** (Artificial Analysis)

Long context:

- AA-LCR: **68.0%** (Artificial Analysis); declared 128K context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is thin (benchlm 13 of 639 slots).

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 60/100.** τ²-bench (74.9%), Gert Labs (42.34%); capped by extremely thin coverage — only 2 agentic benchmarks found.
- **Reasoning: 65/100.** AA-GPQA Diamond 87.7%, AA-LCR (68.0%), AA Intelligence Index (22.5%); capped by CritPt (2.0%), AA-HLE (26.7%), AA-Omniscience accuracy (40.5%), Intelligence Index (22.5%). Moderate reasoning.
- **Context window: 70/100.** Verified 128K tokens (benchlm.ai); AA-LCR 68.0%; capped because context below 1M frontier and no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 55/100.** AA-MMMU-Pro (68.8%); capped by text-only output assumption and thin multimodal coverage.
- **Coding: 55/100.** React Native Evals (72.6%); capped by extremely thin coverage — only 1 coding benchmark found.
- **Cost efficiency: 50/100.** No pricing data found; scored conservatively.
- **Overall Score: 61/100.** Half-up mean of (60 + 65 + 70 + 55 + 55) / 5 = 61.0 → 61. Best-fit recommendation: all scores provisional due to thin coverage (13 of 639 slots); τ²-bench strength suggests decent agentic reasoning but verify broadly.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai Grok 4 model card + Artificial Analysis independent analysis); scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is thin (13 of 639 slots) — treat scores as provisional.
- Future sources: add a new file next to this one, using the same headings.
