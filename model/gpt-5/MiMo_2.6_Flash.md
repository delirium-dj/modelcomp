# GPT-5 — findings by MiMo 2.6 Flash

- Source: OpenAI/GPT-5; BenchLM `gpt-5-high` (updated 2026-11-07), Artificial Analysis, OpenRouter, OpenAI launch materials
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08** (user-approved). Previous Signature
> 2026-10-07 (Overall 80). Fresh sources this pass: BenchLM `gpt-5-high` page
> (last updated 2026-11-07, 22 sourced rows) and a re-fetch of the AA model page
> (2026-11-08, now index-N/A for this deprecated entry).
> Changes: Tool use 76→83 (first numeric agentic rows found: τ²-bench 84.8%,
> GDPval-AA 1015 Elo); Coding 83→81 (AA Coding Index 37.8% now known, well under
> the 70% frontier reference); Overall 80→81. Reasoning, Context window,
> Multimodal, Cost efficiency held.

## Model card

- **Name:** GPT-5 — OpenAI's **August 7, 2025** flagship, "our smartest, fastest, most useful model yet." A **unified system**: a fast default model + deeper **GPT-5 thinking** + a real-time **router** choosing between them. Superseded by GPT-5.1 (Nov 2025) and later generations; AA now flags it **deprecated in favor of GPT-5.1** (benchmarked every 18 h instead of every 6) and it still has no public AA Intelligence Index API run.
- **Short description:** Launch record-setter: AIME 2025 **94.6% without tools**, **SWE-bench Verified 74.9%** (fixed n=477 subset), Aider Polyglot 88%, **MMMU 84.2%**; GPT-5 pro took **GPQA 88.4% without tools** (SOTA at launch). Marketed on reliability: ~80% fewer factual errors than o3 when thinking.
- **Provider / access:** OpenAI API (2 providers per AA) + ChatGPT tiers; both Chat Completions and Responses API; OpenRouter `openai/gpt-5` (400K). Proprietary.
- **Release / knowledge:** 2025-08-07; **knowledge cutoff 2024-09-30** (AA/OpenAI) — oldest cutoff around it, flagged. Snapshot deprecated 2026-06-11, API removal scheduled 2026-12-11.
- **IDs:** `openai/gpt-5` (alias `gpt-5`); OpenCode Zen `opencode/gpt-5` — **no Free ID exists on Zen** (`noFreeId`).
- **Context window:** **400,000 total / 128,000 max output** (AA + OpenRouter confirm 400K; BenchLM's `gpt-5-high` page shows 128K — treated as its output/coverage figure, AA/OpenAI 400K wins).
- **Modalities:** text + image + file (PDF) in; **text out**; reasoning (effort levels); tool calls; JSON mode; no audio/video.
- **Pricing (as of 2026-11-08):** OpenAI list **$1.25 in / $10.00 out / $0.125 cached (90% discount) per 1M** (AA re-fetch 2026-11-08 confirms); OpenCode Zen $1.07 / $8.50; AA blended $1.34/1M. Paid only.
- **Architecture:** proprietary undisclosed params, sparse MoE, closed weights.

### Raw benchmarks found

> Fresh rows this pass are marked **(new this pass)**; everything carries a source.

Agent / tool use:

- τ²-bench (AA harness, aggregate): **84.8%** **(new this pass)** <(BenchLM `gpt-5-high`, sourced from AA model benchmarks)>
- GDPval-AA: **1015 Elo** (normalized 20.9%) **(new this pass)** <(same — mid band per methodology, ~900–1200)>
- JobBench: **8.5%** **(new this pass)** <(JobBench paper, arXiv 2605.26329, via BenchLM)>
- Tau2-bench launch-era domains (llm-stats `gpt-5-2025-08-07`): Retail **81.1%**, Telecom **96.7%**, Airline **62.6%**
- Terminal-Bench 2.1 / 4.0: **no verified public score found** (base `gpt-5` absent from TB leaderboards; only later GPT-5.x entries exist)
- OSWorld / AutomationBench / Claw-Eval: **no verified public score found**
- Toolathon / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- AA GPQA Diamond: **85.4%** **(new this pass)** <(BenchLM/AA); launch table 85.7% (codeswap), GPT-5 pro 88.4%>
- AA-HLE: **28.5%** **(new this pass)** <(BenchLM/AA); llm-stats 24.8% at launch>
- AA-LCR: **78.2%** **(new this pass)** <(BenchLM/AA — first numeric LCR for this model; launch-era article only said GPT-5 "topped" AA-LCR)>
- CritPt: **5.7%** **(new this pass)** <(BenchLM/AA — well under frontier)>
- Artificial Analysis Intelligence Index: **23.0** (BenchLM/AA snapshot, below the 26 median; AA page now shows **N/A — no publicly available API** for this deprecated entry); launch-era (2025-08-07) AA reported 68 on its then-current index — rescaled metric, do not mix.
- AA MMLU-Pro **87.1%**, AA MATH-500 **99.4%**, AA AIME 2025 **94.3%**, AA Global-MMLU-Lite **90.7%**, AA-IFBench **73.1%** **(all new this pass)** <(BenchLM/AA)>
- AA-Omniscience Accuracy: **40.3%** (Index −8.7) **(new this pass)** <(BenchLM/AA); the paired "Hallucination Rate 82.2%" row is labeled inconsistently on BenchLM (reads like a non-hallucination rate) — flagged, not used>
- MMLU **92.5%**, AIME 2025 **94.6% no tools** (launch) <(llm-stats / VentureBeat summaries)>

Coding:

- SWE-bench Verified: **74.9%** (n=477, launch, with thinking) <(OpenAI launch)>
- LiveCodeBench: **84.6%** **(AA harness, re-sourced this pass)** <(BenchLM/AA livecodebench leaderboard)>
- AA Coding Index: **37.8%** **(new this pass)** <(BenchLM/AA — far below the 70% frontier reference; replaces last pass's "no verified score found")>
- Vibe Code Bench v1.1: **20.09%** **(new this pass)** <(Vals AI, via BenchLM)>
- Aider Polyglot: **88.0%** (launch); HumanEval **93.4%**; SWE-Lancer IC-Diamond **100.0%** <(llm-stats / launch)>
- SciCode / DeepSWE / SWE-bench Pro / Terminal-Bench: **no verified public score found** (first GPT-5.x entries are GPT-5.1-Codex and later)

Multimodal:

- MMMU: **84.2%** (launch, vision+standard average) <(OpenAI launch)>
- AA-MMMU-Pro: **74.2%** **(new this pass)** <(BenchLM/AA)>
- Design Arena Website: **1183 Elo** **(new this pass)** <(OpenRouter model benchmarks, via BenchLM)>

Long context:

- OpenAI-MRCR (2 needle) 128K: **95.2%**; 256K: **86.8%** <(llm-stats, OpenAI launch chart)>
- GraphWalks BFS <128K **78.3%**; GraphWalks parents <128K **73.3%**; COLLIE **99.0%**; BrowseComp 128K **90.0%** / 256K **88.8%** <(same source)>
- MRCR / RULER at the full 400K window: **no verified public score found** (retrieval degrades past 256K)

### Normalized scores (1–100)

- **Tool use: 83/100.** First numeric agentic evidence this pass: τ²-bench **84.8%** (far above the methodology's Tau mid band of 10–25%) plus GDPval-AA **1015 Elo** (mid band 900–1200) — that lifts it from last pass's claim-only 76; capped below 90 because GDPval sits mid-band and Terminal-Bench, OSWorld/AutomationBench and Claw-Eval still report **no verified public score found**.
- **Reasoning: 81/100 (held).** New rows don't move it: AA-LCR **78.2%** is a genuine positive (first numeric LCR), but it is offset by HLE **28.5%** (below the 40% frontier reference), AA Index **23** (below the 26 median), CritPt **5.7%**, and GPQA 85.4 still short of 90 — the caps that set 81 last pass are unchanged.
- **Context window: 88/100 (held).** 400K/128K confirmed again by AA (2026-11-08); still no retrieval row at the full 400K (MRCR 95.2% at 128K, 86.8% at 256K), so no bump toward the 500K–1M band.
- **Multimodal: 70/100 (held).** Text+image/file in, text out = the "+image in = 60–70" band; new AA-MMMU-Pro **74.2%** and launch MMMU 84.2 confirm the top of that band, but no video/audio in and no non-text out cap it.
- **Coding: 81/100.** Dropped 83→81: SWE-bench Verified 74.9% and LiveCodeBench 84.6% are unchanged and solid, but the AA Coding Index is now a known **37.8%** — far below the 70% frontier reference — and Vibe Code Bench 20.09% adds a second modest modern-coding row; still capped below 90 by missing SciCode, DeepSWE/SWE-bench Pro and Terminal-Bench.
- **Cost efficiency: 75/100** (excluded from Overall, held). AA re-fetch confirms $1.25/$10 with a 90% cache discount: input at the $1.25 anchor but output $10 (2.4× the $4.25 reference), softened by cache and the Zen route ($1.07/$8.50).
- **Overall Score: 81/100.** (83+81+88+70+81)/5 = 80.6 → 81 (half-up, Cost excluded) — the August-2025 record-setter now has its first real agentic numbers (τ² 84.8) but a below-median intelligence index, an old cutoff, and a mediocre modern coding index keep it just under its queue line: a value-tier 400K multimodal workhorse, not a frontier pick.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: second-pass enrichment re-research (public internet research: BenchLM `gpt-5-high` page last updated 2026-11-07, Artificial Analysis model page re-fetched 2026-11-08, plus prior OpenAI launch / llm-stats / OpenRouter rows retained); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [BenchLM — GPT-5 (high) benchmarks](https://benchlm.ai/models/gpt-5-high)
  - [Artificial Analysis — GPT-5 (High)](https://artificialanalysis.ai/models/gpt-5)
  - [OpenAI — Introducing GPT-5](https://openai.com/index/introducing-gpt-5/)
  - [OpenRouter — openai/gpt-5](https://openrouter.ai/openai/gpt-5)
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
