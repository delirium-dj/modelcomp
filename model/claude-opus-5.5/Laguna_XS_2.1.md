# Claude Opus 5.5 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-01 (UTC)
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5.5
- **Short description:** Anthropic's first Opus model in the Claude 5.5 family, released September 2026 as the flagship for long-running agentic coding, knowledge work, and computer use.
- **Provider / access:** Anthropic API (`claude-opus-5-5`); AWS Bedrock, Google Cloud Vertex; OpenRouter (`anthropic/claude-opus-5.5`); GitHub Copilot Pro+/Max; Cursor.
- **Release / knowledge:** Released 2026-09-22; knowledge cutoff undisclosed (estimated late 2025).
- **IDs:** `anthropic/claude-opus-5-5` (no Free-tier ID verified).
- **Context window:** 1,000,000 tokens total (1M); 128K default output, up to 300K with batch API beta header.
- **Modalities:** Text and image in; PDF in; text out; adaptive reasoning always on; tool calling; JSON mode unverified.
- **Pricing (as of 2026-10-01):** $4.00 input / $20.00 output per 1M tokens; cached read $0.20; write $0.20-$5.00. Paid-tier only.
- **Architecture:** Proprietary; parameter count undisclosed; no open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **59.6%** (AA max effort; ties leader GPT-6 Astra xhigh) | **66.4%** (vendor xhigh)
- GDPval-AA v2.1: **~1846 Elo** (derived from ranking, #1 on AA)
- GDPval-AA Briefcase: **1,822 Elo** (#1 on Artificial Analysis)
- AutomationBench: **42.5%** (Anthropic table; leads AA AutomationBench-AA)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **61.4%** (Artificial Analysis max effort, #1)
- Artificial Analysis Intelligence Index: **58** (max, #1 of 206)
- BenchLM Intelligence Index: **86.9** (#2 of 210)
- AA-LCR: **no verified public score** (AA says trailing leaders)
- CritPt: **no verified public score** (AA says trailing leaders)
- OMNISENSE: **no verified public score** (AA says leading)

Coding:

- SWE-bench Pro: **89.9%** (BenchLM/Anthropic, #1 of 60)
- SWE-bench Multilingual: **93.9%** (vendor, #1 on BenchLM)
- SWE-bench Multimodal: **61.4%** (#1 on BenchLM)
- DeepSWE v1.1: **74.2%** (BenchLM/Anthropic)
- SciCode: **66.9%** (Artificial Analysis, #1)
- ProgramBench: **91.2%** (vendor)
- FrontierCode 1.1: **54.4%** (vendor)
- FrontierSWE v2: **62.3%** (vendor via computingforgeeks)

Long context:

- No verified public MRCR/RULER/GraphWalks results found.

### Normalized scores (1-100)

Derived from benchmarks above using methodology in `model-comparison.md`:

- **Tool use: 92/100.** GDPval-AA ~1846 Elo exceeds 1750 frontier line; leads AA Briefcase 1,822 and AutomationBench 42.5%; capped by missing TB2.1, Tau3, Claw-Eval, OSWorld scores; TB4.0 59.6% at leader tier but not directly mapped to TB2.1 refs.
- **Reasoning: 93/100.** HLE 61.4% exceeds 40% frontier threshold; AA Index 58 is #1; capped by missing GPQA, LCR, CritPt, Omniscience numbers; index just below 60+ premium tier.
- **Context window: 96/100.** Full 1M verified; falls in >=1M tier (95-100); not 100 due to no MRCR/RULER verification at 512K+.
- **Multimodal: 82/100.** Text/image/PDF input qualifies for 75-90 tier; SWE-multimodal 61.4% strong; no audio/video; text-only output.
- **Coding: 96/100.** DeepSWE 74.2% meets 74% frontier; SciCode 66.9% beats 55% line; SWE-Pro 89.9% and SWE-Multilingual 93.9% excel; capped by missing SWE-Verified, LiveCodeBench, Terminal-Bench 2.1 scores.
- **Cost efficiency: 55/100.** $4/$20 per 1M is between $3/$15 (~60) and $10/$50 (~30) tiers; no free tier; cache rates competitive.
- **Overall Score: 92/100.** Mean of (92 + 93 + 96 + 82 + 96) / 5 = 91.8 → 92. Best fit: long-running agentic coding and knowledge work where peak capability trumps cost.

---

## Signature

- Provided by: **Laguna XS 2.1 (poolside/laguna-xs-2-1)** — 2026-10-01
- Method: public-internet research (Artificial Analysis, BenchLM, llm-stats.com, Anthropic docs, vendor reports); scores normalized 1-100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.