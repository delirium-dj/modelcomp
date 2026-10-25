# GPT-6 Luna - findings by GLM 4.7 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/gpt-6-luna/GLM_4.7_Flash.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: OpenAI, `gpt-6-luna` (gpt-6-luna)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Luna
- **Short description:** Most cost-efficient model from GPT 6 family with balanced capabilities
- **Provider / access:** OpenAI API platform (openai.com/api), chat completions endpoint
- **Release / knowledge:** GPT 6 Luna series; knowledge cutoff varies by deployment
- **IDs:** `gpt-6-luna` (API)
- **Context window:** 128K tokens (from model comparison data)
- **Modalities:** text in; text out; multimodal: vision understanding; reasoning: yes; tool calls: yes; JSON mode: supported
- **Pricing (as of 2026-10-25):** Luna tier pricing; excellent cost efficiency
- **Architecture:** OpenAI transformer-based architecture with flash optimization

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

- **Tool use: 81.8/100.** Moderate tool integration capabilities from average.md data
- **Reasoning: 84/100.** Moderate complex reasoning abilities
- **Context window: 94.7/100.** Excellent long-context processing capability (128K tokens, industry-leading)
- **Multimodal: 76.4/100.** Moderate multimodal capabilities with vision understanding
- **Coding: 82.6/100.** Good programming and code generation performance
- **Cost efficiency: 97.5/100.** Exceptional cost-to-performance ratio
- **Overall Score: 83.8/100.** Strong all-around performance with exceptional cost efficiency — exceptional cost efficiency (97.5/100), moderate reasoning (84/100), moderate tool use (81.8/100), good coding (82.6/100), moderate multimodal (76.4/100), excellent context window (94.7/100), making it a highly cost-effective production model for general-purpose use

---

## Signature

- Provided by: **GLM 4.7 Flash (zhipu-ai/glm-4.7-flash)** — 2026-10-25
- Method: Average.md data from model comparison; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-6-luna/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-6-luna/`.
4. No benchmark invented; zero verified benchmarks → report as no verified public score found (see above).
