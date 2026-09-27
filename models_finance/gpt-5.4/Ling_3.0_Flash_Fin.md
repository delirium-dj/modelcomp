# GPT-5.4 — findings by Ling 3.0 Flash Fin

- Source: OpenAI (`opencode/gpt-5-4`)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 (OpenAI)
- **Short description:** OpenAI's flagship professional work model, released March 5, 2026, featuring native computer use above human baseline, a 1M token context window, and a revolutionary tool-search system.
- **Provider / access:** OpenAI API, ChatGPT, Codex. Chat Completions + Responses API with native computer use.
- **Release / knowledge:** 2026-03-05 (OpenAI launch post); knowledge cutoff April 20, 2026.
- **IDs:** `openai/gpt-5.4` (OpenRouter), `gpt-5.4` (OpenAI API), `openai/gpt-5.4` (HuggingFace)
- **Context window:** 1,050,000 total (1.05M); up to 128K output tokens
- **Modalities:** Text + image in, text out; native computer use (screenshot + DOM); reasoning enabled; tool calls; code interpreter; hosted shell
- **Pricing (as of 2026-09-24):** Premium pricing (higher than GPT-5.2); context above 272K has different pricing/limits
- **Architecture:** Proprietary; first OpenAI model with native computer use built into the base model

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- OSWorld-Verified: **75.0%** (OpenAI official, above human baseline of 72.4%)
- GDPval: **83.0%** win/tie across 44 occupations (OpenAI official)
- APEX-Agents: **#1** on Mercor leaderboard (OpenAI official)
- WebArena-Verified: **67.3%** (OpenAI official)
- Online-Mind2Web: **92.8%** (OpenAI official, screenshot-based browser)
- BrowseComp: **82.7%** (OpenAI official)
- MCP Atlas: **67.2%** (36 MCP servers, OpenAI official)
- Toolathlon: **54.6%** (OpenAI official)
- MMMU-Pro: **81.2%** / **82.1%** with tools (OpenAI official)
- Internal investment banking modeling: **87.3%** average
- FinanceAgent v1.1: **56.0%** (OpenAI official)
- OfficeQA: **68.1%** (OpenAI official)
- Terminal-Bench 2.0 (AA): **~65.4%** (per comparison data)

Reasoning / knowledge:

- ARC-AGI-2: **52.9%** (OpenAI official, significant gap vs Opus 4.6's 68.8%)
- GDPval: **83.0%** win/tie across 44 occupations
- MMMU-Pro: **81.2%** / **82.1%** (with tools)
- BrowseComp: **82.7%**
- 33% fewer hallucinated facts and 18% fewer errors vs GPT-5.2
- HLE: no specific published score for GPT-5.4

Coding:

- SWE-Bench Verified: **77.2%** (OpenAI official)
- SWE-Bench Pro Public: **57.7%** (OpenAI official)
- CodeRabbit bug detection: **84.7%** (300 PRs)
- WebDev Arena: **~1521** Elo
- CursorBench: competitive with GPT-5.2
- Augment Code: 18-20% fewer tokens on complex tasks

Long context:

- 1.05M context window (largest from OpenAI)
- MRCR 512K-1M: **36.6%** (OpenAI official)
- GraphWalks long-context reasoning: included in system card
- Tool search: **47% reduction** in total token usage on 36-server MCP benchmark

### Normalized scores (1–100)

> Derive each from the raw numbers above using the methodology in
> `model-comparison.md`. Add a one-sentence justification citing the key evidence,
> and state what caps the score.
>
> **CRITICAL OVERALL SCORE FORMULA (v4):**
> Overall Score = `Math.round((Tool + Reasoning + Context + Multimodal + Coding) / 5)` (half-up rounding to nearest integer or 1 decimal).
> **NEVER include Cost efficiency** in the Overall calculation. Cost efficiency is scored independently.

- **Tool use: 88/100.** Exceptional OSWorld-Verified (75.0%, above human baseline of 72.4%), APEX-Agents (#1 on leaderboard), GDPval (83% win/tie), Online-Mind2Web (92.8%), BrowseComp (82.7%), MCP Atlas (67.2%). Best-in-class computer use and professional agentic capabilities.
- **Reasoning: 68/100.** ARC-AGI-2 at 52.9% is significantly behind Opus 4.6 (68.8%). Strong on professional knowledge work (GDPval 83%) but weaker on abstract reasoning. Capped by being positioned for professional work over pure reasoning.
- **Context window: 85/100.** 1.05M context window is the largest from OpenAI. MRCR at 36.6% (1M) shows strong long-context capability. Capped by declining performance at the far end of the context range.
- **Multimodal: 75/100.** Native computer use with screenshot/DOM input, MMMU-Pro at 81.2%/82.1%, Online-Mind2Web at 92.8%. Strong visual understanding and computer use. Capped by text-only output and no video/audio generation.
- **Coding: 72/100.** Solid SWE-bench Verified (77.2%), SWE-bench Pro (57.7%), CodeRabbit (84.7%). But trails Claude Opus 4.6 on SWE-bench Verified (80.8%). Strong on professional coding tasks but not peak software engineering.
- **Cost efficiency: 70/100.** Premium pricing above GPT-5.2 level; higher than GPT-5.6 Sol. The tool-search efficiency gain (47% token reduction) helps but the base price is high.
- **Overall Score: 77.6/100.** Mean of the five non-cost dimensions (88 + 68 + 85 + 75 + 72) / 5 = 77.6, rounded half-up to 78. A premier professional work model with the first native computer use above human baseline, 1M context, and excellent agentic tool use, but weaker on abstract reasoning and at premium pricing.

---

## Signature

- Provided by: **Ling 3.0 Flash Fin (inclusionai/ling-3-0-flash-fin-free)** — 2026-09-24
- Method: Public internet research via OpenAI launch post, OpenAI API docs, Awesome Agents review, Tabbit, and third-party benchmark aggregators; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. GPT_5.md, using the same headings.

---

## Submission checklist (delete before finishing)

1. All `<...>` placeholders replaced; no values copied from other `model/` files.
2. Filename is `model/gpt-5-4/Ling_3.0_Flash_Fin.md` (folder name = filesystem-safe slug). Use the exact assigned stem — never write a near-variant filename.
3. Signature block filled in; relative links resolve from `model/gpt-5-4/`.
4. No raw benchmark invented — "no verified public score found" used where missing.
5. Zero verified benchmarks for this model -> file saved as `Ling_3.0_Flash_Fin.md.excluded`.
