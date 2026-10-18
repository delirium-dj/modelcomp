# Kimi K2.7 Code HighSpeed — findings by Nemotron 3.5 Super VL 120B A12B

- Source: Kimi API Platform docs (platform.kimi.ai), benchgap, Vals AI
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.7 Code HighSpeed
- **Short description:** Moonshot AI's dedicated coding model with high-speed variant (~180 tok/s output, up to 260 tok/s short context); strong long-horizon coding and agentic capabilities; 256K context; open weights.
- **Provider / access:** Kimi API (`kimi-k2.7-code-highspeed`, OpenAI-compatible); Moonshot AI. Open weights per Vals AI. No Free ID on Zen.
- **Release / knowledge:** Released June 12, 2026 (Vals AI).
- **IDs:** `kimi-k2.7-code-highspeed` (Kimi API), `kimi-k2.7-code` (base variant).
- **Context window:** 256K tokens (official Kimi docs); 262k per Vals AI; max output 256K tokens per Vals AI.
- **Modalities:** Text, image, and video input; text output; reasoning model (no non-thinking mode; thinking enabled by default); tool calls supported; JSON mode (response_format) supported; fixed temperature 1.0, top_p 0.95, n 1.
- **Pricing (as of 2026-10-17):** $0.95 input / $4.00 output per 1M tokens (Vals AI).
- **Architecture:** Proprietary — parameter count not disclosed by Moonshot AI. Open weights available.

### Raw benchmarks found

Agent / tool use:
- SWE-bench Verified: **76.3% estimated ±4.4 pp** (benchgap, high confidence); **78.20%** (Vals AI) — conflict
- SWE-bench Pro: **54.8% estimated ±4.5 pp** (benchgap, high confidence)
- Terminal-Bench 2.1: **82.6% estimated ±6.9 pp** (benchgap, medium confidence); **67.04%** (Vals AI) — major conflict
- Toolathlon-Verified: **51.5% estimated ±2.3 pp** (benchgap, low confidence)
- BrowseComp: **78.9% estimated ±8.1 pp** (benchgap, medium confidence)
- CyberGym: **62.8% estimated ±5.3 pp** (benchgap, low confidence)
- OSWorld-Verified: **69.5% estimated ±8.1 pp** (benchgap, medium confidence)
- DeepSearchQA: **85.8% estimated ±4.5 pp** (benchgap, high confidence)

Reasoning / knowledge:
- GPQA Diamond: **89.5% estimated ±2.6 pp** (benchgap, high confidence); AA-GPQA Diamond **89.6% measured**
- HLE: **42.5% estimated ±9.3 pp** (benchgap, medium confidence); AA-HLE **35.0% measured**
- CritPt: **10.0% measured** (benchgap)
- ARC-AGI-1: **77.1% estimated ±5.4 pp** (benchgap, medium confidence)
- ARC-AGI-2: **37.0% estimated ±14.2 pp** (benchgap, low confidence)
- AA Intelligence Index: **25.8** (Artificial Analysis, measured)
- AA-Omniscience Accuracy: **39.6% measured** (benchgap)
- GDPval-AA: **26.9% measured** (benchgap)
- AA-LCR: **79.3% measured** (benchgap)
- AIME26: **95.9% estimated ±1.2 pp** (benchgap, medium confidence)

Coding:

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):** Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`. **NEVER include Cost efficiency** — scored independently.

- **Tool use: 75/100.** Strong on SWE-bench Verified (76.3-78.2%), Terminal-Bench 2.1 (67.0-82.6%), BrowseComp (78.9 est), DeepSearchQA (85.8 est). Capped by weaker CyberGym (62.8 est) and AutomationBench (29.7 est).
- **Reasoning: 76/100.** Strong on GPQA Diamond (89.5 est / 89.6 measured), ARC-AGI-1 (77.1 est), AIME26 (95.9 est), AA-LCR (79.3 measured). Capped by weak HLE (35.0-42.5%), ARC-AGI-2 (37.0 est), CritPt (10.0 measured).
- **Context window: 85/100.** Verified 256K context (official docs + Vals AI + benchgap). Below 1M frontier models; no public retrieval score at full window.
- **Multimodal: 55/100.** Text + image + video input per official docs, but limited independent multimodal benchmark data found. Capped by thin multimodal coverage.
- **Coding: 80/100.** Strong on LiveCodeBench v6 (82.05-86.8%), SWE-bench Verified (76.3-78.2%), ProgramBench (53.6 measured). Capped by weaker DeepSWE (34.7 est) and SWE-bench Pro (54.8 est).
- **Cost efficiency: 75/100.** $0.95/$4.00 per 1M — mid-range pricing; open weights reduce self-host cost. Not counted toward Overall.
- **Overall Score: 74/100.** Half-up mean of (75 + 76 + 85 + 55 + 80) / 5 = 74.2 → 74. Best-fit recommendation: a strong open-weights coding agent model with excellent long-context support; verify on HLE-class reasoning and multimodal tasks before production reliance.

### Conflicts vs benchgap vs Vals AI

- SWE-bench Verified: benchgap estimates 76.3% vs Vals AI reports 78.20% — minor conflict
- LiveCodeBench v6: benchgap estimates 86.8% vs Vals AI reports 82.05% — conflict
- Terminal-Bench 2.1: benchgap estimates 82.6% vs Vals AI reports 67.04% — major conflict, likely due to different evaluation configurations

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-17
- Method: public internet research (official Kimi API docs + benchgap aggregator + Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Nemotron_3.5_Super_VL_120B_A12B.md`, using the same headings.
- LiveCodeBench v6: **86.8% estimated ±2.4 pp** (benchgap, low confidence); **82.05%** (Vals AI) — conflict
- DeepSWE: **34.7% estimated ±6.4 pp** (benchgap, low confidence)
- SWE-Rebench: **58.1% estimated ±8.9 pp** (benchgap, low confidence)
- ProgramBench: **53.6% measured** (benchgap)

Long context:
- AA-LCR: **79.3% measured** (benchgap)
- LongBench v2: **62.5% estimated ±5.8 pp** (benchgap, low confidence)
- 256K context verified; no public retrieval score measured at full window.

Multimodal:
- Text + image + video input per official docs; limited independent multimodal benchmark data found.