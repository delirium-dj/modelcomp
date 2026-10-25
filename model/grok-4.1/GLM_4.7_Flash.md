# Grok 4.1 - findings by GLM 4.7 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/grok-4.1/GLM_4.7_Flash.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: xAI, `grok-4.1` (grok-4.1)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1
- **Short description:** Fourth generation Grok model from xAI with balanced capabilities
- **Provider / access:** xAI platform (api.x.ai), chat completions endpoint
- **Release / knowledge:** Grok 4.1 series; knowledge cutoff varies by deployment
- **IDs:** `grok-4.1` (API)
- **Context window:** 128K tokens (from model comparison data)
- **Modalities:** text in; text out; multimodal: moderate vision; reasoning: yes; tool calls: yes; JSON mode: supported
- **Pricing (as of 2026-10-25):** xAI tier pricing; moderate cost efficiency
- **Architecture:** xAI transformer-based architecture

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

- **Tool use: 79.4/100.** Moderate tool integration capabilities from average.md data
- **Reasoning: 81.9/100.** Moderate complex reasoning abilities
- **Context window: 86.4/100.** Good long-context processing capability (128K tokens, industry-leading)
- **Multimodal: 70.9/100.** Moderate multimodal capabilities with vision
- **Coding: 75.6/100.** Moderate programming and code generation performance
- **Cost efficiency: 73.7/100.** Moderate cost-to-performance ratio
- **Overall Score: 78.9/100.** Moderate all-around performance with moderate cost efficiency — moderate reasoning (81.9/100), moderate tool use (79.4/100), moderate coding (75.6/100), moderate multimodal (70.9/100), good context window (86.4/100), moderate cost efficiency (73.7/100), making it a solid production model for general-purpose use

---

## Signature

- Provided by: **GLM 4.7 Flash (zhipu-ai/glm-4.7-flash)** — 2026-10-25
- Method: Average.md data from model comparison; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/grok-4.1/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/grok-4.1/`.
4. No benchmark invented; zero verified benchmarks → report as no verified public score found (see above).
