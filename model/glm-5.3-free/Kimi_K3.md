# GLM 5.3 (Free) — findings by Kimi K3

- Source: Z.AI / GLM-5.3 (`opencode/glm-5.3-free`; open weights `zai-org/GLM-5.3`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM 5.3 Free
- **Short description:** Z.AI's flagship open-weights GLM-5.3 MoE for agentic software development and multi-step tool execution; free promotional tier on OpenCode Zen at 204K context (native 1M per benchlm).
- **Provider / access:** OpenCode Zen `opencode/glm-5.3-free` (Chat Completions); Z.AI API; open weights HF `zai-org/GLM-5.3`.
- **Release / knowledge:** 2026 (after GLM-5.2 Jun 2026; exact date not verified in my sources); cutoff not verified.
- **IDs:** `opencode/glm-5.3-free` (Free Zen ID); `zai-org/GLM-5.3` (weights).
- **Context window:** 1M native (benchlm.ai); **Zen free tier lists 204K** (promotional cap).
- **Modalities:** text in/out (Zen listing; GLM-5V variants cover vision); reasoning yes; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** Free Zen tier ($0); open weights → self-host; Z.AI API pricing not verified in my sources.
- **Architecture:** open-weight MoE (Z.AI); params undisclosed in retrieved card data.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.2%** (Vals 71.5%); terminalBench3: **28.3%** (benchlm.ai)
- GDPval-AA: **1769 Elo** (57.3% normalized) — top-decile (benchlm.ai)
- Tau3-Banking (AA): **50.3%** (benchlm.ai)
- CyberGym: **84.5%**; Toolathlon-Verified: **73.0%**; AA AutomationBench: **62.2%**; AA Briefcase: **1525**; AA Agentic Index: **53.4%**; HLE w/ tools: **62.5%** (benchlm.ai)
- Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **91.7%** (AA); 88.1% (Vals) (benchlm.ai)
- HLE (AA-HLE): **42.3%**; w/ tools 62.5% (benchlm.ai)
- AA-LCR: **79.7%**; MLCR-AA: **48.3%**; CritPt: **19.1%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **44.8**; BenchLM overall **65.55/100, #26 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **33.9% / 29.6%** (benchlm.ai)
- MMLU-Pro (Vals): **86.8%** (benchlm.ai)

Coding:

- SWE-bench (Vals): **95.4%** (benchlm.ai); SWE-bench Verified: no separate verified public score found
- LiveCodeBench (Vals): **80.5%** (benchlm.ai)
- FrontierSWE: **78.1%**; FrontierSWE v2: **30.2%**; DeepSWE: **66.9%**; NL2Repo: **58.0%**; VulcanBench v3: **78.3%** (benchlm.ai)
- AA-SciCode: **59.0%**; AA Coding Index: **74.8** (benchlm.ai)

Long context:

- AA-LCR 79.7% within the 1M window (benchlm.ai); no MRCR/RULER rows.

Multimodal:

- Design Arena Website: **1312 Elo** (benchlm.ai); text-only on Zen free tier.

### Normalized scores (1–100)

- **Tool use: 88/100.** GDPval 1769, TB 2.1 88.2%, CyberGym 84.5%, Toolathlon 73.0% — genuinely elite open-weight agentic stack; capped by terminalBench3 28.3%.
- **Reasoning: 81/100.** GPQA 91.7%, HLE w/ tools 62.5%, MLCR 48.3%, low hallucination 29.6%; capped by CritPt 19.1% and AA-HLE 42.3%.
- **Context window: 84/100.** 1M native with LCR 79.7%; Zen free tier caps at 204K, costing practical headroom.
- **Multimodal: 15/100.** Text-only on this Zen entry — floor (GLM-5V variants are separate models).
- **Coding: 85/100.** SWE-bench (Vals) 95.4%, FrontierSWE 78.1%, Coding Index 74.8; capped by ProgramBench 19% and Vals LiveCodeBench 80.5%.
- **Cost efficiency: 98/100.** $0 Zen promotional tier + open weights.
- **Overall Score: 71/100.** Mean of the five quality dims (88+81+84+15+85)/5 = 70.6 → 71. Best fit: free agentic coding at near-frontier agent metrics — best free-tier coding value in this cohort if text-only suffices.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, repo catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
