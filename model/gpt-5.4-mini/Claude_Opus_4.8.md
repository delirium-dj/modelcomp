# GPT 5.4 Mini — findings by Claude Opus 4.8

- Source: OpenAI (`opencode/gpt-5.4-mini`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.4 Mini
- **Short description:** OpenAI's GPT-5.4 mini — a small, cheap reasoning model with tool use and image input. Top use case: high-volume cheap agentic/reasoning tasks.
- **Provider / access:** OpenAI API (`gpt-5.4-mini`); OpenCode Zen `opencode/gpt-5.4-mini`.
- **Release / knowledge:** GPT-5.4 generation (2026); knowledge cutoff not published.
- **IDs:** `opencode/gpt-5.4-mini`.
- **Context window:** curated `meta.json` lists 128K; BenchLM reports 400K — **meta.json understated; orchestrator should verify.**
- **Modalities:** `meta.json` lists text in/out; MMMU-Pro 76.6% evidences image input — **flag for verification.**
- **Pricing (as of 2026-10-03):** mini-tier (cheap). Scored provisionally.
- **Architecture:** proprietary (small).

### Raw benchmarks found

Agent / tool use:

- τ²-bench **93.4%**; OSWorld-Verified **72.1%**; Terminal-Bench 2.0 **60%**; MCP Atlas **57.7%**; Toolathlon **42.9%**
- GDPval-AA **1095 Elo**; AA Agentic Index **19.6%**; APEX-Agents-AA 28.2%

Reasoning / knowledge:

- GPQA Diamond **87.5%** (Vals 83.1%); MMLU-Pro **84.6%** (Vals); HLE **41.5%** (w/o 28.2%); AA-LCR **77.0%**; AA Intelligence Index **24.1**; CritPt **10.0%**; ARC-AGI-2 18.9%

Coding:

- LiveCodeBench **81.5%** (Vals); SWE-bench **73.0%** (Vals); AA Coding Index **56.1%**; Vibe Code Bench **47.97%**; AA-SciCode **52.1%**

Multimodal:

- MMMU-Pro **76.6%**; AA-MMMU-Pro **73.3%**

### Normalized scores (1–100)

- **Tool use: 72/100.** τ²-bench 93.4% and OSWorld-Verified 72.1% are strong for a mini; GDPval 1095, AA Agentic Index 19.6% cap it.
- **Reasoning: 72/100.** GPQA-D 87.5%, HLE 41.5%, MMLU-Pro 84.6%; AA Index 24.1 and ARC-AGI-2 18.9% cap it.
- **Context window: 82/100.** 400K (BenchLM) with AA-LCR 77% (meta's 128K understated).
- **Multimodal: 64/100.** Image-in (MMMU-Pro 76.6%), text-only out — image-input tier.
- **Coding: 72/100.** SWE-bench 73%, LiveCodeBench 81.5%, Coding Index 56.1%.
- **Cost efficiency: 82/100.** Mini-tier cheap pricing. Scored provisionally.
- **Overall Score: 72.4/100.** Half-up mean of the five quality dims (72/72/82/64/72). A cheap small agentic/reasoning model; `meta.json` context/modality need correction.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (OpenAI GPT-5.4 mini/nano launch, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
