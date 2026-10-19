# GPT-5.1-Codex-Max — findings by Step 5 Preview

- Source: OpenAI/GPT-5.1-Codex-Max (`gpt-5.1-codex-max`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.1-Codex-Max
- **Short description:** OpenAI's frontier agentic-coding Max variant (2025-11-19) — the first model trained to work across multiple context windows via *compaction*, built for multi-hour, project-scale coding agent loops; replaced GPT-5.1-Codex as the Codex default at launch.
- **Provider / access:** OpenAI API `gpt-5.1-codex-max` (Responses API only — no Chat Completions, no Batch, no fine-tuning); OpenCode Zen lists a paid route `opencode/gpt-5.1-codex-max` (no free ID found, verified 2026-10-19); primary surface is Codex (CLI, IDE, cloud, code review).
- **Release / knowledge:** Released 2025-11-19 (Codex first, API followed); knowledge cutoff Sep 30, 2024; rolling snapshot, regularly updated.
- **IDs:** `gpt-5.1-codex-max` (OpenAI Responses API) · `opencode/gpt-5.1-codex-max` (Zen, paid).
- **Context window:** 400,000 tokens native with 128,000 max output tokens (official model page) — plus built-in session *compaction* that prunes history at the window limit so a single task can coherently span millions of tokens (OpenAI reports tasks running 24+ hours).
- **Modalities:** Text and image in → text out; reasoning tokens; streaming; structured outputs; function calling; prompt caching; server-side web search tool. Tools: function_calling, web_search.
- **Pricing (as of 2026-10-19):** $1.25 / 1M input, $0.125 / 1M cached input, $10 / 1M output (official, identical list price to GPT-5.1-Codex) — the efficiency gain is in tokens, not price.
- **Architecture:** Proprietary; parameter count not disclosed. First OpenAI model trained for Windows environments.

### Raw benchmarks found

> OpenAI's numbers come from its own Codex-CLI harness at Extra High effort with compaction enabled; independent trackers cover Max sparsely (BenchLM leaves it unranked, 13 rows), and several BenchLM rows are re-attributed GPT-5.1-Codex AA measurements — flagged below where the figure is family-level, not Max-specific.

Agent / tool use:

- Terminal-Bench 2.0: **58.1%** (OpenAI, Codex CLI in the Laude Institute Harbor harness, xhigh + compaction) — vs 52.8% for GPT-5.1-Codex
- τ²-bench: **83%** (Artificial Analysis — measured on the GPT-5.1-Codex page, treated here as family-level, not Max-specific)
- AA-IFBench: **70.0%** (same family-level caveat)
- GDPval-AA / Tau3-Banking / OSWorld / Claw-Eval / MCP-Atlas / Toolathlon: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **86.0%**, HLE: **25.7%**, AA Intelligence Index: **~24** (estimated), CritPt: **5.7%**, AA-LCR: **69.3%**, AA-Omniscience Index **-6.5** (accuracy 39.9%, hallucination 77.2%) — all from Artificial Analysis's GPT-5.1-Codex measurement; no Max-specific independent reasoning eval was found (AA has no Codex-Max model page), so these are family-level proxies, used with that caveat

Coding (Max-specific, official + Vals):

- SWE-bench Verified (n=500): **77.9%** (OpenAI, xhigh + compaction) — vs 73.7% for GPT-5.1-Codex
- SWE-Lancer IC SWE: **79.9%** (OpenAI) — vs 66.3% for GPT-5.1-Codex, the largest public Max-side jump
- Terminal-Bench 2.0: **58.1%** (OpenAI; see agentic section) — vs 52.8%
- LiveCodeBench: **83.6%** (Vals AI, Max-specific entry) — slightly below GPT-5.1-Codex's 85.6%
- Vibe Code Bench v1.1: **22.17%** (Vals AI, Max-specific) — vs 13.12% for GPT-5.1-Codex; improved but still weak
- DeepSWE / SciCode / FrontierCode / SWE-bench Pro: no verified public score found

Long context:

- 400K native window verified (official); compaction is the headline long-horizon capability — OpenAI reports coherent work over "millions of tokens in a single task" and 24-hour-plus autonomous runs (project-scale refactors, deep debugging); no MRCR/RULER/GraphWalks retrieval-at-window pass rate published.

Speed / cost claims: 30% fewer thinking tokens than GPT-5.1-Codex at medium effort on SWE-bench Verified (OpenAI); no independent tokens/second measurement found for this model.

### Normalized scores (1–100)

- **Tool use: 78/100.** Terminal-Bench 2.0 58.1% (compaction-enabled) clears GPT-5.1-Codex's 52.8% and the family τ²-bench 83% is the strongest agentic signal, with demonstrated multi-hour autonomous task completion; capped by the missing GDPval-AA/Tau3/OSWorld evidence and family-level marking of several figures.
- **Reasoning: 68/100.** Scored on family-level AA proxies (GPQA 86.0%, HLE 25.7%, Index ~24, CritPt 5.7%, hallucination 77.2%): above the mid reference on GPQA/HLE but the composite Index sits below its price-class median — no Max-specific independent reasoning data exists to lift it higher.
- **Context window: 80/100.** 400K native (same tier as GPT-5.1-Codex, upper 200K–500K band) plus verified cross-window compaction for multi-hour/project-scale work — the compaction capability is what separates 80 from GPT-5.1-Codex's 78, though the 85+ tier remains out of reach without a larger native window or independent retrieval-at-length numbers.
- **Multimodal: 66/100.** Text + image in, text out — image tier 60–70 — with family-level MMMU-Pro 72.5%; no video/audio input, no non-text output.
- **Coding: 80/100.** SWE-bench Verified 77.9%, SWE-Lancer 79.9% and Terminal-Bench 2.0 58.1% are all clear steps over GPT-5.1-Codex (75) and clear the mid band, but Vibe Code Bench 22.2% is still weak, LiveCodeBench dipped slightly to 83.6%, and no DeepSWE/SciCode verification keeps it below the 90+ frontier tier.
- **Cost efficiency: 76/100.** Paid-only at $1.25/$10 per MTok (no Zen free ID), identical list price to GPT-5.1-Codex; the 30%-fewer-thinking-tokens efficiency gain at medium effort improves effective cost but the methodology prices the tier, not the efficiency claim.
- **Overall Score: 74/100.** Mean of 78/68/80/66/80 = 74.4 → 74. Best fit: the pick for very long-horizon agentic coding (multi-hour autonomous refactors and debugging) at mid-tier price — but it is a coding specialist: use a general frontier model for reasoning/knowledge work and prefer the newer GPT-5.2/5.3-Codex line for current frontier coding.

---

## Signature

- Provided by: **Step 5 Preview (stepfun-ai/step-5-preview)** — 2026-10-19
- Method: public internet research — official OpenAI model docs + the GPT-5.1-Codex-Max launch post (eval appendix) cross-checked against BenchLM (Max-specific Vals AI rows, family-level AA rows flagged) and the OpenCode Zen model list; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Step_5_Preview_v2.md`, using the same headings.
