# Ling 3.0 Tiny — findings by DeepSeek 4.1 Flash

- Source: Ant Group / InclusionAI / Ling-3.0-tiny (`inclusionAI/Ling-3.0-tiny`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ling 3.0 Tiny
- **Short description:** Ant Group's very small open-weight hybrid-linear MoE (released 2026-08-06), a 7.9B/1.3B-active model with a 256K context and native hybrid reasoning. Free/ultra-cheap and runnable on a single GPU.
- **Provider / access:** Open weights self-host (`inclusionAI/Ling-3.0-tiny`, BF16/FP8/INT4); listed free on OpenRouter (`ling-3.0-tiny:free`); OpenAI-compatible. MIT license.
- **Release / knowledge:** 2026-08-06; knowledge cutoff not published.
- **IDs:** `inclusionAI/Ling-3.0-tiny`.
- **Context window:** 262,144 (256K) tokens. Max output not separately published.
- **Modalities:** text in; text out. Native hybrid reasoning (`enable_thinking`); tool use (ling3 parser). No image.
- **Pricing (as of 2026-10-09):** **$0.00 / $0.00** (free / self-host); MIT open weights.
- **Architecture:** hybrid-linear MoE, **7.9B total / 1.3B active**; 3:1 KDA:MLA, 128 routed experts (8 active + 1 shared); MIT.

### Raw benchmarks found

> Artificial Analysis rows are independent; "model card" rows are self-reported.

- AA Intelligence Index: **11.1** (AA v4.3.2) — conflict: 25 (self-reported card, v4.1.1)
- AA-GPQA Diamond **73.4**; AA-HLE 9.3; AA-LCR 60.3; AA-SciCode 24.2; CritPt 0.0 (AA)
- GDPval-AA normalized 3.2; AA-Omniscience Index −19.3 / Accuracy 8.5 / Hallucination 30.5 (AA)
- AA Agentic Index 16 (self-reported card)
- Output speed: >160 t/s (self-reported, AA testing) vs 55.9 t/s (AA provider median); ~100–105 t/s on DGX Spark, ~86–90 t/s on M4 Pro (card)

Long context:

- 262K window; AA-LCR 60.3; **no MRCR/RULER published**.

### Normalized scores (1–100)

- **Tool use: 56/100.** GDPval-AA normalized 3.2 and AA Agentic Index 16 are weak; tiny size caps tool depth.
- **Reasoning: 64/100.** GPQA 73.4% is high for 1.3B active; HLE 9.3%, CritPt 0.0 and AA Index 11 cap it.
- **Context window: 72/100.** 262K-token window (200K–500K band); AA-LCR 60.3 is modest.
- **Multimodal: 15/100.** Text-only.
- **Coding: 52/100.** AA-SciCode 24.2% only; no SWE-bench/LiveCodeBench published.
- **Cost efficiency: 100/100.** Free ($0) / MIT open weights.
- **Overall Score: 52/100.** (56 + 64 + 72 + 15 + 52) / 5 = 51.8 → 52. Best fit: local/edge cheap reasoning and routing; not a primary coder or agent planner.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: public internet research, cross-checked across the Hugging Face model card, Artificial Analysis and BenchLM. The AA-Index conflict (11 vs 25) and the speed discrepancy are surfaced rather than cherry-picked. Normalized 1–100 interpretations, not vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
