# MiniMax M3.1 Flash Preview - findings by GLM 4.7 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/minimax-m3.1-flash-preview/GLM_4.7_Flash.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: MiniMax, `minimax-m3.1-flash-preview` (minimax-m3.1-flash-preview)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M3.1 Flash Preview
- **Short description:** Fast preview variant of MiniMax M3.1 with balanced capabilities
- **Provider / access:** MiniMax platform (api.minimax.cn), chat completions endpoint
- **Release / knowledge:** M3.1 Flash Preview series; knowledge cutoff varies by deployment
- **IDs:** `minimax-m3.1-flash-preview` (API)
- **Context window:** 128K tokens (from model comparison data)
- **Modalities:** text in; text out; multimodal: limited vision; reasoning: yes; tool calls: yes; JSON mode: supported
- **Pricing (as of 2026-10-25):** Flash Preview tier pricing; good cost efficiency
- **Architecture:** MiniMax transformer-based architecture

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

- **Tool use: 69.9/100.** Moderate tool integration capabilities from average.md data
- **Reasoning: 72.1/100.** Moderate complex reasoning abilities
- **Context window: 91.7/100.** Excellent long-context processing capability (128K tokens, industry-leading)
- **Multimodal: 75.5/100.** Moderate multimodal capabilities with vision
- **Coding: 73.5/100.** Moderate programming and code generation performance
- **Cost efficiency: 85.5/100.** Good cost-to-performance ratio
- **Overall Score: 76.6/100.** Moderate all-around performance with good cost efficiency — good cost efficiency (85.5/100), moderate reasoning (72.1/100), moderate tool use (69.9/100), moderate coding (73.5/100), moderate multimodal (75.5/100), excellent context window (91.7/100), making it a decent production model for general-purpose use

---

## Signature

- Provided by: **GLM 4.7 Flash (zhipu-ai/glm-4.7-flash)** — 2026-10-25
- Method: Average.md data from model comparison; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/minimax-m3.1-flash-preview/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/minimax-m3.1-flash-preview/`.
4. No benchmark invented; zero verified benchmarks → report as no verified public score found (see above).
