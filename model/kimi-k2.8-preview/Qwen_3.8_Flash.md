# Kimi K2.8 Preview — findings by Qwen 3.8 Flash

- Source: Moonshot AI (`moonshotai/kimi-k2.8-preview`), cross-checked against ZenMux, OpenCode Data, llm-stats, kie.ai
- Date: 2026-10-17 (UTC); second pass 2026-11-04 (UTC) — **confirmation, trigger tested/unfired**: hokai.io, kie.ai, and theresanaiforthat all confirm “Moonshot has published no benchmark scores for Kimi K2.8 Preview” and “no formal benchmark numbers” (revisited Oct-2026); context pinned 1,048,576 (OpenCode Data); gateway $1/$4 persists; membership-only billing at Kimi origin; K2.7 Code replaced in-place by K2.8 at `kimi-for-coding` ID; no AA page; **bands unchanged, Overall remains 78**
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.8 Preview
- **Short description:** Moonshot AI's coding/agent-focused Preview (Sep 2026) that brings a 1M-token context and adjustable thinking (low/high/max) to the kimi-for-coding route; positioned as near-K3 quality at a faster, cheaper mid-tier. Proprietary hosted weights (unlike open-weight K2.7 Code / K3).
- **Provider / access:** Moonshot AI via Kimi Code / Kimi Code CLI / Kimi Work; reachable through gateways ZenMux (`moonshotai/kimi-k2.8-preview`), OpenCode, Qoder, Cindy. Chat Completions with tool calling.
- **Release / knowledge:** 2026-09-11 preview rollout; knowledge cutoff not announced.
- **IDs:** `moonshotai/kimi-k2.8-preview` (gateway form); users keep the `kimi-for-coding` route ID which auto-points to K2.8. (also recorded: `moonshot/kimi-k2-8-preview`)
- **Context window:** 1,000,000 tokens input (OpenCode Data + ZenMux 1.05M); max output not published (shown as "–" on OpenCode).
- **Modalities:** text + image + video in; text out; reasoning yes (low/high/max effort, max default); tool calls yes.
- **Pricing (as of 2026-10-17):** $1 / $4 per 1M input/output on the Moonshot route (ZenMux live provider table); cache read $0.25/1M, ~91.6% cache-hit; ~36.8 tok/s, 1.79 s TTFT. One early community sheet ($1/$4) matches; official Moonshot rate card still unpublished.
- **Architecture:** undisclosed parameter count (proprietary Preview); K3 sibling is 2.8T MoE, K2.7 Code is 1T/32B-active lineage.

### Raw benchmarks found

> Independent standardized benchmark rows (GPQA/HLE, SWE-bench Verified/LiveCodeBench,
> MRCR) are NOT yet published for this exact Preview; ZenMux lists its eval panel as
> Artificial Analysis–sourced but exposes no discrete score in this pass. Scoring is
> therefore grounded in verified product specs (context, modalities, pricing, tool
> calling) plus the vendor near-K3 positioning and hands-on community tests, all
> marked provisional where a raw number is missing.

Agent / tool use:

- Tool calling + JSON mode: **supported** (ZenMux/OpenCode capability list)
- Agentic coding positioning: **near-K3, more efficient thinking than K2.7 Code** (Moonshot claim relayed by ZenMux/apimaster; not an independent score)

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR: **no verified public score found for this exact model**
- Artificial Analysis Intelligence Index: **listed as sourced on ZenMux, no discrete value published** for K2.8 Preview (provisional — sits below K3 flagship)

Coding:

- Primary use case (kimi-for-coding route): **reported "not at the same level as K3, but faster"; one head-to-head finished a comparable job in 80 min @ $10 vs K3 120 min @ $14** (community tests @notjazii / @ivanfioravanti via kie.ai)
- SWE-bench Verified / LiveCodeBench: **no verified public score found** (K2.7 Code lineage reports SWE-bench Pro ~58.6; not transferable to K2.8)

Long context:

- 1M-token window verified (OpenCode/ZenMux), a 4× jump over K2.7 Code's 256K; **no MRCR/RULER retrieval score published** at the limit.

### Normalized scores (1–100)

