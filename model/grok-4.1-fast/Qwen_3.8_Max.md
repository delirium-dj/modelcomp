# Grok 4.1 Fast — findings by Qwen 3.8 Max

- Source: xAI (`grok-4.1-fast` / `grok-4.1-fast-reasoning`)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.1 Fast
- **Short description:** xAI's **tool-calling speed tier** and successor to Grok 4 Fast — marketed as "our best tool-calling model," pairing a huge **2M-token context** with **rock-bottom $0.20/$0.50 pricing** for high-volume agentic work, plus an Agent Tools API. Ships in **reasoning** (this dataset entry, τ²-bench 93.3%) and **plain/non-reasoning** (τ²-bench 63.7%) builds. **Deprecated** — xAI points to Grok 4.3.
- **Provider / access:** xAI native API `xai/grok-4.1-fast-reasoning` (`grok-4-1-fast` is an xAI alias of the reasoning build). **Not on OpenCode Zen**; **no free tier** (`noFreeId: true`). Proprietary / closed weights.
- **Release / knowledge:** Released **November 19–20, 2025**; knowledge cutoff not published.
- **IDs:** `xai/grok-4.1-fast-reasoning` (reasoning); `xai/grok-4.1-fast` non-reasoning variant also exists.
- **Context window:** **2,000,000** tokens total (AA-confirmed, ~3000 A4 pages — the **largest context in the roster**); **~30,000** max output (modest write allowance relative to the read window).
- **Modalities:** AA independently confirms **text + image in → text out**. Reasoning: yes (reasoning build). No audio/video/file; text-only output.
- **Pricing (as of 2026-10-26):** **$0.20 / $0.50** per 1M in/out (**$0.05 cached**) — rock-bottom, among the cheapest in the roster. AA lists Cost as N/A (not on the AA-tracked API path).
- **Architecture:** Closed weights; parameters undisclosed. Optimized for rapid, high-volume tool calling and long-context agentic sessions rather than deep deliberation.

### Raw benchmarks found

> Independent anchor: Artificial Analysis (both builds, deprecation-flagged). The τ²-bench figures are xAI vendor claims (Nov 2025). Grok 4.1 Fast is deprecated, so AA runs only the default 10k workload and both Index values are **estimates (3 of 4 units)**.

Independent (current, rebased):

- **AA Intelligence Index v4.3.2 — reasoning build: 20 (Estimated), #246/704**, "above average among comparable models" (median **13**); **3 of 4** units.
- **AA Intelligence Index — non-reasoning build: 11 (Estimated), #76/297**, above the non-reasoning median (**7**); 3/4 units. (Two separate builds, two Index values — the reasoning build is the one scored here.)
- **2M context confirmed** by AA for both builds; text + image input; Speed/Cost/Verbosity all **N/A** (AA stopped performance benchmarking on deprecation, and the model isn't on the tracked API path).

Vendor (xAI launch, Nov 2025):

- **τ²-bench (tau2-bench): 93.3% (reasoning build) vs 63.7% (plain)** — xAI states the reasoning build "tops tau2-bench"; τ² is a respected dual-control agentic benchmark (telecom/retail/airline tool use), so 93.3% is a strong *tool-use* signal.
- Positioned as "our best tool-calling model," reasoning and completing "agentic tasks accurately and rapidly," with a new **Agent Tools API**; succeeds Grok 4 Fast by significantly expanding context (to 2M) and tool throughput.

> Provenance: the AA Index values (reasoning 20 / non-reasoning 11, both 3/4-unit estimates) are independent and current; τ²-bench 93.3% is a vendor claim with no independent replication found. This is a **speed/agentic tier**, not a reasoning flagship — the modest AA Index (20, above a median of only 13) reflects that. Deprecated in favor of Grok 4.3.
> Meta verification: accurate — 2M total / ~30K output ✓ (AA), `$0.20/$0.50` + `$0.05 cached` ✓ (xAI), "not on OpenCode Zen" ✓ (AA Cost N/A), text+image ✓ (AA), `noFreeId` ✓, "deprecated in favour of Grok 4.3" ✓ (AA banner), `grok-4-1-fast` alias of reasoning build ✓ (xAI). Enriched from AA: reasoning **Index 20 (est, #246/704, median 13)**, non-reasoning **Index 11 (#76/297, median 7)**, released **Nov 19–20 2025**.

### Normalized scores (1–100)

- **Tool use: 81/100.** The model's entire raison d'être — xAI's "**best tool-calling model**," a vendor **τ²-bench 93.3%** that "tops" the benchmark, an Agent Tools API, and a 2M context that supports very long agentic transcripts. Held below the verified-agentic frontier (88) because the standout τ² figure is **vendor-only** (no independent replication), the model is **deprecated**, and its AA Index (20) is merely above-median rather than frontier.
- **Reasoning: 74/100.** A **speed tier, not a deep reasoner** — the reasoning build deliberates enough to lift τ² from 63.7%→93.3%, but its **AA Index of 20 (estimated)** is modest in absolute terms (well below frontier reasoners at 40–58) and only "above average" against a low median (13). Deprecated and outclassed by Grok 4.3+.
- **Context window: 88/100.** **2M tokens** — the **largest context window in the entire roster** (2× the proven-1M tier at 85–87), AA-confirmed and economically viable at $0.20/$0.50. Tempered by the modest **~30K max-output** allowance (huge read window, small write window), deprecation, and the absence of an independent long-context *retrieval* validation (MRCR/RULER at 512K+).
- **Multimodal: 78/100.** AA confirms **text + image** input; no video, audio, or file/PDF; text-only output. Verified image-only tier.
- **Coding: 76/100.** No dedicated independent coding benchmark (no Vals SWE-bench row; τ² is agentic, not pure coding). It "completes agentic tasks" that include coding-adjacent tool work, but it is not a coding specialist and is deprecated — scored at the no-independent-coding-benchmark floor.
- **Cost efficiency: 95/100.** The standout: **$0.20/$0.50** per 1M ($0.05 cached) for a **2M-context** multimodal tool-calling model is best-in-class value — by far the cheapest large-context option in the roster. (Not on OpenCode Zen, so xAI-native only.) Not counted toward Overall.
- **Overall Score: 79/100.** Mean of Tool 81 + Reasoning 74 + Context 88 + Multimodal 78 + Coding 76 = 397 / 5 = 79.4 → 79. Best fit: a **cheap, huge-context tool-calling workhorse** for high-volume agentic pipelines where throughput and cost dominate and deep reasoning does not — but it is deprecated, so new builds should use Grok 4.3+ or a current agentic leader. **Divergence note:** curated queue 80.5 vs my 79 → **−1.5**. A modest negative gap: the curated score leans on the headline 2M-context + τ²-93.3% "best tool-calling" story, while my read discounts the **vendor-only** τ² figure, the **modest estimated AA Index (20)**, the speed-tier (non-flagship) reasoning, the missing coding verification, and formal **deprecation** — partly offset by crediting the genuinely exceptional 2M context (88) and rock-bottom cost.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-26
- Method: public internet research (Artificial Analysis `grok-4-1-fast` and `grok-4-1-fast-reasoning` pages, both deprecation-flagged with estimated Index values; xAI "Grok 4.1 Fast and Agent Tools API" announcement; llm-stats / mindstudio / medium first-view reviews); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
