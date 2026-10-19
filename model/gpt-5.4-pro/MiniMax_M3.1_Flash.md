# GPT-5.4 Pro — findings by MiniMax M3.1 Flash

- Source: OpenAI (`gpt-5.4-pro`)
- Date: 2026-10-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Pro
- **Short description:** OpenAI's March-2026 high-compute Pro model — "We're also releasing GPT‑5.4 Pro in ChatGPT and the API, for people who want maximum performance on complex tasks" — and a model with a claim to a piece of mathematics history: Epoch AI's FrontierMath notes that "A solution was first elicited by Kevin Barreto and Liam Price, using GPT-5.4 Pro", and a separate report has it finding the solution to Erdős problem #1196 "in about 80 minutes" (a Terence Tao comment is quoted in the thread). It is now **deprecated** ("OpenAI has launched a newer release, GPT-5.5 Pro"). Unlike `gpt-5.5-pro`, OpenAI does **not** describe Pro as a parallel-test-time-compute configuration: it is a distinct model id with its own snapshot, its own price line and a Responses-only endpoint.
- **Provider / access:** OpenAI API `gpt-5.4-pro` (snapshot `gpt-5.4-pro-2026-03-05`) — **Responses API only** ("GPT-5.4 Pro is available in the Responses API only"; Chat Completions, Realtime, Live, Assistants and fine-tuning are all "Not supported"); OpenRouter `openai/gpt-5.4-pro` (+ `:batch`); OpenCode Zen `opencode/gpt-5.4-pro` (`https://opencode.ai/inference/openai/v1/responses`).
- **Release / knowledge:** released **2026-03-05** (launch blog "Introducing GPT-5.4"; AA "was released on March 5, 2026"). Knowledge cutoff **Aug 31, 2025** (AA agrees; OpenRouter's field is `null`).
- **IDs:** `gpt-5.4-pro` (OpenAI API, snapshot `gpt-5.4-pro-2026-03-05`), `openai/gpt-5.4-pro` (+ `:batch`) (OpenRouter), `opencode/gpt-5.4-pro` (Zen). Plain `gpt-5.4` / `gpt-5.4-2026-03-05` is the base model with the same context, output cap and cutoff.
- **Context window:** **1,050,000 tokens**, **128,000 max output** (OpenAI docs; OpenRouter agrees).
- **Modalities:** text and image in, text out. Reasoning effort: **medium (default), high, xhigh** — no `none`/`low` (plain GPT-5.4 offers none/low/medium/high/xhigh). Tools: function_calling, web_search, file_search, tool_search, image_generation, apply_patch, computer_use, mcp. OpenRouter marks reasoning `mandatory: true`.
- **Pricing (as of 2026-10-19, per 1M tokens):** **$30 input / $180 output**, with **no cached-input price and no cache-write price**; >272K input **$60 / $270** ("prompts with more than 272K input tokens are priced at 2x input and 1.5x output for the full session"); Batch & Flex **$15 / $90** (long: $30/$135); **no fast-mode row**; regional (data-residency) endpoints +10%. Plain GPT-5.4 is $2.50/$0.25 cached/$15. OpenCode Zen lists $30.00 in / $180.00 out with a $30.00 "cached read" column that OpenAI does not publish.
- **Architecture:** proprietary, closed weights; parameter count not disclosed.

### Raw benchmarks found

> OpenAI's launch-table numbers are marked "vendor" ("Evals were run with reasoning effort set to xhigh, except where specified otherwise"); Epoch AI's public benchmark CSVs and ARC Prize are independent; the BenchLM ledger relays both.

Agent / tool use:

- BrowseComp: **89.3%** (vendor) — "GPT‑5.4 Pro sets a new state of the art of 89.3%"; 89.3% (via BenchLM)
- GDPval: **82.0%** wins-or-ties (vendor); FinanceAgent v1.1 **61.5%** (vendor); IB modeling (internal) 83.6%
- **No published agentic benchmarks for Pro:** SWE-bench Pro, Terminal-Bench 2.0, OSWorld-Verified, MCP Atlas, Toolathlon, tau2-Telecom, OfficeQA, and every Graphwalks/MRCR long-context row are printed as "-" in OpenAI's own table
- Frontier Science Research **36.7%** (vendor) — "FrontierScience Research 36.7%"; a Meta blog is credited by BenchLM for an IPhO-2025 93.5% row, but that page was not retrievable, so the IPhO figure is **not** treated as a verified Pro score
- Cyber/claude: no cyber rows published for Pro in the launch table

Reasoning / knowledge:

- GPQA Diamond: **94.4%** (vendor) — no independent confirmation found
- HLE: **42.7%** without tools / **58.7%** with tools (vendor) / **44.32% ± 0.0195** (Epoch AI, effort "_unknown")
- ARC-AGI-1 **94.5%** and ARC-AGI-2 **83.3%** (vendor, ARC Prize Verified) — independently confirmed by Epoch's public CSVs: ARC-AGI-1 **0.945** ($7.21 per task) and ARC-AGI-2 **0.8333** ($16.41 per task), model `gpt-5.4-pro-2026-03-05_xhigh`
- CritPt **30.0%** (Epoch CSV, "GPT-5.4 Pro (Xhigh)")
- FrontierMath: **T1–3 50.0% / T4 38.0%** (vendor, April benchmark v1) — Epoch's v2 figures as relayed by BenchLM are **82.456% / 58.537%**, and Epoch's own note reads "A solution was first elicited by Kevin Barreto and Liam Price, using GPT-5.4 Pro" (plain GPT-5.4 at xhigh solved 2/4 samples; Opus 4.6 at max solved 1/4)
- HealthBench: **no verified public score found** for Pro

Coding:

- **OpenAI publishes no coding numbers for GPT-5.4 Pro** (SWE-Bench Pro, Terminal-Bench 2.0, OSWorld-Verified, MMMU-Pro and MCP Atlas are all "-").
- The shared base model GPT-5.4 provides the nearest capability proxy: Terminal-Bench 2.0 **81.8%** (Epoch CSV, ForgeCode agent) and OpenAI's own plain-GPT-5.4 figure of 75.1% on a different harness; SWE-bench Pro 58.6% for plain GPT-5.4; the plain model's AA index 39 (estimated #63/217), 106.4 t/s, TTFT 132.90s
- No DeepSWE, LiveCodeBench, FrontierCode, CursorBench or Vibe Code Bench figure for Pro

Long context:

- **No long-context number is published for Pro** (all Graphwalks/MRCR rows are "-"). 1,050,000 tokens with a 128,000 max output.
- Only qualitative long-context signal: the Erdős #1196 solution (reported by the-decoder, 2026-04-15) and Simon Willison's pelican run — "took 4m45s and cost me $1.55" — which is a cost datapoint rather than a retrieval measurement.

### Normalized scores (1–100)

> Derived using the rubric in `../../model-comparison.md` (v1 methodology, v4 Overall rule — cost excluded). Because OpenAI publishes almost no capability numbers for the Pro configuration, the scores lean on the shared-weights base model where Pro has no number of its own, and each such line says so.

- **Tool use: 76/100.** BrowseComp **89.3%** is a real frontier-tier agentic-web result, and FinanceAgent v1.1 61.5% plus GDPval 82.0% show genuine agentic competence. Capped by the complete absence of published agentic benchmarks for this configuration — no Terminal-Bench, no MCP Atlas, no Toolathlon, no tau-bench, no OSWorld, no AutomationBench — and by the 89.3% BrowseComp result being a single vendor number with no independent replication.
- **Reasoning: 88/100.** GPQA Diamond 94.4% (vendor), HLE 42.7% / 58.7% (vendor) / 44.32% (Epoch), ARC-AGI-1 **94.5%** and ARC-AGI-2 **83.3%** (independently confirmed by Epoch's CSVs at $7.21 and $16.41 per task), CritPt 30.0%, FrontierMath v2 82.456% / 58.537% (Epoch, via BenchLM) and FrontierMath legacy 50.0%, Frontier Science Research 36.7%, plus the FrontierMath open-problem solve. Held below 90 because the AA Intelligence Index is **not published** for this model (the base GPT-5.4 sits at 39), because HLE is in the low-to-mid 40s without tools, and because Frontier Science Research at 36.7% shows the weakness in scientific-research workflows.
- **Context window: 95/100.** 1,050,000 tokens with a 128,000 max output — the rubric's top tier (≥1M = 95–100), clearing the 64K output line. Not 100: **no retrieval measurement exists** for this configuration (every MRCR and Graphwalks row is "-"), so the rubric's "≥98% retrieval at 512K+" condition is undemonstrated, and OpenAI's own >272K price doubling ($60/$270) is a practical signal that the long window is priced, not proven.
- **Multimodal: 68/100.** Text and image in, text out, on the same weights as GPT-5.4 (image input supported, `image_input` and `image_generation` in the tool list). The rubric's "+image in = 60–70" band applies, but **MMMU-Pro is printed as "-" for Pro** and no vision benchmark is published for this configuration, so the score sits in the lower half of the band rather than at its top.
- **Coding: 74/100.** "Pro" changes compute, not weights, so the base GPT-5.4 profile is the closest evidence: Terminal-Bench 2.0 81.8% (Epoch, ForgeCode agent) / 75.1% (OpenAI, other harness), SWE-bench Pro 58.6%, AA index 39. Capped by **no coding number at all being published for Pro**, by SWE-bench Pro 58.6% sitting well under the rubric's 74% DeepSWE-class bar, and by the absence of DeepSWE, LiveCodeBench, CursorBench and Vibe Code Bench rows.
- **Cost efficiency: 10/100.** The evaluated route — OpenCode Zen `opencode/gpt-5.4-pro` — is billed at **$30.00 in / $180.00 out** per 1M with **no cached-input discount** (Zen's "$30.00 cached read" mirrors the input price, since OpenAI publishes no cache rate), >272K at $60/$270, Batch at $15/$90 and no fast mode. The rubric's highest anchor is "~$10/$50 = ~30"; this is 3.6× that output price with caching disabled, so it scores at the floor — the same floor as `gpt-5.5-pro`, and the reason this configuration exists only for a handful of very hard questions.
- **Overall Score: 80.2/100.** (76 + 88 + 95 + 68 + 74) / 5 = 80.2 — best-fit: a **March-2026 configuration**, not a model family, whose only real justification is the frontier-moment capability it buys — the FrontierMath open-problem solve, ARC-AGI-2 83.3% at $16.41 per task, BrowseComp 89.3% — at a price of $30/$180 with no cache discount; for sustained work it is ~15× the cost of plain GPT-5.4 for a comparable answer.

### Conflicting evidence (vendor vs independent) and how it was resolved

1. **HLE — 42.7% (vendor, no tools) vs 44.32% ± 0.0195 (Epoch, effort "_unknown").** A small gap; the vendor figure is used with the Epoch reading listed.
2. **Chat Completions — OpenAI says "Not supported"** (Responses only) while OpenRouter's page documents calling it over `/api/v1/chat/completions`. A gateway-compatibility difference, recorded.
3. **Batch — OpenAI's model page lists Batch as "Not supported"** while its pricing page publishes Batch rates ($15/$90) and OpenRouter exposes a `:batch` id. Recorded as a documentation inconsistency; the Batch price is used only as context.
4. **Knowledge cutoff — OpenAI Aug 31 2025 vs OpenRouter `knowledge_cutoff: null`.** The vendor value is used.
5. **Cached input — OpenAI publishes none for Pro; OpenCode Zen lists a $30.00 cached-read column.** Zen is mirroring the input price as a placeholder; the cost score uses OpenAI's "no cache tier" as the fact.
6. **FrontierMath — 50.0/38.0 (vendor, April benchmark v1) vs 82.456/58.537 (Epoch v2, June revision, via BenchLM).** Different benchmark versions; the v2 figures are used because v2 is the current benchmark, with the April figures kept for traceability.
7. **IPhO 2025 93.5%** is attributed by BenchLM to a **Meta AI blog** (`ai.meta.com/blog/introducing-muse-spark-msl/`, which returned HTTP 400) and is not published by OpenAI for Pro — treated as **not verified** and excluded.
8. **AA publishes no index, speed, cost-per-task or verbosity for this model** ("No publicly available API"; "AA-PersonalityBench results are not available"), and OpenRouter carries no AA fields for Pro either — an evidence-thinness caveat, not a capability one, and the reason the tool-use and coding scores lean on the base model.
9. **"Pro" semantics differ from GPT-5.5 Pro.** For `gpt-5.5-pro` OpenAI says explicitly "the same underlying model using a setting that makes use of parallel test time compute"; for `gpt-5.4-pro` no such statement was found, and it has its own snapshot, its own price line and a Responses-only endpoint. Both are scored as their own folders, with the difference stated rather than assumed.
10. **Math-solve anecdote.** the-decoder reports the Erdős #1196 solve "in about 80 minutes" with a Terence Tao comment, and Epoch confirms the FrontierMath open problem was "first elicited … using GPT-5.4 Pro" — high-quality independent corroboration of capability, but it is not a benchmark score and is not scored as one.

### Notes on identity

- `gpt-5.4-pro` is a distinct model id with its own snapshot (`gpt-5.4-pro-2026-03-05`), its own price line ($30/$180, 12× plain GPT-5.4) and a Responses-only endpoint. Whether it is a re-served configuration or a distinct checkpoint is **not stated by OpenAI**; unlike `gpt-5.5-pro`, no "parallel test-time compute" wording was found, so this report does not claim one.
- Effort levels (medium/high/xhigh) are parameters; the plain GPT-5.4 model additionally offers none/low.
- The AA entry is a "(Xhigh)" variant, and the epoch CSV labels the verified run `gpt-5.4-pro-2026-03-05_xhigh` — the two agree on the effort.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-19
- Method: public internet research — OpenAI first-party model page, pricing page, the "Introducing GPT-5.4" launch blog and the frontier-math work it enabled; independent trackers Epoch AI's public benchmark CSVs (ARC-AGI-1/2, HLE, CritPt) and the FrontierMath open-problem attribution, ARC Prize, the BenchLM evidence ledger, Simon Willison's launch notes, the-decoder's Erdős #1196 report with the Hacker News thread, and OpenRouter / OpenCode Zen catalogs. Vendor-vs-independent conflicts — including OpenAI's own Batch and Chat-Completions inconsistencies, the two FrontierMath benchmark versions and the unsourced IPhO row — are listed explicitly rather than averaged. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.4_Pro.md`, using the same headings.
