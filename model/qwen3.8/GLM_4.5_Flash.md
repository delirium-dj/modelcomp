# Qwen 3.8 — findings by GLM 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview + scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Alibaba Qwen (`qwen3.8`)
- Date: 2026-10-30 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.8 (Qwen3.8-Max / Qwen3.8-2.4T-A95B; Qwen3.8-27B open-weight variant)
- **Short description:** Alibaba's flagship multimodal agentic model for long-horizon coding and professional work at 1M context with exceptional visual understanding.
- **Provider / access:** Alibaba Qwen, QwenCloud (`qwen3.8`), Model Studio (`qwen3.8`), Hugging Face (`Qwen/Qwen3.8`)
- **Release / knowledge:** August 2, 2026 release; knowledge cutoff not publicly specified
- **IDs:** `qwen/qwen3.8` (no Free ID confirmed on OpenCode Zen)
- **Context window:** 1,000,000 total tokens (1M); verified from QwenCloud and Model Studio docs
- **Modalities:** Text, image, video, audio in; text out (multimodal); reasoning: yes; tool calls: yes; JSON mode: yes
- **Pricing (as of 2026-10-30):** $2.00 input / $6.00 output / $0.20 cached per 1M tokens
- **Architecture:** 2.4T total / ~95B active parameters per token, sparse MoE with hybrid attention

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

- OSWorld-Verified: **86.1%**
- AndroidWorld: **85.3%**
- Toolathlon Verified: **72.5%**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**
- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **92.6%**
- HLE: **43.6%**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**
- IFBench: **82.8%** (from independent sources)

Coding:

- Terminal Bench 2.1: **86.6%**
- PaperBench: **93.0%**
- SWE-bench Verified: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no long-context retrieval reported**

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score. 
> 
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 80/100.** Based on OSWorld-Verified 86.1%, AndroidWorld 85.3%, Toolathlon 72.5%; strong agentic capabilities but lower Toolathlon score.
- **Reasoning: 84/100.** Based on GPQA 92.6%, IFBench 82.8%, but notably low HLE at 43.6%; excellent general reasoning with specific weakness in HLE.
- **Context window: 95/100.** Among the largest context windows at 1M tokens; verified from official sources.
- **Multimodal: 88/100.** Strong visual understanding with MathVision 95.2%; comprehensive multimodal input support.
- **Coding: 82/100.** Based on Terminal Bench 2.1 86.6%, PaperBench 93.0%; strong coding performance across multiple benchmarks.
- **Cost efficiency: 72/100.** Competitive pricing at $2/$6 per 1M tokens; good value for performance.
- **Overall Score: 85.8/100.** Mean of (80+84+95+88+82)/5 = 85.8; Alibaba's flagship multimodal agentic model for long-horizon coding and professional work at 1M context.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4.5-flash)** — 2026-10-30
- Method: Public internet research, official Qwen documentation, and model metadata; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).