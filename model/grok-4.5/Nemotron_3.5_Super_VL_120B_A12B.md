# Grok 4.5 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/grok-4-5 (xAI Grok 4.5 launch page), Artificial Analysis (`artificialanalysis.ai/models/grok-4-5`), Vals AI, Epoch AI, OpenRouter
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's proprietary reasoning model (released July 8, 2026 per AA); 500K context / text+image in → text out; $2/$6 per MTok; deprecated by Grok 4.6; 2 API providers per AA.
- **Provider / access:** xAI API (`grok-4.5`), 2 API providers per Artificial Analysis; proprietary (weights not public).
- **Release / knowledge:** Released July 8, 2026 (AA); knowledge cutoff not stated.
- **IDs:** `grok-4.5` (xAI API). No Free ID confirmed.
- **Context window:** 500K tokens (benchlm.ai, Artificial Analysis). Verified.
- **Modalities:** Text+image in, text out per AA; reasoning yes (chain-of-thought); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $2.00/M input, $6.00/M output (AA; cache discount 85%, cost per task $0.88).
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 3.0: **15.7%** (FrontierBench leaderboard)
- Terminal-Bench 2.1: **83.3%** (xAI Grok 4.5 launch post; Vals AI 67.8%)
- GDPval-AA: **1430 Elo** (Artificial Analysis); normalized **44.2%**
- AA Agentic Index: **42.1%** (Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond: **93.1%** (Artificial Analysis); GPQA Diamond (Vals) **92.9%**
- HLE: **42.7%** (Artificial Analysis)
- MMLU-Pro: **89.2%** (Vals AI)
- ARC-AGI-1: **85.67%** (ARC Prize verified)
- ARC-AGI-2: **52.6%** (ARC Prize official leaderboard)
- ARC-AGI-3: **0.3%** (ARC Prize official leaderboard)
- Artificial Analysis Intelligence Index: **38.8%** (#65 of 216; median 27)
- AA-LCR (long-context reasoning): **79.3%** (Artificial Analysis)
- CritPt: **15.4%** (Artificial Analysis)
- AA-Omniscience Index **25.3%**; Accuracy **51.6%**; Hallucination rate **54.1%** (AA)
- FrontierMath v2 Tiers 1-3: **57.193%** (Epoch AI)
- FrontierMath v2 Tier 4: **24.390%** (Epoch AI)

Coding:

- SWE-bench Pro: **64.7%** (xAI Grok 4.5 launch post)
- SWE Multilingual: **78%** (Cursor)
- CursorBench 3.2: **66.7%** (Cursor evals)
- VulcanBench v3: **89.9%** (VulcanBench v3 Technical Report)
- AA-SciCode: **55.0%** (Artificial Analysis)
- LiveCodeBench v6: **87.4%** (Vals AI)
- SWE-bench (Vals): **86.6%** (Vals AI)
- AA Coding Index: **72.5%** (Artificial Analysis)
- PostTrainBench v1.1: **23.4%** (public leaderboard)

Multimodal & grounded:

- AA-MMMU-Pro: **80.4%** (Artificial Analysis)
- Design Arena Website: **1283** (OpenRouter)

Long context:

- AA-LCR: **79.3%** (Artificial Analysis); declared 500K context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 68/100.** Terminal-Bench 2.1 (83.3%), GDPval-AA (1430 Elo), AA Agentic Index (42.1%); capped by weak Terminal-Bench 3.0 (15.7%), GDPval-AA normalized (44.2%). Moderate agentic tool-use profile.
- **Reasoning: 70/100.** GPQA Diamond 93.1%, MMLU-Pro 89.2%, ARC-AGI-1 (85.67%), ARC-AGI-2 (52.6%), AA Intelligence Index (38.8%), AA-LCR (79.3%); capped by CritPt (15.4%), HLE (42.7%), AA-Omniscience accuracy (51.6%), ARC-AGI-3 (0.3%). Strong knowledge reasoning.
- **Context window: 80/100.** Verified 500K tokens (benchlm.ai + AA); AA-LCR 79.3%; capped because context below 1M frontier and no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 70/100.** Text+image in, text out per AA; AA-MMMU-Pro (80.4%), Design Arena Website 1283; capped by text-only output and no MMMU/CharXiv numbers found.
- **Coding: 70/100.** SWE-bench Pro (64.7%), CursorBench 3.2 (66.7%), VulcanBench v3 (89.9%), SWE-bench Vals (86.6%), LiveCodeBench v6 (87.4%), AA Coding Index (72.5%); capped by PostTrainBench v1.1 (23.4%), SWE Multilingual (78%). Strong verified coding.
- **Cost efficiency: 70/100.** $2/$6 moderate pricing with 85% cache discount; not counted toward Overall.
- **Overall Score: 71.6/100.** Half-up mean of (68 + 70 + 80 + 70 + 70) / 5 = 71.6 → 72. Best-fit recommendation: solid verified coding and reasoning model at 500K context; verify on HLE-class tasks given mixed results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + xAI Grok 4.5 launch page + Artificial Analysis + Vals AI + Epoch AI + OpenRouter independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
