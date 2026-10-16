# Muse Spark 1.1 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/muse-spark-1-1 (Meta AI Muse Spark 1.1 evaluation report), Artificial Analysis (`artificialanalysis.ai/models/muse-spark-1-1`), Vals AI, OpenRouter
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.1
- **Short description:** Meta's Muse Spark 1.1 proprietary reasoning model (released 9 Jul 2026 per AA; deprecated by AA in favor of Muse Spark 1.2) for agentic and coding tasks; 1M-token context, text+image+speech+video in → text out, $1.25/$4.25 per MTok; part of the Muse Spark family (1.1, 1.2, 1.3, Open, Wonder).
- **Provider / access:** Meta AI API (`muse-spark-1.1`), OpenRouter (`meta/muse-spark-1.1`), 2 API providers per Artificial Analysis. Siblings: Muse Spark 1.2, Muse Spark 1.3, Muse Spark Open, Muse Wonder.
- **Release / knowledge:** Released 2026-07-09 (AA); deprecated by AA (newer Muse Spark 1.2 exists); knowledge cutoff not stated.
- **IDs:** `muse-spark-1.1` (Meta API / OpenRouter). No Free ID confirmed.
- **Context window:** 1M tokens (benchlm.ai, Artificial Analysis). Verified.
- **Modalities:** Text, image, speech, and video in; text out; reasoning yes (xhigh effort per AA); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $1.25/M input, $4.25/M output (AA; cache discount 88%, cost per task $1.38).
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **80.0%** (Meta AI evaluation report; Vals AI 69.3%)
- MCP Atlas: **88.1%** (Meta AI evaluation report)
- Toolathlon: **75.6%** (Meta AI evaluation report)
- OSWorld-Verified: **80.8%** (Meta AI evaluation report)
- WebArena-Verified: **69%** (Meta AI evaluation report)
- DeepSearchQA: **84.9%** (Meta AI evaluation report)
- CyberGym: **59.0%** (Meta AI evaluation report)
- Finance Agent v2: **57.2%** (Meta AI evaluation report)
- deepSWE: **53.3%** (Meta AI evaluation report)
- OSWorld 2.0: **14.2%** (Meta AI evaluation report)
- JobBench: **54.7%** (Meta AI evaluation report)
- Cybench: **92.9%** (Meta AI evaluation report)
- ExploitGym: **0.8%** (Meta AI evaluation report)
- GDPval-AA: **1375 Elo** (Meta AI evaluation report; AA normalized 35.6%)
- AA Agentic Index: **27.5%** (Artificial Analysis)

Reasoning / knowledge:

- HLE: **62.1%** (Meta AI evaluation report); HLE w/o tools: **52.2%**; AA-HLE **46.2%**
- GPQA Diamond: **89.8%** (Artificial Analysis); **91.2%** (Vals AI)
- MMLU-Pro: **88.7%** (Vals AI)
- MRCR 1M: **54.1%** (Meta AI evaluation report)
- Artificial Analysis Intelligence Index: **33.7%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **77.7%** (Artificial Analysis)
- CritPt: **15.1%** (Artificial Analysis)
- AA-Omniscience Index **28.1%**; Accuracy **52.1%**; Hallucination rate **50.0%** (AA)
- IFBench: not found for this variant

Coding:

- deepSWE: **53.3%** (Meta AI evaluation report)
- SWE-bench Pro: **61.5%** (Meta AI evaluation report)
- LiveCodeBench (Vals): **85.9%** (Vals AI)
- SWE-bench (Vals): **82.0%** (Vals AI)
- AA-SciCode: **58.8%** (Artificial Analysis)
- AA Coding Index: **71.3%** (Artificial Analysis)

Multimodal & grounded:

- CharXiv: **88.4%** (Meta AI evaluation report)
- BabyVision: **76.3%** (Meta AI evaluation report)
- Design Arena Website: **1272** (OpenRouter)

Long context:

- MRCR 1M: **54.1%** (Meta AI evaluation report); AA-LCR: **77.7%** (Artificial Analysis); declared 1M context; no public full-depth needle-recall score beyond MRCR 1M/AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 80/100.** Strong MCP Atlas (88.1), Terminal-Bench 2.1 (80.0), OSWorld-Verified (80.8), DeepSearchQA (84.9), Cybench (92.9), GDPval-AA (1375 Elo); capped by weak ExploitGym (0.8%), OSWorld 2.0 (14.2%). Strong agentic tool-use profile.
- **Reasoning: 76/100.** GPQA 89.8–91.2%, MMLU-Pro 88.7%, MRCR 1M 54.1%, HLE 62.1%, AA Intelligence Index 33.7; capped by CritPt (15.1), AA-Omniscience accuracy (52.1%), HLE w/o tools (52.2%). Good knowledge reasoning.
- **Context window: 90/100.** Verified 1M tokens (benchlm.ai + AA); MRCR 1M 54.1%, AA-LCR 77.7%; capped because no public full-depth recall score beyond MRCR 1M at the full window.
- **Multimodal: 82/100.** Text + image + speech + video in, text out; CharXiv 88.4%, BabyVision 76.3%; capped by text-only output.
- **Coding: 74/100.** LiveCodeBench Vals 85.9%, SWE-bench Vals 82.0%, deepSWE 53.3%, SWE-bench Pro 61.5%; capped by weak deepSWE (53.3%), no SWE-bench/LiveCodeBench main numbers found for this variant beyond Vals — scored conservatively.
- **Cost efficiency: 75/100.** $1.25/$4.25 moderate pricing with 88% cache discount; not counted toward Overall.
- **Overall Score: 80/100.** Half-up mean of (80 + 76 + 90 + 82 + 74) / 5 = 80.4 → 80. Best-fit recommendation: strong agentic tool-use model with multimodal input; verify on SWE-Pro and ExploitGym-class tasks given mixed results there. Superseded by Muse Spark 1.2/1.3 — prefer newer Muse Spark for new work unless legacy pinning required.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + Meta AI evaluation report + Artificial Analysis + Vals AI + OpenRouter independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
