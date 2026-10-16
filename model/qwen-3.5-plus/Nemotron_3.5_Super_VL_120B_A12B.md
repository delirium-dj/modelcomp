# Qwen3.5 Plus — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/qwen3-5-plus (Qwen3.5 Plus model card); no Artificial Analysis page available (404)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen3.5 Plus
- **Short description:** Alibaba's proprietary reasoning model; 1M context; proprietary (weights not public); 2 benchmarks covered on benchlm.ai (very thin coverage).
- **Provider / access:** Qwen API (`qwen3.5-plus`); proprietary (weights not public).
- **Release / knowledge:** Released 2026 per Alibaba; knowledge cutoff not stated.
- **IDs:** `qwen3.5-plus` (Qwen API). No Free ID confirmed.
- **Context window:** 1M tokens (benchlm.ai). Verified.
- **Modalities:** Not confirmed on benchlm.ai; assumed text in → text out based on limited data; reasoning type: Reasoning per benchlm.ai.
- **Pricing (as of 2026-10-16):** Not found on benchlm.ai or AA.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed.

### Raw benchmarks found

Agent / tool use:

- JobBench: **18.5%** (JobBench paper)

Coding:

- Vibe Code Bench: **15.74%** (Vals AI)

Reasoning / knowledge:

- None found beyond benchlm.ai's 2 benchmarks.

Coding:

- Vibe Code Bench: **15.74%** (Vals AI)

Multimodal & grounded:

- None found.

Long context:

- Declared 1M context (benchlm.ai); no public needle-recall score found.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is extremely thin (benchlm 2 of 638 slots).

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 15/100.** JobBench (18.5%); capped by extremely thin coverage — only 1 agentic benchmark found.
- **Reasoning: 15/100.** No reasoning benchmarks found beyond benchlm.ai's 2 covered items; scored conservatively due to zero knowledge/reasoning data points.
- **Context window: 90/100.** Verified 1M tokens (benchlm.ai); capped because no public needle-recall score found.
- **Multimodal: 15/100.** No multimodal benchmarks found; scored conservatively due to zero data.
- **Coding: 20/100.** Vibe Code Bench (15.74%); capped by extremely thin coverage — only 1 coding benchmark found.
- **Cost efficiency: 15/100.** No pricing data found; scored conservatively.
- **Overall Score: 31/100.** Half-up mean of (15 + 15 + 90 + 15 + 20) / 5 = 31.0 → 31. Best-fit recommendation: context window verified at 1M but virtually no other benchmark data available; treat all quality scores as provisional pending broader benchmark coverage.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai Qwen3.5 Plus model card; Artificial Analysis page returned 404); scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is extremely thin (2 of 638 slots) — treat scores as provisional.
- Future sources: add a new file next to this one, using the same headings.
