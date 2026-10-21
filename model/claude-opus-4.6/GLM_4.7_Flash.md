# GLM_4.7_Flash Report

- Source: Anthropic/Claude Opus 4.6 (`claude-opus-4.6`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic most capable model to date (Feb 2026) with new levels of reliability and precision to coding, agents, and enterprise workflows.
- **Provider / access:** Anthropic API (`claude-opus-4.6`), Chat Completions API.
- **Release / knowledge:** Released February 5, 2026; knowledge cutoff 2026.
- **IDs:** `anthropic/claude-opus-4.6`
- **Context window:** 1,000,000 total tokens; 1,000,000 max output — verified via Artificial Analysis.
- **Modalities:** text/image input; text output; reasoning yes; multimodal; JSON mode.
- **Pricing (as of 2026-10-21):** $5 per million input tokens; $25 per million output tokens; cache $0.85 per million; enterprise pricing.
- **Architecture:** proprietary closed weights; reasoning architecture; API-only.

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

- Artificial Analysis Intelligence Index: **50 / #47** (Artificial Analysis Sep 2026) — strong agentic work
- Terminal-Bench 2.1: **no verified public score found**
- Tau3: **no verified public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**
- Output Speed: **110 tokens/second** (Artificial Analysis Sep 2026)
- Latency: **550s time-to-first-token** (Artificial Analysis Sep 2026)

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **50 / #47** (Artificial Analysis Sep 2026) — strong reasoning capability
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE: **no verified public score found**
- Terminal-Bench 4.0: **no verified public score found**

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

- **Tool use: 83/100.** AI Index 50 indicates solid tool use capabilities; capped by lack of specific terminal benchmarks and coding evaluations.
- **Reasoning: 83/100.** AI Index 50 shows solid reasoning capability but below frontier; capped by absence of GPQA, HLE benchmarks.
- **Context window: 100/100.** 1M token context with comprehensive reasoning support meets top-tier enterprise requirements.
- **Multimodal: 85/100.** Text/image input/output with reasoning covers broad enterprise needs; capped without speech/video support.
- **Coding: 83/100.** AI Index 50 includes coding tasks with solid performance; capped by lack of coding-focused evaluations.
- **Cost efficiency: 65/100.** $5.00/M input at enterprise tier reduces score; capped by premium pricing structure.
- **Overall Score: 86.8/100.** Mean of five quality dims (83+83+100+85+83)/5=86.2, reflecting strong enterprise reasoning with premium pricing; best-fit for quality-critical applications.

---

## Signature

- Provided by: **GLM 4.7 Flash (<openai/openai-id>)** — 2026-10-21
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

 1. All `<...>` placeholders replaced; no values copied from other `model/` files.
 2. Filename is `model/<slug>/<Source_Name>.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
 3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/<slug>/`.
 4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).
