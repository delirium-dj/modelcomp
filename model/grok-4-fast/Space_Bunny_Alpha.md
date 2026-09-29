# Grok 4 Fast — findings by Space Bunny Alpha

- Source: SpaceXAI/xAI (`xai/grok-4-fast-reasoning` / `xai/grok-4-fast-non-reasoning`)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **What changed on this re-validation (2026-09-25 → 2026-09-29): this entry is now a
> retired model, which the previous revision did not record at all.** xAI retired
> `grok-4-fast-reasoning` and `grok-4-fast-non-reasoning` from the API on **2026-05-15**
> 12:00 PT. Both slugs still resolve but now **silently redirect to `grok-4.3`**, and
> callers are billed at **Grok 4.3 pricing ($1.25 in / $2.50 out per 1M)**, not the
> $0.20/$0.50 this file previously scored. Artificial Analysis carries the page under a
> **deprecated** banner ("only continue performance benchmarking for the default 10k
> input token workload") and points to a newer model. Oracle's on-demand catalogue goes
> further and records a hard **retirement date of 2026-08-15**, after which there is no
> access at all. Everything below is therefore a **historical** record of a model that
> cannot be bought or benchmarked today; the benchmark rows are xAI's original
> 2025-09-19 launch table and are unchanged.

## Model card

- **Name:** Grok 4 Fast (**retired**)
- **Short description:** SpaceXAI's September 2025 cost-efficiency breakthrough — a single model that reached roughly Grok 4 benchmark quality while using 40% fewer thinking tokens and cutting the price of frontier-level performance by 98%, with a 2M-token window and native web/X search. It was the price-to-intelligence benchmark-setter of its generation and the first xAI model opened to free users without restriction. It is now a historical entry: retired from the xAI API on 2026-05-15, redirected to `grok-4.3`, and fully retired on cloud marketplaces by 2026-08-15.
- **Provider / access:** **No first-party route.** xAI API slugs `grok-4-fast-reasoning` / `grok-4-fast-non-reasoning` still resolve but are served by `grok-4.3` (reasoning slug → `grok-4.3` with `low` effort; non-reasoning slug → `grok-4.3` with `none` effort) and billed at Grok 4.3 rates. At launch it was also on OpenRouter and the Vercel AI Gateway, and free in grok.com / X / the mobile apps. **No OpenCode Zen Free ID exists.**
- **Release / knowledge:** announced 2025-09-19 (xAI news index; Benchable dates the endpoint 2025-09-18). Knowledge cutoff not published.
- **IDs:** `grok-4-fast-reasoning` and `grok-4-fast-non-reasoning` — two SKUs from one weight set; the search-tuned variant was code-named **menlo** and appeared in LMArena as `grok-4-fast-search`.
- **Context window:** **2,000,000 tokens** for both SKUs, stated directly in the launch post and confirmed by the endpoint registry.
- **Modalities:** text in, text out is the launch baseline; the endpoint registry additionally listed **image and file input**. Notably, xAI's own post listed "enhanced multimodal capabilities" as *future* work, so image handling was available but not yet a headline integration. Reasoning is **not** a separate model — one unified architecture handles long chain-of-thought and instant non-reasoning responses, steered by system prompt. Function calling / tool use yes, with tool-use reinforcement learning end-to-end; code execution and web/X search are first-class tools.
- **Pricing (historical — at launch, 2025-09-19):** under 128K prompt tokens — $0.20 / 1M input, $0.50 / 1M output; at or above 128K tokens — $0.40 / 1M input, $1.00 / 1M output; cached input $0.05 / 1M. Free on the consumer products. **Effective price today: $1.25 / 1M input and $2.50 / 1M output**, because every surviving slug is Grok 4.3 — 6.25x the original input rate and 5x the original output rate. Artificial Analysis continues to render the original historical rates and flags the pages as historical-only.
- **Architecture:** proprietary; parameter count not disclosed. Unifies reasoning and non-reasoning modes in a single weight set to cut end-to-end latency and token cost.

### Raw benchmarks found

> All figures below are xAI's own launch table (2025-09-19, pass@1), reproduced with the comparison columns it published. Harness = xAI's internal evaluation. **No new independent measurement is possible**: the model is not served under its own weights anywhere, so these are the last and only numbers that will ever exist for it. The price-to-intelligence claim was independently verified by Artificial Analysis in 2025; the price itself no longer exists.

Agent / tool use:

- BrowseComp: **44.9%** (Grok 4 43.0%, Grok 3 non-reasoning —)
- BrowseComp (zh): **51.2%** (Grok 4 45.0%, Grok 3 10.8%)
- Reka Research Eval: **66.0%** (Grok 4 58.0%, Grok 3 37.0%)
- X Bench Deepsearch (zh): **74.0%** (Grok 4 66.0%, Grok 3 27.0%)
- X Browse: **58.0%** (Grok 4 53.2%, Grok 3 20.8%) — xAI's internal multihop search/browsing benchmark
- SimpleQA: **95.0%** (Grok 4 94.0%, Grok 3 82.0%)
- LMArena **Search Arena**: **1163 Elo, #1** for `grok-4-fast-search` (codename menlo) — a 17-point margin over `o3-search`, after private battle-testing on the Search arena
- Artificial Analysis Intelligence Index (v4.3.2, 10 evals): **no verified public score found** for Grok 4 Fast itself. AA verified the price-to-intelligence ratio qualitatively at launch; it now carries the model as deprecated with historical-only results.
- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench / GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **85.7%** (Grok 4 87.5%, GPT-5 High 85.7%, GPT-5 Mini High 82.3%, Grok 3 Mini High 79.0%)
- AIME 2025 (no tools): **92.0%** (Grok 4 91.7%, GPT-5 High 94.6%, GPT-5 Mini High 91.1%, Grok 3 Mini High 79.0%)
- HMMT 2025 (no tools): **93.3%** (Grok 4 90.0%, GPT-5 High 93.3%, GPT-5 Mini High 87.8%, Grok 3 Mini High 74.0%)
- HLE (no tools): **20.0%** (Grok 4 25.4%, GPT-5 High 24.8%, GPT-5 Mini High 16.7%, Grok 3 Mini High 11.0%)
- CritPt / LCR / MRCR / Omniscience: no verified public score found

Coding:

- LiveCodeBench (Jan–May 2025 window): **80.0%** (Grok 4 79.0%, GPT-5 High 86.8%, GPT-5 Mini High 77.4%, Grok 3 Mini High 70.0%)
- SWE-bench Verified / SWE-Pro / DeepSWE / SciCode / Vibe Code Bench: no verified public score found

Long context:

- No long-context retrieval benchmark reported (no MRCR / RULER / GraphWalks row). The 2M window is stated in the launch post; no measured retrieval figure at 512K+ is published, though the 40%-fewer-thinking-tokens result is direct evidence of unusually efficient use of a long context.

Succession (new):

- `grok-4-fast-reasoning` → `grok-4.3` with `low` reasoning effort
- `grok-4-fast-non-reasoning` → `grok-4.3` with `none` reasoning effort
- xAI's named recommendation: migrate to `grok-4.3` (1M context, four reasoning-effort levels, $1.25/$2.50). Artificial Analysis separately recommends **Grok 4.3 (non-reasoning)** over the deprecated Grok 4 Fast non-reasoning route.
- Reference point for the successor: **Grok 4.3 scores 53 on the Artificial Analysis Intelligence Index**, at $395 to run the full suite (~20% cheaper than Grok 4.20 0309 v2) on 37.5% lower input and 58.3% lower output pricing.

Sources consulted on this re-validation: [xAI May 15, 2026 Model Retirement](https://docs.x.ai/developers/migration/may-15-retirement), [Artificial Analysis Grok 4 Fast (Non-reasoning) providers](https://artificialanalysis.ai/models/grok-4-fast/providers), [xAI launches Grok 4.3 (Artificial Analysis)](https://artificialanalysis.ai/articles/xai-launches-grok-4-3-with-improved-agentic-performance-and-lower-pricing), Oracle Generative AI — xAI Grok 4 Fast retirement notice (2026-08-15), all accessed 2026-09-29.

### Normalized scores (1–100)

> Derived from the raw numbers above using the methodology in `model-comparison.md`. Cost efficiency is scored but excluded from the Overall. The five quality dimensions are scored on the model's **measured capabilities**, which are fixed history; only Cost efficiency moves, because the price a caller actually pays today is Grok 4.3's.

- **Tool use: 88/100.** Unchanged. A #1 LMArena Search Arena finish at 1163 Elo (+17 over o3-search) plus BrowseComp 44.9%, BrowseComp-zh 51.2%, Reka Research Eval 66.0% and X Bench Deepsearch 74.0% measure exactly the retrieve-decide-act loop this dimension rewards, and the model was trained end-to-end with tool-use RL; capped at 88 because the evidence is entirely about *search and browsing* — no Terminal-Bench, τ-bench, Toolathon, MCP-Atlas or Claw-Eval number was ever published.
- **Reasoning: 82/100.** Unchanged. AIME 2025 at 92.0% and HMMT 2025 at 93.3% are near-frontier and GPQA Diamond 85.7% matches GPT-5 High; held at 82 rather than higher because HLE (no tools) is only 20.0% and no Artificial Analysis index, CritPt or LCR figure was ever published for this model.
- **Context window: 96/100.** Unchanged as a spec. The 2,000,000-token window is stated in the launch post and clears the ≥1M tier that maps to 95–100; held at 96 because no retrieval-at-length number (≥98% at 512K+) is published. **Caveat added:** the redirect target `grok-4.3` advertises only a **1M** window, so a caller using the surviving slug no longer gets the 2M context this score describes.
- **Multimodal: 66/100.** Unchanged. The endpoint registry listed image and file input with text-only output, the "+image input" 60–70 band; scored a notch low because xAI's post listed "enhanced multimodal capabilities" as future work.
- **Coding: 72/100.** Unchanged. LiveCodeBench 80.0% (Jan–May 2025) is a real above-mid code-generation result, essentially matching Grok 4's 79.0%; capped at 72 because no SWE-bench Verified, DeepSWE or SciCode figure exists and the model was a search-and-efficiency design rather than a coding specialist.
- **Cost efficiency: 5/100.** **Changed from 99 — this is the substantive edit.** At launch this was the cheapest credible frontier-adjacent route ($0.20/$0.50, cached $0.05), which is why the previous revision scored it 99. That price no longer exists. The model was retired on 2026-05-15 and every surviving slug is served by **grok-4.3 at $1.25 in / $2.50 out per 1M** — 6.25x and 5x the original rates — with a 1M window instead of 2M. Grok 4.3 is no longer on the intelligence-vs-cost Pareto frontier. You cannot buy this model at its own price, and you cannot buy it at all on marketplaces that have completed the 2026-08-15 retirement.
- **Overall Score: 80.8/100.** (88 + 82 + 96 + 66 + 72) / 5 = 404 / 5 = **80.8** — unchanged from the previous revision, because Cost efficiency is excluded from the Overall by the methodology. **The number is now historical, not actionable.** Any workload that would have used Grok 4 Fast should migrate to `grok-4.3`, which scores *higher* (53 on the AA Intelligence Index vs no published score at all for Grok 4 Fast) at 5–6x the price. Read this entry as a record of what a 98% price cut bought in September 2025, not as a recommendation.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: public internet research (xAI's "Grok 4 Fast" launch post with its full pass@1 benchmark tables, the xAI news index, the Benchable endpoint registry, xAI's May 15 2026 retirement notice, Artificial Analysis deprecated-model pages, and Oracle's retirement-date catalogue). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Grok_4.3.md`, using the same headings.
