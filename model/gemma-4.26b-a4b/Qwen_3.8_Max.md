# Gemma 4 26B A4B — findings by Qwen 3.8 Max

- Source: Google DeepMind (`gemma-4.26b-a4b`)
- Date: 2026-10-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemma 4 26B A4B
- **Short description:** Google DeepMind's **April-2026 open-weight (Apache 2.0) sparse-MoE** — **25.2B total / 3.8B active** — the "sparse-MoE middle child" delivering **active-3.8B economics with math scores that shame dense models twice its size** (vendor **AIME 88.3% / MMLU-Pro 82.6%**). Strong independent signal: **AA Intelligence Index 17 (full 4/4 units, #15/141, well above median 8)** — a *higher* rank than the dense Gemma 4 31B (#19). Native **text + image + video** multimodal, 256K context, ~$0.09/$0.30 hosted. Open-weights only; hosted quality varies by provider and the ceiling stays mid-tier.
- **Provider / access:** Open weights on **Hugging Face** (`google/gemma-4-26B-A4B`, **Apache 2.0**); hosted on **OpenRouter (~$0.09/$0.30, plus a $0 free route)**, Bedrock/Novita/HF Inference ($0.13/$0.40). **No OpenCode Zen route**; **no free hosted tier id** (`noFreeId: true`); self-host $0.
- **Release / knowledge:** Released **April 2026**. **Current** (no AA deprecation banner).
- **IDs:** `google/gemma-4-26b-a4b-it`; HF `google/gemma-4-26B-A4B`; AA `gemma-4-26b-a4b` (reasoning variant).
- **Context window:** **256,000 (262,144)** — AA lists 256K.
- **Modalities:** **Text + image + video in → text out** (AA-confirmed). ⚠ **Meta lists only "text, image in" and omits video, but AA confirms video input** — consistent with the Gemma 4 family's native multimodality (the 12B sibling additionally supports audio; this 26B-A4B does text+image+video). Meta under-claims; flagged.
- **Pricing (as of 2026-10-27):** **~$0.09 / $0.30** per 1M in/out on OpenRouter (plus a **$0 free route**); $0.13/$0.40 on Bedrock/Novita/HF Inference; **$0 self-host** (Apache 2.0). AA shows $0.10/$0.34 with a **50% cache discount** — "reasonably priced" for an open-weight model of its size.
- **Architecture:** Open-weight **sparse Mixture-of-Experts, 25.2B total / 3.8B active per token**, Apache 2.0. Reasoning + non-reasoning variants. The 3.8B-active design gives it strong throughput (95.6 tok/s) and token-efficiency (AA's April-2026 analysis placed it on the **Intelligence-vs-Compute-Proxy Pareto frontier**).

### Raw benchmarks found

> Independent anchor: **Artificial Analysis** (`gemma-4-26b-a4b`, reasoning variant, **current** with a **full 4/4-unit** Estimated Index under v4.3.2) plus AA's **April-2026 "Sub-32B Open Weights" article**. AIME/MMLU-Pro are **vendor** (Google / Gemma 4 technical report). **No independent coding harness** (Vals/Epoch/swebench/Terminal-Bench) row and **no vendor SWE-bench/LiveCodeBench** figure were located for this SKU — it is positioned as a math/reasoning model, not a coder.

Independent (current — AA v4.3.2):

- **AA Intelligence Index (Reasoning): 17 (Estimated), #15/141 — "well above average"** among comparable open-weight Small-class models (**median 8**), with a **full 4 of 4 units** for Intelligence. AA: "amongst the leading models in intelligence and reasonably priced when comparing to other open weight models of similar size." Notably **#15/141 outranks the larger dense Gemma 4 31B (#19/141)** — the sparse MoE punches above its active-parameter weight.
- **AA Speed: 95.6 output tok/s, #29/63 — "faster than average"** (3/4 units), a direct benefit of the 3.8B-active MoE.
- **AA prior-basket context (April 2026 article, NOT convertible to v4.3.2):** Gemma 4 26B A4B (Reasoning) scored **31** on the then-current Index, competing at the **~4B-active tier** (behind Qwen3.5 35B A3B's 37), and was highlighted on the **Intelligence-vs-Compute-Proxy Pareto frontier** — "scores 31 on just 73M tokens" (token-efficient).

Vendor (Google, Gemma 4 technical report / launch):

- **AIME 88.3%**, **MMLU-Pro 82.6%** — Google's headline claims, positioning it as a math/reasoning-strong small-active MoE ("math scores that shame dense models twice its size"). Comparable to the Gemma 4 31B's AIME 89.2% and just below the dense Qwen3.5-27B's GPQA-tier knowledge.

> Provenance: AA Index 17 (full 4/4-unit estimate, well above the open-weight Small-class median 8, #15/141) and 95.6 tok/s are neutral; the April-2026 "31 / Pareto-frontier" figure is from an **earlier, non-convertible basket** (documented for lineage). AIME 88.3% / MMLU-Pro 82.6% are vendor. **No coding benchmark** (independent or vendor) was located — coding is graded conservatively on that absence plus its reasoning-focused positioning. **AA Index baskets are version-specific and not convertible.**
> Meta verification: **mostly accurate** — 25.2B total / 3.8B-active open MoE ✓ (AA), **Apache 2.0** ✓ (AA), **256K (262,144)** ✓ (AA: 256K), **AIME 88.3% / MMLU-Pro 82.6%** ✓ (vendor), OpenRouter ~$0.09/$0.30 + $0 free route + $0 self-host ✓, "open-weights only, hosted quality varies, ceiling stays mid-tier" ✓. **One flag:** **modality** — meta says "**text, image in**" but **AA confirms text + image + video**; meta **under-claims** by omitting video, so I credit the AA-confirmed three-modality input. (AA also shows the hosted price as $0.10/$0.34 with a 50% cache discount — a minor provider-vs-AA pricing difference, not a discrepancy.)

### Normalized scores (1–100)

- **Tool use: 75/100.** The Gemma 4 family is "purpose-built for … agentic workflows," and the token-efficient 3.8B-active MoE is well-suited to high-throughput agents, but the **mid-tier ceiling** (meta tradeoff) and the small active-parameter budget limit long/hard agent chains, and **no independent agentic harness row** (Terminal-Bench/τ²/AutomationBench) was located. Small-active open-weight agentic tier; between the 12B unified (74) and the dense 31B.
- **Reasoning: 78/100.** **AA Index 17 (full 4/4 units) is "well above average"** for its open-weight Small class (median 8) and **#15/141 outranks the dense 31B (#19)**; vendor **AIME 88.3% / MMLU-Pro 82.6%** corroborate strong math/knowledge. But the **absolute** Index is modest (frontier open-weight 42–51) and the 3.8B-active depth caps the hardest reasoning. Strong-for-class band; a notch above the 12B unified (76).
- **Context window: 78/100.** **256K (262,144)** — the 256K/262K tier, matching the Gemma 4 12B/31B siblings and the Qwen3.5 native 262K. Ample for its class.
- **Multimodal: 82/100.** **Text + image + video in → text out** (AA-confirmed) — the native-video tier. One notch below the Gemma 4 12B Unified (83), which additionally supports **audio** (four-modality encoder-free); this 26B-A4B is three-modality (no audio). Text-only output.
- **Coding: 74/100.** **No coding benchmark was located** — neither an independent harness (Vals/Epoch/swebench/Terminal-Bench) nor a vendor SWE-bench/LiveCodeBench figure. The model is explicitly positioned for **math/reasoning**, not coding, and the 3.8B-active ceiling limits repo-scale work. No-coding-evidence/small-active band; below the 12B unified (74, which at least had vendor LiveCodeBench 72%) is not warranted, so held level at 74 on the absence of any coding data.
- **Cost efficiency: 93/100.** **Apache 2.0, $0 self-host**, a **$0 free OpenRouter route**, ~**$0.09/$0.30** paid, **3.8B-active** inference economics, and **95.6 tok/s** — outstanding value, and AA places it on the Intelligence-vs-Compute Pareto frontier. Not counted toward Overall.
- **Overall Score: 77/100.** Mean of Tool 75 + Reasoning 78 + Context 78 + Multimodal 82 + Coding 74 = 387 / 5 = 77.4 → 77. Best fit: **the sparse-MoE math specialist** — an Apache-2.0 25.2B/3.8B-active open MoE with a full-4/4-unit AA Index 17 (#15/141, outranking the dense 31B), strong vendor AIME 88.3% / MMLU-Pro 82.6%, native text+image+video, 256K, and exceptional token-efficient cost — but a **mid-tier ceiling, no coding benchmark at all, and open-weights-only** (hosted quality varies). Ideal for **cheap, high-throughput reasoning/multimodal agents**; pick the dense **Gemma 4 31B (79)** for a higher ceiling or **Qwen3.5-27B (80)** for verified coding. **Divergence note:** curated queue 75.5 vs my 77 → **+1.5**. I credit the strong independent AA Index 17 (#15/141, 4/4 units), the AA-confirmed **video** input (82, which the meta omits), and the exceptional open-weight cost (93, uncounted); the **absence of any coding evidence (74)** and the mid-tier small-active ceiling hold it back. Lands level with the Gemma 4 12B Unified (77) and two points below the dense Gemma 4 31B (79) — the 31B's higher capability ceiling offsets the 26B-A4B's better AA rank and cheaper active-parameter economics.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-27
- Method: public internet research (Artificial Analysis `gemma-4-26b-a4b` reasoning page — current, full 4/4-unit Estimated Index 17 #15/141 well above median 8, 95.6 tok/s, 256K, text+image+video in → text out, 25.2B/3.8B-active Apache 2.0, $0.10/$0.34 with 50% cache discount; AA "Sub-32B Open Weights" article Apr 13 2026 — prior-basket Index 31, ~4B-active tier, Intelligence-vs-Compute Pareto frontier; Hugging Face `google/gemma-4-26B-A4B` + OpenRouter/Bedrock/Novita pricing for Apache-2.0 weights, ~$0.09/$0.30 + $0 free route, $0 self-host; vendor AIME 88.3% / MMLU-Pro 82.6%. No coding harness row located — flagged and scored conservatively); scores are normalized 1–100 interpretations, not official vendor scores. AA Index baskets are version-specific and not cross-converted.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