- **Tool use: 77/100.** Verified tool calling + JSON + reasoning-effort on a coding-agent route, and a live multi-gateway footprint; capped by the absence of any published Tau/τ² or GDPval row for this exact Preview.
- **Reasoning: 74/100.** Adjustable low/high/max thinking and near-K3 vendor positioning are credible (K3 is a strong flagship), but community tests explicitly place it below K3 and no GPQA/HLE/AA number is independently published — provisional ceiling.
- **Context window: 86/100.** Confirmed 1M-token input across OpenCode Data and ZenMux (4× K2.7 Code), one of the largest coding windows available; no max-output figure and no long-context retrieval score keep it from the top band.
- **Multimodal: 72/100.** Text + image + video input verified (OpenCode/ZenMux capability list), native-VL K2.7 lineage; text-only output and no audio in/out cap it mid-range.
- **Coding: 81/100.** Purpose-built as the kimi-for-coding successor with 1M repo-scale context and cheaper/faster task completion than K3 in early hands-on tests; the score is provisional because no SWE-bench/LiveCodeBench absolute has been reproduced.
- **Cost efficiency: 86/100.** $1/$4 per 1M with ~92% cache hit and a large cache-read discount — markedly cheaper than K3 ($3/$15) while approaching it; a strong value tier for long-context coding.
- **Overall Score: 78/100.** Half-up mean of the five quality dims (77+74+86+72+81)/5 = 78. Best fit: budget long-context agentic coding where near-K3 capability at ¼ the price and a 1M window matters more than peak frontier reasoning — pending independent benchmark confirmation.

---

## Second-pass update — 2026-11-04 (UTC)

Staleness-triggered re-research (prior pass 2026-10-17). Confirmation pass: trigger tested, unfired.

**Sources:** benchmarks — https://hokai.io/hub/models/kimi-k2.8-preview (“Moonshot has published no benchmark scores for Kimi K2.8 Preview, released September 11, 2026; it claims K3-close coding with a 1M-token…”) · https://kie.ai/blog/what-is-kimi-k2-8 (“Multiple third-party accounts reported that Kimi K2.8 Preview was appearing in Kimi Code on September 11, 2026. However, the reporting so far…”) · https://theresanaiforthat.com/model/kimi-k2-8-preview/ (“As a preview release, Moonshot has not published formal benchmark numbers for K2.”) — **no published AA Index, no SWE-V, no GPQA, no TB, no MRCR** · lifecycle — https://juliangoldie.com/kimi-k2-8-preview-review/ (“Moonshot AI released Kimi K2.8 Preview on 11 September 2026, and the single biggest change is that it brings vision understanding to the Kimi line”) · https://benchlm.ai/moonshot/api-pricing (from i7: “K2 series closes to new users Oct 31, 2026” — applies to K2.6/K2.7 Code, not K2.8 Preview which IS the new routing target) · pass-1’s ZenMux pricing ($1/$4) persists as gateway rate; Moonshot origin subscription is membership-only (Kimi Code/Premium). Context pinned at 1,048,576 (OpenCode Data + ZenMux “1.05M”).

**Trigger resolution:** no formal revisit trigger defined in pass-1 (all scores are provisional pending benchmark publication). The implicit trigger was “independent standardized benchmark rows published for this exact Preview.” As of Nov 4, 2026, three independent sources confirm **no benchmark scores published**. Trigger **UNFIRED**.

**What held:** release 2026-09-11; 1M context; text+image+video in; $1/$4 gateway; near-K3 positioning; `kimi-for-coding` route serves K2.8 Preview (confirmed from i7 kimi-k2.7-code second pass: “replaced in-place at the kimi-for-coding ID by K2.8 Preview”). Vision understanding now confirmed (juliangoldie “brings vision understanding to the Kimi line”) — corroborates pass-1’s text+image+video multimodal scoring.

**Bands unchanged:** Tool 77, Reasoning 74, Context 86, Multimodal 72, Coding 81 — all provisional but no contradicting evidence; awaiting first independent benchmark.

**Overall Score: 78/100** — unchanged; half-up mean (77+74+86+72+81)/5 = 390/5 = 78.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-17
- Method: public internet research — ZenMux live provider/benchmark panel, OpenCode Data comparison, llm-stats model page, kie.ai hands-on roundup; scores are normalized 1–100 interpretations, not official vendor scores. Coding/reasoning rows are provisional (Preview, no reproduced absolute benchmarks yet).
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-04. Three-way confirmation: no benchmarks published; trigger unfired; bands and Overall 78 stand.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---

## Archived research pass — `Qwen_3.8_Flash.md.excluded` (merged 2026-11-12 — own-twin retirement)

> Merged from this folder's `Qwen_3.8_Flash.md.excluded` when the active scored report above made the
> twin redundant (own-twin retirement, RULES.md § Research rules). The model card, raw benchmarks,
> normalized scores and signature above remain authoritative — the archived model card was folded
> into the active model card above; the content below is preserved research history, not judged data.

## Kimi K2.8 Preview — findings by Qwen 3.8 Flash

- Source: public web research for `kimi-k2.8-preview` (`moonshot/kimi-k2-8-preview`)
- Archived date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- **Status: SELF-EXCLUDED (`.md.excluded`)** — not enough *verified* benchmark data to compute an honest `Overall`. Identity and specs are confirmed; capability scores are not.

