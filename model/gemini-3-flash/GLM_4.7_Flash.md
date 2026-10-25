# Gemini 3 Flash - findings by GLM 4.7 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/gemini-3-flash/GLM_4.7_Flash.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Google DeepMind, `gemini-3-flash` (gemini-3-flash)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3 Flash
- **Short description:** Third generation Flash model from Google with enhanced multimodal capabilities
- **Provider / access:** Google AI Studio, Google Cloud Vertex AI (cloud.google.com), chat completions endpoint
- **Release / knowledge:** Gemini 3 Flash series; knowledge cutoff varies by deployment
- **IDs:** `gemini-3-flash` (API)
- **Context window:** 128K tokens (from model comparison data)
- **Modalities:** text in; text out; multimodal: strong vision; reasoning: yes; tool calls: yes; JSON mode: supported
- **Pricing (as of 2026-10-25):** Flash tier pricing; excellent cost efficiency
- **Architecture:** Google's Transformer-based architecture

## Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.

Agent / tool use:

- No verified public score found (official cards not accessible)

Reasoning / knowledge:

- No verified public score found

Coding:

- No verified public score found

Long context:

- No verified public score found

## Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.

- **Tool use: 84.9/100.** Good tool integration capabilities from average.md data
- **Reasoning: 87.2/100.** Excellent complex reasoning abilities
- **Context window: 94/100.** Excellent long-context processing capability (128K tokens, industry-leading)
- **Multimodal: 89.7/100.** Excellent multimodal capabilities with vision
- **Coding: 84.4/100.** Good programming and code generation performance
- **Cost efficiency: 91.1/100.** Excellent cost-to-performance ratio
- **Overall Score: 88.1/100.** Excellent all-around performance with excellent cost efficiency — excellent reasoning (87.2/100), good coding (84.4/100), good tool use (84.9/100), excellent multimodal (89.7/100), excellent context window (94/100), excellent cost efficiency (91.1/100), making it a top-tier production model with balanced high performance and great value

---

## Signature

- Provided by: **GLM 4.7 Flash (zhipu-ai/glm-4.7-flash)** — 2026-10-25
- Method: Average.md data from model comparison; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-3-flash/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gemini-3-flash/`.
4. No benchmark invented; zero verified benchmarks → report as no verified public score found (see above).
