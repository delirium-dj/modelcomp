# GPT-5.5 — findings by Laguna XS 2.1

> Source: poolside/Laguna-XS-2.1 (Poolside AI), e.g. Hugging Face model card, Artificial Analysis, BenchLM, trajectories.poolside.ai
> Date: 2026-10-11 (UTC) — second-pass verification
> Overview and scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.5
- **Short description:** OpenAI's spring 2026 flagship (ChatGPT 2026-04-23, API 2026-04-24) — a "fully retrained agentic model," SOTA at launch on Terminal-Bench 2.0 (82.7%), GDPval (84.9%) and OSWorld-Verified (78.7%); succeeded by the GPT-5.6 family in July.
- **Provider / access:** OpenAI API (`gpt-5.5`, Responses + Chat Completions + Batch + Flex), ChatGPT, Codex, Azure, AWS Bedrock.
- **Release / knowledge:** 2026-04-23; knowledge cutoff December 2025.
- **Context window:** 1,050,000 tokens; 128K max output.
- **Modalities:** text + image in; text out; reasoning yes (efforts none/low/medium/high/xhigh); tool calls yes; JSON mode yes.
- **Pricing:** $5 / $30 per 1M in/out; cached input $0.50; Batch/Flex 50%; Priority 2.5x.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **82.7%** (OpenAI, Codex CLI scaffold)
- Terminal-Bench 2.1: **78.2%**
- OSWorld-Verified: **78.7%** (OpenAI)
- Tau2-bench Telecom: **98.0%** no prompt tuning
- MCP Atlas: **75.3%**
- GDPval: **84.9%** wins/ties; GDPval-AA **1769 Elo** / v2 **1494**
- BrowseComp: **84.4%**
- AutomationBench: **12.9%**

Reasoning / knowledge:

- GPQA Diamond: **93.6%** (OpenAI)
- HLE: **41.4%** no tools / **52.2%** with tools
- ARC-AGI-2: **84.6-85.0%**
- FrontierMath: Tier 1-3 **51.7%**, Tier 4 **35.4%**
- MMLU: **92.4%**; MMLU-Pro: **88.1%**

Coding:

- SWE-bench Verified: **82.6%** (Vals.ai)
- SWE-bench Pro: **58.6%**
- DeepSWE 1.0: **64.3%**
- CursorBench 3.1: **64.3%** xhigh
- HumanEval: **94.2%**
- Aider Polyglot: **88.0%**

Long context:

- MRCR v2 (8-needle), 128K average: **94.8%** (OpenAI)

Multimodal:

- MMMU-Pro: **81.2%** / **88.3%** (Vals.ai CoT)
- CharXiv: **84.1%**

### Normalized scores (1–100)

- **Tool use: 90/100.** TB 2.0 82.7% (SOTA), OSWorld 78.7%, Tau2 98.0% and GDPval 84.9% (SOTA) frontier-grade; capped by AutomationBench 12.9% and MCP Atlas 75.3%.
- **Reasoning: 88/100.** GPQA 93.6%, ARC-AGI-2 ~85% and HLE 52.2% (with tools) led at launch; capped by FrontierMath T4 35.4% and no CritPt row.
- **Context window: 95/100.** 1.05M window with MRCR v2 94.8% at 128K — best-in-class at launch but not ≥98%-at-512K+.
- **Multimodal: 65/100.** Text + image in, text out only; MMMU-Pro up to 88.3%, CharXiv 84.1% — image-in band.
- **Coding: 89/100.** SWE-bench Verified 82.6%, TB 2.0 82.7%, DeepSWE 64.3% launch-leading; capped by newest generation (Opus 5.5/Astra/Argon).
- **Cost efficiency: 50/100.** $5/$30 maps to ~50 band; burned by newer Terra ($2/$12) delivering comparable quality.
- **Overall Score: 85.4/100.** Mean of (90,88,95,65,89)/5 = 85.4 — proven spring 2026 flagship; default to GPT-5.6 Sol/Terra unless pinned to this snapshot.