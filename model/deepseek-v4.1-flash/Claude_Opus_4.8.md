# DeepSeek V4.1 Flash — findings by Claude Opus 4.8

- Source: DeepSeek (`deepseek/deepseek-v4.1-flash`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's MIT-licensed 552B multimodal MoE for input-heavy agentic workloads — 1M context, 384K output, class-leading Terminal-Bench. Top use case: cheap open-weights agentic coding.
- **Provider / access:** DeepSeek API (`deepseek-v4.1-flash`); open weights on HF. No Zen Free ID.
- **Release / knowledge:** DeepSeek V4.1 generation (2026); knowledge cutoff not published.
- **IDs:** `deepseek/deepseek-v4.1-flash` (open weights, MIT).
- **Context window:** 1M total / 384K max output (per curated `meta.json`; BenchLM 1M).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** $0.30 in / $1.20 out per 1M; free self-host via open weights.
- **Architecture:** 552B multimodal MoE, MIT open weights.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **90.6%** (Vals 74.5%); CyberGym **88.1%**; AutomationBench **54.8%** (AA 68.9%)
- HLE w/ tools **63.9%**; GDPval-AA **1600 Elo**; TB4.0 31.2%; ExploitGym 15.3%

Reasoning / knowledge:

- GPQA Diamond **90.9%**; AA-LCR **84.0%**; HLE **36.8%**; AA Intelligence Index **39.5**; CritPt **14.3%**; AA-Omniscience Hallucination Rate **96.5%**

Coding:

- Codeforces **3471**; Terminal-Bench 2.1 **90.6%**; DeepSWE **74.2%**; NL2Repo **65.4%**; AA-SciCode **51.9%**; ProgramBench **20.3%**

Multimodal:

- AA-MMMU-Pro **77.0%**; Chartography (tools) **78.9%**

### Normalized scores (1–100)

- **Tool use: 84/100.** TB2.1 90.6%, CyberGym 88.1%, GDPval 1600, AA AutomationBench 68.9%; TB4.0 31.2% and ExploitGym 15.3% cap it.
- **Reasoning: 80/100.** GPQA-D 90.9%, AA-LCR 84%, Codeforces 3471; AA Index 39.5, CritPt 14.3% and a 96.5% hallucination rate are real drags.
- **Context window: 95/100.** 1M total / 384K out with AA-LCR 84%.
- **Multimodal: 65/100.** Image-in (MMMU-Pro 77%), text-only out — image-input tier.
- **Coding: 85/100.** Codeforces 3471, TB2.1 90.6%, DeepSWE 74.2%, NL2Repo 65.4%; ProgramBench 20.3% is the floor.
- **Cost efficiency: 93/100.** $0.30/$1.20 per 1M plus free self-host (open weights).
- **Overall Score: 81.8/100.** Half-up mean of the five quality dims (84/80/95/65/85). An excellent-value open-weights agentic-coding Flash; watch the very high hallucination rate.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (DeepSeek-V4.1-Flash model card + tech report, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
