# Inkling Small — findings by Claude Opus 4.8

- Source: Thinking Machines Lab (`opencode/inkling-small`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small
- **Short description:** Thinking Machines Lab's smaller open-weight hybrid-reasoning model (sibling of Inkling), 1M context; strong math/knowledge, weak agentics. Top use case: cheap open-weights reasoning/coding.
- **Provider / access:** Thinking Machines Lab; OpenCode Zen `opencode/inkling-small`; open weights.
- **Release / knowledge:** Inkling-Small launch (2026); knowledge cutoff not published.
- **IDs:** `opencode/inkling-small` (open weights).
- **Context window:** curated `meta.json` (scaffolded) lists 128K; BenchLM reports 1M — **meta.json understated; orchestrator should verify.**
- **Modalities:** `meta.json` lists text in/out; MMMU-Pro 74% evidences image input — **flag for verification.**
- **Pricing (as of 2026-10-03):** open weights (free self-host). Scored provisionally.
- **Architecture:** open-weight hybrid reasoning (small).

### Raw benchmarks found

Agent / tool use:

- MCP Atlas **79.6%**; BrowseComp **77.4%**; Terminal-Bench 2.1 **64.7%** (Vals 55.1%); GDPval-AA **1191 Elo**; AA Agentic Index **24.9%**; Toolathlon-Verified 54.4%

Reasoning / knowledge:

- GPQA **89.5%**; MMLU-Pro **85.6%** (Vals); HLE **47.8%**; AIME26 **95.5%**; AA-LCR **75.7%**; AA Intelligence Index **25.7**; CritPt 8.3%

Coding:

- SWE-bench Verified **80.2%**; LiveCodeBench **85.9%** (Vals); SWE-bench Pro **55.9%**; AA Coding Index **53.0%**

Multimodal:

- MMMU-Pro **74%**; CharXiv **81.3%**

### Normalized scores (1–100)

- **Tool use: 72/100.** MCP Atlas 79.6%, BrowseComp 77.4%, TB2.1 64.7%, GDPval 1191; AA Agentic Index 24.9% caps it.
- **Reasoning: 76/100.** GPQA 89.5%, HLE 47.8%, AIME26 95.5%, MMLU-Pro 85.6%; AA Index 25.7 and CritPt 8.3% cap it.
- **Context window: 90/100.** 1M (BenchLM) with AA-LCR 75.7% (stub's 128K understated).
- **Multimodal: 63/100.** Image-in (MMMU-Pro 74%, CharXiv 81.3%), text-only out.
- **Coding: 78/100.** SWE-bench Verified 80.2%, LiveCodeBench 85.9%; Coding Index 53% caps it.
- **Cost efficiency: 85/100.** Open weights (free self-host). Scored provisionally.
- **Overall Score: 75.8/100.** Half-up mean of the five quality dims (72/76/90/63/78). A cheap open-weights reasoning/coding model; `meta.json` (scaffolded stub) context/modality need correction.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Thinking Machines Lab Inkling-Small launch post, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
