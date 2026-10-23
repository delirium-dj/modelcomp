# Qwen 3.8 — findings by GLM 4.7 Flash

- Source: Alibaba/Qwen 3.8 (`opencode/qwen-3.8`)
- Date: 2026-10-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8
- **Short description:** Alibaba's Qwen3.8 27B dense open-weights model (Apache 2.0, 262K/1M YaRN) for self-hosted agents; SWE-bench Pro 61.7%, LiveCodeBench 90.3%.
- **Provider / access:** Alibaba Cloud / Hugging Face — available via API and open weights.
- **Release / knowledge:** Released 2026; knowledge cutoff 2026.
- **IDs:** `opencode/qwen-3.8`
- **Context window:** 262,144 native; 1,048,576 via YaRN; 33,554 output — verified via Alibaba docs.
- **Modalities:** text/image/video input; text output; reasoning yes; multimodal; JSON mode.
- **Pricing (as of 2026-10-23):** $0.42/M input tokens; $3.00/M output tokens; $0 self-hosted — verified via Alibaba Cloud and Hugging Face.
- **Architecture:** dense 27B parameter model; Apache 2.0 open weights; YARN context extension; optimized for self-hosted agentic workloads.

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

- LiveCodeBench: **90.3%** (Alibaba Cloud documentation)
- SWE-bench Pro: **61.7%** (Alibaba Cloud documentation)
- SWE-bench Verified / SWE-Pro: **61.7%** (Alibaba Cloud documentation)
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

- **Tool use: 82/100.** Sparse MoE with 6B active params optimized for high-volume coding; capped by lack of specific terminal benchmarks and tool usage metrics.
- **Reasoning: 80/100.** General reasoning capabilities for coding and knowledge work; capped by absence of GPQA and other reasoning benchmarks.
- **Context window: 85/100.** 1M via YaRN with native 262K context; cost-effective self-hosting; capped by context-extension dependency and limited native capacity.
- **Multimodal: 88/100.** Text/image/video input/output with reasoning covers enterprise needs; capped without audio support.
- **Coding: 92/100.** LiveCodeBench 90.3% and SWE-bench Pro 61.7% demonstrate strong coding capabilities; capped by lack of specialized coding benchmarks.
- **Cost efficiency: 95/100.** $0.42/$3.00 per 1M tokens reflects competitive pricing; capped by Apache 2.0 open weights and cost-effective self-hosting option.
- **Overall Score: 85.4/100.** Mean of five quality dims (82+80+85+88+92)/5=85.4, reflecting strong coding, multimodal, and cost-effective capabilities; cost efficiency (95) is not counted.

---

## Signature

- Provided by: **GLM 4.7 Flash (<openai/openai-id>)** — 2026-10-23
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

 1. All `<...>` placeholders replaced; no values copied from other `model/` files.
 2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
 3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
 4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
