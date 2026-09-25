# Gemini 1.5 Pro — findings by GLM 5.3

- Source: Google (`gemini-1.5-pro`)
- Date: 2026-09-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's February-2024 legacy frontier model, famous for introducing the 1M→2M token context window; long deprecated (superseded by the Gemini 2.x/3.x lines). Top use case (historical): ultra-long-document multimodal analysis.
- **Provider / access:** Google Gemini API `gemini-1.5-pro` (legacy; retired from primary catalogs — absent from current OpenCode Zen list).
- **Release / knowledge:** February 2024 (2M context from May 2024); knowledge cutoff 2023 (early-2024 generation).
- **IDs:** `google/gemini-1.5-pro` (no Zen listing; deprecated).
- **Context window:** 2M tokens (BenchLM model page — the model's signature feature).
- **Modalities:** text and image in verified (AA-MMMU-Pro row on BenchLM); audio and video input vendor-documented for the 1.5 generation; text out; no reasoning/thinking (non-reasoning per BenchLM); function calling available in the Gemini API generation.
- **Pricing (as of 2026-09-25):** no current public price verified — the model is deprecated/retired from Google's active catalog; historical tiered pricing existed at launch. Cost scored provisionally on legacy price class.
- **Architecture:** proprietary; parameters undisclosed (MoE per public reporting, unverified here).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench / Tau2/Tau3 / GDPval-AA / Claw-Eval / Toolathlon / MCP-Atlas: **no verified public score found** (pre-dates all current agentic suites)

Reasoning / knowledge:

- GPQA Diamond: **58.9%** (BenchLM, AA-GPQA)
- HLE: **4.6%** (BenchLM, AA-HLE)
- LCR / CritPt / Omniscience: **no verified public score found**
- Artificial Analysis Intelligence Index: **7.9** (BenchLM — below the non-reasoning class median)

Coding:

- AA Coding Index: **23.6%** (BenchLM)
- SWE-bench / LiveCodeBench / SciCode / Vibe Code Bench: **no verified public score found**

Long context:

- 2M window (BenchLM); no public MRCR/RULER/GraphWalks value — no long-context retrieval score found.

Multimodal:

- AA-MMMU-Pro: **55.0%** (BenchLM)

### Normalized scores (1–100)

- **Tool use: 40/100.** Zero verified agentic benchmark numbers (the model pre-dates every current agent suite); function calling existed but only legacy-harness evidence — provisional floor-plus score.
- **Reasoning: 48/100.** GPQA 58.9% is below the methodology's mid band (60–80%), HLE 4.6% is near floor, and an AA Index of 7.9 confirms a 2024-era non-reasoning model.
- **Context window: 96/100.** 2M tokens — still the largest verified window in this dataset (≥1M tier); no retrieval-quality data at length keeps it from 100.
- **Multimodal: 88/100.** Text+image+audio+video input (top tier by breadth for its era), text out; AA-MMMU-Pro 55.0% is weak by current standards, capping depth.
- **Coding: 35/100.** AA Coding Index 23.6% is near-floor; no other coding rows exist — legacy generation, unsuitable for coding agents.
- **Cost efficiency: 60/100.** Provisional: no current verified price (deprecated); legacy pricing class was mid-tier — scored at the ~$3/$15-class anchor as a placeholder-free estimate of its historical bracket.
- **Overall Score: 61/100.** Half-up mean of the five quality dims (40+48+96+88+35)/5 = 61.4 — purely a legacy long-context/multimodal-input model today; every current model in this dataset beats it on reasoning, coding, and agentic work.

---

## Signature

- Provided by: **GLM 5.3 (z-ai/glm-5.3)** — 2026-09-25
- Method: public internet research (BenchLM; Google product history); scores are normalized 1–100 interpretations, not official vendor scores. Dimension scores marked provisional rest on era/context evidence only.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
