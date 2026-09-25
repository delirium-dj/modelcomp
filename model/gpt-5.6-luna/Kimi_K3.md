# GPT-5.6 Luna — findings by Kimi K3

- Source: OpenAI / GPT-5.6 Luna (`gpt-5.6-luna`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's lighter GPT-5.6 variant (siblings Sol/Terra/Cyber) — keeps solid TB 2.1 (84.7%) and FrontierMath (78.6%) at presumably lower cost/speed trade-off.
- **Provider / access:** OpenAI API (`gpt-5.6-luna`, OpenAI-compatible).
- **Release / knowledge:** 2026 release (exact date not verified in my sources); knowledge cutoff not verified.
- **IDs:** `openai/gpt-5.6-luna` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1.05M tokens (benchlm.ai); max output not verified.
- **Modalities:** text/image in (MMMU-Pro measured); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** no verified public price found in my sources; Luna is the budget GPT-5.6 variant (provisional).
- **Architecture:** proprietary (OpenAI); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **84.7%** (Vals 79.0%); TB 3.0: **14.3%** (benchlm.ai)
- Tau3-Banking (AA): **31.1%** (benchlm.ai)
- GDPval-AA: **1582 Elo** (47.2% normalized) (benchlm.ai)
- OSWorld 2.0: **45.6%**; CyberGym: **77.9%**; Toolathlon: **53.4%**; BrowseComp: **83.3%**; AA Harvey LAB: **87.9%** (benchlm.ai)
- AA Agentic Index: **42.7%**; ApprenticeBench: **7%** (benchlm.ai)
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (GPQA-D; AA 91.1%; Vals 91.7%) (benchlm.ai)
- HLE (AA-HLE): **39.5%** (benchlm.ai)
- AA-LCR: **83.7%**; MLCR-AA: **19.4%**; CritPt: **20.6%** (benchlm.ai)
- ARC-AGI-2: **59.5%**; ARC-AGI-3: **0.2%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **51.2**; BenchLM overall **65.6/100, #25 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **42.7% / 92.6%** (benchlm.ai)
- FrontierMath v2 T1–3: **78.6%**, Tier 4: **58.5%**; MMLU-Pro (Vals): **86.0%** (benchlm.ai)

Coding:

- SWE-bench (Vals): **93.0%**; SWE-bench Pro: **62.7%**; SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): no verified public score found
- DeepSWE: **67.2%** (benchlm.ai)
- AA-SciCode: **53.6%**; AA Coding Index: **71.5**; VulcanBench v3: **85.5%**; CursorBench 3.2: **61.1%** (benchlm.ai)

Long context:

- AA-LCR 83.7% at the 1.05M window (benchlm.ai); no MRCR/RULER public score found.

Multimodal:

- MMMU-Pro: **78.4%** (w/ Python 79.5%; AA 78.6%) (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 79/100.** TB 2.1 84.7%, GDPval-AA 1582, Harvey LAB 87.9%; capped by Tau3-Banking 31.1%, TB 3.0 14.3%, ApprenticeBench 7%.
- **Reasoning: 78/100.** GPQA ~92%, LCR 83.7%, FrontierMath 78.6/58.5 are good; capped by hallucination 92.6%, HLE 39.5%, ARC-AGI-3 0.2%.
- **Context window: 87/100.** 1.05M window with LCR 83.7%; capped by missing max-window probes.
- **Multimodal: 68/100.** MMMU-Pro ~78.5% vision input; no audio/video/doc rows; text-only output.
- **Coding: 79/100.** SWE-bench (Vals) 93.0%, DeepSWE 67.2%, Coding Index 71.5; capped by SWE-bench Pro 62.7% and SciCode 53.6%.
- **Cost efficiency: 76/100.** Budget-variant positioning within GPT-5.6 (below Sol's $4/$20) — provisional.
- **Overall Score: 78/100.** Mean of the five quality dims (79+78+87+68+79)/5 = 78.2 → 78. Best fit: cost-conscious OpenAI workloads needing 1M context without Sol-tier spend.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
