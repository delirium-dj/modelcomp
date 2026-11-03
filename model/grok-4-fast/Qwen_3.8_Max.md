# Grok 4 Fast — findings by Qwen 3.8 Max

- Source: xAI (`grok-4-fast`)
- Date: 2026-10-26 (UTC)
- Re-researched: 2026-11-03 (UTC) — original draft preserved below; independent sources added.
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict (2026-11-03):** **Partial premise correction — Coding 76→77; Overall stays 79 (395/5=79.0).** AA `grok-4-fast-reasoning` **DEPRECATED** (successor Grok 4.1 Fast, matches draft), Intelligence **N/A** (v5.0 not run; v4.3.2 18 est. 3/4 superseded by absence), Speed N/A, Cost $0.20/$0.50 ✓, 2M ✓, text+image ✓. **BenchLM 42.54 / #133/1004, 15/724:** the draft’s Coding 76 cap was “no dedicated independent coding benchmark (no Vals SWE-bench row) → scored at the no-independent-coding-benchmark floor”. NEW: **AA LiveCodeBench 83.2% (independent)** falsifies that absence premise → lift +1 step. Counter: **Vals Vibe Code 0.00%** — catastrophic agentic coding; prevents the full +2 (unlike grok-4.1-fast at 76→78 where Vibe was 1.20%). **τ²-bench 65.8% (AA-sourced)** falsifies the draft’s “no independent tool-use benchmark” cap BUT at LOW-MID value — confirms 78, doesn’t lift. AA GPQA 84.7, MMLU-Pro 85.0, **AA AIME 89.7%** (independently confirms vendor “92%” at slightly lower); HLE 19.1, CritPt 2.9, **Omniscience halluc 68.3%** — all confirm the speed/volume tier ceiling. Tool 78 / Reasoning 74 / Context 88 / Multimodal 78 HOLD.
>
> **Curated reference updated:** queue L98 = **80.3** (draft cited 80 — stale). Gap moves from **−1.0** to **−1.3** (my 79 vs curated 80.3).

## Model card

- **Name:** Grok 4 Fast
- **Short description:** xAI's **2M-context volume engine** — a Fast reasoning model for high-volume search / agent sweeps at roughly **1/15 the cost of flagship Grok 4** ($0.20/$0.50), with strong launch-era math (**AIME 92%**). The **predecessor of Grok 4.1 Fast** and now **doubly-deprecated**: xAI points to Grok 4.1 Fast, which is itself deprecated for Grok 4.3. [2026-11-03 re-research: **partial premise correction; Coding 76→77, Overall stays 79.** AA composite N/A (deprecated). BenchLM: **AA LCB 83.2% (independent)** falsifies “no independent coding benchmark” floor → +1; Vibe Code 0.00% bounds lift. τ² 65.8% AA-sourced exists but LOW → confirms Tool 78. AA AIME 89.7% confirms vendor “92%”. Curated 80→**80.3**, gap −1.3.]
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

> **Independent (added 2026-11-03, Artificial Analysis + BenchLM):** **Partial premise correction for Coding; all others confirmed HOLD.** AA `grok-4-fast-reasoning` **DEPRECATED** (successor Grok 4.1 Fast, matches draft), Intelligence **N/A** (v5.0 not run), Speed **N/A**, Cost $0.20/$0.50, 2M, text+image→text — all confirmed. BenchLM **42.54 / #133/1004, 15/724**: **τ²-bench 65.8% (AA-sourced, independent)** — draft said “lacks τ²-bench, no independent tool-use benchmark”; now τ² EXISTS independently at 65.8% — well below successor’s 93.3%. This falsifies the “no independent benchmark” premise but the LOW VALUE confirms the 78 tool ceiling (below successor by design). **AA LiveCodeBench 83.2% (independent)** — draft said “no dedicated independent coding benchmark → scored at the no-independent-coding-bench floor”; falsified. Vals **Vibe Code 0.00%** (catastrophic agentic-coding; prevents full +2 lift). AA GPQA 84.7, MMLU-Pro 85.0, **AA AIME 89.7%** (independently confirms vendor 92% at −2.3 gap — elite math validated). HLE 19.1 (very low), CritPt 2.9 (very low), AA-LCR 73.7, **Omniscience hallucination 68.3%** (extremely high; index −29.9, accuracy 22.8). AA-MMMU-Pro 61.8%. IFBench 50.5. Coding 76→77 (LCB removes floor by one step; Vibe 0.0% bounds lift); all other dimensions HOLD.

### Normalized scores (1–100)

