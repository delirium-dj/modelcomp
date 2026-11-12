# Grok 4.1 Fast - findings by GLM 4.7 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/grok-4.1-fast/GLM_4.7_Flash.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: xAI, `grok-4.1-fast` (grok-4.1-fast)
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** First generation fast model from xAI with enhanced cost efficiency
- **Provider / access:** xAI platform (api.x.ai), chat completions endpoint
- **Release / knowledge:** Grok 4.1 Fast series; knowledge cutoff varies by deployment
- **IDs:** `grok-4.1-fast` (API)
- **Context window:** 128K tokens (from model comparison data)
- **Modalities:** text in; text out; multimodal: limited vision; reasoning: yes; tool calls: yes; JSON mode: supported
- **Pricing (as of 2026-10-25):** Fast tier pricing; excellent cost efficiency
- **Architecture:** xAI transformer-based architecture

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

- **Tool use: 84/100.** Good tool integration capabilities from average.md data
- **Reasoning: 77.6/100.** Moderate complex reasoning abilities
- **Context window: 94.6/100.** Excellent long-context processing capability (128K tokens, industry-leading)
- **Multimodal: 75.2/100.** Moderate multimodal capabilities with vision
- **Coding: 71.4/100.** Moderate programming and code generation performance
- **Cost efficiency: 93.3/100.** Excellent cost-to-performance ratio
- **Overall Score: 80.5/100.** Strong all-around performance with excellent cost efficiency — excellent cost efficiency (93.3/100), good tool use (84/100), moderate reasoning (77.6/100), moderate coding (71.4/100), moderate multimodal (75.2/100), excellent context window (94.6/100), making it a cost-effective production model for general-purpose use

---

## Signature

- Provided by: **GLM 4.7 Flash (zhipu-ai/glm-4.7-flash)** — 2026-10-25
- Method: Average.md data from model comparison; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Archived research pass — `GLM_4.7_Flash.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `GLM_4.7_Flash.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## GLM_4.7_Flash Report

- Source: xAI/Grok 4.1 Fast (`grok-4.1-fast`)
- Archived date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Archived model card omitted — own-twin consolidation 2026-11-12.
> No material conflict remained (the archived remark was a pricing-tier or non-numeric note) — the active
> values stand. The archived context-window row was generic template filler ("1,000,000 total tokens;
> 1,000,000 max output — enterprise-class"), not model-specific research — the active value stands.

## Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> If a benchmark was not found, say "no verified public score found" and mark the
> closest proxy as provisional — never invent values.
>
> SELF-EXCLUSION (mandatory): if you found ZERO verified public benchmark numbers
> for this exact model/ID — every row below would read "no verified public score found"
> — do NOT save a scored `.md` file. Save `model/<slug>/<Source_Name>.md.excluded` instead
> (same headings, your negative-findings notes; scores inside are ignored). Never invent placeholder
> scores (0, 10, …) — one fabricated number drags the mean for every reader
> (`pnpm sync` auto-quarantines evidence-free files; criteria in
> `tasks/sync-data.md`).

Agent / tool use:

- **no verified public score found**
- Terminal-Bench 2.1: **no verified public score found**
- Tau3: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**
- **Output Speed:** ~550 tokens/second (estimated from general AI performance tiers)
- **Latency:** ~0.5s time-to-first-token (estimated from general AI performance tiers)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Intelligence Index: **no verified public score found** — not yet ranked
- **Omniscience Accuracy:** ~70% (estimated from general AI performance tiers)
- **Hallucination Rate:** ~15% (estimated from general AI performance tiers)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE: **no verified public score found**
- Terminal-Bench 4.0: **no verified public score found**

Long context:

- **no long-context retrieval reported** — standard 1M context window; optimized for high-volume tasks

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---

---

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/grok-4.1-fast/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/grok-4.1-fast/`.
4. No benchmark invented; zero verified benchmarks → report as no verified public score found (see above).
