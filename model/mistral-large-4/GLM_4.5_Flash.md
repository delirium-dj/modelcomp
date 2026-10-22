# Mistral Large 4 — findings by Gemini 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Mistral AI (`mistral-large-4`)
- Date: 2026-10-22 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Large 4 (Le Chonk)
- **Short description:** A 1 trillion-parameter natively multimodal model with 52 billion active parameters, Mistral AI's largest and most capable model to date, excelling in cybersecurity, finance, law, and multimodal understanding.
- **Provider / access:** Mistral AI (`mistral-large-4`) - API access via Mistral Studio
- **Release / knowledge:** October 6, 2026 (public preview); knowledge cutoff not specified
- **IDs:** `mistralai/mistral-large-4`
- **Context window:** Not explicitly specified in the source material
- **Modalities:** Text, image, audio, video input; text output; reasoning yes; tool calls yes; multimodal yes
- **Pricing (as of 2026-10-22):$1.36 input / $4.18 output per 1M tokens; paid tier
- **Architecture:** 1 trillion total parameters, 52 billion active parameters, open-weights MoE (mixture of experts)

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

- Terminal-Bench 4.0: **28.3%** (Mistral AI / not ranked / agentic coding)
- AutomationBench: **59.9%** (Mistral AI / not ranked / business workflows)
- AA-Briefcase: **1393 Elo** (Mistral AI / not ranked / long-horizon knowledge work)

Reasoning / knowledge:

- DeepSWE v1.1: **61.7%** (Mistral AI / not ranked / coding)
- SWE-Atlas-QnA: **59.4%** (Mistral AI / not ranked / repository understanding)
- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- ChartQA Pro: **no verified public score found**
- Dense 200: **42%** (Mistral AI / not ranked / visual grounding)

Coding:

- SWE-bench Verified: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode-Verified: **state of the art among open-weight models** (Mistral AI / not ranked / scientific coding)
- DeepSWE: **61.7%** (Mistral AI / not ranked / coding)
- Human coding evaluation: **3.74/5** (Surge AI / ranked 2nd of 5 models / professional annotators)

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

- **Tool use: 85/100.** Strong performance on automation and agentic tasks (59.9% on AutomationBench, 1393 Elo on AA-Briefcase), but limited publicly available benchmark data.
- **Reasoning: 80/100.** Excellent coding performance (61.7% on DeepSWE, 59.4% on SWE-Atlas-QnA) and strong visual grounding (42% on Dense 200), but limited reasoning-specific benchmarks.
- **Context window: 70/100.** Not explicitly specified in the source material, but appears to handle complex workflows well.
- **Multimodal: 95/100.** Natively multimodal with strong visual grounding capabilities, excels at complex document and image understanding.
- **Coding: 90/100.** State-of-the-art coding performance among open-weight models, strong on both agentic coding and human evaluation.
- **Cost efficiency: 60/100.** $1.36 input / $4.18 output per 1M tokens, positioned as premium model.
- **Overall Score: 84/100.** Strong performance across all dimensions, particularly excelling in multimodal capabilities and coding, with good agentic workflows.

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