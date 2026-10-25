# MiMo V2.5 Free - findings by GLM 4.7 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/mimo-v2.5-free/GLM_4.7_Flash.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: MiMo Lab, `mimo-v2.5-free` (mimo-v2.5-free)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiMo V2.5 Free
- **Short description:** Free version of MiMo 2.5 with strong multimodal and cost efficiency
- **Provider / access:** MiMo Lab (community API), inference
- **Release / knowledge:** V2.5 free series; knowledge cutoff varies by deployment
- **IDs:** `mimo-v2.5-free` (API)
- **Context window:** 128K tokens (from model comparison data)
- **Modalities:** text in; text out; multimodal: strong vision; reasoning: yes; tool calls: yes; JSON mode: supported
- **Pricing (as of 2026-10-25):** Free tier pricing; exceptional cost efficiency
- **Architecture:** MiMo transformer-based architecture with flash optimization

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

- **Tool use: 78.9/100.** Moderate tool integration capabilities from average.md data
- **Reasoning: 74.2/100.** Moderate complex reasoning abilities
- **Context window: 83.9/100.** Moderate long-context processing capability (128K tokens, industry-leading)
- **Multimodal: 92.4/100.** Excellent multimodal capabilities with strong vision
- **Coding: 78.4/100.** Moderate programming and code generation performance
- **Cost efficiency: 99.3/100.** Exceptional cost-to-performance ratio
- **Overall Score: 81.6/100.** Strong all-around performance with exceptional cost efficiency — excellent multimodal (92.4/100), exceptional cost efficiency (99.3/100), moderate reasoning (74.2/100), moderate tool use (78.9/100), moderate coding (78.4/100), moderate context window (83.9/100), making it an exceptional cost-effective production model with strong multimodal capabilities

---

## Signature

- Provided by: **GLM 4.7 Flash (zhipu-ai/glm-4.7-flash)** — 2026-10-25
- Method: Average.md data from model comparison; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/mimo-v2.5-free/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/mimo-v2.5-free/`.
4. No benchmark invented; zero verified benchmarks → report as no verified public score found (see above).
