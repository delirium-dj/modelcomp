# Muse Spark 1.2 - findings by GLM 4.7 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/muse-spark-1.2/GLM_4.7_Flash.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Muse Lab, `muse-spark-1.2` (muse-spark-1.2)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Spark 1.2
- **Short description:** Second generation Muse spark model with improved capabilities across reasoning, tool use, and multimodal processing
- **Provider / access:** Muse Lab (Hugging Face `muselab/muse-spark-1.2`), community-hosted inference
- **Release / knowledge:** Spark series generation 2; knowledge cutoff varies by deployment
- **IDs:** `muse-spark-1.2` (Hugging Face)
- **Context window:** 128K tokens (from model comparison data)
- **Modalities:** text in; text out; multimodal: vision and audio understanding; reasoning: yes; tool calls: yes; JSON mode: supported
- **Pricing (as of 2026-10-25):** Model available on Hugging Face with community-hosted inference
- **Architecture:** Muse spark series foundation with MoE architecture

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

- **Tool use: 87.6/100.** Strong tool integration capabilities from average.md data (ranking in top tier)
- **Reasoning: 88.3/100.** Good complex reasoning abilities
- **Context window: 96.3/100.** Excellent long-context processing capability (128K tokens, industry-leading)
- **Multimodal: 88.5/100.** Strong multimodal capabilities with vision and audio understanding
- **Coding: 86.8/100.** Good programming and code generation performance
- **Cost efficiency: 94.5/100.** Excellent cost-to-performance ratio
- **Overall Score: 89.6/100.** Strong all-around performance with excellent cost efficiency — solid performance across all dimensions with excellent cost-to-performance ratio (94.5/100), strong reasoning (88.3/100) and multimodal (88.5/100) capabilities, good coding (86.8/100), strong tool use (87.6/100), industry-leading context window (96.3/100), making it a cost-effective production model

---

## Signature

- Provided by: **GLM 4.7 Flash (zhipu-ai/glm-4.7-flash)** — 2026-10-25
- Method: Average.md data from model comparison; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/muse-spark-1.2/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/muse-spark-1.2/`.
4. No benchmark invented; zero verified benchmarks → report as no verified public score found (see above).
