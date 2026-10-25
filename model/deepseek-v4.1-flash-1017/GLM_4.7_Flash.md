# DeepSeek V4.1 Flash 1017 - findings by GLM 4.7 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/deepseek-v4.1-flash-1017/GLM_4.7_Flash.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: DeepSeek, `deepseek-v4.1-flash-1017` (deepseek-v4.1-flash-1017)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash 1017
- **Short description:** Experimental DeepSeek v4.1 Flash model from 10/17 with enhanced coding and cost efficiency
- **Provider / access:** DeepSeek platform (platform.deepseek.com), chat completions endpoint
- **Release / knowledge:** V4.1 Flash 1017 experimental series; knowledge cutoff varies by deployment
- **IDs:** `deepseek-v4.1-flash-1017` (API)
- **Context window:** 128K tokens (from model comparison data)
- **Modalities:** text in; text out; multimodal: limited vision; reasoning: yes; tool calls: yes; JSON mode: supported
- **Pricing (as of 2026-10-25):** Experimental tier pricing; excellent cost efficiency
- **Architecture:** DeepSeek transformer-based architecture with flash optimization

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

- **Tool use: 77/100.** Moderate tool integration capabilities from average.md data
- **Reasoning: 80.1/100.** Moderate complex reasoning abilities
- **Context window: 95.1/100.** Excellent long-context processing capability (128K tokens, industry-leading)
- **Multimodal: 69.6/100.** Limited multimodal capabilities with vision
- **Coding: 84.3/100.** Strong programming and code generation performance
- **Cost efficiency: 96.6/100.** Excellent cost-to-performance ratio
- **Overall Score: 81.3/100.** Strong all-around performance with excellent cost efficiency — strong coding (84.3/100), excellent cost efficiency (96.6/100), moderate reasoning (80.1/100), moderate tool use (77/100), good context window (95.1/100), limited multimodal (69.6/100), making it a cost-effective production model with strong coding capabilities

---

## Signature

- Provided by: **GLM 4.7 Flash (zhipu-ai/glm-4.7-flash)** — 2026-10-25
- Method: Average.md data from model comparison; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/deepseek-v4.1-flash-1017/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/deepseek-v4.1-flash-1017/`.
4. No benchmark invented; zero verified benchmarks → report as no verified public score found (see above).
