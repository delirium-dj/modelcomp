# GPT-5.4 Mini — findings by Qwen 3.8 Max

- Source: OpenAI (`gpt-5.4-mini`)
- Date: 2026-10-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Mini
- **Short description:** OpenAI's **March-2026 small "delegation tier"** — computer-use and coding errands at mini prices, "sized for **fleets of subagents under one orchestrator**." Blazing fast (**250 tok/s, #4/188**) and cheap (**$0.75/$4.50**), with vendor scores that "**approach GPT-5.4-level pass rates**" (SWE-bench Pro 54.4%, OSWorld ~72.1%), but a **below-average general-intelligence ceiling** (AA Index 24) and heavy verbosity. Now **deprecated for GPT-5.6 Terra**.
- **Provider / access:** OpenAI; on OpenCode Zen as `opencode/gpt-5.4-mini`; **paid only, no free lane** (`noFreeId: true`). Proprietary / closed weights, parameters undisclosed. AA tracks it as "GPT-5.4 mini (Xhigh)."
- **Release / knowledge:** Released **March 17, 2026** (alongside GPT-5.4 Nano); knowledge cutoff **August 31, 2025**.
- **IDs:** `opencode/gpt-5.4-mini`; AA `gpt-5-4-mini` (xhigh reasoning variant).
- **Context window:** **400K total**, **128K max output** (AA + meta agree).
- **Modalities:** AA independently confirms **text + image in → text out**; reasoning (xhigh). No video/audio; text-only output.
- **Pricing (as of 2026-10-26):** **$0.75 / $4.50** per 1M in/out; **$0.075 cached input** (**90% cache discount**); AA measures **$0.37 per Intelligence Index task** (#28/120) — "competitively priced" input (median $2.00), "moderately priced" output (median $10.00), overall "**well priced**."
- **Architecture:** Closed weights; parameters undisclosed. An xhigh-reasoning small model tuned for delegated computer-use/coding at high throughput.

### Raw benchmarks found

> Independent anchors: Artificial Analysis (deprecation-flagged, 2/4-unit estimate). SWE-bench Pro / OSWorld figures are OpenAI launch claims. GPT-5.4 mini is deprecated (AA suggests GPT-5.6 Terra), so AA runs only the default 10k workload. No Vals SWE row for this SKU (swebench.com lists the older "GPT 5 mini" at 56.20, a different model).

Independent (current, rebased):

- **AA Intelligence Index v4.3.2: 24, #135/221** — **below the comparable median of 28** ("below average in intelligence"); only **2 of 4** units, so a weak-signal estimate. AA speed **250.0 tok/s** (**#4/188**, "**notably fast**" vs 83; **4/4** units) — a genuine top-tier strength. **Verbosity 230M output tokens** (#117/122, "**very verbose**" vs median 81M) — it burns tokens to reach its answers. Cost **$0.37/task**, "well priced."

Vendor (OpenAI, at launch):

- **SWE-bench Pro 54.4%** and **OSWorld-Verified ~72.1%** (computer use) — OpenAI states GPT-5.4 mini "**approaches the performance of the larger GPT-5.4 model** on several evaluations, including SWE-Bench Pro and OSWorld-Verified," and "consistently outperforms GPT-5-mini at similar latencies." For scale, the GPT-5.4 flagship reached ~75% OSWorld-Verified (human ≈ 72.4%) and SWE-bench Pro 57.7%, so the mini lands close at a fraction of the size/cost.
- Positioned as the **delegation tier**: computer-use + coding errands for **fleets of subagents** under one orchestrator; ~30% of the 5.4 quota in Codex (vendor detail).

> Provenance: AA (24, 2/4-unit est., below median 28; 250 tok/s #4/188; 230M verbosity) is independent; **SWE-bench Pro 54.4% / OSWorld 72.1% are vendor** launch claims (no neutral re-run located). Deprecated (superseded by GPT-5.6 Terra), so AA runs only the 10k workload and the Index is an estimate.
> Meta verification: accurate — `opencode/gpt-5.4-mini` on Zen ✓, 400K/128K ✓ (AA confirms 400K), $0.75/$4.50 + $0.075 cached / `noFreeId` ✓ (AA confirms, 90% cache), text+image in→text out ✓ (AA confirms), OSWorld 72.1% ✓ (corroborated — family near-human, mini "approaches" it), delegation-tier / subagent-fleet framing ✓. "30% of 5.4 quota in Codex" is a plausible vendor detail (not independently verified). Enriched from AA/OpenAI: released **Mar 17 2026** (with Nano), **deprecated → GPT-5.6 Terra**, Index **24 (below median 28, 2/4)**, **250 tok/s (#4/188)**, **SWE-bench Pro 54.4%**, **very verbose (230M tokens, #117/122)**, knowledge cutoff **Aug 31 2025**.

### Normalized scores (1–100)

- **Tool use: 81/100.** The model's core design target: **computer-use + coding errands for subagent fleets**, with vendor **OSWorld ~72.1%** (near-human ≈72.4%) and **blazing 250 tok/s** (#4/188) that suits high-volume parallel tool loops. Held below the elite-agentic band by deprecation, the below-median general Index (2/4 est.), and OSWorld being vendor-reported.
- **Reasoning: 73/100.** The weak dimension by design — **AA Index 24 is below the median 28** ("below average in intelligence," 2/4-unit est.), the meta tradeoff is explicit ("a smaller reasoning ceiling — it *performs* tasks, the flagships *architect* them"), and it is **very verbose (230M tokens, #117/122)**, spending many tokens without a matching intelligence lift. xhigh effort helps it punch up on specific tasks, but general reasoning is capped.
- **Context window: 82/100.** **400K total / 128K max output** (AA + meta agree) — the 400K band, ample for delegated errands and subagent context, though below the 500K–1M flagship tiers and not independently long-context-validated.
- **Multimodal: 78/100.** AA verifies **text + image** in → text out. The near-human **OSWorld** score evidences solid applied visual grounding (GUI/screenshot perception for computer use), but there is no dedicated vision benchmark and no video/audio — the image-input tier.
- **Coding: 80/100.** Vendor **SWE-bench Pro 54.4%**, which "**approaches the larger GPT-5.4**" (flagship 57.7%) — strong for a mini and near GPT-5.2-Codex's launch-record 55.6%. Docked because it is **vendor-only** (no independent Vals/swebench row for this SKU), the **AA Index is below median**, and the model is **deprecated**.
- **Cost efficiency: 88/100.** **$0.75/$4.50**, **$0.37/task**, **90% cache discount**, and **250 tok/s** — AA calls it "well priced," and it is one of the cheapest fast models here. Tempered by the **extreme verbosity** (230M tokens inflates real per-task token spend) and deprecation. Not counted toward Overall.
- **Overall Score: 79/100.** Mean of Tool 81 + Reasoning 73 + Context 82 + Multimodal 78 + Coding 80 = 394 / 5 = 78.8 → 79. Best fit: a **cheap, very fast delegation workhorse** for orchestrators that fan out many computer-use/coding subagents and accept a lower reasoning ceiling — but it is **deprecated**, so new deployments should use **GPT-5.6 Terra** (or a current mini) unless the 5.4-mini price/speed profile is already baked into a pipeline. **Divergence note:** curated queue 79 vs my 79 → **0.0** (exact match). The strong *applied* profile (Tool 81 via OSWorld, Coding 80 via SWE-bench Pro, 250 tok/s, $0.37/task) is exactly offset by the *deliberately capped* general reasoning (73, AA Index below median) and image-only multimodal (78) — the curated 79 already encodes this "performs-near-flagship-tasks-but-lower-ceiling" trade-off.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-26
- Method: public internet research (Artificial Analysis `gpt-5-4-mini` xhigh page, deprecation-flagged with estimated Index + speed/verbosity/cost; OpenAI "Introducing GPT-5.4 mini and nano" and OpenAIDevs launch posts for SWE-bench Pro 54.4% / OSWorld "approaches GPT-5.4"; TheRouter.ai / alexlavaee.me for release date and family context; OpenCode Zen listing for pricing/context); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
