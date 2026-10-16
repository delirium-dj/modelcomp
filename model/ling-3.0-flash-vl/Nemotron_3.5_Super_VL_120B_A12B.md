# Ling 3.0 Flash VL — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/ling-3-0-flash-vl (InclusionAI Ling 3.0 Flash VL model card), Artificial Analysis (`artificialanalysis.ai/models/ling-3-0-flash-vl`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Flash VL
- **Short description:** InclusionAI's open-weights reasoning model; 131K context / text+in → text out; sibling models: Ling 3.0 Flash, Ling 3.0 Flash FP8, Ling 3.0 Tiny, Ling 3.0 Flash Fin.
- **Provider / access:** Open weights on Hugging Face (`inclusionAI/Ling-3.0-flash-VL`); open weight model.
- **Release / knowledge:** Released 2026 per InclusionAI; knowledge cutoff not stated.
- **IDs:** `ling-3-0-flash-vl` (InclusionAI API / HF). No Free ID confirmed.
- **Context window:** 262K tokens (benchlm.ai). Verified.
- **Modalities:** Not confirmed on benchlm.ai; assumed text in → text out per HF model card; reasoning type: Reasoning per benchlm.ai; tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Not found on benchlm.ai or AA.
- **Architecture:** Open-weights model; parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA: normalized **33.1%** (Artificial Analysis)
- AA Agentic Index: **10.5%** (Artificial Analysis)
- AA Terminal-Bench 2.1: **51.7%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **0.5%** (Artificial Analysis)
- AA EnterpriseOps-Gym: **34.7%** (Artificial Analysis)
- AA Tau3 Banking: **23.5%** (Artificial Analysis)
- AA Briefcase: **477 Elo** (Artificial Analysis)
- AA AutomationBench: **6.8%** (Artificial Analysis)
- GDP.pdf: **10.0%** (Artificial Analysis)
- AA-AnalystAgent: **20.0%** (Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond: **86.2%** (Artificial Analysis)
- HLE: **22.0%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **24.6%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **78.3%** (Artificial Analysis)
- CritPt: **2.0%** (Artificial Analysis)
- AA-Omniscience Index **-4.5%**; Accuracy **14.4%**; Hallucination rate **22.0%** (AA)

Coding:

- SciCode: **44.2%** (Artificial Analysis)
- AA-SciCode: **44.2%** (Artificial Analysis)
- AA Coding Index: not found for this variant

Multimodal & grounded:

- MMMU-Pro: **79.0%** (Artificial Analysis); AA-MMMU-Pro **79.0%**

Long context:

- AA-LCR: **78.3%** (Artificial Analysis); MLCR-AA not found; declared 262K context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 45/100.** Terminal-Bench 2.1 (51.7%), GDPval-AA normalized (33.1%), GDPval-AA (787 Elo); capped by weak Terminal-Bench 4.0 (0.5%), GDP.pdf (10.0%), AA AutomationBench (6.8%), AA-AnalystAgent (20.0%), AA Agentic Index (10.5%). Moderate agentic tool-use profile.
- **Reasoning: 60/100.** GPQA Diamond 86.2%, AA-LCR (78.3%), Intelligence Index (24.6%); capped by CritPt (2.0%), HLE (22.0%), AA-HLE (22.0%), AA-Omniscience accuracy (14.4%). Strong knowledge reasoning.
- **Context window: 70/100.** Verified 262K tokens (benchlm.ai); AA-LCR 78.3%; capped because context below 1M frontier and no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 72/100.** MMMU-Pro (79.0%), AA-MMMU-Pro (79.0%); capped by text-only output assumption.
- **Coding: 48/100.** SciCode (44.2%), AA-SciCode (44.2%); capped by extremely thin coding coverage — only 1 coding benchmark found.
- **Cost efficiency: 50/100.** No pricing data found; scored conservatively.
- **Overall Score: 59/100.** Half-up mean of (45 + 60 + 70 + 72 + 48) / 5 = 59.0 → 59. Best-fit recommendation: strong knowledge reasoning and multimodal at 262K context; verify on agentic and coding tasks given thin coverage there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai Ling 3.0 Flash VL model card + Artificial Analysis independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
