# Qwen 3.7 — findings by Qwen 3.8 Flash

- Source: Alibaba Qwen / Qwen 3.7 (flagship "Max" tier, `qwen/qwen3.7-max`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.7 (hosted flagship tier: Qwen3.7-Max)
- **Short description:** Alibaba/Qwen's flagship reasoning-agent model of the Qwen 3.7 series ("The Agent Frontier", launched 2026-05-19) — 1M-token context, text-only, built for long-horizon autonomous agentic coding and office automation. It is the Max/flagship endpoint of the `qwen-3.7` family (siblings: `qwen-3.7-plus`; the base `qwen-3.8` line is a different generation).
- **Provider / access:** Together AI (`Qwen/Qwen3.7-Max`), OpenRouter (`qwen/qwen3.7-max`), Qwen native API. Chat Completions / Responses; reasoning + tool calls.
- **Release / knowledge:** 2026-05-19; knowledge cutoff not disclosed.
- **IDs:** `qwen/qwen3.7-max` (Together endpoint `Qwen/Qwen3.7-Max`).
- **Context window:** 1,000,000 total (~991,808 input / 65,536 output) — verified via OpenRouter model page and Qwen/Together card. NOTE: the curated `meta.json` claims "128K total"; that is an unverified placeholder contradicted by three independent sources and is not used for scoring.
- **Modalities:** text in / text out; reasoning on; tool calls; JSON. Text-only (no image/audio/video per the model card).
- **Pricing (as of 2026-10-02):** ~$1.475 / $4.425 per 1M in/out on OpenRouter (other gateways list $1.25 / $3.75; cached input ~$0.25). Paid flagship; no Zen free ID for this slug.
- **Architecture:** proprietary dense/MoE flagship; weights not disclosed.

### Raw benchmarks found

> Verified against the Qwen/Together AI "Qwen3.7-Max" model card and OpenRouter (fetched 2026-10-02). Numbers are the vendor/Qwen-reported flagship figures, cross-listed on the hosted model pages.

Agent / tool use:

- Terminal-Bench 2.0-Terminus: **69.7**; Terminal-Bench 2.1: **75%**
- MCP-Mark **60.8%**, MCP-Atlas **76.4%**, BFCL-V4 **75.0%**, SpreadSheetBench-v1 **87.0%**
- GDPval-AA (table): **39%** normalized; long-horizon autonomy claim ~35h coherent session / 10.0× kernel speedup (vendor, unverified externally)

Reasoning / knowledge:

- GPQA Diamond: **92.4%** (card); FrontierMath Tier 4 **34.1%**
- HLE: **41.4%**; HMMT 2026 Feb **97.1%**; LiveCodeBench **91.6%**
- Instruction following: IFBench **79.1%**, IFEval **94.3%**; multilingual MMMLU **90.3%**, WMT24++ **85.8%**

Coding:

- SWE-Bench Verified **80.4%**, SWE-Pro **60.6%**, SWE-Multilingual **78.3%**
- SciCode **53.5%**; LiveCodeBench **91.6%**

Long context:

- MRCR-v2 @128K: **90.4%** (only published long-context retrieval row; none reported at 512K+ to 1M)

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded.

- **Tool use: 82/100.** Terminal-Bench 2.0 69.7 / 2.1 75, MCP-Atlas 76.4%, BFCL-V4 75.0% and SpreadSheetBench-v1 87.0% are a strong agentic cluster; the modest GDPval-AA (39% normalized) and the unverifiable 35h-autonomy claim keep it below the 90 frontier band.
- **Reasoning: 88/100.** GPQA Diamond 92.4% clears the ≥90 frontier ref and HLE 41.4% is over the 40% bar, with LiveCodeBench 91.6% and HMMT 97.1% supportive; FrontierMath Tier 4 34.1% and absence of an independent Intelligence-Index pull it off the top of the band.
- **Context window: 95/100.** 1M window (991,808 in) meets the ≥1M tier, but the only retrieval evidence is MRCR-v2 90.4% at 128K — no ≥98% at 512K+ — so the band floor.
- **Multimodal: 15/100.** Text-only in/out per the model card; no verified image/audio/video capability — text-only band.
- **Coding: 90/100.** SWE-Bench Verified 80.4% and LiveCodeBench 91.6% are frontier-tier, SWE-Multilingual 78.3% reinforces it; SciCode 53.5% sits just under the 55 ref and there is no external Coding Index to lift it further.
- **Cost efficiency: 87/100.** ~$1.475 / $4.425 per 1M (cached ~$0.25) places it at the flagship paid band (≈$1.25/$4.25 → ~88). Cost is excluded from Overall.
- **Overall Score: 74/100.** Mean of Tool 82, Reasoning 88, Context 95, Multimodal 15, Coding 90 = 74.0 → 74. Best fit: a text-only frontier agentic coder/reasoner for 1M-context, long-horizon engineering and office-automation work; the text-only modality is the single dimension capping its general Overall — pick `qwen-3.8` / omni siblings when vision or audio input is required.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research (Qwen/Together AI "Qwen3.7-Max" model card + OpenRouter model page, fetched 2026-10-02); scores are normalized 1–100 interpretations, not official vendor scores. Curated `meta.json` 128K context was flagged as an unverified placeholder against three sources documenting 1M.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
