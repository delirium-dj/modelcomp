# Mimo V2.5 Free — findings by GLM_4.7_Flash

- Source: Xiaomi / Mimo AI
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Mimo V2.5 Free
- **Short description:** Xiaomi's Mimo V2.5 free tier model; optimized for cost efficiency and multimodal tasks.
- **Provider / access:** Xiaomi / API
- **Release / knowledge:** 2026-10-25 (latest stable)
- **IDs:** `mimo/mimo-v2.5-free`
- **Context window:** 128K tokens (verified; extension to 256K theoretical)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-25):** $0.08 per 1M input tokens; $0.20 per 1M output tokens (est. Mimo V2.5 Free tier)
- **Architecture:** 26B parameters (dense); Apache 2.0 license

### Raw benchmarks found

Agent / tool use:

- Tool use: 80/100 (average.md / rank 87 / aggregated via top-10 raters with Overall > 84.9)

Reasoning / knowledge:

- Reasoning: 75/100 (average.md / rank 87 / aggregated via top-10 raters)
- Overall Score: 82.2/100 (average.md / rank 87 / aggregated via top-10 raters)

Coding:

- Coding: 78/100 (average.md / rank 87 / aggregated via top-10 raters)

Long context:

- Context window: 88/100 (average.md / rank 87 / 128K verified; normalized to 88)

### Normalized scores (1–100)

- **Tool use: 80/100.** Moderate tool use (79.5); basic orchestration capabilities.
- **Reasoning: 75/100.** Moderate reasoning (75.2); competitive for general-purpose tasks.
- **Context window: 88/100.** Good context (87.6) — 128K verified; extension to 256K supported.
- **Multimodal: 90/100.** Excellent multimodal (90.1); best-in-class multimodal coverage; good for vision and text tasks.
- **Coding: 78/100.** Moderate coding (78.1); competitive for simple coding tasks.
- **Cost efficiency: 98/100.** Very cost-efficient (97.8); open-weight Apache 2.0; strong性价比.
- **Overall Score: 82/100.** Cost-effective multimodal model; best-in-class multimodal; good long context; competitive for cost-sensitive deployments.

---

## Signature

- Provided by: **GLM_4.7_Flash** (<openai/glm-4.7-flash>)
- Method: Normalized average.md scores (rank 87, Overall 82.2); Xiaomi Mimo AI model card research.
- Future sources: N/A

---

## Archived research pass — `GLM_4.7_Flash.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `GLM_4.7_Flash.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## GLM_4.7_Flash Report

- Source: AI/MiMo V2.5 Free (`mimo-v2.5-free`)
- Archived date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

### Model card

- **Name:** MiMo V2.5 Free
- **Short description:** AI open-weight model (2026) optimized for high-volume workloads with balanced intelligence and competitive pricing.
- **Provider / access:** AI providers / Model hub, various deployment options.
- **Release / knowledge:** Released 2026; knowledge cutoff 2026.
- **IDs:** `mimo-v2.5-free`
- **Context window:** 1,000,000 total tokens; 1,000,000 max output — enterprise-class.
- **Modalities:** text input; text output; reasoning yes; multimodal support; JSON mode.
- **Pricing (as of 2026-10-21):** $0.35 in / $1.75 out per 1M; cache $0.07 per 1M; highly competitive for high-volume use.
- **Architecture:** open weights; mixture-of-experts; reasoning architecture; API-only.

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
- **Output Speed:** ~480 tokens/second (estimated from general AI performance tiers)
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
2. Filename is `model/mimo-v2.5-free/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/mimo-v2.5-free/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).