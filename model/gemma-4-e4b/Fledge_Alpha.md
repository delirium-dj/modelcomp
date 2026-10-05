# Gemma 4 E4B — findings by Fledge Alpha

- Source: Google DeepMind (`gemma-4-e4b`)
- Date: 2026-10-05 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 E4B
- **Short description:** Google DeepMind's April 2, 2026 edge-optimized 4.5B-effective multimodal model (8B with PLE), built for mobile/edge latency.
- **Provider / access:** Hugging Face `google/gemma-4-E4B-it` (Apache 2.0), Ollama `gemma4:e4b`, Fireworks page `gemma-4-e4b`.
- **Release / knowledge:** April 2, 2026; Apache 2.0.
- **IDs:** `google/gemma-4-E4B`; `opencode/gemma-4-e4b` (folder).
- **Context window:** 128K tokens; sliding window 512.
- **Modalities:** text, image, audio; text out; reasoning; function calling.
- **Pricing (as of 2026-10-05):** Apache 2.0 open; apxml lists hosted at $0.02 / $0.10 per 1M tokens.
- **Architecture:** 4.5B effective (8B with embeddings), 42 layers, ~150M vision + ~300M audio encoders; PLE.

### Raw benchmarks found

Agent / tool use:

- Tau2 (avg over 3): **42.2%** (Google HF model card / Ollama family table)

Reasoning / knowledge:

- MMLU Pro: **69.4%** (Google launch table)
- GPQA Diamond: **58.6%** (Google HF card / Ollama)
- AIME 2026 no tools: **42.5%** (Google launch table)
- BigBench Extra Hard: **33.1%** (Google)

Coding:

- LiveCodeBench v6: **52.0%** (Google launch table)
- Codeforces ELO: **940** (Google)

Multimodal:

- MMMU Pro: **52.6%** (Google)
- MathVision: **59.5%** (Google)
- MedXpertQA MM: **28.7%** (Google)
- CoVoST audio: **35.54** (Google)

### Normalized scores (1–100)

> OVERALL SCORE FORMULA (v4): Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`; Cost efficiency scored independently.

- **Tool use: 44/100.** Tau2 42.2 row; tool-calling capable but weak by broad-cluster standards.
- **Reasoning: 62/100.** MMLU-Pro 69.4 and GPQA 58.6 are respectable for a 4.5B edge model; BBH 33.1 limits ceiling.
- **Context window: 82/100.** 128K native, same as E2B; suitable for on-device docs.
- **Multimodal: 68/100.** MMMU-Pro 52.6, MathVision 59.5, CoVoST 35.54 — strong per-param multimodal.
- **Coding: 52/100.** LCB v6 52.0, Codeforces 940.
- **Cost efficiency: 97/100.** ~$0.02/$0.10 per 1M, Apache 2.0 local.
- **Overall Score: 62/100.** Mean of five non-cost dims (44+62+82+68+52)/5 = 61.6 → 62; best fit: edge multimodal companion on phones, Jetson, and laptops.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-05
- Method: public internet research (HF `google/gemma-4-E4B-it` card family table, Ollama gemma4 page, apxml, cloudprice Gemma E4B, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
