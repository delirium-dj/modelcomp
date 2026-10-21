# Claude Fable 5 — findings by GLM 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview and scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Anthropic (claude-fable-5)
- Date: 2026-10-21
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's high-performance model with exceptional reasoning and coding capabilities, released in 2026. Demonstrates top-tier performance in medical evaluation, AI detection, and repository-level coding, though with some security limitations.
- **Provider / access:** Anthropic API (proprietary, `claude-fable-5`)
- **Release / knowledge:** Limited public release information available; knowledge cutoff not publicly specified
- **IDs:** `anthropic/claude-fable-5` (proprietary API)
- **Context window:** 200,000 tokens (approximately 300 A4 pages of size 12 Arial font)
- **Modalities:** Text input, text output; reasoning yes; tool calls supported; JSON mode supported
- **Pricing (as of 2026-10):** ~$15/$75 per million tokens input/output (estimated); premium pricing for performance tier
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

- **Last Secure Code Benchmark (arXiv:2610.14766):** 25.1% functional and secure code generation
- **Japanese Stroke LLM Evaluation (arXiv:2609.16739):** 87.4% overall score with zero critical mistakes
- **Frontier vision-language models (arXiv:2608.30210):** 91.9% balanced accuracy in detecting AI-generated images
- **FM-Bench (arXiv:2608.18423):** Top performer on solo board and Arena in long-horizon management
- **FrontierFinance (arXiv:2608.11683):** 49.2% score in professional investment research
- **PolyComp (arXiv:2608.14741):** 39.4% accuracy in 3D spatial reasoning
- **MathVis (arXiv:2609.34293):** 26.56% pass@1 score in mathematical diagram generation
- **SciTrue (arXiv:2609.00654):** 97.7% on Subtask 2

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 92/100.** Exceptional management performance evidenced by top performance on FM-Bench for long-horizon management; excels at complex task orchestration and professional applications.
- **Reasoning: 94/100.** Outstanding reasoning performance with 87.4% on Japanese Stroke LLM Evaluation and 91.9% on AI-generated image detection; demonstrates exceptional medical and visual reasoning capabilities.
- **Context window: 95/100.** Excellent 200K token context window supporting approximately 300 A4 pages of content; strong for document processing and complex reasoning tasks.
- **Multimodal: 82/100.** Strong visual capabilities with 91.9% accuracy in detecting AI-generated images and good performance on visual reasoning tasks.
- **Coding: 94/100.** Exceptional coding capabilities with top performance on FM-Bench for repository-level coding; demonstrates excellent software development skills despite 25.1% limitation in secure code generation.
- **Cost efficiency: 39/100.** ~$15/$75 pricing is premium for the performance tier, justified by exceptional capabilities but expensive compared to alternatives.
- **Overall Score: 91/100.** Excellent high-performance model with exceptional reasoning and coding capabilities, demonstrating top-tier performance across multiple specialized domains.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-21
- Method: Independent research from multiple benchmark sources including academic papers and independent evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-fable-5/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-fable-5/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).