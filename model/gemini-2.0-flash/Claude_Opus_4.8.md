# Gemini 2.0 Flash — findings by Claude Opus 4.8

- Source: Google (`google/gemini-2.0-flash`)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.0 Flash
- **Short description:** Google's 2025 workhorse multimodal model (1M context) with native image output and audio/video input; deprecated and shut down 2026-06-01. Kept as a historical 2.0-generation reference. Top use case: historical multimodal reference.
- **Provider / access:** (shut down) Google AI Studio + Vertex AI (`gemini-2.0-flash`). No active Zen Free ID.
- **Release / knowledge:** 2025 generation; shut down 2026-06-01.
- **IDs:** `google/gemini-2.0-flash` (deprecated).
- **Context window:** 1M total (per curated `meta.json`).
- **Modalities:** text, image, audio, video in; text + image out; native tool use.
- **Pricing (historical):** Google AI Studio $0.10/$0.40 per 1M (audio in $0.70); Vertex AI $0.15/$0.60. Shut down 2026-06-01.
- **Architecture:** proprietary.

### Raw benchmarks found

> No current BenchLM page (404; model deprecated). Scored from the model's documented 2025 launch profile; current-harness numbers largely "no verified public score found."

Agent / tool use:

- Native tool use (2025-era); no current verified agentic benchmark on primary source

Reasoning / knowledge:

- GPQA ~60% (2025 launch era); modern AA Intelligence Index not published for this deprecated model

Coding:

- 2025-era coding (modest); no current verified SWE-bench

Multimodal:

- Documented image+audio+video input **and native image output** — the standout 2.0 Flash capability

### Normalized scores (1–100)

- **Tool use: 55/100.** Native tool use, but 2025-era agentics are modest versus 2026 models; current benchmarks unverified.
- **Reasoning: 50/100.** 2025 launch-era reasoning (GPQA ~60%); far behind current models.
- **Context window: 85/100.** 1M total.
- **Multimodal: 92/100.** Image+audio+video in **and image out** (any non-text output → top multimodal tier) — its defining strength.
- **Coding: 52/100.** 2025-era coding; conservatively scored, no current public benchmark.
- **Cost efficiency: 90/100.** Historical $0.10/$0.40 (cheap); note the model is shut down (2026-06-01).
- **Overall Score: 66.8/100.** Half-up mean of the five quality dims (55/50/85/92/52). A historical 2025 multimodal workhorse whose image-out multimodal still scores high; deprecated — kept as a reference folder (`RULES.md` permanence).

---

## Signature

- Provided by: **Claude Opus 4.8 (anthropic/claude-opus-4.8)** — 2026-10-03
- Method: public internet research (Google Gemini 2.0 docs; no current BenchLM page). Scored from the documented 2025 launch profile; several dims lack current verified benchmarks and are conservative. Normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
