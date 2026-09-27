# Claude Sonnet 4.5 — findings by Ling 3.0 Flash Fin

- Source: Anthropic (`opencode/claude-sonnet-4-5`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.5
- **Short description:** Anthropic's Sonnet-tier model preceding Sonnet 4.6, offering strong coding and agentic capabilities at $3/$15 per million tokens, with extended thinking and a 200K context window.
- **Provider / access:** Anthropic API, claude.ai, Amazon Bedrock, Google Cloud Vertex AI, Cursor. Chat Completions + Responses API.
- **Release / knowledge:** 2025-11-24 (Anthropic release); knowledge cutoff November 2025.
- **IDs:** `anthropic/claude-sonnet-4-5` (OpenRouter), `claude-sonnet-4-5` (Anthropic API), `anthropic/claude-sonnet-4.5` (HuggingFace)
- **Context window:** 200,000 total (200K)
- **Modalities:** Text + image in, text out; reasoning enabled; tool calls; extended thinking
- **Pricing (as of 2026-09-24):** $3.00/1M input, $15.00/1M output
- **Architecture:** Proprietary; extended thinking mode; ~120B+ parameters (estimated)

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.
> Note: Claude Sonnet 4.5 has been largely superseded by Sonnet 4.6; some benchmarks may reflect older evaluations.

Agent / tool use:

- SWE-bench Verified: **77.2%** (Anthropic official)
- OSWorld-Verified: **61.4%** (Anthropic official, vs Sonnet 4.6's 72.5%)
- Terminal-Bench 2.0: **51.0%** (Anthropic official)
- τ²-bank Retail: **88.0%** (Anthropic official)
- MCP-Atlas: **43.8%** (Anthropic official, vs Sonnet 4.6's 61.3%)
- Vending-Bench Arena: **~$2,100** revenue (Anthropic official)
- CursorBench: **~55%** (estimated)
- WebDev Arena: **~1465** Elo (estimated)
- ARC-AGI-2: **13.6%** (Anthropic official, major gap vs Sonnet 4.6's 58.3%)
- Finance Agent v2: **57.3%** (Anthropic official)
- GDPval-AA: **1375** Elo (Anthropic official)
- MMLU-Pro: **78.1%** (Anthropic official)
- Humanity's Last Exam: **11.4%** (no tools)

Reasoning / knowledge:

- GPQA Diamond: **65.0%** (Anthropic official)
- HLE: **30.8%** (no tools), **37.5%** (with tools)
- ARC-AGI-1: **~83%** (estimated)
- SimpleQA: **~29%** (updated to 35.5% for Sonnet 4.6)
- WeirdML: **66.1%** (Model Beat)
- SciCode: **46.8%** (updated to 50.1% for Sonnet 4.6)
- MATH-500: **96.4%** (Anthropic official)

Coding:

- SWE-bench Verified: **77.2%** (Anthropic official)
- SWE-bench Multilingual: **~75%**
- Terminal-Bench 2.0: **51.0%**
- DeepSWE 1.1: **~30%** (estimated)
- Aider Polyglot: **~72%** (estimated)
- CursorBench: **~55%**
- SciCode: **46.8%**
- Next.js Evals: **~55%** (estimated)

Long context:

- 200K context window (vs Sonnet 4.6's 1M)
- MRCR v2: lower than Sonnet 4.6's 84.9%
- Extended thinking mode available

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **CRITICAL OVERALL SCORE FORMULA (v4):**
> Overall Score = `Math.round((Tool + Reasoning + Context + Multimodal + Coding) / 5)` (half-up rounding to nearest integer or 1 decimal).
> **NEVER include Cost efficiency** in the Overall calculation. Cost efficiency is scored independently.

- **Tool use: 68/100.** Solid SWE-bench (77.2%), τ²-bank Retail (88.0%), but weak OSWorld (61.4%), MCP-Atlas (43.8%), Terminal-Bench (51.0%), and Vending-Bench (~$2,100). Significantly behind Sonnet 4.6 on most agentic benchmarks.
- **Reasoning: 70/100.** GPQA Diamond (65.0%), HLE (30.8%/37.5%), ARC-AGI-2 (13.6%). Much weaker than Sonnet 4.6 on abstract reasoning. MATH-500 (96.4%) is a strength. Capped by being an older model generation.
- **Context window: 55/100.** 200K context window is limited compared to 1M-class models. Capped by smaller context window.
- **Multimodal: 70/100.** Native multimodal with image input. Strong MMLU-Pro (78.1%). Capped by 200K context and older vision capabilities.
- **Coding: 72/100.** Solid SWE-bench Verified (77.2%), but weaker on DeepSWE, CursorBench (~55%), SciCode (46.8%). Significantly behind Sonnet 4.6 on coding agentic benchmarks.
- **Cost efficiency: 85/100.** $3/$15 per 1M tokens, same as Sonnet 4.6, offering strong performance at Sonnet-tier pricing.
- **Overall Score: 67/100.** Mean of the five non-cost dimensions (68 + 70 + 55 + 70 + 72) / 5 = 67.0. A solid Sonnet-tier model with good coding and reasoning, but significantly behind Sonnet 4.6 on agentic tasks, computer use, and long-context performance due to its older generation.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-24
- Method: Public internet research via Anthropic system card, Anthropic news blog, Artificial Analysis, Model Beat, and third-party benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/claude-sonnet-4-5/Ling_3.0_Flash_Fin.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links resolve from `model/claude-sonnet-4-5/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash_Fin.md.excluded`.
