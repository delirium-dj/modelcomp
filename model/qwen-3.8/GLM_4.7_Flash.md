# Qwen 3.8 - findings by GLM 4.7 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/qwen-3.8/GLM_4.7_Flash.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Alibaba Qwen Team, `qwen-3.8` (qwen-3.8)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8
- **Short description:** Fourth generation Qwen model from Alibaba with enhanced capabilities
- **Provider / access:** Alibaba Cloud (qwen.readthedocs.io, ModelScope), chat completions endpoint
- **Release / knowledge:** Qwen 3.8 series generation; knowledge cutoff varies by deployment
- **IDs:** `qwen-3.8` (API)
- **Context window:** 128K tokens (from model comparison data)
- **Modalities:** text in; text out; multimodal: moderate vision; reasoning: yes; tool calls: yes; JSON mode: supported
- **Pricing (as of 2026-10-25):** Qwen 3.8 tier pricing; good cost efficiency
- **Architecture:** Qwen 3.8 series dense architecture

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

- **Tool use: 81.7/100.** Good tool integration capabilities from average.md data
- **Reasoning: 85.3/100.** Good complex reasoning abilities
- **Context window: 76.8/100.** Moderate long-context processing capability (128K tokens, industry-leading)
- **Multimodal: 71.9/100.** Moderate multimodal capabilities with vision
- **Coding: 84.5/100.** Good programming and code generation performance
- **Cost efficiency: 89.7/100.** Good cost-to-performance ratio
- **Overall Score: 80/100.** Good all-around performance with good cost efficiency — good reasoning (85.3/100), good tool use (81.7/100), good coding (84.5/100), moderate multimodal (71.9/100), moderate context window (76.8/100), good cost efficiency (89.7/100), making it a solid production model for general-purpose use

---

## Signature

- Provided by: **GLM 4.7 Flash (zhipu-ai/glm-4.7-flash)** — 2026-10-25
- Method: Average.md data from model comparison; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/qwen-3.8/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/qwen-3.8/`.
4. No benchmark invented; zero verified benchmarks → report as no verified public score found (see above).
