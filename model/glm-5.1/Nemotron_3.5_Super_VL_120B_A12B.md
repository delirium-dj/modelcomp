# GLM-5.1 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/glm-5-1 (Z.AI GLM-5.1 model card), Artificial Analysis (`artificialanalysis.ai/models/glm-5-1`), Vals AI, Epoch AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.1
- **Short description:** Z.AI's open-weights MoE reasoning model; 203K context / text+in → text out; sibling models: GLM-5.3, GLM-5.3-Flash, GLM-5.2, GLM-5; related earlier: GLM-5.
- **Provider / access:** Z.AI API (`glm-5-1`), open weights on Hugging Face (`zai-org/GLM-5.1`).
- **Release / knowledge:** Released 2026 per Z.AI; knowledge cutoff not stated.
- **IDs:** `glm-5-1` (Z.AI API / OpenRouter), `zai-org/GLM-5.1` (HF weights). No Free ID confirmed.
- **Context window:** 203K tokens (benchlm.ai). Verified.
- **Modalities:** Not confirmed on benchlm.ai; assumed text in → text out per HF model card; reasoning type: Reasoning per benchlm.ai; tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Not found on benchlm.ai or AA.
- **Architecture:** Open-weights MoE; parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **63.5%** (Z.AI GLM-5.1 model card; Vals AI 56.9%)
- BrowseComp: **68%** (Z.AI GLM-5.1 model card)
- τ³-bench results: **70.6%** (Z.AI GLM-5.1 model card)
- MCP Atlas: **71.8%** (Z.AI GLM-5.1 model card)
- CyberGym: **68.7%** (CyberGym leaderboard)
- Claw-Eval: **62.3%** (Claw-Eval leaderboard)
- τ²-bench results: **97.7%** (Artificial Analysis)
- GDPval-AA: **1181 Elo** (Artificial Analysis); normalized **30.8%**
- AA Agentic Index: **25.2%** (Artificial Analysis)
- ResearchClawBench: **18.2%** (ResearchClawBench leaderboard)
- HLE w/ tools: **52.3%** (GLM-5.1 model card)

Reasoning / knowledge:

- GPQA-D: **86.2%** (Z.AI GLM-5.1 model card); AA-GPQA Diamond **86.8%**
- HLE: **31%** (GLM-5.1 model card); AA-HLE **30.1%**
- MMLU-Pro: **86.9%** (Vals AI)
- Artificial Analysis Intelligence Index: **26.1%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **73.7%** (Artificial Analysis)
- CritPt: **4.6%** (Artificial Analysis)
- AA-Omniscience Index **0.9%**; Accuracy **23.7%**; Hallucination rate **29.9%** (AA)
- GPQA Diamond (Vals): **84.5%** (Vals AI)
- FrontierMath v2 Tiers 1-3: **36.842%** (Epoch AI)

Coding:

- SWE-bench Pro: **58.4%** (Z.AI GLM-5.1 model card)
- NL2Repo: **42.7%** (Z.AI GLM-5.1 model card)
- SWE-Rebench: **62.7%** (SWE-Rebench leaderboard)
- Vibe Code Bench: **31.46%** (Vals AI)
- AA-SciCode: **44.8%** (Artificial Analysis)
- OpenHarmony Bench: **52.3%** (OpenHarmony Bench leaderboard)
- LiveCodeBench v6: **81.4%** (Vals AI)
- SWE-bench (Vals): **76.4%** (Vals AI)
- AA Coding Index: **55.8%** (Artificial Analysis)

Multimodal & grounded:

- Design Arena Website: **1290** (OpenRouter)

Long context:

- AA-LCR: **73.7%** (Artificial Analysis); declared 203K context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 65/100.** Terminal-Bench 2.0 (63.5%), BrowseComp (68%), MCP Atlas (71.8%), τ³-bench (70.6%), τ²-bench (97.7%), GDPval-AA (1181 Elo); capped by weak GDPval-AA normalized (30.8%), AA Agentic Index (25.2%), ResearchClawBench (18.2%). Moderate agentic tool-use profile.
- **Reasoning: 68/100.** GPQA-D 86.2%, MMLU-Pro 86.9%, AA-LCR (73.7%), FrontierMath T1-3 (36.842%); capped by CritPt (4.6%), HLE (31%), AA-HLE (30.1%), AA-Omniscience accuracy (23.7%), Intelligence Index (26.1%). Strong knowledge reasoning.
- **Context window: 75/100.** Verified 203K tokens (benchlm.ai); AA-LCR 73.7%; capped because context below 1M frontier and no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 45/100.** Text+in → text out assumed; Design Arena Website 1290; capped by text-only output assumption and thin multimodal coverage.
- **Coding: 68/100.** SWE-bench Pro (58.4%), LiveCodeBench v6 (81.4%), SWE-bench Vals (76.4%), AA Coding Index (55.8%); capped by Vibe Code Bench (31.46%), AA-SciCode (44.8%), NL2Repo (42.7%). Moderate coding.
- **Cost efficiency: 50/100.** No pricing data found; scored conservatively.
- **Overall Score: 64.2/100.** Half-up mean of (65 + 68 + 75 + 45 + 68) / 5 = 66.2 → 66. Best-fit recommendation: strong knowledge reasoning at 203K context with open weights; verify on multimodal tasks given text-only output limitation.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai Z.AI GLM-5.1 model card + Artificial Analysis + Vals AI + Epoch AI + OpenRouter independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
