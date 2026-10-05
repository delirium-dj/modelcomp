# Pareto 26.10 Preview — findings by DeepSeek 4.1 Flash

- Source: Unbiased/Pareto 26.10 Preview (`unbiased/pareto-26.10-preview`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Pareto 26.10 Preview
- **Short description:** Unbiased's composite/blended multimodal preview for research, coding and agentic workflows, shipped 2026-10-01 when Unbiased moved its `pareto` model string onto a four-times-larger context release; benchmark sheet is vendor-preliminary and not yet final.
- **Provider / access:** Unbiased. OpenRouter `unbiased/pareto-26.10-preview`; single serving provider (99.8% 24h uptime on RunFreeTools). Proprietary.
- **Release / knowledge:** 2026-10-01. Knowledge cutoff not stated.
- **IDs:** `unbiased/pareto-26.10-preview`; no OpenCode Zen Free ID (`noFreeId: true`).
- **Context window:** 1,048,576 (1M) tokens; max output 131,072 (131K).
- **Modalities:** Text + image in; text out. Reasoning available; tool use.
- **Pricing (as of 2026-10-05):** $0.80 per 1M input / $3.20 per 1M output; cached input $0.03; blended 3:1 $1.40 per 1M.
- **Architecture:** Proprietary composite/blended model (routes across underlying models rather than a single set of published weights); parameters undisclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **50.80%** (Unbiased preliminary results)
- Tau3-Banking / GDPval-AA / Claw-Eval / Toolathon: no verified public score found

Reasoning / knowledge:

- GPQA-D: **92.4%** (Unbiased preliminary results)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found
- LM Market Cap composite (third-party, weighted): **40/100** (Capabilities 50, Pricing 97, Context 96)

Coding:

- DeepSWE: **69.9%** (Unbiased preliminary results)
- SWE-bench Verified / LiveCodeBench / SciCode: no verified public score found

Long context:

- No long-context retrieval (RULER/MRCR/LCR) reported; 1M window is a spec claim only.

### Normalized scores (1–100)

> Benchmarks are vendor-preliminary and only three rows exist, so confidence is moderate; the composite/routed nature of the model is noted throughout.

- **Tool use: 62/100.** Terminal-Bench 4.0 50.80% (a harder successor harness than the TB2.1 reference) shows real agentic capability for a preview, but no Tau3/GDPval/Claw-Eval corroboration and the composite routing layer adds reliability uncertainty.
- **Reasoning: 78/100.** GPQA-D 92.4% clears the 90% frontier line, but it is a single vendor-preliminary row with no HLE or Intelligence Index to confirm the level.
- **Context window: 94/100.** 1,048,576 tokens with 131K max output sits in the ≥1M band; no retrieval evidence at depth (and a routed model may not sustain it end-to-end), so it stops short of 100.
- **Multimodal: 64/100.** Text + image in with text out is the +image band (60–70); no video/audio and no vision benchmarks.
- **Coding: 80/100.** DeepSWE 69.9% is close to the 74%+ frontier reference and strong for a packaged composite; no SWE-bench/LiveCodeBench to corroborate, and vendor-preliminary status caps it below 85.
- **Cost efficiency: 88/100.** $0.80/$3.20 per 1M (blended $1.40) with very cheap $0.03 cached input is competitive value; it sits above the ~$0.10–$0.20 band that would score higher.
- **Overall Score: 76/100.** Mean of (62 + 78 + 94 + 64 + 80) / 5 = 75.6 → **76**. Best-fit: long-context research/coding and agentic work through a single cheap routed endpoint, pending final (non-preliminary) benchmarks.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-05
- Method: public internet research (Unbiased preliminary results via BenchLM, OpenRouter/CloudPrice/RunFreeTools specs, LM Market Cap composite, orcarouter release note); scores are normalized 1–100 interpretations of vendor-preliminary data, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
