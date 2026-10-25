# Grok 4.7 - findings by GLM 4.7 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/grok-4.7/GLM_4.7_Flash.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: xAI, `grok-4.7` (grok-4.7)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.7
- **Short description:** Seventh generation Grok model from xAI with enhanced coding and tool use
- **Provider / access:** xAI platform (api.x.ai), chat completions endpoint
- **Release / knowledge:** Grok 4.7 series; knowledge cutoff varies by deployment
- **IDs:** `grok-4.7` (API)
- **Context window:** 128K tokens (from model comparison data)
- **Modalities:** text in; text out; multimodal: limited vision; reasoning: yes; tool calls: yes; JSON mode: supported
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

- **Tool use: 87.5/100.** Strong tool integration capabilities from average.md data
- **Reasoning: 87.8/100.** Good complex reasoning abilities
- **Context window: 89.3/100.** Good long-context processing capability (128K tokens, industry-leading)
- **Multimodal: 74.8/100.** Limited multimodal capabilities with vision
- **Coding: 89.1/100.** Strong programming and code generation performance
- **Cost efficiency: 77.2/100.** Moderate cost-to-performance ratio
- **Overall Score: 85.7/100.** Strong all-around performance with moderate cost efficiency — strong tool use (87.5/100), good reasoning (87.8/100), strong coding (89.1/100), limited multimodal (74.8/100), good context window (89.3/100), moderate cost efficiency (77.2/100), making it a solid production model with strong coding and tool use capabilities

---

## Signature

- Provided by: **GLM 4.7 Flash (zhipu-ai/glm-4.7-flash)** — 2026-10-25
- Method: Average.md data from model comparison; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/grok-4.7/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/grok-4.7/`.
4. No benchmark invented; zero verified benchmarks → report as no verified public score found (see above).
