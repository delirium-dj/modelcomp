# GLM 5.1 Coding — findings by Kimi K3

- Source: Z.AI / GLM 5.1 Coding (`glm-5.1-coding`; base `zai-org/GLM-5.1` family)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.1 (Coding deployment)
- **Short description:** Z.AI's earlier GLM-5 snapshot marketed for coding — outstanding math (AIME'26 95.3%, HMMT-Nov 94.0%), τ²-bench 97.7% tool calling, 203K context; now superseded by 5.2/5.3.
- **Provider / access:** Z.AI API (coding plan endpoints); open-weight family per benchlm (Source Type: Open Weight). No Zen Free ID verified.
- **Release / knowledge:** 2026 (pre-5.2; exact date not verified); cutoff not verified.
- **IDs:** `zai/glm-5.1` class (`glm-5.1-coding` deployment).
- **Context window:** 203K tokens (benchlm.ai); max output not verified.
- **Modalities:** text in/out (no vision rows); reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified public price found; Z.AI coding-plan pricing — provisional.
- **Architecture:** open-weight MoE (Z.AI); params undisclosed in my sources.

### Raw benchmarks found

Agent / tool use:

- τ²-bench (Tau2-Bench): **97.7%**; τ³-bench: **70.6%** (benchlm.ai)
- Claw-Eval: **62.3%**; ResearchClawBench: **18.2%** (benchlm.ai)
- Terminal-Bench 2.0: **63.5%**; TB 2.1 (Vals): **56.9%** (benchlm.ai)
- MCP Atlas: **71.8%**; CyberGym: **68.7%**; BrowseComp: **68.0%** (benchlm.ai)
- GDPval-AA: **1181 Elo** (30.2% normalized); AA Agentic Index: **25.2%** (benchlm.ai)

Reasoning / knowledge:

- GPQA Diamond: **86.2%** (GPQA-D); 86.8% (AA); 84.5% (Vals) (benchlm.ai)
- HLE: **52.3%** (w/ tools); AA-HLE: **30.1%** (benchlm.ai)
- AA-LCR: **73.7%**; CritPt: **4.6%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **26.1**; BenchLM overall **57.14/100, #48 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **23.7% / 29.9%** (benchlm.ai)
- AIME 2026: **95.3%**; HMMT Nov 2025: **94.0%**; HMMT Feb 2026: **82.6%**; FrontierMath v2: **33.4%** T1–3 / **12.5%** T4; MMLU-Pro (Vals): **86.9%** (benchlm.ai)

Coding:

- SWE-bench (Vals): **76.4%**; SWE-bench Pro: **58.4%**; SWE-Rebench: **62.7%** (benchlm.ai)
- LiveCodeBench (Vals): **81.4%** (benchlm.ai)
- Vibe Code Bench: **31.5%**; NL2Repo: **42.7%**; AA-SciCode: **44.8%**; AA Coding Index: **55.8** (benchlm.ai)

Long context:

- AA-LCR 73.7% within the 203K window (benchlm.ai); no MRCR/RULER rows.

Multimodal:

- Design Arena Website: **1290 Elo** (benchlm.ai); text-only otherwise.

### Normalized scores (1–100)

- **Tool use: 78/100.** τ² 97.7%, τ³ 70.6%, MCP Atlas 71.8%, Claw-Eval 62.3%; capped by GDPval 1181 and Agentic Index 25.2%.
- **Reasoning: 76/100.** AIME 95.3% / HMMT 94% / GPQA ~86% are strong for a snapshot; capped by AA-HLE 30.1% and CritPt 4.6%.
- **Context window: 66/100.** 203K window (not 1M) with LCR 73.7%.
- **Multimodal: 15/100.** Text-only deployment — floor.
- **Coding: 72/100.** LiveCodeBench 81.4%, SWE-bench (Vals) 76.4%; capped by Vibe Code 31.5% and Coding Index 55.8.
- **Cost efficiency: 80/100.** Z.AI coding-plan pricing historically aggressive; provisional.
- **Overall Score: 61/100.** Mean of the five quality dims (78+76+66+15+72)/5 = 61.4 → 61. Best fit: math-heavy text agents on Z.AI's coding plan; 5.3 strictly better where available.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
