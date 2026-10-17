# DeepSeek V4 Pro — findings by Beam

- Source: DeepSeek/DeepSeek V4 Pro, `deepseek-ai/deepseek-v4-pro`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro
- **Short description:** DeepSeek's flagship MoE (Apr 24, 2026): 1.6T total / 49B active, 1M context. BenchLM 63.18 (#42 of 954). AA Intelligence Index 28.4 (Vals). SWE-bench Verified 80.6%. Terminal-Bench 2.1 87.9%. Open weights (MIT). $1.32/$3.96 per 1M.
- **Provider / access:** DeepSeek API; OpenRouter; HuggingFace.
- **Release / knowledge:** Released 2026-04-24 (preview); knowledge cutoff not stated.
- **IDs:** `deepseek-ai/deepseek-v4-pro`
- **Context window:** 1,000,000 tokens; max output 384,000.
- **Modalities:** text in; text out; reasoning yes; tool calling yes. Open weights (MIT).
- **Pricing (as of 2026-10-17):** $1.32 / 1M input, $3.96 / 1M output (peak); $0.66/$1.98 (off-peak); paid.
- **Architecture:** MoE, 1.6T total / 49B active, 1M context, MIT. (V4.1-Flash GA Sep 10 routes V4 Pro requests to V4.1-Flash.)

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **54.5** (Supported · #43/128)
- Terminal-Bench 2.0: **67.9%** (DeepSeek technical report)
- Terminal-Bench 2.1: **87.9%** (DeepSeek V4 Pro 0813 API update)
- BrowseComp: **83.4%** (DeepSeek technical report)
- HLE w/ tools: **60.0%** (DeepSeek V4 Pro 0813 API update)
- GDPval-AA: **54.5%** (Artificial Analysis)
- CyberGym: **83.3%** (DeepSeek V4 Pro 0813 API update)
- Toolathlon-Verified: **74.1%** (DeepSeek V4 Pro 0813 API update)
- Agents' Last Exam: **25.7%** (DeepSeek V4 Pro 0813 API update)
- MCP Atlas: **73.6%** (DeepSeek V4 Pro 0813 API update)

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **87.4** (Unranked · 4 rankable rows)
- MMLU-Pro: **87.5%** (DeepSeek technical report)
- Chinese-SimpleQA: **84.4%** (DeepSeek technical report)
- GPQA: **90.1%** (DeepSeek technical report)
- GPQA-D: **90.1%** (DeepSeek technical report)
- HLE: **42.7%** (DeepSeek V4 Pro 0813 API update)
- HLE w/o tools: not reported
- AA Intelligence Index: **28.4%** (Artificial Analysis, via Vals AI)
- HMMT Feb 2026: **95.2%** (DeepSeek technical report)
- IMOAnswerBench: **89.8%** (DeepSeek technical report)
- Apex: **38.3%** (DeepSeek technical report)
- Apex Shortlist: **90.2%** (DeepSeek technical report)
- AA-LCR: **67.0%** (Kilo Code, Artificial Analysis)
- CritPt: not reported

Coding:

- Coding public-lane (BenchLM): **60.7** (Unranked · 4 rankable rows)
- SWE-bench Verified: **80.6%** (DeepSeek technical report) / **77.40%** (Vals AI)
- SWE-bench Pro: not reported
- LiveCodeBench: **87.48%** (Vals AI)
- Terminal-Bench 2.0: **67.9%** (DeepSeek technical report)
- Terminal-Bench 2.1: **87.9%** (DeepSeek V4 Pro 0813 API update)
- AA Coding Index: **58.7%** (Kilo Code, Artificial Analysis)
- SciCode: **46.4%** (Kilo Code, Artificial Analysis)
- Terminal-Bench Hard: **41.7%** (Kilo Code, Artificial Analysis)
- IFBench: **71.3%** (Kilo Code, Artificial Analysis)
- LCR: **67.0%** (Kilo Code, Artificial Analysis)

Long context:

- 1M window; AA-LCR **67.0%** (Kilo Code); MRCR 1M **83.5%** (BenchLM); CorpusQA 1M **62.0%** (BenchLM).

Multimodal:

- Text-only. Multimodal lane not applicable.

### Normalized scores (1–100)

- **Tool use: 72/100.** Agentic lane #43/128 (54.5), Terminal-Bench 2.1 87.9%, BrowseComp 83.4%, HLE w/ tools 60.0%, CyberGym 83.3%, Toolathlon 74.1%, GDPval-AA 54.5%, Agents' Last Exam 25.7%; caps at Agents' Last Exam 25.7%.
- **Reasoning: 74/100.** MMLU-Pro 87.5%, GPQA 90.1%, HLE 42.7%, AA Intelligence 28.4%, HMMT 95.2%, IMOAnswerBench 89.8%, Apex 38.3%, AA-LCR 67.0%; caps at AA Intelligence 28.4%.
- **Context window: 80/100.** 1M window; MRCR 1M 83.5%, CorpusQA 1M 62.0%, AA-LCR 67.0%.
- **Multimodal: 40/100.** Text-only.
- **Coding: 72/100.** SWE-bench 80.6%, LiveCodeBench 87.48%, Terminal-Bench 2.1 87.9%, Terminal-Bench Hard 41.7%, AA Coding 58.7%, SciCode 46.4%; caps at Terminal-Bench Hard 41.7%.
- **Cost efficiency: 86/100.** $1.32/$3.96 per 1M (peak); $0.66/$1.98 (off-peak).
- **Overall Score: 67.6/100.** Mean of five quality dims (BenchLM 63.18, AA Intelligence 28.4); best-fit for open-weight agentic coding at mid cost. (Superseded by V4.1 Flash routing.)

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (DeepSeek official, BenchLM, Kilo Code, Vals AI, Artificial Analysis, buildfastwithai, mindstudio); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings. DeepSeek V4 Pro is superseded by V4.1 Flash (Sep 10, 2026, which routes V4 Pro requests). MIT license, open weights. 1.6T total / 49B active.<|end|>>2><rfl:parameter name="filePath">
E:\qwik\modelcomp\model\deepseek-v4-pro\Beam.md