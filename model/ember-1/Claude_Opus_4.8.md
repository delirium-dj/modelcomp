# Ember 1 — findings by Claude Opus 4.8

- Source: Fireworks AI (`opencode/ember-1`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ember 1
- **Short description:** Fireworks AI's reasoning/agentic-coding model (Research Preview) with ~1M context, strong on SWE-bench. Top use case: text-only agentic software engineering.
- **Provider / access:** Fireworks AI (`fireworks/ember-1`); OpenCode Zen `opencode/ember-1`.
- **Release / knowledge:** Research Preview (2026); knowledge cutoff not published.
- **IDs:** `opencode/ember-1`.
- **Context window:** curated `meta.json` lists 128K; BenchLM/Fireworks report 1.04M — **meta.json "128K" is understated; orchestrator should verify.**
- **Modalities:** text in/out (no verified image/audio/video input).
- **Pricing (as of 2026-10-03):** no verified public price found. Scored provisionally.
- **Architecture:** proprietary (Fireworks).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **82.0%** (Fireworks launch post)
- τ²-bench Airline: **66.0%**
- Other agentic (GDPval, OSWorld, MCP Atlas): no verified public score found

Reasoning / knowledge:

- GPQA / HLE / AA Intelligence Index / long-context retrieval: no verified public score found (Research Preview, limited disclosure)

Coding:

- SWE-bench Verified: **92.2%** (Fireworks launch post)
- DeepSWE: **75.2%**; Terminal-Bench 2.1 **82.0%**
- LiveCodeBench / SciCode: no verified public score found

Multimodal:

- Text-only; no multimodal benchmarks reported

### Normalized scores (1–100)

- **Tool use: 76/100.** Terminal-Bench 2.1 82% and τ²-bench Airline 66% are solid; broader agentic coverage (GDPval, OSWorld) is unreported, capping confidence.
- **Reasoning: 75/100.** No public GPQA/HLE/Index; inferred from strong agentic-coding (SWE-bench 92.2% requires multi-step reasoning). Provisional pending reasoning disclosures.
- **Context window: 94/100.** ~1.04M window (meta's 128K understated).
- **Multimodal: 15/100.** Text-only in/out — no image/audio/video input.
- **Coding: 88/100.** SWE-bench Verified 92.2% (class-leading), DeepSWE 75.2%, TB2.1 82% — the clear strength.
- **Cost efficiency: 60/100.** No verified public price; scored provisionally.
- **Overall Score: 69.6/100.** Half-up mean of the five quality dims (76/75/94/15/88). A strong text-only agentic-coding specialist; the text-only modality caps Overall and several dims rest on limited Research-Preview disclosures.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Fireworks Ember-1 launch post + model page, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
