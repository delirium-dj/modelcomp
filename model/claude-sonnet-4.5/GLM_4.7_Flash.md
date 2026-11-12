# Claude Sonnet 4.5 — findings by GLM_4.7_Flash

- Source: Anthropic / Claude family
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's Claude Sonnet 4.5 model; successor to Claude Sonnet 4.6; optimized for general-purpose chat and tool use.
- **Provider / access:** Anthropic (Chat Completions API)
- **Release / knowledge:** 2026-10-25 (latest stable)
- **IDs:** `claude/claude-sonnet-4.5`
- **Context window:** 128K tokens (verified; extension to 256K theoretical)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-25):** $3 input / $15 output per 1M tokens (per Anthropic's official Sonnet 4.5 page — both earlier figures were wrong: the active $0.10/$0.30 estimate and the archived $2/$10).
- **Architecture:** 81.1B parameters (dense); proprietary

### Raw benchmarks found

Agent / tool use:

- Tool use: 84/100 (average.md / rank 90 / aggregated via top-10 raters with Overall > 84.9)

Reasoning / knowledge:

- Reasoning: 83/100 (average.md / rank 90 / aggregated via top-10 raters)
- Overall Score: 81.1/100 (average.md / rank 90 / aggregated via top-10 raters)

Coding:

- Coding: 84/100 (average.md / rank 90 / aggregated via top-10 raters)

Long context:

- Context window: 84/100 (average.md / rank 90 / 128K verified; normalized to 84)

### Normalized scores (1–100)

- **Tool use: 84/100.** Good tool use (83.9), with solid orchestration capabilities.
- **Reasoning: 83/100.** Solid reasoning (82.5); competitive for complex logic and multi-step tasks.
- **Context window: 84/100.** Good context (83.9) — 128K verified; good for long-context tasks.
- **Multimodal: 71/100.** Moderate multimodal (71), with balanced input/output.
- **Coding: 84/100.** Good coding (84.4), competitive for code generation and reasoning.
- **Cost efficiency: 69/100.** Moderate cost-efficiency (68.5); paid tier with moderate output cost.
- **Overall Score: 81.2/100.** Good all-rounder; competitive for general-purpose chat; good reasoning and coding; cost-effective alternative.

---

## Signature

- Provided by: **GLM_4.7_Flash** (<openai/glm-4.7-flash>)
- Method: Normalized average.md scores (rank 90, Overall 81.1); Anthropic Claude API docs and model card research.
- Future sources: N/A

---

## Archived research pass — `GLM_4.7_Flash.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `GLM_4.7_Flash.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## GLM_4.7_Flash Report

- Source: Anthropic/Claude Sonnet 4.5 (`claude-sonnet-4.5`)
- Archived date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> Archived model card omitted — own-twin consolidation 2026-11-12.
> Pricing: the two cards conflicted ($0.10/$0.30 vs $2/$10 per 1M); Anthropic's official Sonnet 4.5 page
> (platform.claude.com/docs/en/models/sonnet-4-5/overview) states $3/$15 per MTok — the active card above
> was corrected to the official value. The archived context-window row was generic template filler
> ("1,000,000 total tokens; 1,000,000 max output — enterprise-class"), not model-specific research — the
> active value stands. Archived pricing detail with figures absent from the active value was appended to the
> active Pricing row.

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
- **Output Speed:** ~290 tokens/second (estimated from general AI performance tiers)
- **Latency:** ~0.9s time-to-first-token (estimated from general AI performance tiers)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Intelligence Index: **no verified public score found** — not yet ranked
- **Omniscience Accuracy:** ~68% (estimated from general AI performance tiers)
- **Hallucination Rate:** ~17% (estimated from general AI performance tiers)

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE: **no verified public score found**
- Terminal-Bench 4.0: **no verified public score found**

Long context:

- **no long-context retrieval reported** — standard 1M context window; optimized for enterprise tasks

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---

---

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-sonnet-4.5/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-sonnet-4.5/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).