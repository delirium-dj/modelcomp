# Step 5 Preview — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/step-5-preview (StepFun Step 5 Preview model card), Artificial Analysis
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** StepFun's open-weights reasoning model (~600B-total / 27B-active multimodal MoE); 1M context / text+image+video in → text out; Qwen3.8-Flash-Next-class architecture; released 2026 per StepFun; sibling models: Step 3.7 Flash, Step 3.5 Flash.
- **Provider / access:** StepFun API (`step-5-preview`), open weights on Hugging Face (`stepfun-ai/Step-5-Preview`); open weights model.
- **Release / knowledge:** Released 2026 per StepFun; knowledge cutoff not stated.
- **IDs:** `step-5-preview` (StepFun API), `stepfun-ai/Step-5-Preview` (HF weights). No Free ID confirmed.
- **Context window:** 1M tokens (benchlm.ai). Verified.
- **Modalities:** Text, image, and video in; text out; reasoning yes (chain-of-thought); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Not publicly listed (open weights; self-host ~$0).
- **Architecture:** Open-weights multimodal MoE, ~600B total / 27B active.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **85.0%** (StepFun Step 5 Preview model card)
- Terminal-Bench 4.0: **33.30%** (StepFun Step 5 Preview model card; AA 33.3%)
- CyberGym: **84.7%** (StepFun Step 5 Preview model card)
- AutomationBench: **44.0%** (StepFun Step 5 Preview model card)
- Toolathlon-Verified: **74.1%** (StepFun Step 5 Preview model card)
- MCP Atlas: **85.6%** (StepFun Step 5 Preview model card)
- JobBench: **59.0%** (StepFun Step 5 Preview model card)
- APEX-Agents: **37.8%** (StepFun Step 5 Preview model card)
- DRACO: **83.3%** (StepFun Step 5 Preview model card)
- BrowseComp: **88.7%** (StepFun Step 5 Preview model card)
- Agents' Last Exam: **29.5%** (StepFun Step 5 Preview model card)
- GDPval-AA: **1566 Elo** (StepFun Step 5 Preview model card); normalized **54.3%**
- AA Briefcase: **1425 Elo** (Artificial Analysis)
- AA AutomationBench: **51.0%** (Artificial Analysis)
- GDP.pdf: **14.8%** (Artificial Analysis)
- AA EnterpriseOps-Gym: **47.2%** (Artificial Analysis)
- AA Harvey LAB v1.0: **93.4%** (Artificial Analysis)
- AA ITBench: **55.6%** (Artificial Analysis)
- AA-AnalystAgent: **35.0%** (Artificial Analysis)
- Hermes Index: **32.8%** (Nous Research)
- Hermes Bench: **69.2%** (Nous Research)

Reasoning / knowledge:

- GPQA-D: **93.5%** (StepFun Step 5 Preview model card)
- HLE: **46.5%** (StepFun Step 5 Preview model card); AA-HLE **46.5%**
- Artificial Analysis Intelligence Index: **43.7%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **88.3%** (StepFun Step 5 Preview model card)
- CritPt: **20.9%** (StepFun Step 5 Preview model card)
- MLCR-AA: **16.7%** (Artificial Analysis)
- AA-Omniscience Index **16.4%**; Accuracy **41.5%**; Hallucination rate **43.0%** (AA)

Coding:

- DeepSWE: **67.7%** (StepFun Step 5 Preview model card)
- SciCode: **58.9%** (StepFun Step 5 Preview model card); AA-SciCode **58.9%**
- ProgramBench: **80.5%** (StepFun Step 5 Preview model card)
- sweMarathon: **72.7%** (StepFun Step 5 Preview model card)
- MLS-Bench Lite: **40.5%** (StepFun Step 5 Preview model card)

Multimodal & grounded:

- OfficeQA Pro: **60.3%** (StepFun Step 5 Preview model card)
- MMMU-Pro: **76%** (StepFun Step 5 Preview model card); AA-MMMU-Pro **76.4%**

Long context:

- AA-LCR: **88.3%** (StepFun Step 5 Preview model card); declared 1M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 75/100.** Terminal-Bench 2.1 (85.0%), BrowseComp (88.7%), MCP Atlas (85.6%), Toolathlon-Verified (74.1%), CyberGym (84.7%), DRACO (83.3%); capped by weak Terminal-Bench 4.0 (33.30%), Agents' Last Exam (29.5%), GDP.pdf (14.8%). Strong agentic tool-use profile.
- **Reasoning: 74/100.** GPQA-D 93.5%, HLE 46.5%, AA Intelligence Index (43.7%), AA-LCR (88.3%); capped by CritPt (20.9%), MLCR-AA (16.7%), AA-Omniscience accuracy (41.5%). Strong knowledge reasoning.
- **Context window: 90/100.** Verified 1M tokens (benchlm.ai); AA-LCR 88.3%; capped because no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 70/100.** Text + image + video in, text out; MMMU-Pro (76%), AA-MMMU-Pro (76.4%), OfficeQA Pro (60.3%); capped by text-only output.
- **Coding: 68/100.** DeepSWE (67.7%), SciCode (58.9%), ProgramBench (80.5%), sweMarathon (72.7%); capped by MLS-Bench Lite (40.5%), AA-SciCode (58.9%). Moderate coding.
- **Cost efficiency: 90/100.** Open weights (self-host ~$0); not counted toward Overall.
- **Overall Score: 75/100.** Half-up mean of (75 + 74 + 90 + 70 + 68) / 5 = 75.4 → 75. Best-fit recommendation: strong agentic multimodal model at 1M context with open weights; verify on HLE-class tasks given mixed results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + StepFun Step 5 Preview model card + Artificial Analysis + Nous Research independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
