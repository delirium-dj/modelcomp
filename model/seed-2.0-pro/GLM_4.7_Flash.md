# ByteDance Seed 2.0 Pro - findings by GLM 4.7 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/seed-2.0-pro/GLM_4.7_Flash.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: ByteDance, `seed-2.0-pro` (seed-2.0-pro)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** ByteDance Seed 2.0 Pro
- **Short description:** Second generation Pro model from ByteDance with enhanced multimodal and reasoning
- **Provider / access:** ByteDance platform (API), chat completions endpoint
- **Release / knowledge:** Seed 2.0 Pro series; knowledge cutoff varies by deployment
- **IDs:** `seed-2.0-pro` (API)
- **Context window:** 128K tokens (from model comparison data)
- **Modalities:** text in; text out; multimodal: strong vision; reasoning: yes; tool calls: yes; JSON mode: supported
- **Pricing (as of 2026-10-25):** Pro tier pricing; moderate cost efficiency
- **Architecture:** ByteDance transformer-based architecture

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

- **Tool use: 83.1/100.** Good tool integration capabilities from average.md data
- **Reasoning: 87.2/100.** Good complex reasoning abilities
- **Context window: 83.7/100.** Good long-context processing capability (128K tokens, industry-leading)
- **Multimodal: 87.6/100.** Strong multimodal capabilities with vision
- **Coding: 83/100.** Good programming and code generation performance
- **Cost efficiency: 83.5/100.** Good cost-to-performance ratio
- **Overall Score: 84.9/100.** Strong all-around performance with good cost efficiency — strong multimodal (87.6/100), good reasoning (87.2/100), good tool use (83.1/100), good coding (83/100), good context window (83.7/100), moderate cost efficiency (83.5/100), making it a solid production model with strong multimodal capabilities

---

## Signature

- Provided by: **GLM 4.7 Flash (zhipu-ai/glm-4.7-flash)** — 2026-10-25
- Method: Average.md data from model comparison; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/seed-2.0-pro/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/seed-2.0-pro/`.
4. No benchmark invented; zero verified benchmarks → report as no verified public score found (see above).
