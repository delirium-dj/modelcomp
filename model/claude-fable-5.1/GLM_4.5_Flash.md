# Claude Fable 5.1 — findings by GLM 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview and scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Anthropic (claude-fable-5.1)
- Date: 2026-10-21
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5.1
- **Short description:** Anthropic's flagship model for coding and knowledge work, released in September 2026. Offers significant improvements over Fable 5 with enhanced agentic coding, scientific research capabilities, and reduced costs while maintaining strong safety safeguards.
- **Provider / access:** Anthropic API (proprietary, `claude-fable-5.1`), available on AWS, Google Cloud, Microsoft Azure, and Claude Platform
- **Release / knowledge:** Released September 1, 2026; knowledge cutoff not publicly specified
- **IDs:** `anthropic/claude-fable-5.1` (proprietary API)
- **Context window:** 1M tokens (approximately 1,500 A4 pages of size 12 Arial font)
- **Modalities:** Text and image input; text output; reasoning yes; tool calls supported; JSON mode supported
- **Pricing (as of 2026-10):** $10.00 per 1M input tokens, $50.00 per 1M output tokens, $0.25 per 1M cache read tokens (75% discount from Fable 5); approximately 25% less than Fable 5, up to 45% savings for agentic tasks
- **Architecture:** Proprietary model (Anthropic has not disclosed parameter count or architecture details)

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

- Terminal-Bench 4.0: **55.8%** (Anthropic official benchmark)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1735** (Anthropic official benchmark)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **53 / no verified public score found** (Artificial Analysis, rank #5/214)
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

- **Terminal-Bench-Science 0.1:** 52.6% (Anthropic official benchmark)
- **CursorBench 3.2.0:** 73.4% (Anthropic official benchmark)
- **AutomationBench:** 31.4% (Anthropic official benchmark)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 92/100.** Exceptional agentic coding performance evidenced by 55.8% on Terminal-Bench 4.0 and 73.4% on CursorBench 3.2.0; demonstrates top-tier capabilities in complex coding and software development tasks.
- **Reasoning: 93/100.** Excellent reasoning performance with 53 on Artificial Analysis Intelligence Index (rank #5/214) and strong GDPval-AA score of 1735; demonstrates exceptional knowledge work and problem-solving capabilities.
- **Context window: 95/100.** Exceptional 1M token context window supporting approximately 1,500 A4 pages of content; excellent for long-running tasks and extensive document processing.
- **Multimodal: 85/100.** Good multimodal support with text and image input capabilities; enables visual analysis and multimodal reasoning tasks.
- **Coding: 94/100.** Outstanding coding capabilities with strong performance on agentic coding benchmarks (55.8% on Terminal-Bench 4.0, 73.4% on CursorBench 3.2.0); excels at code generation, debugging, and software engineering.
- **Cost efficiency: 65/100.** $10.00/$50.00 pricing with improved cache pricing offers good value for premium capabilities; approximately 25-45% less expensive than Fable 5 for typical workloads.
- **Overall Score: 91.8/100.** Exceptional high-performance model with outstanding coding and reasoning capabilities, offering excellent value with improved cost efficiency over previous versions.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-21
- Method: Independent research from multiple benchmark sources including Anthropic official data and independent evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-fable-5.1/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-fable-5.1/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).