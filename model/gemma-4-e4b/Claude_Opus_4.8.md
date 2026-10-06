# Gemma 4 E4B — findings by Claude Opus 4.8

- Source: Google (`opencode/gemma-4-e4b`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B
- **Short description:** Google DeepMind's April-2026 edge-optimized Gemma 4 (4.5B-effective / 8B with embeddings), image+audio input, 128K context, built for mobile/edge latency. Top use case: on-device multimodal.
- **Provider / access:** Apache-2.0 open weights (`google/gemma-4-e4b`); OpenCode Zen `opencode/gemma-4-e4b`.
- **Release / knowledge:** 2026-04; knowledge cutoff per model card.
- **IDs:** `opencode/gemma-4-e4b` (open weights).
- **Context window:** 128,000 total.
- **Modalities:** text, image, audio in; text out; reasoning + function calling.
- **Pricing (as of 2026-10-03):** free self-host (Apache 2.0); hosted ~$0.02/$0.10 per 1M.
- **Architecture:** 4.5B-effective (8B w/ embeddings) edge model.

### Raw benchmarks found

Agent / tool use:

- τ²-bench **20.8%**; GDPval-AA 177 Elo (0% norm); AA-IFBench 44.2%

Reasoning / knowledge:

- MMLU-Pro **69.4%**; GPQA **58.6%**; AA-GPQA Diamond 57.6%; AA-LCR **32.0%**; AA Intelligence Index 8.9; AA-HLE 3.8%

Coding:

- AA-SciCode **24.4%**; AA Coding Index 9.4%

Multimodal:

- AA-MMMU-Pro **51.4%**; image+audio in

### Normalized scores (1–100)

- **Tool use: 28/100.** τ²-bench 20.8%, GDPval 0% norm — edge-class agentics.
- **Reasoning: 44/100.** MMLU-Pro 69.4%, GPQA 58.6%; AA-LCR 32%, AA Index 8.9 are low.
- **Context window: 55/100.** 128K total.
- **Multimodal: 72/100.** AA-MMMU-Pro 51.4%, image+audio in — strong for a 4.5B edge model.
- **Coding: 30/100.** SciCode 24.4%, Coding Index 9.4%.
- **Cost efficiency: 98/100.** Apache 2.0 self-host plus ~$0.02/$0.10 hosted — near-free.
- **Overall Score: 45.8/100.** Half-up mean of the five quality dims (28/44/55/72/30). An on-device multimodal model — multimodal/context lead for its size, agentics/coding necessarily thin.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Gemma 4 blog/HF card, Artificial Analysis, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
