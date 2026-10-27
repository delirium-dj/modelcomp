# DeepSeek V4 Flash — findings by Qwen 3.8 Max

- Source: DeepSeek (`deepseek-v4-flash`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash (0731 "Max")
- **Short description:** DeepSeek's **1M-context, text-only reasoning MoE (284B total / 13B active, MIT)** — "the volume-reasoning champion: strong math and agentic coding at prices that make per-token anxiety obsolete." A **strong independent signal: AA Intelligence Index 34 (full 4/4 units, #15/122 — well above the open-weight Large-class median 19)**, plus vendor **LiveCodeBench 91.6% / SWE-bench Verified 79.0% (max effort)** and **MRCR 78.7% at 1M**. ⚠ **Deprecated** — DeepSeek's banner redirects to the newer **DeepSeek V4.1 Flash** (this repo's `deepseek-v4.1-flash-1017`, report 82); the meta's `short`/`standout` present it as current and only hint at the supersession in `pricingNote`. **Text-only** — multimodal needs a different DeepSeek lane.
- **Provider / access:** Hosted at **~$0.14/$0.28** per 1M in/out (HF, NVIDIA, SiliconFlow, OpenRouter and other gateways); **self-host $0 (MIT)** — weights on Hugging Face `deepseek-ai/DeepSeek-V4-Flash`. **OpenCode Zen id `deepseek-v4-flash` exists but publishes no price row**; DeepSeek's own API now serves **V4.1-Flash-1017**. **No free hosted tier id** (`noFreeId: true`).
- **Release / knowledge:** The **"0731" build released July 31, 2026** (AA: July 2026), **retrained (not re-architected) from the April-2026 DeepSeek-V4 Preview**. **Deprecated** — superseded by DeepSeek V4.1 Flash; AA only continues the default 10k-token workload.
- **IDs:** `opencode/deepseek-v4-flash`; HF `deepseek-ai/DeepSeek-V4-Flash`; AA `deepseek-v4-flash` → page titled **"DeepSeek V4 Flash 0731 (Max)"** (reasoning variant at max effort; a non-reasoning variant also exists).
- **Context window:** **1,000,000 (1M) total; 384K max output** (meta) — AA lists 1M (~1500 A4 pages). Vendor **MRCR 78.7% at 1M** indicates reasonable (not perfect) long-context retrieval effectiveness.
- **Modalities:** **Text in → text out** (AA-confirmed) — **strictly text-only**. The meta tradeoff is explicit: "Text-only — multimodal needs a different DeepSeek lane." This is the model's defining limitation.
- **Pricing (as of 2026-10-27):** **~$0.14 / $0.28** per 1M in/out; AA shows the same with an **84% cache discount → $0.15 per Intelligence Index task** ("**competitively priced**"; class median $0.43 in / $1.40 out). **$0 self-host** (MIT).
- **Architecture:** Open-weight **sparse Mixture-of-Experts, 284B total / 13B active per token**, **MIT License**, **reasoning** variant. 133.0 tok/s (#18/78, "notably fast") but **very verbose** — AA: **240M output tokens** per Index run (#43/48) vs median 140M.

### Raw benchmarks found

> Independent anchor: **Artificial Analysis** (`deepseek-v4-flash`, "0731 Max" reasoning variant, **deprecated** but with a **full 4/4-unit** Index measurement). Coding/long-context numbers are **vendor** (DeepSeek preview model card, echoed by morphllm / llm-stats / lightning.ai). **Do not reattribute** the DeepSeek-V4-**Pro** sibling's 95.2% SWE-bench — that is a different model.

Independent (AA v4.3.2 — deprecated):

- **AA Intelligence Index: 34, #15/122 — "well above average"** among comparable open-weight **Large-class (>150B)** reasoning models (**median 19**), with a **full 4 of 4 units** for Intelligence. AA: "amongst the leading models in intelligence and well priced when comparing to other open weight models of similar size." Strong absolute Index (above Ling-3.0-flash-VL's 25 and Mistral Medium 3.5's 14), though below the open-weight frontier (GLM-5.3 ≈ 45). The Index basket includes coding/agentic evals (Terminal-Bench 4.0, SciCode, AutomationBench-AA, AA-Briefcase).
- **AA Speed: 133.0 output tok/s, #18/78 — "notably fast"** (4/4 units; class median 80), strong throughput from the 13B-active MoE.
- **AA Cost: $0.14 in / $0.28 out (84% cache), $0.15 per Index task, #21/47** (2/4 units) — "competitively priced."
- **AA Verbosity: 240M output tokens per Index run, #43/48 — "very verbose"** (4/4 units; median 140M) — it burns far more reasoning tokens than peers, a real cost/latency consideration despite the low per-token price.

Vendor (DeepSeek — preview model card):

- **SWE-bench Verified: 79.0% (max effort)** — also **78.6% (high)** and **73.7% (non-thinking)**; the 79.0% corresponds to the "Max" variant AA benchmarks. Echoed independently by llm-stats/morphllm.
- **LiveCodeBench: 91.6%** — very strong competitive-programming figure; third-party coverage (lightning.ai) notes it "still hits 79% SWE-bench Verified and 91.6% LiveCodeBench, which is genuinely strong for the price class," and codingfleet reports it "**leads every coding benchmark**" vs Qwen 3.6 Flash.
- **MRCR: 78.7% at 1M** — long-context needle retrieval, supporting the 1M context claim.

> Provenance: AA Index 34 (full 4/4-unit measurement, #15/122, well above the Large-class median 19) and 133 tok/s are neutral. SWE-bench Verified 79.0% (max), LiveCodeBench 91.6%, and MRCR 78.7% are **vendor** (DeepSeek card), though widely echoed; **no separate independent SWE-bench/Vals/Terminal-Bench row** was located for this exact SKU. **AA Index baskets are version-specific and not convertible.**
> Meta verification: **accurate** — **1M context** ✓ (AA), **text-only** ✓ (AA: text in/out), **reasoning MoE 284B total / 13B active** ✓ (AA exact), **MIT** ✓ (AA), **~$0.14/$0.28** ✓ (AA exact), **LiveCodeBench 91.6% / SWE-bench Verified 79% / MRCR 78.7%** ✓ (vendor, confirmed via morphllm/lightning.ai/llm-stats), **Zen id exists w/o price row; API now serves V4.1-Flash-1017** ✓ (AA deprecation banner → V4.1 Flash). **One flag (under-representation):** the meta's `short`/`standout` present it as a current "champion" and **do not state it is deprecated**; AA carries an explicit deprecation banner redirecting to DeepSeek V4.1 Flash — I surface that status prominently. (The 384K max-output figure is meta-specific; AA did not list a max-output number.)

### Normalized scores (1–100)

- **Tool use: 79/100.** Positioned "for agentic coding," with an **AA Index 34 (#15/122)** whose basket includes agentic evals (AutomationBench-AA, Terminal-Bench 4.0, AA-Briefcase) and **notably fast 133 tok/s** for agent loops. But it is **deprecated**, **text-only** (no visual GUI/computer-use), and **very verbose (240M tokens)** — which inflates real agent cost/latency — and **no dedicated independent agentic harness number** was located. Strong-but-deprecated agentic-coding band.
- **Reasoning: 82/100.** **AA Index 34 (full 4/4 units, #15/122) is "well above average"** for the open-weight Large class (median 19) — the strongest absolute Index among the mid-tier open-weights I've scored this run (above Ling 25, Mistral 14), and it is a dedicated **reasoning** "volume-reasoning champion." Held below the frontier (GLM-5.3 ≈ 45) by the **13B-active depth budget**, **deprecation**, and **very verbose** reasoning. Strong-open-weight band.
- **Context window: 85/100.** **1M tokens** with a large **384K max output** and vendor **MRCR 78.7% at 1M** — the 1M-proven tier. MRCR 78.7% shows the 1M is genuinely usable (not just nominal) though not perfect; the 13B-active MoE keeps 1M economical.
- **Multimodal: 50/100.** **Strictly text-only** (AA + meta confirmed: text in → text out). The hard text-only floor — the model's defining limitation ("multimodal needs a different DeepSeek lane"). This single dimension is what drags an otherwise strong coding/reasoning model's mean down, exactly as for the text-only GLM-5.3.
- **Coding: 82/100.** The headline strength: vendor **SWE-bench Verified 79.0% (max)** [73.7 non-thinking / 78.6 high], **LiveCodeBench 91.6%**, and third-party "**leads every coding benchmark**" vs Qwen 3.6 Flash — all corroborated by the coding sub-evals inside the **AA Index 34 (#15/122)**. Strong-vendor + Index-corroborated band; below the elite independent-Vals tier (90%+ mini-SWE-agent) and capped by **vendor-only specific numbers** and **deprecation**. (V4-**Pro**'s 95.2% is a different model — not credited here.)
- **Cost efficiency: 94/100.** **MIT open-weight → $0 self-host**, a **13B-active** MoE, **$0.14/$0.28** hosted with an **84% cache discount → $0.15/task**, and **133 tok/s** — "prices that make per-token anxiety obsolete." Only the **very verbose 240M-token** reasoning slightly offsets the bargain (more tokens per task). Not counted toward Overall.
- **Overall Score: 76/100.** Mean of Tool 79 + Reasoning 82 + Context 85 + Multimodal 50 + Coding 82 = 378 / 5 = 75.6 → 76. Best fit: **the deprecated text-only volume-reasoning coding champion** — a current-benchmarked (but now superseded) MIT 284B/13B-active MoE with a strong **AA Index 34 (#15/122)**, **1M context (MRCR 78.7%)**, **notably fast 133 tok/s**, and elite-for-price vendor coding (**LiveCodeBench 91.6% / SWE-bench Verified 79% max**) — but **strictly text-only (Multimodal 50)** and **very verbose**, and **deprecated in favor of DeepSeek V4.1 Flash**. Ideal historically for **cheap high-volume text reasoning + agentic coding**; **use the successor `deepseek-v4.1-flash-1017` (82) for a live equivalent**, or a multimodal lane for vision. **Divergence note:** curated queue 74.3 vs my 76 → **+1.7**. I credit the strong **AA Index 34 (#15/122)**, **1M context (85)**, and **vendor-corroborated coding (82)**; the **text-only Multimodal floor (50)** and **very-verbose deprecated** status hold the mean down. Lands six points below its successor DeepSeek V4.1 Flash (82) and, like the text-only GLM-5.3 (78), shows how a single 50-multimodal dimension suppresses an otherwise strong model.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-27
- Method: public internet research (Artificial Analysis `deepseek-v4-flash` → "DeepSeek V4 Flash 0731 (Max)" reasoning page — **deprecated → DeepSeek V4.1 Flash**, full **4/4-unit** Intelligence Index **34** (#15/122, well above the open-weight Large-class median 19), Speed **133.0 tok/s** (#18/78), Cost $0.14/$0.28 with 84% cache ($0.15/task), Verbosity **240M** (very verbose), **284B total / 13B active**, **MIT**, **text-only**, 1M context, released July 2026; morphllm / llm-stats / lightning.ai / kie.ai / codingfleet — SWE-bench Verified **73.7 non-thinking / 78.6 high / 79.0 max**, **LiveCodeBench 91.6%**, **MRCR 78.7% at 1M**, "leads every coding benchmark" vs Qwen 3.6 Flash, 0731 retrained from the April Preview; Hugging Face `deepseek-ai/DeepSeek-V4-Flash` + OpenRouter. DeepSeek-V4-**Pro** 95.2% SWE-bench explicitly **not** reattributed. No separate independent SWE-bench/Vals row located — flagged and scored on vendor + AA-Index corroboration); scores are normalized 1–100 interpretations, not official vendor scores. AA Index baskets are version-specific and not cross-converted.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
