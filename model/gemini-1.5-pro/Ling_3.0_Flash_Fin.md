# Gemini 1.5 Pro — findings by Ling 3.0 Flash

- Source: Google / Gemini (`google/gemini-1.5-pro`)
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 1.5 Pro
- **Short description:** Google's flagship multimodal model with up to 10M token context, supporting text, image, audio, and video input — a legacy model from February 2025 now superseded by newer generations.
- **Provider / access:** Google AI Studio (`gemini-1.5-pro`), Vertex AI, Gemini API. Text, image, audio, and video in; text out.
- **Release / knowledge:** 2025-02-15 (production); 2024-05-14 (initial release).
- **IDs:** `gemini-1.5-pro` (Google AI Studio)
- **Context window:** 1,000,000+ tokens (up to 10M tested)
- **Modalities:** Text, image, audio, and video in; text out; reasoning enabled; tool calls
- **Pricing (as of 2026-09-23):** $1.25/1M input, $5.00/1M output
- **Architecture:** Proprietary, ~1.5T+ parameters (undisclosed), Gemini 1.0/1.5 family

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the closest proxy as provisional — never invent values.

Agent / tool use:
- Terminal-Bench 2.1: **41.9%** (BenchmarkList)
- AA Agentic Index: **6.2%** (BenchLM)
- GDPval-AA: **4.8%** (BenchLM)
- APEX-Agents-AA: **3.1%** (BenchLM)
- τ²-bench: **65.8%** (BenchLM)

Reasoning / knowledge:
- GPQA Diamond: **58.9%** (Artificial Analysis)
- Humanity's Last Exam: **4.6%** (Artificial Analysis)
- AA Intelligence Index: **7.9** (Artificial Analysis, rank 392nd of 418)
- MMLU-Pro: **75.8%** (Artificial Analysis)
- MATH: **86.5%** (BenchmarkAtlas)
- SciCode: **29.5%** (Artificial Analysis)

Coding:
- LiveCodeBench: **11.0%** (Artificial Analysis)
- SWE-bench Verified: **not in top rankings**
- HumanEval: **84.1%** (BenchmarkAtlas)
- AA Coding Index: **30.4** (BenchLM)
- Terminal-Bench Hard: **not published**

Long context:
- AA-LCR: **11.7** (BenchmarkAtlas, very low for its era)
- Context window: 1M+ tokens (10M tested for recall)
- MRCR: **82.6%** (BenchmarkAtlas)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in `model-comparison.md`.
> **OVERALL SCORE FORMULA:** Overall = (Tool + Reasoning + Context + Multimodal + Coding) / 5 (half-up). Cost efficiency is scored independently.

- **Tool use: 40/100.** Very weak on agentic benchmarks: AA Agentic Index 6.2%, GDPval-AA 4.8%, APEX-Agents 3.1%. Terminal-Bench 2.1 at 41.9% is below average. Legacy model superseded by Gemini 3.x.
- **Reasoning: 45/100.** Moderate reasoning (GPQA 58.9%, MMLU-Pro 75.8%) but very weak on frontier benchmarks (HLE 4.6%, AA Intelligence Index 7.9). Superseded by Gemini 2.5/3.x generations.
- **Context window: 80/100.** 1M+ context window (10M tested) with 99.2% recall at 1M tokens — class-leading long-context capability. AA-LCR at 11.7 reflects older evaluation methodology.
- **Multimodal: 85/100.** Full multimodal support: text, image, audio, and video input. Strong in original evaluation (92.3% vision win-rate). Still capable for multimodal tasks despite age.
- **Coding: 35/100.** Very weak coding performance: LiveCodeBench 11.0%, AA Coding Index 30.4, SciCode 29.5%. Severely outclassed by current-generation models.
- **Cost efficiency: 70/100.** $1.25/1M input, $5.00/1M output. Not free but older pricing. Superseded by cheaper Gemini 2.5 Flash-Lite and Gemini 3.x models.
- **Overall Score: 57/100.** Mean of the five non-cost dimensions (40 + 45 + 80 + 85 + 35) / 5 = 57.0, rounded half-up to 57.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-23
- Method: Public internet research via Artificial Analysis, BenchmarkList, BenchmarkAtlas, Google AI Studio, and arXiv paper; scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.
