# GLM 5.2 — findings by Qwen 3.8 Max

- Source: Z.ai (Zhipu AI) (`glm-5.2`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.2 (Max)
- **Short description:** Z.ai's **June-2026 MIT open-weight 753B/40B-active MoE (1M, text-only)**, "**built for long-horizon tasks**" and — at release — "**the strongest open-weight coding model of 2026 so far**." The independent evidence is elite: **Vals ranks it #1 open-weight and #3 overall on SWE-bench Verified (82.80%)** and **#1 open-weight on Terminal-Bench 2.1 (67.79%)**; AA gives a **full-4/4-unit Intelligence Index 34 (#17/122, well above the open-weight Large-class median 19)**. ⚠ **Deprecated** — superseded by **GLM-5.3** (this repo's `glm-5.3`, report 95) at the same open-weights posture with higher verified scores. **Text-only** — no vision lane.
- **Provider / access:** **Z.ai API $1.40/$4.40** per 1M in/out (**$0.26 cached input**, 81% cache discount); **self-host $0 (MIT)** — weights on Hugging Face `zai-org/GLM-5.2`. **No free hosted tier id** (`noFreeId: true`). AA flags it "**particularly expensive when comparing to other open weight models of similar size**" ($1.28 per Index task).
- **Release / knowledge:** Released **June 16, 2026**. **Deprecated** — Z.ai's banner redirects to **GLM-5.3**; AA only continues the default 10k-token workload.
- **IDs:** `opencode/glm-5.2`; HF `zai-org/GLM-5.2`; AA `glm-5-2` → page titled **"GLM-5.2 (Max)"** (reasoning variant at max effort; a non-reasoning variant may exist).
- **Context window:** **1,000,000 (1M)** — AA lists 1M (~1500 A4 pages), sized for long-horizon agentic coding.
- **Modalities:** **Text in → text out** (AA-confirmed) — **strictly text-only**, matching meta exactly. No image/audio/video; vision needs a different lane.
- **Pricing (as of 2026-10-27):** **$1.40 / $4.40** per 1M in/out ($0.26 cached input; AA: $1.28 per Intelligence Index task, 4/4 cost units) — expensive for open-weight; **$0 self-host** (MIT), though a 753B checkpoint is impractical to host for most.
- **Architecture:** Open-weight **sparse Mixture-of-Experts, 753B total / 40B active per token**, **MIT License**, **reasoning** variant — the **same 753B/40B architecture GLM-5.3 later refined** (AA-confirmed, so the meta's spec is correct, not a copy of 5.3). 98.0 tok/s (#28/78, "faster than average"), **somewhat verbose** (180M output tokens per Index run vs median 140M).

### Raw benchmarks found

> Independent anchor: **Vals AI** (`zai_glm-5.2`) for coding + **Artificial Analysis** (`glm-5-2`, "Max" reasoning, **deprecated**, **full 4/4-unit** Index). Terminal-Bench has **both** a **vendor** figure (Z.ai blog) **and** a lower **independent** Vals figure — the ~13-point gap is documented, not averaged away.
>
> **Lineage note (closes the `glm-5.2-coding` self-exclusion):** the sibling slug `glm-5.2-coding` was **self-excluded** (`.md.excluded`) as a **non-distinct SKU** — there is no separate "GLM-5.2-Coding" product; the coding benchmarks attributed to it (**Vals SWE-bench Verified 82.80%, Terminal-Bench 2.1 67.79%, tau2-bench ~99.1%**) belong to **this** GLM-5.2 base model. This report is where that lineage is formally scored — no numbers are reattributed to or double-counted against the excluded slug.

Independent (Vals AI + AA v4.3.2):

- **Vals SWE-bench Verified: 82.80% — "#1 open-weight and #3 overall."** Elite independent coding evidence; at release only two models scored higher overall. This is the single strongest anchor for the model.
- **Vals Terminal-Bench 2.1: 67.79% — "#1 open-weight."** Independent agentic/terminal-coding harness; Vals notes it leads open-weight on multiple coding/agentic benchmarks (incl. a strong **tau2-bench** agentic tool-use showing, ~99% per the AA/Vals lineage recorded during the `glm-5.2-coding` exclusion investigation).
- **AA Intelligence Index: 34, #17/122 — "well above average"** among open-weight **Large-class (>150B)** reasoning models (**median 19**), **full 4 of 4 units**. AA: "amongst the leading models in intelligence, but particularly expensive when comparing to other open weight models of similar size." (Identical absolute Index to DeepSeek V4 Flash's 34, one rank apart.)
- **AA Speed: 98.0 tok/s, #28/78 — "faster than average"** (3/4 units; median 80). **AA Verbosity: 180M tokens, #35/48 — "somewhat verbose"** (vs median 140M).

Vendor (Z.ai blog):

- **Terminal-Bench 2.1: 81.0** (vs **GLM-5.1's 63.5**) — "GLM-5.2 is the strongest open-source model, improving on GLM-5.1 by a wide margin." Note the **vendor 81.0 vs independent Vals 67.79%** gap on the same benchmark; I weight the independent figure for scoring and flag the vendor number as optimistic.

> Provenance: **Vals SWE-bench Verified 82.80% (#1 open-weight / #3 overall)** and **Terminal-Bench 2.1 67.79% (#1 open-weight)** are **independent** and carry the most weight; **AA Index 34 (full 4/4 units, #17/122)** is neutral. The **Z.ai Terminal-Bench 81.0** is **vendor** and ~13 points above the independent Vals run — documented, not blended. **AA Index baskets are version-specific and not convertible.**
> Meta verification: **accurate** — **MIT 753B total / 40B active MoE** ✓ (AA exact), **1M context** ✓ (AA), **text-only** ✓ (AA: text in/out), **$1.40/$4.40, $0.26 cached** ✓ (AA: 81% cache), **SWE-bench 82.8% (Vals)** ✓ (vals.ai), **Terminal-Bench 2.1 81.0% (vendor)** ✓ (z.ai blog; correctly labelled vendor), **superseded by GLM-5.3** ✓ (AA deprecation banner), **June 2026 release** ✓ (z.ai blog June 16 2026), **"long-horizon coding agents / honest benchmarking"** ✓. No discrepancies — the meta even correctly tags the Terminal-Bench figure as vendor.

### Normalized scores (1–100)

- **Tool use: 82/100.** Explicitly "**built for long-horizon tasks**" and agentic engineering, with **independent Vals Terminal-Bench 2.1 67.79% (#1 open-weight)**, a strong **tau2-bench** agentic tool-use showing, and an **AA Index 34 (#17/122)** whose basket includes AutomationBench-AA / AA-Briefcase / Terminal-Bench 4.0. Elite-for-open-weight agentic coding. Held below the frontier by **deprecation**, **text-only** (no visual GUI/computer-use), and **somewhat verbose** 180M-token runs.
- **Reasoning: 82/100.** **AA Index 34 (full 4/4 units, #17/122) is "well above average"** for the open-weight Large class (median 19), from a **753B/40B-active reasoning MoE**. Strong absolute reasoning (level with DeepSeek V4 Flash's Index 34), but **below its successor GLM-5.3 (Index 45)** and capped by **deprecation** and verbosity. Strong-open-weight band.
- **Context window: 85/100.** **1M tokens** — the 1M-proven tier, deliberately sized for long-horizon coding agents that accumulate large repo/tool histories. No published MRCR figure, but 1M is nominal-plus-purposeful here.
- **Multimodal: 50/100.** **Strictly text-only** (AA + meta confirmed: text in → text out). The hard text-only floor and the model's defining limitation — the same drag that suppresses GLM-5.3 and DeepSeek V4 Flash. Vision requires a different lane.
- **Coding: 85/100.** The headline: **independent Vals SWE-bench Verified 82.80% — #1 open-weight, #3 overall**, plus **Terminal-Bench 2.1 67.79% (#1 open-weight)**, and third-party consensus that it was "**the strongest open-weight coding model of 2026 so far**." Elite independent corroboration (not vendor-only) lifts it into the top coding band; tempered below 86+ by **deprecation** and the fact its successor GLM-5.3 posts higher verified SWE scores. The vendor TB2.1 81.0 is noted but not credited over the independent 67.79%.
- **Cost efficiency: 77/100.** **MIT open-weight → $0 self-host** in principle, but the hosted API is **$1.40/$4.40** ($1.28/task) — AA: "**particularly expensive** for an open-weight model of its size" — and self-hosting a **753B** checkpoint is impractical for all but large clusters. Open-weight license saves it from a lower grade; the heavy footprint and premium hosted price cap it well below the small-active bargains. Not counted toward Overall.
- **Overall Score: 77/100.** Mean of Tool 82 + Reasoning 82 + Context 85 + Multimodal 50 + Coding 85 = 384 / 5 = 76.8 → 77. Best fit: **the deprecated MIT long-horizon coding flagship** — a 753B/40B-active text-only MoE that was, at release, **the strongest open-weight coder of 2026** (Vals SWE-bench Verified **82.80%, #1 open-weight / #3 overall**; Terminal-Bench 2.1 **67.79%, #1 open-weight**), with a full-4/4-unit AA Index 34 (#17/122), 1M context, and self-host freedom — but **strictly text-only (Multimodal 50)**, **somewhat verbose**, **expensive to host**, and **superseded by GLM-5.3**. Ideal historically for **long-horizon text coding agents with open-weight/MIT requirements**; **use GLM-5.3 (78) for the live, higher-scoring equivalent**, or a multimodal lane for vision. **Divergence note:** curated queue 74.2 vs my 77 → **+2.8**. I credit the **elite independent coding (85, Vals #1-open-weight/#3-overall SWE 82.80%)**, the **full-measurement AA Index 34 (#17/122, Reasoning 82)**, the **long-horizon agentic tool use (82)**, and the **1M context (85)**; the **text-only Multimodal floor (50)**, verbosity, expensive hosting, and deprecation hold the mean down. Lands **one point below its successor GLM-5.3 (78)** and **one above the text-only DeepSeek V4 Flash (76)** — GLM-5.2's independent Vals coding lead edges out DeepSeek's vendor-only numbers, while GLM-5.3's higher Index/SWE keep it just ahead.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-27
- Method: public internet research (Artificial Analysis `glm-5-2` → "GLM-5.2 (Max)" reasoning page — **deprecated → GLM-5.3**, full **4/4-unit** Intelligence Index **34** (#17/122, well above the open-weight Large-class median 19), Speed 98.0 tok/s (#28/78), Cost $1.40/$4.40 with 81% cache ($1.28/task, "expensive for open-weight"), Verbosity 180M (somewhat verbose), **753B total / 40B active**, **MIT**, **text-only**, 1M context, released June 2026; **Vals AI `zai_glm-5.2`** — **SWE-bench Verified 82.80% (#1 open-weight, #3 overall)**, **Terminal-Bench 2.1 67.79% (#1 open-weight)**; Z.ai blog "GLM-5.2: Built for Long-Horizon Tasks" June 16 2026 — vendor Terminal-Bench 2.1 **81.0** vs GLM-5.1's 63.5; emergent.sh/apidog — "strongest open-weight coding model of 2026 so far"; Hugging Face `zai-org/GLM-5.2`. Vendor-vs-independent Terminal-Bench gap documented, not blended. Formally carries the coding lineage of the self-excluded `glm-5.2-coding` sibling — no reattribution or double-count); scores are normalized 1–100 interpretations, not official vendor scores. AA Index baskets are version-specific and not cross-converted.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
