# Gemma 4 26B A4B — findings by Claude Opus 4.8

- Source: Google (`opencode/gemma-4.26b-a4b`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google's open-weight Gemma 4 sparse MoE (26B total / 4B active), reasoning-enabled, image+audio input, 256K context — the strongest open Gemma 4. Top use case: cheap self-hosted multimodal reasoning.
- **Provider / access:** open weights (`google/gemma-4-26B-A4B`); OpenCode Zen `opencode/gemma-4.26b-a4b`.
- **Release / knowledge:** Gemma 4 (2026); knowledge cutoff per model card.
- **IDs:** `opencode/gemma-4.26b-a4b` (open weights).
- **Context window:** 256K total (BenchLM; curated stub says 128K — **understated; verify**).
- **Modalities:** text, image, audio in; text out (stub says text-only — **flag**); reasoning + function calling.
- **Pricing (as of 2026-10-03):** free self-host (open weights); low hosted pricing.
- **Architecture:** 26B total / 4B active open-weight MoE.

### Raw benchmarks found

Agent / tool use:

- τ²-bench **43.6%**; GDPval-AA 713 Elo (3.5% norm); AA-IFBench 72.4%

Reasoning / knowledge:

- MMLU-Pro **82.6%**; AA-GPQA Diamond **79.2%**; AA-LCR **65.7%**; HLE 17.2%; AA Intelligence Index 16.7; CritPt 0%

Coding:

- AA Coding Index **39.3%**; AA-SciCode **40.0%**

Multimodal:

- MMMU-Pro **73.8%**; AA-MMMU-Pro **69.2%**; image+audio in

### Normalized scores (1–100)

- **Tool use: 48/100.** τ²-bench 43.6%, IFBench 72.4%; GDPval 3.5% norm caps it.
- **Reasoning: 60/100.** MMLU-Pro 82.6%, GPQA-D 79.2%, AA-LCR 65.7%; AA Index 16.7 and HLE 17.2% limit it.
- **Context window: 72/100.** 256K total.
- **Multimodal: 80/100.** MMMU-Pro 73.8%, image+audio in — strong for an open model.
- **Coding: 48/100.** AA Coding Index 39.3%, SciCode 40%.
- **Cost efficiency: 95/100.** Free self-host (open weights) plus low hosted pricing.
- **Overall Score: 61.6/100.** Half-up mean of the five quality dims (48/60/72/80/48). The best open Gemma 4 — multimodal + context lead; agentics/coding mid. `meta.json` context/modality need correction.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Gemma 4 26B A4B HF card, Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
