# Deepseek V4 Flash — findings by Claude Opus 4.8

- Source: DeepSeek (`opencode/deepseek-v4-flash`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Deepseek V4 Flash
- **Short description:** DeepSeek's open-weight V4 Flash (0731) reasoning MoE, 1M context, strong coding/math at low cost; text-centric. Top use case: cheap open-weights agentic coding.
- **Provider / access:** DeepSeek API (`deepseek-v4-flash-0731`); OpenCode Zen `opencode/deepseek-v4-flash`; open weights.
- **Release / knowledge:** DeepSeek V4 Flash 0731 (2026); knowledge cutoff not published.
- **IDs:** `opencode/deepseek-v4-flash` (open weights).
- **Context window:** curated `meta.json` lists 128K; BenchLM reports 1M (MRCR-1M 78.7%) — **meta.json understated; verify.**
- **Modalities:** text in; text out (text-centric; stub says text-only); tool calls yes.
- **Pricing (as of 2026-10-03):** cheap paid / free self-host (open weights). Scored provisionally.
- **Architecture:** open-weight V4 Flash reasoning MoE.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **82.7%** (Vals 67%); CyberGym **76.7%**; MCP Atlas **69%**; Toolathlon-Verified **70.3%**; BrowseComp **73.2%**
- GDPval-AA **1189 Elo**; AA Agentic Index **41.7%**; AutomationBench 25.1%

Reasoning / knowledge:

- AA Intelligence Index **34.3**; GPQA Diamond **88.1%**; MMLU-Pro **86.2%**; AA-LCR **79.7%**; MRCR 1M **78.7%**; HLE **34.8%**; ARC-AGI-2 **61.4%**; CritPt 16.6%

Coding:

- SWE-bench **88.8%** (Vals); LiveCodeBench Pass@1-COT **91.6%**; Codeforces **3052**; SWE-bench Verified **79%**; AA Coding Index **69.1%**; VulcanBench v3 **88.4%**

Multimodal:

- Text-centric (Design Arena Website 1214; no verified image input)

### Normalized scores (1–100)

- **Tool use: 83/100.** TB2.1 82.7%, CyberGym 76.7%, Toolathlon 70.3%, BrowseComp 73.2%, GDPval 1189; AutomationBench 25.1% caps it.
- **Reasoning: 80/100.** GPQA-D 88.1%, AA-LCR 79.7%, MRCR-1M 78.7%, ARC-AGI-2 61.4%; AA Index 34.3 and 91.7% hallucination rate cap it.
- **Context window: 94/100.** 1M with MRCR-1M 78.7% (meta's 128K understated).
- **Multimodal: 20/100.** Text-centric — no verified image/audio/video input.
- **Coding: 86/100.** SWE-bench 88.8%, LiveCodeBench 91.6%, Codeforces 3052, SWE-bench Verified 79%, VulcanBench 88.4%.
- **Cost efficiency: 90/100.** Cheap paid / free self-host (open weights). Scored provisionally.
- **Overall Score: 72.6/100.** Half-up mean of the five quality dims (83/80/94/20/86). A strong cheap open-weights agentic-coding Flash; text-only modality caps Overall.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (DeepSeek-V4 technical report + API docs, Artificial Analysis, BenchLM, Vals AI, ARC Prize); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
