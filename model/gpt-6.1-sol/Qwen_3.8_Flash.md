# GPT 6.1 Sol — findings by Qwen 3.8 Flash

- Source: OpenAI / GPT-6.1 Sol (`opencode/gpt-6.1-sol`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol (sol-6-1)
- **Short description:** OpenAI's #9-ranked frontier reasoner — standout knowledge/reasoning (AA-HLE 52.9% well over the 40 bar, Intelligence Index 51.8, HealthBench Professional 64.2%) and a 1.05M window, with solid-but-mid agentic reads (GDPval-AA 1575, AutomationBench 64.9%) and only thin independent coverage (27/618, no τ²/Terminal-Bench 2.1 or SWE-bench/LiveCodeBench rows published).
- **Provider / access:** OpenAI API (`gpt-6.1-sol`); OpenCode Zen (`opencode/gpt-6.1-sol`). Reasoning + tool calls.
- **Release / knowledge:** OpenAI "Introducing GPT-6.1 Sol" + system card addendum; knowledge cutoff not disclosed.
- **IDs:** `opencode/gpt-6.1-sol` / OpenAI `gpt-6.1-sol`.
- **Context window:** BenchLM lists **1.05M**; curated `meta.json` says "128K total" — conflict, resolved in favour of 1.05M.
- **Modalities:** AA-MMMU-Pro (image) indicates image-in; curated `meta.json` "Text in/out". Text out; reasoning on; tool calls.
- **Pricing (as of 2026-10-02):** "Standard pricing" (OpenAI flagship tier; exact per-1M rate not in curated meta).
- **Architecture:** proprietary, hosted only.

### Raw benchmarks found

> Independently verified against BenchLM (27 of 618 rows; 77.55/100, **#9 of 645**), citing the OpenAI GPT-6.1 Sol launch/system-card addendum, plus Artificial Analysis (fetched 2026-10-02). Coverage is partial (no Terminal-Bench 2.1 / τ² / SWE-bench / LiveCodeBench rows), so Tool and Coding are scored conservatively from the evidence present.

Reasoning / knowledge:

- **AA-HLE 52.9%** (well over the 40 bar); AA Intelligence Index 51.8 (high); AA-LCR 83.0; CritPt 31.7; MLCR-AA 33.9
- HealthBench Professional 64.2% / 67.2 raw / Hard 36.2%; AA-Omniscience Index 41.5 / Accuracy 62.1% / Hallucination 54.3%

Agent / tool use:

- GDPval-AA 1575 / 53.8%; AA Briefcase 1564; AA AutomationBench 64.9%; Terminal-Bench-Science 0.1 57.0%; AA Terminal-Bench 4.0 56.1%
- ExploitGym 35.1%; GDP.pdf 31.0%; **no τ²-bench or Terminal-Bench 2.1 rows published**

Coding:

- DeepSWE 71.9% (near the 74 bar); AA-SciCode 54.2% (just under 55); **no SWE-bench / LiveCodeBench / Coding-Index rows**

Multimodal / long context:

- AA-MMMU-Pro 86.0% (only image row)
- 1.05M window (AA-LCR 83.0 supportive; no ≥98% MRCR reported).

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Evidence-limited dims scored conservatively.

- **Tool use: 76/100.** GDPval-AA 1575 / 53.8%, Briefcase 1564 and AutomationBench 64.9% show competent professional-agent work, but there is no τ² / Terminal-Bench 2.1 evidence and GDP.pdf 31.0% / ExploitGym 35.1% are mid — an evidence-limited solid, not a proven frontier agent.
- **Reasoning: 82/100.** AA-HLE 52.9% clears the 40 bar emphatically and Intelligence Index 51.8, AA-LCR 83.0 and HealthBench Professional 64.2% are strong; a 54.3% hallucination rate (Omniscience Accuracy 62.1%) and CritPt 31.7 keep it from the very top band.
- **Context window: 92/100.** The 1.05M window is in the ≥1M (95–100) band; AA-LCR 83.0 supports it, but no ≥98% MRCR retrieval is demonstrated and the curated meta conflicts at 128K, so a high-but-not-perfect placement.
- **Multimodal: 66/100.** Only one grounded image row (AA-MMMU-Pro 86.0) — a +image band (60–70); no audio/video/document rows and curated meta says text-only, so no higher-tier credit despite the high single score.
- **Coding: 72/100.** DeepSWE 71.9% (near the 74 bar) is a promising agentic-code signal and SciCode 54.2% is competitive, but with no SWE-bench / LiveCodeBench / Coding-Index rows the score is an evidence-limited conservative read of a #9 model.
- **Cost efficiency: 72/100.** OpenAI flagship-class "standard pricing" is mid; exact per-1M rate not published in curated meta, so provisional. Cost is excluded from Overall.
- **Overall Score: 78/100.** Mean of Tool 76, Reasoning 82, Context 92, Multimodal 66, Coding 72 = 77.6 → 78. Best fit: long-context reasoning and knowledge-heavy professional work (HLE 52.9, 1.05M window, HealthBench, GDPval) — a strong analytical/research assistant; independent coding/tool coverage is thin, so validate agentic-coding and multimodal claims before relying on them.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (BenchLM rows citing the OpenAI GPT-6.1 Sol launch/system-card addendum plus Artificial Analysis); partial coverage (27/618), Tool/Coding scored conservatively from the evidence present. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.
