# MiniMax M2.7 — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/minimax-m2-7 (MiniMax M2.7 model card), Artificial Analysis (`artificialanalysis.ai/models/minimax-m2-7`), Vals AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.7
- **Short description:** MiniMax's proprietary non-reasoning model; 200K context / text+in → text out; related earlier model: MiniMax M2.5; sibling: MiniMax M3, MiniMax M3.1 Flash Preview.
- **Provider / access:** MiniMax API (`minimax-m2-7`); proprietary (weights not public).
- **Release / knowledge:** Released 2026 per MiniMax; knowledge cutoff not stated.
- **IDs:** `minimax-m2-7` (MiniMax API / OpenRouter). No Free ID confirmed.
- **Context window:** 200K tokens (benchlm.ai). Verified.
- **Modalities:** Not confirmed on benchlm.ai; assumed text in → text out per MiniMax docs; reasoning type: Non-Reasoning per benchlm.ai; tool use yes (agentic tasks); JSON mode not advertised.
- **Pricing (as of 2026-10-16):** Not found on benchlm.ai or AA.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; non-reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **57%** (MiniMax M2.7 launch page)
- τ³-bench results: **67.6%** (GLM-5.1 model card comparison table)
- Toolathlon: **46.3%** (MiniMax M2.7 launch page)
- MLE-Bench Lite: **66.6%** (MiniMax M2.7 launch page)
- MM-ClawBench: **62.7%** (MiniMax M2.7 launch page)
- Claw-Eval: **48.7%** (Claw-Eval leaderboard)
- τ²-bench results: **84.8%** (Artificial Analysis)
- GDPval-AA: **1087 Elo** (Artificial Analysis); normalized **25.5%**
- AA Agentic Index: **16.8%** (Artificial Analysis)
- ResearchClawBench: not found for this variant
- Terminal-Bench 2.1 (Vals): **48.7%** (Vals AI)
- APEX-Agents-AA: **10.6%** (Artificial Analysis)

Reasoning / knowledge:

- HLE: **28%** (GLM-5.1 model card comparison table)
- GPQA-D: **87.0%** (GLM-5.1 model card comparison table); AA-GPQA Diamond **87.4%**
- MMLU-Pro: **80.8%** (Arcee Trinity-Large-Thinking comparison table); MMLU-Pro (Vals) **80.4%**
- Artificial Analysis Intelligence Index: **22.8%** (Artificial Analysis)
- AA-LCR (long-context reasoning): **78.3%** (Artificial Analysis)
- CritPt: **0.6%** (Artificial Analysis)
- AA-Omniscience Index **0.8%**; Accuracy **26.8%**; Hallucination rate **35.6%** (AA)
- GPQA Diamond (Vals): **86.6%** (Vals AI)
- AIME25 (Arcee): **80.0%** (Arcee Trinity-Large-Thinking comparison table)
- AIME26: **89.8%** (GLM-5.1 model card comparison table)
- HMMT Nov 2025: **81.0%** (GLM-5.1 model card comparison table)
- HMMT Feb 2026: **72.7%** (GLM-5.1 model card comparison table)

Coding:

- SWE-bench Verified*: **75.4%** (Arcee Trinity-Large-Thinking comparison table)
- SWE-bench Pro: **56.2%** (MiniMax M2.7 launch page)
- SWE-Rebench: **51.9%** (SWE-Rebench leaderboard)
- SWE Multilingual: **76.5%** (MiniMax M2.7 launch page)
- Multi-SWE Bench: **52.7%** (MiniMax M2.7 launch page)
- VIBE-Pro: **55.6%** (MiniMax M2.7 launch page)
- NL2Repo: **39.8%** (MiniMax M2.7 launch page)
- Terminal-Bench 2.0: **57.0%** (MiniMax M2.7 launch page)
- Vibe Code Bench: **27.04%** (Vals AI)
- React Native Evals: **71.4%** (React Native Evals leaderboard)
- AA-SciCode: **50.1%** (Artificial Analysis)
- LiveCodeBench v6: **79.9%** (Vals AI)
- SWE-bench (Vals): **73.8%** (Vals AI)
- AA Coding Index: **52.6%** (Artificial Analysis)

Multimodal & grounded:

- Design Arena Website: **1244** (OpenRouter)

Long context:

- AA-LCR: **78.3%** (Artificial Analysis); declared 200K context; no public full-depth needle-recall score beyond AA-LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 62/100.** Terminal-Bench 2.0 (57%), τ³-bench (67.6%), τ²-bench (84.8%), MCP Atlas (58.2%), MLE-Bench Lite (66.6%), MM-ClawBench (62.7%), GDPval-AA (1087 Elo); capped by weak Toolathlon (46.3%), AA Agentic Index (16.8%), GDPval-AA normalized (25.5%), APEX-Agents-AA (10.6%), Terminal-Bench 2.1 Vals (48.7%). Moderate agentic tool-use profile.
- **Reasoning: 66/100.** GPQA-D 87.0%, MMLU-Pro 80.8%, AA-LCR (78.3%), FrontierMath T1-3 not found for this variant; capped by CritPt (0.6%), HLE (28%), AA-HLE (29.6%), AA-Omniscience accuracy (26.8%), Intelligence Index (22.8%). Moderate reasoning.
- **Context window: 75/100.** Verified 200K tokens (benchlm.ai); AA-LCR 78.3%; capped because context below 1M frontier and no public full-depth needle-recall score beyond AA-LCR.
- **Multimodal: 45/100.** Text+in → text out assumed; Design Arena Website 1244; capped by text-only output assumption.
- **Coding: 68/100.** SWE-bench Verified* (75.4%), LiveCodeBench v6 (79.9%), SWE-bench Vals (73.8%), SWE Multilingual (76.5%), React Native Evals (71.4%), AA Coding Index (52.6%); capped by Vibe Code Bench (27.04%), SWE-bench Pro (56.2%), NL2Repo (39.8%), AA-SciCode (50.1%). Moderate coding.
- **Cost efficiency: 50/100.** No pricing data found; scored conservatively.
- **Overall Score: 63/100.** Half-up mean of (62 + 66 + 75 + 45 + 68) / 5 = 63.2 → 63. Best-fit recommendation: strong LiveCodeBench coding at 200K context with open weights; verify on agentic and HLE-class tasks given mixed results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + MiniMax M2.7 model page + GLM-5.1 model card comparison table + Arcee Trinity-Large-Thinking comparison table + Artificial Analysis + Vals AI + OpenRouter independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
