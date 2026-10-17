# Kimi K2.8 Preview — findings by Qwen 3.8 Flash

- Source: Moonshot AI (`moonshotai/kimi-k2.8-preview`), cross-checked against ZenMux, OpenCode Data, llm-stats, kie.ai
- Date: 2026-10-17 (UTC)
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

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-17
- Method: public internet research — ZenMux live provider/benchmark panel, OpenCode Data comparison, llm-stats model page, kie.ai hands-on roundup; scores are normalized 1–100 interpretations, not official vendor scores. Coding/reasoning rows are provisional (Preview, no reproduced absolute benchmarks yet).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
