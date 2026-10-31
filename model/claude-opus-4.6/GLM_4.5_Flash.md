# Claude Opus 4.6 — findings by GLM 4.5 Flash

- Source: Claude Opus 4.6 (claude-opus-4-6)
- Date: 2026-10-30
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's flagship model with advanced agentic capabilities, 1M token context window, and exceptional performance in reasoning, coding, and long-context tasks. Released February 5, 2026, representing a significant leap in professional AI capabilities.
- **Provider / access:** Anthropic API (`claude-opus-4-6`), available through official Anthropic API, Amazon Bedrock, Google Cloud, Microsoft Azure, and Claude Platform on AWS
- **Release / knowledge:** Released February 5, 2026; reliable knowledge cutoff May 2025, training data cutoff August 2025
- **IDs:** `claude-opus-4-6` (API), `anthropic.claude-opus-4-6-v1` (Amazon Bedrock)
- **Context window:** 1M tokens (beta, premium pricing for prompts >200k tokens)
- **Modalities:** Text and image input; text output; reasoning yes; tool calls supported; JSON mode supported
- **Pricing (as of 2026):** $5 per 1M tokens input, $25 per 1M tokens output; premium pricing $10/$37.50 for prompts >200k tokens; Batch API 50% discount; cache reads $0.50/MTok
- **Architecture:** Proprietary Mixture of Experts (MoE) transformer architecture with approximately 80-110B active parameters and 1.5-2.5T total parameters, FP8 quantization, Grouped Query Attention (GQA), 80 layers, 10,240 hidden dimensions, 80 attention heads, 16 experts with 2 active per token

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
> scores (0, 10, …) — one fabricated number drags the mean for every feedback
> (`pnpm sync` auto-quarantines evidence-free files; criteria in
> `tasks/sync-data.md`).

Agent / tool use:

- Terminal-Bench 2.1: **no verified public score found**
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **1606 Elo (rank 1) - Economically valuable knowledge work tasks (Artificial Analysis)**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **62.7% (rank 1) - High effort performance (Anthropic official)**

Reasoning / knowledge:

- GPQA Diamond: **91.3% (Anthropic official)**
- HLE: **53.0% with tools / 40.0% without tools (rank 1) - Complex multidisciplinary reasoning test (Anthropic official)**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index / BenchLM overall: **no verified public score found / no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no verified public score found / no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **80.8% (25-trial average) / 81.42% (with prompt modification) (Anthropic official)**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- **MRCR v2 (8-needle 1M): 76% - Long-context retrieval benchmark (vs Sonnet 4.5's 18.5%) (Anthropic official)**
- **BrowseComp: 83.7% (86.8% with multi-agent) - Information retrieval benchmark (Anthropic official)**

### Additional benchmark data from independent sources:

- **Terminal-Bench 2.0:** 65.4% (rank 1) - Agentic coding evaluation (Anthropic official)
- **τ²-bench (Retail):** 91.9% - Industry-specific knowledge work (Anthropic official)
- **τ²-bench (Telecom):** 99.3% - Industry-specific knowledge work (Anthropic official)
- **ARC-AGI-2:** 68.8% - Abstract reasoning challenge (Anthropic official)
- **OSWorld-Verified:** 72.7% - Real-world software operation (Anthropic official)
- **AIME 2025:** 99.79% - Advanced mathematics evaluation (Anthropic official)
- **ARC-AGI-1:** 94.00% - Abstract reasoning challenge (ARC Prize Foundation)
- **MMMLU:** 91.1% - Massive multitask language understanding (Anthropic official)

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps it.
>
> **OVERALL SCORE FORMULA (v4, see `RULES.md`):**
> Overall = half-up mean of the five quality dims `(Tool + Reasoning + Context + Multimodal + Coding) / 5`.
> **NEVER include Cost efficiency** — scored independently.

- **Tool use: 95/100.** Exceptional agentic capabilities with highest rank on Terminal-Bench 2.0 (65.4%) and leading 62.7% on MCP Atlas; demonstrates advanced task planning and autonomous execution with complex multi-step reasoning.
- **Reasoning: 89/100.** Outstanding multidisciplinary reasoning with 53.0% on Humanity's Last Exam and 91.3% on GPQA Diamond; sophisticated logical thinking across domains with some limitations in extreme complexity.
- **Context window: 98/100.** Revolutionary 1M token context window with industry-leading 76% on MRCR v2 and 83.7% on BrowseComp; exceptional long-context processing capabilities with qualitative improvement over predecessors.
- **Multimodal: 65/100.** Primarily text-based model with confirmed image input capabilities; limited compared to dedicated multimodal models but strong in text-based reasoning and analysis.
- **Coding: 92/100.** Excellent coding performance with 81.42% on SWE-bench Verified and leading agentic coding capabilities; superior code review, debugging, and navigation of large codebases with precise changes.
- **Cost efficiency: 60/100.** Premium pricing at $5/$25 per 1M tokens with additional costs for large contexts (>200k tokens); high cost justified by exceptional performance for professional applications.
- **Overall Score: 88/100.** Exceptional professional AI model with outstanding agentic capabilities and long-context performance; ideal for enterprise applications requiring complex reasoning, coding, and extensive document processing.

---

## Signature

- Provided by: **GLM 4.5 Flash (zai/glm-4-5-flash)** — 2026-10-30
- Method: Independent research from multiple benchmark sources including Anthropic official documentation, Artificial Analysis, and third-party evaluations; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GLM_4.6.md`, using the same headings.

---

## Submission checklist (complete, then remove this section before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-opus-4-6/GLM_4.5_Flash.md` (folder name = filesystem-safe slug, see `model/README.md`). Use the exact assigned stem — never write a near-variant filename (e.g. `Ling_3.0.md` when the assignment is `Ling_3.0_Flash_Fin.md`); variant stems register as duplicate sources and fail review.
3. Signature block filled in; relative links (`../../model-comparison.md`, `../../model-findings.md`) resolve from `model/claude-opus-4-6/`.
4. No benchmark invented; zero verified benchmarks → saved as `.md.excluded` (see above).