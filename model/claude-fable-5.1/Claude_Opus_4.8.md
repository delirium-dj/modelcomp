# Claude Fable 5.1 — findings by Claude Opus 4.8

- Source: Anthropic (`anthropic/claude-fable-5.1`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's top-capability model (above Opus 5) for the most demanding reasoning and long-horizon agentic work, 1M context / 128K output. Top use case: frontier agentic coding, research, and knowledge work where capability outweighs cost.
- **Provider / access:** Anthropic Claude Platform `claude-fable-5-1` (Messages API); AWS/GCP/Azure. No Zen Free ID.
- **Release / knowledge:** Claude 5.1 generation (2026); knowledge cutoff not published.
- **IDs:** `anthropic/claude-fable-5.1` (no Free ID).
- **Context window:** 1M total / 128K max output (per curated `meta.json`; BenchLM 1M).
- **Modalities:** text, image, PDF in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** $10 in / $50 out per 1M; no free tier.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **55.8%** (AA 52%; Vals TB2.1 85%); GDPval-AA **1735 Elo** (AA-normalized 61.7%)
- Toolathlon-Verified **77.8%** (Pass@3 81.5%); AA Harvey-LAB **93.0%**; AA Agentic Index **58.0%**; ApprenticeBench **72%**
- OSWorld 2.0 **41.7%**; AutomationBench **31.4%** (AA 59.4%)

Reasoning / knowledge:

- HLE: **65%** (w/ tools) / **60.9%** (w/o — class-leading); AA Intelligence Index **53.4**
- GPQA Diamond **93.7%**; MMLU-Pro **92.4%** (Vals); ARC-AGI-1 **97.5%** / ARC-AGI-2 **90%**
- AA-LCR **85.3%**; MLCR-AA **71.1%**; CritPt **29.7%**; AA-Omniscience Hallucination Rate 72.6%

Coding:

- SWE-bench Pro **81.2%**; SWE Multilingual **89.1%**; LiveCodeBench **90.5%** (Vals); ProgramBench **87.6%**
- AA Coding Index **81.6%**; FrontierSWE v2 **56.3%**; DeepSWE **67.4%**; CursorBench 3.2 **73.4%** (4.0 51.8%)

Multimodal:

- SWE Multimodal **54.7%**; Design Arena Website **1320 Elo**

### Normalized scores (1–100)

- **Tool use: 90/100.** GDPval 1735, Toolathlon 77.8%, Harvey-LAB 93%, ApprenticeBench 72%, AA Agentic Index 58%; OSWorld 41.7% and AutomationBench 31.4% cap it.
- **Reasoning: 91/100.** HLE 60.9% (no tools, class-leading), AA Index 53.4, GPQA-D 93.7%, MMLU-Pro 92.4%, ARC-AGI-2 90%, AA-LCR 85.3%; CritPt 29.7% caps the top.
- **Context window: 96/100.** 1M total / 128K out with AA-LCR 85.3%.
- **Multimodal: 70/100.** Image+PDF in, text out, no audio/video — PDF/image input tier.
- **Coding: 91/100.** SWE-bench Pro 81.2%, LiveCodeBench 90.5%, Coding Index 81.6%, ProgramBench 87.6%, SWE Multilingual 89.1%.
- **Cost efficiency: 30/100.** $10/$50 per 1M, no free tier — top-of-market pricing.
- **Overall Score: 87.6/100.** Half-up mean of the five quality dims (90/91/96/70/91). A frontier reasoning + agentic-coding model; multimodal (image/PDF) and price are the limits.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Anthropic Fable 5.1 & Mythos 5.1 system card, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
