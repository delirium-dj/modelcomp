# Claude Mythos 5.1 — findings by Claude Opus 4.8

- Source: Anthropic (`anthropic/claude-mythos-5.1`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's less-restricted configuration of Claude Fable 5.1 — same base weights with cybersecurity and life-sciences safeguards relaxed for vetted enterprise users (e.g. Claude Security, Cyber Verification Program). Top use case: trusted-access cyber/bio and frontier agentic work.
- **Provider / access:** Anthropic Claude Platform `claude-mythos-5-1` via vetted programs; shares the Fable 5.1 & Mythos 5.1 system card. No Zen Free ID.
- **Release / knowledge:** Claude 5.1 generation (2026); knowledge cutoff not published.
- **IDs:** `anthropic/claude-mythos-5.1` (restricted access; no Free ID).
- **Context window:** 1M total / 128K max output (per curated `meta.json`).
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** $10 in / $50 out per 1M; no free tier.
- **Architecture:** proprietary (same base weights as Claude Fable 5.1).

### Raw benchmarks found

> Mythos 5.1 has no separate public general-capability leaderboard (BenchLM "not computed"); it shares the Fable 5.1 & Mythos 5.1 system card and base weights. Numbers below are the shared Fable 5.1 family results (labeled proxy); Mythos's differentiation is relaxed cyber/bio safeguards for vetted users, not a different general-capability profile.

Agent / tool use (Fable 5.1 family proxy):

- Terminal-Bench 4.0 **55.8%**; GDPval-AA **1735 Elo**; Toolathlon-Verified **77.8%** (Pass@3 81.5%)
- AA Harvey-LAB **93.0%**; AA Agentic Index **58.0%**; ApprenticeBench **72%**; OSWorld 2.0 **41.7%**

Reasoning / knowledge (Fable 5.1 family proxy):

- HLE **65%** (tools) / **60.9%** (no tools); AA Intelligence Index **53.4**; GPQA-D **93.7%**; MMLU-Pro **92.4%**
- ARC-AGI-1 **97.5%** / ARC-AGI-2 **90%**; AA-LCR **85.3%**; MLCR-AA **71.1%**; CritPt **29.7%**

Coding (Fable 5.1 family proxy):

- SWE-bench Pro **81.2%**; LiveCodeBench **90.5%**; AA Coding Index **81.6%**; ProgramBench **87.6%**; SWE Multilingual **89.1%**

Multimodal:

- SWE Multimodal **54.7%** (image in; text out)

### Normalized scores (1–100)

- **Tool use: 90/100.** Fable 5.1-class agentics (GDPval 1735, Toolathlon 77.8%, Harvey-LAB 93%, ApprenticeBench 72%); relaxed safeguards may lift restricted cyber tasks not in the public set.
- **Reasoning: 91/100.** HLE 60.9% (no tools), AA Index 53.4, GPQA-D 93.7%, ARC-AGI-2 90%, AA-LCR 85.3%; CritPt 29.7% caps it.
- **Context window: 96/100.** 1M total / 128K out with AA-LCR 85.3%.
- **Multimodal: 66/100.** Image-in, text-only out (meta lists no PDF), no audio/video — image-input tier.
- **Coding: 91/100.** SWE-bench Pro 81.2%, LiveCodeBench 90.5%, Coding Index 81.6%, ProgramBench 87.6%.
- **Cost efficiency: 30/100.** $10/$50 per 1M, no free tier.
- **Overall Score: 86.8/100.** Half-up mean of the five quality dims (90/91/96/66/91). Same base as Fable 5.1 for general work; chosen for vetted cyber/bio access rather than higher general-benchmark scores.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Anthropic Fable 5.1 & Mythos 5.1 system card, Opus 5.5 launch references to Mythos access, Artificial Analysis, BenchLM). General-capability numbers use the shared Fable 5.1 family results as a labeled proxy; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
