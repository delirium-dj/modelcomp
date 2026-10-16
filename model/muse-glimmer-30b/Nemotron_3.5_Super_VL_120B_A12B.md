# Muse Glimmer 30B — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/muse-glimmer-30b (Meta AI Research Muse Glimmer launch post), Artificial Analysis
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta's open-weights reasoning model; 30B parameters; 131K context / text+in → text out; sibling models: Muse Wonder Full, Muse Wonder, Muse Spark 1.1/1.2/Open.
- **Provider / access:** Open weights on Hugging Face (`meta-llama/Llama-Muse-Glimmer-30B` per Meta AI Research); open weight model.
- **Release / knowledge:** Released 2026 per Meta AI Research; knowledge cutoff not stated.
- **IDs:** `muse-glimmer-30b` (Meta AI Research API / HF). No Free ID confirmed.
- **Context window:** 131K tokens (benchlm.ai). Verified.
- **Modalities:** Not confirmed on benchlm.ai; assumed text in → text out per Meta AI Research docs; reasoning type: Reasoning per benchlm.ai; tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Not found on benchlm.ai or AA (open weights, self-host ~$0).
- **Architecture:** Open-weights model; parameter count 30B per name; reasoning model.

### Raw benchmarks found

Agent / tool use:

- MCP Atlas: **75.5%** (Meta AI Research Muse Glimmer launch post)
- DeepSearchQA: **74.6%** (Meta AI Research Muse Glimmer launch post)
- skillsBench: **44.3%** (Meta AI Research Muse Glimmer launch post)
- OSWorld-Verified: **65.9%** (Meta AI Research Muse Glimmer launch post)
- GDPval-AA: **787 Elo** (Artificial Analysis); normalized **14.3%**
- AA Agentic Index: **10.5%** (Artificial Analysis)
- AA EnterpriseOps-Gym: **34.7%** (Artificial Analysis)
- AA AutomationBench: **6.8%** (Artificial Analysis)
- AA Tau3 Banking: **23.5%** (Artificial Analysis)
- AA Briefcase: **477 Elo** (Artificial Analysis)
- AA Terminal-Bench 2.1: **51.7%** (Artificial Analysis)
- AA Terminal-Bench 4.0: **0.5%** (Artificial Analysis)
- GDP.pdf: **10.0%** (Artificial Analysis)
- AA-AnalystAgent: **20.0%** (Artificial Analysis)

Reasoning / knowledge:

- GPQA Diamond: **83.5%** (Artificial Analysis)
- HLE: **22.0%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **17.5%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **83.3%** (Artificial Analysis)
- CritPt: **2.6%** (Artificial Analysis)
- MLCR-AA: **20.0%** (Artificial Analysis)
- AA-Omniscience Index **-32.8%**; Accuracy **27.0%**; Hallucination rate **81.9%** (AA)

Coding:

- SWE-bench Pro: **51.2%** (Meta AI Research Muse Glimmer launch post)
- SWE-bench Verified: **76%** (Meta AI Research Muse Glimmer launch post)
- Terminal-Bench 2.1: **51.7%** (Meta AI Research Muse Glimmer launch post)
- SciCode: **43.6%** (Meta AI Research Muse Glimmer launch post)
- AA-SciCode: **44.9%** (Artificial Analysis)
- AA Coding Index: **49.0%** (Artificial Analysis)

Multimodal & grounded:

- CharXiv: **78.8%** (Meta AI Research Muse Glimmer launch post)
- ScreenSpot Pro: **75.4%** (Meta AI Research Muse Glimmer launch post)
- OmniDocBench 1.5: **75.8%** (Meta AI Research Muse Glimmer launch post)
- MMMU-Pro: **74%** (Meta AI Research Muse Glimmer launch post); AA-MMMU-Pro **74.3%**

Instruction Following:

- IFBench: **77%** (Meta AI Research Muse Glimmer launch post)

Mathematics:

- AIME26: **94.7%** (Meta AI Research Muse Glimmer launch post)

Long context:

- AA-LCR: **83.3%** (Artificial Analysis); MLCR-AA: **20.0%** (AA); declared 131K context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 55/100.** MCP Atlas (75.5%), DeepSearchQA (74.6%), OSWorld-Verified (65.9%), skillsBench (44.3%), GDPval-AA (787 Elo); capped by weak AA Agentic Index (10.5%), AA Terminal-Bench 4.0 (0.5%), GDP.pdf (10.0%), AA AutomationBench (6.8%), MazeBench not found. Moderate agentic tool-use profile.
- **Reasoning: 60/100.** GPQA Diamond 83.5%, AA-LCR (83.3%), IFBench (77%), AIME26 (94.7%); capped by CritPt (2.6%), HLE (22.0%), AA-HLE not found separately, AA-Omniscience accuracy (27.0%), Intelligence Index (17.5%). Strong knowledge reasoning, weakest on HLE/open-ended reasoning.
- **Context window: 70/100.** Verified 131K tokens (benchlm.ai); AA-LCR 83.3%, MLCR-AA 20.0%; capped because context below 1M frontier and no public full-depth needle-recall score beyond AA-LCR/MLCR-AA.
- **Multimodal: 75/100.** CharXiv (78.8%), ScreenSpot Pro (75.4%), OmniDocBench 1.5 (75.8%), MMMU-Pro (74%), AA-MMMU-Pro (74.3%); capped by text-only output assumption.
- **Coding: 65/100.** SWE-bench Verified (76%), SWE-bench Pro (51.2%), SciCode (43.6%), AA-SciCode (44.9%), AA Coding Index (49.0%); Terminal-Bench 2.1 (51.7%). Moderate coding.
- **Cost efficiency: 90/100.** Open weights (self-host ~$0); not counted toward Overall.
- **Overall Score: 65/100.** Half-up mean of (55 + 60 + 70 + 75 + 65) / 5 = 65.0 → 65. Best-fit recommendation: strong multimodal and verified coding at 131K context with open weights; verify on agentic suites and HLE-class tasks given mixed results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai Muse Glimmer 30B model card + Artificial Analysis independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
