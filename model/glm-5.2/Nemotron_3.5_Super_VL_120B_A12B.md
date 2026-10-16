# GLM-5.2 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/glm-5-2 (Z.AI GLM-5.2 model card), Artificial Analysis (`artificialanalysis.ai/models/glm-5-2`), Vals AI, Epoch AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2
- **Short description:** Z.AI's open-weights MoE reasoning model (released June 16, 2026 per AA); 753B total / 40B active parameters; 1M context / text in → text out; $1.40/$4.40 per MTok; MIT license; sibling models: GLM-5.3, GLM-5.3-Flash, GLM-5.1.
- **Provider / access:** Z.AI API (`glm-5-2`), 18 API providers per AA; open weights on Hugging Face (`zai-org/GLM-5.2`); MIT license.
- **Release / knowledge:** Released June 16, 2026 (AA); knowledge cutoff not stated.
- **IDs:** `glm-5-2` (Z.AI API / OpenRouter), `zai-org/GLM-5.2` (HF weights). No Free ID confirmed.
- **Context window:** 1M tokens (benchlm.ai, Artificial Analysis). Verified.
- **Modalities:** Text in, text out per AA; reasoning yes (chain-of-thought); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $1.40/M input, $4.40/M output (AA; cache discount 81%, cost per task $1.47).
- **Architecture:** Open-weights MoE, 753B total / 40B active, MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 3.0: **4.6%** (Terminal-Bench 3.0 leaderboard)
- Terminal-Bench 2.1: **81.0%** (Z.AI GLM-5.2 model card; Vals AI 67.8%)
- MCP Atlas: **76.8%** (Z.AI GLM-5.2 model card)
- Toolathlon: **48.2%** (Z.AI GLM-5.2 model card)
- τ²-bench results: **99.1%** (Artificial Analysis)
- GDPval-AA: **1418 Elo** (Artificial Analysis); normalized **43.6%**
- AA Agentic Index: **39.4%** (Artificial Analysis)
- ResearchClawBench: **20.7%** (ResearchClawBench leaderboard)
- APEX-Agents-AA: **33.7%** (Artificial Analysis)
- HLE w/ tools: **54.7%** (Z.AI GLM-5.2 model card)
- MazeBench: **0%** (MazeBench leaderboard)

Reasoning / knowledge:

- GPQA: **91.2%** (Z.AI GLM-5.2 model card); AA-GPQA Diamond **89.5%**
- HLE: **40.5%** (Z.AI GLM-5.2 model card); AA-HLE **41.1%**
- MMLU-Pro: **86.7%** (Vals AI)
- Artificial Analysis Intelligence Index: **33.7%** (#15 of 120 open-weights; median 19)
- AA-LCR (long-context reasoning): **78.3%** (Artificial Analysis)
- CritPt: **20.9%** (Z.AI GLM-5.2 model card)
- AA-Omniscience Index **4.4%**; Accuracy **24.3%**; Hallucination rate **26.3%** (AA)
- GPQA Diamond (Vals): **85.6%** (Vals AI)
- FrontierMath v2 Tiers 1-3: **59.206%** (Epoch AI)
- FrontierMath v2 Tier 4: **29.268%** (Epoch AI)

Coding:

- SWE-bench Pro: **62.1%** (Z.AI GLM-5.2 model card)
- NL2Repo: **48.9%** (Z.AI GLM-5.2 model card)
- ProgramBench: **63.7%** (Z.AI GLM-5.2 model card)
- CursorBench 3.2: **55.0%** (Cursor evals)
- AA-SciCode: **51.2%** (Artificial Analysis)
- OpenHarmony Bench: **58.4%** (OpenHarmony Bench leaderboard)
- LiveCodeBench v6: **69.5%** (Vals AI)
- SWE-bench (Vals): **82.8%** (Vals AI)
- AA Coding Index: **68.8%** (Artificial Analysis)
- PostTrainBench v1.1: **31.7%** (public leaderboard)

Multimodal & grounded:

- Design Arena Website: **1287** (OpenRouter)

Long context:

- AA-LCR: **78.3%** (Artificial Analysis); declared 1M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 72/100.** Terminal-Bench 2.1 (81.0%), MCP Atlas (76.8%), τ²-bench (99.1%), HLE w/ tools (54.7%), GDPval-AA (1418 Elo); capped by weak Terminal-Bench 3.0 (4.6%), Toolathlon (48.2%), MazeBench (0%), AA Agentic Index (39.4%), ResearchClawBench (20.7%). Strong agentic tool-use profile.
- **Reasoning: 70/100.** GPQA 91.2%, MMLU-Pro 86.7%, AA-LCR (78.3%), FrontierMath T1-3 (59.206%), AA Intelligence Index (33.7%); capped by CritPt (20.9%), HLE (40.5%), AA-HLE (41.1%), AA-Omniscience accuracy (24.3%). Strong knowledge reasoning.
- **Context window: 88/100.** Verified 1M tokens (benchlm.ai + AA); AA-LCR 78.3%; capped because no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 45/100.** Text in, text out per AA; Design Arena Website 1287; capped by text-only output and no MMMU-Pro/CharXiv numbers found.
- **Coding: 68/100.** SWE-bench Pro (62.1%), ProgramBench (63.7%), LiveCodeBench v6 (69.5%), SWE-bench Vals (82.8%), CursorBench 3.2 (55.0%), AA Coding Index (68.8%); capped by PostTrainBench v1.1 (31.7%), NL2Repo (48.9%), AA-SciCode (51.2%). Moderate coding.
- **Cost efficiency: 40/100.** $1.40/$4.40 expensive pricing with 81% cache discount; not counted toward Overall.
- **Overall Score: 69/100.** Half-up mean of (72 + 70 + 88 + 45 + 68) / 5 = 68.6 → 69. Best-fit recommendation: strong verified coding and agentic tool-use at 1M context with open weights; verify on multimodal tasks given text-only output limitation.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai Z.AI GLM-5.2 model card + Artificial Analysis + Vals AI + Epoch AI + OpenRouter independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
