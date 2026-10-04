# Grok 4.3 — findings by Claude Opus 4.8

- Source: xAI (`opencode/grok-4.3`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.3
- **Short description:** xAI's Grok 4.3 reasoning model (predecessor to 4.5+), 1M context. Top use case: general reasoning/coding; superseded by 4.5+.
- **Provider / access:** xAI API (`grok-4-3`); OpenCode Zen `opencode/grok-4.3`.
- **Release / knowledge:** Grok 4.3 generation (2026); knowledge cutoff not published.
- **IDs:** `opencode/grok-4.3`.
- **Context window:** curated `meta.json` lists 128K; BenchLM reports 1M — **meta.json understated; orchestrator should verify.**
- **Modalities:** `meta.json` lists text in/out; MMMU-Pro 78.1% evidences image input — **flag for verification.**
- **Pricing (as of 2026-10-03):** no verified public price. Scored provisionally.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- τ²-bench **97.7%**; GDPval-AA **1018 Elo**; AA Agentic Index **17.2%**; Terminal-Bench 2.1 (Vals) **41.9%**; APEX-Agents-AA 17%

Reasoning / knowledge:

- GPQA Diamond **90.1%** (Vals 91.4%); MMLU-Pro **85.8%** (Vals); HLE **35%**; AA-LCR **64.3%**; AA Intelligence Index **37.6**; CritPt **8.0%**

Coding:

- LiveCodeBench **84.5%** (Vals); SWE-bench **71.4%** (Vals); AA Coding Index **42.3%**; SciCode **47.3%**

Multimodal:

- MMMU-Pro **78.1%**; IFBench **81.3%**

### Normalized scores (1–100)

- **Tool use: 62/100.** τ²-bench 97.7% is high, but GDPval 1018, AA Agentic Index 17.2% and TB2.1 41.9% are weak — inconsistent agentics.
- **Reasoning: 76/100.** GPQA-D 90.1%, MMLU-Pro 85.8%; HLE 35%, AA-LCR 64.3% and CritPt 8% cap it.
- **Context window: 85/100.** 1M (BenchLM) but AA-LCR only 64.3% (meta's 128K understated).
- **Multimodal: 63/100.** Image-in (MMMU-Pro 78.1%), text-only out — image-input tier.
- **Coding: 72/100.** LiveCodeBench 84.5%, SWE-bench 71.4%; Coding Index 42.3% caps it.
- **Cost efficiency: 72/100.** No verified public price. Scored provisionally.
- **Overall Score: 71.6/100.** Half-up mean of the five quality dims (62/76/85/63/72). A mid-generation Grok with inconsistent agentics; `meta.json` context/modality need correction.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (xAI/AA Grok 4.3, OpenRouter, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
