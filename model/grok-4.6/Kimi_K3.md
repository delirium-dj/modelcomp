# Grok 4.6 — findings by Kimi K3

- Source: xAI / Grok 4.6 (`grok-4-6`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's flagship reasoning model ahead of Grok 4.5 — strong tool calling and knowledge QA (GPQA ~95%) with a notable weakness at max-context retrieval and hard frontier tasks. Docs: docs.x.ai/developers/grok-4-6.
- **Provider / access:** xAI API (`grok-4-6`, OpenAI-compatible Chat Completions); X/Grok consumer surfaces.
- **Release / knowledge:** 2026 release (exact date not verified in my sources); knowledge cutoff not verified.
- **IDs:** `xai/grok-4-6` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 500K tokens (benchlm.ai) — half a million, below the 1M frontier standard.
- **Modalities:** text/image in (Design Arena measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified public price found in my sources.
- **Architecture:** proprietary (xAI); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **78.3%**; Terminal-Bench 3.0: **26.5%** (benchlm.ai); TB 2.1 primary: no verified public score found
- Tau3-Banking (AA): **50.7%** (benchlm.ai) — best Tau3 among non-flagship peers here
- GDPval-AA: **1605 Elo** (55.3% normalized) (benchlm.ai)
- APEX-Agents: **57.5%**; AA AutomationBench: **66.7%**; AA Briefcase: **1546**; AA EnterpriseOps-Gym: **48.3%**; AA Agentic Index: **53.4%** (benchlm.ai)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.9%** (AA); 94.7% (Vals) (benchlm.ai)
- HLE (AA-HLE): **42.9%** (benchlm.ai)
- AA-LCR: **80.3%**; CritPt: **17.1%** (benchlm.ai)
- ARC-AGI-1: **87.0%**; ARC-AGI-2: **67.1%**; ARC-AGI-3: **2.1%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **44.3** (benchlm.ai); BenchLM overall **69.19/100, #15 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **48.2% / 34.3%** — good grounding (benchlm.ai)
- MMLU-Pro (Vals): **89.4%** (benchlm.ai)

Coding:

- SWE-bench (Vals): **95.6%** — near top of cohort (benchlm.ai); SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **88.2%** (benchlm.ai)
- AA-SciCode: **56.5%**; AA Coding Index: **76.8** (benchlm.ai)
- DeepSWE: **65.9%**; FrontierSWE v2: **25.3%**; FrontierCode Ext: **61.3%**; CursorBench 3.2: **70.8%**; VulcanBench v3: **87.0%** (benchlm.ai)

Long context:

- AA-LCR 80.3% within the 500K window (benchlm.ai); no 1M window exists; no MRCR/RULER public score found.

Multimodal:

- Design Arena Website: **1302 Elo** (benchlm.ai); no MMMU/CharXiv public row found.

### Normalized scores (1–100)

- **Tool use: 84/100.** GDPval-AA 1605 (55.3%), AutomationBench 66.7%, Tau3-Banking 50.7%, APEX-Agents 57.5% — strong agentic suite; capped by TB 3.0 26.5% and ApprenticeBench 13%.
- **Reasoning: 82/100.** GPQA ~94.8%, ARC-AGI-2 67.1%, LCR 80.3%, low hallucination (34.3%); capped by HLE 42.9% and CritPt 17.1%.
- **Context window: 72/100.** 500K window is half the 1M frontier standard; LCR 80.3% is good within it, but the smaller ceiling caps this dimension.
- **Multimodal: 68/100.** Image input with Design Arena 1302; no audio/video/PDF rows and sparse third-party vision coverage cap it.
- **Coding: 85/100.** SWE-bench (Vals) 95.6%, LiveCodeBench 88.2%, Coding Index 76.8, CursorBench 3.2 70.8%; capped by FrontierSWE v2 25.3% and DeepSWE 65.9%.
- **Cost efficiency: 70/100.** Price unverified; scored provisional on mid-tier xAI positioning.
- **Overall Score: 78/100.** Mean of the five quality dims (84+82+72+68+85)/5 = 78.2 → 78. Best fit: xAI-stack agentic coding where the 500K window suffices.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, docs.x.ai); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
