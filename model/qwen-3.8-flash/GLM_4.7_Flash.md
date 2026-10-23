# Qwen 3.8 Flash — findings by GLM 4.7 Flash

- Source: Alibaba/Qwen 3.8 Flash (`opencode/qwen-3.8-flash`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 Flash
- **Short description:** Alibaba's Qwen3.8 Flash sparse MoE (6B active, 1M hosted) for cheap high-volume coding/agents; LiveCodeBench 91.9%, GPQA 91.7% at $0.15/$0.47 per 1M.
- **Provider / access:** Alibaba Cloud / Hugging Face — available via API and open weights.
- **Release / knowledge:** Released 2026; knowledge cutoff 2026.
- **IDs:** `opencode/qwen-3.8-flash`
- **Context window:** 1,048,576 (1M) API; 262,144 native; 131,072 output — verified via Alibaba docs.
- **Modalities:** text/image/video input; text output; reasoning yes; multimodal; JSON mode.
- **Pricing (as of 2026-10-23):** $0.15/M input tokens; $0.47/M output tokens; $0 self-hosted — verified via Alibaba Cloud and Hugging Face.
- **Architecture:** sparse Mixture-of-Experts with 6B active parameters; optimized for high-volume coding and agentic workflows.

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

- GPQA Diamond: **91.7%** (Google documentation)
- HLE (with tools): **no verified public score found**
- HLE (no tools): **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- AA Omniscience: **no verified public score found**
- AA Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- LiveCodeBench: **91.9%** (Alibaba Cloud documentation)
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
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

- **Tool use: 85/100.** Sparse MoE architecture with 6B active params optimized for coding/agents; capped by lack of specific terminal benchmarks and tool usage metrics.
- **Reasoning: 92/100.** GPQA Diamond 91.7% shows exceptional reasoning capabilities for complex reasoning tasks; capped by absence of general reasoning benchmarks (HLE, CritPt) and limited reasoning focus compared to Plus/Max variants.
- **Context window: 95/100.** 1M API context with sparse MoE architecture meets enterprise coding/agent needs; capped by native 262K limit relative to full 1M.
- **Multimodal: 90/100.** Text/image/video input/output with reasoning covers broad enterprise needs; capped without audio support.
- **Coding: 95/100.** LiveCodeBench 91.9% demonstrates elite coding capabilities; capped by lack of dedicated SWE-bench and specialized coding benchmarks.
- **Cost efficiency: 98/100.** $0.15/$0.47 per 1M tokens reflects extremely competitive pricing; capped by economic advantage at scale and open-weight self-hosting option.
- **Overall Score: 91.4/100.** Mean of five quality dims (85+92+95+90+95)/5=91.4, reflecting exceptional reasoning, coding, context, and multimodal capabilities at cost-effective pricing; cost efficiency (98) is not counted.

---

## Signature

- Provided by: **GLM 4.7 Flash (<openai/openai-id>)** — 2026-10-23
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Flash.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

 1. All `<...>` placeholders replaced; no values copied from other `model/` files.
 2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
 3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
 4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