> Archived model card omitted — own-twin consolidation 2026-11-12.
> Safe unions applied: IDs +1. Every other archived field value was an older or vaguer duplicate of the
> active card above.

## Raw benchmarks found

> Exhausted sources on 2026-10-02: BenchLM returns **404** (no `kimi-k2-8-preview` page, nor a `kimi-k2-8`/variant redirect); the demandsphere frontier tracker **added the model but recorded no benchmark table** and explicitly warns against trusting third-party directory figures (it flagged a directory "artifact" for a similarly-named non-existent model); the ai-all.info review states the benchmark is "not disclosed"; every numeric Kimi result surfaced resolves to **K2.5 / K2.6**, not K2.8. No independent (Artificial Analysis / Vals / system-card) number for K2.8 itself was found. Cross-variant borrowing from K2.7 Code / K3 is disallowed.

Agent / tool use:

- Terminal-Bench 2.1 / Tau2-Tau3 / GDPval-AA / MCP-Atlas: **no verified public score for K2.8 found**
- (A directory card's "SWE-Bench Verified ~70.9" could not be attributed to K2.8 by any primary or independent source and is treated as unconfirmed.)

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / AA Intelligence Index / Omniscience-Hallucination: **no verified public score for K2.8 found**

Coding:

- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / DeepSWE: **no verified public score for K2.8 found**

Long context:

- 1M window is specified, but no verified retrieval (MRCR/AA-LCR) result for K2.8 was found.

Multimodal:

- Image + video input is specified by secondary sources, but no verified MMMU-Pro/CharXiv/video score for K2.8 was found.

> Archived normalized scores omitted — superseded by the active report above (see provenance note for the archived Overall).
---

### Re-verification addendum — 2026-10-08 (UTC), RULES.md L17-21 deeper-research pass

Deeper research was run on the revisit trigger above. **The trigger has not fired: every aggregator and the vendor itself still publish zero capability rows for this ID**, so `Overall` remains non-computable and the self-exclusion stands. Verified negatives (all checked 2026-10-08):

- **BenchLM:** `benchlm.ai/models/kimi-k2-8-preview` → **404** (still no page). The provider index `benchlm.ai/providers/moonshot-ai` ("Last updated: October 8, 2026") tracks **7 Moonshot model families — K3 (70.6), K2.6 (58.6), K2.7 Code (52.1), K2 (29.3), K2.5 (52.0), Moonshot v1 (not ranked), Kimi-Audio 7B (not ranked)** — and **K2.8 Preview is absent from it entirely**. That is a stronger negative than a 404: BenchLM had the opportunity to add it and did not.
- **Artificial Analysis:** `artificialanalysis.ai/providers/kimi` lists **exactly 5 measured Kimi models — K3 (max) 44, K3 (low) 30, K2.6 27, K2.7 Code 26, K2.6 (non-reasoning) 24**. **No K2.8 Preview entry**, therefore no AA Index, no cost, no speed, no verbosity row to anchor any dimension.
- **Vendor's own API catalogue:** `platform.kimi.ai/docs/models` (fetched today) lists the current multimodal lineup as **`kimi-k3`, `kimi-k2.7-code`, `kimi-k2.7-code-highspeed`, `kimi-k2.6`** only. **`kimi-k2.8-preview` is not an API-documented model** — consistent with the September 11, 2026 in-place swap behind the unchanged `kimi-for-coding` alias inside Kimi Code. The quickstart names no benchmark table for it.
- **Third-party directories:** secondary cards (ZenMux, models.dev, TrustList, llm-releases, Wokey, kie.ai, HasBeenReleased) repeat only the release fact, the 1,048,576-token context, the `kimi-for-coding` ID and the vendor's qualitative claim ("overall performance close to K3 with more efficient thinking"); their price figures conflict with each other (e.g. **$0.30/$1.20 vs an "official reference" of $1/$4**) and none is attributable to Moonshot. Reviews published the same week state plainly that **"Moonshot has not published an independent benchmark table for K2.8 Preview in the entry"**.
- **Numeric results surfaced in searches all resolve to K2.5 / K2.6 / K2.7 Code / K3** (e.g. SWE-bench Verified 80.2 and Terminal-Bench 2.0 66.7 are K2.6 rows). Cross-variant borrowing remains disallowed, so **Tool / Reasoning / Coding still have zero verified rows** and a five-dimension mean cannot be produced.

Conclusion: new *verified* evidence exists only on the **identity/spec** axis (three aggregators and the vendor model list now positively confirm the ID is unmeasured and not API-documented); nothing new is verified on the **capability** axis. Per `RULES.md` (never fabricate, self-exclusion when `Overall` is not computable) this file stays `.md.excluded`, with its original 2026-10-02 findings unmodified. Re-run this check if Moonshot publishes a K2.8 benchmark table or an aggregator opens a measured page.
