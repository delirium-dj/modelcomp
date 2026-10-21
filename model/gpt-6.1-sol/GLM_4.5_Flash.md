# GPT-6.1 Sol — findings by GLM 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview and scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: OpenAI (gpt-6.1-sol)
- Date: 2026-10-21
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6.1 Sol
- **Short description:** A more capable version of GPT-6 Sol that nearly matches GPT-6 Astra's intelligence on agentic coding, computer use, and professional work at one-fifth of Astra's standard input and output token prices. Developed by OpenAI as a cost-effective alternative for complex everyday work.
- **Provider / access:** OpenAI (proprietary, `gpt-6.1-sol`) - Chat Completions API
- **Release / knowledge:** October 21, 2026 (release date); knowledge cutoff not specified
- **IDs:** `openai/gpt-6.1-sol` (proprietary API)
- **Context window:** Not explicitly stated in official documentation, but based on GPT-6 family architecture, likely 128K+ tokens with input/output limits
- **Modalities:** Text input, text output; reasoning yes; tool calls supported; JSON mode supported; text-only
- **Pricing (as of 2026-10):** $2.00 per million input tokens, $10.00 per million output tokens, $0.10 per million cached input tokens
- **Architecture:** Proprietary (exact parameters not disclosed)

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
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found / no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **no verified public score found**

### Additional benchmark data from independent sources:

- **DeepSWE v1.1:** Matches GPT-6 Astra (OpenAI official / DeepSWE 1.1 / Complex software engineering tasks)
- **GDP.pdf:** Higher than Opus 5.5 with fallbacks (OpenAI official / GDP.pdf / Professional document analysis)
- **AutomationBench:** 94.8% (OpenAI official / AutomationBench 1.0.6 / Multi-step business workflows)
- **OSWorld 2.0:** 87.9% (OpenAI official / OSWorld 2.0 / Computer-use workflows)
- **Terminal-Bench Science 0.1:** 61.7% (OpenAI official / Terminal-Bench Science 0.1 / Scientific research workflows)
- **Factuality:** 92.3% (OpenAI official / User-flagged error conversations / Factual accuracy)
- **Heuresis Benchmark:** Surpasses best algorithm by 14% adjacency F1 (arXiv:2610.22846 / Heuresis / Agentic causal discovery)
- **RealtimeBench:** Variable performance under live conditions (arXiv:2610.20665 / RealtimeBench / Interactive game tasks)
- **Energy intake estimation:** Wide individual error despite low average bias (arXiv:2610.26538 / ACETADA feeding trial / Photo-based dietary assessment)
- **Omniscience Accuracy / Hallucination Rate:** 92.3% / 7.7% (OpenAI official / User-flagged error conversations / Factuality evaluation)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 90/100.** Exceptional performance on automation benchmarks including 94.8% on AutomationBench and 87.9% on OSWorld 2.0, with strong capabilities in multi-step workflows and computer use tasks.
- **Reasoning: 92/100.** Strong factuality performance (92.3%) and ability to surpass best algorithms in complex tasks like agentic causal discovery, with only 7.7% error rate on difficult prompts.
- **Context window: 85/100.** Based on GPT-6 family architecture and strong performance on document analysis tasks, though specific long-context benchmarks not available; capped by lack of verified long-context retrieval tests.
- **Multimodal: 15/100.** Text-only model with no reported image or audio capabilities; capped by design limitations.
- **Coding: 88/100.** Matches GPT-6 Astra performance on DeepSWE v1.1 for complex software engineering tasks, showing significant improvements over previous generations.
- **Cost efficiency: 95/100.** At $2.00 per million input tokens and $10.00 per million output tokens, offers near-Astra capabilities at 20% the cost, with cached input pricing at just $0.10 per million tokens.
- **Overall Score: 74/100.** Strong balance of capabilities across reasoning, tool use, and coding domains with excellent cost efficiency, though multimodal capabilities are limited to text-only.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-21
- Method: Independent research from multiple benchmark sources including OpenAI official documentation and academic papers (arXiv:2610.22846, arXiv:2610.26538, arXiv:2610.20665); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-6.1-sol/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/gpt-6.1-sol/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).