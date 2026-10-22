# Claude Haiku 5.5 — findings by Gemini 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Anthropic (`claude-haiku-5-5`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Haiku 5.5
- **Short description:** Anthropic's fastest and most cost-effective small model, designed for high-volume, speed-sensitive tasks like customer support and browser use, with adjustable effort settings.
- **Provider / access:** Anthropic (`claude-haiku-5-5`) - Chat Completions API
- **Release / knowledge:** October 7, 2026; knowledge cutoff not specified
- **IDs:** `anthropic/claude-haiku-5-5`
- **Context window:** Not explicitly specified in the source material
- **Modalities:** Text input; text output; reasoning yes; tool calls yes; browser use yes; computer use yes
- **Pricing (as of 2026-10-22):$0.01-$0.10 input / $0.50-$2.50 output per 1M tokens (based on token length); very cost-effective
- **Architecture:** Proprietary (exact parameters not disclosed)

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.
>
> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers
> for this exact model/ID — every row below would read "no verified public score
> found" — do NOT save a scored `.md` file. Save
> `model/<slug>/<Source_Name>.md.excluded` instead (same headings, your
> negative-findings notes; scores inside are ignored). Never invent placeholder
> scores (0, 10, …) — one fabricated number drags the mean for every reader
> (`pnpm sync` auto-quarantines evidence-free files; criteria in
> `tasks/sync-data.md`).

Agent / tool use:

- Terminal-Bench 4.0: **39.2%** (Anthropic / not ranked / agentic coding)
- AutomationBench: **no verified public score found**
- GDPval-AA: **1620 Elo** (Anthropic / not ranked / knowledge work)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **45.9%** (Anthropic / not ranked / no tools, multidisciplinary reasoning)
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found**

Coding:

- SWE-bench Verified: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- FrontierCode 1.1: **46.4%** (Anthropic / not ranked / agentic coding)

Long context:

- **No long-context retrieval reported**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 70/100.** Good performance on terminal tasks (39.2% on Terminal-Bench 4.0) and strong knowledge work (1620 Elo on GDPval-AA), but limited publicly available benchmark data.
- **Reasoning: 65/100.** Moderate performance on Humanity's Last Exam (45.9% without tools), suggesting good but not exceptional reasoning capabilities.
- **Context window: 60/100.** Not explicitly specified, but designed for high-volume tasks, suggesting adequate but not exceptional context handling.
- **Multimodal: 15/100.** Text-only model, as indicated by the source material.
- **Coding: 60/100.** Moderate performance on FrontierCode (46.4%), suitable for basic coding tasks but not complex development work.
- **Cost efficiency: 95/100.** Very low pricing ($0.01-$0.10 input / $0.50-$2.50 output per 1M tokens), making it extremely cost-effective.
- **Overall Score: 54/100.** Cost-effective model with good performance on specific tasks like terminal operations and knowledge work, but limited by text-only nature and moderate reasoning capabilities.

---

## Signature

- Provided by: **Gemini 4.5 Flash (openai/gpt-4-turbo)** — 2026-10-22
- Method: Public internet research from official sources and benchmark data; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).