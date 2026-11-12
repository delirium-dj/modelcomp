# Gemini 2.0 Flash — findings by Ernie 5.5 Flash

- Source: Google DeepMind/Gemini 2.0 Flash (`gemini-2.0-flash`)
- Date: 2026-11-11 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's earlier Gemini Flash workhorse (released 2024-12-11, GA 2025-02-05) for responsive multimodal apps and tool use — now five Flash generations old.
- **Provider / access:** Google Gemini API / AI Studio (`gemini-2.0-flash`), Vertex AI, Poe, Qiniu, plus ~2 routes.
- **Release / knowledge:** 2024-12-11 (BenchLM record 2025-02-05); knowledge cutoff 2024-06 (models.dev).
- **IDs:** `gemini-2.0-flash`, `google/gemini-2.0-flash`, `gemini-2.0-flash-001`.
- **Context window:** 1,048,576 tokens (990,000 on Poe); max output 8,192.
- **Modalities:** text, image, audio and video in; text out; tool calls; reasoning off (models.dev: `reasoning: false`).
- **Pricing (as of 2026-11-11):** Poe lists $0.10 / $0.42 per 1M; Google's own Flash rate is higher — treat the Poe figure as the observed one.
- **Architecture:** proprietary sparse MoE (undisclosed).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench / Toolathlon / OSWorld / MCP-Atlas: no verified public rows published for this checkpoint
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA: **65.2%**; AIME 2025: **29.7%** (near-floor for a 2026 model)
- SimpleQA: **29.9%**; FailureSensorIQ: **55.8%**
- HLE / ARC-AGI / FrontierMath: no verified public rows published

Coding:

- SWE-bench Verified: **21.4%** (near-floor)
- LiveCodeBench / DeepSWE / SWE-bench Pro: no verified public rows published

Long context:

- 1M context declared; no MRCR / RULER / GraphWalks row published

### Normalized scores (1–100)

- **Tool use: 45/100.** No public terminal/OSWorld/Toolathlon row exists for this checkpoint; the score is a conservative floor, not a measurement.
- **Reasoning: 55/100.** GPQA 65.2% was decent in 2024 but AIME 2025 29.7% and SimpleQA 29.9% are near-floor against 2026 models.
- **Context window: 100/100.** 1,048,576 tokens with an 8,192 max output — a window built for input, not generation.
- **Multimodal: 78/100.** Text, image, audio and video in (no PDF) with MMMU 69.3% proving image work; no public video/audio row.
- **Coding: 35/100.** SWE-bench Verified 21.4% is near-floor and no LiveCodeBench row was published.
- **Cost efficiency: 92/100.** $0.10/$0.42 per 1M on the observed route.
- **Overall Score: 62.6/100.** Best fit for legacy Gemini 2.0 pipelines and cheap multimodal preprocessing; obsolete for coding and reasoning.

---

## Signature

- Provided by: **Ernie 5.5 Flash (baidu/ernie-5.5-flash-preview)** — 2026-11-11
- Method: public internet research (Google DeepMind model card, BenchLM model profile, models.dev catalog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Gemini 2.0 Flash — Google DeepMind model card](https://deepmind.google/models/model-cards/gemini-2.0-flash/)
  - [Gemini 2.0 Flash benchmarks & sources — BenchLM](https://benchlm.ai/models/gemini-2-0-flash)
  - [models.dev provider catalog](https://models.dev)
- Future sources: add a new file next to this one, e.g. `Gemini_2.0_Flash_v2.md`, using the same headings.