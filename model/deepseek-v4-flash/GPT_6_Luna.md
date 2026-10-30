# DeepSeek V4 Flash — findings by GPT-6 Luna

- Source: DeepSeek/DeepSeek V4 Flash, `deepseek-ai/deepseek-v4-flash`
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash
- **Short description:** DeepSeek's 1M-context text-only reasoning MoE (284B total/13B active) for agentic coding: MRCR 78.7% at 1M, LiveCodeBench 91.6%, SWE-bench Verified 79%.
- **Provider / access:** DeepSeek API `deepseek-v4-flash`; OpenRouter.
- **Release / knowledge:** Released 2026-04-24 (preview), V4.1-Flash GA 2026-09-10; knowledge cutoff not stated.
- **IDs:** `opencode/deepseek-v4-flash` (the exact tracked route; alternate hosts are listed in the provider line).
- **Context window:** 1,000,000 total (384K max out)
- **Modalities:** Text in/out; reasoning/tool support as documented in the raw model card.
- **Pricing (as of 2026-10-30):** Market rate ~$0.14/$0.28 per 1M; the Zen id exists but Zen publishes no price row for it
- **Architecture:** MoE, 284B total / 13B active (V4 Flash), 1M context, MIT. V4.1-Flash: 552B/8B+16B active, native multimodal.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): not computed for DeepSeek V4 Flash 0731 in the collected extract
- Terminal-Bench 2.1 (vendor-reported): **82.7%** (DeepSeek)
- NL2Repo: **54.2%** (DeepSeek)
- Cybergym: **76.7%** (DeepSeek)
- DeepSWE: **54.4%** (DeepSeek)
- Toolathlon-Verified: **70.3%** (DeepSeek)
- Agents' Last Exam: **25.2%** (DeepSeek)
- AutomationBench (Public): **25.1%** (DeepSeek)
- DSBench-FullStack: **68.7%** (DeepSeek)
- DSBench-Hard: **59.6%** (DeepSeek)
- AA Intelligence Index: **50** (Artificial Analysis, +10 over prior Flash)
- GDPval-AA v2 Elo: **1559** (Artificial Analysis, up from 1189)
- BrowseComp: **73.2%** (BenchLM)
- HLE w/ tools: **45.1%** (BenchLM)
- MCP Atlas: **69%** (BenchLM)
- Toolathlon: **47.8%** (BenchLM)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **87.1** (Unranked · 4 rankable rows)
- GPQA: **88.1%** (BenchLM)
- MMLU-Pro: **86.2%** (BenchLM)
- HLE: **45.1%** (BenchLM w/ tools)
- AIME 2025: not reported for Flash
- HMMT Feb 2026: **94.8%** (BenchLM)
- IMOAnswerBench: **88.4%** (BenchLM)
- AA-LCR: not reported for Flash
- MRCR 1M: **78.7%** (BenchLM)

Coding:

- Coding public-lane (BenchLM): not computed in the collected extract
- SWE-bench Verified: **79.0%** (DeepSeek release materials)
- LiveCodeBench Pass@1-COT: **91.6%** (BenchLM)
- Codeforces: **3052.0** (BenchLM)
- SciCode: not reported for Flash
- Terminal-Bench 2.0: **56.9%** (BenchLM)

Long context:

- 1M window; MRCR 1M **78.7%** (BenchLM); AA-LCR not reported.

Multimodal:

- V4 Flash: text-only. V4.1-Flash: native multimodal (text/image). Multimodal lane not reported for Flash.

### Normalized scores (1–100)

- **Tool use: 70/100.** Terminal-Bench 2.1 82.7% (vendor), AA GDPval-AA 1559 Elo, MCP Atlas 69%, Toolathlon 47.8%, HLE w/ tools 45.1%; caps at vendor-reported Terminal-Bench (not on official leaderboard).
- **Reasoning: 74/100.** GPQA 88.1%, MMLU-Pro 86.2%, HMMT 94.8%, IMOAnswerBench 88.4%, HLE 45.1%; caps at vendor-reported numbers.
- **Context window: 76/100.** 1M window; MRCR 1M 78.7%; caps at no published AA-LCR.
- **Multimodal: 40/100.** V4 Flash text-only; V4.1-Flash adds native multimodal but no verified benchmarks.
- **Coding: 72/100.** SWE-bench 79.0%, LiveCodeBench 91.6%, Terminal-Bench 2.0 56.9%, Codeforces 3052; caps at vendor-reported Terminal-Bench 2.1.
- **Cost efficiency: 96/100.** Very cheap $0.14/$0.28 per 1M (peak).
- **Overall Score: 66.4/100.** Half-up mean of the five non-cost quality dimensions: (70 + 74 + 76 + 40 + 72) / 5 = 66.4. Cost efficiency is excluded. best-fit for cheap agentic coding at ultra-low cost.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-30 UTC
- Method: Public web research using the official model card/API documentation and the independent benchmark pages retained in the research extract; conflicting harnesses and inherited variant results are labelled in the raw section. Scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Source 1](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash)
  - [Source 2](https://openrouter.ai/deepseek/deepseek-v4-flash)
  - [Source 3](https://api-docs.deepseek.com/quick_start/pricing)
  - [Source 4](https://artificialanalysis.ai/models/deepseek-v4-flash)
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
