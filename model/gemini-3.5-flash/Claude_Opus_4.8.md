# Gemini 3.5 Flash — findings by Claude Opus 4.8

- Source: Google (`google/gemini-3.5-flash`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.5 Flash
- **Short description:** Google DeepMind's 3.5 fast-tier Gemini — full multimodal input, 1M context, strong tool use. Top use case: high-volume multimodal/agentic work on a free/cheap tier.
- **Provider / access:** Google AI Studio + Gemini API (`gemini-3.5-flash`), also OpenCode Zen.
- **Release / knowledge:** Gemini 3.5 generation (2026); knowledge cutoff not published.
- **IDs:** `google/gemini-3.5-flash` (Free tier present on AI Studio and Zen).
- **Context window:** 1,048,576 (1M) total (per curated `meta.json`); MRCR degrades at 1M (26.6%).
- **Modalities:** text, image, audio, PDF in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-03):** Free tier on AI Studio and Zen (rate-limited); low Flash paid pricing.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- τ²-bench **95.3%**; MCP Atlas **83.6%**; OSWorld-Verified **78.4%**; Terminal-Bench 2.1 **76.2%**; Toolathlon **56.5%**
- Finance Agent v2 **57.9%**; GDPval-AA **1345 Elo**; AA Agentic Index **27.3%**

Reasoning / knowledge:

- GPQA Diamond **92.7%**; MMLU-Pro **89.5%** (Vals); AA Intelligence Index **50.2**; ARC-AGI-2 **72.1%**
- MRCRv2 **77.3%** / MRCR 1M **26.6%**; AA-LCR **69.3%**; HLE **40.2%**; CritPt **13.1%**

Coding:

- LiveCodeBench **87.6%** (Vals); SWE-bench **78.8%** (Vals); SWE-bench Pro **55.1%**; AA Coding Index **70.1%**; SciCode **53.1%**

Multimodal:

- MMMU-Pro **83.6%**; CharXiv **84.2%**; AA-MMMU-Pro **84.3%**

### Normalized scores (1–100)

- **Tool use: 78/100.** τ²-bench 95.3%, MCP Atlas 83.6%, OSWorld-Verified 78.4%, TB2.1 76.2%; AA Agentic Index 27.3% caps it.
- **Reasoning: 83/100.** AA Index 50.2 (strong for Flash), GPQA-D 92.7%, MMLU-Pro 89.5%, ARC-AGI-2 72.1%; CritPt 13.1% caps the top.
- **Context window: 90/100.** 1M total but MRCR 1M only 26.6% (retrieval degrades at the top of the window); AA-LCR 69.3%.
- **Multimodal: 88/100.** Image+audio+PDF in (MMMU-Pro 83.6%, CharXiv 84.2%), text out.
- **Coding: 81/100.** LiveCodeBench 87.6%, SWE-bench 78.8%, Coding Index 70.1%; SWE-bench Pro 55.1% caps it.
- **Cost efficiency: 98/100.** Free tier on AI Studio and Zen plus low Flash paid pricing.
- **Overall Score: 84.0/100.** Half-up mean of the five quality dims (78/83/90/88/81). A capable free/cheap multimodal daily driver; 1M-context retrieval is the weak point.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Google DeepMind launch, Artificial Analysis, BenchLM, Vals AI, ARC Prize); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
