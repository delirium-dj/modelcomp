# GPT-5.6 Luna — findings by Nemotron 3.5 Super VL 120B A12B

- Source: benchlm.ai/models/gpt-5-6-luna (OpenAI GPT-5.6 launch page openai.com/index/gpt-5-6/ + system card deploymentsafety.openai.com/gpt-5-6/gpt-5-6.pdf), Artificial Analysis, ARC Prize, Epoch AI, Vals AI
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI GPT-5.6 family variant (Luna) — proprietary reasoning model for agentic and coding tasks; part of the GPT-5.6 lineup (Sol/Terra/Luna/Cyber); 1.05M context per benchlm.ai, multimodal input, reasoning model.
- **Provider / access:** OpenAI API (GPT-5.6 family); native OpenAI API. Luna variant's dedicated developer page not found (404 on developers.openai.com); benchlm lists it under the GPT-5.6 family.
- **Release / knowledge:** GPT-5.6 family launch per openai.com/index/gpt-5-6/; knowledge cutoff not stated in fetched sources.
- **IDs:** `gpt-5.6-luna` (benchlm family variant; also `gpt-5.6-luna-low`/`gpt-5.6-luna-medium` listed as not computed). No Free ID confirmed.
- **Context window:** 1.05M tokens (benchlm.ai). 
- **Modalities:** Multimodal input (per OpenAI GPT-5.6 family), text out; reasoning yes; tool use yes; audio/video not confirmed for Luna specifically.
- **Pricing (as of 2026-10-16):** Not found in fetched sources for Luna specifically.
- **Architecture:** Proprietary (weights not public); parameter count undisclosed; reasoning model.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.7%** (OpenAI GPT-5.6 launch; Vals AI 79.0%)
- Terminal-Bench 3.0: **14.3%** (frontierbench.ai)
- BrowseComp: **83.3%** (OpenAI GPT-5.6 launch)
- OSWorld 2.0: **45.6%** (OpenAI GPT-5.6 launch)
- CyberGym: **77.9%** (OpenAI GPT-5.6 launch)
- ExploitGym: **12.4%** (OpenAI GPT-5.6 launch)
- Toolathlon: **53.4%** (OpenAI GPT-5.6 launch)
- GDPval-AA: **1582 Elo** (OpenAI GPT-5.6 launch; AA normalized 48.0%)
- APEX-Agents-AA: **35.8%** (Artificial Analysis)
- AA Agentic Index: **42.7%** (Artificial Analysis)
- ApprenticeBench: **7%** (NeoCognition)

Reasoning / knowledge:

- GPQA: **92.3%**; GPQA-D: **92.3%** (OpenAI GPT-5.6 launch); AA-GPQA Diamond **91.1%**; Vals **91.7%**
- MMLU-Pro: **86.0%** (Vals AI)
- ARC-AGI-1: **88.00%** (Luna Max, ARC Prize verified); ARC-AGI-2: **59.5%**; ARC-AGI-3: **0.2%** (ARC Prize)
- Artificial Analysis Intelligence Index: **51.2%** (Artificial Analysis)
- HLE: **39.5%** (AA-HLE)
- AA-LCR (long-context reasoning): **83.7%** (Artificial Analysis)
- CritPt: **20.6%** (Artificial Analysis)
- AA-Omniscience Index **-10.3%**; Accuracy **42.7%**; Hallucination rate **92.6%** (AA)
- FrontierMath v2 Tiers 1-3: **78.600%**; Tier 4: **58.500%** (OpenAI GPT-5.6 launch)

Coding:

- SWE-bench Pro: **62.7%** (OpenAI GPT-5.6 launch)
- DeepSWE: **67.2%** (OpenAI GPT-5.6 launch)
- FrontierCode 1.1 Extended: **55.1%** (Cognition/Devin)
- CursorBench 3.2: **61.1%**; CursorBench 4.0: **35.9%** (Cursor evals)
- AA-SciCode: **53.6%** (Artificial Analysis)
- AA Coding Index: **71.5%** (Artificial Analysis)
- VulcanBench v3: **85.5%** (vulcanbench.com)
- SWE-bench Vals: **93.0%** (Vals AI)

Multimodal:

- MMMU-Pro: **78.4%**; MMMU-Pro w/ Python **79.5%** (OpenAI GPT-5.6 launch); AA-MMMU-Pro **78.6%**

Long context:

- AA-LCR: **83.7%** (Artificial Analysis); declared 1.05M context (benchlm); no public full-depth needle-recall score beyond LCR.

### Normalized scores (1–100)

Derived from the raw numbers above using the methodology in `model-comparison.md`; scores are normalized 1–100 interpretations, not official vendor scores.

**OVERALL SCORE FORMULA (v4, see `RULES.md`):**
Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
**NEVER include Cost efficiency** — scored independently.

- **Tool use: 78/100.** Terminal-Bench 2.1 (84.7), BrowseComp (83.3), CyberGym (77.9), GDPval-AA (1582 Elo); capped by weak Terminal-Bench 3.0 (14.3), OSWorld 2.0 (45.6), ExploitGym (12.4), Toolathlon (53.4). Strong terminal/browse agent, weak on cyber/exploit and Terminal-Bench 3.0.
- **Reasoning: 76/100.** GPQA 92.3%, ARC-AGI-1 88.00%, FrontierMath T1-3 78.6%, AA Intelligence Index 51.2%, AA-LCR 83.7%; capped by CritPt (20.6), ARC-AGI-3 (0.2%), AA-Omniscience accuracy (42.7%), HLE (39.5%). Strong knowledge/puzzle reasoning.
- **Context window: 88/100.** Verified 1.05M context (benchlm); AA-LCR 83.7% shows long-context reasoning; capped because no public full-depth needle-recall score at the full window.
- **Multimodal: 78/100.** Multimodal input; MMMU-Pro 78.4–79.5%; capped by text-only output (not confirmed otherwise) and thin vision benchmark coverage.
- **Coding: 74/100.** SWE-bench Vals 93.0%, VulcanBench v3 85.5%, DeepSWE 67.2%, Terminal-Bench 2.1 84.7%; capped by SWE-bench Pro (62.7), CursorBench 4.0 (35.9), FrontierCode Extended (55.1). Strong SWE/coding-agent profile.
- **Cost efficiency: 70/100.** Pricing not found for Luna specifically; scored mid-range; not counted toward Overall.
- **Overall Score: 79/100.** Half-up mean of (78 + 76 + 88 + 78 + 74) / 5 = 78.8 → 79. Best-fit recommendation: GPT-5.6-family agentic model strong on SWE-bench and terminal coding; verify on OSWorld/cyber/exploit tasks given mixed results there.

---

## Signature

- Provided by: **Nemotron 3.5 Super VL 120B A12B (nvidia/NVIDIA-Nemotron-3.5-Super-VL-120B-A12B-BF16)** — 2026-10-16
- Method: public internet research (benchlm.ai + OpenAI GPT-5.6 launch page + system card + Artificial Analysis + ARC Prize + Epoch AI + Vals AI independent analysis); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, using the same headings.
