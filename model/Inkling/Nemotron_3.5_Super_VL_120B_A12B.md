# Inkling — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/inkling (Thinking Machines Lab launch post), Artificial Analysis (`artificialanalysis.ai/models/inkling`), Vals AI, Epoch AI, OpenRouter
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's open-weights MoE reasoning model (released July 15, 2026 per AA); 975B total / 41B active parameters; 1M context / text+image+speech in → text out; $1.00/$4.05 per MTok; Apache 2.0 license; sibling: Inkling-Small.
- **Provider / access:** Thinking Machines API (`inkling`), 7 API providers per AA; open weights on Hugging Face (`thinkingmachines/Inkling`); Apache 2.0 license.
- **Release / knowledge:** Released July 15, 2026 (AA); knowledge cutoff not stated.
- **IDs:** `inkling` (Thinking Machines API / OpenRouter), `thinkingmachines/Inkling` (HF weights). No Free ID confirmed (Apache 2.0 → commercial use allowed with restrictions).
- **Context window:** 1M tokens (benchlm.ai, Artificial Analysis). Verified.
- **Modalities:** Text, image, and speech in; text out per AA; reasoning yes (chain-of-thought); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $1.00/M input, $4.05/M output (AA; cache discount 83%, blended rate $0.72).
- **Architecture:** Open-weights MoE, 975B total / 41B active, Apache 2.0 license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **63.8%** (Thinking Machines launch post; Vals AI 47.6%; AA 55.1%)
- BrowseComp: **77.1%** (Thinking Machines launch post)
- MCP Atlas: **74.1%** (Thinking Machines launch post)
- Design Arena Agentic Web Dev: **1257** (Design Arena leaderboard)
- GDPval-AA: **1076 Elo** (AA); normalized **28.8%**
- AA Agentic Index: **24.3%** (Artificial Analysis)
- CWE-bench v1: **37.0%** (Collinear leaderboard)
- AA EnterpriseOps-Gym: **38.0%** (AA)
- AA Tau3 Banking: **29.1%** (AA)
- AA Briefcase: **832 Elo** (AA)
- AA AutomationBench: **5.0%** (AA)
- AA Terminal-Bench 4.0: **1.0%** (AA)
- GDP.pdf: **12.8%** (AA)
- AA-AnalystAgent: **23.8%** (AA)

Reasoning / knowledge:

- GPQA: **87.9%** (Thinking Machines launch page); AA-GPQA Diamond **87.2%**
- HLE: **46%** (Thinking Machines launch page); AA-HLE **31.9%**
- MMLU-Pro: **86.3%** (Vals AI)
- Artificial Analysis Intelligence Index: **25.0%** (#31 of 120 open-weights; median 19)
- AA-LCR (long-context reasoning): **77.3%** (Artificial Analysis)
- CritPt: **5.4%** (Artificial Analysis)
- MLCR-AA: **12.2%** (Artificial Analysis)
- AA-Omniscience Index **2.0%**; Accuracy **41.6%**; Hallucination rate **67.7%** (AA)
- GPQA Diamond (Vals): **87.1%** (Vals AI)
- IFBench: **79.8%** (Thinking Machines launch page)
- FrontierMath v2 Tiers 1-3: **33.333%** (Epoch AI)
- FrontierMath v2 Tier 4: **4.878%** (Epoch AI)

Coding:

- SWE-bench Verified: **77.6%** (Thinking Machines launch page; Vals AI 77.6%)
- SWE-bench Pro: **54.3%** (Thinking Machines launch post)
- AA-SciCode: **47.0%** (Artificial Analysis)
- FrontierSWE v2: **4.1%** (Proximal)
- LiveCodeBench v6: **85.5%** (Vals AI)
- AA Coding Index: **52.1%** (Artificial Analysis)

Multimodal & grounded:

- MMMU-Pro: **73.5%** (Thinking Machines launch page); AA-MMMU-Pro **73.5%**
- CharXiv: **82%** (Thinking Machines launch page); CharXiv w/o tools: **78.1%**
- Design Arena Website: **1225** (OpenRouter)

Long context:

- AA-LCR: **77.3%** (Artificial Analysis); MLCR-AA: **12.2%** (AA); declared 1M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 60/100.** Terminal-Bench 2.1 (63.8%), BrowseComp (77.1%), MCP Atlas (74.1%), CWE-bench v1 (37.0%), GDPval-AA (1076 Elo); capped by weak Terminal-Bench 4.0 (1.0%), AA Agentic Index (24.3%), GDP.pdf (12.8%), AA AutomationBench (5.0%). Moderate agentic tool-use profile.
- **Reasoning: 70/100.** GPQA 87.9%, MMLU-Pro 86.3%, AA-LCR (77.3%), FrontierMath T1-3 (33.333%); capped by CritPt (5.4%), HLE (46%), AA-Omniscience accuracy (41.6%), Intelligence Index (25.0%). Strong knowledge reasoning, weakest on HLE/open-ended reasoning.
- **Context window: 88/100.** Verified 1M tokens (benchlm.ai + AA); AA-LCR 77.3%, MLCR-AA 12.2%; capped because no public full-depth needle-recall score beyond AA-LCR/MLCR-AA.
- **Multimodal: 75/100.** Text + image + speech in, text out; CharXiv 82%, AA-MMMU-Pro 73.5%; capped by text-only output.
- **Coding: 62/100.** SWE-bench Verified (77.6%), LiveCodeBench v6 (85.5%), SWE-bench Vals (77.6%), AA-SciCode (47.0%); capped by SWE-bench Pro (54.3%), FrontierSWE v2 (4.1%), AA Coding Index (52.1%). Strong verified coding.
- **Cost efficiency: 40/100.** $1.00/$4.05 expensive pricing with 83% cache discount; not counted toward Overall.
- **Overall Score: 71/100.** Half-up mean of (60 + 70 + 88 + 75 + 62) / 5 = 71.0 → 71. Best-fit recommendation: strong verified coding and knowledge reasoning at 1M context with open weights (Apache 2.0); verify on HLE-class tasks and agentic suites given mixed results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + Thinking Machines launch post + Artificial Analysis + Vals AI + Epoch AI + OpenRouter independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
