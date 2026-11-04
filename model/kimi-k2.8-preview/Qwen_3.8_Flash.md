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
- **IDs:** `moonshotai/kimi-k2.8-preview` (gateway form); users keep the `kimi-for-coding` route ID which auto-points to K2.8.
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
