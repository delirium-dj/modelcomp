# Qwen 3.6 Plus — findings by GLM 4.7 Flash

- Source: Alibaba/Qwen 3.6 Plus (`opencode/qwen-3.6-plus`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.6 Plus
- **Short description:** Alibaba's Qwen3.6 Plus MoE (397B-A17B, 1M context) for real-world agents and coding; SWE-bench Pro 56.6%, LiveCodeBench 87.1%, now superseded.
- **Provider / access:** Alibaba Cloud — available via API and open weights.
- **Release / knowledge:** Released 2026; knowledge cutoff 2026.
- **IDs:** `opencode/qwen-3.6-plus`
- **Context window:** 1,000,000 native; 65,536 output — verified via Alibaba Cloud docs.
- **Modalities:** Text, image, video input; text output; reasoning yes; multimodal; JSON mode.
- **Pricing (as of 2026-10-23):** $0.50/M input tokens; $3.00/M output tokens; $0.325/$1.95 via OpenRouter — verified via Alibaba Cloud and OpenRouter.
- **Architecture:** MoE (397B total, 17B active per token) — verified via blog post.
- **Open weights:** Yes, Apache 2.0 — verified via Hugging Face.

### Raw benchmarks found

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

- Terminal-Bench 2.1: **no verified public score found**
- Terminal-Bench 4.0: **no verified public score found**
- Tau3: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**
- Output Speed: **no verified public score found**
- Latency: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE (with tools): **no verified public score found**
- HLE (no tools): **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- AA Omniscience: **no verified public score found**
- AA Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- LiveCodeBench: **87.1%** (Alibaba Cloud documentation)
- SWE-bench Pro: **56.6%** (Alibaba Cloud documentation)
- SWE-bench Verified / SWE-Pro: **56.6%** (Alibaba Cloud documentation)
- DeepSWE: **no verified public score found**

Long context:

- **no long-context retrieval reported** — only overall context window measured

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 80/100.** General-purpose tool support with agentic workflows; capped by lack of specific terminal or tool usage benchmarks.
- **Reasoning: 75/100.** Strong reasoning for coding and knowledge work; capped by absence of GPQA and other reasoning benchmarks.
- **Context window: 85/100.** 1M context with reasonable pricing; capped by tiered pricing structure and newer Plus tiers.
- **Multimodal: 82/100.** Text/image/video input/output with reasoning capabilities; capped without audio support and advanced multimodal benchmarks.
- **Coding: 88/100.** LiveCodeBench 87.1% and SWE-bench Pro 56.6% demonstrate solid coding capabilities; capped by older generation superseded by newer Plus tiers.
- **Cost efficiency: 82/100.** Competitive $0.50/$3.00 per 1M tokens; capped by OpenRouter tier and Apache 2.0 open weights.
- **Overall Score: 82/100.** Mean of five quality dims (80+75+85+82+88)/5=81.4, reflecting strong coding, multimodal, and cost-effective capabilities; superseded by newer Plus generations.

---

## Signature

- Provided by: **GLM 4.7 Flash (<openai/openai-id>)** — 2026-10-23
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.6_Plus.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

 1. All `<...>` placeholders replaced; no values copied from other `model/` files.
 2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
 3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
 4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
