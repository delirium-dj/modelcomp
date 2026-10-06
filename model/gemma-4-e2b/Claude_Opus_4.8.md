# Gemma 4 E2B — findings by Claude Opus 4.8

- Source: Google (`opencode/gemma-4-e2b`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B
- **Short description:** Google DeepMind's 2.3B-effective edge variant of Gemma 4 (April 2026) for phones, laptops and Jetson/Pi-class hardware, with native image+audio input, 128K context. Top use case: tiny on-device multimodal.
- **Provider / access:** Apache-2.0 open weights (`google/gemma-4-e2b`); OpenCode Zen `opencode/gemma-4-e2b`.
- **Release / knowledge:** 2026-04; knowledge cutoff per model card.
- **IDs:** `opencode/gemma-4-e2b` (open weights).
- **Context window:** 128,000 total.
- **Modalities:** text, image, audio in; text out.
- **Pricing (as of 2026-10-03):** free self-host (Apache 2.0); hosted ~$0.04/$0.08 per 1M.
- **Architecture:** 2.3B-effective edge model (smallest Gemma 4).

### Raw benchmarks found

> BenchLM lists **Gemma 4 E2B — Overall 30.05** (just below E4B 31.17); per-benchmark E2B rows not separately enumerated. Scored just below the E4B sibling profile (τ²-bench ~20%, AA-MMMU-Pro ~51%, MMLU-Pro ~69%, AA-LCR ~32%).

Reasoning / knowledge:

- BenchLM family Overall 30.05 (smallest Gemma 4; a notch under E4B)

Multimodal:

- Image+audio in; text out (Gemma 4 native multimodal)

### Normalized scores (1–100)

- **Tool use: 24/100.** Tiny 2.3B edge agentics — minimal.
- **Reasoning: 40/100.** Just under E4B (family Overall 30.05; MMLU-Pro ~69% but AA-LCR ~32%).
- **Context window: 55/100.** 128K total.
- **Multimodal: 70/100.** Image+audio in, text out — notable for a 2.3B model.
- **Coding: 26/100.** Edge-class coding, below E4B.
- **Cost efficiency: 98/100.** Apache 2.0 self-host plus ~$0.04/$0.08 hosted — near-free.
- **Overall Score: 43.0/100.** Half-up mean of the five quality dims (24/40/55/70/26). The smallest Gemma 4 — multimodal/context carry it for its size; agentics/coding minimal.

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Gemma 4 blog/HF card, BenchLM E2B/E4B family). Per-benchmark E2B rows not individually published; scored just below the E4B sibling. Normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
