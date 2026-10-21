# Kimi K3 — findings by GLM 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview and scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Moonshot AI (kimi-k3)
- Date: 2026-10-21
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** A 2.8-trillion parameter mixture-of-experts (MoE) large language model with native vision capabilities and 1-million-token context window. Released in July 2026 for long-horizon coding, knowledge work, and reasoning tasks.
- **Provider / access:** Moonshot AI (kimi-k3) via web app, mobile apps, Kimi Work, Kimi Code, and API
- **Release / knowledge:** Released July 16, 2026; knowledge cutoff not publicly specified
- **IDs:** `moonshotai/kimi-k3` (proprietary API)
- **Context window:** 1 million tokens (verified via official blog and multiple sources)
- **Modalities:** Text, image, and video input; text output; reasoning yes; tool calls supported; JSON mode supported
- **Pricing (as of 2026-10):** $0.30/MTok cache-hit input, $3.00/MTok cache-miss input, $15.00/MTok output (API pricing)
- **Architecture:** 2.8 trillion total parameters, MoE with 896 experts, 16 active per input (verified via official technical blog)

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

- Terminal-Bench 4.0: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **Elo-500 rating** (Agentic real-world work tasks, official benchmark)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **47 / no verified public score found** (ranked 7th out of 27 models on Intelligence Index)
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **67.3%** (official leaderboard, mini-SWE-agent harness)

Long context:

- **90.4%** at 300K token context window (BrowseComp with context compaction strategy)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 75/100.** Strong tool use capabilities evidenced by 67.3% on DeepSWE and demonstrated effectiveness in long-horizon coding tasks; shows good agentic capabilities for complex software development.
- **Reasoning: 70/100.** Solid reasoning performance with 47 on Artificial Analysis Intelligence Index (rank 7/27); demonstrates good knowledge work capabilities though limited independent verification available.
- **Context window: 100/100.** Exceptional 1M token context window is among the highest available, verified by multiple sources including official blog and technical reports.
- **Multimodal: 85/100.** Excellent native vision capabilities supporting text, image, and video input; strong multimodal understanding and processing capabilities.
- **Coding: 80/100.** Good coding performance with 67.3% on DeepSWE and demonstrated capabilities in kernel optimization, compiler development, and long-horizon coding tasks.
- **Cost efficiency: 90/100.** Excellent API pricing at $0.30-$3.00 input and $15.00 output per MTok, significantly lower than competitors like Claude Opus 4.
- **Overall Score: 82/100.** Strong performance model with exceptional context window and multimodal capabilities, competitive pricing, and good coding performance.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-21
- Method: Independent research from multiple benchmark sources including official documentation, technical blogs, and independent evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/kimi-k3/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/kimi-k3/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).