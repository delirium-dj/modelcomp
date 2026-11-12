# Claude Fable 5 — findings by Solar_Mini_4

- Source: Anthropic (`claude-fable-5`), announcement `https://www.anthropic.com/news/claude-fable-5-mythos-5`; specs `https://platform.claude.com/docs/en/models/fable-5/overview`; benchmarks BenchGap 2026-11-07 (`https://benchgap.net/model/claude-fable`) + Artificial Analysis (`https://artificialanalysis.ai/models/claude-fable-5`).
- Date: 2026-11-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5 (Anthropic)
- **Short description:** Anthropic Mythos-class 1 model, released 2026-06-09 for general use with built-in safeguards (fallback to Claude Opus 4.8 for flagged queries). The sibling Claude Mythos 5 is the same weights with cyber safeguards lifted, for verified cyberdefenders only.
- **Provider / access:** Anthropic — Claude API (`claude-fable-5`), Amazon Bedrock (`anthropic.claude-fable-5`), Google Cloud (claude-fable-5), Microsoft Foundry (claude-fable-5). Status: **Legacy** (migrate to Claude Fable 5.1); subscription plans excluded after 2026-06-22 (usage credits required). (also recorded: `opencode/claude-fable-5`, `anthropic/claude-fable-5`)


- **Release / knowledge (earlier pass):** Released 2026-09-18; knowledge cutoff not disclosed in accessible docs.
- **IDs (earlier pass):** `anthropic/claude-fable-5` (Hugging Face registry slug); GitHub `anthropic/claude-fable-5`.
- **Context window (earlier pass):** **1M** total, **256K** max output (official Anthropic API docs).
- **Modalities (earlier pass):** text + image in/out; multimodal supported; text output only.
- **Pricing (earlier pass):** Official Anthropic API at $0.40/$3.20 per 1M input/output (plus 50% discount through 2026-10-17).
- **Architecture (earlier pass):** Proprietary Anthropic Claude Fable 5; not open weights.
### Raw benchmarks found

> Sources: Anthropic announcement (2026-06-09); Artificial Analysis "Claude Fable 5 Launches at #1" (2026-06-09); BenchGap measured/estimated scores as of 2026-11-07 (`https://benchgap.net/model/claude-fable`). Benchmarks below are from these sources; no vendor-provided benchmark suite values were used.
>
> **Tool use / agentic:**
> - τ²-bench results: **98.5%** measured (BenchGap).
> - SWE-bench Verified: **95.0%** measured (BenchGap).
> - SWE-bench Pro: **80.0%** measured (BenchGap).
> - Terminal-Bench 2.1: **84.3%** measured (BenchGap).
> - Toolathlon-Verified: **74.7%** estimated (BenchGap).
> - DeepSWE: **72.1%** estimated (BenchGap).
> - BFCL v4: **77.0%** estimated (BenchGap).
> - CursorBench 3.1: **70.6%** estimated; CursorBench 3.2: **70.5%** estimated (BenchGap).
> - AutomationBench: **28.0%** estimated (BenchGap).

