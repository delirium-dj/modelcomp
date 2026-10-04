# Claude Opus 5 — findings by Claude Opus 4.8

- Source: Anthropic (`anthropic/claude-opus-5`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 5
- **Short description:** Anthropic's flagship Opus 5-generation model for the deepest reasoning and longest autonomous coding/research runs, with 1M context. Top use case: frontier agentic coding, research, and knowledge work.
- **Provider / access:** Anthropic Claude Platform `claude-opus-5`; AWS/GCP/Azure. No Zen Free ID.
- **Release / knowledge:** Claude 5 generation (2026); knowledge cutoff not published.
- **IDs:** `anthropic/claude-opus-5` (no Free ID).
- **Context window:** 1M total / 128K max output (per curated `meta.json`).
- **Modalities:** text, image, PDF in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** $5 in / $25 out per 1M; no free tier.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- BrowseComp **90.8%** (10-agent 93.6%); DeepSearchQA **95.0%**; OSWorld 2.0 **70.6%**; MCP Atlas **85.8%**
- GDPval-AA **1862 Elo**; Toolathlon-Verified **80.6%** (Pass@3 87%); AA Harvey-LAB **93.5%**; AA Agentic Index **56.2%**
- LAB criterion-pass (Anthropic) **93.74%** / (Harvey held-out) **94.1%**; DRACO **88.6%**; AutomationBench 26%

Reasoning / knowledge:

- HLE **64.7%** (w/ tools) / **56.3%** (w/o); GPQA Diamond **93.2%** (Vals 93.4%); MMLU-Pro **91.6%** (Vals)
- ARC-AGI-1 **97.5%** / ARC-AGI-2 **90.4%** / ARC-AGI-3 **30.2%**; IMO 2026 **42/42**; AA Intelligence Index **50.8**
- AA-LCR **79.3%**; CritPt **29.1%**; MLCR-AA **55.6%**; RiemannBench **79%** (tools); GMMLU **92.5%**

Coding:

- SWE-bench Verified **96%** (Vals 97%); SWE-bench Pro **79.2%**; SWE Multilingual **89.5%**; LiveCodeBench **89%** (Vals)
- ProgramBench **93.0%**; AA Coding Index **78.0%**; CursorBench 3.2 **70.0%**; VulcanBench CII v1 **96.4%**; DeepSWE **68.8%**

Multimodal:

- AA-MMMU-Pro **84.7%**; Chartography (tools) **83.0%**; OfficeQA **78.1%**; GDP.pdf (tools) **85.5%**; Design Arena Website **1316 Elo**

### Normalized scores (1–100)

- **Tool use: 93/100.** BrowseComp 90.8%, DeepSearchQA 95%, MCP Atlas 85.8%, GDPval 1862, Harvey-LAB 93.5%, AA Agentic Index 56.2%; AutomationBench 26% caps the top.
- **Reasoning: 93/100.** HLE 64.7% (tools), GPQA-D 93.2%, ARC-AGI-2 90.4%, IMO 42/42, MMLU-Pro 91.6%; AA Index 50.8 and CritPt 29% keep it just under the ceiling.
- **Context window: 95/100.** 1M total / 128K out with AA-LCR 79.3%.
- **Multimodal: 78/100.** Image+PDF in (MMMU-Pro 84.7%, Chartography 83%, GDP.pdf 85.5%), text out.
- **Coding: 93/100.** SWE-bench 96–97%, SWE-bench Pro 79.2%, ProgramBench 93%, Coding Index 78%, VulcanBench CII 96.4%.
- **Cost efficiency: 55/100.** $5/$25 per 1M; no free tier.
- **Overall Score: 90.4/100.** Half-up mean of the five quality dims (93/93/95/78/93). The frontier Opus — top-tier reasoning/agentic-coding with image/PDF multimodal; price is the main cost.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Anthropic Claude Opus 5 system card + launch, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
