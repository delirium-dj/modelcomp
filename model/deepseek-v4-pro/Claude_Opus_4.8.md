# DeepSeek V4 Pro — findings by Claude Opus 4.8

- Source: DeepSeek (`opencode/deepseek-v4-pro`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro
- **Short description:** DeepSeek's open-weight reasoning/agentic flagship (0813 update), 1M context, strong coding and long-context. Top use case: cheap open-weights agentic coding and reasoning.
- **Provider / access:** DeepSeek API (`deepseek-v4-pro`); open weights on HF. No Zen Free ID.
- **Release / knowledge:** DeepSeek V4 generation, 0813 update (2026); knowledge cutoff not published.
- **IDs:** `opencode/deepseek-v4-pro` (open weights).
- **Context window:** curated `meta.json` lists 128K; BenchLM reports 1M (MRCR 1M 83.5%) — **meta.json understated; orchestrator should verify.**
- **Modalities:** `meta.json` lists text in/out; DeepSeek V4 Pro is text(+image) per tech report — **flag for verification.**
- **Pricing (as of 2026-10-03):** paid tier (cheap); free self-host via open weights. Scored provisionally.
- **Architecture:** open-weight reasoning MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **87.9%** (Vals 54.7%); τ²-bench **96.2%**; BrowseComp **83.4%**; MCP Atlas **73.6%**; CyberGym **83.3%**
- Toolathlon-Verified **74.1%**; GDPval-AA **1306 Elo**; AA Agentic Index **49.6%**; HLE w/ tools **60.0%**; AutomationBench 31.8%

Reasoning / knowledge:

- AA Intelligence Index **53.2**; GPQA-D **90.1%** (AA 92.8%); MMLU-Pro **87.5%**; AA-LCR **80.3%**; MRCR 1M **83.5%**
- HLE **42.7%**; ARC-AGI-2 **61.3%**; CritPt **18.0%**; HMMT Feb 2026 **95.2%**; AA-Omniscience Hallucination Rate 94.1%

Coding:

- SWE-bench **96.4%** (Vals) / Verified 80.6%; LiveCodeBench Pass@1-COT **93.5%**; Codeforces **3206**; DeepSWE **62.7%**; AA Coding Index **68.8%**

Multimodal:

- Design Arena Website **1258 Elo** (text-centric)

### Normalized scores (1–100)

- **Tool use: 86/100.** TB2.1 87.9%, τ²-bench 96.2%, BrowseComp 83.4%, CyberGym 83.3%, Harvey-tier; GDPval 1306 and AutomationBench 31.8% cap the top.
- **Reasoning: 85/100.** AA Index 53.2, GPQA-D 90.1%, AA-LCR 80.3%, MRCR-1M 83.5%, HMMT 95.2%; CritPt 18% and a 94.1% hallucination rate are drags.
- **Context window: 94/100.** 1M total with MRCR-1M 83.5% and AA-LCR 80.3% (meta's 128K understated).
- **Multimodal: 62/100.** Predominantly text (limited/no vision); scored low — text-output-centric.
- **Coding: 87/100.** SWE-bench 96.4% (Vals), LiveCodeBench Pass@1 93.5%, Codeforces 3206, DeepSWE 62.7%.
- **Cost efficiency: 88/100.** Cheap paid tier plus free self-host (open weights). Scored provisionally.
- **Overall Score: 82.8/100.** Half-up mean of the five quality dims (86/85/94/62/87). A top open-weights agentic-coding/reasoning model; text-centric multimodal caps Overall.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (DeepSeek-V4 technical report + DeepSeek API docs, Artificial Analysis, BenchLM, Vals AI, ARC Prize); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