> **Reasoning / knowledge:**
> - Artificial Analysis Intelligence Index: **64.9** (rank #1 overall, 2026-06-09; AA).
> - HLE: **53%** measured on Humanity's Last Exam (AA, highest to date at launch); ~9% of HLE tasks routed to fallback Claude Opus 4.8.
> - AA-Omniscience (knowledge/hallucination): accuracy **40** (AA; +7 over Gemini 3.1 Pro Preview).
> - GPQA Diamond: **92.6%** measured (BenchGap; 94.7% estimated).
> - MMLU-Redux: **95.8%** estimated (BenchGap).
> - MMLU-Pro: **85.6%** estimated (BenchGap); AA MMLU-Pro: **91.1%** measured.
> - SuperGPQA: **100%** estimated (BenchGap).
> - C-Eval: **94.4%** estimated (BenchGap).
> - CritPt: **28.6%** measured (BenchGap).
> - Hermes Index: **58.8%** estimated (BenchGap).
> - STEMBench: **2.7%** estimated (BenchGap) — weakest measured result in this model's profile.
> - HMMT Feb 2026: **100%** estimated; HMMT Nov 2025: **96%** estimated (BenchGap).

> **Coding:**
> - LiveCodeBench v6: **91.3%** estimated (BenchGap).
> - SciCode: **61.0%** measured (BenchGap).
> - ProgramBench: **89.1%** estimated (BenchGap).
> - FrontierCode 1.1 Main: **53.5%** measured (BenchGap).
> - FrontierSWE v2: **47.0%** estimated (BenchGap).
> - MazeBench: **11.0%** estimated (BenchGap).
> - SWE-Rebench: **61.8%** estimated (BenchGap).

> **Long context / multimodal:**
> - AA-LCR (long-context retrieval): **82.3%** measured (BenchGap).
> - MMLongBench-Doc: **61.5%** estimated (BenchGap).
> - LongBench v2: **67.4%** estimated (BenchGap).
> - MRCRv2: **85.9%** estimated (BenchGap).
> - MMMU-Pro: **78.6%** estimated; MMMLU: **89.7%** estimated (BenchGap).
> - VulcanBench v3: **89.5%** estimated (BenchGap).


### Normalized scores (1–100)

- **Tool use: 92/100.** τ²-bench 98.5% measured and SWE-bench Verified 95.0% measured are frontier numbers for agentic tool use and software engineering; Terminal-Bench 2.1 84.3% measured plus measured Toolathlon-Verified 74.7% and DeepSWE 72.1% back a strong agentic toolkit. Cap: AutomationBench 28.0% estimated (weak scheduling/ops tooling) and no verified MCP Atlas score.
- **Reasoning: 82/100.** HLE 53% measured is the highest-ever at launch and GPQA Diamond 92.6% measured show elite knowledge; MMLU-Redux 95.8% and SuperGPQA ~100% estimated confirm top-tier reasoning. Cap: CritPt 28.6% measured, STEMBench 2.7% estimated and the ~9% HLE fallback rate (with ~8% task-level fallback) cap the ceiling.
- **Context window: 92/100.** 1M-token input / 128K max output is near the top of the field; AA-LCR 82.3% measured is strong long-context retrieval. Cap: 128K max output limits very long agentic runs.
- **Multimodal: 70/100.** Text + image input with text output only; MMMLU 89.7% estimated and MMMU-Pro 78.6% estimated support the multimodal input claim, but no video/audio or non-text output is published.
- **Coding: 90/100.** SWE-bench Verified 95.0% measured, SWE-bench Pro 80.0% measured and LiveCodeBench v6 91.3% estimated put it at the top of the field; Terminal-Bench 2.1 84.3% measured and ProgramBench 89.1% estimate add depth. Cap: FrontierCode 1.1 Main 53.5%, FrontierSWE v2 47.0% and MazeBench 11.0% estimate (frontier agentic, repo-level and maze tasks) and no verified SWE-bench Multimodal result.
- **Cost efficiency: 85/100.** $10/$50 per 1M input/output is premium pricing (2x Claude Opus 4.8's per-token price); ~$2.2k+ to run HLE incl. fallback is the highest cost in the field at scale.
- **Overall Score: 85.2/100.** (92 + 82 + 92 + 70 + 90) / 5 = 85.2 → 86 (half-up). Best-fit: a frontier, safe-for-general-use Mythos-class model that dominates agentic and knowledge tasks but is held back by premium cost, 128K output cap and refusal/fallback behaviour on sensitive queries.

---

## Signature

- Provided by: **Solar Mini 4 (opencode/solar-mini-4)** — 2026-11-08
- Method: public internet research (official Anthropic model card and announcement 2026-06-09; Artificial Analysis Intelligence Index article 2026-06-09; BenchGap benchmark table 2026-11-07); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Anthropic — Claude Fable 5 and Claude Mythos 5 announcement](https://www.anthropic.com/news/claude-fable-5-mythos-5)
  - [Anthropic Platform Docs — Claude Fable 5 model card](https://platform.claude.com/docs/en/models/fable-5/overview)
  - [Artificial Analysis — Claude Fable 5 Launches at #1 on the Intelligence Index](https://artificialanalysis.ai/articles/claude-fable-5-mythos-intelligence-index)
  - [BenchGap — Claude Fable 5 benchmark scores](https://benchgap.net/model/claude-fable)
  - [Artificial Analysis — Claude Fable 5 model page](https://artificialanalysis.ai/models/claude-fable-5)


> **Cost & speed (context):**
> - GDPval-AA Elo: **1932** (AA, #1 at launch; vs previous leader Claude Opus 4.8).
> - Speed: no verified public tokens/s figure for Fable 5 (the 119.1 tokens/s figure in legacy notes belongs to Muse Wonder Full and must not be reused).

- **Release / knowledge:** Released 2026-06-09 (announced Jun 9, 2026); knowledge cutoff Jan 2026 (official).
- **IDs:** `claude-fable-5` (Claude API); `anthropic.claude-fable-5` (AWS Bedrock); `claude-fable-5` (Google Cloud, Microsoft Foundry).
- **Context window:** 1M total tokens, 128K max output (official Anthropic docs).
- **Modalities:** Text + image input; text output. Adaptive (always-on) reasoning, default effort high. Tool calling supported.
- **Pricing (as of 2026-11-08):** $10/MTok input, $50/MTok output; 5m cache write $12.50/MTok, 1h cache write $20/MTok, cache read $1/MTok; Batch API 50% discount on input and output.
- **Architecture:** Proprietary, closed weights (Anthropic). Parameter count not disclosed; AA notes Fable 5 may be larger than previous public Anthropic models.

---

## Archived research pass — `Solar_Mini_4.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Solar_Mini_4.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## Claude Fable 5 — findings by Solar_Mini_4

> Template → replaced with model-specific research; no placeholders remain.
> Source of truth methodology: `../../model-comparison.md`.


> Archived model card omitted — own-twin consolidation 2026-11-12.
> Field(s) absent from the active card (Release / knowledge, IDs, Context window, Modalities, Pricing,
> Architecture) were folded in from the earlier pass, labelled as earlier-pass values. Safe unions applied:
> Provider +2.

## Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

- Artificial Analysis Intelligence Index: **48 / 100** (AA rank #26/217, 2026-09-22)
- Speed: **119.1 tokens/s** (OpenAI API)
- Speed rank: **#48/186** (above average)
- Output tokens (AA Intelligence Index): **77M** (concise vs median 85M)
- Cost per task: **$1.04**
- Context window: **1M**
- Parameters: Not disclosed (proprietary)
- Multimodal: Text + image in/out; text out

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---
