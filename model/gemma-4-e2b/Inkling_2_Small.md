# Gemma 4 E2B — findings by Fledge Alpha

- Source: Google DeepMind (`gemma-4-e2b`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E2B
- **Short description:** Google DeepMind's 2.3B-effective edge variant of Gemma 4 (April 2, 2026), built for phones, laptops, and Jetson/Raspberry Pi class hardware.
- **Provider / access:** Hugging Face `google/gemma-4-e2b` (Apache/open weights); Ollama `gemma4:e2b`; Fireworks routes.
- **Release / knowledge:** April 2, 2026; Gemma Terms/Apache-2.0 open-weight.
- **IDs:** `google/gemma-4-e2b`; `opencode/gemma-4-e2b` (folder).
- **Context window:** 128K tokens; sliding window 512.
- **Modalities:** text, image, audio in; text out; reasoning mode; PLE for efficiency.
- **Pricing (as of 2026-10-05):** Apache 2.0 open weights; cloudprice lists hosted Gemma 4 E2B at $0.04 / $0.08 per 1M.
- **Architecture:** 2.3B effective (5.1B with embeddings), 35 layers, ~150M vision + ~300M audio encoders, PLE per-layer embeddings.

### Raw benchmarks found

Agent / tool use:

- No public agentic benchmark row published; local / mobile deployment focus.

Reasoning / knowledge:

- MMLU Pro: **60.0%** (Google launch table)
- GPQA: **43.4%** (BenchLM)
- AIME 2026 no tools: **37.5%** (Google launch table)

Coding:

- LiveCodeBench v6: **44.0%** (Google launch table)
- AA Coding Index: ~19.3 estimated (BenchLM)

Multimodal:

- No published MMMU row for E2B in this view (companion rows exist for E4B/12B in cloudprice as "no vision-block row"); declared Text/Image/Audio input capability.

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 38/100.** No public tool-use evidence; only through general reasoning mode.
- **Reasoning: 55/100.** GPQA 43.4, MMLU-Pro 60.0 — reasonable for 2B effective.
- **Context window: 82/100.** 128K native; enough for on-device long-context reading.
- **Multimodal: 70/100.** Text/image/audio input via integrated encoders; no publ  benchmarks yet.
- **Coding: 42/100.** LCB v6 44.0 is the only published row.
- **Cost efficiency: 97/100.** ~$0.04/$0.08 per 1M hosted; Apache 2.0 local.
- **Overall Score: 57/100.** Mean of five non-cost dims (38+55+82+70+42)/5 = 57.4 → 57; best fit: edge multimodal assistant on phones/Jetson.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (HF `google/gemma-4-31B` card for family table, cloudprice Gemma page, BenchLM comparison pages, Ollama gemma4 page, tech-insider on-device 2026 guide); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
