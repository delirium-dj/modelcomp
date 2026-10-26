# Grok 4 Fast — findings by Qwen 3.8 Max

- Source: xAI (`grok-4-fast`)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's **2M-context volume engine** — a Fast reasoning model for high-volume search / agent sweeps at roughly **1/15 the cost of flagship Grok 4** ($0.20/$0.50), with strong launch-era math (**AIME 92%**). The **predecessor of Grok 4.1 Fast** and now **doubly-deprecated**: xAI points to Grok 4.1 Fast, which is itself deprecated for Grok 4.3.
- **Provider / access:** xAI native API (`opencode/grok-4-fast` in this dataset). **No free tier** (`noFreeId: true`). Proprietary / closed weights.
- **Release / knowledge:** Released **September 2025**; knowledge cutoff not published.
- **IDs:** `opencode/grok-4-fast`. Ships in **reasoning** (this entry, "Fast reasoning model") and **non-reasoning** builds.
- **Context window:** **2,000,000** tokens total (AA-confirmed, ~3000 A4 pages — largest tier); **30,000** max output (modest write allowance vs the huge read window).
- **Modalities:** AA independently confirms **text + image in → text out**. Reasoning yes (reasoning build). No video/audio/file; text-only output.
- **Pricing (as of 2026-10-26):** **$0.20 / $0.50** per 1M in/out (**$0.05 cached** input) — rock-bottom; AA calls input "moderately priced" (median $0.24) and output "competitively priced" (median $0.71–0.80).
- **Architecture:** Closed weights; parameters undisclosed. Speed-optimized for high-throughput search-heavy agentic work rather than deep deliberation.

### Raw benchmarks found

> Independent anchor: Artificial Analysis (both builds, deprecation-flagged). AIME 92% is an xAI vendor claim (Sept 2025). Grok 4 Fast is deprecated, so AA runs only the default 10k workload and both Index values are **estimates (3 of 4 units)**. No Vals AI SWE-bench row found.

Independent (current, rebased):

- **AA Intelligence Index v4.3.2 — reasoning build: 18 (Estimated), #64/173**, "above average among comparable models" (median **13**); **3 of 4** units. Slightly **below its successor Grok 4.1 Fast (20)** — consistent with being the older predecessor.
- **AA Intelligence Index — non-reasoning build: 11 (Estimated), #23/71**, above the non-reasoning median (**9**); 3/4 units.
- **2M context confirmed** by AA for both builds; text + image input. AA on the reasoning build: "above average in intelligence, but **somewhat expensive when comparing to other models of similar price**" (i.e. weak intelligence-per-dollar within its band). Speed/Cost-per-task/Verbosity all **N/A** (deprecated; performance benchmarking discontinued).

Vendor (xAI launch, Sept 2025):

- **AIME 92%** (math — strong launch-era result, in the same class as Grok 4's 91.7%).
- Positioned as the "**2M-context volume engine**": Fast reasoning for search-heavy agent sweeps at ~1/15 flagship Grok cost.

> Provenance: the AA Index values (reasoning 18 / non-reasoning 11, both 3/4-unit estimates) are independent and current; AIME 92% is a vendor claim with no independent replication found. This is a **speed/volume tier**, not a reasoning flagship — the modest AA Index (18, above a median of 13) reflects that, and it is the *predecessor* of the (also-deprecated) Grok 4.1 Fast.
> Meta verification: accurate — 2M total / 30K output ✓ (AA), `$0.20/$0.50` + `$0.05 cached` ✓ (AA), text+image ✓ (AA), `noFreeId` ✓, "deprecated for 4.1 Fast" ✓ (AA banner), AIME 92% ✓ (xAI). Enriched from AA: reasoning **Index 18 (est, #64/173, median 13)**, non-reasoning **Index 11 (#23/71, median 9)**, "~1/15 Grok 4 cost" ✓, released **Sept 2025**.

### Normalized scores (1–100)

- **Tool use: 78/100.** Built for "high-volume search / agent sweeps" with a 2M context that supports very long agentic transcripts — a genuine high-throughput tool-use orientation. Held below its successor Grok 4.1 Fast (81) because it lacks that model's headline **τ²-bench 93.3%** "best tool-calling" claim, has no independent tool-use benchmark here, is deprecated, and its AA Index (18) is only above-median.
- **Reasoning: 74/100.** A **speed/volume tier, not a deep reasoner** — vendor **AIME 92%** shows real math capability, but the **AA Index of 18 (estimated)** is modest in absolute terms (well below frontier reasoners at 40–58), only "above average" against a low median (13), and slightly below the successor's 20. Deprecated and outclassed by Grok 4.1 Fast → 4.3.
- **Context window: 88/100.** **2M tokens** — the largest context tier in the roster (2× the proven-1M band at 85–87), AA-confirmed and economically viable at $0.20/$0.50. Tempered by the modest **30K max-output** allowance (huge read, small write), deprecation, and no independent long-context *retrieval* validation (MRCR/RULER at 512K+). Same tier as Grok 4.1 Fast.
- **Multimodal: 78/100.** AA confirms **text + image** input; no video, audio, or file/PDF; text-only output. Verified image-only tier.
- **Coding: 76/100.** No dedicated independent coding benchmark (no Vals SWE-bench row); it is a search/agent volume tier, not a coding specialist, and is deprecated — scored at the no-independent-coding-benchmark floor.
- **Cost efficiency: 92/100.** **$0.20/$0.50** ($0.05 cached) for a **2M-context** model is rock-bottom absolute pricing (~1/15 flagship Grok). Docked below its successor (95) because AA explicitly flags it "**somewhat expensive … comparing to other models of similar price**" — i.e. weaker intelligence-per-dollar (Index 18 vs 20) — and it is deprecated. Not counted toward Overall.
- **Overall Score: 79/100.** Mean of Tool 78 + Reasoning 74 + Context 88 + Multimodal 78 + Coding 76 = 394 / 5 = 78.8 → 79. Best fit: a **cheap, huge-context, high-volume search/agent engine** — historically useful for cost-sensitive long-context sweeps, but **doubly-deprecated** (superseded by Grok 4.1 Fast, then Grok 4.3), so new builds should use the successor or a current agentic leader. **Divergence note:** curated queue 80 vs my 79 → **−1.0** (essentially aligned, and effectively tied with its successor Grok 4.1 Fast at 79). It occupies the same 2M/$0.20–0.50/text+image niche; I score it marginally weaker than 4.1 Fast (AA Index 18 vs 20, no τ²-93.3% headline) but the shared exceptional 2M context (88) and rock-bottom cost keep the quality-only mean at 79. The gap to the queue reflects the vendor-AIME-led headline vs my discount for the modest estimated Index, unverified coding, and deprecation.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-26
- Method: public internet research (Artificial Analysis `grok-4-fast` and `grok-4-fast-reasoning` pages, both deprecation-flagged with estimated Index values; xAI "Grok 4 Fast" launch announcement for AIME 92% and 2M-context positioning); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
