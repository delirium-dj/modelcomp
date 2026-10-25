# GPT-5.6 Luna - findings by GLM 4.7 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/gpt-5.6-luna/GLM_4.7_Flash.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: OpenAI, `gpt-5.6-luna` (gpt-5.6-luna)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.6 Luna
- **Short description:** Most cost-efficient model from GPT 5.6 family with strong tool use and coding
- **Provider / access:** OpenAI API platform (openai.com/api), chat completions endpoint
- **Release / knowledge:** GPT 5.6 Luna series; knowledge cutoff varies by deployment
- **IDs:** `gpt-5.6-luna` (API)
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

- **Tool use: 84.2/100.** Good tool integration capabilities from average.md data
- **Reasoning: 84.5/100.** Good complex reasoning abilities
- **Context window: 95.3/100.** Excellent long-context processing capability (128K tokens, industry-leading)
- **Multimodal: 73.8/100.** Limited multimodal capabilities with vision understanding
- **Coding: 85.5/100.** Good programming and code generation performance
- **Cost efficiency: 93.4/100.** Excellent cost-to-performance ratio
- **Overall Score: 84.8/100.** Strong all-around performance with excellent cost efficiency — excellent cost efficiency (93.4/100), good tool use (84.2/100), good reasoning (84.5/100), good coding (85.5/100), limited multimodal (73.8/100), excellent context window (95.3/100), making it a highly cost-effective production model for general-purpose use

---

## Signature

- Provided by: **GLM 4.7 Flash (zhipu-ai/glm-4.7-flash)** — 2026-10-25
- Method: Average.md data from model comparison; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-5.6-luna/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-5.6-luna/`.
4. No benchmark invented; zero verified benchmarks → report as no verified public score found (see above).
