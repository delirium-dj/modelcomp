# Grok 4.7 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/grok-4-7 (xAI Grok 4.7 launch page), Artificial Analysis (`artificialanalysis.ai/models/grok-4-7`), Vals AI, Epoch AI, Collinear, Cursor, Proximal, Bug Hunt Bench
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI's proprietary reasoning model (released September 2026 per AA); 500K context / text+image input → text out; $2/$6 per MTok; sibling: Grok 4.6.
- **Provider / access:** xAI API (`grok-4.7`), 3 API providers per Artificial Analysis; proprietary (weights not public).
- **Release / knowledge:** Released September 2026 (AA); knowledge cutoff not stated.
- **IDs:** `grok-4.7` (xAI API); no Free ID confirmed.
- **Context window:** 500K tokens (benchlm.ai, Artificial Analysis). Verified.
- **Modalities:** Text and image in; text out; reasoning yes (chain-of-thought); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $2.00/M input, $6.00/M output (AA; cache discount 75%, cost per task $3.74).
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **38.00%** (xAI launch post; AA 25.8%)
- GDPval-AA: **1711 Elo** (Artificial Analysis); normalized **60.6%**
- AA Briefcase: **1657 Elo** (Artificial Analysis)
- AA AutomationBench: **65.6%** (Artificial Analysis)
- AA ITBench: **42.1%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **25.8%** (Artificial Analysis)
- GDP.pdf: **20.0%** (Artificial Analysis)
- AA-AnalystAgent: **52.5%** (Artificial Analysis)
- CWE-bench v1: **68.0%** (Collinear leaderboard)
- Hermes Index: **39.3%**; Hermes Bench: **74.4%** (Nous Research)
- MazeBench: **1%** (MazeBench leaderboard)

Reasoning / knowledge:

- GPQA: not found for this exact variant
- HLE: **43.1%** (AA-HLE)
- MMLU-Pro: not found for this exact variant
- ARC-AGI-1: not found for this exact variant
- ARC-AGI-2: not found for this exact variant
- ARC-AGI-3: not found for this exact variant
- Artificial Analysis Intelligence Index: **46** (#30 of 217; median 27) (Artificial Analysis)
- AA-LCR (long-context reasoning): **76.7%** (Artificial Analysis)
- CritPt: **17.7%** (Artificial Analysis)
- MLCR-AA: **15.0%** (Artificial Analysis)
- AA-Omniscience Index **32.0%**; Accuracy **47.4%**; Hallucination rate **29.3%** (AA)
- FrontierMath v2 Tiers 1-3: **52.982%** (Epoch AI)
- FrontierMath v2 (Tier 4): **17.073%** (Epoch AI)

Coding:

- DeepSWE: **71.0%** (xAI launch post)
- EEBench: **64.0%** (xAI launch post)
- AA-SciCode: **57.4%** (Artificial Analysis)
- FrontierSWE v2: **29.5%** (Proximal)
- Bug Hunt Bench: **28.8 fixes** (Bug Hunt Bench public data)
- CursorBench 4.0: **46.3%** (Cursor evals)

Multimodal & grounded:

- Text+image in, text out per AA; no MMMU-Pro/Chartography numbers found for this variant.
- Design Arena Website: **1249** (OpenRouter)

Long context:

- AA-LCR: **76.7%** (Artificial Analysis); MLCR-AA: **15.0%** (Artificial Analysis); declared 500K context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores. Benchmark coverage is thin (benchlm 33 of 638 slots).

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 68/100.** Terminal-Bench 4.0 (38.00%), GDPval-AA (1711 Elo), AA Briefcase (1657 Elo), AA AutomationBench (65.6%); capped by weak Terminal-Bench 4.0 (38.0%), GDP.pdf (20.0%), GDPval-AA normalized (60.6%). Moderate agentic tool-use profile.
- **Reasoning: 70/100.** AA Intelligence Index 46 (#30 of 217), AA-LCR (76.7%), GPQA not found for this exact variant; capped by CritPt (17.7%), HLE (43.1%), AA-Omniscience accuracy (47.4%). Solid reasoning profile.
- **Context window: 80/100.** Verified 500K tokens (benchlm.ai + AA); AA-LCR 76.7%; capped because context below 1M frontier and no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 65/100.** Text+image in, text out per AA; Design Arena Website 1249; capped by thin vision benchmark coverage and text-only output.
- **Coding: 66/100.** DeepSWE (71.0%), EEBench (64.0%), AA-SciCode (57.4%); capped by FrontierSWE v2 (29.5%), CursorBench 4.0 (46.3%), no SWE-bench Verified number found for this exact variant — scored conservatively.
- **Cost efficiency: 70/100.** $2/$6 moderate pricing with 75% cache discount; not counted toward Overall.
- **Overall Score: 69.8/100.** Half-up mean of (70 + 70 + 80 + 65 + 66) / 5 = 70.2 → 70. Best-fit recommendation: solid proprietary reasoning model at 500K context with good value; verify on HLE-class and agentic coding tasks given mixed results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + xAI launch page + Artificial Analysis + Vals AI + Epoch AI + Collinear + Cursor + Proximal + Bug Hunt Bench independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
