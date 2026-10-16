# GLM-5.3 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/glm-5-3 (Z.AI GLM-5.3 model card), Artificial Analysis (`artificialanalysis.ai/models/glm-5-3`), Vals AI, Epoch AI, OpenRouter
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3
- **Short description:** Z.AI's open-weights MoE reasoning model (released August 18, 2026 per AA); 753B total / 40B active parameters; 1M context / text in → text out; $1.40/$4.40 per MTok; GLM-5.3 License; sibling models: GLM-5.2, GLM-5.3-Flash, GLM-5.1.
- **Provider / access:** Z.AI API (`glm-5-3`), 27 API providers per AA; open weights on Hugging Face (`zai-org/GLM-5.3`).
- **Release / knowledge:** Released August 18, 2026 (AA); knowledge cutoff not stated.
- **IDs:** `glm-5-3` (Z.AI API / OpenRouter), `zai-org/GLM-5.3` (HF weights). No Free ID confirmed.
- **Context window:** 1M tokens (benchlm.ai, Artificial Analysis). Verified.
- **Modalities:** Text in, text out per AA; reasoning yes (chain-of-thought); tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** $1.40/M input, $4.40/M output (AA; cache discount 81%, cost per task $2.01).
- **Architecture:** Open-weights MoE, 753B total / 40B active, GLM-5.3 License (commercial use allowed with restrictions).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.2%** (Z.AI GLM-5.3 model card; Vals AI 71.5%; AA 83.9%)
- terminalBench3: **28.3%** (Z.AI GLM-5.3 model card)
- CyberGym: **84.5%** (Z.AI GLM-5.3 model card)
- ExploitGym: **15.0%** (Z.AI GLM-5.3 model card)
- Toolathlon-Verified: **73.0%** (Z.AI GLM-5.3 model card)
- AutomationBench: **48.2%** (Z.AI GLM-5.3 model card)
- Agents' Last Exam: **28.5%** (Z.AI GLM-5.3 model card)
- HLE w/ tools: **62.5%** (Z.AI GLM-5.3 model card)
- GDPval-AA: **1769 Elo** (Z.AI GLM-5.3 model card); normalized **57.5%** (AA)
- AA Tau3 Banking: **50.3%** (AA)
- AA Briefcase: **1508 Elo** (AA)
- AA EnterpriseOps-Gym: **36.4%** (AA)
- AA AutomationBench: **62.2%** (AA)
- AA Agentic Index: **53.4%** (AA)
- AA ITBench: **46.1%** (AA)
- AA Terminal-Bench 4.0: **41.9%** (AA)
- GDP.pdf: **11.2%** (AA)
- AA-AnalystAgent: **38.8%** (AA)
- Hermes Index: **39.2%** (Nous Research)
- Hermes Bench: **71.8%** (Nous Research)
- MazeBench: **0%** (MazeBench leaderboard)

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (Artificial Analysis); GPQA Diamond (Vals) **88.1%**
- HLE: **42.3%** (Artificial Analysis)
- MMLU-Pro: **86.8%** (Vals AI)
- Artificial Analysis Intelligence Index: **44.8%** (#2 of 120 open-weights; median 19)
- AA-LCR (long-context reasoning): **79.7%** (Artificial Analysis)
- CritPt: **19.1%** (Artificial Analysis)
- MLCR-AA: **48.3%** (Artificial Analysis)
- AA-Omniscience Index **14.3%**; Accuracy **33.9%**; Hallucination rate **29.6%** (AA)
- FrontierMath v2 Tiers 1-3: **68.772%** (Epoch AI)
- FrontierMath v2 Tier 4: **29.268%** (Epoch AI)

Coding:

- DeepSWE: **66.9%** (Z.AI GLM-5.3 model card)
- NL2Repo: **58%** (Z.AI GLM-5.3 model card)
- ProgramBench: **19.0%** (Z.AI GLM-5.3 model card)
- FrontierSWE: **78.1%** (Z.AI GLM-5.3 model card)
- sweMarathon: **42.5%** (Z.AI GLM-5.3 model card)
- PostTrain Bench: **39.8%** (Z.AI GLM-5.3 model card)
- AA-SciCode: **59.0%** (Artificial Analysis)
- VulcanBench v3: **78.3%** (VulcanBench leaderboard)
- OpenHarmony Bench: **60.8%** (OpenHarmony Bench leaderboard)
- FrontierSWE v2: **30.2%** (Proximal)
- LiveCodeBench v6: **80.5%** (Vals AI)
- SWE-bench (Vals): **95.4%** (Vals AI)
- AA Coding Index: **74.8%** (Artificial Analysis)
- Bug Hunt Bench: **19.0 fixes** (Bug Hunt Bench public data)

Multimodal & grounded:

- Design Arena Website: **1298** (OpenRouter)

Long context:

- AA-LCR: **79.7%** (Artificial Analysis); MLCR-AA: **48.3%** (AA); declared 1M context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 72/100.** Terminal-Bench 2.1 (88.2%), CyberGym (84.5%), Toolathlon-Verified (73.0%), GDPval-AA (1769 Elo), AA Agentic Index (53.4%); capped by weak terminalBench3 (28.3%), Agents' Last Exam (28.5%), MazeBench (0%), GDP.pdf (11.2%). Strong agentic tool-use profile.
- **Reasoning: 72/100.** GPQA Diamond 91.7%, MMLU-Pro 86.8%, AA Intelligence Index (44.8%), AA-LCR (79.7%), FrontierMath T1-3 (68.772%); capped by CritPt (19.1%), HLE (42.3%), AA-Omniscience accuracy (33.9%). Strong knowledge reasoning.
- **Context window: 88/100.** Verified 1M tokens (benchlm.ai + AA); AA-LCR 79.7%, MLCR-AA 48.3%; capped because no public full-depth needle-recall score beyond AA-LCR/MLCR-AA.
- **Multimodal: 45/100.** Text in, text out per AA; Design Arena Website 1298; capped by text-only output and no MMMU-Pro/CharXiv numbers found.
- **Coding: 72/100.** DeepSWE (66.9%), FrontierSWE (78.1%), LiveCodeBench v6 (80.5%), SWE-bench Vals (95.4%), AA Coding Index (74.8%), VulcanBench v3 (78.3%); capped by ProgramBench (19.0%), FrontierSWE v2 (30.2%), Bug Hunt Bench (19.0 fixes). Strong verified coding.
- **Cost efficiency: 35/100.** $1.40/$4.40 expensive pricing with 81% cache discount; not counted toward Overall.
- **Overall Score: 70/100.** Half-up mean of (72 + 72 + 88 + 45 + 72) / 5 = 69.8 → 70. Best-fit recommendation: strong verified coding and agentic tool-use at 1M context with open weights; verify on multimodal tasks given text-only output.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai Z.AI GLM-5.3 model card + Artificial Analysis + Vals AI + Epoch AI + OpenRouter independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
