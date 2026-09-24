# GPT-6 Astra — findings by Kimi K3

- Source: OpenAI / GPT-6 Astra (`gpt-6-astra`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI's frontier GPT-6 flagship (released September 3, 2026), BenchLM's #1-ranked model overall; excels at agentic computer use, coding, and math, and carries OpenAI's first "Critical" cyber capability rating (TechPlained). Siblings: GPT-6 Sol, GPT-6 Luna.
- **Provider / access:** OpenAI API (`gpt-6-astra`, OpenAI-compatible endpoint); ChatGPT Plus via Work and Codex surfaces (arte.itlibra.com).
- **Release / knowledge:** Released 2026-09-03; knowledge cutoff April 30, 2026 (arte.itlibra.com, userightai.com).
- **IDs:** `openai/gpt-6-astra` (no Free-tier ID verified on OpenCode Zen at time of research).
- **Context window:** 1,050,000 tokens input / 128K max output (userightai.com; benchlm.ai lists 1.05M).
- **Modalities:** text/image in (ScreenSpot Pro, MMMU-Pro measured); text out; reasoning yes; tool calls; JSON mode. Advanced computer use.
- **Pricing (as of 2026-09-24):** $10/M input, $50/M output, ~$1/M cached input (90% cache discount) (artificialanalysis.ai, benchlm.ai).
- **Architecture:** proprietary (OpenAI); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **87.3%**; Terminal-Bench 4.0: **57.9%**; Terminal-Bench-Science 0.1: **64.6%** (benchlm.ai)
- Tau3-Banking (AA): **41.4%** (benchlm.ai)
- GDPval-AA: **1542 Elo** (52.1% normalized) (benchlm.ai)
- BrowseComp: **91.5%**; OSWorld 2.0: **72.6%** (chart-topping computer use); Agents' Last Exam: **59.3%** (benchlm.ai)
- HLE w/ tools: **57.2%**; AA Briefcase: **1569 Elo**; AA AutomationBench: **68.5%**; AA Agentic Index: **51.5%**; ExploitGym: **42.4%** (benchlm.ai)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **96.0%** (GPQA-D; AA 96.1%) (benchlm.ai)
- HLE (AA-HLE): **54.7%**; HLE w/ tools 57.2% (benchlm.ai)
- AA-LCR: **80.7%**; MLCR-AA: **35.0%**; CritPt: **31.7%** (benchlm.ai)
- ARC-AGI-1: **98.5%**; ARC-AGI-2: **95.0%**; ARC-AGI-3: **62.7%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **52.7** (ties Claude Fable 5.1 for #1 per AA); BenchLM overall **88.69/100, #1 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **62.6% / 51.3%** (benchlm.ai)
- FrontierMath v2 Tier 4: **97.6%**; HealthBench Hard: **36.6%** (benchlm.ai)

Coding:

- FrontierSWE v2: **65.5%**; FrontierCode 1.1 Main: **53.3%**, Extended: **64.5%** (benchlm.ai)
- DeepSWE: **74.1%** (benchlm.ai)
- AA-SciCode: **56.5%** (benchlm.ai)
- AA Coding Index: **76.9** (benchlm.ai)
- SWE-bench Verified / LiveCodeBench: no verified public score found (Terminal-Bench 2.1 Vals 87.3% as closest agentic-coding proxy)

Long context:

- MRCR v2 256K–512K: **100.0%**; MRCR v2 512K–1M: **96.3%** (benchlm.ai) — near-perfect retrieval across the 1.05M window.

Multimodal:

- ScreenSpot Pro: **92.7%**; AA-MMMU-Pro: **86.9%**; BenchCAD Vision2Code (tools): **0.959** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 93/100.** Best-in-class agentic suite: BrowseComp 91.5%, OSWorld 72.6%, Terminal-Bench 4.0 57.9%, ApprenticeBench 68%; capped by middling Tau3-Banking (41.4%).
- **Reasoning: 94/100.** GPQA 96%, HLE 54.7–57.2%, ARC-AGI-2 95%, ARC-AGI-3 62.7% (a runaway frontier lead), FrontierMath Tier 4 97.6%; barely capped by MLCR 35%.
- **Context window: 96/100.** 1.05M window with MRCR v2 100% at ≤512K and 96.3% at 512K–1M — the best measured long-context retrieval found.
- **Multimodal: 88/100.** Strong vision grounding (ScreenSpot Pro 92.7%, MMMU-Pro 86.9%); capped by text-only output and no verified audio/video input rows.
- **Coding: 89/100.** AA Coding Index 76.9, DeepSWE 74.1%, FrontierSWE v2 65.5%, FrontierCode Ext 64.5% — frontier agentic coding; capped by missing SWE-bench Verified/LiveCodeBench rows in public sources.
- **Cost efficiency: 35/100.** $10/$50 per 1M is 2.5× GPT-5.6 Sol pricing — frontier price for frontier quality; cache discount (90%) softens it slightly.
- **Overall Score: 92/100.** Mean of the five quality dims (93+94+96+88+89)/5 = 92.0. Best fit: the current flagship default for autonomous agents, computer use, and hardest-tier reasoning/coding when budget is secondary.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, artificialanalysis.ai, userightai.com, TechPlained, itlibra/arte); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
