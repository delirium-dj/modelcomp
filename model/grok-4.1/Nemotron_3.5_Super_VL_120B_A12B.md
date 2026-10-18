# Grok 4.1 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: waitwhichmodel.fyi, benchgap, xAI docs
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** xAI's proprietary multimodal model, released Nov 2025; took top LMArena spot at launch; better factuality and emotional register than Grok 4; superseded by Grok 4.20 and later.
- **Provider / access:** xAI API; proprietary, weights not released. API model strings not researched. No Free ID on Zen (noFreeId: true).
- **Release / knowledge:** Released November 17, 2025 (waitwhichmodel.fyi); knowledge cutoff November 2024.
- **IDs:** `grok-4.1` (xAI API, per waitwhichmodel.fyi "not researched" for exact API string). Parameter count not publicly disclosed.
- **Context window:** 256K tokens (waitwhichmodel.fyi); max output 64K tokens.
- **Modalities:** Multimodal (text + image input, text output per waitwhichmodel.fyi); no specific reasoning controls listed.
- **Pricing (as of 2026-10-17):** $3.00 input / $15.00 output per 1M tokens (waitwhichmodel.fyi).
- **Architecture:** Proprietary — parameter count and architecture not disclosed by xAI.

### Raw benchmarks found

Agent / tool use:
- OSWorld-Verified: **61.7% estimated ±5.5 pp** (benchgap, low confidence)
- OSWorld 2.0: **7.2% estimated ±5.1 pp** (benchgap, low confidence)
- Toolathlon: **17.3% estimated ±6.9 pp** (benchgap, low confidence)
- BrowseComp: **44.1% estimated ±6.0 pp** (benchgap, low confidence)
- DeepSearchQA: **72.6% estimated ±10.2 pp** (benchgap, low confidence)
- ResearchClawBench: **13.5% measured** (benchgap)
- Claw-Eval: **55.4% estimated ±3.2 pp** (benchgap, high confidence)
- MCP Atlas: **38.6% estimated ±13.5 pp** (benchgap, low confidence)
- GDPval-AA: **26.8% estimated ±8.3 pp** (benchgap, low confidence)
- AA Agentic Index: **15.5% estimated ±6.8 pp** (benchgap, medium confidence)
- Gert Labs: **48.3% estimated ±8.5 pp** (benchgap, low confidence)

Reasoning / knowledge:
- GPQA Diamond: **88%** (waitwhichmodel.fyi, launch-time reported)
- LMArena Elo: **1483** (waitwhichmodel.fyi, launch-time reported)
- MMLU-Pro: not reported (—)
- SWE-bench Verified: not reported (—)
- SWE-bench Pro: not reported (—)
- Terminal-Bench 2.1: not reported (—)
- AIME (latest): not reported (—)
- HLE: not reported (—)
- ARC-AGI-2: not reported (—)

Coding:
- SWE-bench: not independently reported for Grok 4.1
- DeepSWE: not reported

Long context:
- 256K context window declared; no public retrieval score measured at full window.

Multimodal:
- MMMU: not reported
- Text + image input per waitwhichmodel.fyi; limited independent multimodal benchmark data.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 50/100.** Very thin tool-use benchmark coverage — ResearchClawBench (13.5% measured), Claw-Eval (55.4% estimated), OSWorld-Verified (61.7% estimated). Capped by extremely limited data.
- **Reasoning: 65/100.** GPQA Diamond (88%) is solid; LMArena Elo 1483 indicates strong chat performance. Capped by lack of HLE, ARC-AGI, and other reasoning benchmarks; GDPval-AA (26.8% estimated) is weak.
- **Context window: 75/100.** Declared 256K context; below 1M frontier models; no public retrieval score at full window.
- **Multimodal: 45/100.** Multimodal per waitwhichmodel.fyi but virtually no independent multimodal benchmark scores found.
- **Coding: 45/100.** No SWE-bench, LiveCodeBench, or other coding benchmarks independently reported for Grok 4.1. Very thin coding coverage.
- **Cost efficiency: 45/100.** $3.00/$15.00 per 1M — expensive tier. Not counted toward Overall.
- **Overall Score: 56/100.** Half-up mean of (50 + 65 + 75 + 45 + 45) / 5 = 56.0 → 56. Best-fit recommendation: scores highly provisional due to extremely thin independent benchmark coverage (only 1 measured benchmark on benchgap); GPQA Diamond 88% and LMArena 1483 suggest decent capability but verify broadly before production use.

### Conflicts vs existing meta.json / queued average

- meta.json for this folder needs to be checked separately.
- Benchmark coverage is extremely thin: benchgap lists only 1 measured score (ResearchClawBench 13.5%) and 11 estimated scores; waitwhichmodel.fyi reports only 2 benchmarks (GPQA Diamond 88%, LMArena 1483).
- No SWE-bench, LiveCodeBench, HLE, or other major benchmarks independently reported for Grok 4.1.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-17
- Method: public internet research (waitwhichmodel.fyi + benchgap aggregator + xAI docs); scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is extremely thin — treat all scores as highly provisional.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.