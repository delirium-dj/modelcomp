# Grok 4.5 — findings by Claude Opus 4.8

- Source: xAI (`opencode/grok-4.5`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.5
- **Short description:** xAI's Grok 4.5 — coding/agentic reasoning model (predecessor to 4.6/4.7), 500K context. Top use case: agentic coding and reasoning.
- **Provider / access:** xAI API (`grok-4-5`); OpenCode Zen `opencode/grok-4.5`.
- **Release / knowledge:** Grok 4.5 generation (2026); knowledge cutoff not published.
- **IDs:** `opencode/grok-4.5`.
- **Context window:** curated `meta.json` lists 128K; BenchLM reports 500K — **meta.json understated; orchestrator should verify.**
- **Modalities:** `meta.json` lists text in/out; AA-MMMU-Pro 80.4% evidences image input (Grok 4.x line) — **flag for verification.**
- **Pricing (as of 2026-10-03):** no verified public price for this slug (Grok 4.6 was $2/$6). Scored provisionally.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1 **83.3%** (Vals 67.8%); GDPval-AA **1430 Elo**; AA Agentic Index **42.1%**; DeepSWE (agentic) **53%**; TB3.0 15.7%

Reasoning / knowledge:

- GPQA Diamond **93.1%**; MMLU-Pro **89.2%** (Vals); AA-LCR **79.3%**; ARC-AGI-2 **52.6%**; AA Intelligence Index **38.8**; AA-HLE **42.7%**; CritPt **15.4%**

Coding:

- SWE-bench **86.6%** (Vals); LiveCodeBench **87.4%** (Vals); SWE-bench Pro **64.7%**; SWE Multilingual **78%**; VulcanBench v3 **89.9%**; AA Coding Index **72.5%**

Multimodal:

- AA-MMMU-Pro **80.4%**; Design Arena Website **1289 Elo**

### Normalized scores (1–100)

- **Tool use: 80/100.** TB2.1 83.3%, GDPval 1430, AA Agentic Index 42.1%; TB3.0 15.7% caps the top.
- **Reasoning: 82/100.** GPQA-D 93.1%, MMLU-Pro 89.2%, AA-LCR 79.3%, ARC-AGI-2 52.6%; AA Index 38.8 and CritPt 15.4% cap it.
- **Context window: 90/100.** 500K with AA-LCR 79.3% (meta's 128K understated).
- **Multimodal: 63/100.** Image-in (MMMU-Pro 80.4%), text-only out — image-input tier.
- **Coding: 86/100.** SWE-bench 86.6%, LiveCodeBench 87.4%, VulcanBench 89.9%, SWE-bench Pro 64.7%, Coding Index 72.5%.
- **Cost efficiency: 70/100.** No verified public price (Grok 4.6 was $2/$6); scored provisionally.
- **Overall Score: 80.2/100.** Half-up mean of the five quality dims (80/82/90/63/86). A strong agentic-coding model a step below 4.6/4.7; image-only multimodal and `meta.json` fields need attention.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (xAI Grok 4.5 launch post, Cursor blog, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
