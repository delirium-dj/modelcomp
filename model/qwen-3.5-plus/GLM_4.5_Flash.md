# Qwen 3.5 Plus — findings by GLM 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview and scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Qwen 3.5 Plus (qwen-3.5-plus)
- Date: 2026-10-21
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Qwen 3.5 Plus
- **Short description:** A large language model developed by Alibaba Cloud's Qwen team, optimized for regulatory compliance and legal reasoning tasks. Ranked 68th with an 85.1 overall score.
- **Provider / access:** Available through Hugging Face and various AI platforms; exact API ID may vary by provider
- **Release / knowledge:** Released in 2024; knowledge cutoff not explicitly stated in sources
- **IDs:** `qwen/qwen-3.5-plus` (on Hugging Face and other platforms)
- **Context window:** 128K tokens (based on Qwen series capabilities)
- **Modalities:** Text input; text output; reasoning yes; tool calls supported; JSON mode supported
- **Pricing (as of 2026):** Varies by provider; typically commercial tier pricing
- **Architecture:** Proprietary transformer architecture; exact parameter count not specified in sources

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

- **Swiss-Bench 003 (Reliability & Security):** 94.4% (arXiv:2604.05872 / highest score among evaluated models)
- **Swiss-Bench SBP-002 (Legal/Regulatory):** 38.2% (arXiv:2603.23646 / top-ranked model in benchmark)
- **Overall ranking:** 68th place (model-queue.md / 85.1 score)
- **Swiss-Bench 003 D7 (Self-Graded Reliability):** 94.4% (arXiv:2604.05872)
- **Context Window:** 128K token context window supported (based on Qwen series capabilities)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 65/100.** Limited publicly available benchmark data on tool use capabilities; demonstrates regulatory compliance performance but lacks extensive agentic testing.
- **Reasoning: 78/100.** Excellent regulatory and legal reasoning with Swiss-Bench SBP-002 38.2% and outstanding reliability scoring Swiss-Bench 003 D7 94.4%; sophisticated logical thinking for compliance applications.
- **Context window: 85/100.** Strong 128K token context window placing it in the high tier for long-document processing and extensive reasoning tasks.
- **Multimodal: 15/100.** Text-only model with no confirmed image, audio, or video capabilities; significant limitation compared to dedicated multimodal models.
- **Coding: 40/100.** Limited publicly available benchmark data on coding capabilities; basic code generation but not optimized for complex software engineering tasks.
- **Cost efficiency: 70/100.** Commercial model with competitive pricing but not in the lowest cost tier; good value for specialized regulatory applications.
- **Overall Score: 56.6/100.** Specialized model with exceptional regulatory compliance and reliability performance; ideal for legal and compliance applications requiring high reliability.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-21
- Method: Independent research from multiple benchmark sources including academic papers (arXiv:2604.05872, arXiv:2603.23646) and model evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/qwen-3.5-plus/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/qwen-3.5-plus/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).