# Solar Pro 4 — findings by Claude Opus 4.6

- Source: Upstage / Solar Pro 4 (`upstageai/solar-pro-4`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Solar Pro 4
- **Short description:** Upstage's closed agentic flagship with 512K context for docs and tool-calling workflows. Achieves GPQA Diamond 89.0%, LiveCodeBench 87.8%, and GDPval 1277 Elo. Premium proprietary model.
- **Provider / access:** Upstage API `upstageai/solar-pro-4`. No Zen Free ID.
- **Release / knowledge:** Mid-2026 release; knowledge cutoff approximately mid-2026.
- **IDs:** `upstageai/solar-pro-4` (no Free ID)
- **Context window:** 512,000 (512K). Verified via meta.json.
- **Modalities:** Text input/output (modality statement unpublished).
- **Pricing (as of 2026-10-20):** No public rate card found. Proprietary access only.
- **Architecture:** Proprietary. Upstage's flagship closed model. Parameters and architecture not publicly disclosed.

### Raw benchmarks found

Agent / tool use:

- GDPval: **1277 Elo** (meta.json / Upstage report)
- Terminal-Bench 2.1: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **89.0%** (meta.json / Upstage report)

Coding:

- LiveCodeBench: **87.8%** (meta.json / Upstage report)
- SWE-bench Verified: no verified public score found

Long context:

- 512K context. No RULER/MRCR reported.

### Normalized scores (1–100)

- **Tool use: 60/100.** GDPval 1277 Elo suggests strong agentic capability. Built for docs and tool-calling workflows. Capped by lack of Terminal-Bench/BFCL data.
- **Reasoning: 68/100.** GPQA Diamond 89.0% is near-frontier. Strong graduate-level reasoning. Capped by trailing the absolute top (92%+).
- **Context window: 86/100.** 512K per tier mapping (~500K = 85-88). Scored at 86.
- **Multimodal: 15/100.** Modality statement unpublished — assumed text-only. Fixed at 15.
- **Coding: 62/100.** LiveCodeBench 87.8% is strong. No SWE-bench score. Capped by lack of SWE-bench validation.
- **Cost efficiency: 35/100.** No public rate card — premium proprietary pricing assumed. Scored conservatively for opaque pricing.
- **Overall Score: 58/100.** Mean of (60 + 68 + 86 + 15 + 62) / 5 = 58.2 → 58. A strong proprietary flagship with near-frontier reasoning and solid coding. Limited by text-only assumption and opaque pricing. Best for Upstage ecosystem users needing long-context document processing.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-10-20
- Method: Meta.json analysis and Upstage documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
