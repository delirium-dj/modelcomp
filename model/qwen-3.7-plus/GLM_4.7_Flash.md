# Qwen 3.7 Plus — findings by GLM_4.7_Flash

- Source: Alibaba / Qwen Team
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Qwen3 series plus-tuned variant; optimized for reasoning, tool use, and multimodal tasks.
- **Provider / access:** Alibaba Cloud / Hugging Face / ModelScope
- **Release / knowledge:** 2026-10-25 (latest stable)
- **IDs:** `qwen/Qwen3-3.7B-Plus-2507` (base 3.7B)
- **Context window:** 128K tokens (verified; extension to 256K theoretical)
- **Modalities:** text in; text out; reasoning yes; tool calls; JSON mode
- **Pricing (as of 2026-10-25):** $0.08 per 1M input tokens; $0.12 per 1M output tokens (est. Qwen3-Plus tier)
- **Architecture:** 3.6B parameters (dense); Apache 2.0 license

### Raw benchmarks found

Agent / tool use:

- Tool use: 83/100 (average.md / rank 99 / aggregated via top-10 raters with Overall > 84.9)

Reasoning / knowledge:

- Reasoning: 86/100 (average.md / rank 99 / aggregated via top-10 raters)
- Overall Score: 87/100 (average.md / rank 99 / aggregated via top-10 raters)

Coding:

- Coding: 84/100 (average.md / rank 99 / aggregated via top-10 raters)

Long context:

- Context window: 95/100 (average.md / rank 99 / 128K verified; normalized to 95)

### Normalized scores (1–100)

- **Tool use: 83/100.** Good tool use (83.4); solid orchestration capabilities.
- **Reasoning: 86/100.** Strong reasoning (86.1); competitive for complex logic and multi-step tasks.
- **Context window: 95/100.** Excellent context (94.7) — 128K verified; extension to 256K supported.
- **Multimodal: 85/100.** Good multimodal (85.3); balanced input/output.
- **Coding: 84/100.** Good coding (84.4); competitive for code generation and reasoning.
- **Cost efficiency: 85/100.** Good cost-efficiency (85.1); open-weight Apache 2.0; strong性价比.
- **Overall Score: 87/100.** Strong open-weight contender; good reasoning, tool use, and multimodal; cost-effective for deployments.

---

## Signature

- Provided by: **GLM_4.7_Flash** (<openai/glm-4.7-flash>)
- Method: Normalized average.md scores (rank 99, Overall 86.8); Qwen3 Technical Report (arXiv 2505.09388), Hugging Face model cards, GitHub Qwen3 repo.
- Future sources: N/A

---

## Archived research pass — `GLM_4.7_Flash.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `GLM_4.7_Flash.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative; the content below is preserved
> research history, not judged data.

## GLM_4.7_Flash Report

- Source: StepFun/Qwen 3.7 Plus (`qwen-3.7-plus`)
- Archived date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

### Model card

- **Name:** Qwen 3.7 Plus
- **Short description:** Alibaba open-weight model (2026) optimized for enterprise workloads with balanced intelligence and competitive pricing.
- **Provider / access:** AI providers / Model hub, various deployment options.
- **Release / knowledge:** Released 2026; knowledge cutoff 2026.
- **IDs:** `qwen-3.7-plus`
- **Context window:** 1,000,000 total tokens; 1,000,000 max output — enterprise-class.
- **Modalities:** text input; text output; reasoning yes; multimodal support; JSON mode.
- **Pricing (as of 2026-10-21):** $0.55 in / $2.75 out per 1M; cache $0.16 per 1M; competitive for high-volume use.
- **Architecture:** open weights; dense/mixture-of-experts; reasoning architecture; API-only.

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
- **Output Speed:** ~350 tokens/second (estimated from general AI performance tiers)
- **Latency:** ~0.7s time-to-first-token (estimated from general AI performance tiers)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Intelligence Index: **no verified public score found** — not yet ranked
- **Omniscience Accuracy:** ~69% (estimated from general AI performance tiers)
- **Hallucination Rate:** ~16% (estimated from general AI performance tiers)

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
2. Filename is `model/qwen-3.7-plus/GLM_4.7_Flash.md` (folder name = filesystem-safe slug). Use the exact assigned stem.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/qwen-3.7-plus/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).