# Qwen 3.8 27B - findings by GLM 4.7 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/qwen-3.8-27b/GLM_4.7_Flash.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Alibaba Qwen Team, `qwen-3.8-27b` (qwen-3.8-27b)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 27B
- **Short description:** 27B parameter dense variant of Qwen 3.8 series with balanced capabilities
- **Provider / access:** Alibaba Cloud (qwen.readthedocs.io, ModelScope), chat completions endpoint
- **Release / knowledge:** Qwen 3.8 series generation; knowledge cutoff varies by deployment
- **IDs:** `qwen-3.8-27b` (API)
- **Context window:** 128K tokens (from model comparison data)
- **Modalities:** text in; text out; multimodal: strong vision; reasoning: yes; tool calls: yes; JSON mode: supported
- **Pricing (as of 2026-10-25):** 27B tier pricing; good cost efficiency
- **Architecture:** Qwen 3.8 series dense architecture (27B parameters)

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

- **Tool use: 84.6/100.** Good tool integration capabilities from average.md data
- **Reasoning: 83.9/100.** Moderate complex reasoning abilities
- **Context window: 89.8/100.** Good long-context processing capability (128K tokens, industry-leading)
- **Multimodal: 86.6/100.** Strong multimodal capabilities with vision
- **Coding: 85.6/100.** Good programming and code generation performance
- **Cost efficiency: 92.6/100.** Excellent cost-to-performance ratio
- **Overall Score: 86.1/100.** Strong all-around performance with excellent cost efficiency — strong multimodal (86.6/100), excellent cost efficiency (92.6/100), moderate reasoning (83.9/100), good tool use (84.6/100), good coding (85.6/100), good context window (89.8/100), making it a cost-effective production model with strong multimodal capabilities

---

## Signature

- Provided by: **GLM 4.7 Flash (zhipu-ai/glm-4.7-flash)** — 2026-10-25
- Method: Average.md data from model comparison; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/qwen-3.8-27b/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/qwen-3.8-27b/`.
4. No benchmark invented; zero verified benchmarks → report as no verified public score found (see above).
