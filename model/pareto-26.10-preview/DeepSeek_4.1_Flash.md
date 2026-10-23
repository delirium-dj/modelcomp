# Pareto 26.10 Preview — findings by DeepSeek 4.1 Flash

- Source: Unbiased/Pareto 26.10 Preview (`unbiased/pareto-26.10-preview`)
- Date: 2026-10-16 (UTC) — third pass (previous Signature 2026-10-05); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Re-verified 2026-10-18.** BenchLM (`pareto-26-10-preview`, 3 rows) assigns **no overall score** (unranked); no new independent benchmark surfaced and the prior deep-pass rows stand. **No score change.**

> **Third-pass refresh — 2026-10-16** (sources: official Unbiased Pareto 26.10 model card, OpenRouter model page + `pareto-latest` guide, BenchLM).
> **Evidence is essentially unchanged since 2026-10-05** — Pareto 26.10 Preview still carries only **three preliminary rows** (Terminal-Bench 4.0 50.80%, DeepSWE 69.9%, GPQA-D 92.4%) and BenchLM still lists it as **unranked** (3 of 638 benchmarks covered, "no public overall score"). New this pass: (1) the official Unbiased model card **confirms pricing $0.80 in / $0.03 cached / $3.20 out** and states **"Pareto 26.10 is out of preview"** (blog), while the OpenRouter route is still named `pareto-26.10-preview`; (2) the **sibling Pareto 26.9** is now documented (TB4.0 51.0%, DeepSWE 74.0%, MMMU-Pro 78%, HLE w/o tools 49%) and (3) OpenRouter serves the alias `~unbiased/pareto-latest`. DeepSWE cost is **$0.24/task** (vs Fable 5's $13.50).
> **Conflict surfaced:** BenchLM's **compare page lists Unbiased pricing as $2.50/$7.50**, contradicting both the old pass and the **official Unbiased model card ($0.80/$3.20)** — the BenchLM figure is treated as an error and the official price is used.
> Sources: https://unbiased.ai/model-card/ · https://openrouter.ai/unbiased/pareto-26.10-preview/api · https://openrouter.ai/~unbiased/pareto-latest · https://benchlm.ai/models/pareto-26-10-preview · https://benchlm.ai/models/pareto-26-9

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's composite/blended multimodal model for research, coding and agentic workflows; shipped 2026-10-01 when Unbiased moved its `pareto` model string onto a four-times-larger context release. The benchmark sheet is vendor-preliminary and **still not final**; Unbiased's blog says "Pareto 26.10 is out of preview", though the OpenRouter route remains `pareto-26.10-preview`.
- **Provider / access:** Unbiased. OpenRouter `unbiased/pareto-26.10-preview` (alias `~unbiased/pareto-latest`); single serving provider (99.8% 24h uptime on RunFreeTools). Proprietary.
- **Release / knowledge:** 2026-10-01. Knowledge cutoff not stated.
- **IDs:** `unbiased/pareto-26.10-preview`; no OpenCode Zen Free ID (`noFreeId: true`).
- **Context window:** 1,048,576 (1M) tokens; max output 131,072 (131K); OpenRouter lists "1.0M".
- **Modalities:** Text + image in; text out. Reasoning available; tool use.
- **Pricing (as of 2026-10-16):** **$0.80 per 1M input / $3.20 per 1M output**; cached input $0.03; blended 3:1 $1.40 per 1M (official Unbiased card — unchanged from 2026-10-05).
- **Architecture:** Proprietary composite/blended model (routes across underlying models rather than a single set of published weights); parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **50.80%** (Unbiased preliminary results)
- Tau3-Banking / GDPval-AA / Claw-Eval / Toolathlon: no verified public score found
- Sibling Pareto 26.9 for reference: Terminal-Bench 4.0 **51.0%**

Reasoning / knowledge:

- GPQA-D: **92.4%** (Unbiased preliminary results)
- HLE: no verified public score found (sibling Pareto 26.9: HLE w/o tools 49%)
- LCR / MLCR: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found
- LM Market Cap composite (third-party, weighted): **40/100** (Capabilities 50, Pricing 97, Context 96)

Coding:

- DeepSWE: **69.9%** at **$0.24/task** (Unbiased preliminary results; Pareto 26.9 70.0%, Fable 5 70.0%)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found

Long context:

- No long-context retrieval (RULER/MRCR/LCR) reported; 1M window is a spec claim only.

### Normalized scores (1–100)

> Benchmarks are vendor-preliminary and only three rows exist, so confidence is moderate; the composite/routed nature of the model is noted throughout. Re-verified 2026-10-16 with no material change to the evidence base.

- **Tool use: 62/100.** Terminal-Bench 4.0 50.80% (a harder successor harness than the TB2.1 reference) shows real agentic capability for a preview, but no Tau3/GDPval/Claw-Eval corroboration and the composite routing layer adds reliability uncertainty.
- **Reasoning: 78/100.** GPQA-D 92.4% clears the 90% frontier line, but it is a single vendor-preliminary row with no HLE or Intelligence Index to confirm the level.
- **Context window: 94/100.** 1,048,576 tokens with 131K max output sits in the ≥1M band; no retrieval evidence at depth (and a routed model may not sustain it end-to-end), so it stops short of 100.
- **Multimodal: 64/100.** Text + image in with text out is the +image band (60–70); still no vision benchmarks on 26.10 itself (sibling Pareto 26.9 reports MMMU-Pro 78%), and no video/audio.
- **Coding: 80/100.** DeepSWE 69.9% is close to the 74%+ frontier reference and strong for a packaged composite; no SWE-bench/LiveCodeBench to corroborate, and vendor-preliminary status caps it below 85.
- **Cost efficiency: 88/100.** $0.80/$3.20 per 1M (blended $1.40) with very cheap $0.03 cached input is competitive value; it sits above the ~$0.10–$0.20 band that would score higher.
- **Overall Score: 76/100.** Mean of (62 + 78 + 94 + 64 + 80) / 5 = 75.6 → **76**. Best-fit: long-context research/coding and agentic work through a single cheap routed endpoint, pending final (non-preliminary) benchmarks.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: public internet research; third-pass re-verification on 2026-10-16 against the official Unbiased Pareto 26.10 model card, OpenRouter model page and `pareto-latest` API guide, and BenchLM (preliminary results); confirmed the unchanged $0.80/$3.20 pricing against a BenchLM compare-page error ($2.50/$7.50), added the sibling Pareto 26.9 and the "out of preview" status, and found no new 26.10 benchmark rows. Scores are normalized 1–100 interpretations of vendor-preliminary data, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
