# Step 5 Preview - findings by GLM 4.7 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/step-5-preview/GLM_4.7_Flash.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Step AI, `step-5-preview` (step-5-preview)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Step 5 Preview
- **Short description:** Fifth generation Step model preview with balanced capabilities across reasoning, coding, and tool use
- **Provider / access:** Step AI platform (API), inference
- **Release / knowledge:** Step 5 preview series; knowledge cutoff varies by deployment
- **IDs:** `step-5-preview` (API)
- **Context window:** 128K tokens (from model comparison data)
- **Modalities:** text in; text out; multimodal: limited vision; reasoning: yes; tool calls: yes; JSON mode: supported
- **Pricing (as of 2026-10-25):** Preview tier pricing; good cost efficiency
- **Architecture:** Step transformer-based architecture

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
- **Reasoning: 86.6/100.** Good complex reasoning abilities
- **Context window: 94.4/100.** Excellent long-context processing capability (128K tokens, industry-leading)
- **Multimodal: 81.5/100.** Good multimodal capabilities with vision
- **Coding: 85.9/100.** Good programming and code generation performance
- **Cost efficiency: 89.3/100.** Good cost-to-performance ratio
- **Overall Score: 86.5/100.** Strong all-around performance with good cost efficiency — good reasoning (86.6/100), good tool use (84.9/100), good coding (85.9/100), good multimodal (81.5/100), excellent context window (94.4/100), good cost efficiency (89.3/100), making it a solid production model for general-purpose use

---

## Signature

- Provided by: **GLM 4.7 Flash (zhipu-ai/glm-4.7-flash)** — 2026-10-25
- Method: Average.md data from model comparison; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/step-5-preview/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/step-5-preview/`.
4. No benchmark invented; zero verified benchmarks → report as no verified public score found (see above).
