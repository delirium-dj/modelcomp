# Claude Opus 5 — findings by Kimi K3

- Source: Anthropic / Claude Opus 5 (`claude-opus-5`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's Opus-class flagship of the Claude 5 generation — Anthropic's recommended default for most workloads (per its own docs) — excelling at agentic tool use, coding, and long-horizon knowledge work. Succeeded at the very top by Fable 5.1/Mythos 5.1 (Sept 2026).
- **Provider / access:** Claude API `claude-opus-5`, Amazon Bedrock `anthropic.claude-opus-5`, Google Cloud, Microsoft Foundry (platform docs via felloai.com).
- **Release / knowledge:** GA in 2026 (pre-Sept; exact date not verified in my sources); knowledge cutoff May 2026; retirement no sooner than 2027-07-24 (felloai.com spec table).
- **IDs:** `anthropic/claude-opus-5` (no Free-tier ID verified on OpenCode Zen).
- **Context window:** 1M tokens input / 128K max output (felloai.com spec table; benchlm.ai lists coverage accordingly).
- **Modalities:** multimodal input (text/image; chart/PDF/document grounding benchmarks measured); text out; adaptive thinking with effort levels; tool calls; JSON mode.
- **Pricing (as of 2026-09-24):** $5/M input, $25/M output; cache reads $0.50/M; cache write $6.25 (5 min)/$10 (1 h); Batch $2.50/$12.50 (felloai.com).
- **Architecture:** proprietary (Anthropic); params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 (Vals): **84.6%**; Terminal-Bench 3.0: **42.7%**; Terminal-Bench 4.0: **52.3%** (felloai/Anthropic launch table)
- Tau3-Banking (AA): **42.1%** (benchlm.ai)
- GDPval-AA: **1862 Elo** (60.4% normalized) (benchlm.ai)
- MCP Atlas: **85.8%** (claim coverage 89.1%); Toolathlon-Verified: **80.6%** (Pass@3 87.0%, avg 23.5 turns) (benchlm.ai)
- BrowseComp: **90.8%**; DeepSearchQA: **95.0%**; OSWorld 2.0: **70.6%**; DRACO: **88.6%** (benchlm.ai)
- AA Briefcase: **1720 Elo**; AA Agentic Index: **56.2%**; AA AutomationBench: **56.6%**; AA EnterpriseOps-Gym: **47.5%** (benchlm.ai)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.2%** (AA); 93.4% (Vals) (benchlm.ai)
- HLE: **64.7%** (w/ tools); 56.3% (no tools); 54.4% (HLE-Verified) (benchlm.ai)
- AA-LCR: **79.3%**; MLCR-AA: **55.6%**; CritPt: **29.1%** (benchlm.ai)
- ARC-AGI-1: **97.5%**; ARC-AGI-2: **90.4%**; ARC-AGI-3: **30.2%** (benchlm.ai)
- Artificial Analysis Intelligence Index: **50.8** (benchlm.ai; 63 at high effort per AA via felloai.com); BenchLM overall **79.81/100, #5 of 507**
- AA-Omniscience Accuracy / Hallucination Rate: **60.9% / 60.8%** (benchlm.ai)
- IMO 2026: **42/42**; RiemannBench (tools): **79.0%**; MMLU-Pro (Vals): **91.6%** (benchlm.ai)

Coding:

- SWE-bench Verified: **96.0%**; SWE-bench (Vals): **97.0%**; SWE-bench Pro: **79.2%**; SWE Multilingual: **89.5%** (benchlm.ai)
- LiveCodeBench (Vals): **89.0%** (benchlm.ai)
- AA-SciCode: **56.4%**; AA Coding Index: **78.0** (benchlm.ai)
- DeepSWE: **68.8%**; FrontierSWE v2: **52.0%**; FrontierCode Ext: **63.6%**; CursorBench 3.2: **70.0%**; VulcanBench CII: **96.4%** (benchlm.ai)

Long context:

- AA-LCR 79.3% at the 1M window; no separate MRCR/RULER/GraphWalks public score found.

Multimodal:

- AA-MMMU-Pro: **84.7%**; Chartography (tools): **83.0%**; GDP.pdf (no tools): **83.4%**; OfficeQA: **78.1%**; Design Arena Website: **1319 Elo**; BenchCAD Vision2Code (tools): **0.821** (benchlm.ai)

### Normalized scores (1–100)

- **Tool use: 92/100.** Elite agentic stack: GDPval-AA 1862, MCP Atlas 85.8%, Toolathlon 80.6%, OSWorld 70.6%, TB 2.1 (Vals) 84.6%; capped only by mid Tau3-Banking (42.1%).
- **Reasoning: 90/100.** IMO 42/42, ARC-AGI-2 90.4%, GPQA ~93%, HLE 64.7% w/ tools; capped by CritPt 29.1% and ARC-AGI-3 30.2%.
- **Context window: 89/100.** 1M window / 128K output with LCR 79.3%; capped by lack of MRCR/RULER confirmation at max window.
- **Multimodal: 86/100.** Deep document/chart/vision suite (MMMU-Pro 84.7%, OfficeQA 78.1%, GDP.pdf 83.4%); text-only output caps it.
- **Coding: 91/100.** SWE-bench Verified 96% (Vals 97%), LiveCodeBench 89%, Coding Index 78.0 with breadth across 12+ coding benches; capped by SciCode 56.4% and FrontierSWE 52%.
- **Cost efficiency: 50/100.** $5/$25 per 1M is half of Fable-class pricing and AA measured the task suite at $2.34 completed (cheapest of its tier), but still unmistakably flagship-priced.
- **Overall Score: 90/100.** Mean of the five quality dims (92+90+89+86+91)/5 = 89.6 → 90. Best fit: the balanced flagship default — elite coding/agentic quality at half the price of the Fable/Mythos tier.

---

## Signature

- Provided by: **Kimi K3 (moonshotai/kimi-k3)** — 2026-09-24
- Method: fresh public web research (benchlm.ai scorecard, Anthropic pricing/specs via felloai.com, platform.claude.com docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
