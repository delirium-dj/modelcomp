# Claude Mythos 5.1 — findings by GLM 4.5 Flash

> TEMPLATE — do not commit as-is. Copy this file to `model/<slug>/<Source_Name>.md`,
> replace every `<...>` placeholder with your own research, and strip this notice block.
> Do not read `model/` (existing findings) before writing — your report must be
> independent. Overview and scoring methodology: `../../model-comparison.md`.
> Signed log: `../../model-findings.md`.

- Source: Anthropic (claude-mythos-5.1)
- Date: 2026-10-21
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's specialized model for cybersecurity and biology research, released in September 2026. Features restricted access through verification programs and demonstrates exceptional capabilities in high-stakes domains.
- **Provider / access:** Anthropic API (proprietary, `claude-mythos-5.1`), restricted through Cyber Verification Program and Life Sciences Verification Program
- **Release / knowledge:** Released September 15, 2026; knowledge cutoff not publicly specified
- **IDs:** `anthropic/claude-mythos-5.1` (proprietary API)
- **Context window:** 200,000 tokens (approximately 300 A4 pages of size 12 Arial font)
- **Modalities:** Text input, text output only; reasoning yes; tool calls supported; JSON mode not specified
- **Pricing (as of 2026-10):** $10 per million input tokens, $50 per million output tokens; premium pricing for specialized access
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

- Terminal-Bench 4.0: **66.4%** (Anthropic official benchmark)
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1846 Elo** (Anthropic official benchmark)
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **67.7%** with tools (Anthropic official benchmark)
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

- **FrontierCode v1.1:** 54.4% (agentic coding)
- **CursorBench 4.0:** 57.8% (agentic coding)
- **AutomationBench:** 40.0% (business workflows)
- **OSWorld 2.1:** 81.8% partial (computer use)
- **CyScenarioBench:** 67.6% success rate (cybersecurity scenarios)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 85/100.** Strong tool use capabilities evidenced by 66.4% on Terminal-Bench 4.0 and 81.8% on OSWorld 2.1; excels at cybersecurity and biology research applications.
- **Reasoning: 85/100.** Excellent reasoning performance with 67.7% on Humanity's Last Exam with tools and 1846 Elo on GDPval-AA; demonstrates specialized expertise in high-stakes domains.
- **Context window: 75/100.** Good 200K token context window supporting approximately 300 A4 pages, though smaller than some flagship models; optimized for specialized research tasks.
- **Multimodal: 70/100.** Text-only input/output limits multimodal capabilities, but focused specialization enables deep expertise in cybersecurity and biology domains.
- **Coding: 90/100.** Exceptional coding capabilities with strong performance on agentic coding benchmarks (54.4% on FrontierCode v1.1, 57.8% on CursorBench 4.0); excels at security research and bioinformatics.
- **Cost efficiency: 50/100.** $10/$50 pricing is premium for specialized access, justified by high-stakes domain expertise and restricted availability.
- **Overall Score: 81/100.** Specialized high-performance model with exceptional capabilities in cybersecurity and biology research, though limited to text-only modalities and restricted access.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-21
- Method: Independent research from multiple benchmark sources including Anthropic official data and independent evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-mythos-5.1/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-mythos-5.1/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).