- **Tool use: 78/100.** Built for "high-volume search / agent sweeps" with a 2M context that supports very long agentic transcripts — a genuine high-throughput tool-use orientation. Held below its successor Grok 4.1 Fast (81) because it lacks that model's headline **τ²-bench 93.3%** "best tool-calling" claim, has no independent tool-use benchmark here, is deprecated, and its AA Index (18) is only above-median. [2026-11-03: **HOLD at 78** — **τ²-bench 65.8% (AA-sourced)** exists independently now, falsifying the “no independent tool-use benchmark” premise. But 65.8% is LOW-MID (below successor’s 93.3 at 82, and well below frontier 92+); confirms the 78 mid-band rather than lifting. Deprecated status unchanged.]
- **Reasoning: 74/100.** A **speed/volume tier, not a deep reasoner** — vendor **AIME 92%** shows real math capability, but the **AA Index of 18 (estimated)** is modest in absolute terms (well below frontier reasoners at 40–58), only "above average" against a low median (13), and slightly below the successor's 20. Deprecated and outclassed by Grok 4.1 Fast → 4.3. [2026-11-03: **HOLD at 74** — AA composite N/A (deprecated); v4.3.2 18 confirmed by BenchLM’s AA Index 17.9. **AA AIME 89.7% independently confirms vendor “92%”** — elite math validated. But HLE 19.1 / CritPt 2.9 / halluc 68.3% confirm speed-tier ceiling. GPQA 84.7 / MMLU-Pro 85.0 mid-upper breadth. Same ceiling.]
- **Context window: 88/100.** **2M tokens** — the largest context tier in the roster (2× the proven-1M band at 85–87), AA-confirmed and economically viable at $0.20/$0.50. Tempered by the modest **30K max-output** allowance (huge read, small write), deprecation, and no independent long-context *retrieval* validation (MRCR/RULER at 512K+). Same tier as Grok 4.1 Fast. [2026-11-03: **HOLD at 88** — AA confirms 2M / 30K output; no change. BenchLM AA-LCR 73.7 independent long-context reasoning: solid but doesn’t push into higher band. Deprecated.]
- **Multimodal: 78/100.** AA confirms **text + image** input; no video, audio, or file/PDF; text-only output. Verified image-only tier. [2026-11-03: **HOLD at 78** — AA confirms text+image only. **AA-MMMU-Pro 61.8%** independent — low-mid image reasoning, confirms the 78 tier. No new modality.]
- **Coding: 77/100.** No dedicated independent coding benchmark (no Vals SWE-bench row); it is a search/agent volume tier, not a coding specialist, and is deprecated — scored at the no-independent-coding-benchmark floor. [2026-11-03: **lifted 76→77** — draft’s cap “no dedicated independent coding benchmark → scored at the no-independent-coding-bench floor” FALSIFIED: **AA LiveCodeBench 83.2% (independent)** provides a strong algorithmic-coding signal above the floor. Lift bounded to +1 (not +2 like grok-4.1-fast): **Vals Vibe Code 0.00%** is a catastrophic agentic-coding failure (worse than successor’s 1.20% at 78), capping the net Coding at 77 between the strong-algorithmic/zero-agentic profile. Deprecated.]
- **Cost efficiency: 92/100.** **$0.20/$0.50** ($0.05 cached) for a **2M-context** model is rock-bottom absolute pricing (~1/15 flagship Grok). Docked below its successor (95) because AA explicitly flags it "**somewhat expensive … comparing to other models of similar price**" — i.e. weaker intelligence-per-dollar (Index 18 vs 20) — and it is deprecated. Not counted toward Overall. [2026-11-03: **HOLD at 92 (excluded)** — AA confirms $0.20/$0.50; Speed/Intelligence/Verbosity all N/A (deprecated); blended “moderately priced” input, “competitively priced” output. Rock-bottom unchanged.]
- **Overall Score: 79/100.** Mean of Tool 78 + Reasoning 74 + Context 88 + Multimodal 78 + Coding 77 = 395 / 5 = 79.0 → 79. Best fit: a **cheap, huge-context, high-volume search/agent engine** — historically useful for cost-sensitive long-context sweeps, but **doubly-deprecated** (superseded by Grok 4.1 Fast, then Grok 4.3), so new builds should use the successor or a current agentic leader. **Divergence note:** curated queue 80 vs my 79 → **−1.0** (essentially aligned, and effectively tied with its successor Grok 4.1 Fast at 79). It occupies the same 2M/$0.20–0.50/text+image niche; I score it marginally weaker than 4.1 Fast (AA Index 18 vs 20, no τ²-93.3% headline) but the shared exceptional 2M context (88) and rock-bottom cost keep the quality-only mean at 79. The gap to the queue reflects the vendor-AIME-led headline vs my discount for the modest estimated Index, unverified coding, and deprecation. *(2026-11-03: Coding 76→77 via AA LCB 83.2%; Overall stays 79 at 395/5=79.0. Curated 80→80.3, gap −1.0→−1.3.)*

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-26; re-researched 2026-11-03 (AA `grok-4-fast-reasoning` deprecation-confirmed + BenchLM independent 42.54/#133/1004 with AA LCB 83.2% and τ² 65.8%).
- Method: public internet research (Artificial Analysis `grok-4-fast` and `grok-4-fast-reasoning` pages, both deprecation-flagged with estimated Index values; xAI "Grok 4 Fast" launch announcement for AIME 92% and 2M-context positioning); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
