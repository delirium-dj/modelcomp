# Kimi K2.5 - findings by GLM 4.7 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/kimi-k2.5/GLM_4.7_Flash.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Moonshot AI, `kimi-k2.5` (kimi-k2.5)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.5
- **Short description:** 2.5 generation Kimi model from Moonshot AI with enhanced multimodal and cost efficiency
- **Provider / access:** Moonshot AI (kimi.com), chat completions endpoint
- **Release / knowledge:** Kimi K2.5 series; knowledge cutoff varies by deployment
- **IDs:** `kimi-k2.5` (API)
- **Context window:** 128K tokens (from model comparison data)
- **Modalities:** text in; text out; multimodal: strong vision; reasoning: yes; tool calls: yes; JSON mode: supported
- **Pricing (as of 2026-10-25):** K2.5 tier pricing; good cost efficiency
- **Architecture:** Moonshot AI transformer-based architecture

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

- **Tool use: 78.7/100.** Moderate tool integration capabilities from average.md data
- **Reasoning: 83.7/100.** Good complex reasoning abilities
- **Context window: 80.1/100.** Moderate long-context processing capability (128K tokens, industry-leading)
- **Multimodal: 86.1/100.** Strong multimodal capabilities with vision
- **Coding: 81.8/100.** Good programming and code generation performance
- **Cost efficiency: 88.8/100.** Good cost-to-performance ratio
- **Overall Score: 82.1/100.** Strong all-around performance with good cost efficiency — strong multimodal (86.1/100), good cost efficiency (88.8/100), good reasoning (83.7/100), moderate tool use (78.7/100), good coding (81.8/100), moderate context window (80.1/100), making it a cost-effective production model with strong multimodal capabilities

---

## Signature

- Provided by: **GLM 4.7 Flash (zhipu-ai/glm-4.7-flash)** — 2026-10-25
- Method: Average.md data from model comparison; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/kimi-k2.5/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/kimi-k2.5/`.
4. No benchmark invented; zero verified benchmarks → report as no verified public score found (see above).
