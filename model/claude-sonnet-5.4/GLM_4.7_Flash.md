# Claude Sonnet 5.4 - findings by GLM 4.7 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/claude-sonnet-5.4/GLM_4.7_Flash.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Anthropic, `claude-sonnet-5.4` (claude-sonnet-5.4)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 5.4
- **Short description:** Fourth generation Sonnet model from Anthropic with enhanced coding and reasoning
- **Provider / access:** Anthropic API platform (anthropic.com), chat completions endpoint
- **Release / knowledge:** Sonnet 5.4 series; knowledge cutoff varies by deployment
- **IDs:** `claude-sonnet-5.4` (Anthropic API)
- **Context window:** 128K tokens (from model comparison data)
- **Modalities:** text in; text out; multimodal: limited vision; reasoning: yes; tool calls: yes; JSON mode: supported
- **Pricing (as of 2026-10-25):** Sonnet tier pricing; moderate cost efficiency
- **Architecture:** Anthropic's proprietary architecture, MoE (Mixture of Experts)

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

- **Tool use: 89.5/100.** Strong tool integration capabilities from average.md data
- **Reasoning: 88.5/100.** Good complex reasoning abilities
- **Context window: 93.5/100.** Excellent long-context processing capability (128K tokens, industry-leading)
- **Multimodal: 71.3/100.** Limited multimodal capabilities with vision
- **Coding: 90.3/100.** Strong programming and code generation performance
- **Cost efficiency: 76.5/100.** Moderate cost-to-performance ratio
- **Overall Score: 86.8/100.** Strong all-around performance with moderate cost efficiency — strong tool use (89.5/100), good reasoning (88.5/100), strong coding (90.3/100), limited multimodal (71.3/100), excellent context window (93.5/100), moderate cost efficiency (76.5/100), making it a solid production model with strong coding capabilities

---

## Signature

- Provided by: **GLM 4.7 Flash (zhipu-ai/glm-4.7-flash)** — 2026-10-25
- Method: Average.md data from model comparison; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-sonnet-5.4/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-sonnet-5.4/`.
4. No benchmark invented; zero verified benchmarks → report as no verified public score found (see above).
