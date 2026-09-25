# Laguna XS 2.1 — findings by Kimi K3

- Source: Poolside / Laguna XS 2.1 (`laguna-xs-2.1`; HF `poolside/Laguna-XS-2.1`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna XS 2.1
- **Short description:** Poolside's smallest Laguna-2.1 coding variant — open weights; verified SWE-bench Verified 70.9% at 262K context, but a very thin public evaluation sheet overall.
- **Provider / access:** Poolside API; open weights (HF `poolside/Laguna-XS-2.1`).
- **Release / knowledge:** 2026 (exact date not verified); cutoff not verified.
- **IDs:** `poolside/laguna-xs-2.1` (no Zen Free ID verified).
- **Context window:** 262K tokens (benchlm.ai); max output not verified.
- **Modalities:** text in/out; reasoning yes; tool calls; JSON mode per serving stack.
- **Pricing (as of 2026-09-24):** open weights; Poolside hosted pricing unverified.
- **Architecture:** open-weight (Poolside Laguna XS class); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **37.5%** (benchlm.ai)
- All other agentic rows: no verified public score found

Reasoning / knowledge:

- All rows: no verified public score found (no GPQA/HLE/LCR/AA indices at this ID)

Coding:

- SWE-bench Verified: **70.9%** (benchlm.ai)
- SWE Multilingual: **63.1%** (benchlm.ai)
- SWE-bench Pro: **47.6%** (benchlm.ai)
- Terminal-Bench 2.0: **37.5%** (benchlm.ai)
- LiveCodeBench / SciCode / DeepSWE: no verified public score found

Long context:

- 262K window by spec; no retrieval measurement found.

Multimodal:

- Text-only — no vision rows.

### Normalized scores (1–100)

- **Tool use: 45/100.** TB 2.0 37.5% plus SWE competence; capped by near-zero agentic coverage.
- **Reasoning: 40/100.** No public reasoning rows — conservative estimate; capped by absent evidence.
- **Context window: 68/100.** 262K window; no retrieval measurements.
- **Multimodal: 15/100.** Text-only — floor.
- **Coding: 68/100.** SWE-bench Verified 70.9% is the standout; capped by SWE-bench Pro 47.6% and TB 2.0 37.5%.
- **Cost efficiency: 88/100.** Open weights; small-variant hosting very cheap (provisional).
- **Overall Score: 47/100.** Mean of the five quality dims (45+40+68+15+68)/5 = 47.2 → 47. Best fit: minimal-footprint self-hosted SWE agents; too unmeasured elsewhere for general use.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, HF model card reference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
