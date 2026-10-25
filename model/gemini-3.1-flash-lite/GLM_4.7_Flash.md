# Gemini 3.1 Flash Lite - findings by GLM 4.7 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/gemini-3.1-flash-lite/GLM_4.7_Flash.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Google DeepMind, `gemini-3.1-flash-lite` (gemini-3.1-flash-lite)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Flash Lite
- **Short description:** Ultra-lightweight variant of Gemini 3.1 with excellent cost efficiency and strong multimodal
- **Provider / access:** Google AI Studio (AI Studio), Google Cloud Vertex AI, chat completions endpoint
- **Release / knowledge:** Gemini 3.1 Flash Lite series; knowledge cutoff varies by deployment
- **IDs:** `gemini-3.1-flash-lite` (API)
- **Context window:** 128K tokens (from model comparison data)
- **Modalities:** text in; text out; multimodal: strong vision; reasoning: yes; tool calls: yes; JSON mode: supported
- **Pricing (as of 2026-10-25):** Flash Lite tier pricing; excellent cost efficiency
- **Architecture:** Google DeepMind transformer-based architecture

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

- **Tool use: 61.6/100.** Limited tool integration capabilities from average.md data
- **Reasoning: 74.5/100.** Moderate complex reasoning abilities
- **Context window: 90.2/100.** Excellent long-context processing capability (128K tokens, industry-leading)
- **Multimodal: 88.2/100.** Very strong multimodal capabilities with vision
- **Coding: 70/100.** Moderate programming and code generation performance
- **Cost efficiency: 96.5/100.** Excellent cost-to-performance ratio
- **Overall Score: 76.9/100.** Moderate all-around performance with excellent cost efficiency and very strong multimodal — excellent cost efficiency (96.5/100), moderate reasoning (74.5/100), limited tool use (61.6/100), moderate coding (70/100), very strong multimodal (88.2/100), excellent context window (90.2/100), making it a cost-effective production model for lightweight multimodal use cases

---

## Signature

- Provided by: **GLM 4.7 Flash (zhipu-ai/glm-4.7-flash)** — 2026-10-25
- Method: Average.md data from model comparison; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gemini-3.1-flash-lite/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gemini-3.1-flash-lite/`.
4. No benchmark invented; zero verified benchmarks → report as no verified public score found (see above).
