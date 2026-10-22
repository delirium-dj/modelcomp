# Gemini 2.5 — findings by Beam

- Source: Google / Gemini 2.5 (alias of Gemini 2.5 Pro), `google/gemini-2.5-pro`
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 2.5
- **Short description:** Parked duplicate alias of Google's Gemini 2.5 Pro flagship (1M context); no separate benchmarks. Use `gemini-2.5-pro` for actual data.
- **Provider / access:** Google AI Studio / Vertex AI `gemini-2.5-pro`; OpenRouter `google/gemini-2.5-pro`.
- **Release / knowledge:** Released 2025-03 (Gemini 2.5 Pro); knowledge cutoff 2025-01 (approx).
- **IDs:** `google/gemini-2.5-pro` (alias target).
- **Context window:** 1,048,576 tokens.
- **Modalities:** Text, image, audio, video in; text out; reasoning yes; tool calling yes; structured output yes.
- **Pricing (as of 2026-10-22):** $1.25 / 1M input, $10.00 / 1M output (≤200K); $2.50 / 1M input, $15.00 / 1M output (>200K); paid.
- **Architecture:** Proprietary; params undisclosed.

### Raw benchmarks found

- Alias only — see `../gemini-2.5-pro/Beam.md` for verified benchmarks and normalized scores.

### Normalized scores (1–100)

- Scores inherited from `gemini-2.5-pro` (alias file — see `../gemini-2.5-pro/Beam.md` for the full per-dimension rationale):
- **Tool use: 56/100.** Inherited from `gemini-2.5-pro` (alias): agentic lane #102/128 (25.7), Gert Labs 42.01%; capped at no published Terminal-Bench/OSWorld.
- **Reasoning: 68/100.** Inherited from `gemini-2.5-pro` (alias): GPQA 84.0%, HLE 18.8%, AIME 86.7%; capped at HLE 18.8%.
- **Context window: 76/100.** Inherited from `gemini-2.5-pro` (alias): 1M window; capped at no published MRCR.
- **Multimodal: 74/100.** Inherited from `gemini-2.5-pro` (alias): text/image/audio/video/PDF in; capped at no verified multimodal benchmarks.
- **Coding: 62/100.** Inherited from `gemini-2.5-pro` (alias): SWE-bench 63.8%, Aider polyglot 84.7%, Vibe Code 0.40%; capped at Vibe Code 0.40%.
- **Cost efficiency: 86/100.** Inherited from `gemini-2.5-pro` (alias): $1.25/$10.00 per 1M (standard); $0.625/$5.00 (AI Studio).
- **Overall Score: 67.2/100.** Mean of the five quality dims (56 + 68 + 76 + 74 + 62) / 5 = 67.2; costs the same as the alias target and every score is inherited from `../gemini-2.5-pro/Beam.md` — the alias itself adds no data. (Superseded by Gemini 3.x.)

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-22
- Method: public internet research (Google docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.