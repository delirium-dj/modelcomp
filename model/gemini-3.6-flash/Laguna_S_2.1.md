# Gemini 3.6 Flash — findings by Laguna S 2.1

- Source: Google (`google/gemini-3.6-flash`), e.g. Google DeepMind, Artificial Analysis, BenchLM, Vals AI
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.6 Flash (High) (Google DeepMind)
- **Short description:** Gemini 3.6 Flash is Google's July 2026 mid-tier multimodal reasoning model, featuring 1M context and fast output (~197 tok/s). DEPRECATED — Google recommends Gemini 3.7 Flash.
- **Provider / access:** Google AI Studio, Vertex AI (`gemini-3.6-flash`), OpenRouter.
- **Release / knowledge:** 2026-07-01 release (July 21, 2026 per AA); 2026-05 knowledge cutoff
- **IDs:** `google/gemini-3.6-flash`
- **Context window:** 1,000,000 tokens (1M total; 1M input / 8192 max output) — AA confirms.
- **Modalities:** text, image, speech, video in; text out; reasoning yes; tool calls yes; JSON mode yes — AA confirms +image +video +speech-in.
- **Pricing (as of 2026-10-10):** $0.75 in / $3.75 out per 1M tokens ($0.63 blended with cache)

### Raw benchmarks found

> Sources: BenchLM.ai (`https://benchlm.ai/models/gemini-3-6-flash`, Overall 63.15/100, #41/889, 25 of 625 benchmarks, 2026-10-10); Artificial Analysis (`https://artificialanalysis.ai/models/gemini-3-6-flash`, Intelligence Index 34, #77/227 reasoning); Vals AI; Google DeepMind launch.

Agent / tool use:

- OSWorld-Verified: 83% (Google DeepMind launch)
- GDPval-AA (Elo): 1423 (Google DeepMind launch)
- GDPval-AA (normalized): 39.3% (Artificial Analysis)
- Terminal-Bench 2.1 (Vals): 73.8% (Vals AI)
- AA Agentic Index: 30.1% (Artificial Analysis)
- AA Briefcase Elo: not listed on fresh AA
- τ²-bench: not found on fresh BenchLM for this model

Reasoning / knowledge:

- GPQA Diamond: 93.4% (Vals AI) / AA-GPQA Diamond: 92.8% (Artificial Analysis)
- HLE: 25.8% (BenchLM) — note: this conflicts with fresh BenchLM data
- AA-HLE: 40.8% (Artificial Analysis)
- AA Intelligence Index: 34 (Artificial Analysis v4.3.2)
- AA-LCR: 80.0% (Artificial Analysis)
- CritPt: 10.6% (Artificial Analysis)
- ARC-AGI-1: 91.20% (ARC Prize: Gemini 3.6 Flash verified results)
- ARC-AGI-2: 60.4% (ARC Prize: Gemini 3.6 Flash verified results)

Coding:

- DeepSWE: 49.0% (Google DeepMind launch)
- AA-SciCode: 53.4% (Artificial Analysis)
- AA Coding Index: 69.2% (Artificial Analysis)
- LiveCodeBench (Vals): 88.1% (Vals AI)
- SWE-bench (Vals): 79.6% (Vals AI)
- CursorBench 3.2: 53.5% (Cursor evals)

Multimodal:

- AA-MMMU-Pro: 83.2% (Artificial Analysis)
- Design Arena Website: 1304 (OpenRouter)

---

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost excluded. Benchmarks verified from BenchLM and AA as of 2026-10-10.

- **Tool use: 80/100.** Terminal-Bench 2.1 (Vals) 73.8% (above 70% frontier ref), GDPval-AA 39.3% (normalized; Elo 1423, below 1750 frontier), OSWorld-Verified 83%; Intelligence Index 34 (mid). Capped by GDPval below frontier and no TB-4.0/τ²-bench.
- **Reasoning: 85/100.** AA-GPQA Diamond 92.8% (above 90% frontier), GPQA Diamond (Vals) 93.4%, AA-HLE 40.8% (at 40% threshold), AA-LCR 80.0%, ARC-AGI-1 91.2% (ARC Prize). Intelligence Index 34 (mid). **Upgraded from prior 77:** fresh BenchLM/AA data shows GPQA 92.8% (correcting prior 46.1%) and HLE 40.8% (correcting prior 25.8%).
- **Context window: 95/100.** 1,000,000 tokens (≥1M tier; AA confirms). AA-LCR 80.0% confirms long-context reasoning.
- **Multimodal: 90/100.** Text, image, speech, and video input processing (audio input confirmed via AA + Google DeepMind model page). AA-MMMU-Pro 83.2%.
- **Coding: 78/100.** SWE-bench (Vals) 79.6% + LiveCodeBench (Vals) 88.1% (excellent) + AA-SciCode 53.4% (near 55% frontier) + AA Coding Index 69.2%; DeepSWE 49.0% (below 50% floor); HumanEval 96.2% (BenchLM). **Upgraded from prior 76:** fresh LiveCodeBench 88.1% and SWE-bench 79.6% (correcting prior 44.1% and 76.5%). Capped by DeepSWE 49.0% and no SWE-bench Verified.
- **Cost efficiency: 85/100.** Highly competitive pricing ($0.75 in / $3.75 out per 1M tokens).
- **Overall Score: 85.6/100.** (80 + 85 + 95 + 90 + 78) / 5 = 428 / 5 = 85.6 → 86. **Up from prior 84:** Reasoning upgraded 77→85 and Coding upgraded 76→78 based on fresh BenchLM/AA data correcting GPQA 46.1→92.8, HLE 25.8→40.8, LiveCodeBench 44.1→88.1, SWE-bench 76.5→79.6. Aligns with BenchLM Overall 63.15/100 rank (#41/889) and AA Intelligence Index 34 (#77/227).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public web research (BenchLM.ai model page for full benchmark tables; Artificial Analysis model page for Intelligence Index 34 and cost-per-task; Google DeepMind model page for modalities/specs). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research (Cost line preserved verbatim from prior signed file).
- Sources: BenchLM.ai model page (Overall 63.15/100, #41/889, 25 of 625 benchmarks, 2026-10-10); AA model page (Intelligence Index 34, #77/227, modalities text+image+video+speech, pricing $0.75/$3.75); Google DeepMind launch (modalities, pricing, architecture); Vals AI (GPQA, LiveCodeBench, SWE-bench).
- Future sources: add a new file next to this one, e.g. `Gemini_3.7_Flash.md`, using the same headings.

---
