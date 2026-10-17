# GPT-5.6 Luna — findings by Beam

- Source: OpenAI/GPT-5.6 Luna, `openai/gpt-5.6-luna`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** OpenAI's budget tier in GPT-5.6 family (Jul 9, 2026): cheapest tier, 1.05M context, strong cost-efficiency. AA Intelligence 34.56, #118 on BenchLeader.
- **Provider / access:** OpenAI API `gpt-5.6-luna`; Azure; AWS Bedrock.
- **Release / knowledge:** Released 2026-07-09; knowledge cutoff not stated.
- **IDs:** `openai/gpt-5.6-luna`
- **Context window:** 1,050,000 tokens; max output 128,000.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-17):** $0.20 / 1M input, $1.20 / 1M output; paid.
- **Architecture:** proprietary; params undisclosed.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **56** (#39/128)
- Terminal-Bench 3.0: **14.3%**
- Terminal-Bench 2.1: **84.7%**
- BrowseComp: **83.3%**
- OSWorld 2.0: **45.6%**
- CyberGym: **77.9%**
- ExploitGym: **12.4%**
- Toolathlon: **53.4%**
- Terminal-Bench 2.1 (Vals): **79.0%**
- ApprenticeBench: **7%**
- MazeBench: **0%**
- WideSearch: **22** (OpenRouter, 100% exact table match)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **59.6** (#26/28)
- ARC-AGI-1: **88.00%**
- ARC-AGI-2: **59.5%**
- ARC-AGI-3: **0.2%**
- GPQA Diamond: not reported for Luna (Astra 96%)
- HealthBench (raw): **50.0%**
- HealthBench (length-adjusted): **54.5%**
- HealthBench Professional: **60.8%**
- AA Intelligence Index: **34.56**
- AA Long Context Reasoning: **81.67%**
- AA CritPt: **20.57%**
- AA GPQA Diamond: **89.49%**

Coding:

- Coding public-lane (BenchLM): **61.6** (#16/150)
- SWE-bench Pro: **62.7%**
- Terminal-Bench 2.1: **84.7%**
- DeepSWE: **67.2%**
- Bug Hunt Bench: **18.3 fixes**
- CursorBench 3.2: **61.1%**
- SWE-bench (Vals): **93.0%**
- CursorBench 4.0: **35.9%**

Long context:

- 1.05M window; AA Long Context Reasoning 81.67%.

Multimodal:

- Multimodal public-lane (BenchLM): **79.6** (#19/54)
- MMMU-Pro: **78.4%**
- MMMU-Pro w/ Python: **79.5%**
- ScreenSpot Pro: not reported

### Normalized scores (1–100)

- **Tool use: 74/100.** Agentic lane #39/128 (56), Terminal-Bench 2.1 84.7%, BrowseComp 83.3%, OSWorld 45.6%, CyberGym 77.9%; caps at Terminal-Bench 3.0 14.3%.
- **Reasoning: 74/100.** ARC-AGI-1 88.0%, ARC-AGI-2 59.5%, AA Intelligence 34.56, AA CritPt 20.57%, HealthBench 50-60.8%; caps at ARC-AGI-3 0.2%.
- **Context window: 86/100.** 1.05M window; AA Long Context Reasoning 81.67%.
- **Multimodal: 80/100.** Text/image in; MMMU-Pro 78.4%, MMMU-Pro w/ Python 79.5%.
- **Coding: 76/100.** SWE-bench Pro 62.7%, DeepSWE 67.2%, SWE-bench Vals 93.0%, coding lane #16/150 (61.6); caps at Bug Hunt 18.3 fixes.
- **Cost efficiency: 96/100.** Very cheap $0.20/$1.20 per 1M.
- **Overall Score: 78/100.** Mean of five quality dims (BenchLM aggregate 64.34); best-fit for budget agentic coding at very low cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (OpenAI/BenchLM, BenchLeader, The Aggregate, llm-stats); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.