# GPT-5.6 Sol — findings by Beam

- Source: OpenAI/GPT-5.6 Sol, `openai/gpt-5.6-sol`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Sol
- **Short description:** OpenAI's flagship Sol (Jul 9, 2026) in the GPT-5.6 family; state of the art on Terminal-Bench 2.1, SWE-bench Verified, Agents' Last Exam; strong cyber (ExploitBench competitive with Mythos Preview at 1/3 tokens). Previewed with robust safeguards.
- **Provider / access:** OpenAI API `gpt-5.6-sol` (limited preview); Azure; AWS Bedrock.
- **Release / knowledge:** Released 2026-07-09 (limited preview); knowledge cutoff not stated.
- **IDs:** `openai/gpt-5.6-sol`
- **Context window:** 1,050,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes (max effort, ultra mode with subagents); tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $4.00 / 1M input, $20.00 / 1M output; paid.
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **68.7** (#12/128)
- Terminal-Bench 2.1: **91.9%** (OpenAI) / 85.77% (Vals)
- Terminal-Bench 3.0: **34.6%**
- BrowseComp: **92.2%**
- OSWorld 2.0: **62.6%**
- CyberGym: **84.5%**
- ExploitGym: **33.7%**
- Toolathlon: **58%**
- Agents' Last Exam: **53.6** (new high, +13.1 over Fable 5)
- Vals Index: **58.01%** (#12/49)

Reasoning / knowledge:

- ARC-AGI-1: **96.50%**
- ARC-AGI-2: **92.5%**
- ARC-AGI-3: **7.8%**
- FrontierMath (legacy): **89%**
- FrontierMath v2 (Tiers 1-3): **89.000%**
- FrontierMath v2 (Tier 4): **83.000%**
- GeneBench-Pro: **28.7%**
- GPQA Diamond: **95.20%**
- HLE: not reported

Coding:

- Coding public-lane (BenchLM): **67.4** (#11/150)
- SWE-bench Verified: **96.20%** (#1 Vals)
- SWE-bench Pro: **64.6%**
- DeepSWE: **72.7%**
- LiveCodeBench: **82.60%**
- Vibe Code Bench v1.1: **80.50%**
- Bug Hunt Bench: **42.0 fixes**
- VulcanBench v3: **87.0%**
- VulcanBench CII v1: **86.5%**
- CursorBench 4.0: **41.7%**
- FrontierCode 1.1 Extended: **60.6%**
- FrontierSWE v2: **32.2%**

Long context:

- 1.05M window; MRCR: not reported.

Multimodal:

- MMMU-Pro: **83%**; MMMU-Pro w/ Python: **86.5%** (Vals 88.84%)
- CharXiv: not reported

### Normalized scores (1–100)

- **Tool use: 86/100.** Agentic lane #12/128 (68.7), Terminal-Bench 2.1 91.9%, BrowseComp 92.2%, Agents' Last Exam 53.6, OSWorld 62.6%, CyberGym 84.5%; caps at ExploitGym 33.7%.
- **Reasoning: 88/100.** ARC-AGI-1 96.5%, ARC-AGI-2 92.5%, FrontierMath Tier4 83.0%, GPQA 95.2%; caps at ARC-AGI-3 7.8%.
- **Context window: 88/100.** 1.05M window; caps at no published MRCR retrieval.
- **Multimodal: 88/100.** Text/image/file in; MMMU-Pro 83%, MMMU-Pro w/ Python 86.5%.
- **Coding: 86/100.** SWE-bench Verified 96.2%, DeepSWE 72.7%, LiveCodeBench 82.6%, coding lane #11/150 (67.4); caps at SWE-bench Pro 64.6%.
- **Cost efficiency: 80/100.** Mid-premium $4/$20 per 1M.
- **Overall Score: 87/100.** Mean of five quality dims (BenchLM aggregate 75.3); best-fit for agentic coding + cyber at mid cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (OpenAI preview, BenchLM, Vals AI, Kilo); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.