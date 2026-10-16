# Ling 3.1 Flash — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/ling-3-1-flash (InclusionAI Ling 3.1 Flash model card), Artificial Analysis (`artificialanalysis.ai/models/ling-3-1-flash`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.1 Flash
- **Short description:** InclusionAI's open-weights reasoning model; 262K context / text+in → text out; sibling models: Ling 3.0 Flash, Ling 3.0 Flash FP8, Ling 3.0 Tiny, Ling 3.0 Flash Fin.
- **Provider / access:** InclusionAI API (`ling-3-1-flash`), open weights on Hugging Face (`inclusionAI/Ling-3.1-flash`).
- **Release / knowledge:** Released 2026 per InclusionAI; knowledge cutoff not stated.
- **IDs:** `ling-3-1-flash` (InclusionAI API / OpenRouter), `inclusionAI/Ling-3.1-flash` (HF weights). No Free ID confirmed.
- **Context window:** 262K tokens (benchlm.ai). Verified.
- **Modalities:** Not confirmed on benchlm.ai; assumed text in → text out per HF model card; reasoning type: Reasoning per benchlm.ai; tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Not found on benchlm.ai or AA.
- **Architecture:** Open-weights model; parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- skillsBench: **68.7%** (InclusionAI Ling 3.1 Flash model card)
- AutomationBench: **52.5%** (InclusionAI Ling 3.1 Flash model card)
- CyberGym: **87.9%** (InclusionAI Ling 3.1 Flash model card)
- Finance Agent v2: **57.9%** (InclusionAI Ling 3.1 Flash model card)
- DRACO: **85.5%** (InclusionAI Ling 3.1 Flash model card)
- GDPval-AA: **1673 Elo** (InclusionAI Ling 3.1 Flash model card); normalized **55.9%** (Artificial Analysis)
- Terminal-Bench 2.1: **81.2%** (InclusionAI Ling 3.1 Flash model card)
- τ³-bench results: **47.8%** (InclusionAI Ling 3.1 Flash model card)
- MCP Atlas: **83%** (InclusionAI Ling 3.1 Flash model card)
- BrowseComp: **91.7%** (InclusionAI Ling 3.1 Flash model card)
- WideResearch: **83.3%** (InclusionAI Ling 3.1 Flash model card)

Reasoning / knowledge:

- HLE: **37.4%** (InclusionAI Ling 3.1 Flash model card); AA-HLE **39.4%**
- Artificial Analysis Intelligence Index: **41.1%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **83.0%** (Artificial Analysis)
- CritPt: **18.0%** (Artificial Analysis)
- AA-Omniscience Index **2.2%**; Accuracy **29.1%**; Hallucination rate **37.9%** (AA)

Coding:

- terminalBench4: **46.0%** (InclusionAI Ling 3.1 Flash model card)
- SWE-Atlas Codebase QnA: **64.5%** (InclusionAI Ling 3.1 Flash model card)
- AA-SciCode: **54.1%** (Artificial Analysis)
- SWE Multilingual: **88.5%** (InclusionAI Ling 3.1 Flash model card)
- SWE-bench Pro: **68.7%** (InclusionAI Ling 3.1 Flash model card)
- DeepSWE: **59.7%** (InclusionAI Ling 3.1 Flash model card)

Multimodal & grounded:

- No multimodal benchmarks found.

Long context:

- AA-LCR: **83.0%** (Artificial Analysis); declared 262K context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 80/100.** Terminal-Bench 2.1 (81.2%), BrowseComp (91.7%), MCP Atlas (83%), CyberGym (87.9%), DRACO (85.5%), WideResearch (83.3%), skillsBench (68.7%), GDPval-AA (1673 Elo); capped by weak GDPval-AA normalized (55.9%), AA Agentic Index not found separately. Strong agentic tool-use profile.
- **Reasoning: 74/100.** HLE (37.4%), AA-LCR (83.0%), Intelligence Index (41.1%); capped by CritPt (18.0%), AA-HLE (39.4%), AA-Omniscience accuracy (29.1%), Intelligence Index (41.1%). Moderate reasoning.
- **Context window: 75/100.** Verified 262K tokens (benchlm.ai); AA-LCR 83.0%; capped because context below 1M frontier and no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 35/100.** No multimodal benchmarks found; capped by text-only output assumption and zero multimodal data.
- **Coding: 72/100.** SWE Multilingual (88.5%), DeepSWE (59.7%), SWE-bench Pro (68.7%), AA-SciCode (54.1%), terminalBench4 (46.0%); strong coding.
- **Cost efficiency: 50/100.** No pricing data found; scored conservatively.
- **Overall Score: 67.2/100.** Half-up mean of (80 + 74 + 75 + 35 + 72) / 5 = 65.2 → 65. Best-fit recommendation: strong agentic tool-use and coding at 262K context with open weights; verify on HLE-class tasks given mixed results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai Ling 3.1 Flash model card + Artificial Analysis independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
