# GLM-5.3 — findings by Kimi K3

- Source: Z.AI / GLM-5.3 (`glm-5.3`; open weights `zai-org/GLM-5.3`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 (flagship)
- **Short description:** Z.AI's flagship open-weight GLM-5.3 MoE — BenchLM #26 overall; elite agentic stack (GDPval-AA 1769, TB 2.1 88.2%, CyberGym 84.5%) and SWE-bench (Vals) 95.4%. The `glm-5.3-free` Zen entry serves this model at $0 with a 204K cap.
- **Provider / access:** Z.AI API; open weights HF `zai-org/GLM-5.3`; free tier on OpenCode Zen (`glm-5.3-free`).
- **Release / knowledge:** 2026 (benchleader lists GLM 5.3 max released 18 Aug 2026); cutoff not verified.
- **IDs:** `zai/glm-5.3` (no separate Zen Free ID beyond the free entry).
- **Context window:** 1M native (benchlm.ai); Zen free tier lists 204K.
- **Modalities:** text in (Design Arena row); text out; reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** hosted price unverified in my sources; benchleader blended ~$2.15/M for GLM 5.2 as family anchor; open weights (provisional).
- **Architecture:** open-weight MoE (Z.AI), params undisclosed in retrieved card.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.2%** (Vals 71.5%); terminalBench3: **28.3%** (benchlm.ai)
- GDPval-AA: **1769 Elo** (57.3% normalized) (benchlm.ai)
- Tau3-Banking (AA): **50.3%** (benchlm.ai)
- CyberGym: **84.5%**; Toolathlon-Verified: **73.0%**; AA AutomationBench: **62.2%**; AA Briefcase: **1525**; AA Agentic Index: **53.4%**; HLE w/ tools: **62.5%** (benchlm.ai)
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (AA); 88.1% (Vals) (benchlm.ai)
- HLE (AA-HLE): **42.3%**; w/ tools 62.5% (benchlm.ai)
- AA-LCR: **79.7%**; MLCR-AA: **48.3%**; CritPt: **19.1%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **44.8**; BenchLM overall **65.55/100, #26 of 507**; benchleader.com GLM 5.3 max: BenchLeader Index 65.2, #42 of 736
- AA-Omniscience Accuracy / Hallucination Rate: **33.9% / 29.6%** (benchlm.ai)
- MMLU-Pro (Vals): **86.8%** (benchlm.ai)

Coding:

- SWE-bench (Vals): **95.4%** (benchlm.ai); SWE-bench Verified: no separate row
- LiveCodeBench (Vals): **80.5%** (benchlm.ai)
- FrontierSWE: **78.1%**; FrontierSWE v2: **30.2%**; DeepSWE: **66.9%** (benchlm.ai)
- AA-SciCode: **59.0%**; AA Coding Index: **74.8**; VulcanBench v3: **78.3%** (benchlm.ai)

Long context:

- AA-LCR 79.7% at the 1M window (benchlm.ai); no MRCR/RULER rows.

Multimodal:

- Design Arena Website: **1312 Elo** (benchlm.ai); GLM-5V variants are separate models; text-first here.

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval 1769, TB 2.1 88.2%, CyberGym 84.5%, Toolathlon 73.0% — elite agentic stack; capped by terminalBench3 28.3%.
- **Reasoning: 80/100.** GPQA 91.7%, HLE w/ tools 62.5%, MLCR 48.3%; capped by CritPt 19.1% and AA-HLE 42.3%.
- **Context window: 84/100.** 1M native with LCR 79.7%; Zen free tier caps at 204K.
- **Multimodal: 15/100.** Text-first entry — floor.
- **Coding: 85/100.** SWE-bench (Vals) 95.4%, FrontierSWE 78.1%, Coding Index 74.8; capped by ProgramBench 19%.
- **Cost efficiency: 85/100.** Open weights; typical GLM hosted pricing aggressive (provisional).
- **Overall Score: 70/100.** Mean of the five quality dims (88+80+84+15+85)/5 = 70.4 → 70. Best fit: open-weight agentic coding flagship for text pipelines; rivals cost 5–10× more.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, benchleader.com family data); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
