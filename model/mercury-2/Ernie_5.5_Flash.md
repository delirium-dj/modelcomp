# Mercury 2 — findings by Ernie 5.5 Flash

- Source: Inception Labs/Mercury 2 (`mercury-2`)
- Date: 2026-11-13 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mercury 2 (Inception Mercury 2, first reasoning diffusion LLM)
- **Short description:** Inception Labs' diffusion LLM (released 2026-02-24, GA 2026-03-04) that generates and refines tokens in parallel instead of left-to-right decoding — >1,000 tok/s on Blackwell, tunable reasoning, native tool use and schema-aligned JSON. Superseded by Mercury 2.5 (2026-09-08) and Mercury 3 (2026-10-19).
- **Provider / access:** Inception API (`inception/mercury-2`, `inception/mercury-2-20260304`), Inception Chat, OpenRouter (`inception/mercury-2`); OpenAI-compatible.
- **Release / knowledge:** 2026-02-24 (launch); GA 2026-03-04; knowledge cutoff not published.
- **IDs:** `mercury-2`, `inception/mercury-2`, `inception/mercury-2-20260304`.
- **Context window:** 131,072 tokens (128K).
- **Modalities:** text in / text out; reasoning (tunable levels); native tool use; JSON schema output.
- **Pricing (as of 2026-11-13):** $0.25 in / $0.75 out per 1M; cache read $0.025.
- **Architecture:** proprietary diffusion LLM (parallel token refinement, iterative denoising), parameter count undisclosed.

### Raw benchmarks found

> No vendor benchmark table (Inception publishes speed/quality claims only). Independent Benchable private eval suite (8 benchmarks) — the first measured rows for this exact ID. BenchLM covers 0/824 benchmarks for Mercury 2.

Agent / tool use:

- Terminal-Bench / Tau2 / Claw-Eval / Toolathon: no verified public score found
- Native tool use + structured outputs supported; no agentic benchmark row

Reasoning / knowledge:

- Benchable Reasoning: **96.0% accuracy** (top-3 for speed in reasoning)
- Benchable Hallucinations (baseline): **98.0%**; Email Classification **97.0%**; Ethics **94.0%**
- General Knowledge: **8.0% accuracy** — the model's worst row
- GPQA / HLE / MMLU-Pro / AA Intelligence Index: no verified public score found

Coding:

- Benchable Coding: **67.0% accuracy** (below average)
- Mathematics: **58.0% accuracy**; Instruction Following: **53.6% accuracy**
- SWE-bench / LiveCodeBench / DeepSWE: no verified public score found

Performance:

- Output speed **1,009 tok/s** on NVIDIA Blackwell (>5× faster than Claude 4.5 Haiku / GPT-5 Mini per vendor); Benchable reliability **100% success rate**; 95th percentile speed across 8 benchmarks

Long context:

- 128K declared; no MRCR/RULER/GraphWalks row published.

### Normalized scores (1–100)

- **Tool use: 55/100.** Native tool use and structured outputs are documented, but no agentic benchmark row exists. Instruction following 53.6% is mid-low. Score reflects the thin evidence.
- **Reasoning: 70/100.** Benchable reasoning 96.0% and hallucination 98.0% are excellent for the speed class, but general knowledge 8.0% is a floor and no GPQA-class row exists. The speed/quality trade-off is the story.
- **Context window: 60/100.** 128K — tier 100K–200K band (50–64); no retrieval figure published.
- **Multimodal: 15/100.** Text-only in/out.
- **Coding: 58/100.** Benchable coding 67.0% and math 58.0% are below average; the speed positioning targets autocomplete-style work, not benchmark coding. No SWE/LCB row.
- **Cost efficiency: 95/100.** $0.25/$0.75 per 1M at 1,000+ tok/s — extremely cheap per unit of latency.
- **Overall Score: 51.6/100.** Best fit for latency-critical loops — autocomplete, agent loops, voice, RAG — where 1,000+ tok/s changes what is possible; the weak knowledge/coding rows and text-only modality keep it mid-band despite the speed lead.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-13
- Method: public internet research (Inception's Mercury 2 launch post, Benchable private evaluation record, BenchLM model record, LLM Stats/OpenRouter listings); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Introducing Mercury 2 — Inception](https://www.inceptionlabs.ai/blog/introducing-mercury-2)
  - [Inception: Mercury 2 — Benchable (measured eval suite)](https://benchable.ai/models/inception/mercury-2)
  - [Mercury 2 — BenchLM (0 benchmarks covered)](https://benchlm.ai/models/mercury-2)
  - [Mercury 2 — LLM Stats](https://llm-stats.com/models/mercury-2)
  - [Mercury 2 — OpenRouter](https://openrouter.ai/inception/mercury-2)
- Future sources: add a new file next to this one, e.g. `Ernie_5.5_Flash_v2.md`, using the same headings.