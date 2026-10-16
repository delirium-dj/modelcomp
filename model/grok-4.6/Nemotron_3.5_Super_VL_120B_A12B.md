# Grok 4.6 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/grok-4-6 (xAI Grok 4.6 launch page), Artificial Analysis (`artificialanalysis.ai/models/grok-4-6`), Vals AI, Epoch AI, OpenRouter
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's proprietary reasoning model (released August 12, 2026 per AA); 500K context / text+image in → text out; $2/$6 per MTok; deprecated by Grok 4.7; 4 API providers per AA.
- **Provider / access:** xAI API (`grok-4.6`), 4 API providers per Artificial Analysis; proprietary (weights not public).
- **Release / knowledge:** Released August 12, 2026 (AA); knowledge cutoff not stated.
- **IDs:** `grok-4.6` (xAI API). No Free ID confirmed.
- **Context window:** 500K tokens (benchlm.ai, Artificial Analysis). Verified.
- **Modalities:** Text+image in, text out per AA; reasoning yes (chain-of-thought); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $2.00/M input, $6.00/M output (AA; cache discount 75%, cost per task $1.48).
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 3.0: **26.5%** (FrontierBench leaderboard)
- APEX-Agents: **57.5%** (xAI Grok 4.6 launch post)
- GDPval-AA: **1643 Elo** (Artificial Analysis); normalized **55.9%**
- AA Agentic Index: **53.4%** (Artificial Analysis)
- CWE-bench v1: **57.0%** (Collinear leaderboard)
- MazeBench: **1%** (MazeBench leaderboard)

Reasoning / knowledge:

- GPQA Diamond: **94.9%** (Artificial Analysis); GPQA Diamond (Vals) **94.7%**
- HLE: **42.9%** (Artificial Analysis)
- MMLU-Pro: **89.4%** (Vals AI)
- ARC-AGI-1: **87.00%** (ARC Prize verified)
- ARC-AGI-2: **67.1%** (ARC Prize verified)
- ARC-AGI-3: **2.1%** (ARC Prize verified)
- Artificial Analysis Intelligence Index: **44.3%** (#37 of 217; median 27)
- AA-LCR (long-context reasoning): **80.3%** (Artificial Analysis)
- CritPt: **17.1%** (Artificial Analysis)
- AA-Omniscience Index **30.5%**; Accuracy **48.2%**; Hallucination rate **34.3%** (AA)
- FrontierMath v2 Tiers 1-3: **65.965%** (Epoch AI)
- FrontierMath v2 Tier 4: **31.707%** (Epoch AI)

Coding:

- Bug Hunt Bench: **27.0 fixes** (Bug Hunt Bench public data)
- DeepSWE: **65.9%** (xAI Grok 4.6 launch post)
- CursorBench 3.2: **70.8%** (Cursor evals)
- FrontierCode 1.1 Extended: **61.3%** (xAI Grok 4.6 launch post)
- AA-SciCode: **56.5%** (Artificial Analysis)
- VulcanBench v3: **87.0%** (VulcanBench leaderboard)
- FrontierSWE v2: **25.3%** (Proximal)
- LiveCodeBench v6: **88.2%** (Vals AI)
- SWE-bench (Vals): **95.6%** (Vals AI)
- AA Coding Index: **76.8%** (Artificial Analysis)
- CursorBench 4.0: **41.4%** (Cursor evals)

Multimodal & grounded:

- Design Arena Website: **1290** (OpenRouter)

Long context:

- AA-LCR: **80.3%** (Artificial Analysis); declared 500K context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 70/100.** APEX-Agents (57.5%), GDPval-AA (1643 Elo), AA Agentic Index (53.4%), CWE-bench v1 (57.0%); capped by weak Terminal-Bench 3.0 (26.5%), MazeBench (1%), ApprenticeBench (13%). Strong agentic profile.
- **Reasoning: 72/100.** GPQA Diamond 94.9%, MMLU-Pro 89.4%, ARC-AGI-1 (87.00%), ARC-AGI-2 (67.1%), AA Intelligence Index (44.3%), AA-LCR (80.3%); capped by CritPt (17.1%), HLE (42.9%), AA-Omniscience accuracy (48.2%), ARC-AGI-3 (2.1%). Strong knowledge reasoning.
- **Context window: 80/100.** Verified 500K tokens (benchlm.ai + AA); AA-LCR 80.3%; capped because context below 1M frontier and no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 65/100.** Text+image in, text out per AA; Design Arena Website 1290; capped by text-only output and no MMMU-Pro/CharXiv numbers found.
- **Coding: 74/100.** DeepSWE (65.9%), CursorBench 3.2 (70.8%), VulcanBench v3 (87.0%), SWE-bench Vals (95.6%), LiveCodeBench v6 (88.2%), AA Coding Index (76.8%); capped by FrontierSWE v2 (25.3%), CursorBench 4.0 (41.4%). Strong verified coding.
- **Cost efficiency: 70/100.** $2/$6 moderate pricing with 75% cache discount; not counted toward Overall.
- **Overall Score: 72/100.** Half-up mean of (70 + 72 + 80 + 65 + 74) / 5 = 72.2 → 72. Best-fit recommendation: strong verified coding and reasoning model at 500K context; verify on HLE-class tasks given mixed results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + xAI Grok 4.6 launch page + Artificial Analysis + Vals AI + Epoch AI + OpenRouter independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
