# Gemini 2.0 Flash — findings by GLM 5.3 Flash

- Source: Google (`gemini-2.0-flash`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash (Feb '25 GA)
- **Short description:** Google's fast, native-multimodal workhorse LLM from the Gemini 2.0 generation (GA February 2025) — built for high-volume everyday tasks, long-context RAG, and cheap multimodal input. Deprecated: Artificial Analysis notes Google's newer Gemini 2.5 Flash supersedes it and only historical workloads are benchmarked.
- **Provider / access:** Google Gemini API / Vertex AI (`gemini-2.0-flash`). AA's provider page covers current API availability; a separate "Flash Thinking" reasoning variant exists as its own model line.
- **Release / knowledge:** Released 2025-02-05 (verified via AA FAQ, re-confirmed 2026-10-11); knowledge cutoff June 1, 2024 (verified via AA technical specifications).
- **IDs:** `google/gemini-2.0-flash` — no Free ID on OpenCode Zen was verified during research.
- **Context window:** 1M (1,000,000) total tokens (verified via AA technical specifications, re-confirmed 2026-10-11).
- **Modalities:** Text, image, speech, and video input; text and image output; reasoning no (non-reasoning model); tool calls yes (Gemini API function calling); JSON mode not independently verified.
- **Pricing (as of 2026-10-11):** ~$0.10 in / $0.40 out per 1M tokens (Vellum LLM leaderboard; AA's price display reads "-/-" — the Vellum figure is used as the conservative verified proxy). Paid only; no free API tier verified.
- **Architecture:** Proprietary; parameter count undisclosed by Google.

### Raw benchmarks found

> Second-pass verification (2026-10-11): the freshly fetched AA page confirms the same data as the prior pass — Intelligence Index 9 (estimated, #104/300 non-reasoning, median 7), deprecated with benchmarking limited to the default 10K-input workload, and no itemized benchmark rows published ("Not publicly available" across all evaluation charts). BenchLM has no page for this model (404). No new evidence; scores are carried, not moved.

> CORRECTION 2026-10-16: the 2026-10-11 pass recorded "BenchLM 404 — no aggregator
> page"; the BenchLM 2026-10-17 refresh now carries 15 sourced rows (AA boards +
> the Gemini 2.5 technical report Table 3) that fill the prior evidence gaps and
> materially revise the profile downward.

Agent / tool use:

- Tau2-Bench: **29.5%** (AA — added 2026-10-16, fills the gap; weak)
- Terminal-Bench / Tau3-Banking / GDPval-AA / Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **65.2%** (Gemini 2.5 tech report Table 3) / **62.3%** (AA-GPQA Diamond) — added 2026-10-16, fills the gap
- HLE: **4.3%** (AA-HLE — very weak); AA-LCR: **31.3%** (weak); CritPt: **0.0%**
- AIME 2025: **29.7%**; SimpleQA: **29.9%** (both from the 2.5 tech report — added 2026-10-16)
- Artificial Analysis Intelligence Index: **8.9** (AA current board — corroborates the 9 estimate)
- AA-Omniscience: accuracy **23.5%**, hallucination rate **86.2%** (poor)
- AA-IFBench: **40.2%**

Coding:

- SWE-bench Verified: **21.4%** (Gemini 2.5 tech report Table 3 — added 2026-10-16, fills the gap; very weak)
- SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found

Long context:

- AA-LCR 31.3% measured (added 2026-10-16 — weak); 1M window advertised, no MRCR/RULER value

Multimodal:

- MMMU: **69.3%** (Gemini 2.5 tech report Table 3 — added 2026-10-16, first measured vision row; mid)

### Normalized scores (1–100)

> Recalculated 2026-10-16 on the newly surfaced 15-row BenchLM profile — the
> 2026-10-11 scores rested on the AA Index estimate alone with zero itemized rows.

- **Tool use: 40/100.** CHANGED from 45 — the newly measured Tau2 29.5% is weak; function calling exists but with no positive agentic evidence.
- **Reasoning: 46/100.** CHANGED from 48 — the newly measured GPQA 62.3–65.2%, HLE 4.3%, AA-LCR 31.3%, CritPt 0.0% and AIME 29.7% confirm low-mid band; AA Index 8.9 corroborates.
- **Context window: 95/100.** 1M total tokens maps to the ≥1M tier (95–100), capped at the band floor; AA-LCR 31.3% is the only measured retrieval (weak).
- **Multimodal: 88/100.** CHANGED from 90 — text, image, speech, and video input with image output remains near-full coverage; the newly measured MMMU 69.3% is mid-range, docking one point.
- **Coding: 35/100.** CHANGED from 45 — the newly measured SWE-bench Verified 21.4% is very weak; no other coding evidence exists.
- **Cost efficiency: 97/100.** ~$0.10/$0.40 per 1M sits in the methodology's cheapest band (~$0.10/$0.20 = 97–99) — a flagship-class price point for high-volume workloads.
- **Overall Score: 61/100.** CHANGED from 65 — mean of the five quality dims per `RULES.md` (Cost excluded): (40 + 46 + 95 + 88 + 35) / 5 = 304/5 = 60.8 → 61. The measured rows document the Feb-2025 generation's age. Best fit as a cheap, fast, multimodal high-volume workhorse; newer Gemini 2.5+ Flash models are preferable for reasoning-heavy or agentic work.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-10-16
- Method: public internet research, second pass 2026-10-11 (verification pass: freshly fetched artificialanalysis.ai Gemini 2.0 Flash page re-confirms the prior data identically; BenchLM 404 — no aggregator page beyond AA; the prior 2026-09-28 pass on AA + Vellum + Google DeepMind pages; 2026-10-16 CORRECTION: the BenchLM 2026-10-17 refresh now carries 15 rows (prior pass said 404) — Tau2 29.5%, SWE-V 21.4%, GPQA 62.3-65.2%, MMMU 69.3% filled — Tool 45→40, Reasoning 48→46, Multimodal 90→88, Coding 45→35, Overall 65→61); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
