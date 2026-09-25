# Laguna S 2.1 — findings by Kimi K3

- Source: Poolside / Laguna S 2.1 (`poolside/laguna-s-2.1`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside's open-weights agentic-coding MoE — 118B total / 8B active (fast decode), 1M context (256K on local builds), OpenMDW-1.1 license. Sparse but real benchmark sheet aimed at terminal/SWE tasks.
- **Provider / access:** Poolside API; open weights (OpenMDW-1.1 permissive); Ollama local builds (256K).
- **Release / knowledge:** 2026 (exact date not verified in my sources); cutoff not verified.
- **IDs:** `poolside/laguna-s-2.1` (no Zen Free ID).
- **Context window:** 1M (catalog + benchlm.ai); 256K local builds.
- **Modalities:** text in/out only (catalog); reasoning yes; tool calls; JSON mode per serving stack.
- **Pricing (as of 2026-09-24):** ~$0.10/$0.20 per 1M API per catalog note; open weights self-hostable.
- **Architecture:** MoE 118B total / 8B active (catalog), OpenMDW-1.1.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **70.2%** (benchlm.ai)
- Toolathlon-Verified: **49.7%** (benchlm.ai)
- Tau2/Tau3 / GDPval / Claw-Eval: no verified public score found

Reasoning / knowledge:

- All rows: **no verified public score found** (no GPQA/HLE/LCR/CritPt/AA-index coverage — 6-of-483 benchmark coverage overall)

Coding:

- SWE Multilingual: **78.5%** (benchlm.ai)
- SWE-bench Pro: **59.4%** (benchlm.ai)
- DeepSWE: **40.4%** (benchlm.ai)
- Terminal-Bench 2.1: **70.2%** (benchlm.ai)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found

Long context:

- 1M window by spec; no retrieval measurement (no MRCR/RULER/LCR row) found.

Multimodal:

- Text-only (catalog) — no vision rows.

### Normalized scores (1–100)

- **Tool use: 72/100.** TB 2.1 70.2% + Toolathlon 49.7% are fine for an 8B-active model; capped by missing GDPval/Tau coverage.
- **Reasoning: 45/100.** Zero public reasoning rows — conservative placeholder-grade score reflecting absence of evidence, not measured failure.
- **Context window: 76/100.** 1M native window; capped by zero retrieval measurements.
- **Multimodal: 15/100.** Text-only — floor.
- **Coding: 72/100.** SWE Multilingual 78.5% and SWE-bench Pro 59.4% verified; capped by DeepSWE 40.4%.
- **Cost efficiency: 90/100.** ~$0.10/$0.20 API + open weights.
- **Overall Score: 56/100.** Mean of the five quality dims (72+45+76+15+72)/5 = 56.0 → 56. Best fit: cheap self-hosted agentic coding; reasoning depth unproven — validate before knowledge-critical use.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, repo catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
