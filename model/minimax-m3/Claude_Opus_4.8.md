# MiniMax M3 — findings by Claude Opus 4.8

- Source: MiniMax (`minimax-ai/minimax-m3`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's flagship open-weight MoE (~230B total / 9.8B active) with 1M context and sparse attention; strong vision/video and agentic coding. Top use case: cheap open-weights multimodal long-context agent.
- **Provider / access:** MiniMax API (`minimax-m3`); open weights on HF (`MiniMaxAI/MiniMax-M3`). No Zen Free ID.
- **Release / knowledge:** MiniMax M3 generation (2026); knowledge cutoff not published.
- **IDs:** `minimax-ai/minimax-m3` (open weights).
- **Context window:** 1M total / 512K max output (per curated `meta.json`; BenchLM 1M).
- **Modalities:** text, image, video in; text out; tool calls yes (non-reasoning per BenchLM).
- **Pricing (as of 2026-10-03):** $0.30 in / $1.20 out per 1M; free self-host via open weights.
- **Architecture:** ~230B total / 9.8B active MoE, open weights.

### Raw benchmarks found

Agent / tool use:

- BrowseComp **83.5%**; MCP Atlas **74.2%**; Claw-Eval **74.5%**; OSWorld-Verified **70.1%**; τ²-bench **88.9%**
- AA Harvey-LAB **88.4%**; BankerToolBench **76.1%**; TB2.1 **66.0%**; AA Agentic Index **30.8%**; AA Tau3-Banking 15.3%; TB4.0 2%

Reasoning / knowledge:

- GPQA Diamond **92.9%**; MMLU-Pro **84.2%** (Vals); AA-LCR **83.0%**; AA Intelligence Index **29.2**; HLE **39%**; CritPt **3.7%**

Coding:

- SWE-bench Verified **80.5%**; SWE-bench Pro **59%**; LiveCodeBench **82.2%** (Vals); AA Coding Index **58.6%**; NL2Repo **42.1%**

Multimodal:

- MMMU-Pro **78.1%**; VideoMMMU **84.6%**; Video-MME **85.4%**; OmniDocBench 1.5 **91.6%**

### Normalized scores (1–100)

- **Tool use: 75/100.** BrowseComp 83.5%, τ²-bench 88.9%, MCP Atlas 74.2%, Harvey-LAB 88.4%; AA Agentic Index 30.8%, Tau3 15.3% and TB4.0 2% cap it.
- **Reasoning: 76/100.** GPQA-D 92.9%, AA-LCR 83%; as a non-reasoning base, AA Index 29.2 and CritPt 3.7% are low.
- **Context window: 95/100.** 1M total / 512K out with AA-LCR 83%.
- **Multimodal: 86/100.** Image+video in (VideoMMMU 84.6%, Video-MME 85.4%, OmniDocBench 91.6%), text out.
- **Coding: 80/100.** SWE-bench Verified 80.5%, LiveCodeBench 82.2%, SWE-bench Pro 59%; Coding Index 58.6% caps it.
- **Cost efficiency: 93/100.** $0.30/$1.20 per 1M plus free self-host (open weights).
- **Overall Score: 82.4/100.** Half-up mean of the five quality dims (75/76/95/86/80). A cheap open-weights multimodal long-context agent; reasoning depth is the weak point.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (MiniMax M3 blog + HF card, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
