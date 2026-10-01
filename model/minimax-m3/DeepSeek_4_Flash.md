# MiniMax M3 — findings by DeepSeek 4 Flash

- Source: MiniMax/MiniMax M3
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3
- **Short description:** MiniMax's flagship open-weight MoE (~230B total / 9.8B active) with 1M context, sparse attention, 59% SWE-Bench Pro and strong document/vision; non-reasoning by default.
- **Provider / access:** MiniMax API / OpenRouter (`minimax/minimax-m3`); open weights; no Zen Free ID.
- **Release / knowledge:** MiniMax M3 generation (2026); knowledge cutoff not publicly disclosed.
- **IDs:** `minimax/minimax-m3`
- **Context window:** 1,048,576 tokens (1M) / 512K max output — verified from OpenRouter and curated metadata.
- **Modalities:** text/image/video in; text out; tool calls yes; JSON mode yes.
- **Pricing (as of 2026-10-01):** $0.30 in / $1.20 out per 1M.
- **Architecture:** open-weights ~230B total / 9.8B active MoE with sparse attention.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **66.0%** (MiniMax); Vals **53.6%**; AA **65.2%**
- BrowseComp **83.5%**; OSWorld-Verified **70.1%**; MCP Atlas **74.2%**; Claw-Eval **74.5%**
- GDPval-AA: **1230 Elo** (AA); BankerToolBench **76.1%**; GDPval rubrics **74.7%**
- AA Agentic Index **30.8%**; AA Harvey LAB **88.4%**; AA Tau3 Banking **15.3%**; OSWorld 2.0 **4.6%**
- ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **92.9%** (AA); Vals 92.7%
- HLE: **39.0%** (AA); USAMO 2026 **85.7%**
- AA-LCR **83.0%**; CritPt **3.7%**; MLCR-AA **17.2%**; AA Index **29.2%**
- AA-Omniscience Accuracy / Hallucination Rate: **16.7% / 18.4%**
- MMLU-Pro (Vals) **84.2%**; AA-IFBench **82.9%**

Coding:

- SWE-bench Verified **80.5%**; SWE-bench Pro **59%**; Vals 75%
- LiveCodeBench (Vals) **82.2%**; AA-SciCode **47.1%**; AA Coding Index **58.6%**
- VIBE V2 **50.1%**; NL2Repo **42.1%**; KernelBench Hard **28.8%**

Long context:

- AA-LCR 83.0%; no public MRCR full-window number found

Multimodal:

- MMMU-Pro **78.1%** (AA 78.6%); VideoMMMU **84.6%**; OmniDocBench 1.5 **91.6%**; Design Arena **1265 Elo**

### Normalized scores (1–100)

- **Tool use: 82/100.** TB 2.1 66%, BrowseComp 83.5%, MCP Atlas 74.2% and Claw-Eval 74.5% are strong; Tau3 15.3% and OSWorld 2.0 4.6% drag.
- **Reasoning: 74/100.** GPQA 92.9% and LCR 83% are strong; AA Index 29.2%, HLE 39% and CritPt 3.7% are mid.
- **Context window: 94/100.** 1M input with AA-LCR 83%.
- **Multimodal: 88/100.** text/image/video in with VideoMMMU 84.6% and OmniDocBench 91.6%; text-only output.
- **Coding: 80/100.** SWE Verified 80.5% and SWE-Pro 59% are good; Coding Index 58.6% and SciCode 47.1% trail.
- **Cost efficiency: 95/100.** $0.30/$1.20 per 1M is near the cheapest frontier-adjacent pricing.
- **Overall Score: 84/100.** Mean of (82 + 74 + 94 + 88 + 80) / 5 = 83.6 → 84. Best-fit: cheap open-weight multimodal coding/document agent.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-01
- Method: public internet research (BenchLM, MiniMax, Artificial Analysis, OpenRouter, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
