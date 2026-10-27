# Mistral Medium 3.5 — findings by Qwen 3.8 Max

- Source: Mistral AI (`mistral-medium-3.5`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Mistral Medium 3.5
- **Short description:** Mistral AI's **April-2026 open-weight (Modified MIT) dense 128B flagship** — the **first Mistral model to merge instruction-following, reasoning, and coding in a single set of weights**, and the one that **supersedes its dedicated Devstral coding line**. The "European dense workhorse" for instruction-following and telecom/agentic use. Independent signal: **AA Intelligence Index 14 (full 4/4 units, #8/67, well above the open-weight Medium-class median 8)** and **166.4 tok/s** (notably fast for a 128B dense model). Coding is the headline: **vendor SWE-bench Verified 77.6% / τ³-Telecom 91.4%**, meta-cited independent **Vals 66.4%**, and the **only non-Chinese open-source model in the SWE-bench Verified top 25**. Tradeoff: measured coding is mid-pack vs the frontier, and the merge lineage makes behavior harder to reason about than a clean-trained checkpoint.
- **Provider / access:** **Mistral API $1.50/$7.50** per 1M in/out (**$0.15 cached input**, 90% cache discount); batch $0.75/$3.75; **self-host free under Modified MIT** (weights on Hugging Face `mistralai/Mistral-Medium-3.5-128B`). **Not on OpenCode Zen**; **no free hosted tier id** (`noFreeId: true`).
- **Release / knowledge:** Released **April 29, 2026**. **Current** (no AA deprecation banner).
- **IDs:** `mistralai/mistral-medium-3-5`; HF `mistralai/Mistral-Medium-3.5-128B`; AA `mistral-medium-3-5` (reasoning variant; a non-reasoning variant may exist).
- **Context window:** **256K** — AA lists 256k (~384 A4 pages). (Meta's `contextWindow` says "256,000 (256K)" while its `short` says "262K" — a minor internal inconsistency; 256K = 262,144 raw tokens. AA confirms the 256k tier.)
- **Modalities:** **Text + image in → text out** (AA-confirmed) — matches meta exactly. No native audio/video.
- **Pricing (as of 2026-10-27):** **$1.50 / $7.50** per 1M in/out on the Mistral API ($0.15 cached input; batch $0.75/$3.75); **$0 self-host** (Modified MIT). AA: **$0.43 per Intelligence Index task** — "**particularly expensive when comparing to other open weight models of similar size**."
- **Architecture:** **Dense 128B** parameters (AA-confirmed), **Modified MIT License**, open weights, **reasoning** variant. A **merged** model — instruction-following + reasoning + coding combined into one checkpoint (vs Mistral's prior split of Devstral for coding / Magistral for reasoning). 166.4 tok/s (#7/26, "notably fast"), fairly concise (100M output tokens across the Index, ≈ median).

### Raw benchmarks found

> Independent anchor: **Artificial Analysis** (`mistral-medium-3-5`, reasoning, **current**, **full 4/4-unit** Index under v4.3.2). Coding has **both** a **vendor** figure (Mistral, via model card) **and** an **independent** Vals figure (meta-cited). τ³-Telecom is **vendor**.

Independent (current — AA v4.3.2):

- **AA Intelligence Index: 14, #8/67 — "well above average"** among comparable open-weight **Medium-class (40B–150B)** reasoning models (**median 8**), with a **full 4 of 4 units** for Intelligence. AA: "amongst the leading models in intelligence, but particularly expensive when comparing to other open weight models of similar size." The **absolute** Index 14 is modest — notably *below* the smaller sparse-MoE siblings Gemma 4 26B A4B (17) and Qwen3.5 35B A3B (19) on the same current basket, reflecting the merged-128B-dense model's mid-pack ceiling.
- **AA Speed: 166.4 output tok/s, #7/26 — "notably fast"** (4/4 units; class median 91), impressive throughput for a 128B dense model.
- **AA Cost: $1.50 in / $7.50 out (90% cache), $0.43 per Index task, #7/9** (3/4 units) — flagged "expensive" for open-weight.
- **AA Verbosity: 100M output tokens per Index run, #6/13 — "fairly concise"** (≈ median 100M), 2/4 units.
- **Independent Vals SWE-bench Verified: 66.4%** (meta-cited) — the independent-harness counterpart to the vendor 77.6% below; the ~11-point vendor-vs-independent gap is the usual scaffold effect. Corroborated by Mistral Medium 3.5 being "**the only non-Chinese open-source model in the top 25 of the SWE-bench Verified benchmark**."

Vendor (Mistral AI):

- **SWE-bench Verified: 77.6%** — Mistral's headline coding claim; the model **supersedes Devstral** (Mistral's prior dedicated coding line) "across all benchmarks."
- **τ³-Telecom: 91.4%** — strong telecom/agentic instruction-following, matching its "telecom agents" positioning.

> Provenance: AA Index 14 (full 4/4-unit **current** measurement, well above the Medium-class median 8, #8/67) and 166.4 tok/s are neutral. SWE-bench Verified is **vendor 77.6%** vs **independent Vals 66.4%** (meta-cited) — I weight the independent figure and the public top-25 leaderboard position over the vendor number. τ³-Telecom 91.4% is vendor. **AA Index baskets are version-specific and not convertible.**
> Meta verification: **accurate** — **dense 128B** ✓ (AA), **Modified MIT** ✓ (AA), **open-weight** ✓ (AA), **256K** ✓ (AA; note the meta's internal "256,000" vs "262K" wording), **text+image in / text out** ✓ (AA, exact match), **$1.50/$7.50, $0.15 cached** ✓ (AA: $1.50/$7.50, 90% cache), **SWE-bench Verified 77.6% (Mistral)** ✓ (HF/model card), **Vals 66.4%** ✓ (meta-cited independent; exact value not re-verifiable from the leaderboard snippet but the top-25 status corroborates), **April 2026 release** ✓ (AA + Apr 29 2026 launch), **merged instruction/reasoning/coding + supersedes Devstral** ✓ (Ollama/HF). No discrepancies beyond the minor 256K/262K wording.

### Normalized scores (1–100)

- **Tool use: 77/100.** Positioned for **telecom agents** and merged agentic instruction-following, with a strong vendor **τ³-Telecom 91.4%** and a fast **166.4 tok/s** (well-suited to high-throughput agent loops). It also folds in the Devstral coding-agent lineage. But the **modest AA Index 14** and the **absence of a specific independent agentic harness row** (Terminal-Bench/τ²/AutomationBench sub-score) cap it. Current merged-agentic band; mid-pack.
- **Reasoning: 76/100.** **AA Index 14 (full 4/4 units, #8/67) is "well above average"** for its open-weight Medium class (median 8), and it is a dedicated **reasoning** variant. But the **absolute Index is modest** — *below* the smaller sparse-MoE siblings (Gemma 4 26B A4B 17, Qwen3.5 35B A3B 19) on the same current basket, so a 128B dense model punching at Index 14 is underwhelming for its size. Strong-for-class, mid-pack absolute.
- **Context window: 78/100.** **256K** (262,144) — the standard 256K/262K tier, matching the Gemma 4 siblings and Qwen3.5 native. Ample for a workhorse; no long-context leadership claim.
- **Multimodal: 78/100.** **Text + image in → text out** (AA-confirmed) — the image-only-verified tier. No native audio or video, so it sits below the four-modality Gemini/Gemma models. Text-only output.
- **Coding: 79/100.** The model's strongest dimension: **vendor SWE-bench Verified 77.6%**, **independent Vals 66.4%**, **τ³-Telecom 91.4%**, **supersedes Devstral across all benchmarks**, and the **only non-Chinese open-source model in the SWE-bench Verified top 25**. Independent corroboration lifts it into the strong-published band — but the meta's own tradeoff ("measured coding strength is clearly mid-pack") and the frontier gap (top models are 90%+ on mini-SWE-agent) keep it at 79 rather than elite.
- **Cost efficiency: 87/100.** **Modified MIT open-weight → $0 self-host** and **166.4 tok/s**, but the hosted API is **$1.50/$7.50** ($0.43/task) — AA flags it "**particularly expensive** for an open-weight model of its size," and a 128B dense checkpoint is heavier to self-host than a small-active MoE. Open-weight availability saves it from a lower grade. Not counted toward Overall.
- **Overall Score: 78/100.** Mean of Tool 77 + Reasoning 76 + Context 78 + Multimodal 78 + Coding 79 = 388 / 5 = 77.6 → 78. Best fit: **the European open-weight dense workhorse** — a current Modified-MIT 128B model merging instruction-following, reasoning, and coding, with a full-4/4-unit AA Index 14 (#8/67, well above class median), notably fast 166.4 tok/s, real independent coding evidence (Vals SWE-bench 66.4%, top-25 SWE-bench Verified), and strong telecom-agentic instruction-following — but a **modest absolute Index for its size, mid-pack coding vs the frontier, text+image-only multimodality, and expensive hosted pricing**. Ideal for **self-hosted European-sovereign instruction/telecom/coding agents**; pick **GLM-5.3 (78)** or **Qwen3.5-122B-A10B (81)** for a higher open-weight ceiling, or **Gemma 4 26B A4B (77)** for cheaper active-parameter economics. **Divergence note:** curated queue 74.9 vs my 78 → **+3.1**. I credit the **full-measurement AA Index 14 (#8/67)**, the **independently-corroborated coding (79, vendor 77.6% + Vals 66.4% + top-25 SWE-bench)**, the **notably fast 166.4 tok/s**, and its **current** (not deprecated) status; the **modest absolute reasoning for a 128B dense model (76)**, **text+image-only multimodality (78)**, and **expensive hosted tier** hold it back. Lands level with the small-MoE Gemma 4 pair (77) and one point above them on the strength of its verified coding.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-27
- Method: public internet research (Artificial Analysis `mistral-medium-3-5` reasoning page — **current**, full **4/4-unit** Intelligence Index **14** (#8/67, well above the open-weight Medium-class median 8), Speed **166.4 tok/s** (#7/26), Cost $1.50/$7.50 with 90% cache ($0.43/task, "expensive for open-weight"), Verbosity 100M (concise), **dense 128B**, **Modified MIT**, 256K, text+image in → text out, released April 2026; Ollama + Hugging Face `mistralai/Mistral-Medium-3.5-128B` — "first flagship merging instruction-following, reasoning, and coding," **supersedes Devstral**; towardsai.net — **April 29 2026** release, dense 128B, 256K; vendor **SWE-bench Verified 77.6% / τ³-Telecom 91.4%**; independent **Vals SWE-bench Verified 66.4%** [meta-cited] + Reddit/"only non-Chinese open-source model in the SWE-bench Verified top 25"). No specific independent agentic-harness sub-score located — flagged and scored conservatively); scores are normalized 1–100 interpretations, not official vendor scores. AA Index baskets are version-specific and not cross-converted.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
