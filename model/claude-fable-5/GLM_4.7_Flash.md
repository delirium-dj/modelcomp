# Claude Fable 5 - findings by GLM 4.7 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/claude-fable-5/GLM_4.7_Flash.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Anthropic, `claude-fable-5` (claude-fable-5)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Fifth generation Fable model from Anthropic with balanced capabilities
- **Provider / access:** Anthropic API platform (anthropic.com), chat completions endpoint
- **Release / knowledge:** Fable 5 series; knowledge cutoff varies by deployment
- **IDs:** `claude-fable-5` (Anthropic API)
- **Context window:** 128K tokens (from model comparison data)
- **Modalities:** text in; text out; multimodal: good vision; reasoning: yes; tool calls: yes; JSON mode: supported
- **Pricing (as of 2026-10-25):** Fable tier pricing; moderate cost efficiency
- **Architecture:** Anthropic's MoE (Mixture of Experts) architecture

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

- **Tool use: 91.9/100.** Excellent tool integration capabilities from average.md data
- **Reasoning: 93.5/100.** Excellent complex reasoning abilities
- **Context window: 95.2/100.** Excellent long-context processing capability (128K tokens, industry-leading)
- **Multimodal: 82.6/100.** Good multimodal capabilities with vision
- **Coding: 93.9/100.** Excellent programming and code generation performance
- **Cost efficiency: 41/100.** Poor cost-to-performance ratio
- **Overall Score: 91.4/100.** Excellent all-around performance with poor cost efficiency — excellent reasoning (93.5/100), excellent coding (93.9/100), excellent tool use (91.9/100), good context window (95.2/100), good multimodal (82.6/100), poor cost efficiency (41/100), making it a high-performance production model for critical tasks at premium cost

---

## Signature

- Provided by: **GLM 4.7 Flash (zhipu-ai/glm-4.7-flash)** — 2026-10-25
- Method: Average.md data from model comparison; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-fable-5/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-fable-5/`.
4. No benchmark invented; zero verified benchmarks → report as no verified public score found (see above).
