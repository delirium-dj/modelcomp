# Grok 4.3 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/grok-4-3 (xAI Grok 4.3 model page), Artificial Analysis (`artificialanalysis.ai/models/grok-4-3`), Vals AI, Epoch AI, OpenRouter
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's proprietary reasoning model (released April 30, 2026 per AA); deprecated by Grok 4.5; 1M context / text+image in → text out; $1.25/$2.50 per MTok; 3 API providers per AA.
- **Provider / access:** xAI API (`grok-4.3`), 3 API providers per Artificial Analysis; proprietary (weights not public).
- **Release / knowledge:** Released April 30, 2026 (AA); knowledge cutoff not stated.
- **IDs:** `grok-4.3` (xAI API). No Free ID confirmed.
- **Context window:** 1M tokens (benchlm.ai, Artificial Analysis). Verified.
- **Modalities:** Text+image in, text out per AA; reasoning yes (chain-of-thought); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $1.25/M input, $2.50/M output (AA; cache discount 84%, blended rate $0.64).
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- τ²-bench results: **97.7%** (Artificial Analysis)
- GDPval-AA: **1018 Elo** (Artificial Analysis); normalized **29.2%**
- AA Agentic Index: **17.2%** (Artificial Analysis)
- ResearchClawBench: **12.4%** (ResearchClawBench leaderboard)
- Terminal-Bench 2.1 (Vals): **41.9%** (Vals AI)

Reasoning / knowledge:

- GPQA: **90.1%** (Artificial Analysis); AA-GPQA Diamond **90.1%**; GPQA Diamond (Vals) **91.4%**
- HLE: **35%** (Artificial Analysis); AA-HLE **37.2%**
- MMLU-Pro: **85.8%** (Vals AI)
- Artificial Analysis Intelligence Index: **37.6%** (#123 of 216; median 27)
- AA-LCR (long-context reasoning): **64.3%** (Artificial Analysis)
- CritPt: **8.0%** (Artificial Analysis)
- AA-Omniscience Index **18.0%**; Accuracy **34.6%**; Hallucination rate **25.0%** (AA)
- IFBench: **81.3%** (Artificial Analysis)
- FrontierMath v2 Tiers 1-3: **42.807%** (Epoch AI)
- FrontierMath v2 Tier 4: **14.634%** (Epoch AI)

Coding:

- SciCode: **47.3%** (Artificial Analysis); AA-SciCode **48.3%**
- LiveCodeBench v6: **84.5%** (Vals AI)
- SWE-bench (Vals): **71.4%** (Vals AI)
- AA Coding Index: **42.3%** (Artificial Analysis)

Multimodal & grounded:

- MMMU-Pro: **78.1%** (Artificial Analysis); AA-MMMU-Pro **78.1%**
- Design Arena Website: **1198** (OpenRouter)

Long context:

- AA-LCR: **64.3%** (Artificial Analysis); declared 1M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 45/100.** τ²-bench (97.7%), GDPval-AA (1018 Elo); capped by weak AA Agentic Index (17.2%), GDPval-AA normalized (29.2%), ResearchClawBench (12.4%), Terminal-Bench 2.1 Vals (41.9%). Moderate agentic tool-use profile.
- **Reasoning: 68/100.** GPQA 90.1%, MMLU-Pro 85.8%, AA Intelligence Index (37.6%), AA-LCR (64.3%), FrontierMath T1-3 (42.807%); capped by CritPt (8.0%), HLE (35%), AA-Omniscience accuracy (34.6%). Strong knowledge reasoning.
- **Context window: 88/100.** Verified 1M tokens (benchlm.ai + AA); AA-LCR 64.3%; capped because no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 70/100.** Text+image in, text out per AA; MMMU-Pro (78.1%), AA-MMMU-Pro (78.1%), Design Arena Website 1198; capped by text-only output.
- **Coding: 58/100.** LiveCodeBench v6 (84.5%), SWE-bench Vals (71.4%), AA-SciCode (48.3%); capped by AA Coding Index (42.3%). Moderate verified coding.
- **Cost efficiency: 90/100.** $1.25/$2.50 competitive pricing with 84% cache discount; not counted toward Overall.
- **Overall Score: 66/100.** Half-up mean of (45 + 68 + 88 + 70 + 58) / 5 = 65.8 → 66. Best-fit recommendation: strong GPQA/MMLU-Pro reasoning at 1M context with very competitive pricing; verify on HLE-class and agentic coding tasks given mixed results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + xAI Grok 4.3 model page + Artificial Analysis + Vals AI + Epoch AI + OpenRouter independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
