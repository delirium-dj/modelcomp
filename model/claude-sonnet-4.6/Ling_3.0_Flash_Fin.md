# Claude Sonnet 4.6 — findings by Ling 3.0 Flash Fin

- Source: Anthropic (`opencode/claude-sonnet-4-6`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's most capable Sonnet model, released February 17, 2026, delivering near-Opus performance on computer use and coding at ~5x lower cost, with a 1M token context window.
- **Provider / access:** Anthropic API, claude.ai, Amazon Bedrock, Google Cloud Vertex AI, Cursor. Chat Completions + Responses API.
- **Release / knowledge:** 2026-02-17 (Anthropic launch); knowledge cutoff not explicitly stated.
- **IDs:** `anthropic/claude-sonnet-4-6` (OpenRouter), `claude-sonnet-4-6` (Anthropic API), `anthropic/claude-sonnet-4.6` (HuggingFace)
- **Context window:** 1,000,000 total (1M) in beta
- **Modalities:** Text + image in, text out; native multimodal; reasoning enabled; tool calls; computer use; JSON mode
- **Pricing (as of 2026-09-24):** $3.00/1M input, $15.00/1M output (unchanged from Sonnet 4.5)
- **Architecture:** Proprietary; ~200B+ parameters (estimated); adaptive thinking + extended thinking

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- OSWorld-Verified: **72.5%** (Anthropic official, first-attempt, 5 runs)
- SWE-bench Verified: **79.6%** (Anthropic official, 10 trials)
- SWE-bench Multilingual: **75.9%** (Anthropic official)
- Terminal-Bench 2.0: **59.1%** (Anthropic official, thinking off)
- τ²-bank Retail: **91.7%** (Anthropic official)
- τ²-bank Telecom: **97.9%** (Anthropic official)
- MCP-Atlas: **61.3%** (Anthropic official, max effort)
- APEX-Agents: **43.0%** (updated, benchmark Sep 2026)
- Vending-Bench Arena: **~$5,700** revenue (Anthropic official)
- CursorBench v3.1: **49%** (Artificial Analysis)
- WebDev Arena: **1521** Elo (Model Beat)
- BrowseComp: **82.7%** (WebArena-Verified)
- ARC-AGI-2: **58.3%** (max effort, 120k thinking)
- Finance Agent v2: **51%** / 63.3% (varies by source)
- GDPval-AA: **1633** Elo (office, best-in-class)
- MMLU-Pro: **79.1%** (Anthropic official)
- Humanity's Last Exam: **19.1%** (no tools), **33.2%** (with tools)
- SciCode: **50.1%** (updated, Sep 2026)
- MRCR v2 (8-needle, 128k): **84.9%** (Anthropic official)

Reasoning / knowledge:

- GPQA Diamond: **89.9%** (Anthropic official)
- HLE: **33.2%** (no tools), **33.6%** (with tools)
- ARC-AGI-1: **86.5%** (ARC Prize Foundation)
- MMMU-Pro: **74.5%** (no tools), **75.6%** (with tools)
- MATH-500: **97.8%** (Anthropic official)
- SimpleQA Verified: **35.5%** (updated, Aug 2026)
- Factuality: 33% fewer hallucinated facts vs GPT-5.2

Coding:

- SWE-bench Verified: **79.6%** (Anthropic official)
- SWE-bench Multilingual: **75.9%**
- Terminal-Bench 2.0: **59.1%**
- DeepSWE 1.1: **30%** (Artificial Analysis)
- SciCode: **50.1%** (updated)
- CursorBench v3.1: **49%**
- Aider Polyglot: **82.2%** (paper reference)
- Next.js Evals: **58%** (Vercel)
- CodeRabbit PR bug detection: **84.7%** (300 PRs)

Long context:

- MRCR v2 (8-needle, 128k): **84.9%** (Anthropic official)
- 1M token context window in beta
- Vending-Bench Arena: strong long-horizon business simulation
- GraphWalks long-context reasoning: included in system card

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **CRITICAL OVERALL SCORE FORMULA (v4):**
> Overall Score = `Math.round((Tool + Reasoning + Context + Multimodal + Coding) / 5)` (half-up rounding to nearest integer or 1 decimal).
> **NEVER include Cost efficiency** in the Overall calculation. Cost efficiency is scored independently.

- **Tool use: 78/100.** Strong OSWorld-Verified (72.5%), MCP-Atlas (61.3%, beats Opus 4.6's 60.3%), τ²-bank Telecom (97.9%), GDPval-AA office (1633 Elo, best-in-class). Weaker on Terminal-Bench 2.0 (59.1%) and DeepSWE (30%). Exceptional on office productivity and scaled tool use.
- **Reasoning: 78/100.** Strong GPQA Diamond (89.9%), MATH-500 (97.8%), ARC-AGI-1 (86.5%), but lower HLE (33.2%) and ARC-AGI-2 (58.3%). Near-Opus reasoning but not the peak.
- **Context window: 88/100.** 1M context window with MRCR v2 at 84.9% (128K). Strong long-context reasoning. Capped by beta status of 1M window.
- **Multimodal: 75/100.** Native multimodal with strong MMMU-Pro (74.5%/75.6%) and image understanding. Capped by text-only output and moderate visual agent scores.
- **Coding: 75/100.** Very strong SWE-bench Verified (79.6%), near-Opus (80.8%). But weaker on DeepSWE (30%) and CursorBench (49%). Capped by inconsistent agentic coding benchmarks.
- **Cost efficiency: 90/100.** $3/$15 per 1M tokens, unchanged from Sonnet 4.5, offering near-Opus performance at ~20% of Opus cost. Best value proposition in frontier AI.
- **Overall Score: 79/100.** Mean of the five non-cost dimensions (78 + 78 + 88 + 75 + 75) / 5 = 78.8, rounded half-up to 79. A near-Opus model for computer use and coding at Sonnet-tier pricing, with strong office productivity and 1M context, but limited on deep agentic coding benchmarks.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-24
- Method: Public internet research via Anthropic system card, Anthropic news blog, Artificial Analysis, Model Beat, and cloud provider documentation; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-sonnet-4-6/Ling_3.0_Flash_Fin.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links resolve from `model/claude-sonnet-4-6/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash_Fin.md.excluded`.
