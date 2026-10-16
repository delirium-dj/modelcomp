# Muse Spark 1.2 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/muse-spark-1-2 (Meta Muse Spark model page), Artificial Analysis (`artificialanalysis.ai/models/muse-spark-1-2`), Vals AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Meta's proprietary reasoning model (released August 5, 2026 per AA); 1M context / text+image+speech+video in → text out; $1.25/$4.25 per MTok; deprecated by Muse Spark 1.3; 2 API providers per AA.
- **Provider / access:** Meta developer API (`muse-spark-1.2`), 2 API providers per Artificial Analysis; proprietary (weights not public).
- **Release / knowledge:** Released August 5, 2026 (AA); knowledge cutoff not stated.
- **IDs:** `muse-spark-1.2` (Meta API). No Free ID confirmed.
- **Context window:** 1M tokens (benchlm.ai, Artificial Analysis). Verified.
- **Modalities:** Text, image, speech, and video in; text out per OpenAI docs; reasoning yes (chain-of-thought); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $1.25/M input, $4.25/M output (AA; cache discount 88%, cost per task $0.97).
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.9%** (Meta Muse Spark model page; Vals AI 69.7%)
- GDPval-AA: **1631 Elo** (Meta Muse Spark model page); normalized **48.6%** (Artificial Analysis)
- AA Agentic Index: **44.0%** (Artificial Analysis)
- MazeBench: **0%** (MazeBench leaderboard)

Reasoning / knowledge:

- GPQA Diamond: **90.4%** (Artificial Analysis)
- HLE: **45.5%** (Artificial Analysis)
- MMLU-Pro: **88.3%** (Vals AI)
- Artificial Analysis Intelligence Index: **39.6%** (#59 of 217; median 27)
- AA-LCR (long-context reasoning): **79.0%** (Artificial Analysis)
- CritPt: **17.7%** (Artificial Analysis)
- AA-Omniscience Index **27.2%**; Accuracy **45.4%**; Hallucination rate **33.3%** (AA)

Coding:

- DeepSWE: **59.3%** (Meta Muse Spark model page)
- AA-SciCode: **57.4%** (Artificial Analysis)
- VulcanBench v3: **87.0%** (VulcanBench Report 19)
- FrontierSWE v2: **12.0%** (Proximal)
- SWE-bench (Vals): **86.6%** (Vals AI)
- AA Coding Index: **72.2%** (Artificial Analysis)

Multimodal & grounded:

- Design Arena Website: **1315** (OpenRouter)

Long context:

- AA-LCR: **79.0%** (Artificial Analysis); declared 1M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 72/100.** Terminal-Bench 2.1 (82.9%), GDPval-AA (1631 Elo), AA Agentic Index (44.0%); capped by weak MazeBench (0%), GDPval-AA normalized (48.6%). Strong agentic tool-use profile.
- **Reasoning: 70/100.** GPQA Diamond 90.4%, AA Intelligence Index (39.6%), AA-LCR (79.0%), MMLU-Pro 88.3%; capped by CritPt (17.7%), HLE (45.5%), AA-Omniscience accuracy (45.4%). Strong knowledge reasoning.
- **Context window: 88/100.** Verified 1M tokens (benchlm.ai + AA); AA-LCR 79.0%; capped because no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 75/100.** Text + image + speech + video in, text out; Design Arena Website 1315; capped by text-only output and no MMMU-Pro/CharXiv numbers found.
- **Coding: 68/100.** DeepSWE (59.3%), AA-SciCode (57.4%), VulcanBench v3 (87.0%), SWE-bench Vals (86.6%), AA Coding Index (72.2%); capped by FrontierSWE v2 (12.0%). Strong SWE performance.
- **Cost efficiency: 80/100.** $1.25/$4.25 competitive pricing with 88% cache discount; not counted toward Overall.
- **Overall Score: 75/100.** Half-up mean of (72 + 70 + 88 + 75 + 68) / 5 = 74.6 → 75. Best-fit recommendation: strong agentic reasoning model at 1M context with competitive pricing and fast output (374.6 t/s); verify on HLE-class tasks given mixed results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + Meta Muse Spark model page + Artificial Analysis + Vals AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
