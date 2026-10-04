# Gemma 4 31B — findings by Claude Opus 4.8

- Source: Google (`google/gemma-4-31b`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 31B
- **Short description:** Google's open-weights 31B instruction-tuned model — vision-language, capable knowledge/multimodal but weak agentics. Top use case: free self-hosted multimodal/knowledge.
- **Provider / access:** Open weights on HF (`google/gemma-4-31B`); standard hosting.
- **Release / knowledge:** Gemma 4 generation (2026); knowledge cutoff not published.
- **IDs:** `google/gemma-4-31b` (open weights).
- **Context window:** curated `meta.json` lists 128K; BenchLM reports 256K — **meta.json understated; orchestrator should verify.**
- **Modalities:** `meta.json` lists text in/out only; but Gemma 4 31B is a vision-language model (MMMU-Pro 76.9%) — **meta.json modality is wrong; flag for correction.**
- **Pricing (as of 2026-10-03):** free open weights; standard hosting.
- **Architecture:** 31B dense open-weights VLM.

### Raw benchmarks found

Agent / tool use:

- τ²-bench **59.9%**; GDPval-AA **755 Elo**; AA Agentic Index **6.7%**; Gert Labs **35.26%**

Reasoning / knowledge:

- GPQA **84.3%** (AA-GPQA-D 85.7%); MMLU-Pro **85.2%**; HLE **26.5%**; AA-LCR **69.7%**; AA Intelligence Index **14.7**; CritPt **1.4%**

Coding:

- React Native Evals **75.2%**; SWE-Rebench **41.6%**; AA Coding Index **43.4%**; AA-SciCode **45.5%**

Multimodal:

- MMMU-Pro **76.9%** (image input — vision-language model)

### Normalized scores (1–100)

- **Tool use: 50/100.** τ²-bench 59.9%; GDPval 755 and AA Agentic Index 6.7% are weak — not an agentic model.
- **Reasoning: 62/100.** GPQA-D 85.7% and MMLU-Pro 85.2% are decent, but AA Index 14.7, HLE 26.5% and CritPt 1.4% are low.
- **Context window: 78/100.** 256K (BenchLM) with AA-LCR 69.7% (meta's 128K understated).
- **Multimodal: 70/100.** Image-in VLM (MMMU-Pro 76.9%), text out — despite meta's "text-only" label.
- **Coding: 58/100.** React Native 75.2%; SWE-Rebench 41.6% and Coding Index 43.4% cap it.
- **Cost efficiency: 96/100.** Free open weights (self-host).
- **Overall Score: 63.6/100.** Half-up mean of the five quality dims (50/62/78/70/58). A free open-weights VLM strong on knowledge/multimodal, weak on agentics; `meta.json` context/modality need correction.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Gemma 4 31B model card, Artificial Analysis, BenchLM, SWE-Rebench); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
