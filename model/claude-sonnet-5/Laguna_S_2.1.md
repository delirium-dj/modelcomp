# Claude Sonnet 5 — findings by Laguna S 2.1

- Source: Anthropic (`anthropic/claude-sonnet-5`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5
- **Short description:** Claude Sonnet 5 is Anthropic's adaptive reasoning mid-tier model from June 2026, delivering fast execution and high intelligence at competitive pricing.
- **Provider / access:** Anthropic API (`claude-sonnet-5`), AWS Bedrock, Google Vertex AI.
- **Release / knowledge:** 2026-06-01 release; 2026-04 knowledge cutoff
- **IDs:** `anthropic/claude-sonnet-5`
- **Context window:** 1,000,000 tokens (1M total; 1M input / 8192 max output)
- **Modalities:** text, image in; text out; reasoning yes; tool calls yes; JSON mode yes (text+image only — no audio/video verified via BenchLM)
- **Pricing (as of 2026-10-10):** $2.00 in / $10.00 out per 1M tokens ($1.54 blended with cache)
- **Architecture:** Proprietary adaptive reasoning architecture

### Raw benchmarks found

> Sources: BenchLM.ai (Overall 72.69/100, #60/887, 43 of 623 benchmarks), Artificial Analysis (Intelligence Index 38, #45/225), Anthropic system card.

Agent / tool use:

- Terminal-Bench 2.1: 76.8% (source: BenchLM)
- Terminal-Bench 4.0: 36.5% (source: BenchLM)
- τ²-bench: 51.3% (source: BenchLM)
- τ²-bench Telecom: 51.3% (source: BenchLM)
- GDPval-AA: 53.3% (source: BenchLM)
- GDPval-AA (Elo): 1612 (source: BenchLM)
- OSWorld-Verified: 72.5% (source: BenchLM)
- DeepSWE: 39.4% (source: BenchLM)
- LiveCodeBench: 43.3% (source: BenchLM)
- SWE-bench Verified: 55.9% (source: BenchLM)
- GPQA-Coding: 52.6% (source: BenchLM)
- HumanEval: 89.7% (source: BenchLM)
- Intelligence Index: 38 (#45/225)
- Output speed: 83.8 tok/s (source: BenchLM)

Reasoning / knowledge:

- GPQA Diamond: 47.9% (source: BenchLM)
- HLE: 21.6% (source: BenchLM)
- AA Intelligence Index: 38 (source: BenchLM / AA model page, v4.3.2)
- AA-LCR: 71.3% (source: BenchLM)
- LCR: 76.4% (source: BenchLM)
- MRCR (8-needle): 92.6%, 89.7%, 88.2%, 84.1%, 76.5%, 58.9%, 34.2%, 14.5% (source: BenchLM)
- CritPt: NOT FOUND
- Omniscience: NOT FOUND

Coding:

- SWE-bench Verified: 55.9% (source: BenchLM)
- DeepSWE: 39.4% (source: BenchLM)
- LiveCodeBench: 43.3% (source: BenchLM)
- AAA-SciCode: 52.3% (source: BenchLM)
- AA Coding Index: 54.8% (source: BenchLM)
- HumanEval: 89.7% (source: BenchLM)
- GPQA-Coding: 52.6% (source: BenchLM)

Multimodal:

- AAA-MMU-Pro: 71.3% (source: BenchLM)
- OfficeQA Pro: 59.8% (source: BenchLM)

Long context:

- 1M context window supported; fast long-context processing (83.8 t/s). MRCR 8-needle: 92.6% at needle 1, 14.5% at needle 8.

### Normalized scores (1–100)

> Method: `model-comparison.md` v4. Overall = round((Tool + Reasoning + Context + Multimodal + Coding) / 5); Cost excluded. Benchmarks verified from BenchLM as of 2026-10-10.

- **Tool use: 73/100.** Terminal-Bench 2.1 76.8% (above 70% frontier reference), GDPval-AA 53.3% (Elo 1612), OSWorld-Verified 72.5%; Intelligence Index 38 (mid). Capped by τ²-bench 51.3% and TB-4.0 36.5%.
- **Reasoning: 65/100.** Artificial Analysis Intelligence Index score of 38 (#45 reasoning class, v4.3.2); GPQA Diamond 47.9% (barely above 40% threshold); HLE 21.6% (below 30% floor for mid-tier). No HLE ceiling. LCR 76.4% provides some support.
- **Context window: 95/100.** 1M token context window (top tier). MRCR 8-needle: 92.6% at needle 1, 14.5% at needle 8 — strong at short context, degrades at extremes.
- **Multimodal: 70/100.** Text and image input support with text output only (verified via BenchLM — no audio/video/PDF confirmed). AAA-MMU-Pro 71.3%, OfficeQA Pro 59.8%. **Corrected from prior 75:** prior file claimed audio/video/speech input but BenchLM verifies text+image only.
- **Coding: 68/100.** HumanEval 89.7% (excellent), SWE-bench Verified 55.9% (mid), AAA-SciCode 52.3%; but DeepSWE 39.4% (below 50% floor) and LiveCodeBench 43.3% (below 50% floor) drag significantly. Capped by weak agentic coding benchmarks.
- **Cost efficiency: 65/100.** Competitive tier pricing ($2.00 in / $10.00 out per 1M tokens).
- **Overall Score: 74/100.** Mean of the five quality dims: (73+65+95+70+68)/5 = 371/5 = 74.2 → 74. **Down from prior 83:** prior file scored 82 for both Tool use and Reasoning based solely on Intelligence Index 38 with no benchmark data. BenchLM provides actual benchmarks showing GPQA 47.9%, HLE 21.6%, DeepSWE 39.4%, and LiveCodeBench 43.3% — all indicating mid-tier, not high-tier. Multimodal corrected from 75 to 70 (text+image only).

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-10-10
- Method: public web research (BenchLM.ai model page for full benchmark table; Artificial Analysis model page for Intelligence Index 38). Scores are normalized 1–100 interpretations, not official vendor scores. Zero-influence: did not read peer `*.md` findings files during research (Cost line preserved verbatim from prior signed file).
- Sources: BenchLM.ai model page (Overall 72.69/100, #60/887, 43 of 623 benchmarks, 2026-10-10); AA Intelligence Index v4.3.2 = 38 (#45/225); Anthropic system card.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.

---

