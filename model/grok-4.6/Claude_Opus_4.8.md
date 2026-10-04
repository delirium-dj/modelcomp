# Grok 4.6 — findings by Claude Opus 4.8

- Source: xAI (`xai/grok-4.6`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's flagship frontier model for coding, agentic tasks, and knowledge work, with a 500K context. Top use case: agentic coding and reasoning.
- **Provider / access:** xAI API (`grok-4-6`). No Zen Free ID.
- **Release / knowledge:** Grok 4.6 generation (2026); knowledge cutoff not published.
- **IDs:** `xai/grok-4.6` (no Free ID).
- **Context window:** 500,000 total (per curated `meta.json`; BenchLM 500K).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** $2 in / $6 out per 1M (cached $0.50); doubles to $4/$12 above a 200K prompt.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- GDPval-AA **1643 Elo**; APEX-Agents **57.5%**; AA Agentic Index **53.4%**; AA AutomationBench **66.7%**
- AA Tau3-Banking **50.7%**; Terminal-Bench 2.1 (Vals) **78.3%**; TB3.0 26.5%; ApprenticeBench 13%

Reasoning / knowledge:

- GPQA Diamond **94.9%**; MMLU-Pro **89.4%** (Vals); AA-LCR **80.3%**; AA Intelligence Index **44.3**
- ARC-AGI-1 **87.0%** / ARC-AGI-2 **67.1%**; AA-HLE **42.9%**; CritPt **17.1%**

Coding:

- SWE-bench **95.6%** (Vals); LiveCodeBench **88.2%** (Vals); DeepSWE **65.9%**; AA Coding Index **76.8%**
- CursorBench 3.2 **70.8%** (4.0 41.4%); VulcanBench v3 **87.0%**; FrontierCode 1.1 Extended **61.3%**; FrontierSWE v2 **25.3%**

Multimodal:

- Design Arena Website **1298 Elo**

### Normalized scores (1–100)

- **Tool use: 84/100.** GDPval 1643, AA Agentic Index 53.4%, AA AutomationBench 66.7%, Tau3-Banking 50.7%, TB2.1 78.3%; ApprenticeBench 13% and TB3.0 26.5% cap it.
- **Reasoning: 85/100.** GPQA-D 94.9%, MMLU-Pro 89.4%, ARC-AGI-2 67.1%, AA-LCR 80.3%; AA Index 44.3 and CritPt 17.1% cap the top.
- **Context window: 90/100.** 500K with AA-LCR 80.3%.
- **Multimodal: 63/100.** Image-in, text-only out, limited multimodal benchmarks — image-input tier.
- **Coding: 88/100.** SWE-bench 95.6%, LiveCodeBench 88.2%, Coding Index 76.8%, VulcanBench 87%; FrontierSWE v2 25.3% is the floor.
- **Cost efficiency: 70/100.** $2/$6 per 1M (cached $0.50); doubles above 200K prompts; no free tier.
- **Overall Score: 82/100.** Half-up mean of the five quality dims (84/85/90/63/88). A strong agentic-coding frontier model; image-only multimodal caps Overall.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (xAI Grok 4.6 launch post + docs, Artificial Analysis, BenchLM, Vals AI, ARC Prize); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
