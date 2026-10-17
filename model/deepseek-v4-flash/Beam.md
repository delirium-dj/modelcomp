# DeepSeek V4 Flash — findings by Beam

- Source: DeepSeek/DeepSeek V4 Flash, `deepseek-ai/deepseek-v4-flash`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash
- **Short description:** DeepSeek's open-weight MoE (Apr 24, 2026): 284B total / 13B active, 1M context. BenchLM 62.0 (DeepSeek V4 Flash 0731). V4.1-Flash GA (Sep 10, 2026) is the current routing (552B/8B+16B active, native multimodal).
- **Provider / access:** DeepSeek API `deepseek-v4-flash`; OpenRouter.
- **Release / knowledge:** Released 2026-04-24 (preview), V4.1-Flash GA 2026-09-10; knowledge cutoff not stated.
- **IDs:** `deepseek-ai/deepseek-v4-flash`
- **Context window:** 1,000,000 tokens; max output 384,000.
- **Modalities:** text in (V4.1-Flash adds native multimodal); text out; reasoning yes; tool calling yes. Open weights (MIT).
- **Pricing (as of 2026-10-17):** $0.14 / 1M input, $0.28 / 1M output (peak); $0.0028 cache hit; paid.
- **Architecture:** MoE, 284B total / 13B active (V4 Flash), 1M context, MIT. V4.1-Flash: 552B/8B+16B active, native multimodal.

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): Coming soon (not computed for DeepSeek V4 Flash 0731)
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

- Coding public-lane (BenchLM): Coming soon
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
- **Overall Score: 66.4/100.** Mean of five quality dims (BenchLM 62.0); best-fit for cheap agentic coding at ultra-low cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (DeepSeek official blog, BenchLM, Vals AI, Artificial Analysis, v4flash.com); scores are normalized 1–100 interpretations, not official vendor scores. Terminal-Bench 2.1 score is vendor-reported, not on official leaderboard.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|>