# Grok 4.7 — findings by Claude Opus 4.8

- Source: xAI (`opencode/grok-4.7`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** xAI's Grok 4.7 — successor to Grok 4.6 for coding, agentic, and knowledge work, 500K context. Top use case: agentic coding and reasoning.
- **Provider / access:** xAI API (`grok-4-7`); OpenCode Zen `opencode/grok-4.7`.
- **Release / knowledge:** Grok 4.7 generation (2026); knowledge cutoff not published.
- **IDs:** `opencode/grok-4.7`.
- **Context window:** curated `meta.json` lists 128K; BenchLM/xAI report 500K — **meta.json "128K" understated; orchestrator should verify.**
- **Modalities:** `meta.json` lists text in/out; the Grok 4.x line is text+image in — **meta.json modality likely understated; flag for verification.**
- **Pricing (as of 2026-10-03):** no verified public price found (Grok 4.6 was $2/$6). Scored provisionally.
- **Architecture:** proprietary.

### Raw benchmarks found

Agent / tool use:

- AA Briefcase **1657 Elo**; GDPval-AA **1695 Elo**; Terminal-Bench 4.0 **38.0%**; AA AutomationBench **65.6%**
- Terminal-Bench 2.1 (Vals) **73.4%**; AA ITBench **42.1%**; AA Harvey-LAB 19.6%

Reasoning / knowledge:

- AA Intelligence Index **46.5**; AA-HLE **43.1%**; AA-LCR **76.7%**; CritPt **17.7%**; AA-Omniscience Index **32.0%** (Hallucination 29.3%)

Coding:

- DeepSWE **71.0%**; EEBench **64.0%**; AA-SciCode **57.4%**; CursorBench 4.0 **46.3%**; FrontierSWE v2 **29.5%**

Multimodal:

- Design Arena Website **1239 Elo**

### Normalized scores (1–100)

- **Tool use: 84/100.** GDPval 1695, AA Briefcase 1657, AA AutomationBench 65.6%, TB2.1 73.4%; TB4.0 38% and Harvey-LAB 19.6% cap it.
- **Reasoning: 83/100.** AA Index 46.5, AA-HLE 43.1%, AA-LCR 76.7%, low hallucination (29.3%); CritPt 17.7% and MLCR 15% cap it.
- **Context window: 90/100.** 500K with AA-LCR 76.7% (meta's 128K understated).
- **Multimodal: 63/100.** Image-in (Grok 4.x line), text-only out, limited multimodal benchmarks — image-input tier.
- **Coding: 85/100.** DeepSWE 71%, EEBench 64%, SciCode 57.4%, CursorBench 4.0 46.3%; FrontierSWE v2 29.5% is the floor.
- **Cost efficiency: 68/100.** No verified public price (Grok 4.6 was $2/$6); scored provisionally.
- **Overall Score: 81/100.** Half-up mean of the five quality dims (84/83/90/63/85). A solid agentic-coding frontier model; image-only multimodal caps Overall and `meta.json` fields need correction.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (xAI Grok 4.7 launch post + docs, Artificial Analysis, BenchLM, Vals AI); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
